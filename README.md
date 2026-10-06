# LiangHao Project Hub

LiangHao 的公開作品展示入口，使用純 HTML、CSS 與 Vanilla JavaScript 建置，並由 GitHub Pages 部署。

網站只展示公開作品；開發環境管理、Agent 控制與私人工作資料屬於 Dev-Control-Center，未納入本 Repository。

## 專案概念與開發原因

Project Hub 是對外展示專案定位、版本與下載入口的靜態網站。開發動機是開發中樞含本機環境與治理操作，不適合直接當公開作品集，需要一個集中維護、可部署的展示頁面。

專案以 data/projects.json 為展示資料來源，搭配前端快取與 Python 維護腳本。Python 用於資料同步和檢查，網站本身不是 Python 伺服器；公開頁面不應放入本機路徑或私人操作資訊。

**典型流程**：維護專案資料 → 執行驗證 → 預覽網站 → 經授權提交及部署。

## 維護專案資料

展示卡片的主要資料來源是 [data/projects.json](data/projects.json)。版本號欄位（`version`）為**可選項目**；若未填寫或留空，前端卡片會自動隱藏版本標籤，維持版面純淨整潔。

### 自動同步各專案最新版本與備援資料

為避免各專案升版後需手動修改，專案提供自動同步腳本：

```bash
# 自動掃描鄰近 Repository 之最新 Git Tag 並同步至 JSON 與 main.js 備援
python scripts/sync_projects.py --mode sync

# 徹底免維護模式：一鍵清除所有微小版本號（不用版本號，一勞永逸）
python scripts/sync_projects.py --mode strip

# 長青交付標籤模式：改為「線上即用 / 開源釋出」等通用狀態標籤
python scripts/sync_projects.py --mode status
```

手動修改後亦可單獨執行合規驗證：

```text
python scripts/validate_projects.py
```

驗證器會檢查 JSON 格式、必填欄位、重複名稱與 URL、分類、圖片路徑及 featured 值。

## 特殊頁面與下載

[photo_report.html](photo_report.html) 是舊版 Excel/VBA 照片清冊工具的獨立介紹與下載頁，並非 Photo-Report-Generator Web 應用程式的副本，因此保留維護。`downloads/Photo_Report.rar` 仍由此頁使用。

## 結構

```text
.
├─ assets/js/main.js          # 載入 metadata 並渲染卡片
├─ data/projects.json         # 展示資料單一來源
├─ docs/BASELINE.md           # 重構前網站基準
├─ downloads/                 # photo_report.html 使用的必要下載檔
├─ images/                    # 專案卡片圖片
├─ scripts/sync_projects.py      # 一鍵自動同步版本號與備援
├─ scripts/validate_projects.py  # 專案資料合規驗證
├─ scripts/update_project_hub.py
├─ index.html
└─ photo_report.html
```

推送至 `main` 時，`.github/workflows/pages.yml` 會部署 Repository 根目錄至 GitHub Pages。

## 已知 Bug、限制與疑難排解

以下區分已確認問題、功能限制及待驗證項目；歷史修正不代表舊發行包已自動更新，也不代表本次文件更新重新完成所有功能測試。

| 狀態 | 情境 | 處理方式 |
|---|---|---|
| 資料限制 | Git Tag、GitHub Release 與本機開發版本不一定一致。 | 同步後逐項確認名稱、版號及下載目標；不能只看最新 Tag 認定產品已發布。 |
| 維護風險 | JSON 與前端 fallback 快取可能不同步。 | 使用既有資料驗證，並在頁面確認內容；這是需防範的風險，並非宣稱目前已有錯誤。 |
| 展示限制 | 靜態頁面不適合保存秘密憑證或執行私人開發環境操作。 | 只發布可公開的資料與連結；私有專案、未發布版本及失效下載入口需人工確認。 |

目前維護基準與交接見 [HANDOFF.md](HANDOFF.md)，資料更新方式見下方維護說明。

### 問題回報

請提供使用版本／啟動方式、作業系統與相關環境、重現步驟、預期及實際結果，以及去識別的錯誤訊息或最小樣本。先保留現場與來源資料；不要附真實案件、完整帳號、密碼、Token 或 API Key。版本修正以對應原始碼與發行包為準。
