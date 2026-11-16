export default {
  "gene": {
    "chinese_name": "HLA-DQB1 Gene (HLA-DQ2 / DQ8 Celiac Susceptibility)",
    "chromosome": "6p21.32 (Chromosome 6)",
    "metaphor": {
      "title": "🚪 The Immune System's 【Gluten Recognition Doorbell】",
      "story": "HLA-DQB1 produces recognition molecules on immune cells, like a doorbell that presents gluten fragments to T cells. People with HLA-DQ2 or DQ8 are more likely to have the immune system mistake gluten for a threat, increasing celiac disease susceptibility; but a ringing doorbell does not mean disease, and roughly 30 to 40 percent of healthy people carry these types. Diagnosis still requires serology and small-bowel biopsy, and treatment is a gluten-free diet."
    },
    "plain_summary": "The HLA-DQ2 and HLA-DQ8 types of HLA-DQB1 are the strongest autoimmune susceptibility factors for celiac disease, but they are common human genotypes, not the disease itself. Roughly 30 to 40 percent of healthy people carry DQ2 or DQ8 without having celiac disease; these types have a very high negative predictive value, so celiac disease is unlikely without them. Diagnosis requires serology such as tissue transglutaminase antibodies and a small-bowel biopsy, and confirmed disease is managed with a gluten-free diet.",
    "academic_summary": "HLA-DQB1 is located at 6p21.32 and pairs with HLA-DQA1 to form DQ heterodimers. HLA-DQ2.5 (DQA1*05-DQB1*02), DQ2.2 and DQ8 (DQA1*03-DQB1*0302) present deamidated gluten peptides to CD4+ T cells and trigger small-bowel mucosal inflammation. DQ2/DQ8 have high sensitivity and high negative predictive value for celiac disease but low penetrance; diagnosis relies on serology and duodenal biopsy."
  },
  "disease": {
    "chinese_name": "Celiac Disease and Gluten Sensitivity Autoimmune Susceptibility (HLA-DQ2 / DQ8)",
    "categories": [
      "Autoimmune Disease",
      "Gluten Sensitivity",
      "Polygenic Susceptibility"
    ],
    "inheritance_mode": "Complex / Polygenic Susceptibility (HLA-Associated)",
    "severity_badge": "🟡 Common Susceptibility Genotype, Not a Disease Diagnosis"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0002608",
      "name": "Celiac disease",
      "chinese_name": "Celiac disease"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Gluten-free diet",
      "chinese_name": "Gluten-Free Diet",
      "mechanism": "Lifelong avoidance of wheat, barley and rye gluten allows small-bowel mucosal healing; this is standard celiac treatment",
      "approval_status": "Standard dietary treatment (non-drug)"
    },
    {
      "drug_name": "Nutritional counseling & micronutrient monitoring",
      "chinese_name": "Nutritional Counseling and Micronutrient Monitoring",
      "mechanism": "Assesses iron, folate, calcium and fat-soluble vitamins to support nutritional balance on a gluten-free diet",
      "approval_status": "Dietitian and specialist follow-up"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": false,
    "key_variant": "HLA-DQ2 (DQA1*05-DQB1*02) and HLA-DQ8 (DQA1*03-DQB1*0302); celiac susceptibility genotypes",
    "population_frequency": "Roughly 30 to 40 percent of healthy people carry HLA-DQ2 or DQ8, but only a minority develop celiac disease; negative predictive value is high (PMID:20301720)",
    "traffic_light_summary": "This is an autoimmune susceptibility and screening gene with no drug-gene (PGx) prescribing guideline. A gluten-free diet is started after serology and biopsy confirmation, not directly from genotype. Carrying DQ2/DQ8 is not the same as having celiac disease.",
    "drugs_guide": [],
    "dietary_contraindications": [
      "After diagnosis, follow a lifelong gluten-free diet and avoid wheat, barley, rye and cross-contamination",
      "Do not start a gluten-free diet solely because you carry DQ2/DQ8, as this can interfere with diagnosis",
      "After diagnosis, monitor serology, nutritional status and small-bowel mucosal healing regularly"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️ Clear susceptibility evidence with low penetrance",
    "clinvar_summary_chinese": "HLA-DQ2/DQ8 are celiac susceptibility genotypes, not single high-penetrance pathogenic variants; diagnosis still requires serology and biopsy",
    "key_pmids": [
      "PMID:20301720"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "People with chronic diarrhea, bloating, weight loss, iron-deficiency anemia, dermatitis herpetiformis or a family history of celiac disease should have tissue transglutaminase antibodies (tTG-IgA) and total IgA tested; gastroenterology may arrange duodenal biopsy when needed.",
    "lifestyle_tips": [
      "After diagnosis, follow a lifelong gluten-free diet with dietitian guidance and avoid cross-contamination",
      "Monitor serology, iron and folate, calcium and fat-soluble vitamin status regularly",
      "When eating out, confirm ingredients and cooking methods, and choose labeled gluten-free products when needed"
    ]
  },
  "doctor_checklist": {
    "specialty": "Gastroenterology & Hepatology / Pediatric Gastroenterology / Nutrition Counseling / Genetic Counseling",
    "questions": [
      "I carry HLA-DQ2 or DQ8. Does that mean I definitely have celiac disease?",
      "Do I need tissue transglutaminase antibodies, total IgA or a small-bowel biopsy?",
      "If celiac disease is confirmed, how should I start a gluten-free diet, and which nutrients should I monitor?"
    ]
  },
  "myth_buster": {
    "myth": "“Carrying HLA-DQ2 or DQ8 means certain celiac disease, so I should start a gluten-free diet immediately.”",
    "truth": "Not true. Roughly 30 to 40 percent of healthy people carry DQ2 or DQ8 without celiac disease; these genotypes have high negative predictive value but are not a diagnosis. Diagnosis requires serology and small-bowel biopsy, and lifelong gluten-free eating starts only after confirmation. Self-restricting gluten can cause nutritional imbalance and interfere with testing."
  }
};
