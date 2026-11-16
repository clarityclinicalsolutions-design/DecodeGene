export default {
  "gene": {
    "chinese_name": "Cytochrome P450 2C8 (NSAID, Pioglitazone & Paclitaxel Metabolism Gene)",
    "chromosome": "10q23.33 (Chromosome 10)",
    "metaphor": {
      "title": "⚙️ The Liver's 【Second Metabolism Line】 (A slow line raises analgesic and glucose-drug exposure)",
      "story": "CYP2C8 is the liver's second processing line for ibuprofen, pioglitazone and paclitaxel. When this line runs slowly because of *3 or *4 variants, the drugs and their metabolites stay in the body longer, so gastrointestinal irritation, edema, muscle symptoms or bone-marrow suppression may increase; analgesic risk must also be assessed alongside CYP2C9."
    },
    "plain_summary": "CYP2C8 metabolizes several NSAIDs, the glucose-lowering drug pioglitazone and the anticancer drug paclitaxel. Carriers of decreased-function variants such as *3 or *4 clear these drugs more slowly, raising gastrointestinal, edema, muscle or bone-marrow side-effect risks; analgesics often require combined CYP2C9 assessment. Genetic testing, alternative analgesics and specialist monitoring can reduce adverse effects.",
    "academic_summary": "CYP2C8 is located at 10q23.33 and encodes hepatic cytochrome P450 2C8, which oxidizes paclitaxel, pioglitazone, ibuprofen, repaglinide and amodiaquine. Decreased-function alleles CYP2C8*3 (rs11572080, rs10509681) and *4 (rs1058930) reduce enzyme activity and are associated with paclitaxel exposure, neurotoxicity and myelotoxicity, as well as pioglitazone and NSAID side effects."
  },
  "disease": {
    "chinese_name": "CYP2C8 Analgesic, Glucose-Lowering and Anticancer Drug Metabolism Variability (PGx)",
    "categories": ["Pharmacogenomics (PGx)", "Analgesic and Anti-inflammatory Drug Safety", "Glucose-Lowering and Anticancer Drug Monitoring"],
    "inheritance_mode": "Autosomal Codominant Metabolic Phenotype",
    "severity_badge": "🟡 Drug Exposure and Side-Effect Alert (assess together with CYP2C9)"
  },
  "phenotypes": [
    { "hpo_id": "HP:0002239", "name": "Gastrointestinal hemorrhage", "chinese_name": "Gastrointestinal bleeding and mucosal irritation risk" },
    { "hpo_id": "HP:0001392", "name": "Abnormality of the liver", "chinese_name": "Drug-metabolism organ burden" }
  ],
  "drugs_targeted": [
    { "drug_name": "Ibuprofen / Pioglitazone / Paclitaxel", "chinese_name": "Ibuprofen / Pioglitazone / Paclitaxel", "mechanism": "Metabolized mainly by CYP2C8; slow metabolizers have higher exposure and side-effect risk", "approval_status": "CPIC and PharmGKB pharmacogene assessment" },
    { "drug_name": "Acetaminophen / Naproxen", "chinese_name": "Acetaminophen / Naproxen", "mechanism": "Analgesic alternatives not primarily dependent on CYP2C8 metabolism", "approval_status": "Standard analgesic prescription (guided by liver and kidney function)" }
  ],
  "pharmacogenomics": {
    "key_variant": "CYP2C8*3 (rs11572080, rs10509681), CYP2C8*4 (rs1058930) and other decreased-function alleles",
    "population_frequency": "CYP2C8*3 is more common in Europeans, while East Asians carry other decreased-function variants; all are associated with reduced drug clearance (PMID:32189324)",
    "traffic_light_summary": "🟡 Caution and monitoring: CYP2C8 slow metabolizers clear ibuprofen, pioglitazone or paclitaxel more slowly, raising gastrointestinal, edema, muscle or bone-marrow side-effect risks. Analgesics often require combined CYP2C9 assessment, and paclitaxel requires oncology monitoring of exposure and toxicity. Discuss analgesic alternatives not primarily dependent on CYP2C8.",
    "drugs_guide": [
      { "drug_name": "Ibuprofen / Pioglitazone / Paclitaxel", "chinese_name": "Ibuprofen / Pioglitazone / Paclitaxel", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "CYP2C8 slow metabolizers clear ibuprofen, pioglitazone or paclitaxel more slowly, increasing gastrointestinal bleeding, edema, muscle symptoms or bone-marrow suppression; analgesics often require combined CYP2C9 assessment, and paclitaxel requires oncology monitoring of toxicity and exposure.", "cpic_level": "CPIC Guideline for CYP2C8 and Paclitaxel / PharmGKB" },
      { "drug_name": "Acetaminophen / Naproxen", "chinese_name": "Acetaminophen / Naproxen", "traffic_light": "GREEN_NORMAL", "clinical_alert": "Acetaminophen and naproxen are not primarily dependent on CYP2C8 and may be considered as analgesic alternatives after physician assessment; acetaminophen still requires total-dose and liver caution, and naproxen still carries gastrointestinal and kidney risks.", "cpic_level": "PharmGKB Analgesic Alternative Guidance" }
    ],
    "dietary_contraindications": [
      "Avoid taking NSAIDs on an empty stomach and avoid combining them with alcohol to reduce gastrointestinal bleeding risk",
      "While taking pioglitazone, watch for fluid retention, weight change and cardiac burden; report marked edema or breathlessness",
      "During paclitaxel therapy, follow oncology blood-count and neurologic monitoring and do not self-add analgesics or supplements"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️ Clear CPIC and PharmGKB pharmacogenomic evidence",
    "clinvar_summary_chinese": "ClinVar and CPIC include CYP2C8*3 and *4 decreased-function variants associated with paclitaxel, pioglitazone and NSAID exposure and side effects"
  },
  "lifestyle_prevention": {
    "screening_advice": "If you need long-term NSAIDs, are receiving paclitaxel chemotherapy, or have had adverse reactions to pioglitazone, discuss CYP2C8 (and CYP2C9) pharmacogenetic testing and a monitoring plan with your physician.",
    "lifestyle_tips": [
      "Show your CYP2C8 result to your physician and pharmacist and discuss analgesic and glucose-lowering drug choices",
      "Avoid long-term self-purchased NSAIDs, and seek care early for black stools, abdominal pain or edema",
      "During chemotherapy, follow blood-count, neurologic and liver monitoring and avoid unapproved drug combinations"
    ]
  },
  "doctor_checklist": {
    "specialty": "Family Medicine / Rheumatology / Endocrinology / Oncology / Clinical Pharmacy",
    "questions": [
      "My CYP2C8 test shows a slow-metabolizer genotype. Should my analgesic or pioglitazone choice change?",
      "If I need paclitaxel chemotherapy, how does my genotype affect toxicity monitoring and dosing strategy?",
      "Which analgesic alternatives are not primarily dependent on CYP2C8 and can be considered alongside my CYP2C9 genotype?"
    ]
  },
  "myth_buster": {
    "myth": "“Side effects of analgesics and glucose-lowering drugs depend only on dose, not on metabolism genes.”",
    "truth": "Not entirely. CYP2C8 slow metabolism makes ibuprofen, pioglitazone and paclitaxel persist longer, increasing side-effect risk. Drug selection and monitoring should consider CYP2C8, CYP2C9, liver and kidney function, and the clinical picture together."
  }
};
