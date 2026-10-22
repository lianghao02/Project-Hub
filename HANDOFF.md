# HANDOFF

## 核心元資料 (Metadata)
- **Repository**：lianghao02/Project-Hub
- **Branch**：main
- **Commit SHA**：4d872a87cec25382eea5387bb61e9e35eb54c3a2（本輪提交前基準）
- **Skill Version**：v1.0.0
- **Task Type**：IMPROVE / HANDOFF
- **Local Path Hint**：13_Project-Hub

## 目前狀態
橫幅圖已轉 WebP 並推送上線。本輪「工具村」Q 版改版已在本機提交，**尚未推送、尚未部署**。

## 本輪已完成
- 名稱與文案：移除武俠風，16 張卡片改為「遊戲化工具名＋白話功能說明」（`data/projects.json`，已用 `sync_projects.py --mode fallback` 同步備援）。分類改為「網頁關卡／桌面基地／智慧實驗室」。
- 視覺：封面由水墨橫幅圖改為 CSS 道具圖塊（`index.html` 的 `.card-banner.is-tile`，`main.js` 的 `USE_ARTWORK` 開關；設為 true 可改回使用 `images/`）。
- 排版：手機分類頁籤改為橫向捲動且不擠壓、觸控高度 40px；搜尋提示縮短；README 總覽表改由 JSON 重新產生。
- 驗證：`validate_projects.py` 16 筆通過；本機瀏覽器桌機與 375px 手機寬度檢查、分類篩選正常、無橫向溢出。

## 刻意保留
- `武俠打字傳` 是遊戲本身的名稱，不改；`wuxia_typing.html` 內為遊戲內容，未動。
- `images/` 的 WebP 橫幅暫時不再被頁面使用，保留供日後換成新的 Q 版插畫。
- 第 11 張卡片（DesktopFramesPlus，專案 19）僅改展示站文案，未動 19 的專案本身。

## 尚未完成
- 推送與 Pages 部署需使用者授權；推送後核對正式站。
- 「精選」徽章目前 11/16 張都有，失去區分意義，是否縮減待使用者決定。
- 若要真正的 Q 版插畫封面，需另行製作 16 張圖。

## Git 狀態
- Working Tree：提交後 Clean。Branch：main。
