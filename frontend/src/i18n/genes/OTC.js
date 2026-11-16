export default {
  "gene": {
    "chinese_name": "OTC Ornithine Transcarbamylase (Urea Cycle Disorder Gene)",
    "chromosome": "Xp11.4 (X Chromosome)",
    "metaphor": {
      "title": "🏭 The Liver's 【Ammonia-Clearing Factory】 Conveyor Belt (When it fails, ammonia surges in the blood)",
      "story": "Protein breakdown produces toxic ammonia, and the liver's urea cycle is like an ammonia-clearing factory that converts ammonia into safer urea for the kidneys to excrete. OTC is a key conveyor belt on this production line, combining ornithine with carbamoyl phosphate. When OTC is defective, the belt stops, ammonia cannot enter the urea cycle efficiently, and blood ammonia rises rapidly, potentially causing vomiting, lethargy, confusion, seizures, and even brain swelling. Certain drugs such as valproic acid further worsen hyperammonemia and must be strictly avoided."
    },
    "plain_summary": "OTC pathogenic variants cause ornithine transcarbamylase deficiency, an X-linked recessive urea cycle disorder. Patients may develop hyperammonemia during high-protein intake, infection, surgery, or use of certain drugs, leading to vomiting, lethargy, seizures, and neurologic emergencies. Genetic testing, dietary protein management, ammonia-lowering medications, and avoidance of trigger drugs reduce acute crisis risk.",
    "academic_summary": "OTC encodes mitochondrial ornithine transcarbamylase, which catalyzes the condensation of carbamoyl phosphate with ornithine to form citrulline in the urea cycle. Loss-of-function variants cause X-linked urea cycle disorder; hemizygous males often present with severe neonatal hyperammonemia, while female carriers may develop late-onset symptoms due to skewed X-inactivation. Acute hyperammonemia is a neurologic emergency requiring immediate cessation of protein intake, ammonia-lowering therapy, and consideration of dialysis."
  },
  "disease": {
    "chinese_name": "Ornithine Transcarbamylase Deficiency (OTC Deficiency)",
    "categories": [
      "X-Linked Recessive Urea Cycle Disorder",
      "Hyperammonemia",
      "Neurologic Emergency Risk"
    ],
    "inheritance_mode": "X-Linked Recessive (XR)",
    "severity_badge": "🔴 Hyperammonemic Neurologic Emergency Risk (Strictly Avoid Trigger Drugs and Treat Early)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0001987",
      "name": "Hyperammonemia",
      "chinese_name": "High blood ammonia"
    },
    {
      "hpo_id": "HP:0001250",
      "name": "Seizure",
      "chinese_name": "Neurologic emergencies and seizures"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Sodium phenylbutyrate / Glycerol phenylbutyrate",
      "chinese_name": "Sodium phenylbutyrate / glycerol phenylbutyrate (nitrogen scavengers)",
      "mechanism": "Provides an alternative nitrogen excretion pathway, conjugating with ammonia to form excretable metabolites and lowering blood ammonia",
      "approval_status": "FDA / TFDA / NMPA approved (standard ammonia-lowering therapy for urea cycle disorders)"
    },
    {
      "drug_name": "L-Arginine / L-Citrulline supplementation",
      "chinese_name": "L-arginine / L-citrulline supplementation",
      "mechanism": "Replenishes urea cycle intermediates, maintaining cycle flux and promoting nitrogen excretion in acute and long-term management",
      "approval_status": "International Urea Cycle Disorder Management Guideline (metabolic supportive therapy)"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": true,
    "key_variant": "OTC pathogenic variants (urea cycle loss of function related)",
    "population_frequency": "OTC deficiency is one of the most common urea cycle disorders; incidence varies by population and newborn screening strategy",
    "summary": "Patients with OTC deficiency must strictly avoid valproic acid; when corticosteroids or other protein-catabolic drugs are needed, ammonia must be monitored closely, and ammonia-lowering agents are standard therapy.",
    "traffic_light_summary": "🔴 Valproic acid / sodium valproate must be strictly avoided because it can readily trigger fatal hyperammonemic encephalopathy. 🟡 Systemic high-dose corticosteroids may accelerate protein breakdown and raise ammonia, requiring close monitoring. 🟢 Nitrogen scavengers (sodium phenylbutyrate / glycerol phenylbutyrate) are standard ammonia-lowering therapy.",
    "practical_guidance": "Patients with OTC deficiency should be managed long term by a metabolic team, with heightened vigilance during acute illness, dehydration, surgery, or poor oral intake. At every medical visit, report the urea cycle disorder history and contraindicated drugs.",
    "drugs_guide": [
      {
        "drug_name": "Valproic acid / Sodium valproate",
        "chinese_name": "Valproic acid / sodium valproate",
        "traffic_light": "RED_AVOID",
        "clinical_alert": "Valproic acid must be strictly avoided because it can readily trigger fatal hyperammonemic encephalopathy; specialists should select alternative drugs for seizures or mood-related treatment.",
        "cpic_level": "Urea Cycle Disorder Medication Safety Guidance (Contraindicated)"
      },
      {
        "drug_name": "Systemic high-dose corticosteroids",
        "chinese_name": "Systemic high-dose corticosteroids",
        "traffic_light": "YELLOW_CAUTION",
        "clinical_alert": "May accelerate protein breakdown and raise ammonia; use requires close monitoring of ammonia, mental status, and metabolic markers, with metabolic team co-management.",
        "cpic_level": "Urea Cycle Disorder Medication Safety Guidance (Requires Monitoring)"
      },
      {
        "drug_name": "Nitrogen-scavenging agents (Sodium phenylbutyrate / Glycerol phenylbutyrate)",
        "chinese_name": "Nitrogen scavengers (sodium phenylbutyrate / glycerol phenylbutyrate)",
        "traffic_light": "GREEN_NORMAL",
        "clinical_alert": "Standard ammonia-lowering therapy that provides an alternative nitrogen excretion pathway; ammonia and electrolytes should still be monitored as directed during use.",
        "cpic_level": "International Urea Cycle Disorder Management Guideline (Standard Therapy)"
      }
    ],
    "dietary_contraindications": [
      "Follow the metabolic team's and dietitian's planned moderate protein restriction, and avoid large single high-protein meals",
      "During acute illness, vomiting, diarrhea, or markedly reduced intake, contact the metabolic team early and adjust diet and medication as advised",
      "Avoid prolonged fasting and dehydration, and monitor ammonia, liver function, and growth regularly"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ International Urea Cycle Disorder Care and Medication Safety Guideline",
    "clinvar_summary_chinese": "ClinVar lists multiple pathogenic and likely pathogenic OTC variants; genetic testing supports diagnosis and family screening",
    "key_pmids": [
      "PMID:24006547",
      "PMID:37347242"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "People with neonatal hyperammonemia, recurrent vomiting and lethargy, unexplained seizures, altered consciousness after high-protein intake, or a family history should have ammonia and metabolic testing and consider OTC genetic testing; female carriers may also be symptomatic and should receive genetic counseling.",
    "lifestyle_tips": [
      "Follow the metabolic team's protein intake plan and ammonia-lowering medications, and do not change diet or stop medication on your own",
      "Seek early review during illness, fever, dehydration, or poor appetite to avoid hyperammonemic crisis",
      "Carry a urea cycle disorder medical alert record, and report contraindicated drugs and history at every medical visit"
    ]
  },
  "doctor_checklist": {
    "specialty": "Pediatric Genetics and Metabolism / Gastroenterology / Neurology / Genetic Counseling",
    "questions": [
      "Doctor, I have recurrent hyperammonemia or a family history of urea cycle disorder—should I have OTC genetic testing?",
      "Which drugs should I avoid? If corticosteroids or other ammonia-raising drugs are necessary, how should ammonia be monitored?",
      "Should my siblings and children have carrier screening and genetic counseling?"
    ]
  },
  "myth_buster": {
    "myth": "“High ammonia just causes temporary discomfort, and eating lightly will resolve it without special medication?”",
    "truth": "Wrong! Hyperammonemia in OTC deficiency can rapidly progress to vomiting, lethargy, seizures, brain swelling, and even death, and it is a neurologic emergency. The medical team must act immediately with protein cessation, ammonia-lowering therapy, and close monitoring—it cannot be managed by diet alone."
  }
}
