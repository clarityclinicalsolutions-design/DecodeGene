"""Fail-closed dataset loading and lookups for the validated gene registry."""
from __future__ import annotations

import json
from functools import lru_cache
from pathlib import Path
from typing import Dict, List, Optional, Tuple

from backend.app.models.schema import GeneDiseaseAssociation

from .config import get_settings


@lru_cache(maxsize=8)
def _load_from_path(path_str: str) -> Tuple[GeneDiseaseAssociation, ...]:
    path = Path(path_str)
    if not path.exists():
        raise FileNotFoundError(f"Validated dataset not found: {path}")
    raw_items = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(raw_items, list) or not raw_items:
        raise ValueError("Dataset must be a non-empty JSON list")
    # Fail closed: any invalid record aborts the whole load.
    return tuple(GeneDiseaseAssociation.model_validate(item) for item in raw_items)


def load_records() -> List[GeneDiseaseAssociation]:
    settings = get_settings()
    return list(_load_from_path(str(settings.sample_file)))


def get_record(symbol: str) -> Optional[GeneDiseaseAssociation]:
    if not symbol:
        return None
    target = symbol.strip().upper()
    for record in load_records():
        if record.gene.symbol.upper() == target:
            return record
    return None


def known_symbols() -> List[str]:
    return [record.gene.symbol.upper() for record in load_records()]


def get_known_genes() -> Tuple[str, ...]:
    return tuple(known_symbols())


def records_by_symbol() -> Dict[str, GeneDiseaseAssociation]:
    return {record.gene.symbol.upper(): record for record in load_records()}


def clear_dataset_cache() -> None:
    _load_from_path.cache_clear()
