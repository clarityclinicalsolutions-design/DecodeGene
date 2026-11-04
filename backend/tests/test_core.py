"""End-to-end verification of the DecodeGene backend.

Covers the validated dataset, local PII scrubbing, Mendelian/X-linked
inheritance maths, the REST surface and the anti-hallucination circuit breaker.
"""
from __future__ import annotations

import json
from dataclasses import replace
from pathlib import Path

import pytest
from fastapi.testclient import TestClient
from pydantic import ValidationError

import backend.app.main as main_module
from backend.app.core.config import get_settings
from backend.app.core.dataset import load_records
from backend.app.core.privacy import LocalPIIScrubber
from backend.app.main import app
from backend.app.models.schema import GeneDiseaseAssociation
from backend.app.services.ai_reasoning import (
    CIRCUIT_BREAKER_MESSAGE,
    DeepSeekPublicAgent,
    UnknownGeneError,
)
from backend.app.services.inheritance import InheritanceCalculator

ROOT = Path(__file__).resolve().parents[2]
DATASET = ROOT / "data" / "sample" / "demo_associations.json"
REGISTRY = ROOT / "data" / "registry" / "verified_ids.json"


def _load_registry_map() -> dict[str, dict]:
    items = json.loads(REGISTRY.read_text(encoding="utf-8"))
    return {item["symbol"]: item for item in items}


REGISTRY_BY_SYMBOL = _load_registry_map()
EXPECTED_GENES = {sym: item["disease_id"] for sym, item in REGISTRY_BY_SYMBOL.items()}
EXPECTED_COUNT = len(EXPECTED_GENES)


@pytest.fixture(scope="session")
def client() -> TestClient:
    # Force the deterministic local path: tests must never depend on a network
    # or on a developer's real DeepSeek key.
    local_settings = replace(get_settings(), deepseek_api_key=None)
    main_module.ai_agent = DeepSeekPublicAgent(settings=local_settings)
    return TestClient(app)


# ---------------------------------------------------------------------------
# 1. Dataset / schema
# ---------------------------------------------------------------------------
def test_dataset_has_seven_strictly_validated_records() -> None:
    raw = json.loads(DATASET.read_text(encoding="utf-8"))
    assert isinstance(raw, list)
    assert len(raw) == EXPECTED_COUNT

    records = [GeneDiseaseAssociation.model_validate(item) for item in raw]
    by_symbol = {record.gene.symbol: record for record in records}
    assert set(by_symbol) == set(EXPECTED_GENES)

    for symbol, disease_id in EXPECTED_GENES.items():
        record = by_symbol[symbol]
        reg = REGISTRY_BY_SYMBOL[symbol]
        assert record.disease.id == disease_id
        assert record.gene.ensembl_id == reg["ensembl_id"]
        assert record.gene.entrez_id == reg["entrez_id"]
        assert record.gene.ensembl_id.startswith("ENSG")
        assert record.gene.biotype == "protein_coding"
        assert record.gene.metaphor.title
        if record.pharmacogenomics.has_pgx:
            assert record.pharmacogenomics.drugs_guide
        else:
            assert record.pharmacogenomics.drugs_guide == []
        assert len(record.doctor_checklist.questions) >= 3
        assert record.myth_buster.truth


def test_dataset_loader_matches_file() -> None:
    records = load_records()
    assert len(records) == EXPECTED_COUNT
    assert [record.gene.symbol for record in records] == list(EXPECTED_GENES)


def test_mesh_tree_number_validator() -> None:
    from scripts.validate_schema import _validate_mesh_tree_numbers
    # Pass cases
    _validate_mesh_tree_numbers("TEST1", "MESH:D064420", {"mesh_tree_number": "C25.100"})
    _validate_mesh_tree_numbers("TEST2", "MESH:D064420", {"tree_number": ["C25.100", "G07.690.725"]})
    
    # Fail cases
    with pytest.raises(AssertionError, match="must start with"):
        _validate_mesh_tree_numbers("TEST3", "MESH:D065729", {"mesh_tree_number": "D08.244"})
        
    with pytest.raises(AssertionError, match="must start with"):
        _validate_mesh_tree_numbers("TEST4", "MESH:D065729", {"tree_numbers": ["C25.100", "D08.244"]})


