export default {
  "gene": {
    "chinese_name": "Methylenetetrahydrofolate Reductase (Folate Gene)",
    "chromosome": "1p36.22 (Chromosome 1)",
    "metaphor": {
      "title": "🌿 The Body’s 【Folate Conversion Machine】",
      "story": "Folic acid from food or supplements is a “raw material” processed by the MTHFR machine into active folate (5-MTHF), which clears vascular homocysteine (Hcy) and supports fetal neural development. Carrying MTHFR C677T (rs1801133) slows this machine to 30%–65% efficiency, causing Hcy buildup and elevating H-type hypertension and stroke risk!"
    },
    "plain_summary": "MTHFR governs folate metabolism and blood homocysteine (Hcy). The C677T (rs1801133) variant is common: women planning pregnancy can supplement with active folate (5-MTHF), and older adults should monitor blood Hcy and supplement folate + B vitamins to prevent stroke.",
    "academic_summary": "MTHFR catalyzes reduction of 5,10-methylenetetrahydrofolate to 5-MTHF for remethylating homocysteine to methionine. C677T (rs1801133) reduces TT homozygote activity by ~65%–70%, causing hyperhomocysteinemia, elevating neural tube defect and stroke risk, and increasing methotrexate toxicity."
  },
  "disease": {
    "chinese_name": "Impaired Folate Metabolism & Hyperhomocysteinemia (H-Type Hypertension)",
    "categories": [
      "Pharmacogenomics (PGx)",
      "Perinatal Nutrition",
      "Cardiovascular Trait"
    ],
    "inheritance_mode": "Autosomal Recessive / Codominant Dosage Effect",
    "severity_badge": "🟡 Actionable Nutrition & Stroke Prevention Target (5-MTHF)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0002160",
      "name": "Hyperhomocystinemia",
      "chinese_name": "Hyperhomocystinemia (Hcy ≥ 10 μmol/L)"
    },
    {
      "hpo_id": "HP:0000822",
      "name": "Hypertension",
      "chinese_name": "H-type hypertension"
    },
    {
      "hpo_id": "HP:0002140",
      "name": "Ischemic stroke",
      "chinese_name": "Ischemic stroke susceptibility"
    },
    {
      "hpo_id": "HP:0002412",
      "name": "Neural tube defect",
      "chinese_name": "Fetal neural tube defect risk"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Levomefolate calcium (5-MTHF)",
      "chinese_name": "Levomefolate Calcium (5-MTHF)",
      "mechanism": "Bypasses MTHFR bottleneck to supply active methyl donors and lower Hcy",
      "approval_status": "Perinatal & Nutrition Guideline"
    },
    {
      "drug_name": "Enalapril / Folic acid",
      "chinese_name": "Enalapril + Folic Acid",
      "mechanism": "ACEI + folate lowers Hcy and reduces first stroke risk by 21% (CSPPT)",
      "approval_status": "TFDA / NMPA Approved"
    }
  ],
  "pharmacogenomics": {
    "key_variant": "MTHFR C677T (rs1801133, c.665C>T, p.Ala222Val) & A1298C (rs1801131)",
    "population_frequency": "20%–35% C677T TT homozygote frequency in East Asians",
    "traffic_light_summary": "🟡 Precision Guidance: ① TT genotype women planning pregnancy can supplement with active folate (5-MTHF); ② Hypertensive adults with elevated Hcy should combine BP control + folate; ③ Monitor closely if treated with Methotrexate.",
    "drugs_guide": [
      {
        "drug_name": "Folic Acid vs. 5-Methyltetrahydrofolate (5-MTHF)",
        "chinese_name": "Synthetic Folic Acid vs. Active Folate (5-MTHF)",
        "traffic_light": "YELLOW_CAUTION",
        "clinical_alert": "MTHFR 677TT homozygotes convert synthetic folic acid at ~30% efficiency; prioritize direct 5-MTHF supplementation or individualized dosing (0.8 mg/d).",
        "cpic_level": "Perinatal Folate Consensus"
      },
      {
        "drug_name": "Methotrexate (MTX)",
        "chinese_name": "Methotrexate (Oncology / Rheumatology)",
        "traffic_light": "YELLOW_CAUTION",
        "clinical_alert": "MTHFR 677TT patients receiving methotrexate have elevated risk of hepatotoxicity, mucositis, and leukopenia; monitor CBC, liver function, and leucovorin rescue.",
        "cpic_level": "PharmGKB Level 2A"
      }
    ],
    "dietary_contraindications": [
      "Avoid diets of only refined grains without dark leafy greens (natural folate and vitamins B6/B12 are essential Hcy cofactors)",
      "Limit high-sodium cured foods and smoking (synergize with elevated Hcy to accelerate vascular damage)"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Definitive Stroke Prevention (CSPPT) & Perinatal Consensus",
    "clinvar_summary_chinese": "C677T (rs1801133) is the most extensively validated folate & PGx polymorphism"
  },
  "lifestyle_prevention": {
    "screening_advice": "Couples planning pregnancy should check RBC folate 3 months prior; adults aged 40+ (especially with hypertension) should check plasma homocysteine (Hcy, target < 10 μmol/L) annually.",
    "lifestyle_tips": [
      "[Preconception] Women with MTHFR 677TT can choose prenatal vitamins containing 5-MTHF (active folate) under OB/GYN guidance",
      "[Older Adults] If hypertensive with blood Hcy ≥ 10 μmol/L (“H-type hypertension”), combining antihypertensives with folate + vitamins B6/B12 reduces stroke risk",
      "Eat plenty of spinach, broccoli, asparagus, and avocados rich in natural folate"
    ]
  },
  "doctor_checklist": {
    "specialty": "Obstetrics & Gynecology / Genetics / Cardiology / Neurology",
    "questions": [
      "Doctor, my test shows MTHFR C677T TT homozygosity. During preconception and pregnancy, should I switch to 5-MTHF (active folate) or adjust my dose?",
      "My parents have hypertension—if their blood Hcy is ≥ 10 μmol/L, should they take combined folate therapy to prevent stroke?",
      "Along with folate, should I also test my serum vitamin B12 and ferritin levels?"
    ]
  },
  "myth_buster": {
    "myth": "“Is folic acid only for pregnant young women, and completely useless for middle-aged or older men?”",
    "truth": "Completely wrong! About 75% of hypertensive patients in Chinese populations have elevated homocysteine (“H-type hypertension”), a major driver of stroke. The CSPPT trial proved that folate supplementation in H-type hypertension reduces first stroke risk by 21%!"
  }
};
