import demoData from '../data/demo_associations.json';
import {
  CircuitBreakerError,
  CIRCUIT_BREAKER_MESSAGE,
  calculateInheritance as localCalculate,
  localDecodeReport,
} from './localEngine';

const STATIC_DEMO = import.meta.env.VITE_STATIC_DEMO === 'true';
const API_BASE = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

export const DATA_SOURCE = {
  BACKEND: 'backend',
  DEMO: 'demo',
};

export function isStaticDemo() {
  return STATIC_DEMO;
}

async function readErrorDetail(response) {
  try {
    const body = await response.json();
    return body.detail || body.message || `HTTP ${response.status}`;
  } catch {
    return `HTTP ${response.status}`;
  }
}

export async function fetchGenes() {
  if (STATIC_DEMO) {
    return { genes: demoData, source: DATA_SOURCE.DEMO };
  }
  try {
    const response = await fetch(`${API_BASE}/api/v1/genes`, {
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return { genes: await response.json(), source: DATA_SOURCE.BACKEND };
  } catch {
    return { genes: demoData, source: DATA_SOURCE.DEMO };
  }
}

export async function decodeReport(rawText, genes = demoData, lang = 'zh-TW') {
  if (STATIC_DEMO || lang === 'en') {
    return { ...localDecodeReport(rawText, genes, lang), _source: DATA_SOURCE.DEMO };
  }
  try {
    const response = await fetch(`${API_BASE}/api/v1/report/scrub-and-decode`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ raw_text: rawText }),
    });
    if (response.status === 404) {
      throw new CircuitBreakerError(await readErrorDetail(response));
    }
    if (!response.ok) throw new Error(await readErrorDetail(response));
    return { ...(await response.json()), _source: DATA_SOURCE.BACKEND };
  } catch (error) {
    if (error instanceof CircuitBreakerError) throw error;
    // Backend unreachable: the static local engine still works offline.
    return { ...localDecodeReport(rawText, genes, lang), _source: DATA_SOURCE.DEMO };
  }
}

export async function calculateInheritance(payload) {
  if (STATIC_DEMO) return localCalculate(payload);
  try {
    const response = await fetch(`${API_BASE}/api/v1/calculate/inheritance`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch {
    return localCalculate(payload);
  }
}

export { CIRCUIT_BREAKER_MESSAGE };
