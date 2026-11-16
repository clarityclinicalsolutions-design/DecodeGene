import { useMemo, useRef, useState } from 'react';
import { decodeReport } from '../services/apiClient';
import {
  buildPgxPassport,
  buildSingleGeneInterpretation,
  CircuitBreakerError,
  extractRelevantLinesForUpload,
  findAllMatchedRecords,
} from '../services/localEngine';

const SAMPLES_BY_LANG = {
  'zh-TW': [
    {
      label: '💳 綜合樣本 · 多基因用藥安全護照',
      text: '患者姓名：林志明 身分證：A123456789 手機：0912345678 就診於臺大醫院 病歷號：MRN-202688；檢出 CYP2C19 *2/*2 慢代謝型、HLA-B*15:02 陽性、SLCO1B1 c.521T>C 雜合與 ALDH2 rs671 雜合變異。',
    },
    {
      label: '測試樣本 1 · BRCA1',
      text: '測試樣本1：張三(身分證110101199003071234) BRCA1 c.5266dupC 雜合致病變異',
    },
    {
      label: '測試樣本 2 · ALDH2',
      text: '測試樣本2：李四(手機13800138000) ALDH2 rs671 雜合突變',
    },
    {
      label: '測試樣本 3 · MTHFR',
      text: '患者姓名：王五 手機：13800138000 就診於臺大醫院 病歷號：MRN-998877 檢測到 MTHFR rs1801133 TT 純合',
    },
    {
      label: '測試樣本 4 · CYP2C19',
      text: '測試樣本4：陳小明(身分證A123456789) CYP2C19 *2/*2 慢代謝型',
    },
    {
      label: '測試樣本 5 · HLA-B',
      text: '測試樣本5：林美華(手機0912345678) HLA-B*15:02 陽性',
    },
  ],
  en: [
    {
      label: '💳 Multi-Gene PGx Passport Sample',
      text: 'Patient Name: Alex Lin, ID: A123456789, Mobile: 0912345678, Hospital: National Medical Center, MRN: MRN-202688. Detected: CYP2C19 *2/*2 Poor Metabolizer, HLA-B*15:02 Positive, SLCO1B1 c.521T>C Heterozygous, ALDH2 rs671 Heterozygous.',
    },
    {
      label: 'Sample 1 · BRCA1',
      text: 'Patient Name: Jane Doe, ID: 110101199003071234, BRCA1 c.5266dupC Heterozygous pathogenic variant',
    },
    {
      label: 'Sample 2 · ALDH2',
      text: 'Patient Name: John Chen, Mobile: 13800138000, ALDH2 rs671 Heterozygous variant',
    },
    {
      label: 'Sample 3 · MTHFR',
      text: 'Patient Name: Alex Wang, Hospital: General Medical Center, MRN: MRN-998877, MTHFR rs1801133 TT Homozygous',
    },
    {
      label: 'Sample 4 · CYP2C19',
      text: 'Patient Name: Kevin Lin, ID: A123456789, CYP2C19 *2/*2 Poor Metabolizer',
    },
    {
      label: 'Sample 5 · HLA-B',
      text: 'Patient Name: Mei-Hua Lin, Mobile: 0912345678, HLA-B*15:02 Positive',
    },
  ],
};

const QUICK_PASSPORT_GENES = [
  'CYP2C19', 'CYP2D6', 'CYP2C9', 'VKORC1', 'CYP4F2',
  'SLCO1B1', 'ABCG2', 'HLA-B', 'HLA-A', 'TPMT',
  'NUDT15', 'DPYD', 'UGT1A1', 'ALDH2', 'G6PD',
  'RYR1', 'CACNA1S', 'CYP2B6', 'NAT2',
];

const REMOVED_LABELS_BY_LANG = {
  'zh-TW': {
    name: '姓名',
    id_number: '身分證號',
    mobile: '手機號',
    phone: '聯絡電話',
    record_number: '病歷號',
    hospital: '醫院名稱',
  },
  en: {
    name: 'Name',
    id_number: 'ID Number',
    mobile: 'Mobile',
    phone: 'Phone',
    record_number: 'Record ID',
    hospital: 'Hospital',
  },
};

const LIGHT_ICON = {
  RED_AVOID: '🔴',
  YELLOW_CAUTION: '🟡',
  GREEN_NORMAL: '🟢',
};

