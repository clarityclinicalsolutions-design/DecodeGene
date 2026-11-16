export default {
  "gene": {
    "chinese_name": "HNF1A Hepatocyte Nuclear Factor 1α (MODY3 Gene)",
    "chromosome": "12q24.31 (Chromosome 12)",
    "metaphor": {
      "title": "🌡️ The Pancreas's 【Smart Insulin Thermostat】(When mis-set, blood sugar control drifts)",
      "story": "Pancreatic beta cells must sense blood sugar precisely and release insulin, and HNF1A works like a smart thermostat inside beta cells that switches on many genes involved in insulin secretion. When HNF1A is defective, the thermostat is mis-set, beta cells respond sluggishly to rising glucose, and blood sugar tends to rise in adolescence or early adulthood. This MODY3 diabetes is often especially sensitive to sulfonylureas, so confirming the type by genetic testing allows a more appropriate treatment choice and helps prevent complications from long-term poor glycemic control."
    },
    "plain_summary": "HNF1A pathogenic variants cause maturity-onset diabetes of the young type 3 (MODY3), an autosomal dominant condition. Patients often develop diabetes in adolescence or early adulthood because of impaired insulin secretion. MODY3 frequently responds well to sulfonylureas; genetic testing to confirm the type, individualized medication, and regular monitoring can control blood sugar and reduce complication risk.",
    "academic_summary": "HNF1A encodes hepatocyte nuclear factor 1α, a key transcription factor regulating pancreatic beta-cell development, glucose sensing, and insulin secretion genes. Loss-of-function variants cause MODY3, characterized by adolescent-to-early-adult onset, insulin secretion defects, high sensitivity to sulfonylureas, and a lowered renal threshold that may cause glycosuria. Molecular diagnosis distinguishes MODY3 from type 1 or type 2 diabetes and guides family screening and treatment selection."
  },
  "disease": {
    "chinese_name": "Maturity-Onset Diabetes of the Young Type 3 (MODY3)",
    "categories": [
      "Autosomal Dominant Monogenic Diabetes",
      "Maturity-Onset Diabetes of the Young",
      "Insulin Secretion Defect"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "🟡 Monogenic Diabetes (Sulfonylureas Often Work Well; Long-Term Glucose Monitoring Needed)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0004904",
      "name": "Maturity-onset diabetes of the young",
      "chinese_name": "Young-onset adulthood-type diabetes"
    },
    {
      "hpo_id": "HP:0001394",
      "name": "Cirrhosis",
      "chinese_name": "Liver adenoma and metabolic monitoring risk"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Sulfonylureas (Gliclazide / Glimepiride)",
      "chinese_name": "Sulfonylureas (gliclazide / glimepiride)",
      "mechanism": "Stimulates insulin release from pancreatic beta cells, often highly effective for the insulin secretion defect in HNF1A-MODY",
      "approval_status": "FDA / TFDA / NMPA approved (common glucose-lowering therapy for MODY3)"
    },
    {
      "drug_name": "Metformin / Insulin",
      "chinese_name": "Metformin and insulin",
      "mechanism": "Metformin improves insulin resistance and hepatic glucose output, while insulin directly replaces deficiency; effectiveness should be individualized to the glycemic response",
      "approval_status": "FDA / TFDA / NMPA approved (used according to individual glucose control needs)"
    },
    {
      "drug_name": "Standard antihypertensives / statins",
      "chinese_name": "Standard antihypertensives and statins",
      "mechanism": "Controls blood pressure and lipids to reduce cardiovascular risk; standard cardiovascular protective medications can be used per routine guidance",
      "approval_status": "FDA / TFDA / NMPA approved (routine cardiovascular protection in diabetes)"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": true,
    "key_variant": "HNF1A loss-of-function variants (MODY3 related)",
    "population_frequency": "MODY accounts for a small proportion of young-onset diabetes, and HNF1A-MODY is one of the most common MODY types",
    "summary": "Patients with HNF1A-MODY often respond better to sulfonylureas than to metformin; treatment should be individualized to glycemic response, hypoglycemia risk, and physician guidance.",
    "traffic_light_summary": "🟢 Sulfonylureas (such as gliclazide / glimepiride) are often highly effective for HNF1A-MODY. 🟡 Metformin or insulin may need adjustment according to individual glycemic response and are not the single-gene first choice. 🟢 Standard antihypertensives and statins for cardiovascular protection can generally be used normally.",
    "practical_guidance": "After MODY3 is confirmed, discuss the most appropriate glucose-lowering strategy with endocrinology, and monitor blood glucose, HbA1c, and hypoglycemia symptoms regularly. Do not stop or change medication on your own, and tell the doctor about family diabetes history and genetic test results.",
    "drugs_guide": [
      {
        "drug_name": "Sulfonylureas (Gliclazide / Glimepiride)",
        "chinese_name": "Sulfonylureas (gliclazide / glimepiride)",
        "traffic_light": "GREEN_NORMAL",
        "clinical_alert": "HNF1A-MODY often responds better to sulfonylureas than to metformin, making them a priority glucose-lowering consideration; hypoglycemia risk and glucose changes still require monitoring.",
        "cpic_level": "International MODY Management Guideline (Sulfonylurea First-Line Consideration for HNF1A-MODY)"
      },
      {
        "drug_name": "Metformin / Insulin",
        "chinese_name": "Metformin and insulin",
        "traffic_light": "YELLOW_CAUTION",
        "clinical_alert": "May need adjustment according to individual glycemic response and is not the single-gene first choice; insulin use or sulfonylurea insufficiency should be evaluated by endocrinology.",
        "cpic_level": "International MODY Management Guideline (Individualized Glucose Control)"
      },
      {
        "drug_name": "Standard antihypertensives / statins",
        "chinese_name": "Standard antihypertensives and statins",
        "traffic_light": "GREEN_NORMAL",
        "clinical_alert": "Standard cardiovascular protective medications can be used per routine guidance, with continued monitoring of blood pressure, lipids, and kidney function.",
        "cpic_level": "Routine Cardiovascular Protection Guidance in Diabetes"
      }
    ],
    "dietary_contraindications": [
      "Follow a balanced diet, limit refined sugar and sugary drinks, and exercise regularly to stabilize blood sugar",
      "When using sulfonylureas, eat regularly and watch for hypoglycemia; avoid strenuous exercise on an empty stomach or excessive alcohol",
      "Monitor blood glucose, HbA1c, liver and kidney function, and lipids regularly, and do not stop or adjust medication on your own"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ International Monogenic Diabetes Care and Pharmacogenomics Guideline",
    "clinvar_summary_chinese": "ClinVar lists multiple pathogenic and likely pathogenic HNF1A variants; genetic testing helps distinguish MODY3 from other diabetes types",
    "key_pmids": [
      "PMID:29792621",
      "PMID:37347242"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "People with young-onset diabetes, a strong family history, non-obese diabetes, or an especially good response to sulfonylureas should consider HNF1A genetic testing; first-degree relatives should have glucose screening and genetic counseling.",
    "lifestyle_tips": [
      "Exercise regularly, eat a balanced diet, control weight, and reduce refined sugar intake",
      "Monitor blood glucose and HbA1c as directed, watch for hypoglycemia, and carry a fast sugar source",
      "Have regular eye, kidney, nerve, and cardiovascular complication screening, and share family diabetes history"
    ]
  },
  "doctor_checklist": {
    "specialty": "Endocrinology and Metabolism / Genetic Counseling",
    "questions": [
      "Doctor, I or my family members developed diabetes young and several relatives are affected—could this be HNF1A-MODY, and should we have genetic testing?",
      "If MODY3 is confirmed, are sulfonylureas more suitable for me than metformin? How should hypoglycemia and glucose changes be monitored?",
      "Should my children have glucose screening and genetic counseling, and when should follow-up begin?"
    ]
  },
  "myth_buster": {
    "myth": "“Diabetes at a young age must be type 1, requiring lifelong insulin injections—oral medication can never work?”",
    "truth": "Wrong! HNF1A-MODY is an autosomal dominant monogenic diabetes in which insulin secretion is impaired but not necessarily absent, and sulfonylurea tablets often work well. Genetic testing to confirm the type may allow treatment adjustment, but endocrinology must still monitor closely and individualize care."
  }
}
