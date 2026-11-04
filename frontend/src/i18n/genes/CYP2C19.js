export default {
  "gene": {
    "chinese_name": "Cytochrome P450 2C19 (Clopidogrel Bioactivation Gene)",
    "chromosome": "10q23.33 (Chromosome 10)",
    "metaphor": {
      "title": "🔑 The Liver's 【Anti-Clot Prodrug Keymaker】",
      "story": "The antiplatelet medication Clopidogrel (Plavix) is an inactive 'locked prodrug' when swallowed. It relies on the liver's CYP2C19 keymaker enzyme to unlock and convert it into its active form that prevents blood clots. If you carry loss-of-function alleles (*2 or *3), the keymaker is off duty—leaving the drug inactive and raising the risk of stent thrombosis or recurrent stroke."
    },
    "plain_summary": "CYP2C19 converts the prodrug Clopidogrel (Plavix) into its active antiplatelet metabolite. Intermediate or poor metabolizers carrying *2 or *3 alleles have reduced drug activation; your doctor may choose an alternative antiplatelet drug (such as prasugrel or ticagrelor) that does not depend on CYP2C19.",
    "academic_summary": "CYP2C19 encodes a hepatic monooxygenase catalyzing two-step bioactivation of clopidogrel into its active thiol metabolite to irreversibly inhibit platelet P2Y12 receptors. Loss-of-function alleles CYP2C19*2 (rs4244285, c.681G>A) and CYP2C19*3 (rs4986893, c.636G>A) impair enzymatic activity, reducing platelet inhibition and increasing cardiovascular and cerebrovascular risk."
  },
  "disease": {
    "chinese_name": "Clopidogrel Poor Metabolism & Thrombotic Risk (CYP2C19 PGx)",
    "categories": ["Pharmacogenomics (PGx)", "Cardiovascular & Neurovascular Safety"],
    "inheritance_mode": "Autosomal Codominant Metabolic Phenotype",
    "severity_badge": "🔴 Critical Stent & Stroke PGx Red Light (Alternative Drug for PMs)"
  },
  "phenotypes": [
    { "hpo_id": "HP:0001658", "name": "Myocardial infarction", "chinese_name": "Myocardial infarction / stent thrombosis risk" },
    { "hpo_id": "HP:0002140", "name": "Ischemic stroke", "chinese_name": "Recurrent ischemic stroke risk" },
    { "hpo_id": "HP:0033678", "name": "Acute coronary syndrome", "chinese_name": "Suboptimal antiplatelet response in ACS" }
  ],
  "drugs_targeted": [
    { "drug_name": "Prasugrel / Ticagrelor", "chinese_name": "Prasugrel / Ticagrelor (Alternative P2Y12 Inhibitors)", "mechanism": "P2Y12 receptor inhibitors that do not rely on CYP2C19 bioactivation", "approval_status": "CPIC Level A / FDA Label Alternative" },
    { "drug_name": "Clopidogrel", "chinese_name": "Clopidogrel (Plavix)", "mechanism": "Thienopyridine prodrug requiring two-step CYP2C19 hepatic bioactivation", "approval_status": "FDA Boxed Warning / CPIC Level A" }
  ],
  "pharmacogenomics": {
    "key_variant": "CYP2C19*2 (rs4244285, c.681G>A), CYP2C19*3 (rs4986893, c.636G>A), CYP2C19 *2/*2, CYP2C19 *2/*3, *1/*17 (rs12248560)",
    "population_frequency": "In East Asians, *2 allele frequency is ~29% and *3 is ~4%–9%; ~13%–15% are Poor Metabolizers (*2/*2, *2/*3, *3/*3) (PMID:35034351)",
    "traffic_light_summary": "🔴 Poor Metabolizers (*2/*2, *2/*3, *3/*3): Avoid Clopidogrel (Plavix); your doctor may choose Prasugrel or Ticagrelor. 🟡 Intermediate Metabolizers (*1/*2, *1/*3, *2/*17): Reduced activation; discuss alternative antiplatelet therapy with your doctor.",
    "drugs_guide": [
      { "drug_name": "Clopidogrel (Plavix) — Poor Metabolizer (*2/*2, *2/*3, *3/*3)", "chinese_name": "Clopidogrel (Plavix) — Poor Metabolizer", "traffic_light": "RED_AVOID", "clinical_alert": "CYP2C19 poor metabolizers have markedly diminished active clopidogrel metabolite formation. Avoid standard clopidogrel; your doctor may choose prasugrel or ticagrelor if no contraindication exists.", "cpic_level": "CPIC Guideline for CYP2C19 and Clopidogrel Level A / FDA Boxed Warning" },
      { "drug_name": "Clopidogrel (Plavix) — Intermediate Metabolizer (*1/*2, *1/*3, *2/*17)", "chinese_name": "Clopidogrel (Plavix) — Intermediate Metabolizer", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "Intermediate metabolizers have reduced active metabolite formation and increased risk of cardiovascular or cerebrovascular events; your doctor may choose an alternative antiplatelet drug.", "cpic_level": "CPIC Guideline for CYP2C19 and Clopidogrel Level A / PharmGKB Level 1A" },
      { "drug_name": "Voriconazole / Proton Pump Inhibitors / SSRIs", "chinese_name": "Voriconazole / Proton Pump Inhibitors (Omeprazole) / Certain SSRIs", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "CYP2C19 also metabolizes voriconazole, proton pump inhibitors, and certain antidepressants; your doctor may adjust therapy or choose another drug based on metabolizer status.", "cpic_level": "CPIC Guideline Level A (Voriconazole / PPIs / SSRIs)" }
    ],
    "dietary_contraindications": [
      "Avoid combining clopidogrel with over-the-counter omeprazole or esomeprazole without medical advice, as they inhibit CYP2C19",
      "Avoid smoking and excessive alcohol intake to protect blood vessels and lower bleeding risk"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A & FDA Boxed Warning Consensus",
    "clinvar_summary_chinese": "600+ curated pharmacogenetic and clinical entries in ClinVar & PharmGKB (*2 rs4244285, *3 rs4986893, *17 rs12248560)",
    "guideline_ids": ["PHARMGKB:PA166251443"]
  },
  "lifestyle_prevention": {
    "screening_advice": "Consider CYP2C19 genotyping before initiating clopidogrel for coronary stenting (PCI), acute coronary syndrome, or secondary stroke prevention.",
    "lifestyle_tips": [
      "Share your CYP2C19 genotype card with your cardiologist or neurologist before starting antiplatelet therapy—never stop medication on your own",
      "Consult your pharmacist before taking stomach acid reducers to avoid CYP2C19 drug interactions",
      "Maintain strict blood pressure, blood glucose, and LDL cholesterol control"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Neurology / Clinical Pharmacy",
    "questions": [
      "Doctor, my genetic report shows I am a CYP2C19 intermediate or poor metabolizer. Should we switch from Clopidogrel (Plavix) to Ticagrelor or Prasugrel?",
      "If I need a stomach-protecting medication alongside my antiplatelet therapy, which option will not interfere with CYP2C19?",
      "Should I also share my CYP2C19 status if I am prescribed antifungal drugs, PPIs, or antidepressants in the future?"
    ]
  },
  "myth_buster": {
    "myth": "“As long as I take Clopidogrel (Plavix) on time every day after getting a heart stent, am I guaranteed full protection against blood clots?”",
    "truth": "Not necessarily! About 13%–15% of East Asians are CYP2C19 poor metabolizers whose livers cannot convert clopidogrel into its active form. Even when taken daily, it may offer little protection—making a physician-guided switch to an alternative drug essential."
  }
};
