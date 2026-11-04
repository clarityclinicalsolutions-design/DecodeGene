import { useState } from 'react';
import { decodeReport } from '../services/apiClient';
import { CircuitBreakerError } from '../services/localEngine';

const SAMPLES_BY_LANG = {
  'zh-TW': [
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

export default function ReportDecoder({ genes, lang = 'zh-TW' }) {
  const isEn = lang === 'en';
  const samples = SAMPLES_BY_LANG[lang] || SAMPLES_BY_LANG['zh-TW'];
  const removedLabels = REMOVED_LABELS_BY_LANG[lang] || REMOVED_LABELS_BY_LANG['zh-TW'];

  const [rawText, setRawText] = useState(SAMPLES_BY_LANG['zh-TW'][0].text);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const runDecode = async (text = rawText) => {
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const decoded = await decodeReport(text, genes, lang);
      setResult(decoded);
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

  const removedEntries = result
    ? Object.entries(result.removed_counts || {}).filter(([, count]) => count > 0)
    : [];

  return (
    <section className="card decoder-card" id="report-decoder">
      <div className="card-eyebrow">
        {isEn
          ? '📄 Local PII-Scrubbed Genetic Report Decoder'
          : '📄 基因報告隱私解碼器 · Report Decoder'}
      </div>
      <h2>
        {isEn
          ? 'Scrub Personal Identifiers Locally Before Decoding Your Report'
          : '先在本機抹掉隱私，再讀懂報告'}
      </h2>
      <p className="section-lead">
        {isEn
          ? 'Patient names, ID numbers, phone numbers, and hospital names are deterministically scrubbed locally in your browser/backend—only gene symbols, HGVS variants, and rsIDs enter the interpretation pipeline.'
          : '姓名、身分證、手機號、醫院名稱會在瀏覽器/本地後端內被確定性正規表示式脫敏，只有基因符號、HGVS 位點與 rsID 會進入解讀流程。'}
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

      <label className="field-label" htmlFor="report-input">
        {isEn ? 'Paste Raw Genetic Report Text' : '貼上原始基因檢測報告文本'}
      </label>
      <textarea
        id="report-input"
        className="report-textarea"
        value={rawText}
        onChange={(event) => setRawText(event.target.value)}
        rows={5}
        placeholder={
          isEn
            ? 'e.g., Patient Name: Jane Doe, ID: 110101199003071234, BRCA1 c.5266dupC Heterozygous'
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
            setResult(null);
            setError('');
          }}
        >
          {isEn ? 'Clear' : '清空'}
        </button>
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
                {isEn ? 'Gene: ' : '基因：'}
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

            <h4>{result.interpretation?.headline}</h4>
            <div className="interpretation-block">
              <h5>{isEn ? '① What Was Detected?' : '① 到底測出了什麼？'}</h5>
              <p>{result.interpretation?.what_is_it}</p>
            </div>
            <div className="interpretation-block">
              <h5>{isEn ? '② What Does It Mean for My Health?' : '② 會對我造成什麼實際影響？'}</h5>
              <p>{result.interpretation?.impact}</p>
            </div>

            {(result.interpretation?.pgx || []).length ? (
              <div className="interpretation-block">
                <h5>{isEn ? '③ Daily Medication & Diet Traffic Light' : '③ 日常用藥與飲食紅綠燈'}</h5>
                <div className="mini-light-list">
                  {result.interpretation.pgx.map((item) => (
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
                {(result.interpretation?.action || []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="interpretation-block">
              <h5>{isEn ? '⑤ Specialist Clinic & Questions to Ask' : '⑤ 去醫院掛什麼科、問什麼？'}</h5>
              <p className="specialty">🏥 {result.interpretation?.doctor_specialty}</p>
              <ul className="action-list">
                {(result.interpretation?.doctor_questions || []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <p className="variant-note">{result.interpretation?.variant_note}</p>
            <p className="disclaimer">{result.disclaimer}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
