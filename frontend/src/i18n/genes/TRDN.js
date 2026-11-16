export default {
  "gene": {
    "chinese_name": "Triadin (TRDN)",
    "chromosome": "6q22.31 (Chromosome 6)",
    "metaphor": {
      "title": "🔗 The 【Fastening Clasp】 of the Calcium-Release Channel (A loose clasp lets calcium release lose coordination)",
      "story": "Triadin made by TRDN acts like a clasp that fastens the calcium-release channel, linking the ryanodine receptor to calsequestrin. When the clasp is missing, calcium release loses coordination, heart-muscle cells become electrically unstable under sympathetic stimulation, and severe ventricular tachycardia with QT-interval changes can result."
    },
    "plain_summary": "TRDN pathogenic variants are associated with triadin-deficient severe inherited arrhythmia (Triadin syndrome), mostly inherited in an autosomal recessive pattern. Patients may develop exercise-induced ventricular tachycardia, syncope or cardiac arrest in early childhood, and some also have QT-interval prolongation. Avoiding QT-prolonging medications and adrenergic triggers, regular rhythm monitoring, and electrophysiology assessment of beta-blockers, flecainide or an implantable defibrillator are key to reducing risk.",
    "academic_summary": "TRDN is located at 6q22.31 and encodes cardiac sarcoplasmic reticulum triadin, which links the ryanodine receptor to calsequestrin and coordinates calcium release. Pathogenic variants can cause triadin-deficient catecholaminergic polymorphic ventricular tachycardia, sometimes with QT-interval prolongation, mostly in an autosomal recessive pattern."
  },
  "disease": {
    "chinese_name": "Triadin-Deficient Severe Inherited Arrhythmia (Triadin Syndrome)",
    "categories": [
      "Cardiovascular Disease",
      "Inherited Arrhythmia",
      "Catecholaminergic Polymorphic Ventricular Tachycardia"
    ],
    "inheritance_mode": "Autosomal Recessive (AR)",
    "severity_badge": "🔴 Requires avoiding QT-prolonging medications and adrenergic triggers (long-term specialist follow-up)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0004756",
      "name": "Ventricular tachycardia",
      "chinese_name": "Polymorphic ventricular tachycardia"
    },
    {
      "hpo_id": "HP:0001657",
      "name": "Prolonged QT interval",
      "chinese_name": "Prolonged QT interval"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Beta-blockers",
      "chinese_name": "Beta-Blockers",
      "mechanism": "Reduce sympathetic stimulation, decreasing exercise- or emotion-induced ventricular tachycardia",
      "approval_status": "Standard prescription therapy (cardiology assessment required)"
    },
    {
      "drug_name": "Flecainide",
      "chinese_name": "Flecainide",
      "mechanism": "Used as an adjunct to beta-blockers to reduce arrhythmia episodes",
      "approval_status": "Prescription medication after specialist assessment"
    },
    {
      "drug_name": "Implantable cardioverter-defibrillator (ICD) evaluation",
      "chinese_name": "Implantable Cardioverter-Defibrillator (ICD) Evaluation",
      "mechanism": "For high-risk patients or those with prior cardiac arrest, an electrophysiology specialist assesses device therapy",
      "approval_status": "Specialist-assessed device therapy"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": false,
    "key_variant": "TRDN pathogenic variants (associated with triadin-deficient severe inherited arrhythmia)",
    "population_frequency": "TRDN-related Triadin syndrome is a rare inherited arrhythmia that often presents in early childhood (PMID:20301466)",
    "traffic_light_summary": "This gene currently has no CPIC pharmacogenomic (PGx) dosing guideline, and standard medication does not require genotype-based dose adjustment. Clinical care focuses on avoiding medications known to prolong the QT interval and adrenergic triggers, and on electrophysiology discussion of beta-blockers, flecainide and implantable defibrillator therapy for each patient.",
    "drugs_guide": [],
    "dietary_contraindications": [
      "Avoid medications known to prolong the QT interval, including some antibiotics, antiarrhythmics, antipsychotics and antiemetics; disclose the diagnosis and ask a clinician or pharmacist to check every new medicine",
      "Avoid competitive strenuous exercise, dehydration and large amounts of caffeine-containing drinks to reduce sympathetic stimulation",
      "Maintain electrolyte balance, seek care early for diarrhea, vomiting or fever, and stop activity immediately for presyncope or palpitations"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️ Clear genetic medicine evidence",
    "clinvar_summary_chinese": "ClinVar and the literature list multiple TRDN pathogenic variants associated with triadin-deficient severe inherited arrhythmia",
    "key_pmids": [
      "PMID:20301466",
      "PMID:37347242"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "People with exercise-induced syncope in early childhood, ventricular tachycardia, QT prolongation or a family history of young sudden death should have ECG, exercise ECG and genetic counseling, and consider TRDN testing; siblings should have cardiac evaluation.",
    "lifestyle_tips": [
      "Avoid competitive and high-intensity exercise, and discuss exercise choices with cardiac electrophysiology first",
      "Tell every prescriber about the TRDN-related arrhythmia history and ask them to check whether any new medicine prolongs the QT interval",
      "Keep regular ECG and rhythm follow-up, and seek care early for diarrhea, vomiting, fever or presyncope"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Cardiac Electrophysiology / Pediatric Cardiology / Genetic Counseling",
    "questions": [
      "My TRDN test shows a pathogenic variant. What are my current QT interval and rhythm status?",
      "Do I need beta-blockers or flecainide, and should I be assessed for an implantable defibrillator?",
      "Which common medications prolong the QT interval and should be avoided? Should my siblings also have cardiac evaluation or genetic testing?"
    ]
  },
  "myth_buster": {
    "myth": "“It only happens during exercise, so I do not need to worry about medications or fever at other times.”",
    "truth": "Not true. TRDN-related arrhythmia can also worsen with QT-prolonging medications, electrolyte imbalance, fever or dehydration. Besides avoiding competitive exercise, disclose the diagnosis and have every new medicine checked by a clinician."
  }
};
