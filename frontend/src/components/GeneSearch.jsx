import { useMemo } from 'react';
import { searchGenes } from '../services/localEngine';
import { t } from '../i18n/translations';

const FIELD_LABELS_BY_LANG = {
  'zh-TW': {
    gene_symbol: '基因符號',
    gene_name: '基因全名',
    gene_chinese_name: '中文名',
    disease_id: 'MONDO ID',
    disease_name: '疾病名',
    disease_chinese_name: '疾病中文名',
    disease_category: '疾病分類',
    phenotype: '表型',
    drug: '標靶藥',
    pgx_drug: '用藥指南',
    pgx_key_variant: '關鍵位點',
    pgx_summary: 'PGx 紅綠燈',
    cpic_level: 'CPIC 證據',
    rsid: 'rsID',
    inheritance: '遺傳方式',
    myth: '闢謠',
    truth: '科學真相',
    synonym: '關鍵詞',
    all: '全部',
  },
  en: {
    gene_symbol: 'Gene Symbol',
    gene_name: 'Gene Name',
    gene_chinese_name: 'Display Name',
    disease_id: 'MONDO ID',
    disease_name: 'Disease Name',
    disease_chinese_name: 'Disease',
    disease_category: 'Category',
    phenotype: 'Phenotype',
    drug: 'Targeted Drug',
    pgx_drug: 'PGx Drug',
    pgx_key_variant: 'Key Variant',
    pgx_summary: 'PGx Summary',
    cpic_level: 'CPIC Evidence',
    rsid: 'rsID',
    inheritance: 'Inheritance',
    myth: 'Myth',
    truth: 'Truth',
    synonym: 'Keyword',
    all: 'All',
  },
};

export default function GeneSearch({
  genes,
  query,
  onQueryChange,
  activeSymbol,
  onSelect,
  lang = 'zh-TW',
}) {
  const results = useMemo(() => searchGenes(genes, query), [genes, query]);
  const top = results.slice(0, 7);
  const labels = FIELD_LABELS_BY_LANG[lang] || FIELD_LABELS_BY_LANG['zh-TW'];

  return (
    <section className="search-panel">
      <div className="search-box">
        <span className="search-icon" aria-hidden="true">🔎</span>
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder={t(lang, 'searchPlaceholder')}
          aria-label={t(lang, 'searchPlaceholder')}
        />
        {query ? (
          <button type="button" className="search-clear" onClick={() => onQueryChange('')}>
            {t(lang, 'searchClear')}
          </button>
        ) : null}
      </div>

      <div className="gene-chips" role="tablist" aria-label="Core Genes">
        {genes.map((record) => {
          const active = record.gene.symbol === activeSymbol;
          return (
            <button
              key={record.gene.symbol}
              type="button"
              role="tab"
              aria-selected={active}
              className={`gene-chip${active ? ' active' : ''}`}
              onClick={() => onSelect(record.gene.symbol)}
            >
              <strong>{record.gene.symbol}</strong>
              <small>{record.gene.chinese_name}</small>
            </button>
          );
        })}
      </div>

      {query ? (
        <div className="search-results" role="listbox" aria-label="Search Results">
          {top.length === 0 ? (
            <p className="empty-note">{t(lang, 'searchEmpty')}</p>
          ) : (
            top.map(({ record, matchedField, score }) => (
              <button
                key={record.gene.symbol}
                type="button"
                role="option"
                aria-selected={record.gene.symbol === activeSymbol}
                className="search-result"
                onClick={() => {
                  onSelect(record.gene.symbol);
                  onQueryChange('');
                }}
              >
                <span className="result-gene">{record.gene.symbol}</span>
                <span className="result-name">{record.gene.chinese_name}</span>
                <span className="result-disease">{record.disease.chinese_name}</span>
                <span className="result-match">
                  {labels[matchedField] || matchedField}
                  {score ? ` · ${Math.round(score)}` : ''}
                </span>
              </button>
            ))
          )}
        </div>
      ) : null}
    </section>
  );
}

