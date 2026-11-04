export default {
  "gene": {
    "chinese_name": "Epidermal Growth Factor Receptor",
    "chromosome": "7p11.2 (Chromosome 7)",
    "metaphor": {
      "title": "🚦 The Cell Surface 【Growth Gas Pedal (Targeted Drugs Are the Precision Brake Key)】",
      "story": "Normal cells only tap the gas pedal lightly when the body signals a need for tissue repair. When EGFR mutates in lung cells, it is as if the gas pedal is rusted and jammed all the way to the floor—causing uncontrolled cell growth and lung cancer. Fortunately, modern medicine invented a precision “brake key” (targeted drugs like Osimertinib and Gefitinib) that locks onto the jammed pedal and stops tumor growth."
    },
    "plain_summary": "EGFR mutations are among the most common and treatable actionable targets in non-small cell lung cancer (NSCLC), occurring in ~50% of East Asian lung adenocarcinoma patients. Daily oral targeted therapy enables long-term tumor control and high quality of life.",
    "academic_summary": "EGFR exon 19 in-frame deletions (Ex19del) and exon 21 L858R point mutations cause ligand-independent constitutive autophosphorylation of the tyrosine kinase domain, driving downstream MAPK and PI3K-Akt survival pathways and conferring high sensitivity to 1st/2nd/3rd-generation EGFR-TKIs."
  },
  "disease": {
    "chinese_name": "Non-Small Cell Lung Carcinoma (NSCLC)",
    "categories": [
      "Malignant Neoplasm",
      "Thoracic Oncology"
    ],
    "inheritance_mode": "Predominantly Acquired Somatic Mutation (Non-Hereditary)",
    "severity_badge": "🎯 Actionable Target (Highly Effective Oral Targeted Therapy)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0030358",
      "name": "Non-small cell lung carcinoma",
      "chinese_name": "Non-small cell lung carcinoma"
    },
    {
      "hpo_id": "HP:0100526",
      "name": "Neoplasm of the lung",
      "chinese_name": "Neoplasm of the lung"
    },
    {
      "hpo_id": "HP:0002105",
      "name": "Hemoptysis",
      "chinese_name": "Hemoptysis / persistent cough"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Osimertinib",
      "chinese_name": "Osimertinib (Tagrisso)",
      "mechanism": "3rd-generation irreversible EGFR-TKI (covers sensitizing & T790M resistance mutations; high CNS penetration)",
      "approval_status": "FDA / TFDA / NMPA Approved"
    },
    {
      "drug_name": "Gefitinib",
      "chinese_name": "Gefitinib (Iressa)",
      "mechanism": "1st-generation reversible EGFR tyrosine kinase inhibitor (EGFR-TKI)",
      "approval_status": "FDA / TFDA / NMPA Approved"
    }
  ],
  "pharmacogenomics": {
    "key_variant": "Somatic sensitizing variants Exon 19 deletion / L858R; resistance variant T790M",
    "population_frequency": "~45%–55% somatic mutation rate in East Asian lung adenocarcinoma",
    "traffic_light_summary": "🟢 Targeted Therapy Sensitive: Ex19del/L858R tumors respond strongly to Osimertinib/Gefitinib; 🔴 Avoid grapefruit and St. John’s Wort during therapy to prevent CYP3A4-mediated toxicity or drug failure.",
    "drugs_guide": [
      {
        "drug_name": "Osimertinib / Gefitinib",
        "chinese_name": "Osimertinib / Gefitinib",
        "traffic_light": "GREEN_NORMAL",
        "clinical_alert": "Companion diagnostics confirm that EGFR Ex19del or L858R-positive NSCLC patients achieve significantly superior progression-free survival with first-line Osimertinib or Gefitinib vs. chemotherapy.",
        "cpic_level": "FDA / NMPA Companion Diagnostic Level 1A"
      }
    ],
    "dietary_contraindications": [
      "Strictly avoid grapefruit, Seville bitter oranges, and St. John’s Wort while taking Osimertinib or Gefitinib to prevent CYP3A4 interference"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Top-Tier Precision Oncology Guideline (FDA / TFDA / NMPA Approved)",
    "clinvar_summary_chinese": "Confirmed clinical sensitivity to Osimertinib, Gefitinib, and EGFR-TKIs"
  },
  "lifestyle_prevention": {
    "screening_advice": "Adults aged 40+ with a smoking history, secondhand smoke/cooking fume exposure, or family history of lung cancer should undergo annual Low-Dose Chest CT (LDCT).",
    "lifestyle_tips": [
      "Avoid first-hand and second-hand tobacco smoke; use high-extraction range hoods when cooking",
      "Maintain good indoor ventilation and wear particulate respirators during high air-pollution days",
      "Avoid occupational exposure to radon, asbestos, and industrial dust"
    ]
  },
  "doctor_checklist": {
    "specialty": "Thoracic Surgery / Medical Oncology / Pulmonology",
    "questions": [
      "Doctor, my biopsy report shows an EGFR mutation. Do you recommend a 1st-, 2nd-, or 3rd-generation EGFR-TKI (such as Osimertinib) as first-line therapy?",
      "What common side effects of EGFR targeted therapy (such as skin rash or diarrhea) should I watch for and how can I manage them?",
      "How frequently should I schedule follow-up chest CT and brain MRI scans during treatment?"
    ]
  },
  "myth_buster": {
    "myth": "“Does every lung cancer patient have to endure grueling chemotherapy with severe hair loss and weight loss?”",
    "truth": "Not necessarily! When a sensitizing mutation like EGFR is identified, first-line treatment is often a convenient once-daily oral targeted pill—without chemotherapy hair loss and with much milder side effects, allowing most patients to live and work normally at home."
  }
};
