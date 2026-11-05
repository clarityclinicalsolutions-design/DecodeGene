export default {
  "gene": {
    "chinese_name": "GLA Alpha-Galactosidase A (Fabry Disease Gene)",
    "chromosome": "Xq22.1 (X Chromosome)",
    "metaphor": {
      "title": "♻️ The Cell’s Recycling Plant 【Lipid-Degrading Worker】(When it stops, lipid waste fills blood vessels, kidneys, and nerves)",
      "story": "Lysosomes are the cell’s recycling plants, and GLA is the worker that breaks down a lipid called globotriaosylceramide (Gb3). When GLA is insufficient, Gb3 waste cannot be degraded and layers up in blood vessel linings, kidneys, heart muscle, and peripheral nerves. Children or teenagers may develop burning pain in the hands and feet, reduced sweating, and skin rashes; adults may gradually develop proteinuria, declining kidney function, and hypertrophic cardiomyopathy. Early diagnosis with enzyme replacement therapy or an oral pharmacological chaperone can slow organ damage."
    },
    "plain_summary": "GLA deficiency causes Fabry disease, an X-linked disorder. The lipid Gb3 accumulates in the kidneys, heart, nerves, and skin, causing burning hand and foot pain, abnormal sweating, proteinuria, and myocardial hypertrophy. Genetic testing, enzyme activity testing, and family screening enable early diagnosis; enzyme replacement therapy or specific oral medication can slow progression and requires long-term follow-up by genetics, nephrology, and cardiology teams.",
    "academic_summary": "GLA encodes lysosomal alpha-galactosidase A, which hydrolyzes the terminal galactose of globotriaosylceramide (Gb3). Pathogenic GLA variants reduce enzyme activity, causing Gb3 and lyso-Gb3 deposition in vascular endothelium, kidney podocytes, cardiomyocytes, and dorsal root ganglia. This leads to small-fiber neuropathy, angiokeratomas, proteinuria, renal decline, left ventricular hypertrophy, and premature stroke. Female heterozygotes may still have organ involvement because of skewed X-chromosome inactivation."
  },
  "disease": {
    "chinese_name": "Fabry Disease / Alpha-Galactosidase A Deficiency",
    "categories": [
      "X-Linked Genetic Disorder",
      "Lysosomal Storage Disorder",
      "Kidney & Heart Disease"
    ],
    "inheritance_mode": "X-Linked",
    "severity_badge": "🟡 X-Linked Lysosomal Storage Disorder (Early Enzyme Replacement Can Slow Organ Damage)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0001639",
      "name": "Hypertrophic cardiomyopathy",
      "chinese_name": "Thickened heart muscle"
    },
    {
      "hpo_id": "HP:0000083",
      "name": "Renal insufficiency",
      "chinese_name": "Kidney impairment / proteinuria"
    },
    {
      "hpo_id": "HP:0003474",
      "name": "Somatic sensory dysfunction",
      "chinese_name": "Burning hand and foot pain / sensory abnormalities"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Agalsidase beta",
      "chinese_name": "Agalsidase beta (enzyme replacement therapy)",
      "mechanism": "Intravenous recombinant alpha-galactosidase A that helps clear lysosomal Gb3 accumulation",
      "approval_status": "FDA / TFDA / NMPA approved"
    },
    {
      "drug_name": "Migalastat",
      "chinese_name": "Migalastat (oral pharmacological chaperone)",
      "mechanism": "Binds specific amenable GLA variants, stabilizing folding and restoring partial enzyme activity",
      "approval_status": "FDA / TFDA / NMPA approved (specific GLA variants only)"
    }
  ],
  "pharmacogenomics": {
    "key_variant": "GLA pathogenic variants (missense, nonsense, splice-site, and small deletions; some variants are amenable to migalastat)",
    "population_frequency": "Estimated male newborn incidence about 1 in 40,000 to 1 in 117,000; female carriers may be underdiagnosed or diagnosed later",
    "traffic_light_summary": "No specific pharmacogenomic (PGx) drug-gene guideline currently applies; treatment relies on enzyme replacement therapy (agalsidase beta) or oral migalastat, and migalastat eligibility depends on the GLA variant type and physician assessment.",
    "drugs_guide": [],
    "dietary_contraindications": [
      "People with kidney impairment should discuss moderate sodium and protein restriction with a dietitian and avoid dehydration and nephrotoxic drugs",
      "Avoid self-prescribed high-dose vitamins or unregulated supplements that may increase kidney burden",
      "Those receiving enzyme replacement therapy need regular monitoring of infusion reactions, antibodies, and organ function"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ International Fabry Disease Diagnosis and Newborn Screening Guideline",
    "clinvar_summary_chinese": "ClinVar lists many pathogenic and likely pathogenic GLA variants; genotype and enzyme activity support diagnosis and treatment selection"
  },
  "lifestyle_prevention": {
    "screening_advice": "People with unexplained burning hand and foot pain, reduced sweating, proteinuria, left ventricular hypertrophy, or premature stroke should have GLA enzyme activity and genetic testing; female relatives of affected males should receive genetic counseling and screening.",
    "lifestyle_tips": [
      "Monitor blood pressure, urine protein, and kidney function regularly, and have cardiology assess left ventricular hypertrophy and arrhythmia risk",
      "Avoid prolonged heat exposure, dehydration, and overexertion to reduce neuropathic pain and cardiac stress",
      "Carry diagnosis and medication information and tell the medical team before surgery or anesthesia"
    ]
  },
  "doctor_checklist": {
    "specialty": "Inherited Metabolic Disease / Nephrology / Cardiology / Neurology",
    "questions": [
      "Doctor, I have long-standing burning hand and foot pain, reduced sweating, and proteinuria—should I have GLA enzyme activity or genetic testing?",
      "Is my GLA variant amenable to oral migalastat, or do I need enzyme replacement therapy? What monitoring does each option require?",
      "Could my daughter and other female relatives be carriers? When should they begin screening and follow-up?"
    ]
  },
  "myth_buster": {
    "myth": "“Fabry disease only affects men, so female carriers must be completely symptom-free?”",
    "truth": "Wrong! Although Fabry disease is X-linked, female carriers can still develop neuropathic pain, proteinuria, myocardial hypertrophy, or stroke because of skewed X-chromosome inactivation, and symptoms often appear later. Female relatives also need genetic counseling and long-term organ monitoring."
  }
}
