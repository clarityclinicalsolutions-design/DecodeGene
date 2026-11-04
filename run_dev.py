#!/usr/bin/env python3
"""One-command development launcher: FastAPI backend + Vite frontend.

Usage:
    python run_dev.py

The backend runs on http://127.0.0.1:8000 and the frontend on
http://127.0.0.1:5173 (Vite proxies ``/api`` to the backend).
"""
from __future__ import annotations

import os
import shutil
import signal
import subprocess
import sys
import time
import webbrowser
from pathlib import Path

ROOT = Path(__file__).resolve().parent
FRONTEND = ROOT / "frontend"


def _spawn(command: list[str], cwd: Path) -> subprocess.Popen:
    creationflags = 0
    if os.name == "nt":
        creationflags = getattr(subprocess, "CREATE_NEW_PROCESS_GROUP", 0)
    return subprocess.Popen(command, cwd=str(cwd), creationflags=creationflags)


def main() -> int:
    backend = _spawn(
        [
            sys.executable,
            "-m",
            "uvicorn",
            "backend.app.main:app",
            "--reload",
            "--host",
            "127.0.0.1",
            "--port",
            "8000",
        ],
        ROOT,
    )

    frontend = None
    npm = shutil.which("npm")
    if npm and (FRONTEND / "node_modules").is_dir():
        frontend_command = [npm, "run", "dev"]
        if os.name == "nt" and npm.lower().endswith((".cmd", ".bat")):
            frontend_command = ["cmd", "/c", npm, "run", "dev"]
        frontend = _spawn(frontend_command, FRONTEND)
    else:
        print(
            "[DecodeGene] Frontend dependencies not installed. "
            "Run `cd frontend && npm install`, or open frontend/standalone.html directly.",
            flush=True,
        )

    processes = [process for process in (frontend, backend) if process is not None]

    def _shutdown(*_args: object) -> None:
        for process in processes:
            if process.poll() is None:
                process.terminate()
        raise SystemExit(0)

    signal.signal(signal.SIGINT, _shutdown)
    if hasattr(signal, "SIGTERM"):
        signal.signal(signal.SIGTERM, _shutdown)

    print("[DecodeGene] Backend:  http://127.0.0.1:8000/docs", flush=True)
    if frontend is not None:
        print("[DecodeGene] Frontend: http://127.0.0.1:5173", flush=True)
    print("[DecodeGene] Press Ctrl+C to stop both processes.", flush=True)

    try:
        time.sleep(2.5)
        if frontend is not None:
            webbrowser.open("http://127.0.0.1:5173")
        while True:
            for process in processes:
                if process.poll() is not None:
                    return process.returncode or 0
            time.sleep(1)
    except KeyboardInterrupt:
        _shutdown()
        return 0
    finally:
        for process in processes:
            if process.poll() is None:
                process.terminate()


if __name__ == "__main__":
    raise SystemExit(main())
