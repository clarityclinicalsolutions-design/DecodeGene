export default {
  "gene": {
    "chinese_name": "TTR Transthyretin (Hereditary Amyloidosis Gene)",
    "chromosome": "18q12.1 (Chromosome 18)",
    "metaphor": {
      "title": "🚚 The Bloodstream's 【Thyroid Hormone and Vitamin A Delivery Truck】(When it misfolds, it piles up as amyloid)",
      "story": "TTR is a multi-purpose delivery truck in the blood, carrying thyroid hormone and vitamin A as a stable tetramer. When TTR is defective from birth, the truck easily falls apart and misfolds. Misfolded protein deposits like broken parts in peripheral nerves, the heart, and other organs, forming amyloid. Nerves become crowded and cause numbness and weakness, while the heart becomes thick and stiff from infiltration. Genetic testing, TTR stabilizers, and RNA-targeted therapy can slow further amyloid deposition."
    },
    "plain_summary": "TTR pathogenic variants cause hereditary transthyretin amyloidosis (hATTR), an autosomal dominant condition. Misfolded TTR protein deposits in peripheral nerves and the heart, causing polyneuropathy, autonomic dysfunction, and hypertrophic cardiomyopathy. Genetic testing, TTR stabilizers, RNA-targeted therapy, and cardiology/neurology follow-up can slow progression and improve quality of life.",
    "academic_summary": "TTR encodes transthyretin, mainly synthesized in the liver and secreted as a homotetramer that transports thyroxine and retinol-binding protein. Pathogenic germline variants (such as p.Val30Met) reduce tetramer stability, and dissociated monomers readily form amyloid fibrils that deposit in peripheral nerves, myocardium, and the gastrointestinal tract. hATTR can present with polyneuropathy, autonomic neuropathy, and infiltrative cardiomyopathy; TTR stabilizers, siRNA, and antisense oligonucleotide therapies reduce the pathogenic protein burden."
  },
  "disease": {
    "chinese_name": "Hereditary Transthyretin Amyloidosis (hATTR)",
    "categories": [
      "Autosomal Dominant Amyloidosis",
      "Hereditary Peripheral Neuropathy",
      "Infiltrative Cardiomyopathy"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "🟡 Progressive Systemic Amyloidosis (Early Diagnosis and Targeted Therapy Slow Progression)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0001271",
      "name": "Polyneuropathy",
      "chinese_name": "Peripheral nerve damage"
    },
    {
      "hpo_id": "HP:0001639",
      "name": "Hypertrophic cardiomyopathy",
      "chinese_name": "Thickened heart muscle"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Tafamidis",
      "chinese_name": "Tafamidis (TTR tetramer stabilizer)",
      "mechanism": "Binds and stabilizes the TTR tetramer, reducing dissociation and amyloid fibril formation and slowing nerve and heart disease progression",
      "approval_status": "FDA / TFDA / NMPA approved (targeted therapy for hATTR polyneuropathy and cardiomyopathy)"
    },
    {
      "drug_name": "Patisiran",
      "chinese_name": "Patisiran (RNAi targeted therapy)",
      "mechanism": "Lipid nanoparticle-delivered small interfering RNA suppresses hepatic TTR messenger RNA, lowering pathogenic TTR protein in the blood",
      "approval_status": "FDA / TFDA / NMPA approved (targeted therapy for hATTR polyneuropathy)"
    },
    {
      "drug_name": "Vutrisiran",
      "chinese_name": "Vutrisiran (RNAi targeted therapy)",
      "mechanism": "GalNAc-conjugated small interfering RNA targets the liver to suppress TTR expression, lowering pathogenic protein and slowing nerve and heart progression",
      "approval_status": "FDA / TFDA / NMPA approved (targeted therapy for hATTR polyneuropathy)"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": false,
    "key_variant": "TTR pathogenic variants (such as p.Val30Met and other amyloidosis-related variants)",
    "population_frequency": "Carrier frequency varies by region; specific variants are more common in parts of Portugal, Japan, and Sweden",
    "summary": "TTR is evaluated for hereditary disease risk and family screening rather than for drug-metabolizing genotype-guided dosing.",
    "traffic_light_summary": "This gene is evaluated primarily for hereditary condition screening and has no direct pharmacogenomic dosing guideline; standard medications generally do not require genotype-based dose adjustments. There is currently no dedicated pharmacogenomic (PGx) prescribing guideline for this gene.",
    "practical_guidance": "People with hATTR should be managed by cardiology, neurology, and genetics teams, with regular heart, nerve, liver, and kidney monitoring. Do not stop targeted therapy on your own, and tell the care team about all medications and supplements you use.",
    "drugs_guide": [],
    "dietary_contraindications": [
      "No specific dietary restriction, but avoid excessive alcohol and maintain balanced nutrition to reduce heart and nerve strain",
      "If heart failure or kidney involvement is present, adjust fluid and sodium intake as advised by the physician and dietitian",
      "During targeted therapy, monitor liver function, heart function, and neurologic status regularly, and do not stop treatment on your own"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ International Amyloidosis Care and Genetics Guideline",
    "clinvar_summary_chinese": "ClinVar lists multiple pathogenic and likely pathogenic TTR variants; genetic testing supports hATTR diagnosis and family screening",
    "key_pmids": [
      "PMID:20301373",
      "PMID:37347242"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "People with unexplained polyneuropathy, autonomic symptoms, hypertrophic cardiomyopathy, or a family history should have cardiac and neurologic evaluation and consider TTR genetic testing; first-degree relatives should receive genetic counseling and screening when indicated.",
    "lifestyle_tips": [
      "Keep a regular routine and moderate activity, and avoid dehydration, excessive alcohol, and extreme temperatures to reduce heart and nerve strain",
      "Follow up regularly with cardiac ultrasound, rhythm assessment, neurologic function, and liver and kidney tests as directed",
      "Seek prompt care for chest tightness, breathlessness, rapid weight change, or worsening limb numbness"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Neurology / Genetic Counseling",
    "questions": [
      "Doctor, could my peripheral neuropathy or thickened heart muscle be related to TTR amyloidosis—should I have genetic testing?",
      "If hATTR is confirmed, am I a candidate for a TTR stabilizer or RNA-targeted therapy? Which heart and nerve markers should be monitored before and during treatment?",
      "Should my siblings and children receive genetic counseling and TTR genetic screening?"
    ]
  },
  "myth_buster": {
    "myth": "“Numb hands and feet are just poor circulation and have nothing to do with heredity or amyloidosis?”",
    "truth": "Wrong! Hereditary TTR amyloidosis often presents with progressive polyneuropathy and autonomic symptoms, and delayed diagnosis allows amyloid to keep depositing in the heart and nerves. Early genetic testing and targeted therapy can slow progression and reduce cardiac complications."
  }
}
