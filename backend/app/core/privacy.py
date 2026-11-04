"""Local, deterministic PII scrubbing for genetic reports.

The scrubber is deliberately regex/rule based and runs *before* any data can
leave the machine. It removes patient identifiers while preserving the only
clinically useful payload for interpretation: gene symbols, HGVS variants,
dbSNP rsIDs and zygosity.

Design principles
-----------------
* **Deterministic** - same input always produces the same output.
* **Offline** - no network calls, no third-party NLP models.
* **Fail-safe** - unknown identifiers are replaced with visible placeholders
  rather than silently dropped, so the user can audit what happened.
"""
from __future__ import annotations

import re
from dataclasses import dataclass
from typing import Dict, List, Optional, Pattern, Sequence, Tuple

from backend.app.core.dataset import get_known_genes, known_symbols


def _ordered_gene_pattern(genes: Optional[Sequence[str]] = None) -> str:
    symbols = list(genes) if genes is not None else list(known_symbols())
    ordered = sorted(
        {s.strip().upper() for s in symbols if s and s.strip()},
        key=lambda s: (-len(s), s),
    )
    return "|".join(re.escape(sym) for sym in ordered)


def build_gene_regex(genes: Optional[Sequence[str]] = None) -> Pattern[str]:
    """Build a longest-first, re.escape-safe gene symbol regex from dataset symbols."""
    pattern = _ordered_gene_pattern(genes)
    return re.compile(
        r"(?<![A-Za-z0-9])(?:" + pattern + r")(?![A-Za-z0-9])",
        re.IGNORECASE,
    )


def build_star_allele_regex(genes: Optional[Sequence[str]] = None) -> Pattern[str]:
    """Build a star-allele / diplotype regex with an optional known-gene prefix."""
    pattern = _ordered_gene_pattern(genes)
    return re.compile(
        r"(?<![A-Za-z0-9.])(?:(?:" + pattern + r")\s*)?"
        r"\*\d{1,4}(?::\d{1,4})?[A-Za-z]?"
        r"(?:\s*/\s*\*\d{1,4}(?::\d{1,4})?[A-Za-z]?)?"
        r"(?![A-Za-z0-9])",
        re.IGNORECASE,
    )


KNOWN_GENES: Tuple[str, ...] = get_known_genes()

PLACEHOLDER_NAME = "[姓名已脱敏]"
PLACEHOLDER_ID = "[身份证号已脱敏]"
PLACEHOLDER_MOBILE = "[手机号已脱敏]"
PLACEHOLDER_PHONE = "[联系电话已脱敏]"
PLACEHOLDER_RECORD = "[病历号已脱敏]"
PLACEHOLDER_HOSPITAL = "[医院名称已脱敏]"

_ZYGOSITY_MAP = {
    "杂合": "杂合",
    "雜合": "雜合",
    "纯合": "纯合",
    "純合": "純合",
    "半合子": "半合子",
    "heterozygous": "杂合",
    "homozygous": "纯合",
    "hemizygous": "半合子",
}

_GENE_RE = build_gene_regex(KNOWN_GENES)
_CDNA_RE = re.compile(
    r"(?<![A-Za-z0-9])c\.\d+(?:[+\-]\d+)?(?:_\d+)?"
    r"(?:[ACGT]>[ACGT]|del[ACGT]*|dup[ACGT]*|ins[ACGT]+|delins[ACGT]+|inv)?"
    r"(?![A-Za-z0-9])",
    re.IGNORECASE,
)
_PROTEIN_RE = re.compile(
    r"(?<![A-Za-z0-9])p\.[A-Z][a-z]{2}\d+"
    r"(?:[A-Z][a-z]{2})?(?:fs(?:Ter|\*)?\d*)?(?:Ter|\*)?"
    r"(?![A-Za-z0-9])",
    re.IGNORECASE,
)
_LEGACY_PROTEIN_RE = re.compile(r"(?<![A-Za-z0-9])[A-Z]\d{2,4}[A-Z](?![A-Za-z0-9])")
_EXON_RE = re.compile(
    r"(?<![A-Za-z0-9])(?:Ex|Exon)\s*\d+\s*(?:del(?:etion)?|ins(?:ertion)?|dup)?"
    r"(?![A-Za-z0-9])",
    re.IGNORECASE,
)
_STAR_ALLELE_RE = build_star_allele_regex(KNOWN_GENES)
_RSID_RE = re.compile(r"(?<![A-Za-z0-9])rs\d+(?![A-Za-z0-9])", re.IGNORECASE)
_ZYGOSITY_RE = re.compile(
    r"(杂合|雜合|纯合|純合|半合子|heterozygous|homozygous|hemizygous)", re.IGNORECASE
)

