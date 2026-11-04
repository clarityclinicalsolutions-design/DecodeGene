"""DecodeGene offline ingestion / verification CLI.

Usage
-----
    python -m pipeline.run_pipeline --verify
    python -m pipeline.run_pipeline --json
    python -m pipeline.run_pipeline --gene BRCA1
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any, Dict, List

ROOT_DIR = Path(__file__).resolve().parent.parent
if str(ROOT_DIR) not in sys.path:
    sys.path.insert(0, str(ROOT_DIR))

from backend.app.core.config import get_settings  # noqa: E402
from backend.app.models.schema import GeneDiseaseAssociation  # noqa: E402
from pipeline.parsers.metaphors import get_metaphor  # noqa: E402


def load_and_validate(path: Path) -> List[GeneDiseaseAssociation]:
    if not path.exists():
        raise FileNotFoundError(f"Dataset not found: {path}")
    raw = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(raw, list) or not raw:
        raise ValueError("Dataset must be a non-empty JSON list")
    records = [GeneDiseaseAssociation.model_validate(item) for item in raw]
    symbols = [record.gene.symbol for record in records]
    if len(symbols) != len(set(symbols)):
        raise ValueError(f"Duplicate gene symbols: {symbols}")
    return records


def build_summary(records: List[GeneDiseaseAssociation]) -> List[Dict[str, Any]]:
    summary: List[Dict[str, Any]] = []
    for record in records:
        lights = [item.traffic_light.value for item in record.pharmacogenomics.drugs_guide]
        summary.append(
            {
                "symbol": record.gene.symbol,
                "chinese_name": record.gene.chinese_name,
                "disease": record.disease.chinese_name,
                "mondo": record.disease.id,
                "ensembl": record.gene.ensembl_id,
                "inheritance": record.disease.inheritance_mode,
                "traffic_lights": lights,
                "evidence": record.evidence.overall_score,
                "metaphor": (get_metaphor(record.gene.symbol) or {}).get("title", record.gene.metaphor.title),
            }
        )
    return summary


def _truncate(text: str, max_len: int) -> str:
    if len(text) <= max_len:
        return text
    return text[: max(1, max_len - 1)] + "…"


def _print_plain(summary: List[Dict[str, Any]]) -> None:
    gene_col = [str(row["symbol"]) for row in summary]
    disease_col = [_truncate(str(row["disease"]), 22) for row in summary]
    id_col = [str(row["mondo"]) for row in summary]
    lights_col = [_truncate(",".join(row["traffic_lights"]), 36) for row in summary]
    evid_col = [f"{float(row['evidence']):.2f}" for row in summary]

    w_gene = max([len("GENE"), *(len(x) for x in gene_col)]) + 2
    w_disease = max([len("DISEASE"), *(len(x) for x in disease_col)]) + 2
    w_id = max([len("MONDO"), *(len(x) for x in id_col)]) + 2
    w_lights = max([len("LIGHTS"), *(len(x) for x in lights_col)]) + 2
    w_evid = max([len("EVID"), *(len(x) for x in evid_col)])

    header = (
        f"{'GENE':<{w_gene}}"
        f"{'DISEASE':<{w_disease}}"
        f"{'MONDO':<{w_id}}"
        f"{'LIGHTS':<{w_lights}}"
        f"{'EVID':<{w_evid}}"
    )
    print(header)
    print("-" * len(header))
    for g, d, m, l, e in zip(gene_col, disease_col, id_col, lights_col, evid_col):
        print(
            f"{g:<{w_gene}}"
            f"{d:<{w_disease}}"
            f"{m:<{w_id}}"
            f"{l:<{w_lights}}"
            f"{e:<{w_evid}}"
        )


def _print_rich(summary: List[Dict[str, Any]]) -> bool:
    try:
        from rich.console import Console
        from rich.table import Table
    except Exception:
        return False

    console = Console()
    table = Table(title=f"DecodeGene — {len(summary)} validated gene records", show_lines=True)
    table.add_column("Gene", style="bold cyan", no_wrap=True)
    table.add_column("Chinese name")
    table.add_column("Disease")
    table.add_column("MONDO", style="dim")
    table.add_column("PGx lights")
    table.add_column("Evidence", justify="right")
    for row in summary:
        table.add_row(
            row["symbol"],
            row["chinese_name"],
            row["disease"],
            row["mondo"],
            ", ".join(row["traffic_lights"]),
            f"{row['evidence']:.2f}",
        )
    console.print(table)
    return True


def _configure_stdio() -> None:
    for stream in (sys.stdout, sys.stderr):
        reconfigure = getattr(stream, "reconfigure", None)
        if callable(reconfigure):
            try:
                reconfigure(encoding="utf-8", errors="replace")
            except Exception:
                pass


def main(argv: List[str] | None = None) -> int:
    _configure_stdio()
    parser = argparse.ArgumentParser(description="DecodeGene data pipeline")
    parser.add_argument("--verify", action="store_true", help="Fail-closed validation of the 7-gene dataset")
    parser.add_argument("--json", action="store_true", help="Print the summary as JSON")
    parser.add_argument("--gene", help="Only show one gene symbol")
    parser.add_argument("--data", help="Override dataset path")
    args = parser.parse_args(argv)

    settings = get_settings()
    path = Path(args.data).expanduser() if args.data else settings.sample_file

    try:
        records = load_and_validate(path)
    except Exception as exc:
        print(f"[FAIL] {exc}", file=sys.stderr)
        return 1

    if args.gene:
        target = args.gene.strip().upper()
        records = [record for record in records if record.gene.symbol.upper() == target]
        if not records:
            print(f"[FAIL] Gene not found: {args.gene}", file=sys.stderr)
            return 1

    summary = build_summary(records)

    if args.json:
        print(json.dumps(summary, ensure_ascii=False, indent=2))
    else:
        if not _print_rich(summary):
            _print_plain(summary)

    if args.verify:
        symbols = ", ".join(row["symbol"] for row in summary)
        print(f"[PASS] Validated {len(summary)} record(s): {symbols}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
