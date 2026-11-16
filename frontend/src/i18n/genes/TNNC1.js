export default {
  "gene": {
    "chinese_name": "Cardiac Troponin C (TNNC1)",
    "chromosome": "3p21.1 (Chromosome 3)",
    "metaphor": {
      "title": "🔑 The 【Calcium-Activated Key】 of the Heart's Contraction Switch",
      "story": "Heart muscle contraction starts when calcium enters the switch, and troponin C made by TNNC1 is the key that receives calcium. If the key's sensing region is abnormal, the calcium signal cannot be converted correctly, contraction and relaxation become unbalanced, and the heart may develop hypertrophic cardiomyopathy or present with dilated cardiomyopathy."
    },
    "plain_summary": "The TNNC1 gene encodes the calcium-sensing protein of heart-muscle contraction. A pathogenic variant can cause troponin C-related cardiomyopathy, which may present as hypertrophic or dilated cardiomyopathy and is inherited in an autosomal dominant pattern, so first-degree relatives may carry the same variant. Management depends on the cardiac phenotype and includes regular evaluation, family screening, medication and lifestyle adjustments.",
    "academic_summary": "TNNC1 is located at 3p21.1 and encodes troponin C in cardiac and slow skeletal muscle, the calcium-sensing regulator of contraction. Pathogenic variants can cause familial hypertrophic cardiomyopathy, and some variants have been associated with dilated cardiomyopathy, in an autosomal dominant pattern; long-term assessment of cardiac structure, systolic function and rhythm risk is required."
  },
  "disease": {
    "chinese_name": "Troponin C-Related Cardiomyopathy",
    "categories": [
      "Cardiovascular Disease",
      "Inherited Cardiomyopathy",
      "Dilated Cardiomyopathy Phenotype"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "🟠 Needs regular cardiac structure and function evaluation (treatment tailored to phenotype)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0001639",
      "name": "Hypertrophic cardiomyopathy",
      "chinese_name": "Hypertrophic cardiomyopathy"
    },
    {
      "hpo_id": "HP:0001644",
      "name": "Dilated cardiomyopathy",
      "chinese_name": "Dilated cardiomyopathy phenotype"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Mavacamten",
      "chinese_name": "Mavacamten",
      "mechanism": "Cardiac myosin inhibitor that reduces excessive myocardial contraction and may be considered for obstructive hypertrophic cardiomyopathy",
      "approval_status": "FDA-approved prescription drug (cardiology assessment required)"
    },
    {
      "drug_name": "Beta-blockers",
      "chinese_name": "Beta-Blockers",
      "mechanism": "Lower heart rate and contractility, improving symptoms and diastolic filling",
      "approval_status": "Standard prescription therapy"
    },
    {
      "drug_name": "Standard heart failure therapy",
      "chinese_name": "Standard Heart Failure Therapy",
      "mechanism": "Standard heart failure medication reduces cardiac workload and adverse remodeling in patients with a dilated phenotype",
      "approval_status": "Standard prescription therapy (guided by cardiac function assessment)"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": false,
    "key_variant": "TNNC1 pathogenic variants (associated with hypertrophic and dilated cardiomyopathy)",
    "population_frequency": "TNNC1-related cardiomyopathy is a rare inherited cardiomyopathy, and its frequency varies by population (PMID:20301725)",
    "traffic_light_summary": "This gene currently has no CPIC pharmacogenomic (PGx) dosing guideline, and standard medication does not require genotype-based dose adjustment. Treatment depends on the cardiomyopathy phenotype: hypertrophic disease may be managed with beta-blockers and cardiac myosin inhibitors such as mavacamten, while dilated or heart-failure phenotypes follow standard heart failure therapy; all decisions require individualized cardiology assessment.",
    "drugs_guide": [],
    "dietary_contraindications": [
      "Avoid dehydration, excess alcohol and unevaluated high-intensity competitive sports, which can worsen symptoms",
      "Maintain balanced nutrition and adequate hydration; if heart failure is present, adjust salt and fluid intake as advised",
      "Attend regular echocardiography and rhythm monitoring, and seek care early for chest tightness, syncope, palpitations or edema"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️ Clear genetic medicine evidence",
    "clinvar_summary_chinese": "ClinVar and the literature include multiple TNNC1 pathogenic and likely pathogenic variants associated with hypertrophic and dilated cardiomyopathy",
    "key_pmids": [
      "PMID:20301725",
      "PMID:37347242"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "If you have hypertrophic or dilated cardiomyopathy, heart failure, a heart murmur, exertional syncope or a family history of cardiomyopathy, consider echocardiography, ECG and genetic counseling, including TNNC1 testing; first-degree relatives should also be evaluated.",
    "lifestyle_tips": [
      "Stay adequately hydrated and avoid dehydration, excess alcohol and unevaluated high-intensity competitive sports",
      "Choose exercise intensity with your doctor's advice; if heart failure is present, follow guidance on activity, salt and fluid intake",
      "Keep regular cardiac structure and function follow-up and seek care early for chest tightness, syncope, palpitations or edema"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Heart Failure Clinic / Genetic Counseling",
    "questions": [
      "My TNNC1 test shows a pathogenic variant. Does my cardiomyopathy have a hypertrophic or dilated phenotype?",
      "How often should I have echocardiography and rhythm checks, and should my current medication change with the phenotype?",
      "Should my parents, siblings or children also have cardiac evaluation or TNNC1 genetic testing?"
    ]
  },
  "myth_buster": {
    "myth": "“One cardiomyopathy gene causes only one type of heart disease, so everyone needs the same treatment.”",
    "truth": "Not necessarily. TNNC1-related cardiomyopathy can present as hypertrophic or dilated disease, and the medication and follow-up priorities differ. A cardiologist should individualize care based on cardiac structure, function and symptoms."
  }
};
