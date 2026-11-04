import { t } from '../i18n/translations';

export default function MetaphorCard({ record, mode, lang = 'zh-TW' }) {
  const gene = record.gene;

  return (
    <article className="card metaphor-card">
      <div className="card-eyebrow">{t(lang, 'metaphorEyebrow')}</div>
      <h2>{gene.metaphor.title}</h2>
      <p className="story">{gene.metaphor.story}</p>

      <div className="divider" />

      <p className="plain-summary">{gene.plain_summary}</p>
      {mode === 'pro' ? <p className="academic-summary">{gene.academic_summary}</p> : null}

      <div className="badge-row">
        <span className="badge badge-disease">{record.disease.chinese_name}</span>
        <span className="badge badge-warn">{record.disease.severity_badge}</span>
        <span className="badge badge-ghost">{record.disease.inheritance_mode}</span>
      </div>
    </article>
  );
}