# --- PII patterns -----------------------------------------------------------

_NAME_ZH_LABELED = re.compile(
    r"(?P<label>(?:患者姓名|受检者姓名|受檢者姓名|受检者|受檢者|受检人|受檢人|病人姓名|病人|姓名))"
    r"\s*[:：]\s*(?P<value>[^\s,，;；()（）\[\]]+)"
)
_NAME_EN_LABELED = re.compile(
    r"(?P<label>(?:(?<!Gene )(?<!gene )(?<!Drug )(?<!drug )"
    r"(?:Patient\s*Name|Patient|Name)))"
    r"\s*[:：]\s*(?P<value>(?:[A-Z][A-Za-z'\-]+)(?:\s+[A-Z][A-Za-z'\-]+){0,3})",
    re.IGNORECASE,
)
_NAME_BEFORE_PII = re.compile(
    r"(?P<value>[\u4e00-\u9fa5]{2,4})"
    r"(?=\s*[（(]\s*(?:身份证|身份證|身分證|证件|證件|手机|手機|电话|電話|联系方式|聯絡方式|聯繫方式|住院号|住院號|病历号|病歷號|样本号|樣本號|样本编号|樣本編號|条码|條碼))"
)
_NAME_AFTER_SAMPLE_LABEL = re.compile(
    r"(?P<label>(?:测试样本|測試樣本|样本|樣本)\s*\d*\s*[:：]\s*)"
    r"(?P<value>[\u4e00-\u9fa5]{2,4})"
    r"(?=\s*[（(]\s*(?:身份证|身份證|身分證|证件|證件|手机|手機|电话|電話|联系方式|聯絡方式|聯繫方式|住院号|住院號|病历号|病歷號|样本号|樣本號|条码|條碼))"
)

# Common Chinese surnames (Simplified + Traditional) help catch an unlabeled name
# that is followed by a bare ID/phone number (e.g. "张三 110101199003071234").
_COMMON_SURNAMES = (
    "王李张張刘劉陈陳杨楊黄黃赵趙吴吳周徐孙孫马馬朱胡郭何高林罗羅郑鄭梁谢謝宋唐许許韩韓冯馮邓鄧曹彭曾肖蕭田董袁潘于於蒋蔣蔡余餘杜叶葉程苏蘇魏吕呂丁任沈姚卢盧姜崔钟鍾谭譚陆陸汪范範金石廖贾賈夏韦韋付傅方白邹鄒孟熊秦邱江尹薛闫閻段雷侯龙龍史陶黎贺賀顾顧毛郝龚龔邵万萬钱錢严嚴覃武戴莫孔向汤湯"
)
_NAME_BEFORE_BARE_ID = re.compile(
    r"(?P<value>(?:[" + _COMMON_SURNAMES + r"])[\u4e00-\u9fa5]{1,2})"
    r"(?=\s*[,，]?\s*(?:\d{17}[\dXx]|\d{15}|1[3-9]\d{9}|09\d{8})(?!\d))"
)
_NAME_EN_BEFORE_BARE_ID = re.compile(
    r"(?P<value>(?:[A-Z][a-z'\-]+)(?:\s+[A-Z][a-z'\-]+){1,3})"
    r"(?=\s*[,，]?\s*(?:\d{17}[\dXx]|\d{15}|1[3-9]\d{9}|09\d{8})(?!\d))"
)

_RECORD_NUMBER = re.compile(
    r"(?P<label>(?:病历号|病歷號|住院号|住院號|门诊号|門診號|病案号|病案號|样本编号|樣本編號|样本号|樣本號|样本条码|樣本條碼|条码号|條碼號|条形码|條形碼|"
    r"检验编号|檢驗編號|送检编号|送檢編號|Medical\s*Record(?:\s*Number)?|MRN|Sample\s*(?:ID|No\.?)|Barcode))"
    r"\s*[:：]?\s*(?P<value>[A-Za-z0-9][A-Za-z0-9\-]{2,29})",
    re.IGNORECASE,
)

_HOSPITAL_LABELED = re.compile(
    r"(?P<label>(?:医院名称|醫院名稱|就诊医院|就診醫院|送检医院|送檢醫院|送检单位|送檢單位|检测单位|檢測單位|检验单位|檢驗單位|采样单位|採樣單位|"
    r"检测机构|檢測機構|检验机构|檢驗機構|医学检验所|醫學檢驗所|检验所|檢驗所|实验室|實驗室|医院|醫院|"
    r"Hospital|Laboratory|Clinic|Medical\s+Center))"
    r"\s*[:：]\s*(?P<value>[^\s,，;；\n]+)",
    re.IGNORECASE,
)

