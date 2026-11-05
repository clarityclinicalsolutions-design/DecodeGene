export default {
  "gene": {
    "chinese_name": "APC Regulator of WNT Signaling Pathway (APC)",
    "chromosome": "5q22.2 (Chromosome 5)",
    "metaphor": {
      "title": "🚧 The 【Brake System】 for Colon Cell Growth",
      "story": "Colon lining cells need to renew at a healthy pace, and APC acts like the brake that prevents excessive growth. If the brake fails, the colon develops large numbers of adenomatous polyps, and some can progress to colon cancer if not managed. This is familial adenomatous polyposis (FAP)."
    },
    "plain_summary": "APC is an important tumor suppressor that controls cell growth. A pathogenic variant causes familial adenomatous polyposis (FAP), in which large numbers of colon polyps can appear at a young age; without surveillance and management, colon cancer risk rises markedly. It is inherited in an autosomal dominant pattern, first-degree relatives may carry the same variant, and early colonoscopy surveillance and genetic counseling are essential.",
    "academic_summary": "APC is located at 5q22.2 and encodes a negative regulator of WNT signaling that participates in the β-catenin destruction complex. Germline heterozygous pathogenic variants cause adenomatous polyposis in an autosomal dominant pattern; classic FAP shows hundreds to thousands of colorectal adenomas and virtually always progresses to colon cancer if untreated."
  },
  "disease": {
    "chinese_name": "Familial Adenomatous Polyposis 1 (FAP)",
    "categories": [
      "Malignant Neoplasm",
      "Hereditary Cancer Syndrome"
    ],
    "inheritance_mode": "Autosomal Dominant (AD)",
    "severity_badge": "⚠️ High Clinical Priority (Requires intensive surveillance and surgery when indicated)"
  },
  "phenotypes": [
    {
      "hpo_id": "HP:0200063",
      "name": "Colorectal polyposis",
      "chinese_name": "Colorectal polyposis"
    },
    {
      "hpo_id": "HP:0003003",
      "name": "Colon cancer",
      "chinese_name": "Colon cancer"
    }
  ],
  "drugs_targeted": [
    {
      "drug_name": "Colectomy",
      "chinese_name": "Colectomy",
      "mechanism": "Removes high-risk polyps and colon mucosa to reduce colon cancer risk",
      "approval_status": "Standard surgical treatment"
    },
    {
      "drug_name": "Celecoxib",
      "chinese_name": "Celecoxib",
      "mechanism": "NSAID adjunct chemoprevention that may reduce polyp burden but does not replace surveillance or surgery",
      "approval_status": "Adjunct use; not gene-guided dosing"
    }
  ],
  "pharmacogenomics": {
    "has_pgx": false,
    "key_variant": "Germline APC pathogenic variants; familial adenomatous polyposis is mainly caused by dysregulated WNT signaling",
    "population_frequency": "Classic FAP affects about 1 in 8,000–10,000 people and varies by ancestry (PMID:20301519)",
    "traffic_light_summary": "This gene currently has no CPIC pharmacogenomic (PGx) dosing guideline. Standard management of familial adenomatous polyposis relies on intensive colonoscopy surveillance, colectomy when indicated, and genetic counseling; medications are only adjunctive chemoprevention, and whether to use them should be assessed by gastroenterology and surgical teams.",
    "drugs_guide": [],
    "dietary_contraindications": [
      "Reduce processed meat and red meat intake and increase vegetables, fruit and whole grains",
      "Maintain a healthy weight, exercise regularly and limit alcohol"
    ]
  },
  "evidence": {
    "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Definitive International Clinical Consensus",
    "clinvar_summary_chinese": "Many APC pathogenic variants curated in ClinVar and the literature show a clear association with familial adenomatous polyposis",
    "key_pmids": [
      "PMID:20301519"
    ]
  },
  "lifestyle_prevention": {
    "screening_advice": "Following NCCN guidance and medical advice, begin regular colonoscopy surveillance around adolescence; if polyp burden is high or cannot be controlled endoscopically, discuss the timing of colectomy; family members should receive genetic counseling and testing.",
    "lifestyle_tips": [
      "Reduce processed meat and red meat and increase vegetables, fruit and whole grains",
      "Exercise regularly, maintain a healthy weight and limit alcohol",
      "Seek care early for blood in the stool, abdominal pain or changes in bowel habits"
    ]
  },
  "doctor_checklist": {
    "specialty": "Gastroenterology / Colorectal Surgery / Clinical Genetics Clinic",
    "questions": [
      "My genetic report shows an APC variant. At what age should I start colonoscopy, and how often?",
      "Given my polyp number and location, do you recommend colectomy, and when?",
      "Would NSAID chemoprevention help me, and would it replace surgery or surveillance?",
      "Should my first-degree relatives undergo cascade genetic testing for this exact variant?"
    ]
  },
  "myth_buster": {
    "myth": "“With FAP, removing polyps once is enough.”",
    "truth": "Not necessarily. FAP polyps recur, requiring long-term intensive surveillance, and some patients still need colectomy to reduce cancer risk. Ongoing follow-up and genetic counseling are essential."
  }
};
