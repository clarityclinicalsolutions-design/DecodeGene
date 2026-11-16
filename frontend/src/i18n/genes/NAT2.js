export default {
  "gene": {
    "chinese_name": "N-Acetyltransferase 2 (Isoniazid & Hydralazine Acetylation Gene)",
    "chromosome": "8p22 (Chromosome 8)",
    "metaphor": {
      "title": "🏭 The 【Acetylation Conveyor Belt】 on the Liver's Detox Line (A slow belt lets drug intermediates pile up)",
      "story": "NAT2 is the acetylation conveyor belt on the liver's detox line, tagging isoniazid, hydralazine and sulfasalazine so they can be cleared. When the belt runs slowly because of a slow-acetylator genotype, the drug and its intermediates stay in the body longer, raising the risk of liver toxicity and other adverse reactions."
    },
    "plain_summary": "NAT2 genotype determines a person's acetylation speed. Slow acetylators clear isoniazid and related tuberculosis drugs more slowly, increasing the risk of liver toxicity and peripheral neuropathy; they also have more adverse reactions to hydralazine and sulfasalazine. Genetic testing, liver-function monitoring and individualized drug selection can reduce drug-induced liver injury.",
    "academic_summary": "NAT2 is located at 8p22 and encodes cytosolic N-acetyltransferase 2, which acetylates isoniazid, hydralazine, sulfasalazine and procainamide. Slow-acetylator alleles such as *5, *6, *7 and *14 reduce enzyme activity in an autosomal recessive pattern and are associated with isoniazid-induced hepatotoxicity and other drug adverse reactions."
  },
  "disease": {
    "chinese_name": "Slow Acetylator Phenotype and Antituberculosis Drug-Induced Liver Injury (NAT2 PGx)",
    "categories": ["Pharmacogenomics (PGx)", "Antituberculosis Drug Safety", "Drug-Induced Liver Injury"],
    "inheritance_mode": "Autosomal Recessive Acetylation Phenotype",
    "severity_badge": "🟡 Hepatotoxicity Monitoring Alert (slow acetylators need closer liver follow-up)"
  },
  "phenotypes": [
    { "hpo_id": "HP:0002910", "name": "Elevated circulating hepatic transaminase concentration", "chinese_name": "Drug-induced transaminase elevation" },
    { "hpo_id": "HP:0001392", "name": "Abnormality of the liver", "chinese_name": "Drug-induced liver injury risk" }
  ],
  "drugs_targeted": [
    { "drug_name": "Isoniazid", "chinese_name": "Isoniazid", "mechanism": "First-line antituberculosis drug metabolized mainly by NAT2 acetylation; slow acetylators have higher exposure", "approval_status": "CPIC actionable pharmacogene-drug pair" },
    { "drug_name": "Hydralazine / Sulfasalazine", "chinese_name": "Hydralazine / Sulfasalazine", "mechanism": "Metabolized by NAT2 acetylation; slow acetylators have higher adverse-reaction risk", "approval_status": "Use with clinical assessment and monitoring" },
    { "drug_name": "Rifampin / Ethambutol", "chinese_name": "Rifampin / Ethambutol", "mechanism": "Common companion antituberculosis drugs not primarily dependent on NAT2 acetylation", "approval_status": "Standard antituberculosis combination therapy" }
  ],
  "pharmacogenomics": {
    "key_variant": "NAT2 slow-acetylator alleles such as *5, *6, *7 and *14",
    "population_frequency": "Slow-acetylator prevalence is about 10%–20% in East Asians and higher in European and some Middle Eastern populations (PMID:25139891)",
    "traffic_light_summary": "🟡 Caution and liver monitoring: NAT2 slow acetylators clear isoniazid more slowly, increasing the risk of drug-induced liver injury and peripheral neuropathy, and hydralazine or sulfasalazine adverse reactions are also more likely. Antituberculosis therapy requires close liver-enzyme and symptom monitoring, with physician assessment of any drug adjustment.",
    "drugs_guide": [
      { "drug_name": "Isoniazid", "chinese_name": "Isoniazid", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "NAT2 slow acetylators clear isoniazid more slowly, increasing hepatotoxicity and peripheral neuropathy risk; monitor liver enzymes and symptoms closely during antituberculosis therapy and let the physician assess dose or regimen adjustment and protective measures.", "cpic_level": "CPIC Guideline for NAT2 and Isoniazid" },
      { "drug_name": "Hydralazine / Sulfasalazine", "chinese_name": "Hydralazine / Sulfasalazine", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "Slow acetylators have a higher probability of drug-induced lupus, gastrointestinal upset and hematologic side effects with hydralazine or sulfasalazine; intensify clinical and laboratory monitoring.", "cpic_level": "PharmGKB NAT2 Drug Substrate Guidance" },
      { "drug_name": "Rifampin / Ethambutol", "chinese_name": "Rifampin / Ethambutol", "traffic_light": "GREEN_NORMAL", "clinical_alert": "These drugs are not primarily dependent on NAT2 acetylation and are less affected by NAT2 phenotype; still monitor liver function, vision and drug interactions as standard.", "cpic_level": "WHO/CDC Tuberculosis Treatment Guidance" }
    ],
    "dietary_contraindications": [
      "Avoid alcohol during antituberculosis treatment to reduce the risk of drug-induced liver injury",
      "Seek care promptly for loss of appetite, nausea, jaundice, dark urine or right-upper-abdominal discomfort to check liver function",
      "Do not combine other pain or fever medicines or herbal products without assessing liver toxicity with a physician or pharmacist"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️ Clear CPIC antituberculosis pharmacogenomic evidence",
    "clinvar_summary_chinese": "ClinVar and CPIC include NAT2 slow-acetylator alleles associated with isoniazid-induced hepatotoxicity and multiple drug adverse reactions"
  },
  "lifestyle_prevention": {
    "screening_advice": "If you are starting isoniazid for tuberculosis, have had drug-induced liver injury, or need long-term hydralazine or sulfasalazine, discuss NAT2 testing and a liver-monitoring plan with your physician.",
    "lifestyle_tips": [
      "Show your NAT2 result to your physician and pharmacist and confirm the monitoring schedule for antituberculosis therapy",
      "Avoid alcohol and unproven liver supplements, and attend scheduled liver blood tests",
      "Seek immediate care for jaundice, dark urine, severe fatigue or persistent nausea"
    ]
  },
  "doctor_checklist": {
    "specialty": "Pulmonology / Infectious Diseases / Gastroenterology and Hepatology / Tuberculosis Clinic",
    "questions": [
      "My NAT2 test shows a slow-acetylator genotype. Does my antituberculosis regimen need adjustment or closer liver monitoring?",
      "If my liver enzymes rise during treatment, should I stop the drug or change the regimen first?",
      "What adverse reactions should I watch for if I take hydralazine or sulfasalazine?"
    ]
  },
  "myth_buster": {
    "myth": "“Everyone takes the same tuberculosis regimen, and abnormal liver tests are just bad luck.”",
    "truth": "Not entirely. NAT2 slow acetylators clear isoniazid more slowly and have a higher risk of drug-induced liver injury. Genetic testing helps clinicians schedule closer liver monitoring and individualize therapy before jaundice appears."
  }
};
