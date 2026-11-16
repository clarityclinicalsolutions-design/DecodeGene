export default {
  "gene": {
    "chinese_name": "Ryanodine Receptor 2 (RYR2)",
    "chromosome": "1q43 (Chromosome 1)",
    "metaphor": {
      "title": "⚡ The 【Calcium-Store Gate】 of Heart-Muscle Cells (The gate fails under emotion or exercise stress)",
      "story": "Heart-muscle contraction depends on calcium released from an internal store, and the ryanodine receptor made by RYR2 is the gate of that store. When the gate cannot close tightly under sympathetic stimulation, calcium leaks out in large amounts, the electrical potential of heart-muscle cells becomes unstable, and polymorphic ventricular tachycardia can be triggered by exercise or emotional stress."
    },
    "plain_summary": "RYR2 pathogenic variants are associated with catecholaminergic polymorphic ventricular tachycardia type 1 (CPVT1), inherited in an autosomal dominant pattern, so first-degree relatives may carry the same variant. Patients often develop palpitations, syncope or even sudden death during exercise or emotional stress. Avoiding adrenergic triggers and competitive strenuous exercise, regular rhythm monitoring, and specialist medication or device therapy can substantially reduce risk.",
    "academic_summary": "RYR2 is located at 1q43 and encodes the cardiac ryanodine receptor type 2, which mediates sarcoplasmic reticulum calcium release. Pathogenic variants cause abnormal receptor opening under sympathetic stimulation, diastolic calcium leak and delayed afterdepolarizations, leading to catecholaminergic polymorphic ventricular tachycardia (CPVT1) in an autosomal dominant pattern."
  },
  "disease": {
    "chinese_name": "Catecholaminergic Polymorphic Ventricular Tachycardia Type 1 (CPVT1)",
    "categories": [
      "Cardiovascular Disease",
      "Inherited Arrhythmia",
      "Catecholaminergic Polymorphic Ventricular Tachycardia"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "🔴 Requires strict avoidance of adrenergic triggers and competitive exercise (long-term specialist follow-up)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0004756",
      "name": "Ventricular tachycardia",
      "chinese_name": "Ventricular tachycardia"
    },
    {
      "hpo_id": "HP:0001279",
      "name": "Syncope",
      "chinese_name": "Exercise- or emotion-induced syncope"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Beta-blockers",
      "chinese_name": "Beta-Blockers",
      "mechanism": "Reduce sympathetic stimulation of the ryanodine receptor, decreasing exercise- or emotion-induced calcium leak and ventricular tachycardia",
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
      "mechanism": "For patients with syncope or high risk despite medication, an electrophysiology specialist assesses device therapy",
      "approval_status": "Specialist-assessed device therapy"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": false,
    "key_variant": "RYR2 pathogenic variants (associated with catecholaminergic polymorphic ventricular tachycardia)",
    "population_frequency": "RYR2-related CPVT is the most common CPVT subtype, with an estimated prevalence of about 1 in 10,000 to 1 in 100,000 (PMID:20301466)",
    "traffic_light_summary": "This gene currently has no CPIC pharmacogenomic (PGx) dosing guideline, and standard medication does not require genotype-based dose adjustment. Clinical care focuses on avoiding adrenergic triggers and competitive strenuous exercise, and on electrophysiology assessment of beta-blockers, flecainide and implantable defibrillator therapy for each patient.",
    "drugs_guide": [],
    "dietary_contraindications": [
      "Avoid competitive strenuous exercise and sudden explosive exertion; discuss exercise type and intensity with cardiology first",
      "Avoid large amounts of caffeine or energy drinks, excess alcohol and dehydration to reduce sympathetic stimulation",
      "Tell clinicians about fever, dehydration or intense emotional stress, and stop activity and seek care immediately for palpitations or presyncope"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️ Clear genetic medicine evidence",
    "clinvar_summary_chinese": "ClinVar lists many RYR2 pathogenic and likely pathogenic variants closely associated with catecholaminergic polymorphic ventricular tachycardia",
    "key_pmids": [
      "PMID:20301466",
      "PMID:37347242"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "People with exercise- or emotion-induced syncope, palpitations, polymorphic ventricular tachycardia or a family history of young sudden death should have ECG, exercise ECG and genetic counseling, and consider RYR2 testing; first-degree relatives should have cardiac evaluation.",
    "lifestyle_tips": [
      "Avoid competitive and high-intensity exercise, and discuss exercise choices with cardiology first",
      "Avoid large amounts of caffeine, energy drinks, excess alcohol and dehydration to reduce sympathetic stimulation",
      "Keep regular ECG and rhythm follow-up, and seek care early for syncope, palpitations or chest tightness"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Cardiac Electrophysiology / Genetic Counseling",
    "questions": [
      "My RYR2 test shows a pathogenic variant. Which sports are safe for me now, and do I need an exercise ECG?",
      "Do I need beta-blockers or flecainide, and should I be assessed for an implantable defibrillator?",
      "Should my parents, siblings or children also have ECG, exercise testing or RYR2 genetic testing?"
    ]
  },
  "myth_buster": {
    "myth": "“If the resting ECG is normal, RYR2 carriers can do intense exercise like anyone else.”",
    "truth": "No. RYR2-related CPVT often occurs during exercise or emotional stress even when the resting ECG is normal. Carriers should avoid competitive strenuous exercise and have exercise restrictions and treatment assessed by cardiac electrophysiology."
  }
};
