export default {
  "gene": {
    "chinese_name": "Proprotein Convertase Subtilisin/Kexin Type 9 (PCSK9)",
    "chromosome": "1p32.3 (Chromosome 1)",
    "metaphor": {
      "title": "🚦 The Control Valve of Cholesterol Recycling",
      "story": "LDL receptors on the liver surface recycle bad cholesterol from the blood, and PCSK9 acts like a control valve that affects how many of those receptors are available. If PCSK9 is overactive, receptors decrease and LDL cholesterol tends to rise."
    },
    "plain_summary": "The PCSK9 gene is involved in LDL cholesterol metabolism. A gain-of-function pathogenic variant can increase the risk of familial hypercholesterolemia, and it is inherited in an autosomal dominant pattern, so first-degree relatives may carry the same variant. Diet, statins and, when needed, PCSK9-targeted therapy can effectively control LDL cholesterol for most people.",
    "academic_summary": "PCSK9 is located at 1p32.3 and encodes proprotein convertase subtilisin/kexin type 9, which promotes degradation of hepatic LDL receptors. PCSK9 gain-of-function variants cause familial hypercholesterolemia in an autosomal dominant pattern and are associated with premature coronary artery disease and myocardial infarction risk."
  },
  "disease": {
    "chinese_name": "Familial Hypercholesterolemia",
    "categories": [
      "Cardiovascular Disease",
      "Inherited Lipid Disorder"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "🟡 Needs long-term lipid management (manageable with medication and lifestyle)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0003124",
      "name": "Hypercholesterolemia",
      "chinese_name": "Hypercholesterolemia"
    },
    {
      "hpo_id": "HP:0001658",
      "name": "Myocardial infarction",
      "chinese_name": "Myocardial infarction"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Evolocumab",
      "chinese_name": "Evolocumab",
      "mechanism": "PCSK9 inhibitor that increases hepatic LDL receptor recycling of bad cholesterol",
      "approval_status": "FDA-approved prescription drug"
    },
    {
      "drug_name": "Alirocumab",
      "chinese_name": "Alirocumab",
      "mechanism": "PCSK9 inhibitor that lowers LDL cholesterol",
      "approval_status": "FDA-approved prescription drug"
    },
    {
      "drug_name": "Inclisiran",
      "chinese_name": "Inclisiran",
      "mechanism": "Small interfering RNA that reduces hepatic PCSK9 production",
      "approval_status": "FDA-approved prescription drug"
    },
    {
      "drug_name": "Statins",
      "chinese_name": "Statins",
      "mechanism": "Inhibit cholesterol synthesis and increase LDL receptors",
      "approval_status": "Standard prescription therapy"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": false,
    "key_variant": "PCSK9 gain-of-function variants; familial hypercholesterolemia can also be caused by LDLR, APOB and other gene variants",
    "population_frequency": "Familial hypercholesterolemia affects about 1 in 250 people, and PCSK9 gain-of-function variants are one cause (PMID:20301692)",
    "traffic_light_summary": "This gene currently has no CPIC pharmacogenomic (PGx) dosing guideline. Standard treatment for familial hypercholesterolemia includes statins and, when needed, evolocumab, alirocumab or inclisiran; whether and which therapy to use should be assessed by a clinician based on LDL cholesterol goals and cardiovascular risk.",
    "drugs_guide": [],
    "dietary_contraindications": [
      "Reduce saturated and trans fat intake and increase soluble fiber",
      "Exercise regularly, control weight and monitor lipids as advised"
    ]
  },
  "evidence": {
    "overall_score": 0.9,
    "plain_rating": "⭐⭐⭐⭐ Clear genetic medicine evidence",
    "clinvar_pathogenic_count": 300,
    "clinvar_summary_chinese": "ClinVar and the literature include multiple PCSK9 gain-of-function variants with a clear association with familial hypercholesterolemia",
    "opentargets_score": 0.79,
    "key_pmids": [
      "PMID:20301692",
      "PMID:25773607"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "If you have premature myocardial infarction, familial hypercholesterolemia or markedly elevated LDL cholesterol, consider lipid testing and genetic counseling; first-degree relatives should also be evaluated.",
    "lifestyle_tips": [
      "Reduce saturated and trans fat and increase vegetables, whole grains and soluble fiber",
      "Exercise regularly, control weight and avoid smoking",
      "Monitor lipids as advised and do not stop lipid-lowering medication on your own"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Metabolism / Genetic Counseling",
    "questions": [
      "My PCSK9 test shows a pathogenic variant. What LDL cholesterol target should I aim for?",
      "Should my parents, siblings or children also have lipid testing or genetic testing?",
      "Am I suitable for statins or PCSK9-targeted therapy, and how often should my lipids be checked?"
    ]
  },
  "myth_buster": {
    "myth": "Familial hypercholesterolemia will improve just by eating less fat.",
    "truth": "Not necessarily. Familial hypercholesterolemia is often caused by a gene variant, and diet alone is usually not enough; a clinician should assess whether statins or PCSK9-targeted therapy is needed."
  }
};
