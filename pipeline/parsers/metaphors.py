"""Curated everyday metaphors for the seven core genes.

These strings are the single source of truth for the consumer-facing layer of
the ingestion pipeline. The API keeps the full stories in the validated JSON
dataset; this module provides short, stable labels for pipeline output.
"""
from __future__ import annotations

from typing import Dict, Optional

GENE_METAPHORS: Dict[str, Dict[str, str]] = {
    "BRCA1": {
        "title": "🧬 細胞裡的【DNA 汽車維修工程師】",
        "short": "DNA 汽車維修工罷工，壞零件沒修好，車子出大事故（癌變）的機率就會升高。",
    },
    "TP53": {
        "title": "🛑 細胞裡的【緊急制動煞車片 / 基因組保安】",
        "short": "列車失去緊急煞車，壞細胞無法被叫停或銷毀，多處組織容易早早長腫瘤。",
    },
    "APOE": {
        "title": "🧠 大腦裡的【垃圾清運卡車】",
        "short": "ε4 型號的清運卡車跑得慢，腦內垃圾（澱粉樣蛋白）更容易堆積。",
    },
    "EGFR": {
        "title": "🚦 細胞表面的【生長油門踏板】",
        "short": "油門被卡死在踩到底的位置，細胞瘋長；標靶藥就是精準的煞車鑰匙。",
    },
    "ALDH2": {
        "title": "🍷 肝臟裡的【酒精解毒流水線二號工人】",
        "short": "二號工人罷工，劇毒乙醛堆積導致喝酒臉紅，舌下含服硝化甘油急救也可能失靈。",
    },
    "G6PD": {
        "title": "🛡️ 紅血球的【防氧化防彈衣】",
        "short": "缺少防彈衣的紅血球遇到蠶豆或氧化性藥物，會像氣球一樣成批破裂溶血。",
    },
    "MTHFR": {
        "title": "🌿 人體葉酸加工廠的【轉化機器】",
        "short": "轉化機器效率下降，普通葉酸難以變成活性葉酸，同半胱胺酸容易升高。",
    },
    "CYP2C19": {
        "title": "🔑 肝臟裡的【抗血栓前驅藥解鎖鑰匙匠】",
        "short": "鑰匙匠停工，保栓通 (Clopidogrel) 無法解鎖為活性藥物，支架血栓風險升高。",
    },
    "CYP2C9": {
        "title": "⏳ 肝臟裡的【藥物代謝漏斗】",
        "short": "漏斗口變窄，華法林、苯妥英與消炎止痛藥排不出體外，易引發異常出血或中毒。",
    },
    "VKORC1": {
        "title": "🎛️ 凝血工廠裡的【維生素 K 回收調音旋鈕】",
        "short": "東亞人普遍表現量較少，對抗凝血藥華法林高度敏感，需調降劑量避免出血。",
    },
    "SLCO1B1": {
        "title": "🚪 肝臟大門口的【降血脂藥專屬迎賓旋轉門】",
        "short": "旋轉門卡住，史他汀類降血脂藥滯留血液滲入肌肉，易引發肌肉酸痛或橫紋肌溶解。",
    },
    "TPMT": {
        "title": "🧯 免疫與血液工廠裡的【硫嘌呤藥物安全洩壓閥】",
        "short": "洩壓閥關閉，硫唑嘌呤與巰嘌呤全部湧入毒性通道，導致嚴重骨髓抑制。",
    },
    "NUDT15": {
        "title": "🧹 細胞核門口的【毒性核苷酸拆彈專家】",
        "short": "東亞高頻變異使拆彈專家失靈，硫嘌呤毒性代謝物重創骨髓並引發早期嚴重掉髮。",
    },
    "HLA-B": {
        "title": "🚨 免疫系統裡的【高敏感藥物雷達哨兵】",
        "short": "HLA-B*15:02 遇卡馬西平、HLA-B*58:01 遇別嘌醇會誤導 T 細胞攻擊全身皮膚黏膜 (SJS/TEN)。",
    },
}


def get_metaphor(symbol: str) -> Optional[Dict[str, str]]:
    return GENE_METAPHORS.get((symbol or "").strip().upper())
