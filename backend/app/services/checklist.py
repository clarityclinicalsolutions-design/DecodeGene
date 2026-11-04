"""Doctor checklist and lifestyle prevention lookups."""
from __future__ import annotations

from typing import Dict, List, Optional

from backend.app.core.dataset import get_record, load_records
from backend.app.models.schema import DoctorChecklist, LifestylePrevention


class ChecklistService:
    """Read-only access to the curated, validated clinical checklist data."""

    def get_checklist(self, symbol: str) -> Optional[DoctorChecklist]:
        record = get_record(symbol)
        return record.doctor_checklist if record else None

    def get_lifestyle(self, symbol: str) -> Optional[LifestylePrevention]:
        record = get_record(symbol)
        return record.lifestyle_prevention if record else None

    # Explicit aliases keep the service easy to discover.
    get_doctor_checklist = get_checklist
    get_lifestyle_prevention = get_lifestyle

    def get_bundle(self, symbol: str) -> Optional[Dict[str, object]]:
        record = get_record(symbol)
        if record is None:
            return None
        return {
            "symbol": record.gene.symbol,
            "chinese_name": record.gene.chinese_name,
            "specialty": record.doctor_checklist.specialty,
            "questions": list(record.doctor_checklist.questions),
            "lifestyle_prevention": record.lifestyle_prevention.model_dump(),
        }

    def list_myths(self) -> List[Dict[str, str]]:
        myths: List[Dict[str, str]] = []
        for record in load_records():
            myths.append(
                {
                    "symbol": record.gene.symbol,
                    "gene": record.gene.symbol,
                    "gene_chinese_name": record.gene.chinese_name,
                    "chinese_name": record.gene.chinese_name,
                    "myth": record.myth_buster.myth,
                    "truth": record.myth_buster.truth,
                }
            )
        return myths
