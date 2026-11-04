export default {
  "gene": {
    "chinese_name": "Aldehyde Dehydrogenase 2 (Alcohol Detox & Nitroglycerin)",
    "chromosome": "12q24.12 (Chromosome 12)",
    "metaphor": {
      "title": "🍷 The Liver’s 【Alcohol Detox Worker #2】",
      "story": "Two liver enzymes detoxify alcohol in relay: Worker #1 (ADH1B) turns ethanol into toxic carcinogen acetaldehyde, and Worker #2 (ALDH2) converts acetaldehyde into harmless acetic acid (vinegar). About 30%–47% of East Asians carry ALDH2*2—meaning Worker #2 is on strike! Drinking causes toxic acetaldehyde to flood blood vessels (facial flushing and rapid pulse). Worse still, the emergency angina drug Nitroglycerin relies on Worker #2 to release nitric oxide—so sublingual nitroglycerin can fail!"
    },
    "plain_summary": "ALDH2 clears toxic acetaldehyde after drinking alcohol and bioactivates the emergency angina drug Nitroglycerin. Carriers of ALDH2*2 (rs671) flush when drinking, face a 6–12x higher esophageal cancer risk if they drink, and may experience failure of sublingual nitroglycerin during acute angina!",
    "academic_summary": "ALDH2 encodes mitochondrial aldehyde dehydrogenase and bioactivates nitroglycerin into nitric oxide (NO). East Asian missense variant rs671 (c.1510G>A, p.Glu504Lys, ALDH2*2) acts dominant-negatively, reducing heterozygote activity to 10%–20% and abolishing homozygote activity."
  },
  "disease": {
    "chinese_name": "Acute Alcohol Sensitivity / ALDH2 Deficiency & Nitroglycerin Failure Risk",
    "categories": [
      "Pharmacogenomics (PGx)",
      "Metabolic Trait",
      "Cancer Susceptibility"
    ],
    "inheritance_mode": "Autosomal Dominant-Negative",
    "severity_badge": "🔴 Critical PGx Red Light (Nitroglycerin Failure & Alcohol Risk)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0025537",
      "name": "Alcohol flush reaction",
      "chinese_name": "Alcohol flush reaction"
    },
    {
      "hpo_id": "HP:0001649",
      "name": "Tachycardia",
      "chinese_name": "Post-alcohol tachycardia"
    },
    {
      "hpo_id": "HP:0011459",
      "name": "Esophageal squamous cell carcinoma",
      "chinese_name": "Esophageal squamous cell carcinoma"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Nitroglycerin",
      "chinese_name": "Nitroglycerin (Requires ALDH2)",
      "mechanism": "Converted via mitochondrial ALDH2 into nitric oxide (NO) to dilate coronary arteries",
      "approval_status": "FDA / TFDA / NMPA Approved"
    }
  ],
  "pharmacogenomics": {
    "key_variant": "ALDH2*2 (rs671, c.1510G>A, p.Glu504Lys)",
    "population_frequency": "30%–47% carrier frequency in East Asians",
    "traffic_light_summary": "🔴 Red Alert: Emergency angina drug Nitroglycerin requires ALDH2 bioactivation—sublingual nitroglycerin may fail in carriers! Strictly avoid alcohol (esophageal cancer risk rises 6–12x).",
    "drugs_guide": [
      {
        "drug_name": "Nitroglycerin (Sublingual)",
        "chinese_name": "Nitroglycerin Sublingual Tablets / Spray",
        "traffic_light": "RED_AVOID",
        "clinical_alert": "ALDH2*2 (rs671) carriers lack mitochondrial nitrate reductase activity, causing high failure rates for sublingual nitroglycerin during acute angina. Consult a cardiologist for non-ALDH2-dependent emergency alternatives.",
        "cpic_level": "PharmGKB Level 1A / Clinical PGx Consensus"
      },
      {
        "drug_name": "Ethanol (Alcohol)",
        "chinese_name": "Ethanol (Alcohol & Ethanol Tinctures)",
        "traffic_light": "RED_AVOID",
        "clinical_alert": "Avoid alcohol consumption and never combine ethanol-containing medications with cephalosporins.",
        "cpic_level": "WHO / IARC Group 1 Carcinogen Warning"
      }
    ],
    "dietary_contraindications": [
      "Lifelong alcohol avoidance (beer, spirits, wine, and medicinal liquors all cause Group 1 carcinogen acetaldehyde accumulation)",
      "Avoid scalding-hot food and drinks (>65°C thermal injury synergizes with acetaldehyde to multiply esophageal cancer risk)"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ East Asian Emergency PGx & Cancer Prevention Consensus",
    "clinvar_summary_chinese": "rs671 is the established causal variant for alcohol flushing and nitroglycerin resistance"
  },
  "lifestyle_prevention": {
    "screening_advice": "Carriers with a history of drinking should undergo regular upper GI endoscopy starting at age 40; patients with coronary risk should prepare non-nitroglycerin emergency plans.",
    "lifestyle_tips": [
      "[Life-Saving Tip] If you or your parents flush when drinking alcohol, check the family first-aid kit: sublingual nitroglycerin may fail during angina—ask a cardiologist for an alternative emergency medication",
      "Refuse social pressure to drink and share that “alcohol flushing is acetaldehyde poisoning, not good circulation”",
      "Maintain good oral hygiene (oral bacteria also convert trace alcohol into acetaldehyde)"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Gastroenterology / Clinical Pharmacy",
    "questions": [
      "Doctor, I carry the ALDH2*2 (rs671) variant and flush when drinking. If I have acute angina, could sublingual nitroglycerin fail, and what emergency alternative should I carry?",
      "Given my past drinking history, should I schedule an upper GI endoscopy with NBI to screen my esophagus?",
      "Which over-the-counter cold liquids or herbal tinctures contain ethanol that I should avoid?"
    ]
  },
  "myth_buster": {
    "myth": "“Does blushing after drinking mean you have great blood circulation, and can you train your alcohol tolerance by drinking more?”",
    "truth": "Completely false! Alcohol flushing is your body’s red alert for toxic acetaldehyde poisoning. ALDH2 deficiency is genetic and cannot be trained away. Apparent tolerance only means you are numb to dizziness while acetaldehyde silently damages your esophagus and blood vessels!"
  }
};
