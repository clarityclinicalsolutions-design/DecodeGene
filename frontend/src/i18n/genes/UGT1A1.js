export default {
  "gene": {
    "chinese_name": "UDP Glucuronosyltransferase 1A1 (Irinotecan & Bilirubin Metabolism Gene)",
    "chromosome": "2q37.1 (Chromosome 2)",
    "metaphor": {
      "title": "🧹 The Liver's 【Bilirubin & Chemotherapy Cleanup Crew】",
      "story": "UGT1A1 is like the liver's cleanup crew for bilirubin and certain drugs. When clearance is slower, bilirubin may rise intermittently, causing jaundice in Gilbert syndrome. With irinotecan, the active metabolite may also clear too slowly, increasing diarrhea and low blood count risks."
    },
    "plain_summary": "UGT1A1 clears bilirubin and the active metabolite of irinotecan. People with *28 or the East Asian *6 variant may clear these substances more slowly, increasing diarrhea and neutropenia risk with irinotecan. Gilbert syndrome is usually benign, but jaundice may recur.",
    "academic_summary": "UGT1A1 encodes UDP-glucuronosyltransferase 1A1, which glucuronidates unconjugated bilirubin and SN-38. UGT1A1 *28 (rs3064744, TA7) and the East Asian *6 variant (rs4148323, c.211G>A) reduce expression or activity, predisposing to Gilbert syndrome and irinotecan toxicity."
  },
  "disease": {
    "chinese_name": "Gilbert Syndrome & UGT1A1 Metabolism Variation",
    "categories": [
      "Pharmacogenomics (PGx)",
      "Hepatobiliary & Chemotherapy Safety"
    ],
    "inheritance_mode": "Autosomal Recessive",
    "severity_badge": "🟡 Irinotecan Dose Adjustment & Jaundice Monitoring"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0002904",
      "name": "Hyperbilirubinemia",
      "chinese_name": "Unconjugated hyperbilirubinemia"
    },
    {
      "hpo_id": "HP:0000952",
      "name": "Jaundice",
      "chinese_name": "Intermittent jaundice"
    },
    {
      "hpo_id": "HP:0001875",
      "name": "Decreased total neutrophil count",
      "chinese_name": "Neutropenia"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Irinotecan",
      "chinese_name": "Irinotecan",
      "mechanism": "Topoisomerase I inhibitor; active metabolite SN-38 is metabolized by UGT1A1",
      "approval_status": "FDA Label / DPWG Guideline"
    },
    {
      "drug_name": "Atazanavir",
      "chinese_name": "Atazanavir",
      "mechanism": "Antiretroviral drug that can cause hyperbilirubinemia in UGT1A1 poor metabolizers",
      "approval_status": "FDA Label / CPIC Guideline"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": true,
    "key_variant": "UGT1A1 *28 (rs3064744, TA7), UGT1A1 *6 (rs4148323, c.211G>A, common in East Asians), *28/*28, *6/*6, *6/*28",
    "population_frequency": "In East Asians, *6 allele frequency is about 13%–23% and *28 about 10%–16%; Gilbert syndrome presents with intermittent unconjugated hyperbilirubinemia (PMID:36443464)",
    "traffic_light_summary": "🟡 UGT1A1 poor metabolizers clear the active irinotecan metabolite SN-38 more slowly, increasing diarrhea and neutropenia risk. An oncology specialist should reduce the starting dose and monitor closely. Gilbert syndrome is usually benign, but jaundice may recur.",
    "drugs_guide": [
      {
        "drug_name": "Irinotecan — UGT1A1 poor metabolizer (*28/*28, *6/*6, *6/*28)",
        "chinese_name": "Irinotecan — UGT1A1 Poor Metabolizer",
        "traffic_light": "YELLOW_CAUTION",
        "clinical_alert": "UGT1A1 poor metabolizers have reduced SN-38 clearance and higher risk of diarrhea and neutropenia after irinotecan. An oncology specialist should reduce the starting dose and monitor blood counts and gastrointestinal symptoms closely.",
        "cpic_level": "FDA Label (irinotecan) / DPWG 2022 UGT1A1-Irinotecan Guideline"
      },
      {
        "drug_name": "Atazanavir — UGT1A1 poor metabolizer",
        "chinese_name": "Atazanavir — UGT1A1 Poor Metabolizer",
        "traffic_light": "YELLOW_CAUTION",
        "clinical_alert": "UGT1A1 poor metabolizers may develop unconjugated hyperbilirubinemia and jaundice with atazanavir, usually without requiring discontinuation. Monitor bilirubin and liver tests if jaundice is prominent.",
        "cpic_level": "CPIC UGT1A1-Atazanavir Guideline Level A / FDA Label"
      }
    ],
    "dietary_contraindications": [
      "Dehydration, fasting or infection may worsen jaundice in Gilbert syndrome; maintain hydration and regular meals",
      "Contact your care team promptly for severe diarrhea, fever or unusual fatigue during irinotecan treatment"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️ Supported by FDA labeling and DPWG guidance",
    "clinvar_summary_chinese": "ClinVar and PharmGKB contain UGT1A1 *28 (rs3064744) and *6 (rs4148323) bilirubin and irinotecan response variants",
    "key_pmids": [
      "PMID:36443464"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "Before irinotecan treatment, discuss UGT1A1 genotyping with your oncology team if you have a history of jaundice or severe chemotherapy toxicity.",
    "lifestyle_tips": [
      "People with Gilbert syndrome do not need strict dietary restrictions, but should avoid prolonged fasting and dehydration",
      "Track diarrhea frequency and temperature during irinotecan treatment and seek care early if abnormal",
      "Do not use anti-diarrheal medicines to mask severe symptoms without consulting your care team"
    ]
  },
  "doctor_checklist": {
    "specialty": "Medical Oncology / Gastroenterology / Clinical Pharmacy",
    "questions": [
      "My UGT1A1 result suggests I am a poor metabolizer. Does my irinotecan dose need adjustment?",
      "I sometimes develop jaundice. Could this be Gilbert syndrome, and should I be evaluated further?",
      "What should I do about diarrhea or fever during treatment, and when should I return?"
    ]
  },
  "myth_buster": {
    "myth": "“If I have Gilbert syndrome, I cannot receive any chemotherapy.”",
    "truth": "Not true. Gilbert syndrome is usually benign, but UGT1A1 poor metabolism affects irinotecan clearance and toxicity risk. An oncology specialist should decide whether dose adjustment is needed based on genotype, regimen and clinical status."
  }
};
