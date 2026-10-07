"""自動同步 Project-Hub 展示專案中各專案的最新版本號、狀態或備援資料。

支援功能：
1. 自動偵測同層相鄰 Repository 之最新 Git Tag 或文件版本。
2. 模式切換：
   --mode sync   : 同步最新真實版本號 (預設)
   --mode strip  : 移除微小版本號（不用版本號，一勞永逸）
   --mode status : 轉為語意化長青標籤（如：線上即用、開源釋出）
3. 自動將 data/projects.json 同步更新至 assets/js/main.js 之 FALLBACK_PROJECTS。
4. 自動呼叫 validate_projects 確保格式合規。
"""
from __future__ import annotations

import argparse
import json
import re
import subprocess
from pathlib import Path
from typing import Any

import sys

# Windows 主控台繁體中文編碼防禦
if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if sys.stderr and hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parent.parent
DATA_FILE = ROOT / "data" / "projects.json"
MAIN_JS_FILE = ROOT / "assets" / "js" / "main.js"
PARENT_DIR = ROOT.parent

# 專案 URL 關鍵字 -> 本機 Repository 資料夾名稱對照表（若同層目錄存在）
REPO_MAPPING = {
    "Cell-Tower-Map-Locator": "02_Cell-Tower-Map-Locator",
    "Photo-Report-Generator": "04_Photo-Report-Generator",
    "Financial-Data-Parser": "08_Financial-Data-Parser",
    "Calendar-Card-App": "11_Calendar-Card-App",
    "Police-Image-Toolkit": "03_Police-Image-Toolkit",
    "System-Optimizer-Tool": "06_System-Optimizer-Tool",
    "PaperSwitch": "09_PaperSwitch",
    "DesktopFramesPlus": "16_DesktopFramesPlus",
    "AG-MONITOR-Smart-Video-Screening": "01_AG-MONITOR-Smart-Video-Screening",
    "auto-learning-bot": "07_auto-learning-bot",
    "Smart-Photo-Organizer": "10_Smart-Photo-Organizer",
    "ClipMask-AI": "12_ClipMask-AI",
    "16_Wuxia-Typing-Legend": "16_Wuxia-Typing-Legend",
}


def find_repo_dir(url: str) -> Path | None:
    """從專案 URL 尋找本地鄰近的 Git Repository 資料夾。"""
    for key, folder in REPO_MAPPING.items():
        if key.lower() in url.lower():
            target = PARENT_DIR / folder
            if target.is_dir():
                return target

    # 若對照表未命中，嘗試模糊比對相鄰資料夾
    url_slug = url.rstrip("/").split("/")[-1].lower()
    for item in PARENT_DIR.iterdir():
        if item.is_dir() and url_slug in item.name.lower():
            return item
    return None


def get_latest_git_tag(repo_path: Path) -> str | None:
    """透過 git describe 讀取最新 tag。"""
    try:
        result = subprocess.run(
            ["git", "-C", str(repo_path), "describe", "--tags", "--abbrev=0"],
            capture_output=True,
            text=True,
            check=True,
        )
        tag = result.stdout.strip()
        if tag:
            # 清理特殊後綴如 -zh-TW，只保留主語意版本
            clean_tag = re.sub(r"-zh-TW$", "", tag)
            return clean_tag
    except (subprocess.CalledProcessError, FileNotFoundError):
        pass
    return None


def detect_version_from_files(repo_path: Path) -> str | None:
    """從 CHANGELOG.md、README.md 或常見設定檔中偵測版本號。"""
    for doc_name in ("CHANGELOG.md", "README.md"):
        doc = repo_path / doc_name
        if doc.is_file():
            text = doc.read_text(encoding="utf-8", errors="ignore")
            match = re.search(r"v\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?", text)
            if match:
                return match.group(0)

    pkg = repo_path / "package.json"
    if pkg.is_file():
        try:
            data = json.loads(pkg.read_text(encoding="utf-8"))
            if "version" in data:
                return f"v{data['version']}"
        except Exception:
            pass

    return None


def resolve_project_version(project: dict[str, Any], mode: str) -> str:
    """依據指定模式決定專案的 version 欄位值。"""
    if mode == "strip":
        return ""

    if mode == "status":
        cat = project.get("category", "")
        if cat == "web":
            return "線上即用"
        return "開源釋出"

    # mode == "sync": 優先偵測本地 repo
    url = project.get("url", "")

    # 特殊處理：Photo-Report-Generator 最新已發布 v2.3.1
    if "Photo-Report-Generator" in url:
        return "v2.3.1"

    repo_dir = find_repo_dir(url)
    if repo_dir:
        tag = get_latest_git_tag(repo_dir)
        if tag:
            return tag
        file_ver = detect_version_from_files(repo_dir)
        if file_ver:
            return file_ver

    # 若偵測不到則保留既有版本
    return project.get("version", "")


def sync_projects(mode: str) -> list[dict[str, Any]]:
    """讀取並更新 projects.json。"""
    projects = json.loads(DATA_FILE.read_text(encoding="utf-8"))
    for p in projects:
        new_ver = resolve_project_version(p, mode)
        p["version"] = new_ver

    # 寫回 data/projects.json
    formatted_json = json.dumps(projects, ensure_ascii=False, indent=2) + "\n"
    DATA_FILE.write_text(formatted_json, encoding="utf-8")
    print(f"[{mode.upper()}] 已更新 {DATA_FILE.relative_to(ROOT)} (共 {len(projects)} 個專案)")
    return projects


def sync_main_js(projects: list[dict[str, Any]]) -> None:
    """將 projects 資料同步更新至 assets/js/main.js 的 FALLBACK_PROJECTS 區塊。"""
    if not MAIN_JS_FILE.is_file():
        return

    content = MAIN_JS_FILE.read_text(encoding="utf-8")
    json_block = json.dumps(projects, ensure_ascii=False, indent=2)

    # 縮排兩格以符合 main.js 常規縮排
    indented_json = "\n".join("  " + line if line else line for line in json_block.splitlines())
    # 去除前後多餘縮排
    indented_json = indented_json.strip()

    pattern = r"(const FALLBACK_PROJECTS = )\[[\s\S]*?\];"
    replacement = rf"\1{indented_json};"

    new_content, count = re.subn(pattern, replacement, content)
    if count == 0:
        print("警告：在 main.js 中未找到 FALLBACK_PROJECTS 替換目標。")
        return

    MAIN_JS_FILE.write_text(new_content, encoding="utf-8")
    print(f"已同步更新 {MAIN_JS_FILE.relative_to(ROOT)} 之 FALLBACK_PROJECTS")


def main() -> int:
    parser = argparse.ArgumentParser(description="同步 Project-Hub 專案版本號與備援資料")
    parser.add_argument(
        "--mode",
        choices=["sync", "strip", "status"],
        default="sync",
        help="執行模式：sync (同步最新 Tag)、strip (移除版號)、status (改為長青狀態標籤)",
    )
    args = parser.parse_args()

    projects = sync_projects(args.mode)
    sync_main_js(projects)

    # 呼叫驗證腳本
    from validate_projects import main as validate_main
    print("\n執行資料合規驗證：")
    val_result = validate_main()
    return val_result


if __name__ == "__main__":
    raise SystemExit(main())
