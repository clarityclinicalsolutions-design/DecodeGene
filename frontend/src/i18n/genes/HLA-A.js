export default {
  "gene": {
    "chinese_name": "Major Histocompatibility Complex, Class I, A (HLA-A*31:01 Drug Hypersensitivity Gene)",
    "chromosome": "6p22.1 (Chromosome 6)",
    "metaphor": {
      "title": "🚨 The Immune System's 【Drug Allergy Alarm】 (HLA-A*31:01 mistakes an antiseizure drug for an enemy)",
      "story": "HLA-A is a cell-surface alarm that shows antigens to the immune system. In people carrying HLA-A*31:01, the alarm mistakes carbamazepine and related antiseizure drugs for a severe threat and activates cytotoxic T cells against the skin and mucous membranes, causing widespread rash, erythema, Stevens-Johnson syndrome or DRESS."
    },
    "plain_summary": "HLA-A*31:01 is an important risk marker for severe hypersensitivity to the antiseizure drug carbamazepine. Carriers have a markedly increased risk of Stevens-Johnson syndrome (SJS), toxic epidermal necrolysis or DRESS and should avoid carbamazepine; a physician should assess cross-reactivity with oxcarbazepine and choose lower-risk alternatives. Pre-prescription screening and early recognition of rash can prevent fatal reactions.",
    "academic_summary": "HLA-A is located at 6p22.1 and encodes the MHC class I heavy chain that presents peptide antigens to CD8+ T cells. HLA-A*31:01 is associated with carbamazepine-induced Stevens-Johnson syndrome, toxic epidermal necrolysis and DRESS, with markedly increased risk in carriers; oxcarbazepine may cross-react, and pre-prescription screening with alternative drug selection reduces severe cutaneous adverse reactions."
  },
  "disease": {
    "chinese_name": "Antiseizure Drug-Induced Stevens-Johnson Syndrome (HLA-A*31:01 Severe Drug Allergy)",
    "categories": ["Pharmacogenomics (PGx)", "Severe Drug Hypersensitivity", "Antiseizure Drug Safety"],
    "inheritance_mode": "Autosomal Codominant HLA Allele Susceptibility",
    "severity_badge": "🔴 Absolute Drug Contraindication Red Light (pre-prescription screening prevents severe allergy)"
  },
  "phenotypes": [
    { "hpo_id": "HP:0000988", "name": "Skin rash", "chinese_name": "Widespread skin rash" },
    { "hpo_id": "HP:0010783", "name": "Erythema", "chinese_name": "Erythematous mucocutaneous reaction" }
  ],
  "drugs_targeted": [
    { "drug_name": "Carbamazepine", "chinese_name": "Carbamazepine", "mechanism": "Aromatic antiseizure drug that can trigger SJS/TEN or DRESS in HLA-A*31:01 carriers", "approval_status": "CPIC and label pharmacogenetic contraindication" },
    { "drug_name": "Oxcarbazepine", "chinese_name": "Oxcarbazepine", "mechanism": "Structurally related to carbamazepine and may carry cross-reactivity risk", "approval_status": "Requires specialist assessment" },
    { "drug_name": "Levetiracetam / Lamotrigine", "chinese_name": "Levetiracetam / Lamotrigine", "mechanism": "Lower-immunologic-risk alternative antiseizure options; lamotrigine still requires standard titration and rash monitoring", "approval_status": "Standard antiseizure prescription (clinical assessment)" }
  ],
  "pharmacogenomics": {
    "key_variant": "HLA-A*31:01",
    "population_frequency": "HLA-A*31:01 is found in East Asian and some European populations, and carriers have a markedly increased risk of carbamazepine-induced SJS/DRESS (PMID:29392710)",
    "traffic_light_summary": "🔴 Absolute contraindication and substitution: HLA-A*31:01 carriers should avoid carbamazepine to prevent Stevens-Johnson syndrome, toxic epidermal necrolysis and DRESS. Oxcarbazepine may cross-react and requires physician assessment. Lower-immunologic-risk alternatives such as levetiracetam may be used, while lamotrigine still requires standard titration and rash monitoring.",
    "drugs_guide": [
      { "drug_name": "Carbamazepine", "chinese_name": "Carbamazepine", "traffic_light": "RED_AVOID", "clinical_alert": "HLA-A*31:01 carriers have a markedly increased risk of Stevens-Johnson syndrome, toxic epidermal necrolysis or DRESS with carbamazepine; avoid it and let the physician choose a non-aromatic alternative antiseizure drug.", "cpic_level": "CPIC Guideline for HLA-A and Carbamazepine / FDA Label" },
      { "drug_name": "Oxcarbazepine", "chinese_name": "Oxcarbazepine", "traffic_light": "YELLOW_CAUTION", "clinical_alert": "Oxcarbazepine is structurally related to carbamazepine and may carry cross-reactivity risk in HLA-A*31:01 carriers; assess alternatives and, if it must be used, intensify monitoring for rash and mucosal symptoms.", "cpic_level": "CPIC Guideline for HLA-A and Carbamazepine (cross-reactivity consideration)" },
      { "drug_name": "Levetiracetam / Lamotrigine", "chinese_name": "Levetiracetam / Lamotrigine", "traffic_light": "GREEN_NORMAL", "clinical_alert": "Lower-immunologic-risk alternative antiseizure drugs may be selected after physician assessment; lamotrigine still requires standard titration and rash monitoring, and fever or mucosal ulcers require urgent care.", "cpic_level": "Neurology Alternative Antiseizure Guidance" }
    ],
    "dietary_contraindications": [
      "Do not take leftover antiseizure or neuralgia drugs from others, or unlabelled pain powders",
      "After starting any new antiseizure drug, seek emergency care immediately for fever, sore throat, eye stinging, oral ulcers or widespread rash",
      "Record HLA-A*31:01 and contraindicated drugs in your allergy record and carry an alert card for all clinicians"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC and FDA severe cutaneous adverse reaction pharmacogenomic evidence",
    "clinvar_summary_chinese": "ClinVar and CPIC include HLA-A*31:01 associated with carbamazepine-induced SJS/TEN and DRESS"
  },
  "lifestyle_prevention": {
    "screening_advice": "Before first use of carbamazepine or oxcarbazepine, especially with a personal or family history of drug allergy, consider HLA-A*31:01 screening; first-degree relatives may carry the same allele.",
    "lifestyle_tips": [
      "Show your HLA-A*31:01 result to every physician and pharmacist and confirm that contraindicated drugs are recorded",
      "Watch closely for rash, fever, oral or ocular mucosal ulcers after starting a drug, and stop and seek care immediately",
      "Do not buy or share antiseizure or neuralgia drugs; all new drugs should be assessed by a physician first"
    ]
  },
  "doctor_checklist": {
    "specialty": "Neurology / Dermatology / Clinical Pharmacy / Genetic Counseling",
    "questions": [
      "My HLA-A*31:01 test is positive. Which non-aromatic antiseizure drugs are safe alternatives for me?",
      "Does oxcarbazepine carry cross-reactivity risk, and how should I be monitored if it must be used?",
      "Can my HLA-A result and contraindicated drugs be permanently recorded in my chart and allergy record?"
    ]
  },
  "myth_buster": {
    "myth": "“Severe drug allergy can only be discovered after taking the drug, so it cannot be prevented.”",
    "truth": "Not true. HLA-A*31:01 is clearly associated with carbamazepine-induced SJS/TEN and DRESS, and pre-prescription genetic screening helps avoid high-risk drugs. Carriers should use alternative antiseizure drugs and monitor early rash closely."
  }
};
