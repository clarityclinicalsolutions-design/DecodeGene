#!/usr/bin/env python3
"""Synchronize `evidence.clinvar_pathogenic_count` from live NCBI ClinVar E-utilities.

Default execution is a safe dry-run that previews count changes without modifying
files. Pass `--apply` to persist updates to `data/sample/demo_associations.json`
and re-sync frontend static assets.

Usage
-----
    python -B scripts/sync_clinvar_counts.py --gene BRCA1 TP53
    python -B scripts/sync_clinvar_counts.py --apply
"""
from __future__ import annotations

import argparse
import asyncio
import json
import os
import sys
from pathlib import Path
from typing import Dict, Iterable, List, Optional

ROOT = Path(__file__).resolve().parent.parent
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from pipeline.apis.clinvar import ClinVarClient, ClinVarError  # noqa: E402
from scripts.sync_frontend_data import sync as sync_frontend_data  # noqa: E402

DATASET_PATH = ROOT / "data" / "sample" / "demo_associations.json"


async def fetch_counts_for_genes(
    symbols: Iterable[str],
    client: ClinVarClient,
    delay_seconds: float = 0.38,
) -> tuple[Dict[str, int], Dict[str, str]]:
    """Fetch ClinVar pathogenic/likely-pathogenic variant counts sequentially with backoff."""
    counts: Dict[str, int] = {}
    errors: Dict[str, str] = {}
    symbol_list = list(symbols)

    for idx, symbol in enumerate(symbol_list):
        last_error: Optional[Exception] = None
        for attempt in range(2):
            try:
                counts[symbol] = await client.count_pathogenic_variants(symbol)
                last_error = None
                break
            except ClinVarError as exc:
                last_error = exc
                if attempt == 0:
                    await asyncio.sleep(max(delay_seconds, 0.8))
        if last_error is not None:
            errors[symbol] = str(last_error)

        if idx < len(symbol_list) - 1 and delay_seconds > 0:
            await asyncio.sleep(delay_seconds)

    return counts, errors


def update_dataset_counts(
    dataset_path: Path,
    fetched_counts: Dict[str, int],
    apply_changes: bool = False,
) -> List[Dict[str, object]]:
    """Compare and optionally apply ClinVar count updates to the canonical dataset."""
    records = json.loads(dataset_path.read_text(encoding="utf-8"))
    changes: List[Dict[str, object]] = []

    for rec in records:
        symbol = rec["gene"]["symbol"]
        if symbol not in fetched_counts:
            continue
        old_val = int(rec["evidence"]["clinvar_pathogenic_count"])
        new_val = int(fetched_counts[symbol])
        if old_val != new_val:
            changes.append({"symbol": symbol, "old": old_val, "new": new_val})
            if apply_changes:
                rec["evidence"]["clinvar_pathogenic_count"] = new_val

    if apply_changes and changes:
        dataset_path.write_text(
            json.dumps(records, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )

    return changes


async def run_sync(
    dataset_path: Path = DATASET_PATH,
    genes: Optional[List[str]] = None,
    apply_changes: bool = False,
    sync_frontend: bool = True,
    delay_seconds: Optional[float] = None,
    email: Optional[str] = None,
    api_key: Optional[str] = None,
) -> int:
    if not dataset_path.exists():
        print(f"[FAIL] Dataset not found: {dataset_path}", file=sys.stderr)
        return 1

    records = json.loads(dataset_path.read_text(encoding="utf-8"))
    all_symbols = [rec["gene"]["symbol"] for rec in records]

    if genes:
        wanted = {g.strip().upper() for g in genes if g.strip()}
        target_symbols = [sym for sym in all_symbols if sym.upper() in wanted]
        unknown = sorted(wanted - {s.upper() for s in target_symbols})
        if unknown:
            print(f"[WARN] Unknown gene symbols skipped: {', '.join(unknown)}", file=sys.stderr)
    else:
        target_symbols = all_symbols

    if not target_symbols:
        print("[FAIL] No valid target genes selected.", file=sys.stderr)
        return 1

    resolved_key = api_key if api_key is not None else os.getenv("NCBI_API_KEY")
    resolved_email = email if email is not None else os.getenv("NCBI_EMAIL")
    resolved_delay = (
        delay_seconds
        if delay_seconds is not None
        else (0.12 if resolved_key else 0.38)
    )

    async with ClinVarClient(email=resolved_email, api_key=resolved_key) as client:
        fetched_counts, errors = await fetch_counts_for_genes(
            target_symbols,
            client=client,
            delay_seconds=resolved_delay,
        )

    changes = update_dataset_counts(
        dataset_path,
        fetched_counts=fetched_counts,
        apply_changes=apply_changes,
    )

    mode_label = "APPLY" if apply_changes else "DRY-RUN"
    print(
        f"[CLINVAR {mode_label}] Checked {len(target_symbols)} gene(s); "
        f"fetched={len(fetched_counts)}, changed={len(changes)}, errors={len(errors)}"
    )
    for item in changes:
        print(f"  - {item['symbol']}: {item['old']} -> {item['new']}")

    for sym, msg in errors.items():
        print(f"  [WARN] {sym}: {msg}", file=sys.stderr)

    if apply_changes and changes and sync_frontend:
        sync_frontend_data()

    return 1 if not fetched_counts and errors else 0


def main(argv: Optional[List[str]] = None) -> int:
    for stream in (sys.stdout, sys.stderr):
        reconfigure = getattr(stream, "reconfigure", None)
        if callable(reconfigure):
            try:
                reconfigure(encoding="utf-8", errors="replace")
            except Exception:
                pass

    parser = argparse.ArgumentParser(
        description="Sync evidence.clinvar_pathogenic_count from live NCBI ClinVar."
    )
    parser.add_argument("--apply", action="store_true", help="Write changes to demo_associations.json")
    parser.add_argument("--gene", nargs="+", help="Restrict sync to specific gene symbols")
    parser.add_argument("--delay", type=float, default=None, help="Seconds between NCBI requests")
    parser.add_argument("--email", help="Contact email passed to NCBI E-utilities")
    parser.add_argument("--api-key", help="Optional NCBI API key (or set NCBI_API_KEY)")
    parser.add_argument("--data", help="Override canonical dataset path")
    parser.add_argument("--no-sync", action="store_true", help="Skip frontend sync after --apply")
    args = parser.parse_args(argv)

    dataset_path = Path(args.data).expanduser() if args.data else DATASET_PATH
    return asyncio.run(
        run_sync(
            dataset_path=dataset_path,
            genes=args.gene,
            apply_changes=args.apply,
            sync_frontend=not args.no_sync,
            delay_seconds=args.delay,
            email=args.email,
            api_key=args.api_key,
        )
    )


if __name__ == "__main__":
    raise SystemExit(main())
