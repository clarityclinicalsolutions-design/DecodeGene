export default {
  "gene": {
    "chinese_name": "Hemoglobin Subunit Alpha 1 (HBA1)",
    "chromosome": "16p13.3 (Chromosome 16)",
    "metaphor": {
      "title": "🩸 The 【α-Chain Duo】 on the Hemoglobin Rack",
      "story": "Hemoglobin needs α chains and β chains assembled together. α chains are made mainly by HBA1 together with its partner gene HBA2, like two workers on the same production line. If α-chain output is low, red blood cells become small and thin and may rupture early, producing alpha-thalassemia."
    },
    "plain_summary": "HBA1 works with its partner gene HBA2 to make the α chain of hemoglobin. Having only one pathogenic variant usually means being an asymptomatic carrier: most carriers are healthy. The real disease risk mainly arises when both parents carry the same alpha-thalassemia variant, which gives their child a higher chance of being affected. Carrier status can be planned for through genetic counseling and preconception testing.",
    "academic_summary": "HBA1 and HBA2 are located at 16p13.3 and together encode the hemoglobin α chain. Alpha-thalassemia is mostly caused by HBA1/HBA2 deletions or point mutations that reduce α-chain synthesis, inherited in an autosomal recessive pattern. Carriers are usually asymptomatic or have only mild microcytic anemia, while severe forms present as HbH disease or hydrops fetalis depending on the number of deleted alleles."
  },
  "disease": {
    "chinese_name": "Alpha-Thalassemia (α-Type Thalassemia)",
    "categories": [
      "Blood Disorder",
      "Inherited Hemoglobin Disorder"
    ],
    "inheritance_mode": "Autosomal Recessive (AR)",
    "severity_badge": "🟠 Needs regular follow-up (severity varies with the number of deletions)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0001903",
      "name": "Anemia",
      "chinese_name": "Anemia"
    },
    {
      "hpo_id": "HP:0004840",
      "name": "Hypochromic microcytic anemia",
      "chinese_name": "Hypochromic microcytic anemia"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Deferasirox",
      "chinese_name": "Deferasirox (Iron Chelator)",
      "mechanism": "Chelates excess iron to reduce iron overload from long-term transfusion",
      "approval_status": "FDA-approved prescription drug"
    },
    {
      "drug_name": "Blood transfusion",
      "chinese_name": "Regular Blood Transfusion",
      "mechanism": "Replaces healthy red blood cells to improve anemia and tissue oxygenation",
      "approval_status": "Standard supportive treatment"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": false,
    "key_variant": "HBA1/HBA2 deletions or point mutations; alpha-thalassemia is mainly caused by reduced α-chain synthesis, and HBA2 is an important partner gene",
    "population_frequency": "Alpha-thalassemia carrier status is relatively common in Southeast Asian, southern Chinese and Taiwanese populations; carrier frequency varies by region and deletion type (PMID:20301608)",
    "traffic_light_summary": "This gene currently has no CPIC pharmacogenomic (PGx) dosing guideline. Standard treatment for alpha-thalassemia relies on regular transfusion, iron chelators such as deferasirox, and supportive care; mild carriers usually need no specific medication, and treatment decisions should be made by a hematologist.",
    "drugs_guide": [],
    "dietary_contraindications": [
      "Avoid self-supplementing with iron products, which can worsen iron overload",
      "People receiving transfusions should have ferritin and liver function monitored regularly"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️ Clear genetic medicine evidence",
    "clinvar_summary_chinese": "ClinVar and the literature include multiple HBA1/HBA2 deletions and pathogenic variants with a clear association with alpha-thalassemia",
    "key_pmids": [
      "PMID:20301608"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "If you have microcytic anemia, a family history, or are planning a pregnancy, consider hematologic testing and hemoglobin electrophoresis; HBA1/HBA2 genetic testing and genetic counseling may be needed.",
    "lifestyle_tips": [
      "Eat a balanced diet and take folic acid as advised; do not self-supplement iron",
      "Avoid excessive fatigue and seek care early for palpitations, dizziness or shortness of breath",
      "Before pregnancy, have carrier screening and genetic counseling together with your partner"
    ]
  },
  "doctor_checklist": {
    "specialty": "Hematology / Genetic Counseling / Pediatrics",
    "questions": [
      "My HBA1 test shows I am a carrier. Will this affect my health?",
      "Do I also need HBA2 testing, and should my partner have alpha-thalassemia carrier screening?",
      "If we plan a pregnancy, what prenatal or preimplantation testing options are available?"
    ]
  },
  "myth_buster": {
    "myth": "“Only beta-thalassemia matters; being an alpha-thalassemia carrier is not a concern.”",
    "truth": "Not true. Alpha-thalassemia carriers are usually healthy, but if both parents carry α-chain variants, their child may have more severe anemia. Preconception carrier screening and genetic counseling help assess the risk."
  }
};
