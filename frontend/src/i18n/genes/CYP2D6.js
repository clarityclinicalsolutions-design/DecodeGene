export default {
  "gene": {
    "chinese_name": "Cytochrome P450 2D6 (Opioid & Tamoxifen Metabolism Gene)",
    "chromosome": "22q13.2 (Chromosome 22)",
    "metaphor": {
      "title": "🔑 The Liver's 【Painkiller & Hormone Drug Engineer】",
      "story": "Codeine and tramadol are not fully active painkillers until the liver's CYP2D6 engineer converts them into their active metabolites. If the engineer works too fast (ultrarapid metabolizer), the drug may produce too much active metabolite and increase respiratory depression risk; if too slow (poor metabolizer), pain relief may be inadequate. Tamoxifen also relies partly on this enzyme to form active metabolites."
    },
    "plain_summary": "CYP2D6 converts codeine and tramadol into active metabolites and contributes to tamoxifen metabolism. Ultrarapid metabolizers may have a higher risk of respiratory depression with codeine or tramadol, while poor metabolizers may get insufficient pain relief. Your doctor can choose an alternative drug or adjust therapy based on your genotype.",
    "academic_summary": "CYP2D6 encodes cytochrome P450 2D6, which catalyzes O-demethylation of the opioid prodrugs codeine and tramadol and contributes to tamoxifen activation. Common alleles include reduced-function *10 (rs1065852), no-function *4 (rs3892097) and *5 (gene deletion), and increased-function *2A and *17."
  },
  "disease": {
    "chinese_name": "Codeine Toxicity & CYP2D6 Metabolism Variation",
    "categories": [
      "Pharmacogenomics (PGx)",
      "Pain & Oncology Drug Safety"
    ],
    "inheritance_mode": "Autosomal Codominant Metabolic Phenotype",
    "severity_badge": "🔴 Codeine, Tramadol & Tamoxifen Traffic Light"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0002791",
      "name": "Hypoventilation",
      "chinese_name": "Respiratory depression / hypoventilation risk"
    },
    {
      "hpo_id": "HP:0001250",
      "name": "Seizure",
      "chinese_name": "Seizure risk"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Codeine",
      "chinese_name": "Codeine",
      "mechanism": "Opioid prodrug requiring CYP2D6 conversion to morphine",
      "approval_status": "CPIC Level A / FDA Label"
    },
    {
      "drug_name": "Tramadol",
      "chinese_name": "Tramadol",
      "mechanism": "Opioid analgesic requiring CYP2D6 activation",
      "approval_status": "CPIC Level A / FDA Label"
    },
    {
      "drug_name": "Tamoxifen",
      "chinese_name": "Tamoxifen",
      "mechanism": "Selective estrogen receptor modulator; some active metabolites depend on CYP2D6",
      "approval_status": "CPIC Level A"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": true,
    "key_variant": "CYP2D6 *10 (rs1065852), *4 (rs3892097), *5 (gene deletion), *2A, *17; ultrarapid, intermediate and poor metabolizer phenotypes",
    "population_frequency": "In East Asians, *10 allele frequency is about 40%–50% and *4 is less common than in Europeans; ultrarapid metabolizers are less frequent (PMID:33387367)",
    "traffic_light_summary": "🔴 Ultrarapid metabolizers may rapidly produce large amounts of active metabolites from codeine or tramadol, increasing respiratory depression risk; avoid these drugs. 🟡 Poor metabolizers may have inadequate analgesia; your doctor should choose an alternative analgesic. For tamoxifen, poor metabolizers may have reduced efficacy; your doctor should consider an alternative or adjust strategy.",
    "drugs_guide": [
      {
        "drug_name": "Codeine (ultrarapid metabolizer)",
        "chinese_name": "Codeine — Ultrarapid Metabolizer",
        "traffic_light": "RED_AVOID",
        "clinical_alert": "CYP2D6 ultrarapid metabolizers may rapidly convert codeine to morphine, causing respiratory depression or life-threatening toxicity. Avoid codeine and choose a CYP2D6-independent analgesic.",
        "cpic_level": "CPIC 2021 CYP2D6/OPRM1/COMT Opioid Guideline Level A / FDA Label"
      },
      {
        "drug_name": "Tramadol (ultrarapid metabolizer)",
        "chinese_name": "Tramadol — Ultrarapid Metabolizer",
        "traffic_light": "RED_AVOID",
        "clinical_alert": "CYP2D6 ultrarapid metabolizers may have increased active metabolite exposure and respiratory depression risk with tramadol. Avoid tramadol and ask your doctor about alternatives.",
        "cpic_level": "CPIC 2021 CYP2D6/OPRM1/COMT Opioid Guideline Level A / FDA Label"
      },
      {
        "drug_name": "Codeine / Tramadol (poor metabolizer)",
        "chinese_name": "Codeine / Tramadol — Poor Metabolizer",
        "traffic_light": "YELLOW_CAUTION",
        "clinical_alert": "CYP2D6 poor metabolizers may not form enough active metabolite for adequate analgesia. Your doctor should choose another analgesic.",
        "cpic_level": "CPIC 2021 CYP2D6/OPRM1/COMT Opioid Guideline Level A"
      },
      {
        "drug_name": "Tamoxifen (poor / intermediate metabolizer)",
        "chinese_name": "Tamoxifen — Poor or Intermediate Metabolizer",
        "traffic_light": "YELLOW_CAUTION",
        "clinical_alert": "Poor or intermediate metabolizers may form less active tamoxifen metabolite. Premenopausal breast cancer patients should be evaluated by an oncologist for alternative endocrine therapy or a modified strategy.",
        "cpic_level": "CPIC 2018 CYP2D6 and Tamoxifen Guideline Level A"
      }
    ],
    "dietary_contraindications": [
      "Avoid alcohol while taking codeine or tramadol because it can worsen central nervous system and respiratory depression",
      "Do not combine tamoxifen with strong CYP2D6 inhibitors without consulting your doctor or pharmacist"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A opioid and tamoxifen guidance",
    "clinvar_summary_chinese": "ClinVar and PharmGKB contain CYP2D6 *4, *5, *10 and *17 drug-response alleles",
    "key_pmids": [
      "PMID:33387367"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "Before using codeine, tramadol or tamoxifen, discuss CYP2D6 testing with your doctor if you have had adverse reactions or poor response.",
    "lifestyle_tips": [
      "Tell your doctor and pharmacist your CYP2D6 metabolizer status and avoid self-medicating with codeine-containing products",
      "Do not stop or change tamoxifen on your own; discuss any side effects at follow-up",
      "Keep your genetic test result on your phone or in your wallet for clinic visits"
    ]
  },
  "doctor_checklist": {
    "specialty": "Clinical Pharmacy / Pain Medicine / Oncology",
    "questions": [
      "My CYP2D6 result suggests I may be an ultrarapid or poor metabolizer. Am I a candidate for codeine or tramadol?",
      "If I need pain relief, what alternatives do not depend on CYP2D6?",
      "I am taking tamoxifen. Could my CYP2D6 status affect its efficacy or my treatment plan?"
    ]
  },
  "myth_buster": {
    "myth": "“If my doctor prescribes codeine or tramadol, it must be safe for me.”",
    "truth": "Not necessarily. CYP2D6 ultrarapid metabolizers may rapidly convert codeine to morphine and face respiratory depression, while poor metabolizers may get inadequate pain relief. The right analgesic strategy depends on genotype and clinical context."
  }
};
