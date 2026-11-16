import { useMemo, useState } from 'react';
import { searchGenes } from '../services/localEngine';
import { CATEGORY_TABS, matchesCategory } from '../utils/geneCategories';
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
  const [activeCategory, setActiveCategory] = useState('all');
  const [chipsExpanded, setChipsExpanded] = useState(false);

  const isEn = lang === 'en';
  const results = useMemo(() => searchGenes(genes, query), [genes, query]);
  const top = results.slice(0, 8);
  const labels = FIELD_LABELS_BY_LANG[lang] || FIELD_LABELS_BY_LANG['zh-TW'];

  const categoryCounts = useMemo(() => {
    const counts = {};
    CATEGORY_TABS.forEach((tab) => {
      counts[tab.key] = genes.filter((record) => matchesCategory(record, tab.key)).length;
    });
    return counts;
  }, [genes]);

  const filteredGenes = useMemo(
    () => genes.filter((record) => matchesCategory(record, activeCategory)),
    [genes, activeCategory]
  );

  const CHIP_PREVIEW_LIMIT = 14;
  const visibleChips = useMemo(() => {
    if (chipsExpanded || filteredGenes.length <= CHIP_PREVIEW_LIMIT) {
      return filteredGenes;
    }
    const slice = filteredGenes.slice(0, CHIP_PREVIEW_LIMIT);
    const hasActive = slice.some((record) => record.gene.symbol === activeSymbol);
    if (!hasActive) {
      const activeRec = filteredGenes.find((record) => record.gene.symbol === activeSymbol);
      if (activeRec) {
        return [activeRec, ...slice.slice(0, CHIP_PREVIEW_LIMIT - 1)];
      }
    }
    return slice;
  }, [filteredGenes, chipsExpanded, activeSymbol]);

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

      <div className="category-tabs" role="tablist" aria-label={isEn ? 'Gene Categories' : '基因領域分類'}>
        {CATEGORY_TABS.map((tab) => {
          const isCurrent = tab.key === activeCategory;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isCurrent}
              className={`category-tab${isCurrent ? ' active' : ''}`}
              onClick={() => {
                setActiveCategory(tab.key);
                setChipsExpanded(false);
              }}
            >
              <span>{isEn ? tab.labelEn : tab.labelZh}</span>
              <span className="category-count">{categoryCounts[tab.key] || 0}</span>
            </button>
          );
        })}
      </div>

      <div className="gene-chips" role="tablist" aria-label="Core Genes">
        {visibleChips.map((record) => {
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
              <strong>
                {record.gene.symbol}
                {record.pharmacogenomics?.has_pgx ? ' 💊' : ''}
              </strong>
              <small>{record.gene.chinese_name}</small>
            </button>
          );
        })}
        {filteredGenes.length > CHIP_PREVIEW_LIMIT ? (
          <button
            type="button"
            className="chip-expand-btn"
            onClick={() => setChipsExpanded((prev) => !prev)}
          >
            {chipsExpanded
              ? isEn
                ? 'Collapse'
                : '收合清單'
              : isEn
                ? `+${filteredGenes.length - visibleChips.length} more`
                : `展開其餘 ${filteredGenes.length - visibleChips.length} 個`}
          </button>
        ) : null}
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
