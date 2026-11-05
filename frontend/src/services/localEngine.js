/**
 * Browser-side fallback engine.
 *
 * Mirrors the backend privacy scrubber, inheritance calculator and report
 * decoder so the static GitHub Pages demo (and an offline backend) keeps
 * working with zero server dependency.
 */

import demoData from '../data/demo_associations.json';

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\-]/g, '\\$&');
}

export function deriveKnownGenes(records = demoData) {
  const list = Array.isArray(records) && records.length ? records : demoData;
  const seen = new Set();
  const out = [];
  list.forEach((rec) => {
    const sym = String(rec?.gene?.symbol || '').trim().toUpperCase();
    if (sym && !seen.has(sym)) {
      seen.add(sym);
      out.push(sym);
    }
  });
  return out;
}

export function buildGeneRegex(genes = deriveKnownGenes(demoData)) {
  const ordered = [...new Set((genes || []).map((g) => String(g).trim().toUpperCase()).filter(Boolean))]
    .sort((a, b) => b.length - a.length || a.localeCompare(b));
  const pattern = ordered.map(escapeRegExp).join('|');
  return new RegExp(`(?<![A-Za-z0-9])(${pattern})(?![A-Za-z0-9])`, 'gi');
}

export function buildStarAlleleRegex(genes = deriveKnownGenes(demoData)) {
  const ordered = [...new Set((genes || []).map((g) => String(g).trim().toUpperCase()).filter(Boolean))]
    .sort((a, b) => b.length - a.length || a.localeCompare(b));
  const pattern = ordered.map(escapeRegExp).join('|');
  return new RegExp(
    `(?<![A-Za-z0-9.])(?:(?:${pattern})\\s*)?\\*\\d{1,4}(?::\\d{1,4})?[A-Za-z]?(?:\\s*\\/\\s*\\*\\d{1,4}(?::\\d{1,4})?[A-Za-z]?)?(?![A-Za-z0-9])`,
    'gi'
  );
}

export const KNOWN_GENES = deriveKnownGenes(demoData);

export const CIRCUIT_BREAKER_MESSAGE =
  '當前權威資料庫未收錄該位點或基因，為確保醫療安全，系統不做猜測性解讀，請攜帶原始報告諮詢臨床遺傳醫師。';

export const CIRCUIT_BREAKER_MESSAGE_EN =
  'This gene or variant is not in our curated clinical database. For medical safety, DecodeGene never makes speculative interpretations—please consult a clinical geneticist with your original report.';

export const DISCLAIMER =
  '免責聲明：DecodeGene 提供的是科學普及與健康常識參考，不能替代執業醫師、臨床遺傳諮詢師的診斷與醫療決策。涉及用藥、手術、生育或篩檢方案，請務必前往正規醫院相關專科就診。';

export const DISCLAIMER_EN =
  'Disclaimer: DecodeGene provides educational and research reference only and does not replace diagnosis or medical decisions by a licensed physician or clinical genetic counselor.';

const GENE_RE = buildGeneRegex(KNOWN_GENES);
const CDNA_RE =
  /(?<![A-Za-z0-9])c\.\d+(?:[+-]\d+)?(?:_\d+)?(?:[ACGT]>[ACGT]|del[ACGT]*|dup[ACGT]*|ins[ACGT]+|delins[ACGT]+|inv)?(?![A-Za-z0-9])/gi;
const PROTEIN_RE =
  /(?<![A-Za-z0-9])p\.[A-Z][a-z]{2}\d+(?:[A-Z][a-z]{2})?(?:fs(?:Ter|\*)?\d*)?(?:Ter|\*)?(?![A-Za-z0-9])/gi;
const LEGACY_PROTEIN_RE = /(?<![A-Za-z0-9])[A-Z]\d{2,4}[A-Z](?![A-Za-z0-9])/g;
const EXON_RE =
  /(?<![A-Za-z0-9])(?:Ex|Exon)\s*\d+\s*(?:del(?:etion)?|ins(?:ertion)?|dup)?(?![A-Za-z0-9])/gi;
const STAR_ALLELE_RE = buildStarAlleleRegex(KNOWN_GENES);
const RSID_RE = /(?<![A-Za-z0-9])rs\d+(?![A-Za-z0-9])/gi;
const ZYGOSITY_RE = /(雜合|杂合|純合|纯合|半合子|heterozygous|homozygous|hemizygous)/i;

const ZYGOSITY_MAP = {
  雜合: '雜合',
  杂合: '雜合',
  純合: '純合',
  纯合: '純合',
  半合子: '半合子',
  heterozygous: '雜合',
  homozygous: '純合',
  hemizygous: '半合子',
};

export class CircuitBreakerError extends Error {
  constructor(message = CIRCUIT_BREAKER_MESSAGE) {
    super(message);
    this.name = 'CircuitBreakerError';
    this.status = 404;
    this.detail = message;
  }
}

function dedupe(values) {
  const seen = new Set();
  const out = [];
  values.forEach((value) => {
    const key = String(value).toUpperCase();
    if (!seen.has(key)) {
      seen.add(key);
      out.push(value);
    }
  });
  return out;
}

function collect(regex, text) {
  return [...(text.match(regex) || [])];
}

export function extractEntities(text, records = demoData) {
  const raw = String(text || '');
  const geneRe =
    Array.isArray(records) && records.length
      ? buildGeneRegex(deriveKnownGenes(records))
      : GENE_RE;
  const genes = dedupe(collect(geneRe, raw).map((gene) => gene.toUpperCase()));
  const variants = dedupe([
    ...collect(CDNA_RE, raw),
    ...collect(PROTEIN_RE, raw),
    ...collect(LEGACY_PROTEIN_RE, raw),
    ...collect(EXON_RE, raw),
    ...collect(STAR_ALLELE_RE, raw),
  ]);
  const rsids = dedupe(collect(RSID_RE, raw).map((rsid) => rsid.toLowerCase()));
  const zygosityMatch = raw.match(ZYGOSITY_RE);
  const zygosity = zygosityMatch
    ? ZYGOSITY_MAP[zygosityMatch[1].toLowerCase()] || zygosityMatch[1]
    : null;
  return { genes, variants, rsids, zygosity };
}

