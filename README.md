# LiangHao Project Hub

LiangHao 的公開作品展示入口，使用純 HTML、CSS 與 Vanilla JavaScript 建置，並由 GitHub Pages 部署。

網站只展示公開作品；開發環境管理、Agent 控制與私人工作資料屬於 Dev-Control-Center，未納入本 Repository。

## 維護專案資料

展示卡片的唯一主要資料來源是 [data/projects.json](data/projects.json)。新增、刪除或調整作品時，請只修改此檔案；[assets/js/main.js](assets/js/main.js) 會依分類載入並建立卡片。

變更後執行：

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
├─ scripts/validate_projects.py
├─ scripts/update_project_hub.py
├─ index.html
└─ photo_report.html
```

推送至 `main` 時，`.github/workflows/pages.yml` 會部署 Repository 根目錄至 GitHub Pages。
