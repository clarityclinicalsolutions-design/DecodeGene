export default {
  "gene": {
    "chinese_name": "Thiopurine S-Methyltransferase (Thiopurine Safety Gene)",
    "chromosome": "6p22.3 (Chromosome 6)",
    "metaphor": {
      "title": "🧯 The Bone Marrow's 【Thiopurine Safety Pressure-Relief Valve】",
      "story": "Azathioprine and Mercaptopurine are key medications for inflammatory bowel disease, autoimmune conditions, and leukemia. Inside the body, TPMT acts like a safety pressure-relief valve that methylates and inactivates most of the drug, leaving just the right amount of active drug to work safely. If you carry loss-of-function alleles (*3A or *3C), the relief valve is welded shut—shunting nearly all of the drug into toxic active metabolites that overwhelm bone marrow blood production."
    },
    "plain_summary": "TPMT inactivates thiopurine drugs (Azathioprine, Mercaptopurine, Thioguanine). Carriers of loss-of-function alleles (*2, *3A, *3B, *3C) face life-threatening bone marrow suppression (myelosuppression) on standard regimens; your doctor may adjust the dose substantially or choose a non-thiopurine medication.",
    "academic_summary": "TPMT encodes thiopurine S-methyltransferase, catalyzing S-methylation inactivation of 6-MP and 6-TG in competition with formation of cytotoxic 6-thioguanine nucleotides (6-TGN). No-function alleles TPMT*3A (rs1800460 c.460G>A + rs1142345 c.719A>G), TPMT*3C (rs1142345 c.719A>G), and TPMT*2 (rs1800462 c.238G>C) destabilize the enzyme, causing excessive 6-TGN accumulation and severe hematopoietic toxicity."
  },
  "disease": {
    "chinese_name": "Thiopurine S-Methyltransferase Deficiency & Myelosuppression Risk",
    "categories": ["Pharmacogenomics (PGx)", "Hematology-Oncology & Autoimmune Safety"],
    "inheritance_mode": "Autosomal Codominant Metabolic Phenotype",
    "severity_badge": "🔴 Critical Thiopurine Red Light (Test Both TPMT & NUDT15 Before Therapy)"
  },
  "phenotypes": [
    { "hpo_id": "HP:0001882", "name": "Decreased total leukocyte count", "chinese_name": "Leukopenia" },
    { "hpo_id": "HP:0001875", "name": "Decreased total neutrophil count", "chinese_name": "Neutropenia" },
    { "hpo_id": "HP:0005528", "name": "Bone marrow hypocellularity", "chinese_name": "Severe bone marrow myelosuppression" }
  ],
  "drugs_targeted": [
    { "drug_name": "Azathioprine", "chinese_name": "Azathioprine (Imuran)", "mechanism": "Thiopurine immunosuppressant prodrug regulated by TPMT and NUDT15", "approval_status": "CPIC Level A / FDA Testing Recommended" },
    { "drug_name": "Mercaptopurine / Thioguanine", "chinese_name": "Mercaptopurine (6-MP) / Thioguanine (6-TG)", "mechanism": "Purine antimetabolite agents used in acute lymphoblastic leukemia and IBD", "approval_status": "CPIC Level A / FDA Testing Recommended" }
  ],
  "pharmacogenomics": {
    "key_variant": "TPMT*3A (rs1800460 c.460G>A + rs1142345 c.719A>G), TPMT*3C (rs1142345, c.719A>G), TPMT*2 (rs1800462, c.238G>C)",
    "population_frequency": "Carrier frequency is ~6%–10% in European and African populations (*3A most common in Europeans); in East Asians, *3C predominates with ~1%–2% allele frequency (PMID:30447069)",
    "traffic_light_summary": "🔴 Poor Metabolizers (two no-function alleles, e.g., *3A/*3A, *3C/*3C): For non-malignant conditions, avoid Azathioprine, Mercaptopurine, and Thioguanine and choose non-thiopurine therapy; for malignancy, your oncologist will drastically reduce the dose. 🟡 Intermediate Metabolizers (*1/*3A, *1/*3C): Your doctor may reduce the starting dose and monitor CBC closely.",
    "drugs_guide": [
      { "drug_name": "Azathioprine / Mercaptopurine / Thioguanine — Poor Metabolizer", "chinese_name": "Azathioprine / Mercaptopurine / Thioguanine — Poor Metabolizer", "traffic_light": "RED_AVOID", "clinical_alert": "TPMT poor metabolizers experience life-threatening pancytopenia and myelosuppression on standard thiopurine regimens. Depending on the condition being treated, your doctor may need to greatly reduce the dose or choose another drug.", "cpic_level": "CPIC Guideline for TPMT, NUDT15 and Thiopurines Level A / FDA Testing Recommended" },
      { "drug_name": "Azathioprine / Mercaptopurine / Thioguanine — Intermediate Metabolizer", "chinese_name": "Azathioprine / Mercaptopurine / Thioguanine — Intermediate Metabolizer", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "TPMT intermediate metabolizers accumulate higher cytotoxic 6-TGN levels; your doctor may reduce the starting dose and closely monitor complete blood counts (CBC) and liver function.", "cpic_level": "CPIC Guideline for TPMT, NUDT15 and Thiopurines Level A / PharmGKB Level 1A" }
    ],
    "dietary_contraindications": [
      "Never combine thiopurines with xanthine oxidase inhibitors such as Allopurinol or Febuxostat without specialist supervision, as they block thiopurine breakdown and multiply myelotoxicity",
      "Avoid raw or unpasteurized foods to reduce infection risk during periods of low white blood cell counts"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A & Gold-Standard Clinical Pharmacogenetics Guideline",
    "clinvar_summary_chinese": "TPMT*2, *3A, *3B, and *3C are standard pre-prescription pharmacogenetic biomarkers worldwide"
  },
  "lifestyle_prevention": {
    "screening_advice": "Perform combined TPMT and NUDT15 genotyping before starting Azathioprine, Mercaptopurine, or Thioguanine for IBD, lupus, transplantation, or leukemia.",
    "lifestyle_tips": [
      "East Asian patients must test both TPMT and NUDT15 before starting thiopurines",
      "Complete scheduled CBC and liver function blood draws promptly during treatment initiation",
      "Seek urgent medical care if you develop unexplained fever, severe sore throat, oral ulcers, or abnormal bruising"
    ]
  },
  "doctor_checklist": {
    "specialty": "Gastroenterology / Rheumatology / Hematology-Oncology / Pediatrics",
    "questions": [
      "Doctor, my report shows a TPMT variant (such as TPMT*3A or *3C). Should we choose a non-thiopurine immunomodulator or adjust my thiopurine regimen?",
      "Did my genetic test also check NUDT15, which is especially common in East Asian populations?",
      "How frequently should I have complete blood count (CBC) monitoring during the first two months of therapy?"
    ]
  },
  "myth_buster": {
    "myth": "“My TPMT gene test came back normal (*1/*1)—does that guarantee I won't develop severe low white blood cells from Azathioprine?”",
    "truth": "Not in East Asian populations! While TPMT explains most thiopurine toxicity in Europeans, NUDT15 (*3) is far more common in Taiwan and East Asia (~18%–20% carriers). Both TPMT and NUDT15 must be tested together before starting thiopurines!"
  }
};
