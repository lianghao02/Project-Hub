# LiangHao Project Hub (專案展示入口)

本 Repository 為 LiangHao 個人開發工具、AI 科技偵查、Windows 原生桌面程式與純前端工具之**公開作品展示網站**。

🌐 **線上展示站**：[https://lianghao02.github.io/Project-Hub/](https://lianghao02.github.io/Project-Hub/)

---

## 專案定位

- **作品展示門戶**：提供響應式卡片展示、功能介紹、技術標籤與 GitHub Repository 連結。
- **純靜態架構**：採用標準 HTML5、CSS 與 Vanilla JavaScript，無多餘前端框架負擔，由 GitHub Pages 自動託管部署。
- **免安裝即開即用**：收錄免安裝純 Web 工具、Windows 原生桌面應用程式與 AI 鑑識工作站之核心入口。

---

## 檔案結構

```text
13_Project-Hub/
├── .github/workflows/
│   └── pages.yml          # GitHub Pages 自動建置與部署
├── downloads/             # 工具包與使用說明
│   ├── Photo_Report.rar
│   └── README.md
├── images/                # 專案橫幅封面圖片
├── scripts/               # 維護輔助腳本
│   └── update_project_hub.py
├── .nojekyll              # 略過 Jekyll 靜態建置處理
├── favicon.ico            # 網站圖示
├── index.html             # 作品集主頁
├── photo_report.html      # 照片清冊工具詳細說明與下載頁
└── README.md              # 本說明文件
```

---

## 開發與更新

本專案為純靜態網站，可直接以瀏覽器開啟 `index.html` 進行本機預覽。推送至 `main` 分支後將自動觸發 GitHub Pages 部署。
