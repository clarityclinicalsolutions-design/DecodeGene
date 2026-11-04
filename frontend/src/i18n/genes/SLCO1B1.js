export default {
  "gene": {
    "chinese_name": "Solute Carrier Organic Anion Transporter 1B1 (Statin Muscle Safety Gene)",
    "chromosome": "12p12.1 (Chromosome 12)",
    "metaphor": {
      "title": "🚪 The Liver's 【Cholesterol Drug Revolving Entry Door】",
      "story": "Statin cholesterol-lowering drugs (such as Simvastatin) travel through the bloodstream to enter the liver and reduce cholesterol synthesis. SLCO1B1 acts as the liver's dedicated revolving entry door for statins. If you carry the rs4149056 (*5 / *15) variant, this revolving door jams: statins cannot enter the liver efficiently, accumulate in the bloodstream, and seep into skeletal muscle—causing muscle aches, myopathy, or rhabdomyolysis."
    },
    "plain_summary": "SLCO1B1 transports statin lipid-lowering medications into liver cells. Carriers of the decreased-function variant c.521T>C (rs4149056, *5 / *15) experience higher blood statin levels and increased risk of statin-associated musculoskeletal symptoms (SAMS), especially with Simvastatin; your doctor may adjust the dose or choose another lipid-lowering medication.",
    "academic_summary": "SLCO1B1 encodes the hepatocyte basolateral uptake transporter OATP1B1, mediating hepatic clearance of HMG-CoA reductase inhibitors. Missense variant c.521T>C (rs4149056, p.Val174Ala, *5/*15) impairs transport activity, markedly increasing systemic exposure (AUC) of simvastatin acid and other statins and predisposing patients to skeletal myotoxicity."
  },
  "disease": {
    "chinese_name": "Statin-Associated Myopathy & Rhabdomyolysis Risk (SLCO1B1 PGx)",
    "categories": ["Pharmacogenomics (PGx)", "Cardiovascular & Lipid-Lowering Safety"],
    "inheritance_mode": "Autosomal Codominant Transporter Phenotype",
    "severity_badge": "🔴 High Simvastatin Myopathy Alert (Adjust Therapy or Switch Statin)"
  },
  "phenotypes": [
    { "hpo_id": "HP:0003326", "name": "Myalgia", "chinese_name": "Symmetric proximal muscle aches (myalgia)" },
    { "hpo_id": "HP:0003198", "name": "Myopathy", "chinese_name": "Drug-induced skeletal myopathy" },
    { "hpo_id": "HP:0003201", "name": "Rhabdomyolysis", "chinese_name": "Rhabdomyolysis" },
    { "hpo_id": "HP:0003236", "name": "Elevated circulating creatine kinase activity", "chinese_name": "Elevated serum creatine kinase (CK) activity" }
  ],
  "drugs_targeted": [
    { "drug_name": "Simvastatin", "chinese_name": "Simvastatin (Zocor)", "mechanism": "HMG-CoA reductase inhibitor whose active acid metabolite strongly depends on OATP1B1 hepatic uptake", "approval_status": "CPIC Level A / FDA Label PGx" },
    { "drug_name": "Atorvastatin / Rosuvastatin / Pravastatin", "chinese_name": "Atorvastatin / Rosuvastatin / Pravastatin", "mechanism": "Alternative HMG-CoA reductase inhibitors guided by SLCO1B1 phenotype", "approval_status": "CPIC Level A Guideline" }
  ],
  "pharmacogenomics": {
    "key_variant": "SLCO1B1 c.521T>C (rs4149056, p.Val174Ala, SLCO1B1*5 / *15)",
    "population_frequency": "In East Asians, the c.521T>C (rs4149056) allele frequency is ~10%–16% (~20%–28% carrier frequency) (PMID:35152405)",
    "traffic_light_summary": "🔴 Decreased/Poor Function (rs4149056 C allele carriers): Avoid high-exposure Simvastatin regimens; your doctor may choose an alternative statin or adjust therapy. 🟡 For Atorvastatin, Rosuvastatin, or Pitavastatin, your doctor may adjust the dose based on SLCO1B1 phenotype and monitor for muscle symptoms.",
    "drugs_guide": [
      { "drug_name": "Simvastatin", "chinese_name": "Simvastatin (Zocor)", "traffic_light": "RED_AVOID", "clinical_alert": "Carriers of SLCO1B1 decreased-function alleles (rs4149056 C allele, *5 / *15) experience markedly elevated simvastatin acid blood levels and high risk of myopathy or rhabdomyolysis; your doctor may choose an alternative statin or adjust the dose.", "cpic_level": "CPIC Guideline for SLCO1B1, ABCG2, CYP2C9, and Statins Level A" },
      { "drug_name": "Atorvastatin / Rosuvastatin / Pitavastatin", "chinese_name": "Atorvastatin (Lipitor) / Rosuvastatin (Crestor) / Pitavastatin", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "Decreased SLCO1B1 function also increases systemic exposure to other statins; your doctor may adjust starting and maximum doses per CPIC guidelines or select an alternative lipid-lowering strategy while monitoring creatine kinase (CK).", "cpic_level": "CPIC Guideline for SLCO1B1, ABCG2, CYP2C9, and Statins Level A" }
    ],
    "dietary_contraindications": [
      "Strictly avoid grapefruit and grapefruit juice while taking simvastatin or atorvastatin (inhibits intestinal CYP3A4 and compounds SLCO1B1 statin accumulation)",
      "Do not take over-the-counter red yeast rice supplements alongside prescription statins (red yeast rice contains monacolin K / lovastatin, causing duplicate toxicity)"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A & NEJM SEARCH Trial Consensus",
    "clinvar_summary_chinese": "rs4149056 (c.521T>C) is the premier validated pharmacogenetic marker for statin-induced myopathy"
  },
  "lifestyle_prevention": {
    "screening_advice": "Consider SLCO1B1 rs4149056 testing before initiating statin therapy or in patients with a history of statin-associated muscle aches.",
    "lifestyle_tips": [
      "If you develop unexplained symmetric aching, weakness, or cramping in your thighs, calves, or shoulders—or dark tea/cola-colored urine—seek medical care immediately to check serum creatine kinase (CK)",
      "Reduce dietary saturated and trans fats, and increase soluble fiber, oats, and omega-3-rich fish",
      "Never combine red yeast rice supplements with prescription cholesterol medications"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Endocrinology & Metabolism / Family Medicine",
    "questions": [
      "Doctor, my report shows I carry the SLCO1B1 rs4149056 variant. Which statin or lipid-lowering medication offers the best muscle safety profile for me?",
      "If I experience thigh or calf muscle soreness during therapy, when should I return to check my serum creatine kinase (CK)?",
      "Could non-statin options such as Ezetimibe or PCSK9 inhibitors be used as an adjunct or alternative if needed?"
    ]
  },
  "myth_buster": {
    "myth": "“If prescription cholesterol pills make my legs ache, is switching to 'natural red yeast rice' supplements completely safe for my muscles?”",
    "truth": "Dangerous myth! The active compound in red yeast rice (Monacolin K) is chemically identical to the statin drug lovastatin. For SLCO1B1 variant carriers, taking unstandardized red yeast rice—or combining it with prescription statins—can trigger severe myopathy or rhabdomyolysis!"
  }
};
