const GROUP_RULES = [
  {
    key: 'cancer',
    labelZh: '🎗️ 遺傳性腫瘤',
    labelEn: '🎗️ Hereditary Cancer',
    symbols: new Set([
      'APC', 'BMPR1A', 'BRCA1', 'BRCA2', 'EGFR', 'FLCN', 'MAX', 'MC1R', 'MEN1',
      'MLH1', 'MSH2', 'MSH6', 'MUTYH', 'NF2', 'PALB2', 'PMS2', 'PTEN', 'RB1',
      'RET', 'SDHAF2', 'SDHB', 'SDHC', 'SDHD', 'SMAD4', 'STK11', 'TMEM127',
      'TP53', 'TSC1', 'TSC2', 'VHL', 'WT1',
    ]),
  },
  {
    key: 'cardio',
    labelZh: '❤️ 心血管與心律',
    labelEn: '❤️ Cardiovascular & Arrhythmia',
    symbols: new Set([
      'ACTA2', 'ACTC1', 'ACVRL1', 'APOB', 'BAG3', 'CALM1', 'CALM2', 'CALM3',
      'CASQ2', 'COL3A1', 'DES', 'DSC2', 'DSG2', 'DSP', 'ENG', 'FBN1', 'FLNC',
      'KCNH2', 'KCNQ1', 'LDLR', 'LMNA', 'MYBPC3', 'MYH11', 'MYH7', 'MYL2',
      'MYL3', 'PCSK9', 'PKP2', 'PRKAG2', 'RBM20', 'RYR2', 'SCN5A', 'SMAD3',
      'TGFBR1', 'TGFBR2', 'TMEM43', 'TNNC1', 'TNNI3', 'TNNT2', 'TPM1',
      'TRDN', 'TTN', 'TTR',
    ]),
  },
  {
    key: 'metabolic',
    labelZh: '🧪 代謝與帶因篩檢',
    labelEn: '🧪 Metabolic & Carrier',
    symbols: new Set([
      'ALDH2', 'APOE', 'ATP7B', 'BTD', 'CACNA1S', 'CFTR', 'G6PD', 'GAA',
      'GJB2', 'GLA', 'HBA1', 'HBB', 'HFE', 'HNF1A', 'OTC', 'PKD1', 'RPE65',
      'RYR1', 'SMN1',
    ]),
  },
  {
    key: 'wellness',
    labelZh: '🥗 營養醫美與運動',
    labelEn: '🥗 Nutrition, Skin & Fitness',
    symbols: new Set([
      'ACTN3', 'BDNF', 'COMT', 'CYP1A2', 'FTO', 'LCT', 'MTHFR', 'PPARG',
      'SOD2', 'VDR',
    ]),
  },
];

export const CATEGORY_TABS = [
  { key: 'all', labelZh: '全部基因', labelEn: 'All Genes' },
  { key: 'pgx', labelZh: '💊 用藥紅綠燈 PGx', labelEn: '💊 PGx Drug Safety' },
  ...GROUP_RULES.map(({ key, labelZh, labelEn }) => ({ key, labelZh, labelEn })),
];

export function matchesCategory(record, categoryKey) {
  if (!record || !categoryKey || categoryKey === 'all') return true;
  if (categoryKey === 'pgx') {
    return Boolean(record.pharmacogenomics?.has_pgx);
  }
  const symbol = String(record.gene?.symbol || '').toUpperCase();
  const matchedRule = GROUP_RULES.find((item) => item.symbols.has(symbol));
  if (matchedRule) {
    return matchedRule.key === categoryKey;
  }

  // Fallback for future newly added genes not yet listed above
  const catText = (record.disease?.categories || []).join(' ').toLowerCase();
  if (categoryKey === 'cancer') return /腫瘤|癌|息肉|tumor|cancer|polyposis/.test(catText);
  if (categoryKey === 'cardio') return /心|血管|主動脈|高膽固醇|cardio|aortic|arrhythm/.test(catText);
  if (categoryKey === 'wellness') return /營養|抗氧化|運動|皮膚|睡眠|咖啡|體重|nutrition|fitness|lifestyle/.test(catText);
  if (categoryKey === 'metabolic') return /代謝|貧血|溶血|儲積|聽力|萎縮|囊腫|多囊腎|視網膜|血紅素|metabolic|thalassemia/.test(catText);
  return false;
}
