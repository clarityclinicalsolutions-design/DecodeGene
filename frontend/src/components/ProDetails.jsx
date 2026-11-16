import { t } from '../i18n/translations';

function diseaseHref(diseaseId) {
  const id = String(diseaseId || '');
  if (id.startsWith('MONDO:')) return `https://monarchinitiative.org/${id}`;
  if (id.startsWith('MESH:')) return `https://meshb.nlm.nih.gov/record/ui?ui=${id.slice(5)}`;
  if (id.startsWith('PHARMGKB:')) return `https://www.pharmgkb.org/guidelineAnnotation/${id.slice(9)}`;
  return null;
}

function pmidHref(pmid) {
  const num = String(pmid || '').replace(/^PMID:/i, '').trim();
  return /^\d+$/.test(num) ? `https://pubmed.ncbi.nlm.nih.gov/${num}/` : null;
}

function ExternalLinkOrText({ href, children, className = '' }) {
  if (!href) return <span className={className}>{children}</span>;
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={`ext-link ${className}`.trim()}>
      {children} ↗
    </a>
  );
}

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
  const isEn = lang === 'en';
  const clinvarCount = Number(evidence.clinvar_pathogenic_count ?? 0);
  const clinvarHref = `https://www.ncbi.nlm.nih.gov/clinvar/?term=${encodeURIComponent(gene.symbol)}[gene]`;

  return (
    <section className="card pro-card">
      <div className="card-eyebrow">{t(lang, 'proEyebrow')}</div>
      <h2>{t(lang, 'proTitle')}</h2>

      <div className="id-grid">
        <div className="id-item">
          <span>Ensembl ID</span>
          <strong>
            <ExternalLinkOrText href={`https://www.ensembl.org/Homo_sapiens/Gene/Summary?g=${gene.ensembl_id}`}>
              {gene.ensembl_id}
            </ExternalLinkOrText>
          </strong>
        </div>
        <div className="id-item">
          <span>Entrez ID</span>
          <strong>
            <ExternalLinkOrText href={`https://www.ncbi.nlm.nih.gov/gene/${gene.entrez_id}`}>
              {gene.entrez_id}
            </ExternalLinkOrText>
          </strong>
        </div>
        <div className="id-item">
          <span>{disease.id?.split(':')[0] || 'MONDO'}</span>
          <strong>
            <ExternalLinkOrText href={diseaseHref(disease.id)}>{disease.id}</ExternalLinkOrText>
          </strong>
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
            <a
              key={phenotype.hpo_id}
              href={`https://hpo.jax.org/browse/term/${phenotype.hpo_id}`}
              target="_blank"
              rel="noreferrer noopener"
              className="hpo-tag ext-link"
            >
              <code>{phenotype.hpo_id}</code>
              {phenotype.chinese_name} ↗
            </a>
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
        <div className="metric-grid metric-grid-3">
          <Metric label="Overall Evidence" value={evidence.overall_score.toFixed(2)} />
          <Metric label="Open Targets" value={evidence.opentargets_score.toFixed(2)} />
          <div className="metric clinvar-metric">
            <div className="metric-head">
              <span>{isEn ? 'ClinVar P/LP' : 'ClinVar 致病變異'}</span>
              <strong>
                <ExternalLinkOrText href={clinvarHref}>
                  {clinvarCount.toLocaleString()}
                </ExternalLinkOrText>
              </strong>
            </div>
            <small className="clinvar-caption">
              {isEn ? 'Live-synced pathogenic & likely pathogenic' : '已同步 NCBI 致病／可能致病變異總數'}
            </small>
          </div>
        </div>
        <p className="pro-note">{evidence.plain_rating}</p>
        <p className="pro-note">{evidence.clinvar_summary_chinese}</p>
        <div className="tag-wrap">
          {evidence.key_pmids.map((pmid) => (
            <ExternalLinkOrText key={pmid} href={pmidHref(pmid)} className="pmid-tag">
              {pmid}
            </ExternalLinkOrText>
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
