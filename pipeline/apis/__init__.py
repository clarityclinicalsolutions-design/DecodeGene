"""External evidence API clients."""

from .clinvar import ClinVarClient, map_pathogenicity
from .cpic_pgx import CPICClient, map_recommendation_to_traffic_light
from .opentargets import OpenTargetsClient

__all__ = [
    "ClinVarClient",
    "CPICClient",
    "OpenTargetsClient",
    "map_pathogenicity",
    "map_recommendation_to_traffic_light",
]
