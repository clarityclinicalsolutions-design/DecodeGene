import { t } from '../i18n/translations';

export default function LifestyleCard({ record, lang = 'zh-TW' }) {
  const lifestyle = record.lifestyle_prevention;
  return (
    <article className="card lifestyle-card">
      <div className="card-eyebrow">{t(lang, 'lifestyleEyebrow')}</div>
      <h2>{t(lang, 'lifestyleTitle')}</h2>
      <div className="screening-box">
        <span className="screening-icon" aria-hidden="true">🩺</span>
        <div>
          <strong>{t(lang, 'lifestyleScreeningLabel')}</strong>
          <p>{lifestyle.screening_advice}</p>
        </div>
      </div>
      <ul className="tip-list">
        {(lifestyle.lifestyle_tips || []).map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
    </article>
  );
}

