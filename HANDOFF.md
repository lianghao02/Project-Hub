# HANDOFF

## 核心元資料 (Metadata)
- **Repository**：lianghao02/Project-Hub
- **Branch**：main
- **Commit SHA**：b45fafd169684feb4641494c3578e572d23a7d79（本輪提交前基準；最新提交以 Git 記錄為準）
- **Skill Version**：v1.0.0
- **Task Type**：HANDOFF
- **Local Path Hint**：13_Project-Hub

## 目前狀態
README 內容更新完成；本輪僅處理文件，產品與發布驗證沿用既有證據。

## 本輪目標
補齊概念、開發原因、典型使用流程、已知 Bug／限制與問題回報方式，保留現有功能。

## 基準與已確認事實 (Baseline & Confirmed Facts)
先讀現行 README 與專案規則／來源，再增補文件；Git 與原文基準保存在中央 artifacts/readme-refresh-baseline。

## 已完成 (Completed)
2026-10-06 GitHub 同步交接：使用者已授權提交與推送前輪成果；本輪只提交已核對範圍。最新 Commit SHA、遠端同步與 CI 結果統一見控制中心 `docs/github-sync/RESULTS.md`，不將提交本身的 SHA 寫入同一份提交。

已更新 README，區分已修復歷史、功能限制與待驗證事項，不憑空新增已確認 Bug。

## 異動檔案 (Changed Files)
README.md、HANDOFF.md。

## 刻意未修改 (Do Not Do / Deliberately Omitted)
產品程式、設定、環境、有效測試及使用者資料均未修改；未 Commit／Push。

## 尚未完成 (Remaining Work)
- **P1 (阻斷/必須)**：無本輪文件阻斷。
- **P2 (重要/當次)**：文件驗證結果由中央 docs/readme-refresh/RESULTS.md 彙整。
- **P3 (改善建議/暫緩)**：產品功能與不同電腦的實測屬另一個任務，不以文件更新宣稱通過。

## 驗證結果 (Validation)
### 已執行測試與結果
本次只檢查文件結構、相對連結、差異與 Git／既有修改保護；結果見中央報告。
### 尚未驗證項目
本輪未重新執行產品單元測試、GUI、遠端服務或發布驗證。
### 已知風險 (Known Risks)
README 依現行來源與既有驗收整理，舊發布包不會自動包含原始碼修正。

## Git 狀態
- Commit：上述 SHA 為提交前基準；最新 SHA 見 `git log -1` 與中央同步報告。
- Push：實際推送及遠端核對結果見中央 `docs/github-sync/RESULTS.md`。
- Working Tree：最終狀態見中央同步報告；不含被忽略的環境、成品與使用者資料。
- Branch：main。

## 下一步建議動作 (Next Recommended Action)
文件檢查完成後停止擴大修改；有實際問題再以可重現資料另案處理。

## 發布狀態 (Release Status)
本輪未建立或發布新版本。

---

## 承接前輪（歷史原文保留）

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
