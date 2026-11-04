window.DEMO_DATA = [
  {
    "association_id": "GDA_BRCA1_BREAST_CANCER",
    "gene": {
      "symbol": "BRCA1",
      "name": "BRCA1 DNA repair associated",
      "chinese_name": "乳腺癌易感基因 1 號",
      "ensembl_id": "ENSG00000012048",
      "entrez_id": "672",
      "biotype": "protein_coding",
      "chromosome": "17q21.31 (17 號染色體)",
      "metaphor": {
        "title": "🧬 細胞裡的【DNA 汽車維修工程師】",
        "story": "我們的細胞每天都在高速運轉，DNA 難免會發生小故障（比如磨損破裂）。BRCA1 就像一位經驗豐富的隨車高級維修工，發現故障就會立刻修好。如果維修工突變生病了（罷工），壞掉的零件沒修好就繼續上路，日積月累，車子出重大事故（惡性腫瘤）的機率就會比常人高出很多。"
      },
      "plain_summary": "BRCA1 是人體內天然的防癌衛士。攜帶致病突變並不意味著必然會得癌症，而是意味著患乳癌或卵巢癌的終身風險較一般人群升高，需要從更早年齡開始進行科學篩檢與預防。",
      "academic_summary": "BRCA1 編碼 190 kD 核磷蛋白（含 RING 指與 BRCT 結構域），主要介導 RAD51 參與同源重組 DNA 雙股斷裂 (DSB) 的無差錯修復。生殖系雜合致病變異破壞此功能，使細胞依賴易錯修復，顯著提升乳癌和卵巢癌易感性，並對 PARP 抑制劑產生合成致死敏感性。"
    },
    "disease": {
      "id": "MONDO:0007254",
      "name": "Hereditary breast and ovarian cancer syndrome",
      "chinese_name": "乳癌 / 遺傳性乳癌-卵巢癌症候群",
      "categories": [
        "惡性腫瘤",
        "遺傳性腫瘤症候群"
      ],
      "inheritance_mode": "體染色體顯性遺傳 (Autosomal Dominant, AD)",
      "severity_badge": "⚠️ 需高度關注 (科學可防可治)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0003002",
        "name": "Breast carcinoma",
        "chinese_name": "乳癌"
      },
      {
        "hpo_id": "HP:0100615",
        "name": "Ovarian neoplasm",
        "chinese_name": "卵巢腫瘤"
      },
      {
        "hpo_id": "HP:0010519",
        "name": "Fallopian tube carcinoma",
        "chinese_name": "輸卵管癌"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Olaparib",
        "chinese_name": "奧拉帕利",
        "mechanism": "PARP1/2 抑制劑 (合成致死機制)",
        "approval_status": "FDA / TFDA / NMPA 核准"
      },
      {
        "drug_name": "Talazoparib",
        "chinese_name": "他拉唑帕利",
        "mechanism": "強效 PARP1/2 抑制劑與 PARP 捕獲劑",
        "approval_status": "FDA / TFDA / NMPA 核准"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "生殖系致病變異 (如 c.5266dupC / rs80357906)",
      "population_frequency": "一般人群約 1/400 ~ 1/800",
      "traffic_light_summary": "🟢 標靶藥敏感（攜帶生殖系致病突變對奧拉帕利、他拉唑帕利等 PARP 抑制劑及鉑類化療高度敏感）",
      "drugs_guide": [
        {
          "drug_name": "Olaparib / Talazoparib",
          "chinese_name": "奧拉帕利 / 他拉唑帕利",
          "traffic_light": "GREEN_NORMAL",
          "clinical_alert": "基於合成致死原理，BRCA1 生殖系致病突變患者使用 PARP 抑制劑可顯著獲益。",
          "cpic_level": "FDA Companion Diagnostic / NCCN Category 1"
        }
      ],
      "dietary_contraindications": [
        "嚴格限制酒精攝取",
        "慎用長期無黃體素拮抗的外源性雌激素替代療法"
      ]
    },
    "evidence": {
      "overall_score": 0.96,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ 國際醫學界最高級別確證 (Definitive)",
      "clinvar_pathogenic_count": 3520,
      "clinvar_summary_chinese": "已收錄 3500+ 個明確致病變異位點",
      "opentargets_score": 0.94,
      "key_pmids": [
        "PMID:7545954",
        "PMID:28522680"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "建議從 25 歲開始每 6-12 個月進行一次乳房專科檢查，30 歲起每年進行一次乳房磁振造影 (MRI) 聯合乳房攝影檢查。",
      "lifestyle_tips": [
        "保持健康體重，規律作息，避免長期熬夜與高脂飲食",
        "嚴格戒菸並限制酒精攝取（酒精會增加雌激素濃度）",
        "生育期女性在醫師指導下合理母乳哺育，有助於降低風險"
      ]
    },
    "doctor_checklist": {
      "specialty": "乳房外科 / 腫瘤科 / 臨床遺傳門診",
      "questions": [
        "醫師您好，我的基因報告提示 BRCA1 突變，幾歲開始建議我做乳房磁振造影 (MRI)？",
        "除了乳房，對於卵巢和輸卵管的健康，您建議我定期做什麼篩檢（如 CA125、經陰道超音波）？",
        "我的直系親屬（母親、姊妹、子女）是否有必要做同位點的基因篩檢？",
        "如果未來有生育計畫，目前是否有胚胎著床前基因診斷 (PGT) 阻斷突變遺傳的技術？"
      ]
    },
    "myth_buster": {
      "myth": "「測出 BRCA1 基因突變，是不是過幾年百分之百會得癌症？」",
      "truth": "不是！攜帶突變只是增加了患病機率（終身風險約 60%~70%，而一般人約 12%），並非百分之百。透過規律篩檢、生活干預甚至預防性措施，絕大多數攜帶者都能健康長壽並做到早發現早治癒。"
    }
  },
  {
    "association_id": "GDA_TP53_LI_FRAUMENI",
    "gene": {
      "symbol": "TP53",
      "name": "Tumor protein p53",
      "chinese_name": "腫瘤蛋白 p53 (抑癌基因)",
      "ensembl_id": "ENSG00000141510",
      "entrez_id": "7157",
      "biotype": "protein_coding",
      "chromosome": "17p13.1 (17 號染色體)",
      "metaphor": {
        "title": "🛑 細胞裡的【緊急制動煞車片 / 基因組保安】",
        "story": "如果把細胞分裂比作一輛飛馳的列車，TP53 就是車上的終極緊急制動煞車片兼基因組保安。一旦發現細胞 DNA 受到輻射或化學物質破壞，保安會立刻拉響警報並踩下煞車，讓細胞停下來修補；如果壞得太徹底修不好，保安會果斷啟動細胞的「自我銷毀程序（凋亡）」，絕不讓壞細胞變成癌細胞。如果 TP53 天生失靈，列車就徹底失去了緊急煞車，全身多處組織都很容易早早出現腫瘤。"
      },
      "plain_summary": "TP53 是人體最重要的「防癌總開關」。生殖系攜帶 TP53 致病突變會引起李-佛美尼症候群（Li-Fraumeni syndrome），攜帶者需要透過每年全身無輻射磁振造影（MRI）實現極早期腫瘤監測，並嚴格避免不必要的 X 光和 CT 游離輻射。",
      "academic_summary": "TP53 編碼四聚體轉錄因子 p53，響應 DNA 損傷與致癌基因壓力，轉錄激活 CDKN1A (p21)、BAX、PUMA 及 GADD45A，介導 G1/S 細胞週期阻滯、DNA 修復或細胞凋亡。生殖系雜合致病變異導致體染色體顯性李-佛美尼症候群 (LFS)。"
    },
    "disease": {
      "id": "MONDO:0018875",
      "name": "Li-Fraumeni syndrome",
      "chinese_name": "李-佛美尼症候群 (遺傳性多發腫瘤症候群)",
      "categories": [
        "遺傳性腫瘤症候群",
        "罕見疾病"
      ],
      "inheritance_mode": "體染色體顯性遺傳 (Autosomal Dominant, AD)",
      "severity_badge": "🚨 高危遺傳症候群 (需終身無輻射 MRI 早篩)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0002664",
        "name": "Neoplasm",
        "chinese_name": "多發性腫瘤易感"
      },
      {
        "hpo_id": "HP:0002897",
        "name": "Osteosarcoma",
        "chinese_name": "骨肉瘤"
      },
      {
        "hpo_id": "HP:0003002",
        "name": "Breast carcinoma",
        "chinese_name": "早發性乳癌"
      },
      {
        "hpo_id": "HP:0006744",
        "name": "Adrenocortical carcinoma",
        "chinese_name": "腎上腺皮質癌"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Eprenetapopt",
        "chinese_name": "Eprenetapopt (APR-246, 在研 p53 重激活劑)",
        "mechanism": "恢復突變型 p53 蛋白野生型構象並誘導腫瘤凋亡",
        "approval_status": "臨床試驗在研 (Phase II/III)"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "生殖系致病變異 (如 p.Arg175His / p.Arg248Gln / p.Arg273His)",
      "population_frequency": "一般人群約 1/5,000 ~ 1/20,000",
      "traffic_light_summary": "🔴 嚴禁濫用放射線檢查與放療（DNA 損傷修復缺陷會導致放療或頻繁 CT 誘發二次原發惡性腫瘤）",
      "drugs_guide": [
        {
          "drug_name": "Ionizing Radiation / Genotoxic Radiotherapy",
          "chinese_name": "游離輻射 / 傳統放射治療",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "TP53 生殖系突變攜帶者對游離輻射極度敏感，體檢早篩必須用全身 MRI 替代 CT/乳房攝影，治療優先選擇手術或非基因毒性方案。",
          "cpic_level": "NCCN LFS Guideline High Alert"
        }
      ],
      "dietary_contraindications": [
        "絕對戒菸戒酒，遠離黃麴毒素與亞硝胺類醃燻食品",
        "嚴格避免非醫療必需的 CT、PET-CT、X 光胸片暴露"
      ]
    },
    "evidence": {
      "overall_score": 0.98,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ 國際醫學界最高級別確證 (Definitive)",
      "clinvar_pathogenic_count": 1680,
      "clinvar_summary_chinese": "已收錄 1600+ 個明確致病/可能致病變異位點",
      "opentargets_score": 0.95,
      "key_pmids": [
        "PMID:1978757",
        "PMID:27496084"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "遵循國際 Toronto 篩檢方案：每年進行一次全身磁振造影 (Whole-Body MRI) 及腦部 MRI；女性 20 歲起每年進行乳房 MRI（避免用有輻射的乳房攝影和 CT 作為常規體檢）；每 2-5 年進行胃腸鏡檢查。",
      "lifestyle_tips": [
        "【核心鐵律】體檢和就診時主動告知醫師攜帶 TP53 生殖系突變，優先選擇超音波和磁振造影 (MRI)，嚴格避免游離輻射/CT濫用",
        "日常外出做好嚴格紫外線物理防曬，預防皮膚腫瘤",
        "保持規律作息與抗發炎飲食，一旦出現不明原因骨痛、腫塊或持續頭痛立即就醫"
      ]
    },
    "doctor_checklist": {
      "specialty": "遺傳性腫瘤專科門診 / 腫瘤內科 / 臨床遺傳科",
      "questions": [
        "醫師您好，我檢出 TP53 生殖系突變，請問醫院能否按照 Toronto 方案為我安排每年的全身磁振造影 (Whole-Body MRI) 早篩？",
        "我在日常體檢中是否應該用乳房 MRI 和超音波完全替代有放射線的乳房攝影和胸部 CT？",
        "我的父母、兄弟姊妹和孩子是否需要做該位點的基因檢測驗證？",
        "如果計畫生育健康寶寶，如何透過胚胎著床前基因診斷 (PGT-M) 阻斷 TP53 突變遺傳？"
      ]
    },
    "myth_buster": {
      "myth": "「既然 TP53 突變容易長腫瘤，那我是不是應該每半年做一次全身 PET-CT 或增強 CT 來防癌？」",
      "truth": "千萬不要！CT 和 PET-CT 含有較高劑量的游離輻射。對於缺乏 TP53「煞車保護」的人來說，頻繁照 CT 反而會破壞健康細胞的 DNA、人為誘發新的腫瘤！正確的防癌黃金標準是零輻射的全身磁振造影 (MRI) 和超音波。"
    }
  },
  {
    "association_id": "GDA_APOE_ALZHEIMER",
    "gene": {
      "symbol": "APOE",
      "name": "Apolipoprotein E",
      "chinese_name": "載脂蛋白 E",
      "ensembl_id": "ENSG00000130203",
      "entrez_id": "348",
      "biotype": "protein_coding",
      "chromosome": "19q13.32 (19 號染色體)",
      "metaphor": {
        "title": "🧠 大腦裡的【垃圾清運卡車（ε4 型號清運較慢）】",
        "story": "大腦工作時會產生一些有害的代謝廢棄物（比如黏糊糊的澱粉樣蛋白）。APOE 就像是每天在大腦巡邏清運垃圾的清潔卡車。APOE 有三種主要型號（ε2、ε3、ε4）。如果你拿到的是 ε4 型號，清運效率就比較慢，垃圾容易在腦內沉澱堆積，久而久之就增加了老了以後得阿茲海默症（失智症）的風險。"
      },
      "plain_summary": "APOE ε4 是遲發性失智症最常見的遺傳風險標誌物。它是一個「易感基因」而非「致病決定基因」，攜帶者只要積極保護心腦血管、採用地中海飲食並經常動腦，完全有可能終身不發病。",
      "academic_summary": "APOE ε4 等位基因（由 rs429358-C 與 rs7412-C 單倍型決定）損害星狀膠質細胞介導的 β-澱粉樣蛋白 (Aβ) 清除通路，促進 Tau 蛋白異常磷酸化，並破壞血腦障壁完整性，是散發性遲發型阿茲海默症最強遺傳風險因子。"
    },
    "disease": {
      "id": "MONDO:0004975",
      "name": "Alzheimer disease",
      "chinese_name": "阿茲海默症 (老年失智症)",
      "categories": [
        "神經退化性疾病",
        "認知障礙"
      ],
      "inheritance_mode": "多基因複雜易感風險 (Complex Susceptibility, ε4 呈半顯性劑量效應)",
      "severity_badge": "💡 易感風險因子 (非決定性，可防可控)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0000726",
        "name": "Dementia",
        "chinese_name": "失智症"
      },
      {
        "hpo_id": "HP:0002354",
        "name": "Memory impairment",
        "chinese_name": "記憶力受損"
      },
      {
        "hpo_id": "HP:0001268",
        "name": "Mental deterioration",
        "chinese_name": "認知功能進行性減退"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Lecanemab",
        "chinese_name": "崙卡奈單抗 (Leqembi)",
        "mechanism": "標靶可溶性 Aβ 原纖維的人源化 IgG1 單株抗體",
        "approval_status": "FDA / TFDA / NMPA 核准"
      },
      {
        "drug_name": "Donanemab",
        "chinese_name": "多奈單抗 (Kisunla)",
        "mechanism": "標靶 N3pG 修飾型澱粉樣蛋白斑塊的單株抗體",
        "approval_status": "FDA 核准"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "APOE ε4 等位基因 (rs429358 C / rs7412 C)",
      "population_frequency": "一般人群 ε4 攜帶率約 15%~25%",
      "traffic_light_summary": "🟡 慎用/需嚴密監測（APOE ε4 攜帶者尤其是純合子在使用抗 Aβ 單抗 Lecanemab/Donanemab 時發生澱粉樣蛋白相關影像學異常 ARIA 腦水腫/微出血風險顯著升高，用藥前須基因分型）",
      "drugs_guide": [
        {
          "drug_name": "Lecanemab / Donanemab",
          "chinese_name": "崙卡奈單抗 / 多奈單抗",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "FDA 黑框警告提示 APOE ε4 純合子發生 ARIA-E（腦水腫）和 ARIA-H（腦微出血）的風險顯著高於非攜帶者，啟動治療前推薦完成 APOE 基因檢測並加密腦部 MRI 監測。",
          "cpic_level": "FDA Boxed Warning Biomarker"
        }
      ],
      "dietary_contraindications": [
        "限制高飽和脂肪、反式脂肪與精緻糖攝取（APOE ε4 攜帶者對膳食膽固醇與飽和脂肪更敏感，易升 LDL-C）"
      ]
    },
    "evidence": {
      "overall_score": 0.92,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ 強科學共識",
      "clinvar_pathogenic_count": 410,
      "clinvar_summary_chinese": "已證實 ε4 亞型顯著增加神經退化性風險",
      "opentargets_score": 0.91,
      "key_pmids": [
        "PMID:8346443",
        "PMID:36449413"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "建議 50 歲後每年體檢增加 MoCA 認知量表篩檢，定期監測血壓、血糖、低密度脂蛋白膽固醇 (LDL-C)。",
      "lifestyle_tips": [
        "地中海飲食模式：多吃深海魚（富含 Omega-3）、堅果、特級初榨橄欖油與新鮮深色蔬菜",
        "終身學習：打橋牌、閱讀、學習新樂器或新語言，建立大腦認知儲備",
        "保證充足深度睡眠，利於腦脊髓液（膠質淋巴系統）夜間清除腦內代謝毒素"
      ]
    },
    "doctor_checklist": {
      "specialty": "神經內科 / 記憶門診 / 高齡醫學科",
      "questions": [
        "醫師，我檢查發現攜帶 APOE ε4 基因，平時需要做腦部 MRI 或認知量表評估嗎？",
        "我該如何把我的血脂（特別是 LDL-C）和血壓控制在理想範圍內，以保護大腦血管？",
        "如果家中長輩出現早期記憶減退，使用崙卡奈單抗等標靶新藥前需要注意 APOE ε4 相關的 ARIA 風險嗎？"
      ]
    },
    "myth_buster": {
      "myth": "「查出我有兩個 APOE ε4 基因，那我老了一定會失智嗎？」",
      "truth": "絕對不是！基因只佔一部分原因，後天的血管健康、地中海飲食、有氧運動和心智鍛鍊起著極其關鍵的保護作用。許多攜帶兩個 ε4 的長輩依然神采奕奕、思維敏捷地安度晚年。"
    }
  },
  {
    "association_id": "GDA_EGFR_LUNG_CANCER",
    "gene": {
      "symbol": "EGFR",
      "name": "Epidermal growth factor receptor",
      "chinese_name": "表皮生長因子受體",
      "ensembl_id": "ENSG00000146648",
      "entrez_id": "1956",
      "biotype": "protein_coding",
      "chromosome": "7p11.2 (7 號染色體)",
      "metaphor": {
        "title": "🚦 細胞表面的【生長油門踏板（突變導致油門卡死，標靶藥是精準煞車鑰匙）】",
        "story": "正常細胞只有在身體發出指令需要生長時，才會輕踩一下油門。如果肺部細胞的 EGFR 發生突變，就像油門踏板被生鏽卡死在「踩到底」的位置，細胞便不受控制地瘋長，最終形成肺癌。好消息是，現代醫學發明了精準的「煞車鑰匙」（標靶藥，如奧希替尼、吉非替尼），可以精確卡住這個油門，讓癌細胞停止生長。"
      },
      "plain_summary": "EGFR 突變是非小細胞肺癌最常見且治療效果最好的突變標靶之一。在亞洲肺腺癌患者中突變率高達 50%，可以透過每天口服標靶藥物實現長期帶瘤生存與高品質生活。",
      "academic_summary": "EGFR 外顯子 19 缺失突變 (Ex19del) 或 L858R 點突變導致其酪胺酸激酶結構域持續自磷酸化，持續激活下游 MAPK、PI3K-Akt 促存活通路，對第 1/2/3 代 EGFR-TKI 具有高度敏感性。"
    },
    "disease": {
      "id": "MONDO:0005233",
      "name": "Non-small cell lung carcinoma",
      "chinese_name": "非小細胞肺癌 (NSCLC)",
      "categories": [
        "惡性腫瘤",
        "胸部腫瘤"
      ],
      "inheritance_mode": "以腫瘤體細胞獲得性突變為主 (Somatic Mutation)",
      "severity_badge": "🎯 黃金治療標靶 (標靶藥效果顯著)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0030358",
        "name": "Non-small cell lung carcinoma",
        "chinese_name": "非小細胞肺癌"
      },
      {
        "hpo_id": "HP:0100526",
        "name": "Neoplasm of the lung",
        "chinese_name": "肺部腫瘤"
      },
      {
        "hpo_id": "HP:0002105",
        "name": "Hemoptysis",
        "chinese_name": "咳血/持續性咳嗽"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Osimertinib",
        "chinese_name": "奧希替尼 (泰瑞沙)",
        "mechanism": "第三代不可逆 EGFR-TKI（標靶敏感突變及 T790M 抗藥突變，強入腦活性）",
        "approval_status": "FDA / TFDA / NMPA 核准"
      },
      {
        "drug_name": "Gefitinib",
        "chinese_name": "吉非替尼 (艾瑞莎)",
        "mechanism": "第一代可逆性 EGFR 酪胺酸激酶抑制劑 (EGFR-TKI)",
        "approval_status": "FDA / TFDA / NMPA 核准"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "體細胞敏感突變 Exon 19 deletion / L858R；抗藥突變 T790M",
      "population_frequency": "東亞肺腺癌患者體細胞突變率約 45%~55%",
      "traffic_light_summary": "🟢 標靶藥敏感（Ex19del/L858R 優先使用奧希替尼、吉非替尼等 EGFR-TKI；🔴 服藥期間嚴禁食用西柚/葡萄柚以免抑制 CYP3A4 引起毒性蓄積）",
      "drugs_guide": [
        {
          "drug_name": "Osimertinib / Gefitinib",
          "chinese_name": "奧希替尼 / 吉非替尼",
          "traffic_light": "GREEN_NORMAL",
          "clinical_alert": "伴隨診斷證實 EGFR Ex19del 或 L858R 陽性患者一線使用奧希替尼或吉非替尼療效顯著優於傳統化療。",
          "cpic_level": "FDA / NMPA Companion Diagnostic Level 1A"
        }
      ],
      "dietary_contraindications": [
        "口服奧希替尼、吉非替尼期間嚴禁食用西柚（葡萄柚）、苦橙及聖約翰草，防止干擾 CYP3A4 酶引起血藥濃度異常"
      ]
    },
    "evidence": {
      "overall_score": 0.95,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ 臨床精準用藥最高指南推薦 (FDA / TFDA / NMPA 核准)",
      "clinvar_pathogenic_count": 890,
      "clinvar_summary_chinese": "已證實對奧希替尼、吉非替尼等標靶藥敏感",
      "opentargets_score": 0.96,
      "key_pmids": [
        "PMID:15118073",
        "PMID:29151359"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "長期吸菸者、廚房油煙接觸多或有家族肺癌史者，建議 40 歲起每年做一次胸部低劑量螺旋 CT (LDCT)。",
      "lifestyle_tips": [
        "絕對遠離一手菸與二手菸，烹飪時開啟強力抽油煙機",
        "室內注意通風，空氣污染天氣佩戴防霾口罩",
        "避免接觸氡氣、石棉等職業粉塵暴露"
      ]
    },
    "doctor_checklist": {
      "specialty": "胸腔外科 / 腫瘤內科 / 胸腔內科",
      "questions": [
        "醫師，我的穿刺組織基因檢測顯示 EGFR 突變，目前推薦一代、二代還是三代標靶藥（如奧希替尼）？",
        "標靶藥平時需要注意哪些副作用（如皮疹、腹瀉）？該怎麼緩解？",
        "治療期間需要多久回診追蹤一次胸部 CT 和腦部磁振造影？"
      ]
    },
    "myth_buster": {
      "myth": "「肺癌一定要做化療，化療人會掉髮、暴瘦很受罪嗎？」",
      "truth": "不一定！如果檢測出 EGFR 等敏感基因突變，首選方案通常是口服標靶藥（就像吃降壓藥一樣方便），不掉髮、噁心反應很輕，絕大多數患者可以在家正常生活和工作。"
    }
  },
  {
    "association_id": "GDA_ALDH2_ALCOHOL_SENSITIVITY_PGX",
    "gene": {
      "symbol": "ALDH2",
      "name": "Aldehyde dehydrogenase 2 family member",
      "chinese_name": "乙醛脫氫酶 2 (解酒與硝化甘油活化基因)",
      "ensembl_id": "ENSG00000111275",
      "entrez_id": "217",
      "biotype": "protein_coding",
      "chromosome": "12q24.12 (12 號染色體)",
      "metaphor": {
        "title": "🍷 肝臟裡的【酒精解毒流水線二號工人（罷工導致劇毒乙醛堆積臉紅）】",
        "story": "酒精進入肝臟後需要兩條流水線接力解毒：一號工人（ADH1B）把酒精變成劇毒的一級致癌物「乙醛」；二號工人（ALDH2）緊接著把劇毒乙醛變成無害的「乙酸（醋）」排出體外。高達 30%~40% 的東亞人攜帶 ALDH2*2 變異，相當於二號工人天生罷工！結果喝一口酒，劇毒乙醛就在全身血管裡瘋狂堆積，導致微血管擴張（滿臉通紅、心跳加速）。更要命的是，心絞痛救命藥「硝酸甘油（硝化甘油）」也需要這位二號工人幫忙才能釋放一氧化氮擴張血管，二號工人罷工會導致硝酸甘油失靈！"
      },
      "plain_summary": "ALDH2 決定了人體能否順利代謝酒精中的劇毒產物「乙醛」，同時也是心絞痛急救藥「硝酸甘油（硝化甘油）」在體內起效的關鍵轉化酶。攜帶 ALDH2*2 (rs671) 變異的人群不僅喝酒易臉紅、食道癌風險大幅飆升，且在突發心絞痛時舌下含服硝酸甘油可能無效！",
      "academic_summary": "ALDH2 編碼粒線體乙醛脫氫酶，同時具備硝酸酯酶活性（催化硝酸甘油生物轉化為 NO 激活可溶性鳥苷酸環化酶）。東亞高頻錯義突變 rs671 (c.1510G>A, p.Glu504Lys, ALDH2*2) 呈顯性負效應，雜合子酶活性降至 10%~20%，純合子幾乎完全喪失活性，導致乙醛蓄積及硝酸甘油抗心絞痛藥效顯著降低。"
    },
    "disease": {
      "id": "MONDO:0012454",
      "name": "Acute alcohol sensitivity / Aldehyde dehydrogenase 2 deficiency",
      "chinese_name": "急性酒精敏感 / 乙醛脫氫酶缺乏症 & 硝酸甘油用藥無效風險",
      "categories": [
        "藥物基因組學 (PGx)",
        "代謝體質特徵",
        "腫瘤易感風險"
      ],
      "inheritance_mode": "體染色體顯性負效應遺傳 (Autosomal Dominant-Negative)",
      "severity_badge": "🔴 用藥紅燈警示 (硝酸甘油急救可能無效 & 飲酒致癌高危)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0025537",
        "name": "Alcohol flush reaction",
        "chinese_name": "飲酒後臉部潮紅反應"
      },
      {
        "hpo_id": "HP:0001649",
        "name": "Tachycardia",
        "chinese_name": "飲酒後心搏過速/心悸"
      },
      {
        "hpo_id": "HP:0011459",
        "name": "Esophageal squamous cell carcinoma",
        "chinese_name": "食道鱗狀細胞癌易感性顯著升高"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Nitroglycerin",
        "chinese_name": "硝酸甘油 / 硝化甘油 (需 ALDH2 代謝活化)",
        "mechanism": "經粒線體 ALDH2 硝酸酯酶活性轉化為一氧化氮 (NO) 舒張冠狀動脈血管",
        "approval_status": "FDA / TFDA / NMPA 核准 (攜帶 ALDH2*2 者藥效顯著受阻)"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "ALDH2*2 (rs671, c.1510G>A, p.Glu504Lys)",
      "population_frequency": "東亞人群（臺灣、中國大陸、日本、韓國）攜帶率高達 30%~47%",
      "traffic_light_summary": "🔴 紅燈警示：心絞痛急救藥「硝酸甘油（硝化甘油）」需依賴 ALDH2 轉化為一氧化氮才能起效，攜帶者舌下含服硝酸甘油可能無效甚至耽誤急救！同時嚴禁飲酒（食道癌風險升高 6~12 倍）。",
      "drugs_guide": [
        {
          "drug_name": "Nitroglycerin (Sublingual)",
          "chinese_name": "硝酸甘油舌下錠/噴霧劑",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "ALDH2*2 (rs671 A等位基因) 攜帶者粒線體硝酸酯酶活性嚴重缺失，舌下含服硝酸甘油無法有效生成 NO，抗心絞痛急救失效率極高；建議在心臟內科醫師指導下改備不完全依賴 ALDH2 的急救藥（如硝酸異山梨酯）。",
          "cpic_level": "PharmGKB Level 1A / 臨床藥物基因組學專家共識強烈推薦"
        },
        {
          "drug_name": "Ethanol (Alcohol)",
          "chinese_name": "乙醇（各類酒類及含酒精製劑/藿香正氣水）",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "禁止飲酒，同時嚴禁將含酒精藥物（如十滴水、藿香正氣水）與頭孢菌素類抗生素同服。",
          "cpic_level": "WHO / IARC Group 1 Carcinogen Warning"
        }
      ],
      "dietary_contraindications": [
        "終身嚴格戒酒（啤酒、烈酒、紅酒、藥酒均會造成一級致癌物乙醛蓄積）",
        "避免過燙飲食（超過 65℃ 熱飲熱食疊加乙醛會成倍放大食道黏膜癌變風險）"
      ]
    },
    "evidence": {
      "overall_score": 0.97,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ 亞洲人群最重要日常急救與防癌基因共識",
      "clinvar_pathogenic_count": 32,
      "clinvar_summary_chinese": "rs671 被明確認證為急性酒精敏感與硝酸甘油藥物反應核心位點",
      "opentargets_score": 0.89,
      "key_pmids": [
        "PMID:16099987",
        "PMID:19320795"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "若有長期飲酒史且喝酒臉紅者，建議 40 歲起定期進行高解析染色內視鏡/胃食道鏡篩檢早癌；有冠心病風險者提前在心臟內科備好替代硝酸甘油的急救預案。",
      "lifestyle_tips": [
        "【救命常識】若本人或家中父母喝酒臉紅，務必檢查家庭急救箱：心絞痛發作時舌下含服硝酸甘油可能無效，請提前諮詢心臟內科醫師更換急救常備藥",
        "徹底拒絕酒桌勸酒文化，向親友科普「喝酒臉紅不是能喝，而是乙醛中毒」",
        "注意口腔衛生（口腔細菌也會將微量酒精轉化為乙醛）"
      ]
    },
    "doctor_checklist": {
      "specialty": "心臟內科 / 胃腸肝膽科 / 臨床藥學門診",
      "questions": [
        "醫師您好，我基因檢測提示攜帶 ALDH2*2 (rs671) 變異（平時一喝酒就臉紅），如果突發冠心病心絞痛，舌下含服硝酸甘油是不是可能無效？您建議我隨身備什麼替代急救藥？",
        "我以前因為應酬喝過不少酒，是否需要做一次胃鏡重點排查食道和胃部黏膜病變？",
        "日常服用感冒藥或中成藥（如藿香正氣水）時，我需要注意哪些含乙醇成分的藥物？"
      ]
    },
    "myth_buster": {
      "myth": "「喝酒上臉說明血液循環好、講義氣，而且酒量是可以靠多喝練出來的？」",
      "truth": "大錯特錯！喝酒臉紅是身體發出的「乙醛中毒紅色警報」。ALDH2 基因缺陷是天生的，一輩子都練不出解毒酶。所謂「練出來的酒量」只是身體對頭暈麻木了，但劇毒乙醛依然在靜悄悄地腐蝕你的食道和血管！"
    }
  },
  {
    "association_id": "GDA_G6PD_FAVISM_PGX",
    "gene": {
      "symbol": "G6PD",
      "name": "Glucose-6-phosphate dehydrogenase",
      "chinese_name": "葡萄糖-6-磷酸脫氫酶 (蠶豆症基因)",
      "ensembl_id": "ENSG00000160211",
      "entrez_id": "2539",
      "biotype": "protein_coding",
      "chromosome": "Xq28 (X 染色體)",
      "metaphor": {
        "title": "🛡️ 紅血球的【防氧化防彈衣（缺乏時紅血球遇到蠶豆或特定藥物會像氣球一樣破裂溶血）】",
        "story": "紅血球每天在血管裡運送氧氣，很容易受到「氧化自由基」的攻擊。G6PD 就像是給紅血球織造防氧化防彈衣（還原型穀胱甘肽 NADPH）的唯一機器。如果 G6PD 天生缺乏，紅血球平時在風平浪靜時還能正常工作；但一旦吃了新鮮蠶豆、接觸了樟腦丸，或者誤服了磺胺類消炎藥、伯氨喹等強氧化性藥物，沒有防彈衣保護的紅血球就會在短短幾小時內像被針扎破的氣球一樣成批炸裂（急性溶血），出現醬油色尿、全身黃疸甚至危及生命！"
      },
      "plain_summary": "G6PD 缺乏症俗稱「蠶豆症（蠶豆病）」，屬於 X 連鎖不完全顯性遺傳（男性半合子更易發病，女性雜合子表現不一），在臺灣及華南地區尤為常見。只要終身嚴格避開新鮮蠶豆及禁用藥物清單，攜帶者平時與一般人完全一樣健康！",
      "academic_summary": "G6PD 編碼五碳糖磷酸途徑 (PPP) 限速酶，催化 6-磷酸葡萄糖生成 6-磷酸葡萄糖酸內酯並產生紅血球唯一的 NADPH 來源以維持還原型穀胱甘肽 (GSH) 穩態。X 連鎖致病變異（如常見位點 c.1376G>T, c.1388G>A）導致酶活性降低，在蠶豆嘧啶葡糖苷或氧化性藥物誘導下引發急性非免疫性溶血性貧血。"
    },
    "disease": {
      "id": "MONDO:0005775",
      "name": "Glucose-6-phosphate dehydrogenase deficiency (Favism)",
      "chinese_name": "蠶豆症 (蠶豆病) / 葡萄糖-6-磷酸脫氫酶缺乏症",
      "categories": [
        "藥物基因組學 (PGx)",
        "遺傳性血液代謝病",
        "日常飲食與用藥禁忌"
      ],
      "inheritance_mode": "X 連鎖不完全顯性遺傳 (X-Linked Incomplete Dominant)",
      "severity_badge": "🔴 終身用藥與飲食紅燈禁忌 (避開誘因即可終身健康)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001878",
        "name": "Hemolytic anemia",
        "chinese_name": "急性溶血性貧血"
      },
      {
        "hpo_id": "HP:0000952",
        "name": "Jaundice",
        "chinese_name": "黃疸 / 新生兒高膽紅素血症"
      },
      {
        "hpo_id": "HP:0012072",
        "name": "Hemoglobinuria",
        "chinese_name": "血紅素尿 (濃茶色/醬油色尿)"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Rasburicase / Primaquine / Sulfonamides (Contraindicated)",
        "chinese_name": "拉布立酶 / 伯氨喹 / 磺胺類 (嚴禁使用之高危氧化性藥物)",
        "mechanism": "誘發強氧化壓力導致 G6PD 缺乏紅血球發生變性珠蛋白小體 (Heinz bodies) 沉積與急性溶血",
        "approval_status": "CPIC Level A / FDA 黑框禁用警示"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "常見致病位點 c.1376G>T (Canton), c.1388G>A (Kaiping), c.95A>G (Gaohe)",
      "population_frequency": "全球超 4 億人攜帶；臺灣及華南地區發生率約 3%~10%",
      "traffic_light_summary": "🔴 嚴禁食用新鮮蠶豆，禁用磺胺類抗生素、伯氨喹、拉布立酶、含樟腦/臭丸衣物及部分退燒藥（乙醯苯胺/高劑量阿斯匹靈）與部分中成藥！",
      "drugs_guide": [
        {
          "drug_name": "Sulfonamides (e.g., Sulfamethoxazole)",
          "chinese_name": "磺胺類抗生素（如復方新諾明/磺胺甲噁唑）",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "CPIC 指南明確列為高溶血風險藥物，G6PD 缺乏者嚴禁使用，可改用盤尼西林類或頭孢菌素類抗生素。",
          "cpic_level": "CPIC Guideline Level A (Avoid Use)"
        },
        {
          "drug_name": "Primaquine / Tafenoquine / Rasburicase / Methylene Blue",
          "chinese_name": "伯氨喹 / 他非諾喹 / 拉布立酶 / 亞甲藍",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "極高急性致死性溶血風險，FDA 仿單黑框警告嚴禁用於 G6PD 缺乏症患者。",
          "cpic_level": "CPIC Guideline Level A (Contraindicated)"
        },
        {
          "drug_name": "Camphor / Naphthalene / Certain Analgesics",
          "chinese_name": "樟腦丸（臭丸/萘丸）、乙醯苯胺、非那西丁及含金銀花/牛黃/薄荷腦的部分中藥製劑",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "嬰幼兒衣物嚴禁放置樟腦丸/臭丸；退燒優先按常規劑量選用乙醯胺酚或布洛芬（遵醫囑）。",
          "cpic_level": "兒科醫學會蠶豆症診治共識"
        }
      ],
      "dietary_contraindications": [
        "終身嚴禁食用新鮮蠶豆、乾蠶豆及含有蠶豆成分的冬粉/零食（如蠶豆酥、注意甄別含蠶豆的豆瓣醬）",
        "哺乳期母親若寶寶患有蠶豆症，母親同樣嚴禁食用蠶豆及上述禁用藥物"
      ]
    },
    "evidence": {
      "overall_score": 0.99,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ 國際 CPIC 與兒科新生兒篩檢最高級別指南",
      "clinvar_pathogenic_count": 245,
      "clinvar_summary_chinese": "已明確收錄 200+ 種 G6PD 酶活性缺乏致病位點",
      "opentargets_score": 0.95,
      "key_pmids": [
        "PMID:24787449",
        "PMID:35993450"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "臺灣及華南地區已將 G6PD 活性檢測納入新生兒腳跟血常規篩檢；未篩檢的育齡夫妻及兒童可透過基因檢測或紅血球 G6PD 酶活性定量明確狀態。",
      "lifestyle_tips": [
        "隨身在手機和健保卡夾裡保存一張《G6PD 蠶豆症禁用藥物紅燈卡》，每次去醫院看病、買感冒藥或打針前第一步主動出示給醫師和藥師",
        "家裡衣櫃徹底清除所有樟腦丸（臭丸）、萘丸，改用物理除濕盒",
        "一旦吃錯東西或服藥後出現臉色蒼白、精神萎靡、小便呈濃茶色或醬油色，必須爭分奪秒送急診搶救！"
      ]
    },
    "doctor_checklist": {
      "specialty": "小兒科 / 血液內科 / 臨床藥學門診",
      "questions": [
        "醫師您好，我（或我家寶寶）確診有 G6PD 缺乏症（蠶豆症），今天開的處方藥和退燒藥裡有沒有任何可能誘發溶血的成分？",
        "寶寶發燒感冒時，按標準體重劑量使用乙醯胺酚（普拿疼）或布洛芬是安全的嗎？",
        "我是女性 G6PD 雜合攜帶者，懷孕和哺乳期間我自己的飲食和用藥需要同樣嚴格遵守蠶豆症禁忌嗎？"
      ]
    },
    "myth_buster": {
      "myth": "「蠶豆症只有小時候才會犯，長大成年以後身體強壯了就可以隨便吃蠶豆了嗎？」",
      "truth": "絕對不能！G6PD 基因缺陷是伴隨終身的。雖然成年人紅血球總量比嬰幼兒大，但成年人一旦大量吃新鮮蠶豆或誤服磺胺類、伯氨喹等禁藥，依然會引發凶險的急性大溶血甚至急性腎衰竭，必須終身忌口和避開禁藥！"
    }
  },
  {
    "association_id": "GDA_MTHFR_HOMOCYSTEINEMIA_PGX",
    "gene": {
      "symbol": "MTHFR",
      "name": "Methylenetetrahydrofolate reductase",
      "chinese_name": "亞甲基四氫葉酸還原酶 (葉酸代謝基因)",
      "ensembl_id": "ENSG00000177000",
      "entrez_id": "4524",
      "biotype": "protein_coding",
      "chromosome": "1p36.22 (1 號染色體)",
      "metaphor": {
        "title": "🌿 人體葉酸加工廠的【轉化機器（效率降低導致普通葉酸難以轉化為活性葉酸，引起同半胱胺酸升高）】",
        "story": "我們從蔬菜或普通葉酸錠裡吃進去的葉酸是「半成品原材料」，必須經過身體裡一台叫 MTHFR 的核心轉化機器加工，才能變成細胞真正能用的成品——「5-甲基四氫葉酸（活性葉酸）」，用來清理血管裡的代謝垃圾「同半胱胺酸 (Hcy)」並為胎兒神經發育提供原料。如果攜帶 MTHFR C677T (rs1801133) 突變，這台轉化機器的運轉效率就會跌到原來的 30%~65%。結果普通葉酸堆在門口進不去，血管裡的同半胱胺酸越積越高，不僅影響準媽媽備孕，還會讓中老年人更容易得 H 型高血壓和腦中風！"
      },
      "plain_summary": "MTHFR 是控制人體葉酸代謝與血管同半胱胺酸（Hcy）濃度的核心基因。華人族群中 C677T (rs1801133) 變異非常普遍：備孕女性攜帶該變異時建議精準補充「5-甲基四氫葉酸（活性葉酸）」或遵醫囑調整劑量；中老年人攜帶者需定期檢測血同半胱胺酸（Hcy），配合葉酸+B群維生素科學預防腦中風。",
      "academic_summary": "MTHFR 催化 5,10-亞甲基四氫葉酸不可逆地還原為 5-甲基四氫葉酸 (5-MTHF)，作為一碳單位代謝核心供體驅動甲硫胺酸合酶將同半胱胺酸 (Hcy) 重新甲基化為甲硫胺酸。常見錯義多態性位點 C677T (rs1801133, c.665C>T, p.Ala222Val) 導致酶熱穩定性下降，TT 純合子酶活性降低約 65%~70%，引起高同半胱胺酸血症，增加胎兒神經管缺陷 (NTDs) 及 H 型高血壓併發缺血性腦中風風險，並增加高劑量甲氨蝶呤 (Methotrexate) 化療黏膜炎與骨髓抑制毒性。"
    },
    "disease": {
      "id": "MONDO:0004743",
      "name": "Homocystinuria / Hyperhomocysteinemia due to MTHFR deficiency",
      "chinese_name": "葉酸代謝障礙與高同半胱胺酸血症 (H型高血壓與腦中風風險 / 孕期葉酸缺乏風險)",
      "categories": [
        "藥物基因組學 (PGx)",
        "孕產優生營養基因",
        "心腦血管慢病體質"
      ],
      "inheritance_mode": "體染色體隱性遺傳 / 共顯性酶活性劑量效應 (Autosomal Recessive / Codominant)",
      "severity_badge": "🟡 精準營養與慢病干預標靶 (補充活性葉酸即可精準改善)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0002160",
        "name": "Hyperhomocystinemia",
        "chinese_name": "高同半胱胺酸血症 (血 Hcy ≥ 10 μmol/L)"
      },
      {
        "hpo_id": "HP:0000822",
        "name": "Hypertension",
        "chinese_name": "H 型高血壓 (高血壓伴高同半胱胺酸)"
      },
      {
        "hpo_id": "HP:0002140",
        "name": "Ischemic stroke",
        "chinese_name": "缺血性腦中風易感風險"
      },
      {
        "hpo_id": "HP:0002412",
        "name": "Neural tube defect",
        "chinese_name": "胎兒神經管缺陷風險（母體活性葉酸不足時）"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Levomefolate calcium (5-MTHF)",
        "chinese_name": "5-甲基四氫葉酸鈣 (活性葉酸)",
        "mechanism": "繞過 MTHFR 酶轉化瓶頸，直接提供生物活性一碳單位供體降低血 Hcy",
        "approval_status": "臨床營養與優生指南推薦"
      },
      {
        "drug_name": "Enalapril / Folic acid",
        "chinese_name": "依那普利葉酸錠 (用於 H 型高血壓預防腦中風)",
        "mechanism": "ACEI 降壓聯合葉酸降低同半胱胺酸協同降低首發腦中風風險 (CSPPT 研究)",
        "approval_status": "TFDA / NMPA 核准"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "MTHFR C677T (rs1801133, c.665C>T, p.Ala222Val) 及 A1298C (rs1801131)",
      "population_frequency": "華人族群 C677T TT 純合型佔比高達 20%~35%",
      "traffic_light_summary": "🟡 黃燈精準指導：① 備孕女性 TT 型普通合成葉酸轉化慢，建議直接補充【5-甲基四氫葉酸（活性葉酸）】或遵醫囑增補；② 高血壓伴 Hcy 升高者需同步降壓+降 Hcy 預防腦中風；③ 腫瘤/風濕患者使用【甲氨蝶呤】時 TT 型易發生嚴重口腔潰瘍與骨髓抑制，需嚴密監測並及時用亞葉酸鈣解救。",
      "drugs_guide": [
        {
          "drug_name": "Folic Acid vs. 5-Methyltetrahydrofolate (5-MTHF)",
          "chinese_name": "普通合成葉酸 vs. 5-甲基四氫葉酸（活性葉酸）",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "MTHFR 677TT 純合型孕婦對普通合成葉酸轉化效率僅約 30%，建議優先選擇無需 MTHFR 轉化的 5-甲基四氫葉酸（活性葉酸）或按周產期指南個人化調整葉酸劑量（0.8 mg/d）。",
          "cpic_level": "臨床合理補充葉酸多學科專家共識"
        },
        {
          "drug_name": "Methotrexate (MTX)",
          "chinese_name": "甲氨蝶呤（抗腫瘤/類風濕免疫抑制劑）",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "MTHFR 677TT 基因型患者接受甲氨蝶呤治療時，發生肝毒性、口腔黏膜炎和白血球減少的風險顯著增加，需密切監測血液常規、肝功能及血藥濃度。",
          "cpic_level": "PharmGKB Level 2A Clinical Annotation"
        }
      ],
      "dietary_contraindications": [
        "避免長期只吃精製白米白麵而缺乏深綠色葉菜（天然食物葉酸及維生素 B6、B12 是同半胱胺酸代謝必需輔酶）",
        "限制重鹽醃製飲食與吸菸（高鹽與吸菸會協同高 Hcy 加速腦血管動脈粥樣硬化）"
      ]
    },
    "evidence": {
      "overall_score": 0.93,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ 腦中風預防 (CSPPT) 與周產期優生權威共識",
      "clinvar_pathogenic_count": 115,
      "clinvar_summary_chinese": "C677T (rs1801133) 是全球研究最透徹的葉酸代謝與藥物反應多態性位點之一",
      "opentargets_score": 0.88,
      "key_pmids": [
        "PMID:7647779",
        "PMID:25775051"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "備孕夫妻建議孕前 3 個月檢測紅血球葉酸濃度；40 歲以上中老年人（尤其是高血壓患者）每年體檢務必加查一項抽血指標：血同半胱胺酸（Hcy，理想值 < 10 μmol/L）。",
      "lifestyle_tips": [
        "【備孕準媽媽】若檢出 MTHFR 677TT 型，可在婦產科醫師指導下直接選用含有「5-甲基四氫葉酸（活性葉酸）」的補充劑，吸收利用率更高",
        "【中老年父母】若患有高血壓且血 Hcy ≥ 10 μmol/L（即佔高血壓總數約 75% 的「H 型高血壓」），在降壓同時補充葉酸、維生素 B6 和維生素 B12，可顯著降低腦中風風險",
        "日常多吃菠菜、青花菜、蘆筍、酪梨等富含天然葉酸的新鮮蔬果（急火快炒減少葉酸流失）"
      ]
    },
    "doctor_checklist": {
      "specialty": "婦產科 / 優生遺傳門診 / 心臟內科 / 神經內科",
      "questions": [
        "醫師您好，我的葉酸基因檢測顯示 MTHFR C677T 為 TT 純合突變，備孕期間我是應該換用 5-甲基四氫葉酸（活性葉酸），還是調整葉酸補充劑量？",
        "我父母有高血壓，去醫院抽血查「同半胱胺酸 (Hcy)」如果偏高，是否屬於 H 型高血壓？需要聯合補充葉酸預防腦中風嗎？",
        "除了補充葉酸，我是否需要同時抽血檢查維生素 B12 和鐵蛋白濃度？"
      ]
    },
    "myth_buster": {
      "myth": "「葉酸只有懷孕的年輕女人才需要吃，中老年人特別是男性吃葉酸毫無用處？」",
      "truth": "大錯特錯！在華人族群中，約 75% 的高血壓患者合併高同半胱胺酸（即 H 型高血壓），這正是腦中風發病率居高不下的重要元兇（尤其與 MTHFR C677T 突變率高且葉酸攝取不足有關）。著名的 CSPPT 臨床研究證實，H 型高血壓中老年人科學補充葉酸可將首發腦中風風險顯著降低 21%！"
    }
  },
  {
    "association_id": "GDA_CYP2C19_CLOPIDOGREL",
    "gene": {
      "symbol": "CYP2C19",
      "name": "cytochrome P450 family 2 subfamily C member 19",
      "chinese_name": "細胞色素 P450 2C19 (抗血小板藥物代謝基因)",
      "ensembl_id": "ENSG00000165841",
      "entrez_id": "1557",
      "biotype": "protein_coding",
      "chromosome": "10q23.33 (10 號染色體)",
      "metaphor": {
        "title": "🔑 肝臟裡的【抗血栓前驅藥解鎖鑰匙匠】",
        "story": "抗血小板名藥「保栓通 (Clopidogrel / Plavix)」剛吞下肚時其實是一把還沒開鋒的「前驅藥鎖頭」，必須經過肝臟裡的 CYP2C19 鑰匙匠加工轉化，才能變成真正能防止血管栓塞的活性藥物。如果攜帶 *2 或 *3 等失去功能的等位基因，鑰匙匠停工，藥物無法順利活化，裝完心臟支架或腦中風後血管再次栓塞的風險就會明顯升高。"
      },
      "plain_summary": "CYP2C19 負責將前驅藥保栓通 (Clopidogrel) 轉化為具抗血小板活性的代謝物。攜帶功能缺失型等位基因（如 *2、*3）的中間代謝者或慢代謝者，服用保栓通的活化效率顯著降低，醫師通常會評估改用不依賴 CYP2C19 活化的替代抗血小板藥物。",
      "academic_summary": "CYP2C19 編碼肝微粒體單加氧酶，催化噻吩並吡啶類前驅藥 Clopidogrel 經兩步氧化生成活性硫醇代謝物以不可逆抑制血小板 P2Y12 受體。常見無功能等位基因 CYP2C19*2 (rs4244285, c.681G>A) 與 CYP2C19*3 (rs4986893, c.636G>A) 導致酶活性缺失，使血小板抑制率下降及心血管不良事件風險上升。"
    },
    "disease": {
      "id": "PHARMGKB:PA166124406",
      "name": "platelet reactivity (Clopidogrel poor metabolism / CYP2C19 pharmacogenetic response)",
      "chinese_name": "保栓通 (Clopidogrel) 藥物活化障礙與血栓風險",
      "categories": [
        "藥物基因組學 (PGx)",
        "心腦血管用藥安全"
      ],
      "inheritance_mode": "體染色體共顯性代謝表型 (Autosomal Codominant Metabolic Phenotype)",
      "severity_badge": "🔴 支架與中風用藥紅綠燈 (慢代謝者需換藥)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001658",
        "name": "Myocardial infarction",
        "chinese_name": "心肌梗塞 / 支架內血栓風險"
      },
      {
        "hpo_id": "HP:0002140",
        "name": "Ischemic stroke",
        "chinese_name": "缺血性腦中風復發風險"
      },
      {
        "hpo_id": "HP:0033678",
        "name": "Acute coronary syndrome",
        "chinese_name": "急性冠心症抗血小板反應不佳"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Prasugrel / Ticagrelor",
        "chinese_name": "普拉格雷 / 替格瑞洛 (替代抗血小板藥)",
        "mechanism": "不依賴 CYP2C19 兩步活化之 P2Y12 受體抑制劑，用於 CYP2C19 慢/中間代謝者",
        "approval_status": "CPIC Level A / FDA 仿單推薦替代方案"
      },
      {
        "drug_name": "Clopidogrel",
        "chinese_name": "氯吡格雷 (保栓通 / Plavix)",
        "mechanism": "需經 CYP2C19 生物轉化之 P2Y12 血小板抑制前驅藥",
        "approval_status": "FDA Boxed Warning / CPIC Level A"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "CYP2C19*2 (rs4244285, c.681G>A)、CYP2C19*3 (rs4986893, c.636G>A)、CYP2C19 *2/*2、CYP2C19 *2/*3、*1/*17 (rs12248560)",
      "population_frequency": "東亞族群 *2 等位基因頻率約 29%，*3 約 4%~9%；慢代謝型 (*2/*2、*2/*3、*3/*3) 約佔 13%~15% (PMID:35034351)",
      "traffic_light_summary": "🔴 慢代謝者 (*2/*2、*2/*3、*3/*3) 應避免使用保栓通 (Clopidogrel)，建議由醫師改用替格瑞洛 (Ticagrelor) 或普拉格雷 (Prasugrel)；🟡 中間代謝者 (*1/*2、*1/*3、*2/*17) 活性降低，建議由醫師考慮替代抗血小板藥物。",
      "drugs_guide": [
        {
          "drug_name": "Clopidogrel (Plavix) - Poor Metabolizer (*2/*2, *2/*3, *3/*3)",
          "chinese_name": "氯吡格雷（保栓通 / Plavix）- 慢代謝型",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "CYP2C19 慢代謝者幾乎無法將保栓通轉化為活性代謝物，抗血小板療效顯著下降。若無禁忌症，醫師通常會選擇普拉格雷 (Prasugrel) 或替格瑞洛 (Ticagrelor) 等替代藥物。",
          "cpic_level": "CPIC Guideline for CYP2C19 and Clopidogrel Level A / FDA Boxed Warning"
        },
        {
          "drug_name": "Clopidogrel (Plavix) - Intermediate Metabolizer (*1/*2, *1/*3, *2/*17)",
          "chinese_name": "氯吡格雷（保栓通 / Plavix）- 中間代謝型",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "CYP2C19 中間代謝者生成活性代謝物減少，在急性冠心症、經皮冠狀動脈介入治療 (PCI) 或腦血管適應症中，建議由專科醫師評估換用其他抗血小板藥物或調整治療策略。",
          "cpic_level": "CPIC Guideline for CYP2C19 and Clopidogrel Level A / PharmGKB Level 1A"
        },
        {
          "drug_name": "Voriconazole / Proton Pump Inhibitors / SSRIs",
          "chinese_name": "伏立康唑 / 氫離子幫浦抑制劑 (Omeprazole) / 部分抗憂鬱藥",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "CYP2C19 亦負責代謝伏立康唑、奧美拉唑與西酞普蘭等藥物；不同代謝表型患者可能需由醫師調整用藥選擇或加強臨床監測。",
          "cpic_level": "CPIC Guideline Level A (Voriconazole / PPIs / SSRIs)"
        }
      ],
      "dietary_contraindications": [
        "服用保栓通期間應避免同時自行服用奧美拉唑 (Omeprazole) 或艾司奧美拉唑 (Esomeprazole)，因其會抑制 CYP2C19 活性",
        "戒菸並限制飲酒，降低血管內皮損傷與消化道出血風險"
      ]
    },
    "evidence": {
      "overall_score": 0.98,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A 暨美國 FDA 黑框警示最高實證",
      "clinvar_pathogenic_count": 617,
      "clinvar_summary_chinese": "ClinVar 與 PharmGKB 收錄 *2 (rs4244285)、*3 (rs4986893)、*17 (rs12248560) 等明確藥物反應位點",
      "opentargets_score": 0.92,
      "key_pmids": [
        "PMID:21716271",
        "PMID:23698643",
        "PMID:35034351"
      ],
      "guideline_ids": [
        "PHARMGKB:PA166251443"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "計畫接受冠狀動脈支架置放術 (PCI)、急性冠心症治療或缺血性腦中風次級預防使用保栓通前，建議進行 CYP2C19 基因型檢測。",
      "lifestyle_tips": [
        "若檢出 CYP2C19 *2 或 *3 等位基因，請務必在就診時主動告知心臟內科或神經內科醫師，切勿自行停用抗血小板藥物",
        "購買胃藥前請先諮詢藥師，避免併用會抑制 CYP2C19 的特定胃酸抑制劑",
        "規律控制血壓、血糖與低密度膽固醇，維持良好作息以保護心血管"
      ]
    },
    "doctor_checklist": {
      "specialty": "心臟內科 / 神經內科 / 臨床藥師門診",
      "questions": [
        "醫師您好，我的基因報告顯示 CYP2C19 為慢代謝或中間代謝型，目前服用的保栓通 (Clopidogrel) 是否需要改用替格瑞洛或普拉格雷？",
        "如果因為保護胃部需要搭配胃藥，哪一種胃藥不會干擾我的抗血小板藥物代謝？",
        "除了抗血小板藥物外，我未來使用特定抗黴菌藥、胃藥或抗憂鬱藥時是否也需要出示這張 CYP2C19 基因卡？"
      ]
    },
    "myth_buster": {
      "myth": "「裝完心臟支架後只要每天乖乖按時吃保栓通，就一定能有效預防血栓？」",
      "truth": "不一定！東亞族群中約有 13%~15% 的人屬於 CYP2C19 慢代謝型，體內缺乏將保栓通「開鎖活化」的酵素。這類患者即使每天按時吃藥，體內也幾乎沒有活性藥效，必須由醫師根據基因結果換用不需 CYP2C19 活化的替代藥物。"
    }
  },
  {
    "association_id": "GDA_CYP2C9_WARFARIN_NSAIDS",
    "gene": {
      "symbol": "CYP2C9",
      "name": "cytochrome P450 family 2 subfamily C member 9",
      "chinese_name": "細胞色素 P450 2C9 (華法林、苯妥英與消炎止痛藥代謝基因)",
      "ensembl_id": "ENSG00000138109",
      "entrez_id": "1559",
      "biotype": "protein_coding",
      "chromosome": "10q23.33 (10 號染色體)",
      "metaphor": {
        "title": "⏳ 肝臟裡的【藥物代謝漏斗】",
        "story": "抗凝血藥「華法林 (Warfarin)」、抗癲癇藥「苯妥英 (Phenytoin)」以及常見的非類固醇消炎止痛藥 (NSAIDs)，在完成任務後都需要通過肝臟裡的 CYP2C9 漏斗勻速排出體外。如果攜帶 *2 或 *3 等功能減弱的等位基因，漏斗口變窄，藥物排不出去而在血液裡越積越多，若按一般常規方式服藥，就容易引發異常出血或藥物中毒反應。"
      },
      "plain_summary": "CYP2C9 負責清除華法林 (Warfarin)、苯妥英 (Phenytoin) 及多種消炎止痛藥（如塞來昔布、美洛昔康、吡羅昔康、布洛芬）。攜帶 *2 或 *3 等位基因者清除藥物較慢，您的醫師可能會調整劑量、加密監測或選擇其他替代藥物。",
      "academic_summary": "CYP2C9 編碼肝微粒體細胞色素 P450 2C9，主司 S-Warfarin、Phenytoin 及多種昔康類/昔布類 NSAIDs 之羥基化清除。功能下降型等位基因 CYP2C9*2 (rs1799853, c.430C>T, p.Arg144Cys) 與 CYP2C9*3 (rs1057910, c.1075A>C, p.Ile359Leu) 顯著降低內在清除率，升高血藥濃度與出血、神經毒性或消化道潰瘍風險。"
    },
    "disease": {
      "id": "MESH:D064420",
      "name": "Drug-Related Side Effects and Adverse Reactions (CYP2C9 warfarin, phenytoin, NSAIDs)",
      "chinese_name": "華法林 / 苯妥英 / 消炎止痛藥代謝減緩與出血敏感風險",
      "categories": [
        "藥物基因組學 (PGx)",
        "抗凝血與止痛用藥安全"
      ],
      "inheritance_mode": "體染色體共顯性代謝表型 (Autosomal Codominant Metabolic Phenotype)",
      "severity_badge": "🟡 劑量敏感警示 (需由醫師調整劑量或選用替代藥物)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001892",
        "name": "Abnormal bleeding",
        "chinese_name": "抗凝血過度相關異常出血風險"
      },
      {
        "hpo_id": "HP:0002239",
        "name": "Gastrointestinal hemorrhage",
        "chinese_name": "消化道出血風險"
      },
      {
        "hpo_id": "HP:0001251",
        "name": "Ataxia",
        "chinese_name": "苯妥英血藥濃度過高所致步態不穩 (共濟失調)"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Warfarin",
        "chinese_name": "華法林 (可邁丁 / Coumadin)",
        "mechanism": "維生素 K 環氧化物還原酶抑制劑，其高活性 S-鏡像異構物由 CYP2C9 代謝清除",
        "approval_status": "CPIC Level A / FDA 仿單標註"
      },
      {
        "drug_name": "Phenytoin / NSAIDs",
        "chinese_name": "苯妥英 / 非類固醇消炎止痛藥 (塞來昔布、美洛昔康、布洛芬等)",
        "mechanism": "治療窗窄之抗癲癇藥及主要經 CYP2C9 代謝之抗發炎止痛藥",
        "approval_status": "CPIC Level A / PharmGKB Level 1A"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "CYP2C9*2 (rs1799853, c.430C>T, p.Arg144Cys)、CYP2C9*3 (rs1057910, c.1075A>C, p.Ile359Leu)",
      "population_frequency": "東亞族群 CYP2C9*3 等位基因頻率約 3%~4%；歐裔族群 *2 約 12%、*3 約 7%~8% (PMID:28198005)",
      "traffic_light_summary": "🟡 慎用與個人化調整：攜帶 CYP2C9 *2 或 *3 者對華法林 (Warfarin)、苯妥英 (Phenytoin) 及多種消炎止痛藥 (NSAIDs) 代謝減慢，您的醫師可能會調整劑量、密切監測 INR，或選擇其他替代藥物。",
      "drugs_guide": [
        {
          "drug_name": "Warfarin",
          "chinese_name": "華法林（口服抗凝血劑）",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "CYP2C9 *2 與 *3 變異會減緩 S-華法林清除並增加出血風險；您的醫師可能會結合 VKORC1 基因型調整劑量並加密 INR 監測，或評估改用其他抗凝血藥物。",
          "cpic_level": "CPIC Guideline for CYP2C9, VKORC1, CYP4F2 and Warfarin Level A"
        },
        {
          "drug_name": "Phenytoin / Fosphenytoin",
          "chinese_name": "苯妥英 / 磷苯妥英（抗癲癇藥）",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "CYP2C9 中間或慢代謝者清除苯妥英能力下降，易發生步態不穩、眼球震顫等神經毒性；在排除 HLA-B*15:02 後，您的醫師可能會調整維持劑量或選擇其他抗癲癇藥物。",
          "cpic_level": "CPIC Guideline for CYP2C9, HLA-B and Phenytoin Level A"
        },
        {
          "drug_name": "NSAIDs (Celecoxib, Flurbiprofen, Meloxicam, Piroxicam, Ibuprofen)",
          "chinese_name": "非類固醇消炎止痛藥（塞來昔布、美洛昔康、吡羅昔康、布洛芬等）",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "CYP2C9 代謝減弱者服用此類止痛藥時血藥暴露量升高，胃腸道出血與腎功能損傷風險增加；您的醫師可能會調整劑量或改用不經 CYP2C9 代謝的替代止痛藥。",
          "cpic_level": "CPIC Guideline for CYP2C9 and NSAIDs Level A"
        }
      ],
      "dietary_contraindications": [
        "服用華法林期間應保持每日深綠色蔬菜（富含維生素 K）攝取量穩定，勿忽多忽少",
        "避免酗酒及自行服用丹參、銀杏、當歸或聖約翰草等影響抗凝血與 CYP2C9 代謝的中草藥保健品"
      ]
    },
    "evidence": {
      "overall_score": 0.96,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A 暨 FDA 藥物基因組學指南確證",
      "clinvar_pathogenic_count": 36,
      "clinvar_summary_chinese": "CYP2C9*2 (rs1799853) 與 *3 (rs1057910) 為國際公認之華法林、苯妥英與 NSAIDs 藥物敏感標誌位點",
      "opentargets_score": 0.89,
      "key_pmids": [
        "PMID:21900891",
        "PMID:28198005",
        "PMID:32189324",
        "PMID:32779747"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "開始使用華法林抗凝血治療、苯妥英抗癲癇治療或需長期服用消炎止痛藥前，建議檢測 CYP2C9（可聯合檢測 VKORC1 與 HLA-B）。",
      "lifestyle_tips": [
        "看診或拔牙手術前，主動向醫師與藥師出示 CYP2C9 基因檢測結果",
        "服藥期間若出現刷牙異常流血、流鼻血不止、皮下大面積瘀青或黑便，應立即回診檢查",
        "切勿自行在藥局購買長期消炎止痛藥服用，應由醫師或藥師評估不依賴 CYP2C9 代謝的品項"
      ]
    },
    "doctor_checklist": {
      "specialty": "心臟內科 / 神經內科 / 風濕免疫科 / 抗凝血藥師門診",
      "questions": [
        "醫師您好，我攜帶 CYP2C9 代謝減慢型變異（*2 或 *3），若需使用抗凝血藥，您建議依基因型調整華法林劑量，還是考慮新型口服抗凝血藥？",
        "如果我因為關節痛或發燒需要止痛消炎藥，有哪些不經由 CYP2C9 代謝的安全替代選擇？",
        "開始服藥後，我應該隔多久抽血監測一次凝血指標 (INR) 或藥物濃度？"
      ]
    },
    "myth_buster": {
      "myth": "「藥局常見的消炎止痛藥（NSAIDs）每個人吃起來代謝速度都一樣，痛了就自己買來長期吃沒關係？」",
      "truth": "錯！塞來昔布、美洛昔康、布洛芬等常見消炎止痛藥高度依賴 CYP2C9 酵素代謝。攜帶 CYP2C9 慢代謝型的人清除藥物速度明顯變慢，長期按一般方式服用容易在體內蓄積，增加胃潰瘍出血與腎臟負擔，務必由醫師指導選藥。"
    }
  },
  {
    "association_id": "GDA_VKORC1_WARFARIN",
    "gene": {
      "symbol": "VKORC1",
      "name": "vitamin K epoxide reductase complex subunit 1",
      "chinese_name": "維生素 K 環氧化物還原酶複合體亞基 1 (華法林敏感度靶點基因)",
      "ensembl_id": "ENSG00000167397",
      "entrez_id": "79001",
      "biotype": "protein_coding",
      "chromosome": "16p11.2 (16 號染色體)",
      "metaphor": {
        "title": "🎛️ 凝血工廠裡的【維生素 K 回收調音旋鈕】",
        "story": "我們的肝臟製造凝血因子時需要不斷回收利用「維生素 K」，而 VKORC1 就是負責把用過的維生素 K 重新充能的機器，也是抗凝血藥「華法林 (Warfarin)」直接踩住的煞車踏板。東亞人群有高達八成以上攜帶 VKORC1 啟動子變異 (rs9923231)，這讓凝血工廠原本產出的 VKORC1 機器就比較少（高敏感型），因此只需要較少量的華法林就能踩住煞車；若誤用歐美標準高劑量，就容易凝血過度抑制而引發出血。"
      },
      "plain_summary": "VKORC1 是抗凝血藥華法林 (Warfarin) 的直接作用靶點。東亞族群普遍攜帶 -1639G>A (rs9923231) 啟動子變異，使肝臟 VKORC1 表現量下降、對華法林高度敏感；您的醫師可能會根據 VKORC1 與 CYP2C9 基因型調降起始與維持劑量，或選擇其他抗凝血藥物。",
      "academic_summary": "VKORC1 編碼維生素 K 環氧化物還原酶複合體亞基 1，催化維生素 K 2,3-環氧化物還原為氫醌型維生素 K，為 γ-麩胺醯羧化酶活化凝血因子 II、VII、IX、X 之限速步驟。啟動子多態性 c.-1639G>A (rs9923231) 降低 VKORC1 轉錄活性，使 AA/GA 基因型患者對華法林敏感性顯著增加。"
    },
    "disease": {
      "id": "PHARMGKB:PA166123298",
      "name": "over-anticoagulation (Warfarin pharmacogenetic dose sensitivity / VKORC1 target sensitivity)",
      "chinese_name": "華法林 (Warfarin) 抗凝血高度敏感體質與出血風險",
      "categories": [
        "藥物基因組學 (PGx)",
        "心血管抗凝血用藥安全"
      ],
      "inheritance_mode": "體染色體共顯性藥效學表型 (Autosomal Codominant Pharmacodynamic Trait)",
      "severity_badge": "🟡 華法林劑量核心指標 (東亞族群高頻高敏感)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001892",
        "name": "Abnormal bleeding",
        "chinese_name": "華法林敏感相關異常出血風險"
      },
      {
        "hpo_id": "HP:0000978",
        "name": "Bruising susceptibility",
        "chinese_name": "皮下容易瘀青紫斑"
      },
      {
        "hpo_id": "HP:0000421",
        "name": "Epistaxis",
        "chinese_name": "反覆鼻出血 / 牙齦出血"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Warfarin",
        "chinese_name": "華法林 (可邁丁 / Coumadin)",
        "mechanism": "直接抑制 VKORC1 以阻斷維生素 K 依賴性凝血因子活化",
        "approval_status": "CPIC Level A / FDA 仿單標註"
      },
      {
        "drug_name": "Direct Oral Anticoagulants (DOACs)",
        "chinese_name": "新型口服抗凝血藥 (Apixaban / Rivaroxaban / Dabigatran / Edoxaban)",
        "mechanism": "直接抑制凝血因子 Xa 或 IIa，不經由 VKORC1 靶點作用",
        "approval_status": "FDA / TFDA 核准臨床替代方案"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "VKORC1 c.-1639G>A (rs9923231) 及 c.1173C>T (rs9934438)",
      "population_frequency": "東亞族群 -1639A (rs9923231) 等位基因頻率高達 85%~90%（AA 純合高敏感型約佔 75%~80%），解釋了東亞人華法林需求量普遍低於歐美人群的原因 (PMID:28198005)",
      "traffic_light_summary": "🟡 慎用與劑量調整：攜帶 VKORC1 -1639G>A (rs9923231) AA 或 GA 型者對華法林敏感度升高，您的醫師可能會結合 CYP2C9 基因型調整華法林劑量並密切監測 INR，或評估其他抗凝血藥物。",
      "drugs_guide": [
        {
          "drug_name": "Warfarin",
          "chinese_name": "華法林（口服抗凝血劑）",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "攜帶 VKORC1 -1639G>A (rs9923231) A 等位基因者肝臟 VKORC1 酶表現量較低，對華法林反應敏感；您的醫師可能會依 CPIC 藥物基因組學演算法調整劑量並加強 INR 監測。",
          "cpic_level": "CPIC Guideline for CYP2C9, VKORC1, CYP4F2 and Warfarin Level A / PharmGKB Level 1A"
        }
      ],
      "dietary_contraindications": [
        "服用華法林期間請維持每日深綠色葉菜（菠菜、芥藍、青花菜）、綠茶及內臟類之維生素 K 攝取穩定，避免突然大量進食或完全禁食",
        "避免食用納豆（含大量納豆激酶與維生素 K2，會強烈干擾華法林抗凝血效果）及蔓越莓汁"
      ]
    },
    "evidence": {
      "overall_score": 0.97,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A 暨 FDA 仿單標註核心抗凝血基因",
      "clinvar_pathogenic_count": 26,
      "clinvar_summary_chinese": "rs9923231 (-1639G>A) 是全球證據最充分的華法林敏感度決定位點",
      "opentargets_score": 0.93,
      "key_pmids": [
        "PMID:21900891",
        "PMID:28198005"
      ],
      "guideline_ids": [
        "PHARMGKB:PA166251465"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "因心房顫動、人工心臟瓣膜置換或深部靜脈栓塞需啟動華法林治療前，建議同步檢測 VKORC1 與 CYP2C9 基因型。",
      "lifestyle_tips": [
        "隨身攜帶抗凝血用藥警示卡，接受牙科拔牙、內視鏡或任何手術前務必提前告知醫師",
        "日常飲食講求「定量穩定」，不必完全禁吃綠色蔬菜，但每週攝取量應保持一致",
        "依照醫囑定期回診抽血檢測國際標準化比值 (INR)，切勿自行增減藥量"
      ]
    },
    "doctor_checklist": {
      "specialty": "心臟內科 / 心臟血管外科 / 抗凝血藥師門診",
      "questions": [
        "醫師您好，我的基因報告顯示 VKORC1 rs9923231 為高敏感型，我的華法林劑量是否需要根據 VKORC1 與 CYP2C9 結果進行個人化調整？",
        "我的理想 INR 控制目標範圍是多少？初期需要隔幾天回診抽血一次？",
        "在我的臨床情況下，適合繼續使用經基因型調整的華法林，還是可以考慮新型口服抗凝血藥 (DOAC)？"
      ]
    },
    "myth_buster": {
      "myth": "「吃華法林抗凝血藥期間，是不是連一口菠菜或綠色蔬菜都絕對不能碰？」",
      "truth": "不是！真正危險的是維生素 K 攝取量「忽高忽低」（例如平常不吃，某天突然吃一大盤菠菜或納豆）。只要每天維持穩定、均衡的蔬菜攝取量，醫師就能根據您的 VKORC1 基因型與 INR 抽血結果把藥效調校在最安全的範圍。"
    }
  },
  {
    "association_id": "GDA_SLCO1B1_STATIN_MYOPATHY",
    "gene": {
      "symbol": "SLCO1B1",
      "name": "solute carrier organic anion transporter family member 1B1",
      "chinese_name": "有機陰離子轉運多肽 1B1 (史他汀類降膽固醇藥肌肉安全基因)",
      "ensembl_id": "ENSG00000134538",
      "entrez_id": "10599",
      "biotype": "protein_coding",
      "chromosome": "12p12.1 (12 號染色體)",
      "metaphor": {
        "title": "🚪 肝臟大門口的【降血脂藥專屬迎賓旋轉門】",
        "story": "史他汀類降膽固醇藥（如辛伐他汀 Simvastatin）吞下肚進入血液後，原本的目標是進入肝臟工廠抑制膽固醇合成，而 SLCO1B1 就是肝臟大門口的專屬迎賓旋轉門。如果攜帶 rs4149056 (*5 / *15) 變異，這扇旋轉門卡住了，降血脂藥進不了肝臟，只好大量滯留在外周血液裡並滲入骨骼肌，容易引發雙腿肌肉酸痛、肌炎，嚴重時甚至導致橫紋肌溶解症。"
      },
      "plain_summary": "SLCO1B1 負責將史他汀類 (Statins) 降血脂藥物轉運進入肝細胞。攜帶 c.521T>C (rs4149056, *5 / *15) 功能減弱變異者，服用辛伐他汀 (Simvastatin) 等藥物時血液濃度升高，發生史他汀相關肌肉症狀 (SAMS) 的風險顯著增加；您的醫師可能會調整劑量或改用受 SLCO1B1 影響較小的其他降血脂藥物。",
      "academic_summary": "SLCO1B1 編碼肝細胞基底外側膜轉運蛋白 OATP1B1，介導羥甲基戊二酸單醯輔酶 A (HMG-CoA) 還原酶抑制劑之肝臟攝取清除。功能減弱錯義變異 c.521T>C (rs4149056, p.Val174Ala, *5/*15) 降低轉運活性，顯著提高 Simvastatin 酸與其他親脂性 Statin 全身暴露量 (AUC)，誘發劑量依賴性骨骼肌毒性。"
    },
    "disease": {
      "id": "MONDO:0033170",
      "name": "Statin toxicity / Statin-associated musculoskeletal symptoms",
      "chinese_name": "史他汀類 (Statin) 降血脂藥相關肌肉病變與橫紋肌溶解風險",
      "categories": [
        "藥物基因組學 (PGx)",
        "心血管與降血脂用藥安全"
      ],
      "inheritance_mode": "體染色體共顯性轉運蛋白表型 (Autosomal Codominant Transporter Phenotype)",
      "severity_badge": "🔴 辛伐他汀高風險警示 (需調整劑量或換用其他 Statin)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0003326",
        "name": "Myalgia",
        "chinese_name": "對稱性近端肌肉酸痛 (肌痛)"
      },
      {
        "hpo_id": "HP:0003198",
        "name": "Myopathy",
        "chinese_name": "藥物相關骨骼肌病變"
      },
      {
        "hpo_id": "HP:0003201",
        "name": "Rhabdomyolysis",
        "chinese_name": "橫紋肌溶解症"
      },
      {
        "hpo_id": "HP:0003236",
        "name": "Elevated circulating creatine kinase activity",
        "chinese_name": "血中肌酸激酶 (CK) 活性升高"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Simvastatin",
        "chinese_name": "辛伐他汀 (素果 / Zocor)",
        "mechanism": "HMG-CoA 還原酶抑制劑，其活性酸代謝物高度依賴 OATP1B1 (SLCO1B1) 轉運入肝",
        "approval_status": "CPIC Level A / FDA 仿單標註"
      },
      {
        "drug_name": "Atorvastatin / Rosuvastatin / Pravastatin",
        "chinese_name": "阿托伐他汀 / 瑞舒伐他汀 / 普伐他汀",
        "mechanism": "其他 HMG-CoA 還原酶抑制劑，可依 SLCO1B1 表型由醫師選擇替代或調整",
        "approval_status": "CPIC Level A 指南涵蓋"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "SLCO1B1 c.521T>C (rs4149056, p.Val174Ala, SLCO1B1*5 / *15)",
      "population_frequency": "東亞族群 c.521T>C (rs4149056) 等位基因頻率約 10%~16%（攜帶率約 20%~28%）(PMID:35152405)",
      "traffic_light_summary": "🔴 攜帶 SLCO1B1 c.521T>C (rs4149056) 功能低下者應避免常規使用高暴露風險之辛伐他汀 (Simvastatin)，您的醫師可能會改用其他史他汀類藥物或調整治療方案；🟡 對阿托伐他汀 (Atorvastatin)、瑞舒伐他汀 (Rosuvastatin) 等亦建議由醫師依表型評估劑量並監測肌肉症狀。",
      "drugs_guide": [
        {
          "drug_name": "Simvastatin",
          "chinese_name": "辛伐他汀（素果 / Zocor）",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "SLCO1B1 功能減弱或低下者（攜帶 rs4149056 C 等位基因，如 *5、*15）服用辛伐他汀時血藥濃度顯著上升，發生肌病與橫紋肌溶解風險大幅升高；您的醫師可能會選擇其他史他汀類藥物或調整劑量。",
          "cpic_level": "CPIC Guideline for SLCO1B1, ABCG2, CYP2C9, and Statins Level A"
        },
        {
          "drug_name": "Atorvastatin / Rosuvastatin / Pitavastatin",
          "chinese_name": "阿托伐他汀（立普妥）/ 瑞舒伐他汀（冠脂妥）/ 匹伐他汀",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "SLCO1B1 功能低下者服用此類史他汀藥物時全身暴露量亦會增加；您的醫師可能會依 CPIC 指南調整起始與最大劑量，或改用替代降血脂策略並監測肌酸激酶 (CK)。",
          "cpic_level": "CPIC Guideline for SLCO1B1, ABCG2, CYP2C9, and Statins Level A"
        }
      ],
      "dietary_contraindications": [
        "服用辛伐他汀或阿托伐他汀期間嚴禁食用葡萄柚或葡萄柚汁（會抑制腸道 CYP3A4，與 SLCO1B1 變異疊加導致血中藥物濃度暴增）",
        "切勿自行同時服用紅麴保健食品（紅麴含天然 Monacolin K，即洛伐他汀成分，併用等同重複過量服藥）"
      ]
    },
    "evidence": {
      "overall_score": 0.97,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A 暨 NEJM SEARCH 研究權威實證",
      "clinvar_pathogenic_count": 46,
      "clinvar_summary_chinese": "rs4149056 (c.521T>C) 是全球公認最強的史他汀相關肌肉毒性遺傳標誌",
      "opentargets_score": 0.91,
      "key_pmids": [
        "PMID:18650507",
        "PMID:22617227",
        "PMID:24918167",
        "PMID:35152405"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "高血脂、冠心病或糖尿病患者啟動史他汀類 (Statins) 降膽固醇治療前，或曾出現不明原因肌肉酸痛者，建議檢測 SLCO1B1 rs4149056。",
      "lifestyle_tips": [
        "服藥期間若出現非運動引起的大腿、小腿或肩背部對稱性肌肉酸痛、無力，或尿液呈深茶色/可樂色，請立即就醫抽血檢查肌酸激酶 (CK)",
        "日常飲食減少飽和脂肪與反式脂肪攝取，增加燕麥、深海魚與水溶性膳食纖維",
        "切勿在服用降血脂處方藥期間自行購買「紅麴納豆膠囊」併服"
      ]
    },
    "doctor_checklist": {
      "specialty": "心臟內科 / 新陳代謝內分泌科 / 家醫科",
      "questions": [
        "醫師您好，我的基因報告顯示攜帶 SLCO1B1 rs4149056 變異，哪一種降血脂藥物對我的肌肉安全性最高？",
        "如果我在服藥期間覺得大腿或小腿肌肉酸痛，什麼情況下需要立刻回診抽血檢測肌酸激酶 (CK)？",
        "除了史他汀類藥物外，依折麥布 (Ezetimibe) 或 PCSK9 抑制劑是否可作為我的輔助或替代選擇？"
      ]
    },
    "myth_buster": {
      "myth": "「吃降膽固醇藥如果覺得腿酸痛，改去買天然『紅麴保健品』吃就不會傷肌肉了？」",
      "truth": "非常危險的迷思！紅麴的核心有效成分 Monacolin K 在化學結構上就是史他汀類藥物（Lovastatin）。攜帶 SLCO1B1 變異的人若自行吃高濃度紅麴，或把紅麴跟處方降血脂藥一起吃，反而更容易引發嚴重肌肉病變甚至橫紋肌溶解！"
    }
  },
  {
    "association_id": "GDA_TPMT_THIOPURINE",
    "gene": {
      "symbol": "TPMT",
      "name": "thiopurine S-methyltransferase",
      "chinese_name": "硫嘌呤甲基轉移酶 (硫嘌呤類免疫抑制與化療藥物代謝基因)",
      "ensembl_id": "ENSG00000137364",
      "entrez_id": "7172",
      "biotype": "protein_coding",
      "chromosome": "6p22.3 (6 號染色體)",
      "metaphor": {
        "title": "🧯 免疫與血液工廠裡的【硫嘌呤藥物安全洩壓閥】",
        "story": "硫唑嘌呤 (Azathioprine) 和巰嘌呤 (Mercaptopurine) 是治療發炎性腸道疾病、自體免疫疾病與白血病的重要藥物。進入人體後，TPMT 就像一座安全洩壓閥，負責把大部分藥物甲基化轉為無活性的安全形式，只留適量活性藥物發揮療效。如果攜帶 TPMT*3A 或 *3C 等無功能變異，洩壓閥卡死關閉，幾乎所有藥物都湧向活性毒性通道，會使骨髓造血工廠遭到重創（嚴重白血球減少與骨髓抑制）。"
      },
      "plain_summary": "TPMT 負責代謝去活化硫嘌呤類藥物（Azathioprine 硫唑嘌呤、Mercaptopurine 巰嘌呤、Thioguanine 硫鳥嘌呤）。攜帶功能缺失型等位基因（如 *2、*3A、*3B、*3C）者服用常規劑量極易發生危及生命的嚴重骨髓抑制；您的醫師可能會大幅調整劑量或改用非硫嘌呤類替代藥物。",
      "academic_summary": "TPMT 編碼硫嘌呤 S-甲基轉移酶，催化 6-MP 及 6-TG 之 S-甲基化失活，與生成細胞毒性 6-硫鳥嘌呤核苷酸 (6-TGN) 之活化途徑相互競爭。無功能等位基因 TPMT*3A (rs1800460 c.460G>A + rs1142345 c.719A>G)、TPMT*3C (rs1142345 c.719A>G) 及 TPMT*2 (rs1800462 c.238G>C) 導致酶蛋白快速降解，造成 6-TGN 過度累積與重度造血毒性。"
    },
    "disease": {
      "id": "MONDO:0012503",
      "name": "Thiopurine S-methyltransferase deficiency",
      "chinese_name": "硫嘌呤甲基轉移酶缺乏症 (硫嘌呤類藥物嚴重骨髓抑制高危體質)",
      "categories": [
        "藥物基因組學 (PGx)",
        "血液腫瘤與自體免疫用藥安全"
      ],
      "inheritance_mode": "體染色體共顯性代謝表型 (Autosomal Codominant Metabolic Phenotype)",
      "severity_badge": "🔴 硫嘌呤類藥物高風險紅燈 (用藥前必測 TPMT + NUDT15)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001882",
        "name": "Decreased total leukocyte count",
        "chinese_name": "白血球減少症"
      },
      {
        "hpo_id": "HP:0001875",
        "name": "Decreased total neutrophil count",
        "chinese_name": "嗜中性白血球低下症"
      },
      {
        "hpo_id": "HP:0005528",
        "name": "Bone marrow hypocellularity",
        "chinese_name": "嚴重骨髓造血抑制"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Azathioprine",
        "chinese_name": "硫唑嘌呤 (移護寧 / Imuran)",
        "mechanism": "硫嘌呤類免疫抑制前驅藥，需由 TPMT 與 NUDT15 共同調控活性代謝物濃度",
        "approval_status": "CPIC Level A / FDA 仿單推薦檢測"
      },
      {
        "drug_name": "Mercaptopurine / Thioguanine",
        "chinese_name": "巰嘌呤 (6-MP) / 硫鳥嘌呤 (6-TG)",
        "mechanism": "嘌呤類似物抗代謝藥物，用於急性淋巴性白血病與發炎性腸道疾病",
        "approval_status": "CPIC Level A / FDA 仿單推薦檢測"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "TPMT*3A (rs1800460 c.460G>A + rs1142345 c.719A>G)、TPMT*3C (rs1142345, c.719A>G)、TPMT*2 (rs1800462, c.238G>C)",
      "population_frequency": "歐裔與非裔族群無功能等位基因攜帶率約 6%~10%（歐裔以 *3A 最常見）；東亞族群以 *3C 為主，等位基因頻率約 1%~2% (PMID:30447069)",
      "traffic_light_summary": "🔴 慢代謝者（雙無功能等位基因，如 *3A/*3A、*3C/*3C）：非惡性適應症應避免使用硫唑嘌呤/巰嘌呤/硫鳥嘌呤，改用非硫嘌呤替代療法；惡性腫瘤適應症需由專科醫師大幅調降劑量。🟡 中間代謝者（如 *1/*3A、*1/*3C）：建議由醫師調降起始劑量並密切監測全血球計數 (CBC)。",
      "drugs_guide": [
        {
          "drug_name": "Azathioprine / Mercaptopurine / Thioguanine — Poor Metabolizer",
          "chinese_name": "硫唑嘌呤 / 巰嘌呤 / 硫鳥嘌呤 — 慢代謝型",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "TPMT 慢代謝者服用常規硫嘌呤藥物會發生危及生命的全血球減少與嚴重骨髓抑制。視所治療的疾病狀況而定，您的醫師可能需要大幅調降劑量，或改選其他替代藥物。",
          "cpic_level": "CPIC Guideline for TPMT, NUDT15 and Thiopurines Level A / FDA Testing Recommended"
        },
        {
          "drug_name": "Azathioprine / Mercaptopurine / Thioguanine — Intermediate Metabolizer",
          "chinese_name": "硫唑嘌呤 / 巰嘌呤 / 硫鳥嘌呤 — 中間代謝型",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "TPMT 中間代謝者體內毒性 6-TGN 濃度較常人升高，骨髓抑制風險增加；您的醫師可能會調降起始劑量並定期追蹤全血球計數與肝功能。",
          "cpic_level": "CPIC Guideline for TPMT, NUDT15 and Thiopurines Level A / PharmGKB Level 1A"
        }
      ],
      "dietary_contraindications": [
        "服藥期間嚴禁自行併用降尿酸藥別嘌醇 (Allopurinol) 或非布司他 (Febuxostat)，因其會抑制黃嘌呤氧化酶 (XO)，使硫嘌呤毒性進一步倍增",
        "避免食用未完全煮熟的生食或生乳製品，以降低白血球偏低期間的感染風險"
      ]
    },
    "evidence": {
      "overall_score": 0.99,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A 暨全球臨床藥物基因組學經典標竿",
      "clinvar_pathogenic_count": 27,
      "clinvar_summary_chinese": "TPMT*2、*3A、*3B、*3C 已列入全球各大醫學中心硫嘌呤處方前標準檢測位點",
      "opentargets_score": 0.9,
      "key_pmids": [
        "PMID:21270794",
        "PMID:23422873",
        "PMID:30447069"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "因克隆氏症、潰瘍性結腸炎、紅斑性狼瘡、器官移植或急性淋巴性白血病需使用硫嘌呤類藥物前，建議同步進行 TPMT 與 NUDT15 雙基因檢測。",
      "lifestyle_tips": [
        "東亞患者除檢測 TPMT 外，務必同時檢測 NUDT15 基因，兩者皆正常才能安心使用常規方案",
        "用藥初期應依醫囑高頻率抽血追蹤全血球計數 (CBC/DC) 與肝指數",
        "若出現不明原因發燒、喉嚨劇痛、口腔潰瘍或異常瘀斑，應立即就醫檢查白血球數量"
      ]
    },
    "doctor_checklist": {
      "specialty": "胃腸肝膽科 / 風濕免疫科 / 血液腫瘤科 / 小兒血液腫瘤科",
      "questions": [
        "醫師您好，我的報告顯示攜帶 TPMT 變異（如 TPMT*3A 或 *3C），我的免疫抑制劑是否需要改用非硫嘌呤類藥物，或由您調整劑量？",
        "除了 TPMT 之外，我的報告是否已經同時涵蓋東亞人更常見的 NUDT15 基因位點？",
        "開始服藥後的前兩個月，我需要每隔幾週回診抽血檢查白血球與血小板？"
      ]
    },
    "myth_buster": {
      "myth": "「我已經測過 TPMT 基因是正常型 (*1/*1)，代表我吃硫唑嘌呤 (Azathioprine) 就絕對不會發生白血球低下？」",
      "truth": "在歐美人群或許如此，但在台灣與東亞族群卻不然！東亞人發生硫嘌呤嚴重白血球低下的主因往往不是 TPMT，而是另一個基因 NUDT15 (*3)。因此 CPIC 國際指南明確建議必須同時檢測 TPMT 與 NUDT15 雙基因！"
    }
  },
  {
    "association_id": "GDA_NUDT15_THIOPURINE",
    "gene": {
      "symbol": "NUDT15",
      "name": "nudix hydrolase 15",
      "chinese_name": "Nudix 水解酶 15 (東亞族群硫嘌呤類藥物骨髓抑制核心基因)",
      "ensembl_id": "ENSG00000136159",
      "entrez_id": "55270",
      "biotype": "protein_coding",
      "chromosome": "13q14.2 (13 號染色體)",
      "metaphor": {
        "title": "🧹 細胞核門口的【毒性核苷酸拆彈專家】",
        "story": "當硫唑嘌呤 (Azathioprine) 或巰嘌呤 (6-MP) 被轉化為準備嵌入 DNA 的高毒性「三磷酸硫鳥嘌呤 (6-TGTP)」時，NUDT15 就是守在細胞核門口的拆彈專家，負責把多餘的毒性磷酸基團剪掉拆解。在台灣與東亞族群中，約每 5 到 6 人就有 1 人攜帶 NUDT15*3 變異，導致拆彈專家失靈，毒性核苷酸直接嵌入造血幹細胞 DNA，引發嚴重白血球驟降與早期異常掉髮。"
      },
      "plain_summary": "NUDT15 是東亞族群使用硫嘌呤類藥物（硫唑嘌呤 Azathioprine、巰嘌呤 Mercaptopurine、硫鳥嘌呤 Thioguanine）發生嚴重白血球低下與掉髮的最主要遺傳原因。攜帶 NUDT15*3 (rs116855232) 等變異者，您的醫師可能會改用非硫嘌呤替代藥物或大幅調整治療劑量。",
      "academic_summary": "NUDT15 編碼核苷二磷酸連接部分 X 水解酶 15，催化細胞毒性活性代謝物 6-硫代-GTP (6-TGTP) 及 6-硫代-dGTP 水解為單磷酸形式，阻止其摻入 DNA 誘發細胞凋亡。東亞高頻錯義變異 NUDT15*3 (rs116855232, c.415C>T, p.Arg139Cys) 使酶熱穩定性與催化活性喪失，導致嚴重早期骨髓抑制與脫髮。"
    },
    "disease": {
      "id": "MONDO:0000210",
      "name": "Thiopurine metabolic disease / NUDT15-related thiopurine toxicity",
      "chinese_name": "硫嘌呤代謝障礙 (東亞高頻 NUDT15 硫嘌呤骨髓抑制與掉髮風險)",
      "categories": [
        "藥物基因組學 (PGx)",
        "東亞精準用藥安全",
        "血液腫瘤與自體免疫"
      ],
      "inheritance_mode": "體染色體共顯性代謝表型 (Autosomal Codominant Metabolic Phenotype)",
      "severity_badge": "🔴 東亞族群必檢紅綠燈 (攜帶率約 18%~20%)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001882",
        "name": "Decreased total leukocyte count",
        "chinese_name": "嚴重白血球減少症"
      },
      {
        "hpo_id": "HP:0001875",
        "name": "Decreased total neutrophil count",
        "chinese_name": "嗜中性白血球低下伴感染風險"
      },
      {
        "hpo_id": "HP:0001596",
        "name": "Alopecia",
        "chinese_name": "藥物誘發之早期嚴重掉髮"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Azathioprine",
        "chinese_name": "硫唑嘌呤 (移護寧 / Imuran)",
        "mechanism": "廣泛用於發炎性腸道疾病、風濕免疫疾病之硫嘌呤前驅藥",
        "approval_status": "CPIC Level A / FDA 仿單推薦檢測"
      },
      {
        "drug_name": "Mercaptopurine / Thioguanine",
        "chinese_name": "巰嘌呤 (6-MP) / 硫鳥嘌呤 (6-TG)",
        "mechanism": "急性淋巴性白血病維持期核心化療藥，受 NUDT15 直接去活化調控",
        "approval_status": "CPIC Level A / FDA 仿單推薦檢測"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "NUDT15*3 (rs116855232, c.415C>T, p.Arg139Cys)、NUDT15*2、NUDT15*5、NUDT15*6",
      "population_frequency": "東亞族群（含台灣、日本、韓國、華人）NUDT15*3 (rs116855232) 等位基因頻率高達 9%~11%（攜帶率約 18%~20%，純合慢代謝型約 1%），遠高於歐裔族群 (<1%) (PMID:25108385, PMID:30447069)",
      "traffic_light_summary": "🔴 慢代謝者（如 NUDT15 *3/*3）：非惡性適應症應避免使用硫唑嘌呤/巰嘌呤/硫鳥嘌呤並改用替代藥物，白血病適應症需由專科醫師大幅調降劑量；🟡 中間代謝者（如 *1/*3）：建議由醫師調降起始劑量並密集監測全血球計數。",
      "drugs_guide": [
        {
          "drug_name": "Azathioprine / Mercaptopurine / Thioguanine — Poor Metabolizer (*3/*3)",
          "chinese_name": "硫唑嘌呤 / 巰嘌呤 / 硫鳥嘌呤 — 慢代謝型 (*3/*3)",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "NUDT15 慢代謝者對硫嘌呤極度不耐受，常規方案易引發嚴重全血球低下與大面積掉髮。視所治療的疾病狀況而定，您的醫師可能需要大幅調降劑量，或改選其他替代藥物。",
          "cpic_level": "CPIC Guideline for TPMT, NUDT15 and Thiopurines Level A / FDA Testing Recommended"
        },
        {
          "drug_name": "Azathioprine / Mercaptopurine / Thioguanine — Intermediate Metabolizer (*1/*3)",
          "chinese_name": "硫唑嘌呤 / 巰嘌呤 / 硫鳥嘌呤 — 中間代謝型 (*1/*3)",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "NUDT15 中間代謝者發生白血球低下的風險顯著高於一般型；您的醫師可能會依 CPIC 指南調降起始劑量，並密切追蹤血液常規。",
          "cpic_level": "CPIC Guideline for TPMT, NUDT15 and Thiopurines Level A / PharmGKB Level 1A"
        }
      ],
      "dietary_contraindications": [
        "避免同時自行服用別嘌醇 (Allopurinol) 等黃嘌呤氧化酶抑制劑，以免加重骨髓毒性",
        "治療期間注意飲食衛生、避免生食，預防白血球低下期間之伺機性感染"
      ]
    },
    "evidence": {
      "overall_score": 0.99,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A 暨亞洲人群精準醫療重大突破",
      "clinvar_pathogenic_count": 69,
      "clinvar_summary_chinese": "NUDT15*3 (rs116855232) 為解釋東亞人硫嘌呤骨髓抑制最重要的藥物基因位點",
      "opentargets_score": 0.91,
      "key_pmids": [
        "PMID:25108385",
        "PMID:26878724",
        "PMID:30447069"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "台灣及東亞患者在啟動硫唑嘌呤 (Azathioprine) 或巰嘌呤 (6-MP) 治療前，強烈建議優先進行 NUDT15（聯合 TPMT）基因篩檢。",
      "lifestyle_tips": [
        "服藥前兩週至兩個月內若發現梳頭或洗頭時異常大量掉髮，往往是 NUDT15 硫嘌呤毒性的早期警訊，請立即回診抽血",
        "按時配合醫院抽血追蹤白血球、嗜中性白血球與血小板計數",
        "若家中有親屬曾因服用免疫抑制劑引發嚴重白血球低下，就醫時請主動告知醫師"
      ]
    },
    "doctor_checklist": {
      "specialty": "胃腸肝膽科 / 風濕免疫科 / 小兒血液腫瘤科 / 皮膚科",
      "questions": [
        "醫師您好，我的報告檢出 NUDT15*3 (rs116855232) 變異，我的治療方案是否應該調整劑量或改用其他非硫嘌呤類的免疫調節藥物？",
        "如果我在服藥初期出現明顯掉髮或疲倦、發燒，是否需要立即停藥並回醫院抽血檢查全血球計數？",
        "我的子女或手足若未來也需要使用這類藥物，是否建議先做 NUDT15 基因篩檢？"
      ]
    },
    "myth_buster": {
      "myth": "「歐美醫學指南說硫嘌呤藥物毒性主要看 TPMT 基因，那亞洲人直接照搬歐美只測 TPMT 就夠了嗎？」",
      "truth": "完全不夠！在歐裔人群中 NUDT15 變異不到 1%，但在台灣與東亞族群中卻高達約 18%~20%，是亞洲患者發生硫嘌呤嚴重骨髓抑制的第一大主因。這正是為什麼基因資料庫與用藥指南必須納入東亞人群數據！"
    }
  },
  {
    "association_id": "GDA_HLA_B_SCAR",
    "gene": {
      "symbol": "HLA-B",
      "name": "major histocompatibility complex, class I, B",
      "chinese_name": "人類白血球抗原 B 型 (嚴重藥物過敏史蒂芬強森症候群警訊基因)",
      "ensembl_id": "ENSG00000234745",
      "entrez_id": "3106",
      "biotype": "protein_coding",
      "chromosome": "6p21.33 (6 號染色體短臂)",
      "metaphor": {
        "title": "🚨 免疫系統裡的【高敏感藥物雷達哨兵】",
        "story": "HLA-B 是細胞表面負責向免疫 T 細胞展示外來物、維持免疫巡邏的哨兵。但在攜帶特定基因型的人體內，哨兵的雷達會發生致命誤判：當攜帶 HLA-B*15:02 的人吃到抗癲癇/三叉神經痛藥「卡馬西平 (Carbamazepine)」，或攜帶 HLA-B*58:01 的人吃到降尿酸痛風藥「別嘌醇 (Allopurinol)」時，藥物會直接卡進哨兵凹槽，誤導殺手 T 細胞對全身皮膚與黏膜發動無差別轟炸，引發致死率極高的史蒂芬強森症候群 (SJS) 或毒性表皮壞死溶解症 (TEN)。"
      },
      "plain_summary": "HLA-B*15:02 與 HLA-B*58:01 是台灣與東亞族群最重要的藥物嚴重皮膚不良反應 (SCAR) 警訊基因。攜帶 HLA-B*15:02 者嚴禁使用卡馬西平 (Carbamazepine)、奧卡西平 (Oxcarbazepine) 與苯妥英 (Phenytoin)；攜帶 HLA-B*58:01 者嚴禁使用降尿酸藥別嘌醇 (Allopurinol)。",
      "academic_summary": "HLA-B 編碼第一類主要組織相容性複合體 (MHC class I) 重鏈。HLA-B*15:02 可與芳香族抗癲癇藥（Carbamazepine、Oxcarbazepine、Phenytoin）直接非共價結合並活化細胞毒性 CD8+ T 細胞釋放顆粒溶解素 (Granulysin)，誘發 SJS/TEN；HLA-B*58:01 則對 Allopurinol 及其代謝物 Oxypurinol 具特異性結合親和力，誘發 SJS/TEN 與藥物反應伴嗜伊紅性白血球增加及全身症狀 (DRESS)。"
    },
    "disease": {
      "id": "MONDO:0005594",
      "name": "Severe cutaneous adverse reaction (SJS / TEN / DRESS)",
      "chinese_name": "嚴重皮膚不良反應 (史蒂芬強森症候群 SJS / 毒性表皮壞死溶解症 TEN)",
      "categories": [
        "藥物基因組學 (PGx)",
        "台灣精準醫療與用藥禁忌",
        "嚴重藥物過敏"
      ],
      "inheritance_mode": "體染色體共顯性免疫易感性 (Autosomal Codominant HLA Allele Susceptibility)",
      "severity_badge": "🔴 絕對用藥禁忌紅燈 (用藥前篩檢可預防致命藥害)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0008066",
        "name": "Abnormal blistering of the skin",
        "chinese_name": "全身皮膚異常水泡與表皮剝離 (SJS/TEN)"
      },
      {
        "hpo_id": "HP:0200097",
        "name": "Oral mucosal blisters",
        "chinese_name": "口腔、眼結膜與生殖器黏膜潰爛水泡"
      },
      {
        "hpo_id": "HP:0040186",
        "name": "Maculopapular exanthema",
        "chinese_name": "藥物誘發之廣泛性斑丘疹"
      },
      {
        "hpo_id": "HP:0001945",
        "name": "Fever",
        "chinese_name": "用藥後突發高燒與全身不適"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Carbamazepine / Oxcarbazepine / Phenytoin (Contraindicated in HLA-B*15:02)",
        "chinese_name": "卡馬西平 (癲通 Tegretol) / 奧卡西平 / 苯妥英",
        "mechanism": "芳香族抗癲癇與神經痛藥物，可結合 HLA-B*15:02 誘發致命性 SJS/TEN",
        "approval_status": "CPIC Level A / FDA 黑框警示 / 台灣健保用藥前給付篩檢 (PMID:21428768)"
      },
      {
        "drug_name": "Allopurinol (Contraindicated in HLA-B*58:01)",
        "chinese_name": "別嘌醇 (安樂普利諾 / Zyloric)",
        "mechanism": "黃嘌呤氧化酶抑制劑降尿酸藥，可結合 HLA-B*58:01 誘發嚴重皮膚不良反應 (SCAR)",
        "approval_status": "CPIC Level A / 台灣前瞻性篩檢實證 (PMID:26399967)"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "HLA-B*15:02 (HLA-B*1502)、HLA-B*58:01 (HLA-B*5801)",
      "population_frequency": "台灣與漢族人群 HLA-B*15:02 攜帶率約 7%~8%（東南亞部分族群達 15%+）(PMID:15057820, PMID:21428768)；台灣漢族人群 HLA-B*58:01 攜帶率約 15%~20% (PMID:15743917, PMID:26399967)",
      "traffic_light_summary": "🔴 雙重絕對紅燈：① HLA-B*15:02 陽性者嚴禁使用卡馬西平 (Carbamazepine)、奧卡西平 (Oxcarbazepine) 及苯妥英 (Phenytoin)；② HLA-B*58:01 陽性者嚴禁使用別嘌醇 (Allopurinol)，應由醫師改用其他安全替代藥物。",
      "drugs_guide": [
        {
          "drug_name": "Carbamazepine (Tegretol) / Oxcarbazepine / Phenytoin — HLA-B*15:02 Positive",
          "chinese_name": "卡馬西平（癲通）/ 奧卡西平 / 苯妥英 — HLA-B*15:02 陽性",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "攜帶 HLA-B*15:02 對偶基因者服用卡馬西平、奧卡西平或苯妥英/磷苯妥英，發生史蒂芬強森症候群 (SJS) 與毒性表皮壞死溶解症 (TEN) 的風險極高。應避免使用上述藥物，並由醫師選擇無芳香環結構之替代抗癲癇或神經痛藥物。",
          "cpic_level": "CPIC Guideline for HLA-B and Carbamazepine/Oxcarbazepine/Phenytoin Level A / FDA Boxed Warning"
        },
        {
          "drug_name": "Allopurinol (Zyloric) — HLA-B*58:01 Positive",
          "chinese_name": "別嘌醇（安樂普利諾 / 降尿酸痛風藥）— HLA-B*58:01 陽性",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "攜帶 HLA-B*58:01 對偶基因者服用別嘌醇發生嚴重皮膚不良反應 (SJS/TEN/DRESS) 的風險極高。嚴禁使用別嘌醇，建議由醫師改用其他非嘌呤類降尿酸替代藥物。",
          "cpic_level": "CPIC Guideline for HLA-B and Allopurinol Level A / PharmGKB Level 1A"
        }
      ],
      "dietary_contraindications": [
        "痛風或高尿酸患者應限制高普林內臟、濃肉湯、帶殼海鮮與含果糖手搖飲，並嚴格戒酒（酒精與啤酒會阻礙尿酸排泄）",
        "切勿服用來路不明的止痛藥粉、黑藥丸或親友轉贈之神經痛/痛風藥物"
      ]
    },
    "evidence": {
      "overall_score": 0.99,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ 台灣領先全球寫入國際 FDA 與 CPIC Level A 指南之精準醫療典範",
      "clinvar_pathogenic_count": 5,
      "clinvar_summary_chinese": "台灣團隊於 Nature (PMID:15057820)、PNAS (PMID:15743917)、NEJM (PMID:21428768) 與 BMJ (PMID:26399967) 確證之藥物過敏基因",
      "opentargets_score": 0.95,
      "key_pmids": [
        "PMID:15057820",
        "PMID:15743917",
        "PMID:21428768",
        "PMID:23232549",
        "PMID:26094938",
        "PMID:26399967",
        "PMID:29392710",
        "PMID:32779747"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "在台灣及東亞地區，首次處方卡馬西平 (Carbamazepine) 前應先接受 HLA-B*15:02 基因檢測（台灣全國前瞻性研究證實可使卡馬西平 SJS/TEN 發生率降至零，PMID:21428768）；首次處方別嘌醇 (Allopurinol) 前建議接受 HLA-B*58:01 基因檢測 (PMID:26399967)。",
      "lifestyle_tips": [
        "若檢出 HLA-B*15:02 或 HLA-B*58:01 陽性，請要求醫院將對應禁用藥物註記於健保卡雲端藥歷過敏欄，並隨身攜帶藥物基因警示卡",
        "開始服用任何新開立的抗癲癇藥、三叉神經痛藥或降尿酸藥後 1~8 週內，若出現發燒、喉嚨痛、眼睛紅腫刺痛、嘴破或皮膚紅疹水泡，應立即停藥並前往急診",
        "直系親屬（父母、手足、子女）有 50% 機率攜帶相同 HLA-B 等位基因，就醫開立相關藥物前應一併告知醫師先行篩檢"
      ]
    },
    "doctor_checklist": {
      "specialty": "神經內科 / 風濕免疫科 / 腎臟內科 / 皮膚科 / 臨床藥師門診",
      "questions": [
        "醫師您好，我的基因報告顯示 HLA-B*15:02 陽性，治療神經痛或癲癇時有哪些不屬於芳香族結構的安全替代藥物？",
        "如果我檢出 HLA-B*58:01 陽性且有痛風或高尿酸血症，可以改用哪一種不具 HLA-B*58:01 過敏風險的降尿酸藥物？",
        "請幫我在病歷與健保卡過敏紀錄中永久註記這項 HLA-B 基因型，我的家人是否也需要在用藥前做這項檢測？"
      ]
    },
    "myth_buster": {
      "myth": "「藥物過敏全靠運氣，只有先吃吃看才知道會不會引發嚴重的史蒂芬強森症候群？」",
      "truth": "早就不是靠運氣了！台灣醫學團隊領先全球發現 HLA-B*15:02 與卡馬西平、HLA-B*58:01 與別嘌醇的強烈關聯，並透過全國性用藥前基因篩檢證實能有效預防這兩類致命的皮膚潰爛藥害（PMID:21428768, PMID:26399967）。用藥前抽一管血或看一眼基因報告，就能把致命風險攔截在吃藥之前！"
    }
  },
  {
    "association_id": "GDA_CYP2D6_OPIOIDS_TAMOXIFEN",
    "gene": {
      "symbol": "CYP2D6",
      "name": "cytochrome P450 family 2 subfamily D member 6",
      "chinese_name": "細胞色素 P450 2D6 (鴉片類與泰莫西芬代謝基因)",
      "ensembl_id": "ENSG00000100197",
      "entrez_id": "1565",
      "biotype": "protein_coding",
      "chromosome": "22q13.2 (22 號染色體)",
      "metaphor": {
        "title": "🔑 肝臟裡的【止痛藥與荷爾蒙藥代謝工程師】",
        "story": "可待因 (Codeine) 與曲馬多 (Tramadol) 本身還不是完全作用的止痛藥，必須經過肝臟 CYP2D6 這位工程師加工，才能變成真正有效的活性代謝物。工程師動作太快（超快速代謝型）時，藥物可能一瞬間產生太多活性成分，帶來呼吸抑制風險；動作太慢（慢代謝型）時，止痛效果又可能不足。泰莫西芬 (Tamoxifen) 的部分活性代謝物也依賴這位工程師。"
      },
      "plain_summary": "CYP2D6 負責將可待因與曲馬多轉化為活性代謝物，也參與泰莫西芬的部分代謝。超快速代謝者使用可待因或曲馬多可能增加呼吸抑制風險；慢代謝者則可能止痛效果不足。醫師會依基因型與臨床情況選擇替代藥物或調整治療。",
      "academic_summary": "CYP2D6 編碼細胞色素 P450 2D6 單加氧酶，負責鴉片類前驅藥可待因與曲馬多的 O-去甲基化活化，以及泰莫西芬轉化為 4-hydroxy-N-desmethyltamoxifen 等活性代謝物。常見等位基因包括功能降低的 *10 (rs1065852)、無功能的 *4 (rs3892097) 與 *5 (基因缺失)，以及增加活性的 *2A 與 *17。"
    },
    "disease": {
      "id": "MESH:D064420",
      "name": "Drug-Related Side Effects and Adverse Reactions",
      "chinese_name": "可待因毒性與 CYP2D6 代謝異常",
      "categories": [
        "藥物基因組學 (PGx)",
        "止痛與腫瘤用藥安全"
      ],
      "inheritance_mode": "體染色體共顯性代謝表型 (Autosomal Codominant Metabolic Phenotype)",
      "severity_badge": "🔴 可待因、曲馬多與泰莫西芬用藥紅綠燈"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0002791",
        "name": "Hypoventilation",
        "chinese_name": "呼吸抑制 / 通氣不足風險"
      },
      {
        "hpo_id": "HP:0001250",
        "name": "Seizure",
        "chinese_name": "癲癇發作風險"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Codeine",
        "chinese_name": "可待因 (Codeine)",
        "mechanism": "鴉片類前驅藥，需由 CYP2D6 轉化為嗎啡",
        "approval_status": "CPIC Level A / FDA Label"
      },
      {
        "drug_name": "Tramadol",
        "chinese_name": "曲馬多 (Tramadol)",
        "mechanism": "鴉片類止痛藥，需 CYP2D6 活化",
        "approval_status": "CPIC Level A / FDA Label"
      },
      {
        "drug_name": "Tamoxifen",
        "chinese_name": "泰莫西芬 (Tamoxifen)",
        "mechanism": "選擇性雌激素受體調節劑，部分活性代謝物由 CYP2D6 生成",
        "approval_status": "CPIC Level A"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "CYP2D6 *10 (rs1065852)、*4 (rs3892097)、*5 (基因缺失)、*2A、*17；超快速、中間與慢代謝型",
      "population_frequency": "東亞族群 *10 等位基因頻率約 40%~50%，*4 較西方族群少見；超快速代謝型比例較低 (PMID:33387367)",
      "traffic_light_summary": "🔴 超快速代謝者使用可待因或曲馬多可能快速生成大量活性代謝物，增加呼吸抑制風險，應避免使用；🟡 慢代謝者可能療效不足，建議由醫師選擇替代止痛藥。泰莫西芬方面，慢代謝者療效可能下降，應由醫師評估替代或調整治療策略。",
      "drugs_guide": [
        {
          "drug_name": "Codeine (ultrarapid metabolizer)",
          "chinese_name": "可待因 - 超快速代謝型",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "CYP2D6 超快速代謝者可能快速將可待因轉化為嗎啡，造成呼吸抑制甚至危及生命。應避免使用可待因，由醫師選擇不依賴 CYP2D6 的替代止痛方案。",
          "cpic_level": "CPIC 2021 CYP2D6/OPRM1/COMT 鴉片類用藥指引 Level A / FDA Label"
        },
        {
          "drug_name": "Tramadol (ultrarapid metabolizer)",
          "chinese_name": "曲馬多 - 超快速代謝型",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "CYP2D6 超快速代謝者使用曲馬多可能增加活性代謝物暴露與呼吸抑制風險。應避免使用，並由醫師評估替代止痛藥。",
          "cpic_level": "CPIC 2021 CYP2D6/OPRM1/COMT 鴉片類用藥指引 Level A / FDA Label"
        },
        {
          "drug_name": "Codeine / Tramadol (poor metabolizer)",
          "chinese_name": "可待因 / 曲馬多 - 慢代謝型",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "CYP2D6 慢代謝者可能無法有效將可待因或曲馬多轉化為活性代謝物，止痛效果不足。建議由醫師選擇其他止痛藥物。",
          "cpic_level": "CPIC 2021 CYP2D6/OPRM1/COMT 鴉片類用藥指引 Level A"
        },
        {
          "drug_name": "Tamoxifen (poor / intermediate metabolizer)",
          "chinese_name": "泰莫西芬 - 慢或中間代謝型",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "CYP2D6 慢或中間代謝者生成泰莫西芬活性代謝物的能力可能下降。停經前乳癌患者應由腫瘤科醫師評估是否改用其他荷爾蒙治療或調整治療策略。",
          "cpic_level": "CPIC 2018 CYP2D6 與泰莫西芬指引 Level A"
        }
      ],
      "dietary_contraindications": [
        "使用可待因或曲馬多期間避免飲酒，以免加重中樞神經與呼吸抑制",
        "服用泰莫西芬期間避免自行併用強效 CYP2D6 抑制劑，請先諮詢醫師或藥師"
      ]
    },
    "evidence": {
      "overall_score": 0.97,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A 鴉片類與泰莫西芬用藥指引",
      "clinvar_pathogenic_count": 320,
      "clinvar_summary_chinese": "ClinVar 與 PharmGKB 收錄 CYP2D6 *4、*5、*10、*17 等明確藥物反應等位基因",
      "opentargets_score": 0.88,
      "key_pmids": [
        "PMID:33387367"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "使用可待因、曲馬多或泰莫西芬前，若曾有不良反應或療效不佳，建議與醫師討論 CYP2D6 基因型檢測。",
      "lifestyle_tips": [
        "主動告知醫師與藥師自己的 CYP2D6 代謝型，避免自行重複使用含可待因的止痛藥",
        "服用泰莫西芬期間不要自行停藥或加藥，任何不適都應回診討論",
        "把基因檢測結果保存在手機或錢包，就醫時可快速出示"
      ]
    },
    "doctor_checklist": {
      "specialty": "臨床藥學 / 疼痛科 / 腫瘤科",
      "questions": [
        "醫師您好，我的 CYP2D6 基因型顯示我可能是超快速或慢代謝者，我適合使用可待因或曲馬多嗎？",
        "如果需要止痛，有沒有不依賴 CYP2D6 代謝的替代藥物？",
        "我正在服用泰莫西芬，我的 CYP2D6 代謝型會影響療效嗎？需要調整治療嗎？"
      ]
    },
    "myth_buster": {
      "myth": "「只要醫師開的可待因或曲馬多，照著吃就一定安全？」",
      "truth": "不一定。CYP2D6 超快速代謝者可能將可待因快速轉成嗎啡，增加呼吸抑制風險；慢代謝者則可能止痛效果不足。基因型不同，適合的止痛策略也不同，應由醫師評估。"
    }
  },
  {
    "association_id": "GDA_DPYD_FLUOROPYRIMIDINES",
    "gene": {
      "symbol": "DPYD",
      "name": "dihydropyrimidine dehydrogenase",
      "chinese_name": "二氫嘧啶脫氫酶 (氟尿嘧啶代謝基因)",
      "ensembl_id": "ENSG00000188641",
      "entrez_id": "1806",
      "biotype": "protein_coding",
      "chromosome": "1p21.3 (1 號染色體)",
      "metaphor": {
        "title": "🛡️ 化療藥的【解毒回收廠】",
        "story": "5-FU 與卡培他濱是常見的氟尿嘧啶類化療藥，進入身體後需要 DPYD 這個解毒回收廠負責分解。如果回收廠產能不足，藥物與其代謝物會在體內累積，可能造成嚴重腹瀉、口腔潰瘍、白血球下降，甚至危及生命。"
      },
      "plain_summary": "DPYD 負責分解氟尿嘧啶類化療藥。帶有 DPYD 功能缺失變異的人，使用 5-FU 或卡培他濱時可能發生嚴重甚至致命的毒性。治療前應由腫瘤專科醫師評估基因型，必要時避免使用或大幅調整劑量。",
      "academic_summary": "DPYD 編碼二氫嘧啶脫氫酶，是嘧啶降解途徑的起始與速率限制酶，負責將 5-fluorouracil 代謝為 inactive dihydrofluorouracil。DPYD *2A (rs3918290)、c.2846A>T (rs67376798)、*13 (rs55886062) 與 HapB3 (rs56038477) 等變異會降低酵素活性，增加氟尿嘧啶類藥物全身暴露與嚴重毒性風險。"
    },
    "disease": {
      "id": "MONDO:0010130",
      "name": "dihydropyrimidine dehydrogenase deficiency",
      "chinese_name": "二氫嘧啶脫氫酶缺乏症",
      "categories": [
        "藥物基因組學 (PGx)",
        "腫瘤化療安全"
      ],
      "inheritance_mode": "體染色體隱性 (Autosomal Recessive)",
      "severity_badge": "🔴 氟尿嘧啶嚴重毒性紅燈"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0002014",
        "name": "Diarrhea",
        "chinese_name": "嚴重腹瀉"
      },
      {
        "hpo_id": "HP:0001875",
        "name": "Decreased total neutrophil count",
        "chinese_name": "嗜中性白血球低下"
      },
      {
        "hpo_id": "HP:0001903",
        "name": "Anemia",
        "chinese_name": "貧血"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Fluorouracil (5-FU)",
        "chinese_name": "氟尿嘧啶 (5-FU)",
        "mechanism": "嘧啶類似物化療藥，由 DPYD 代謝解毒",
        "approval_status": "CPIC Level A / FDA Label"
      },
      {
        "drug_name": "Capecitabine",
        "chinese_name": "卡培他濱 (Capecitabine)",
        "mechanism": "口服氟尿嘧啶前驅藥，最終由 DPYD 代謝",
        "approval_status": "CPIC Level A / FDA Label"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "DPYD *2A (rs3918290)、c.2846A>T (rs67376798)、*13 (rs55886062)、HapB3 (rs56038477)",
      "population_frequency": "東亞族群 DPYD 功能缺失等位基因整體頻率較低（多數約 1% 以下），但仍可能發生嚴重氟尿嘧啶毒性 (PMID:29152729)",
      "traffic_light_summary": "🔴 部分或完全 DPD 缺乏者使用 5-FU 或卡培他濱可能發生嚴重甚至致命毒性，應避免全身性氟尿嘧啶治療，或由腫瘤專科醫師大幅調整劑量；🟡 中間代謝者需降低起始劑量並密切監測。",
      "drugs_guide": [
        {
          "drug_name": "Fluorouracil (5-FU) - DPD deficient",
          "chinese_name": "氟尿嘧啶 (5-FU) - DPD 缺乏",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "DPD 缺乏者使用全身性 5-FU 可能出現嚴重骨髓抑制、黏膜炎與腹瀉，甚至致命。應避免使用；若臨床必須使用，須由腫瘤專科醫師大幅調降劑量並密切監測。",
          "cpic_level": "CPIC 2017 DPYD 與氟尿嘧啶劑量指引 Level A / FDA Label"
        },
        {
          "drug_name": "Capecitabine - DPD deficient",
          "chinese_name": "卡培他濱 - DPD 缺乏",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "卡培他濱最終轉化為 5-FU，DPD 缺乏者同樣可能發生嚴重毒性。應避免使用或由腫瘤專科醫師大幅調降劑量。",
          "cpic_level": "CPIC 2017 DPYD 與氟尿嘧啶劑量指引 Level A / FDA Label"
        },
        {
          "drug_name": "Fluorouracil / Capecitabine - intermediate metabolizer",
          "chinese_name": "氟尿嘧啶 / 卡培他濱 - 中間代謝型",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "DPD 活性部分降低者使用氟尿嘧啶類藥物時毒性風險升高，建議由腫瘤專科醫師降低起始劑量並密集監測血球與黏膜毒性。",
          "cpic_level": "CPIC 2017 DPYD 與氟尿嘧啶劑量指引 Level A"
        }
      ],
      "dietary_contraindications": [
        "治療期間避免自行補充含尿嘧啶或核苷類似物的保健品，以免干擾藥物代謝",
        "出現口腔潰瘍、嚴重腹瀉、發燒或異常疲倦時應立即聯絡醫療團隊"
      ]
    },
    "evidence": {
      "overall_score": 0.98,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A 氟尿嘧啶劑量指引",
      "clinvar_pathogenic_count": 210,
      "clinvar_summary_chinese": "ClinVar 與 PharmGKB 收錄 DPYD *2A、c.2846A>T、*13 與 HapB3 等功能缺失變異",
      "opentargets_score": 0.9,
      "key_pmids": [
        "PMID:29152729"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "計畫接受 5-FU 或卡培他濱治療前，建議由腫瘤專科醫師評估是否進行 DPYD 基因型檢測。",
      "lifestyle_tips": [
        "化療期間保持充足水分與口腔清潔，降低黏膜炎與脫水風險",
        "出現發燒、寒顫或嚴重腹瀉時不要自行服用成藥，應立即就醫",
        "將 DPYD 檢測結果提供給所有參與治療的醫療團隊"
      ]
    },
    "doctor_checklist": {
      "specialty": "腫瘤內科 / 臨床藥學",
      "questions": [
        "醫師您好，我預計使用 5-FU 或卡培他濱，我需要先做 DPYD 基因檢測嗎？",
        "如果我的 DPYD 基因型顯示代謝能力降低，劑量需要如何調整？",
        "治療期間出現哪些症狀時，我應該立即回診或急診？"
      ]
    },
    "myth_buster": {
      "myth": "「化療藥劑量都是醫師算好的，基因檢測應該不重要？」",
      "truth": "不對。DPYD 功能缺失者使用標準劑量的氟尿嘧啶類藥物，可能發生嚴重甚至致命毒性。治療前評估 DPYD 基因型，可以幫助醫師選擇更安全的起始劑量或替代方案。"
    }
  },
  {
    "association_id": "GDA_UGT1A1_IRINOTECAN_GILBERT",
    "gene": {
      "symbol": "UGT1A1",
      "name": "UDP glucuronosyltransferase family 1 member A1",
      "chinese_name": "尿苷二磷酸葡萄糖醛酸轉移酶 1A1 (伊立替康與膽紅素代謝基因)",
      "ensembl_id": "ENSG00000241635",
      "entrez_id": "54658",
      "biotype": "protein_coding",
      "chromosome": "2q37.1 (2 號染色體)",
      "metaphor": {
        "title": "🧹 肝臟裡的【膽紅素與化療藥清運隊】",
        "story": "UGT1A1 就像肝臟裡負責清運膽紅素與藥物的清潔隊。當清運速度較慢時，膽紅素可能間歇性升高，出現吉爾伯特症候群的黃疸；使用伊立替康 (Irinotecan) 這類化療藥時，活性代謝物也可能清得太慢，增加腹瀉與白血球下降的風險。"
      },
      "plain_summary": "UGT1A1 負責將膽紅素與伊立替康的活性代謝物代謝清除。帶有 *28 或東亞常見的 *6 變異者，清除速度可能較慢，使用伊立替康時腹瀉與嗜中性白血球低下的風險較高。吉爾伯特症候群通常良性，但黃疸可能反覆出現。",
      "academic_summary": "UGT1A1 編碼尿苷二磷酸葡萄糖醛酸轉移酶 1A1，催化非結合型膽紅素與 SN-38 的葡萄糖醛酸化。UGT1A1 *28 (rs3064744, TA7) 與東亞常見的 *6 (rs4148323, c.211G>A) 會降低酵素表現或活性，導致吉爾伯特症候群與伊立替康相關毒性風險增加。"
    },
    "disease": {
      "id": "MONDO:0007745",
      "name": "Gilbert syndrome",
      "chinese_name": "吉爾伯特症候群與 UGT1A1 代謝差異",
      "categories": [
        "藥物基因組學 (PGx)",
        "肝膽與化療安全"
      ],
      "inheritance_mode": "體染色體隱性 (Autosomal Recessive)",
      "severity_badge": "🟡 伊立替康劑量調整與黃疸監測"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0002904",
        "name": "Hyperbilirubinemia",
        "chinese_name": "非結合型高膽紅素血症"
      },
      {
        "hpo_id": "HP:0000952",
        "name": "Jaundice",
        "chinese_name": "間歇性黃疸"
      },
      {
        "hpo_id": "HP:0001875",
        "name": "Decreased total neutrophil count",
        "chinese_name": "嗜中性白血球低下"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Irinotecan",
        "chinese_name": "伊立替康 (Irinotecan)",
        "mechanism": "拓撲異構酶 I 抑制劑，活性代謝物 SN-38 由 UGT1A1 代謝",
        "approval_status": "FDA Label / DPWG Guideline"
      },
      {
        "drug_name": "Atazanavir",
        "chinese_name": "阿扎那韋 (Atazanavir)",
        "mechanism": "抗反轉錄病毒藥物，UGT1A1 慢代謝者可能出現高膽紅素血症",
        "approval_status": "FDA Label / CPIC Guideline"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "UGT1A1 *28 (rs3064744, TA7)、UGT1A1 *6 (rs4148323, c.211G>A，東亞常見)、*28/*28、*6/*6、*6/*28",
      "population_frequency": "東亞族群 *6 等位基因頻率約 13%~23%，*28 約 10%~16%；吉爾伯特症候群表現為間歇性非結合型高膽紅素血症 (PMID:36443464)",
      "traffic_light_summary": "🟡 UGT1A1 慢代謝者使用伊立替康 (Irinotecan) 時，活性代謝物 SN-38 清除減慢，腹瀉與嗜中性白血球低下風險升高，建議由腫瘤專科醫師調降起始劑量並密切監測；吉爾伯特症候群通常良性，但黃疸可能反覆出現。",
      "drugs_guide": [
        {
          "drug_name": "Irinotecan - UGT1A1 poor metabolizer (*28/*28, *6/*6, *6/*28)",
          "chinese_name": "伊立替康 - UGT1A1 慢代謝型",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "UGT1A1 慢代謝者清除 SN-38 的能力下降，使用伊立替康後腹瀉與嗜中性白血球低下風險增加。建議由腫瘤專科醫師調降起始劑量並密切監測血球與腸胃症狀。",
          "cpic_level": "FDA Label (irinotecan) / DPWG 2022 UGT1A1-irinotecan 指引"
        },
        {
          "drug_name": "Atazanavir - UGT1A1 poor metabolizer",
          "chinese_name": "阿扎那韋 - UGT1A1 慢代謝型",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "UGT1A1 慢代謝者使用阿扎那韋可能出現非結合型高膽紅素血症與黃疸，通常無需停藥但需監測；若黃疸明顯或合併肝功能異常，應由醫師評估。",
          "cpic_level": "CPIC UGT1A1-atazanavir 指引 Level A / FDA Label"
        }
      ],
      "dietary_contraindications": [
        "吉爾伯特症候群患者脫水、空腹或感染時黃疸可能加重，應保持充足水分與規律飲食",
        "使用伊立替康期間出現嚴重腹瀉、發燒或異常疲倦時，應立即聯絡醫療團隊"
      ]
    },
    "evidence": {
      "overall_score": 0.92,
      "plain_rating": "⭐️⭐️⭐️⭐️ FDA 標籤與 DPWG 指引支持",
      "clinvar_pathogenic_count": 180,
      "clinvar_summary_chinese": "ClinVar 與 PharmGKB 收錄 UGT1A1 *28 (rs3064744) 與 *6 (rs4148323) 等膽紅素與伊立替康反應位點",
      "opentargets_score": 0.84,
      "key_pmids": [
        "PMID:36443464"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "計畫使用伊立替康前，若有黃疸病史或曾發生嚴重化療毒性，建議與腫瘤專科醫師討論 UGT1A1 基因型檢測。",
      "lifestyle_tips": [
        "吉爾伯特症候群患者不必過度限制飲食，但應避免長時間空腹與脫水",
        "使用伊立替康期間記錄腹瀉次數與體溫，出現異常時及早就醫",
        "不要自行使用止瀉藥掩蓋嚴重症狀，應先諮詢醫療團隊"
      ]
    },
    "doctor_checklist": {
      "specialty": "腫瘤內科 / 肝膽腸胃科 / 臨床藥學",
      "questions": [
        "醫師您好，我的 UGT1A1 基因型顯示我是慢代謝者，使用伊立替康需要調整劑量嗎？",
        "我平常容易出現黃疸，這和吉爾伯特症候群有關嗎？需要進一步檢查嗎？",
        "治療期間出現腹瀉或發燒時，我應該如何處理及何時回診？"
      ]
    },
    "myth_buster": {
      "myth": "「有吉爾伯特症候群就不能使用任何化療藥？」",
      "truth": "不是。吉爾伯特症候群通常良性，但 UGT1A1 慢代謝會影響伊立替康的代謝與毒性風險。是否需要調整劑量，應由腫瘤專科醫師依基因型、劑量與臨床狀況共同評估。"
    }
  },
  {
    "association_id": "GDA_LCT_LACTOSE_INTOLERANCE",
    "gene": {
      "symbol": "LCT",
      "name": "lactase",
      "chinese_name": "乳糖酶 (乳糖消化性狀基因)",
      "ensembl_id": "ENSG00000115850",
      "entrez_id": "3938",
      "biotype": "protein_coding",
      "chromosome": "2q21.3 (2 號染色體)",
      "metaphor": {
        "title": "🥛 小腸裡的【牛奶糖剪刀】",
        "story": "乳糖是牛奶與乳製品中的天然糖分，需要小腸的乳糖酶這把剪刀把它剪成容易吸收的小分子。許多東亞成年人隨著年齡增長，乳糖酶活性自然下降，這是常見的生理差異，不是疾病；喝牛奶後脹氣或腹瀉，通常可以透過調整攝取方式改善。"
      },
      "plain_summary": "LCT 基因與乳糖酶的持續表現有關。東亞成年人常見乳糖酶非持續表現，也就是乳糖不耐受的體質，這是正常生理差異。症狀通常溫和，可透過少量分次攝取、選擇低乳糖乳製品或補充乳糖酶來改善。",
      "academic_summary": "LCT 編碼小腸刷狀緣乳糖酶，負責將乳糖水解為葡萄糖與半乳糖。乳糖酶持續表現受 MCM6 增強子區域變異（如 -13910C>T, rs4988235）調控，但東亞族群以乳糖酶非持續表現為常態，rs4988235 並非東亞族群的主要疾病變異。"
    },
    "disease": {
      "id": "MONDO:0006065",
      "name": "lactose intolerance adult type",
      "chinese_name": "成人型乳糖不耐受（乳糖酶非持續表現）",
      "categories": [
        "生活型態性狀",
        "營養與消化健康"
      ],
      "inheritance_mode": "複雜/多基因生活型態性狀",
      "severity_badge": "🟡 常見且通常溫和的飲食性狀"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0004789",
        "name": "Lactose intolerance",
        "chinese_name": "乳糖不耐受 / 乳糖消化不適"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Lactase enzyme supplement",
        "chinese_name": "乳糖酶補充劑",
        "mechanism": "補充乳糖酶以協助分解乳糖",
        "approval_status": "非處方保健食品"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "LCT -13910C>T (rs4988235)；東亞成人常見乳糖酶非持續表現，rs4988235 並非東亞族群的主要疾病變異",
      "population_frequency": "東亞成人乳糖酶非持續表現比例可高達 70%~90% 以上；乳糖不耐受多為正常生理差異 (PMID:26715078)",
      "traffic_light_summary": "此基因為生活型態相關性狀，目前沒有藥物基因（PGx）用藥指引；乳糖不耐受的影響通常溫和，飲食調整與生活習慣的影響更大。",
      "drugs_guide": [],
      "dietary_contraindications": [
        "可選擇低乳糖或無乳糖乳製品，或分次少量攝取乳製品",
        "若完全避免乳製品，應注意鈣質與維生素 D 的補充"
      ]
    },
    "evidence": {
      "overall_score": 0.55,
      "plain_rating": "⭐️⭐️⭐️ 常見生活型態性狀，證據溫和",
      "clinvar_pathogenic_count": 0,
      "clinvar_summary_chinese": "乳糖酶非持續表現為常見生理性狀，並非單一高外顯率致病變異；東亞族群以非持續表現為常態",
      "opentargets_score": 0.2,
      "key_pmids": [
        "PMID:26715078"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "若喝牛奶後經常出現腹脹、腹痛或腹瀉，可先記錄飲食日誌，必要時與醫師或營養師討論乳糖不耐受的可能。",
      "lifestyle_tips": [
        "從少量乳製品開始，觀察個人可耐受的量，不必完全避免所有乳製品",
        "可選擇優格、起司或低乳糖牛奶等乳糖較低的來源",
        "若需限制乳製品，記得從其他食物或補充劑攝取足夠鈣質與維生素 D"
      ]
    },
    "doctor_checklist": {
      "specialty": "家醫科 / 腸胃科 / 營養諮詢",
      "questions": [
        "醫師您好，我喝牛奶後容易腹脹或腹瀉，這可能是乳糖不耐受嗎？",
        "我需要做乳糖呼氣試驗或其他檢查來確認嗎？",
        "如果我減少乳製品，應該如何補充鈣質與維生素 D？"
      ]
    },
    "myth_buster": {
      "myth": "「東亞人幾乎都有乳糖不耐受，所以完全不該喝牛奶？」",
      "truth": "不對。東亞成年人乳糖酶非持續表現很常見，但多數人仍可耐受少量乳製品。透過分次攝取、選擇低乳糖產品或補充乳糖酶，通常可以兼顧營養與舒適。"
    }
  },
  {
    "association_id": "GDA_CYP1A2_CAFFEINE_SLEEP",
    "gene": {
      "symbol": "CYP1A2",
      "name": "cytochrome P450 family 1 subfamily A member 2",
      "chinese_name": "細胞色素 P450 1A2 (咖啡因代謝性狀基因)",
      "ensembl_id": "ENSG00000140505",
      "entrez_id": "1544",
      "biotype": "protein_coding",
      "chromosome": "15q24.1 (15 號染色體)",
      "metaphor": {
        "title": "☕ 肝臟裡的【咖啡因計時器】",
        "story": "咖啡、茶與能量飲料中的咖啡因，主要由肝臟 CYP1A2 這個計時器負責拆解。每個人的計時器速度不同，有人下午喝一杯咖啡晚上仍睡得著，有人中午喝就拿著手機數羊。這個差異通常溫和，但作息與攝取量往往比基因本身影響更大。"
      },
      "plain_summary": "CYP1A2 是咖啡因代謝的主要酵素。代謝速度的個體差異可能影響喝咖啡後的心悸、清醒程度與睡眠，但效果通常溫和。調整攝取時間與份量、維持規律作息，通常比擔心基因型更實際。",
      "academic_summary": "CYP1A2 編碼細胞色素 P450 1A2，負責咖啡因的 N3-去甲基化，是其清除的主要途徑。CYP1A2*1F (rs762551) 等變異可能影響酵素誘導性與咖啡因代謝速度，但咖啡因敏感度同時受攝取量、吸菸、藥物與作息影響。"
    },
    "disease": {
      "id": "MONDO:0013600",
      "name": "caffeine sensitivity (insomnia susceptibility)",
      "chinese_name": "咖啡因敏感與睡眠影響（失眠傾向）",
      "categories": [
        "生活型態性狀",
        "睡眠與咖啡因代謝"
      ],
      "inheritance_mode": "複雜/多基因生活型態性狀",
      "severity_badge": "🟡 常見且通常溫和的咖啡因敏感性狀"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0100785",
        "name": "Insomnia",
        "chinese_name": "失眠 / 睡眠困擾"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Caffeine",
        "chinese_name": "咖啡因",
        "mechanism": "中樞神經興奮劑，主要由 CYP1A2 代謝",
        "approval_status": "食品與藥品成分"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "CYP1A2*1F (rs762551) 與咖啡因代謝速度相關；個體差異大",
      "population_frequency": "CYP1A2*1F 等位基因頻率因族群而異；咖啡因敏感度受攝取量、吸菸、藥物與作息共同影響 (PMID:42729697)",
      "traffic_light_summary": "此基因為生活型態相關性狀，目前沒有藥物基因（PGx）用藥指引；咖啡因代謝速度的個體差異通常溫和，作息、攝取量與生活習慣的影響更大。",
      "drugs_guide": [],
      "dietary_contraindications": [
        "下午或傍晚後減少咖啡、茶、能量飲料與巧克力攝取，以改善睡眠",
        "避免與某些會抑制 CYP1A2 的藥物或大量酒精同時使用"
      ]
    },
    "evidence": {
      "overall_score": 0.5,
      "plain_rating": "⭐️⭐️⭐️ 常見生活型態性狀，證據溫和",
      "clinvar_pathogenic_count": 0,
      "clinvar_summary_chinese": "CYP1A2 變異與咖啡因代謝速度相關，但多為生活型態性狀，並非單一高外顯率致病變異",
      "opentargets_score": 0.18,
      "key_pmids": [
        "PMID:16522833"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "若喝咖啡後經常心悸、焦慮或失眠，可先記錄咖啡因攝取時間與份量，必要時與醫師討論。",
      "lifestyle_tips": [
        "把咖啡因攝取集中在上午，下午後改喝無咖啡因飲品",
        "注意能量飲料、茶與巧克力的隱藏咖啡因",
        "維持規律睡眠時間，睡前避免使用電子產品"
      ]
    },
    "doctor_checklist": {
      "specialty": "家醫科 / 睡眠醫學 / 營養諮詢",
      "questions": [
        "醫師您好，我喝咖啡後容易心悸或睡不著，這和咖啡因代謝有關嗎？",
        "我需要做 CYP1A2 基因檢測嗎？檢測結果會改變治療建議嗎？",
        "除了減少咖啡因，我還有哪些方法可以改善睡眠？"
      ]
    },
    "myth_buster": {
      "myth": "「喝咖啡睡不著一定是因為我的基因不好？」",
      "truth": "不一定。咖啡因代謝速度只是其中一個因素，攝取時間、份量、作息、壓力與藥物都可能影響睡眠。先調整生活習慣，通常比單看基因型更有效。"
    }
  },
  {
    "association_id": "GDA_FTO_OBESITY_SUSCEPTIBILITY",
    "gene": {
      "symbol": "FTO",
      "name": "FTO alpha-ketoglutarate dependent dioxygenase",
      "chinese_name": "FTO 基因 (肥胖易感性相關基因)",
      "ensembl_id": "ENSG00000140718",
      "entrez_id": "79068",
      "biotype": "protein_coding",
      "chromosome": "16q12.2 (16 號染色體)",
      "metaphor": {
        "title": "⚖️ 體重天秤上的【小小砝碼】",
        "story": "FTO 基因的某些變異就像體重天秤上的一枚小砝碼，可能讓人稍微更容易增加體重。但這枚砝碼很輕，真正決定天秤往哪邊傾斜的，是每天的飲食、運動、睡眠與生活環境。"
      },
      "plain_summary": "FTO 是與肥胖易感性相關的基因之一，但單一變異的影響通常很小。體重主要由飲食、運動、睡眠與環境共同決定。了解基因結果不等於注定肥胖，也不建議只憑基因型使用減重藥物。",
      "academic_summary": "FTO 位於 16q12.2，其 intron 1 的常見變異 rs9939609 與 BMI 及肥胖易感性相關。全基因組關聯研究顯示其效應溫和，且受身體活動、飲食與其他基因交互作用修飾；FTO 並非單一決定性肥胖基因。"
    },
    "disease": {
      "id": "MONDO:0800432",
      "name": "obesity, susceptibility to",
      "chinese_name": "肥胖易感性（多基因生活型態性狀）",
      "categories": [
        "生活型態性狀",
        "體重與代謝健康"
      ],
      "inheritance_mode": "複雜/多基因生活型態性狀",
      "severity_badge": "🟡 常見且效應溫和的多基因性狀"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001513",
        "name": "Obesity",
        "chinese_name": "肥胖 / 體重增加傾向"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Semaglutide",
        "chinese_name": "司美格魯肽 (Semaglutide)",
        "mechanism": "GLP-1 受體促效劑，用於肥胖治療；非依 FTO 基因型給藥",
        "approval_status": "FDA 核准減重藥物"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "FTO rs9939609 (intron 1)；效應溫和且受生活型態修飾",
      "population_frequency": "FTO rs9939609 風險等位基因頻率因族群而異；單一變異對 BMI 的效應通常很小 (PMID:17496892)",
      "traffic_light_summary": "此基因為生活型態相關性狀，目前沒有藥物基因（PGx）用藥指引；FTO 變異對體重的影響通常溫和，飲食、運動與睡眠等生活習慣的影響更大。",
      "drugs_guide": [],
      "dietary_contraindications": [
        "以均衡飲食、規律運動與充足睡眠為主要體重管理策略",
        "避免以單一基因結果判斷肥胖風險或自行使用減重藥物"
      ]
    },
    "evidence": {
      "overall_score": 0.5,
      "plain_rating": "⭐️⭐️⭐️ 常見多基因性狀，單一變異效應溫和",
      "clinvar_pathogenic_count": 0,
      "clinvar_summary_chinese": "FTO rs9939609 與肥胖易感性相關，但效應溫和，並非單一高外顯率致病變異",
      "opentargets_score": 0.35,
      "key_pmids": [
        "PMID:17496892"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "肥胖風險應以整體健康評估，包括 BMI、腰圍、血壓、血糖與血脂；不建議僅依靠 FTO 基因型決定治療。",
      "lifestyle_tips": [
        "建立可長期維持的飲食與運動習慣，比短期極端節食更有效",
        "每週累積中等強度身體活動，並減少久坐時間",
        "確保充足睡眠與壓力管理，睡眠不足可能影響食慾與體重"
      ]
    },
    "doctor_checklist": {
      "specialty": "家醫科 / 內分泌新陳代謝科 / 營養諮詢",
      "questions": [
        "醫師您好，我的 FTO 基因結果顯示肥胖易感性較高，這代表我一定會肥胖嗎？",
        "除了基因，我還應該檢查哪些代謝指標來評估體重相關健康風險？",
        "如果需要減重，適合我的飲食、運動或藥物策略有哪些？"
      ]
    },
    "myth_buster": {
      "myth": "「帶有 FTO 肥胖基因，再怎麼努力都瘦不下來？」",
      "truth": "不對。FTO 單一變異對體重的影響通常很小，飲食、運動、睡眠與環境的影響更大。基因結果可以作為健康提醒，但不能取代實際的生活型態調整與醫療評估。"
    }
  },
  {
    "association_id": "GDA_HBB_BETA_THALASSEMIA",
    "gene": {
      "symbol": "HBB",
      "name": "hemoglobin subunit beta",
      "chinese_name": "血紅素 β 鏈基因 (HBB)",
      "ensembl_id": "ENSG00000244734",
      "entrez_id": "3043",
      "biotype": "protein_coding",
      "chromosome": "11p15.4 (11 號染色體)",
      "metaphor": {
        "title": "🩸 血液裡的【氧氣快遞員 β 小隊】",
        "story": "紅血球就像全身的快遞車隊，血紅素則是車上的氧氣貨架；HBB 負責製作貨架上的 β 鏈零件。如果 β 鏈零件不足，貨架就組不起來，紅血球容易變小、變薄、提早報廢，氧氣也就送不夠，這就是乙型地中海貧血。"
      },
      "plain_summary": "HBB 基因負責製造血紅素的 β 鏈。若帶有一個致病變異，通常是無症狀帶因者，身體多半健康，只是可能出現輕微貧血；真正的疾病風險主要出現在父母雙方都帶有同一種乙型地中海貧血變異時，孩子才有較高機率罹病。了解帶因狀態有助於婚前與孕前遺傳諮詢。",
      "academic_summary": "HBB 位於 11p15.4，編碼血紅素 β 鏈。HBB 致病變異（β0 或 β+）造成 β 鏈合成減少或缺失，使游離 α 鏈沉積並引發無效造血與溶血性貧血，呈體染色體隱性遺傳。臨床表現由輕型帶因到依賴輸血的重大型不等。"
    },
    "disease": {
      "id": "MONDO:0011441",
      "name": "beta-thalassemia",
      "chinese_name": "乙型地中海貧血（β 型海洋性貧血）",
      "categories": [
        "血液疾病",
        "遺傳性血紅素疾病"
      ],
      "inheritance_mode": "體染色體隱性遺傳 (Autosomal Recessive, AR)",
      "severity_badge": "🟠 需定期追蹤 (可透過輸血與排鐵治療管理)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001903",
        "name": "Anemia",
        "chinese_name": "貧血"
      },
      {
        "hpo_id": "HP:0004840",
        "name": "Hypochromic microcytic anemia",
        "chinese_name": "低色素性小球性貧血"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Deferasirox",
        "chinese_name": "地拉羅司（排鐵劑）",
        "mechanism": "螯合體內過多的鐵質，降低長期輸血造成的鐵沉積",
        "approval_status": "FDA 核准處方藥"
      },
      {
        "drug_name": "Blood transfusion",
        "chinese_name": "定期輸血治療",
        "mechanism": "補充健康紅血球以改善貧血與組織缺氧",
        "approval_status": "標準支持性治療"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "HBB 致病變異（如 β0/β+ 變異）；乙型地中海貧血主要因血紅素 β 鏈合成不足所致",
      "population_frequency": "乙型地中海貧血帶因率在地中海沿岸、中東、南亞與東南亞族群較高，台灣也可見帶因者；帶因頻率因地區而異 (PMID:20301599)",
      "traffic_light_summary": "此基因目前沒有 CPIC 藥物基因（PGx）給藥劑量指引。乙型地中海貧血的標準治療以定期輸血、排鐵劑（如 deferasirox）與支持性照護為主，是否需要用藥與治療強度應由血液科醫師依臨床狀況決定。",
      "drugs_guide": [],
      "dietary_contraindications": [
        "避免自行補充含鐵保健食品，以免加重鐵質沉積",
        "接受輸血治療者應定期監測鐵蛋白與肝功能"
      ]
    },
    "evidence": {
      "overall_score": 0.9,
      "plain_rating": "⭐️⭐️⭐️⭐️ 遺傳醫學證據明確",
      "clinvar_pathogenic_count": 300,
      "clinvar_summary_chinese": "ClinVar 與既有文獻收錄多種 HBB 致病變異，與乙型地中海貧血的關聯明確",
      "opentargets_score": 0.72,
      "key_pmids": [
        "PMID:20301599"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "若有貧血、家族史或計畫生育，建議接受血液學檢查與血紅素電泳；必要時進行 HBB 基因檢測與遺傳諮詢。",
      "lifestyle_tips": [
        "保持均衡飲食，依醫師指示補充葉酸，不要自行補鐵",
        "避免過度疲勞，出現心悸、頭暈或呼吸急促時及早就醫",
        "計畫懷孕前與伴侶一起接受帶因篩檢與遺傳諮詢"
      ]
    },
    "doctor_checklist": {
      "specialty": "血液科 / 遺傳諮詢 / 兒科",
      "questions": [
        "醫師您好，我的 HBB 基因檢測顯示我是帶因者，這會影響我的健康嗎？",
        "我的伴侶也需要做乙型地中海貧血帶因篩檢嗎？",
        "如果我們計畫生育，有哪些產前或胚胎著床前檢測的選項？"
      ]
    },
    "myth_buster": {
      "myth": "「帶有地中海貧血基因就一定不能生育？」",
      "truth": "不對。多數帶因者健康狀況良好，仍可正常生育；關鍵在於了解伴侶是否也帶有同一種變異，並透過遺傳諮詢與產前檢查做好準備。"
    }
  },
  {
    "association_id": "GDA_HBA1_ALPHA_THALASSEMIA",
    "gene": {
      "symbol": "HBA1",
      "name": "hemoglobin subunit alpha 1",
      "chinese_name": "血紅素 α 鏈基因 1 (HBA1)",
      "ensembl_id": "ENSG00000206172",
      "entrez_id": "3039",
      "biotype": "protein_coding",
      "chromosome": "16p13.3 (16 號染色體)",
      "metaphor": {
        "title": "🩸 血紅素貨架上的【α 鏈雙人組】",
        "story": "血紅素需要 α 鏈與 β 鏈一起組裝。α 鏈主要由 HBA1 與它的夥伴基因 HBA2 共同製造，就像同一條產線上的兩位師傅。如果 α 鏈產量不足，紅血球會變小、變薄，甚至提早破裂，形成甲型地中海貧血。"
      },
      "plain_summary": "HBA1 與夥伴基因 HBA2 一起製造血紅素的 α 鏈。若只帶有一個致病變異，通常是無症狀帶因者，身體多半健康；真正的疾病風險主要出現在父母雙方都帶有同一種甲型地中海貧血變異時，孩子才有較高機率罹病。帶因狀態可透過遺傳諮詢與孕前檢查來規劃。",
      "academic_summary": "HBA1 與 HBA2 位於 16p13.3，共同編碼血紅素 α 鏈。α 地中海貧血多由 HBA1/HBA2 缺失或點突變造成 α 鏈合成減少，呈體染色體隱性遺傳；帶因者多無症狀或僅輕微小球性貧血，重症則依缺失數目表現為 HbH 病或胎兒水腫。"
    },
    "disease": {
      "id": "MONDO:0011399",
      "name": "alpha-thalassemia",
      "chinese_name": "甲型地中海貧血（α 型海洋性貧血）",
      "categories": [
        "血液疾病",
        "遺傳性血紅素疾病"
      ],
      "inheritance_mode": "體染色體隱性遺傳 (Autosomal Recessive, AR)",
      "severity_badge": "🟠 需定期追蹤 (依缺失數目差異大)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001903",
        "name": "Anemia",
        "chinese_name": "貧血"
      },
      {
        "hpo_id": "HP:0004840",
        "name": "Hypochromic microcytic anemia",
        "chinese_name": "低色素性小球性貧血"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Deferasirox",
        "chinese_name": "地拉羅司（排鐵劑）",
        "mechanism": "螯合體內過多的鐵質，降低長期輸血造成的鐵沉積",
        "approval_status": "FDA 核准處方藥"
      },
      {
        "drug_name": "Blood transfusion",
        "chinese_name": "定期輸血治療",
        "mechanism": "補充健康紅血球以改善貧血與組織缺氧",
        "approval_status": "標準支持性治療"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "HBA1/HBA2 缺失或點突變；α 地中海貧血主要由 α 鏈合成不足造成，HBA2 為重要夥伴基因",
      "population_frequency": "α 地中海貧血帶因在東南亞、華南與台灣族群相對常見；帶因頻率因地區與缺失型別而異 (PMID:20301608)",
      "traffic_light_summary": "此基因目前沒有 CPIC 藥物基因（PGx）給藥劑量指引。甲型地中海貧血的標準治療以定期輸血、排鐵劑（如 deferasirox）與支持性照護為主；輕型帶因者通常不需特別用藥，是否治療應由血液科醫師評估。",
      "drugs_guide": [],
      "dietary_contraindications": [
        "避免自行補充含鐵保健食品，以免加重鐵質沉積",
        "接受輸血治療者應定期監測鐵蛋白與肝功能"
      ]
    },
    "evidence": {
      "overall_score": 0.9,
      "plain_rating": "⭐️⭐️⭐️⭐️ 遺傳醫學證據明確",
      "clinvar_pathogenic_count": 250,
      "clinvar_summary_chinese": "ClinVar 與既有文獻收錄多種 HBA1/HBA2 缺失與致病變異，與甲型地中海貧血的關聯明確",
      "opentargets_score": 0.7,
      "key_pmids": [
        "PMID:20301608"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "若有小球性貧血、家族史或計畫生育，建議接受血液學檢查與血紅素電泳，必要時進行 HBA1/HBA2 基因檢測與遺傳諮詢。",
      "lifestyle_tips": [
        "保持均衡飲食，依醫師指示補充葉酸，不要自行補鐵",
        "避免過度疲勞，出現心悸、頭暈或呼吸急促時及早就醫",
        "計畫懷孕前與伴侶一起接受帶因篩檢與遺傳諮詢"
      ]
    },
    "doctor_checklist": {
      "specialty": "血液科 / 遺傳諮詢 / 兒科",
      "questions": [
        "醫師您好，我的 HBA1 基因檢測顯示我是帶因者，這會影響我的健康嗎？",
        "我需要同時檢查 HBA2 嗎？伴侶也應該做甲型地中海貧血帶因篩檢嗎？",
        "如果我們計畫生育，有哪些產前或胚胎著床前檢測的選項？"
      ]
    },
    "myth_buster": {
      "myth": "「只有乙型地中海貧血才需要擔心，甲型帶因沒關係？」",
      "truth": "不對。甲型地中海貧血帶因者通常健康，但若父母雙方都帶有 α 鏈變異，孩子可能出現較嚴重的貧血。孕前帶因篩檢與遺傳諮詢能幫助評估風險。"
    }
  },
  {
    "association_id": "GDA_SMN1_SPINAL_MUSCULAR_ATROPHY",
    "gene": {
      "symbol": "SMN1",
      "name": "survival of motor neuron 1, telomeric",
      "chinese_name": "運動神經元存活基因 1 (SMN1)",
      "ensembl_id": "ENSG00000172062",
      "entrez_id": "6606",
      "biotype": "protein_coding",
      "chromosome": "5q13.2 (5 號染色體)",
      "metaphor": {
        "title": "🧠 脊髓裡的【運動神經元補給站】",
        "story": "運動神經元就像負責傳遞「動起來」指令的電線，SMN1 則是維持這些電線健康的補給站。如果 SMN1 功能不足，運動神經元會逐漸退化，肌肉便會無力、萎縮，這就是脊髓性肌肉萎縮症（SMA）。"
      },
      "plain_summary": "SMN1 基因負責維持運動神經元的存活。若只帶有一個致病變異（多為 SMN1 缺失），通常是無症狀帶因者，身體多半健康，運動功能正常；真正的疾病風險主要出現在父母雙方都帶有 SMN1 變異時，孩子才有較高機率罹患脊髓性肌肉萎縮症。帶因篩檢與遺傳諮詢有助於生育規劃。",
      "academic_summary": "SMN1 位於 5q13.2，編碼運動神經元存活蛋白。約 95% 的脊髓性肌肉萎縮症由 SMN1 雙等位基因缺失造成，呈體染色體隱性遺傳；疾病嚴重度與殘存的 SMN2 拷貝數相關，臨床分為第一至第四型。"
    },
    "disease": {
      "id": "MONDO:0008099",
      "name": "spinal muscular atrophy",
      "chinese_name": "脊髓性肌肉萎縮症 (SMA)",
      "categories": [
        "神經肌肉疾病",
        "遺傳性神經疾病"
      ],
      "inheritance_mode": "體染色體隱性遺傳 (Autosomal Recessive, AR)",
      "severity_badge": "🟠 需及早診斷 (已有疾病修飾治療)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001252",
        "name": "Hypotonia",
        "chinese_name": "肌肉張力低下"
      },
      {
        "hpo_id": "HP:0003202",
        "name": "Skeletal muscle atrophy",
        "chinese_name": "骨骼肌萎縮"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Nusinersen",
        "chinese_name": "諾西那生鈉 (Nusinersen)",
        "mechanism": "反義寡核苷酸，促進 SMN2 表現以補償 SMN 蛋白不足",
        "approval_status": "FDA 核准治療 SMA"
      },
      {
        "drug_name": "Onasemnogene abeparvovec",
        "chinese_name": "基因治療 (Onasemnogene abeparvovec)",
        "mechanism": "以病毒載體遞送功能性 SMN 基因",
        "approval_status": "FDA 核准基因治療"
      },
      {
        "drug_name": "Risdiplam",
        "chinese_name": "瑞斯迪普蘭 (Risdiplam)",
        "mechanism": "口服 SMN2 剪接修飾劑，增加功能性 SMN 蛋白",
        "approval_status": "FDA 核准治療 SMA"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "SMN1 缺失或致病變異；SMA 主要由 SMN1 雙等位基因功能喪失造成，SMN2 拷貝數影響嚴重度",
      "population_frequency": "SMN1 帶因率約為每 40–60 人中有 1 人，因族群而異 (PMID:20301526)",
      "traffic_light_summary": "此基因目前沒有 CPIC 藥物基因（PGx）給藥劑量指引。脊髓性肌肉萎縮症的標準治療包括 nusinersen、onasemnogene abeparvovec 與 risdiplam，屬於疾病修飾治療，是否使用與時機應由神經科醫師依型別與年齡評估。",
      "drugs_guide": [],
      "dietary_contraindications": [
        "沒有特定飲食禁忌；應注重足夠營養並依治療需求進行復健",
        "使用疾病修飾治療期間，依醫囑監測肝功能與相關不良反應"
      ]
    },
    "evidence": {
      "overall_score": 0.92,
      "plain_rating": "⭐️⭐️⭐️⭐️ 遺傳醫學證據明確",
      "clinvar_pathogenic_count": 200,
      "clinvar_summary_chinese": "ClinVar 與既有文獻收錄多種 SMN1 缺失與致病變異，與脊髓性肌肉萎縮症的關聯明確",
      "opentargets_score": 0.78,
      "key_pmids": [
        "PMID:20301526"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "若有家族史或計畫生育，建議接受 SMN1 帶因篩檢與遺傳諮詢；新生兒若出現肌肉張力低下或發展遲緩，應及早由神經科評估。",
      "lifestyle_tips": [
        "依專業團隊建議進行物理治療與復健，維持關節活動度",
        "注意呼吸道照護與營養支持，預防感染",
        "計畫懷孕前與伴侶一起接受帶因篩檢與遺傳諮詢"
      ]
    },
    "doctor_checklist": {
      "specialty": "神經科 / 小兒神經科 / 遺傳諮詢",
      "questions": [
        "醫師您好，我的 SMN1 帶因篩檢結果是帶因者，這會影響我的健康嗎？",
        "我的伴侶也需要做 SMN1 帶因篩檢嗎？",
        "如果我們計畫生育，有哪些產前或胚胎著床前檢測的選項？"
      ]
    },
    "myth_buster": {
      "myth": "「SMA 帶因者自己也會發病？」",
      "truth": "不會。帶因者通常只有一個 SMN1 功能拷貝，身體多半健康；疾病發生需要雙等位基因都受影響。帶因篩檢的價值在於評估生育風險，而不是用來判斷個人是否罹病。"
    }
  },
  {
    "association_id": "GDA_GJB2_DEAFNESS_1A",
    "gene": {
      "symbol": "GJB2",
      "name": "gap junction protein beta 2",
      "chinese_name": "間隙連接蛋白 β2 基因 (GJB2)",
      "ensembl_id": "ENSG00000165474",
      "entrez_id": "2706",
      "biotype": "protein_coding",
      "chromosome": "13q12.11 (13 號染色體)",
      "metaphor": {
        "title": "👂 內耳裡的【聲音訊號橋樑】",
        "story": "內耳毛細胞要把聲音訊號傳出去，需要 GJB2 製造的間隙連接蛋白像橋樑一樣串起細胞。如果橋樑蓋不好，聲音訊號傳遞受阻，就可能造成先天性感音神經性聽力損失。"
      },
      "plain_summary": "GJB2 基因與內耳的間隙連接蛋白有關。若只帶有一個致病變異，通常是無症狀帶因者，聽力多半正常；真正的疾病風險主要出現在父母雙方都帶有 GJB2 變異時，孩子才有較高機率出現先天性聽力損失。新生兒聽力篩檢與遺傳諮詢有助於早期發現與介入。",
      "academic_summary": "GJB2 位於 13q12.11，編碼連接蛋白 26（connexin 26）。GJB2 雙等位基因致病變異是體染色體隱性非症候群性聽力損失最常見的原因之一，呈體染色體隱性遺傳；帶因者聽力通常正常。"
    },
    "disease": {
      "id": "MONDO:0010935",
      "name": "autosomal recessive nonsyndromic deafness 1A",
      "chinese_name": "體染色體隱性非症候群性聽力損失 1A（GJB2 相關）",
      "categories": [
        "聽力障礙",
        "遺傳性感覺神經疾病"
      ],
      "inheritance_mode": "體染色體隱性遺傳 (Autosomal Recessive, AR)",
      "severity_badge": "🟠 需早期介入 (可透過聽覺輔具與復健改善)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0000407",
        "name": "Sensorineural hearing impairment",
        "chinese_name": "感音神經性聽力損失"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Cochlear implant",
        "chinese_name": "人工耳蝸 (Cochlear Implant)",
        "mechanism": "以電極直接刺激聽神經，協助重度聽力損失者恢復聲音感知",
        "approval_status": "標準醫療植入裝置"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "GJB2 致病變異（如 c.235delC 等）；與體染色體隱性非症候群性聽力損失相關",
      "population_frequency": "GJB2 相關聽力損失在東亞與多個族群中常見；帶因頻率因族群而異 (PMID:20301449)",
      "traffic_light_summary": "此基因目前沒有 CPIC 藥物基因（PGx）給藥劑量指引。GJB2 相關聽力損失的主要處理是新生兒聽力篩檢、聽覺輔具、人工耳蝸與語言復健，是否植入人工耳蝸應由耳鼻喉科與聽力團隊評估。",
      "drugs_guide": [],
      "dietary_contraindications": [
        "沒有特定飲食禁忌；應避免長期暴露於高噪音環境以保護殘存聽力",
        "依聽力團隊建議定期追蹤聽力與語言發展"
      ]
    },
    "evidence": {
      "overall_score": 0.88,
      "plain_rating": "⭐️⭐️⭐️⭐️ 遺傳醫學證據明確",
      "clinvar_pathogenic_count": 180,
      "clinvar_summary_chinese": "ClinVar 與既有文獻收錄多種 GJB2 致病變異，與體染色體隱性非症候群性聽力損失的關聯明確",
      "opentargets_score": 0.65,
      "key_pmids": [
        "PMID:20301449"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "新生兒應接受聽力篩檢；若有聽力損失家族史或計畫生育，建議接受 GJB2 基因檢測與遺傳諮詢。",
      "lifestyle_tips": [
        "避免長期暴露於高噪音環境，保護殘存聽力",
        "依聽力團隊建議配戴助聽器或人工耳蝸，並持續語言復健",
        "計畫懷孕前與伴侶一起接受帶因篩檢與遺傳諮詢"
      ]
    },
    "doctor_checklist": {
      "specialty": "耳鼻喉科 / 聽力學 / 遺傳諮詢",
      "questions": [
        "醫師您好，我的 GJB2 基因檢測顯示我是帶因者，我的聽力會受影響嗎？",
        "我的伴侶也需要做 GJB2 帶因篩檢嗎？",
        "如果孩子有聽力損失，助聽器或人工耳蝸的評估流程是什麼？"
      ]
    },
    "myth_buster": {
      "myth": "「GJB2 帶因者的孩子一定聽不見？」",
      "truth": "不一定。帶因者本身聽力通常正常，孩子是否受影響取決於另一位家長是否也帶有 GJB2 變異。透過遺傳諮詢與新生兒聽力篩檢，可以及早評估與介入。"
    }
  },
  {
    "association_id": "GDA_LDLR_FAMILIAL_HYPERCHOLESTEROLEMIA",
    "gene": {
      "symbol": "LDLR",
      "name": "low density lipoprotein receptor",
      "chinese_name": "低密度脂蛋白受體基因 (LDLR)",
      "ensembl_id": "ENSG00000130164",
      "entrez_id": "3949",
      "biotype": "protein_coding",
      "chromosome": "19p13.2 (19 號染色體)",
      "metaphor": {
        "title": "🩺 肝臟門口的【膽固醇回收站】",
        "story": "血液中的低密度脂蛋白（LDL，俗稱壞膽固醇）需要被肝臟門口的 LDLR 回收站收進來。如果回收站數量不足或故障，LDL 就會在血液中愈積愈多，長期增加動脈硬化與心血管疾病的風險。"
      },
      "plain_summary": "LDLR 基因負責製造肝臟表面的低密度脂蛋白受體，協助清除血液中的壞膽固醇。帶有致病變異可能使膽固醇偏高，且呈體染色體顯性遺傳，一等親也可能帶有相同變異。透過血脂檢查、飲食調整與藥物治療，可以有效降低心血管風險。",
      "academic_summary": "LDLR 位於 19p13.2，編碼 LDL 受體，介導 LDL 的肝臟清除。LDLR 功能喪失型變異造成家族性高膽固醇血症，呈體染色體顯性遺傳；血中 LDL-C 顯著升高，提早動脈粥狀硬化與心肌梗塞風險。"
    },
    "disease": {
      "id": "MONDO:0007750",
      "name": "familial hypercholesterolemia",
      "chinese_name": "家族性高膽固醇血症",
      "categories": [
        "脂質代謝疾病",
        "心血管疾病風險"
      ],
      "inheritance_mode": "體染色體顯性遺傳 (Autosomal Dominant, AD)",
      "severity_badge": "🟠 需長期管理 (可透過降脂藥物控制)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0003124",
        "name": "Hypercholesterolemia",
        "chinese_name": "高膽固醇血症"
      },
      {
        "hpo_id": "HP:0001658",
        "name": "Myocardial infarction",
        "chinese_name": "心肌梗塞"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Statins",
        "chinese_name": "史他汀類降脂藥",
        "mechanism": "抑制 HMG-CoA 還原酶，降低肝臟膽固醇合成並增加 LDL 受體清除",
        "approval_status": "FDA 核准處方藥"
      },
      {
        "drug_name": "PCSK9 inhibitors",
        "chinese_name": "PCSK9 抑制劑",
        "mechanism": "抑制 PCSK9 對 LDL 受體的降解，增加 LDL 清除",
        "approval_status": "FDA 核准處方藥"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "LDLR 功能喪失型致病變異；家族性高膽固醇血症主要由 LDL 受體清除能力下降造成",
      "population_frequency": "異合子家族性高膽固醇血症約每 250–300 人中有 1 人，因族群而異 (PMID:20301692)",
      "traffic_light_summary": "此基因目前沒有 CPIC 藥物基因（PGx）給藥劑量指引。家族性高膽固醇血症的標準治療以史他汀類藥物、PCSK9 抑制劑、飲食與生活型態調整為主；是否需要以及如何用藥，應由心臟內科或新陳代謝科醫師依血脂與整體風險決定。",
      "drugs_guide": [],
      "dietary_contraindications": [
        "減少飽和脂肪與反式脂肪攝取，增加蔬菜、全穀與可溶性纖維",
        "規律運動並維持理想體重，戒菸以降低心血管風險"
      ]
    },
    "evidence": {
      "overall_score": 0.9,
      "plain_rating": "⭐️⭐️⭐️⭐️ 遺傳醫學證據明確",
      "clinvar_pathogenic_count": 400,
      "clinvar_summary_chinese": "ClinVar 與既有文獻收錄大量 LDLR 致病變異，與家族性高膽固醇血症的關聯明確",
      "opentargets_score": 0.8,
      "key_pmids": [
        "PMID:20301692"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "若有早發心血管疾病家族史或血脂偏高，建議接受血脂檢查；必要時進行 LDLR 基因檢測，並讓一等親一同評估。",
      "lifestyle_tips": [
        "採用地中海型或低飽和脂肪飲食，增加蔬果與可溶性纖維",
        "每週規律運動，維持健康體重並戒菸",
        "依醫囑定期追蹤血脂，不要自行停用降脂藥物"
      ]
    },
    "doctor_checklist": {
      "specialty": "心臟內科 / 新陳代謝科 / 遺傳諮詢",
      "questions": [
        "醫師您好，我的 LDLR 基因檢測顯示有致病變異，我的膽固醇目標應該是多少？",
        "我的父母、兄弟姊妹或子女也應該接受血脂檢查或基因檢測嗎？",
        "除了史他汀，我是否適合使用 PCSK9 抑制劑或其他降脂治療？"
      ]
    },
    "myth_buster": {
      "myth": "「膽固醇高只是吃太油，跟基因無關？」",
      "truth": "不一定。家族性高膽固醇血症常由 LDLR 等基因變異造成，即使飲食清淡也可能膽固醇偏高。透過基因檢測與家族篩檢，可以及早識別並開始治療。"
    }
  },
  {
    "association_id": "GDA_MYH7_HYPERTROPHIC_CARDIOMYOPATHY",
    "gene": {
      "symbol": "MYH7",
      "name": "myosin heavy chain 7",
      "chinese_name": "心肌肌凝蛋白重鏈 7 基因 (MYH7)",
      "ensembl_id": "ENSG00000092054",
      "entrez_id": "4625",
      "biotype": "protein_coding",
      "chromosome": "14q11.2 (14 號染色體)",
      "metaphor": {
        "title": "❤️ 心臟肌肉裡的【馬達重鏈】",
        "story": "心肌收縮就像引擎運轉，MYH7 製造的肌凝蛋白重鏈是引擎裡的重要馬達零件。若零件設計有缺陷，心肌可能異常增厚、收縮與舒張不協調，形成肥厚型心肌病變。"
      },
      "plain_summary": "MYH7 基因與心肌的收縮蛋白有關。帶有致病變異可能增加肥厚型心肌病變的風險，且呈體染色體顯性遺傳，一等親也可能帶有相同變異。多數人可透過定期心臟評估、生活型態調整與藥物治療良好管理。",
      "academic_summary": "MYH7 位於 14q11.2，編碼心肌 β 肌凝蛋白重鏈。MYH7 致病變異是肥厚型心肌病變常見原因之一，呈體染色體顯性遺傳；可造成心肌肥厚、舒張功能異常與心律不整風險。"
    },
    "disease": {
      "id": "MONDO:0005045",
      "name": "hypertrophic cardiomyopathy",
      "chinese_name": "肥厚型心肌病變",
      "categories": [
        "心血管疾病",
        "遺傳性心肌病變"
      ],
      "inheritance_mode": "體染色體顯性遺傳 (Autosomal Dominant, AD)",
      "severity_badge": "🟠 需定期心臟評估 (可透過藥物與監測管理)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001639",
        "name": "Hypertrophic cardiomyopathy",
        "chinese_name": "肥厚型心肌病變"
      },
      {
        "hpo_id": "HP:0011675",
        "name": "Arrhythmia",
        "chinese_name": "心律不整"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Mavacamten",
        "chinese_name": "瑪伐凱騰 (Mavacamten)",
        "mechanism": "心肌肌凝蛋白抑制劑，降低心肌過度收縮",
        "approval_status": "FDA 核准處方藥"
      },
      {
        "drug_name": "Beta-blockers",
        "chinese_name": "乙型交感神經阻斷劑",
        "mechanism": "降低心率與心肌收縮力，改善症狀與舒張填充",
        "approval_status": "標準處方治療"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "MYH7 致病變異；肥厚型心肌病變主要由心肌收縮蛋白基因變異造成",
      "population_frequency": "肥厚型心肌病變約每 500 人中有 1 人，MYH7 與 MYBPC3 為常見致病基因 (PMID:20301725)",
      "traffic_light_summary": "此基因目前沒有 CPIC 藥物基因（PGx）給藥劑量指引。肥厚型心肌病變的標準治療包括乙型交感神經阻斷劑、mavacamten 與定期心臟監測；是否用藥與選擇應由心臟內科醫師依症狀、流出道阻塞與心律風險評估。",
      "drugs_guide": [],
      "dietary_contraindications": [
        "避免脫水、過量酒精與劇烈脫水型運動，以免加重症狀",
        "依醫囑定期接受心臟超音波與心律監測"
      ]
    },
    "evidence": {
      "overall_score": 0.9,
      "plain_rating": "⭐️⭐️⭐️⭐️ 遺傳醫學證據明確",
      "clinvar_pathogenic_count": 350,
      "clinvar_summary_chinese": "ClinVar 與既有文獻收錄大量 MYH7 致病變異，與肥厚型心肌病變的關聯明確",
      "opentargets_score": 0.78,
      "key_pmids": [
        "PMID:20301725"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "若有肥厚型心肌病變家族史、心雜音、胸悶或運動性暈厥，建議接受心臟超音波與遺傳諮詢；一等親也應評估。",
      "lifestyle_tips": [
        "保持適當水分，避免脫水與過量酒精",
        "依醫師建議選擇運動強度，避免未評估的高強度競技運動",
        "定期追蹤心臟功能與心律，出現胸痛、暈厥或心悸時及早就醫"
      ]
    },
    "doctor_checklist": {
      "specialty": "心臟內科 / 遺傳諮詢",
      "questions": [
        "醫師您好，我的 MYH7 基因檢測顯示有致病變異，我需要多久追蹤一次心臟？",
        "我的父母、兄弟姊妹或子女也應該接受心臟評估或基因檢測嗎？",
        "我適合使用乙型阻斷劑或 mavacamten 嗎？運動方面有哪些限制？"
      ]
    },
    "myth_buster": {
      "myth": "「有心臟肥厚基因就不能運動？」",
      "truth": "不一定。多數患者可在醫師評估後從事適度運動；關鍵是避免未經評估的高強度競技運動，並定期追蹤心臟功能與心律。"
    }
  },
  {
    "association_id": "GDA_MYBPC3_HYPERTROPHIC_CARDIOMYOPATHY",
    "gene": {
      "symbol": "MYBPC3",
      "name": "myosin binding protein C3",
      "chinese_name": "心肌肌凝蛋白結合蛋白 C 基因 (MYBPC3)",
      "ensembl_id": "ENSG00000134571",
      "entrez_id": "4607",
      "biotype": "protein_coding",
      "chromosome": "11p11.2 (11 號染色體)",
      "metaphor": {
        "title": "❤️ 心肌引擎裡的【調速彈簧】",
        "story": "心肌收縮需要許多蛋白質協調，MYBPC3 製造的結合蛋白就像引擎裡的調速彈簧，幫助收縮與放鬆保持節奏。若彈簧功能異常，心肌可能逐漸增厚，形成肥厚型心肌病變。"
      },
      "plain_summary": "MYBPC3 基因與心肌收縮蛋白的調節有關。帶有致病變異可能增加肥厚型心肌病變的風險，且呈體染色體顯性遺傳，一等親也可能帶有相同變異。多數人可透過定期心臟評估、生活型態調整與藥物治療良好管理。",
      "academic_summary": "MYBPC3 位於 11p11.2，編碼心肌肌凝蛋白結合蛋白 C。MYBPC3 致病變異是肥厚型心肌病變最常見的原因之一，呈體染色體顯性遺傳；可造成心肌肥厚、舒張功能異常與心律不整風險。"
    },
    "disease": {
      "id": "MONDO:0005045",
      "name": "hypertrophic cardiomyopathy",
      "chinese_name": "肥厚型心肌病變",
      "categories": [
        "心血管疾病",
        "遺傳性心肌病變"
      ],
      "inheritance_mode": "體染色體顯性遺傳 (Autosomal Dominant, AD)",
      "severity_badge": "🟠 需定期心臟評估 (可透過藥物與監測管理)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001639",
        "name": "Hypertrophic cardiomyopathy",
        "chinese_name": "肥厚型心肌病變"
      },
      {
        "hpo_id": "HP:0011675",
        "name": "Arrhythmia",
        "chinese_name": "心律不整"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Mavacamten",
        "chinese_name": "瑪伐凱騰 (Mavacamten)",
        "mechanism": "心肌肌凝蛋白抑制劑，降低心肌過度收縮",
        "approval_status": "FDA 核准處方藥"
      },
      {
        "drug_name": "Beta-blockers",
        "chinese_name": "乙型交感神經阻斷劑",
        "mechanism": "降低心率與心肌收縮力，改善症狀與舒張填充",
        "approval_status": "標準處方治療"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "MYBPC3 致病變異（多為截短型變異）；肥厚型心肌病變主要由心肌收縮蛋白基因變異造成",
      "population_frequency": "肥厚型心肌病變約每 500 人中有 1 人，MYBPC3 與 MYH7 為常見致病基因 (PMID:20301725)",
      "traffic_light_summary": "此基因目前沒有 CPIC 藥物基因（PGx）給藥劑量指引。肥厚型心肌病變的標準治療包括乙型交感神經阻斷劑、mavacamten 與定期心臟監測；是否用藥與選擇應由心臟內科醫師依症狀、流出道阻塞與心律風險評估。",
      "drugs_guide": [],
      "dietary_contraindications": [
        "避免脫水、過量酒精與劇烈脫水型運動，以免加重症狀",
        "依醫囑定期接受心臟超音波與心律監測"
      ]
    },
    "evidence": {
      "overall_score": 0.9,
      "plain_rating": "⭐️⭐️⭐️⭐️ 遺傳醫學證據明確",
      "clinvar_pathogenic_count": 400,
      "clinvar_summary_chinese": "ClinVar 與既有文獻收錄大量 MYBPC3 致病變異，與肥厚型心肌病變的關聯明確",
      "opentargets_score": 0.8,
      "key_pmids": [
        "PMID:20301725"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "若有肥厚型心肌病變家族史、心雜音、胸悶或運動性暈厥，建議接受心臟超音波與遺傳諮詢；一等親也應評估。",
      "lifestyle_tips": [
        "保持適當水分，避免脫水與過量酒精",
        "依醫師建議選擇運動強度，避免未評估的高強度競技運動",
        "定期追蹤心臟功能與心律，出現胸痛、暈厥或心悸時及早就醫"
      ]
    },
    "doctor_checklist": {
      "specialty": "心臟內科 / 遺傳諮詢",
      "questions": [
        "醫師您好，我的 MYBPC3 基因檢測顯示有致病變異，我需要多久追蹤一次心臟？",
        "我的父母、兄弟姊妹或子女也應該接受心臟評估或基因檢測嗎？",
        "我適合使用乙型阻斷劑或 mavacamten 嗎？運動方面有哪些限制？"
      ]
    },
    "myth_buster": {
      "myth": "「有肥厚型心肌病變基因就一定不能運動？」",
      "truth": "不一定。多數患者可在醫師評估後從事適度運動；關鍵是避免未經評估的高強度競技運動，並定期追蹤心臟功能與心律。"
    }
  },
  {
    "association_id": "GDA_BRCA2_HEREDITARY_BREAST_OVARIAN",
    "gene": {
      "symbol": "BRCA2",
      "name": "BRCA2 DNA repair associated",
      "chinese_name": "乳腺癌易感基因 2 號 (BRCA2)",
      "ensembl_id": "ENSG00000139618",
      "entrez_id": "675",
      "biotype": "protein_coding",
      "chromosome": "13q13.1 (13 號染色體)",
      "metaphor": {
        "title": "🧬 DNA 修復團隊裡的【RAD51 召集人】",
        "story": "當 DNA 發生雙股斷裂時，細胞需要一套精密的維修流程。BRCA2 就像維修現場的召集人，負責把 RAD51 這個關鍵修復工具帶到斷裂處。如果召集人罷工，維修無法完成，錯誤會不斷累積，長期下來提高乳癌、卵巢癌、前列腺癌與胰臟癌的風險。"
      },
      "plain_summary": "BRCA2 是人體重要的 DNA 修復基因。攜帶致病變異並不等於一定會得癌症，而是代表罹患乳癌、卵巢癌、前列腺癌與胰臟癌的終身風險較一般人升高，需要從較早年齡開始接受科學篩檢與遺傳諮詢。",
      "academic_summary": "BRCA2 位於 13q13.1，編碼約 384 kDa 的核蛋白，透過 BRC repeats 與 RAD51 交互作用，介導同源重組 (HR) 對 DNA 雙股斷裂的無差錯修復。生殖系雜合致病變異造成同源重組缺陷，呈體染色體顯性遺傳的遺傳性乳癌-卵巢癌症候群，並使腫瘤對 PARP 抑制劑產生合成致死敏感性。"
    },
    "disease": {
      "id": "MONDO:0007254",
      "name": "hereditary breast and ovarian cancer syndrome",
      "chinese_name": "遺傳性乳癌-卵巢癌症候群 (HBOC)",
      "categories": [
        "惡性腫瘤",
        "遺傳性腫瘤症候群"
      ],
      "inheritance_mode": "體染色體顯性遺傳 (Autosomal Dominant, AD)",
      "severity_badge": "⚠️ 需高度關注 (科學可防可治)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0003002",
        "name": "Breast carcinoma",
        "chinese_name": "乳癌"
      },
      {
        "hpo_id": "HP:0100615",
        "name": "Ovarian neoplasm",
        "chinese_name": "卵巢腫瘤"
      },
      {
        "hpo_id": "HP:0012125",
        "name": "Prostate cancer",
        "chinese_name": "前列腺癌"
      },
      {
        "hpo_id": "HP:0100787",
        "name": "Pancreatic neoplasm",
        "chinese_name": "胰臟腫瘤"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Olaparib",
        "chinese_name": "奧拉帕利",
        "mechanism": "PARP1/2 抑制劑 (同源重組缺陷腫瘤的合成致死機制)",
        "approval_status": "FDA / TFDA / NMPA 核准"
      },
      {
        "drug_name": "Talazoparib",
        "chinese_name": "他拉唑帕利",
        "mechanism": "強效 PARP1/2 抑制劑與 PARP 捕獲劑",
        "approval_status": "FDA / TFDA / NMPA 核准"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "生殖系致病變異 (如 c.5946delT / rs80359550 等)",
      "population_frequency": "一般人群約 1/400 ~ 1/800，因族群而異 (PMID:20301425)",
      "traffic_light_summary": "🟢 標靶藥敏感（攜帶生殖系致病變異的 BRCA2 相關腫瘤，對奧拉帕利、他拉唑帕利等 PARP 抑制劑具合成致死敏感性）",
      "drugs_guide": [
        {
          "drug_name": "Olaparib / Talazoparib",
          "chinese_name": "奧拉帕利 / 他拉唑帕利",
          "traffic_light": "GREEN_NORMAL",
          "clinical_alert": "基於合成致死原理，BRCA2 生殖系致病變異患者使用 PARP 抑制劑可顯著獲益。",
          "cpic_level": "FDA Companion Diagnostic / NCCN Category 1"
        }
      ],
      "dietary_contraindications": [
        "嚴格限制酒精攝取",
        "慎用長期無黃體素拮抗的外源性雌激素替代療法"
      ]
    },
    "evidence": {
      "overall_score": 0.96,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ 國際醫學界最高級別確證 (Definitive)",
      "clinvar_pathogenic_count": 3000,
      "clinvar_summary_chinese": "ClinVar 與既有文獻收錄大量 BRCA2 明確致病變異位點",
      "opentargets_score": 0.93,
      "key_pmids": [
        "PMID:20301425",
        "PMID:28522680"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "建議依 NCCN 指引，自 25-30 歲起每年接受乳房磁振造影 (MRI) 合併乳房攝影；有胰臟癌家族史者可與醫師討論胰臟監測；男性可與醫師討論前列腺癌篩檢。",
      "lifestyle_tips": [
        "保持健康體重，規律作息，避免長期熬夜與高脂飲食",
        "嚴格戒菸並限制酒精攝取",
        "與遺傳諮詢團隊討論生育規劃與胚胎著床前基因檢測 (PGT) 的選項"
      ]
    },
    "doctor_checklist": {
      "specialty": "乳房外科 / 腫瘤科 / 臨床遺傳門診",
      "questions": [
        "醫師您好，我的基因報告提示 BRCA2 突變，我應該從幾歲開始每年做乳房磁振造影 (MRI)？",
        "我需要做胰臟癌或前列腺癌的監測嗎？建議的檢查方式與頻率是什麼？",
        "我的直系親屬是否應該做同位點的基因篩檢？",
        "如果未來有生育計畫，胚胎著床前基因檢測 (PGT) 是否適合我？"
      ]
    },
    "myth_buster": {
      "myth": "「測出 BRCA2 突變，是不是百分之百一定會得癌症？」",
      "truth": "不是。攜帶突變只是提高終身風險，並非百分之百。透過規律篩檢、生活型態調整與必要的預防措施，多數攜帶者可以早期發現、早期治療。"
    }
  },
  {
    "association_id": "GDA_PALB2_HEREDITARY_BREAST_OVARIAN",
    "gene": {
      "symbol": "PALB2",
      "name": "partner and localizer of BRCA2",
      "chinese_name": "BRCA2 夥伴與定位基因 (PALB2)",
      "ensembl_id": "ENSG00000083093",
      "entrez_id": "79728",
      "biotype": "protein_coding",
      "chromosome": "16p12.2 (16 號染色體)",
      "metaphor": {
        "title": "🧬 DNA 維修隊的【導航兼夥伴】",
        "story": "PALB2 這個名字本身就說明它的角色：它是 BRCA2 的夥伴，負責把 BRCA2 帶到 DNA 損傷現場。少了這位導航夥伴，BRCA2 就到不了該維修的位置。維修效率下降後，乳癌與胰臟癌的風險便會上升。"
      },
      "plain_summary": "PALB2 是協助 BRCA2 進行 DNA 修復的重要夥伴基因。攜帶致病變異並不等於一定會得癌症，而是代表罹患乳癌與胰臟癌的風險較一般人升高，需要與醫師討論較早開始的乳房影像篩檢、胰臟監測與遺傳諮詢。",
      "academic_summary": "PALB2 位於 16p12.2，編碼 BRCA2 的結合蛋白，協助 BRCA2 定位至 DNA 損傷處並促進 RAD51 依賴的同源重組修復。生殖系雜合致病變異與遺傳性乳癌-卵巢癌症候群及胰臟癌易感性相關，呈體染色體顯性遺傳，腫瘤同樣具 PARP 抑制劑敏感性。"
    },
    "disease": {
      "id": "MONDO:0007254",
      "name": "hereditary breast and ovarian cancer syndrome",
      "chinese_name": "遺傳性乳癌-卵巢癌症候群 (HBOC)",
      "categories": [
        "惡性腫瘤",
        "遺傳性腫瘤症候群"
      ],
      "inheritance_mode": "體染色體顯性遺傳 (Autosomal Dominant, AD)",
      "severity_badge": "⚠️ 需高度關注 (科學可防可治)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0003002",
        "name": "Breast carcinoma",
        "chinese_name": "乳癌"
      },
      {
        "hpo_id": "HP:0100787",
        "name": "Pancreatic neoplasm",
        "chinese_name": "胰臟腫瘤"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Olaparib",
        "chinese_name": "奧拉帕利",
        "mechanism": "PARP1/2 抑制劑 (同源重組缺陷腫瘤的合成致死機制)",
        "approval_status": "FDA / TFDA / NMPA 核准"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "生殖系致病變異 (如 c.3113G>A / rs118203985 等)",
      "population_frequency": "PALB2 致病變異在一般人群相對少見，帶因頻率因族群而異 (PMID:25099575)",
      "traffic_light_summary": "🟢 標靶藥敏感（PALB2 相關、同源重組缺陷的腫瘤對奧拉帕利等 PARP 抑制劑具敏感性，證據來自指引與臨床試驗）",
      "drugs_guide": [
        {
          "drug_name": "Olaparib",
          "chinese_name": "奧拉帕利",
          "traffic_light": "GREEN_NORMAL",
          "clinical_alert": "PALB2 生殖系致病變異造成同源重組缺陷，PARP 抑制劑可透過合成致死作用帶來臨床獲益。",
          "cpic_level": "NCCN Guideline / Clinical Trial Evidence"
        }
      ],
      "dietary_contraindications": [
        "嚴格限制酒精攝取",
        "慎用長期無黃體素拮抗的外源性雌激素替代療法"
      ]
    },
    "evidence": {
      "overall_score": 0.9,
      "plain_rating": "⭐️⭐️⭐️⭐️ 國際指引與臨床試驗支持",
      "clinvar_pathogenic_count": 700,
      "clinvar_summary_chinese": "ClinVar 與既有文獻收錄多種 PALB2 致病變異，與乳癌及胰臟癌易感性相關",
      "opentargets_score": 0.85,
      "key_pmids": [
        "PMID:25099575",
        "PMID:31841383"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "建議依 NCCN 指引與醫師討論，自較早年齡開始每年乳房磁振造影 (MRI) 合併乳房攝影；若有胰臟癌家族史，可討論胰臟監測。",
      "lifestyle_tips": [
        "保持健康體重，規律作息，避免長期熬夜與高脂飲食",
        "嚴格戒菸並限制酒精攝取",
        "與遺傳諮詢團隊討論家族篩檢與生育規劃"
      ]
    },
    "doctor_checklist": {
      "specialty": "乳房外科 / 腫瘤科 / 臨床遺傳門診",
      "questions": [
        "醫師您好，我的基因報告提示 PALB2 突變，我應該從幾歲開始做乳房磁振造影 (MRI)？",
        "我需要做胰臟癌監測嗎？建議的檢查方式與頻率是什麼？",
        "我的直系親屬是否應該做同位點的基因篩檢？",
        "我的腫瘤若為同源重組缺陷，是否適合使用 PARP 抑制劑？"
      ]
    },
    "myth_buster": {
      "myth": "「PALB2 不是 BRCA，所以不用在意？」",
      "truth": "不對。PALB2 是 BRCA2 的重要夥伴，致病變異同樣會提高乳癌與胰臟癌風險。透過遺傳諮詢與適當篩檢，可以及早評估與管理。"
    }
  },
  {
    "association_id": "GDA_MLH1_LYNCH_SYNDROME",
    "gene": {
      "symbol": "MLH1",
      "name": "mutL homolog 1",
      "chinese_name": "錯配修復基因 MLH1",
      "ensembl_id": "ENSG00000076242",
      "entrez_id": "4292",
      "biotype": "protein_coding",
      "chromosome": "3p22.2 (3 號染色體)",
      "metaphor": {
        "title": "🧬 細胞裡的【錯字校對員】",
        "story": "DNA 複製時偶爾會打錯字，MLH1 就像細胞裡的校對員，負責找出並修正這些錯配。如果校對員罷工，錯字會愈積愈多，細胞便容易失控生長，增加大腸癌與子宮內膜癌等風險，這與林奇症候群有關。"
      },
      "plain_summary": "MLH1 是 DNA 錯配修復 (MMR) 的重要基因。攜帶致病變異會提高林奇症候群相關癌症（如大腸癌、子宮內膜癌）的終身風險，呈體染色體顯性遺傳，一等親也可能帶有相同變異。透過較早且規律的腸鏡與婦科監測，可以及早發現與處理。",
      "academic_summary": "MLH1 位於 3p22.2，編碼 MutL 同源蛋白，與 MSH2/MSH6/PMS2 組成錯配修復複合體，修正 DNA 複製過程中的鹼基錯配與小片段插入缺失。生殖系雜合致病變異造成錯配修復缺陷與微衛星不穩定 (MSI-H)，導致體染色體顯性遺傳的林奇症候群；dMMR/MSI-H 腫瘤對 PD-1 免疫檢查點抑制劑敏感。"
    },
    "disease": {
      "id": "MONDO:0005835",
      "name": "Lynch syndrome",
      "chinese_name": "林奇症候群（遺傳性非息肉症大腸直腸癌）",
      "categories": [
        "惡性腫瘤",
        "遺傳性腫瘤症候群"
      ],
      "inheritance_mode": "體染色體顯性遺傳 (Autosomal Dominant, AD)",
      "severity_badge": "⚠️ 需高度關注 (可透過監測與治療管理)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0003003",
        "name": "Colon cancer",
        "chinese_name": "大腸癌"
      },
      {
        "hpo_id": "HP:0012114",
        "name": "Endometrial carcinoma",
        "chinese_name": "子宮內膜癌"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Pembrolizumab",
        "chinese_name": "帕博利珠單抗 (Pembrolizumab)",
        "mechanism": "PD-1 免疫檢查點抑制劑，用於 dMMR/MSI-H 腫瘤",
        "approval_status": "FDA 生物標記核准 / NCCN Category 1"
      },
      {
        "drug_name": "Nivolumab",
        "chinese_name": "納武利尤單抗 (Nivolumab)",
        "mechanism": "PD-1 免疫檢查點抑制劑，用於 dMMR/MSI-H 腫瘤",
        "approval_status": "FDA 生物標記核准 / NCCN Category 1"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "生殖系致病變異 (MLH1 錯配修復基因)；腫瘤常表現 dMMR/MSI-H",
      "population_frequency": "林奇症候群約每 300 人中有 1 人，因族群與基因而異 (PMID:20301390)",
      "traffic_light_summary": "🟢 免疫治療敏感（dMMR/MSI-H 腫瘤對 pembrolizumab、nivolumab 等 PD-1 免疫檢查點抑制劑有良好反應，屬 FDA 生物標記核准與 NCCN Category 1）",
      "drugs_guide": [
        {
          "drug_name": "Pembrolizumab / Nivolumab",
          "chinese_name": "帕博利珠單抗 / 納武利尤單抗",
          "traffic_light": "GREEN_NORMAL",
          "clinical_alert": "MLH1 缺陷造成的 dMMR/MSI-H 腫瘤對 PD-1 免疫檢查點抑制劑具良好反應，用藥前應以病理檢測確認 dMMR/MSI-H 狀態。",
          "cpic_level": "FDA Biomarker-Approved (dMMR/MSI-H) / NCCN Category 1"
        }
      ],
      "dietary_contraindications": [
        "減少加工肉品與紅肉攝取，增加蔬菜、水果與全穀類",
        "限制酒精攝取並維持健康體重"
      ]
    },
    "evidence": {
      "overall_score": 0.95,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ 國際醫學界最高級別確證 (Definitive)",
      "clinvar_pathogenic_count": 1200,
      "clinvar_summary_chinese": "ClinVar 與既有文獻收錄大量 MLH1 致病變異，與林奇症候群及 dMMR/MSI-H 腫瘤相關",
      "opentargets_score": 0.9,
      "key_pmids": [
        "PMID:20301390",
        "PMID:26023682"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "建議依 NCCN 指引與醫師討論，自 20-25 歲起每 1-2 年接受大腸鏡檢查；女性可討論子宮內膜癌監測；家族成員應接受遺傳諮詢與基因檢測。",
      "lifestyle_tips": [
        "減少加工肉品與紅肉，增加蔬菜、水果與全穀類攝取",
        "規律運動、維持健康體重並限制酒精",
        "出現血便、排便習慣改變或異常出血時及早就醫"
      ]
    },
    "doctor_checklist": {
      "specialty": "胃腸肝膽科 / 腫瘤科 / 婦科 / 臨床遺傳門診",
      "questions": [
        "醫師您好，我的基因報告提示 MLH1 突變，我應該從幾歲開始做大腸鏡？多久一次？",
        "我需要做子宮內膜癌的監測嗎？建議的檢查方式是什麼？",
        "我的腫瘤是否應檢測 dMMR/MSI-H？這會影響免疫治療的選擇嗎？",
        "我的直系親屬是否應該做同位點的基因篩檢？"
      ]
    },
    "myth_buster": {
      "myth": "「林奇症候群一定會得大腸癌？」",
      "truth": "不是。林奇症候群會提高風險，但透過規律大腸鏡監測、生活型態調整與必要時的醫療處置，可以大幅降低風險並及早發現、及早治療。"
    }
  },
  {
    "association_id": "GDA_MSH2_LYNCH_SYNDROME",
    "gene": {
      "symbol": "MSH2",
      "name": "mutS homolog 2",
      "chinese_name": "錯配修復基因 MSH2",
      "ensembl_id": "ENSG00000095002",
      "entrez_id": "4436",
      "biotype": "protein_coding",
      "chromosome": "2p21 (2 號染色體)",
      "metaphor": {
        "title": "🧬 DNA 校對臺上的【錯配偵測器】",
        "story": "DNA 複製難免出現錯配，MSH2 就像校對臺上的偵測器，先找出錯字，再交給修復團隊改正。如果偵測器失靈，錯字會不斷累積，細胞便容易走上癌變之路，這與林奇症候群有關。"
      },
      "plain_summary": "MSH2 是 DNA 錯配修復 (MMR) 的重要基因。攜帶致病變異會提高林奇症候群相關癌症（如大腸癌、子宮內膜癌）的終身風險，呈體染色體顯性遺傳，一等親也可能帶有相同變異。透過較早且規律的腸鏡與婦科監測，可以及早發現與處理。",
      "academic_summary": "MSH2 位於 2p21，編碼 MutS 同源蛋白，與 MSH6 形成 MutSα 複合體辨識 DNA 鹼基錯配與小片段插入缺失，並招募 MLH1/PMS2 完成修復。生殖系雜合致病變異造成錯配修復缺陷與微衛星不穩定 (MSI-H)，導致體染色體顯性遺傳的林奇症候群；dMMR/MSI-H 腫瘤對 PD-1 免疫檢查點抑制劑敏感。"
    },
    "disease": {
      "id": "MONDO:0005835",
      "name": "Lynch syndrome",
      "chinese_name": "林奇症候群（遺傳性非息肉症大腸直腸癌）",
      "categories": [
        "惡性腫瘤",
        "遺傳性腫瘤症候群"
      ],
      "inheritance_mode": "體染色體顯性遺傳 (Autosomal Dominant, AD)",
      "severity_badge": "⚠️ 需高度關注 (可透過監測與治療管理)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0003003",
        "name": "Colon cancer",
        "chinese_name": "大腸癌"
      },
      {
        "hpo_id": "HP:0012114",
        "name": "Endometrial carcinoma",
        "chinese_name": "子宮內膜癌"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Pembrolizumab",
        "chinese_name": "帕博利珠單抗 (Pembrolizumab)",
        "mechanism": "PD-1 免疫檢查點抑制劑，用於 dMMR/MSI-H 腫瘤",
        "approval_status": "FDA 生物標記核准 / NCCN Category 1"
      },
      {
        "drug_name": "Nivolumab",
        "chinese_name": "納武利尤單抗 (Nivolumab)",
        "mechanism": "PD-1 免疫檢查點抑制劑，用於 dMMR/MSI-H 腫瘤",
        "approval_status": "FDA 生物標記核准 / NCCN Category 1"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "生殖系致病變異 (MSH2 錯配修復基因)；腫瘤常表現 dMMR/MSI-H",
      "population_frequency": "林奇症候群約每 300 人中有 1 人，因族群與基因而異 (PMID:20301390)",
      "traffic_light_summary": "🟢 免疫治療敏感（dMMR/MSI-H 腫瘤對 pembrolizumab、nivolumab 等 PD-1 免疫檢查點抑制劑有良好反應，屬 FDA 生物標記核准與 NCCN Category 1）",
      "drugs_guide": [
        {
          "drug_name": "Pembrolizumab / Nivolumab",
          "chinese_name": "帕博利珠單抗 / 納武利尤單抗",
          "traffic_light": "GREEN_NORMAL",
          "clinical_alert": "MSH2 缺陷造成的 dMMR/MSI-H 腫瘤對 PD-1 免疫檢查點抑制劑具良好反應，用藥前應以病理檢測確認 dMMR/MSI-H 狀態。",
          "cpic_level": "FDA Biomarker-Approved (dMMR/MSI-H) / NCCN Category 1"
        }
      ],
      "dietary_contraindications": [
        "減少加工肉品與紅肉攝取，增加蔬菜、水果與全穀類",
        "限制酒精攝取並維持健康體重"
      ]
    },
    "evidence": {
      "overall_score": 0.95,
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ 國際醫學界最高級別確證 (Definitive)",
      "clinvar_pathogenic_count": 1400,
      "clinvar_summary_chinese": "ClinVar 與既有文獻收錄大量 MSH2 致病變異，與林奇症候群及 dMMR/MSI-H 腫瘤相關",
      "opentargets_score": 0.9,
      "key_pmids": [
        "PMID:20301390",
        "PMID:26023682"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "建議依 NCCN 指引與醫師討論，自 20-25 歲起每 1-2 年接受大腸鏡檢查；女性可討論子宮內膜癌監測；家族成員應接受遺傳諮詢與基因檢測。",
      "lifestyle_tips": [
        "減少加工肉品與紅肉，增加蔬菜、水果與全穀類攝取",
        "規律運動、維持健康體重並限制酒精",
        "出現血便、排便習慣改變或異常出血時及早就醫"
      ]
    },
    "doctor_checklist": {
      "specialty": "胃腸肝膽科 / 腫瘤科 / 婦科 / 臨床遺傳門診",
      "questions": [
        "醫師您好，我的基因報告提示 MSH2 突變，我應該從幾歲開始做大腸鏡？多久一次？",
        "我需要做子宮內膜癌的監測嗎？建議的檢查方式是什麼？",
        "我的腫瘤是否應檢測 dMMR/MSI-H？這會影響免疫治療的選擇嗎？",
        "我的直系親屬是否應該做同位點的基因篩檢？"
      ]
    },
    "myth_buster": {
      "myth": "「林奇症候群一定會得大腸癌？」",
      "truth": "不是。林奇症候群會提高風險，但透過規律大腸鏡監測、生活型態調整與必要時的醫療處置，可以大幅降低風險並及早發現、及早治療。"
    }
  }
];
window.EN_RECORDS = {
  "BRCA1": {
    "gene": {
      "chinese_name": "BRCA1 DNA Repair Associated",
      "chromosome": "17q21.31 (Chromosome 17)",
      "metaphor": {
        "title": "🧬 The Cell’s 【DNA Auto Mechanic】",
        "story": "Our cells run at high speed every day, and minor DNA damage is inevitable. BRCA1 acts like an experienced master mechanic who spots damage and fixes it immediately. If this mechanic carries a pathogenic mutation (goes on strike), damaged parts remain unrepaired while the car keeps driving—increasing the risk of a major accident (malignant tumor) over time."
      },
      "plain_summary": "BRCA1 is one of the body’s natural anti-cancer guardians. Carrying a pathogenic variant does NOT mean cancer is inevitable; it increases lifetime susceptibility to breast and ovarian cancer, making earlier MRI screening and proactive prevention essential.",
      "academic_summary": "BRCA1 encodes a 190-kDa nuclear phosphoprotein (RING finger & BRCT domains) mediating error-free homologous recombination (HR) repair of DNA double-strand breaks via RAD51. Germline heterozygous pathogenic variants impair HR, elevating breast/ovarian cancer risk and conferring synthetic lethality sensitivity to PARP inhibitors."
    },
    "disease": {
      "chinese_name": "Hereditary Breast and Ovarian Cancer Syndrome (HBOC)",
      "categories": [
        "Malignant Neoplasm",
        "Hereditary Cancer Syndrome"
      ],
      "inheritance_mode": "Autosomal Dominant (AD)",
      "severity_badge": "⚠️ High Clinical Priority (Preventable & Treatable)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0003002",
        "name": "Breast carcinoma",
        "chinese_name": "Breast carcinoma"
      },
      {
        "hpo_id": "HP:0100615",
        "name": "Ovarian neoplasm",
        "chinese_name": "Ovarian neoplasm"
      },
      {
        "hpo_id": "HP:0010519",
        "name": "Fallopian tube carcinoma",
        "chinese_name": "Fallopian tube carcinoma"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Olaparib",
        "chinese_name": "Olaparib (Lynparza)",
        "mechanism": "PARP1/2 inhibitor (synthetic lethality in HR-deficient tumors)",
        "approval_status": "FDA / TFDA / NMPA Approved"
      },
      {
        "drug_name": "Talazoparib",
        "chinese_name": "Talazoparib (Talzenna)",
        "mechanism": "Potent PARP1/2 inhibitor and PARP-DNA trapper",
        "approval_status": "FDA / TFDA / NMPA Approved"
      }
    ],
    "pharmacogenomics": {
      "key_variant": "Germline pathogenic variants (e.g., c.5266dupC / rs80357906)",
      "population_frequency": "~1 in 400 to 1 in 800 in the general population",
      "traffic_light_summary": "🟢 Targeted Therapy Sensitive: Germline pathogenic BRCA1 carriers show high sensitivity to PARP inhibitors (Olaparib, Talazoparib) and platinum chemotherapy.",
      "drugs_guide": [
        {
          "drug_name": "Olaparib / Talazoparib",
          "chinese_name": "Olaparib / Talazoparib",
          "traffic_light": "GREEN_NORMAL",
          "clinical_alert": "Via synthetic lethality, patients with germline pathogenic BRCA1 variants derive significant clinical benefit from PARP inhibitor therapy.",
          "cpic_level": "FDA Companion Diagnostic / NCCN Category 1"
        }
      ],
      "dietary_contraindications": [
        "Strictly limit alcohol consumption",
        "Use long-term unopposed exogenous estrogen replacement therapy with caution"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Definitive International Clinical Consensus",
      "clinvar_summary_chinese": "3,500+ curated pathogenic variants in ClinVar"
    },
    "lifestyle_prevention": {
      "screening_advice": "Begin clinical breast exams every 6–12 months starting at age 25; perform annual contrast-enhanced breast MRI combined with mammography starting at age 30.",
      "lifestyle_tips": [
        "Maintain a healthy body weight, regular sleep schedule, and low-saturated-fat diet",
        "Avoid tobacco and strictly limit alcohol intake (alcohol elevates estrogen levels)",
        "Consider breastfeeding when appropriate under medical guidance to help lower risk"
      ]
    },
    "doctor_checklist": {
      "specialty": "Breast Surgery / Medical Oncology / Clinical Genetics Clinic",
      "questions": [
        "Doctor, my genetic report shows a BRCA1 variant. At what age should I start annual contrast-enhanced breast MRI?",
        "Beyond breast imaging, what regular screening do you recommend for my ovaries and fallopian tubes (CA-125, transvaginal ultrasound)?",
        "Should my first-degree relatives (mother, sisters, children) undergo cascade genetic testing for this exact variant?",
        "If I plan to have children in the future, is Preimplantation Genetic Testing (PGT-M) available to prevent passing on this variant?"
      ]
    },
    "myth_buster": {
      "myth": "“Does testing positive for a BRCA1 mutation mean I am 100% guaranteed to get cancer in a few years?”",
      "truth": "No! Carrying a pathogenic variant increases lifetime probability (~60%–70% vs. ~12% in the general population), not a 100% certainty. With structured MRI screening and preventive options, most carriers live long, healthy lives with early detection and cure."
    }
  },
  "TP53": {
    "gene": {
      "chinese_name": "Tumor Protein p53 (Guardian of the Genome)",
      "chromosome": "17p13.1 (Chromosome 17)",
      "metaphor": {
        "title": "🛑 The Cell’s 【Emergency Brake Pad / Genome Security Guard】",
        "story": "If cell division is a high-speed train, TP53 is the ultimate emergency brake and chief security officer. Whenever cell DNA is damaged by radiation or chemicals, TP53 hits the brakes so the cell can repair itself—or triggers self-destruction (apoptosis) if unrepairable. When germline TP53 fails, the train loses its emergency brake, making multiple tissues prone to early tumors."
      },
      "plain_summary": "TP53 is the body’s master tumor-suppressor switch. Germline pathogenic TP53 variants cause Li-Fraumeni syndrome (LFS). Carriers require annual radiation-free Whole-Body MRI for early detection and must strictly avoid unnecessary X-rays and CT radiation.",
      "academic_summary": "TP53 encodes tetrameric transcription factor p53, transactivating CDKN1A (p21), BAX, PUMA, and GADD45A in response to DNA damage to enforce G1/S arrest, DNA repair, or apoptosis. Germline heterozygous pathogenic variants cause autosomal dominant Li-Fraumeni syndrome (LFS)."
    },
    "disease": {
      "chinese_name": "Li-Fraumeni Syndrome (Hereditary Multi-Cancer Syndrome)",
      "categories": [
        "Hereditary Cancer Syndrome",
        "Rare Disease"
      ],
      "inheritance_mode": "Autosomal Dominant (AD)",
      "severity_badge": "🚨 High-Risk Syndrome (Lifelong Radiation-Free MRI Surveillance)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0002664",
        "name": "Neoplasm",
        "chinese_name": "Multi-organ neoplasm susceptibility"
      },
      {
        "hpo_id": "HP:0002897",
        "name": "Osteosarcoma",
        "chinese_name": "Osteosarcoma"
      },
      {
        "hpo_id": "HP:0003002",
        "name": "Breast carcinoma",
        "chinese_name": "Early-onset breast carcinoma"
      },
      {
        "hpo_id": "HP:0006744",
        "name": "Adrenocortical carcinoma",
        "chinese_name": "Adrenocortical carcinoma"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Eprenetapopt",
        "chinese_name": "Eprenetapopt (APR-246, Investigational p53 Reactivator)",
        "mechanism": "Restores wild-type conformation to mutant p53 protein and induces tumor apoptosis",
        "approval_status": "Clinical Trials (Phase II/III)"
      }
    ],
    "pharmacogenomics": {
      "key_variant": "Germline pathogenic variants (e.g., p.Arg175His / p.Arg248Gln / p.Arg273His)",
      "population_frequency": "~1 in 5,000 to 1 in 20,000 in the general population",
      "traffic_light_summary": "🔴 Avoid Unnecessary Ionizing Radiation & Genotoxic Radiotherapy: Defective DNA damage response means frequent CT scans or radiotherapy can induce secondary primary malignancies.",
      "drugs_guide": [
        {
          "drug_name": "Ionizing Radiation / Genotoxic Radiotherapy",
          "chinese_name": "Ionizing Radiation / Conventional Radiotherapy",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "Germline TP53 carriers are hypersensitive to ionizing radiation. Use Whole-Body MRI and ultrasound instead of CT/mammography for routine surveillance, and prioritize surgical or non-genotoxic therapies.",
          "cpic_level": "NCCN LFS Guideline High Alert"
        }
      ],
      "dietary_contraindications": [
        "Strictly avoid tobacco, alcohol, aflatoxins, and nitrosamine-rich cured foods",
        "Avoid non-essential CT, PET-CT, and chest X-ray radiation exposure"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Definitive International Clinical Consensus",
      "clinvar_summary_chinese": "1,600+ curated pathogenic/likely pathogenic variants in ClinVar"
    },
    "lifestyle_prevention": {
      "screening_advice": "Follow the international Toronto Protocol: annual Whole-Body MRI and brain MRI; annual breast MRI for women starting at age 20 (avoid radiation-based mammography/CT for routine checkups); upper/lower endoscopy every 2–5 years.",
      "lifestyle_tips": [
        "[Core Rule] Always inform physicians of germline TP53 status before imaging—prioritize ultrasound and MRI, and avoid unnecessary CT/X-ray radiation",
        "Practice strict physical UV sun protection outdoors to prevent skin neoplasms",
        "Seek prompt medical evaluation for any unexplained bone pain, lumps, or persistent headaches"
      ]
    },
    "doctor_checklist": {
      "specialty": "Hereditary Cancer Clinic / Medical Oncology / Clinical Genetics",
      "questions": [
        "Doctor, I carry a germline TP53 variant. Can our hospital arrange annual Whole-Body MRI surveillance following the Toronto Protocol?",
        "For routine checkups, should I completely replace mammograms and chest CT scans with breast MRI and ultrasound?",
        "Should my parents, siblings, and children undergo targeted genetic testing for this variant?",
        "If I plan to have children, how can Preimplantation Genetic Testing (PGT-M) help prevent passing on the TP53 variant?"
      ]
    },
    "myth_buster": {
      "myth": "“Since TP53 mutations increase tumor risk, should I get a full-body PET-CT or contrast CT every six months to screen for cancer?”",
      "truth": "Never do that! CT and PET-CT deliver significant ionizing radiation. For people lacking TP53’s “emergency brake,” frequent CT scans can damage healthy cell DNA and induce new tumors. The gold standard for TP53 surveillance is zero-radiation Whole-Body MRI and ultrasound."
    }
  },
  "APOE": {
    "gene": {
      "chinese_name": "Apolipoprotein E",
      "chromosome": "19q13.32 (Chromosome 19)",
      "metaphor": {
        "title": "🧠 The Brain’s 【Waste-Clearing Truck (ε4 Model Runs Slower)】",
        "story": "As the brain works, it produces metabolic waste products (like sticky amyloid plaques). APOE acts like a fleet of sanitation trucks patrolling the brain every night to clear out trash. APOE comes in three main models (ε2, ε3, ε4). If you inherit the ε4 model, the truck clears amyloid more slowly, allowing waste to accumulate over decades and increasing late-onset Alzheimer disease susceptibility."
      },
      "plain_summary": "APOE ε4 is the most common genetic susceptibility marker for late-onset Alzheimer disease. It is a “risk factor,” NOT a deterministic disease gene—carriers who protect cardiovascular health, follow a Mediterranean diet, and stay mentally active may never develop dementia.",
      "academic_summary": "The APOE ε4 allele (defined by the rs429358-C and rs7412-C haplotype) impairs astrocyte-mediated β-amyloid (Aβ) clearance, promotes tau hyperphosphorylation, and compromises blood-brain barrier integrity, representing the strongest genetic risk factor for sporadic late-onset Alzheimer disease."
    },
    "disease": {
      "chinese_name": "Alzheimer Disease (Late-Onset Dementia)",
      "categories": [
        "Neurodegenerative Disorder",
        "Cognitive Impairment"
      ],
      "inheritance_mode": "Complex Polygenic Susceptibility (Semidominant ε4 Dose Effect)",
      "severity_badge": "💡 Susceptibility Factor (Non-Deterministic & Modifiable)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0000726",
        "name": "Dementia",
        "chinese_name": "Dementia"
      },
      {
        "hpo_id": "HP:0002354",
        "name": "Memory impairment",
        "chinese_name": "Memory impairment"
      },
      {
        "hpo_id": "HP:0001268",
        "name": "Mental deterioration",
        "chinese_name": "Progressive cognitive decline"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Lecanemab",
        "chinese_name": "Lecanemab (Leqembi)",
        "mechanism": "Humanized IgG1 monoclonal antibody targeting soluble Aβ protofibrils",
        "approval_status": "FDA / TFDA / NMPA Approved"
      },
      {
        "drug_name": "Donanemab",
        "chinese_name": "Donanemab (Kisunla)",
        "mechanism": "Monoclonal antibody targeting N3pG-modified amyloid plaques",
        "approval_status": "FDA Approved"
      }
    ],
    "pharmacogenomics": {
      "key_variant": "APOE ε4 allele (rs429358 C / rs7412 C)",
      "population_frequency": "~15%–25% carrier frequency in the general population",
      "traffic_light_summary": "🟡 Caution / Intensive Monitoring: APOE ε4 carriers (especially homozygotes) have a significantly higher risk of Amyloid-Related Imaging Abnormalities (ARIA cerebral edema/microhemorrhages) when treated with anti-Aβ antibodies (Lecanemab/Donanemab); APOE genotyping is recommended prior to therapy.",
      "drugs_guide": [
        {
          "drug_name": "Lecanemab / Donanemab",
          "chinese_name": "Lecanemab / Donanemab",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "FDA Boxed Warning notes that APOE ε4 homozygotes have a substantially higher incidence of ARIA-E (cerebral edema) and ARIA-H (microhemorrhages). Test APOE status before initiating therapy and intensify brain MRI monitoring.",
          "cpic_level": "FDA Boxed Warning Biomarker"
        }
      ],
      "dietary_contraindications": [
        "Limit saturated fats, trans fats, and refined sugars (APOE ε4 carriers are more sensitive to dietary cholesterol/saturated fat, elevating LDL-C)"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Strong Scientific Consensus",
      "clinvar_summary_chinese": "Confirmed dose-dependent neurodegenerative risk for the ε4 isoform"
    },
    "lifestyle_prevention": {
      "screening_advice": "After age 50, include annual MoCA cognitive screening in checkups and regularly monitor blood pressure, blood glucose, and LDL-C cholesterol.",
      "lifestyle_tips": [
        "Mediterranean diet: prioritize fatty fish rich in Omega-3, nuts, extra-virgin olive oil, and dark leafy greens",
        "Lifelong cognitive engagement: reading, strategy games, learning instruments or languages to build cognitive reserve",
        "Ensure 7–8 hours of deep sleep nightly so the glymphatic system can clear metabolic waste from the brain"
      ]
    },
    "doctor_checklist": {
      "specialty": "Neurology / Memory Clinic / Geriatric Medicine",
      "questions": [
        "Doctor, my test shows I carry the APOE ε4 allele. Should I schedule baseline brain MRI or cognitive scale assessments?",
        "What target levels should I aim for with my LDL-C cholesterol and blood pressure to best protect my cerebral blood vessels?",
        "If an older family member with early memory decline considers Lecanemab, how does APOE ε4 status affect ARIA monitoring?"
      ]
    },
    "myth_buster": {
      "myth": "“If I carry two copies of APOE ε4, am I guaranteed to develop Alzheimer disease when I get old?”",
      "truth": "Absolutely not! Genetics is only part of the picture. Vascular health, a Mediterranean diet, regular aerobic exercise, quality sleep, and cognitive training provide powerful protection. Many ε4/ε4 carriers remain sharp and independent throughout old age."
    }
  },
  "EGFR": {
    "gene": {
      "chinese_name": "Epidermal Growth Factor Receptor",
      "chromosome": "7p11.2 (Chromosome 7)",
      "metaphor": {
        "title": "🚦 The Cell Surface 【Growth Gas Pedal (Targeted Drugs Are the Precision Brake Key)】",
        "story": "Normal cells only tap the gas pedal lightly when the body signals a need for tissue repair. When EGFR mutates in lung cells, it is as if the gas pedal is rusted and jammed all the way to the floor—causing uncontrolled cell growth and lung cancer. Fortunately, modern medicine invented a precision “brake key” (targeted drugs like Osimertinib and Gefitinib) that locks onto the jammed pedal and stops tumor growth."
      },
      "plain_summary": "EGFR mutations are among the most common and treatable actionable targets in non-small cell lung cancer (NSCLC), occurring in ~50% of East Asian lung adenocarcinoma patients. Daily oral targeted therapy enables long-term tumor control and high quality of life.",
      "academic_summary": "EGFR exon 19 in-frame deletions (Ex19del) and exon 21 L858R point mutations cause ligand-independent constitutive autophosphorylation of the tyrosine kinase domain, driving downstream MAPK and PI3K-Akt survival pathways and conferring high sensitivity to 1st/2nd/3rd-generation EGFR-TKIs."
    },
    "disease": {
      "chinese_name": "Non-Small Cell Lung Carcinoma (NSCLC)",
      "categories": [
        "Malignant Neoplasm",
        "Thoracic Oncology"
      ],
      "inheritance_mode": "Predominantly Acquired Somatic Mutation (Non-Hereditary)",
      "severity_badge": "🎯 Actionable Target (Highly Effective Oral Targeted Therapy)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0030358",
        "name": "Non-small cell lung carcinoma",
        "chinese_name": "Non-small cell lung carcinoma"
      },
      {
        "hpo_id": "HP:0100526",
        "name": "Neoplasm of the lung",
        "chinese_name": "Neoplasm of the lung"
      },
      {
        "hpo_id": "HP:0002105",
        "name": "Hemoptysis",
        "chinese_name": "Hemoptysis / persistent cough"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Osimertinib",
        "chinese_name": "Osimertinib (Tagrisso)",
        "mechanism": "3rd-generation irreversible EGFR-TKI (covers sensitizing & T790M resistance mutations; high CNS penetration)",
        "approval_status": "FDA / TFDA / NMPA Approved"
      },
      {
        "drug_name": "Gefitinib",
        "chinese_name": "Gefitinib (Iressa)",
        "mechanism": "1st-generation reversible EGFR tyrosine kinase inhibitor (EGFR-TKI)",
        "approval_status": "FDA / TFDA / NMPA Approved"
      }
    ],
    "pharmacogenomics": {
      "key_variant": "Somatic sensitizing variants Exon 19 deletion / L858R; resistance variant T790M",
      "population_frequency": "~45%–55% somatic mutation rate in East Asian lung adenocarcinoma",
      "traffic_light_summary": "🟢 Targeted Therapy Sensitive: Ex19del/L858R tumors respond strongly to Osimertinib/Gefitinib; 🔴 Avoid grapefruit and St. John’s Wort during therapy to prevent CYP3A4-mediated toxicity or drug failure.",
      "drugs_guide": [
        {
          "drug_name": "Osimertinib / Gefitinib",
          "chinese_name": "Osimertinib / Gefitinib",
          "traffic_light": "GREEN_NORMAL",
          "clinical_alert": "Companion diagnostics confirm that EGFR Ex19del or L858R-positive NSCLC patients achieve significantly superior progression-free survival with first-line Osimertinib or Gefitinib vs. chemotherapy.",
          "cpic_level": "FDA / NMPA Companion Diagnostic Level 1A"
        }
      ],
      "dietary_contraindications": [
        "Strictly avoid grapefruit, Seville bitter oranges, and St. John’s Wort while taking Osimertinib or Gefitinib to prevent CYP3A4 interference"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Top-Tier Precision Oncology Guideline (FDA / TFDA / NMPA Approved)",
      "clinvar_summary_chinese": "Confirmed clinical sensitivity to Osimertinib, Gefitinib, and EGFR-TKIs"
    },
    "lifestyle_prevention": {
      "screening_advice": "Adults aged 40+ with a smoking history, secondhand smoke/cooking fume exposure, or family history of lung cancer should undergo annual Low-Dose Chest CT (LDCT).",
      "lifestyle_tips": [
        "Avoid first-hand and second-hand tobacco smoke; use high-extraction range hoods when cooking",
        "Maintain good indoor ventilation and wear particulate respirators during high air-pollution days",
        "Avoid occupational exposure to radon, asbestos, and industrial dust"
      ]
    },
    "doctor_checklist": {
      "specialty": "Thoracic Surgery / Medical Oncology / Pulmonology",
      "questions": [
        "Doctor, my biopsy report shows an EGFR mutation. Do you recommend a 1st-, 2nd-, or 3rd-generation EGFR-TKI (such as Osimertinib) as first-line therapy?",
        "What common side effects of EGFR targeted therapy (such as skin rash or diarrhea) should I watch for and how can I manage them?",
        "How frequently should I schedule follow-up chest CT and brain MRI scans during treatment?"
      ]
    },
    "myth_buster": {
      "myth": "“Does every lung cancer patient have to endure grueling chemotherapy with severe hair loss and weight loss?”",
      "truth": "Not necessarily! When a sensitizing mutation like EGFR is identified, first-line treatment is often a convenient once-daily oral targeted pill—without chemotherapy hair loss and with much milder side effects, allowing most patients to live and work normally at home."
    }
  },
  "ALDH2": {
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
  },
  "G6PD": {
    "gene": {
      "chinese_name": "Glucose-6-Phosphate Dehydrogenase (Favism Gene)",
      "chromosome": "Xq28 (X Chromosome)",
      "metaphor": {
        "title": "🛡️ Red Blood Cells’ 【Anti-Oxidation Bulletproof Vest】",
        "story": "Red blood cells carry oxygen daily and face oxidative free radicals. G6PD weaves their “anti-oxidation bulletproof vest” (NADPH / reduced glutathione). When G6PD is deficient, red blood cells work fine on calm days—but if exposed to fava beans, mothballs (naphthalene), sulfonamides, or primaquine, unprotected red blood cells burst within hours (acute hemolysis)!"
      },
      "plain_summary": "G6PD deficiency (Favism) follows X-linked inheritance (males are more frequently affected) and is common in Taiwan and southern China. By avoiding fava beans and contraindicated oxidative drugs for life, carriers live completely normal, healthy lives!",
      "academic_summary": "G6PD encodes the rate-limiting enzyme of the pentose phosphate pathway (PPP), generating erythrocyte NADPH to maintain reduced glutathione (GSH). X-linked variants (c.1376G>T, c.1388G>A) reduce enzyme activity, triggering acute non-immune hemolytic anemia upon exposure to vicine/convicine or oxidative drugs."
    },
    "disease": {
      "chinese_name": "Favism / Glucose-6-Phosphate Dehydrogenase (G6PD) Deficiency",
      "categories": [
        "Pharmacogenomics (PGx)",
        "Hematologic Disorder",
        "Dietary & Drug Contraindication"
      ],
      "inheritance_mode": "X-Linked Incomplete Dominant",
      "severity_badge": "🔴 Lifelong Drug & Fava Bean Red Light (Healthy When Avoided)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001878",
        "name": "Hemolytic anemia",
        "chinese_name": "Acute hemolytic anemia"
      },
      {
        "hpo_id": "HP:0000952",
        "name": "Jaundice",
        "chinese_name": "Jaundice / hyperbilirubinemia"
      },
      {
        "hpo_id": "HP:0012072",
        "name": "Hemoglobinuria",
        "chinese_name": "Hemoglobinuria (dark tea urine)"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Rasburicase / Primaquine / Sulfonamides (Contraindicated)",
        "chinese_name": "Rasburicase / Primaquine / Sulfonamides (Contraindicated)",
        "mechanism": "Induces severe oxidative stress and acute hemolysis in G6PD-deficient red blood cells",
        "approval_status": "CPIC Level A / FDA Boxed Warning"
      }
    ],
    "pharmacogenomics": {
      "key_variant": "Common variants c.1376G>T (Canton), c.1388G>A (Kaiping), c.95A>G (Gaohe)",
      "population_frequency": "400M+ globally; ~3%–10% prevalence in Taiwan and southern China",
      "traffic_light_summary": "🔴 Strictly avoid fava beans, sulfonamide antibiotics, primaquine, rasburicase, methylene blue, camphor/naphthalene mothballs, and high-risk oxidative analgesics!",
      "drugs_guide": [
        {
          "drug_name": "Sulfonamides (e.g., Sulfamethoxazole)",
          "chinese_name": "Sulfonamide Antibiotics (Trimethoprim-Sulfamethoxazole)",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "CPIC high-hemolysis-risk drug. Strictly avoid in G6PD deficiency; use penicillins or cephalosporins instead.",
          "cpic_level": "CPIC Guideline Level A (Avoid Use)"
        },
        {
          "drug_name": "Primaquine / Tafenoquine / Rasburicase / Methylene Blue",
          "chinese_name": "Primaquine / Tafenoquine / Rasburicase / Methylene Blue",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "Extreme risk of life-threatening acute hemolysis; FDA Boxed Warning contraindicates use in G6PD deficiency.",
          "cpic_level": "CPIC Guideline Level A (Contraindicated)"
        },
        {
          "drug_name": "Camphor / Naphthalene / Certain Analgesics",
          "chinese_name": "Naphthalene Mothballs, Acetanilide, Phenacetin & Oxidative Herbs",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "Never place naphthalene/camphor mothballs in infant clothing; for fever, use standard-dose acetaminophen or ibuprofen.",
          "cpic_level": "Pediatric Favism Clinical Consensus"
        }
      ],
      "dietary_contraindications": [
        "Lifelong strict avoidance of fresh or dried fava beans (broad beans) and snacks/sauces containing fava beans",
        "Breastfeeding mothers of G6PD-deficient infants must also avoid fava beans and contraindicated oxidative medications"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Top-Tier International CPIC & Newborn Screening Guideline",
      "clinvar_summary_chinese": "200+ curated pathogenic G6PD deficiency variants in ClinVar"
    },
    "lifestyle_prevention": {
      "screening_advice": "Newborn heel-prick G6PD enzyme screening is standard in Taiwan and southern China; unscreened individuals can confirm status via quantitative G6PD assay.",
      "lifestyle_tips": [
        "Keep a “G6PD Deficiency Drug Red-Light Card” in your phone and health wallet, and show it to every doctor and pharmacist before receiving prescriptions",
        "Remove all naphthalene and camphor mothballs from closets and use physical dehumidifiers instead",
        "Seek emergency care immediately if pallor, lethargy, jaundice, or dark tea-colored urine develops after food or drug exposure!"
      ]
    },
    "doctor_checklist": {
      "specialty": "Pediatrics / Hematology / Clinical Pharmacy",
      "questions": [
        "Doctor, I (or my child) have confirmed G6PD deficiency (Favism). Do any of today’s prescribed medications contain ingredients that could trigger hemolysis?",
        "When my child has a fever, is standard weight-based acetaminophen or ibuprofen safe to use?",
        "As a female heterozygous G6PD carrier, should I follow the same fava bean and medication restrictions during pregnancy and breastfeeding?"
      ]
    },
    "myth_buster": {
      "myth": "“Do people outgrow Favism (G6PD deficiency) once they become strong adults and can eat fava beans freely?”",
      "truth": "Never! G6PD deficiency is lifelong. Eating fresh fava beans or taking contraindicated drugs like sulfonamides or primaquine in adulthood can still trigger life-threatening acute hemolysis and acute kidney failure."
    }
  },
  "MTHFR": {
    "gene": {
      "chinese_name": "Methylenetetrahydrofolate Reductase (Folate Gene)",
      "chromosome": "1p36.22 (Chromosome 1)",
      "metaphor": {
        "title": "🌿 The Body’s 【Folate Conversion Machine】",
        "story": "Folic acid from food or supplements is a “raw material” processed by the MTHFR machine into active folate (5-MTHF), which clears vascular homocysteine (Hcy) and supports fetal neural development. Carrying MTHFR C677T (rs1801133) slows this machine to 30%–65% efficiency, causing Hcy buildup and elevating H-type hypertension and stroke risk!"
      },
      "plain_summary": "MTHFR governs folate metabolism and blood homocysteine (Hcy). The C677T (rs1801133) variant is common: women planning pregnancy can supplement with active folate (5-MTHF), and older adults should monitor blood Hcy and supplement folate + B vitamins to prevent stroke.",
      "academic_summary": "MTHFR catalyzes reduction of 5,10-methylenetetrahydrofolate to 5-MTHF for remethylating homocysteine to methionine. C677T (rs1801133) reduces TT homozygote activity by ~65%–70%, causing hyperhomocysteinemia, elevating neural tube defect and stroke risk, and increasing methotrexate toxicity."
    },
    "disease": {
      "chinese_name": "Impaired Folate Metabolism & Hyperhomocysteinemia (H-Type Hypertension)",
      "categories": [
        "Pharmacogenomics (PGx)",
        "Perinatal Nutrition",
        "Cardiovascular Trait"
      ],
      "inheritance_mode": "Autosomal Recessive / Codominant Dosage Effect",
      "severity_badge": "🟡 Actionable Nutrition & Stroke Prevention Target (5-MTHF)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0002160",
        "name": "Hyperhomocystinemia",
        "chinese_name": "Hyperhomocystinemia (Hcy ≥ 10 μmol/L)"
      },
      {
        "hpo_id": "HP:0000822",
        "name": "Hypertension",
        "chinese_name": "H-type hypertension"
      },
      {
        "hpo_id": "HP:0002140",
        "name": "Ischemic stroke",
        "chinese_name": "Ischemic stroke susceptibility"
      },
      {
        "hpo_id": "HP:0002412",
        "name": "Neural tube defect",
        "chinese_name": "Fetal neural tube defect risk"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Levomefolate calcium (5-MTHF)",
        "chinese_name": "Levomefolate Calcium (5-MTHF)",
        "mechanism": "Bypasses MTHFR bottleneck to supply active methyl donors and lower Hcy",
        "approval_status": "Perinatal & Nutrition Guideline"
      },
      {
        "drug_name": "Enalapril / Folic acid",
        "chinese_name": "Enalapril + Folic Acid",
        "mechanism": "ACEI + folate lowers Hcy and reduces first stroke risk by 21% (CSPPT)",
        "approval_status": "TFDA / NMPA Approved"
      }
    ],
    "pharmacogenomics": {
      "key_variant": "MTHFR C677T (rs1801133, c.665C>T, p.Ala222Val) & A1298C (rs1801131)",
      "population_frequency": "20%–35% C677T TT homozygote frequency in East Asians",
      "traffic_light_summary": "🟡 Precision Guidance: ① TT genotype women planning pregnancy can supplement with active folate (5-MTHF); ② Hypertensive adults with elevated Hcy should combine BP control + folate; ③ Monitor closely if treated with Methotrexate.",
      "drugs_guide": [
        {
          "drug_name": "Folic Acid vs. 5-Methyltetrahydrofolate (5-MTHF)",
          "chinese_name": "Synthetic Folic Acid vs. Active Folate (5-MTHF)",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "MTHFR 677TT homozygotes convert synthetic folic acid at ~30% efficiency; prioritize direct 5-MTHF supplementation or individualized dosing (0.8 mg/d).",
          "cpic_level": "Perinatal Folate Consensus"
        },
        {
          "drug_name": "Methotrexate (MTX)",
          "chinese_name": "Methotrexate (Oncology / Rheumatology)",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "MTHFR 677TT patients receiving methotrexate have elevated risk of hepatotoxicity, mucositis, and leukopenia; monitor CBC, liver function, and leucovorin rescue.",
          "cpic_level": "PharmGKB Level 2A"
        }
      ],
      "dietary_contraindications": [
        "Avoid diets of only refined grains without dark leafy greens (natural folate and vitamins B6/B12 are essential Hcy cofactors)",
        "Limit high-sodium cured foods and smoking (synergize with elevated Hcy to accelerate vascular damage)"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Definitive Stroke Prevention (CSPPT) & Perinatal Consensus",
      "clinvar_summary_chinese": "C677T (rs1801133) is the most extensively validated folate & PGx polymorphism"
    },
    "lifestyle_prevention": {
      "screening_advice": "Couples planning pregnancy should check RBC folate 3 months prior; adults aged 40+ (especially with hypertension) should check plasma homocysteine (Hcy, target < 10 μmol/L) annually.",
      "lifestyle_tips": [
        "[Preconception] Women with MTHFR 677TT can choose prenatal vitamins containing 5-MTHF (active folate) under OB/GYN guidance",
        "[Older Adults] If hypertensive with blood Hcy ≥ 10 μmol/L (“H-type hypertension”), combining antihypertensives with folate + vitamins B6/B12 reduces stroke risk",
        "Eat plenty of spinach, broccoli, asparagus, and avocados rich in natural folate"
      ]
    },
    "doctor_checklist": {
      "specialty": "Obstetrics & Gynecology / Genetics / Cardiology / Neurology",
      "questions": [
        "Doctor, my test shows MTHFR C677T TT homozygosity. During preconception and pregnancy, should I switch to 5-MTHF (active folate) or adjust my dose?",
        "My parents have hypertension—if their blood Hcy is ≥ 10 μmol/L, should they take combined folate therapy to prevent stroke?",
        "Along with folate, should I also test my serum vitamin B12 and ferritin levels?"
      ]
    },
    "myth_buster": {
      "myth": "“Is folic acid only for pregnant young women, and completely useless for middle-aged or older men?”",
      "truth": "Completely wrong! About 75% of hypertensive patients in Chinese populations have elevated homocysteine (“H-type hypertension”), a major driver of stroke. The CSPPT trial proved that folate supplementation in H-type hypertension reduces first stroke risk by 21%!"
    }
  },
  "CYP2C19": {
    "gene": {
      "chinese_name": "Cytochrome P450 2C19 (Clopidogrel Bioactivation Gene)",
      "chromosome": "10q23.33 (Chromosome 10)",
      "metaphor": {
        "title": "🔑 The Liver's 【Anti-Clot Prodrug Keymaker】",
        "story": "The antiplatelet medication Clopidogrel (Plavix) is an inactive 'locked prodrug' when swallowed. It relies on the liver's CYP2C19 keymaker enzyme to unlock and convert it into its active form that prevents blood clots. If you carry loss-of-function alleles (*2 or *3), the keymaker is off duty—leaving the drug inactive and raising the risk of stent thrombosis or recurrent stroke."
      },
      "plain_summary": "CYP2C19 converts the prodrug Clopidogrel (Plavix) into its active antiplatelet metabolite. Intermediate or poor metabolizers carrying *2 or *3 alleles have reduced drug activation; your doctor may choose an alternative antiplatelet drug (such as prasugrel or ticagrelor) that does not depend on CYP2C19.",
      "academic_summary": "CYP2C19 encodes a hepatic monooxygenase catalyzing two-step bioactivation of clopidogrel into its active thiol metabolite to irreversibly inhibit platelet P2Y12 receptors. Loss-of-function alleles CYP2C19*2 (rs4244285, c.681G>A) and CYP2C19*3 (rs4986893, c.636G>A) impair enzymatic activity, reducing platelet inhibition and increasing cardiovascular and cerebrovascular risk."
    },
    "disease": {
      "chinese_name": "Clopidogrel Poor Metabolism & Thrombotic Risk (CYP2C19 PGx)",
      "categories": [
        "Pharmacogenomics (PGx)",
        "Cardiovascular & Neurovascular Safety"
      ],
      "inheritance_mode": "Autosomal Codominant Metabolic Phenotype",
      "severity_badge": "🔴 Critical Stent & Stroke PGx Red Light (Alternative Drug for PMs)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001658",
        "name": "Myocardial infarction",
        "chinese_name": "Myocardial infarction / stent thrombosis risk"
      },
      {
        "hpo_id": "HP:0002140",
        "name": "Ischemic stroke",
        "chinese_name": "Recurrent ischemic stroke risk"
      },
      {
        "hpo_id": "HP:0033678",
        "name": "Acute coronary syndrome",
        "chinese_name": "Suboptimal antiplatelet response in ACS"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Prasugrel / Ticagrelor",
        "chinese_name": "Prasugrel / Ticagrelor (Alternative P2Y12 Inhibitors)",
        "mechanism": "P2Y12 receptor inhibitors that do not rely on CYP2C19 bioactivation",
        "approval_status": "CPIC Level A / FDA Label Alternative"
      },
      {
        "drug_name": "Clopidogrel",
        "chinese_name": "Clopidogrel (Plavix)",
        "mechanism": "Thienopyridine prodrug requiring two-step CYP2C19 hepatic bioactivation",
        "approval_status": "FDA Boxed Warning / CPIC Level A"
      }
    ],
    "pharmacogenomics": {
      "key_variant": "CYP2C19*2 (rs4244285, c.681G>A), CYP2C19*3 (rs4986893, c.636G>A), CYP2C19 *2/*2, CYP2C19 *2/*3, *1/*17 (rs12248560)",
      "population_frequency": "In East Asians, *2 allele frequency is ~29% and *3 is ~4%–9%; ~13%–15% are Poor Metabolizers (*2/*2, *2/*3, *3/*3) (PMID:35034351)",
      "traffic_light_summary": "🔴 Poor Metabolizers (*2/*2, *2/*3, *3/*3): Avoid Clopidogrel (Plavix); your doctor may choose Prasugrel or Ticagrelor. 🟡 Intermediate Metabolizers (*1/*2, *1/*3, *2/*17): Reduced activation; discuss alternative antiplatelet therapy with your doctor.",
      "drugs_guide": [
        {
          "drug_name": "Clopidogrel (Plavix) — Poor Metabolizer (*2/*2, *2/*3, *3/*3)",
          "chinese_name": "Clopidogrel (Plavix) — Poor Metabolizer",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "CYP2C19 poor metabolizers have markedly diminished active clopidogrel metabolite formation. Avoid standard clopidogrel; your doctor may choose prasugrel or ticagrelor if no contraindication exists.",
          "cpic_level": "CPIC Guideline for CYP2C19 and Clopidogrel Level A / FDA Boxed Warning"
        },
        {
          "drug_name": "Clopidogrel (Plavix) — Intermediate Metabolizer (*1/*2, *1/*3, *2/*17)",
          "chinese_name": "Clopidogrel (Plavix) — Intermediate Metabolizer",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "Intermediate metabolizers have reduced active metabolite formation and increased risk of cardiovascular or cerebrovascular events; your doctor may choose an alternative antiplatelet drug.",
          "cpic_level": "CPIC Guideline for CYP2C19 and Clopidogrel Level A / PharmGKB Level 1A"
        },
        {
          "drug_name": "Voriconazole / Proton Pump Inhibitors / SSRIs",
          "chinese_name": "Voriconazole / Proton Pump Inhibitors (Omeprazole) / Certain SSRIs",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "CYP2C19 also metabolizes voriconazole, proton pump inhibitors, and certain antidepressants; your doctor may adjust therapy or choose another drug based on metabolizer status.",
          "cpic_level": "CPIC Guideline Level A (Voriconazole / PPIs / SSRIs)"
        }
      ],
      "dietary_contraindications": [
        "Avoid combining clopidogrel with over-the-counter omeprazole or esomeprazole without medical advice, as they inhibit CYP2C19",
        "Avoid smoking and excessive alcohol intake to protect blood vessels and lower bleeding risk"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A & FDA Boxed Warning Consensus",
      "clinvar_summary_chinese": "600+ curated pharmacogenetic and clinical entries in ClinVar & PharmGKB (*2 rs4244285, *3 rs4986893, *17 rs12248560)",
      "guideline_ids": [
        "PHARMGKB:PA166251443"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "Consider CYP2C19 genotyping before initiating clopidogrel for coronary stenting (PCI), acute coronary syndrome, or secondary stroke prevention.",
      "lifestyle_tips": [
        "Share your CYP2C19 genotype card with your cardiologist or neurologist before starting antiplatelet therapy—never stop medication on your own",
        "Consult your pharmacist before taking stomach acid reducers to avoid CYP2C19 drug interactions",
        "Maintain strict blood pressure, blood glucose, and LDL cholesterol control"
      ]
    },
    "doctor_checklist": {
      "specialty": "Cardiology / Neurology / Clinical Pharmacy",
      "questions": [
        "Doctor, my genetic report shows I am a CYP2C19 intermediate or poor metabolizer. Should we switch from Clopidogrel (Plavix) to Ticagrelor or Prasugrel?",
        "If I need a stomach-protecting medication alongside my antiplatelet therapy, which option will not interfere with CYP2C19?",
        "Should I also share my CYP2C19 status if I am prescribed antifungal drugs, PPIs, or antidepressants in the future?"
      ]
    },
    "myth_buster": {
      "myth": "“As long as I take Clopidogrel (Plavix) on time every day after getting a heart stent, am I guaranteed full protection against blood clots?”",
      "truth": "Not necessarily! About 13%–15% of East Asians are CYP2C19 poor metabolizers whose livers cannot convert clopidogrel into its active form. Even when taken daily, it may offer little protection—making a physician-guided switch to an alternative drug essential."
    }
  },
  "CYP2C9": {
    "gene": {
      "chinese_name": "Cytochrome P450 2C9 (Warfarin, Phenytoin & NSAID Metabolism Gene)",
      "chromosome": "10q23.33 (Chromosome 10)",
      "metaphor": {
        "title": "⏳ The Liver's 【Medication Clearance Hourglass】",
        "story": "Medications such as the anticoagulant Warfarin, the antiseizure drug Phenytoin, and common NSAID pain relievers are cleared from the bloodstream at a steady pace through the liver's CYP2C9 hourglass. If you carry decreased-function alleles (*2 or *3), the neck of the hourglass narrows: drugs drain out much more slowly and accumulate in the body, raising the risk of bleeding or drug toxicity."
      },
      "plain_summary": "CYP2C9 clears narrow-therapeutic-index drugs including Warfarin, Phenytoin, and several NSAIDs (celecoxib, flurbiprofen, meloxicam, piroxicam, ibuprofen). Carriers of *2 or *3 alleles metabolize these drugs more slowly; your doctor may adjust the dose, intensify INR/therapeutic monitoring, or choose another drug.",
      "academic_summary": "CYP2C9 encodes hepatic cytochrome P450 2C9, the primary enzyme clearing S-warfarin, phenytoin, and multiple oxicam/coxib NSAIDs. Decreased-function alleles CYP2C9*2 (rs1799853, c.430C>T, p.Arg144Cys) and CYP2C9*3 (rs1057910, c.1075A>C, p.Ile359Leu) reduce intrinsic clearance, elevating systemic exposure and risks of hemorrhage, neurotoxicity, or GI bleeding."
    },
    "disease": {
      "chinese_name": "Warfarin / Phenytoin / NSAID Clearance Sensitivity (CYP2C9 PGx)",
      "categories": [
        "Pharmacogenomics (PGx)",
        "Anticoagulation & Analgesic Safety"
      ],
      "inheritance_mode": "Autosomal Codominant Metabolic Phenotype",
      "severity_badge": "🟡 High-Alert Dose Sensitivity (Physician Dose Adjustment & Monitoring)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001892",
        "name": "Abnormal bleeding",
        "chinese_name": "Abnormal bleeding (anticoagulant over-exposure)"
      },
      {
        "hpo_id": "HP:0002239",
        "name": "Gastrointestinal hemorrhage",
        "chinese_name": "Gastrointestinal hemorrhage risk"
      },
      {
        "hpo_id": "HP:0001251",
        "name": "Ataxia",
        "chinese_name": "Phenytoin-related ataxia / neurotoxicity"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Warfarin",
        "chinese_name": "Warfarin (Coumadin)",
        "mechanism": "Vitamin K epoxide reductase inhibitor whose potent S-enantiomer is cleared by CYP2C9",
        "approval_status": "CPIC Level A / FDA Label Actionable PGx"
      },
      {
        "drug_name": "Phenytoin / NSAIDs",
        "chinese_name": "Phenytoin / NSAIDs (Celecoxib, Meloxicam, Piroxicam, Ibuprofen)",
        "mechanism": "Anticonvulsant and anti-inflammatory drugs cleared via CYP2C9",
        "approval_status": "CPIC Level A / PharmGKB Level 1A"
      }
    ],
    "pharmacogenomics": {
      "key_variant": "CYP2C9*2 (rs1799853, c.430C>T, p.Arg144Cys), CYP2C9*3 (rs1057910, c.1075A>C, p.Ile359Leu)",
      "population_frequency": "CYP2C9*3 allele frequency is ~3%–4% in East Asians; in Europeans, *2 is ~12% and *3 is ~7%–8% (PMID:28198005)",
      "traffic_light_summary": "🟡 Caution / Dose Adjustment: CYP2C9 *2 or *3 carriers clear Warfarin, Phenytoin, and NSAIDs more slowly; your doctor may adjust the dose or select an alternative medication with close monitoring.",
      "drugs_guide": [
        {
          "drug_name": "Warfarin",
          "chinese_name": "Warfarin (Oral Anticoagulant)",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "CYP2C9 *2 and *3 variants impair S-warfarin clearance and increase bleeding risk. Your doctor may adjust the dose alongside VKORC1 genotype or consider an alternative anticoagulant.",
          "cpic_level": "CPIC Guideline for CYP2C9, VKORC1, CYP4F2 and Warfarin Level A"
        },
        {
          "drug_name": "Phenytoin / Fosphenytoin",
          "chinese_name": "Phenytoin / Fosphenytoin (Antiseizure Medication)",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "CYP2C9 intermediate and poor metabolizers have reduced phenytoin clearance and higher risk of neurotoxicity (ataxia, nystagmus); your doctor may adjust therapy or choose another drug (after checking HLA-B*15:02).",
          "cpic_level": "CPIC Guideline for CYP2C9, HLA-B and Phenytoin Level A"
        },
        {
          "drug_name": "NSAIDs (Celecoxib, Flurbiprofen, Meloxicam, Piroxicam, Ibuprofen)",
          "chinese_name": "NSAID Pain Relievers (Celecoxib, Meloxicam, Piroxicam, Ibuprofen)",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "CYP2C9 poor and intermediate metabolizers experience elevated plasma NSAID exposure and increased GI and renal risks; your doctor may adjust the dose or choose an alternative analgesic.",
          "cpic_level": "CPIC Guideline for CYP2C9 and NSAIDs Level A"
        }
      ],
      "dietary_contraindications": [
        "When taking Warfarin, keep daily dietary vitamin K intake (dark leafy greens, natto) consistent",
        "Avoid binge alcohol use and unauthorized herbal supplements (Danshen, Ginkgo, St. John's Wort) that alter CYP2C9 clearance"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A & FDA Label Pharmacogenetic Consensus",
      "clinvar_summary_chinese": "Validated CPIC Level A guidelines for Warfarin, Phenytoin, and NSAIDs (*2 rs1799853, *3 rs1057910)"
    },
    "lifestyle_prevention": {
      "screening_advice": "Before starting Warfarin, Phenytoin, or chronic NSAID regimens, consider CYP2C9 (and VKORC1 / HLA-B) pharmacogenetic testing.",
      "lifestyle_tips": [
        "Inform every prescribing physician and dentist of your CYP2C9 status before starting anticoagulants or pain relievers",
        "Watch for early signs of bleeding or GI irritation (gum bleeding, nosebleeds, dark tarry stools, or bruising) and seek medical evaluation",
        "Avoid purchasing over-the-counter NSAID painkillers for long-term use without consulting your doctor"
      ]
    },
    "doctor_checklist": {
      "specialty": "Cardiology / Neurology / Rheumatology / Anticoagulation Clinic",
      "questions": [
        "Doctor, I carry a CYP2C9 decreased-function variant (*2 or *3). Should my Warfarin regimen be adjusted using my CYP2C9 and VKORC1 genotypes, or is another anticoagulant suitable?",
        "For joint or muscle pain, which analgesic options do not rely on CYP2C9 metabolism?",
        "How frequently should I check my INR or therapeutic drug levels when starting or changing medications?"
      ]
    },
    "myth_buster": {
      "myth": "“Are common anti-inflammatory painkillers (NSAIDs) metabolized at the same speed by everyone?”",
      "truth": "No! Many widely used NSAIDs (celecoxib, meloxicam, piroxicam, ibuprofen) rely on CYP2C9 for clearance. In CYP2C9 poor metabolizers, clearance slows markedly—causing drug buildup and higher risks of stomach ulcers or bleeding unless guided by a physician."
    }
  },
  "VKORC1": {
    "gene": {
      "chinese_name": "Vitamin K Epoxide Reductase Complex Subunit 1 (Warfarin Target Gene)",
      "chromosome": "16p11.2 (Chromosome 16)",
      "metaphor": {
        "title": "🎛️ The Coagulation Factory's 【Vitamin K Recycling Tuning Dial】",
        "story": "The liver constantly recycles vitamin K to produce blood clotting factors. VKORC1 is the recycling machine that recharges used vitamin K, and it is also the exact brake pedal pressed by the anticoagulant Warfarin. Over 80% of East Asians carry a VKORC1 promoter variant (rs9923231) that naturally produces fewer VKORC1 machines (high sensitivity), meaning much less Warfarin is needed to press the brake; standard Western regimens can easily cause over-anticoagulation and bleeding."
      },
      "plain_summary": "VKORC1 encodes the direct molecular target of Warfarin. The common promoter variant -1639G>A (rs9923231) reduces hepatic VKORC1 expression and increases sensitivity to Warfarin; your doctor may adjust the dose alongside CYP2C9 genotype or choose an alternative anticoagulant.",
      "academic_summary": "VKORC1 encodes vitamin K epoxide reductase complex subunit 1, which reduces vitamin K 2,3-epoxide to vitamin K hydroquinone—the rate-limiting step for gamma-carboxylation of clotting factors II, VII, IX, and X. Promoter polymorphism c.-1639G>A (rs9923231) decreases VKORC1 transcription, conferring heightened sensitivity to warfarin."
    },
    "disease": {
      "chinese_name": "Warfarin Pharmacogenetic Dose Sensitivity (VKORC1 PGx)",
      "categories": [
        "Pharmacogenomics (PGx)",
        "Cardiovascular Anticoagulation Safety"
      ],
      "inheritance_mode": "Autosomal Codominant Pharmacodynamic Trait",
      "severity_badge": "🟡 Primary Warfarin Sensitivity Determinant (High Frequency in East Asians)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001892",
        "name": "Abnormal bleeding",
        "chinese_name": "Warfarin-sensitivity abnormal bleeding risk"
      },
      {
        "hpo_id": "HP:0000978",
        "name": "Bruising susceptibility",
        "chinese_name": "Easy subcutaneous bruising"
      },
      {
        "hpo_id": "HP:0000421",
        "name": "Epistaxis",
        "chinese_name": "Recurrent epistaxis / gingival bleeding"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Warfarin",
        "chinese_name": "Warfarin (Coumadin)",
        "mechanism": "Directly inhibits VKORC1 to block activation of vitamin K-dependent clotting factors",
        "approval_status": "CPIC Level A / FDA Label Actionable PGx"
      },
      {
        "drug_name": "Direct Oral Anticoagulants (DOACs)",
        "chinese_name": "Direct Oral Anticoagulants (Apixaban / Rivaroxaban / Dabigatran / Edoxaban)",
        "mechanism": "Directly inhibit factor Xa or IIa independent of VKORC1",
        "approval_status": "FDA / TFDA Approved Alternative"
      }
    ],
    "pharmacogenomics": {
      "key_variant": "VKORC1 c.-1639G>A (rs9923231) and c.1173C>T (rs9934438)",
      "population_frequency": "In East Asians, the -1639A (rs9923231) allele frequency is ~85%–90% (~75%–80% AA homozygotes), explaining why East Asians generally require lower Warfarin doses than Europeans (PMID:28198005)",
      "traffic_light_summary": "🟡 Caution / Dose Adjustment: Carriers of VKORC1 -1639G>A (rs9923231) AA or GA genotypes have increased sensitivity to Warfarin; your doctor may adjust the dose alongside CYP2C9 genotype and monitor INR closely, or consider an alternative anticoagulant.",
      "drugs_guide": [
        {
          "drug_name": "Warfarin",
          "chinese_name": "Warfarin (Oral Anticoagulant)",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "Carriers of the VKORC1 -1639G>A (rs9923231) A allele express lower hepatic VKORC1 enzyme levels and are sensitive to Warfarin; your doctor may adjust the dose using CPIC pharmacogenetic algorithms and monitor INR closely.",
          "cpic_level": "CPIC Guideline for CYP2C9, VKORC1, CYP4F2 and Warfarin Level A / PharmGKB Level 1A"
        }
      ],
      "dietary_contraindications": [
        "While taking Warfarin, keep daily vitamin K intake (spinach, kale, broccoli, green tea) consistent rather than binging or completely avoiding greens",
        "Avoid natto (fermented soybeans rich in vitamin K2 and nattokinase, which strongly antagonize Warfarin) and excessive cranberry juice"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A & FDA Label Core Anticoagulation Biomarker",
      "clinvar_summary_chinese": "rs9923231 (-1639G>A) is the most extensively validated genetic determinant of Warfarin sensitivity",
      "guideline_ids": [
        "PHARMGKB:PA166251465"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "Before starting Warfarin for atrial fibrillation, mechanical heart valves, or deep vein thrombosis, consider combined VKORC1 and CYP2C9 genotyping.",
      "lifestyle_tips": [
        "Carry an anticoagulation alert card and inform dentists, endoscopists, and surgeons before any procedure",
        "Keep weekly leafy green vegetable intake steady rather than eliminating vegetables completely",
        "Check your International Normalized Ratio (INR) on schedule and never change your dose without medical guidance"
      ]
    },
    "doctor_checklist": {
      "specialty": "Cardiology / Cardiovascular Surgery / Anticoagulation Clinic",
      "questions": [
        "Doctor, my report shows a high-sensitivity VKORC1 rs9923231 genotype. Should my Warfarin regimen be adjusted based on my VKORC1 and CYP2C9 results?",
        "What is my target INR range, and how often should I return for blood tests during initiation?",
        "Given my clinical condition, should I use genotype-guided Warfarin or consider a direct oral anticoagulant (DOAC)?"
      ]
    },
    "myth_buster": {
      "myth": "“If I take Warfarin, am I forbidden from ever eating a single bite of spinach or green vegetables?”",
      "truth": "No! What destabilizes Warfarin is sudden, drastic swings in vitamin K intake (such as eating none for weeks and suddenly eating a huge plate of spinach or natto). As long as your daily vegetable intake stays consistent, your physician can calibrate your regimen safely."
    }
  },
  "SLCO1B1": {
    "gene": {
      "chinese_name": "Solute Carrier Organic Anion Transporter 1B1 (Statin Muscle Safety Gene)",
      "chromosome": "12p12.1 (Chromosome 12)",
      "metaphor": {
        "title": "🚪 The Liver's 【Cholesterol Drug Revolving Entry Door】",
        "story": "Statin cholesterol-lowering drugs (such as Simvastatin) travel through the bloodstream to enter the liver and reduce cholesterol synthesis. SLCO1B1 acts as the liver's dedicated revolving entry door for statins. If you carry the rs4149056 (*5 / *15) variant, this revolving door jams: statins cannot enter the liver efficiently, accumulate in the bloodstream, and seep into skeletal muscle—causing muscle aches, myopathy, or rhabdomyolysis."
      },
      "plain_summary": "SLCO1B1 transports statin lipid-lowering medications into liver cells. Carriers of the decreased-function variant c.521T>C (rs4149056, *5 / *15) experience higher blood statin levels and increased risk of statin-associated musculoskeletal symptoms (SAMS), especially with Simvastatin; your doctor may adjust the dose or choose another lipid-lowering medication.",
      "academic_summary": "SLCO1B1 encodes the hepatocyte basolateral uptake transporter OATP1B1, mediating hepatic clearance of HMG-CoA reductase inhibitors. Missense variant c.521T>C (rs4149056, p.Val174Ala, *5/*15) impairs transport activity, markedly increasing systemic exposure (AUC) of simvastatin acid and other statins and predisposing patients to skeletal myotoxicity."
    },
    "disease": {
      "chinese_name": "Statin-Associated Myopathy & Rhabdomyolysis Risk (SLCO1B1 PGx)",
      "categories": [
        "Pharmacogenomics (PGx)",
        "Cardiovascular & Lipid-Lowering Safety"
      ],
      "inheritance_mode": "Autosomal Codominant Transporter Phenotype",
      "severity_badge": "🔴 High Simvastatin Myopathy Alert (Adjust Therapy or Switch Statin)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0003326",
        "name": "Myalgia",
        "chinese_name": "Symmetric proximal muscle aches (myalgia)"
      },
      {
        "hpo_id": "HP:0003198",
        "name": "Myopathy",
        "chinese_name": "Drug-induced skeletal myopathy"
      },
      {
        "hpo_id": "HP:0003201",
        "name": "Rhabdomyolysis",
        "chinese_name": "Rhabdomyolysis"
      },
      {
        "hpo_id": "HP:0003236",
        "name": "Elevated circulating creatine kinase activity",
        "chinese_name": "Elevated serum creatine kinase (CK) activity"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Simvastatin",
        "chinese_name": "Simvastatin (Zocor)",
        "mechanism": "HMG-CoA reductase inhibitor whose active acid metabolite strongly depends on OATP1B1 hepatic uptake",
        "approval_status": "CPIC Level A / FDA Label PGx"
      },
      {
        "drug_name": "Atorvastatin / Rosuvastatin / Pravastatin",
        "chinese_name": "Atorvastatin / Rosuvastatin / Pravastatin",
        "mechanism": "Alternative HMG-CoA reductase inhibitors guided by SLCO1B1 phenotype",
        "approval_status": "CPIC Level A Guideline"
      }
    ],
    "pharmacogenomics": {
      "key_variant": "SLCO1B1 c.521T>C (rs4149056, p.Val174Ala, SLCO1B1*5 / *15)",
      "population_frequency": "In East Asians, the c.521T>C (rs4149056) allele frequency is ~10%–16% (~20%–28% carrier frequency) (PMID:35152405)",
      "traffic_light_summary": "🔴 Decreased/Poor Function (rs4149056 C allele carriers): Avoid high-exposure Simvastatin regimens; your doctor may choose an alternative statin or adjust therapy. 🟡 For Atorvastatin, Rosuvastatin, or Pitavastatin, your doctor may adjust the dose based on SLCO1B1 phenotype and monitor for muscle symptoms.",
      "drugs_guide": [
        {
          "drug_name": "Simvastatin",
          "chinese_name": "Simvastatin (Zocor)",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "Carriers of SLCO1B1 decreased-function alleles (rs4149056 C allele, *5 / *15) experience markedly elevated simvastatin acid blood levels and high risk of myopathy or rhabdomyolysis; your doctor may choose an alternative statin or adjust the dose.",
          "cpic_level": "CPIC Guideline for SLCO1B1, ABCG2, CYP2C9, and Statins Level A"
        },
        {
          "drug_name": "Atorvastatin / Rosuvastatin / Pitavastatin",
          "chinese_name": "Atorvastatin (Lipitor) / Rosuvastatin (Crestor) / Pitavastatin",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "Decreased SLCO1B1 function also increases systemic exposure to other statins; your doctor may adjust starting and maximum doses per CPIC guidelines or select an alternative lipid-lowering strategy while monitoring creatine kinase (CK).",
          "cpic_level": "CPIC Guideline for SLCO1B1, ABCG2, CYP2C9, and Statins Level A"
        }
      ],
      "dietary_contraindications": [
        "Strictly avoid grapefruit and grapefruit juice while taking simvastatin or atorvastatin (inhibits intestinal CYP3A4 and compounds SLCO1B1 statin accumulation)",
        "Do not take over-the-counter red yeast rice supplements alongside prescription statins (red yeast rice contains monacolin K / lovastatin, causing duplicate toxicity)"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A & NEJM SEARCH Trial Consensus",
      "clinvar_summary_chinese": "rs4149056 (c.521T>C) is the premier validated pharmacogenetic marker for statin-induced myopathy"
    },
    "lifestyle_prevention": {
      "screening_advice": "Consider SLCO1B1 rs4149056 testing before initiating statin therapy or in patients with a history of statin-associated muscle aches.",
      "lifestyle_tips": [
        "If you develop unexplained symmetric aching, weakness, or cramping in your thighs, calves, or shoulders—or dark tea/cola-colored urine—seek medical care immediately to check serum creatine kinase (CK)",
        "Reduce dietary saturated and trans fats, and increase soluble fiber, oats, and omega-3-rich fish",
        "Never combine red yeast rice supplements with prescription cholesterol medications"
      ]
    },
    "doctor_checklist": {
      "specialty": "Cardiology / Endocrinology & Metabolism / Family Medicine",
      "questions": [
        "Doctor, my report shows I carry the SLCO1B1 rs4149056 variant. Which statin or lipid-lowering medication offers the best muscle safety profile for me?",
        "If I experience thigh or calf muscle soreness during therapy, when should I return to check my serum creatine kinase (CK)?",
        "Could non-statin options such as Ezetimibe or PCSK9 inhibitors be used as an adjunct or alternative if needed?"
      ]
    },
    "myth_buster": {
      "myth": "“If prescription cholesterol pills make my legs ache, is switching to 'natural red yeast rice' supplements completely safe for my muscles?”",
      "truth": "Dangerous myth! The active compound in red yeast rice (Monacolin K) is chemically identical to the statin drug lovastatin. For SLCO1B1 variant carriers, taking unstandardized red yeast rice—or combining it with prescription statins—can trigger severe myopathy or rhabdomyolysis!"
    }
  },
  "TPMT": {
    "gene": {
      "chinese_name": "Thiopurine S-Methyltransferase (Thiopurine Safety Gene)",
      "chromosome": "6p22.3 (Chromosome 6)",
      "metaphor": {
        "title": "🧯 The Bone Marrow's 【Thiopurine Safety Pressure-Relief Valve】",
        "story": "Azathioprine and Mercaptopurine are key medications for inflammatory bowel disease, autoimmune conditions, and leukemia. Inside the body, TPMT acts like a safety pressure-relief valve that methylates and inactivates most of the drug, leaving just the right amount of active drug to work safely. If you carry loss-of-function alleles (*3A or *3C), the relief valve is welded shut—shunting nearly all of the drug into toxic active metabolites that overwhelm bone marrow blood production."
      },
      "plain_summary": "TPMT inactivates thiopurine drugs (Azathioprine, Mercaptopurine, Thioguanine). Carriers of loss-of-function alleles (*2, *3A, *3B, *3C) face life-threatening bone marrow suppression (myelosuppression) on standard regimens; your doctor may adjust the dose substantially or choose a non-thiopurine medication.",
      "academic_summary": "TPMT encodes thiopurine S-methyltransferase, catalyzing S-methylation inactivation of 6-MP and 6-TG in competition with formation of cytotoxic 6-thioguanine nucleotides (6-TGN). No-function alleles TPMT*3A (rs1800460 c.460G>A + rs1142345 c.719A>G), TPMT*3C (rs1142345 c.719A>G), and TPMT*2 (rs1800462 c.238G>C) destabilize the enzyme, causing excessive 6-TGN accumulation and severe hematopoietic toxicity."
    },
    "disease": {
      "chinese_name": "Thiopurine S-Methyltransferase Deficiency & Myelosuppression Risk",
      "categories": [
        "Pharmacogenomics (PGx)",
        "Hematology-Oncology & Autoimmune Safety"
      ],
      "inheritance_mode": "Autosomal Codominant Metabolic Phenotype",
      "severity_badge": "🔴 Critical Thiopurine Red Light (Test Both TPMT & NUDT15 Before Therapy)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001882",
        "name": "Decreased total leukocyte count",
        "chinese_name": "Leukopenia"
      },
      {
        "hpo_id": "HP:0001875",
        "name": "Decreased total neutrophil count",
        "chinese_name": "Neutropenia"
      },
      {
        "hpo_id": "HP:0005528",
        "name": "Bone marrow hypocellularity",
        "chinese_name": "Severe bone marrow myelosuppression"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Azathioprine",
        "chinese_name": "Azathioprine (Imuran)",
        "mechanism": "Thiopurine immunosuppressant prodrug regulated by TPMT and NUDT15",
        "approval_status": "CPIC Level A / FDA Testing Recommended"
      },
      {
        "drug_name": "Mercaptopurine / Thioguanine",
        "chinese_name": "Mercaptopurine (6-MP) / Thioguanine (6-TG)",
        "mechanism": "Purine antimetabolite agents used in acute lymphoblastic leukemia and IBD",
        "approval_status": "CPIC Level A / FDA Testing Recommended"
      }
    ],
    "pharmacogenomics": {
      "key_variant": "TPMT*3A (rs1800460 c.460G>A + rs1142345 c.719A>G), TPMT*3C (rs1142345, c.719A>G), TPMT*2 (rs1800462, c.238G>C)",
      "population_frequency": "Carrier frequency is ~6%–10% in European and African populations (*3A most common in Europeans); in East Asians, *3C predominates with ~1%–2% allele frequency (PMID:30447069)",
      "traffic_light_summary": "🔴 Poor Metabolizers (two no-function alleles, e.g., *3A/*3A, *3C/*3C): For non-malignant conditions, avoid Azathioprine, Mercaptopurine, and Thioguanine and choose non-thiopurine therapy; for malignancy, your oncologist will drastically reduce the dose. 🟡 Intermediate Metabolizers (*1/*3A, *1/*3C): Your doctor may reduce the starting dose and monitor CBC closely.",
      "drugs_guide": [
        {
          "drug_name": "Azathioprine / Mercaptopurine / Thioguanine — Poor Metabolizer",
          "chinese_name": "Azathioprine / Mercaptopurine / Thioguanine — Poor Metabolizer",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "TPMT poor metabolizers experience life-threatening pancytopenia and myelosuppression on standard thiopurine regimens. Depending on the condition being treated, your doctor may need to greatly reduce the dose or choose another drug.",
          "cpic_level": "CPIC Guideline for TPMT, NUDT15 and Thiopurines Level A / FDA Testing Recommended"
        },
        {
          "drug_name": "Azathioprine / Mercaptopurine / Thioguanine — Intermediate Metabolizer",
          "chinese_name": "Azathioprine / Mercaptopurine / Thioguanine — Intermediate Metabolizer",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "TPMT intermediate metabolizers accumulate higher cytotoxic 6-TGN levels; your doctor may reduce the starting dose and closely monitor complete blood counts (CBC) and liver function.",
          "cpic_level": "CPIC Guideline for TPMT, NUDT15 and Thiopurines Level A / PharmGKB Level 1A"
        }
      ],
      "dietary_contraindications": [
        "Never combine thiopurines with xanthine oxidase inhibitors such as Allopurinol or Febuxostat without specialist supervision, as they block thiopurine breakdown and multiply myelotoxicity",
        "Avoid raw or unpasteurized foods to reduce infection risk during periods of low white blood cell counts"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A & Gold-Standard Clinical Pharmacogenetics Guideline",
      "clinvar_summary_chinese": "TPMT*2, *3A, *3B, and *3C are standard pre-prescription pharmacogenetic biomarkers worldwide"
    },
    "lifestyle_prevention": {
      "screening_advice": "Perform combined TPMT and NUDT15 genotyping before starting Azathioprine, Mercaptopurine, or Thioguanine for IBD, lupus, transplantation, or leukemia.",
      "lifestyle_tips": [
        "East Asian patients must test both TPMT and NUDT15 before starting thiopurines",
        "Complete scheduled CBC and liver function blood draws promptly during treatment initiation",
        "Seek urgent medical care if you develop unexplained fever, severe sore throat, oral ulcers, or abnormal bruising"
      ]
    },
    "doctor_checklist": {
      "specialty": "Gastroenterology / Rheumatology / Hematology-Oncology / Pediatrics",
      "questions": [
        "Doctor, my report shows a TPMT variant (such as TPMT*3A or *3C). Should we choose a non-thiopurine immunomodulator or adjust my thiopurine regimen?",
        "Did my genetic test also check NUDT15, which is especially common in East Asian populations?",
        "How frequently should I have complete blood count (CBC) monitoring during the first two months of therapy?"
      ]
    },
    "myth_buster": {
      "myth": "“My TPMT gene test came back normal (*1/*1)—does that guarantee I won't develop severe low white blood cells from Azathioprine?”",
      "truth": "Not in East Asian populations! While TPMT explains most thiopurine toxicity in Europeans, NUDT15 (*3) is far more common in Taiwan and East Asia (~18%–20% carriers). Both TPMT and NUDT15 must be tested together before starting thiopurines!"
    }
  },
  "NUDT15": {
    "gene": {
      "chinese_name": "Nudix Hydrolase 15 (East Asian Thiopurine Myelosuppression Core Gene)",
      "chromosome": "13q14.2 (Chromosome 13)",
      "metaphor": {
        "title": "🧹 The Cell Nucleus's 【Toxic Nucleotide Bomb Squad】",
        "story": "When Azathioprine or Mercaptopurine (6-MP) is converted into highly active 6-thioguanine triphosphate (6-TGTP) ready to be inserted into DNA, NUDT15 stands guard at the cell nucleus as the bomb squad—clipping off phosphate groups to defuse excess toxic nucleotides. In Taiwan and East Asian populations, ~1 in 5 to 6 people carry a NUDT15*3 variant that disables this bomb squad, allowing toxic nucleotides to flood hematopoietic stem cell DNA and causing severe leukopenia and early hair loss."
      },
      "plain_summary": "NUDT15 is the primary genetic determinant of thiopurine-induced severe leukopenia and alopecia in East Asian populations. In carriers of NUDT15*3 (rs116855232) or other no-function alleles taking Azathioprine, Mercaptopurine, or Thioguanine, your doctor may choose a non-thiopurine alternative or adjust the dose.",
      "academic_summary": "NUDT15 encodes nudix hydrolase 15, which dephosphorylates cytotoxic 6-thio-GTP (6-TGTP) and 6-thio-dGTP into inactive monophosphates, preventing DNA incorporation and apoptosis. The common East Asian missense variant NUDT15*3 (rs116855232, c.415C>T, p.Arg139Cys) abolishes enzymatic thermostability and catalytic activity, causing severe early myelosuppression and alopecia."
    },
    "disease": {
      "chinese_name": "Thiopurine Metabolic Disorder (East Asian NUDT15 Myelosuppression & Alopecia Risk)",
      "categories": [
        "Pharmacogenomics (PGx)",
        "East Asian Precision Medicine",
        "Hematology & Autoimmune Safety"
      ],
      "inheritance_mode": "Autosomal Codominant Metabolic Phenotype",
      "severity_badge": "🔴 Essential East Asian PGx Red Light (~18%–20% Carrier Frequency)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001882",
        "name": "Decreased total leukocyte count",
        "chinese_name": "Severe leukopenia"
      },
      {
        "hpo_id": "HP:0001875",
        "name": "Decreased total neutrophil count",
        "chinese_name": "Neutropenia with infection susceptibility"
      },
      {
        "hpo_id": "HP:0001596",
        "name": "Alopecia",
        "chinese_name": "Early drug-induced severe alopecia"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Azathioprine",
        "chinese_name": "Azathioprine (Imuran)",
        "mechanism": "Thiopurine immunosuppressant for IBD and autoimmune diseases",
        "approval_status": "CPIC Level A / FDA Testing Recommended"
      },
      {
        "drug_name": "Mercaptopurine / Thioguanine",
        "chinese_name": "Mercaptopurine (6-MP) / Thioguanine (6-TG)",
        "mechanism": "Backbone antimetabolite therapy for ALL maintenance regulated by NUDT15",
        "approval_status": "CPIC Level A / FDA Testing Recommended"
      }
    ],
    "pharmacogenomics": {
      "key_variant": "NUDT15*3 (rs116855232, c.415C>T, p.Arg139Cys), NUDT15*2, NUDT15*5, NUDT15*6",
      "population_frequency": "In East Asians (Taiwan, Japan, Korea, Chinese populations), NUDT15*3 (rs116855232) allele frequency is ~9%–11% (~18%–20% carriers; ~1% poor metabolizers), far higher than in Europeans (<1%) (PMID:25108385, PMID:30447069)",
      "traffic_light_summary": "🔴 Poor Metabolizers (e.g., NUDT15 *3/*3): Avoid Azathioprine, Mercaptopurine, and Thioguanine in non-malignant conditions and choose an alternative agent; in oncology, drastic specialist dose adjustment is required. 🟡 Intermediate Metabolizers (*1/*3): Your doctor may reduce the starting dose and closely monitor CBC.",
      "drugs_guide": [
        {
          "drug_name": "Azathioprine / Mercaptopurine / Thioguanine — Poor Metabolizer (*3/*3)",
          "chinese_name": "Azathioprine / Mercaptopurine / Thioguanine — Poor Metabolizer (*3/*3)",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "NUDT15 poor metabolizers experience rapid, severe panleukopenia and alopecia on standard thiopurine regimens. Depending on the condition being treated, your doctor may need to greatly reduce the dose or choose another drug.",
          "cpic_level": "CPIC Guideline for TPMT, NUDT15 and Thiopurines Level A / FDA Testing Recommended"
        },
        {
          "drug_name": "Azathioprine / Mercaptopurine / Thioguanine — Intermediate Metabolizer (*1/*3)",
          "chinese_name": "Azathioprine / Mercaptopurine / Thioguanine — Intermediate Metabolizer (*1/*3)",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "NUDT15 intermediate metabolizers have significantly elevated risk of thiopurine-induced leukopenia; your doctor may adjust the starting dose per CPIC guidelines and monitor blood counts closely.",
          "cpic_level": "CPIC Guideline for TPMT, NUDT15 and Thiopurines Level A / PharmGKB Level 1A"
        }
      ],
      "dietary_contraindications": [
        "Avoid combining thiopurines with xanthine oxidase inhibitors (Allopurinol, Febuxostat) without specialist guidance",
        "Practice strict food hygiene and avoid raw foods to prevent opportunistic infections if white blood cell counts drop"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A & Landmark East Asian Precision Medicine Discovery",
      "clinvar_summary_chinese": "NUDT15*3 (rs116855232) is the primary genetic determinant of thiopurine myelosuppression in East Asians"
    },
    "lifestyle_prevention": {
      "screening_advice": "Patients of East Asian ancestry should undergo NUDT15 (and TPMT) genotyping before starting Azathioprine or Mercaptopurine.",
      "lifestyle_tips": [
        "Sudden, heavy hair loss (alopecia) within the first few weeks of thiopurine therapy is a classic early warning sign of NUDT15 toxicity—contact your physician immediately for a CBC blood test",
        "Adhere strictly to scheduled white blood cell, neutrophil, and platelet count monitoring",
        "Inform your physician if any family member has experienced severe leukopenia on immunosuppressants"
      ]
    },
    "doctor_checklist": {
      "specialty": "Gastroenterology / Rheumatology / Pediatric Hematology-Oncology / Dermatology",
      "questions": [
        "Doctor, my report identified a NUDT15*3 (rs116855232) variant. Should my treatment plan switch to a non-thiopurine immunomodulator or use a genotype-adjusted regimen?",
        "If I notice unusual hair shedding, fatigue, or fever early in treatment, should I hold the medication and get an urgent CBC test?",
        "Should my siblings or children be tested for NUDT15 before ever taking thiopurine medications?"
      ]
    },
    "myth_buster": {
      "myth": "“Western guidelines focus on TPMT for thiopurine toxicity—is testing TPMT alone enough for Asian patients?”",
      "truth": "Not at all! While NUDT15 variants are rare (<1%) in Europeans, ~18%–20% of East Asians carry NUDT15 risk alleles, making NUDT15 the #1 cause of life-threatening thiopurine leukopenia in Asian populations."
    }
  },
  "HLA-B": {
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
      "categories": [
        "Pharmacogenomics (PGx)",
        "Taiwan Precision Medicine Contraindication",
        "Severe Drug Hypersensitivity"
      ],
      "inheritance_mode": "Autosomal Codominant HLA Allele Susceptibility",
      "severity_badge": "🔴 Absolute Drug Contraindication Red Light (Pre-Prescription Screening Saves Lives)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0008066",
        "name": "Abnormal blistering of the skin",
        "chinese_name": "Generalized skin blistering and epidermal detachment (SJS/TEN)"
      },
      {
        "hpo_id": "HP:0200097",
        "name": "Oral mucosal blisters",
        "chinese_name": "Oral, ocular, and genital mucosal blistering and erosion"
      },
      {
        "hpo_id": "HP:0040186",
        "name": "Maculopapular exanthema",
        "chinese_name": "Drug-induced maculopapular exanthema"
      },
      {
        "hpo_id": "HP:0001945",
        "name": "Fever",
        "chinese_name": "Acute prodromal fever and malaise after drug exposure"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Carbamazepine / Oxcarbazepine / Phenytoin (Contraindicated in HLA-B*15:02)",
        "chinese_name": "Carbamazepine (Tegretol) / Oxcarbazepine / Phenytoin",
        "mechanism": "Aromatic anticonvulsants that bind HLA-B*15:02 and trigger cytotoxic T-cell SJS/TEN",
        "approval_status": "CPIC Level A / FDA Boxed Warning / Taiwan NHI Pre-Test (PMID:21428768)"
      },
      {
        "drug_name": "Allopurinol (Contraindicated in HLA-B*58:01)",
        "chinese_name": "Allopurinol (Zyloric)",
        "mechanism": "Xanthine oxidase inhibitor urate-lowering drug that binds HLA-B*58:01 to trigger SCAR",
        "approval_status": "CPIC Level A / Taiwan National Cohort Evidence (PMID:26399967)"
      }
    ],
    "pharmacogenomics": {
      "key_variant": "HLA-B*15:02 (HLA-B*1502), HLA-B*58:01 (HLA-B*5801)",
      "population_frequency": "In Taiwan and Han Chinese populations, HLA-B*15:02 carrier frequency is ~7%–8% (15%+ in parts of Southeast Asia) (PMID:15057820, PMID:21428768); HLA-B*58:01 carrier frequency in Taiwan Han Chinese is ~15%–20% (PMID:15743917, PMID:26399967)",
      "traffic_light_summary": "🔴 Dual Absolute Contraindications: ① HLA-B*15:02 positive: Strictly avoid Carbamazepine, Oxcarbazepine, and Phenytoin/Fosphenytoin; ② HLA-B*58:01 positive: Strictly avoid Allopurinol; your doctor will select a safe alternative medication.",
      "drugs_guide": [
        {
          "drug_name": "Carbamazepine (Tegretol) / Oxcarbazepine / Phenytoin — HLA-B*15:02 Positive",
          "chinese_name": "Carbamazepine (Tegretol) / Oxcarbazepine / Phenytoin — HLA-B*15:02 Positive",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "HLA-B*15:02 carriers face an extremely high risk of life-threatening Stevens-Johnson syndrome (SJS) and toxic epidermal necrolysis (TEN) when exposed to carbamazepine, oxcarbazepine, or phenytoin/fosphenytoin. Avoid these drugs and select a non-aromatic alternative.",
          "cpic_level": "CPIC Guideline for HLA-B and Carbamazepine/Oxcarbazepine/Phenytoin Level A / FDA Boxed Warning"
        },
        {
          "drug_name": "Allopurinol (Zyloric) — HLA-B*58:01 Positive",
          "chinese_name": "Allopurinol (Zyloric) — HLA-B*58:01 Positive",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "HLA-B*58:01 carriers have a very high risk of allopurinol-induced severe cutaneous adverse reactions (SJS/TEN and DRESS). Allopurinol is contraindicated; your doctor may choose an alternative urate-lowering medication.",
          "cpic_level": "CPIC Guideline for HLA-B and Allopurinol Level A / PharmGKB Level 1A"
        }
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
  },
  "CYP2D6": {
    "gene": {
      "chinese_name": "Cytochrome P450 2D6 (Opioid & Tamoxifen Metabolism Gene)",
      "chromosome": "22q13.2 (Chromosome 22)",
      "metaphor": {
        "title": "🔑 The Liver's 【Painkiller & Hormone Drug Engineer】",
        "story": "Codeine and tramadol are not fully active painkillers until the liver's CYP2D6 engineer converts them into their active metabolites. If the engineer works too fast (ultrarapid metabolizer), the drug may produce too much active metabolite and increase respiratory depression risk; if too slow (poor metabolizer), pain relief may be inadequate. Tamoxifen also relies partly on this enzyme to form active metabolites."
      },
      "plain_summary": "CYP2D6 converts codeine and tramadol into active metabolites and contributes to tamoxifen metabolism. Ultrarapid metabolizers may have a higher risk of respiratory depression with codeine or tramadol, while poor metabolizers may get insufficient pain relief. Your doctor can choose an alternative drug or adjust therapy based on your genotype.",
      "academic_summary": "CYP2D6 encodes cytochrome P450 2D6, which catalyzes O-demethylation of the opioid prodrugs codeine and tramadol and contributes to tamoxifen activation. Common alleles include reduced-function *10 (rs1065852), no-function *4 (rs3892097) and *5 (gene deletion), and increased-function *2A and *17."
    },
    "disease": {
      "chinese_name": "Codeine Toxicity & CYP2D6 Metabolism Variation",
      "categories": [
        "Pharmacogenomics (PGx)",
        "Pain & Oncology Drug Safety"
      ],
      "inheritance_mode": "Autosomal Codominant Metabolic Phenotype",
      "severity_badge": "🔴 Codeine, Tramadol & Tamoxifen Traffic Light"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0002791",
        "name": "Hypoventilation",
        "chinese_name": "Respiratory depression / hypoventilation risk"
      },
      {
        "hpo_id": "HP:0001250",
        "name": "Seizure",
        "chinese_name": "Seizure risk"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Codeine",
        "chinese_name": "Codeine",
        "mechanism": "Opioid prodrug requiring CYP2D6 conversion to morphine",
        "approval_status": "CPIC Level A / FDA Label"
      },
      {
        "drug_name": "Tramadol",
        "chinese_name": "Tramadol",
        "mechanism": "Opioid analgesic requiring CYP2D6 activation",
        "approval_status": "CPIC Level A / FDA Label"
      },
      {
        "drug_name": "Tamoxifen",
        "chinese_name": "Tamoxifen",
        "mechanism": "Selective estrogen receptor modulator; some active metabolites depend on CYP2D6",
        "approval_status": "CPIC Level A"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "CYP2D6 *10 (rs1065852), *4 (rs3892097), *5 (gene deletion), *2A, *17; ultrarapid, intermediate and poor metabolizer phenotypes",
      "population_frequency": "In East Asians, *10 allele frequency is about 40%–50% and *4 is less common than in Europeans; ultrarapid metabolizers are less frequent (PMID:33387367)",
      "traffic_light_summary": "🔴 Ultrarapid metabolizers may rapidly produce large amounts of active metabolites from codeine or tramadol, increasing respiratory depression risk; avoid these drugs. 🟡 Poor metabolizers may have inadequate analgesia; your doctor should choose an alternative analgesic. For tamoxifen, poor metabolizers may have reduced efficacy; your doctor should consider an alternative or adjust strategy.",
      "drugs_guide": [
        {
          "drug_name": "Codeine (ultrarapid metabolizer)",
          "chinese_name": "Codeine — Ultrarapid Metabolizer",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "CYP2D6 ultrarapid metabolizers may rapidly convert codeine to morphine, causing respiratory depression or life-threatening toxicity. Avoid codeine and choose a CYP2D6-independent analgesic.",
          "cpic_level": "CPIC 2021 CYP2D6/OPRM1/COMT Opioid Guideline Level A / FDA Label"
        },
        {
          "drug_name": "Tramadol (ultrarapid metabolizer)",
          "chinese_name": "Tramadol — Ultrarapid Metabolizer",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "CYP2D6 ultrarapid metabolizers may have increased active metabolite exposure and respiratory depression risk with tramadol. Avoid tramadol and ask your doctor about alternatives.",
          "cpic_level": "CPIC 2021 CYP2D6/OPRM1/COMT Opioid Guideline Level A / FDA Label"
        },
        {
          "drug_name": "Codeine / Tramadol (poor metabolizer)",
          "chinese_name": "Codeine / Tramadol — Poor Metabolizer",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "CYP2D6 poor metabolizers may not form enough active metabolite for adequate analgesia. Your doctor should choose another analgesic.",
          "cpic_level": "CPIC 2021 CYP2D6/OPRM1/COMT Opioid Guideline Level A"
        },
        {
          "drug_name": "Tamoxifen (poor / intermediate metabolizer)",
          "chinese_name": "Tamoxifen — Poor or Intermediate Metabolizer",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "Poor or intermediate metabolizers may form less active tamoxifen metabolite. Premenopausal breast cancer patients should be evaluated by an oncologist for alternative endocrine therapy or a modified strategy.",
          "cpic_level": "CPIC 2018 CYP2D6 and Tamoxifen Guideline Level A"
        }
      ],
      "dietary_contraindications": [
        "Avoid alcohol while taking codeine or tramadol because it can worsen central nervous system and respiratory depression",
        "Do not combine tamoxifen with strong CYP2D6 inhibitors without consulting your doctor or pharmacist"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A opioid and tamoxifen guidance",
      "clinvar_summary_chinese": "ClinVar and PharmGKB contain CYP2D6 *4, *5, *10 and *17 drug-response alleles",
      "key_pmids": [
        "PMID:33387367"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "Before using codeine, tramadol or tamoxifen, discuss CYP2D6 testing with your doctor if you have had adverse reactions or poor response.",
      "lifestyle_tips": [
        "Tell your doctor and pharmacist your CYP2D6 metabolizer status and avoid self-medicating with codeine-containing products",
        "Do not stop or change tamoxifen on your own; discuss any side effects at follow-up",
        "Keep your genetic test result on your phone or in your wallet for clinic visits"
      ]
    },
    "doctor_checklist": {
      "specialty": "Clinical Pharmacy / Pain Medicine / Oncology",
      "questions": [
        "My CYP2D6 result suggests I may be an ultrarapid or poor metabolizer. Am I a candidate for codeine or tramadol?",
        "If I need pain relief, what alternatives do not depend on CYP2D6?",
        "I am taking tamoxifen. Could my CYP2D6 status affect its efficacy or my treatment plan?"
      ]
    },
    "myth_buster": {
      "myth": "“If my doctor prescribes codeine or tramadol, it must be safe for me.”",
      "truth": "Not necessarily. CYP2D6 ultrarapid metabolizers may rapidly convert codeine to morphine and face respiratory depression, while poor metabolizers may get inadequate pain relief. The right analgesic strategy depends on genotype and clinical context."
    }
  },
  "DPYD": {
    "gene": {
      "chinese_name": "Dihydropyrimidine Dehydrogenase (Fluoropyrimidine Metabolism Gene)",
      "chromosome": "1p21.3 (Chromosome 1)",
      "metaphor": {
        "title": "🛡️ The Body's 【Chemotherapy Detox Recycling Plant】",
        "story": "5-FU and capecitabine are common fluoropyrimidine chemotherapy drugs that depend on the DPYD detox plant for breakdown. If the plant runs at low capacity, the drug and its metabolites can accumulate, causing severe diarrhea, mouth ulcers, low blood counts and even life-threatening toxicity."
      },
      "plain_summary": "DPYD breaks down fluoropyrimidine chemotherapy drugs. People with loss-of-function DPYD variants may develop severe or even fatal toxicity from 5-FU or capecitabine. Before treatment, an oncology specialist should assess genotype and, if needed, avoid the drug or markedly adjust the dose.",
      "academic_summary": "DPYD encodes dihydropyrimidine dehydrogenase, the rate-limiting enzyme of pyrimidine degradation that inactivates 5-fluorouracil. DPYD *2A (rs3918290), c.2846A>T (rs67376798), *13 (rs55886062) and HapB3 (rs56038477) reduce enzyme activity and increase systemic fluoropyrimidine exposure and toxicity risk."
    },
    "disease": {
      "chinese_name": "Dihydropyrimidine Dehydrogenase Deficiency",
      "categories": [
        "Pharmacogenomics (PGx)",
        "Oncology Chemotherapy Safety"
      ],
      "inheritance_mode": "Autosomal Recessive",
      "severity_badge": "🔴 Severe Fluoropyrimidine Toxicity Red Light"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0002014",
        "name": "Diarrhea",
        "chinese_name": "Severe diarrhea"
      },
      {
        "hpo_id": "HP:0001875",
        "name": "Decreased total neutrophil count",
        "chinese_name": "Neutropenia"
      },
      {
        "hpo_id": "HP:0001903",
        "name": "Anemia",
        "chinese_name": "Anemia"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Fluorouracil (5-FU)",
        "chinese_name": "Fluorouracil (5-FU)",
        "mechanism": "Pyrimidine analog chemotherapy detoxified by DPYD",
        "approval_status": "CPIC Level A / FDA Label"
      },
      {
        "drug_name": "Capecitabine",
        "chinese_name": "Capecitabine",
        "mechanism": "Oral fluoropyrimidine prodrug ultimately detoxified by DPYD",
        "approval_status": "CPIC Level A / FDA Label"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "DPYD *2A (rs3918290), c.2846A>T (rs67376798), *13 (rs55886062), HapB3 (rs56038477)",
      "population_frequency": "Loss-of-function DPYD alleles are uncommon in East Asians (generally below 1%), but severe fluoropyrimidine toxicity can still occur (PMID:29152729)",
      "traffic_light_summary": "🔴 Partial or complete DPD deficiency may cause severe or fatal toxicity with 5-FU or capecitabine; avoid systemic fluoropyrimidines or have an oncology specialist markedly reduce the dose. 🟡 Intermediate metabolizers need a reduced starting dose and close monitoring.",
      "drugs_guide": [
        {
          "drug_name": "Fluorouracil (5-FU) — DPD deficient",
          "chinese_name": "Fluorouracil (5-FU) — DPD Deficient",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "DPD deficiency can cause severe myelosuppression, mucositis and diarrhea, and may be fatal with systemic 5-FU. Avoid use; if unavoidable, an oncology specialist must markedly reduce the dose and monitor closely.",
          "cpic_level": "CPIC 2017 DPYD and Fluoropyrimidine Dosing Guideline Level A / FDA Label"
        },
        {
          "drug_name": "Capecitabine — DPD deficient",
          "chinese_name": "Capecitabine — DPD Deficient",
          "traffic_light": "RED_AVOID",
          "clinical_alert": "Capecitabine is converted to 5-FU and can cause severe toxicity in DPD-deficient patients. Avoid use or markedly reduce the dose under oncology supervision.",
          "cpic_level": "CPIC 2017 DPYD and Fluoropyrimidine Dosing Guideline Level A / FDA Label"
        },
        {
          "drug_name": "Fluorouracil / Capecitabine — intermediate metabolizer",
          "chinese_name": "Fluorouracil / Capecitabine — Intermediate Metabolizer",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "Partially reduced DPD activity increases fluoropyrimidine toxicity risk. An oncology specialist should reduce the starting dose and monitor blood counts and mucosal toxicity closely.",
          "cpic_level": "CPIC 2017 DPYD and Fluoropyrimidine Dosing Guideline Level A"
        }
      ],
      "dietary_contraindications": [
        "Avoid self-supplementing with uracil or nucleoside-analog products during treatment because they may interfere with drug metabolism",
        "Contact your care team promptly for mouth ulcers, severe diarrhea, fever or unusual fatigue"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ CPIC Level A fluoropyrimidine dosing guidance",
      "clinvar_summary_chinese": "ClinVar and PharmGKB contain DPYD *2A, c.2846A>T, *13 and HapB3 loss-of-function variants",
      "key_pmids": [
        "PMID:29152729"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "Before starting 5-FU or capecitabine, ask your oncology team whether DPYD genotyping is appropriate.",
      "lifestyle_tips": [
        "Maintain hydration and oral care during chemotherapy to reduce mucositis and dehydration risk",
        "Do not self-treat fever, chills or severe diarrhea; contact your care team promptly",
        "Share your DPYD result with every clinician involved in your treatment"
      ]
    },
    "doctor_checklist": {
      "specialty": "Medical Oncology / Clinical Pharmacy",
      "questions": [
        "I am scheduled for 5-FU or capecitabine. Should I have DPYD genotyping first?",
        "If my DPYD result shows reduced activity, how should the starting dose be adjusted?",
        "Which symptoms during treatment should prompt an urgent call or emergency visit?"
      ]
    },
    "myth_buster": {
      "myth": "“Chemotherapy doses are calculated by my doctor, so genetic testing is unnecessary.”",
      "truth": "Not true. People with DPYD deficiency can develop severe or fatal toxicity at standard fluoropyrimidine doses. Pretreatment DPYD genotyping helps the oncology team choose a safer starting dose or an alternative regimen."
    }
  },
  "UGT1A1": {
    "gene": {
      "chinese_name": "UDP Glucuronosyltransferase 1A1 (Irinotecan & Bilirubin Metabolism Gene)",
      "chromosome": "2q37.1 (Chromosome 2)",
      "metaphor": {
        "title": "🧹 The Liver's 【Bilirubin & Chemotherapy Cleanup Crew】",
        "story": "UGT1A1 is like the liver's cleanup crew for bilirubin and certain drugs. When clearance is slower, bilirubin may rise intermittently, causing jaundice in Gilbert syndrome. With irinotecan, the active metabolite may also clear too slowly, increasing diarrhea and low blood count risks."
      },
      "plain_summary": "UGT1A1 clears bilirubin and the active metabolite of irinotecan. People with *28 or the East Asian *6 variant may clear these substances more slowly, increasing diarrhea and neutropenia risk with irinotecan. Gilbert syndrome is usually benign, but jaundice may recur.",
      "academic_summary": "UGT1A1 encodes UDP-glucuronosyltransferase 1A1, which glucuronidates unconjugated bilirubin and SN-38. UGT1A1 *28 (rs3064744, TA7) and the East Asian *6 variant (rs4148323, c.211G>A) reduce expression or activity, predisposing to Gilbert syndrome and irinotecan toxicity."
    },
    "disease": {
      "chinese_name": "Gilbert Syndrome & UGT1A1 Metabolism Variation",
      "categories": [
        "Pharmacogenomics (PGx)",
        "Hepatobiliary & Chemotherapy Safety"
      ],
      "inheritance_mode": "Autosomal Recessive",
      "severity_badge": "🟡 Irinotecan Dose Adjustment & Jaundice Monitoring"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0002904",
        "name": "Hyperbilirubinemia",
        "chinese_name": "Unconjugated hyperbilirubinemia"
      },
      {
        "hpo_id": "HP:0000952",
        "name": "Jaundice",
        "chinese_name": "Intermittent jaundice"
      },
      {
        "hpo_id": "HP:0001875",
        "name": "Decreased total neutrophil count",
        "chinese_name": "Neutropenia"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Irinotecan",
        "chinese_name": "Irinotecan",
        "mechanism": "Topoisomerase I inhibitor; active metabolite SN-38 is metabolized by UGT1A1",
        "approval_status": "FDA Label / DPWG Guideline"
      },
      {
        "drug_name": "Atazanavir",
        "chinese_name": "Atazanavir",
        "mechanism": "Antiretroviral drug that can cause hyperbilirubinemia in UGT1A1 poor metabolizers",
        "approval_status": "FDA Label / CPIC Guideline"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "UGT1A1 *28 (rs3064744, TA7), UGT1A1 *6 (rs4148323, c.211G>A, common in East Asians), *28/*28, *6/*6, *6/*28",
      "population_frequency": "In East Asians, *6 allele frequency is about 13%–23% and *28 about 10%–16%; Gilbert syndrome presents with intermittent unconjugated hyperbilirubinemia (PMID:36443464)",
      "traffic_light_summary": "🟡 UGT1A1 poor metabolizers clear the active irinotecan metabolite SN-38 more slowly, increasing diarrhea and neutropenia risk. An oncology specialist should reduce the starting dose and monitor closely. Gilbert syndrome is usually benign, but jaundice may recur.",
      "drugs_guide": [
        {
          "drug_name": "Irinotecan — UGT1A1 poor metabolizer (*28/*28, *6/*6, *6/*28)",
          "chinese_name": "Irinotecan — UGT1A1 Poor Metabolizer",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "UGT1A1 poor metabolizers have reduced SN-38 clearance and higher risk of diarrhea and neutropenia after irinotecan. An oncology specialist should reduce the starting dose and monitor blood counts and gastrointestinal symptoms closely.",
          "cpic_level": "FDA Label (irinotecan) / DPWG 2022 UGT1A1-Irinotecan Guideline"
        },
        {
          "drug_name": "Atazanavir — UGT1A1 poor metabolizer",
          "chinese_name": "Atazanavir — UGT1A1 Poor Metabolizer",
          "traffic_light": "YELLOW_CAUTION",
          "clinical_alert": "UGT1A1 poor metabolizers may develop unconjugated hyperbilirubinemia and jaundice with atazanavir, usually without requiring discontinuation. Monitor bilirubin and liver tests if jaundice is prominent.",
          "cpic_level": "CPIC UGT1A1-Atazanavir Guideline Level A / FDA Label"
        }
      ],
      "dietary_contraindications": [
        "Dehydration, fasting or infection may worsen jaundice in Gilbert syndrome; maintain hydration and regular meals",
        "Contact your care team promptly for severe diarrhea, fever or unusual fatigue during irinotecan treatment"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️ Supported by FDA labeling and DPWG guidance",
      "clinvar_summary_chinese": "ClinVar and PharmGKB contain UGT1A1 *28 (rs3064744) and *6 (rs4148323) bilirubin and irinotecan response variants",
      "key_pmids": [
        "PMID:36443464"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "Before irinotecan treatment, discuss UGT1A1 genotyping with your oncology team if you have a history of jaundice or severe chemotherapy toxicity.",
      "lifestyle_tips": [
        "People with Gilbert syndrome do not need strict dietary restrictions, but should avoid prolonged fasting and dehydration",
        "Track diarrhea frequency and temperature during irinotecan treatment and seek care early if abnormal",
        "Do not use anti-diarrheal medicines to mask severe symptoms without consulting your care team"
      ]
    },
    "doctor_checklist": {
      "specialty": "Medical Oncology / Gastroenterology / Clinical Pharmacy",
      "questions": [
        "My UGT1A1 result suggests I am a poor metabolizer. Does my irinotecan dose need adjustment?",
        "I sometimes develop jaundice. Could this be Gilbert syndrome, and should I be evaluated further?",
        "What should I do about diarrhea or fever during treatment, and when should I return?"
      ]
    },
    "myth_buster": {
      "myth": "“If I have Gilbert syndrome, I cannot receive any chemotherapy.”",
      "truth": "Not true. Gilbert syndrome is usually benign, but UGT1A1 poor metabolism affects irinotecan clearance and toxicity risk. An oncology specialist should decide whether dose adjustment is needed based on genotype, regimen and clinical status."
    }
  },
  "LCT": {
    "gene": {
      "chinese_name": "Lactase (Lactose Digestion Trait Gene)",
      "chromosome": "2q21.3 (Chromosome 2)",
      "metaphor": {
        "title": "🥛 The Small Intestine's 【Milk Sugar Scissors】",
        "story": "Lactose is the natural sugar in milk and dairy foods. The small intestine's lactase enzyme acts like scissors that cut lactose into smaller, absorbable sugars. Many East Asian adults naturally produce less lactase with age. This is a common physiological difference, not a disease; bloating or diarrhea after milk can often be improved by changing how dairy is consumed."
      },
      "plain_summary": "LCT is involved in lactase persistence. Lactase non-persistence, which causes lactose intolerance, is common in East Asian adults and is a normal physiological difference. Symptoms are usually mild and can be reduced by taking smaller portions, choosing low-lactose dairy, or using lactase supplements.",
      "academic_summary": "LCT encodes intestinal brush-border lactase, which hydrolyzes lactose into glucose and galactose. Lactase persistence is regulated by MCM6 enhancer variants such as -13910C>T (rs4988235), but East Asian populations commonly have lactase non-persistence, and rs4988235 is not the major disease variant in East Asians."
    },
    "disease": {
      "chinese_name": "Adult-Type Lactose Intolerance (Lactase Non-Persistence)",
      "categories": [
        "Lifestyle Trait",
        "Nutrition & Digestive Health"
      ],
      "inheritance_mode": "Complex / Polygenic Lifestyle Trait",
      "severity_badge": "🟡 Common and Usually Mild Dietary Trait"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0004789",
        "name": "Lactose intolerance",
        "chinese_name": "Lactose intolerance / lactose digestion discomfort"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Lactase enzyme supplement",
        "chinese_name": "Lactase Enzyme Supplement",
        "mechanism": "Supplies lactase to help break down lactose",
        "approval_status": "Over-the-counter supplement"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "LCT -13910C>T (rs4988235); lactase non-persistence is common in East Asian adults, and rs4988235 is not the major disease variant in East Asians",
      "population_frequency": "Lactase non-persistence affects up to 70%–90% or more of East Asian adults; lactose intolerance is usually a normal physiological difference (PMID:26715078)",
      "traffic_light_summary": "This is a lifestyle-related trait with no drug-gene (PGx) prescribing guideline. The effect of lactose intolerance is usually mild, and dietary adjustment and lifestyle matter more.",
      "drugs_guide": [],
      "dietary_contraindications": [
        "Choose low-lactose or lactose-free dairy, or consume dairy in smaller divided portions",
        "If dairy is completely avoided, ensure adequate calcium and vitamin D intake"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️ Common lifestyle trait with mild evidence",
      "clinvar_summary_chinese": "Lactase non-persistence is a common physiological trait, not a single high-penetrance pathogenic variant; it is the norm in East Asian populations",
      "key_pmids": [
        "PMID:26715078"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "If milk repeatedly causes bloating, abdominal pain or diarrhea, keep a food diary and discuss lactose intolerance with your doctor or dietitian if needed.",
      "lifestyle_tips": [
        "Start with small amounts of dairy and find your personal tolerance rather than avoiding all dairy",
        "Try yogurt, cheese or low-lactose milk as lower-lactose options",
        "If you limit dairy, obtain enough calcium and vitamin D from other foods or supplements"
      ]
    },
    "doctor_checklist": {
      "specialty": "Family Medicine / Gastroenterology / Nutrition Counseling",
      "questions": [
        "I often feel bloated or have diarrhea after milk. Could I have lactose intolerance?",
        "Do I need a lactose breath test or other testing to confirm it?",
        "If I reduce dairy, how should I get enough calcium and vitamin D?"
      ]
    },
    "myth_buster": {
      "myth": "“Almost all East Asians are lactose intolerant, so they should avoid milk completely.”",
      "truth": "Not true. Lactase non-persistence is common in East Asian adults, but most people can still tolerate small amounts of dairy. Divided portions, low-lactose products or lactase supplements can help balance nutrition and comfort."
    }
  },
  "CYP1A2": {
    "gene": {
      "chinese_name": "Cytochrome P450 1A2 (Caffeine Metabolism Trait Gene)",
      "chromosome": "15q24.1 (Chromosome 15)",
      "metaphor": {
        "title": "☕ The Liver's 【Caffeine Timer】",
        "story": "Caffeine in coffee, tea and energy drinks is mainly broken down by the liver's CYP1A2 timer. Everyone's timer runs at a different speed: some people can drink coffee in the afternoon and still sleep well, while others lie awake counting sheep after a midday cup. This difference is usually mild, and timing and amount often matter more than genotype."
      },
      "plain_summary": "CYP1A2 is the main enzyme that metabolizes caffeine. Individual differences in metabolism may affect palpitations, alertness and sleep after coffee, but the effect is usually mild. Adjusting timing and amount and keeping a regular sleep schedule is usually more practical than worrying about genotype.",
      "academic_summary": "CYP1A2 encodes cytochrome P450 1A2, which catalyzes caffeine N3-demethylation, the main clearance pathway. Variants such as CYP1A2*1F (rs762551) may influence enzyme inducibility and caffeine metabolism, but caffeine sensitivity is also affected by intake, smoking, medications and sleep habits."
    },
    "disease": {
      "chinese_name": "Caffeine Sensitivity & Sleep Effects (Insomnia Susceptibility)",
      "categories": [
        "Lifestyle Trait",
        "Sleep & Caffeine Metabolism"
      ],
      "inheritance_mode": "Complex / Polygenic Lifestyle Trait",
      "severity_badge": "🟡 Common and Usually Mild Caffeine Sensitivity Trait"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0100785",
        "name": "Insomnia",
        "chinese_name": "Insomnia / sleep disturbance"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Caffeine",
        "chinese_name": "Caffeine",
        "mechanism": "Central nervous system stimulant mainly metabolized by CYP1A2",
        "approval_status": "Food and drug ingredient"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "CYP1A2*1F (rs762551) is associated with caffeine metabolism speed; individual variation is large",
      "population_frequency": "CYP1A2*1F allele frequency varies by population; caffeine sensitivity is also influenced by intake, smoking, medications and sleep habits (PMID:16522833)",
      "traffic_light_summary": "This is a lifestyle-related trait with no drug-gene (PGx) prescribing guideline. Individual differences in caffeine metabolism are usually mild, and sleep habits, intake and lifestyle matter more.",
      "drugs_guide": [],
      "dietary_contraindications": [
        "Reduce coffee, tea, energy drinks and chocolate in the afternoon or evening to improve sleep",
        "Avoid combining with drugs that inhibit CYP1A2 or with heavy alcohol use"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️ Common lifestyle trait with mild evidence",
      "clinvar_summary_chinese": "CYP1A2 variants are associated with caffeine metabolism speed, but this is mostly a lifestyle trait rather than a single high-penetrance pathogenic variant",
      "key_pmids": [
        "PMID:16522833"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "If coffee often causes palpitations, anxiety or insomnia, record the timing and amount of caffeine intake and discuss it with your doctor if needed.",
      "lifestyle_tips": [
        "Keep caffeine intake in the morning and switch to decaffeinated drinks later in the day",
        "Watch for hidden caffeine in energy drinks, tea and chocolate",
        "Keep a regular sleep schedule and avoid screens before bed"
      ]
    },
    "doctor_checklist": {
      "specialty": "Family Medicine / Sleep Medicine / Nutrition Counseling",
      "questions": [
        "I get palpitations or cannot sleep after coffee. Could this be related to caffeine metabolism?",
        "Do I need CYP1A2 genetic testing, and would the result change your advice?",
        "Besides reducing caffeine, what else can I do to improve my sleep?"
      ]
    },
    "myth_buster": {
      "myth": "“If coffee keeps me awake, my genes must be bad.”",
      "truth": "Not necessarily. Caffeine metabolism is only one factor; timing, amount, sleep habits, stress and medications also matter. Adjusting lifestyle usually helps more than focusing on genotype alone."
    }
  },
  "FTO": {
    "gene": {
      "chinese_name": "FTO Gene (Obesity Susceptibility Gene)",
      "chromosome": "16q12.2 (Chromosome 16)",
      "metaphor": {
        "title": "⚖️ A 【Small Weight】 on the Body-Weight Scale",
        "story": "Some FTO variants act like a small weight on the body-weight scale, making weight gain slightly more likely. But the weight is light; daily food choices, physical activity, sleep and the environment determine which way the scale tips."
      },
      "plain_summary": "FTO is one of many genes associated with obesity susceptibility, but any single variant usually has a small effect. Body weight is mainly shaped by diet, activity, sleep and environment. A genetic result does not mean obesity is inevitable, and weight-loss drugs should not be chosen based on genotype alone.",
      "academic_summary": "FTO is located at 16q12.2, and the common intron 1 variant rs9939609 is associated with BMI and obesity susceptibility. Genome-wide association studies show a modest effect modified by physical activity, diet and other genes; FTO is not a single deterministic obesity gene."
    },
    "disease": {
      "chinese_name": "Obesity Susceptibility (Polygenic Lifestyle Trait)",
      "categories": [
        "Lifestyle Trait",
        "Weight & Metabolic Health"
      ],
      "inheritance_mode": "Complex / Polygenic Lifestyle Trait",
      "severity_badge": "🟡 Common Polygenic Trait with Mild Effect"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001513",
        "name": "Obesity",
        "chinese_name": "Obesity / weight gain tendency"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Semaglutide",
        "chinese_name": "Semaglutide",
        "mechanism": "GLP-1 receptor agonist used for obesity; not dosed by FTO genotype",
        "approval_status": "FDA-approved weight-management drug"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "FTO rs9939609 (intron 1); effect is mild and modified by lifestyle",
      "population_frequency": "FTO rs9939609 risk allele frequency varies by population; the effect of a single variant on BMI is usually small (PMID:17496892)",
      "traffic_light_summary": "This is a lifestyle-related trait with no drug-gene (PGx) prescribing guideline. FTO variants usually have a mild effect on body weight, and diet, exercise and sleep habits matter more.",
      "drugs_guide": [],
      "dietary_contraindications": [
        "Use balanced eating, regular physical activity and adequate sleep as the main weight-management strategy",
        "Do not judge obesity risk or start weight-loss drugs based on a single genetic result"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️ Common polygenic trait with a mild single-variant effect",
      "clinvar_summary_chinese": "FTO rs9939609 is associated with obesity susceptibility, but the effect is mild and it is not a single high-penetrance pathogenic variant",
      "key_pmids": [
        "PMID:17496892"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "Assess obesity risk with overall health measures such as BMI, waist circumference, blood pressure, glucose and lipids; do not rely on FTO genotype alone to guide treatment.",
      "lifestyle_tips": [
        "Build eating and activity habits you can maintain long term rather than extreme short-term diets",
        "Accumulate moderate-intensity physical activity each week and reduce sedentary time",
        "Ensure adequate sleep and stress management, as poor sleep can affect appetite and weight"
      ]
    },
    "doctor_checklist": {
      "specialty": "Family Medicine / Endocrinology & Metabolism / Nutrition Counseling",
      "questions": [
        "My FTO result suggests higher obesity susceptibility. Does that mean I will definitely become obese?",
        "Besides genetics, which metabolic measures should I check to assess weight-related health risk?",
        "If I need to lose weight, what diet, exercise or medication strategies fit me?"
      ]
    },
    "myth_buster": {
      "myth": "“If I carry the FTO obesity gene, I can never lose weight no matter how hard I try.”",
      "truth": "Not true. The effect of a single FTO variant on weight is usually small, and diet, exercise, sleep and environment matter more. Genetic results can be a health reminder but do not replace lifestyle change and medical assessment."
    }
  },
  "HBB": {
    "gene": {
      "chinese_name": "Hemoglobin Subunit Beta (HBB)",
      "chromosome": "11p15.4 (Chromosome 11)",
      "metaphor": {
        "title": "🩸 The Blood's 【Oxygen Delivery β Crew】",
        "story": "Red blood cells are like the body's delivery fleet, and hemoglobin is the oxygen rack on each truck. HBB makes the β-chain parts of that rack. If β chains are in short supply, the rack cannot be assembled properly, red blood cells become small and fragile and are cleared early, and oxygen delivery suffers. This is beta-thalassemia."
      },
      "plain_summary": "The HBB gene makes the β chain of hemoglobin. Having one pathogenic variant usually means being an asymptomatic carrier: most carriers are healthy and may only have mild anemia. The real disease risk mainly arises when both parents carry the same beta-thalassemia variant, which gives their child a higher chance of being affected. Knowing carrier status helps with premarital and preconception genetic counseling.",
      "academic_summary": "HBB is located at 11p15.4 and encodes the hemoglobin β chain. HBB pathogenic variants (β0 or β+) reduce or eliminate β-chain synthesis, causing free α-chain precipitation, ineffective erythropoiesis and hemolytic anemia in an autosomal recessive pattern. Phenotypes range from mild carrier states to transfusion-dependent major disease."
    },
    "disease": {
      "chinese_name": "Beta-Thalassemia (β-Type Thalassemia)",
      "categories": [
        "Blood Disorder",
        "Inherited Hemoglobin Disorder"
      ],
      "inheritance_mode": "Autosomal Recessive (AR)",
      "severity_badge": "🟠 Needs regular follow-up (manageable with transfusion and iron chelation)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001903",
        "name": "Anemia",
        "chinese_name": "Anemia"
      },
      {
        "hpo_id": "HP:0004840",
        "name": "Hypochromic microcytic anemia",
        "chinese_name": "Hypochromic microcytic anemia"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Deferasirox",
        "chinese_name": "Deferasirox (Iron Chelator)",
        "mechanism": "Chelates excess iron to reduce iron overload from long-term transfusion",
        "approval_status": "FDA-approved prescription drug"
      },
      {
        "drug_name": "Blood transfusion",
        "chinese_name": "Regular Blood Transfusion",
        "mechanism": "Replaces healthy red blood cells to improve anemia and tissue oxygenation",
        "approval_status": "Standard supportive treatment"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "HBB pathogenic variants (e.g., β0/β+ variants); beta-thalassemia is mainly caused by reduced hemoglobin β-chain synthesis",
      "population_frequency": "Beta-thalassemia carrier rates are higher in Mediterranean, Middle Eastern, South Asian and Southeast Asian populations, and carriers are also seen in Taiwan; carrier frequency varies by region (PMID:20301599)",
      "traffic_light_summary": "This gene currently has no CPIC pharmacogenomic (PGx) dosing guideline. Standard treatment for beta-thalassemia relies on regular transfusion, iron chelators such as deferasirox, and supportive care; whether and how intensively to treat should be decided by a hematologist based on the clinical picture.",
      "drugs_guide": [],
      "dietary_contraindications": [
        "Avoid self-supplementing with iron products, which can worsen iron overload",
        "People receiving transfusions should have ferritin and liver function monitored regularly"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️ Clear genetic medicine evidence",
      "clinvar_summary_chinese": "ClinVar and the literature include multiple HBB pathogenic variants with a clear association with beta-thalassemia",
      "key_pmids": [
        "PMID:20301599"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "If you have anemia, a family history, or are planning a pregnancy, consider hematologic testing and hemoglobin electrophoresis; HBB genetic testing and genetic counseling may be needed.",
      "lifestyle_tips": [
        "Eat a balanced diet and take folic acid as advised; do not self-supplement iron",
        "Avoid excessive fatigue and seek care early for palpitations, dizziness or shortness of breath",
        "Before pregnancy, have carrier screening and genetic counseling together with your partner"
      ]
    },
    "doctor_checklist": {
      "specialty": "Hematology / Genetic Counseling / Pediatrics",
      "questions": [
        "My HBB test shows I am a carrier. Will this affect my health?",
        "Should my partner also have beta-thalassemia carrier screening?",
        "If we plan a pregnancy, what prenatal or preimplantation testing options are available?"
      ]
    },
    "myth_buster": {
      "myth": "“Having a thalassemia gene means you cannot have children.”",
      "truth": "Not true. Most carriers are healthy and can have children normally. The key is knowing whether your partner also carries the same variant and preparing through genetic counseling and prenatal testing."
    }
  },
  "HBA1": {
    "gene": {
      "chinese_name": "Hemoglobin Subunit Alpha 1 (HBA1)",
      "chromosome": "16p13.3 (Chromosome 16)",
      "metaphor": {
        "title": "🩸 The 【α-Chain Duo】 on the Hemoglobin Rack",
        "story": "Hemoglobin needs α chains and β chains assembled together. α chains are made mainly by HBA1 together with its partner gene HBA2, like two workers on the same production line. If α-chain output is low, red blood cells become small and thin and may rupture early, producing alpha-thalassemia."
      },
      "plain_summary": "HBA1 works with its partner gene HBA2 to make the α chain of hemoglobin. Having only one pathogenic variant usually means being an asymptomatic carrier: most carriers are healthy. The real disease risk mainly arises when both parents carry the same alpha-thalassemia variant, which gives their child a higher chance of being affected. Carrier status can be planned for through genetic counseling and preconception testing.",
      "academic_summary": "HBA1 and HBA2 are located at 16p13.3 and together encode the hemoglobin α chain. Alpha-thalassemia is mostly caused by HBA1/HBA2 deletions or point mutations that reduce α-chain synthesis, inherited in an autosomal recessive pattern. Carriers are usually asymptomatic or have only mild microcytic anemia, while severe forms present as HbH disease or hydrops fetalis depending on the number of deleted alleles."
    },
    "disease": {
      "chinese_name": "Alpha-Thalassemia (α-Type Thalassemia)",
      "categories": [
        "Blood Disorder",
        "Inherited Hemoglobin Disorder"
      ],
      "inheritance_mode": "Autosomal Recessive (AR)",
      "severity_badge": "🟠 Needs regular follow-up (severity varies with the number of deletions)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001903",
        "name": "Anemia",
        "chinese_name": "Anemia"
      },
      {
        "hpo_id": "HP:0004840",
        "name": "Hypochromic microcytic anemia",
        "chinese_name": "Hypochromic microcytic anemia"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Deferasirox",
        "chinese_name": "Deferasirox (Iron Chelator)",
        "mechanism": "Chelates excess iron to reduce iron overload from long-term transfusion",
        "approval_status": "FDA-approved prescription drug"
      },
      {
        "drug_name": "Blood transfusion",
        "chinese_name": "Regular Blood Transfusion",
        "mechanism": "Replaces healthy red blood cells to improve anemia and tissue oxygenation",
        "approval_status": "Standard supportive treatment"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "HBA1/HBA2 deletions or point mutations; alpha-thalassemia is mainly caused by reduced α-chain synthesis, and HBA2 is an important partner gene",
      "population_frequency": "Alpha-thalassemia carrier status is relatively common in Southeast Asian, southern Chinese and Taiwanese populations; carrier frequency varies by region and deletion type (PMID:20301608)",
      "traffic_light_summary": "This gene currently has no CPIC pharmacogenomic (PGx) dosing guideline. Standard treatment for alpha-thalassemia relies on regular transfusion, iron chelators such as deferasirox, and supportive care; mild carriers usually need no specific medication, and treatment decisions should be made by a hematologist.",
      "drugs_guide": [],
      "dietary_contraindications": [
        "Avoid self-supplementing with iron products, which can worsen iron overload",
        "People receiving transfusions should have ferritin and liver function monitored regularly"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️ Clear genetic medicine evidence",
      "clinvar_summary_chinese": "ClinVar and the literature include multiple HBA1/HBA2 deletions and pathogenic variants with a clear association with alpha-thalassemia",
      "key_pmids": [
        "PMID:20301608"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "If you have microcytic anemia, a family history, or are planning a pregnancy, consider hematologic testing and hemoglobin electrophoresis; HBA1/HBA2 genetic testing and genetic counseling may be needed.",
      "lifestyle_tips": [
        "Eat a balanced diet and take folic acid as advised; do not self-supplement iron",
        "Avoid excessive fatigue and seek care early for palpitations, dizziness or shortness of breath",
        "Before pregnancy, have carrier screening and genetic counseling together with your partner"
      ]
    },
    "doctor_checklist": {
      "specialty": "Hematology / Genetic Counseling / Pediatrics",
      "questions": [
        "My HBA1 test shows I am a carrier. Will this affect my health?",
        "Do I also need HBA2 testing, and should my partner have alpha-thalassemia carrier screening?",
        "If we plan a pregnancy, what prenatal or preimplantation testing options are available?"
      ]
    },
    "myth_buster": {
      "myth": "“Only beta-thalassemia matters; being an alpha-thalassemia carrier is not a concern.”",
      "truth": "Not true. Alpha-thalassemia carriers are usually healthy, but if both parents carry α-chain variants, their child may have more severe anemia. Preconception carrier screening and genetic counseling help assess the risk."
    }
  },
  "SMN1": {
    "gene": {
      "chinese_name": "Survival of Motor Neuron 1 (SMN1)",
      "chromosome": "5q13.2 (Chromosome 5)",
      "metaphor": {
        "title": "🧠 The 【Motor Neuron Supply Station】 in the Spinal Cord",
        "story": "Motor neurons are like the wires that carry “move” signals, and SMN1 is the supply station that keeps those wires healthy. If SMN1 function is insufficient, motor neurons gradually degenerate and muscles become weak and wasted. This is spinal muscular atrophy (SMA)."
      },
      "plain_summary": "The SMN1 gene keeps motor neurons alive. Having only one pathogenic variant (usually an SMN1 deletion) usually means being an asymptomatic carrier: most carriers are healthy with normal motor function. The real disease risk mainly arises when both parents carry an SMN1 variant, which gives their child a higher chance of spinal muscular atrophy. Carrier screening and genetic counseling help with reproductive planning.",
      "academic_summary": "SMN1 is located at 5q13.2 and encodes the survival motor neuron protein. About 95% of spinal muscular atrophy is caused by biallelic SMN1 deletion and is inherited in an autosomal recessive pattern; disease severity correlates with the number of residual SMN2 copies, and clinical types range from type 1 to type 4."
    },
    "disease": {
      "chinese_name": "Spinal Muscular Atrophy (SMA)",
      "categories": [
        "Neuromuscular Disorder",
        "Inherited Neurological Disorder"
      ],
      "inheritance_mode": "Autosomal Recessive (AR)",
      "severity_badge": "🟠 Needs early diagnosis (disease-modifying treatments are available)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001252",
        "name": "Hypotonia",
        "chinese_name": "Low muscle tone"
      },
      {
        "hpo_id": "HP:0003202",
        "name": "Skeletal muscle atrophy",
        "chinese_name": "Skeletal muscle atrophy"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Nusinersen",
        "chinese_name": "Nusinersen",
        "mechanism": "Antisense oligonucleotide that promotes SMN2 expression to compensate for SMN protein deficiency",
        "approval_status": "FDA-approved SMA therapy"
      },
      {
        "drug_name": "Onasemnogene abeparvovec",
        "chinese_name": "Gene Therapy (Onasemnogene abeparvovec)",
        "mechanism": "Delivers a functional SMN gene via a viral vector",
        "approval_status": "FDA-approved gene therapy"
      },
      {
        "drug_name": "Risdiplam",
        "chinese_name": "Risdiplam",
        "mechanism": "Oral SMN2 splicing modifier that increases functional SMN protein",
        "approval_status": "FDA-approved SMA therapy"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "SMN1 deletion or pathogenic variant; SMA is mainly caused by biallelic loss of SMN1 function, and SMN2 copy number affects severity",
      "population_frequency": "SMN1 carrier frequency is about 1 in 40–60 people and varies by population (PMID:20301526)",
      "traffic_light_summary": "This gene currently has no CPIC pharmacogenomic (PGx) dosing guideline. Standard treatment for spinal muscular atrophy includes nusinersen, onasemnogene abeparvovec and risdiplam, which are disease-modifying therapies; whether and when to use them should be assessed by a neurologist based on type and age.",
      "drugs_guide": [],
      "dietary_contraindications": [
        "No specific dietary restrictions; focus on adequate nutrition and rehabilitation as needed",
        "During disease-modifying therapy, monitor liver function and adverse effects as advised"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️ Clear genetic medicine evidence",
      "clinvar_summary_chinese": "ClinVar and the literature include multiple SMN1 deletions and pathogenic variants with a clear association with spinal muscular atrophy",
      "key_pmids": [
        "PMID:20301526"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "If you have a family history or are planning a pregnancy, consider SMN1 carrier screening and genetic counseling; newborns with low muscle tone or developmental delay should be evaluated by a neurologist early.",
      "lifestyle_tips": [
        "Follow the care team's advice for physical therapy and rehabilitation to maintain joint mobility",
        "Pay attention to respiratory care and nutritional support to prevent infection",
        "Before pregnancy, have carrier screening and genetic counseling together with your partner"
      ]
    },
    "doctor_checklist": {
      "specialty": "Neurology / Pediatric Neurology / Genetic Counseling",
      "questions": [
        "My SMN1 carrier screen shows I am a carrier. Will this affect my health?",
        "Should my partner also have SMN1 carrier screening?",
        "If we plan a pregnancy, what prenatal or preimplantation testing options are available?"
      ]
    },
    "myth_buster": {
      "myth": "“SMA carriers will develop the disease themselves.”",
      "truth": "No. Carriers usually have one functional SMN1 copy and are healthy; disease requires both alleles to be affected. The value of carrier screening is to assess reproductive risk, not to judge whether an individual has the disease."
    }
  },
  "GJB2": {
    "gene": {
      "chinese_name": "Gap Junction Protein Beta 2 (GJB2)",
      "chromosome": "13q12.11 (Chromosome 13)",
      "metaphor": {
        "title": "👂 The 【Sound-Signal Bridge】 in the Inner Ear",
        "story": "Hair cells in the inner ear must pass sound signals onward, and the gap-junction proteins made by GJB2 connect the cells like bridges. If the bridges are poorly built, sound-signal transmission is impaired and congenital sensorineural hearing loss can result."
      },
      "plain_summary": "The GJB2 gene is involved in gap-junction proteins of the inner ear. Having only one pathogenic variant usually means being an asymptomatic carrier with normal hearing. The real disease risk mainly arises when both parents carry a GJB2 variant, which gives their child a higher chance of congenital hearing loss. Newborn hearing screening and genetic counseling help with early detection and intervention.",
      "academic_summary": "GJB2 is located at 13q12.11 and encodes connexin 26. Biallelic GJB2 pathogenic variants are one of the most common causes of autosomal recessive nonsyndromic hearing loss and are inherited in an autosomal recessive pattern; carriers usually have normal hearing."
    },
    "disease": {
      "chinese_name": "Autosomal Recessive Nonsyndromic Deafness 1A (GJB2-Related)",
      "categories": [
        "Hearing Disorder",
        "Inherited Sensory-Neural Disorder"
      ],
      "inheritance_mode": "Autosomal Recessive (AR)",
      "severity_badge": "🟠 Needs early intervention (hearing aids and rehabilitation can help)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0000407",
        "name": "Sensorineural hearing impairment",
        "chinese_name": "Sensorineural hearing loss"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Cochlear implant",
        "chinese_name": "Cochlear Implant",
        "mechanism": "Electrodes directly stimulate the auditory nerve to help restore sound perception in severe hearing loss",
        "approval_status": "Standard medical implant"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "GJB2 pathogenic variants (e.g., c.235delC); associated with autosomal recessive nonsyndromic hearing loss",
      "population_frequency": "GJB2-related hearing loss is common in East Asian and several other populations; carrier frequency varies by population (PMID:20301449)",
      "traffic_light_summary": "This gene currently has no CPIC pharmacogenomic (PGx) dosing guideline. Management of GJB2-related hearing loss centers on newborn hearing screening, hearing aids, cochlear implants and speech rehabilitation; whether to implant a cochlear device should be assessed by an ENT and audiology team.",
      "drugs_guide": [],
      "dietary_contraindications": [
        "No specific dietary restrictions; avoid prolonged exposure to loud noise to protect residual hearing",
        "Follow the audiology team's advice for regular hearing and speech-language follow-up"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️ Clear genetic medicine evidence",
      "clinvar_summary_chinese": "ClinVar and the literature include multiple GJB2 pathogenic variants with a clear association with autosomal recessive nonsyndromic hearing loss",
      "key_pmids": [
        "PMID:20301449"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "Newborns should have hearing screening; if there is a family history of hearing loss or a planned pregnancy, consider GJB2 genetic testing and genetic counseling.",
      "lifestyle_tips": [
        "Avoid prolonged exposure to loud noise to protect residual hearing",
        "Use hearing aids or a cochlear implant as advised and continue speech rehabilitation",
        "Before pregnancy, have carrier screening and genetic counseling together with your partner"
      ]
    },
    "doctor_checklist": {
      "specialty": "Otolaryngology / Audiology / Genetic Counseling",
      "questions": [
        "My GJB2 test shows I am a carrier. Will my hearing be affected?",
        "Should my partner also have GJB2 carrier screening?",
        "If my child has hearing loss, what is the process for evaluating hearing aids or a cochlear implant?"
      ]
    },
    "myth_buster": {
      "myth": "“A GJB2 carrier's child will definitely be unable to hear.”",
      "truth": "Not necessarily. Carriers usually have normal hearing, and whether a child is affected depends on whether the other parent also carries a GJB2 variant. Genetic counseling and newborn hearing screening allow early assessment and intervention."
    }
  },
  "LDLR": {
    "gene": {
      "chinese_name": "Low Density Lipoprotein Receptor (LDLR)",
      "chromosome": "19p13.2 (Chromosome 19)",
      "metaphor": {
        "title": "🩺 The 【Cholesterol Recycling Station】 at the Liver's Door",
        "story": "Low-density lipoprotein (LDL, the “bad cholesterol”) in the blood must be taken up by LDLR recycling stations at the liver's door. If there are too few stations or they are faulty, LDL keeps accumulating in the blood and long-term risk of atherosclerosis and cardiovascular disease rises."
      },
      "plain_summary": "The LDLR gene makes the LDL receptor on the liver surface, which helps clear bad cholesterol from the blood. A pathogenic variant can raise cholesterol, and it is inherited in an autosomal dominant pattern, so first-degree relatives may carry the same variant. Lipid testing, dietary changes and medication can effectively lower cardiovascular risk.",
      "academic_summary": "LDLR is located at 19p13.2 and encodes the LDL receptor, which mediates hepatic clearance of LDL. Loss-of-function LDLR variants cause familial hypercholesterolemia in an autosomal dominant pattern; blood LDL-C rises markedly, accelerating atherosclerosis and myocardial infarction risk."
    },
    "disease": {
      "chinese_name": "Familial Hypercholesterolemia",
      "categories": [
        "Lipid Metabolism Disorder",
        "Cardiovascular Risk"
      ],
      "inheritance_mode": "Autosomal Dominant (AD)",
      "severity_badge": "🟠 Needs long-term management (controllable with lipid-lowering therapy)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0003124",
        "name": "Hypercholesterolemia",
        "chinese_name": "High cholesterol"
      },
      {
        "hpo_id": "HP:0001658",
        "name": "Myocardial infarction",
        "chinese_name": "Heart attack"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Statins",
        "chinese_name": "Statins",
        "mechanism": "Inhibit HMG-CoA reductase, reducing hepatic cholesterol synthesis and increasing LDL receptor clearance",
        "approval_status": "FDA-approved prescription drug"
      },
      {
        "drug_name": "PCSK9 inhibitors",
        "chinese_name": "PCSK9 Inhibitors",
        "mechanism": "Inhibit PCSK9-mediated degradation of the LDL receptor, increasing LDL clearance",
        "approval_status": "FDA-approved prescription drug"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "LDLR loss-of-function pathogenic variants; familial hypercholesterolemia is mainly caused by reduced LDL receptor clearance",
      "population_frequency": "Heterozygous familial hypercholesterolemia affects about 1 in 250–300 people and varies by population (PMID:20301692)",
      "traffic_light_summary": "This gene currently has no CPIC pharmacogenomic (PGx) dosing guideline. Standard treatment for familial hypercholesterolemia relies on statins, PCSK9 inhibitors, diet and lifestyle changes; whether and how to use medication should be decided by a cardiologist or endocrinologist based on lipids and overall risk.",
      "drugs_guide": [],
      "dietary_contraindications": [
        "Reduce saturated and trans fat intake and increase vegetables, whole grains and soluble fiber",
        "Exercise regularly, maintain a healthy weight and stop smoking to lower cardiovascular risk"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️ Clear genetic medicine evidence",
      "clinvar_summary_chinese": "ClinVar and the literature include many LDLR pathogenic variants with a clear association with familial hypercholesterolemia",
      "key_pmids": [
        "PMID:20301692"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "If you have a family history of early cardiovascular disease or high lipids, consider lipid testing; LDLR genetic testing may be needed, and first-degree relatives should be evaluated too.",
      "lifestyle_tips": [
        "Follow a Mediterranean-style or low-saturated-fat diet with plenty of vegetables, fruit and soluble fiber",
        "Exercise regularly, maintain a healthy weight and stop smoking",
        "Keep regular lipid follow-up as advised and do not stop lipid-lowering medication on your own"
      ]
    },
    "doctor_checklist": {
      "specialty": "Cardiology / Endocrinology / Genetic Counseling",
      "questions": [
        "My LDLR test shows a pathogenic variant. What should my cholesterol target be?",
        "Should my parents, siblings or children also have lipid testing or genetic testing?",
        "Besides statins, am I a candidate for PCSK9 inhibitors or other lipid-lowering therapy?"
      ]
    },
    "myth_buster": {
      "myth": "“High cholesterol is only about eating too much fat and has nothing to do with genes.”",
      "truth": "Not necessarily. Familial hypercholesterolemia is often caused by variants in LDLR and related genes, so cholesterol can be high even with a light diet. Genetic testing and family screening allow early identification and treatment."
    }
  },
  "MYH7": {
    "gene": {
      "chinese_name": "Myosin Heavy Chain 7 (MYH7)",
      "chromosome": "14q11.2 (Chromosome 14)",
      "metaphor": {
        "title": "❤️ The 【Motor Heavy Chain】 in Heart Muscle",
        "story": "Heart muscle contraction is like an engine running, and the myosin heavy chain made by MYH7 is a key motor part. If the part is designed poorly, the heart muscle may thicken abnormally and contract and relax out of sync, producing hypertrophic cardiomyopathy."
      },
      "plain_summary": "The MYH7 gene is involved in heart-muscle contractile proteins. A pathogenic variant can increase the risk of hypertrophic cardiomyopathy, and it is inherited in an autosomal dominant pattern, so first-degree relatives may carry the same variant. Most people can manage it well with regular cardiac evaluation, lifestyle adjustments and medication.",
      "academic_summary": "MYH7 is located at 14q11.2 and encodes the cardiac β myosin heavy chain. MYH7 pathogenic variants are a common cause of hypertrophic cardiomyopathy and are inherited in an autosomal dominant pattern; they can cause myocardial hypertrophy, diastolic dysfunction and arrhythmia risk."
    },
    "disease": {
      "chinese_name": "Hypertrophic Cardiomyopathy",
      "categories": [
        "Cardiovascular Disease",
        "Inherited Cardiomyopathy"
      ],
      "inheritance_mode": "Autosomal Dominant (AD)",
      "severity_badge": "🟠 Needs regular cardiac evaluation (manageable with medication and monitoring)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001639",
        "name": "Hypertrophic cardiomyopathy",
        "chinese_name": "Hypertrophic cardiomyopathy"
      },
      {
        "hpo_id": "HP:0011675",
        "name": "Arrhythmia",
        "chinese_name": "Arrhythmia"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Mavacamten",
        "chinese_name": "Mavacamten",
        "mechanism": "Cardiac myosin inhibitor that reduces excessive myocardial contraction",
        "approval_status": "FDA-approved prescription drug"
      },
      {
        "drug_name": "Beta-blockers",
        "chinese_name": "Beta-Blockers",
        "mechanism": "Lower heart rate and contractility, improving symptoms and diastolic filling",
        "approval_status": "Standard prescription therapy"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "MYH7 pathogenic variants; hypertrophic cardiomyopathy is mainly caused by variants in cardiac sarcomere genes",
      "population_frequency": "Hypertrophic cardiomyopathy affects about 1 in 500 people, and MYH7 and MYBPC3 are common causative genes (PMID:20301725)",
      "traffic_light_summary": "This gene currently has no CPIC pharmacogenomic (PGx) dosing guideline. Standard treatment for hypertrophic cardiomyopathy includes beta-blockers, mavacamten and regular cardiac monitoring; whether and which medication to use should be assessed by a cardiologist based on symptoms, outflow tract obstruction and arrhythmia risk.",
      "drugs_guide": [],
      "dietary_contraindications": [
        "Avoid dehydration, excess alcohol and dehydrating strenuous exercise, which can worsen symptoms",
        "Attend regular echocardiography and rhythm monitoring as advised"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️ Clear genetic medicine evidence",
      "clinvar_summary_chinese": "ClinVar and the literature include many MYH7 pathogenic variants with a clear association with hypertrophic cardiomyopathy",
      "key_pmids": [
        "PMID:20301725"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "If you have a family history of hypertrophic cardiomyopathy, a heart murmur, chest tightness or exertional syncope, consider echocardiography and genetic counseling; first-degree relatives should also be evaluated.",
      "lifestyle_tips": [
        "Stay adequately hydrated and avoid dehydration and excess alcohol",
        "Choose exercise intensity with your doctor's advice and avoid unevaluated high-intensity competitive sports",
        "Keep regular cardiac and rhythm follow-up and seek care early for chest pain, syncope or palpitations"
      ]
    },
    "doctor_checklist": {
      "specialty": "Cardiology / Genetic Counseling",
      "questions": [
        "My MYH7 test shows a pathogenic variant. How often should my heart be checked?",
        "Should my parents, siblings or children also have cardiac evaluation or genetic testing?",
        "Am I suitable for beta-blockers or mavacamten, and what exercise limits apply to me?"
      ]
    },
    "myth_buster": {
      "myth": "“People with a heart-thickening gene cannot exercise.”",
      "truth": "Not necessarily. Most patients can exercise moderately after medical evaluation; the key is to avoid unevaluated high-intensity competitive sports and to keep regular cardiac and rhythm follow-up."
    }
  },
  "MYBPC3": {
    "gene": {
      "chinese_name": "Myosin Binding Protein C3 (MYBPC3)",
      "chromosome": "11p11.2 (Chromosome 11)",
      "metaphor": {
        "title": "❤️ The 【Speed-Regulating Spring】 in the Heart Engine",
        "story": "Heart muscle contraction needs many proteins working together, and the binding protein made by MYBPC3 acts like a speed-regulating spring in the engine, helping contraction and relaxation keep their rhythm. If the spring malfunctions, the heart muscle may gradually thicken, producing hypertrophic cardiomyopathy."
      },
      "plain_summary": "The MYBPC3 gene is involved in regulating heart-muscle contractile proteins. A pathogenic variant can increase the risk of hypertrophic cardiomyopathy, and it is inherited in an autosomal dominant pattern, so first-degree relatives may carry the same variant. Most people can manage it well with regular cardiac evaluation, lifestyle adjustments and medication.",
      "academic_summary": "MYBPC3 is located at 11p11.2 and encodes cardiac myosin binding protein C. MYBPC3 pathogenic variants are one of the most common causes of hypertrophic cardiomyopathy and are inherited in an autosomal dominant pattern; they can cause myocardial hypertrophy, diastolic dysfunction and arrhythmia risk."
    },
    "disease": {
      "chinese_name": "Hypertrophic Cardiomyopathy",
      "categories": [
        "Cardiovascular Disease",
        "Inherited Cardiomyopathy"
      ],
      "inheritance_mode": "Autosomal Dominant (AD)",
      "severity_badge": "🟠 Needs regular cardiac evaluation (manageable with medication and monitoring)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0001639",
        "name": "Hypertrophic cardiomyopathy",
        "chinese_name": "Hypertrophic cardiomyopathy"
      },
      {
        "hpo_id": "HP:0011675",
        "name": "Arrhythmia",
        "chinese_name": "Arrhythmia"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Mavacamten",
        "chinese_name": "Mavacamten",
        "mechanism": "Cardiac myosin inhibitor that reduces excessive myocardial contraction",
        "approval_status": "FDA-approved prescription drug"
      },
      {
        "drug_name": "Beta-blockers",
        "chinese_name": "Beta-Blockers",
        "mechanism": "Lower heart rate and contractility, improving symptoms and diastolic filling",
        "approval_status": "Standard prescription therapy"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": false,
      "key_variant": "MYBPC3 pathogenic variants (often truncating); hypertrophic cardiomyopathy is mainly caused by variants in cardiac sarcomere genes",
      "population_frequency": "Hypertrophic cardiomyopathy affects about 1 in 500 people, and MYBPC3 and MYH7 are common causative genes (PMID:20301725)",
      "traffic_light_summary": "This gene currently has no CPIC pharmacogenomic (PGx) dosing guideline. Standard treatment for hypertrophic cardiomyopathy includes beta-blockers, mavacamten and regular cardiac monitoring; whether and which medication to use should be assessed by a cardiologist based on symptoms, outflow tract obstruction and arrhythmia risk.",
      "drugs_guide": [],
      "dietary_contraindications": [
        "Avoid dehydration, excess alcohol and dehydrating strenuous exercise, which can worsen symptoms",
        "Attend regular echocardiography and rhythm monitoring as advised"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️ Clear genetic medicine evidence",
      "clinvar_summary_chinese": "ClinVar and the literature include many MYBPC3 pathogenic variants with a clear association with hypertrophic cardiomyopathy",
      "key_pmids": [
        "PMID:20301725"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "If you have a family history of hypertrophic cardiomyopathy, a heart murmur, chest tightness or exertional syncope, consider echocardiography and genetic counseling; first-degree relatives should also be evaluated.",
      "lifestyle_tips": [
        "Stay adequately hydrated and avoid dehydration and excess alcohol",
        "Choose exercise intensity with your doctor's advice and avoid unevaluated high-intensity competitive sports",
        "Keep regular cardiac and rhythm follow-up and seek care early for chest pain, syncope or palpitations"
      ]
    },
    "doctor_checklist": {
      "specialty": "Cardiology / Genetic Counseling",
      "questions": [
        "My MYBPC3 test shows a pathogenic variant. How often should my heart be checked?",
        "Should my parents, siblings or children also have cardiac evaluation or genetic testing?",
        "Am I suitable for beta-blockers or mavacamten, and what exercise limits apply to me?"
      ]
    },
    "myth_buster": {
      "myth": "“People with a hypertrophic cardiomyopathy gene cannot exercise.”",
      "truth": "Not necessarily. Most patients can exercise moderately after medical evaluation; the key is to avoid unevaluated high-intensity competitive sports and to keep regular cardiac and rhythm follow-up."
    }
  },
  "BRCA2": {
    "gene": {
      "chinese_name": "BRCA2 DNA Repair Associated",
      "chromosome": "13q13.1 (Chromosome 13)",
      "metaphor": {
        "title": "🧬 The DNA Repair Team's 【RAD51 Recruiter】",
        "story": "When DNA suffers a double-strand break, the cell needs a precise repair process. BRCA2 acts like the site coordinator who brings the key repair tool RAD51 to the break. If the coordinator walks off the job, repair cannot be completed, errors accumulate, and over time the risk of breast, ovarian, prostate and pancreatic cancer rises."
      },
      "plain_summary": "BRCA2 is an important DNA repair gene. Carrying a pathogenic variant does NOT mean cancer is inevitable; it means lifetime risk of breast, ovarian, prostate and pancreatic cancer is higher than average, so earlier structured screening and genetic counseling are important.",
      "academic_summary": "BRCA2 is located at 13q13.1 and encodes a ~384-kDa nuclear protein that interacts with RAD51 through BRC repeats to mediate error-free homologous recombination (HR) repair of DNA double-strand breaks. Germline heterozygous pathogenic variants cause HR deficiency, producing autosomal dominant hereditary breast and ovarian cancer syndrome and conferring synthetic lethality sensitivity to PARP inhibitors."
    },
    "disease": {
      "chinese_name": "Hereditary Breast and Ovarian Cancer Syndrome (HBOC)",
      "categories": [
        "Malignant Neoplasm",
        "Hereditary Cancer Syndrome"
      ],
      "inheritance_mode": "Autosomal Dominant (AD)",
      "severity_badge": "⚠️ High Clinical Priority (Preventable & Treatable)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0003002",
        "name": "Breast carcinoma",
        "chinese_name": "Breast carcinoma"
      },
      {
        "hpo_id": "HP:0100615",
        "name": "Ovarian neoplasm",
        "chinese_name": "Ovarian neoplasm"
      },
      {
        "hpo_id": "HP:0012125",
        "name": "Prostate cancer",
        "chinese_name": "Prostate cancer"
      },
      {
        "hpo_id": "HP:0100787",
        "name": "Pancreatic neoplasm",
        "chinese_name": "Pancreatic neoplasm"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Olaparib",
        "chinese_name": "Olaparib (Lynparza)",
        "mechanism": "PARP1/2 inhibitor (synthetic lethality in HR-deficient tumors)",
        "approval_status": "FDA / TFDA / NMPA Approved"
      },
      {
        "drug_name": "Talazoparib",
        "chinese_name": "Talazoparib (Talzenna)",
        "mechanism": "Potent PARP1/2 inhibitor and PARP-DNA trapper",
        "approval_status": "FDA / TFDA / NMPA Approved"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "Germline pathogenic variants (e.g., c.5946delT / rs80359550)",
      "population_frequency": "~1 in 400 to 1 in 800 in the general population, varying by ancestry (PMID:20301425)",
      "traffic_light_summary": "🟢 Targeted Therapy Sensitive: BRCA2-related tumors with germline pathogenic variants show synthetic lethality sensitivity to PARP inhibitors such as olaparib and talazoparib.",
      "drugs_guide": [
        {
          "drug_name": "Olaparib / Talazoparib",
          "chinese_name": "Olaparib / Talazoparib",
          "traffic_light": "GREEN_NORMAL",
          "clinical_alert": "Via synthetic lethality, patients with germline pathogenic BRCA2 variants derive significant clinical benefit from PARP inhibitor therapy.",
          "cpic_level": "FDA Companion Diagnostic / NCCN Category 1"
        }
      ],
      "dietary_contraindications": [
        "Strictly limit alcohol consumption",
        "Use long-term unopposed exogenous estrogen replacement therapy with caution"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Definitive International Clinical Consensus",
      "clinvar_summary_chinese": "Numerous clearly pathogenic BRCA2 variants curated in ClinVar and the literature",
      "key_pmids": [
        "PMID:20301425",
        "PMID:28522680"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "Following NCCN guidance, begin annual breast MRI plus mammography starting at age 25–30; discuss pancreatic surveillance if there is a family history of pancreatic cancer, and discuss prostate cancer screening for men.",
      "lifestyle_tips": [
        "Maintain a healthy body weight, regular sleep schedule, and low-saturated-fat diet",
        "Avoid tobacco and strictly limit alcohol intake",
        "Discuss reproductive planning and preimplantation genetic testing (PGT) with a genetic counseling team"
      ]
    },
    "doctor_checklist": {
      "specialty": "Breast Surgery / Medical Oncology / Clinical Genetics Clinic",
      "questions": [
        "My genetic report shows a BRCA2 variant. At what age should I start annual breast MRI?",
        "Do I need pancreatic or prostate cancer surveillance, and what tests and intervals do you recommend?",
        "Should my first-degree relatives undergo cascade genetic testing for this exact variant?",
        "If I plan to have children, is preimplantation genetic testing (PGT) appropriate for me?"
      ]
    },
    "myth_buster": {
      "myth": "“Testing positive for a BRCA2 mutation means I am 100% guaranteed to get cancer.”",
      "truth": "No. A pathogenic variant raises lifetime risk but is not a certainty. With structured screening, lifestyle changes and appropriate preventive measures, most carriers can achieve early detection and early treatment."
    }
  },
  "PALB2": {
    "gene": {
      "chinese_name": "Partner and Localizer of BRCA2 (PALB2)",
      "chromosome": "16p12.2 (Chromosome 16)",
      "metaphor": {
        "title": "🧬 The DNA Repair Team's 【Navigator and Partner】",
        "story": "The name PALB2 describes its role: it is BRCA2's partner and guides BRCA2 to the site of DNA damage. Without this navigator, BRCA2 cannot reach the repair site. When repair efficiency falls, the risk of breast and pancreatic cancer rises."
      },
      "plain_summary": "PALB2 is an important partner gene that helps BRCA2 repair DNA. Carrying a pathogenic variant does NOT mean cancer is inevitable; it means the risk of breast and pancreatic cancer is higher than average, so earlier breast imaging, pancreatic surveillance and genetic counseling should be discussed with a doctor.",
      "academic_summary": "PALB2 is located at 16p12.2 and encodes a BRCA2-binding protein that localizes BRCA2 to DNA damage sites and promotes RAD51-dependent homologous recombination repair. Germline heterozygous pathogenic variants are associated with hereditary breast and ovarian cancer syndrome and pancreatic cancer susceptibility in an autosomal dominant pattern, and tumors are similarly sensitive to PARP inhibitors."
    },
    "disease": {
      "chinese_name": "Hereditary Breast and Ovarian Cancer Syndrome (HBOC)",
      "categories": [
        "Malignant Neoplasm",
        "Hereditary Cancer Syndrome"
      ],
      "inheritance_mode": "Autosomal Dominant (AD)",
      "severity_badge": "⚠️ High Clinical Priority (Preventable & Treatable)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0003002",
        "name": "Breast carcinoma",
        "chinese_name": "Breast carcinoma"
      },
      {
        "hpo_id": "HP:0100787",
        "name": "Pancreatic neoplasm",
        "chinese_name": "Pancreatic neoplasm"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Olaparib",
        "chinese_name": "Olaparib (Lynparza)",
        "mechanism": "PARP1/2 inhibitor (synthetic lethality in HR-deficient tumors)",
        "approval_status": "FDA / TFDA / NMPA Approved"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "Germline pathogenic variants (e.g., c.3113G>A / rs118203985)",
      "population_frequency": "PALB2 pathogenic variants are relatively uncommon in the general population, and carrier frequency varies by ancestry (PMID:25099575)",
      "traffic_light_summary": "🟢 Targeted Therapy Sensitive: PALB2-related homologous recombination-deficient tumors are sensitive to PARP inhibitors such as olaparib, supported by guideline and clinical trial evidence.",
      "drugs_guide": [
        {
          "drug_name": "Olaparib",
          "chinese_name": "Olaparib (Lynparza)",
          "traffic_light": "GREEN_NORMAL",
          "clinical_alert": "Germline pathogenic PALB2 variants cause homologous recombination deficiency, and PARP inhibitors can provide clinical benefit through synthetic lethality.",
          "cpic_level": "NCCN Guideline / Clinical Trial Evidence"
        }
      ],
      "dietary_contraindications": [
        "Strictly limit alcohol consumption",
        "Use long-term unopposed exogenous estrogen replacement therapy with caution"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️ Supported by international guidelines and clinical trials",
      "clinvar_summary_chinese": "Multiple PALB2 pathogenic variants curated in ClinVar and the literature are associated with breast and pancreatic cancer susceptibility",
      "key_pmids": [
        "PMID:25099575",
        "PMID:31841383"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "Following NCCN guidance and medical advice, discuss beginning annual breast MRI plus mammography at an earlier age; if there is a family history of pancreatic cancer, discuss pancreatic surveillance.",
      "lifestyle_tips": [
        "Maintain a healthy body weight, regular sleep schedule, and low-saturated-fat diet",
        "Avoid tobacco and strictly limit alcohol intake",
        "Discuss family screening and reproductive planning with a genetic counseling team"
      ]
    },
    "doctor_checklist": {
      "specialty": "Breast Surgery / Medical Oncology / Clinical Genetics Clinic",
      "questions": [
        "My genetic report shows a PALB2 variant. At what age should I start annual breast MRI?",
        "Do I need pancreatic cancer surveillance, and what tests and intervals do you recommend?",
        "Should my first-degree relatives undergo cascade genetic testing for this exact variant?",
        "If my tumor is homologous recombination deficient, am I a candidate for PARP inhibitors?"
      ]
    },
    "myth_buster": {
      "myth": "“PALB2 is not BRCA, so it does not matter.”",
      "truth": "Not true. PALB2 is an important partner of BRCA2, and pathogenic variants also raise breast and pancreatic cancer risk. Genetic counseling and appropriate screening allow early assessment and management."
    }
  },
  "MLH1": {
    "gene": {
      "chinese_name": "MutL Homolog 1 (MLH1)",
      "chromosome": "3p22.2 (Chromosome 3)",
      "metaphor": {
        "title": "🧬 The Cell's 【Typo Proofreader】",
        "story": "DNA replication occasionally makes a typo, and MLH1 acts like the cell's proofreader, finding and correcting mismatches. If the proofreader walks off the job, typos accumulate, cells can grow out of control, and the risk of colon and endometrial cancer rises. This is related to Lynch syndrome."
      },
      "plain_summary": "MLH1 is a key DNA mismatch repair (MMR) gene. A pathogenic variant raises lifetime risk of Lynch syndrome-related cancers such as colon and endometrial cancer, is inherited in an autosomal dominant pattern, and first-degree relatives may carry the same variant. Earlier, regular colonoscopy and gynecologic surveillance allow early detection and management.",
      "academic_summary": "MLH1 is located at 3p22.2 and encodes a MutL homolog that forms mismatch repair complexes with MSH2/MSH6/PMS2 to correct base mismatches and small insertions/deletions during DNA replication. Germline heterozygous pathogenic variants cause mismatch repair deficiency and microsatellite instability-high (MSI-H) tumors, leading to autosomal dominant Lynch syndrome; dMMR/MSI-H tumors are sensitive to PD-1 immune checkpoint inhibitors."
    },
    "disease": {
      "chinese_name": "Lynch Syndrome (Hereditary Non-Polyposis Colorectal Cancer)",
      "categories": [
        "Malignant Neoplasm",
        "Hereditary Cancer Syndrome"
      ],
      "inheritance_mode": "Autosomal Dominant (AD)",
      "severity_badge": "⚠️ High Clinical Priority (Manageable with surveillance and treatment)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0003003",
        "name": "Colon cancer",
        "chinese_name": "Colon cancer"
      },
      {
        "hpo_id": "HP:0012114",
        "name": "Endometrial carcinoma",
        "chinese_name": "Endometrial carcinoma"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Pembrolizumab",
        "chinese_name": "Pembrolizumab (Keytruda)",
        "mechanism": "PD-1 immune checkpoint inhibitor for dMMR/MSI-H tumors",
        "approval_status": "FDA biomarker-approved / NCCN Category 1"
      },
      {
        "drug_name": "Nivolumab",
        "chinese_name": "Nivolumab (Opdivo)",
        "mechanism": "PD-1 immune checkpoint inhibitor for dMMR/MSI-H tumors",
        "approval_status": "FDA biomarker-approved / NCCN Category 1"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "Germline pathogenic variants in the MLH1 mismatch repair gene; tumors often show dMMR/MSI-H",
      "population_frequency": "Lynch syndrome affects about 1 in 300 people and varies by ancestry and gene (PMID:20301390)",
      "traffic_light_summary": "🟢 Immunotherapy Sensitive: dMMR/MSI-H tumors respond well to PD-1 immune checkpoint inhibitors such as pembrolizumab and nivolumab, under FDA biomarker approval and NCCN Category 1.",
      "drugs_guide": [
        {
          "drug_name": "Pembrolizumab / Nivolumab",
          "chinese_name": "Pembrolizumab / Nivolumab",
          "traffic_light": "GREEN_NORMAL",
          "clinical_alert": "MLH1-deficient dMMR/MSI-H tumors respond well to PD-1 immune checkpoint inhibitors; dMMR/MSI-H status should be confirmed pathologically before use.",
          "cpic_level": "FDA Biomarker-Approved (dMMR/MSI-H) / NCCN Category 1"
        }
      ],
      "dietary_contraindications": [
        "Reduce processed meat and red meat intake and increase vegetables, fruit and whole grains",
        "Limit alcohol intake and maintain a healthy body weight"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Definitive International Clinical Consensus",
      "clinvar_summary_chinese": "Many MLH1 pathogenic variants curated in ClinVar and the literature are associated with Lynch syndrome and dMMR/MSI-H tumors",
      "key_pmids": [
        "PMID:20301390",
        "PMID:26023682"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "Following NCCN guidance and medical advice, begin colonoscopy every 1–2 years starting at age 20–25; women may discuss endometrial cancer surveillance; family members should receive genetic counseling and testing.",
      "lifestyle_tips": [
        "Reduce processed meat and red meat and increase vegetables, fruit and whole grains",
        "Exercise regularly, maintain a healthy weight and limit alcohol",
        "Seek care early for blood in the stool, changes in bowel habits or abnormal bleeding"
      ]
    },
    "doctor_checklist": {
      "specialty": "Gastroenterology / Medical Oncology / Gynecology / Clinical Genetics Clinic",
      "questions": [
        "My genetic report shows an MLH1 variant. At what age should I start colonoscopy, and how often?",
        "Do I need endometrial cancer surveillance, and what tests do you recommend?",
        "Should my tumor be tested for dMMR/MSI-H, and would that affect the choice of immunotherapy?",
        "Should my first-degree relatives undergo cascade genetic testing for this exact variant?"
      ]
    },
    "myth_buster": {
      "myth": "“Lynch syndrome means you will definitely get colon cancer.”",
      "truth": "No. Lynch syndrome raises risk, but regular colonoscopy surveillance, lifestyle changes and appropriate medical care greatly reduce risk and enable early detection and treatment."
    }
  },
  "MSH2": {
    "gene": {
      "chinese_name": "MutS Homolog 2 (MSH2)",
      "chromosome": "2p21 (Chromosome 2)",
      "metaphor": {
        "title": "🧬 The 【Mismatch Detector】 at the DNA Proofreading Desk",
        "story": "DNA replication inevitably produces mismatches, and MSH2 acts like a detector at the proofreading desk: it finds the typo first and hands it to the repair team. If the detector fails, typos accumulate, cells can drift toward cancer, and this is related to Lynch syndrome."
      },
      "plain_summary": "MSH2 is a key DNA mismatch repair (MMR) gene. A pathogenic variant raises lifetime risk of Lynch syndrome-related cancers such as colon and endometrial cancer, is inherited in an autosomal dominant pattern, and first-degree relatives may carry the same variant. Earlier, regular colonoscopy and gynecologic surveillance allow early detection and management.",
      "academic_summary": "MSH2 is located at 2p21 and encodes a MutS homolog that forms the MutSα complex with MSH6 to recognize DNA base mismatches and small insertions/deletions and recruit MLH1/PMS2 for repair. Germline heterozygous pathogenic variants cause mismatch repair deficiency and microsatellite instability-high (MSI-H) tumors, leading to autosomal dominant Lynch syndrome; dMMR/MSI-H tumors are sensitive to PD-1 immune checkpoint inhibitors."
    },
    "disease": {
      "chinese_name": "Lynch Syndrome (Hereditary Non-Polyposis Colorectal Cancer)",
      "categories": [
        "Malignant Neoplasm",
        "Hereditary Cancer Syndrome"
      ],
      "inheritance_mode": "Autosomal Dominant (AD)",
      "severity_badge": "⚠️ High Clinical Priority (Manageable with surveillance and treatment)"
    },
    "phenotypes": [
      {
        "hpo_id": "HP:0003003",
        "name": "Colon cancer",
        "chinese_name": "Colon cancer"
      },
      {
        "hpo_id": "HP:0012114",
        "name": "Endometrial carcinoma",
        "chinese_name": "Endometrial carcinoma"
      }
    ],
    "drugs_targeted": [
      {
        "drug_name": "Pembrolizumab",
        "chinese_name": "Pembrolizumab (Keytruda)",
        "mechanism": "PD-1 immune checkpoint inhibitor for dMMR/MSI-H tumors",
        "approval_status": "FDA biomarker-approved / NCCN Category 1"
      },
      {
        "drug_name": "Nivolumab",
        "chinese_name": "Nivolumab (Opdivo)",
        "mechanism": "PD-1 immune checkpoint inhibitor for dMMR/MSI-H tumors",
        "approval_status": "FDA biomarker-approved / NCCN Category 1"
      }
    ],
    "pharmacogenomics": {
      "has_pgx": true,
      "key_variant": "Germline pathogenic variants in the MSH2 mismatch repair gene; tumors often show dMMR/MSI-H",
      "population_frequency": "Lynch syndrome affects about 1 in 300 people and varies by ancestry and gene (PMID:20301390)",
      "traffic_light_summary": "🟢 Immunotherapy Sensitive: dMMR/MSI-H tumors respond well to PD-1 immune checkpoint inhibitors such as pembrolizumab and nivolumab, under FDA biomarker approval and NCCN Category 1.",
      "drugs_guide": [
        {
          "drug_name": "Pembrolizumab / Nivolumab",
          "chinese_name": "Pembrolizumab / Nivolumab",
          "traffic_light": "GREEN_NORMAL",
          "clinical_alert": "MSH2-deficient dMMR/MSI-H tumors respond well to PD-1 immune checkpoint inhibitors; dMMR/MSI-H status should be confirmed pathologically before use.",
          "cpic_level": "FDA Biomarker-Approved (dMMR/MSI-H) / NCCN Category 1"
        }
      ],
      "dietary_contraindications": [
        "Reduce processed meat and red meat intake and increase vegetables, fruit and whole grains",
        "Limit alcohol intake and maintain a healthy body weight"
      ]
    },
    "evidence": {
      "plain_rating": "⭐️⭐️⭐️⭐️⭐️ Definitive International Clinical Consensus",
      "clinvar_summary_chinese": "Many MSH2 pathogenic variants curated in ClinVar and the literature are associated with Lynch syndrome and dMMR/MSI-H tumors",
      "key_pmids": [
        "PMID:20301390",
        "PMID:26023682"
      ]
    },
    "lifestyle_prevention": {
      "screening_advice": "Following NCCN guidance and medical advice, begin colonoscopy every 1–2 years starting at age 20–25; women may discuss endometrial cancer surveillance; family members should receive genetic counseling and testing.",
      "lifestyle_tips": [
        "Reduce processed meat and red meat and increase vegetables, fruit and whole grains",
        "Exercise regularly, maintain a healthy weight and limit alcohol",
        "Seek care early for blood in the stool, changes in bowel habits or abnormal bleeding"
      ]
    },
    "doctor_checklist": {
      "specialty": "Gastroenterology / Medical Oncology / Gynecology / Clinical Genetics Clinic",
      "questions": [
        "My genetic report shows an MSH2 variant. At what age should I start colonoscopy, and how often?",
        "Do I need endometrial cancer surveillance, and what tests do you recommend?",
        "Should my tumor be tested for dMMR/MSI-H, and would that affect the choice of immunotherapy?",
        "Should my first-degree relatives undergo cascade genetic testing for this exact variant?"
      ]
    },
    "myth_buster": {
      "myth": "“Lynch syndrome means you will definitely get colon cancer.”",
      "truth": "No. Lynch syndrome raises risk, but regular colonoscopy surveillance, lifestyle changes and appropriate medical care greatly reduce risk and enable early detection and treatment."
    }
  }
};
