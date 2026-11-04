# 🤖 OpenCode Go / DeepSeek v4 Pro & Flash 执行蓝图与分步指令集 (双模科普 + PGx + 隐私防幻觉增强版)
### AI Agent Step-by-Step Implementation Blueprint for DecodeGene

> **说明**: 本蓝图专为 **OpenCode Go**（搭载 **DeepSeek v4 Pro** 或 **DeepSeek v4 Flash**）设计。
> 全面覆盖**科研/科普双模统一 Schema、日常用药基因红绿灯 (PGx)、本地 PII 隐私脱敏器、医疗级防 AI 幻觉护栏、纯静态 Demo 构建模式 (`VITE_STATIC_DEMO=true`) 以及 Docker 一键全栈部署**。

---

## 🎯 模型推荐分配

- **DeepSeek v4 Pro**: 负责 **Task 1 (双模统一数据模型与 PGx 红绿灯模型)**、**Task 3 (本地 PII 隐私脱敏、后端业务与遗传算法)**、**Task 5 (内置防幻觉护栏的 AI 医学通俗化推理与报告翻译 Agent)**。
- **DeepSeek v4 Flash**: 负责 **Task 2 (OpenTargets/ClinVar/CPIC 数据 API 管道)**、**Task 4 (React 交互前端、PGx 红绿灯卡片与 `VITE_STATIC_DEMO` 静态离线模式)**、**Task 6 (自动化测试、Docker 容器化与一键启动)**。

---

## 📋 模块化任务拆解与 Prompt 清单

### 📌 Task 1: 基础工程、双模统一 Schema 与日常用药红绿灯模型 (Pydantic Schema)
**推荐模型**: `DeepSeek v4 Pro`

```markdown
### Prompt for Task 1:

你是生物医学信息学架构师与 Python 后端专家。请为面向大众科普与专业研究的开源项目 DecodeGene 初始化基础架构。

【需求】:
1. 在 `backend/` 目录下创建 `requirements.txt`:
   - fastapi, uvicorn, pydantic>=2.0, duckdb, httpx, aiohttp, rich, python-dotenv, pytest
2. 创建 `backend/app/core/config.py`:
   - 读取 DEEPSEEK_API_KEY, DATA_DIR, LOG_LEVEL, ZERO_RETENTION_MODE=True 等配置。
3. 创建 `backend/app/models/schema.py`，定义支持【🌱 小白科普模式】与【🔬 专业科研模式】的双模统一 Pydantic 模型：
   - `GeneEntity`: 包含专业字段 (`symbol`, `name`, `ensembl_id`, `entrez_id`, `biotype`, `chromosome`, `academic_summary`) 与科普字段 (`chinese_name`, `metaphor` 含 `title`/`story`, `plain_summary`)。
   - `PhenotypeHPO`: (`hpo_id`, `name`, `chinese_name`)
   - `TargetedDrug`: (`drug_name`, `chinese_name`, `mechanism`, `approval_status`)
   - `PGxDrugItem`: (`drug_name`, `chinese_name`, `traffic_light` 枚举 `RED_AVOID` / `YELLOW_CAUTION` / `GREEN_NORMAL`, `clinical_alert`, `cpic_level`)
   - `PharmacogenomicsGuide`: (`has_pgx`, `key_variant`, `population_frequency`, `traffic_light_summary`, `drugs_guide`: List[PGxDrugItem], `dietary_contraindications`: List[str]) —— 用于支撑日常用药红绿灯（禁用/慎用/常规使用）。
   - `DiseaseEntity`: (`id`, `name`, `chinese_name`, `categories`, `severity_badge`, `inheritance_mode`)
   - `GeneticReportQuery`: (`raw_text`, `scrubbed_text`, `detected_gene`, `detected_variant`, `zygosity`)
   - `DoctorChecklist`: (`specialty`, `questions`)
   - `FamilyInheritanceQuery` & `FamilyInheritanceResult`: (`pattern`, `father_status`, `mother_status`, `child_disease_risk_pct`, `child_carrier_risk_pct`, `plain_explanation`)
   - `GeneDiseaseAssociation`: 聚合上述全部专业字段（`phenotypes`, `drugs_targeted`, `evidence`）与大众科普字段（`lifestyle_prevention`, `pharmacogenomics`, `doctor_checklist`, `myth_buster`）。
4. 在 `backend/app/models/__init__.py` 导出以上模型。

请直接输出所有文件的完整高质量 Python 代码。
```

---

### 📌 Task 2: 数据摄取管道、CPIC 药物基因组接入与中英通俗化映射
**推荐模型**: `DeepSeek v4 Flash`

