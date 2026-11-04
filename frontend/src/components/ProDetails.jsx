import { t } from '../i18n/translations';

function Metric({ label, value, suffix = '' }) {
  const numeric = Number(value);
  const pct = Number.isFinite(numeric) ? Math.min(100, Math.max(0, numeric * 100)) : 0;
  return (
    <div className="metric">
      <div className="metric-head">
        <span>{label}</span>
        <strong>
          {value}
          {suffix}
        </strong>
      </div>
      <div className="metric-track">
        <span style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function ProDetails({ record, lang = 'zh-TW' }) {
  const gene = record.gene;
  const disease = record.disease;
  const evidence = record.evidence;

  return (
    <section className="card pro-card">
      <div className="card-eyebrow">{t(lang, 'proEyebrow')}</div>
      <h2>{t(lang, 'proTitle')}</h2>

      <div className="id-grid">
        <div className="id-item">
          <span>Ensembl ID</span>
          <strong>{gene.ensembl_id}</strong>
        </div>
        <div className="id-item">
          <span>Entrez ID</span>
          <strong>{gene.entrez_id}</strong>
        </div>
        <div className="id-item">
          <span>MONDO</span>
          <strong>{disease.id}</strong>
        </div>
        <div className="id-item">
          <span>{t(lang, 'proChromosome')}</span>
          <strong>{gene.chromosome}</strong>
        </div>
        <div className="id-item">
          <span>Biotype</span>
          <strong>{gene.biotype}</strong>
        </div>
        <div className="id-item">
          <span>{t(lang, 'proInheritance')}</span>
          <strong>{disease.inheritance_mode}</strong>
        </div>
      </div>

      <div className="pro-section">
        <h3>{t(lang, 'proHpoTitle')}</h3>
        <div className="tag-wrap">
          {record.phenotypes.map((phenotype) => (
            <span key={phenotype.hpo_id} className="hpo-tag">
              <code>{phenotype.hpo_id}</code>
              {phenotype.chinese_name}
            </span>
          ))}
        </div>
      </div>

      <div className="pro-section">
        <h3>{t(lang, 'proDrugTitle')}</h3>
        <div className="drug-table">
          {record.drugs_targeted.map((drug) => (
            <div key={drug.drug_name} className="drug-row">
              <div>
                <strong>{drug.chinese_name}</strong>
                <small>{drug.drug_name}</small>
              </div>
              <p>{drug.mechanism}</p>
              <span className="evidence-tag">{drug.approval_status}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pro-section">
        <h3>{t(lang, 'proEvidenceTitle')}</h3>
        <div className="metric-grid">
          <Metric label="Overall Evidence" value={evidence.overall_score.toFixed(2)} />
          <Metric label="Open Targets" value={evidence.opentargets_score.toFixed(2)} />
        </div>
        <p className="pro-note">{evidence.plain_rating}</p>
        <p className="pro-note">{evidence.clinvar_summary_chinese}</p>
        <div className="tag-wrap">
          {evidence.key_pmids.map((pmid) => (
            <span key={pmid} className="pmid-tag">
              {pmid}
            </span>
          ))}
          {(evidence.guideline_ids || []).map((gid) => (
            <span key={gid} className="pmid-tag">
              {gid}
            </span>
          ))}
        </div>
      </div>

      <div className="pro-section">
        <h3>{t(lang, 'proFlowTitle')}</h3>
        <div className="relation-flow">
          <div className="flow-node gene">{gene.symbol}</div>
          <span className="flow-arrow">→</span>
          <div className="flow-node disease">{disease.id}</div>
          <span className="flow-arrow">→</span>
          <div className="flow-node drug">
            {record.drugs_targeted.map((drug) => drug.chinese_name).join(' / ')}
          </div>
        </div>
      </div>
    </section>
  );
}

