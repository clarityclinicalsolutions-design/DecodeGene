export default {
  "gene": {
    "chinese_name": "Potassium Voltage-Gated Channel H Member 2 (KCNH2)",
    "chromosome": "7q36.1 (Chromosome 7)",
    "metaphor": {
      "title": "⚡ The Rapid Rectifier of the Heart's Electrical Current",
      "story": "The HERG potassium channel made by KCNH2 rapidly rectifies the cardiac current so the voltage recovers after each beat. If the channel works poorly, repolarization slows, the QT interval lengthens and dangerous arrhythmias can occur."
    },
    "plain_summary": "The KCNH2 gene is involved in a cardiac potassium channel. A pathogenic variant can increase the risk of long QT syndrome, and it is inherited in an autosomal dominant pattern, so first-degree relatives may carry the same variant. Avoiding trigger medicines, having regular ECGs and working with a cardiologist can lower arrhythmia risk.",
    "academic_summary": "KCNH2 is located at 7q36.1 and encodes the HERG (Kv11.1) potassium channel alpha subunit, which contributes to cardiac action potential repolarization. KCNH2 pathogenic variants cause long QT syndrome in an autosomal dominant pattern and can lead to QT prolongation, syncope and sudden cardiac death risk."
  },
  "disease": {
    "chinese_name": "Long QT Syndrome",
    "categories": [
      "Cardiovascular Disease",
      "Inherited Arrhythmia"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "🟠 Needs rhythm monitoring and medication vigilance (manageable by avoiding triggers)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0001657",
      "name": "Prolonged QT interval",
      "chinese_name": "Prolonged QT interval"
    },
    {
      "hpo_id": "HP:0001279",
      "name": "Syncope",
      "chinese_name": "Syncope"
    },
    {
      "hpo_id": "HP:0001645",
      "name": "Sudden cardiac death",
      "chinese_name": "Sudden cardiac death"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Beta-blockers",
      "chinese_name": "Beta-Blockers",
      "mechanism": "Reduce sympathetic stimulation and arrhythmia risk",
      "approval_status": "Standard prescription therapy"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": true,
    "key_variant": "KCNH2 pathogenic variants reduce HERG potassium channel function and prolong the QT interval",
    "population_frequency": "Long QT syndrome affects about 1 in 2,000 people, and KCNH2 and KCNQ1 are common causative genes (PMID:20301308)",
    "traffic_light_summary": "🔴 People with a KCNH2-related long QT syndrome should avoid medicines listed as Known Risk by CredibleMeds for QT prolongation, including some macrolide/fluoroquinolone antibiotics and certain antiarrhythmics or antipsychotics. Tell every prescriber and pharmacist, and ask for ECG monitoring if such a medicine is unavoidable; standard care also includes beta-blockers and avoiding triggers.",
    "drugs_guide": [
      {
        "drug_name": "QT-Prolonging Medications (macrolide/fluoroquinolone antibiotics, certain antiarrhythmics/antipsychotics) — CredibleMeds Known Risk",
        "chinese_name": "QT-Prolonging Medications — CredibleMeds Known Risk",
        "traffic_light": "RED_AVOID",
        "clinical_alert": "People with KCNH2-related long QT syndrome are especially sensitive to QT-prolonging medicines, which can trigger torsades de pointes. Medicines listed as Known Risk by CredibleMeds should be avoided; if a medicine is unavoidable, a specialist should assess the risk and ECG monitoring should be strengthened.",
        "cpic_level": "HRS/EHRA/APHRS Expert Consensus High Alert"
      }
    ],
    "dietary_contraindications": [
      "Avoid dehydration, electrolyte imbalance and excessive caffeine or alcohol",
      "Tell every doctor and pharmacist about long QT syndrome and check whether a new medicine prolongs the QT interval"
    ]
  },
  "evidence": {
    "overall_score": 0.9,
    "plain_rating": "⭐⭐⭐⭐ Clear genetic medicine evidence",
    "clinvar_pathogenic_count": 700,
    "clinvar_summary_chinese": "ClinVar and the literature include many KCNH2 pathogenic variants with a clear association with long QT syndrome",
    "opentargets_score": 0.77,
    "key_pmids": [
      "PMID:20301308"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "If you have a family history of long QT syndrome, or syncope or palpitations after exercise or emotional stress, consider an ECG and genetic counseling; first-degree relatives should also be evaluated.",
    "lifestyle_tips": [
      "Avoid dehydration, electrolyte imbalance and excessive alcohol or stimulant drinks",
      "Tell clinicians and pharmacists about long QT syndrome so QT-prolonging medicines can be avoided",
      "Attend scheduled ECG follow-up and seek care early for syncope or palpitations"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Genetic Counseling",
    "questions": [
      "My KCNH2 test shows a pathogenic variant. How often should I have an ECG?",
      "Should my parents, siblings or children also have an ECG or genetic testing?",
      "Which common medicines prolong the QT interval, and am I suitable for beta-blockers?"
    ]
  },
  "myth_buster": {
    "myth": "Long QT syndrome only matters if I have symptoms.",
    "truth": "No. Even without symptoms, specific medicines, dehydration or electrolyte imbalance can trigger dangerous arrhythmias; regular ECGs and medication review are needed."
  }
};
