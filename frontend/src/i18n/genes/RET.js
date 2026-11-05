export default {
  "gene": {
    "chinese_name": "RET Proto-Oncogene (RET)",
    "chromosome": "10q11.21 (Chromosome 10)",
    "metaphor": {
      "title": "📡 The 【Growth Signal Antenna】 of Endocrine Glands",
      "story": "RET is a growth-signal antenna on the cell surface, normally helping nerve and kidney development. If a pathogenic variant leaves the antenna permanently on, thyroid C cells and adrenal medulla cells may overgrow, producing medullary thyroid carcinoma and pheochromocytoma. This is related to multiple endocrine neoplasia type 2 (MEN2)."
    },
    "plain_summary": "RET is an oncogene associated with multiple endocrine neoplasia type 2 (MEN2). A pathogenic variant raises the risk of medullary thyroid carcinoma and pheochromocytoma, is inherited in an autosomal dominant pattern, and first-degree relatives may carry the same variant. Early genetic testing, thyroid and adrenal surveillance, and surgery or targeted therapy when needed allow good risk management.",
    "academic_summary": "RET is located at 10q11.21 and encodes a receptor tyrosine kinase involved in GDNF-family signaling and nerve/kidney development. Germline activating pathogenic variants cause autosomal dominant multiple endocrine neoplasia type 2 (MEN2A/MEN2B), manifesting as medullary thyroid carcinoma, pheochromocytoma and hyperparathyroidism; tumors are sensitive to selective RET inhibitors."
  },
  "disease": {
    "chinese_name": "Multiple Endocrine Neoplasia Type 2 (MEN2)",
    "categories": [
      "Malignant Neoplasm",
      "Hereditary Endocrine Tumor Syndrome"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "⚠️ High Clinical Priority (Manageable with early surveillance and targeted therapy)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0002865",
      "name": "Medullary thyroid carcinoma",
      "chinese_name": "Medullary thyroid carcinoma"
    },
    {
      "hpo_id": "HP:0002666",
      "name": "Pheochromocytoma",
      "chinese_name": "Pheochromocytoma"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Selpercatinib",
      "chinese_name": "Selpercatinib (Retevmo)",
      "mechanism": "Selective RET inhibitor that suppresses RET-driven tumor growth",
      "approval_status": "FDA-approved / NCCN Category 1"
    },
    {
      "drug_name": "Pralsetinib",
      "chinese_name": "Pralsetinib (Gavreto)",
      "mechanism": "Selective RET inhibitor that suppresses RET-driven tumor growth",
      "approval_status": "FDA-approved / NCCN Category 1"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": true,
    "key_variant": "Germline activating RET pathogenic variants (e.g., M918T, C634); associated with MEN2 and RET-driven tumors",
    "population_frequency": "MEN2 affects about 1 in 30,000 people and varies by ancestry and variant type (PMID:20301434)",
    "traffic_light_summary": "🟢 Targeted Therapy Sensitive: RET-driven tumors such as medullary thyroid carcinoma respond well to selective RET inhibitors such as selpercatinib and pralsetinib, under FDA companion diagnostics and NCCN Category 1.",
    "drugs_guide": [
      {
        "drug_name": "Selpercatinib / Pralsetinib",
        "chinese_name": "Selpercatinib / Pralsetinib",
        "traffic_light": "GREEN_NORMAL",
        "clinical_alert": "RET-driven tumors respond well to selective RET inhibitors; RET variant status should be confirmed before use and assessed by an oncologist.",
        "cpic_level": "FDA Companion Diagnostic / NCCN Category 1"
      }
    ],
    "dietary_contraindications": [
      "No specific dietary restrictions; monitor blood pressure and thyroid-related markers as advised",
      "During targeted therapy, monitor liver function and adverse effects as advised"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Definitive International Clinical Consensus",
    "clinvar_summary_chinese": "Multiple activating RET pathogenic variants curated in ClinVar and the literature show a clear association with MEN2 and medullary thyroid carcinoma",
    "key_pmids": [
      "PMID:20301434",
      "PMID:32846060"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "Following NCCN guidance and medical advice, once MEN2 is diagnosed, monitor the thyroid (calcitonin and ultrasound) and adrenal glands (pheochromocytoma screening) regularly; discuss prophylactic thyroidectomy and targeted therapy when indicated; family members should receive RET genetic testing.",
    "lifestyle_tips": [
      "Monitor blood pressure as advised and seek care early for episodic headache, palpitations or sweating",
      "Do not stop or adjust targeted therapy on your own",
      "Family members should receive genetic counseling and RET genetic testing"
    ]
  },
  "doctor_checklist": {
    "specialty": "Endocrinology / Medical Oncology / Endocrine Surgery / Clinical Genetics Clinic",
    "questions": [
      "My genetic report shows a RET variant. When and how should my medullary thyroid carcinoma be monitored?",
      "Do I need pheochromocytoma screening, and what tests do you recommend?",
      "Am I a candidate for RET inhibitors such as selpercatinib or pralsetinib?",
      "Should my first-degree relatives undergo cascade genetic testing for this exact variant?"
    ]
  },
  "myth_buster": {
    "myth": "“MEN2 thyroid tumors are benign, so they do not need early management.”",
    "truth": "Not true. MEN2-associated medullary thyroid carcinoma is malignant, and early surveillance with surgery or targeted therapy when indicated is important. Genetic testing helps family members identify risk early."
  }
};
