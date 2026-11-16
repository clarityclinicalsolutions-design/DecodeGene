export default {
  "gene": {
    "chinese_name": "Cytochrome P450 4F2 (Vitamin K Metabolism & Warfarin Sensitivity Gene)",
    "chromosome": "19p13.12 (Chromosome 19)",
    "metaphor": {
      "title": "🩸 The 【Vitamin K Recycling Trim Knob】 of the Clotting System (Slower recycling shifts warfarin needs)",
      "story": "Warfarin blocks vitamin K recycling, while CYP4F2 breaks vitamin K down, so the two act like the accelerator and brake of one clotting-control system. When CYP4F2*3 slows vitamin K breakdown, more vitamin K remains available and warfarin's effect may be partly offset, so anticoagulation needs closer INR monitoring and multi-gene assessment."
    },
    "plain_summary": "CYP4F2 participates in vitamin K metabolism, and the CYP4F2*3 variant reduces vitamin K breakdown, which may alter warfarin requirements. Care is usually guided by CYP2C9, VKORC1 and INR together rather than CYP4F2 alone. Direct oral anticoagulants (DOACs) are unaffected by CYP4F2 and may be an alternative after physician assessment.",
    "academic_summary": "CYP4F2 is located at 19p13.12 and encodes cytochrome P450 4F2, which omega-hydroxylates vitamin K1 and K2. CYP4F2*3 (rs2108622, c.1297G>A, p.Val433Met) reduces enzyme activity, raises hepatic vitamin K and is associated with higher warfarin maintenance requirements; its effect must be interpreted together with CYP2C9, VKORC1 and INR."
  },
  "disease": {
    "chinese_name": "Warfarin Anticoagulant Sensitivity (CYP4F2 PGx)",
    "categories": ["Pharmacogenomics (PGx)", "Anticoagulation Safety"],
    "inheritance_mode": "Autosomal Codominant Metabolic Phenotype",
    "severity_badge": "🟡 Anticoagulation Monitoring Alert (assess with CYP2C9 and VKORC1)"
  },
  "phenotypes": [
    { "hpo_id": "HP:0002239", "name": "Gastrointestinal hemorrhage", "chinese_name": "Gastrointestinal and anticoagulant-related bleeding risk" }
  ],
  "drugs_targeted": [
    { "drug_name": "Warfarin", "chinese_name": "Warfarin", "mechanism": "Vitamin K antagonist whose effect is influenced by vitamin K metabolism and CYP2C9, VKORC1 and CYP4F2 genotypes", "approval_status": "CPIC Level A multi-gene assessment" },
    { "drug_name": "Apixaban / Rivaroxaban", "chinese_name": "Apixaban / Rivaroxaban", "mechanism": "Direct oral anticoagulants that do not depend on the CYP4F2 vitamin K pathway", "approval_status": "Standard anticoagulant prescription (guided by kidney function and clinical assessment)" }
  ],
  "pharmacogenomics": {
    "key_variant": "CYP4F2*3 (rs2108622, c.1297G>A, p.Val433Met)",
    "population_frequency": "CYP4F2*3 frequency is about 20% in East Asians and is associated with reduced vitamin K breakdown and altered warfarin requirements (PMID:28198005)",
    "traffic_light_summary": "🟡 Caution with combined assessment: CYP4F2*3 reduces vitamin K breakdown and may change warfarin requirements. Care must combine CYP2C9, VKORC1 and INR, and warfarin should not be adjusted on CYP4F2 alone. Direct oral anticoagulants are unaffected by this variant and may be an alternative after physician assessment.",
    "drugs_guide": [
      { "drug_name": "Warfarin", "chinese_name": "Warfarin", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "CYP4F2*3 reduces vitamin K oxidation and may alter warfarin requirements; assess together with CYP2C9, VKORC1 and INR, do not adjust on CYP4F2 alone, and intensify bleeding monitoring.", "cpic_level": "CPIC Guideline for CYP2C9, VKORC1, CYP4F2 and Warfarin" },
      { "drug_name": "Apixaban / Rivaroxaban", "chinese_name": "Apixaban / Rivaroxaban", "traffic_light": "GREEN_NORMAL", "clinical_alert": "Direct oral anticoagulants do not depend on the CYP4F2 vitamin K pathway and are insensitive to CYP4F2 genotype; they may be alternative anticoagulants after assessment of kidney function, age and bleeding risk.", "cpic_level": "CPIC DOAC Guidance / PharmGKB" }
    ],
    "dietary_contraindications": [
      "Keep daily intake of dark leafy greens and vitamin K consistent while taking warfarin; do not suddenly increase or decrease it",
      "Avoid binge alcohol and unapproved herbal supplements such as danshen, ginkgo, dong quai or St. John's wort that affect anticoagulation",
      "Seek immediate care for gum bleeding, prolonged nosebleeds, large bruises or black stools"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️ Clear CPIC multi-gene anticoagulation evidence",
    "clinvar_summary_chinese": "ClinVar and CPIC include CYP4F2*3 (rs2108622) variants associated with warfarin maintenance requirements and bleeding risk"
  },
  "lifestyle_prevention": {
    "screening_advice": "If you are starting or taking warfarin, have had bleeding events, wide INR fluctuations or a family history of anticoagulant sensitivity, discuss combined CYP2C9, VKORC1 and CYP4F2 testing with your doctor.",
    "lifestyle_tips": [
      "Show your CYP4F2 result to your physician and pharmacist, and confirm that CYP2C9 and VKORC1 have also been assessed",
      "Keep vitamin K intake stable and avoid sudden supplement or diet changes",
      "Attend scheduled INR monitoring and seek care immediately for abnormal bleeding or bruising"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Hematology / Anticoagulation Clinic",
    "questions": [
      "My CYP4F2 test shows the *3 variant. How does this affect my warfarin requirements and INR monitoring frequency?",
      "Should I also have CYP2C9 and VKORC1 testing for a complete anticoagulation assessment?",
      "If a direct oral anticoagulant is suitable, what kidney-function and bleeding risks should I watch for?"
    ]
  },
  "myth_buster": {
    "myth": "“INR alone is enough to manage warfarin, and genetic testing adds nothing to anticoagulation care.”",
    "truth": "Only partly true. INR remains the core of monitoring, but CYP2C9, VKORC1 and CYP4F2 genotypes help predict starting and maintenance needs and reduce early bleeding or clotting risk. Genetic information must be interpreted with INR and the clinical picture."
  }
};
