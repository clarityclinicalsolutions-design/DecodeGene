export default {
  "gene": {
    "chinese_name": "CYP3A5 Cytochrome P450 3A5 (Tacrolimus Metabolism Gene)",
    "chromosome": "7q22.1 (Chromosome 7)",
    "metaphor": {
      "title": "⚖️ The Liver’s 【Drug Metabolism Scale】(Expressers clear drugs fast, non-expressers clear them slowly—dosing must be precise)",
      "story": "After organ transplantation, patients must take tacrolimus long term to prevent immune rejection, but the drug has a narrow therapeutic window: too low, the organ may be rejected; too high, it may harm the kidneys and nerves. CYP3A5 is the enzyme in the liver and intestine that metabolizes tacrolimus. People carrying CYP3A5*1 (*1/*1 or *1/*3) are “expressers” who clear the drug quickly, so standard doses often fail to reach target levels. People with *3/*3 are “non-expressers” who clear it more slowly, so the same dose may be too high. Genotype-guided dosing plus blood level monitoring balances rejection prevention against toxicity."
    },
    "plain_summary": "CYP3A5 genotype affects how quickly tacrolimus is metabolized, with autosomal codominant inheritance. CYP3A5 expressers (*1/*1 or *1/*3) usually need higher doses to reach target blood levels, while non-expressers (*3/*3) may need lower doses. Actual dosing must be guided by therapeutic drug monitoring (TDM), transplant organ type, and physician instruction—never self-adjust the dose.",
    "academic_summary": "CYP3A5 encodes cytochrome P450 3A5, expressed in liver and small intestine, which oxidizes tacrolimus and many other drugs. CYP3A5*3 (rs776746) is a common splice defect that markedly reduces enzyme expression; carriers of at least one CYP3A5*1 allele are expressers with higher tacrolimus clearance and require higher starting doses to reach target trough concentrations. CPIC recommends genotype-guided tacrolimus starting doses with ongoing therapeutic drug monitoring and clinical adjustment to reduce acute rejection and nephrotoxicity."
  },
  "disease": {
    "chinese_name": "Drug-Related Side Effects and Adverse Reactions (Transplant Immunosuppression)",
    "categories": [
      "Pharmacogenomics (PGx)",
      "Transplant Immunosuppression",
      "Therapeutic Drug Monitoring"
    ],
    "inheritance_mode": "Autosomal Codominant",
    "severity_badge": "🟡 Transplant Medication Yellow Light (Genotype-Guided Tacrolimus Dosing and Blood Level Monitoring)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0000083",
      "name": "Renal insufficiency",
      "chinese_name": "Kidney impairment (tacrolimus nephrotoxicity risk)"
    },
    {
      "hpo_id": "HP:0000822",
      "name": "Hypertension",
      "chinese_name": "High blood pressure (immunosuppression-related)"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Tacrolimus",
      "chinese_name": "Tacrolimus (calcineurin inhibitor)",
      "mechanism": "Inhibits calcineurin and T-cell activation to prevent acute rejection after organ transplantation",
      "approval_status": "FDA / TFDA / NMPA approved (narrow therapeutic index; requires level monitoring)"
    }
  ],
  "pharmacogenomics": {
    "key_variant": "CYP3A5*3 (rs776746) primarily determines phenotype; *1/*1 and *1/*3 are expressers, *3/*3 are non-expressers",
    "population_frequency": "In East Asians, *3/*3 non-expressers account for about 50% to 60%, and expressers are more common than in people of European ancestry",
    "traffic_light_summary": "🟡 Tacrolimus has a narrow therapeutic window: CYP3A5 expressers (*1/*1 or *1/*3) usually need higher starting doses to reach target blood levels, while non-expressers (*3/*3) may need lower doses to avoid toxicity. Actual dosing and adjustments must follow blood level monitoring, transplant organ type, and physician guidance.",
    "drugs_guide": [
      {
        "drug_name": "Tacrolimus (CYP3A5 Expressers: *1/*1 or *1/*3)",
        "chinese_name": "Tacrolimus (CYP3A5 expressers *1/*1 or *1/*3)",
        "traffic_light": "YELLOW_CAUTION",
        "clinical_alert": "Compared with *3/*3 non-expressers, CYP3A5 expressers (*1/*1 or *1/*3) require customized target dosing and therapeutic drug monitoring (TDM) to prevent organ rejection; do not self-adjust the dose.",
        "cpic_level": "CPIC Guideline for CYP3A5 and Tacrolimus Level A"
      }
    ],
    "dietary_contraindications": [
      "Avoid large amounts of grapefruit, grapefruit juice, and St. John’s wort, which can alter tacrolimus blood levels",
      "Take the medication at consistent times and never stop it or add unregulated supplements on your own; check every new drug with the transplant team for interactions",
      "Keep follow-up visits for kidney function, potassium, glucose, and tacrolimus trough levels, and seek care promptly for tremor, reduced urine output, or fever"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ International CPIC Top-Tier Tacrolimus Pharmacogenomics Guideline",
    "clinvar_summary_chinese": "ClinVar lists common CYP3A5 star alleles and functional variants; genotype supports transplant starting-dose planning"
  },
  "lifestyle_prevention": {
    "screening_advice": "People preparing for organ transplantation or already taking tacrolimus may discuss CYP3A5 genetic testing with the transplant team as a reference for starting dose and monitoring frequency; adjustments must still be based on blood levels and clinical status.",
    "lifestyle_tips": [
      "Keep a medication and follow-up log, attend scheduled tacrolimus trough blood tests, and never reduce the dose because you feel well",
      "Watch for tremor, headache, reduced urine output, swelling, fever, or pain at the transplant site, and contact the transplant team immediately if they occur",
      "Maintain hand hygiene, avoid raw foods and contact with infected people, and receive vaccinations as advised to reduce infection risk"
    ]
  },
  "doctor_checklist": {
    "specialty": "Transplant Surgery / Nephrology / Clinical Pharmacy",
    "questions": [
      "Doctor, is my CYP3A5 genotype an expresser or non-expresser, and how does that affect my tacrolimus starting dose and target level?",
      "Is my current tacrolimus trough level within target? How often should kidney function, potassium, and glucose be monitored?",
      "Could any of my other medications or supplements interact with tacrolimus and affect its level?"
    ]
  },
  "myth_buster": {
    "myth": "“After a transplant, I just need to take tacrolimus on time; genetic testing and blood level monitoring are unnecessary expenses?”",
    "truth": "Wrong! Tacrolimus has a narrow therapeutic window, and CYP3A5 genotype significantly affects metabolism. Without genotype information and level monitoring, underdosing can cause rejection, while overdosing can cause kidney and nerve toxicity. Genetic testing combined with regular TDM is the safe way to protect the transplanted organ."
  }
}
