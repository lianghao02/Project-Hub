# HANDOFF

## 核心元資料 (Metadata)
- **Repository**：lianghao02/Project-Hub
- **Branch**：main
- **Commit SHA**：da7a549602a56c3522d61521e82801f66de72c61（本輪修改前基準；交付提交以包含本交接的 Git 記錄為準）
- **Skill Version**：v1.0.0
- **Task Type**：FIX
- **Local Path Hint**：13_Project-Hub

## 2026-10-20 武俠主題 × 2D Q 版收尾（Claude）
- 前一輪（其他 Agent，已結束）未提交的改版本輪已驗收並一併提交，內容如下：
  - 介面：武俠世界觀文案（武道天機・神兵法寶靈鑑），搭配 2D Q 版粗描邊卡片（`assets/css/game-2d-tokens.css`）。
  - 功能：卡片標籤點擊即可篩選、Esc 一鍵重置。
- 依使用者指示保留武俠主題，只修對比與 Bug：
  - `--game-blue` 從 `#3B82F6` 改為 `#2563EB`，卡片行動按鈕白字對比 3.7:1 提升至 5.2:1。
  - `--game-orange` 從 `#F97316` 改為 `#C2410C`，「文印劍訣歷程」說明按鈕白字對比 2.8:1 提升至 5.2:1。
- 驗證：
  - `scripts/validate_projects.py`：16 個專案全部通過。
  - `node --check assets/js/main.js` 通過。
  - 本機以 `http.server` 實測：
    - 點「HTML5」標籤，卡片從 16 張篩選為 2 張，且不會誤觸卡片連結。
    - 按 Esc 恢復為 16 張。
    - 可見文字對比掃描無任何項目低於 4.5:1。
- 未做：沒有推送，GitHub Pages 未更新。Font Awesome 仍由 cdnjs 載入（公開展示站，維持原狀）。

## 目前狀態
2026-10-16：目前展示 16 件作品；四張卡片的版本與用途標示已校正，本輪提交推送後核對 Pages 部署。

## 本輪目標
修正已確認的四個版號落差與當前件數。

## 基準與已確認事實 (Baseline & Confirmed Facts)
起始 main／da7a549，工作目錄乾淨；版本依本次遠端查核及版本來源核對。

## 已完成 (Completed)
基地臺定位線上 v3.2.2、武俠打字傳線上 v2.2.3、精油工作室線上 v1.6.0；PaperSwitch 下載 v4.4.2（已透過 GitHub Release API 核對）。JSON 與離線備援同步，README 件數修正為 16。

## 異動檔案 (Changed Files)
data/projects.json、assets/js/main.js、README.md、HANDOFF.md。

## 刻意未修改 (Do Not Do / Deliberately Omitted)
未修改來源資產、既有發布包、全域憲法與共用 Skills；本輪提交並推送既有修正，不另建立 Release。

## 尚未完成 (Remaining Work)
- **P1 (阻斷/必須)**：本輪展示資訊修正無阻斷項目。
- **P2 (重要/當次)**：未重新驗收所有作品與下載包；Pages 部署結果以最新 Actions 與線上資料為準。其他既有版號不推定為最新下載版。
- **P3 (改善建議/暫緩)**：其他專案重構不在本輪範圍。

## 驗證結果 (Validation)
### 已執行測試與結果
validate_projects.py：16 件資料通過；node --check 通過。內建瀏覽器確認四張版本標示、文件關鍵字篩選僅顯示 PaperSwitch 下載 v4.4.2，console error 0。本輪再次核對武俠卡片為線上 v2.2.3，16 筆資料與 JavaScript 語法檢查通過。
### 尚未驗證項目
未重新驗收所有作品與下載包；Pages 部署結果以最新 Actions 與線上資料為準。其他既有版號不推定為最新下載版。
### 已知風險 (Known Risks)
原始碼修正不會自動更新既有下載包或正式部署。

## Git 狀態
- Commit：本輪差異獨立提交；SHA 以包含本交接的 Git 記錄為準。
- Push：交付時核對 HEAD 與遠端追蹤分支一致。
- Working Tree：提交後以 git status 確認，未納入無關修改。
- Branch：main。

## 下一步建議動作 (Next Recommended Action)
依授權提交並推送後，再核對 Pages 部署結果。

## 發布狀態 (Release Status)
本機驗證完成；推送 main 後由既有 Pages 流程部署。

