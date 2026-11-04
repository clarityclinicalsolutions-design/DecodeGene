"""Exact Mendelian and X-linked inheritance probability calculator.

The calculator enumerates parental genotype distributions and returns the
expected child disease/carrier percentages. Assumptions are intentionally
simple and explicit:

* Autosomal dominant (AD): an affected parent is assumed heterozygous (Dd);
  a "carrier" is a heterozygous but currently unaffected parent (reduced
  penetrance). Heterozygous children are counted as affected.
* Autosomal recessive (AR): D is the normal allele, d is the disease allele.
* X-linked dominant (XD) / recessive (XR): males are hemizygous, so a male
  "carrier" is treated as affected. Child sex is assumed 50/50 because the
  query does not request a specific sex.
* No new mutations, no mosaicism, no population allele frequencies.
"""
from __future__ import annotations

from typing import Dict, Iterable, List, Tuple

from backend.app.models.schema import FamilyInheritanceQuery, FamilyInheritanceResult

Genotype = Tuple[str, str]

PATTERN_LABELS: Dict[str, str] = {
    "AD": "常染色体显性遗传 (Autosomal Dominant, AD)",
    "AR": "常染色体隐性遗传 (Autosomal Recessive, AR)",
    "XD": "X 连锁显性遗传 (X-Linked Dominant, XD)",
    "XR": "X 连锁隐性遗传 (X-Linked Recessive, XR)",
}

STATUS_LABELS: Dict[str, str] = {
    "unaffected": "健康/未患病",
    "carrier": "携带者",
    "affected": "患病",
}

_DISCLAIMER = (
    "本结果基于理想孟德尔遗传模型推算，未考虑不完全外显率、新发突变、"
    "生殖细胞嵌合及人群等位基因频率，仅供健康科普与就医沟通参考，"
    "不能替代临床遗传咨询。"
)


