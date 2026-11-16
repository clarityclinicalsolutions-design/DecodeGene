export default {
  "gene": {
    "chinese_name": "Calmodulin 1 (CALM1)",
    "chromosome": "14q32.11 (Chromosome 14)",
    "metaphor": {
      "title": "🎛️ The 【Universal Regulator】 of the Heart's Electrical Signals (When regulation misses, ion channels lose control)",
      "story": "Calmodulin made by CALM1 is a universal intracellular regulator that binds several ion channels and adjusts their switches. When the regulator's own structure changes, its control of sodium, potassium and calcium channels becomes inaccurate, the electrical potential of heart-muscle cells becomes unstable, and QT prolongation or exercise-induced ventricular tachycardia may appear in infancy or early childhood."
    },
    "plain_summary": "CALM1 pathogenic variants are associated with calmodulin-1-related early-onset long QT syndrome and catecholaminergic polymorphic ventricular tachycardia, inherited in an autosomal dominant pattern. Patients may develop QT prolongation, syncope or ventricular tachycardia in infancy or early childhood. Avoiding QT-prolonging medications and adrenergic triggers, regular rhythm monitoring, and electrophysiology assessment of beta-blockers, flecainide or an implantable defibrillator can reduce risk.",
    "academic_summary": "CALM1 is located at 14q32.11 and encodes calmodulin type 1, a key calcium-sensing protein that regulates sodium, potassium and calcium channels and the ryanodine receptor. Pathogenic variants can cause early-onset long QT syndrome and catecholaminergic polymorphic ventricular tachycardia in an autosomal dominant pattern, with variable penetrance and phenotype."
  },
  "disease": {
    "chinese_name": "Calmodulin-1-Related Early-Onset Long QT and CPVT Arrhythmia",
    "categories": [
      "Cardiovascular Disease",
      "Inherited Arrhythmia",
      "Long QT Syndrome",
      "Catecholaminergic Polymorphic Ventricular Tachycardia"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "🔴 Requires avoiding QT-prolonging medications and adrenergic triggers (long-term specialist follow-up)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0001657",
      "name": "Prolonged QT interval",
      "chinese_name": "Prolonged QT interval"
    },
    {
      "hpo_id": "HP:0004756",
      "name": "Ventricular tachycardia",
      "chinese_name": "Ventricular tachycardia"
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
    "key_variant": "CALM1 pathogenic variants (associated with early-onset long QT syndrome and catecholaminergic polymorphic ventricular tachycardia)",
    "population_frequency": "CALM1-related early-onset arrhythmia is a rare inherited disease that often presents in infancy or childhood (PMID:20301466)",
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
    "clinvar_summary_chinese": "ClinVar and the literature list multiple CALM1 pathogenic variants associated with early-onset long QT syndrome and catecholaminergic polymorphic ventricular tachycardia",
    "key_pmids": [
      "PMID:20301466",
      "PMID:37347242"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "People with QT prolongation in infancy, exercise-induced syncope, ventricular tachycardia or a family history of young sudden death should have ECG, exercise ECG and genetic counseling, and consider CALM1 testing; first-degree relatives should have cardiac evaluation.",
    "lifestyle_tips": [
      "Avoid competitive and high-intensity exercise, and discuss exercise choices with cardiac electrophysiology first",
      "Tell every prescriber about the arrhythmia history and ask them to check whether any new medicine prolongs the QT interval",
      "Keep regular ECG and rhythm follow-up, and seek care early for diarrhea, vomiting, fever or presyncope"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Cardiac Electrophysiology / Pediatric Cardiology / Genetic Counseling",
    "questions": [
      "My CALM1 test shows a pathogenic variant. What are my current QT interval and rhythm status?",
      "Do I need beta-blockers or flecainide, and should I be assessed for an implantable defibrillator?",
      "Which common medications prolong the QT interval and should be avoided? Should my parents, siblings or children also have cardiac evaluation or genetic testing?"
    ]
  },
  "myth_buster": {
    "myth": "“Calmodulin is a ubiquitous protein, so a variant in it should not cause serious arrhythmia.”",
    "truth": "Not true. Although CALM1 variants are rare, they can markedly alter ion-channel regulation, causing early-onset long QT or CPVT and even cardiac arrest in infancy. Carriers need long-term follow-up by cardiac electrophysiology."
  }
};
