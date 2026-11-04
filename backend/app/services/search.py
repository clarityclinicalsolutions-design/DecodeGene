"""Fuzzy search across the curated gene / disease / drug / rsID knowledge base."""
from __future__ import annotations

import re
from typing import Dict, Iterable, List, Optional, Tuple

from backend.app.core.dataset import load_records
from backend.app.models.schema import GeneDiseaseAssociation

_RSID_RE = re.compile(r"rs\d+", re.IGNORECASE)

# Cross-script & bilingual search synonyms (Traditional Chinese, Simplified Chinese, English)
_BILINGUAL_SYNONYMS: Dict[str, Tuple[str, ...]] = {
    "BRCA1": (
        "乳腺癌易感基因 1 號",
        "乳腺癌易感基因 1 号",
        "乳癌",
        "卵巢癌",
        "奥拉帕利",
        "奧拉帕利",
        "他拉唑帕利",
        "breast cancer",
        "ovarian cancer",
        "olaparib",
        "talazoparib",
    ),
    "TP53": (
        "腫瘤蛋白 p53",
        "肿瘤蛋白 p53",
        "李-佛美尼症候群",
        "李-佛美尼综合征",
        "抑癌基因",
        "li-fraumeni",
        "sarcoma",
    ),
    "APOE": (
        "載脂蛋白 E",
        "载脂蛋白 E",
        "阿茲海默症",
        "阿尔茨海默病",
        "老年癡呆",
        "老年痴呆",
        "失智症",
        "仑卡奈单抗",
        "崙卡奈單抗",
        "樂意保",
        "alzheimer",
        "lecanemab",
    ),
    "EGFR": (
        "表皮生長因子受體",
        "表皮生长因子受体",
        "非小細胞肺癌",
        "非小细胞肺癌",
        "肺腺癌",
        "奧希替尼",
        "奥希替尼",
        "泰瑞沙",
        "吉非替尼",
        "易瑞沙",
        "osimertinib",
        "gefitinib",
        "lung cancer",
        "nsclc",
    ),
    "ALDH2": (
        "乙醛脫氫酶 2",
        "乙醛脱氢酶 2",
        "亞洲紅臉症",
        "亚洲红脸症",
        "喝酒臉紅",
        "喝酒脸红",
        "酒精不耐受",
        "硝酸甘油",
        "硝化甘油",
        "食道癌",
        "食管癌",
        "alcohol flush",
        "nitroglycerin",
    ),
    "G6PD": (
        "葡萄糖-6-磷酸脫氫酶",
        "葡萄糖-6-磷酸脱氢酶",
        "蠶豆症",
        "蠶豆病",
        "蚕豆病",
        "溶血性貧血",
        "溶血性贫血",
        "磺胺",
        "伯氨喹",
        "favism",
        "hemolytic anemia",
        "rasburicase",
        "primaquine",
    ),
    "MTHFR": (
        "亞甲基四氫葉酸還原酶",
        "亚甲基四氢叶酸还原酶",
        "葉酸代謝障礙",
        "叶酸代谢障碍",
        "高同半胱胺酸血症",
        "高同型半胱氨酸血症",
        "H型高血壓",
        "H型高血压",
        "腦中風",
        "脑卒中",
        "活性葉酸",
        "活性叶酸",
        "甲氨蝶呤",
        "folate",
        "folic acid",
        "homocysteine",
        "methotrexate",
    ),
    "CYP2C19": (
        "氯吡格雷",
        "氯吡格雷慢代謝",
        "氯吡格雷慢代谢",
        "保栓通",
        "波立維",
        "波立维",
        "抗血小板",
        "心臟支架",
        "心脏支架",
        "普拉格雷",
        "替格瑞洛",
        "百無凝",
        "clopidogrel",
        "plavix",
        "prasugrel",
        "ticagrelor",
        "voriconazole",
        "omeprazole",
        "cyp2c19*2",
        "cyp2c19*3",
    ),
    "CYP2D6": (
        "細胞色素 P450 2D6",
        "细胞色素 P450 2D6",
        "可待因",
        "曲馬多",
        "曲马多",
        "泰莫西芬",
        "他莫昔芬",
        "codeine",
        "tramadol",
        "tamoxifen",
        "cyp2d6*10",
        "cyp2d6*4",
    ),
    "DPYD": (
        "二氫嘧啶脫氫酶",
        "二氢嘧啶脱氢酶",
        "氟尿嘧啶",
        "卡培他濱",
        "卡培他滨",
        "5-FU",
        "fluorouracil",
        "capecitabine",
        "dpyd*2a",
    ),
    "UGT1A1": (
        "尿苷二磷酸葡萄糖醛酸轉移酶",
        "尿苷二磷酸葡萄糖醛酸转移酶",
        "吉爾伯特症候群",
        "吉尔伯特综合征",
        "伊立替康",
        "膽紅素",
        "胆红素",
        "irinotecan",
        "atazanavir",
        "ugt1a1*28",
        "ugt1a1*6",
    ),
    "LCT": (
        "乳糖酶",
        "乳糖不耐",
        "乳糖不耐症",
        "牛奶",
        "腹瀉",
        "腹泻",
        "lactose",
        "lactase",
        "lactose intolerance",
        "rs4988235",
    ),
    "CYP1A2": (
        "細胞色素 P450 1A2",
        "细胞色素 P450 1A2",
        "咖啡因",
        "咖啡",
        "失眠",
        "睡眠",
        "caffeine",
        "coffee",
        "insomnia",
        "cyp1a2*1f",
        "rs762551",
    ),
    "FTO": (
        "肥胖",
        "肥胖易感性",
        "體重",
        "体重",
        "減重",
        "减重",
        "obesity",
        "body weight",
        "weight loss",
        "rs9939609",
    ),
    "CYP2C9": (
        "華法林",
        "华法林",
        "可邁丁",
        "可迈丁",
        "歐服寧",
        "抗凝血",
        "苯妥英",
        "癲能停",
        "塞來昔布",
        "塞来昔布",
        "希樂葆",
        "西乐葆",
        "美洛昔康",
        "吡羅昔康",
        "布洛芬",
        "消炎止痛藥",
        "消炎止痛药",
        "warfarin",
        "coumadin",
        "phenytoin",
        "dilantin",
        "celecoxib",
        "celebrex",
        "flurbiprofen",
        "meloxicam",
        "piroxicam",
        "ibuprofen",
        "nsaid",
        "nsaids",
    ),
    "VKORC1": (
        "維生素 K 環氧化物還原酶",
        "维生素 K 环氧化物还原酶",
        "華法林",
        "华法林",
        "可邁丁",
        "可迈丁",
        "抗凝血敏感",
        "納豆",
        "纳豆",
        "warfarin",
        "coumadin",
        "vitamin k",
        "anticoagulant",
        "rs9923231",
    ),
    "SLCO1B1": (
        "史他汀",
        "他汀",
        "降膽固醇藥",
        "降胆固醇药",
        "降血脂藥",
        "降血脂药",
        "辛伐他汀",
        "素果",
        "舒降之",
        "阿托伐他汀",
        "立普妥",
        "瑞舒伐他汀",
        "冠脂妥",
        "橫紋肌溶解",
        "横纹肌溶解",
        "肌肉酸痛",
        "肌病",
        "紅麴",
        "红曲",
        "simvastatin",
        "zocor",
        "atorvastatin",
        "lipitor",
        "rosuvastatin",
        "crestor",
        "statin",
        "statins",
        "myopathy",
        "rhabdomyolysis",
        "rs4149056",
    ),
    "TPMT": (
        "硫嘌呤甲基轉移酶",
        "硫嘌呤甲基转移酶",
        "硫唑嘌呤",
        "硫唑嘌呤片",
        "移護寧",
        "依木蘭",
        "依木兰",
        "巰嘌呤",
        "巯嘌呤",
        "6-MP",
        "硫鳥嘌呤",
        "硫鸟嘌呤",
        "骨髓抑制",
        "白血球低下",
        "白细胞减少",
        "azathioprine",
        "imuran",
        "mercaptopurine",
        "6-mercaptopurine",
        "thioguanine",
        "thiopurine",
        "tpmt*3a",
        "tpmt*3c",
    ),
    "NUDT15": (
        "Nudix 水解酶 15",
        "Nudix 水解酶",
        "硫唑嘌呤",
        "移護寧",
        "依木蘭",
        "依木兰",
        "巰嘌呤",
        "巯嘌呤",
        "6-MP",
        "硫鳥嘌呤",
        "硫鸟嘌呤",
        "硫嘌呤",
        "骨髓抑制",
        "白血球低下",
        "掉髮",
        "脱发",
        "azathioprine",
        "imuran",
        "mercaptopurine",
        "thioguanine",
        "thiopurine",
        "nudt15*3",
        "rs116855232",
    ),
    "HLA-B": (
        "人類白血球抗原 B",
        "人类白细胞抗原 B",
        "卡馬西平",
        "卡马西平",
        "癲通",
        "得舒妥",
        "奥卡西平",
        "奧卡西平",
        "除癲達",
        "苯妥英",
        "別嘌醇",
        "别嘌醇",
        "安樂普利諾",
        "痛風藥",
        "痛风药",
        "降尿酸",
        "史蒂芬強森症候群",
        "史蒂芬斯-強森症候群",
        "重症多形紅斑",
        "毒性表皮壞死溶解症",
        "藥物過敏",
        "药物过敏",
        "carbamazepine",
        "tegretol",
        "oxcarbazepine",
        "trileptal",
        "phenytoin",
        "allopurinol",
        "zyloric",
        "sjs",
        "ten",
        "scar",
        "stevens-johnson",
        "hla-b*15:02",
        "hla-b*1502",
        "hla-b*58:01",
        "hla-b*5801",
    ),
    "HBB": (
        "血紅素 β 鏈",
        "血紅素β鏈",
        "乙型地中海貧血",
        "乙型地中海贫血",
        "地中海貧血",
        "地中海贫血",
        "海洋性貧血",
        "海洋性贫血",
        "排鐵劑",
        "排铁剂",
        "輸血",
        "输血",
        "beta-thalassemia",
        "beta thalassemia",
        "thalassemia",
        "hemoglobin",
        "deferasirox",
        "transfusion",
    ),
    "HBA1": (
        "血紅素 α 鏈",
        "血紅素α鏈",
        "甲型地中海貧血",
        "甲型地中海贫血",
        "HBA2",
        "alpha-thalassemia",
        "alpha thalassemia",
        "thalassemia",
        "hemoglobin alpha",
    ),
    "SMN1": (
        "運動神經元存活基因",
        "运动神经元存活基因",
        "脊髓性肌肉萎縮症",
        "脊髓性肌萎缩症",
        "脊髓性肌肉萎縮",
        "肌肉萎縮",
        "肌肉萎缩",
        "諾西那生",
        "诺西那生",
        "瑞斯迪普蘭",
        "瑞斯迪普兰",
        "spinal muscular atrophy",
        "SMN1",
        "SMN2",
        "nusinersen",
        "onasemnogene",
        "risdiplam",
    ),
    "GJB2": (
        "間隙連接蛋白",
        "间隙连接蛋白",
        "先天性聽力損失",
        "先天性听力损失",
        "感音神經性聽力",
        "感音神经性听力",
        "耳聾",
        "耳聋",
        "人工耳蝸",
        "人工耳蜗",
        "GJB2",
        "connexin 26",
        "deafness",
        "hearing loss",
        "cochlear implant",
    ),
    "LDLR": (
        "低密度脂蛋白受體",
        "低密度脂蛋白受体",
        "家族性高膽固醇血症",
        "家族性高胆固醇血症",
        "高膽固醇",
        "高胆固醇",
        "壞膽固醇",
        "坏胆固醇",
        "史他汀",
        "他汀",
        "PCSK9",
        "LDLR",
        "familial hypercholesterolemia",
        "hypercholesterolemia",
        "statin",
        "statins",
        "pcsk9",
    ),
    "MYH7": (
        "心肌肌凝蛋白重鏈",
        "心肌肌凝蛋白重链",
        "肥厚型心肌病變",
        "肥厚型心肌病变",
        "心肌肥厚",
        "心律不整",
        "心律不齐",
        "瑪伐凱騰",
        "玛伐凯腾",
        "MYH7",
        "hypertrophic cardiomyopathy",
        "cardiomyopathy",
        "mavacamten",
        "beta blocker",
        "beta blockers",
    ),
    "MYBPC3": (
        "心肌肌凝蛋白結合蛋白",
        "心肌肌凝蛋白结合蛋白",
        "肥厚型心肌病變",
        "肥厚型心肌病变",
        "心肌肥厚",
        "心律不整",
        "心律不齐",
        "瑪伐凱騰",
        "玛伐凯腾",
        "MYBPC3",
        "myosin binding protein",
        "hypertrophic cardiomyopathy",
        "cardiomyopathy",
        "mavacamten",
        "beta blocker",
        "beta blockers",
    ),
    "BRCA2": (
        "乳腺癌易感基因 2 號",
        "乳腺癌易感基因 2 号",
        "乳癌",
        "卵巢癌",
        "前列腺癌",
        "胰臟癌",
        "胰腺癌",
        "奧拉帕利",
        "奥拉帕利",
        "他拉唑帕利",
        "breast cancer",
        "ovarian cancer",
        "prostate cancer",
        "pancreatic cancer",
        "olaparib",
        "talazoparib",
        "brca2",
    ),
    "PALB2": (
        "乳癌",
        "卵巢癌",
        "胰臟癌",
        "胰腺癌",
        "奧拉帕利",
        "奥拉帕利",
        "breast cancer",
        "ovarian cancer",
        "pancreatic cancer",
        "olaparib",
        "palb2",
    ),
    "MLH1": (
        "林奇症候群",
        "林奇综合征",
        "遺傳性非息肉症大腸直腸癌",
        "遗传性非息肉病性结直肠癌",
        "HNPCC",
        "大腸癌",
        "大肠癌",
        "子宮內膜癌",
        "子宫内膜癌",
        "帕博利珠單抗",
        "帕博利珠单抗",
        "納武利尤單抗",
        "纳武利尤单抗",
        "Lynch syndrome",
        "colorectal cancer",
        "endometrial cancer",
        "pembrolizumab",
        "nivolumab",
        "dmmr",
        "msi-h",
        "mlh1",
    ),
    "MSH2": (
        "林奇症候群",
        "林奇综合征",
        "遺傳性非息肉症大腸直腸癌",
        "遗传性非息肉病性结直肠癌",
        "HNPCC",
        "大腸癌",
        "大肠癌",
        "子宮內膜癌",
        "子宫内膜癌",
        "帕博利珠單抗",
        "帕博利珠单抗",
        "納武利尤單抗",
        "纳武利尤单抗",
        "Lynch syndrome",
        "colorectal cancer",
        "endometrial cancer",
        "pembrolizumab",
        "nivolumab",
        "dmmr",
        "msi-h",
        "msh2",
    ),
}


