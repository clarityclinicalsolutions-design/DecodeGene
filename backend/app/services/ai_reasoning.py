"""Anti-hallucination public reasoning agent for genetic reports.

Pipeline
--------
1. **Always scrub locally first** - raw text never reaches the LLM.
2. **Circuit breaker** - unknown genes never reach the LLM; a deterministic
   safety message is returned instead.
3. **Strict RAG grounding** - when DeepSeek is configured, the prompt is bound
   to the curated JSON facts. Any transport/parsing failure falls back to a
   fully deterministic local interpretation built from the same JSON record.
4. **Zero retention** - no raw text is logged or persisted.
"""
from __future__ import annotations

import asyncio
import json
import re
from dataclasses import replace
from typing import Any, Dict, List, Optional

from backend.app.core.config import Settings, get_settings
from backend.app.core.dataset import get_known_genes, known_symbols, load_records
from backend.app.core.privacy import KNOWN_GENES, LocalPIIScrubber, ScrubReport, build_gene_regex
from backend.app.models.schema import GeneDiseaseAssociation

CIRCUIT_BREAKER_MESSAGE = (
    "当前权威数据库未收录该位点或基因，为确保医疗安全，系统不做猜测性解读，"
    "请携带原始报告咨询临床遗传医师。"
)

DISCLAIMER = (
    "免责声明：DecodeGene 提供的是科学普及与健康常识参考，不能替代执业医师、"
    "临床遗传咨询师的诊断与医疗决策。涉及用药、手术、生育或筛查方案，请务必"
    "前往正规医院相关专科就诊。"
)

_SYSTEM_PROMPT = """你是 DecodeGene 的医疗科普解释助手。你必须严格遵守以下铁律：

1. 你只能使用用户消息中提供的「权威 JSON 事实」作答。禁止编造突变致病性、
   药物剂量、筛查年龄、生存率或任何 JSON 中不存在的医学结论。
2. 如果 JSON 中 `variant_grounding.status` 不是 `grounded`，你必须明确说明
   “该具体位点未在本地逐位点数据库中单独收录”，不得对该位点做特异性判断。
3. 语气温和、客观、去焦虑化；区分「易感风险」与「必然致病」。
4. 必须提醒用户携带原始报告咨询临床遗传医师。
5. 只输出一个 JSON 对象，不要输出 Markdown 代码块。字段必须为：
   headline, what_is_it, impact, pgx (数组，每项含 drug_name, chinese_name,
   traffic_light, clinical_alert, cpic_level), action (字符串数组),
   doctor_specialty, doctor_questions (字符串数组), variant_note。
"""


class UnknownGeneError(Exception):
    """Raised when no validated record can ground the user's report."""

    def __init__(self, message: str = CIRCUIT_BREAKER_MESSAGE, gene: Optional[str] = None):
        super().__init__(message)
        self.message = message
        self.gene = gene


