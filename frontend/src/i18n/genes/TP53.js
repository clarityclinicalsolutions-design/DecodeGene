export default {
  "gene": {
    "chinese_name": "Tumor Protein p53 (Guardian of the Genome)",
    "chromosome": "17p13.1 (Chromosome 17)",
    "metaphor": {
      "title": "🛑 The Cell’s 【Emergency Brake Pad / Genome Security Guard】",
      "story": "If cell division is a high-speed train, TP53 is the ultimate emergency brake and chief security officer. Whenever cell DNA is damaged by radiation or chemicals, TP53 hits the brakes so the cell can repair itself—or triggers self-destruction (apoptosis) if unrepairable. When germline TP53 fails, the train loses its emergency brake, making multiple tissues prone to early tumors."
    },
    "plain_summary": "TP53 is the body’s master tumor-suppressor switch. Germline pathogenic TP53 variants cause Li-Fraumeni syndrome (LFS). Carriers require annual radiation-free Whole-Body MRI for early detection and must strictly avoid unnecessary X-rays and CT radiation.",
    "academic_summary": "TP53 encodes tetrameric transcription factor p53, transactivating CDKN1A (p21), BAX, PUMA, and GADD45A in response to DNA damage to enforce G1/S arrest, DNA repair, or apoptosis. Germline heterozygous pathogenic variants cause autosomal dominant Li-Fraumeni syndrome (LFS)."
  },
  "disease": {
    "chinese_name": "Li-Fraumeni Syndrome (Hereditary Multi-Cancer Syndrome)",
    "categories": [
      "Hereditary Cancer Syndrome",
      "Rare Disease"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "🚨 High-Risk Syndrome (Lifelong Radiation-Free MRI Surveillance)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0002664",
      "name": "Neoplasm",
      "chinese_name": "Multi-organ neoplasm susceptibility"
    },
    {
      "hpo_id": "HP:0002897",
      "name": "Osteosarcoma",
      "chinese_name": "Osteosarcoma"
    },
    {
      "hpo_id": "HP:0003002",
      "name": "Breast carcinoma",
      "chinese_name": "Early-onset breast carcinoma"
    },
    {
      "hpo_id": "HP:0006744",
      "name": "Adrenocortical carcinoma",
      "chinese_name": "Adrenocortical carcinoma"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Eprenetapopt",
      "chinese_name": "Eprenetapopt (APR-246, Investigational p53 Reactivator)",
      "mechanism": "Restores wild-type conformation to mutant p53 protein and induces tumor apoptosis",
      "approval_status": "Clinical Trials (Phase II/III)"
    }
  ],
  "pharmacogenomics": {
    "key_variant": "Germline pathogenic variants (e.g., p.Arg175His / p.Arg248Gln / p.Arg273His)",
    "population_frequency": "~1 in 5,000 to 1 in 20,000 in the general population",
    "traffic_light_summary": "🔴 Avoid Unnecessary Ionizing Radiation & Genotoxic Radiotherapy: Defective DNA damage response means frequent CT scans or radiotherapy can induce secondary primary malignancies.",
    "drugs_guide": [
      {
        "drug_name": "Ionizing Radiation / Genotoxic Radiotherapy",
        "chinese_name": "Ionizing Radiation / Conventional Radiotherapy",
        "traffic_light": "RED_AVOID",
        "clinical_alert": "Germline TP53 carriers are hypersensitive to ionizing radiation. Use Whole-Body MRI and ultrasound instead of CT/mammography for routine surveillance, and prioritize surgical or non-genotoxic therapies.",
        "cpic_level": "NCCN LFS Guideline High Alert"
      }
    ],
    "dietary_contraindications": [
      "Strictly avoid tobacco, alcohol, aflatoxins, and nitrosamine-rich cured foods",
      "Avoid non-essential CT, PET-CT, and chest X-ray radiation exposure"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Definitive International Clinical Consensus",
    "clinvar_summary_chinese": "1,600+ curated pathogenic/likely pathogenic variants in ClinVar"
  },
  "lifestyle_prevention": {
    "screening_advice": "Follow the international Toronto Protocol: annual Whole-Body MRI and brain MRI; annual breast MRI for women starting at age 20 (avoid radiation-based mammography/CT for routine checkups); upper/lower endoscopy every 2–5 years.",
    "lifestyle_tips": [
      "[Core Rule] Always inform physicians of germline TP53 status before imaging—prioritize ultrasound and MRI, and avoid unnecessary CT/X-ray radiation",
      "Practice strict physical UV sun protection outdoors to prevent skin neoplasms",
      "Seek prompt medical evaluation for any unexplained bone pain, lumps, or persistent headaches"
    ]
  },
  "doctor_checklist": {
    "specialty": "Hereditary Cancer Clinic / Medical Oncology / Clinical Genetics",
    "questions": [
      "Doctor, I carry a germline TP53 variant. Can our hospital arrange annual Whole-Body MRI surveillance following the Toronto Protocol?",
      "For routine checkups, should I completely replace mammograms and chest CT scans with breast MRI and ultrasound?",
      "Should my parents, siblings, and children undergo targeted genetic testing for this variant?",
      "If I plan to have children, how can Preimplantation Genetic Testing (PGT-M) help prevent passing on the TP53 variant?"
    ]
  },
  "myth_buster": {
    "myth": "“Since TP53 mutations increase tumor risk, should I get a full-body PET-CT or contrast CT every six months to screen for cancer?”",
    "truth": "Never do that! CT and PET-CT deliver significant ionizing radiation. For people lacking TP53’s “emergency brake,” frequent CT scans can damage healthy cell DNA and induce new tumors. The gold standard for TP53 surveillance is zero-radiation Whole-Body MRI and ultrasound."
  }
};
