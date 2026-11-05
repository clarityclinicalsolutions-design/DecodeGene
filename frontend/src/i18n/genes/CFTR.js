export default {
  "gene": {
    "chinese_name": "CFTR Cystic Fibrosis Transmembrane Conductance Regulator",
    "chromosome": "7q31.2 (Chromosome 7)",
    "metaphor": {
      "title": "💧 The Airway and Pancreatic Duct 【Salt-Water Gate】(When it fails, mucus becomes thick and sticky)",
      "story": "The airways, intestines, and pancreatic ducts need a thin layer of water to stay lubricated. CFTR is the chloride and water gate on the cell membrane that delivers salt and water to the duct surface. When both copies of CFTR are broken, chloride cannot pass normally and water follows less, so secretions become thick and sticky like glue, blocking airways and pancreatic ducts. The lungs suffer repeated infections and bronchiectasis, and the pancreas cannot deliver digestive enzymes, causing malnutrition. CFTR modulators can repair the gate for specific variants and offer new treatment options."
    },
    "plain_summary": "CFTR deficiency causes cystic fibrosis, an autosomal recessive condition. Thick mucus obstructs the airways and pancreatic ducts, leading to recurrent lung infections, bronchiectasis, exocrine pancreatic insufficiency, and malnutrition. Sweat chloride testing, genetic testing, and newborn screening enable diagnosis; airway clearance, nutritional support, and CFTR modulators are the core of modern care.",
    "academic_summary": "CFTR encodes an ATP-binding cassette chloride channel that regulates chloride and bicarbonate secretion in airway epithelium, pancreatic ducts, sweat glands, and intestinal epithelium. Biallelic pathogenic variants impair channel folding, trafficking, or gating, dehydrating and acidifying luminal secretions. Impaired mucociliary clearance leads to chronic Pseudomonas aeruginosa infection, bronchiectasis, exocrine pancreatic insufficiency, and elevated sweat chloride. F508del is the most common variant worldwide, and CFTR modulators (potentiators and correctors) can restore partial function depending on variant type."
  },
  "disease": {
    "chinese_name": "Cystic Fibrosis (CF)",
    "categories": [
      "Pharmacogenomics (PGx)",
      "Inherited Respiratory Disease",
      "Multiorgan Disease"
    ],
    "inheritance_mode": "Autosomal Recessive (AR)",
    "severity_badge": "🟡 Autosomal Recessive Multiorgan Disease (CFTR Modulators Can Improve Course)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0002110",
      "name": "Bronchiectasis",
      "chinese_name": "Damaged, widened airways"
    },
    {
      "hpo_id": "HP:0001738",
      "name": "Exocrine pancreatic insufficiency",
      "chinese_name": "Poor digestion from pancreatic enzyme deficiency"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "CFTR Modulators (Ivacaftor / Elexacaftor-Tezacaftor-Ivacaftor)",
      "chinese_name": "CFTR modulators (ivacaftor / elexacaftor-tezacaftor-ivacaftor)",
      "mechanism": "Enhances channel gating or improves folding and trafficking depending on the CFTR variant, restoring chloride and water secretion",
      "approval_status": "FDA / TFDA / NMPA approved (requires genetic confirmation of responsive variants)"
    },
    {
      "drug_name": "Dornase alfa",
      "chinese_name": "Dornase alfa (recombinant DNase)",
      "mechanism": "Breaks down free DNA in sputum, reducing mucus viscosity and improving airway clearance",
      "approval_status": "FDA / TFDA / NMPA approved"
    }
  ],
  "pharmacogenomics": {
    "key_variant": "CFTR pathogenic variants per drug label and companion diagnostic (such as F508del and G551D)",
    "population_frequency": "About 1 in 2,500 to 1 in 3,500 in people of European ancestry; less common in East Asians but cases do occur",
    "traffic_light_summary": "🟢 CFTR modulators are precision targeted therapy: genetic testing must confirm a responsive CFTR variant before use, and a cystic fibrosis center team should assess liver function, drug interactions, and infection control.",
    "drugs_guide": [
      {
        "drug_name": "CFTR Modulators (Ivacaftor / Elexacaftor-Tezacaftor-Ivacaftor)",
        "chinese_name": "CFTR modulators (ivacaftor / elexacaftor-tezacaftor-ivacaftor)",
        "traffic_light": "GREEN_NORMAL",
        "clinical_alert": "Indicated for patients with specific CFTR variants confirmed by genetic testing; can improve lung function and quality of life but requires regular monitoring of liver function and respiratory infections.",
        "cpic_level": "CPIC Guideline for CFTR and Ivacaftor Level A / FDA Companion Diagnostic"
      }
    ],
    "dietary_contraindications": [
      "Follow a high-calorie, high-protein diet with pancreatic enzyme replacement, adjusting portions and timing with a dietitian",
      "Replace salt and fluids appropriately during heat or heavy sweating to avoid hyponatremic dehydration",
      "Avoid smoking and secondhand smoke, and maintain airway clearance and vaccinations"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ International CFTR Modulator Pharmacogenomics and Cystic Fibrosis Care Guideline",
    "clinvar_summary_chinese": "ClinVar lists many pathogenic and likely pathogenic CFTR variants; genotype guides CFTR modulator selection"
  },
  "lifestyle_prevention": {
    "screening_advice": "People with meconium ileus, poor growth, recurrent lung infections, or elevated sweat chloride should have sweat chloride testing and CFTR genetic testing; those with a family history should receive genetic counseling and carrier screening.",
    "lifestyle_tips": [
      "Perform daily airway clearance and inhaled therapies, and receive influenza and pneumococcal vaccines as advised",
      "Maintain a high-calorie, high-protein diet with pancreatic enzymes, and track growth and fat-soluble vitamin levels",
      "Discuss CFTR modulator eligibility with the CF center team and monitor liver and lung function regularly"
    ]
  },
  "doctor_checklist": {
    "specialty": "Pulmonology / Pediatric Pulmonology / Genetic Counseling / Nutrition",
    "questions": [
      "Doctor, do my sweat chloride and CFTR genetic test results confirm cystic fibrosis, and am I a candidate for CFTR modulators?",
      "What regular tests do my lung infections and pancreatic function need? How should airway clearance and vaccinations be scheduled?",
      "Should my siblings and children have CFTR carrier screening or genetic counseling?"
    ]
  },
  "myth_buster": {
    "myth": "“Cystic fibrosis is just frequent colds and coughs in childhood; the airways mature and it resolves on its own?”",
    "truth": "Wrong! Cystic fibrosis is a lifelong disease. Thick mucus causes ongoing bronchiectasis, chronic infection, and pancreatic insufficiency. Symptoms do not disappear with age; long-term airway clearance, nutritional support, infection control, and CFTR modulators when appropriate are required."
  }
}
