from __future__ import annotations

from enum import Enum
from typing import Dict, List, Literal, Optional
from pydantic import BaseModel, Field


class TrafficLight(str, Enum):
    RED_AVOID = "RED_AVOID"
    YELLOW_CAUTION = "YELLOW_CAUTION"
    GREEN_NORMAL = "GREEN_NORMAL"


class GeneMetaphor(BaseModel):
    title: str = Field(..., min_length=2)
    story: str = Field(..., min_length=10)


class GeneEntity(BaseModel):
    symbol: str = Field(..., min_length=1)
    name: str = Field(..., min_length=2)
    chinese_name: str = Field(..., min_length=2)
    ensembl_id: str = Field(..., pattern=r"^ENSG\d{11}$")
    entrez_id: str = Field(..., pattern=r"^\d+$")
    biotype: str = Field(..., min_length=2)
    chromosome: str = Field(..., min_length=2)
    metaphor: GeneMetaphor
    plain_summary: str = Field(..., min_length=10)
    academic_summary: str = Field(..., min_length=10)


class DiseaseEntity(BaseModel):
    id: str = Field(..., pattern=r"^(?:MONDO:\d{7}|PHARMGKB:PA\d+|MESH:D\d{6,9})$")
    name: str = Field(..., min_length=2)
    chinese_name: str = Field(..., min_length=2)
    categories: List[str] = Field(..., min_length=1)
    inheritance_mode: str = Field(..., min_length=2)
    severity_badge: str = Field(..., min_length=2)


class PhenotypeHPO(BaseModel):
    hpo_id: str = Field(..., pattern=r"^HP:\d{7}$")
    name: str = Field(..., min_length=2)
    chinese_name: str = Field(..., min_length=1)


class TargetedDrug(BaseModel):
    drug_name: str = Field(..., min_length=2)
    chinese_name: str = Field(..., min_length=2)
    mechanism: str = Field(..., min_length=2)
    approval_status: str = Field(..., min_length=2)


class PGxDrugItem(BaseModel):
    drug_name: str = Field(..., min_length=2)
    chinese_name: str = Field(..., min_length=2)
    traffic_light: TrafficLight
    clinical_alert: str = Field(..., min_length=5)
    cpic_level: str = Field(..., min_length=2)


class PharmacogenomicsGuide(BaseModel):
    has_pgx: bool
    key_variant: str = Field(..., min_length=2)
    population_frequency: str = Field(..., min_length=2)
    traffic_light_summary: str = Field(..., min_length=5)
    drugs_guide: List[PGxDrugItem] = Field(..., min_length=1)
    dietary_contraindications: List[str] = Field(..., min_length=1)


class EvidenceSummary(BaseModel):
    overall_score: float = Field(..., ge=0.0, le=1.0)
    plain_rating: str = Field(..., min_length=2)
    clinvar_pathogenic_count: int = Field(..., ge=0)
    clinvar_summary_chinese: str = Field(..., min_length=2)
    opentargets_score: float = Field(..., ge=0.0, le=1.0)
    key_pmids: List[str] = Field(..., min_length=1)
    guideline_ids: Optional[List[str]] = None


class LifestylePrevention(BaseModel):
    screening_advice: str = Field(..., min_length=5)
    lifestyle_tips: List[str] = Field(..., min_length=1)


class DoctorChecklist(BaseModel):
    specialty: str = Field(..., min_length=2)
    questions: List[str] = Field(..., min_length=1)


class MythBuster(BaseModel):
    myth: str = Field(..., min_length=5)
    truth: str = Field(..., min_length=5)


class GeneDiseaseAssociation(BaseModel):
    association_id: str = Field(..., pattern=r"^GDA_[A-Z0-9_\-]+$")
    gene: GeneEntity
    disease: DiseaseEntity
    phenotypes: List[PhenotypeHPO] = Field(..., min_length=1)
    drugs_targeted: List[TargetedDrug] = Field(..., min_length=1)
    pharmacogenomics: PharmacogenomicsGuide
    evidence: EvidenceSummary
    lifestyle_prevention: LifestylePrevention
    doctor_checklist: DoctorChecklist
    myth_buster: MythBuster


class GeneticReportQuery(BaseModel):
    """Raw genetic report text submitted by a user.

    Only ``raw_text`` is required. The remaining fields are optional so the
    same model can be reused for the scrubbed server response payload.
    """

    raw_text: str = Field(..., min_length=1)
    scrubbed_text: Optional[str] = None
    detected_gene: Optional[str] = None
    detected_variant: Optional[str] = None
    zygosity: Optional[str] = None


class FamilyInheritanceQuery(BaseModel):
    pattern: Literal["AD", "AR", "XD", "XR"]
    father_status: Literal["unaffected", "carrier", "affected"] = "unaffected"
    mother_status: Literal["unaffected", "carrier", "affected"] = "unaffected"
    gene_symbol: Optional[str] = None
    disease_name: Optional[str] = None


class FamilyInheritanceResult(BaseModel):
    pattern: Literal["AD", "AR", "XD", "XR"]
    father_status: Literal["unaffected", "carrier", "affected"]
    mother_status: Literal["unaffected", "carrier", "affected"]
    child_disease_risk_pct: float = Field(..., ge=0.0, le=100.0)
    child_carrier_risk_pct: float = Field(..., ge=0.0, le=100.0)
    plain_explanation: str = Field(..., min_length=10)
    child_unaffected_pct: float = Field(default=0.0, ge=0.0, le=100.0)
    risk_level: str = Field(default="unknown")
    details: Dict[str, str] = Field(default_factory=dict)
