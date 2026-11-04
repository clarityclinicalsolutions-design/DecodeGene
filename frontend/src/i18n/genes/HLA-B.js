export default {
  "gene": {
    "chinese_name": "Major Histocompatibility Complex, Class I, B (Severe Cutaneous Adverse Reaction Gene)",
    "chromosome": "6p21.33 (Chromosome 6p)",
    "metaphor": {
      "title": "🚨 The Immune System's 【Hypersensitive Drug Radar Sentinel】",
      "story": "HLA-B is a sentinel protein on cell surfaces that presents antigens to immune T cells. However, in carriers of specific HLA-B alleles, the sentinel's radar makes a catastrophic miscalculation: when an HLA-B*15:02 carrier takes the antiseizure/neuralgia drug Carbamazepine, or an HLA-B*58:01 carrier takes the gout medication Allopurinol, the drug locks into the HLA-B groove and triggers killer T cells to attack the body's own skin and mucous membranes—causing life-threatening Stevens-Johnson syndrome (SJS) or toxic epidermal necrolysis (TEN)."
    },
    "plain_summary": "HLA-B*15:02 and HLA-B*58:01 are the most critical pharmacogenetic safety markers in Taiwan and East Asia for preventing fatal severe cutaneous adverse reactions (SCAR). HLA-B*15:02 carriers must avoid Carbamazepine, Oxcarbazepine, and Phenytoin; HLA-B*58:01 carriers must avoid Allopurinol.",
    "academic_summary": "HLA-B encodes the MHC class I heavy chain. HLA-B*15:02 binds aromatic anticonvulsants (carbamazepine, oxcarbazepine, phenytoin) non-covalently to activate cytotoxic CD8+ T cells and granulysin release, triggering SJS/TEN. HLA-B*58:01 binds allopurinol and oxypurinol, inducing SJS/TEN and drug reaction with eosinophilia and systemic symptoms (DRESS)."
  },
  "disease": {
    "chinese_name": "Severe Cutaneous Adverse Reactions — SJS / TEN / DRESS (HLA-B PGx)",
    "categories": ["Pharmacogenomics (PGx)", "Taiwan Precision Medicine Contraindication", "Severe Drug Hypersensitivity"],
    "inheritance_mode": "Autosomal Codominant HLA Allele Susceptibility",
    "severity_badge": "🔴 Absolute Drug Contraindication Red Light (Pre-Prescription Screening Saves Lives)"
  },
  "phenotypes": [
    { "hpo_id": "HP:0008066", "name": "Abnormal blistering of the skin", "chinese_name": "Generalized skin blistering and epidermal detachment (SJS/TEN)" },
    { "hpo_id": "HP:0200097", "name": "Oral mucosal blisters", "chinese_name": "Oral, ocular, and genital mucosal blistering and erosion" },
    { "hpo_id": "HP:0040186", "name": "Maculopapular exanthema", "chinese_name": "Drug-induced maculopapular exanthema" },
    { "hpo_id": "HP:0001945", "name": "Fever", "chinese_name": "Acute prodromal fever and malaise after drug exposure" }
  ],
  "drugs_targeted": [
    { "drug_name": "Carbamazepine / Oxcarbazepine / Phenytoin (Contraindicated in HLA-B*15:02)", "chinese_name": "Carbamazepine (Tegretol) / Oxcarbazepine / Phenytoin", "mechanism": "Aromatic anticonvulsants that bind HLA-B*15:02 and trigger cytotoxic T-cell SJS/TEN", "approval_status": "CPIC Level A / FDA Boxed Warning / Taiwan NHI Pre-Test (PMID:21428768)" },
    { "drug_name": "Allopurinol (Contraindicated in HLA-B*58:01)", "chinese_name": "Allopurinol (Zyloric)", "mechanism": "Xanthine oxidase inhibitor urate-lowering drug that binds HLA-B*58:01 to trigger SCAR", "approval_status": "CPIC Level A / Taiwan National Cohort Evidence (PMID:26399967)" }
  ],
  "pharmacogenomics": {
    "key_variant": "HLA-B*15:02 (HLA-B*1502), HLA-B*58:01 (HLA-B*5801)",
    "population_frequency": "In Taiwan and Han Chinese populations, HLA-B*15:02 carrier frequency is ~7%–8% (15%+ in parts of Southeast Asia) (PMID:15057820, PMID:21428768); HLA-B*58:01 carrier frequency in Taiwan Han Chinese is ~15%–20% (PMID:15743917, PMID:26399967)",
    "traffic_light_summary": "🔴 Dual Absolute Contraindications: ① HLA-B*15:02 positive: Strictly avoid Carbamazepine, Oxcarbazepine, and Phenytoin/Fosphenytoin; ② HLA-B*58:01 positive: Strictly avoid Allopurinol; your doctor will select a safe alternative medication.",
    "drugs_guide": [
      { "drug_name": "Carbamazepine (Tegretol) / Oxcarbazepine / Phenytoin — HLA-B*15:02 Positive", "chinese_name": "Carbamazepine (Tegretol) / Oxcarbazepine / Phenytoin — HLA-B*15:02 Positive", "traffic_light": "RED_AVOID", "clinical_alert": "HLA-B*15:02 carriers face an extremely high risk of life-threatening Stevens-Johnson syndrome (SJS) and toxic epidermal necrolysis (TEN) when exposed to carbamazepine, oxcarbazepine, or phenytoin/fosphenytoin. Avoid these drugs and select a non-aromatic alternative.", "cpic_level": "CPIC Guideline for HLA-B and Carbamazepine/Oxcarbazepine/Phenytoin Level A / FDA Boxed Warning" },
      { "drug_name": "Allopurinol (Zyloric) — HLA-B*58:01 Positive", "chinese_name": "Allopurinol (Zyloric) — HLA-B*58:01 Positive", "traffic_light": "RED_AVOID", "clinical_alert": "HLA-B*58:01 carriers have a very high risk of allopurinol-induced severe cutaneous adverse reactions (SJS/TEN and DRESS). Allopurinol is contraindicated; your doctor may choose an alternative urate-lowering medication.", "cpic_level": "CPIC Guideline for HLA-B and Allopurinol Level A / PharmGKB Level 1A" }
    ],
    "dietary_contraindications": [
      "For gout or hyperuricemia, limit high-purine organ meats, rich meat broths, shellfish, fructose-sweetened drinks, and alcohol",
      "Never take unlabelled pain powders or share someone else's neuralgia, seizure, or gout medications"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Landmark Taiwan Precision Medicine Written Into FDA & CPIC Level A Guidelines",
    "clinvar_summary_chinese": "Validated by Taiwan teams in Nature (PMID:15057820), PNAS (PMID:15743917), NEJM (PMID:21428768), and BMJ (PMID:26399967)"
  },
  "lifestyle_prevention": {
    "screening_advice": "In Taiwan and East Asia, screen for HLA-B*15:02 before first-time Carbamazepine prescription (shown in Taiwan's national prospective study to eliminate carbamazepine-induced SJS/TEN, PMID:21428768) and screen for HLA-B*58:01 before Allopurinol initiation (PMID:26399967).",
    "lifestyle_tips": [
      "If you test positive for HLA-B*15:02 or HLA-B*58:01, ask your hospital to record the contraindicated drugs in your national health insurance card allergy record and carry an alert card",
      "Within 1–8 weeks of starting any new antiseizure, neuralgia, or gout drug, seek emergency care immediately if fever, sore throat, eye stinging, oral ulcers, or blistering rash appear",
      "First-degree relatives have a 50% chance of carrying the same HLA-B allele and should be screened before taking these drugs"
    ]
  },
  "doctor_checklist": {
    "specialty": "Neurology / Rheumatology / Nephrology / Dermatology / Clinical Pharmacy",
    "questions": [
      "Doctor, my report is positive for HLA-B*15:02. Which non-aromatic antiseizure or neuralgia medications are safe alternatives for me?",
      "If I am HLA-B*58:01 positive and need uric acid-lowering therapy for gout, which alternative medication do you recommend?",
      "Can you permanently record my HLA-B status in my medical chart and health insurance allergy record?"
    ]
  },
  "myth_buster": {
    "myth": "“Is severe drug allergy purely a matter of luck that you can only discover after taking the pill?”",
    "truth": "No longer! Taiwan researchers discovered the link between HLA-B*15:02 and carbamazepine SJS/TEN and between HLA-B*58:01 and allopurinol SCAR, proving in national cohort studies that pre-prescription genetic screening prevents these fatal reactions (PMID:21428768, PMID:26399967)."
  }
};
