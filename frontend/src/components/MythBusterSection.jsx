import { t } from '../i18n/translations';

export default function MythBusterSection({ genes, activeSymbol, lang = 'zh-TW' }) {
  return (
    <section className="card myths-card" id="myths">
      <div className="card-eyebrow">{t(lang, 'mythsEyebrow')}</div>
      <h2>{t(lang, 'mythsTitle')}</h2>
      <p className="section-lead">{t(lang, 'mythsLead')}</p>

      <div className="myth-grid">
        {genes.map((record) => {
          const active = record.gene.symbol === activeSymbol;
          return (
            <article key={record.gene.symbol} className={`myth-card${active ? ' active' : ''}`}>
              <div className="myth-head">
                <span className="myth-gene">{record.gene.symbol}</span>
                <span className="myth-gene-name">{record.gene.chinese_name}</span>
              </div>
              <div className="myth-block myth">
                <span className="myth-label">{t(lang, 'mythLabel')}</span>
                <p>{record.myth_buster.myth}</p>
              </div>
              <div className="myth-block truth">
                <span className="myth-label">{t(lang, 'truthLabel')}</span>
                <p>{record.myth_buster.truth}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