```markdown
### Prompt for Task 2:

请为 DecodeGene 编写数据摄取与通俗化标注管道。

【需求】:
1. 在 `pipeline/apis/opentargets.py`:
   - 异步从 Open Targets GraphQL 拉取靶点-疾病关联分、Ensembl ID、生物类型与靶向药管线。
2. 在 `pipeline/apis/clinvar.py`:
   - 从 ClinVar E-utilities 查询变异致病性，并将 Pathogenic 自动映射为中文通俗标签：`⚠️ 明确风险变异 (需医学关注)`，Benign 映射为 `✅ 良性变异 (无需担心)`，VUS 映射为 `❓ 意义未明变异 (持续研究中)`。
3. 在 `pipeline/apis/cpic_pgx.py`:
   - 对接 CPIC 开放 REST API (`https://api.cpicpgx.org/v1/`)，拉取 `ALDH2`, `G6PD`, `MTHFR`, `CYP2C19` 等基因的临床用药建议，自动映射为 `🔴 禁用/无效高危`、`🟡 慎用/减量监测`、`🟢 常规使用` 三色红绿灯。
4. 在 `pipeline/parsers/metaphors.py`:
   - 内置 7 大高频核心基因的生动生活比喻库（`BRCA1`: DNA 汽车维修工程师；`TP53`: 紧急制动刹车片/基因组保安；`APOE`: 大脑垃圾清运卡车；`EGFR`: 细胞表面生长油门踏板；`ALDH2`: 肝脏酒精解毒流水线二号工人；`G6PD`: 红细胞防氧化防弹衣；`MTHFR`: 人体叶酸加工厂转化机器）。
5. 在 `pipeline/run_pipeline.py`:
   - 校验并加载 `data/sample/demo_associations.json` 7 大基因完整双模数据。

请输出完整 Python 代码。
```

---

### 📌 Task 3: 本地 PII 隐私脱敏器、遗传概率计算器与 FastAPI 后端
**推荐模型**: `DeepSeek v4 Pro`

```markdown
### Prompt for Task 3:

请为 DecodeGene 实现支持隐私保护、大众科普与就医辅导的 FastAPI 后端。

【需求】:
1. 在 `backend/app/core/privacy.py` 实现本地 PII 个人隐私信息正则脱敏器 (`LocalPIIScrubber`):
   - 在任何基因检测报告文本发往云端大模型或进入日志前，自动通过正则与规则抹除：患者姓名、18位身份证号、手机号码、病历号/住院号、采样条码号、医院与检验所名称。
   - 仅提取并保留纯基因符号（如 `BRCA1`, `ALDH2`）、HGVS 变异表示（如 `c.5266dupC`, `p.Gln1756Profs`）、dbSNP 位点（如 `rs671`, `rs1801133`）及合子状态（杂合/纯合），且服务端默认零留存 (`ZERO_RETENTION_MODE=True`)。
2. 在 `backend/app/services/inheritance.py` 实现 `InheritanceCalculator`:
   - 支持常染色体显性 (AD)、常染色体隐性 (AR)、X 连锁不完全显性/隐性 (XD/XR，如 G6PD 蚕豆病) 遗传概率计算，输出子女患病/携带百分比及白话文解析。
3. 在 `backend/app/services/checklist.py` 实现 `ChecklistService`:
   - 根据基因与疾病，自动生成面向临床医生的《门诊就医提问清单》与筛查建议。
4. 在 `backend/app/core/database.py` 实现 DuckDB/SQLite FTS5 检索，加载 `data/sample/demo_associations.json` 7 大基因数据，支持中文疾病名、基因符号、rsID、药物名称与表型模糊匹配。
5. 在 `backend/app/api/v1/` 实现路由：
   - `GET /api/v1/genes/{symbol}` (支持 `?view=simple` 或 `?view=pro` 双模返回)
   - `GET /api/v1/search?q={query}` (即时联想，返回通俗中文标签与专业 ID)
   - `GET /api/v1/pgx/{symbol}` (返回日常用药基因红绿灯指南)
   - `POST /api/v1/report/scrub-and-decode` (先调用 `privacy.py` 本地脱敏，再返回报告解读)
   - `POST /api/v1/calculate/inheritance` (计算家族遗传概率)
   - `GET /api/v1/checklist/{gene_symbol}` (生成就医清单)
   - `GET /api/v1/myths` (返回热门基因谣言与科学辟谣清单)
6. 在 `backend/app/main.py` 整合并配置 CORS。

请输出完整代码。
```

---

### 📌 Task 4: React + Vite 双模前端、用药红绿灯组件与纯静态 Demo 构建模式
**推荐模型**: `DeepSeek v4 Flash`

```markdown
### Prompt for Task 4:

请为 DecodeGene 搭建兼顾普通大众与科研人员的现代化 React + Vite Web 前端。

【页面与组件规范】:
1. 顶部模式切换开关：`【🌱 小白科普模式】 ⇄ 【🔬 专业科研模式】`（科研模式额外渲染 Ensembl ID、Entrez ID、HPO 表型编码、Open Targets 评分、靶向药物与 Cytoscape.js 基因-表型-药物关系图谱）。
2. **支持纯静态 Demo 构建模式 (`VITE_STATIC_DEMO=true`)**:
   - 创建 `frontend/src/services/apiClient.js`：当检测到 `import.meta.env.VITE_STATIC_DEMO === 'true'` 或后端离线时，前端自动回退并直接读取内置的 `data/sample/demo_associations.json`（包含 BRCA1, TP53, APOE, EGFR, ALDH2, G6PD, MTHFR 7 大核心基因）及本地 JS 版遗传计算器/脱敏器运行。
   - 方便一键免费部署到 **GitHub Pages / Vercel / Netlify**，让任何 GitHub 访客点开链接就能在线交互体验！
