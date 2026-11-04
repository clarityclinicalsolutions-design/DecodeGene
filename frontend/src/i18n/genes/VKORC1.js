export default {
  "gene": {
    "chinese_name": "Vitamin K Epoxide Reductase Complex Subunit 1 (Warfarin Target Gene)",
    "chromosome": "16p11.2 (Chromosome 16)",
    "metaphor": {
      "title": "🎛️ The Coagulation Factory's 【Vitamin K Recycling Tuning Dial】",
      "story": "The liver constantly recycles vitamin K to produce blood clotting factors. VKORC1 is the recycling machine that recharges used vitamin K, and it is also the exact brake pedal pressed by the anticoagulant Warfarin. Over 80% of East Asians carry a VKORC1 promoter variant (rs9923231) that naturally produces fewer VKORC1 machines (high sensitivity), meaning much less Warfarin is needed to press the brake; standard Western regimens can easily cause over-anticoagulation and bleeding."
    },
    "plain_summary": "VKORC1 encodes the direct molecular target of Warfarin. The common promoter variant -1639G>A (rs9923231) reduces hepatic VKORC1 expression and increases sensitivity to Warfarin; your doctor may adjust the dose alongside CYP2C9 genotype or choose an alternative anticoagulant.",
    "academic_summary": "VKORC1 encodes vitamin K epoxide reductase complex subunit 1, which reduces vitamin K 2,3-epoxide to vitamin K hydroquinone—the rate-limiting step for gamma-carboxylation of clotting factors II, VII, IX, and X. Promoter polymorphism c.-1639G>A (rs9923231) decreases VKORC1 transcription, conferring heightened sensitivity to warfarin."
  },
  "disease": {
    "chinese_name": "Warfarin Pharmacogenetic Dose Sensitivity (VKORC1 PGx)",
    "categories": ["Pharmacogenomics (PGx)", "Cardiovascular Anticoagulation Safety"],
    "inheritance_mode": "Autosomal Codominant Pharmacodynamic Trait",
    "severity_badge": "🟡 Primary Warfarin Sensitivity Determinant (High Frequency in East Asians)"
  },
  "phenotypes": [
    { "hpo_id": "HP:0001892", "name": "Abnormal bleeding", "chinese_name": "Warfarin-sensitivity abnormal bleeding risk" },
    { "hpo_id": "HP:0000978", "name": "Bruising susceptibility", "chinese_name": "Easy subcutaneous bruising" },
    { "hpo_id": "HP:0000421", "name": "Epistaxis", "chinese_name": "Recurrent epistaxis / gingival bleeding" }
  ],
  "drugs_targeted": [
    { "drug_name": "Warfarin", "chinese_name": "Warfarin (Coumadin)", "mechanism": "Directly inhibits VKORC1 to block activation of vitamin K-dependent clotting factors", "approval_status": "CPIC Level A / FDA Label Actionable PGx" },
    { "drug_name": "Direct Oral Anticoagulants (DOACs)", "chinese_name": "Direct Oral Anticoagulants (Apixaban / Rivaroxaban / Dabigatran / Edoxaban)", "mechanism": "Directly inhibit factor Xa or IIa independent of VKORC1", "approval_status": "FDA / TFDA Approved Alternative" }
  ],
  "pharmacogenomics": {
    "key_variant": "VKORC1 c.-1639G>A (rs9923231) and c.1173C>T (rs9934438)",
    "population_frequency": "In East Asians, the -1639A (rs9923231) allele frequency is ~85%–90% (~75%–80% AA homozygotes), explaining why East Asians generally require lower Warfarin doses than Europeans (PMID:28198005)",
    "traffic_light_summary": "🟡 Caution / Dose Adjustment: Carriers of VKORC1 -1639G>A (rs9923231) AA or GA genotypes have increased sensitivity to Warfarin; your doctor may adjust the dose alongside CYP2C9 genotype and monitor INR closely, or consider an alternative anticoagulant.",
    "drugs_guide": [
      { "drug_name": "Warfarin", "chinese_name": "Warfarin (Oral Anticoagulant)", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "Carriers of the VKORC1 -1639G>A (rs9923231) A allele express lower hepatic VKORC1 enzyme levels and are sensitive to Warfarin; your doctor may adjust the dose using CPIC pharmacogenetic algorithms and monitor INR closely.", "cpic_level": "CPIC Guideline for CYP2C9, VKORC1, CYP4F2 and Warfarin Level A / PharmGKB Level 1A" }
    ],
    "dietary_contraindications": [
      "While taking Warfarin, keep daily vitamin K intake (spinach, kale, broccoli, green tea) consistent rather than binging or completely avoiding greens",
      "Avoid natto (fermented soybeans rich in vitamin K2 and nattokinase, which strongly antagonize Warfarin) and excessive cranberry juice"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A & FDA Label Core Anticoagulation Biomarker",
    "clinvar_summary_chinese": "rs9923231 (-1639G>A) is the most extensively validated genetic determinant of Warfarin sensitivity",
    "guideline_ids": ["PHARMGKB:PA166251465"]
  },
  "lifestyle_prevention": {
    "screening_advice": "Before starting Warfarin for atrial fibrillation, mechanical heart valves, or deep vein thrombosis, consider combined VKORC1 and CYP2C9 genotyping.",
    "lifestyle_tips": [
      "Carry an anticoagulation alert card and inform dentists, endoscopists, and surgeons before any procedure",
      "Keep weekly leafy green vegetable intake steady rather than eliminating vegetables completely",
      "Check your International Normalized Ratio (INR) on schedule and never change your dose without medical guidance"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Cardiovascular Surgery / Anticoagulation Clinic",
    "questions": [
      "Doctor, my report shows a high-sensitivity VKORC1 rs9923231 genotype. Should my Warfarin regimen be adjusted based on my VKORC1 and CYP2C9 results?",
      "What is my target INR range, and how often should I return for blood tests during initiation?",
      "Given my clinical condition, should I use genotype-guided Warfarin or consider a direct oral anticoagulant (DOAC)?"
    ]
  },
  "myth_buster": {
    "myth": "“If I take Warfarin, am I forbidden from ever eating a single bite of spinach or green vegetables?”",
    "truth": "No! What destabilizes Warfarin is sudden, drastic swings in vitamin K intake (such as eating none for weeks and suddenly eating a huge plate of spinach or natto). As long as your daily vegetable intake stays consistent, your physician can calibrate your regimen safely."
  }
};
