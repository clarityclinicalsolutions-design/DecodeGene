export default {
  "gene": {
    "chinese_name": "Interferon Lambda 3 (IFNL3 / IL28B) — Hepatitis C Interferon Response Gene",
    "chromosome": "19q13.2 (Chromosome 19)",
    "metaphor": {
      "title": "🛡️ The Liver's 【Antiviral Immune Switch】 (A weaker switch blunts interferon response)",
      "story": "Interferon lambda 3 made by IFNL3 is an innate immune switch that helps clear hepatitis C virus from the liver. When a genotype makes the switch respond weakly, interferon-based regimens struggle to suppress the virus. In contrast, all-oral direct-acting antivirals bypass this limitation and achieve high cure rates across genotypes."
    },
    "plain_summary": "IFNL3 (formerly IL28B) genotype predicts how chronic hepatitis C responds to interferon-based therapy. Carriers of an unfavorable genotype have lower cure rates and a heavier side-effect burden with peginterferon plus ribavirin. Current all-oral direct-acting antivirals (DAAs) achieve high cure rates regardless of IFNL3 genotype and should be prioritized after physician assessment.",
    "academic_summary": "IFNL3 is located at 19q13.2 and encodes type III interferon lambda 3, which contributes to hepatic antiviral immunity. Polymorphisms near IFNL3/IL28B, including rs12979860 and rs8099917, are associated with spontaneous hepatitis C clearance and interferon-based treatment response; unfavorable genotypes have lower response rates. Direct-acting antivirals are largely independent of IFNL3 genotype."
  },
  "disease": {
    "chinese_name": "Chronic Hepatitis C and Interferon Response Prediction (IFNL3 PGx)",
    "categories": ["Pharmacogenomics (PGx)", "Viral Hepatitis", "Antiviral Response Prediction"],
    "inheritance_mode": "Autosomal Codominant Immune Response Phenotype",
    "severity_badge": "🟡 Response Prediction Alert (prioritize all-oral DAA assessment)"
  },
  "phenotypes": [
    { "hpo_id": "HP:0002910", "name": "Elevated circulating hepatic transaminase concentration", "chinese_name": "Elevated hepatic transaminase concentration" },
    { "hpo_id": "HP:0001392", "name": "Abnormality of the liver", "chinese_name": "Liver function abnormality" }
  ],
  "drugs_targeted": [
    { "drug_name": "Peginterferon alfa-2a / alfa-2b + Ribavirin", "chinese_name": "Peginterferon alfa-2a / alfa-2b plus Ribavirin", "mechanism": "Immunomodulatory antiviral regimen whose response is influenced by IFNL3 genotype", "approval_status": "PharmGKB response pharmacogene" },
    { "drug_name": "Direct-acting antivirals (DAAs)", "chinese_name": "Direct-acting antivirals (DAAs)", "mechanism": "Directly inhibit hepatitis C viral replication with high cure rates across IFNL3 genotypes", "approval_status": "Current standard first-line hepatitis C therapy" }
  ],
  "pharmacogenomics": {
    "key_variant": "IFNL3 (IL28B) rs12979860 and rs8099917",
    "population_frequency": "The favorable rs12979860 C genotype is more common in East Asians; unfavorable genotypes are associated with lower interferon-based response (PMID:24096968)",
    "traffic_light_summary": "🟡 Response prediction and alternative assessment: carriers of unfavorable IFNL3 genotypes have lower response rates and a heavier side-effect burden with peginterferon plus ribavirin. A physician should assess switching to all-oral direct-acting antivirals (DAAs), which achieve high cure rates across IFNL3 genotypes.",
    "drugs_guide": [
      { "drug_name": "Peginterferon alfa-2a / alfa-2b + Ribavirin", "chinese_name": "Peginterferon alfa-2a / alfa-2b plus Ribavirin", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "Unfavorable IFNL3 genotypes have lower response rates and may experience more fever, fatigue, cytopenias and mood side effects with interferon-based therapy; a physician should assess switching to all-oral direct-acting antivirals.", "cpic_level": "PharmGKB Level 1A / IFNL3-Interferon Response" },
      { "drug_name": "Direct-acting antivirals (DAAs)", "chinese_name": "Direct-acting antivirals (DAAs)", "traffic_light": "GREEN_NORMAL", "clinical_alert": "All-oral direct-acting antivirals achieve high cure rates across IFNL3 genotypes and are the current first-line therapy for chronic hepatitis C; regimen choice still depends on viral genotype, fibrosis and kidney function.", "cpic_level": "AASLD/IDSA Hepatitis C Guidance" }
    ],
    "dietary_contraindications": [
      "Avoid alcohol during treatment to reduce liver burden and the risk of hepatitis worsening",
      "Report persistent fever, severe fatigue, low mood or abnormal blood counts during interferon-based therapy",
      "Do not take unproven liver supplements or herbal products without discussing them with your physician or pharmacist"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️ Clear PharmGKB and clinical trial evidence",
    "clinvar_summary_chinese": "PharmGKB and the literature establish the association of IFNL3/IL28B rs12979860 and rs8099917 with hepatitis C interferon response"
  },
  "lifestyle_prevention": {
    "screening_advice": "If you have chronic hepatitis C, are considering interferon-based therapy, or have had treatment failure, discuss IFNL3 testing and prioritize assessment for all-oral direct-acting antivirals.",
    "lifestyle_tips": [
      "Show your IFNL3 result to your physician and discuss whether an all-oral DAA regimen is suitable",
      "Avoid alcohol and unproven liver supplements, and follow viral-load and liver-function monitoring",
      "Seek care early for severe fatigue, jaundice, dark urine or persistent fever"
    ]
  },
  "doctor_checklist": {
    "specialty": "Gastroenterology and Hepatology / Infectious Diseases / Hepatitis Clinic",
    "questions": [
      "My IFNL3 genotype predicts a lower interferon response. Am I a candidate for all-oral DAA therapy instead?",
      "How do my viral genotype, liver fibrosis and kidney function affect DAA selection?",
      "How often should viral load, liver tests and blood counts be monitored during treatment?"
    ]
  },
  "myth_buster": {
    "myth": "“Hepatitis C always requires interferon, and a poor genotype means enduring the full course.”",
    "truth": "Not any more. All-oral direct-acting antivirals achieve high cure rates across IFNL3 genotypes with fewer side effects. IFNL3 helps predict interferon response, but modern treatment should be chosen by the physician based on the virus and liver status."
  }
};
