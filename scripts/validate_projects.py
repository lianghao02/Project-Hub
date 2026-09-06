"""Validate Project-Hub showcase metadata without external services."""
from __future__ import annotations
import json
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent
DATA_FILE = ROOT / "data" / "projects.json"
REQUIRED = {"name", "category", "description", "tags", "url", "image", "alt", "icon", "iconColor", "badge", "badgeClass", "version", "action", "featured"}
VALID_CATEGORIES = {"web", "native", "ai"}

def main() -> int:
    errors: list[str] = []
    try: projects = json.loads(DATA_FILE.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as error:
        print(f"FAIL: cannot read {DATA_FILE.name}: {error}"); return 1
    if not isinstance(projects, list) or not projects: errors.append("projects.json must contain a non-empty array")
    names, urls = set(), set()
    for index, project in enumerate(projects, 1):
        label = f"project {index}"
        if not isinstance(project, dict): errors.append(f"{label} must be an object"); continue
        missing = REQUIRED - project.keys()
        if missing: errors.append(f"{label} missing: {', '.join(sorted(missing))}")
        name = project.get("name")
        if not isinstance(name, str) or not name.strip(): errors.append(f"{label} has an invalid name")
        elif name in names: errors.append(f"duplicate project name: {name}")
        else: names.add(name)
        url = project.get("url"); parsed = urlparse(url) if isinstance(url, str) else None
        if not parsed or parsed.scheme != "https" or not parsed.netloc: errors.append(f"{label} has an invalid HTTPS URL")
        elif url in urls: errors.append(f"duplicate project URL: {url}")
        else: urls.add(url)
        if project.get("category") not in VALID_CATEGORIES: errors.append(f"{label} has an invalid category")
        if not isinstance(project.get("tags"), list) or not all(isinstance(tag, str) and tag.strip() for tag in project.get("tags", [])): errors.append(f"{label} has invalid tags")
        if not isinstance(project.get("featured"), bool): errors.append(f"{label} has an invalid featured value")
        image = project.get("image")
        if not isinstance(image, str) or not (ROOT / image).is_file(): errors.append(f"{label} image is missing: {image}")
    if errors:
        print("FAIL"); print("\n".join(f"- {error}" for error in errors)); return 1
    print(f"PASS: {len(projects)} projects validated"); return 0

if __name__ == "__main__": raise SystemExit(main())
