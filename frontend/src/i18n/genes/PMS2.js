export default {
  "gene": {
    "chinese_name": "PMS2 Mismatch Repair Endonuclease (PMS2)",
    "chromosome": "7p22.1 (Chromosome 7)",
    "metaphor": {
      "title": "🧬 The 【Final Cut】 in the DNA Proofreading Line",
      "story": "Mismatch repair is a well-organized production line: MSH2/MSH6 find the typo, and MLH1/PMS2 cut out the wrong segment. PMS2 is the key player making that final cut. If the cut fails, mismatches are not truly removed, cells accumulate mutations, and the risk of Lynch syndrome-related cancers rises."
    },
    "plain_summary": "PMS2 is a key DNA mismatch repair (MMR) gene. A pathogenic variant raises lifetime risk of Lynch syndrome-related cancers such as colon and endometrial cancer, is inherited in an autosomal dominant pattern, and first-degree relatives may carry the same variant. Earlier, regular colonoscopy and gynecologic surveillance allow early detection and management.",
    "academic_summary": "PMS2 is located at 7p22.1 and encodes a MutL homolog that forms the MutLα complex with MLH1 to perform endonucleolytic excision after mismatch recognition. Germline heterozygous pathogenic variants cause mismatch repair deficiency and microsatellite instability-high (MSI-H) tumors, leading to autosomal dominant Lynch syndrome; dMMR/MSI-H tumors are sensitive to PD-1 immune checkpoint inhibitors. Pseudogenes near PMS2 can complicate genetic test interpretation."
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
    "key_variant": "Germline pathogenic variants in the PMS2 mismatch repair gene; tumors often show dMMR/MSI-H",
    "population_frequency": "Lynch syndrome affects about 1 in 300 people, and the PMS2-related proportion varies by ancestry (PMID:20301390)",
    "traffic_light_summary": "🟢 Immunotherapy Sensitive: dMMR/MSI-H tumors respond well to PD-1 immune checkpoint inhibitors such as pembrolizumab and nivolumab, under FDA biomarker approval and NCCN Category 1.",
    "drugs_guide": [
      {
        "drug_name": "Pembrolizumab / Nivolumab",
        "chinese_name": "Pembrolizumab / Nivolumab",
        "traffic_light": "GREEN_NORMAL",
        "clinical_alert": "PMS2-deficient dMMR/MSI-H tumors respond well to PD-1 immune checkpoint inhibitors; dMMR/MSI-H status should be confirmed pathologically before use.",
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
    "clinvar_summary_chinese": "Multiple PMS2 pathogenic variants curated in ClinVar and the literature are associated with Lynch syndrome and dMMR/MSI-H tumors",
    "key_pmids": [
      "PMID:20301390",
      "PMID:30013564"
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
      "My genetic report shows a PMS2 variant. At what age should I start colonoscopy, and how often?",
      "Do I need endometrial cancer surveillance, and what tests do you recommend?",
      "Should my tumor be tested for dMMR/MSI-H, and would that affect the choice of immunotherapy?",
      "Should my first-degree relatives undergo cascade genetic testing for this exact variant?"
    ]
  },
  "myth_buster": {
    "myth": "“PMS2 carries a lower risk than other Lynch genes, so surveillance is unnecessary.”",
    "truth": "Not true. PMS2 pathogenic variants still raise the risk of colon and endometrial cancer, and pseudogene interference must be considered in test interpretation. Regular surveillance and genetic counseling remain important."
  }
};