---

## 歷史交接快照（以下不是當前待辦或測試結果）

# HANDOFF

## 核心元資料 (Metadata)
- **Repository**：lianghao02/Project-Hub
- **Branch**：main
- **Commit SHA**：2609ac2
- **Skill Version**：v1.0.0
- **Task Type**：FEAT / HANDOFF
- **Local Path Hint**：13_Project-Hub

## 目前狀態
可交付並已通過驗證。全部 17 個專案卡片已全面更換為「武道天機・神兵法寶靈鑑」之武俠仙俠世界觀風格，包含卡片名號、武俠意象描述、法寶標籤、徽章與行動按鈕；並擴充收錄 4 個新專案（14_Google-Photos-Takeout-Organizer、15_chainflow-inspector、17_Subscription-Manager、18_AromaCraft-Studio）。17 張橫幅圖片全部更換為專屬高品質 16:9 新國風水墨仙俠橫幅，`index.html` 首頁、`assets/js/main.js` 與 `README.md` 皆已完成對齊。

## 本輪目標
1. 納入 GitHub 既有新專案至 Project Hub 卡片（專案總數由 13 擴充至 17）。
2. 將所有專案卡片全面更換為武俠、仙俠風格呈現（名號、意象文案、修仙標籤、動作按鈕）。
3. 為所有卡片生成並替換適合的新國風水墨武俠仙俠橫幅圖片（16:9 高清 Banner）。
4. 更新首頁 Hero、分類標籤、`main.js` 備援快取、`sync_projects.py` 映射與說明文件。

## 基準與已確認事實 (Baseline & Confirmed Facts)
- `13_Project-Hub` 現展示 17 件開源與實用專案法寶，以 `data/projects.json` 為單一資料來源，並由 `scripts/sync_projects.py` 同步至 `assets/js/main.js` 的 `FALLBACK_PROJECTS` 支援 `file:///` 離線開啟。
- 所有 17 個專案的封面橫幅皆位於 `images/`，長寬比為 16:9，符合 `scripts/validate_projects.py` 嚴格校驗規則。

## 已完成 (Completed)
1. **生成與部署 17 張新國風仙俠武俠橫幅**：
   - 包含天罡羅盤、乾坤照影卷、九章靈算金算盤、四時時辰曆、文印打字傳、照妖神目鏡、太清拂塵靈泉、玉版符牒裁雲、乾坤芥子八卦閣、天眼搜神大陣、藏經閣木甲機關人、萬象納寶匣、無相面具聲波圖，以及雲巔峰頂、江湖輿圖、度支帳房與百草幽竹。
   - 全部轉化為高清 PNG 部署至 `images/`。
2. **重構 `data/projects.json` 為武俠仙俠世界觀**：
   - 17 個專案全面換上仙俠名號（如「萬里烽火・天罡羅盤」、「乾坤節度・靈石月俸度支司」等）與文風典雅的意境介紹。
   - 新增 4 個新專案：Google 相簿整理、鏈流查核、訂閱小帳與手作精油配方。
3. **優化前端展示與離線備援**：
   - 更新 `assets/js/main.js` 中的 3 大境界分類（天機輕靈・免安裝即開法寶、混元真氣・Windows 極速神兵、通天靈識・AI 鑑識破妄陣）與「鎮派絕學」徽章。
   - 執行 `scripts/sync_projects.py --mode sync` 寫入最新版本號並同步至 `FALLBACK_PROJECTS`。
4. **首頁 UI 與文件整體對齊**：
   - 更新 `index.html` 之標題、Hero、統計標記（17 件神兵法寶、3 大修煉境界、100% 丹田本機守護）、分類 Tab 與搜尋提示。
   - 更新 `README.md` 展示清單總覽與專案結構。

## 異動檔案 (Changed Files)
- `data/projects.json`
- `assets/js/main.js`
- `index.html`
- `README.md`
- `scripts/sync_projects.py`
- `images/banner_*.png` (17 張橫幅)
- `HANDOFF.md`

## 刻意未修改 (Do Not Do / Deliberately Omitted)
- 保留 `photo_report.html` 與 `wuxia_typing.html` 獨立專頁功能。
- 未改動 CSS 莫蘭迪低飽和核心變數，維持視覺典雅溫潤。

## 尚未完成 (Remaining Work)
- **P1 (阻斷/必須)**：無。
- **P2 (重要/當次)**：無。
- **P3 (改善建議/暫緩)**：無。

