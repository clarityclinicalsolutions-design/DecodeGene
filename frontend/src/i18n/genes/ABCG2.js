export default {
  "gene": {
    "chinese_name": "ATP-Binding Cassette Subfamily G Member 2 (ABCG2 / BCRP)",
    "chromosome": "4q22.1 (Chromosome 4)",
    "metaphor": {
      "title": "🚰 The Cell's 【Drug Efflux Pump】 (A weak pump lets drugs and urate back up)",
      "story": "ABCG2 builds a transporter on the cell membrane that pumps rosuvastatin and urate out of cells, like a bilge pump clearing a hull. When the pump is weakened by the c.421C>A variant, drugs stay in the bloodstream longer and urate is harder to excrete, so muscle side effects, liver burden and gout risk all rise together."
    },
    "plain_summary": "ABCG2 is an efflux transporter for several drugs and for urate. Carriers of the decreased-function c.421C>A variant may reach much higher blood levels of rosuvastatin, and allopurinol may be less effective for lowering urate. Genetic testing, choosing an alternative statin, and monitoring muscle symptoms and urate can reduce adverse effects.",
    "academic_summary": "ABCG2 is located at 4q22.1 and encodes the ATP-binding cassette transporter G2, expressed in intestine, liver and kidney, where it effluxes statins, urate and diverse endogenous and xenobiotic substrates. The common decreased-function variant c.421C>A (rs2231142, p.Gln141Lys) lowers transport activity and is associated with increased rosuvastatin exposure, muscle adverse effects, hyperuricemia and gout susceptibility."
  },
  "disease": {
    "chinese_name": "Hyperuricemia, Gout and Statin Transporter Sensitivity (ABCG2 PGx)",
    "categories": ["Pharmacogenomics (PGx)", "Gout and Hyperuricemia", "Statin and Urate-Lowering Drug Safety"],
    "inheritance_mode": "Autosomal Codominant Transporter Phenotype",
    "severity_badge": "🟡 Drug-Transporter Sensitivity Alert (monitor muscle symptoms and urate)"
  },
  "phenotypes": [
    { "hpo_id": "HP:0001997", "name": "Gout", "chinese_name": "Gout" },
    { "hpo_id": "HP:0002149", "name": "Hyperuricemia", "chinese_name": "Hyperuricemia" }
  ],
  "drugs_targeted": [
    { "drug_name": "Rosuvastatin", "chinese_name": "Rosuvastatin", "mechanism": "Hydrophilic statin effluxed by ABCG2; decreased-function variants raise systemic exposure", "approval_status": "CPIC actionable pharmacogene-drug pair" },
    { "drug_name": "Allopurinol", "chinese_name": "Allopurinol", "mechanism": "Xanthine oxidase inhibitor for urate lowering; ABCG2 decreased function may be associated with poorer response and gout flares", "approval_status": "Standard gout urate-lowering therapy (physician assessment)" },
    { "drug_name": "Pravastatin / Pitavastatin", "chinese_name": "Pravastatin / Pitavastatin", "mechanism": "Alternative statins less affected by ABCG2 efflux", "approval_status": "Standard prescription therapy (guided by lipids, liver and kidney function)" }
  ],
  "pharmacogenomics": {
    "key_variant": "ABCG2 c.421C>A (rs2231142, p.Gln141Lys) decreased-function transporter variant",
    "population_frequency": "The c.421A allele frequency is about 30% in East Asians and is an important modifier of rosuvastatin exposure and gout susceptibility (PMID:35152405)",
    "traffic_light_summary": "🟡 Caution and monitoring: carriers of the ABCG2 c.421C>A decreased-function variant may reach markedly higher rosuvastatin levels, increasing muscle and liver adverse effects, and allopurinol may be less effective. Your doctor may consider a lower starting intensity, an alternative statin, or closer monitoring of muscle symptoms, liver tests and urate.",
    "drugs_guide": [
      { "drug_name": "Rosuvastatin", "chinese_name": "Rosuvastatin", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "ABCG2 c.421C>A markedly increases rosuvastatin exposure and the risk of muscle pain, weakness and liver enzyme abnormalities; your doctor may use a lower starting intensity, choose an alternative statin, or intensify muscle and liver monitoring.", "cpic_level": "CPIC Guideline for SLCO1B1, ABCG2 and Rosuvastatin" },
      { "drug_name": "Allopurinol", "chinese_name": "Allopurinol", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "The ABCG2 decreased-function variant is associated with poorer urate-lowering response and gout recurrence; monitor urate and flare frequency, and let your doctor assess whether another urate-lowering drug is preferable.", "cpic_level": "PharmGKB Level 2A / Gout Pharmacogenomics" },
      { "drug_name": "Pravastatin / Pitavastatin", "chinese_name": "Pravastatin / Pitavastatin", "traffic_light": "GREEN_NORMAL", "clinical_alert": "These statins are less affected by ABCG2 efflux and are alternative options to discuss with your doctor when statin therapy is needed; standard lipid, liver and muscle monitoring still applies.", "cpic_level": "CPIC Guideline for SLCO1B1, ABCG2 and Rosuvastatin (alternative consideration)" }
    ],
    "dietary_contraindications": [
      "For gout or hyperuricemia, limit high-purine organ meats, rich meat broths, shellfish, fructose-sweetened drinks and excess alcohol",
      "Seek medical advice promptly for unexplained muscle pain, weakness or dark urine while taking a statin",
      "Maintain adequate hydration and avoid dehydration or rapid weight loss, which can trigger gout flares"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️ Clear CPIC and PharmGKB pharmacogenomic evidence",
    "clinvar_summary_chinese": "ClinVar and CPIC include ABCG2 c.421C>A and other decreased-function variants associated with rosuvastatin exposure and gout susceptibility"
  },
  "lifestyle_prevention": {
    "screening_advice": "If you are starting rosuvastatin, have had statin-related muscle symptoms, or have recurrent gout or hyperuricemia, discuss ABCG2 pharmacogenetic testing with your doctor alongside kidney function and urate assessment.",
    "lifestyle_tips": [
      "Show your ABCG2 result to every prescribing physician and pharmacist, and discuss whether the statin type or intensity should change",
      "Reduce high-purine foods, fructose-sweetened drinks and alcohol, and maintain adequate hydration",
      "Keep regular urate, liver and muscle follow-up, and seek care early for dark urine or marked muscle weakness"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Rheumatology / Family Medicine / Clinical Pharmacy",
    "questions": [
      "My ABCG2 test shows the c.421C>A decreased-function variant. Should I continue rosuvastatin, or would another statin be better?",
      "My gout keeps flaring. Could ABCG2 genotype affect how well allopurinol works, and what alternatives do I have?",
      "How often should urate, liver tests and muscle enzymes be checked after starting or changing these medications?"
    ]
  },
  "myth_buster": {
    "myth": "“Statin and urate-lowering drugs work the same for everyone as long as the standard prescription is followed.”",
    "truth": "Not necessarily. ABCG2 c.421C>A can make rosuvastatin persist longer in the body and may reduce allopurinol's urate-lowering effect. Drug choice and monitoring should be individualized by genotype, kidney function and clinical response."
  }
};
