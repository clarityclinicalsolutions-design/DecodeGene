"""Async ClinVar E-utilities client with Chinese consumer badges."""
from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Dict, List, Optional

import httpx

CLINVAR_BADGE_PATHOGENIC = "⚠️ 明确风险变异 (需医学关注)"
CLINVAR_BADGE_BENIGN = "✅ 良性变异 (无需担心)"
CLINVAR_BADGE_VUS = "❓ 意义未明变异 (持续研究中)"


class ClinVarError(RuntimeError):
    """Raised when NCBI E-utilities cannot satisfy a request."""


@dataclass(frozen=True)
class ClinVarVariant:
    variation_id: str
    title: Optional[str]
    clinical_significance: Optional[str]
    chinese_badge: str
    review_status: Optional[str]
    last_updated: Optional[str]

    def to_dict(self) -> Dict[str, Any]:
        return {
            "variation_id": self.variation_id,
            "title": self.title,
            "clinical_significance": self.clinical_significance,
            "chinese_badge": self.chinese_badge,
            "review_status": self.review_status,
            "last_updated": self.last_updated,
        }


def map_pathogenicity(significance: Optional[str]) -> str:
    """Map a ClinVar germline classification to a Chinese consumer badge."""
    text = (significance or "").strip().lower()
    if not text:
        return CLINVAR_BADGE_VUS
    # Conflicting classifications must not be presented as definitive.
    if "conflict" in text:
        return CLINVAR_BADGE_VUS
    if "pathogenic" in text:
        return CLINVAR_BADGE_PATHOGENIC
    if "benign" in text:
        return CLINVAR_BADGE_BENIGN
    if "uncertain" in text or "vus" in text or "not provided" in text:
        return CLINVAR_BADGE_VUS
    return CLINVAR_BADGE_VUS


class ClinVarClient:
    """Thin async wrapper around NCBI esearch / esummary."""

    BASE_URL = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils"
    map_pathogenicity = staticmethod(map_pathogenicity)

    def __init__(
        self,
        base_url: str = BASE_URL,
        timeout: float = 30.0,
        tool: str = "decodegene",
        email: Optional[str] = None,
        client: Optional[httpx.AsyncClient] = None,
    ) -> None:
        self.base_url = base_url.rstrip("/")
        self.timeout = timeout
        self.tool = tool
        self.email = email
        self._client = client
        self._owns_client = client is None

    async def __aenter__(self) -> "ClinVarClient":
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

    def _common_params(self) -> Dict[str, str]:
        params = {"tool": self.tool, "retmode": "json"}
        if self.email:
            params["email"] = self.email
        return params

    async def search(self, query: str, retmax: int = 10) -> List[str]:
        params = {
            **self._common_params(),
            "db": "clinvar",
            "term": query,
            "retmax": str(retmax),
        }
        try:
            response = await self._http().get(f"{self.base_url}/esearch.fcgi", params=params)
            response.raise_for_status()
            payload = response.json()
        except Exception as exc:  # pragma: no cover - network dependent
            raise ClinVarError(f"ClinVar esearch failed: {exc}") from exc
        return list(payload.get("esearchresult", {}).get("idlist", []))

    async def summary(self, variation_ids: List[str]) -> List[ClinVarVariant]:
        if not variation_ids:
            return []
        params = {
            **self._common_params(),
            "db": "clinvar",
            "id": ",".join(variation_ids),
        }
        try:
            response = await self._http().get(f"{self.base_url}/esummary.fcgi", params=params)
            response.raise_for_status()
            payload = response.json()
        except Exception as exc:  # pragma: no cover - network dependent
            raise ClinVarError(f"ClinVar esummary failed: {exc}") from exc

        result = payload.get("result", {})
        variants: List[ClinVarVariant] = []
        for variation_id in variation_ids:
            item = result.get(variation_id)
            if not isinstance(item, dict):
                continue
            germline = item.get("germline_classification") or {}
            clinical = item.get("clinical_significance") or {}
            significance = germline.get("description") or clinical.get("description")
            variants.append(
                ClinVarVariant(
                    variation_id=str(item.get("uid", variation_id)),
                    title=item.get("title"),
                    clinical_significance=significance,
                    chinese_badge=map_pathogenicity(significance),
                    review_status=germline.get("review_status"),
                    last_updated=germline.get("last_evaluated"),
                )
            )
        return variants

    async def query_variants(self, query: str, retmax: int = 10) -> List[ClinVarVariant]:
        ids = await self.search(query, retmax=retmax)
        return await self.summary(ids)

    async def classify_variant(self, variation_id: str) -> Optional[ClinVarVariant]:
        variants = await self.summary([str(variation_id)])
        return variants[0] if variants else None
