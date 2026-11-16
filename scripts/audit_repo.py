#!/usr/bin/env python3
"""Deterministic repository-wide quality, sync, i18n parity, and safety guardrail audit."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATASET_PATH = ROOT / "data" / "sample" / "demo_associations.json"
FRONTEND_JSON_PATH = ROOT / "frontend" / "src" / "data" / "demo_associations.json"
EN_DIR = ROOT / "frontend" / "src" / "i18n" / "genes"
SEARCH_PY_PATH = ROOT / "backend" / "app" / "services" / "search.py"
LOCAL_JS_PATH = ROOT / "frontend" / "src" / "services" / "localEngine.js"

# Historical legacy record MTHFR.js predates the strict no-dosage policy and contains "0.8 mg/d".
LEGACY_DOSAGE_ALLOWLIST = {"MTHFR"}
DOSAGE_RE = re.compile(r"\d+(?:\.\d+)?\s*(?:mg|mcg|μg|IU|毫克|微克)", re.I)
CJK_RE = re.compile(r"[\u4e00-\u9fff]")


def _parse_en_js(path: Path) -> dict:
    raw = path.read_text(encoding="utf-8").strip()
    body = re.sub(r"^export\s+default\s+", "", raw)
    body = re.sub(r";\s*$", "", body).strip()
    return json.loads(body)


def audit() -> int:
    errors: list[str] = []

    if not DATASET_PATH.exists():
        print(f"[FAIL] Missing dataset: {DATASET_PATH}", file=sys.stderr)
        return 1

    dataset_text = DATASET_PATH.read_text(encoding="utf-8")
    records = json.loads(dataset_text)

    if not FRONTEND_JSON_PATH.exists():
        errors.append("Missing synced frontend/src/data/demo_associations.json (run sync_frontend_data.py)")
    else:
        frontend_records = json.loads(FRONTEND_JSON_PATH.read_text(encoding="utf-8"))
        if frontend_records != records:
            errors.append("frontend/src/data/demo_associations.json is out of sync with data/sample/demo_associations.json")

    search_py = SEARCH_PY_PATH.read_text(encoding="utf-8")
    local_js = LOCAL_JS_PATH.read_text(encoding="utf-8")

    for rec in records:
        sym = rec["gene"]["symbol"]
        en_file = EN_DIR / f"{sym}.js"
        if not en_file.exists():
            errors.append(f"Missing English i18n file: frontend/src/i18n/genes/{sym}.js")
        else:
            src = en_file.read_text(encoding="utf-8")
            try:
                parsed_en = _parse_en_js(en_file)
                if "gene" not in parsed_en or "pharmacogenomics" not in parsed_en:
                    errors.append(f"Incomplete EN record structure in {en_file.name}")
            except Exception as exc:
                errors.append(f"Invalid EN JSON syntax in {en_file.name}: {exc}")

            if CJK_RE.search(src):
                errors.append(f"Untranslated CJK characters in {en_file.name}")
            if sym not in LEGACY_DOSAGE_ALLOWLIST and DOSAGE_RE.search(src):
                errors.append(f"Numeric dosage found in {en_file.name}: {DOSAGE_RE.findall(src)}")

        if sym not in LEGACY_DOSAGE_ALLOWLIST:
            rec_json = json.dumps(rec, ensure_ascii=False)
            if DOSAGE_RE.search(rec_json):
                errors.append(f"Numeric dosage found in dataset record {sym}: {DOSAGE_RE.findall(rec_json)}")

        if sym not in search_py:
            errors.append(f"Missing symbol/synonym in backend/app/services/search.py: {sym}")
        if sym not in local_js:
            errors.append(f"Missing symbol/synonym in frontend/src/services/localEngine.js: {sym}")

    if errors:
        print(f"[FAIL] Repo audit detected {len(errors)} issue(s):", file=sys.stderr)
        for err in errors:
            print(f"  - {err}", file=sys.stderr)
        return 1

    print(f"[PASS] Repo audit clean across {len(records)} genes (sync, EN i18n, search synonyms, no-dosage guardrails)!")
    return 0


if __name__ == "__main__":
    raise SystemExit(audit())