_ID_18 = re.compile(r"(?<!\d)\d{17}[\dXx](?!\d)")
_ID_15 = re.compile(r"(?<!\d)\d{15}(?!\d)")
_ID_TW = re.compile(r"(?<![A-Za-z0-9])[A-Z][12]\d{8}(?![A-Za-z0-9])")
_MOBILE = re.compile(r"(?<!\d)(?:1[3-9]\d{9}|09\d{8})(?!\d)")
_LANDLINE = re.compile(r"(?<!\d)0\d{2,3}[-—－]?\d{7,8}(?!\d)")

_HOSPITAL_ZH = re.compile(
    r"(?:(?<=就诊于)|(?<=就診於)|(?<=送检至)|(?<=送檢至))?[\u4e00-\u9fa5]{2,16}?"
    r"(?:医学检验实验室|醫學檢驗實驗室|医学检验所|醫學檢驗所|检验中心|檢驗中心|检验所|檢驗所|诊断中心|診斷中心|"
    r"医院|醫院|保健院|卫生院|衛生院|病理科|检验科|檢驗科|实验室|實驗室)"
)
_HOSPITAL_EN = re.compile(
    r"(?:[A-Z][A-Za-z.'\-]*\s+){1,5}"
    r"(?:Hospital|Medical\s+Center|Medical\s+Centre|Laboratory|Clinic|Institute|Healthcare)",
    re.IGNORECASE,
)


@dataclass(frozen=True)
class ScrubReport:
    """Result of a local scrubbing pass."""

    scrubbed_text: str
    removed_counts: Dict[str, int]
    genes: Tuple[str, ...]
    variants: Tuple[str, ...]
    rsids: Tuple[str, ...]
    zygosity: Optional[str]

    @property
    def detected_gene(self) -> Optional[str]:
        return self.genes[0] if self.genes else None

    @property
    def detected_variant(self) -> Optional[str]:
        return self.variants[0] if self.variants else None

    @property
    def pii_removed(self) -> bool:
        return any(count > 0 for count in self.removed_counts.values())

    @property
    def total_removed(self) -> int:
        return sum(self.removed_counts.values())

    def as_dict(self) -> Dict[str, object]:
        return {
            "scrubbed_text": self.scrubbed_text,
            "removed_counts": dict(self.removed_counts),
            "total_removed": self.total_removed,
            "genes": list(self.genes),
            "variants": list(self.variants),
            "rsids": list(self.rsids),
            "zygosity": self.zygosity,
            "detected_gene": self.detected_gene,
            "detected_variant": self.detected_variant,
            "pii_removed": self.pii_removed,
        }


def _dedupe(values: List[str]) -> Tuple[str, ...]:
    seen = set()
    ordered: List[str] = []
    for value in values:
        key = value.upper()
        if key not in seen:
            seen.add(key)
            ordered.append(value)
    return tuple(ordered)


