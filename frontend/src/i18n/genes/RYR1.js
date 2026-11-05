export default {
  "gene": {
    "chinese_name": "RYR1 Skeletal Muscle Ryanodine Receptor 1 (Malignant Hyperthermia Gene)",
    "chromosome": "19q13.2 (Chromosome 19)",
    "metaphor": {
      "title": "⚡ The Skeletal Muscle 【Calcium Reservoir Gate】(Certain anesthetics make it dump calcium uncontrollably)",
      "story": "Muscle contraction requires calcium, and RYR1 is the gate of the calcium reservoir on the muscle cell’s sarcoplasmic reticulum. Normally it opens and closes precisely so muscles contract and relax on command. In people with pathogenic variants, exposure to volatile inhaled anesthetics or succinylcholine can jam the gate open, flooding cells with calcium. Muscles contract continuously, body temperature rises rapidly, and heart rate, acidosis, and rhabdomyolysis follow. This is an anesthetic emergency: the trigger drugs must be stopped immediately and dantrolene given as the antidote."
    },
    "plain_summary": "RYR1 pathogenic variants cause malignant hyperthermia susceptibility, an autosomal dominant condition. When exposed to volatile inhaled anesthetics (such as sevoflurane, desflurane, isoflurane, or halothane) or succinylcholine, patients may develop life-threatening hyperthermia, muscle rigidity, rhabdomyolysis, and hyperkalemia. Telling the anesthesia team about family history and genetic results, using total intravenous anesthesia, and having dantrolene available are essential for surgical safety.",
    "academic_summary": "RYR1 encodes the skeletal muscle ryanodine receptor type 1 on the sarcoplasmic reticulum, which converts action potentials into calcium release. Pathogenic variants (such as p.Arg614Cys and p.Gly2435Ala) cause the channel to open excessively when triggered by volatile anesthetics or succinylcholine, producing massive sarcoplasmic calcium efflux, sustained muscle contraction, explosive aerobic and anaerobic metabolism, rapid hyperthermia, respiratory and metabolic acidosis, rhabdomyolysis, hyperkalemia, and arrhythmia. Variants in RYR1 and CACNA1S can both cause malignant hyperthermia susceptibility."
  },
  "disease": {
    "chinese_name": "Malignant Hyperthermia Susceptibility / Anesthesia-Related Muscle Metabolic Crisis",
    "categories": [
      "Pharmacogenomics (PGx)",
      "Anesthesia Safety",
      "Neuromuscular Disorder"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "🔴 Anesthesia Safety Red Light (Avoid Volatile Anesthetics and Succinylcholine)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0002047",
      "name": "Malignant hyperthermia",
      "chinese_name": "Dangerously high body temperature during anesthesia"
    },
    {
      "hpo_id": "HP:0003201",
      "name": "Rhabdomyolysis",
      "chinese_name": "Muscle breakdown"
    },
    {
      "hpo_id": "HP:0002153",
      "name": "Hyperkalemia",
      "chinese_name": "High blood potassium"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Dantrolene",
      "chinese_name": "Dantrolene (malignant hyperthermia antidote)",
      "mechanism": "Inhibits ryanodine receptor calcium release from skeletal muscle sarcoplasmic reticulum, stopping excessive contraction and the metabolic storm",
      "approval_status": "FDA / TFDA / NMPA approved (first-line emergency treatment)"
    },
    {
      "drug_name": "Propofol (Total Intravenous Anesthesia)",
      "chinese_name": "Propofol (total intravenous anesthesia, TIVA)",
      "mechanism": "Intravenous anesthetic that does not trigger RYR1 calcium release, providing an alternative for susceptible patients",
      "approval_status": "FDA / TFDA / NMPA approved"
    }
  ],
  "pharmacogenomics": {
    "key_variant": "RYR1 pathogenic variants (such as c.1840C>T p.Arg614Cys and c.7300G>A p.Gly2435Ala) and CACNA1S variants",
    "population_frequency": "Estimated carrier frequency about 1 in 2,000 to 1 in 3,000; penetrance varies with variant and environmental triggers",
    "traffic_light_summary": "🔴 Before any anesthesia, tell the team about family history and genetic results: avoid volatile inhaled anesthetics and succinylcholine. If surgery is needed, choose total intravenous anesthesia (TIVA) and confirm that dantrolene is available.",
    "drugs_guide": [
      {
        "drug_name": "Volatile Inhaled Anesthetics (Sevoflurane, Desflurane, Isoflurane, Halothane)",
        "chinese_name": "Volatile inhaled anesthetics (sevoflurane, desflurane, isoflurane, halothane)",
        "traffic_light": "RED_AVOID",
        "clinical_alert": "CPIC lists these as high-risk malignant hyperthermia triggers; people susceptible through RYR1/CACNA1S must avoid them and use total intravenous anesthesia instead.",
        "cpic_level": "CPIC Guideline for RYR1/CACNA1S and Volatile Anesthetics Level A"
      },
      {
        "drug_name": "Depolarizing Muscle Relaxants (Succinylcholine)",
        "chinese_name": "Depolarizing muscle relaxant (succinylcholine)",
        "traffic_light": "RED_AVOID",
        "clinical_alert": "Succinylcholine can trigger malignant hyperthermia and severe hyperkalemia; susceptible patients should receive a nondepolarizing relaxant after anesthesia team assessment.",
        "cpic_level": "CPIC Guideline for RYR1/CACNA1S and Volatile Anesthetics Level A"
      },
      {
        "drug_name": "Dantrolene (Antidote)",
        "chinese_name": "Dantrolene (malignant hyperthermia antidote)",
        "traffic_light": "GREEN_NORMAL",
        "clinical_alert": "The life-saving antidote for a malignant hyperthermia crisis; before surgery in susceptible patients, confirm that dantrolene and an emergency protocol are available.",
        "cpic_level": "CPIC Guideline for RYR1/CACNA1S and Volatile Anesthetics Level A"
      },
      {
        "drug_name": "Total Intravenous Anesthesia (Propofol)",
        "chinese_name": "Total intravenous anesthesia (propofol)",
        "traffic_light": "GREEN_NORMAL",
        "clinical_alert": "TIVA avoids volatile gases and is the recommended anesthetic approach for RYR1-susceptible patients; the anesthesia team must still monitor temperature, electrolytes, and acid-base status throughout.",
        "cpic_level": "CPIC Guideline for RYR1/CACNA1S and Volatile Anesthetics Level A"
      }
    ],
    "dietary_contraindications": [
      "No specific dietary restrictions, but avoid unassessed strenuous exercise, dehydration, alcohol, and stimulants to reduce rhabdomyolysis triggers",
      "Before surgery, dental treatment, or sedated procedures, show the Malignant Hyperthermia Anesthesia Safety Card and confirm that dantrolene is available"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ International CPIC Top-Tier Anesthesia Pharmacogenomics Guideline",
    "clinvar_summary_chinese": "ClinVar lists multiple RYR1 and CACNA1S malignant hyperthermia variants; genetic testing supports pre-anesthesia risk assessment"
  },
  "lifestyle_prevention": {
    "screening_advice": "People with a family history of malignant hyperthermia or unexplained high temperature or muscle rigidity during anesthesia should have RYR1/CACNA1S genetic testing and anesthesia evaluation; first-degree relatives should receive genetic counseling.",
    "lifestyle_tips": [
      "Carry a malignant hyperthermia susceptibility medical alert card and tell the anesthesia team before every surgery, dental extraction, or endoscopy",
      "Avoid strenuous exercise in hot environments, dehydration, and stimulants; seek urgent care for severe muscle pain, weakness, or dark urine",
      "Plan anesthesia in advance with the anesthesia team, confirming total intravenous anesthesia and available dantrolene"
    ]
  },
  "doctor_checklist": {
    "specialty": "Anesthesiology / Genetic Counseling / Neuromuscular Clinic",
    "questions": [
      "Doctor, I have a family history of malignant hyperthermia (or an RYR1 variant)—can this surgery completely avoid volatile inhaled anesthetics and succinylcholine?",
      "Does the hospital have dantrolene and a malignant hyperthermia emergency protocol? How will temperature, potassium, and acid-base status be monitored during anesthesia?",
      "Should my siblings and children also have RYR1/CACNA1S genetic testing and pre-anesthesia evaluation?"
    ]
  },
  "myth_buster": {
    "myth": "“Malignant hyperthermia is just a little high temperature during anesthesia; a fever pill or ice pack will fix it?”",
    "truth": "That is extremely dangerous! Malignant hyperthermia is a life-threatening anesthetic emergency with rapidly rising temperature, muscle rigidity, acidosis, rhabdomyolysis, and hyperkalemia. It requires immediate discontinuation of trigger drugs, dantrolene, aggressive cooling, and electrolyte correction—not ordinary fever treatment."
  }
}
