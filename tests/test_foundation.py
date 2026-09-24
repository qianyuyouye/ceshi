import json
from pathlib import Path

FOUNDATION = Path(__file__).resolve().parent.parent / "kadda" / "foundation.json"


def test_foundation_json():
    data = json.loads(FOUNDATION.read_text(encoding="utf-8"))
    assert data["stack"]["language"] == "python"
    assert data["stack"]["test_runner"] == "pytest"
    assert data["src_dirs"] == ["src"]
    assert data["test_dirs"] == ["tests"]
