# 13_Project-Hub 專案規則

本檔只寫本專案專屬限制；全域開發憲法維護於 `00_Dev-Control-Center\configs\AGENTS.md`，不在此複製。

- **性質**：對外公開的作品展示站，純 HTML／CSS／Vanilla JavaScript，由 GitHub Pages 部署，無打包步驟。
- **資料來源**：展示內容以 `data/projects.json` 為準，`assets/js/main.js` 內的 `FALLBACK_PROJECTS` 是備援快取，不要手動分別修改。
- **修改流程**：改完 `data/projects.json` 後執行 `python scripts/sync_projects.py --mode fallback`，會同步備援資料並自動驗證格式。
- **版本欄位**：必須對應各專案「實際已發布」的版本。發布前後先在 `00_Dev-Control-Center` 執行 `python scripts/check_release_versions.py --online` 核對，再更新本站。
- **公開邊界**：只放公開作品；不放開發環境管理、Agent 設定、私人資料或內部路徑。
- **刻意保留**：`downloads/Photo_Report.rar` 是舊版 Excel／VBA 照片清冊工具的下載檔，供 `photo_report.html` 使用，不是 Photo-Report-Generator 的安裝檔，請勿誤刪或誤更新。
- **部署**：推送 `main` 會觸發 GitHub Pages 更新，屬於對外發布，需使用者授權。
