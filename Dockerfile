# Multi-stage Dockerfile: React static bundle + FastAPI runtime
FROM node:20-alpine AS frontend-build
WORKDIR /web
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY frontend/ ./
RUN npm run build

FROM python:3.11-slim AS runtime
WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    DATA_DIR=/app/data \
    ZERO_RETENTION_MODE=true

COPY backend/requirements.txt ./backend/requirements.txt
RUN pip install --no-cache-dir -r backend/requirements.txt

COPY backend/ ./backend/
COPY data/ ./data/
COPY scripts/ ./scripts/
COPY pipeline/ ./pipeline/
COPY --from=frontend-build /web/dist ./frontend/dist

# Fail-closed build-time verification of the 7-gene Dual-Mode dataset
RUN python -B scripts/validate_schema.py

EXPOSE 8000
CMD ["uvicorn", "backend.app.main:app", "--host", "0.0.0.0", "--port", "8000"]