function HighlightedScrub({ text }) {
  const parts = String(text || '').split(/(\[[^\]]*(?:已脫敏|已脱敏)\])/g);
  return (
    <p className="scrubbed-text">
      {parts.map((part, index) =>
        part.startsWith('[') && (part.includes('已脫敏') || part.includes('已脱敏')) ? (
          <mark key={`${part}-${index}`}>{part}</mark>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        )
      )}
    </p>
  );
}

function PgxPassportPanel({ passport, isEn }) {
  const [copied, setCopied] = useState(false);

  if (!passport || !passport.totalGenes) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(passport.copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="passport-panel">
      <div className="panel-head">
        <div>
          <h3>
            {isEn
              ? '💳 Personal Medication Safety Passport (Cross-Gene)'
              : '💳 個人門診用藥安全護照（跨基因合併警示）'}
          </h3>
          <p className="passport-meta">
            {isEn
              ? `Covered genes (${passport.totalGenes}) · Avoid ${passport.redCount} · Caution ${passport.yellowCount} · Standard ${passport.greenCount}`
              : `已彙整 ${passport.totalGenes} 個基因 · 🔴 禁用 ${passport.redCount} 項 · 🟡 慎用 ${passport.yellowCount} 項 · 🟢 常規 ${passport.greenCount} 項`}
          </p>
        </div>
        <div className="passport-actions">
          <button type="button" className="sample-button" onClick={handleCopy}>
            {copied
              ? isEn
                ? '✅ Copied'
                : '✅ 已複製'
              : isEn
                ? '📋 Copy Passport'
                : '📋 一鍵複製護照'}
          </button>
          <button
            type="button"
            className="sample-button"
            onClick={() => {
              document.body.classList.add('printing-passport');
              window.print();
              setTimeout(() => document.body.classList.remove('printing-passport'), 500);
            }}
          >
            {isEn ? '🖨️ Print' : '🖨️ 列印'}
          </button>
        </div>
      </div>

      {passport.items.length ? (
        <div className="passport-list">
          {passport.items.map((item) => (
            <div
              key={`${item.traffic_light}-${item.drug_name}`}
              className={`passport-item light-${item.traffic_light.toLowerCase()}`}
            >
              <span className="passport-icon">{LIGHT_ICON[item.traffic_light] || '🟡'}</span>
              <div className="passport-body">
                <div className="passport-title-row">
                  <strong>{item.chinese_name}</strong>
                  <span className="passport-gene-tags">
                    {item.sourceGenes.map((sym) => (
                      <code key={sym}>{sym}</code>
                    ))}
                  </span>
                </div>
                <p>{item.clinical_alert}</p>
                <small>{item.cpic_level}</small>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-note">
          {isEn
            ? 'Selected genes are hereditary screening or wellness traits without direct CPIC drug contraindications.'
            : '所選基因皆為遺傳篩檢或體質基因，目前無直接 CPIC 藥物紅綠燈限制。'}
        </p>
      )}

      {passport.nonPgxGenes.length ? (
        <p className="passport-note">
          {isEn
            ? `Non-PGx screening/trait genes included: ${passport.nonPgxGenes.join(', ')}`
            : `同時檢出非藥物代謝之篩檢／體質基因：${passport.nonPgxGenes.join('、')}`}
        </p>
      ) : null}
    </div>
  );
}

export default function ReportDecoder({ genes, lang = 'zh-TW' }) {
  const isEn = lang === 'en';
  const samples = SAMPLES_BY_LANG[lang] || SAMPLES_BY_LANG['zh-TW'];
  const removedLabels = REMOVED_LABELS_BY_LANG[lang] || REMOVED_LABELS_BY_LANG['zh-TW'];

  const [rawText, setRawText] = useState(SAMPLES_BY_LANG['zh-TW'][0].text);
  const [result, setResult] = useState(null);
  const [selectedGeneTab, setSelectedGeneTab] = useState('');
  const [quickSelected, setQuickSelected] = useState([]);
  const [uploadNote, setUploadNote] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleReportFile = async (file) => {
    if (!file) return;
    setUploadNote('');
    try {
      // Only read up to 2 MB locally in-browser so large DNA dumps stay fast and private.
      const slice = file.size > 2 * 1024 * 1024 ? file.slice(0, 2 * 1024 * 1024) : file;
      const rawFileText = await slice.text();
      const extracted = extractRelevantLinesForUpload(rawFileText, genes, 8000);
      setRawText(extracted);
      setUploadNote(
        isEn
          ? `Loaded locally from "${file.name}" (${extracted.length.toLocaleString()} chars scanned offline—zero server upload).`
          : `已於本機瀏覽器讀取「${file.name}」（截取相關位點 ${extracted.length.toLocaleString()} 字元，完全未上傳伺服器）。`
      );
      await runDecode(extracted);
    } catch {
      setError(isEn ? 'Could not read that file as plain text.' : '無法以純文字格式讀取該檔案，請改貼文本內容。');
    }
  };

  const runDecode = async (text = rawText) => {
    setLoading(true);
    setError('');
    setResult(null);
    setSelectedGeneTab('');
    try {
      const decoded = await decodeReport(text, genes, lang);
      setResult(decoded);
      setSelectedGeneTab(decoded.gene?.symbol || decoded.detected?.genes?.[0] || '');
    } catch (err) {
      if (err instanceof CircuitBreakerError || err.status === 404) {
        setError(err.detail || err.message);
      } else {
        setError(err.message || (isEn ? 'Decoding failed. Please try again.' : '解碼失敗，請稍後重試。'));
      }
    } finally {
      setLoading(false);
    }
  };

  const matchedRecords = useMemo(() => {
    if (!result) return [];
    const found = findAllMatchedRecords(genes, result.detected || {});
    if (found.length) return found;
    const primarySym = result.gene?.symbol;
    const primaryRec = genes.find((rec) => rec.gene.symbol === primarySym);
    return primaryRec ? [primaryRec] : [];
  }, [result, genes]);

  const passportFromReport = useMemo(
    () => buildPgxPassport(matchedRecords, lang),
    [matchedRecords, lang]
  );

  const quickPassport = useMemo(() => {
    if (!quickSelected.length) return null;
    const selectedRecords = genes.filter((rec) => quickSelected.includes(rec.gene.symbol));
    return buildPgxPassport(selectedRecords, lang);
  }, [quickSelected, genes, lang]);

  const activeInterpretation = useMemo(() => {
    if (!result) return null;
    const targetSym = selectedGeneTab || result.gene?.symbol;
    if (result.matched_interpretations?.[targetSym]) {
      return result.matched_interpretations[targetSym];
    }
    if (targetSym && targetSym !== result.gene?.symbol) {
      const rec = matchedRecords.find((item) => item.gene.symbol === targetSym);
      if (rec) {
        return buildSingleGeneInterpretation(rec, result.detected || {}, lang);
      }
    }
    return result.interpretation;
  }, [result, selectedGeneTab, matchedRecords, lang]);

  const removedEntries = result
    ? Object.entries(result.removed_counts || {}).filter(([, count]) => count > 0)
    : [];

  const toggleQuickGene = (symbol) => {
    setQuickSelected((prev) =>
      prev.includes(symbol) ? prev.filter((item) => item !== symbol) : [...prev, symbol]
    );
  };

  return (
    <section className="card decoder-card" id="report-decoder">
      <div className="card-eyebrow">
        {isEn
          ? '📄 Local PII-Scrubbed Genetic Report Decoder & PGx Passport'
          : '📄 基因報告隱私解碼器 & 個人用藥安全護照 · Report Decoder'}
      </div>
      <h2>
        {isEn
          ? 'Scrub Personal Identifiers Locally & Build Your Medication Passport'
          : '先在本機抹掉隱私，再產生跨基因用藥安全護照'}
      </h2>
      <p className="section-lead">
        {isEn
          ? 'Patient names, ID numbers, phone numbers, and hospital names are deterministically scrubbed locally in your browser/backend—supporting multi-gene panels with aggregated Red/Yellow/Green drug safety alerts.'
          : '姓名、身分證、手機號、醫院名稱會在瀏覽器/本地後端內被確定性正規表示式脫敏；支援一次貼上多基因檢測報告，自動彙整跨基因「紅／黃／綠燈」門診用藥護照。'}
      </p>

      <div className="sample-row">
        {samples.map((sample) => (
          <button
            key={sample.label}
            type="button"
            className="sample-button"
            onClick={() => {
              setRawText(sample.text);
              runDecode(sample.text);
            }}
          >
            {sample.label}
          </button>
        ))}
      </div>

      <div
        className={`upload-dropzone${isDragging ? ' dragging' : ''}`}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setIsDragging(false);
          const dropped = event.dataTransfer?.files?.[0];
          if (dropped) handleReportFile(dropped);
        }}
      >
        <span>
          {uploadNote
            ? uploadNote
            : isEn
              ? '📁 Drag & drop or choose a .txt / .csv / .tsv report file (parsed 100% locally in your browser)'
              : '📁 拖曳或選擇本機 .txt / .csv / .tsv 報告或原始 DNA 文字檔（100% 於瀏覽器端掃描，不上傳伺服器）'}
        </span>
        <input
          ref={fileInputRef}
          type="file"
          accept=".txt,.csv,.tsv,.log,text/plain,text/csv"
          hidden
          onChange={(event) => {
            const picked = event.target.files?.[0];
            if (picked) handleReportFile(picked);
            event.target.value = '';
          }}
        />
        <button
          type="button"
          className="sample-button"
          onClick={() => fileInputRef.current?.click()}
        >
          {isEn ? 'Choose Local File' : '選擇本機檔案'}
        </button>
      </div>

      <label className="field-label" htmlFor="report-input">
        {isEn ? 'Paste Raw Genetic Report Text (Single or Multi-Gene)' : '貼上原始基因檢測報告文本（支援單基因或多基因報告）'}
      </label>
      <textarea
        id="report-input"
        className="report-textarea"
        value={rawText}
        onChange={(event) => setRawText(event.target.value)}
        rows={5}
        placeholder={
          isEn
            ? 'e.g., Patient Name: Jane Doe, ID: 110101199003071234, CYP2C19 *2/*2, HLA-B*15:02 Positive'
            : '例如：測試樣本1：張三(身分證110101199003071234) BRCA1 c.5266dupC 雜合致病變異'
        }
      />

      <div className="action-row">
        <button
          type="button"
          className="primary-button"
          onClick={() => runDecode()}
          disabled={loading || !rawText.trim()}
        >
          {loading
            ? isEn
              ? 'Scrubbing PII & Decoding…'
              : '正在本地脫敏並解讀…'
            : isEn
              ? '🔒 Scrub PII Locally & Decode'
              : '🔒 本地脫敏並解讀'}
        </button>
        <button
          type="button"
          className="ghost-button"
          onClick={() => {
            setRawText('');
            setUploadNote('');
            setResult(null);
            setError('');
          }}
        >
          {isEn ? 'Clear' : '清空'}
        </button>
      </div>

      <div className="quick-passport-builder">
        <div className="panel-head">
          <span className="field-label">
            {isEn
              ? '💊 Quick PGx Passport Builder (Click genes you carry to merge drug warnings):'
              : '💊 快速點選自建用藥安全護照（勾選已知變異基因，即時合併跨基因用藥警示）：'}
          </span>
          {quickSelected.length ? (
            <button type="button" className="search-clear" onClick={() => setQuickSelected([])}>
              {isEn ? 'Reset Selection' : '重設勾選'}
            </button>
          ) : null}
        </div>
        <div className="quick-gene-pills">
          {QUICK_PASSPORT_GENES.map((sym) => {
            const active = quickSelected.includes(sym);
            return (
              <button
                key={sym}
                type="button"
                className={`sample-button${active ? ' active' : ''}`}
                onClick={() => toggleQuickGene(sym)}
              >
                {active ? '✓ ' : '+ '}
                {sym}
              </button>
            );
          })}
        </div>
        {quickPassport ? <PgxPassportPanel passport={quickPassport} isEn={isEn} /> : null}
      </div>

      {error ? (
        <div className="circuit-breaker" role="alert">
          <span className="cb-icon" aria-hidden="true">🛑</span>
          <div>
            <strong>
              {isEn
                ? 'Safety Circuit Breaker: Zero Speculative Interpretation'
                : '安全熔斷：不做猜測性解讀'}
            </strong>
            <p>{error}</p>
            <small>
              {isEn
                ? 'Please bring your original report to an accredited clinical genetics clinic.'
                : '請攜帶原始報告前往正規醫院臨床遺傳門診就診。'}
            </small>
          </div>
        </div>
      ) : null}

      {result ? (
        <>
          <div className="decoder-result">
            <div className="privacy-panel">
              <div className="panel-head">
                <h3>{isEn ? '🔒 Local PII Scrubber Output' : '🔒 隱私脫敏結果'}</h3>
                <span className={`source-pill ${result._source === 'backend' ? 'source-backend' : 'source-demo'}`}>
                  {result._source === 'backend'
                    ? isEn
                      ? 'Backend Local Engine'
                      : '後端本地引擎'
                    : isEn
                      ? 'Browser Local Engine'
                      : '瀏覽器本地引擎'}
                </span>
              </div>
              <HighlightedScrub text={result.scrubbed_text} />
              <div className="removed-row">
                {removedEntries.length ? (
                  removedEntries.map(([key, count]) => (
                    <span key={key} className="removed-chip">
                      {removedLabels[key] || key} × {count}
                    </span>
                  ))
                ) : (
                  <span className="removed-chip muted">
                    {isEn ? 'No PII detected' : '未檢測到可識別的 PII'}
                  </span>
                )}
              </div>
              <div className="detected-row">
                <span className="detected-chip">
                  {isEn ? 'Genes: ' : '檢出基因：'}
                  {(result.detected?.genes || []).join(', ') || '—'}
                </span>
                <span className="detected-chip">
                  {isEn ? 'Variant: ' : '位點：'}
                  {(result.detected?.variants || []).join(', ') || '—'}
                </span>
                <span className="detected-chip">
                  rsID：{(result.detected?.rsids || []).join(', ') || '—'}
                </span>
                <span className="detected-chip">
                  {isEn ? 'Zygosity: ' : '合子：'}
                  {result.detected?.zygosity || '—'}
                </span>
              </div>
            </div>

            <div className="interpretation-panel">
              <div className="panel-head">
                <h3>{isEn ? '💡 Empathetic Clinical Interpretation' : '💡 去焦慮化解讀'}</h3>
                <span className="source-pill">
                  {result.ai_source === 'deepseek'
                    ? isEn
                      ? 'DeepSeek Grounded'
                      : 'DeepSeek 增強'
                    : isEn
                      ? 'Deterministic Local Rule Engine'
                      : '本地權威規則引擎'}
                </span>
              </div>

              {matchedRecords.length > 1 ? (
                <div className="detected-gene-tabs" role="tablist" aria-label="Matched Genes">
                  {matchedRecords.map((rec) => {
                    const sym = rec.gene.symbol;
                    const active = (selectedGeneTab || result.gene?.symbol) === sym;
                    return (
                      <button
                        key={sym}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        className={`sample-button${active ? ' active' : ''}`}
                        onClick={() => setSelectedGeneTab(sym)}
                      >
                        {sym} · {rec.gene.chinese_name}
                      </button>
                    );
                  })}
                </div>
              ) : null}

              <h4>{activeInterpretation?.headline}</h4>
              <div className="interpretation-block">
                <h5>{isEn ? '① What Was Detected?' : '① 到底測出了什麼？'}</h5>
                <p>{activeInterpretation?.what_is_it}</p>
              </div>
              <div className="interpretation-block">
                <h5>{isEn ? '② What Does It Mean for My Health?' : '② 會對我造成什麼實際影響？'}</h5>
                <p>{activeInterpretation?.impact}</p>
              </div>

              {(activeInterpretation?.pgx || []).length ? (
                <div className="interpretation-block">
                  <h5>{isEn ? '③ Daily Medication & Diet Traffic Light' : '③ 日常用藥與飲食紅綠燈'}</h5>
                  <div className="mini-light-list">
                    {activeInterpretation.pgx.map((item) => (
                      <div key={`${item.drug_name}-${item.traffic_light}`} className="mini-light">
                        <span>{LIGHT_ICON[item.traffic_light] || '🟡'}</span>
                        <div>
                          <strong>{item.chinese_name}</strong>
                          <p>{item.clinical_alert}</p>
                          <small>{item.cpic_level}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="interpretation-block">
                <h5>{isEn ? '④ Recommended Next Steps' : '④ 接下來該怎麼做？'}</h5>
                <ul className="action-list">
                  {(activeInterpretation?.action || []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="interpretation-block">
                <h5>{isEn ? '⑤ Specialist Clinic & Questions to Ask' : '⑤ 去醫院掛什麼科、問什麼？'}</h5>
                <p className="specialty">🏥 {activeInterpretation?.doctor_specialty}</p>
                <ul className="action-list">
                  {(activeInterpretation?.doctor_questions || []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <p className="variant-note">{activeInterpretation?.variant_note}</p>
              <p className="disclaimer">{result.disclaimer}</p>
            </div>
          </div>

          <PgxPassportPanel passport={passportFromReport} isEn={isEn} />
        </>
      ) : null}
    </section>
  );
}