class LocalPIIScrubber:
    """Deterministic local PII scrubber + clinical entity extractor."""

    KNOWN_GENES = KNOWN_GENES
    PLACEHOLDERS = {
        "name": PLACEHOLDER_NAME,
        "id_number": PLACEHOLDER_ID,
        "mobile": PLACEHOLDER_MOBILE,
        "phone": PLACEHOLDER_PHONE,
        "record_number": PLACEHOLDER_RECORD,
        "hospital": PLACEHOLDER_HOSPITAL,
    }

    # ---------------------------------------------------------------- public
    def scrub(self, text: str) -> str:
        """Return text with all supported PII replaced by placeholders."""
        return self.scrub_with_report(text).scrubbed_text

    def scrub_text(self, text: str) -> str:
        """Alias of :meth:`scrub` for readability at call sites."""
        return self.scrub(text)

    def scrub_with_report(self, text: str) -> ScrubReport:
        raw = "" if text is None else str(text)
        counts: Dict[str, int] = {
            "name": 0,
            "id_number": 0,
            "mobile": 0,
            "phone": 0,
            "record_number": 0,
            "hospital": 0,
        }
        working = raw

        working = self._sub_labeled(
            working, _NAME_ZH_LABELED, "name", counts, PLACEHOLDER_NAME
        )
        working = self._sub_labeled(
            working, _NAME_EN_LABELED, "name", counts, PLACEHOLDER_NAME
        )
        working = self._sub_labeled(
            working, _NAME_AFTER_SAMPLE_LABEL, "name", counts, PLACEHOLDER_NAME
        )
        working = self._sub(
            working, _NAME_BEFORE_PII, "name", counts, PLACEHOLDER_NAME
        )
        working = self._sub(
            working, _NAME_BEFORE_BARE_ID, "name", counts, PLACEHOLDER_NAME
        )
        working = self._sub(
            working, _NAME_EN_BEFORE_BARE_ID, "name", counts, PLACEHOLDER_NAME
        )
        working = self._sub_labeled(
            working, _RECORD_NUMBER, "record_number", counts, PLACEHOLDER_RECORD
        )
        working = self._sub(working, _ID_18, "id_number", counts, PLACEHOLDER_ID)
        working = self._sub(working, _ID_15, "id_number", counts, PLACEHOLDER_ID)
        working = self._sub(working, _ID_TW, "id_number", counts, PLACEHOLDER_ID)
        working = self._sub(working, _MOBILE, "mobile", counts, PLACEHOLDER_MOBILE)
        working = self._sub(working, _LANDLINE, "phone", counts, PLACEHOLDER_PHONE)
        working = self._sub_labeled(
            working, _HOSPITAL_LABELED, "hospital", counts, PLACEHOLDER_HOSPITAL
        )
        working = self._sub(working, _HOSPITAL_ZH, "hospital", counts, PLACEHOLDER_HOSPITAL)
        working = self._sub(working, _HOSPITAL_EN, "hospital", counts, PLACEHOLDER_HOSPITAL)

        genes, variants, rsids, zygosity = self.extract_entities(raw)
        return ScrubReport(
            scrubbed_text=working,
            removed_counts=counts,
            genes=genes,
            variants=variants,
            rsids=rsids,
            zygosity=zygosity,
        )

    # ``analyze`` is a convenient alias used by services/endpoints.
    analyze = scrub_with_report

    def extract_entities(
        self, text: str
    ) -> Tuple[Tuple[str, ...], Tuple[str, ...], Tuple[str, ...], Optional[str]]:
        """Extract genes, variants, rsIDs and zygosity from *original* text."""
        raw = "" if text is None else str(text)
        gene_re = build_gene_regex()
        genes = _dedupe([match.upper() for match in gene_re.findall(raw)])

        variant_hits: List[str] = []
        star_re = build_star_allele_regex()
        for pattern in (_CDNA_RE, _PROTEIN_RE, _LEGACY_PROTEIN_RE, _EXON_RE, star_re):
            variant_hits.extend(match.group(0) for match in pattern.finditer(raw))
        # Preserve the textual order of first appearance.
        variants = _dedupe(variant_hits)

        rsids = _dedupe([match.lower() for match in _RSID_RE.findall(raw)])

        zygosity = None
        match = _ZYGOSITY_RE.search(raw)
        if match:
            zygosity = _ZYGOSITY_MAP.get(match.group(1).lower(), match.group(1))

        return genes, variants, rsids, zygosity

    def detect_entities(self, text: str) -> Dict[str, object]:
        """Dictionary form of :meth:`extract_entities` for simple callers."""
        genes, variants, rsids, zygosity = self.extract_entities(text)
        return {
            "genes": list(genes),
            "variants": list(variants),
            "rsids": list(rsids),
            "zygosity": zygosity,
        }

    def detect_gene(self, text: str) -> Optional[str]:
        genes, _, _, _ = self.extract_entities(text)
        return genes[0] if genes else None

    def contains_pii(self, text: str) -> bool:
        return self.scrub_with_report(text).pii_removed

    # --------------------------------------------------------------- private
    @staticmethod
    def _sub(
        text: str,
        pattern: Pattern[str],
        key: str,
        counts: Dict[str, int],
        replacement: str,
    ) -> str:
        def _replace(_match: re.Match[str]) -> str:
            counts[key] += 1
            return replacement

        return pattern.sub(_replace, text)

    @staticmethod
    def _sub_labeled(
        text: str,
        pattern: Pattern[str],
        key: str,
        counts: Dict[str, int],
        replacement: str,
    ) -> str:
        def _replace(match: re.Match[str]) -> str:
            counts[key] += 1
            label = match.group("label")
            separator = "：" if re.search(r"[:：]", label) is None else ""
            return f"{label}{separator}{replacement}"

        return pattern.sub(_replace, text)
