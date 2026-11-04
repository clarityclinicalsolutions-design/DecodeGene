export default {
  "gene": {
    "chinese_name": "Glucose-6-Phosphate Dehydrogenase (Favism Gene)",
    "chromosome": "Xq28 (X Chromosome)",
    "metaphor": {
      "title": "🛡️ Red Blood Cells’ 【Anti-Oxidation Bulletproof Vest】",
      "story": "Red blood cells carry oxygen daily and face oxidative free radicals. G6PD weaves their “anti-oxidation bulletproof vest” (NADPH / reduced glutathione). When G6PD is deficient, red blood cells work fine on calm days—but if exposed to fava beans, mothballs (naphthalene), sulfonamides, or primaquine, unprotected red blood cells burst within hours (acute hemolysis)!"
    },
    "plain_summary": "G6PD deficiency (Favism) follows X-linked inheritance (males are more frequently affected) and is common in Taiwan and southern China. By avoiding fava beans and contraindicated oxidative drugs for life, carriers live completely normal, healthy lives!",
    "academic_summary": "G6PD encodes the rate-limiting enzyme of the pentose phosphate pathway (PPP), generating erythrocyte NADPH to maintain reduced glutathione (GSH). X-linked variants (c.1376G>T, c.1388G>A) reduce enzyme activity, triggering acute non-immune hemolytic anemia upon exposure to vicine/convicine or oxidative drugs."
  },
  "disease": {
    "chinese_name": "Favism / Glucose-6-Phosphate Dehydrogenase (G6PD) Deficiency",
    "categories": [
      "Pharmacogenomics (PGx)",
      "Hematologic Disorder",
      "Dietary & Drug Contraindication"
    ],
    "inheritance_mode": "X-Linked Incomplete Dominant",
    "severity_badge": "🔴 Lifelong Drug & Fava Bean Red Light (Healthy When Avoided)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0001878",
      "name": "Hemolytic anemia",
      "chinese_name": "Acute hemolytic anemia"
    },
    {
      "hpo_id": "HP:0000952",
      "name": "Jaundice",
      "chinese_name": "Jaundice / hyperbilirubinemia"
    },
    {
      "hpo_id": "HP:0012072",
      "name": "Hemoglobinuria",
      "chinese_name": "Hemoglobinuria (dark tea urine)"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Rasburicase / Primaquine / Sulfonamides (Contraindicated)",
      "chinese_name": "Rasburicase / Primaquine / Sulfonamides (Contraindicated)",
      "mechanism": "Induces severe oxidative stress and acute hemolysis in G6PD-deficient red blood cells",
      "approval_status": "CPIC Level A / FDA Boxed Warning"
    }
  ],
  "pharmacogenomics": {
    "key_variant": "Common variants c.1376G>T (Canton), c.1388G>A (Kaiping), c.95A>G (Gaohe)",
    "population_frequency": "400M+ globally; ~3%–10% prevalence in Taiwan and southern China",
    "traffic_light_summary": "🔴 Strictly avoid fava beans, sulfonamide antibiotics, primaquine, rasburicase, methylene blue, camphor/naphthalene mothballs, and high-risk oxidative analgesics!",
    "drugs_guide": [
      {
        "drug_name": "Sulfonamides (e.g., Sulfamethoxazole)",
        "chinese_name": "Sulfonamide Antibiotics (Trimethoprim-Sulfamethoxazole)",
        "traffic_light": "RED_AVOID",
        "clinical_alert": "CPIC high-hemolysis-risk drug. Strictly avoid in G6PD deficiency; use penicillins or cephalosporins instead.",
        "cpic_level": "CPIC Guideline Level A (Avoid Use)"
      },
      {
        "drug_name": "Primaquine / Tafenoquine / Rasburicase / Methylene Blue",
        "chinese_name": "Primaquine / Tafenoquine / Rasburicase / Methylene Blue",
        "traffic_light": "RED_AVOID",
        "clinical_alert": "Extreme risk of life-threatening acute hemolysis; FDA Boxed Warning contraindicates use in G6PD deficiency.",
        "cpic_level": "CPIC Guideline Level A (Contraindicated)"
      },
      {
        "drug_name": "Camphor / Naphthalene / Certain Analgesics",
        "chinese_name": "Naphthalene Mothballs, Acetanilide, Phenacetin & Oxidative Herbs",
        "traffic_light": "RED_AVOID",
        "clinical_alert": "Never place naphthalene/camphor mothballs in infant clothing; for fever, use standard-dose acetaminophen or ibuprofen.",
        "cpic_level": "Pediatric Favism Clinical Consensus"
      }
    ],
    "dietary_contraindications": [
      "Lifelong strict avoidance of fresh or dried fava beans (broad beans) and snacks/sauces containing fava beans",
      "Breastfeeding mothers of G6PD-deficient infants must also avoid fava beans and contraindicated oxidative medications"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Top-Tier International CPIC & Newborn Screening Guideline",
    "clinvar_summary_chinese": "200+ curated pathogenic G6PD deficiency variants in ClinVar"
  },
  "lifestyle_prevention": {
    "screening_advice": "Newborn heel-prick G6PD enzyme screening is standard in Taiwan and southern China; unscreened individuals can confirm status via quantitative G6PD assay.",
    "lifestyle_tips": [
      "Keep a “G6PD Deficiency Drug Red-Light Card” in your phone and health wallet, and show it to every doctor and pharmacist before receiving prescriptions",
      "Remove all naphthalene and camphor mothballs from closets and use physical dehumidifiers instead",
      "Seek emergency care immediately if pallor, lethargy, jaundice, or dark tea-colored urine develops after food or drug exposure!"
    ]
  },
  "doctor_checklist": {
    "specialty": "Pediatrics / Hematology / Clinical Pharmacy",
    "questions": [
      "Doctor, I (or my child) have confirmed G6PD deficiency (Favism). Do any of today’s prescribed medications contain ingredients that could trigger hemolysis?",
      "When my child has a fever, is standard weight-based acetaminophen or ibuprofen safe to use?",
      "As a female heterozygous G6PD carrier, should I follow the same fava bean and medication restrictions during pregnancy and breastfeeding?"
    ]
  },
  "myth_buster": {
    "myth": "“Do people outgrow Favism (G6PD deficiency) once they become strong adults and can eat fava beans freely?”",
    "truth": "Never! G6PD deficiency is lifelong. Eating fresh fava beans or taking contraindicated drugs like sulfonamides or primaquine in adulthood can still trigger life-threatening acute hemolysis and acute kidney failure."
  }
};