def test_has_pgx_false_record_allows_empty_drugs_guide() -> None:
    from scripts.validate_schema import _validate_pharmacogenomics

    pgx = {
        "has_pgx": False,
        "key_variant": "無常見藥物基因變異",
        "population_frequency": "依族群而異",
        "traffic_light_summary": "此基因目前沒有藥物基因（PGx）用藥指引，臨床用藥請依醫師評估。",
        "drugs_guide": [],
        "dietary_contraindications": ["依醫師與藥師指示"],
    }

    raw = json.loads(DATASET.read_text(encoding="utf-8"))
    data = json.loads(json.dumps(raw[0]))
    data["pharmacogenomics"] = pgx
    record = GeneDiseaseAssociation.model_validate(data)
    assert record.pharmacogenomics.has_pgx is False
    assert record.pharmacogenomics.drugs_guide == []
    _validate_pharmacogenomics("TESTGENE", pgx)

    with pytest.raises(ValidationError):
        GeneDiseaseAssociation.model_validate(
            {**data, "pharmacogenomics": {**pgx, "has_pgx": True}}
        )
    with pytest.raises(ValidationError):
        GeneDiseaseAssociation.model_validate(
            {
                **data,
                "pharmacogenomics": {
                    **pgx,
                    "drugs_guide": [raw[0]["pharmacogenomics"]["drugs_guide"][0]],
                },
            }
        )


def test_evidence_guideline_ids_optional() -> None:
    records = load_records()
    by_symbol = {record.gene.symbol: record for record in records}
    
    # CYP2C19 has guideline_ids
    cyp2c19 = by_symbol["CYP2C19"]
    assert cyp2c19.evidence.guideline_ids == ["PHARMGKB:PA166251443"]
    
    # BRCA1 does not
    brca1 = by_symbol["BRCA1"]
    assert brca1.evidence.guideline_ids is None


# ---------------------------------------------------------------------------
# 2. Local PII scrubbing
# ---------------------------------------------------------------------------
def test_scrubber_removes_all_pii_and_preserves_clinical_payload() -> None:
    raw = (
        "患者姓名：张三 身份证：110101199003071234 手机：13800138000 "
        "就诊于北京协和医院 病历号：MRN-998877 "
        "检测结果：BRCA1 c.5266dupC 杂合致病变异"
    )
    scrubber = LocalPIIScrubber()
    report = scrubber.scrub_with_report(raw)
    scrubbed = report.scrubbed_text

    assert "张三" not in scrubbed
    assert "110101199003071234" not in scrubbed
    assert "13800138000" not in scrubbed
    assert "北京协和医院" not in scrubbed
    assert "MRN-998877" not in scrubbed

    assert "BRCA1" in scrubbed
    assert "c.5266dupC" in scrubbed
    assert "杂合" in scrubbed

    assert report.removed_counts["name"] >= 1
    assert report.removed_counts["id_number"] == 1
    assert report.removed_counts["mobile"] == 1
    assert report.removed_counts["hospital"] == 1
    assert report.removed_counts["record_number"] == 1
    assert report.detected_gene == "BRCA1"
    assert "c.5266dupC" in report.variants
    assert report.zygosity == "杂合"


def test_scrubber_preserves_aldh2_and_rs671() -> None:
    raw = "测试样本2：李四(手机13800138000) ALDH2 rs671 杂合突变"
    report = LocalPIIScrubber().scrub_with_report(raw)
    assert "李四" not in report.scrubbed_text
    assert "13800138000" not in report.scrubbed_text
    assert "ALDH2" in report.scrubbed_text
    assert "rs671" in report.scrubbed_text
    assert report.detected_gene == "ALDH2"
    assert report.rsids == ("rs671",)
    assert report.zygosity == "杂合"


