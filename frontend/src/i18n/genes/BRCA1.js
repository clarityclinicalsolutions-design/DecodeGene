export default {
  "gene": {
    "chinese_name": "BRCA1 DNA Repair Associated",
    "chromosome": "17q21.31 (Chromosome 17)",
    "metaphor": {
      "title": "🧬 The Cell’s 【DNA Auto Mechanic】",
      "story": "Our cells run at high speed every day, and minor DNA damage is inevitable. BRCA1 acts like an experienced master mechanic who spots damage and fixes it immediately. If this mechanic carries a pathogenic mutation (goes on strike), damaged parts remain unrepaired while the car keeps driving—increasing the risk of a major accident (malignant tumor) over time."
    },
    "plain_summary": "BRCA1 is one of the body’s natural anti-cancer guardians. Carrying a pathogenic variant does NOT mean cancer is inevitable; it increases lifetime susceptibility to breast and ovarian cancer, making earlier MRI screening and proactive prevention essential.",
    "academic_summary": "BRCA1 encodes a 190-kDa nuclear phosphoprotein (RING finger & BRCT domains) mediating error-free homologous recombination (HR) repair of DNA double-strand breaks via RAD51. Germline heterozygous pathogenic variants impair HR, elevating breast/ovarian cancer risk and conferring synthetic lethality sensitivity to PARP inhibitors."
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
      "hpo_id": "HP:0010519",
      "name": "Fallopian tube carcinoma",
      "chinese_name": "Fallopian tube carcinoma"
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
    "key_variant": "Germline pathogenic variants (e.g., c.5266dupC / rs80357906)",
    "population_frequency": "~1 in 400 to 1 in 800 in the general population",
    "traffic_light_summary": "🟢 Targeted Therapy Sensitive: Germline pathogenic BRCA1 carriers show high sensitivity to PARP inhibitors (Olaparib, Talazoparib) and platinum chemotherapy.",
    "drugs_guide": [
      {
        "drug_name": "Olaparib / Talazoparib",
        "chinese_name": "Olaparib / Talazoparib",
        "traffic_light": "GREEN_NORMAL",
        "clinical_alert": "Via synthetic lethality, patients with germline pathogenic BRCA1 variants derive significant clinical benefit from PARP inhibitor therapy.",
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
    "clinvar_summary_chinese": "3,500+ curated pathogenic variants in ClinVar"
  },
  "lifestyle_prevention": {
    "screening_advice": "Begin clinical breast exams every 6–12 months starting at age 25; perform annual contrast-enhanced breast MRI combined with mammography starting at age 30.",
    "lifestyle_tips": [
      "Maintain a healthy body weight, regular sleep schedule, and low-saturated-fat diet",
      "Avoid tobacco and strictly limit alcohol intake (alcohol elevates estrogen levels)",
      "Consider breastfeeding when appropriate under medical guidance to help lower risk"
    ]
  },
  "doctor_checklist": {
    "specialty": "Breast Surgery / Medical Oncology / Clinical Genetics Clinic",
    "questions": [
      "Doctor, my genetic report shows a BRCA1 variant. At what age should I start annual contrast-enhanced breast MRI?",
      "Beyond breast imaging, what regular screening do you recommend for my ovaries and fallopian tubes (CA-125, transvaginal ultrasound)?",
      "Should my first-degree relatives (mother, sisters, children) undergo cascade genetic testing for this exact variant?",
      "If I plan to have children in the future, is Preimplantation Genetic Testing (PGT-M) available to prevent passing on this variant?"
    ]
  },
  "myth_buster": {
    "myth": "“Does testing positive for a BRCA1 mutation mean I am 100% guaranteed to get cancer in a few years?”",
    "truth": "No! Carrying a pathogenic variant increases lifetime probability (~60%–70% vs. ~12% in the general population), not a 100% certainty. With structured MRI screening and preventive options, most carriers live long, healthy lives with early detection and cure."
  }
};
