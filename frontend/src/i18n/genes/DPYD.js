export default {
  "gene": {
    "chinese_name": "Dihydropyrimidine Dehydrogenase (Fluoropyrimidine Metabolism Gene)",
    "chromosome": "1p21.3 (Chromosome 1)",
    "metaphor": {
      "title": "🛡️ The Body's 【Chemotherapy Detox Recycling Plant】",
      "story": "5-FU and capecitabine are common fluoropyrimidine chemotherapy drugs that depend on the DPYD detox plant for breakdown. If the plant runs at low capacity, the drug and its metabolites can accumulate, causing severe diarrhea, mouth ulcers, low blood counts and even life-threatening toxicity."
    },
    "plain_summary": "DPYD breaks down fluoropyrimidine chemotherapy drugs. People with loss-of-function DPYD variants may develop severe or even fatal toxicity from 5-FU or capecitabine. Before treatment, an oncology specialist should assess genotype and, if needed, avoid the drug or markedly adjust the dose.",
    "academic_summary": "DPYD encodes dihydropyrimidine dehydrogenase, the rate-limiting enzyme of pyrimidine degradation that inactivates 5-fluorouracil. DPYD *2A (rs3918290), c.2846A>T (rs67376798), *13 (rs55886062) and HapB3 (rs56038477) reduce enzyme activity and increase systemic fluoropyrimidine exposure and toxicity risk."
  },
  "disease": {
    "chinese_name": "Dihydropyrimidine Dehydrogenase Deficiency",
    "categories": [
      "Pharmacogenomics (PGx)",
      "Oncology Chemotherapy Safety"
    ],
    "inheritance_mode": "Autosomal Recessive",
    "severity_badge": "🔴 Severe Fluoropyrimidine Toxicity Red Light"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0002014",
      "name": "Diarrhea",
      "chinese_name": "Severe diarrhea"
    },
    {
      "hpo_id": "HP:0001875",
      "name": "Decreased total neutrophil count",
      "chinese_name": "Neutropenia"
    },
    {
      "hpo_id": "HP:0001903",
      "name": "Anemia",
      "chinese_name": "Anemia"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Fluorouracil (5-FU)",
      "chinese_name": "Fluorouracil (5-FU)",
      "mechanism": "Pyrimidine analog chemotherapy detoxified by DPYD",
      "approval_status": "CPIC Level A / FDA Label"
    },
    {
      "drug_name": "Capecitabine",
      "chinese_name": "Capecitabine",
      "mechanism": "Oral fluoropyrimidine prodrug ultimately detoxified by DPYD",
      "approval_status": "CPIC Level A / FDA Label"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": true,
    "key_variant": "DPYD *2A (rs3918290), c.2846A>T (rs67376798), *13 (rs55886062), HapB3 (rs56038477)",
    "population_frequency": "Loss-of-function DPYD alleles are uncommon in East Asians (generally below 1%), but severe fluoropyrimidine toxicity can still occur (PMID:29152729)",
    "traffic_light_summary": "🔴 Partial or complete DPD deficiency may cause severe or fatal toxicity with 5-FU or capecitabine; avoid systemic fluoropyrimidines or have an oncology specialist markedly reduce the dose. 🟡 Intermediate metabolizers need a reduced starting dose and close monitoring.",
    "drugs_guide": [
      {
        "drug_name": "Fluorouracil (5-FU) — DPD deficient",
        "chinese_name": "Fluorouracil (5-FU) — DPD Deficient",
        "traffic_light": "RED_AVOID",
        "clinical_alert": "DPD deficiency can cause severe myelosuppression, mucositis and diarrhea, and may be fatal with systemic 5-FU. Avoid use; if unavoidable, an oncology specialist must markedly reduce the dose and monitor closely.",
        "cpic_level": "CPIC 2017 DPYD and Fluoropyrimidine Dosing Guideline Level A / FDA Label"
      },
      {
        "drug_name": "Capecitabine — DPD deficient",
        "chinese_name": "Capecitabine — DPD Deficient",
        "traffic_light": "RED_AVOID",
        "clinical_alert": "Capecitabine is converted to 5-FU and can cause severe toxicity in DPD-deficient patients. Avoid use or markedly reduce the dose under oncology supervision.",
        "cpic_level": "CPIC 2017 DPYD and Fluoropyrimidine Dosing Guideline Level A / FDA Label"
      },
      {
        "drug_name": "Fluorouracil / Capecitabine — intermediate metabolizer",
        "chinese_name": "Fluorouracil / Capecitabine — Intermediate Metabolizer",
        "traffic_light": "YELLOW_CAUTION",
        "clinical_alert": "Partially reduced DPD activity increases fluoropyrimidine toxicity risk. An oncology specialist should reduce the starting dose and monitor blood counts and mucosal toxicity closely.",
        "cpic_level": "CPIC 2017 DPYD and Fluoropyrimidine Dosing Guideline Level A"
      }
    ],
    "dietary_contraindications": [
      "Avoid self-supplementing with uracil or nucleoside-analog products during treatment because they may interfere with drug metabolism",
      "Contact your care team promptly for mouth ulcers, severe diarrhea, fever or unusual fatigue"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A fluoropyrimidine dosing guidance",
    "clinvar_summary_chinese": "ClinVar and PharmGKB contain DPYD *2A, c.2846A>T, *13 and HapB3 loss-of-function variants",
    "key_pmids": [
      "PMID:29152729"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "Before starting 5-FU or capecitabine, ask your oncology team whether DPYD genotyping is appropriate.",
    "lifestyle_tips": [
      "Maintain hydration and oral care during chemotherapy to reduce mucositis and dehydration risk",
      "Do not self-treat fever, chills or severe diarrhea; contact your care team promptly",
      "Share your DPYD result with every clinician involved in your treatment"
    ]
  },
  "doctor_checklist": {
    "specialty": "Medical Oncology / Clinical Pharmacy",
    "questions": [
      "I am scheduled for 5-FU or capecitabine. Should I have DPYD genotyping first?",
      "If my DPYD result shows reduced activity, how should the starting dose be adjusted?",
      "Which symptoms during treatment should prompt an urgent call or emergency visit?"
    ]
  },
  "myth_buster": {
    "myth": "“Chemotherapy doses are calculated by my doctor, so genetic testing is unnecessary.”",
    "truth": "Not true. People with DPYD deficiency can develop severe or fatal toxicity at standard fluoropyrimidine doses. Pretreatment DPYD genotyping helps the oncology team choose a safer starting dose or an alternative regimen."
  }
};
