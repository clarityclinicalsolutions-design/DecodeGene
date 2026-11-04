export default {
  "gene": {
    "chinese_name": "Cytochrome P450 1A2 (Caffeine Metabolism Trait Gene)",
    "chromosome": "15q24.1 (Chromosome 15)",
    "metaphor": {
      "title": "☕ The Liver's 【Caffeine Timer】",
      "story": "Caffeine in coffee, tea and energy drinks is mainly broken down by the liver's CYP1A2 timer. Everyone's timer runs at a different speed: some people can drink coffee in the afternoon and still sleep well, while others lie awake counting sheep after a midday cup. This difference is usually mild, and timing and amount often matter more than genotype."
    },
    "plain_summary": "CYP1A2 is the main enzyme that metabolizes caffeine. Individual differences in metabolism may affect palpitations, alertness and sleep after coffee, but the effect is usually mild. Adjusting timing and amount and keeping a regular sleep schedule is usually more practical than worrying about genotype.",
    "academic_summary": "CYP1A2 encodes cytochrome P450 1A2, which catalyzes caffeine N3-demethylation, the main clearance pathway. Variants such as CYP1A2*1F (rs762551) may influence enzyme inducibility and caffeine metabolism, but caffeine sensitivity is also affected by intake, smoking, medications and sleep habits."
  },
  "disease": {
    "chinese_name": "Caffeine Sensitivity & Sleep Effects (Insomnia Susceptibility)",
    "categories": [
      "Lifestyle Trait",
      "Sleep & Caffeine Metabolism"
    ],
    "inheritance_mode": "Complex / Polygenic Lifestyle Trait",
    "severity_badge": "🟡 Common and Usually Mild Caffeine Sensitivity Trait"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0100785",
      "name": "Insomnia",
      "chinese_name": "Insomnia / sleep disturbance"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Caffeine",
      "chinese_name": "Caffeine",
      "mechanism": "Central nervous system stimulant mainly metabolized by CYP1A2",
      "approval_status": "Food and drug ingredient"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": false,
    "key_variant": "CYP1A2*1F (rs762551) is associated with caffeine metabolism speed; individual variation is large",
    "population_frequency": "CYP1A2*1F allele frequency varies by population; caffeine sensitivity is also influenced by intake, smoking, medications and sleep habits (PMID:16522833)",
    "traffic_light_summary": "This is a lifestyle-related trait with no drug-gene (PGx) prescribing guideline. Individual differences in caffeine metabolism are usually mild, and sleep habits, intake and lifestyle matter more.",
    "drugs_guide": [],
    "dietary_contraindications": [
      "Reduce coffee, tea, energy drinks and chocolate in the afternoon or evening to improve sleep",
      "Avoid combining with drugs that inhibit CYP1A2 or with heavy alcohol use"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️ Common lifestyle trait with mild evidence",
    "clinvar_summary_chinese": "CYP1A2 variants are associated with caffeine metabolism speed, but this is mostly a lifestyle trait rather than a single high-penetrance pathogenic variant",
    "key_pmids": [
      "PMID:16522833"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "If coffee often causes palpitations, anxiety or insomnia, record the timing and amount of caffeine intake and discuss it with your doctor if needed.",
    "lifestyle_tips": [
      "Keep caffeine intake in the morning and switch to decaffeinated drinks later in the day",
      "Watch for hidden caffeine in energy drinks, tea and chocolate",
      "Keep a regular sleep schedule and avoid screens before bed"
    ]
  },
  "doctor_checklist": {
    "specialty": "Family Medicine / Sleep Medicine / Nutrition Counseling",
    "questions": [
      "I get palpitations or cannot sleep after coffee. Could this be related to caffeine metabolism?",
      "Do I need CYP1A2 genetic testing, and would the result change your advice?",
      "Besides reducing caffeine, what else can I do to improve my sleep?"
    ]
  },
  "myth_buster": {
    "myth": "“If coffee keeps me awake, my genes must be bad.”",
    "truth": "Not necessarily. Caffeine metabolism is only one factor; timing, amount, sleep habits, stress and medications also matter. Adjusting lifestyle usually helps more than focusing on genotype alone."
  }
};
