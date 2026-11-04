import { t } from '../i18n/translations';

const LIGHT_META_BY_LANG = {
  'zh-TW': {
    RED_AVOID: {
      icon: '🔴',
      label: '禁用 / 無效高危',
      className: 'light-red',
      advice: '請主動出示給醫師與藥師，避免使用或提前準備替代方案。',
    },
    YELLOW_CAUTION: {
      icon: '🟡',
      label: '慎用 / 需監測',
      className: 'light-yellow',
      advice: '需在醫師指導下調整劑量、更換劑型或加密監測。',
    },
    GREEN_NORMAL: {
      icon: '🟢',
      label: '常規 / 敏感獲益',
      className: 'light-green',
      advice: '可按常規方案使用，但仍需遵醫囑並關注個體反應。',
    },
  },
  en: {
    RED_AVOID: {
      icon: '🔴',
      label: 'Avoid / High Risk',
      className: 'light-red',
      advice: 'Show this alert to your doctor and pharmacist; avoid use or prepare an alternative.',
    },
    YELLOW_CAUTION: {
      icon: '🟡',
      label: 'Caution / Monitor',
      className: 'light-yellow',
      advice: 'Adjust dosage, switch formulation, or intensify monitoring under medical guidance.',
    },
    GREEN_NORMAL: {
      icon: '🟢',
      label: 'Normal / Sensitive',
      className: 'light-green',
      advice: 'Use standard dosing as prescribed while monitoring individual clinical response.',
    },
  },
};

export default function PGxTrafficLightCard({ record, lang = 'zh-TW' }) {
  const pgx = record.pharmacogenomics;
  const lights = pgx.drugs_guide || [];
  const metaMap = LIGHT_META_BY_LANG[lang] || LIGHT_META_BY_LANG['zh-TW'];

  return (
    <article className="card pgx-card">
      <div className="card-eyebrow">{t(lang, 'pgxEyebrow')}</div>
      <h2>{t(lang, 'pgxTitle')}</h2>
      <p className="pgx-summary">{pgx.traffic_light_summary}</p>

      <div className="pgx-meta">
        <span className="badge badge-ghost">
          {t(lang, 'pgxVariantLabel')}
          {pgx.key_variant}
        </span>
        <span className="badge badge-ghost">
          {t(lang, 'pgxFreqLabel')}
          {pgx.population_frequency}
        </span>
      </div>

      <div className="light-list">
        {lights.map((item) => {
          const meta = metaMap[item.traffic_light] || metaMap.YELLOW_CAUTION;
          return (
            <div key={`${item.drug_name}-${item.traffic_light}`} className={`light-item ${meta.className}`}>
              <div className="light-head">
                <span className="light-icon" aria-hidden="true">{meta.icon}</span>
                <div>
                  <strong>{item.chinese_name}</strong>
                  <small>{item.drug_name}</small>
                </div>
                <span className="light-pill">{meta.label}</span>
              </div>
              <p className="light-alert">{item.clinical_alert}</p>
              <div className="light-foot">
                <span className="evidence-tag">{item.cpic_level}</span>
                <span className="light-advice">{meta.advice}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="diet-block">
        <h3>{t(lang, 'pgxDietTitle')}</h3>
        <ul>
          {(pgx.dietary_contraindications || []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

