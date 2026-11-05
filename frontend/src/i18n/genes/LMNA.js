export default {
  "gene": {
    "chinese_name": "Lamin A/C (LMNA)",
    "chromosome": "1q22 (Chromosome 1)",
    "metaphor": {
      "title": "🧱 The Inner Scaffold of the Cell Nucleus",
      "story": "Every cell nucleus needs a sturdy inner lining, and the lamin A/C proteins made by LMNA form that scaffold. If the scaffold is weak, heart muscle cells are more vulnerable, and the heart can enlarge with reduced pumping strength and arrhythmia."
    },
    "plain_summary": "The LMNA gene is involved in the nuclear envelope protein lamin A/C. A pathogenic variant can increase the risk of dilated cardiomyopathy and arrhythmia, and it is inherited in an autosomal dominant pattern, so first-degree relatives may carry the same variant. Regular heart-function and rhythm follow-up, with heart-failure medication or an implantable defibrillator when needed, can help manage risk.",
    "academic_summary": "LMNA is located at 1q22 and encodes lamin A/C, which maintains nuclear structure and gene-expression regulation. LMNA pathogenic variants cause dilated cardiomyopathy in an autosomal dominant pattern, often with conduction abnormalities and arrhythmia, and sudden cardiac death risk requires careful assessment."
  },
  "disease": {
    "chinese_name": "Dilated Cardiomyopathy",
    "categories": [
      "Cardiovascular Disease",
      "Inherited Cardiomyopathy"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "🟠 Needs heart-function and rhythm follow-up (manageable with medication and device therapy)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0001644",
      "name": "Dilated cardiomyopathy",
      "chinese_name": "Dilated cardiomyopathy"
    },
    {
      "hpo_id": "HP:0011675",
      "name": "Arrhythmia",
      "chinese_name": "Arrhythmia"
    },
    {
      "hpo_id": "HP:0001635",
      "name": "Congestive heart failure",
      "chinese_name": "Congestive heart failure"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Beta-blockers",
      "chinese_name": "Beta-Blockers",
      "mechanism": "Reduce myocardial oxygen demand and sympathetic stimulation, improving heart-failure outcomes",
      "approval_status": "Standard prescription therapy"
    },
    {
      "drug_name": "ACE inhibitors / ARBs / ARNI",
      "chinese_name": "ACE Inhibitors / ARBs / ARNI",
      "mechanism": "Reduce cardiac workload and slow ventricular remodeling",
      "approval_status": "Standard prescription therapy"
    },
    {
      "drug_name": "Mineralocorticoid receptor antagonists",
      "chinese_name": "Mineralocorticoid Receptor Antagonists",
      "mechanism": "Reduce heart-failure hospitalization and mortality",
      "approval_status": "Standard prescription therapy"
    },
    {
      "drug_name": "SGLT2 inhibitors",
      "chinese_name": "SGLT2 Inhibitors",
      "mechanism": "Improve heart-failure outcomes and cardiac function",
      "approval_status": "Standard prescription therapy"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": false,
    "key_variant": "LMNA pathogenic variants; dilated cardiomyopathy is linked to abnormal lamin A/C function",
    "population_frequency": "LMNA-related dilated cardiomyopathy accounts for a subset of familial dilated cardiomyopathy and often includes conduction abnormalities and arrhythmia (PMID:20301717)",
    "traffic_light_summary": "This gene currently has no CPIC pharmacogenomic (PGx) dosing guideline. Standard treatment for dilated cardiomyopathy includes heart-failure medicines (beta-blockers, ACEI/ARB/ARNI, mineralocorticoid receptor antagonists and SGLT2 inhibitors) and assessment for an implantable cardioverter-defibrillator (ICD) when needed; whether and when to use them should be decided by a cardiologist based on heart function and arrhythmia risk.",
    "drugs_guide": [],
    "dietary_contraindications": [
      "Follow a low-salt diet and fluid guidance to avoid worsening heart failure",
      "Avoid excessive alcohol and unassessed strenuous exercise, and monitor weight and swelling regularly"
    ]
  },
  "evidence": {
    "overall_score": 0.88,
    "plain_rating": "⭐⭐⭐⭐ Clear genetic medicine evidence",
    "clinvar_pathogenic_count": 500,
    "clinvar_summary_chinese": "ClinVar and the literature include multiple LMNA pathogenic variants with a clear association with dilated cardiomyopathy and conduction abnormalities",
    "opentargets_score": 0.74,
    "key_pmids": [
      "PMID:20301717"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "If you have a family history of dilated cardiomyopathy, conduction block or sudden cardiac death, consider echocardiography, ECG and genetic counseling; first-degree relatives should also be evaluated.",
    "lifestyle_tips": [
      "Follow a low-salt diet, manage fluids and monitor weight and swelling daily",
      "Exercise as advised and avoid excessive alcohol and unassessed strenuous activity",
      "Keep regular heart-function and rhythm follow-up, and seek care early for chest tightness, syncope or palpitations"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Genetic Counseling",
    "questions": [
      "My LMNA test shows a pathogenic variant. How often should my heart function and rhythm be checked?",
      "Should my parents, siblings or children also have cardiac evaluation or genetic testing?",
      "Do I need an implantable cardioverter-defibrillator (ICD) assessment, and which heart-failure medicines are suitable?"
    ]
  },
  "myth_buster": {
    "myth": "Dilated cardiomyopathy does not need follow-up while the heart still pumps a little.",
    "truth": "No. LMNA-related cardiomyopathy can progress and is associated with conduction abnormalities and arrhythmia; regular heart-function and rhythm review is needed, with early discussion of device therapy when appropriate."
  }
};
