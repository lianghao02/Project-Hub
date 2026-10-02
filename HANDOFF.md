# HANDOFF

## 目前狀態
可交付

## 本輪目標
校準 Project-Hub（https://lianghao02.github.io/Project-Hub/）展示專案之版本號與資料，解耦前端卡片版本欄位以支援可選／免版本號／狀態標籤模式，建立全自動同步工具，避免未來子專案更迭需繁瑣手動修改。

## 已完成
1. **全面校準 12 個專案版本號至真實最新狀態**：
   - `Cell-Tower-Map-Locator`：`v3.2.0` -> `v3.2.1`
   - `Photo-Report-Generator`：`v2.2.1` -> `v2.3.1`
   - `Financial-Data-Parser`：`v1.7.0` -> `v1.7.1`
   - `Calendar-Card-App`：`v1.1.2`（維持最新）
   - `Police-Image-Toolkit`：`v11.2.0` -> `v11.4.0`
   - `System-Optimizer-Tool`：`v6.2.1` -> `v6.2.3`
   - `PaperSwitch`：`v4.0.0` -> `v4.3.0`
   - `DesktopFramesPlus`：`v2.8.0` -> `v2.8.1`
   - `AG-MONITOR-Smart-Video-Screening`：`v4.0.0` -> `v4.0.1`
   - `auto-learning-bot`：`v3.1.1` -> `V2.0.1`
   - `Smart-Photo-Organizer`：`v3.2.0`（維持最新）
   - `ClipMask-AI`：`v1.0.0` -> `v1.1.0`
2. **前端卡片渲染彈性解耦（支援不用版本號）**：
   - 修改 `assets/js/main.js` 之 `createCard`，將 `version` 改為安全可選檢查。
   - 若專案未填寫版本號或留空，前端自動優雅隱藏 `.version-tag`，卡片靠左排版維持自然大方，徹底避免版面留白破壞視覺。
   - 若填寫通用狀態標籤（如「線上即用」、「開源釋出」）亦能完美渲染。
3. **專案合規驗證器放寬相容性**：
   - 修改 `scripts/validate_projects.py`，將 `version` 從強制必填項解鎖為可選字串檢查，支援免版本號合規性。
4. **建立一鍵自動同步與備援工具**：
   - 新增 `scripts/sync_projects.py`，支援：
     - `--mode sync`：自動偵測同層相鄰 Repository 之最新 Git Tag / 文件版本並一鍵同步。
     - `--mode strip`：一鍵清除所有微小版本號（不用版本號模式，永不過期）。
     - `--mode status`：一鍵轉換為語意化長青交付標籤（Web: 線上即用、Native/AI: 開源釋出）。
     - 自動同步更新 `assets/js/main.js` 之 `FALLBACK_PROJECTS`，徹底解決雙重資料來源脫鉤問題。
5. **補齊標準 `.gitignore`**：
   - 忽略 Python 快取（`__pycache__`）、作業系統暫存與測試快取。
6. **更新說明文件**：
   - `README.md` 載明同步工具用法、三種維護模式與可選版本號規範。

## 刻意未修改
- 未改動 `photo_report.html` 獨立歷史下載頁面與RAR檔案，保持原有相容性。
- 未在純前端引入會觸發 GitHub API Rate Limit (60次/hr) 的 client-side 即時請求，遵循 JAMstack 構建期動態、執行期純靜態之最佳實踐。

## 尚未完成
無阻斷性與重要問題，所有目標均已達成。

## 驗證結果
### 已執行
- `python scripts/sync_projects.py --mode sync`：自動偵測與同步成功，12 個專案全數完成更新。
- `python scripts/validate_projects.py`：通過 12 個專案之資料結構、URL、圖片與分類合規檢查（PASS）。
- Playwright E2E 本機實測（`file:///` 協定）：
  - 驗證 `sync` 模式下最新版本號（v2.3.1, v11.4.0 等）精準顯示。
  - 驗證 `strip` 模式下版本標籤優雅隱藏，卡片佈局自然完整、零破版。
  - 驗證 `status` 模式下長青標籤（線上即用、開源釋出）精確渲染。

### 尚未驗證
- 無。

### 已知風險
- 無。

## Git 狀態
- Commit：02bc553
- Push：是
- Working Tree：Clean
- Branch：main

## 下一步
依使用者指令提交並推送至 GitHub main 分支，觸發 GitHub Actions 部署最新站點。
