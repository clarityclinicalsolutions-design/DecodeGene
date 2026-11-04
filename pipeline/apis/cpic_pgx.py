"""Async CPIC pharmacogenomics client with traffic-light mapping."""
from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Dict, Iterable, List, Optional

import httpx

from backend.app.models.schema import TrafficLight

TRAFFIC_LIGHT_LABELS: Dict[TrafficLight, str] = {
    TrafficLight.RED_AVOID: "🔴 禁用/无效高危",
    TrafficLight.YELLOW_CAUTION: "🟡 慎用/减量监测",
    TrafficLight.GREEN_NORMAL: "🟢 常规使用",
}

_RED_KEYWORDS = (
    "avoid",
    "contraindicated",
    "do not use",
    "do not prescribe",
    "high risk",
    "toxic",
    "ineffective",
    "禁用",
    "无效",
    "高危",
    "禁止",
)
_YELLOW_KEYWORDS = (
    "caution",
    "reduce",
    "decrease",
    "increase dose",
    "adjust",
    "monitor",
    "consider",
    "alternative",
    "慎用",
    "减量",
    "调整",
    "监测",
    "考虑",
)
_GREEN_KEYWORDS = (
    "normal",
    "standard",
    "routine",
    "use as directed",
    "no change",
    "常规",
    "标准",
    "无需调整",
)


class CPICError(RuntimeError):
    """Raised when the CPIC API cannot satisfy a request."""


@dataclass(frozen=True)
class CPICRecommendation:
    recommendation_id: Optional[str]
    gene: Optional[str]
    drug: Optional[str]
    phenotype: Optional[str]
    recommendation: Optional[str]
    classification: Optional[str]
    traffic_light: TrafficLight
    chinese_label: str

    def to_dict(self) -> Dict[str, Any]:
        return {
            "recommendation_id": self.recommendation_id,
            "gene": self.gene,
            "drug": self.drug,
            "phenotype": self.phenotype,
            "recommendation": self.recommendation,
            "classification": self.classification,
            "traffic_light": self.traffic_light.value,
            "chinese_label": self.chinese_label,
        }


def map_recommendation_to_traffic_light(recommendation: Optional[str]) -> TrafficLight:
    """Map free-text CPIC guidance to the three-state traffic light.

    Ambiguous/empty guidance defaults to ``YELLOW_CAUTION`` so that a human
    reviewer is prompted rather than silently told a drug is safe.
    """
    text = (recommendation or "").strip().lower()
    if not text:
        return TrafficLight.YELLOW_CAUTION
    if any(keyword in text for keyword in _RED_KEYWORDS):
        return TrafficLight.RED_AVOID
    if any(keyword in text for keyword in _YELLOW_KEYWORDS):
        return TrafficLight.YELLOW_CAUTION
    if any(keyword in text for keyword in _GREEN_KEYWORDS):
        return TrafficLight.GREEN_NORMAL
    return TrafficLight.YELLOW_CAUTION


class CPICClient:
    """Minimal async client for the CPIC PostgREST API."""

    BASE_URL = "https://api.cpicpgx.org/v1"
    map_recommendation_to_traffic_light = staticmethod(map_recommendation_to_traffic_light)

    def __init__(
        self,
        base_url: str = BASE_URL,
        timeout: float = 30.0,
        client: Optional[httpx.AsyncClient] = None,
    ) -> None:
        self.base_url = base_url.rstrip("/")
        self.timeout = timeout
        self._client = client
        self._owns_client = client is None

    async def __aenter__(self) -> "CPICClient":
        return self

    async def __aexit__(self, *exc_info: object) -> None:
        await self.close()

    async def close(self) -> None:
        if self._owns_client and self._client is not None:
            await self._client.aclose()
            self._client = None

    def _http(self) -> httpx.AsyncClient:
        if self._client is None:
            self._client = httpx.AsyncClient(timeout=self.timeout)
            self._owns_client = True
        return self._client

    async def _get(self, path: str, params: Optional[Dict[str, str]] = None) -> List[Dict[str, Any]]:
        try:
            response = await self._http().get(f"{self.base_url}{path}", params=params or {})
            response.raise_for_status()
            payload = response.json()
        except Exception as exc:  # pragma: no cover - network dependent
            raise CPICError(f"CPIC request failed: {exc}") from exc
        if isinstance(payload, list):
            return payload
        return [payload] if isinstance(payload, dict) else []

    async def fetch_genes(self, gene: Optional[str] = None) -> List[Dict[str, Any]]:
        params = {"genesymbol": f"eq.{gene}"} if gene else None
        return await self._get("/gene", params)

    async def fetch_recommendations(
        self, gene: str, limit: int = 50
    ) -> List[CPICRecommendation]:
        rows = await self._get(
            "/recommendation",
            {"genes": f"eq.{gene}", "limit": str(limit)},
        )
        results: List[CPICRecommendation] = []
        for row in rows:
            text = row.get("recommendation") or row.get("implications") or ""
            light = map_recommendation_to_traffic_light(text)
            results.append(
                CPICRecommendation(
                    recommendation_id=str(row.get("id")) if row.get("id") is not None else None,
                    gene=row.get("genes") or gene,
                    drug=row.get("drugname") or row.get("drug"),
                    phenotype=row.get("phenotypes"),
                    recommendation=text or None,
                    classification=row.get("classification"),
                    traffic_light=light,
                    chinese_label=TRAFFIC_LIGHT_LABELS[light],
                )
            )
        return results

    async def get_traffic_lights(self, genes: Iterable[str]) -> Dict[str, List[CPICRecommendation]]:
        out: Dict[str, List[CPICRecommendation]] = {}
        for gene in genes:
            try:
                out[gene] = await self.fetch_recommendations(gene)
            except CPICError:
                out[gene] = []
        return out

    # Discoverability aliases.
    fetch_drug_recommendations = fetch_recommendations
    get_recommendations = fetch_recommendations
