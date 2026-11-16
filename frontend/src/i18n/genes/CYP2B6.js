export default {
  "gene": {
    "chinese_name": "Cytochrome P450 2B6 (Efavirenz, Methadone & Bupropion Metabolism Gene)",
    "chromosome": "19q13.2 (Chromosome 19)",
    "metaphor": {
      "title": "🧠 The Liver's 【CNS-Drug Metabolism Gate】 (Slow gate keeps drugs in the brain too long)",
      "story": "Efavirenz, methadone and bupropion must pass through the CYP2B6 gate to be cleared in an orderly way. When the gate opens slowly because of *6 or *18 variants, the drug stays in the blood and brain far longer, which can bring dizziness, insomnia, vivid dreams, mood changes or respiratory depression."
    },
    "plain_summary": "CYP2B6 metabolizes efavirenz, methadone and bupropion. Carriers of decreased-function alleles such as *6 or *18 clear these drugs more slowly, raising the risk of central-nervous-system toxicity or excessive drug exposure. Genetic testing, selecting an alternative antiretroviral, adjusting therapy and monitoring side effects can reduce adverse reactions.",
    "academic_summary": "CYP2B6 is located at 19q13.2 and encodes hepatic cytochrome P450 2B6, which oxidizes efavirenz, methadone, bupropion and cyclophosphamide. Decreased-function alleles CYP2B6*6 (rs3745274, c.516G>T) and *18 (rs28399499) reduce enzyme activity, increasing efavirenz exposure and CNS toxicity and altering methadone and bupropion concentrations."
  },
  "disease": {
    "chinese_name": "CYP2B6 Drug Adverse Reactions and CNS Metabolism (PGx)",
    "categories": ["Pharmacogenomics (PGx)", "Antiretroviral and CNS Drug Safety"],
    "inheritance_mode": "Autosomal Codominant Metabolic Phenotype",
    "severity_badge": "🟡 CNS Toxicity and Drug Exposure Alert (genotype-guided drug selection)"
  },
  "phenotypes": [
    { "hpo_id": "HP:0000739", "name": "Anxiety", "chinese_name": "Anxiety and CNS side-effect risk" },
    { "hpo_id": "HP:0001279", "name": "Syncope", "chinese_name": "Dizziness and balance disturbance" }
  ],
  "drugs_targeted": [
    { "drug_name": "Efavirenz", "chinese_name": "Efavirenz", "mechanism": "Non-nucleoside reverse transcriptase inhibitor cleared mainly by CYP2B6; slow metabolizers have higher exposure and CNS toxicity", "approval_status": "CPIC Level A actionable pharmacogene-drug pair" },
    { "drug_name": "Methadone / Bupropion", "chinese_name": "Methadone / Bupropion", "mechanism": "CNS-active drugs partly metabolized by CYP2B6; slow metabolizers may reach higher concentrations", "approval_status": "Use with clinical assessment and therapeutic drug monitoring" },
    { "drug_name": "Dolutegravir / Bictegravir", "chinese_name": "Dolutegravir / Bictegravir", "mechanism": "Integrase inhibitors not primarily dependent on CYP2B6; alternative antiretroviral options", "approval_status": "Standard antiretroviral prescription (clinical assessment)" }
  ],
  "pharmacogenomics": {
    "key_variant": "CYP2B6*6 (rs3745274, c.516G>T), CYP2B6*18 (rs28399499) and other decreased-function alleles",
    "population_frequency": "CYP2B6*6 is common in East Asian and European populations, while *18 is more frequent in African populations; both reduce enzyme activity (PMID:31006110)",
    "traffic_light_summary": "🔴 Genotype-guided selection and monitoring: CYP2B6 slow metabolizers have markedly higher efavirenz exposure and CNS toxicity, so high-risk exposure should be avoided or an integrase inhibitor used instead. Methadone and bupropion also require monitoring for sedation, respiratory depression, seizures or mood effects.",
    "drugs_guide": [
      { "drug_name": "Efavirenz", "chinese_name": "Efavirenz", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "CYP2B6 slow metabolizers have markedly increased efavirenz exposure and CNS toxicity (dizziness, insomnia, vivid dreams, mood changes); your doctor may reduce exposure, switch to an integrase inhibitor, and intensify side-effect monitoring.", "cpic_level": "CPIC Guideline for CYP2B6 and Efavirenz" },
      { "drug_name": "Methadone / Bupropion", "chinese_name": "Methadone / Bupropion", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "CYP2B6 slow metabolizers may have increased methadone exposure or higher bupropion concentrations; monitor for sedation, respiratory depression, seizures or mood effects and individualize therapy.", "cpic_level": "CPIC Guideline for CYP2B6 and Methadone / PharmGKB Bupropion" },
      { "drug_name": "Dolutegravir / Bictegravir", "chinese_name": "Dolutegravir / Bictegravir", "traffic_light": "GREEN_NORMAL", "clinical_alert": "These integrase inhibitors are not primarily cleared by CYP2B6 and are less sensitive to CYP2B6 genotype; they are alternative antiretroviral options after clinical assessment, with standard viral-load, liver and kidney monitoring.", "cpic_level": "DHHS Antiretroviral Guidance / Pharmacogenomics Consideration" }
    ],
    "dietary_contraindications": [
      "Avoid alcohol and sedative-hypnotics while taking efavirenz, as they worsen dizziness, drowsiness and impaired attention",
      "Report persistent dizziness, severe insomnia, vivid dreams or low mood rather than stopping or changing the drug on your own",
      "Seek emergency care for slow breathing, altered consciousness or seizures while using methadone or bupropion"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️ Clear CPIC Level A pharmacogenomic evidence",
    "clinvar_summary_chinese": "ClinVar and CPIC include CYP2B6*6 and *18 decreased-function variants associated with efavirenz CNS toxicity and methadone or bupropion exposure"
  },
  "lifestyle_prevention": {
    "screening_advice": "If you are starting efavirenz, methadone or bupropion, or have had unexplained CNS side effects, discuss CYP2B6 pharmacogenetic testing to guide antiretroviral selection and monitoring intensity.",
    "lifestyle_tips": [
      "Show your CYP2B6 result to your physician and pharmacist and discuss whether the antiretroviral or CNS drug should change",
      "Avoid alcohol and unapproved sedative-hypnotics during treatment",
      "Record dizziness, insomnia, vivid dreams, mood changes or slow breathing, and report them at follow-up"
    ]
  },
  "doctor_checklist": {
    "specialty": "Infectious Diseases / Psychiatry / Addiction Medicine / Clinical Pharmacy",
    "questions": [
      "My CYP2B6 test shows a slow-metabolizer genotype. Am I suitable for efavirenz, or should I switch to an integrase inhibitor?",
      "If I need methadone or bupropion, how will my genotype affect dosing and monitoring?",
      "What should I do and report if I develop dizziness, insomnia, vivid dreams or mood changes?"
    ]
  },
  "myth_buster": {
    "myth": "“Side effects of antiretrovirals and CNS drugs are just personal luck and have nothing to do with genetic testing.”",
    "truth": "Not true. CYP2B6 slow metabolism makes efavirenz and related drugs persist longer, markedly increasing CNS side effects and exposure. Genetic testing helps clinicians choose alternatives and tailor monitoring."
  }
};
