export default {
  "gene": {
    "chinese_name": "BRCA2 DNA Repair Associated",
    "chromosome": "13q13.1 (Chromosome 13)",
    "metaphor": {
      "title": "🧬 The DNA Repair Team's 【RAD51 Recruiter】",
      "story": "When DNA suffers a double-strand break, the cell needs a precise repair process. BRCA2 acts like the site coordinator who brings the key repair tool RAD51 to the break. If the coordinator walks off the job, repair cannot be completed, errors accumulate, and over time the risk of breast, ovarian, prostate and pancreatic cancer rises."
    },
    "plain_summary": "BRCA2 is an important DNA repair gene. Carrying a pathogenic variant does NOT mean cancer is inevitable; it means lifetime risk of breast, ovarian, prostate and pancreatic cancer is higher than average, so earlier structured screening and genetic counseling are important.",
    "academic_summary": "BRCA2 is located at 13q13.1 and encodes a ~384-kDa nuclear protein that interacts with RAD51 through BRC repeats to mediate error-free homologous recombination (HR) repair of DNA double-strand breaks. Germline heterozygous pathogenic variants cause HR deficiency, producing autosomal dominant hereditary breast and ovarian cancer syndrome and conferring synthetic lethality sensitivity to PARP inhibitors."
  },
  "disease": {
    "chinese_name": "Hereditary Breast and Ovarian Cancer Syndrome (HBOC)",
    "categories": [
      "Malignant Neoplasm",
      "Hereditary Cancer Syndrome"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "⚠️ High Clinical Priority (Preventable & Treatable)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0003002",
      "name": "Breast carcinoma",
      "chinese_name": "Breast carcinoma"
    },
    {
      "hpo_id": "HP:0100615",
      "name": "Ovarian neoplasm",
      "chinese_name": "Ovarian neoplasm"
    },
    {
      "hpo_id": "HP:0012125",
      "name": "Prostate cancer",
      "chinese_name": "Prostate cancer"
    },
    {
      "hpo_id": "HP:0100787",
      "name": "Pancreatic neoplasm",
      "chinese_name": "Pancreatic neoplasm"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Olaparib",
      "chinese_name": "Olaparib (Lynparza)",
      "mechanism": "PARP1/2 inhibitor (synthetic lethality in HR-deficient tumors)",
      "approval_status": "FDA / TFDA / NMPA Approved"
    },
    {
      "drug_name": "Talazoparib",
      "chinese_name": "Talazoparib (Talzenna)",
      "mechanism": "Potent PARP1/2 inhibitor and PARP-DNA trapper",
      "approval_status": "FDA / TFDA / NMPA Approved"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": true,
    "key_variant": "Germline pathogenic variants (e.g., c.5946delT / rs80359550)",
    "population_frequency": "~1 in 400 to 1 in 800 in the general population, varying by ancestry (PMID:20301425)",
    "traffic_light_summary": "🟢 Targeted Therapy Sensitive: BRCA2-related tumors with germline pathogenic variants show synthetic lethality sensitivity to PARP inhibitors such as olaparib and talazoparib.",
    "drugs_guide": [
      {
        "drug_name": "Olaparib / Talazoparib",
        "chinese_name": "Olaparib / Talazoparib",
        "traffic_light": "GREEN_NORMAL",
        "clinical_alert": "Via synthetic lethality, patients with germline pathogenic BRCA2 variants derive significant clinical benefit from PARP inhibitor therapy.",
        "cpic_level": "FDA Companion Diagnostic / NCCN Category 1"
      }
    ],
    "dietary_contraindications": [
      "Strictly limit alcohol consumption",
      "Use long-term unopposed exogenous estrogen replacement therapy with caution"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Definitive International Clinical Consensus",
    "clinvar_summary_chinese": "Numerous clearly pathogenic BRCA2 variants curated in ClinVar and the literature",
    "key_pmids": [
      "PMID:20301425",
      "PMID:28522680"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "Following NCCN guidance, begin annual breast MRI plus mammography starting at age 25–30; discuss pancreatic surveillance if there is a family history of pancreatic cancer, and discuss prostate cancer screening for men.",
    "lifestyle_tips": [
      "Maintain a healthy body weight, regular sleep schedule, and low-saturated-fat diet",
      "Avoid tobacco and strictly limit alcohol intake",
      "Discuss reproductive planning and preimplantation genetic testing (PGT) with a genetic counseling team"
    ]
  },
  "doctor_checklist": {
    "specialty": "Breast Surgery / Medical Oncology / Clinical Genetics Clinic",
    "questions": [
      "My genetic report shows a BRCA2 variant. At what age should I start annual breast MRI?",
      "Do I need pancreatic or prostate cancer surveillance, and what tests and intervals do you recommend?",
      "Should my first-degree relatives undergo cascade genetic testing for this exact variant?",
      "If I plan to have children, is preimplantation genetic testing (PGT) appropriate for me?"
    ]
  },
  "myth_buster": {
    "myth": "“Testing positive for a BRCA2 mutation means I am 100% guaranteed to get cancer.”",
    "truth": "No. A pathogenic variant raises lifetime risk but is not a certainty. With structured screening, lifestyle changes and appropriate preventive measures, most carriers can achieve early detection and early treatment."
  }
};