class InheritanceCalculator:
    """Stateless calculator for AD / AR / XD / XR family risk."""

    SUPPORTED_PATTERNS = ("AD", "AR", "XD", "XR")
    SUPPORTED_STATUSES = ("unaffected", "carrier", "affected")

    # ---------------------------------------------------------------- public
    def calculate(
        self,
        query: FamilyInheritanceQuery | Dict[str, str] | str | None = None,
        father_status: str | None = None,
        mother_status: str | None = None,
        *,
        pattern: str | None = None,
    ) -> FamilyInheritanceResult:
        """Calculate child risk.

        Accepts a ``FamilyInheritanceQuery``, a plain dict, or the convenience
        form ``calculate("AR", "carrier", "carrier")`` /
        ``calculate(pattern="AR", father_status="carrier", ...)``.
        """
        if query is None and pattern is not None:
            query = pattern
        if isinstance(query, str):
            query = FamilyInheritanceQuery(
                pattern=query,  # type: ignore[arg-type]
                father_status=father_status or "unaffected",  # type: ignore[arg-type]
                mother_status=mother_status or "unaffected",  # type: ignore[arg-type]
            )
        elif isinstance(query, dict):
            query = FamilyInheritanceQuery.model_validate(query)
        elif query is None:
            raise TypeError("calculate() requires a query or a pattern")

        pattern_value = query.pattern
        father = query.father_status
        mother = query.mother_status

        if pattern_value in ("AD", "AR"):
            disease, carrier = self._autosomal(pattern_value, father, mother)
            sex_note = ""
        else:
            disease, carrier = self._x_linked(pattern_value, father, mother)
            sex_note = "（已按男女各 50% 的出生概率加权平均）"

        disease = round(disease, 2)
        carrier = round(carrier, 2)
        unaffected = round(max(0.0, 100.0 - disease - carrier), 2)

        return FamilyInheritanceResult(
            pattern=pattern_value,
            father_status=father,
            mother_status=mother,
            child_disease_risk_pct=disease,
            child_carrier_risk_pct=carrier,
            child_unaffected_pct=unaffected,
            risk_level=self._risk_level(disease),
            plain_explanation=self._explain(
                pattern_value, father, mother, disease, carrier, unaffected, sex_note
            ),
            details={
                "pattern_label": PATTERN_LABELS[pattern_value],
                "father_status_label": STATUS_LABELS[father],
                "mother_status_label": STATUS_LABELS[mother],
                "assumption": "affected AD parent assumed heterozygous; male X-linked carrier treated as affected",
            },
        )

    @classmethod
    def calculate_risk(
        cls,
        pattern: str,
        father_status: str = "unaffected",
        mother_status: str = "unaffected",
    ) -> Tuple[float, float]:
        """Return ``(disease_pct, carrier_pct)`` for simple callers."""
        result = cls().calculate(pattern, father_status, mother_status)
        return result.child_disease_risk_pct, result.child_carrier_risk_pct

    # --------------------------------------------------------------- private
    @staticmethod
    def _autosomal(
        pattern: str, father_status: str, mother_status: str
    ) -> Tuple[float, float]:
        if pattern == "AD":
            father_genotypes = {
                "unaffected": [("d", "d")],
                "carrier": [("D", "d")],
                "affected": [("D", "d")],
            }[father_status]
            mother_genotypes = {
                "unaffected": [("d", "d")],
                "carrier": [("D", "d")],
                "affected": [("D", "d")],
            }[mother_status]
            disease = 0.0
            carrier = 0.0
            for f1, f2 in father_genotypes:
                for m1, m2 in mother_genotypes:
                    for paternal in (f1, f2):
                        for maternal in (m1, m2):
                            child = (paternal, maternal)
                            if "D" in child:
                                disease += 25.0
                            # Heterozygotes are affected in AD, so there is no
                            # separate unaffected carrier state.
            return disease, carrier

        # Autosomal recessive: D normal, d disease.
        father_genotypes = {
            "unaffected": [("D", "D")],
            "carrier": [("D", "d")],
            "affected": [("d", "d")],
        }[father_status]
        mother_genotypes = {
            "unaffected": [("D", "D")],
            "carrier": [("D", "d")],
            "affected": [("d", "d")],
        }[mother_status]

        disease = 0.0
        carrier = 0.0
        for f1, f2 in father_genotypes:
            for m1, m2 in mother_genotypes:
                for paternal in (f1, f2):
                    for maternal in (m1, m2):
                        child = (paternal, maternal)
                        if child == ("d", "d"):
                            disease += 25.0
                        elif "d" in child:
                            carrier += 25.0
        return disease, carrier

    @staticmethod
    def _x_linked(
        pattern: str, father_status: str, mother_status: str
    ) -> Tuple[float, float]:
        # D = disease allele, d = normal allele.
        father_x = {
            "unaffected": "d",
            "carrier": "D",  # males are hemizygous: carrier == affected
            "affected": "D",
        }[father_status]
        mother_genotypes = {
            "unaffected": [("d", "d")],
            "carrier": [("D", "d")],
            "affected": [("D", "D")],
        }[mother_status]

        dominant = pattern == "XD"
        disease = 0.0
        carrier = 0.0

        for m1, m2 in mother_genotypes:
            for maternal in (m1, m2):
                # Son: gets Y from father, one maternal X. Weight 0.5 (sex) * 0.5 (allele).
                if maternal == "D":
                    disease += 25.0
                # Daughter: gets paternal X + one maternal X.
                daughter = (father_x, maternal)
                if dominant:
                    if "D" in daughter:
                        disease += 25.0
                else:
                    if daughter == ("D", "D"):
                        disease += 25.0
                    elif "D" in daughter:
                        carrier += 25.0
        return disease, carrier

    @staticmethod
    def _risk_level(disease_pct: float) -> str:
        if disease_pct >= 75:
            return "very_high"
        if disease_pct >= 50:
            return "high"
        if disease_pct >= 25:
            return "moderate"
        if disease_pct > 0:
            return "low"
        return "minimal"

    @staticmethod
    def _explain(
        pattern: str,
        father: str,
        mother: str,
        disease: float,
        carrier: float,
        unaffected: float,
        sex_note: str,
    ) -> str:
        intro = {
            "AD": "常染色体显性遗传：子女只要从父母任意一方获得一个致病等位基因，就可能患病。",
            "AR": "常染色体隐性遗传：通常需要从父母双方各获得一个致病等位基因才会患病；只获得一个则为无症状携带者。",
            "XD": "X 连锁显性遗传：只要携带一个致病等位基因就可能患病，男性因只有一条 X 染色体通常表现更重。",
            "XR": "X 连锁隐性遗传：男性只有一条 X 染色体，携带致病等位基因即可能患病；女性通常需要两条 X 都携带才患病，单条携带者为无症状携带者。",
        }[pattern]

        father_text = STATUS_LABELS[father]
        mother_text = STATUS_LABELS[mother]

        interpretation = (
            f"在父亲{father_text}、母亲{mother_text}的前提下{sex_note}，"
            f"下一代的预期概率约为：患病 {disease:.1f}%，"
            f"成为无症状携带者 {carrier:.1f}%，"
            f"完全不受影响 {unaffected:.1f}%。"
        )

        if disease == 0:
            closing = "这属于较低风险组合，但仍建议结合家族史与专业遗传咨询综合评估。"
        elif disease < 25:
            closing = "风险并非零，建议把这份概率带到遗传门诊，由医生结合具体变异与家族史判断。"
        elif disease < 50:
            closing = "属于中等风险，建议孕前或备孕阶段咨询临床遗传医师，了解产前诊断与胚胎筛查选项。"
        else:
            closing = "属于较高风险，建议尽快预约临床遗传门诊，讨论产前诊断、胚胎植入前遗传学检测 (PGT) 等选择。"

        return f"{intro} {interpretation} {closing} {_DISCLAIMER}"
