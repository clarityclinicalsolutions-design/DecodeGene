export default {
  "gene": {
    "chinese_name": "Low Density Lipoprotein Receptor (LDLR)",
    "chromosome": "19p13.2 (Chromosome 19)",
    "metaphor": {
      "title": "🩺 The 【Cholesterol Recycling Station】 at the Liver's Door",
      "story": "Low-density lipoprotein (LDL, the “bad cholesterol”) in the blood must be taken up by LDLR recycling stations at the liver's door. If there are too few stations or they are faulty, LDL keeps accumulating in the blood and long-term risk of atherosclerosis and cardiovascular disease rises."
    },
    "plain_summary": "The LDLR gene makes the LDL receptor on the liver surface, which helps clear bad cholesterol from the blood. A pathogenic variant can raise cholesterol, and it is inherited in an autosomal dominant pattern, so first-degree relatives may carry the same variant. Lipid testing, dietary changes and medication can effectively lower cardiovascular risk.",
    "academic_summary": "LDLR is located at 19p13.2 and encodes the LDL receptor, which mediates hepatic clearance of LDL. Loss-of-function LDLR variants cause familial hypercholesterolemia in an autosomal dominant pattern; blood LDL-C rises markedly, accelerating atherosclerosis and myocardial infarction risk."
  },
  "disease": {
    "chinese_name": "Familial Hypercholesterolemia",
    "categories": [
      "Lipid Metabolism Disorder",
      "Cardiovascular Risk"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "🟠 Needs long-term management (controllable with lipid-lowering therapy)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0003124",
      "name": "Hypercholesterolemia",
      "chinese_name": "High cholesterol"
    },
    {
      "hpo_id": "HP:0001658",
      "name": "Myocardial infarction",
      "chinese_name": "Heart attack"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Statins",
      "chinese_name": "Statins",
      "mechanism": "Inhibit HMG-CoA reductase, reducing hepatic cholesterol synthesis and increasing LDL receptor clearance",
      "approval_status": "FDA-approved prescription drug"
    },
    {
      "drug_name": "PCSK9 inhibitors",
      "chinese_name": "PCSK9 Inhibitors",
      "mechanism": "Inhibit PCSK9-mediated degradation of the LDL receptor, increasing LDL clearance",
      "approval_status": "FDA-approved prescription drug"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": false,
    "key_variant": "LDLR loss-of-function pathogenic variants; familial hypercholesterolemia is mainly caused by reduced LDL receptor clearance",
    "population_frequency": "Heterozygous familial hypercholesterolemia affects about 1 in 250–300 people and varies by population (PMID:20301692)",
    "traffic_light_summary": "This gene currently has no CPIC pharmacogenomic (PGx) dosing guideline. Standard treatment for familial hypercholesterolemia relies on statins, PCSK9 inhibitors, diet and lifestyle changes; whether and how to use medication should be decided by a cardiologist or endocrinologist based on lipids and overall risk.",
    "drugs_guide": [],
    "dietary_contraindications": [
      "Reduce saturated and trans fat intake and increase vegetables, whole grains and soluble fiber",
      "Exercise regularly, maintain a healthy weight and stop smoking to lower cardiovascular risk"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️ Clear genetic medicine evidence",
    "clinvar_summary_chinese": "ClinVar and the literature include many LDLR pathogenic variants with a clear association with familial hypercholesterolemia",
    "key_pmids": [
      "PMID:20301692"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "If you have a family history of early cardiovascular disease or high lipids, consider lipid testing; LDLR genetic testing may be needed, and first-degree relatives should be evaluated too.",
    "lifestyle_tips": [
      "Follow a Mediterranean-style or low-saturated-fat diet with plenty of vegetables, fruit and soluble fiber",
      "Exercise regularly, maintain a healthy weight and stop smoking",
      "Keep regular lipid follow-up as advised and do not stop lipid-lowering medication on your own"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Endocrinology / Genetic Counseling",
    "questions": [
      "My LDLR test shows a pathogenic variant. What should my cholesterol target be?",
      "Should my parents, siblings or children also have lipid testing or genetic testing?",
      "Besides statins, am I a candidate for PCSK9 inhibitors or other lipid-lowering therapy?"
    ]
  },
  "myth_buster": {
    "myth": "“High cholesterol is only about eating too much fat and has nothing to do with genes.”",
    "truth": "Not necessarily. Familial hypercholesterolemia is often caused by variants in LDLR and related genes, so cholesterol can be high even with a light diet. Genetic testing and family screening allow early identification and treatment."
  }
};
