# DecodeGene Phase 2 PGx Curation Log

All identifiers (Ensembl Gene IDs, NCBI Entrez Gene IDs, MONDO / PharmGKB / MeSH disease-phenotype IDs, HPO phenotype terms, CPIC guidelines, and PubMed PMIDs) were verified against official APIs and databases on **2026-11-03**.

---

## 1. `CYP2C19` — Clopidogrel Poor Metabolism & Bioactivation
- **Date checked**: `2026-11-04`
- **Ensembl ID**: `ENSG00000165841` — https://www.ensembl.org/Homo_sapiens/Gene/Summary?g=ENSG00000165841
- **NCBI Entrez Gene ID**: `1557` — https://www.ncbi.nlm.nih.gov/gene/1557
- **Disease / Phenotype ID**: `PHARMGKB:PA166124406` (platelet reactivity) — https://api.clinpgx.org/v1/data/disease/PA166124406
- **HPO Terms Verified** (https://www.ebi.ac.uk/ols4/ontologies/hp):
  - `HP:0001658` (Myocardial infarction) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0001658
  - `HP:0002140` (Ischemic stroke) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0002140
  - `HP:0033678` (Acute coronary syndrome) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0033678
- **CPIC Guidelines & Key PMIDs**:
  - `PHARMGKB:PA166251443` (CPIC Guideline for CYP2C19 and Clopidogrel) — https://cpicpgx.org/guidelines/guideline-for-clopidogrel-and-cyp2c19/
  - `PMID:21716271` — https://pubmed.ncbi.nlm.nih.gov/21716271/
  - `PMID:23698643` — https://pubmed.ncbi.nlm.nih.gov/23698643/
  - `PMID:35034351` — https://pubmed.ncbi.nlm.nih.gov/35034351/

---

## 2. `CYP2C9` — Warfarin, Phenytoin & NSAID Dose Sensitivity
- **Date checked**: `2026-11-04`
- **Ensembl ID**: `ENSG00000138109` — https://www.ensembl.org/Homo_sapiens/Gene/Summary?g=ENSG00000138109
- **NCBI Entrez Gene ID**: `1559` — https://www.ncbi.nlm.nih.gov/gene/1559
- **Disease / Phenotype ID**: `MESH:D064420` (Drug-Related Side Effects and Adverse Reactions) — https://id.nlm.nih.gov/mesh/D064420.json (MeSH tree number: `C25.100`)
- **HPO Terms Verified**:
  - `HP:0001892` (Abnormal bleeding) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0001892
  - `HP:0002239` (Gastrointestinal hemorrhage) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0002239
  - `HP:0001251` (Ataxia) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0001251
- **CPIC Guidelines & Key PMIDs**:
  - CPIC Guideline for CYP2C9, VKORC1, CYP4F2 and Warfarin (Level A) — https://www.clinpgx.org/guideline/PA166251465
  - CPIC Guideline for CYP2C9, HLA-B and Phenytoin (Level A) — https://www.clinpgx.org/guideline/PA166251461
  - CPIC Guideline for CYP2C9 and NSAIDs (Level A) — https://www.clinpgx.org/guideline/PA166251464
  - `PMID:21900891` — https://pubmed.ncbi.nlm.nih.gov/21900891/
  - `PMID:28198005` — https://pubmed.ncbi.nlm.nih.gov/28198005/
  - `PMID:32189324` — https://pubmed.ncbi.nlm.nih.gov/32189324/
  - `PMID:32779747` — https://pubmed.ncbi.nlm.nih.gov/32779747/

---

## 3. `VKORC1` — Warfarin Target Sensitivity
- **Date checked**: `2026-11-04`
- **Ensembl ID**: `ENSG00000167397` — https://www.ensembl.org/Homo_sapiens/Gene/Summary?g=ENSG00000167397
- **NCBI Entrez Gene ID**: `79001` — https://www.ncbi.nlm.nih.gov/gene/79001
- **Disease / Phenotype ID**: `PHARMGKB:PA166123298` (over-anticoagulation) — https://api.clinpgx.org/v1/data/disease/PA166123298
- **HPO Terms Verified**:
  - `HP:0001892` (Abnormal bleeding) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0001892
  - `HP:0000978` (Bruising susceptibility) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0000978
  - `HP:0000421` (Epistaxis) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0000421
- **CPIC Guidelines & Key PMIDs**:
  - `PHARMGKB:PA166251465` (CPIC Guideline for CYP2C9, VKORC1, CYP4F2 and Warfarin) — https://www.clinpgx.org/guideline/PA166251465
  - `PMID:21900891` — https://pubmed.ncbi.nlm.nih.gov/21900891/
  - `PMID:28198005` — https://pubmed.ncbi.nlm.nih.gov/28198005/

---

## 4. `SLCO1B1` — Statin-Associated Musculoskeletal Symptoms (SAMS)
- **Date checked**: `2026-11-03`
- **Ensembl ID**: `ENSG00000134538` — https://www.ensembl.org/Homo_sapiens/Gene/Summary?g=ENSG00000134538
- **NCBI Entrez Gene ID**: `10599` — https://www.ncbi.nlm.nih.gov/gene/10599
- **Disease / Phenotype ID**: `MONDO:0033170` (statin toxicity) — https://monarchinitiative.org/MONDO:0033170 / https://www.ebi.ac.uk/ols4/api/ontologies/mondo/terms?obo_id=MONDO:0033170
- **HPO Terms Verified**:
  - `HP:0003326` (Myalgia) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0003326
  - `HP:0003198` (Myopathy) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0003198
  - `HP:0003201` (Rhabdomyolysis) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0003201
  - `HP:0003236` (Elevated circulating creatine kinase activity) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0003236
- **CPIC Guidelines & Key PMIDs**:
  - CPIC Guideline for SLCO1B1, ABCG2, CYP2C9, and Statins (Level A) — https://www.clinpgx.org/guideline/PA166264281
  - `PMID:18650507` — https://pubmed.ncbi.nlm.nih.gov/18650507/
  - `PMID:22617227` — https://pubmed.ncbi.nlm.nih.gov/22617227/
  - `PMID:24918167` — https://pubmed.ncbi.nlm.nih.gov/24918167/
  - `PMID:35152405` — https://pubmed.ncbi.nlm.nih.gov/35152405/

---

## 5. `TPMT` — Thiopurine S-Methyltransferase Deficiency & Myelotoxicity
- **Date checked**: `2026-11-03`
- **Ensembl ID**: `ENSG00000137364` — https://www.ensembl.org/Homo_sapiens/Gene/Summary?g=ENSG00000137364
- **NCBI Entrez Gene ID**: `7172` — https://www.ncbi.nlm.nih.gov/gene/7172
- **Disease / Phenotype ID**: `MONDO:0012503` (thiopurine S-methyltransferase deficiency) — https://monarchinitiative.org/MONDO:0012503
- **HPO Terms Verified**:
  - `HP:0001882` (Decreased total leukocyte count) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0001882
  - `HP:0001875` (Decreased total neutrophil count) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0001875
  - `HP:0005528` (Bone marrow hypocellularity) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0005528
- **CPIC Guidelines & Key PMIDs**:
  - CPIC Guideline for TPMT, NUDT15 and Thiopurines (Level A) — https://www.clinpgx.org/guideline/PA166251442
  - `PMID:21270794` — https://pubmed.ncbi.nlm.nih.gov/21270794/
  - `PMID:23422873` — https://pubmed.ncbi.nlm.nih.gov/23422873/
  - `PMID:30447069` — https://pubmed.ncbi.nlm.nih.gov/30447069/

---

## 6. `NUDT15` — East Asian Thiopurine Myelosuppression & Alopecia
- **Date checked**: `2026-11-03`
- **Ensembl ID**: `ENSG00000136159` — https://www.ensembl.org/Homo_sapiens/Gene/Summary?g=ENSG00000136159
- **NCBI Entrez Gene ID**: `55270` — https://www.ncbi.nlm.nih.gov/gene/55270
- **Disease / Phenotype ID**: `MONDO:0000210` (thiopurine metabolic disease) — https://monarchinitiative.org/MONDO:0000210
- **HPO Terms Verified**:
  - `HP:0001882` (Decreased total leukocyte count) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0001882
  - `HP:0001875` (Decreased total neutrophil count) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0001875
  - `HP:0001596` (Alopecia) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0001596
- **CPIC Guidelines & Key PMIDs**:
  - CPIC Guideline for TPMT, NUDT15 and Thiopurines (Level A) — https://www.clinpgx.org/guideline/PA166251442
  - `PMID:25108385` — https://pubmed.ncbi.nlm.nih.gov/25108385/
  - `PMID:26878724` — https://pubmed.ncbi.nlm.nih.gov/26878724/
  - `PMID:30447069` — https://pubmed.ncbi.nlm.nih.gov/30447069/

---

## 7. `HLA-B` — `HLA-B*15:02` (Carbamazepine/Oxcarbazepine/Phenytoin SJS/TEN) & `HLA-B*58:01` (Allopurinol SCAR)
- **Date checked**: `2026-11-03`
- **Ensembl ID**: `ENSG00000234745` — https://www.ensembl.org/Homo_sapiens/Gene/Summary?g=ENSG00000234745
- **NCBI Entrez Gene ID**: `3106` — https://www.ncbi.nlm.nih.gov/gene/3106
- **Disease / Phenotype ID**: `MONDO:0005594` (severe cutaneous adverse reaction) — https://monarchinitiative.org/MONDO:0005594
- **HPO Terms Verified**:
  - `HP:0008066` (Abnormal blistering of the skin) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0008066
  - `HP:0200097` (Oral mucosal blisters) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0200097
  - `HP:0040186` (Maculopapular exanthema) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0040186
  - `HP:0001945` (Fever) — https://www.ebi.ac.uk/ols4/api/ontologies/hp/terms?obo_id=HP:0001945
- **CPIC Guidelines & Key PMIDs (including Taiwan landmark studies)**:
  - CPIC Guideline for HLA-A, HLA-B and Carbamazepine and Oxcarbazepine (Level A) — https://www.clinpgx.org/guideline/PA166251448
  - CPIC Guideline for CYP2C9, HLA-B and Phenytoin (Level A) — https://www.clinpgx.org/guideline/PA166251461
  - CPIC Guideline for HLA-B and Allopurinol (Level A) — https://www.clinpgx.org/guideline/PA166251446
  - `PMID:15057820` (Chung WH et al., Nature 2004, Taiwan HLA-B*15:02 SJS discovery) — https://pubmed.ncbi.nlm.nih.gov/15057820/
  - `PMID:21428768` (Chen P et al., NEJM 2011, Taiwan national HLA-B*15:02 screening before carbamazepine) — https://pubmed.ncbi.nlm.nih.gov/21428768/
  - `PMID:15743917` (Hung SI et al., PNAS 2005, Taiwan HLA-B*58:01 allopurinol SCAR discovery) — https://pubmed.ncbi.nlm.nih.gov/15743917/
  - `PMID:26399967` (Ko TM et al., BMJ 2015, Taiwan national HLA-B*58:01 screening before allopurinol) — https://pubmed.ncbi.nlm.nih.gov/26399967/
  - `PMID:23232549`, `PMID:26094938`, `PMID:29392710`, `PMID:32779747` — CPIC HLA-B guidelines

