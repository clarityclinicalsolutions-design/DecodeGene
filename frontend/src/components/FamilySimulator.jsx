import { useMemo, useState } from 'react';
import { calculateInheritance } from '../services/localEngine';

const PATTERNS_BY_LANG = {
  'zh-TW': [
    { id: 'AD', title: '體染色體顯性 AD', short: '一個致病等位基因即可致病', example: 'BRCA1 · TP53' },
    { id: 'AR', title: '體染色體隱性 AR', short: '雙份致病等位基因才致病', example: 'MTHFR · 多數代謝病' },
    { id: 'XD', title: 'X 連鎖顯性 XD', short: 'X 染色體上的顯性致病基因', example: '部分 X 連鎖症候群' },
    { id: 'XR', title: 'X 連鎖隱性 XR', short: '男性更易發病，女性多為攜帶者', example: 'G6PD 蠶豆症' },
  ],
  en: [
    { id: 'AD', title: 'Autosomal Dominant (AD)', short: 'One pathogenic allele can cause disease', example: 'BRCA1 · TP53' },
    { id: 'AR', title: 'Autosomal Recessive (AR)', short: 'Two pathogenic alleles required for disease', example: 'MTHFR · Metabolic disorders' },
    { id: 'XD', title: 'X-Linked Dominant (XD)', short: 'Dominant variant on the X chromosome', example: 'X-linked dominant syndromes' },
    { id: 'XR', title: 'X-Linked Recessive (XR)', short: 'Males more often affected; females often carriers', example: 'G6PD Favism' },
  ],
};

const STATUS_OPTIONS_BY_LANG = {
  'zh-TW': [
    { value: 'unaffected', label: '健康 / 未患病' },
    { value: 'carrier', label: '攜帶者' },
    { value: 'affected', label: '患病' },
  ],
  en: [
    { value: 'unaffected', label: 'Unaffected / Healthy' },
    { value: 'carrier', label: 'Carrier' },
    { value: 'affected', label: 'Affected' },
  ],
};

const RISK_LABELS_BY_LANG = {
  'zh-TW': { minimal: '極低風險', low: '低風險', moderate: '中等風險', high: '較高風險', very_high: '高風險' },
  en: { minimal: 'Minimal Risk', low: 'Low Risk', moderate: 'Moderate Risk', high: 'High Risk', very_high: 'Very High Risk' },
};

function RiskBar({ label, value, tone }) {
  return (
    <div className="risk-bar">
      <div className="risk-bar-head">
        <span>{label}</span>
        <strong>{Number(value).toFixed(1)}%</strong>
      </div>
      <div className="risk-track">
        <span className={`risk-fill ${tone}`} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
      </div>
    </div>
  );
}

export default function FamilySimulator({ lang = 'zh-TW' }) {
  const [pattern, setPattern] = useState('AD');
  const [fatherStatus, setFatherStatus] = useState('affected');
  const [motherStatus, setMotherStatus] = useState('unaffected');

  const result = useMemo(
    () =>
      calculateInheritance(
        { pattern, father_status: fatherStatus, mother_status: motherStatus },
        lang
      ),
    [pattern, fatherStatus, motherStatus, lang]
  );

  const patterns = PATTERNS_BY_LANG[lang] || PATTERNS_BY_LANG['zh-TW'];
  const statusOptions = STATUS_OPTIONS_BY_LANG[lang] || STATUS_OPTIONS_BY_LANG['zh-TW'];
  const riskLabels = RISK_LABELS_BY_LANG[lang] || RISK_LABELS_BY_LANG['zh-TW'];
  const isEn = lang === 'en';

  return (
    <section className="card simulator-card" id="family-simulator">
      <div className="card-eyebrow">
        {isEn ? '🧬 Mendelian & X-Linked Family Simulator' : '🧬 家族遺傳風險模擬器 · Family Simulator'}
      </div>
      <h2>
        {isEn ? 'What Are the Inheritance Probabilities for Future Children?' : '如果父母攜帶突變，孩子風險有多大？'}
      </h2>
      <p className="section-lead">
        {isEn
          ? 'Select an inheritance pattern and parental statuses to calculate expected child affected, carrier, and unaffected probabilities in real time (X-linked patterns are weighted 50/50 across sexes).'
          : '選擇遺傳模式與父母狀態，即時查看下一代的患病、攜帶與完全不受影響機率。X 連鎖模式已按男女各 50% 出生機率加權。'}
      </p>

      <div className="pattern-grid">
        {patterns.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`pattern-card${pattern === item.id ? ' active' : ''}`}
            onClick={() => setPattern(item.id)}
          >
            <span className="pattern-id">{item.id}</span>
            <strong>{item.title}</strong>
            <small>{item.short}</small>
            <em>{item.example}</em>
          </button>
        ))}
      </div>

      <div className="simulator-controls">
        <label className="field">
          <span>{isEn ? 'Father Status' : '父親狀態'}</span>
          <select value={fatherStatus} onChange={(event) => setFatherStatus(event.target.value)}>
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>{isEn ? 'Mother Status' : '母親狀態'}</span>
          <select value={motherStatus} onChange={(event) => setMotherStatus(event.target.value)}>
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <div className="risk-level">
          <span>{isEn ? 'Overall Risk Level' : '綜合風險等級'}</span>
          <strong className={`risk-${result.risk_level}`}>
            {riskLabels[result.risk_level] || result.risk_level}
          </strong>
        </div>
      </div>

      <div className="risk-grid">
        <RiskBar label={isEn ? 'Child Affected Risk' : '子女患病風險'} value={result.child_disease_risk_pct} tone="danger" />
        <RiskBar label={isEn ? 'Child Carrier Probability' : '子女成為攜帶者'} value={result.child_carrier_risk_pct} tone="caution" />
        <RiskBar label={isEn ? 'Completely Unaffected' : '完全不受影響'} value={result.child_unaffected_pct} tone="safe" />
      </div>

      <div className="explanation-box">
        <h3>{isEn ? '🗣️ Plain-Language Explanation' : '🗣️ 白話解釋'}</h3>
        <p>{result.plain_explanation}</p>
      </div>

      <div className="simulator-footnote">
        <span className="badge badge-ghost">{result.details?.pattern_label}</span>
        <span className="badge badge-ghost">
          {isEn
            ? `Father: ${result.details?.father_status_label} · Mother: ${result.details?.mother_status_label}`
            : `父親：${result.details?.father_status_label} · 母親：${result.details?.mother_status_label}`}
        </span>
      </div>
    </section>
  );
}
