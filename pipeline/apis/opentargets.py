"""Async Open Targets GraphQL client.

The client is intentionally read-only and offline-safe: every method returns
structured results and raises a typed error on transport failures. It never
writes to the curated dataset.
"""
from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any, Dict, Iterable, List, Optional

import httpx

OPEN_TARGETS_GRAPHQL = "https://api.platform.opentargets.org/api/v4/graphql"

_TARGET_QUERY = """
query TargetEvidence($ensemblId: String!, $size: Int!) {
  target(ensemblId: $ensemblId) {
    id
    approvedSymbol
    approvedName
    biotype
    associatedDiseases(page: {index: 0, size: $size}) {
      count
      rows {
        score
        disease { id name }
      }
    }
    knownDrugs {
      count
      rows {
        phase
        status
        drug { id name }
      }
    }
  }
}
"""


class OpenTargetsError(RuntimeError):
    """Raised when Open Targets cannot satisfy a request."""


@dataclass(frozen=True)
class DiseaseAssociation:
    disease_id: str
    disease_name: str
    score: float


@dataclass(frozen=True)
class DrugPipelineEntry:
    drug_id: Optional[str]
    drug_name: Optional[str]
    phase: Optional[float]
    status: Optional[str]


@dataclass(frozen=True)
class TargetEvidence:
    ensembl_id: str
    symbol: Optional[str]
    name: Optional[str]
    biotype: Optional[str]
    associated_diseases: List[DiseaseAssociation] = field(default_factory=list)
    known_drugs: List[DrugPipelineEntry] = field(default_factory=list)

    def top_disease(self) -> Optional[DiseaseAssociation]:
        return self.associated_diseases[0] if self.associated_diseases else None

    def to_dict(self) -> Dict[str, Any]:
        return {
            "ensembl_id": self.ensembl_id,
            "symbol": self.symbol,
            "name": self.name,
            "biotype": self.biotype,
            "associated_diseases": [d.__dict__ for d in self.associated_diseases],
            "known_drugs": [d.__dict__ for d in self.known_drugs],
        }


class OpenTargetsClient:
    """Minimal async client for target -> disease evidence."""

    def __init__(
        self,
        endpoint: str = OPEN_TARGETS_GRAPHQL,
        timeout: float = 30.0,
        client: Optional[httpx.AsyncClient] = None,
    ) -> None:
        self.endpoint = endpoint
        self.timeout = timeout
        self._client = client
        self._owns_client = client is None

    async def __aenter__(self) -> "OpenTargetsClient":
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

    async def _execute(self, query: str, variables: Dict[str, Any]) -> Dict[str, Any]:
        try:
            response = await self._http().post(
                self.endpoint,
                json={"query": query, "variables": variables},
                headers={"Content-Type": "application/json"},
            )
            response.raise_for_status()
            payload = response.json()
        except Exception as exc:  # pragma: no cover - network dependent
            raise OpenTargetsError(f"Open Targets request failed: {exc}") from exc

        if "errors" in payload:
            raise OpenTargetsError(f"Open Targets GraphQL errors: {payload['errors']}")
        return payload.get("data") or {}

    async def fetch_target(self, ensembl_id: str, size: int = 10) -> TargetEvidence:
        data = await self._execute(_TARGET_QUERY, {"ensemblId": ensembl_id, "size": size})
        target = data.get("target")
        if not target:
            raise OpenTargetsError(f"Target not found: {ensembl_id}")

        diseases = [
            DiseaseAssociation(
                disease_id=row.get("disease", {}).get("id", ""),
                disease_name=row.get("disease", {}).get("name", ""),
                score=float(row.get("score") or 0.0),
            )
            for row in (target.get("associatedDiseases") or {}).get("rows", [])
        ]
        diseases.sort(key=lambda item: item.score, reverse=True)

        drugs = [
            DrugPipelineEntry(
                drug_id=row.get("drug", {}).get("id"),
                drug_name=row.get("drug", {}).get("name"),
                phase=row.get("phase"),
                status=row.get("status"),
            )
            for row in (target.get("knownDrugs") or {}).get("rows", [])
        ]

        return TargetEvidence(
            ensembl_id=target.get("id", ensembl_id),
            symbol=target.get("approvedSymbol"),
            name=target.get("approvedName"),
            biotype=target.get("biotype"),
            associated_diseases=diseases,
            known_drugs=drugs,
        )

    async def fetch_many(self, ensembl_ids: Iterable[str], size: int = 5) -> List[TargetEvidence]:
        results: List[TargetEvidence] = []
        for ensembl_id in ensembl_ids:
            try:
                results.append(await self.fetch_target(ensembl_id, size=size))
            except OpenTargetsError:
                continue
        return results

    # Blueprint-friendly alias.
    fetch_association = fetch_target
