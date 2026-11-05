export default {
  "gene": {
    "chinese_name": "MutS Homolog 6 (MSH6)",
    "chromosome": "2p16.3 (Chromosome 2)",
    "metaphor": {
      "title": "🧬 The DNA Proofreading Team's 【Single-Base Mismatch Detector】",
      "story": "DNA replication often produces single-base mismatches, and MSH6 partners with MSH2 to form a detector that finds these small errors and hands them to the repair team. When the detector fails, mismatches slowly accumulate and cells can drift toward cancer. This is related to Lynch syndrome."
    },
    "plain_summary": "MSH6 is a key DNA mismatch repair (MMR) gene. A pathogenic variant raises lifetime risk of Lynch syndrome-related cancers such as colon and endometrial cancer, is inherited in an autosomal dominant pattern, and first-degree relatives may carry the same variant. Earlier, regular colonoscopy and gynecologic surveillance allow early detection and management.",
    "academic_summary": "MSH6 is located at 2p16.3 and encodes a MutS homolog that forms the MutSα complex with MSH2 to recognize single-base mismatches and small insertions/deletions during DNA replication and recruit MLH1/PMS2 for repair. Germline heterozygous pathogenic variants cause mismatch repair deficiency and microsatellite instability-high (MSI-H) tumors, leading to autosomal dominant Lynch syndrome; dMMR/MSI-H tumors are sensitive to PD-1 immune checkpoint inhibitors."
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
    "key_variant": "Germline pathogenic variants in the MSH6 mismatch repair gene; tumors often show dMMR/MSI-H",
    "population_frequency": "Lynch syndrome affects about 1 in 300 people, and the MSH6-related proportion varies by ancestry (PMID:20301390)",
    "traffic_light_summary": "🟢 Immunotherapy Sensitive: dMMR/MSI-H tumors respond well to PD-1 immune checkpoint inhibitors such as pembrolizumab and nivolumab, under FDA biomarker approval and NCCN Category 1.",
    "drugs_guide": [
      {
        "drug_name": "Pembrolizumab / Nivolumab",
        "chinese_name": "Pembrolizumab / Nivolumab",
        "traffic_light": "GREEN_NORMAL",
        "clinical_alert": "MSH6-deficient dMMR/MSI-H tumors respond well to PD-1 immune checkpoint inhibitors; dMMR/MSI-H status should be confirmed pathologically before use.",
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
    "clinvar_summary_chinese": "Many MSH6 pathogenic variants curated in ClinVar and the literature are associated with Lynch syndrome and dMMR/MSI-H tumors",
    "key_pmids": [
      "PMID:20301390",
      "PMID:31337882"
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
      "My genetic report shows an MSH6 variant. At what age should I start colonoscopy, and how often?",
      "Do I need endometrial cancer surveillance, and what tests do you recommend?",
      "Should my tumor be tested for dMMR/MSI-H, and would that affect the choice of immunotherapy?",
      "Should my first-degree relatives undergo cascade genetic testing for this exact variant?"
    ]
  },
  "myth_buster": {
    "myth": "“MSH6 is only a secondary Lynch syndrome gene, so the risk is low.”",
    "truth": "Not true. MSH6 pathogenic variants also raise the risk of colon and endometrial cancer. Genetic counseling and regular surveillance allow early detection and management."
  }
};
