# 💻 换机执行指南 (Instructions for Other Computer)

当你将本压缩包下载并在另一台电脑上解压后，请按照以下简明步骤操作：

---

## 🛠️ 第一步：用 OpenCode Go 打开工作区
1. 在另一台电脑上，打开 **OpenCode Go**（或 VS Code / Cursor / 终端）。
2. 点击 **File -> Open Folder**（打开文件夹），选择解压后的 `DecodeGene` 根目录。

---

## 🤖 第二步：项目已内置全部实现
Task 1 至 Task 6 的代码已全部完成并可直接运行，无需再次生成：
- **Task 1**: 双模 Pydantic Schema（含 `PharmacogenomicsGuide` 红绿灯模型）。
- **Task 2**: `pipeline/` Open Targets / ClinVar / CPIC 异步客户端与离线校验 CLI。
- **Task 3**: 本地 PII 脱敏器 (`privacy.py`)、遗传概率计算器、就医清单服务与完整 FastAPI REST API。
- **Task 4**: React + Vite 双模前端、PGx 红绿灯组件、报告解码器、家族模拟器，以及零构建 `frontend/standalone.html`。
- **Task 5**: 内置防幻觉熔断与严格 RAG 事实绑定的 `DeepSeekPublicAgent`（无 API Key 时自动使用本地确定性解读）。
- **Task 6**: `backend/tests/test_core.py`、`run_dev.py`、多阶段 `Dockerfile` 与 `docker-compose.yml`。

仍可在 [`docs/AI_EXECUTION_BLUEPRINT.md`](docs/AI_EXECUTION_BLUEPRINT.md) 查看原始设计蓝图。

---

## 🚀 第三步：校验与 3 种运行/部署方式

### 步骤 0：运行内置数据集与双模 Schema 校验（开箱即用，Fail-Closed）
无需额外配置，直接验证内置 7 大基因数据集与 Pydantic v2 强类型 Schema：
```bash
python -B scripts/validate_schema.py
```

### 方式 1：本地开发启动
```bash
# 一键拉起后端 + 前端（推荐）
python run_dev.py

# 或分别启动
pip install -r backend/requirements.txt
uvicorn backend.app.main:app --reload
cd frontend && npm install && npm run dev
```

### 方式 2：🐳 Docker 一键启动全栈服务（内置 `Dockerfile` & `docker-compose.yml`）
根目录已预置多阶段 `Dockerfile`（构建 React 静态资源 + 构建期自动执行 `validate_schema.py` 校验）与 `docker-compose.yml`（使用可选的 `./backend/.env` 配置），启动 Docker Desktop 后直接运行：
```bash
docker compose up --build
```
启动后即可访问：
- 前端 UI：`http://localhost:8000/app`
- API 文档：`http://localhost:8000/docs`
- 健康检查：`http://localhost:8000/health`

### 方式 3：🌐 纯静态 Demo 构建（免费部署到 GitHub Pages / Vercel / Netlify）
静态模式会加载内置的 7 大核心基因离线数据集，并在浏览器内完成 PII 脱敏与遗传概率计算，无需后端服务器：
```bash
cd frontend
npm run build:static
# 生成的 dist/ 静态目录可直接上传至 GitHub Pages、Vercel 或 Netlify 免费托管！
```
也可以直接双击打开 `frontend/standalone.html`，零构建、零依赖体验完整功能。

---

## 📦 项目核心交付文件导航
- 📄 `README.md` / `INSTRUCTIONS_FOR_OTHER_PC.md`: 项目主页、功能说明与换机运行指南。
- 🧩 `backend/app/models/schema.py`: 双模 Pydantic Schema（含 `TrafficLight` 与 `FamilyInheritanceQuery/Result`、`GeneticReportQuery`）。
- ⚙️ `backend/app/core/`: `config.py` 配置、`dataset.py` Fail-Closed 数据加载、`privacy.py` 本地 PII 脱敏器。
- 🔬 `backend/app/services/`: `inheritance.py` 遗传概率计算、`checklist.py` 就医清单、`search.py` 模糊检索、`ai_reasoning.py` 防幻觉 DeepSeek Agent。
- ⚡ `backend/app/main.py`: 完整 REST API（`/health`、`/api/v1/genes`、`/api/v1/search`、`/api/v1/pgx/{symbol}`、`/api/v1/calculate/inheritance`、`/api/v1/checklist/{symbol}`、`/api/v1/myths`、`/api/v1/report/scrub-and-decode`）。
- 🧪 `backend/tests/test_core.py`: 40 项自动化测试（Schema、脱敏、遗传概率、全部端点、防幻觉熔断）。
- 📡 `pipeline/`: Open Targets / ClinVar / CPIC 异步客户端、通俗化比喻库与 `run_pipeline.py --verify`。
- 🎨 `frontend/`: React + Vite 双模前端、PGx 红绿灯、报告解码器、家族模拟器、就医清单、辟谣网格；`standalone.html` 为零构建离线版。
- 🧪 `scripts/validate_schema.py`: 确定性数据集 Schema 与生物医学 ID 自动化校验脚本。
- 🚀 `run_dev.py`: 一键拉起前后端开发服务器。
- 🐳 `Dockerfile` & `docker-compose.yml`: 多阶段全栈容器化构建（前端静态资源 + FastAPI）。
- 📜 `LICENSE` & `.gitignore`: MIT 开源许可证与 Git 忽略规则配置。
- 💾 `data/sample/demo_associations.json`: 双模统一 Schema 精选离线数据集，完整收录 **7 大核心基因**：
  1. `BRCA1`（乳腺癌/卵巢癌综合征 & PARP 抑制剂靶向药）
  2. `TP53`（李-佛美尼综合征 & 电离辐射规避/全身早筛）
  3. `APOE`（阿尔茨海默病风险 & 脑健康管理）
  4. `EGFR`（非小细胞肺癌 & 奥希替尼/吉非替尼精准靶向）
  5. `ALDH2`（饮酒脸红/乙醛脱氢酶缺乏 & **心绞痛急救药硝酸甘油无效警示**）
  6. `G6PD`（蚕豆病/红细胞溶血 & **蚕豆/磺胺类/伯氨喹/樟脑禁用红绿灯清单**）
  7. `MTHFR`（叶酸代谢障碍/H型高血压风险 & **孕期活性叶酸补充与脑卒中预防**）

