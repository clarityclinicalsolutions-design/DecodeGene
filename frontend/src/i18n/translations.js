import { EN_RECORDS } from './enRecords.js';
import { UI_ZH_TW } from './uiZhTW.js';
import { UI_EN } from './uiEn.js';

export const UI_STRINGS = {
  'zh-TW': UI_ZH_TW,
  en: UI_EN,
};

export function t(lang, key) {
  const dict = UI_STRINGS[lang] || UI_STRINGS['zh-TW'];
  return dict[key] ?? UI_STRINGS['zh-TW'][key] ?? key;
}

export function localizeRecord(record, lang = 'zh-TW', enRecords = EN_RECORDS) {
  if (!record || lang !== 'en') return record;
  const symbol = record.gene?.symbol;
  const en = symbol && enRecords ? enRecords[symbol] : undefined;
  if (!en) return record;
  return {
    ...record,
    gene: {
      ...record.gene,
      ...(en.gene || {}),
      metaphor: { ...(record.gene?.metaphor || {}), ...(en.gene?.metaphor || {}) },
    },
    disease: { ...record.disease, ...(en.disease || {}) },
    phenotypes: en.phenotypes || record.phenotypes,
    drugs_targeted: en.drugs_targeted || record.drugs_targeted,
    pharmacogenomics: { ...record.pharmacogenomics, ...(en.pharmacogenomics || {}) },
    evidence: { ...record.evidence, ...(en.evidence || {}) },
    lifestyle_prevention: { ...record.lifestyle_prevention, ...(en.lifestyle_prevention || {}) },
    doctor_checklist: { ...record.doctor_checklist, ...(en.doctor_checklist || {}) },
    myth_buster: { ...record.myth_buster, ...(en.myth_buster || {}) },
  };
}
