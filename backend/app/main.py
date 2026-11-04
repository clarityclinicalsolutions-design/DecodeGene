"""DecodeGene FastAPI application.

Public REST surface for the seven validated gene records, PGx traffic lights,
privacy-safe report decoding, family inheritance simulation and doctor
checklists. All endpoints are fail-closed: unknown genes never receive a
speculative interpretation.
"""
from __future__ import annotations

from pathlib import Path
from typing import Dict, List

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from backend.app.core.config import get_settings
from backend.app.core.dataset import get_record, load_records
from backend.app.models.schema import (
    DoctorChecklist,
    FamilyInheritanceQuery,
    FamilyInheritanceResult,
    GeneDiseaseAssociation,
    GeneticReportQuery,
    PharmacogenomicsGuide,
)
from backend.app.services.ai_reasoning import (
    CIRCUIT_BREAKER_MESSAGE,
    DeepSeekPublicAgent,
    UnknownGeneError,
)
from backend.app.services.checklist import ChecklistService
from backend.app.services.inheritance import InheritanceCalculator
from backend.app.services.search import SearchService

settings = get_settings()
FRONTEND_DIST = Path(__file__).resolve().parents[2] / "frontend" / "dist"

app = FastAPI(
    title="DecodeGene API",
    description="Open-Source Dual-Mode Gene-Disease & Pharmacogenomics (PGx) Knowledge API",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

checklist_service = ChecklistService()
inheritance_calculator = InheritanceCalculator()
search_service = SearchService()
ai_agent = DeepSeekPublicAgent(settings=settings)


def load_validated_records() -> List[GeneDiseaseAssociation]:
    """Backwards-compatible alias used by older scripts/tests."""
    return load_records()


@app.get("/")
def root() -> dict:
    return {
        "name": "DecodeGene API",
        "version": app.version,
        "docs": "/docs",
        "health": "/health",
        "ui": "/app" if FRONTEND_DIST.is_dir() else None,
    }


@app.get("/health")
def health_check() -> dict:
    records = load_records()
    return {
        "status": "ok",
        "zero_retention_mode": settings.zero_retention_mode,
        "ai_enabled": settings.ai_enabled,
        "loaded_genes": [r.gene.symbol for r in records],
        "count": len(records),
    }


@app.get("/api/v1/genes", response_model=List[GeneDiseaseAssociation])
def list_genes() -> List[GeneDiseaseAssociation]:
    return load_records()


@app.get("/api/v1/genes/{symbol}")
def get_gene(symbol: str, view: str = Query("both", pattern="^(simple|pro|both)$")) -> dict:
    record = get_record(symbol)
    if record is None:
        raise HTTPException(status_code=404, detail=CIRCUIT_BREAKER_MESSAGE)

    data = record.model_dump()
    if view == "simple":
        return {
            "association_id": data["association_id"],
            "symbol": data["gene"]["symbol"],
            "chinese_name": data["gene"]["chinese_name"],
            "metaphor": data["gene"]["metaphor"],
            "plain_summary": data["gene"]["plain_summary"],
            "disease": data["disease"],
            "pharmacogenomics": data["pharmacogenomics"],
            "lifestyle_prevention": data["lifestyle_prevention"],
            "doctor_checklist": data["doctor_checklist"],
            "myth_buster": data["myth_buster"],
        }
    if view == "pro":
        return {
            "association_id": data["association_id"],
            "gene": data["gene"],
            "disease": data["disease"],
            "phenotypes": data["phenotypes"],
            "drugs_targeted": data["drugs_targeted"],
            "evidence": data["evidence"],
            "pharmacogenomics": data["pharmacogenomics"],
        }
    return data


@app.get("/api/v1/pgx/{symbol}", response_model=PharmacogenomicsGuide)
def get_pgx_guide(symbol: str) -> PharmacogenomicsGuide:
    record = get_record(symbol)
    if record is None:
        raise HTTPException(status_code=404, detail=CIRCUIT_BREAKER_MESSAGE)
    return record.pharmacogenomics


@app.get("/api/v1/search")
def search(q: str = Query("", description="Gene, disease, drug, MONDO ID or rsID")) -> List[dict]:
    return search_service.search(q)


@app.post("/api/v1/calculate/inheritance", response_model=FamilyInheritanceResult)
def calculate_inheritance(query: FamilyInheritanceQuery) -> FamilyInheritanceResult:
    return inheritance_calculator.calculate(query)


@app.get("/api/v1/checklist/{symbol}", response_model=DoctorChecklist)
def get_checklist(symbol: str) -> DoctorChecklist:
    checklist = checklist_service.get_checklist(symbol)
    if checklist is None:
        raise HTTPException(status_code=404, detail=CIRCUIT_BREAKER_MESSAGE)
    return checklist


@app.get("/api/v1/myths")
def get_myths() -> List[dict]:
    return checklist_service.list_myths()


@app.post("/api/v1/report/scrub-and-decode")
async def scrub_and_decode(query: GeneticReportQuery) -> Dict[str, object]:
    try:
        return await ai_agent.decode_report(query.raw_text)
    except UnknownGeneError:
        raise HTTPException(status_code=404, detail=CIRCUIT_BREAKER_MESSAGE)


# Optional production static mount: Docker builds the React bundle into
# ``frontend/dist`` and serves it at ``/app`` from the same FastAPI process.
if FRONTEND_DIST.is_dir():
    app.mount("/app", StaticFiles(directory=str(FRONTEND_DIST), html=True), name="frontend")