def test_scrubber_handles_english_labels() -> None:
    raw = (
        "Patient Name: John Doe, Hospital: Beijing Union Medical College Hospital, "
        "EGFR L858R, p.Glu504Lys"
    )
    report = LocalPIIScrubber().scrub_with_report(raw)
    assert "John Doe" not in report.scrubbed_text
    assert "Beijing Union Medical College Hospital" not in report.scrubbed_text
    assert "EGFR" in report.scrubbed_text
    assert "L858R" in report.variants
    assert "p.Glu504Lys" in report.variants


# ---------------------------------------------------------------------------
# 3. Inheritance calculator
# ---------------------------------------------------------------------------
@pytest.mark.parametrize(
    "pattern,father,mother,expected_disease,expected_carrier",
    [
        ("AD", "affected", "unaffected", 50.0, 0.0),
        ("AD", "affected", "affected", 75.0, 0.0),
        ("AD", "unaffected", "unaffected", 0.0, 0.0),
        ("AR", "carrier", "carrier", 25.0, 50.0),
        ("AR", "carrier", "affected", 50.0, 50.0),
        ("AR", "unaffected", "carrier", 0.0, 50.0),
        ("AR", "unaffected", "affected", 0.0, 100.0),
        ("AR", "affected", "affected", 100.0, 0.0),
        ("XD", "affected", "unaffected", 50.0, 0.0),
        ("XD", "unaffected", "affected", 100.0, 0.0),
        ("XD", "unaffected", "carrier", 50.0, 0.0),
        ("XD", "affected", "carrier", 75.0, 0.0),
        ("XR", "unaffected", "carrier", 25.0, 25.0),
        ("XR", "unaffected", "affected", 50.0, 50.0),
        ("XR", "affected", "unaffected", 0.0, 50.0),
        ("XR", "affected", "carrier", 50.0, 25.0),
        ("XR", "affected", "affected", 100.0, 0.0),
        ("XR", "unaffected", "unaffected", 0.0, 0.0),
    ],
)
def test_inheritance_probabilities(
    pattern: str,
    father: str,
    mother: str,
    expected_disease: float,
    expected_carrier: float,
) -> None:
    result = InheritanceCalculator().calculate(
        {
            "pattern": pattern,
            "father_status": father,
            "mother_status": mother,
        }
    )
    assert result.child_disease_risk_pct == pytest.approx(expected_disease)
    assert result.child_carrier_risk_pct == pytest.approx(expected_carrier)
    assert result.child_unaffected_pct == pytest.approx(
        round(100.0 - expected_disease - expected_carrier, 2)
    )
    assert result.plain_explanation


def test_inheritance_rejects_invalid_pattern() -> None:
    with pytest.raises(Exception):
        InheritanceCalculator().calculate(
            {"pattern": "ZZ", "father_status": "unaffected", "mother_status": "unaffected"}
        )


# ---------------------------------------------------------------------------
# 4. Anti-hallucination circuit breaker
# ---------------------------------------------------------------------------
def test_unknown_gene_never_reaches_llm() -> None:
    agent = DeepSeekPublicAgent(settings=replace(get_settings(), deepseek_api_key=None))
    with pytest.raises(UnknownGeneError) as exc_info:
        agent.prepare("XYZ1 c.1234A>T 杂合")
    assert exc_info.value.message == CIRCUIT_BREAKER_MESSAGE


def test_local_interpretation_is_deterministic() -> None:
    agent = DeepSeekPublicAgent(settings=replace(get_settings(), deepseek_api_key=None))
    response = agent.local_interpretation(
        "测试样本1：张三(身份证110101199003071234) BRCA1 c.5266dupC 杂合致病变异"
    )
    assert response["ai_source"] == "local_fallback"
    assert response["gene"]["symbol"] == "BRCA1"
    assert response["pii_removed"] is True
    assert response["interpretation"]["headline"]
    assert response["verification"]["consistent"] is True