3. `frontend/src/components/MetaphorCard.jsx`:
   - 用生动插画/图标展示基因的生活化比喻（如“DNA 汽车维修工”、“紧急制动刹车片”、“肝脏酒精解毒二号工人”、“红细胞防氧化防弹衣”）。
4. `frontend/src/components/PGxTrafficLightCard.jsx`:
   - **【新增】日常用药与体质红绿灯组件**：直观展示 🔴 禁用/无效高危（如 ALDH2 携带者舌下含服硝酸甘油无效警示、G6PD 蚕豆病禁用磺胺类/伯氨喹/蚕豆）、🟡 慎用/调整剂量（如 MTHFR 活性叶酸补充）、🟢 常规使用。
5. `frontend/src/components/ReportDecoder.jsx`:
   - 基因检测报告粘贴框，内置前端实时隐私脱敏预览（高亮显示已自动抹除的姓名/身份证号），展示客观解读、安抚提示、风险对比柱状图与行动指南。
6. `frontend/src/components/DoctorChecklistModal.jsx`:
   - 弹出精美可打印/一键复制到手机的《门诊提问清单》。
7. `frontend/src/components/FamilySimulator.jsx`:
   - 图形化交互家族树，支持 AD / AR / X-linked (如 G6PD) 父母状态勾选与下一代风险动态计算。
8. `frontend/src/components/MythBusterSection.jsx`:
   - 辟谣卡片网格。

请输出完整的前端代码。
```

---

### 📌 Task 5: 内置医疗级防幻觉护栏 (Anti-Hallucination) 的 DeepSeek AI 智能体
**推荐模型**: `DeepSeek v4 Pro`

```markdown
### Prompt for Task 5:

请为 DecodeGene 实现基于 DeepSeek v4 的大众基因科普、报告解读与心理安抚 AI Agent，并内置严格的医疗级防幻觉护栏。

【核心要求】:
1. 在 `backend/app/services/ai_reasoning.py` 实现 `DeepSeekPublicAgent`:
   - 输入文本必须先经过 `LocalPIIScrubber.scrub()` 强制脱敏。
   - **防幻觉铁律 (Anti-Hallucination Guardrails)**:
     ① **严格 RAG 事实绑定**：System Prompt 强制规定 AI 只能依据本地检索到的 ClinVar / Open Targets / CPIC / HPO 权威 JSON 证据作答，严禁自由编造突变致病性分类、药物剂量或筛查年龄。
     ② **未知位点熔断机制 (Circuit Breaker)**：若本地权威数据库未命中用户查询的生僻位点或基因，强制直接返回标准熔断响应：“当前权威数据库未收录该位点，为确保医疗安全，系统不做猜测性解读，请携带原始报告咨询临床遗传医师”，严禁大模型自行猜测。
     ③ **证据引用与 JEV 一致性校验 (`verify_response`)**：输出必须附带证据来源标识（如 `MONDO:0007254`, `CPIC Level A`, `Ensembl ID`），后处理校验器自动核对输出中的基因符号与数据库记录是否一致。
2. 基因检测报告自然语言翻译 (`explain_report`)：
   - 温和、客观、去焦虑化输出：① 到底测出了什么？ ② 会对我造成什么实际影响（区分易感风险与必然致病）？ ③ 日常用药红绿灯与饮食禁忌 ④ 接下来去医院挂什么科、问医生什么问题？
3. 强制附加医疗免责声明与医院遗传咨询科就诊指引。

请输出完整代码。
```

---

### 📌 Task 6: 自动化测试、Docker 容器化部署与一键启动脚本
**推荐模型**: `DeepSeek v4 Flash`

```markdown
### Prompt for Task 6:

请为 DecodeGene 编写自动化测试套件、Docker 容器化配置与一键启动脚本。

【需求】:
1. 编写 `backend/tests/test_core.py` (pytest 自动化测试):
   - 测试 `demo_associations.json` 7 大基因记录的双模 Schema 完整性与 ID 真实性校验。
   - 测试 `LocalPIIScrubber` 对姓名、身份证号、手机号、医院名称的 100% 抹除率，同时完整保留 `BRCA1 c.5266dupC` 等变异位点。
   - 测试未知位点触发防幻觉熔断机制。
   - 测试家族遗传概率计算器（AD / AR / X-linked）算式正确性。
2. 编写容器化部署文件：
   - 根目录 `Dockerfile`（多阶段构建前端静态资源与 Python FastAPI 运行时）与 `docker-compose.yml`，支持 `docker compose up --build` 一键启动全栈服务。
3. 编写根目录 `run_dev.py` 一键开发启动脚本。

请输出完整代码。
```