## 驗證結果 (Validation)
### 已執行測試與結果
- `python scripts/validate_projects.py`：`PASS: 17 projects validated`（100% 通過）。
- `python scripts/sync_projects.py --mode sync`：成功同步 17 個專案至 JSON 與 main.js。
- 圖片資源完整性：17 張 banner 檔案均存在且可讀取。

## Git 狀態
- Working Tree：Modified（本輪仙俠風格改版完成）
- Branch：main

## 下一步建議動作 (Next Recommended Action)
執行 `git commit` 與 `git push`，GitHub Pages 將自動部署最新武道天機・神兵法寶靈鑑展示入口。

## 2026-10-14 展示版本資料修正交接

### 核心元資料 (Metadata)
- **Repository**：lianghao02/Project-Hub
- **Branch**：main
- **Commit SHA**：75c28585ffb6cce2296a7d016045438776c061ff（本輪修改前基準；成果 SHA 以 Git log 為準）
- **Skill Version**：v1.0.0
- **Task Type**：FIX
- **Local Path Hint**：13_Project-Hub

### 目前狀態
本機修訂與驗證完成；使用者已授權本輪提交、推送與 Pages 發布。部署結果以 Actions 與正式站資料核對。

### 本輪目標
修正過期展示版本，同步 JSON、前端備援與 README，保留既有展示風格。

### 基準與已確認事實 (Baseline & Confirmed Facts)
開始時 main／origin/main 同步，Working Tree Clean。照片清冊正式 v2.3.2、訂閱小帳正式 v1.1.0、AromaCraft Pages 正式 v1.5.0，依各專案發布／交接紀錄核對。AromaCraft Apps Script 仍為 v1.3.2，不與 Pages 混用。

### 已完成 (Completed)
更新上述三張卡片版本；README 展示表同步，另將已在 JSON 的打字傳 v2.1.0、Takeout 整理 v1.2.0 對齊表格。移除照片清冊 v2.3.1 寫死分支，補齊兩個 Firebase 網址的本機對應。新增 --mode fallback，保留人工核對的 JSON 版本，只同步備援，避免候選 Tag／開發文件覆蓋正式站版號。

### 異動檔案 (Changed Files)
data/projects.json、assets/js/main.js、scripts/sync_projects.py、README.md、HANDOFF.md。

### 刻意未修改 (Do Not Do / Deliberately Omitted)
CSS、首頁結構、橫幅、展示文風、歷史功能介紹、其他 Repository 未修改；本輪沿用既有 Pages 流程發布。PaperSwitch 尚未核對新正式發行標記，保留 v4.3.0 展示版本。

### 尚未完成 (Remaining Work)
- **P1 (阻斷/必須)**：無本機修訂阻斷。
- **P2 (重要/當次)**：無資料／同步工具驗證失敗。
- **P3 (改善建議/暫緩)**：正式部署畫面實測仍未完成；發布以 Actions 與正式資料讀回核對。

### 驗證結果 (Validation)
#### 已執行測試與結果
17 張卡片資料驗證通過；5 項同步回歸（照片清冊不再寫死、fallback 不偵測、兩個 Firebase 對應、未知來源保留原版本）通過。17 張卡片 JSON／FALLBACK_PROJECTS 深度相等且 README 表格版號一致；main.js 語法與 git diff --check 通過。
#### 尚未驗證項目
內建 Browser 不可用；Chrome 可連線但安全政策拒絕 file://，未繞過限制，未宣稱畫面實測或正式站更新。
#### 已知風險 (Known Risks)
既有 sync 模式仍產生候選版本，必須核對正式發布，不能直接將開發版或舊 Tag 當成正式網站版本。

### Git 狀態
- Commit：本輪修訂提交，實際 SHA 見 Git log。
- Push：已獲使用者本次明確授權，結果以 origin/main SHA 核對。
- Working Tree：本輪僅上述五份檔案，提交後由 git status 核對。
- Branch：main。

### 下一步建議動作 (Next Recommended Action)
依既有 main 推送流程部署，核對 Actions、正式 projects.json 與 main.js 內容；有新問題才開下一輪修正。

### 發布狀態 (Release Status)
本輪依使用者授權發布展示資料，不建立應用程式 Release 或新版本標記；以 Actions 與正式站資料讀回確認完成。