# ---------------------------------------------------------------------------
# 5. REST endpoints
# ---------------------------------------------------------------------------
def test_health(client: TestClient) -> None:
    response = client.get("/health")
    assert response.status_code == 200
    body = response.json()
    assert body["status"] == "ok"
    assert body["count"] == EXPECTED_COUNT
    assert set(body["loaded_genes"]) == set(EXPECTED_GENES)


def test_list_and_get_genes(client: TestClient) -> None:
    listing = client.get("/api/v1/genes")
    assert listing.status_code == 200
    assert len(listing.json()) == EXPECTED_COUNT

    response = client.get("/api/v1/genes/BRCA1")
    assert response.status_code == 200
    assert response.json()["gene"]["symbol"] == "BRCA1"

    simple = client.get("/api/v1/genes/BRCA1?view=simple")
    assert simple.status_code == 200
    assert "gene" not in simple.json()
    assert "academic_summary" not in simple.json()


def test_pgx_endpoint(client: TestClient) -> None:
    response = client.get("/api/v1/pgx/ALDH2")
    assert response.status_code == 200
    body = response.json()
    assert body["has_pgx"] is True
    lights = {item["traffic_light"] for item in body["drugs_guide"]}
    assert "RED_AVOID" in lights


def test_search_by_rsid_gene_and_disease(client: TestClient) -> None:
    for query, expected in [
        ("rs671", "ALDH2"),
        ("rs1801133", "MTHFR"),
        ("BRCA1", "BRCA1"),
        ("MONDO:0007254", "BRCA1"),
        ("奥希替尼", "EGFR"),
        ("蚕豆病", "G6PD"),
    ]:
        response = client.get("/api/v1/search", params={"q": query})
        assert response.status_code == 200
        symbols = [item["symbol"] for item in response.json()]
        assert expected in symbols, f"{query} did not return {expected}: {symbols}"


def test_inheritance_endpoint(client: TestClient) -> None:
    response = client.post(
        "/api/v1/calculate/inheritance",
        json={"pattern": "AR", "father_status": "carrier", "mother_status": "carrier"},
    )
    assert response.status_code == 200
    body = response.json()
    assert body["child_disease_risk_pct"] == 25.0
    assert body["child_carrier_risk_pct"] == 50.0


def test_checklist_and_myths(client: TestClient) -> None:
    checklist = client.get("/api/v1/checklist/TP53")
    assert checklist.status_code == 200
    assert checklist.json()["specialty"]
    assert len(checklist.json()["questions"]) >= 3

    myths = client.get("/api/v1/myths")
    assert myths.status_code == 200
    assert len(myths.json()) == EXPECTED_COUNT
    assert all({"symbol", "myth", "truth"} <= set(item) for item in myths.json())


def test_report_decoder_samples(client: TestClient) -> None:
    sample_one = (
        "测试样本1：张三(身份证110101199003071234) BRCA1 c.5266dupC 杂合致病变异"
    )
    response = client.post("/api/v1/report/scrub-and-decode", json={"raw_text": sample_one})
    assert response.status_code == 200
    body = response.json()
    assert body["status"] == "ok"
    assert body["gene"]["symbol"] == "BRCA1"
    assert "张三" not in body["scrubbed_text"]
    assert "110101199003071234" not in body["scrubbed_text"]
    assert "c.5266dupC" in body["detected"]["variants"]
    assert body["interpretation"]["headline"]

    sample_two = "测试样本2：李四(手机13800138000) ALDH2 rs671 杂合突变"
    response = client.post("/api/v1/report/scrub-and-decode", json={"raw_text": sample_two})
    assert response.status_code == 200
    body = response.json()
    assert body["gene"]["symbol"] == "ALDH2"
    assert "李四" not in body["scrubbed_text"]
    assert "13800138000" not in body["scrubbed_text"]
    assert "rs671" in body["detected"]["rsids"]