class SearchService:
    """Case-insensitive substring search with lightweight relevance ranking."""

    def search(self, query: str, limit: int = 25) -> List[Dict[str, object]]:
        q = (query or "").strip()
        records = load_records()
        if not q:
            return [self._result(record, "all", "", 0) for record in records[:limit]]

        lowered = q.lower()
        scored: List[Tuple[float, Dict[str, object]]] = []

        for record in records:
            best_score = 0.0
            best_field = ""
            best_value = ""
            for field, value in self._fields(record):
                if not value:
                    continue
                haystack = str(value).lower()
                if haystack == lowered:
                    score = 100.0
                elif haystack.startswith(lowered):
                    score = 80.0
                elif lowered in haystack:
                    score = 60.0
                else:
                    score = 0.0
                if score > best_score:
                    best_score = score
                    best_field = field
                    best_value = str(value)

            if best_score > 0:
                scored.append((best_score, self._result(record, best_field, best_value, best_score)))

        scored.sort(key=lambda item: (-item[0], str(item[1]["symbol"])))
        return [item[1] for item in scored[:limit]]

    # --------------------------------------------------------------- private
    @staticmethod
    def _fields(record: GeneDiseaseAssociation) -> Iterable[Tuple[str, object]]:
        gene = record.gene
        disease = record.disease
        yield "association_id", record.association_id
        yield "gene_symbol", gene.symbol
        yield "gene_name", gene.name
        yield "gene_chinese_name", gene.chinese_name
        yield "ensembl_id", gene.ensembl_id
        yield "entrez_id", gene.entrez_id
        yield "chromosome", gene.chromosome
        yield "disease_id", disease.id
        yield "disease_name", disease.name
        yield "disease_chinese_name", disease.chinese_name
        for category in disease.categories:
            yield "disease_category", category
        for phenotype in record.phenotypes:
            yield "phenotype_hpo_id", phenotype.hpo_id
            yield "phenotype_name", phenotype.name
            yield "phenotype_chinese_name", phenotype.chinese_name
        for drug in record.drugs_targeted:
            yield "drug_name", drug.drug_name
            yield "drug_chinese_name", drug.chinese_name
            yield "drug_mechanism", drug.mechanism
        pgx = record.pharmacogenomics
        yield "pgx_key_variant", pgx.key_variant
        yield "pgx_summary", pgx.traffic_light_summary
        for rsid in _RSID_RE.findall(pgx.key_variant):
            yield "rsid", rsid
        for item in pgx.drugs_guide:
            yield "pgx_drug_name", item.drug_name
            yield "pgx_drug_chinese_name", item.chinese_name
            yield "cpic_level", item.cpic_level
        for pmid in record.evidence.key_pmids:
            yield "pmid", pmid
        for tip in record.lifestyle_prevention.lifestyle_tips:
            yield "lifestyle_tip", tip
        yield "screening_advice", record.lifestyle_prevention.screening_advice
        yield "doctor_specialty", record.doctor_checklist.specialty
        yield "myth", record.myth_buster.myth
        yield "truth", record.myth_buster.truth
        for synonym in _BILINGUAL_SYNONYMS.get(gene.symbol, ()):
            yield "synonym", synonym

    @staticmethod
    def _result(
        record: GeneDiseaseAssociation,
        matched_field: str,
        matched_value: str,
        score: float,
    ) -> Dict[str, object]:
        return {
            "symbol": record.gene.symbol,
            "gene_name": record.gene.name,
            "chinese_name": record.gene.chinese_name,
            "association_id": record.association_id,
            "disease": {
                "id": record.disease.id,
                "name": record.disease.name,
                "chinese_name": record.disease.chinese_name,
                "inheritance_mode": record.disease.inheritance_mode,
            },
            "matched_field": matched_field,
            "matched_value": matched_value,
            "score": score,
            "rsids": sorted({rsid.lower() for rsid in _RSID_RE.findall(record.pharmacogenomics.key_variant)}),
        }
