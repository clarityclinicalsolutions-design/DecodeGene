import { useEffect, useMemo, useState } from 'react';
import { fetchGenes, DATA_SOURCE } from './services/apiClient';
import { localizeRecord, t } from './i18n/translations';
import GeneSearch from './components/GeneSearch';
import MetaphorCard from './components/MetaphorCard';
import PGxTrafficLightCard from './components/PGxTrafficLightCard';
import LifestyleCard from './components/LifestyleCard';
import ProDetails from './components/ProDetails';
import ReportDecoder from './components/ReportDecoder';
import FamilySimulator from './components/FamilySimulator';
import DoctorChecklistModal from './components/DoctorChecklistModal';
import MythBusterSection from './components/MythBusterSection';

function ChecklistCard({ record, onOpen, lang }) {
  return (
    <article className="card checklist-card">
      <div className="card-eyebrow">{t(lang, 'checklistEyebrow')}</div>
      <h2>{t(lang, 'checklistTitle')}</h2>
      <p className="checklist-specialty">
        {t(lang, 'checklistSpecialty')}
        {record.doctor_checklist.specialty}
      </p>
      <ol className="checklist-preview">
        {record.doctor_checklist.questions.slice(0, 2).map((question) => (
          <li key={question}>{question}</li>
        ))}
      </ol>
      <button type="button" className="primary-button" onClick={onOpen}>
        {t(lang, 'checklistOpenBtn')}
      </button>
    </article>
  );
}

function SimpleGuide({ lang }) {
  return (
    <article className="card guide-card">
      <div className="card-eyebrow">{t(lang, 'guideEyebrow')}</div>
      <h2>{t(lang, 'guideTitle')}</h2>
      <ol className="guide-steps">
        <li>
          <span>1</span>
          <div>
            <strong>{t(lang, 'guideStep1Title')}</strong>
            <p>{t(lang, 'guideStep1Desc')}</p>
          </div>
        </li>
        <li>
          <span>2</span>
          <div>
            <strong>{t(lang, 'guideStep2Title')}</strong>
            <p>{t(lang, 'guideStep2Desc')}</p>
          </div>
        </li>
        <li>
          <span>3</span>
          <div>
            <strong>{t(lang, 'guideStep3Title')}</strong>
            <p>{t(lang, 'guideStep3Desc')}</p>
          </div>
        </li>
      </ol>
      <p className="guide-note">{t(lang, 'guideNote')}</p>
    </article>
  );
}


export default function App() {
  const [lang, setLang] = useState('zh-TW');
  const [mode, setMode] = useState('simple');
  const [genes, setGenes] = useState([]);
  const [source, setSource] = useState('loading');
  const [activeSymbol, setActiveSymbol] = useState('BRCA1');
  const [query, setQuery] = useState('');
  const [checklistOpen, setChecklistOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetchGenes().then(({ genes: loaded, source: loadedSource }) => {
      if (!mounted) return;
      setGenes(loaded);
      setSource(loadedSource);
      if (loaded.length && !loaded.some((record) => record.gene.symbol === 'BRCA1')) {
        setActiveSymbol(loaded[0].gene.symbol);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const localizedGenes = useMemo(
    () => genes.map((record) => localizeRecord(record, lang)),
    [genes, lang]
  );

  const activeRecord = useMemo(
    () =>
      localizedGenes.find((record) => record.gene.symbol === activeSymbol) ||
      localizedGenes[0] ||
      null,
    [localizedGenes, activeSymbol]
  );

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <span className="brand-logo" aria-hidden="true">🧬</span>
          <div>
            <h1>
              DecodeGene <span>{lang === 'en' ? 'Genomic Copilot' : '解碼基因'}</span>
            </h1>
            <p>{t(lang, 'brandSubtitle')}</p>
          </div>
        </div>

        <div className="header-actions">
          <div className="mode-switch" role="group" aria-label="Display Mode Switcher">
            <button
              type="button"
              className={mode === 'simple' ? 'active' : ''}
              onClick={() => setMode('simple')}
            >
              {t(lang, 'modeSimple')}
            </button>
            <button
              type="button"
              className={mode === 'pro' ? 'active' : ''}
              onClick={() => setMode('pro')}
            >
              {t(lang, 'modePro')}
            </button>
          </div>

          <div className="lang-switch" role="group" aria-label="Language Switcher">
            <button
              type="button"
              className={lang === 'zh-TW' ? 'active' : ''}
              onClick={() => setLang('zh-TW')}
            >
              繁體中文
            </button>
            <button
              type="button"
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
            >
              English
            </button>
          </div>

          <span className={`source-badge source-${source}`}>
            {source === DATA_SOURCE.BACKEND
              ? t(lang, 'sourceBackend')
              : source === DATA_SOURCE.DEMO
                ? t(lang, 'sourceDemo')
                : t(lang, 'sourceLoading')}
          </span>
        </div>
      </header>

      <main className="app-main">
        <section className="hero">
          <div className="hero-copy">
            <span className="hero-kicker">{t(lang, 'heroKicker')}</span>
            <h2>
              {t(lang, 'heroTitle1')}
              <br />
              {t(lang, 'heroTitle2')}
            </h2>
            <p>{t(lang, 'heroLead')}</p>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>{genes.length || 7}</strong>
              <span>{t(lang, 'statGenes')}</span>
            </div>
            <div className="hero-stat">
              <strong>100%</strong>
              <span>{t(lang, 'statPrivacy')}</span>
            </div>
            <div className="hero-stat">
              <strong>{lang === 'en' ? '3-Color' : '3 色'}</strong>
              <span>{t(lang, 'statLights')}</span>
            </div>
            <div className="hero-stat">
              <strong>0</strong>
              <span>{t(lang, 'statHallucination')}</span>
            </div>
          </div>
        </section>

        <GeneSearch
          genes={localizedGenes}
          query={query}
          onQueryChange={setQuery}
          activeSymbol={activeRecord?.gene.symbol || activeSymbol}
          onSelect={setActiveSymbol}
          lang={lang}
        />

        {!activeRecord ? (
          <div className="loading-card">
            <span className="spinner" aria-hidden="true" />
            {t(lang, 'loadingText')}
          </div>
        ) : (
          <>
            <div className="content-grid">
              <div className="content-column">
                <MetaphorCard record={activeRecord} mode={mode} lang={lang} />
                <PGxTrafficLightCard record={activeRecord} lang={lang} />
                <LifestyleCard record={activeRecord} lang={lang} />
              </div>
              <div className="content-column">
                {mode === 'pro' ? (
                  <ProDetails record={activeRecord} lang={lang} />
                ) : (
                  <SimpleGuide lang={lang} />
                )}
                <ChecklistCard
                  record={activeRecord}
                  onOpen={() => setChecklistOpen(true)}
                  lang={lang}
                />
              </div>
            </div>

            <ReportDecoder genes={localizedGenes} lang={lang} />
            <FamilySimulator lang={lang} />
            <MythBusterSection
              genes={localizedGenes}
              activeSymbol={activeRecord.gene.symbol}
              lang={lang}
            />
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>{t(lang, 'footerDisclaimer')}</p>
        <p className="footer-meta">{t(lang, 'footerMeta')}</p>
      </footer>

      <DoctorChecklistModal
        record={activeRecord}
        open={checklistOpen}
        onClose={() => setChecklistOpen(false)}
        lang={lang}
      />
    </div>
  );
}