def test_unknown_gene_endpoints_trigger_circuit_breaker(client: TestClient) -> None:
    for path in [
        "/api/v1/genes/FAKEGENE999",
        "/api/v1/pgx/FAKEGENE999",
        "/api/v1/checklist/FAKEGENE999",
    ]:
        response = client.get(path)
        assert response.status_code == 404
        assert response.json()["detail"] == CIRCUIT_BREAKER_MESSAGE

    response = client.post(
        "/api/v1/report/scrub-and-decode",
        json={"raw_text": "FAKEGENE999 c.999A>T 杂合"},
    )
    assert response.status_code == 404
    assert response.json()["detail"] == CIRCUIT_BREAKER_MESSAGE


# ---------------------------------------------------------------------------
# 6. Compatibility / convenience surfaces
# ---------------------------------------------------------------------------
def test_inheritance_accepts_convenience_signatures() -> None:
    calculator = InheritanceCalculator()
    positional = calculator.calculate("AR", "carrier", "carrier")
    keyword = calculator.calculate(
        pattern="AR", father_status="carrier", mother_status="carrier"
    )
    assert positional.child_disease_risk_pct == keyword.child_disease_risk_pct == 25.0
    disease, carrier = InheritanceCalculator.calculate_risk("XR", "affected", "carrier")
    assert disease == 50.0
    assert carrier == 25.0


def test_scrubber_detect_entities_dict() -> None:
    entities = LocalPIIScrubber().detect_entities(
        "BRCA1 c.5266dupC 杂合，ALDH2 rs671 纯合"
    )
    assert entities["genes"] == ["BRCA1", "ALDH2"]
    assert "c.5266dupC" in entities["variants"]
    assert "rs671" in entities["rsids"]


def test_scrubber_extracts_all_hgvs_forms() -> None:
    genes, variants, rsids, zygosity = LocalPIIScrubber().extract_entities(
        "BRCA1 c.5266dupC p.Gln1756Profs L858R rs671 rs1801133 杂合"
    )
    assert genes == ("BRCA1",)
    assert "c.5266dupC" in variants
    assert "p.Gln1756Profs" in variants
    assert "L858R" in variants
    assert rsids == ("rs671", "rs1801133")
    assert zygosity == "杂合"


def test_agent_convenience_constructor_and_sync_report() -> None:
    local_settings = replace(get_settings(), deepseek_api_key=None)
    agent = DeepSeekPublicAgent(settings=local_settings)
    assert agent.settings.ai_enabled is False
    report = agent.explain_report(
        "测试样本1：张三(身份证110101199003071234) BRCA1 c.5266dupC 杂合致病变异"
    )
    assert report["status"] == "ok"
    assert report["ai_source"] == "local_fallback"
    assert report["detected_gene"] == "BRCA1"
    assert report["zygosity"] == "杂合"


def test_config_uppercase_aliases() -> None:
    settings = get_settings()
    assert settings.DATA_DIR == settings.data_dir
    assert settings.ZERO_RETENTION_MODE is True
    assert settings.DEEPSEEK_BASE_URL.startswith("http")


def test_pipeline_offline_mappers() -> None:
    from pipeline.apis.clinvar import ClinVarClient, map_pathogenicity
    from pipeline.apis.cpic_pgx import CPICClient, map_recommendation_to_traffic_light
    from backend.app.models.schema import TrafficLight

    assert "明确风险" in map_pathogenicity("Pathogenic")
    assert "良性" in ClinVarClient.map_pathogenicity("Likely benign")
    assert "意义未明" in map_pathogenicity("Uncertain significance")
    assert "意义未明" in map_pathogenicity("Conflicting interpretations")

    assert map_recommendation_to_traffic_light("Avoid use") == TrafficLight.RED_AVOID
    assert (
        map_recommendation_to_traffic_light("Reduce dose and monitor")
        == TrafficLight.YELLOW_CAUTION
    )
    assert (
        CPICClient.map_recommendation_to_traffic_light("Use as directed")
        == TrafficLight.GREEN_NORMAL
    )


