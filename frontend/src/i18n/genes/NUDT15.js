export default {
  "gene": {
    "chinese_name": "Nudix Hydrolase 15 (East Asian Thiopurine Myelosuppression Core Gene)",
    "chromosome": "13q14.2 (Chromosome 13)",
    "metaphor": {
      "title": "🧹 The Cell Nucleus's 【Toxic Nucleotide Bomb Squad】",
      "story": "When Azathioprine or Mercaptopurine (6-MP) is converted into highly active 6-thioguanine triphosphate (6-TGTP) ready to be inserted into DNA, NUDT15 stands guard at the cell nucleus as the bomb squad—clipping off phosphate groups to defuse excess toxic nucleotides. In Taiwan and East Asian populations, ~1 in 5 to 6 people carry a NUDT15*3 variant that disables this bomb squad, allowing toxic nucleotides to flood hematopoietic stem cell DNA and causing severe leukopenia and early hair loss."
    },
    "plain_summary": "NUDT15 is the primary genetic determinant of thiopurine-induced severe leukopenia and alopecia in East Asian populations. In carriers of NUDT15*3 (rs116855232) or other no-function alleles taking Azathioprine, Mercaptopurine, or Thioguanine, your doctor may choose a non-thiopurine alternative or adjust the dose.",
    "academic_summary": "NUDT15 encodes nudix hydrolase 15, which dephosphorylates cytotoxic 6-thio-GTP (6-TGTP) and 6-thio-dGTP into inactive monophosphates, preventing DNA incorporation and apoptosis. The common East Asian missense variant NUDT15*3 (rs116855232, c.415C>T, p.Arg139Cys) abolishes enzymatic thermostability and catalytic activity, causing severe early myelosuppression and alopecia."
  },
  "disease": {
    "chinese_name": "Thiopurine Metabolic Disorder (East Asian NUDT15 Myelosuppression & Alopecia Risk)",
    "categories": ["Pharmacogenomics (PGx)", "East Asian Precision Medicine", "Hematology & Autoimmune Safety"],
    "inheritance_mode": "Autosomal Codominant Metabolic Phenotype",
    "severity_badge": "🔴 Essential East Asian PGx Red Light (~18%–20% Carrier Frequency)"
  },
  "phenotypes": [
    { "hpo_id": "HP:0001882", "name": "Decreased total leukocyte count", "chinese_name": "Severe leukopenia" },
    { "hpo_id": "HP:0001875", "name": "Decreased total neutrophil count", "chinese_name": "Neutropenia with infection susceptibility" },
    { "hpo_id": "HP:0001596", "name": "Alopecia", "chinese_name": "Early drug-induced severe alopecia" }
  ],
  "drugs_targeted": [
    { "drug_name": "Azathioprine", "chinese_name": "Azathioprine (Imuran)", "mechanism": "Thiopurine immunosuppressant for IBD and autoimmune diseases", "approval_status": "CPIC Level A / FDA Testing Recommended" },
    { "drug_name": "Mercaptopurine / Thioguanine", "chinese_name": "Mercaptopurine (6-MP) / Thioguanine (6-TG)", "mechanism": "Backbone antimetabolite therapy for ALL maintenance regulated by NUDT15", "approval_status": "CPIC Level A / FDA Testing Recommended" }
  ],
  "pharmacogenomics": {
    "key_variant": "NUDT15*3 (rs116855232, c.415C>T, p.Arg139Cys), NUDT15*2, NUDT15*5, NUDT15*6",
    "population_frequency": "In East Asians (Taiwan, Japan, Korea, Chinese populations), NUDT15*3 (rs116855232) allele frequency is ~9%–11% (~18%–20% carriers; ~1% poor metabolizers), far higher than in Europeans (<1%) (PMID:25108385, PMID:30447069)",
    "traffic_light_summary": "🔴 Poor Metabolizers (e.g., NUDT15 *3/*3): Avoid Azathioprine, Mercaptopurine, and Thioguanine in non-malignant conditions and choose an alternative agent; in oncology, drastic specialist dose adjustment is required. 🟡 Intermediate Metabolizers (*1/*3): Your doctor may reduce the starting dose and closely monitor CBC.",
    "drugs_guide": [
      { "drug_name": "Azathioprine / Mercaptopurine / Thioguanine — Poor Metabolizer (*3/*3)", "chinese_name": "Azathioprine / Mercaptopurine / Thioguanine — Poor Metabolizer (*3/*3)", "traffic_light": "RED_AVOID", "clinical_alert": "NUDT15 poor metabolizers experience rapid, severe panleukopenia and alopecia on standard thiopurine regimens. Depending on the condition being treated, your doctor may need to greatly reduce the dose or choose another drug.", "cpic_level": "CPIC Guideline for TPMT, NUDT15 and Thiopurines Level A / FDA Testing Recommended" },
      { "drug_name": "Azathioprine / Mercaptopurine / Thioguanine — Intermediate Metabolizer (*1/*3)", "chinese_name": "Azathioprine / Mercaptopurine / Thioguanine — Intermediate Metabolizer (*1/*3)", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "NUDT15 intermediate metabolizers have significantly elevated risk of thiopurine-induced leukopenia; your doctor may adjust the starting dose per CPIC guidelines and monitor blood counts closely.", "cpic_level": "CPIC Guideline for TPMT, NUDT15 and Thiopurines Level A / PharmGKB Level 1A" }
    ],
    "dietary_contraindications": [
      "Avoid combining thiopurines with xanthine oxidase inhibitors (Allopurinol, Febuxostat) without specialist guidance",
      "Practice strict food hygiene and avoid raw foods to prevent opportunistic infections if white blood cell counts drop"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A & Landmark East Asian Precision Medicine Discovery",
    "clinvar_summary_chinese": "NUDT15*3 (rs116855232) is the primary genetic determinant of thiopurine myelosuppression in East Asians"
  },
  "lifestyle_prevention": {
    "screening_advice": "Patients of East Asian ancestry should undergo NUDT15 (and TPMT) genotyping before starting Azathioprine or Mercaptopurine.",
    "lifestyle_tips": [
      "Sudden, heavy hair loss (alopecia) within the first few weeks of thiopurine therapy is a classic early warning sign of NUDT15 toxicity—contact your physician immediately for a CBC blood test",
      "Adhere strictly to scheduled white blood cell, neutrophil, and platelet count monitoring",
      "Inform your physician if any family member has experienced severe leukopenia on immunosuppressants"
    ]
  },
  "doctor_checklist": {
    "specialty": "Gastroenterology / Rheumatology / Pediatric Hematology-Oncology / Dermatology",
    "questions": [
      "Doctor, my report identified a NUDT15*3 (rs116855232) variant. Should my treatment plan switch to a non-thiopurine immunomodulator or use a genotype-adjusted regimen?",
      "If I notice unusual hair shedding, fatigue, or fever early in treatment, should I hold the medication and get an urgent CBC test?",
      "Should my siblings or children be tested for NUDT15 before ever taking thiopurine medications?"
    ]
  },
  "myth_buster": {
    "myth": "“Western guidelines focus on TPMT for thiopurine toxicity—is testing TPMT alone enough for Asian patients?”",
    "truth": "Not at all! While NUDT15 variants are rare (<1%) in Europeans, ~18%–20% of East Asians carry NUDT15 risk alleles, making NUDT15 the #1 cause of life-threatening thiopurine leukopenia in Asian populations."
  }
};
