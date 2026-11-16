"""Application configuration for DecodeGene.

Settings are intentionally dependency-light: they can be read from environment
variables or an optional ``backend/.env`` file. Nothing here ever writes user
data to disk, which keeps the default zero-retention guarantee intact.
"""
from __future__ import annotations

import os
from dataclasses import dataclass
from functools import lru_cache
from pathlib import Path
from typing import Optional, Tuple

ROOT_DIR = Path(__file__).resolve().parents[3]

DEFAULT_CORS_ORIGINS: Tuple[str, ...] = (
    "https://decodegene.pages.dev",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
)


def _load_dotenv_files() -> None:
    """Best-effort loading of local ``.env`` files (never required)."""
    try:
        from dotenv import load_dotenv
    except Exception:  # pragma: no cover - dotenv is an optional convenience
        return
    for candidate in (ROOT_DIR / "backend" / ".env", ROOT_DIR / ".env"):
        if candidate.exists():
            load_dotenv(candidate, override=False)


def _as_bool(value: Optional[str], default: bool = True) -> bool:
    if value is None:
        return default
    return value.strip().lower() in {"1", "true", "yes", "y", "on"}


def _parse_cors_origins(value: Optional[str]) -> Tuple[str, ...]:
    if value is None or not value.strip():
        return DEFAULT_CORS_ORIGINS
    items = tuple(origin.strip() for origin in value.split(",") if origin.strip())
    return items or DEFAULT_CORS_ORIGINS


@dataclass(frozen=True)
class Settings:
    """Immutable runtime settings."""

    deepseek_api_key: Optional[str]
    deepseek_base_url: str
    deepseek_model: str
    data_dir: Path
    sample_data_path: Path
    zero_retention_mode: bool
    log_level: str
    app_host: str
    app_port: int
    cors_origins: Tuple[str, ...] = DEFAULT_CORS_ORIGINS
    enable_docs: bool = False
    rate_limit_per_minute: int = 30

    @property
    def ai_enabled(self) -> bool:
        """True only when a non-placeholder DeepSeek key is configured."""
        key = (self.deepseek_api_key or "").strip()
        if not key:
            return False
        lowered = key.lower()
        if lowered.startswith("your_") or "placeholder" in lowered:
            return False
        return True

    @property
    def sample_file(self) -> Path:
        if self.sample_data_path.exists():
            return self.sample_data_path
        return self.data_dir / "sample" / "demo_associations.json"

    # Uppercase aliases mirror the environment-variable names so callers can
    # use either style without surprises.
    @property
    def DEEPSEEK_API_KEY(self) -> Optional[str]:
        return self.deepseek_api_key

    @property
    def DEEPSEEK_BASE_URL(self) -> str:
        return self.deepseek_base_url

    @property
    def DATA_DIR(self) -> Path:
        return self.data_dir

    @property
    def ZERO_RETENTION_MODE(self) -> bool:
        return self.zero_retention_mode


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    _load_dotenv_files()

    data_dir = Path(os.getenv("DATA_DIR", str(ROOT_DIR / "data"))).expanduser()
    if not data_dir.is_absolute():
        data_dir = (ROOT_DIR / data_dir).resolve()

    sample_env = os.getenv("SAMPLE_DATA_PATH")
    if sample_env:
        sample_path = Path(sample_env).expanduser()
        if not sample_path.is_absolute():
            sample_path = (ROOT_DIR / sample_path).resolve()
    else:
        sample_path = data_dir / "sample" / "demo_associations.json"

    try:
        app_port = int(os.getenv("APP_PORT", "8000"))
    except ValueError:
        app_port = 8000

    try:
        rate_limit = max(1, int(os.getenv("RATE_LIMIT_PER_MINUTE", "30")))
    except ValueError:
        rate_limit = 30

    return Settings(
        deepseek_api_key=os.getenv("DEEPSEEK_API_KEY"),
        deepseek_base_url=os.getenv("DEEPSEEK_BASE_URL", "https://api.deepseek.com/v1").rstrip("/"),
        deepseek_model=os.getenv("DEEPSEEK_MODEL", "deepseek-chat"),
        data_dir=data_dir,
        sample_data_path=sample_path,
        zero_retention_mode=_as_bool(os.getenv("ZERO_RETENTION_MODE"), default=True),
        log_level=os.getenv("LOG_LEVEL", "INFO").upper(),
        app_host=os.getenv("APP_HOST", "0.0.0.0"),
        app_port=app_port,
        cors_origins=_parse_cors_origins(os.getenv("CORS_ORIGINS")),
        enable_docs=_as_bool(os.getenv("ENABLE_DOCS"), default=False),
        rate_limit_per_minute=rate_limit,
    )


def reset_settings_cache() -> None:
    """Clear the cached settings (used by tests and reload tooling)."""
    get_settings.cache_clear()


# Convenience module-level handles used by simple scripts and tests.
settings = get_settings()
DEEPSEEK_API_KEY = settings.deepseek_api_key
DEEPSEEK_BASE_URL = settings.deepseek_base_url
DATA_DIR = settings.data_dir
ZERO_RETENTION_MODE = settings.zero_retention_mode
