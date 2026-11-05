export default {
  "gene": {
    "chinese_name": "Von Hippel-Lindau Tumor Suppressor (VHL)",
    "chromosome": "3p25.3 (Chromosome 3)",
    "metaphor": {
      "title": "🧭 The Cell's 【Oxygen Sensor Brake】",
      "story": "Normal cells switch on a survival program when oxygen is low, and VHL acts as the brake that keeps this program from overreacting. If VHL fails, cells behave as if they are always short of oxygen and grow many blood-rich tumors, such as hemangioblastoma, renal cell carcinoma and pheochromocytoma. This is von Hippel-Lindau syndrome."
    },
    "plain_summary": "VHL is an important tumor suppressor. A pathogenic variant causes von Hippel-Lindau syndrome, which can involve multiple tumors including hemangioblastoma, renal cell carcinoma and pheochromocytoma. It is inherited in an autosomal dominant pattern, first-degree relatives may carry the same variant, and regular imaging surveillance plus surgery or targeted therapy when needed allow good risk management.",
    "academic_summary": "VHL is located at 3p25.3 and encodes the substrate-recognition protein of an E3 ubiquitin ligase complex that targets HIF-1α/HIF-2α for degradation under normoxia. Germline heterozygous pathogenic variants cause autosomal dominant von Hippel-Lindau syndrome; HIF accumulation promotes angiogenesis and leads to hemangioblastoma, clear-cell renal cell carcinoma and pheochromocytoma. HIF-2α inhibitors are used for VHL-associated tumors."
  },
  "disease": {
    "chinese_name": "Von Hippel-Lindau Syndrome (VHL)",
    "categories": [
      "Malignant Neoplasm",
      "Hereditary Cancer Syndrome"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "⚠️ High Clinical Priority (Requires regular multidisciplinary surveillance)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0005562",
      "name": "Renal cell carcinoma",
      "chinese_name": "Renal cell carcinoma"
    },
    {
      "hpo_id": "HP:0010797",
      "name": "Hemangioblastoma",
      "chinese_name": "Hemangioblastoma"
    },
    {
      "hpo_id": "HP:0002666",
      "name": "Pheochromocytoma",
      "chinese_name": "Pheochromocytoma"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Belzutifan",
      "chinese_name": "Belzutifan (Welireg)",
      "mechanism": "HIF-2α inhibitor that suppresses hypoxia signaling and tumor growth caused by VHL deficiency",
      "approval_status": "FDA-approved for VHL-associated tumors"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": true,
    "key_variant": "Germline VHL pathogenic variants; VHL syndrome is mainly caused by impaired HIF-α degradation and excessive hypoxia signaling",
    "population_frequency": "VHL syndrome affects about 1 in 36,000 people and varies by ancestry (PMID:20301636)",
    "traffic_light_summary": "🟢 Targeted Therapy Sensitive: VHL-associated tumors respond well to HIF-2α inhibitors such as belzutifan, which is FDA-approved for VHL-associated tumors.",
    "drugs_guide": [
      {
        "drug_name": "Belzutifan",
        "chinese_name": "Belzutifan",
        "traffic_light": "GREEN_NORMAL",
        "clinical_alert": "Belzutifan is a HIF-2α inhibitor available for VHL-associated tumors; whether to use it and how to monitor should be assessed by an oncologist.",
        "cpic_level": "FDA Approved for VHL-Associated Tumors"
      }
    ],
    "dietary_contraindications": [
      "No specific dietary restrictions; monitor blood pressure and tumor imaging as advised",
      "During targeted therapy, monitor for anemia and adverse effects as advised"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Definitive International Clinical Consensus",
    "clinvar_summary_chinese": "Many VHL pathogenic variants curated in ClinVar and the literature show a clear association with von Hippel-Lindau syndrome",
    "key_pmids": [
      "PMID:20301636",
      "PMID:34818489"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "Following NCCN guidance and medical advice, have regular brain and spinal imaging, abdominal imaging, renal and adrenal surveillance, and blood pressure checks; discuss surgery or targeted therapy such as belzutifan when indicated; family members should receive genetic counseling and testing.",
    "lifestyle_tips": [
      "Monitor blood pressure as advised and seek care early for episodic headache, palpitations or sweating",
      "Avoid smoking and excess alcohol and maintain a healthy weight",
      "Family members should receive genetic counseling and VHL genetic testing"
    ]
  },
  "doctor_checklist": {
    "specialty": "Medical Oncology / Neurosurgery / Urology / Endocrinology / Clinical Genetics Clinic",
    "questions": [
      "My genetic report shows a VHL variant. What regular imaging surveillance do I need, and how often?",
      "Do my renal, adrenal and central nervous system tumor risks need further evaluation?",
      "Am I a candidate for HIF-2α inhibitors such as belzutifan?",
      "Should my first-degree relatives undergo cascade genetic testing for this exact variant?"
    ]
  },
  "myth_buster": {
    "myth": "“VHL tumors are all benign, so aggressive management is unnecessary.”",
    "truth": "Not true. VHL syndrome includes hemangioblastoma but also raises the risk of renal cell carcinoma and pheochromocytoma. Regular multidisciplinary surveillance and treatment when indicated are key to reducing complications and mortality."
  }
};
