export default {
  "gene": {
    "chinese_name": "CACNA1S Skeletal Muscle Calcium Channel α1S Subunit (Malignant Hyperthermia Gene)",
    "chromosome": "1q32.1 (Chromosome 1)",
    "metaphor": {
      "title": "⚡ The Skeletal Muscle 【Calcium Gate】(Certain Anesthetics Jam It Wide Open)",
      "story": "Muscle contraction requires calcium, and CACNA1S is the calcium channel gate on the skeletal muscle cell membrane that converts electrical signals into calcium influx. Normally the gate opens and closes precisely so muscles contract and relax on command. In people with pathogenic variants, exposure to volatile inhaled anesthetics or succinylcholine can jam the gate open, flooding cells with calcium. Muscles contract continuously, body temperature rises rapidly, and acidosis, rhabdomyolysis, and hyperkalemia follow. This is an anesthetic emergency: trigger drugs must be stopped immediately and dantrolene given."
    },
    "plain_summary": "CACNA1S pathogenic variants can cause malignant hyperthermia susceptibility, an autosomal dominant condition, and may also be associated with hypokalemic periodic paralysis. When exposed to volatile inhaled anesthetics (such as sevoflurane, desflurane, or isoflurane) or succinylcholine, patients may develop life-threatening hyperthermia, muscle rigidity, rhabdomyolysis, and hyperkalemia. Telling the anesthesia team about family history and genetic results, avoiding trigger drugs, and having dantrolene available are essential for surgical safety.",
    "academic_summary": "CACNA1S encodes the α1S subunit (Cav1.1) of the skeletal muscle L-type voltage-sensitive calcium channel, located in T-tubules and functionally coupled to ryanodine receptor 1. Pathogenic variants can abnormally activate the channel under volatile anesthetics or depolarizing muscle relaxants, causing massive sarcoplasmic reticulum calcium release, sustained muscle contraction, heat production, and a metabolic storm. CACNA1S and RYR1 are the major malignant hyperthermia susceptibility genes, and some variants are also linked to hypokalemic periodic paralysis."
  },
  "disease": {
    "chinese_name": "Malignant Hyperthermia Susceptibility and Hypokalemic Periodic Paralysis",
    "categories": [
      "Pharmacogenomics (PGx)",
      "Anesthesia Safety",
      "Skeletal Muscle Channelopathy"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "🔴 Anesthesia Safety Red Light (Avoid Volatile Inhaled Anesthetics and Succinylcholine)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0002047",
      "name": "Malignant hyperthermia",
      "chinese_name": "Dangerously high body temperature during anesthesia"
    },
    {
      "hpo_id": "HP:0001324",
      "name": "Muscle weakness",
      "chinese_name": "Muscle weakness"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Non-triggering anesthetics (Propofol / Remifentanil / Rocuronium)",
      "chinese_name": "Non-triggering anesthetics (propofol / remifentanil / rocuronium)",
      "mechanism": "Anesthetic and muscle relaxation approach that does not activate the skeletal muscle calcium channel, providing a safe alternative for susceptible patients",
      "approval_status": "FDA / TFDA / NMPA approved (safe anesthesia alternative)"
    },
    {
      "drug_name": "Dantrolene",
      "chinese_name": "Dantrolene (malignant hyperthermia antidote)",
      "mechanism": "Inhibits calcium release from the skeletal muscle sarcoplasmic reticulum ryanodine receptor, stopping sustained contraction and the metabolic storm",
      "approval_status": "FDA / TFDA / NMPA approved (first-line emergency treatment for malignant hyperthermia)"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": true,
    "key_variant": "CACNA1S pathogenic variants (malignant hyperthermia susceptibility and hypokalemic periodic paralysis related)",
    "population_frequency": "Overall carrier frequency of malignant hyperthermia susceptibility is estimated at roughly one in several thousand and varies by ancestry and variant",
    "summary": "CACNA1S-susceptible patients must avoid volatile inhaled anesthetics and succinylcholine; surgery should use a non-triggering anesthetic plan with dantrolene available.",
    "traffic_light_summary": "🔴 Volatile inhaled anesthetics (sevoflurane / desflurane / isoflurane) and succinylcholine must be strictly avoided to prevent malignant hyperthermia. 🟢 Non-triggering anesthetics (propofol / remifentanil / rocuronium) are a safe alternative anesthesia plan, still subject to anesthesia team assessment.",
    "practical_guidance": "Before every surgery, dental procedure, or sedated examination, tell the anesthesia team about family history and genetic test results, confirm a non-triggering anesthetic plan, and ensure dantrolene and an emergency protocol are available. Monitor temperature, electrolytes, and acid-base status throughout.",
    "drugs_guide": [
      {
        "drug_name": "Volatile inhalation anesthetics (Sevoflurane / Desflurane / Isoflurane)",
        "chinese_name": "Volatile inhaled anesthetics (sevoflurane / desflurane / isoflurane)",
        "traffic_light": "RED_AVOID",
        "clinical_alert": "Must be strictly avoided; they can trigger life-threatening malignant hyperthermia, and CACNA1S-susceptible patients should use a non-triggering anesthetic plan.",
        "cpic_level": "CPIC Malignant Hyperthermia and Inhaled Anesthetics Guideline (High Risk)"
      },
      {
        "drug_name": "Succinylcholine",
        "chinese_name": "Succinylcholine (depolarizing neuromuscular blocker)",
        "traffic_light": "RED_AVOID",
        "clinical_alert": "Must be strictly avoided; it can trigger malignant hyperthermia and severe hyperkalemia, and the anesthesia team should choose a nondepolarizing muscle relaxant instead.",
        "cpic_level": "CPIC Malignant Hyperthermia and Inhaled Anesthetics Guideline (High Risk)"
      },
      {
        "drug_name": "Non-triggering anesthetics (Propofol / Remifentanil / Rocuronium)",
        "chinese_name": "Non-triggering anesthetics (propofol / remifentanil / rocuronium)",
        "traffic_light": "GREEN_NORMAL",
        "clinical_alert": "A safe alternative anesthesia plan that does not activate the pathogenic calcium channel; the anesthesia team must still monitor temperature, electrolytes, and vital signs throughout.",
        "cpic_level": "CPIC Malignant Hyperthermia and Inhaled Anesthetics Guideline (Safe Alternative)"
      }
    ],
    "dietary_contraindications": [
      "No specific dietary restriction, but avoid strenuous exercise in hot environments, dehydration, and excessive stimulants to reduce muscle metabolic strain",
      "Before surgery, dental treatment, or sedated procedures, show the malignant hyperthermia anesthesia safety card and confirm dantrolene availability",
      "Seek urgent care for unexplained high body temperature, muscle rigidity, or dark urine, and report anesthesia and genetic history"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ International CPIC Anesthesia Pharmacogenomics Guideline",
    "clinvar_summary_chinese": "ClinVar lists multiple CACNA1S variants related to malignant hyperthermia and hypokalemic periodic paralysis; genetic testing supports pre-anesthesia risk assessment",
    "key_pmids": [
      "PMID:20301479",
      "PMID:37347242"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "People with a family history of malignant hyperthermia, unexplained high temperature or muscle rigidity during anesthesia, or recurrent muscle weakness should have CACNA1S and RYR1 genetic testing and anesthesia evaluation; first-degree relatives should receive genetic counseling.",
    "lifestyle_tips": [
      "Carry a malignant hyperthermia susceptibility medical alert card, and tell the anesthesia team before every anesthetic",
      "Avoid strenuous exercise in hot environments, dehydration, and excessive caffeine or stimulants; seek early care for muscle pain or dark urine",
      "Plan a non-triggering anesthetic approach with the anesthesia team in advance, and confirm that dantrolene and an emergency protocol are available"
    ]
  },
  "doctor_checklist": {
    "specialty": "Anesthesiology / Genetic Counseling / Neuromuscular Clinic",
    "questions": [
      "Doctor, I have a family history of malignant hyperthermia or a CACNA1S variant—can this surgery completely avoid volatile inhaled anesthetics and succinylcholine?",
      "Does the hospital have dantrolene and a malignant hyperthermia emergency protocol? How will temperature, potassium, and acid-base status be monitored during anesthesia?",
      "Should my siblings and children also have CACNA1S and RYR1 genetic testing and pre-anesthesia evaluation?"
    ]
  },
  "myth_buster": {
    "myth": "“Malignant hyperthermia is just a little high temperature during anesthesia; a fever pill or ice pack will fix it?”",
    "truth": "That is extremely dangerous! Malignant hyperthermia is a life-threatening anesthetic emergency with rapidly rising temperature, muscle rigidity, acidosis, rhabdomyolysis, and hyperkalemia. It requires immediate discontinuation of trigger drugs, dantrolene, aggressive cooling, and electrolyte correction—not ordinary fever treatment."
  }
}
