export default {
  "gene": {
    "chinese_name": "Cytochrome P450 2C9 (Warfarin, Phenytoin & NSAID Metabolism Gene)",
    "chromosome": "10q23.33 (Chromosome 10)",
    "metaphor": {
      "title": "⏳ The Liver's 【Medication Clearance Hourglass】",
      "story": "Medications such as the anticoagulant Warfarin, the antiseizure drug Phenytoin, and common NSAID pain relievers are cleared from the bloodstream at a steady pace through the liver's CYP2C9 hourglass. If you carry decreased-function alleles (*2 or *3), the neck of the hourglass narrows: drugs drain out much more slowly and accumulate in the body, raising the risk of bleeding or drug toxicity."
    },
    "plain_summary": "CYP2C9 clears narrow-therapeutic-index drugs including Warfarin, Phenytoin, and several NSAIDs (celecoxib, flurbiprofen, meloxicam, piroxicam, ibuprofen). Carriers of *2 or *3 alleles metabolize these drugs more slowly; your doctor may adjust the dose, intensify INR/therapeutic monitoring, or choose another drug.",
    "academic_summary": "CYP2C9 encodes hepatic cytochrome P450 2C9, the primary enzyme clearing S-warfarin, phenytoin, and multiple oxicam/coxib NSAIDs. Decreased-function alleles CYP2C9*2 (rs1799853, c.430C>T, p.Arg144Cys) and CYP2C9*3 (rs1057910, c.1075A>C, p.Ile359Leu) reduce intrinsic clearance, elevating systemic exposure and risks of hemorrhage, neurotoxicity, or GI bleeding."
  },
  "disease": {
    "chinese_name": "Warfarin / Phenytoin / NSAID Clearance Sensitivity (CYP2C9 PGx)",
    "categories": ["Pharmacogenomics (PGx)", "Anticoagulation & Analgesic Safety"],
    "inheritance_mode": "Autosomal Codominant Metabolic Phenotype",
    "severity_badge": "🟡 High-Alert Dose Sensitivity (Physician Dose Adjustment & Monitoring)"
  },
  "phenotypes": [
    { "hpo_id": "HP:0001892", "name": "Abnormal bleeding", "chinese_name": "Abnormal bleeding (anticoagulant over-exposure)" },
    { "hpo_id": "HP:0002239", "name": "Gastrointestinal hemorrhage", "chinese_name": "Gastrointestinal hemorrhage risk" },
    { "hpo_id": "HP:0001251", "name": "Ataxia", "chinese_name": "Phenytoin-related ataxia / neurotoxicity" }
  ],
  "drugs_targeted": [
    { "drug_name": "Warfarin", "chinese_name": "Warfarin (Coumadin)", "mechanism": "Vitamin K epoxide reductase inhibitor whose potent S-enantiomer is cleared by CYP2C9", "approval_status": "CPIC Level A / FDA Label Actionable PGx" },
    { "drug_name": "Phenytoin / NSAIDs", "chinese_name": "Phenytoin / NSAIDs (Celecoxib, Meloxicam, Piroxicam, Ibuprofen)", "mechanism": "Anticonvulsant and anti-inflammatory drugs cleared via CYP2C9", "approval_status": "CPIC Level A / PharmGKB Level 1A" }
  ],
  "pharmacogenomics": {
    "key_variant": "CYP2C9*2 (rs1799853, c.430C>T, p.Arg144Cys), CYP2C9*3 (rs1057910, c.1075A>C, p.Ile359Leu)",
    "population_frequency": "CYP2C9*3 allele frequency is ~3%–4% in East Asians; in Europeans, *2 is ~12% and *3 is ~7%–8% (PMID:28198005)",
    "traffic_light_summary": "🟡 Caution / Dose Adjustment: CYP2C9 *2 or *3 carriers clear Warfarin, Phenytoin, and NSAIDs more slowly; your doctor may adjust the dose or select an alternative medication with close monitoring.",
    "drugs_guide": [
      { "drug_name": "Warfarin", "chinese_name": "Warfarin (Oral Anticoagulant)", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "CYP2C9 *2 and *3 variants impair S-warfarin clearance and increase bleeding risk. Your doctor may adjust the dose alongside VKORC1 genotype or consider an alternative anticoagulant.", "cpic_level": "CPIC Guideline for CYP2C9, VKORC1, CYP4F2 and Warfarin Level A" },
      { "drug_name": "Phenytoin / Fosphenytoin", "chinese_name": "Phenytoin / Fosphenytoin (Antiseizure Medication)", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "CYP2C9 intermediate and poor metabolizers have reduced phenytoin clearance and higher risk of neurotoxicity (ataxia, nystagmus); your doctor may adjust therapy or choose another drug (after checking HLA-B*15:02).", "cpic_level": "CPIC Guideline for CYP2C9, HLA-B and Phenytoin Level A" },
      { "drug_name": "NSAIDs (Celecoxib, Flurbiprofen, Meloxicam, Piroxicam, Ibuprofen)", "chinese_name": "NSAID Pain Relievers (Celecoxib, Meloxicam, Piroxicam, Ibuprofen)", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "CYP2C9 poor and intermediate metabolizers experience elevated plasma NSAID exposure and increased GI and renal risks; your doctor may adjust the dose or choose an alternative analgesic.", "cpic_level": "CPIC Guideline for CYP2C9 and NSAIDs Level A" }
    ],
    "dietary_contraindications": [
      "When taking Warfarin, keep daily dietary vitamin K intake (dark leafy greens, natto) consistent",
      "Avoid binge alcohol use and unauthorized herbal supplements (Danshen, Ginkgo, St. John's Wort) that alter CYP2C9 clearance"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A & FDA Label Pharmacogenetic Consensus",
    "clinvar_summary_chinese": "Validated CPIC Level A guidelines for Warfarin, Phenytoin, and NSAIDs (*2 rs1799853, *3 rs1057910)"
  },
  "lifestyle_prevention": {
    "screening_advice": "Before starting Warfarin, Phenytoin, or chronic NSAID regimens, consider CYP2C9 (and VKORC1 / HLA-B) pharmacogenetic testing.",
    "lifestyle_tips": [
      "Inform every prescribing physician and dentist of your CYP2C9 status before starting anticoagulants or pain relievers",
      "Watch for early signs of bleeding or GI irritation (gum bleeding, nosebleeds, dark tarry stools, or bruising) and seek medical evaluation",
      "Avoid purchasing over-the-counter NSAID painkillers for long-term use without consulting your doctor"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Neurology / Rheumatology / Anticoagulation Clinic",
    "questions": [
      "Doctor, I carry a CYP2C9 decreased-function variant (*2 or *3). Should my Warfarin regimen be adjusted using my CYP2C9 and VKORC1 genotypes, or is another anticoagulant suitable?",
      "For joint or muscle pain, which analgesic options do not rely on CYP2C9 metabolism?",
      "How frequently should I check my INR or therapeutic drug levels when starting or changing medications?"
    ]
  },
  "myth_buster": {
    "myth": "“Are common anti-inflammatory painkillers (NSAIDs) metabolized at the same speed by everyone?”",
    "truth": "No! Many widely used NSAIDs (celecoxib, meloxicam, piroxicam, ibuprofen) rely on CYP2C9 for clearance. In CYP2C9 poor metabolizers, clearance slows markedly—causing drug buildup and higher risks of stomach ulcers or bleeding unless guided by a physician."
  }
};
