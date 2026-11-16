export default {
  "gene": {
    "chinese_name": "Calsequestrin 2 (CASQ2)",
    "chromosome": "1p13.1 (Chromosome 1)",
    "metaphor": {
      "title": "🪣 The 【Buffering Sponge】 of the Calcium Store (When buffering fails, calcium swings out of control)",
      "story": "Calsequestrin 2 made by CASQ2 acts like a sponge inside the calcium store, temporarily binding and buffering calcium. When the sponge's buffering capacity is insufficient, calcium concentration swings widely between heartbeats, the ryanodine receptor tends to release calcium abnormally, and ventricular tachycardia can be triggered by exercise or emotional stress."
    },
    "plain_summary": "CASQ2 pathogenic variants are associated with catecholaminergic polymorphic ventricular tachycardia type 2 (CPVT2), mostly inherited in an autosomal recessive pattern, with occasional dominant inheritance. Patients often develop palpitations, syncope or even sudden death during exercise or emotional stress. Avoiding adrenergic triggers and competitive strenuous exercise, regular rhythm monitoring, and specialist assessment for medication or device therapy are key to reducing risk.",
    "academic_summary": "CASQ2 is located at 1p13.1 and encodes cardiac sarcoplasmic reticulum calsequestrin 2, which buffers calcium and regulates the ryanodine receptor. Pathogenic variants cause diastolic calcium leak and delayed afterdepolarizations, leading to catecholaminergic polymorphic ventricular tachycardia (CPVT2), mostly in an autosomal recessive pattern."
  },
  "disease": {
    "chinese_name": "Catecholaminergic Polymorphic Ventricular Tachycardia Type 2 (CPVT2)",
    "categories": [
      "Cardiovascular Disease",
      "Inherited Arrhythmia",
      "Catecholaminergic Polymorphic Ventricular Tachycardia"
    ],
    "inheritance_mode": "Autosomal Recessive (AR)",
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
      "chinese_name": "Syncope"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Beta-blockers",
      "chinese_name": "Beta-Blockers",
      "mechanism": "Reduce sympathetic stimulation, decreasing exercise- or emotion-induced calcium swings and ventricular tachycardia",
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
    "key_variant": "CASQ2 pathogenic variants (associated with catecholaminergic polymorphic ventricular tachycardia)",
    "population_frequency": "CASQ2-related CPVT2 accounts for a small proportion of CPVT cases and is a rare inherited arrhythmia (PMID:20301466)",
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
    "clinvar_summary_chinese": "ClinVar lists multiple CASQ2 pathogenic and likely pathogenic variants associated with catecholaminergic polymorphic ventricular tachycardia",
    "key_pmids": [
      "PMID:20301466",
      "PMID:37347242"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "People with exercise- or emotion-induced syncope, polymorphic ventricular tachycardia or a family history of young sudden death should have ECG, exercise ECG and genetic counseling, and consider CASQ2 testing; first-degree relatives should have cardiac evaluation.",
    "lifestyle_tips": [
      "Avoid competitive and high-intensity exercise, and discuss exercise choices with cardiology first",
      "Avoid large amounts of caffeine, energy drinks, excess alcohol and dehydration to reduce sympathetic stimulation",
      "Keep regular ECG and rhythm follow-up, and seek care early for syncope, palpitations or chest tightness"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Cardiac Electrophysiology / Genetic Counseling",
    "questions": [
      "My CASQ2 test shows a pathogenic variant. Which sports are safe for me now, and do I need an exercise ECG?",
      "Do I need beta-blockers or flecainide, and should I be assessed for an implantable defibrillator?",
      "Should my parents, siblings or children also have ECG, exercise testing or CASQ2 genetic testing?"
    ]
  },
  "myth_buster": {
    "myth": "“CASQ2 is recessive, so carriers have no arrhythmia risk at all.”",
    "truth": "Most carriers have lower risk, but some variants can still behave dominantly, and carriers can pass the variant to the next generation. Family members should still receive genetic counseling and cardiac evaluation rather than assuming there is no risk."
  }
};
