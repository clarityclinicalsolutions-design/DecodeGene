export default {
  "gene": {
    "chinese_name": "MutS Homolog 2 (MSH2)",
    "chromosome": "2p21 (Chromosome 2)",
    "metaphor": {
      "title": "🧬 The 【Mismatch Detector】 at the DNA Proofreading Desk",
      "story": "DNA replication inevitably produces mismatches, and MSH2 acts like a detector at the proofreading desk: it finds the typo first and hands it to the repair team. If the detector fails, typos accumulate, cells can drift toward cancer, and this is related to Lynch syndrome."
    },
    "plain_summary": "MSH2 is a key DNA mismatch repair (MMR) gene. A pathogenic variant raises lifetime risk of Lynch syndrome-related cancers such as colon and endometrial cancer, is inherited in an autosomal dominant pattern, and first-degree relatives may carry the same variant. Earlier, regular colonoscopy and gynecologic surveillance allow early detection and management.",
    "academic_summary": "MSH2 is located at 2p21 and encodes a MutS homolog that forms the MutSα complex with MSH6 to recognize DNA base mismatches and small insertions/deletions and recruit MLH1/PMS2 for repair. Germline heterozygous pathogenic variants cause mismatch repair deficiency and microsatellite instability-high (MSI-H) tumors, leading to autosomal dominant Lynch syndrome; dMMR/MSI-H tumors are sensitive to PD-1 immune checkpoint inhibitors."
  },
  "disease": {
    "chinese_name": "Lynch Syndrome (Hereditary Non-Polyposis Colorectal Cancer)",
    "categories": [
      "Malignant Neoplasm",
      "Hereditary Cancer Syndrome"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "⚠️ High Clinical Priority (Manageable with surveillance and treatment)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0003003",
      "name": "Colon cancer",
      "chinese_name": "Colon cancer"
    },
    {
      "hpo_id": "HP:0012114",
      "name": "Endometrial carcinoma",
      "chinese_name": "Endometrial carcinoma"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Pembrolizumab",
      "chinese_name": "Pembrolizumab (Keytruda)",
      "mechanism": "PD-1 immune checkpoint inhibitor for dMMR/MSI-H tumors",
      "approval_status": "FDA biomarker-approved / NCCN Category 1"
    },
    {
      "drug_name": "Nivolumab",
      "chinese_name": "Nivolumab (Opdivo)",
      "mechanism": "PD-1 immune checkpoint inhibitor for dMMR/MSI-H tumors",
      "approval_status": "FDA biomarker-approved / NCCN Category 1"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": true,
    "key_variant": "Germline pathogenic variants in the MSH2 mismatch repair gene; tumors often show dMMR/MSI-H",
    "population_frequency": "Lynch syndrome affects about 1 in 300 people and varies by ancestry and gene (PMID:20301390)",
    "traffic_light_summary": "🟢 Immunotherapy Sensitive: dMMR/MSI-H tumors respond well to PD-1 immune checkpoint inhibitors such as pembrolizumab and nivolumab, under FDA biomarker approval and NCCN Category 1.",
    "drugs_guide": [
      {
        "drug_name": "Pembrolizumab / Nivolumab",
        "chinese_name": "Pembrolizumab / Nivolumab",
        "traffic_light": "GREEN_NORMAL",
        "clinical_alert": "MSH2-deficient dMMR/MSI-H tumors respond well to PD-1 immune checkpoint inhibitors; dMMR/MSI-H status should be confirmed pathologically before use.",
        "cpic_level": "FDA Biomarker-Approved (dMMR/MSI-H) / NCCN Category 1"
      }
    ],
    "dietary_contraindications": [
      "Reduce processed meat and red meat intake and increase vegetables, fruit and whole grains",
      "Limit alcohol intake and maintain a healthy body weight"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Definitive International Clinical Consensus",
    "clinvar_summary_chinese": "Many MSH2 pathogenic variants curated in ClinVar and the literature are associated with Lynch syndrome and dMMR/MSI-H tumors",
    "key_pmids": [
      "PMID:20301390",
      "PMID:26023682"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "Following NCCN guidance and medical advice, begin colonoscopy every 1–2 years starting at age 20–25; women may discuss endometrial cancer surveillance; family members should receive genetic counseling and testing.",
    "lifestyle_tips": [
      "Reduce processed meat and red meat and increase vegetables, fruit and whole grains",
      "Exercise regularly, maintain a healthy weight and limit alcohol",
      "Seek care early for blood in the stool, changes in bowel habits or abnormal bleeding"
    ]
  },
  "doctor_checklist": {
    "specialty": "Gastroenterology / Medical Oncology / Gynecology / Clinical Genetics Clinic",
    "questions": [
      "My genetic report shows an MSH2 variant. At what age should I start colonoscopy, and how often?",
      "Do I need endometrial cancer surveillance, and what tests do you recommend?",
      "Should my tumor be tested for dMMR/MSI-H, and would that affect the choice of immunotherapy?",
      "Should my first-degree relatives undergo cascade genetic testing for this exact variant?"
    ]
  },
  "myth_buster": {
    "myth": "“Lynch syndrome means you will definitely get colon cancer.”",
    "truth": "No. Lynch syndrome raises risk, but regular colonoscopy surveillance, lifestyle changes and appropriate medical care greatly reduce risk and enable early detection and treatment."
  }
};
