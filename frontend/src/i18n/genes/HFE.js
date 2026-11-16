export default {
  "gene": {
    "chinese_name": "HFE Homeostatic Iron Regulator (Hereditary Hemochromatosis Gene)",
    "chromosome": "6p22.2 (Chromosome 6)",
    "metaphor": {
      "title": "🧲 The Gut's 【Iron Absorption Brake System】(When the brake fails, iron keeps accumulating)",
      "story": "The body absorbs a small amount of iron from food each day, and HFE acts like the brake system for intestinal iron absorption. It senses iron stores and signals the liver to adjust hepcidin so iron absorption does not go out of control. When HFE is defective, the brake signal fails, the gut mistakenly believes the body is iron-deficient and keeps absorbing too much, and excess iron deposits in the liver, heart, pancreas, and skin. Years of overload can cause liver fibrosis or cirrhosis, pancreatic damage with abnormal blood sugar, and cardiac arrhythmia or cardiomyopathy. Therapeutic phlebotomy or iron chelation removes excess iron and protects organs."
    },
    "plain_summary": "HFE pathogenic variants cause hereditary hemochromatosis, an autosomal recessive condition. Intestinal iron absorption becomes dysregulated, and iron gradually deposits in the liver, heart, pancreas, and skin, potentially causing cirrhosis, diabetes, cardiomyopathy, and joint disease. Ferritin and genetic testing, therapeutic phlebotomy, or iron chelation can effectively remove excess iron and prevent organ damage.",
    "academic_summary": "HFE encodes a membrane protein that associates with β2-microglobulin and participates in upstream regulation of hepatic hepcidin expression. The common p.Cys282Tyr variant in the homozygous state impairs HFE function, reduces hepcidin expression, and increases intestinal iron absorption and macrophage iron release, causing progressive iron overload. Clinical manifestations include liver fibrosis and cirrhosis, diabetes, cardiomyopathy, hypogonadism, and skin pigmentation; treatment relies on therapeutic phlebotomy and iron chelators."
  },
  "disease": {
    "chinese_name": "Hereditary Hemochromatosis (Iron Overload)",
    "categories": [
      "Autosomal Recessive Iron Metabolism Disorder",
      "Iron Overload",
      "Liver and Cardiac Metabolic Complication Risk"
    ],
    "inheritance_mode": "Autosomal Recessive (AR)",
    "severity_badge": "🟡 Progressive Iron Overload (Early Detection and Iron Removal Prevent Organ Damage)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0011031",
      "name": "Abnormality of iron homeostasis",
      "chinese_name": "Abnormal iron balance"
    },
    {
      "hpo_id": "HP:0001394",
      "name": "Cirrhosis",
      "chinese_name": "Cirrhosis risk"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Therapeutic phlebotomy",
      "chinese_name": "Therapeutic phlebotomy (blood removal therapy)",
      "mechanism": "Regularly removes iron-containing red blood cells, forcing the body to use stored iron to make new blood and gradually lowering ferritin and organ iron burden",
      "approval_status": "International Hemochromatosis Management Guideline (first-line iron removal therapy)"
    },
    {
      "drug_name": "Deferasirox",
      "chinese_name": "Deferasirox (oral iron chelator)",
      "mechanism": "Chelates free and deposited iron into excretable complexes, for people who cannot tolerate phlebotomy or require medication",
      "approval_status": "FDA / TFDA / NMPA approved (iron overload chelation therapy)"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": false,
    "key_variant": "HFE pathogenic variants (such as p.Cys282Tyr and p.His63Asp)",
    "population_frequency": "p.Cys282Tyr homozygosity is more common in Northern European populations; carrier frequency varies by ancestry",
    "summary": "HFE is evaluated for hereditary disease risk and family screening rather than for drug-metabolizing genotype-guided dosing.",
    "traffic_light_summary": "This gene is evaluated primarily for hereditary condition screening and has no direct pharmacogenomic dosing guideline; standard medications generally do not require genotype-based dose adjustments. There is currently no dedicated pharmacogenomic (PGx) prescribing guideline for this gene.",
    "practical_guidance": "People with hereditary hemochromatosis should have iron studies, liver function, and blood sugar monitored regularly and follow the prescribed phlebotomy or chelation plan. Avoid unnecessary iron supplements, and tell the care team about all medications and supplements.",
    "drugs_guide": [],
    "dietary_contraindications": [
      "Avoid long-term excessive intake of iron-rich supplements and fortified products, and avoid taking large iron doses together with vitamin C",
      "Reduce raw shellfish and alcohol intake to lower infection and liver burden risk",
      "Monitor ferritin and liver function regularly, and seek care for fatigue, joint pain, darkening skin, or abnormal blood sugar"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ International Hemochromatosis Care and Genetics Guideline",
    "clinvar_summary_chinese": "ClinVar lists multiple pathogenic and likely pathogenic HFE variants; genetic testing supports diagnosis and family iron screening",
    "key_pmids": [
      "PMID:20301613",
      "PMID:37347242"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "People with unexplained elevated ferritin, abnormal liver tests, skin pigmentation, diabetes with liver disease, or a family history should have ferritin and transferrin saturation tested and consider HFE genetic testing; first-degree relatives should have iron screening.",
    "lifestyle_tips": [
      "Maintain a balanced diet, avoid unnecessary iron supplementation, and reduce alcohol and raw shellfish intake",
      "Follow the prescribed therapeutic phlebotomy or iron chelation plan, and monitor ferritin, liver function, and blood sugar regularly",
      "Tell the doctor about joint pain, fatigue, arrhythmia, or darkening skin so that evaluation can be arranged"
    ]
  },
  "doctor_checklist": {
    "specialty": "Gastroenterology / Hematology / Metabolism / Genetic Counseling",
    "questions": [
      "Doctor, my ferritin and transferrin saturation are high—should I have HFE genetic testing for hereditary hemochromatosis?",
      "What is my ferritin target? Am I better suited to therapeutic phlebotomy or an iron chelator, and how often should I be monitored?",
      "Should my siblings and children have iron screening and genetic counseling?"
    ]
  },
  "myth_buster": {
    "myth": "“More iron is always healthier, so the more iron supplements I take the better—there is no need to worry about iron overload?”",
    "truth": "Wrong! In hereditary hemochromatosis, iron absorption is dysregulated, and extra iron can accelerate deposition and increase the risk of cirrhosis, diabetes, and cardiomyopathy. These patients should avoid unnecessary iron supplements and remove excess iron through phlebotomy or chelation as prescribed."
  }
}
