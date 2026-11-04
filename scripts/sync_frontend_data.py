#!/usr/bin/env python3
"""Synchronize canonical dataset and per-gene English records into frontend artifacts."""
from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC_DATASET = ROOT / "data" / "sample" / "demo_associations.json"
DST_FRONTEND_JSON = ROOT / "frontend" / "src" / "data" / "demo_associations.json"
GENES_I18N_DIR = ROOT / "frontend" / "src" / "i18n" / "genes"
DST_DEMO_JS = ROOT / "frontend" / "demo-data.js"


def _parse_gene_js(js_path: Path) -> dict:
    raw = js_path.read_text(encoding="utf-8").strip()
    body = re.sub(r"^export\s+default\s+", "", raw)
    body = re.sub(r";\s*$", "", body).strip()
    return json.loads(body)


def sync() -> int:
    if not SRC_DATASET.exists():
        raise FileNotFoundError(f"Source dataset not found: {SRC_DATASET}")

    records = json.loads(SRC_DATASET.read_text(encoding="utf-8"))
    DST_FRONTEND_JSON.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(SRC_DATASET, DST_FRONTEND_JSON)

    en_records = {}
    dataset_symbols = [rec["gene"]["symbol"] for rec in records]
    seen = set()
    for symbol in dataset_symbols:
        candidate = GENES_I18N_DIR / f"{symbol}.js"
        if candidate.exists():
            en_records[symbol] = _parse_gene_js(candidate)
            seen.add(symbol)

    if GENES_I18N_DIR.exists():
        for js_file in sorted(GENES_I18N_DIR.glob("*.js")):
            symbol = js_file.stem
            if symbol not in seen:
                en_records[symbol] = _parse_gene_js(js_file)
                seen.add(symbol)

    demo_js_content = (
        "window.DEMO_DATA = "
        + json.dumps(records, ensure_ascii=False, indent=2)
        + ";\nwindow.EN_RECORDS = "
        + json.dumps(en_records, ensure_ascii=False, indent=2)
        + ";\n"
    )
    DST_DEMO_JS.write_text(demo_js_content, encoding="utf-8")
    print(
        f"[SYNC] Synced {len(records)} dataset records -> {DST_FRONTEND_JSON.relative_to(ROOT)} "
        f"and {len(en_records)} EN records -> {DST_DEMO_JS.relative_to(ROOT)}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(sync())
