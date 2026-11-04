#!/usr/bin/env python3
"""Deterministic schema & biomedical identifier validator for DecodeGene."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import Dict, Tuple

ROOT = Path(__file__).resolve().parent.parent
DATASET_PATH = ROOT / "data" / "sample" / "demo_associations.json"
REGISTRY_PATH = ROOT / "data" / "registry" / "verified_ids.json"

ALLOWED_TRAFFIC_LIGHTS = {"RED_AVOID", "YELLOW_CAUTION", "GREEN_NORMAL"}
ALLOWED_DISEASE_NAMESPACES = ("MONDO:", "PHARMGKB:", "MESH:")
DISEASE_ID_RE = re.compile(r"^(?:MONDO:\d{7}|PHARMGKB:PA\d+|MESH:D\d{6,9})$")
GUIDELINE_ID_RE = re.compile(r"^PHARMGKB:PA\d+$")
ALLOWED_MESH_TREE_PREFIXES = ("C", "G")
PGX_NO_GUIDELINE_MARKERS = ("無", "沒有", "尚无", "尚無", "暂无", "暫無")
PGX_GENE_TERMS = ("藥物基因", "用药基因", "藥物基因組", "用药基因组")
PGX_GUIDELINE_TERMS = ("指引", "準則", "指南", "規範", "规范", "建議", "建议")


def _validate_pharmacogenomics(symbol: str, pgx: dict) -> None:
    has_pgx = pgx["has_pgx"]
    drugs_guide = pgx["drugs_guide"]
    if has_pgx is True:
        assert len(drugs_guide) >= 1, f"{symbol} has_pgx=true requires a non-empty drugs_guide"
        for item in drugs_guide:
            tl = item["traffic_light"]
            assert tl in ALLOWED_TRAFFIC_LIGHTS, (
                f"{symbol} invalid traffic_light '{tl}', allowed={ALLOWED_TRAFFIC_LIGHTS}"
            )
        return

    assert has_pgx is False, f"{symbol} pharmacogenomics.has_pgx must be a boolean"
    assert drugs_guide == [], f"{symbol} drugs_guide must be empty when has_pgx is false"
    summary = pgx["traffic_light_summary"].strip()
    assert any(marker in summary for marker in PGX_NO_GUIDELINE_MARKERS), (
        f"{symbol} traffic_light_summary must state that no drug-gene guideline exists"
    )
    assert any(term in summary for term in PGX_GENE_TERMS), (
        f"{symbol} traffic_light_summary must mention drug-gene (PGx) guidance"
    )
    assert any(term in summary for term in PGX_GUIDELINE_TERMS), (
        f"{symbol} traffic_light_summary must mention a guideline/guidance term"
    )


def _validate_mesh_tree_numbers(symbol: str, disease_id: str, entry: dict) -> None:
    tree_keys = ("mesh_tree_number", "tree_number", "mesh_tree_numbers", "tree_numbers")
    found_keys = [k for k in tree_keys if k in entry and entry[k] is not None]
    assert len(found_keys) > 0, f"Registry {symbol} missing MeSH tree number field for {disease_id}"
    
    for key in found_keys:
        raw_val = entry[key]
        if isinstance(raw_val, str):
            values = [raw_val]
        elif isinstance(raw_val, list):
            values = raw_val
        else:
            raise AssertionError(
                f"Registry {symbol} invalid {key} type for {disease_id}: expected str or list"
            )
        assert len(values) > 0, f"Registry {symbol} empty {key} for {disease_id}"
        for tree_num in values:
            assert isinstance(tree_num, str) and tree_num.strip(), (
                f"Registry {symbol} blank MeSH tree number in {key} for {disease_id}"
            )
            cleaned = tree_num.strip()
            assert cleaned.startswith(ALLOWED_MESH_TREE_PREFIXES), (
                f"Registry {symbol} invalid MeSH tree number '{cleaned}' for {disease_id}: "
                f"must start with {ALLOWED_MESH_TREE_PREFIXES} (Diseases [C] or Phenomena [G])"
            )


def load_registry(registry_path: Path = REGISTRY_PATH) -> Dict[str, Tuple[str, str, str]]:
    if not registry_path.exists():
        raise FileNotFoundError(f"Registry missing: {registry_path}")
    raw_registry = json.loads(registry_path.read_text(encoding="utf-8"))
    assert isinstance(raw_registry, list) and len(raw_registry) > 0, (
        "Registry must be a non-empty JSON list"
    )
    expected: Dict[str, Tuple[str, str, str]] = {}
    for entry in raw_registry:
        symbol = entry["symbol"]
        assert symbol not in expected, f"Duplicate symbol in registry: {symbol}"
        assert entry.get("ensembl_id"), f"Registry {symbol} missing ensembl_id"
        assert entry.get("entrez_id"), f"Registry {symbol} missing entrez_id"
        disease_id = entry.get("disease_id", "")
        assert disease_id.startswith(ALLOWED_DISEASE_NAMESPACES) and DISEASE_ID_RE.match(disease_id), (
            f"Registry {symbol} invalid disease_id '{disease_id}' (allowed namespaces: {ALLOWED_DISEASE_NAMESPACES})"
        )
        if disease_id.startswith("MESH:"):
            _validate_mesh_tree_numbers(symbol, disease_id, entry)
        sources = entry.get("sources") or {}
        for src_key in ("ensembl", "ncbi_gene", "disease"):
            assert sources.get(src_key, "").startswith("http"), (
                f"Registry {symbol} missing valid source URL for {src_key}"
            )
        assert re.match(r"^\d{4}-\d{2}-\d{2}$", str(entry.get("verified_on", ""))), (
            f"Registry {symbol} invalid verified_on date"
        )
        expected[symbol] = (entry["ensembl_id"], entry["entrez_id"], entry["disease_id"])
    return expected


def validate(dataset_path: Path = DATASET_PATH, registry_path: Path = REGISTRY_PATH) -> int:
    if not dataset_path.exists():
        print(f"[FAIL] Dataset missing: {dataset_path}", file=sys.stderr)
        return 1
    if not registry_path.exists():
        print(f"[FAIL] Registry missing: {registry_path}", file=sys.stderr)
        return 1

    expected_genes = load_registry(registry_path)
    records = json.loads(dataset_path.read_text(encoding="utf-8"))
    assert isinstance(records, list) and len(records) > 0, "Dataset must be a non-empty JSON list"

    seen_ids = set()
    seen_symbols = []
    seen_symbols_set = set()

    # Fail-closed import: Pydantic v2 and schema module are strictly required
    if str(ROOT) not in sys.path:
        sys.path.insert(0, str(ROOT))
    import pydantic
    from backend.app.models.schema import GeneDiseaseAssociation

    for rec in records:
        GeneDiseaseAssociation.model_validate(rec)

        assoc_id = rec["association_id"]
        assert assoc_id not in seen_ids, f"Duplicate association_id: {assoc_id}"
        seen_ids.add(assoc_id)

        gene = rec["gene"]
        disease = rec["disease"]
        symbol = gene["symbol"]
        assert symbol not in seen_symbols_set, f"Duplicate gene symbol in dataset: {symbol}"
        seen_symbols_set.add(symbol)
        seen_symbols.append(symbol)

        assert symbol in expected_genes, f"Dataset record not in registry: {symbol}"
        exp_ensg, exp_entrez, exp_disease = expected_genes[symbol]
        assert gene["ensembl_id"] == exp_ensg, (
            f"{symbol} ensembl_id mismatch: {gene['ensembl_id']} != {exp_ensg}"
        )
        assert gene["entrez_id"] == exp_entrez, (
            f"{symbol} entrez_id mismatch: {gene['entrez_id']} != {exp_entrez}"
        )
        assert disease["id"] == exp_disease, (
            f"{symbol} disease.id mismatch: {disease['id']} != {exp_disease}"
        )
        assert gene["biotype"] == "protein_coding", f"{symbol} biotype mismatch"
        assert gene["metaphor"]["title"] and gene["metaphor"]["story"], f"{symbol} metaphor incomplete"
        assert gene["plain_summary"] and gene["academic_summary"], f"{symbol} summaries incomplete"

        for hpo in rec["phenotypes"]:
            assert re.match(r"^HP:\d{7}$", hpo["hpo_id"]), f"Invalid HPO ID: {hpo['hpo_id']}"

        assert len(rec["drugs_targeted"]) >= 1, f"{symbol} missing drugs_targeted"
        _validate_pharmacogenomics(symbol, rec["pharmacogenomics"])

        for pmid in rec["evidence"]["key_pmids"]:
            assert re.match(r"^PMID:\d+$", pmid), f"{symbol} invalid PMID '{pmid}'"

        guideline_ids = rec["evidence"].get("guideline_ids")
        if guideline_ids is not None:
            assert isinstance(guideline_ids, list) and len(guideline_ids) >= 1, (
                f"{symbol} evidence.guideline_ids must be a non-empty list when present"
            )
            for gid in guideline_ids:
                assert isinstance(gid, str) and GUIDELINE_ID_RE.match(gid), (
                    f"{symbol} invalid guideline_id '{gid}'"
                )

        assert rec["lifestyle_prevention"]["screening_advice"], f"{symbol} missing screening_advice"
        assert len(rec["doctor_checklist"]["questions"]) >= 3, f"{symbol} doctor_checklist questions < 3"
        assert rec["myth_buster"]["myth"] and rec["myth_buster"]["truth"], f"{symbol} myth_buster incomplete"

    missing_in_dataset = set(expected_genes.keys()) - seen_symbols_set
    assert not missing_in_dataset, f"Registry entries missing from dataset: {sorted(missing_in_dataset)}"
    extra_in_dataset = seen_symbols_set - set(expected_genes.keys())
    assert not extra_in_dataset, f"Dataset records missing from registry: {sorted(extra_in_dataset)}"

    print(
        f"[PASS] All {len(records)} records ({', '.join(seen_symbols)}) passed "
        f"fail-closed Pydantic v{pydantic.__version__} + Deterministic Rules validation!"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(validate())