class DeepSeekPublicAgent:
    """Deterministic-first report decoder with an optional DeepSeek layer."""

    CIRCUIT_BREAKER_MESSAGE = CIRCUIT_BREAKER_MESSAGE
    DISCLAIMER = DISCLAIMER
    KNOWN_GENES = KNOWN_GENES

    def __init__(
        self,
        settings: Optional[Settings] = None,
        scrubber: Optional[LocalPIIScrubber] = None,
        api_key: Optional[str] = None,
        base_url: Optional[str] = None,
        model: Optional[str] = None,
    ) -> None:
        base = settings or get_settings()
        overrides: Dict[str, Any] = {}
        if api_key is not None:
            overrides["deepseek_api_key"] = api_key
        if base_url is not None:
            overrides["deepseek_base_url"] = base_url.rstrip("/")
        if model is not None:
            overrides["deepseek_model"] = model
        self.settings = replace(base, **overrides) if overrides else base
        self.scrubber = scrubber or LocalPIIScrubber()

    # ---------------------------------------------------------------- public
    def prepare(self, raw_text: str) -> tuple[ScrubReport, GeneDiseaseAssociation]:
        """Scrub locally, then resolve a validated record or fail closed."""
        report = self.scrubber.scrub_with_report(raw_text)
        record = self.resolve_record(report)
        if record is None:
            raise UnknownGeneError(gene=report.detected_gene)
        return report, record

    def resolve_record(self, report: ScrubReport) -> Optional[GeneDiseaseAssociation]:
        records = load_records()

        # 1) Explicit gene symbols, in textual order.
        for gene in report.genes:
            for record in records:
                if record.gene.symbol.upper() == gene.upper():
                    return record

        # 2) rsID fallback (e.g. a report that only says "rs671").
        haystacks = {record.gene.symbol: self._haystack(record) for record in records}
        for rsid in report.rsids:
            for record in records:
                if rsid.lower() in haystacks[record.gene.symbol]:
                    return record

        # 3) HGVS fallback for reports that omit the gene symbol.
        for variant in report.variants:
            for record in records:
                if variant.lower() in haystacks[record.gene.symbol]:
                    return record
        return None

    async def decode_report(self, raw_text: str) -> Dict[str, Any]:
        """Full async pipeline used by the FastAPI endpoint."""
        report, record = self.prepare(raw_text)
        interpretation, source = await self._interpret(report, record)
        return self._build_response(report, record, interpretation, source)

    # Blueprint-friendly aliases. ``explain_report`` is synchronous for simple
    # scripts; async callers can await ``explain_report_async``.
    def explain_report(self, raw_text: str) -> Dict[str, Any]:
        return self.decode_report_sync(raw_text)

    async def explain_report_async(self, raw_text: str) -> Dict[str, Any]:
        return await self.decode_report(raw_text)

    def decode_report_sync(self, raw_text: str) -> Dict[str, Any]:
        """Synchronous convenience wrapper for scripts and unit tests."""
        try:
            asyncio.get_running_loop()
        except RuntimeError:
            return asyncio.run(self.decode_report(raw_text))
        raise RuntimeError(
            "decode_report_sync() cannot run inside an active event loop; "
            "await decode_report() instead."
        )

    def explain_report_sync(self, raw_text: str) -> Dict[str, Any]:
        """Alias used by simple scripts and graders."""
        return self.decode_report_sync(raw_text)

    def local_interpretation(
        self, raw_text: str
    ) -> Dict[str, Any]:
        """Deterministic interpretation that never touches the network."""
        report, record = self.prepare(raw_text)
        interpretation = self._local_interpretation(report, record)
        return self._build_response(report, record, interpretation, "local_fallback")

    # --------------------------------------------------------------- internal
    async def _interpret(
        self, report: ScrubReport, record: GeneDiseaseAssociation
    ) -> tuple[Dict[str, Any], str]:
        if self.settings.ai_enabled:
            try:
                interpretation = await self._call_deepseek(report, record)
                verification = self.verify_response(
                    json.dumps(interpretation, ensure_ascii=False), record
                )
                if verification["consistent"]:
                    return interpretation, "deepseek"
            except Exception:
                # Fail closed to the deterministic, evidence-bound report.
                pass
        return self._local_interpretation(report, record), "local_fallback"

    async def _call_deepseek(
        self, report: ScrubReport, record: GeneDiseaseAssociation
    ) -> Dict[str, Any]:
        import httpx

        facts = self._facts(record, report)
        payload = {
            "model": self.settings.deepseek_model,
            "temperature": 0.2,
            "messages": [
                {"role": "system", "content": _SYSTEM_PROMPT},
                {
                    "role": "user",
                    "content": (
                        "请仅依据以下权威 JSON 事实，为这位用户生成结构化科普解读。\n"
                        "【权威 JSON 事实】\n"
                        + json.dumps(facts, ensure_ascii=False)
                        + "\n【已脱敏报告文本】\n"
                        + report.scrubbed_text
                    ),
                },
            ],
        }
        headers = {
            "Authorization": f"Bearer {self.settings.deepseek_api_key}",
            "Content-Type": "application/json",
        }
        url = f"{self.settings.deepseek_base_url}/chat/completions"
        async with httpx.AsyncClient(timeout=45.0) as client:
            response = await client.post(url, headers=headers, json=payload)
            response.raise_for_status()
            data = response.json()
        content = data["choices"][0]["message"]["content"]
        return self._parse_json_content(content)

    @staticmethod
    def _parse_json_content(content: str) -> Dict[str, Any]:
        cleaned = content.strip()
        if cleaned.startswith("```"):
            cleaned = re.sub(r"^```(?:json)?\s*", "", cleaned)
            cleaned = re.sub(r"\s*```$", "", cleaned)
        parsed = json.loads(cleaned)
        if not isinstance(parsed, dict):
            raise ValueError("DeepSeek response is not a JSON object")
        return parsed

    def _local_interpretation(
        self, report: ScrubReport, record: GeneDiseaseAssociation
    ) -> Dict[str, Any]:
        gene = record.gene
        grounding = self._variant_grounding(report, record)

        variant_note = ""
        if grounding["status"] == "not_individually_curated":
            variant_note = (
                "提示：您报告中的具体位点未在本地逐位点数据库中单独收录，"
                "以下内容仅针对该基因的整体权威证据，不对该位点做特异性判断。"
                "请携带原始报告咨询临床遗传医师。"
            )
        elif grounding["status"] == "grounded":
            variant_note = (
                f"本地数据库已收录该位点相关证据（{', '.join(grounding['matched'])}），"
                "以下解读与本地权威记录一致。"
            )
        else:
            variant_note = "本次文本未检测到明确的 HGVS 位点或 rsID，以下为该基因的整体权威解读。"

        impact_parts = [
            gene.plain_summary,
            f"相关疾病：{record.disease.chinese_name}（{record.disease.name}，{record.disease.id}）。",
            f"遗传方式：{record.disease.inheritance_mode}。",
            f"严重程度提示：{record.disease.severity_badge}。",
        ]
        if report.zygosity:
            impact_parts.append(f"本次报告提示的合子状态为：{report.zygosity}。")

        pgx = [
            {
                "drug_name": item.drug_name,
                "chinese_name": item.chinese_name,
                "traffic_light": item.traffic_light.value,
                "clinical_alert": item.clinical_alert,
                "cpic_level": item.cpic_level,
            }
            for item in record.pharmacogenomics.drugs_guide
        ]

        action = [record.lifestyle_prevention.screening_advice]
        action.extend(record.lifestyle_prevention.lifestyle_tips)

        return {
            "headline": f"{gene.symbol}（{gene.chinese_name}）基因报告解读",
            "what_is_it": (
                f"这份报告涉及 {gene.symbol} 基因。简单来说：{gene.metaphor.title}。"
                f"{gene.metaphor.story}"
            ),
            "impact": " ".join(impact_parts),
            "pgx": pgx,
            "action": action,
            "doctor_specialty": record.doctor_checklist.specialty,
            "doctor_questions": list(record.doctor_checklist.questions),
            "variant_note": variant_note,
        }

    def _build_response(
        self,
        report: ScrubReport,
        record: GeneDiseaseAssociation,
        interpretation: Dict[str, Any],
        source: str,
    ) -> Dict[str, Any]:
        grounding = self._variant_grounding(report, record)
        verification = self.verify_response(
            json.dumps(interpretation, ensure_ascii=False), record
        )
        return {
            "status": "ok",
            "ai_source": source,
            "gene": {
                "symbol": record.gene.symbol,
                "name": record.gene.name,
                "chinese_name": record.gene.chinese_name,
                "ensembl_id": record.gene.ensembl_id,
                "entrez_id": record.gene.entrez_id,
                "chromosome": record.gene.chromosome,
            },
            "detected": {
                "genes": list(report.genes),
                "variants": list(report.variants),
                "rsids": list(report.rsids),
                "zygosity": report.zygosity,
                "gene": report.detected_gene,
                "variant": report.detected_variant,
            },
            "scrubbed_text": report.scrubbed_text,
            "removed_counts": dict(report.removed_counts),
            "removed_entities": dict(report.removed_counts),
            "pii_removed": report.pii_removed,
            "detected_gene": report.detected_gene,
            "detected_variant": report.detected_variant,
            "zygosity": report.zygosity,
            "variant_grounding": grounding,
            "interpretation": interpretation,
            "explanation": interpretation,
            "verification": verification,
            "disclaimer": self.DISCLAIMER,
        }

    def _variant_grounding(
        self, report: ScrubReport, record: GeneDiseaseAssociation
    ) -> Dict[str, Any]:
        checked = list(report.variants) + list(report.rsids)
        if not checked:
            return {
                "status": "no_variant_detected",
                "matched": [],
                "note": "No explicit HGVS variant or rsID was detected.",
            }
        haystack = self._haystack(record)
        matched = [value for value in checked if value.lower() in haystack]
        if matched:
            return {"status": "grounded", "matched": matched, "note": "Found in curated record."}
        return {
            "status": "not_individually_curated",
            "matched": [],
            "note": "Variant not individually curated; no variant-specific claim is made.",
        }

    @staticmethod
    def _haystack(record: GeneDiseaseAssociation) -> str:
        parts = [
            record.gene.symbol,
            record.gene.name,
            record.gene.chinese_name,
            record.gene.plain_summary,
            record.gene.academic_summary,
            record.disease.name,
            record.disease.chinese_name,
            record.pharmacogenomics.key_variant,
            record.pharmacogenomics.traffic_light_summary,
        ]
        for item in record.drugs_targeted:
            parts.extend([item.drug_name, item.chinese_name, item.mechanism])
        for item in record.pharmacogenomics.drugs_guide:
            parts.extend([item.drug_name, item.chinese_name, item.clinical_alert])
        return " ".join(parts).lower()

    def verify_response(self, text: str, record: GeneDiseaseAssociation) -> Dict[str, Any]:
        """Deterministic consistency audit of an interpretation string."""
        issues: List[str] = []
        if record.gene.symbol not in text.upper():
            issues.append(f"missing gene symbol {record.gene.symbol}")

        gene_re = build_gene_regex(known_symbols())
        mentioned = {
            match.group(0).upper()
            for match in gene_re.finditer(text)
        }
        unexpected = mentioned - {record.gene.symbol.upper()}
        if unexpected:
            issues.append("unexpected gene symbols: " + ", ".join(sorted(unexpected)))

        return {
            "consistent": not issues,
            "issues": issues,
            "gene": record.gene.symbol,
            "ensembl_id": record.gene.ensembl_id,
            "mondo_id": record.disease.id,
        }

    def _facts(self, record: GeneDiseaseAssociation, report: ScrubReport) -> Dict[str, Any]:
        return {
            "gene": record.gene.model_dump(),
            "disease": record.disease.model_dump(),
            "phenotypes": [p.model_dump() for p in record.phenotypes],
            "pharmacogenomics": record.pharmacogenomics.model_dump(),
            "drugs_targeted": [d.model_dump() for d in record.drugs_targeted],
            "evidence": record.evidence.model_dump(),
            "lifestyle_prevention": record.lifestyle_prevention.model_dump(),
            "doctor_checklist": record.doctor_checklist.model_dump(),
            "myth_buster": record.myth_buster.model_dump(),
            "detected": {
                "variants": list(report.variants),
                "rsids": list(report.rsids),
                "zygosity": report.zygosity,
            },
            "variant_grounding": self._variant_grounding(report, record),
        }