def test_every_registry_gene_detected_by_scrubber_and_search(client: TestClient) -> None:
    scrubber = LocalPIIScrubber()
    for symbol in EXPECTED_GENES:
        detected = scrubber.detect_gene(f"Clinical report: {symbol} positive")
        assert detected == symbol.upper(), f"Scrubber did not detect {symbol}: {detected}"

        response = client.get("/api/v1/search", params={"q": symbol})
        assert response.status_code == 200
        symbols = [item["symbol"] for item in response.json()]
        assert symbol in symbols, f"/api/v1/search did not return {symbol}: {symbols}"


def test_frontend_localize_record_fallback_when_english_missing() -> None:
    import subprocess

    node_script = """
import fs from 'node:fs';
const translationsSrc = fs.readFileSync('./frontend/src/i18n/translations.js', 'utf8')
  .replace("import { EN_RECORDS } from './enRecords.js';", "const EN_RECORDS = {};")
  .replace("import { UI_ZH_TW } from './uiZhTW.js';", "const UI_ZH_TW = {};")
  .replace("import { UI_EN } from './uiEn.js';", "const UI_EN = {};");

const modUrl = 'data:text/javascript;base64,' + Buffer.from(translationsSrc).toString('base64');
const { localizeRecord } = await import(modUrl);
const records = JSON.parse(fs.readFileSync('./data/sample/demo_associations.json', 'utf8'));
const sample = records[0];

// Missing English entry -> falls back to Traditional Chinese record without crashing
const fallback = localizeRecord(sample, 'en', {});
if (fallback.gene.chinese_name !== sample.gene.chinese_name) {
  throw new Error('Expected Traditional Chinese fallback when EN record is missing');
}
if (fallback.myth_buster.truth !== sample.myth_buster.truth) {
  throw new Error('Expected myth_buster fallback when EN record is missing');
}
console.log('FALLBACK_OK');
"""
    proc = subprocess.run(
        ["node", "--input-type=module", "-e", node_script],
        cwd=str(ROOT),
        capture_output=True,
        text=True,
        check=True,
    )
    assert "FALLBACK_OK" in proc.stdout


# ---------------------------------------------------------------------------
# 7. Phase 2 — PGx batch 1 (14 genes, star alleles, Taiwan PII, PGx search)
# ---------------------------------------------------------------------------
def test_all_fourteen_genes_pass_validator_and_match_registry() -> None:
    from scripts.validate_schema import validate

    assert EXPECTED_COUNT == len(EXPECTED_GENES)
    assert validate() == 0


@pytest.mark.parametrize(
    ("raw_input", "expected_gene", "expected_allele"),
    [
        ("CYP2C19*2", "CYP2C19", "CYP2C19*2"),
        ("CYP2C19 *2/*3", "CYP2C19", "CYP2C19 *2/*3"),
        ("CYP2C19 diplotype *1/*17", "CYP2C19", "*1/*17"),
        ("HLA-B*15:02", "HLA-B", "HLA-B*15:02"),
        ("HLA-B*5801", "HLA-B", "HLA-B*5801"),
        ("HLA-B*58:01", "HLA-B", "HLA-B*58:01"),
        ("TPMT*3A", "TPMT", "TPMT*3A"),
        ("NUDT15*3", "NUDT15", "NUDT15*3"),
    ],
)
def test_scrubber_extracts_star_alleles(
    raw_input: str, expected_gene: str, expected_allele: str
) -> None:
    scrubber = LocalPIIScrubber()
    report = scrubber.scrub_with_report(raw_input)
    assert expected_gene in report.genes
    assert expected_allele in report.variants
    # Ensure ID/phone scrubbing does not corrupt allele strings like *15:02
    assert expected_allele in report.scrubbed_text


