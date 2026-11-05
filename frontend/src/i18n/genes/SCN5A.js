export default {
  "gene": {
    "chinese_name": "Sodium Voltage-Gated Channel Alpha Subunit 5 (SCN5A)",
    "chromosome": "3p22.2 (Chromosome 3)",
    "metaphor": {
      "title": "⚡ The Sodium Gate of the Heart's Electrical Current",
      "story": "At the start of each heartbeat, sodium gates must open and close quickly, and SCN5A is the main component of that gate. If the gate works abnormally, the heart's electrical current can become unstable, producing the characteristic ECG pattern and arrhythmia risk of Brugada syndrome."
    },
    "plain_summary": "The SCN5A gene is involved in the cardiac sodium channel. A pathogenic variant can increase the risk of Brugada syndrome, and it is inherited in an autosomal dominant pattern, so first-degree relatives may carry the same variant. Avoiding specific medicines, treating fever promptly and regular cardiac evaluation help reduce arrhythmia risk.",
    "academic_summary": "SCN5A is located at 3p22.2 and encodes the cardiac sodium channel alpha subunit Nav1.5, responsible for phase 0 depolarization. SCN5A pathogenic variants cause Brugada syndrome in an autosomal dominant pattern and can lead to arrhythmia, syncope and sudden cardiac death risk."
  },
  "disease": {
    "chinese_name": "Brugada Syndrome",
    "categories": [
      "Cardiovascular Disease",
      "Inherited Arrhythmia"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "🟠 Needs rhythm monitoring and fever management (manageable by avoiding triggers)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0011675",
      "name": "Arrhythmia",
      "chinese_name": "Arrhythmia"
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
      "drug_name": "Quinidine",
      "chinese_name": "Quinidine",
      "mechanism": "Used by specialists in selected patients to reduce ventricular arrhythmia",
      "approval_status": "Specialist prescription therapy"
    },
    {
      "drug_name": "Isoproterenol",
      "chinese_name": "Isoproterenol",
      "mechanism": "Used in hospital settings for electrical storm",
      "approval_status": "Hospital specialist use"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": true,
    "key_variant": "SCN5A pathogenic variants reduce cardiac sodium channel function and produce a Brugada ECG pattern",
    "population_frequency": "Brugada syndrome is more common in some East and Southeast Asian populations, and SCN5A is the main causative gene (PMID:20301690)",
    "traffic_light_summary": "🔴 People with Brugada syndrome should avoid Class IC antiarrhythmics and sodium-channel blockers (flecainide, ajmaline and procainamide are on the Brugadadrugs.org avoid list). 🟡 Fever can trigger a Brugada ECG pattern and arrhythmia, so treat fever promptly and seek medical care; medication choices should be reviewed by a cardiologist.",
    "drugs_guide": [
      {
        "drug_name": "Class IC Antiarrhythmics & Sodium Channel Blockers (Flecainide / Ajmaline / Procainamide)",
        "chinese_name": "Class IC Antiarrhythmics & Sodium Channel Blockers",
        "traffic_light": "RED_AVOID",
        "clinical_alert": "These medicines further block the cardiac sodium channel and can trigger a Brugada ECG pattern and ventricular arrhythmia. They are on the Brugadadrugs.org avoid list and should be avoided; any exceptional use must be assessed by a cardiologist.",
        "cpic_level": "HRS/EHRA/APHRS Brugada Syndrome Consensus"
      },
      {
        "drug_name": "Fever / Febrile illness",
        "chinese_name": "Fever / Febrile Illness",
        "traffic_light": "YELLOW_CAUTION",
        "clinical_alert": "Fever can trigger a Brugada ECG pattern and arrhythmia. Seek medical care promptly and treat fever actively, with ECG monitoring if needed; do not use unconfirmed antipyretics or cold medicines on your own.",
        "cpic_level": "HRS/EHRA/APHRS Brugada Syndrome Consensus"
      }
    ],
    "dietary_contraindications": [
      "Treat fever promptly and seek care early; avoid prolonged high fever",
      "Avoid excessive alcohol, dehydration and electrolyte imbalance, which can trigger arrhythmia"
    ]
  },
  "evidence": {
    "overall_score": 0.9,
    "plain_rating": "⭐⭐⭐⭐ Clear genetic medicine evidence",
    "clinvar_pathogenic_count": 900,
    "clinvar_summary_chinese": "ClinVar and the literature include many SCN5A pathogenic variants with a clear association with Brugada syndrome",
    "opentargets_score": 0.78,
    "key_pmids": [
      "PMID:20301690"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "If you have a family history of Brugada syndrome, unexplained syncope, night-time breathing difficulty or palpitations, consider an ECG and genetic counseling; first-degree relatives should also be evaluated.",
    "lifestyle_tips": [
      "Treat fever actively and seek care early; avoid prolonged high fever",
      "Avoid excessive alcohol, heavy meals and dehydration, and keep electrolytes balanced",
      "Tell clinicians and pharmacists about Brugada syndrome so trigger medicines can be avoided"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Genetic Counseling",
    "questions": [
      "My SCN5A test shows a pathogenic variant. How often should I have an ECG?",
      "Should my parents, siblings or children also have an ECG or genetic testing?",
      "Which medicines should I avoid, and how should fever be managed?"
    ]
  },
  "myth_buster": {
    "myth": "Brugada syndrome only affects men.",
    "truth": "No. Men are at higher risk, but women can also carry a pathogenic variant and develop arrhythmia; family members should be evaluated as advised."
  }
};
