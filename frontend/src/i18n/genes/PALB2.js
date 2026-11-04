export default {
  "gene": {
    "chinese_name": "Partner and Localizer of BRCA2 (PALB2)",
    "chromosome": "16p12.2 (Chromosome 16)",
    "metaphor": {
      "title": "🧬 The DNA Repair Team's 【Navigator and Partner】",
      "story": "The name PALB2 describes its role: it is BRCA2's partner and guides BRCA2 to the site of DNA damage. Without this navigator, BRCA2 cannot reach the repair site. When repair efficiency falls, the risk of breast and pancreatic cancer rises."
    },
    "plain_summary": "PALB2 is an important partner gene that helps BRCA2 repair DNA. Carrying a pathogenic variant does NOT mean cancer is inevitable; it means the risk of breast and pancreatic cancer is higher than average, so earlier breast imaging, pancreatic surveillance and genetic counseling should be discussed with a doctor.",
    "academic_summary": "PALB2 is located at 16p12.2 and encodes a BRCA2-binding protein that localizes BRCA2 to DNA damage sites and promotes RAD51-dependent homologous recombination repair. Germline heterozygous pathogenic variants are associated with hereditary breast and ovarian cancer syndrome and pancreatic cancer susceptibility in an autosomal dominant pattern, and tumors are similarly sensitive to PARP inhibitors."
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
    }
  ],
  "pharmacogenomics": {
    "has_pgx": true,
    "key_variant": "Germline pathogenic variants (e.g., c.3113G>A / rs118203985)",
    "population_frequency": "PALB2 pathogenic variants are relatively uncommon in the general population, and carrier frequency varies by ancestry (PMID:25099575)",
    "traffic_light_summary": "🟢 Targeted Therapy Sensitive: PALB2-related homologous recombination-deficient tumors are sensitive to PARP inhibitors such as olaparib, supported by guideline and clinical trial evidence.",
    "drugs_guide": [
      {
        "drug_name": "Olaparib",
        "chinese_name": "Olaparib (Lynparza)",
        "traffic_light": "GREEN_NORMAL",
        "clinical_alert": "Germline pathogenic PALB2 variants cause homologous recombination deficiency, and PARP inhibitors can provide clinical benefit through synthetic lethality.",
        "cpic_level": "NCCN Guideline / Clinical Trial Evidence"
      }
    ],
    "dietary_contraindications": [
      "Strictly limit alcohol consumption",
      "Use long-term unopposed exogenous estrogen replacement therapy with caution"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️ Supported by international guidelines and clinical trials",
    "clinvar_summary_chinese": "Multiple PALB2 pathogenic variants curated in ClinVar and the literature are associated with breast and pancreatic cancer susceptibility",
    "key_pmids": [
      "PMID:25099575",
      "PMID:31841383"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "Following NCCN guidance and medical advice, discuss beginning annual breast MRI plus mammography at an earlier age; if there is a family history of pancreatic cancer, discuss pancreatic surveillance.",
    "lifestyle_tips": [
      "Maintain a healthy body weight, regular sleep schedule, and low-saturated-fat diet",
      "Avoid tobacco and strictly limit alcohol intake",
      "Discuss family screening and reproductive planning with a genetic counseling team"
    ]
  },
  "doctor_checklist": {
    "specialty": "Breast Surgery / Medical Oncology / Clinical Genetics Clinic",
    "questions": [
      "My genetic report shows a PALB2 variant. At what age should I start annual breast MRI?",
      "Do I need pancreatic cancer surveillance, and what tests and intervals do you recommend?",
      "Should my first-degree relatives undergo cascade genetic testing for this exact variant?",
      "If my tumor is homologous recombination deficient, am I a candidate for PARP inhibitors?"
    ]
  },
  "myth_buster": {
    "myth": "“PALB2 is not BRCA, so it does not matter.”",
    "truth": "Not true. PALB2 is an important partner of BRCA2, and pathogenic variants also raise breast and pancreatic cancer risk. Genetic counseling and appropriate screening allow early assessment and management."
  }
};
