export default {
  "gene": {
    "chinese_name": "ATP7B Copper-Transporting ATPase (Wilson Disease Gene)",
    "chromosome": "13q14.3 (Chromosome 13)",
    "metaphor": {
      "title": "🔧 The Liver’s 【Copper Recycling Pump】(When it fails, copper piles up in the liver, brain, and eyes)",
      "story": "Every day the body absorbs a little copper from food. Inside liver cells, ATP7B works like a precision pump that sends excess copper into bile for excretion and loads copper onto ceruloplasmin. When both copies of ATP7B are broken, the pump stops: copper builds up like scrap metal with no removal service. It first inflames and scars the liver, then deposits in the brain’s basal ganglia, causing tremor, swallowing difficulty, and slurred speech, and forms golden-brown Kayser-Fleischer rings in the cornea. A lifelong low-copper diet plus copper-removal therapy can bring copper back under control!"
    },
    "plain_summary": "ATP7B deficiency causes Wilson disease (hepatolenticular degeneration), an autosomal recessive condition. Copper cannot be excreted normally and accumulates in the liver, brain, kidneys, and eyes, leading to abnormal liver tests, tremor, dysarthria, dysphagia, or mood changes. Lifelong low-copper eating, copper chelators or zinc, and regular monitoring of copper metabolism allow most people to maintain a good quality of life.",
    "academic_summary": "ATP7B encodes a copper-transporting P-type ATPase on the hepatocyte Golgi membrane that pumps copper into bile for biliary excretion and loads copper during ceruloplasmin synthesis. Biallelic pathogenic variants (such as the East Asian founder p.Arg778Leu) impair biliary copper export and ceruloplasmin maturation. Copper deposits in hepatocytes, the basal ganglia, cornea, and renal tubules, causing oxidative stress, mitochondrial injury, and fibrosis, with clinical features of liver disease, neuropsychiatric symptoms, Kayser-Fleischer rings, and Fanconi syndrome."
  },
  "disease": {
    "chinese_name": "Wilson Disease (Hepatolenticular Degeneration) / Inherited Copper Metabolism Disorder",
    "categories": [
      "Inherited Metabolic Disorder",
      "Liver & Neurologic Disease",
      "Copper Metabolism Disorder"
    ],
    "inheritance_mode": "Autosomal Recessive (AR)",
    "severity_badge": "🟡 Treatable Inherited Copper Disorder (Lifelong Low-Copper Diet & Chelation)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0001392",
      "name": "Abnormality of the liver",
      "chinese_name": "Liver abnormality (abnormal liver enzymes, fatty liver, cirrhosis)"
    },
    {
      "hpo_id": "HP:0002015",
      "name": "Dysphagia",
      "chinese_name": "Difficulty swallowing"
    },
    {
      "hpo_id": "HP:0001260",
      "name": "Dysarthria",
      "chinese_name": "Slurred or unclear speech"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Trientine",
      "chinese_name": "Trientine (copper chelator)",
      "mechanism": "Chelates free copper for renal excretion, reducing copper burden in the liver and brain",
      "approval_status": "FDA / TFDA / NMPA approved"
    },
    {
      "drug_name": "Zinc acetate / Zinc sulfate",
      "chinese_name": "Zinc acetate / Zinc sulfate",
      "mechanism": "Induces intestinal metallothionein, blocking dietary copper absorption and promoting fecal copper loss",
      "approval_status": "FDA / TFDA / NMPA approved"
    },
    {
      "drug_name": "Penicillamine",
      "chinese_name": "Penicillamine",
      "mechanism": "Traditional copper chelator that increases urinary copper excretion; requires monitoring for nephrotoxicity and allergy",
      "approval_status": "FDA / TFDA / NMPA approved"
    }
  ],
  "pharmacogenomics": {
    "key_variant": "Biallelic ATP7B pathogenic variants (p.Arg778Leu common in East Asians; p.His1069Gln common in Europeans)",
    "population_frequency": "Global incidence about 1 in 30,000; carrier frequency about 1 in 90, with R778L more common in East Asia",
    "traffic_light_summary": "No specific pharmacogenomic (PGx) drug-gene guideline currently applies; treatment relies on a lifelong low-copper diet, copper chelators (Trientine, Penicillamine), and zinc, with drug choice and course individualized by liver function, copper markers, and physician guidance.",
    "drugs_guide": [],
    "dietary_contraindications": [
      "Avoid high-copper foods for life: organ meats, shellfish, shrimp and crab, nuts, chocolate, mushrooms, concentrated copper supplements, and some herbal preparations",
      "If drinking water has high copper levels, use a certified filter; avoid prolonged cooking of acidic foods in copper cookware",
      "Maintain balanced protein and calories during treatment; never stop or change medications on your own"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ International Wilson Disease Diagnosis and Genetic Testing Guideline",
    "clinvar_summary_chinese": "ClinVar lists hundreds of pathogenic and likely pathogenic ATP7B variants; genetic testing supports diagnosis and family screening"
  },
  "lifestyle_prevention": {
    "screening_advice": "People with unexplained liver disease, early-onset tremor or psychiatric symptoms, or a family history should have serum ceruloplasmin, 24-hour urinary copper, and ATP7B genetic testing; first-degree relatives should receive genetic counseling and screening.",
    "lifestyle_tips": [
      "Work with a dietitian to build a low-copper food list and avoid organ meats, shellfish, and nut-based sauces when eating out",
      "Keep follow-up visits for liver function, urinary copper, and blood counts; penicillamine users need particular attention to kidney function and allergic reactions",
      "Before pregnancy or during pregnancy, discuss medication adjustments with hepatology and genetics early; never stop treatment on your own"
    ]
  },
  "doctor_checklist": {
    "specialty": "Hepatology / Neurology / Inherited Metabolic Disease",
    "questions": [
      "Doctor, I have abnormal liver tests with tremor and slurred speech—should I be checked with serum ceruloplasmin, urinary copper, or ATP7B genetic testing?",
      "Are my current Trientine, penicillamine, or zinc treatments safe for my liver and kidney function, and how often should copper markers be monitored?",
      "Should my siblings and children also receive copper metabolism screening or genetic testing?"
    ]
  },
  "myth_buster": {
    "myth": "“Wilson disease is just cirrhosis from heavy drinking, and it will resolve once I stop alcohol?”",
    "truth": "No! Wilson disease is a copper metabolism disorder caused by ATP7B variants, not directly by alcohol. Stopping alcohol without removing copper allows copper to keep damaging the liver and brain. Regular chelation or zinc therapy, a lifelong low-copper diet, and monitoring are the keys to control."
  }
}
