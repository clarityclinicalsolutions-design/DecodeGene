import { useMemo, useState } from 'react';
import { t } from '../i18n/translations';

export default function MythBusterSection({ genes, activeSymbol, lang = 'zh-TW' }) {
  const [expanded, setExpanded] = useState(false);
  const isEn = lang === 'en';

  const orderedGenes = useMemo(() => {
    const active = genes.find((record) => record.gene.symbol === activeSymbol);
    const rest = genes.filter((record) => record.gene.symbol !== activeSymbol);
    return active ? [active, ...rest] : genes;
  }, [genes, activeSymbol]);

  const visibleGenes = expanded ? orderedGenes : orderedGenes.slice(0, 6);

  return (
    <section className="card myths-card" id="myths">
      <div className="panel-head">
        <div>
          <div className="card-eyebrow">{t(lang, 'mythsEyebrow')}</div>
          <h2>{t(lang, 'mythsTitle')}</h2>
        </div>
        {orderedGenes.length > 6 ? (
          <button
            type="button"
            className="ghost-button"
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded
              ? isEn
                ? 'Show Featured (6)'
                : '僅顯示精選 (6)'
              : isEn
                ? `Show All (${orderedGenes.length})`
                : `展開全部 (${orderedGenes.length})`}
          </button>
        ) : null}
      </div>
      <p className="section-lead">{t(lang, 'mythsLead')}</p>

      <div className="myth-grid">
        {visibleGenes.map((record) => {
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

