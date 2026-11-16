export default {
  "gene": {
    "chinese_name": "APOB Apolipoprotein B (Familial Hypercholesterolemia Gene)",
    "chromosome": "2p24.1 (Chromosome 2)",
    "metaphor": {
      "title": "🚚 The 【Bad Cholesterol Delivery Truck】 in the Bloodstream (When broken, the liver cannot clear LDL and cholesterol keeps rising)",
      "story": "LDL cholesterol is like cargo in the bloodstream, and APOB is the identification tag on the truck that lets hepatic LDL receptors recognize and clear bad cholesterol. When APOB is defective from birth, the tag is wrong, the liver cannot clear LDL effectively, and bad cholesterol is high from a young age. Cholesterol deposits in the coronary arteries and aorta, increasing the risk of premature myocardial infarction and aortic valve disease. Genetic testing, statins and ezetimibe, and PCSK9 inhibitors when needed can bring LDL under control."
    },
    "plain_summary": "APOB deficiency causes familial apolipoprotein B-100 defect hypercholesterolemia, an autosomal dominant condition. Patients may have high LDL cholesterol from a young age, with cholesterol deposits in blood vessels and tendons, increasing the risk of premature coronary artery disease, aortic valve disease, and myocardial infarction. Genetic testing, statins and ezetimibe, PCSK9 inhibitors, and lifestyle changes effectively lower LDL and cardiovascular risk.",
    "academic_summary": "APOB encodes apolipoprotein B-100, the main structural protein of LDL, VLDL, and IDL particles and the ligand recognized by the LDL receptor. Germline pathogenic variants (such as p.Arg3500Gln) cause familial hypercholesterolemia (FH) by reducing LDL receptor-mediated clearance and raising LDL cholesterol from a young age. APOB-related FH is associated with premature coronary artery disease, aortic valve calcification, and myocardial infarction, requiring long-term lipid management and family screening."
  },
  "disease": {
    "chinese_name": "Familial Apolipoprotein B-100 Defect Hypercholesterolemia",
    "categories": [
      "Autosomal Dominant Lipid Disorder",
      "Familial Hypercholesterolemia",
      "Premature Cardiovascular Disease Risk"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "🟡 Inherited Hypercholesterolemia (Long-Term Lipid-Lowering Therapy Greatly Reduces Cardiovascular Risk)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0003124",
      "name": "Hypercholesterolemia",
      "chinese_name": "High blood cholesterol"
    },
    {
      "hpo_id": "HP:0001635",
      "name": "Congestive heart failure",
      "chinese_name": "Premature coronary artery disease risk"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Statins & Ezetimibe",
      "chinese_name": "Statins and ezetimibe lipid-lowering therapy",
      "mechanism": "Reduces cholesterol synthesis and intestinal cholesterol absorption, increasing hepatic LDL receptor clearance of bad cholesterol",
      "approval_status": "FDA / TFDA / NMPA approved (first-line lipid-lowering therapy for FH)"
    },
    {
      "drug_name": "PCSK9 inhibitors (Evolocumab / Alirocumab)",
      "chinese_name": "PCSK9 inhibitors (evolocumab / alirocumab)",
      "mechanism": "Prevents PCSK9-mediated degradation of LDL receptors, increasing hepatic LDL clearance",
      "approval_status": "FDA / TFDA / NMPA approved (adjunct targeted therapy for refractory hypercholesterolemia)"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": true,
    "key_variant": "APOB pathogenic variants (such as p.Arg3500Gln and p.Arg3500Trp causing defective LDL receptor binding)",
    "population_frequency": "Familial hypercholesterolemia affects about 1 in 250 people; APOB-related cases account for about 5% to 10% of FH",
    "summary": "APOB-related familial hypercholesterolemia is treated first with statins and ezetimibe, adding PCSK9 inhibitors when needed; treatment choice and LDL targets should be individualized by cardiovascular risk and physician guidance.",
    "traffic_light_summary": "🟢 First-line therapy is a statin plus ezetimibe; if LDL remains above target or hypercholesterolemia is refractory, a PCSK9 inhibitor may be added as directed. 🟡 Some high-dose steroids or specific immunosuppressants can raise cholesterol, so frequent lipid monitoring is needed when they are used.",
    "practical_guidance": "People with familial hypercholesterolemia should discuss LDL targets and medication choices with cardiology or metabolism specialists, and have regular lipid and liver function monitoring. Do not stop lipid-lowering medication on your own, and tell the doctor about all medications and supplements you use.",
    "drugs_guide": [
      {
        "drug_name": "Statins & Ezetimibe",
        "chinese_name": "Statins and ezetimibe lipid-lowering therapy",
        "traffic_light": "GREEN_NORMAL",
        "clinical_alert": "First-line intensive lipid-lowering therapy for FH; statins inhibit cholesterol synthesis and ezetimibe reduces intestinal absorption, and combining them lowers LDL further.",
        "cpic_level": "International FH Management Guideline (Statins/Ezetimibe First-Line)"
      },
      {
        "drug_name": "PCSK9 inhibitors (Evolocumab / Alirocumab)",
        "chinese_name": "PCSK9 inhibitors (evolocumab / alirocumab)",
        "traffic_light": "GREEN_NORMAL",
        "clinical_alert": "Adjunct targeted therapy for refractory hypercholesterolemia or when statins do not reach target; it significantly lowers LDL, and lipids should be monitored before and during use as directed.",
        "cpic_level": "International FH Management Guideline (PCSK9 Inhibitor Adjunct Therapy)"
      },
      {
        "drug_name": "Cholesterol-raising medications (selected high-dose steroids or immunosuppressants)",
        "chinese_name": "Cholesterol-raising medications (some high-dose steroids or specific immunosuppressants)",
        "traffic_light": "YELLOW_CAUTION",
        "clinical_alert": "These may raise lipid levels; if they are necessary in FH, monitor lipids frequently and discuss lipid-lowering adjustments with cardiology or metabolism specialists.",
        "cpic_level": "Clinical Lipid Monitoring Recommendation"
      }
    ],
    "dietary_contraindications": [
      "Reduce saturated and trans fat intake, and increase vegetables, whole grains, and soluble fiber",
      "Exercise regularly, control weight, and stop smoking to reduce cardiovascular risk",
      "Monitor lipids and liver function regularly, and do not stop lipid-lowering medication on your own"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ International Familial Hypercholesterolemia Care and Genetics Guideline",
    "clinvar_summary_chinese": "ClinVar lists multiple pathogenic and likely pathogenic APOB variants; genetic testing supports diagnosis and family screening",
    "key_pmids": [
      "PMID:2569116",
      "PMID:34040190"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "People with premature myocardial infarction, markedly elevated LDL cholesterol, tendon xanthomas, or a family history should have lipid testing and genetic counseling; first-degree relatives should have lipid screening and, when indicated, APOB and LDLR genetic testing.",
    "lifestyle_tips": [
      "Follow a Mediterranean-style diet, reduce saturated fat and processed foods, and increase soluble fiber",
      "Exercise regularly, control weight, and stop smoking while continuing lipid-lowering therapy as prescribed",
      "Monitor lipids, liver function, and cardiovascular risk regularly, and seek care promptly for chest pain or breathlessness"
    ]
  },
  "doctor_checklist": {
    "specialty": "Cardiology / Metabolism / Genetic Counseling",
    "questions": [
      "Doctor, my LDL cholesterol has been high since a young age—should I have APOB genetic testing for familial hypercholesterolemia?",
      "What is my LDL target? How should statins, ezetimibe, or PCSK9 inhibitors be selected and monitored?",
      "Should my siblings and children have lipid screening and genetic counseling?"
    ]
  },
  "myth_buster": {
    "myth": "“High cholesterol is just from eating too much fat, and cutting fat will bring it back to normal without medication?”",
    "truth": "Wrong! Familial hypercholesterolemia is often caused by APOB, LDLR, and other gene variants, and diet alone is usually not enough to reach target. Patients need long-term lipid-lowering medication and regular lipid monitoring to reduce premature myocardial infarction and aortic valve disease risk."
  }
}
