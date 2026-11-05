export default {
  "gene": {
    "chinese_name": "Phosphatase and Tensin Homolog (PTEN)",
    "chromosome": "10q23.31 (Chromosome 10)",
    "metaphor": {
      "title": "🛑 The 【Growth Throttle Limiter】 in the Cell",
      "story": "Cells have a PI3K/AKT growth throttle, and PTEN applies the limiter that keeps the growth signal from running too strong. If PTEN fails, the throttle can stick, cells may overgrow, multiple benign hamartomas can form, and the risk of breast, thyroid and endometrial cancer rises. This is PTEN hamartoma tumor syndrome, which includes Cowden syndrome."
    },
    "plain_summary": "PTEN is an important tumor suppressor. A pathogenic variant causes PTEN hamartoma tumor syndrome (including Cowden syndrome), which may involve macrocephaly and multiple benign tumors and raises the risk of breast, thyroid and endometrial cancer. It is inherited in an autosomal dominant pattern, first-degree relatives may carry the same variant, and regular multidisciplinary surveillance and genetic counseling are needed.",
    "academic_summary": "PTEN is located at 10q23.31 and encodes a lipid phosphatase that dephosphorylates PIP3 to PIP2, negatively regulating the PI3K/AKT/mTOR pathway. Germline heterozygous pathogenic variants cause PTEN hamartoma tumor syndrome (PHTS) in an autosomal dominant pattern; features include macrocephaly, mucocutaneous hamartomas, breast cancer, thyroid cancer, endometrial cancer and renal cell carcinoma."
  },
  "disease": {
    "chinese_name": "PTEN Hamartoma Tumor Syndrome (Including Cowden Syndrome)",
    "categories": [
      "Malignant Neoplasm",
      "Hereditary Cancer Syndrome"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "⚠️ High Clinical Priority (Requires regular multidisciplinary surveillance)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0000256",
      "name": "Macrocephaly",
      "chinese_name": "Macrocephaly"
    },
    {
      "hpo_id": "HP:0003002",
      "name": "Breast carcinoma",
      "chinese_name": "Breast carcinoma"
    },
    {
      "hpo_id": "HP:0002890",
      "name": "Thyroid carcinoma",
      "chinese_name": "Thyroid carcinoma"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Risk-reducing surgery",
      "chinese_name": "Risk-Reducing Surgery",
      "mechanism": "Removes high-risk tissue such as thyroid or breast based on individualized risk assessment",
      "approval_status": "Standard clinical management"
    },
    {
      "drug_name": "Everolimus",
      "chinese_name": "Everolimus (mTOR Inhibitor)",
      "mechanism": "Inhibits the mTOR pathway and is used for selected PTEN-related tumors",
      "approval_status": "Used by tumor type; not gene-guided dosing"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": false,
    "key_variant": "Germline PTEN pathogenic variants; PTEN hamartoma tumor syndrome is mainly caused by dysregulated PI3K/AKT/mTOR signaling",
    "population_frequency": "PTEN pathogenic variants are relatively uncommon in the general population, and carrier frequency varies by ancestry (PMID:20301661)",
    "traffic_light_summary": "This gene currently has no CPIC pharmacogenomic (PGx) dosing guideline. Management of PTEN hamartoma tumor syndrome centers on regular multidisciplinary surveillance (breast, thyroid, endometrium, kidney, and others), risk-reducing surgery when indicated, and genetic counseling; whether to use mTOR inhibitors or other drugs should be assessed by an oncologist based on tumor type.",
    "drugs_guide": [],
    "dietary_contraindications": [
      "Maintain a balanced diet and healthy weight, and avoid smoking and excess alcohol",
      "Keep regular thyroid, breast and gynecologic follow-up as advised"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Definitive International Clinical Consensus",
    "clinvar_summary_chinese": "Many PTEN pathogenic variants curated in ClinVar and the literature show a clear association with PTEN hamartoma tumor syndrome",
    "key_pmids": [
      "PMID:20301661"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "Following NCCN guidance and medical advice, have regular breast imaging, thyroid ultrasound, gynecologic and renal surveillance; seek care early for abnormal masses or symptoms; family members should receive genetic counseling and testing.",
    "lifestyle_tips": [
      "Maintain a balanced diet and healthy weight, and avoid smoking and excess alcohol",
      "Keep regular thyroid, breast and gynecologic follow-up as advised",
      "Seek care early for a neck mass, abnormal bleeding or breast changes"
    ]
  },
  "doctor_checklist": {
    "specialty": "Medical Oncology / Endocrinology / Breast Surgery / Clinical Genetics Clinic",
    "questions": [
      "My genetic report shows a PTEN variant. What regular surveillance do I need, and how often?",
      "Do my thyroid, breast and endometrial risks warrant further imaging or surgery evaluation?",
      "Would mTOR inhibitor therapy be appropriate for my situation?",
      "Should my first-degree relatives undergo cascade genetic testing for this exact variant?"
    ]
  },
  "myth_buster": {
    "myth": "“Cowden syndrome is only about skin and benign tumors, so cancer is not a concern.”",
    "truth": "Not true. PTEN hamartoma tumor syndrome involves benign hamartomas but also raises the risk of breast, thyroid, endometrial and renal cell cancer. Regular multidisciplinary surveillance is essential."
  }
};
