export default {
  "gene": {
    "chinese_name": "Apolipoprotein E",
    "chromosome": "19q13.32 (Chromosome 19)",
    "metaphor": {
      "title": "🧠 The Brain’s 【Waste-Clearing Truck (ε4 Model Runs Slower)】",
      "story": "As the brain works, it produces metabolic waste products (like sticky amyloid plaques). APOE acts like a fleet of sanitation trucks patrolling the brain every night to clear out trash. APOE comes in three main models (ε2, ε3, ε4). If you inherit the ε4 model, the truck clears amyloid more slowly, allowing waste to accumulate over decades and increasing late-onset Alzheimer disease susceptibility."
    },
    "plain_summary": "APOE ε4 is the most common genetic susceptibility marker for late-onset Alzheimer disease. It is a “risk factor,” NOT a deterministic disease gene—carriers who protect cardiovascular health, follow a Mediterranean diet, and stay mentally active may never develop dementia.",
    "academic_summary": "The APOE ε4 allele (defined by the rs429358-C and rs7412-C haplotype) impairs astrocyte-mediated β-amyloid (Aβ) clearance, promotes tau hyperphosphorylation, and compromises blood-brain barrier integrity, representing the strongest genetic risk factor for sporadic late-onset Alzheimer disease."
  },
  "disease": {
    "chinese_name": "Alzheimer Disease (Late-Onset Dementia)",
    "categories": [
      "Neurodegenerative Disorder",
      "Cognitive Impairment"
    ],
    "inheritance_mode": "Complex Polygenic Susceptibility (Semidominant ε4 Dose Effect)",
    "severity_badge": "💡 Susceptibility Factor (Non-Deterministic & Modifiable)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0000726",
      "name": "Dementia",
      "chinese_name": "Dementia"
    },
    {
      "hpo_id": "HP:0002354",
      "name": "Memory impairment",
      "chinese_name": "Memory impairment"
    },
    {
      "hpo_id": "HP:0001268",
      "name": "Mental deterioration",
      "chinese_name": "Progressive cognitive decline"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Lecanemab",
      "chinese_name": "Lecanemab (Leqembi)",
      "mechanism": "Humanized IgG1 monoclonal antibody targeting soluble Aβ protofibrils",
      "approval_status": "FDA / TFDA / NMPA Approved"
    },
    {
      "drug_name": "Donanemab",
      "chinese_name": "Donanemab (Kisunla)",
      "mechanism": "Monoclonal antibody targeting N3pG-modified amyloid plaques",
      "approval_status": "FDA Approved"
    }
  ],
  "pharmacogenomics": {
    "key_variant": "APOE ε4 allele (rs429358 C / rs7412 C)",
    "population_frequency": "~15%–25% carrier frequency in the general population",
    "traffic_light_summary": "🟡 Caution / Intensive Monitoring: APOE ε4 carriers (especially homozygotes) have a significantly higher risk of Amyloid-Related Imaging Abnormalities (ARIA cerebral edema/microhemorrhages) when treated with anti-Aβ antibodies (Lecanemab/Donanemab); APOE genotyping is recommended prior to therapy.",
    "drugs_guide": [
      {
        "drug_name": "Lecanemab / Donanemab",
        "chinese_name": "Lecanemab / Donanemab",
        "traffic_light": "YELLOW_CAUTION",
        "clinical_alert": "FDA Boxed Warning notes that APOE ε4 homozygotes have a substantially higher incidence of ARIA-E (cerebral edema) and ARIA-H (microhemorrhages). Test APOE status before initiating therapy and intensify brain MRI monitoring.",
        "cpic_level": "FDA Boxed Warning Biomarker"
      }
    ],
    "dietary_contraindications": [
      "Limit saturated fats, trans fats, and refined sugars (APOE ε4 carriers are more sensitive to dietary cholesterol/saturated fat, elevating LDL-C)"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Strong Scientific Consensus",
    "clinvar_summary_chinese": "Confirmed dose-dependent neurodegenerative risk for the ε4 isoform"
  },
  "lifestyle_prevention": {
    "screening_advice": "After age 50, include annual MoCA cognitive screening in checkups and regularly monitor blood pressure, blood glucose, and LDL-C cholesterol.",
    "lifestyle_tips": [
      "Mediterranean diet: prioritize fatty fish rich in Omega-3, nuts, extra-virgin olive oil, and dark leafy greens",
      "Lifelong cognitive engagement: reading, strategy games, learning instruments or languages to build cognitive reserve",
      "Ensure 7–8 hours of deep sleep nightly so the glymphatic system can clear metabolic waste from the brain"
    ]
  },
  "doctor_checklist": {
    "specialty": "Neurology / Memory Clinic / Geriatric Medicine",
    "questions": [
      "Doctor, my test shows I carry the APOE ε4 allele. Should I schedule baseline brain MRI or cognitive scale assessments?",
      "What target levels should I aim for with my LDL-C cholesterol and blood pressure to best protect my cerebral blood vessels?",
      "If an older family member with early memory decline considers Lecanemab, how does APOE ε4 status affect ARIA monitoring?"
    ]
  },
  "myth_buster": {
    "myth": "“If I carry two copies of APOE ε4, am I guaranteed to develop Alzheimer disease when I get old?”",
    "truth": "Absolutely not! Genetics is only part of the picture. Vascular health, a Mediterranean diet, regular aerobic exercise, quality sleep, and cognitive training provide powerful protection. Many ε4/ε4 carriers remain sharp and independent throughout old age."
  }
};