export function scrubReport(text, records = demoData) {
  let working = String(text || '');
  const counts = {
    name: 0,
    id_number: 0,
    mobile: 0,
    phone: 0,
    record_number: 0,
    hospital: 0,
  };

  const replacePlain = (regex, key, placeholder) => {
    working = working.replace(regex, () => {
      counts[key] += 1;
      return placeholder;
    });
  };

  const replaceLabeled = (regex, key, placeholder) => {
    working = working.replace(regex, (match, label) => {
      counts[key] += 1;
      return `${label}：${placeholder}`;
    });
  };

  working = working.replace(
    /(患者姓名|受檢者姓名|受检者姓名|受檢者|受检者|受檢人|受检人|病人姓名|病人|姓名)\s*[:：]\s*([^\s,，;；()（）[\]]+)/g,
    (match, label) => {
      counts.name += 1;
      return `${label}：[姓名已脫敏]`;
    }
  );

  working = working.replace(
    /(?<!Gene )(?<!gene )(?<!Drug )(?<!drug )(Patient\s*Name|Patient|Name)\s*[:：]\s*((?:[A-Z][A-Za-z'-]+)(?:\s+[A-Z][A-Za-z'-]+){0,3})/gi,
    (match, label) => {
      counts.name += 1;
      return `${label}：[姓名已脫敏]`;
    }
  );

  working = working.replace(
    /((?:測試樣本|测试样本|樣本|样本)\s*\d*\s*[:：]\s*)([\u4e00-\u9fa5]{2,4})(?=\s*[（(]\s*(?:身分證|身份證|身份证|證件|证件|手機|手机|電話|电话|聯絡方式|联系方式|住院號|住院号|病歷號|病历号|樣本號|样本号|樣本編號|样本编号|條碼|条码))/g,
    (match, label) => {
      counts.name += 1;
      return `${label}[姓名已脫敏]`;
    }
  );

  working = working.replace(
    /([\u4e00-\u9fa5]{2,4})(?=\s*[（(]\s*(?:身分證|身份證|身份证|證件|证件|手機|手机|電話|电话|聯絡方式|联系方式|住院號|住院号|病歷號|病历号|樣本號|样本号|樣本編號|样本编号|條碼|条码))/g,
    () => {
      counts.name += 1;
      return '[姓名已脫敏]';
    }
  );

  // Unlabeled Chinese name followed by a bare ID / mobile number.
  working = working.replace(
    /([王李张張刘劉陈陳杨楊黄黃赵趙吴吳周徐孙孫马馬朱胡郭何高林罗羅郑鄭梁谢謝宋唐许許韩韓冯馮邓鄧曹彭曾肖蕭田董袁潘于於蒋蔣蔡余餘杜叶葉程苏蘇魏吕呂丁任沈姚卢盧姜崔钟鍾谭譚陆陸汪范範金石廖贾賈夏韦韋付傅方白邹鄒孟熊秦邱江尹薛闫閻段雷侯龙龍史陶黎贺賀顾顧毛郝龚龔邵万萬钱錢严嚴覃武戴莫孔向汤湯][\u4e00-\u9fa5]{1,2})(?=\s*[,，]?\s*(?:\d{17}[\dXx]|\d{15}|[A-Z][12]\d{8}|1[3-9]\d{9}|09\d{8})(?!\d))/g,
    () => {
      counts.name += 1;
      return '[姓名已脫敏]';
    }
  );

  // Unlabeled English name followed by a bare ID / mobile number.
  working = working.replace(
    /((?:[A-Z][a-z'-]+)(?:\s+[A-Z][a-z'-]+){1,3})(?=\s*[,，]?\s*(?:\d{17}[\dXx]|\d{15}|[A-Z][12]\d{8}|1[3-9]\d{9}|09\d{8})(?!\d))/g,
    () => {
      counts.name += 1;
      return '[姓名已脫敏]';
    }
  );

  replaceLabeled(
    /(病歷號|病历号|住院號|住院号|門診號|门诊号|病案號|病案号|樣本編號|样本编号|樣本號|样本号|樣本條碼|样本条码|條碼號|条码号|條形碼|条形码|檢驗編號|检验编号|送檢編號|送检编号|Medical\s*Record(?:\s*Number)?|MRN|Sample\s*(?:ID|No\.?)|Barcode)\s*[:：]?\s*([A-Za-z0-9][A-Za-z0-9-]{2,29})/gi,
    'record_number',
    '[病歷號已脫敏]'
  );
  replacePlain(/(?<!\d)\d{17}[\dXx](?!\d)/g, 'id_number', '[身分證號已脫敏]');
  replacePlain(/(?<!\d)\d{15}(?!\d)/g, 'id_number', '[身分證號已脫敏]');
  replacePlain(/(?<![A-Za-z0-9])[A-Z][12]\d{8}(?![A-Za-z0-9])/g, 'id_number', '[身分證號已脫敏]');
  replacePlain(/(?<!\d)(?:1[3-9]\d{9}|09\d{8})(?!\d)/g, 'mobile', '[手機號已脫敏]');
  replacePlain(/(?<!\d)0\d{2,3}[-—－]?\d{7,8}(?!\d)/g, 'phone', '[聯絡電話已脫敏]');
  replaceLabeled(
    /(醫院名稱|医院名称|就診醫院|就诊医院|送檢醫院|送检医院|送檢單位|送检单位|檢測單位|检测单位|檢驗單位|检验单位|採樣單位|采样单位|檢測機構|检测机构|檢驗機構|检验机构|醫學檢驗所|医学检验所|檢驗所|检验所|實驗室|实验室|醫院|医院|Hospital|Laboratory|Clinic|Medical\s+Center)\s*[:：]\s*([^\s,，;；\n]+)/gi,
    'hospital',
    '[醫院名稱已脫敏]'
  );
  replacePlain(
    /(?:(?<=就診於)|(?<=就诊于)|(?<=送檢至)|(?<=送检至))?[\u4e00-\u9fa5]{2,16}?(?:醫學檢驗實驗室|医学检验实验室|醫學檢驗所|医学检验所|檢驗中心|检验中心|檢驗所|检验所|診斷中心|诊断中心|醫院|医院|保健院|衛生院|卫生院|病理科|檢驗科|检验科|實驗室|实验室)/g,
    'hospital',
    '[醫院名稱已脫敏]'
  );
  replacePlain(
    /(?:[A-Z][A-Za-z.'-]*\s+){1,5}(?:Hospital|Medical\s+Center|Medical\s+Centre|Laboratory|Clinic|Institute|Healthcare)/gi,
    'hospital',
    '[醫院名稱已脫敏]'
  );

  const entities = extractEntities(text, records);
  const totalRemoved = Object.values(counts).reduce((sum, value) => sum + value, 0);

  return {
    scrubbed_text: working,
    scrubbedText: working,
    removed_counts: counts,
    removedCounts: counts,
    total_removed: totalRemoved,
    pii_removed: totalRemoved > 0,
    ...entities,
  };
}

function haystack(record) {
  const parts = [
    record.gene.symbol,
    record.gene.name,
    record.gene.chinese_name,
    record.gene.plain_summary,
    record.gene.academic_summary,
    record.disease.name,
    record.disease.chinese_name,
    record.pharmacogenomics.key_variant,
    record.pharmacogenomics.traffic_light_summary,
  ];
  (record.drugs_targeted || []).forEach((drug) => {
    parts.push(drug.drug_name, drug.chinese_name, drug.mechanism);
  });
  (record.pharmacogenomics.drugs_guide || []).forEach((drug) => {
    parts.push(drug.drug_name, drug.chinese_name, drug.clinical_alert);
  });
  return parts.join(' ').toLowerCase();
}

export function findRecord(records, entities) {
  if (!records || !records.length) return null;
  for (const gene of entities.genes || []) {
    const match = records.find((record) => record.gene.symbol.toUpperCase() === gene.toUpperCase());
    if (match) return match;
  }
  const candidates = [...(entities.rsids || []), ...(entities.variants || [])];
  for (const candidate of candidates) {
    const match = records.find((record) => haystack(record).includes(candidate.toLowerCase()));
    if (match) return match;
  }
  return null;
}

function variantGrounding(entities, record) {
  const checked = [...(entities.variants || []), ...(entities.rsids || [])];
  if (!checked.length) {
    return { status: 'no_variant_detected', matched: [], note: 'No explicit HGVS variant or rsID was detected.' };
  }
  const text = haystack(record);
  const matched = checked.filter((value) => text.includes(value.toLowerCase()));
  if (matched.length) {
    return { status: 'grounded', matched, note: 'Found in curated record.' };
  }
  return {
    status: 'not_individually_curated',
    matched: [],
    note: 'Variant not individually curated; no variant-specific claim is made.',
  };
}

export function localDecodeReport(rawText, records = demoData, lang = 'zh-TW') {
  const isEn = lang === 'en';
  const scrub = scrubReport(rawText, records);
  const record = findRecord(records, scrub);
  if (!record) {
    throw new CircuitBreakerError(isEn ? CIRCUIT_BREAKER_MESSAGE_EN : CIRCUIT_BREAKER_MESSAGE);
  }

  const grounding = variantGrounding(scrub, record);
  let variantNote = isEn
    ? 'No explicit HGVS variant or rsID was detected; the interpretation below reflects curated gene-level evidence.'
    : '本次文本未檢測到明確的 HGVS 位點或 rsID，以下為該基因的整體權威解讀。';
  if (grounding.status === 'not_individually_curated') {
    variantNote = isEn
      ? 'Note: The specific variant in your report is not individually curated in our local variant database. The summary below reflects gene-level evidence only—please consult a clinical geneticist with your original report.'
      : '提示：您報告中的具體位點未在本地逐位點資料庫中單獨收錄，以下內容僅針對該基因的整體權威證據，不對該位點做特異性判斷。請攜帶原始報告諮詢臨床遺傳醫師。';
  } else if (grounding.status === 'grounded') {
    variantNote = isEn
      ? `Grounded in local curated database (${grounding.matched.join(', ')}); interpretation matches verified clinical evidence.`
      : `本地資料庫已收錄該位點相關證據（${grounding.matched.join('、')}），以下解讀與本地權威記錄一致。`;
  }

  const impactParts = isEn
    ? [
        record.gene.plain_summary,
        `Associated Condition: ${record.disease.chinese_name} (${record.disease.id}).`,
        `Inheritance Mode: ${record.disease.inheritance_mode}.`,
        `Clinical Priority: ${record.disease.severity_badge}.`,
      ]
    : [
        record.gene.plain_summary,
        `相關疾病：${record.disease.chinese_name}（${record.disease.name}，${record.disease.id}）。`,
        `遺傳方式：${record.disease.inheritance_mode}。`,
        `嚴重程度提示：${record.disease.severity_badge}。`,
      ];
  if (scrub.zygosity) {
    impactParts.push(
      isEn ? `Detected Zygosity: ${scrub.zygosity}.` : `本次報告提示的合子狀態為：${scrub.zygosity}。`
    );
  }

  return {
    status: 'ok',
    ai_source: 'local_fallback',
    gene: {
      symbol: record.gene.symbol,
      name: record.gene.name,
      chinese_name: record.gene.chinese_name,
      ensembl_id: record.gene.ensembl_id,
      entrez_id: record.gene.entrez_id,
      chromosome: record.gene.chromosome,
    },
    detected: {
      genes: scrub.genes,
      variants: scrub.variants,
      rsids: scrub.rsids,
      zygosity: scrub.zygosity,
      gene: scrub.genes[0] || null,
      variant: scrub.variants[0] || null,
    },
    scrubbed_text: scrub.scrubbed_text,
    removed_counts: scrub.removed_counts,
    pii_removed: scrub.pii_removed,
    variant_grounding: grounding,
    interpretation: {
      headline: isEn
        ? `${record.gene.symbol} (${record.gene.chinese_name}) Genetic Report Interpretation`
        : `${record.gene.symbol}（${record.gene.chinese_name}）基因報告解讀`,
      what_is_it: isEn
        ? `This report involves the ${record.gene.symbol} gene. In plain terms: ${record.gene.metaphor.title}. ${record.gene.metaphor.story}`
        : `這份報告涉及 ${record.gene.symbol} 基因。簡單來說：${record.gene.metaphor.title}。${record.gene.metaphor.story}`,
      impact: impactParts.join(' '),
      pgx: (record.pharmacogenomics.drugs_guide || []).map((drug) => ({
        drug_name: drug.drug_name,
        chinese_name: drug.chinese_name,
        traffic_light: drug.traffic_light,
        clinical_alert: drug.clinical_alert,
        cpic_level: drug.cpic_level,
      })),
      action: [
        record.lifestyle_prevention.screening_advice,
        ...(record.lifestyle_prevention.lifestyle_tips || []),
      ],
      doctor_specialty: record.doctor_checklist.specialty,
      doctor_questions: record.doctor_checklist.questions,
      variant_note: variantNote,
    },
    verification: { consistent: true, issues: [], gene: record.gene.symbol },
    disclaimer: isEn ? DISCLAIMER_EN : DISCLAIMER,
  };
}

function round2(value) {
  return Math.round(value * 100) / 100;
}

function riskLevel(disease) {
  if (disease >= 75) return 'very_high';
  if (disease >= 50) return 'high';
  if (disease >= 25) return 'moderate';
  if (disease > 0) return 'low';
  return 'minimal';
}

function autosomal(pattern, father, mother) {
  let disease = 0;
  let carrier = 0;

  if (pattern === 'AD') {
    const genotypes = (status) => (status === 'unaffected' ? [['d', 'd']] : [['D', 'd']]);
    for (const [f1, f2] of genotypes(father)) {
      for (const [m1, m2] of genotypes(mother)) {
        for (const paternal of [f1, f2]) {
          for (const maternal of [m1, m2]) {
            if (paternal === 'D' || maternal === 'D') disease += 25;
          }
        }
      }
    }
    return { disease, carrier };
  }

  const genotypes = (status) => {
    if (status === 'unaffected') return [['D', 'D']];
    if (status === 'carrier') return [['D', 'd']];
    return [['d', 'd']];
  };
  for (const [f1, f2] of genotypes(father)) {
    for (const [m1, m2] of genotypes(mother)) {
      for (const paternal of [f1, f2]) {
        for (const maternal of [m1, m2]) {
          const child = [paternal, maternal].sort().join('');
          if (child === 'dd') disease += 25;
          else if (child === 'Dd') carrier += 25;
        }
      }
    }
  }
  return { disease, carrier };
}

function xLinked(pattern, father, mother) {
  const fatherX = father === 'unaffected' ? 'd' : 'D';
  const motherGenotypes =
    mother === 'unaffected'
      ? [['d', 'd']]
      : mother === 'carrier'
        ? [['D', 'd']]
        : [['D', 'D']];
  const dominant = pattern === 'XD';
  let disease = 0;
  let carrier = 0;

  for (const [m1, m2] of motherGenotypes) {
    for (const maternal of [m1, m2]) {
      if (maternal === 'D') disease += 25;
      const daughter = [fatherX, maternal].sort().join('');
      if (dominant) {
        if (fatherX === 'D' || maternal === 'D') disease += 25;
      } else if (daughter === 'DD') {
        disease += 25;
      } else if (daughter === 'Dd') {
        carrier += 25;
      }
    }
  }
  return { disease, carrier };
}

const PATTERN_LABELS = {
  AD: '體染色體顯性遺傳 (Autosomal Dominant, AD)',
  AR: '體染色體隱性遺傳 (Autosomal Recessive, AR)',
  XD: 'X 連鎖顯性遺傳 (X-Linked Dominant, XD)',
  XR: 'X 連鎖隱性遺傳 (X-Linked Recessive, XR)',
};

const PATTERN_LABELS_EN = {
  AD: 'Autosomal Dominant (AD)',
  AR: 'Autosomal Recessive (AR)',
  XD: 'X-Linked Dominant (XD)',
  XR: 'X-Linked Recessive (XR)',
};

const STATUS_LABELS = {
  unaffected: '健康/未患病',
  carrier: '攜帶者',
  affected: '患病',
};

const STATUS_LABELS_EN = {
  unaffected: 'Unaffected / Healthy',
  carrier: 'Carrier',
  affected: 'Affected',
};

const INTROS = {
  AD: '體染色體顯性遺傳：子女只要從父母任意一方獲得一個致病等位基因，就可能患病。',
  AR: '體染色體隱性遺傳：通常需要從父母雙方各獲得一個致病等位基因才會患病；只獲得一個則為無症狀攜帶者。',
  XD: 'X 連鎖顯性遺傳：只要攜帶一個致病等位基因就可能患病，男性因只有一條 X 染色體通常表現更重。',
  XR: 'X 連鎖隱性遺傳：男性只有一條 X 染色體，攜帶致病等位基因即可能患病；女性通常需要兩條 X 都攜帶才患病，單條攜帶者為無症狀攜帶者。',
};

const INTROS_EN = {
  AD: 'Autosomal Dominant (AD): A child needs only one pathogenic allele from either parent to be affected.',
  AR: 'Autosomal Recessive (AR): A child must inherit two pathogenic alleles (one from each parent) to be affected; inheriting one copy makes the child an asymptomatic carrier.',
  XD: 'X-Linked Dominant (XD): A single pathogenic allele on the X chromosome can cause disease; males are often more severely affected.',
  XR: 'X-Linked Recessive (XR): Males (XY) have one X chromosome and are affected if they inherit the pathogenic allele; females (XX) with one copy are typically asymptomatic carriers.',
};

export function calculateInheritance({ pattern, father_status, mother_status }, lang = 'zh-TW') {
  const isEn = lang === 'en';
  const isX = pattern === 'XD' || pattern === 'XR';
  const raw = isX
    ? xLinked(pattern, father_status, mother_status)
    : autosomal(pattern, father_status, mother_status);

  const disease = round2(raw.disease);
  const carrier = round2(raw.carrier);
  const unaffected = round2(Math.max(0, 100 - disease - carrier));

  if (isEn) {
    const sexNoteEn = isX ? ' (weighted 50/50 across male and female births)' : '';
    let closingEn =
      'This represents a low-risk combination, though formal genetic counseling with family history is always recommended.';
    if (disease >= 50) {
      closingEn =
        'This is a high-risk combination. Schedule a clinical genetics consultation to discuss prenatal diagnosis or Preimplantation Genetic Testing (PGT-M).';
    } else if (disease >= 25) {
      closingEn =
        'This is a moderate-risk combination. Preconception genetic counseling is advised to review reproductive and prenatal testing options.';
    } else if (disease > 0) {
      closingEn =
        'Risk is non-zero; bring this estimate to a genetics clinic for variant-specific evaluation.';
    }
    return {
      pattern,
      father_status,
      mother_status,
      child_disease_risk_pct: disease,
      child_carrier_risk_pct: carrier,
      child_unaffected_pct: unaffected,
      risk_level: riskLevel(disease),
      details: {
        pattern_label: PATTERN_LABELS_EN[pattern],
        father_status_label: STATUS_LABELS_EN[father_status],
        mother_status_label: STATUS_LABELS_EN[mother_status],
      },
      plain_explanation: `${INTROS_EN[pattern]} With Father (${STATUS_LABELS_EN[father_status]}) and Mother (${STATUS_LABELS_EN[mother_status]})${sexNoteEn}, expected probabilities per pregnancy are: Affected ${disease.toFixed(1)}%, Asymptomatic Carrier ${carrier.toFixed(1)}%, Completely Unaffected ${unaffected.toFixed(1)}%. ${closingEn} Calculated using idealized Mendelian inheritance for educational reference only.`,
    };
  }

  const sexNote = isX ? '（已按男女各 50% 的出生機率加權平均）' : '';
  let closing = '這屬於較低風險組合，但仍建議結合家族史與專業遺傳諮詢綜合評估。';
  if (disease >= 50) {
    closing = '屬於較高風險，建議儘快預約臨床遺傳門診，討論產前診斷、胚胎著床前基因診斷 (PGT) 等選擇。';
  } else if (disease >= 25) {
    closing = '屬於中等風險，建議孕前或備孕階段諮詢臨床遺傳醫師，了解產前診斷與胚胎篩檢選項。';
  } else if (disease > 0) {
    closing = '風險並非零，建議把這份機率帶到遺傳門診，由醫師結合具體變異與家族史判斷。';
  }

  return {
    pattern,
    father_status,
    mother_status,
    child_disease_risk_pct: disease,
    child_carrier_risk_pct: carrier,
    child_unaffected_pct: unaffected,
    risk_level: riskLevel(disease),
    details: {
      pattern_label: PATTERN_LABELS[pattern],
      father_status_label: STATUS_LABELS[father_status],
      mother_status_label: STATUS_LABELS[mother_status],
    },
    plain_explanation: `${INTROS[pattern]} 在父親${STATUS_LABELS[father_status]}、母親${STATUS_LABELS[mother_status]}的前提下${sexNote}，下一代的預期機率約為：患病 ${disease.toFixed(1)}%，成為無症狀攜帶者 ${carrier.toFixed(1)}%，完全不受影響 ${unaffected.toFixed(1)}%。${closing} 本結果基於理想孟德爾遺傳模型推算，僅供健康科普與就醫溝通參考，不能替代臨床遺傳諮詢。`,
  };
}

const SEARCH_SYNONYMS = {
  BRCA1: '乳腺癌易感基因 1 號 乳腺癌易感基因 1 号 乳癌 卵巢癌 奥拉帕利 奧拉帕利 breast cancer ovarian cancer olaparib talazoparib',
  TP53: '腫瘤蛋白 p53 肿瘤蛋白 p53 李-佛美尼症候群 李-佛美尼综合征 抑癌基因 li-fraumeni sarcoma',
  APOE: '載脂蛋白 E 载脂蛋白 E 阿茲海默症 阿尔茨海默病 老年癡呆 老年痴呆 失智症 仑卡奈单抗 崙卡奈單抗 alzheimer lecanemab',
  EGFR: '表皮生長因子受體 表皮生长因子受体 非小細胞肺癌 非小细胞肺癌 肺腺癌 奧希替尼 奥希替尼 泰瑞沙 吉非替尼 osimertinib gefitinib lung cancer nsclc',
  ALDH2: '乙醛脫氫酶 2 乙醛脱氢酶 2 亞洲紅臉症 亚洲红脸症 喝酒臉紅 喝酒脸红 酒精不耐受 硝酸甘油 硝化甘油 食道癌 食管癌 alcohol flush nitroglycerin',
  G6PD: '葡萄糖-6-磷酸脫氫酶 葡萄糖-6-磷酸脱氢酶 蠶豆症 蠶豆病 蚕豆病 溶血性貧血 溶血性贫血 磺胺 伯氨喹 favism hemolytic anemia rasburicase primaquine',
  ATP7B: '威爾森氏症 威爾遜氏症 肝豆狀核變性 肝豆状核变性 銅代謝 铜代谢 威爾森 威爾遜 wilson disease wilson copper trientine penicillamine zinc',
  GLA: '法布瑞氏症 法布雷病 法布莱氏病 法布瑞氏 α-半乳糖苷酶 半乳糖苷酶 fabry fabry disease agalsidase migalastat',
  GAA: '龐貝氏症 庞贝氏症 庞贝病 肝醣儲積症第二型 糖原贮积症第二型 酸性 α-葡萄糖苷酶 葡萄糖苷酶 pompe pompe disease glycogen storage disease type ii alglucosidase avalglucosidase',
  PKD1: '多囊腎 多囊肾 自體顯性多囊腎 常染色体显性多囊肾 多囊性腎病 多囊性肾病 adpkd polycystic kidney pkd1 tolvaptan 托伐普坦',
  RYR1: '惡性高熱 恶性高热 麻醉風險 麻醉风险 麻醉安全 琥珀膽鹼 琥珀胆碱 丹曲洛林 malignant hyperthermia anesthesia anaesthesia succinylcholine dantrolene ryr1',
  CFTR: '囊腫性纖維化 囊肿性纤维化 囊性纖維化 囊性纤维化 cystic fibrosis cftr ivacaftor elexacaftor tezacaftor trikafta dornase',
  CYP3A5: '他克莫司 塔克莫司 器官移植 器官移植排斥 免疫抑制 tacrolimus cyp3a5*3 cyp3a5',
  MTHFR: '亞甲基四氫葉酸還原酶 亚甲基四氢叶酸还原酶 葉酸代謝障礙 叶酸代谢障碍 高同半胱胺酸血症 高同型半胱氨酸血症 H型高血壓 H型高血压 腦中風 脑卒中 活性葉酸 活性叶酸 甲氨蝶呤 folate folic acid homocysteine methotrexate',
  CYP2C19: '氯吡格雷 氯吡格雷慢代謝 氯吡格雷慢代谢 保栓通 波立維 波立维 抗血小板 心臟支架 心脏支架 普拉格雷 替格瑞洛 百無凝 clopidogrel plavix prasugrel ticagrelor voriconazole omeprazole cyp2c19*2 cyp2c19*3',
  CYP2D6: '細胞色素 P450 2D6 细胞色素 P450 2D6 可待因 曲馬多 曲马多 泰莫西芬 他莫昔芬 codeine tramadol tamoxifen cyp2d6*10 cyp2d6*4',
  DPYD: '二氫嘧啶脫氫酶 二氢嘧啶脱氢酶 氟尿嘧啶 卡培他濱 卡培他滨 5-FU fluorouracil capecitabine dpyd*2a',
  UGT1A1: '尿苷二磷酸葡萄糖醛酸轉移酶 尿苷二磷酸葡萄糖醛酸转移酶 吉爾伯特症候群 吉尔伯特综合征 伊立替康 膽紅素 胆红素 irinotecan atazanavir ugt1a1*28 ugt1a1*6',
  LCT: '乳糖酶 乳糖不耐 乳糖不耐症 牛奶 腹瀉 腹泻 lactose lactase lactose intolerance rs4988235',
  CYP1A2: '細胞色素 P450 1A2 细胞色素 P450 1A2 咖啡因 咖啡 失眠 睡眠 caffeine coffee insomnia cyp1a2*1f rs762551',
  FTO: '肥胖 肥胖易感性 體重 体重 減重 减重 obesity body weight weight loss rs9939609',
  CYP2C9: '華法林 华法林 可邁丁 可迈丁 歐服寧 抗凝血 苯妥英 癲能停 塞來昔布 塞来昔布 希樂葆 西乐葆 美洛昔康 吡羅昔康 布洛芬 消炎止痛藥 消炎止痛药 warfarin coumadin phenytoin dilantin celecoxib celebrex flurbiprofen meloxicam piroxicam ibuprofen nsaid nsaids',
  VKORC1: '維生素 K 環氧化物還原酶 维生素 K 环氧化物还原酶 華法林 华法林 可邁丁 可迈丁 抗凝血敏感 納豆 纳豆 warfarin coumadin vitamin k anticoagulant rs9923231',
  SLCO1B1: '史他汀 他汀 降膽固醇藥 降胆固醇药 降血脂藥 降血脂药 辛伐他汀 素果 舒降之 阿托伐他汀 立普妥 瑞舒伐他汀 冠脂妥 橫紋肌溶解 横纹肌溶解 肌肉酸痛 肌病 紅麴 红曲 simvastatin zocor atorvastatin lipitor rosuvastatin crestor statin statins myopathy rhabdomyolysis rs4149056',
  TPMT: '硫嘌呤甲基轉移酶 硫嘌呤甲基转移酶 硫唑嘌呤 移護寧 依木蘭 依木兰 巰嘌呤 巯嘌呤 6-MP 硫鳥嘌呤 硫鸟嘌呤 骨髓抑制 白血球低下 白细胞减少 azathioprine imuran mercaptopurine 6-mercaptopurine thioguanine thiopurine tpmt*3a tpmt*3c',
  NUDT15: 'Nudix 水解酶 15 硫唑嘌呤 移護寧 依木蘭 依木兰 巰嘌呤 巯嘌呤 6-MP 硫鳥嘌呤 硫鸟嘌呤 硫嘌呤 骨髓抑制 白血球低下 掉髮 脱发 azathioprine imuran mercaptopurine thioguanine thiopurine nudt15*3 rs116855232',
  'HLA-B': '人類白血球抗原 B 人类白细胞抗原 B 卡馬西平 卡马西平 癲通 得舒妥 奥卡西平 奧卡西平 除癲達 苯妥英 別嘌醇 别嘌醇 安樂普利諾 痛風藥 痛风药 降尿酸 史蒂芬強森症候群 毒性表皮壞死溶解症 藥物過敏 药物过敏 carbamazepine tegretol oxcarbazepine trileptal phenytoin allopurinol zyloric sjs ten scar stevens-johnson hla-b*15:02 hla-b*1502 hla-b*58:01 hla-b*5801',
  HBB: '血紅素 β 鏈 血紅素β鏈 乙型地中海貧血 乙型地中海贫血 地中海貧血 地中海贫血 海洋性貧血 海洋性贫血 排鐵劑 排铁剂 輸血 输血 beta-thalassemia beta thalassemia thalassemia hemoglobin deferasirox transfusion',
  HBA1: '血紅素 α 鏈 血紅素α鏈 甲型地中海貧血 甲型地中海贫血 HBA2 alpha-thalassemia alpha thalassemia thalassemia hemoglobin alpha',
  SMN1: '運動神經元存活基因 运动神经元存活基因 脊髓性肌肉萎縮症 脊髓性肌萎缩症 脊髓性肌肉萎縮 肌肉萎縮 肌肉萎缩 諾西那生 诺西那生 瑞斯迪普蘭 瑞斯迪普兰 spinal muscular atrophy SMN1 SMN2 nusinersen onasemnogene risdiplam',
  GJB2: '間隙連接蛋白 间隙连接蛋白 先天性聽力損失 先天性听力损失 感音神經性聽力 感音神经性听力 耳聾 耳聋 人工耳蝸 人工耳蜗 GJB2 connexin 26 deafness hearing loss cochlear implant',
  LDLR: '低密度脂蛋白受體 低密度脂蛋白受体 家族性高膽固醇血症 家族性高胆固醇血症 高膽固醇 高胆固醇 壞膽固醇 坏胆固醇 史他汀 他汀 PCSK9 LDLR familial hypercholesterolemia hypercholesterolemia statin statins pcsk9',
  MYH7: '心肌肌凝蛋白重鏈 心肌肌凝蛋白重链 肥厚型心肌病變 肥厚型心肌病变 心肌肥厚 心律不整 心律不齐 瑪伐凱騰 玛伐凯腾 MYH7 hypertrophic cardiomyopathy cardiomyopathy mavacamten beta blocker beta blockers',
  MYBPC3: '心肌肌凝蛋白結合蛋白 心肌肌凝蛋白结合蛋白 肥厚型心肌病變 肥厚型心肌病变 心肌肥厚 心律不整 心律不齐 瑪伐凱騰 玛伐凯腾 MYBPC3 myosin binding protein hypertrophic cardiomyopathy cardiomyopathy mavacamten beta blocker beta blockers',
  FBN1: '微纖維蛋白 微纤维蛋白 馬凡氏症候群 马凡综合征 馬凡氏症 马凡氏症 主動脈瘤 主动脉瘤 水晶體異位 晶状体异位 脊椎側彎 脊柱侧弯 FBN1 Marfan Marfan syndrome aortic aneurysm ectopia lentis losartan beta blocker beta blockers',
  KCNQ1: '鉀離子通道 钾离子通道 長QT症候群 长QT综合征 長 QT 症候群 长 QT 综合征 長QT 长QT 暈厥 晕厥 心因性猝死 KCNQ1 Long QT long QT syndrome QT prolongation syncope sudden cardiac death CredibleMeds beta blocker beta blockers',
  KCNH2: '鉀離子通道 钾离子通道 長QT症候群 长QT综合征 長 QT 症候群 长 QT 综合征 長QT 长QT 暈厥 晕厥 心因性猝死 KCNH2 HERG Long QT long QT syndrome QT prolongation syncope sudden cardiac death CredibleMeds beta blocker beta blockers',
  SCN5A: '鈉離子通道 钠离子通道 布魯格達氏症候群 布鲁格达综合征 布魯格達 布鲁格达 心律不整 心律不齐 暈厥 晕厥 心因性猝死 發燒 发烧 SCN5A Brugada Brugada syndrome flecainide ajmaline procainamide Brugadadrugs fever',
  LMNA: '核纖層蛋白 核纤层蛋白 擴張型心肌病變 扩张型心肌病 心臟衰竭 心力衰竭 心律不整 心律不齐 LMNA lamin dilated cardiomyopathy heart failure ICD implantable cardioverter defibrillator',
  PCSK9: '前蛋白轉化酶 前蛋白转化酶 家族性高膽固醇血症 家族性高胆固醇血症 高膽固醇 高胆固醇 史他汀 他汀 依洛尤單抗 依洛尤单抗 阿利庫單抗 阿利库单抗 英克司蘭 英克西兰 PCSK9 Evolocumab Alirocumab Inclisiran statin statins familial hypercholesterolemia',
  BRCA2: '乳腺癌易感基因 2 號 乳腺癌易感基因 2 号 乳癌 卵巢癌 前列腺癌 胰臟癌 胰腺癌 奧拉帕利 奥拉帕利 他拉唑帕利 breast cancer ovarian cancer prostate cancer pancreatic cancer olaparib talazoparib brca2',
  PALB2: '乳癌 卵巢癌 胰臟癌 胰腺癌 奧拉帕利 奥拉帕利 breast cancer ovarian cancer pancreatic cancer olaparib palb2',
  MLH1: '林奇症候群 林奇综合征 遺傳性非息肉症大腸直腸癌 遗传性非息肉病性结直肠癌 HNPCC 大腸癌 大肠癌 子宮內膜癌 子宫内膜癌 帕博利珠單抗 帕博利珠单抗 納武利尤單抗 纳武利尤单抗 Lynch syndrome colorectal cancer endometrial cancer pembrolizumab nivolumab dmmr msi-h mlh1',
  MSH2: '林奇症候群 林奇综合征 遺傳性非息肉症大腸直腸癌 遗传性非息肉病性结直肠癌 HNPCC 大腸癌 大肠癌 子宮內膜癌 子宫内膜癌 帕博利珠單抗 帕博利珠单抗 納武利尤單抗 纳武利尤单抗 Lynch syndrome colorectal cancer endometrial cancer pembrolizumab nivolumab dmmr msi-h msh2',
  MSH6: '林奇症候群 林奇综合征 遺傳性非息肉症大腸直腸癌 遗传性非息肉病性结直肠癌 HNPCC 大腸癌 大肠癌 子宮內膜癌 子宫内膜癌 帕博利珠單抗 帕博利珠单抗 納武利尤單抗 纳武利尤单抗 Lynch syndrome colorectal cancer endometrial cancer pembrolizumab nivolumab dmmr msi-h msh6',
  PMS2: '林奇症候群 林奇综合征 遺傳性非息肉症大腸直腸癌 遗传性非息肉病性结直肠癌 HNPCC 大腸癌 大肠癌 子宮內膜癌 子宫内膜癌 帕博利珠單抗 帕博利珠单抗 納武利尤單抗 纳武利尤单抗 Lynch syndrome colorectal cancer endometrial cancer pembrolizumab nivolumab dmmr msi-h pms2',
  APC: '家族性腺瘤性息肉症 家族性腺瘤性息肉病 FAP 大腸息肉 大肠息肉 大腸癌 大肠癌 大腸切除 大肠切除 familial adenomatous polyposis polyposis colon cancer colectomy apc',
  PTEN: '考登症候群 考登综合征 Cowden PTEN 錯構瘤腫瘤症候群 错构瘤肿瘤综合征 大頭症 大头症 乳癌 甲狀腺癌 甲状腺癌 PTEN hamartoma tumor syndrome cowden syndrome macrocephaly breast cancer thyroid cancer pten',
  RET: '多發性內分泌腺瘤症 多发性内分泌腺瘤病 MEN2 髓質甲狀腺癌 髓质甲状腺癌 嗜鉻細胞瘤 嗜铬细胞瘤 塞爾帕替尼 塞尔帕替尼 普拉替尼 medullary thyroid carcinoma pheochromocytoma multiple endocrine neoplasia selpercatinib pralsetinib ret',
  VHL: '馮希佩爾-林道症候群 冯希佩尔-林道综合征 VHL 血管母細胞瘤 血管母细胞瘤 腎細胞癌 肾细胞癌 嗜鉻細胞瘤 嗜铬细胞瘤 貝組替凡 贝组替凡 von Hippel-Lindau hemangioblastoma renal cell carcinoma pheochromocytoma belzutifan vhl',
};

export function searchGenes(records, query) {
  const q = String(query || '').trim().toLowerCase();
  if (!records || !records.length) return [];
  if (!q) return records.map((record) => ({ record, matchedField: 'all', score: 0 }));

  const results = [];
  records.forEach((record) => {
    const fields = [
      ['gene_symbol', record.gene.symbol],
      ['gene_name', record.gene.name],
      ['gene_chinese_name', record.gene.chinese_name],
      ['disease_id', record.disease.id],
      ['disease_name', record.disease.name],
      ['disease_chinese_name', record.disease.chinese_name],
      ['inheritance', record.disease.inheritance_mode],
      ...(record.disease.categories || []).map((value) => ['disease_category', value]),
      ...(record.phenotypes || []).flatMap((item) => [
        ['phenotype', item.name],
        ['phenotype', item.chinese_name],
        ['phenotype', item.hpo_id],
      ]),
      ...(record.drugs_targeted || []).flatMap((item) => [
        ['drug', item.drug_name],
        ['drug', item.chinese_name],
        ['drug', item.mechanism],
      ]),
      ['pgx_key_variant', record.pharmacogenomics.key_variant],
      ['pgx_summary', record.pharmacogenomics.traffic_light_summary],
      ...(record.pharmacogenomics.drugs_guide || []).flatMap((item) => [
        ['pgx_drug', item.drug_name],
        ['pgx_drug', item.chinese_name],
        ['cpic_level', item.cpic_level],
      ]),
      ['rsid', (record.pharmacogenomics.key_variant.match(/rs\d+/gi) || []).join(' ')],
      ['myth', record.myth_buster.myth],
      ['truth', record.myth_buster.truth],
      ['synonym', SEARCH_SYNONYMS[record.gene.symbol] || ''],
    ];

    let best = { score: 0, matchedField: '' };
    fields.forEach(([field, value]) => {
      const text = String(value || '').toLowerCase();
      if (!text) return;
      let score = 0;
      if (text === q) score = 100;
      else if (text.startsWith(q)) score = 80;
      else if (text.includes(q)) score = 60;
      if (score > best.score) best = { score, matchedField: field };
    });

    if (best.score > 0) results.push({ record, ...best });
  });

  return results.sort((a, b) => b.score - a.score);
}