def test_scrubber_removes_taiwan_id_and_mobile() -> None:
    scrubber = LocalPIIScrubber()
    raw_tw = (
        "測試樣本4：陳小明(身分證A123456789) CYP2C19 *2/*2 慢代謝型；"
        "測試樣本5：林美華(手機0912345678) HLA-B*15:02 陽性"
    )
    report = scrubber.scrub_with_report(raw_tw)
    assert "陳小明" not in report.scrubbed_text
    assert "林美華" not in report.scrubbed_text
    assert "A123456789" not in report.scrubbed_text
    assert "0912345678" not in report.scrubbed_text
    assert report.removed_counts["id_number"] >= 1
    assert report.removed_counts["mobile"] >= 1
    assert "CYP2C19" in report.genes
    assert "HLA-B" in report.genes
    assert "CYP2C19 *2/*2" in report.variants
    assert "HLA-B*15:02" in report.variants


@pytest.mark.parametrize(
    ("query", "expected_genes"),
    [
        ("clopidogrel", {"CYP2C19"}),
        ("保栓通", {"CYP2C19"}),
        ("warfarin", {"CYP2C9", "VKORC1"}),
        ("simvastatin", {"SLCO1B1"}),
        ("azathioprine", {"TPMT", "NUDT15"}),
        ("carbamazepine", {"HLA-B"}),
        ("卡馬西平", {"HLA-B"}),
        ("allopurinol", {"HLA-B"}),
        ("HLA-B*15:02", {"HLA-B"}),
    ],
)
def test_pgx_search_queries_return_expected_gene(
    client: TestClient, query: str, expected_genes: set[str]
) -> None:
    response = client.get("/api/v1/search", params={"q": query})
    assert response.status_code == 200
    symbols = {item["symbol"] for item in response.json()}
    assert symbols & expected_genes, f"Query '{query}' did not return {expected_genes}: {symbols}"


def test_pgx_hla_b_returns_two_red_avoid_items(client: TestClient) -> None:
    response = client.get("/api/v1/pgx/HLA-B")
    assert response.status_code == 200
    body = response.json()
    assert body["has_pgx"] is True
    red_items = [
        item for item in body["drugs_guide"] if item["traffic_light"] == "RED_AVOID"
    ]
    assert len(red_items) == 2


def test_scrub_and_decode_works_for_cyp2c19_and_hla_b_samples(
    client: TestClient,
) -> None:
    sample_4 = "測試樣本4：陳小明(身分證A123456789) CYP2C19 *2/*2 慢代謝型"
    resp_4 = client.post("/api/v1/report/scrub-and-decode", json={"raw_text": sample_4})
    assert resp_4.status_code == 200
    body_4 = resp_4.json()
    assert body_4["status"] == "ok"
    assert body_4["gene"]["symbol"] == "CYP2C19"
    assert "陳小明" not in body_4["scrubbed_text"]
    assert "A123456789" not in body_4["scrubbed_text"]
    assert "CYP2C19 *2/*2" in body_4["detected"]["variants"]

    sample_5 = "測試樣本5：林美華(手機0912345678) HLA-B*15:02 陽性"
    resp_5 = client.post("/api/v1/report/scrub-and-decode", json={"raw_text": sample_5})
    assert resp_5.status_code == 200
    body_5 = resp_5.json()
    assert body_5["status"] == "ok"
    assert body_5["gene"]["symbol"] == "HLA-B"
    assert "林美華" not in body_5["scrubbed_text"]
    assert "0912345678" not in body_5["scrubbed_text"]
    assert "HLA-B*15:02" in body_5["detected"]["variants"]


