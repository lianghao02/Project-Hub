# LiangHao Project Hub

LiangHao 的公開作品展示入口，使用純 HTML、CSS 與 Vanilla JavaScript 建置，並由 GitHub Pages 部署。

網站只展示公開作品；開發環境管理、Agent 控制與私人工作資料屬於 Dev-Control-Center，未納入本 Repository。

## 專案概念與開發原因

Project Hub 是對外展示專案定位、版本與下載入口的靜態網站。開發動機是開發中樞含本機環境與治理操作，不適合直接當公開作品集，需要一個集中維護、可部署的展示頁面。

專案以 [data/projects.json](data/projects.json) 為展示資料來源，搭配前端 `FALLBACK_PROJECTS` 快取（支援 `file:///` 本機直接開啟 `index.html`）與 Python 維護腳本。Python 用於資料同步和檢查，網站本身不是 Python 伺服器；公開頁面不應放入本機路徑或私人操作資訊。

**典型流程**：維護專案資料 → 執行驗證 → 預覽網站 → 經授權提交及部署。

---

## 展示專案總覽（共 13 個公開專案）

| 分類 | 專案名稱 | 版本 | 入口 / 說明頁 |
|---|---|---|---|
| **現代前端 (Web SPA)** | 電信基地台位置查詢系統 | `v3.2.1` | [線上即用](https://lianghao02.github.io/Cell-Tower-Map-Locator/) |
| **現代前端 (Web SPA)** | Photo Report 相片清冊產生器 | `v2.3.1` | [線上即用](https://lianghao02.github.io/Photo-Report-Generator/) |
| **現代前端 (Web SPA)** | 金融資料正規化轉檔器 | `v1.7.1` | [線上即用](https://lianghao02.github.io/Financial-Data-Parser/) |
| **現代前端 (Web SPA)** | 卡片式行事曆 App | `v1.1.2` | [線上即用](https://lianghao02.github.io/Calendar-Card-App/) |
| **現代前端 (Web SPA)** | **武俠打字傳｜新國風注音與英打闖關** | `v1.0.0-beta.1` | [開始修煉](https://lianghao02.github.io/16_Wuxia-Typing-Legend/) ｜ [玩法與開發歷程](wuxia_typing.html) |
| **Windows 原生 (.NET 8)** | 警務影像轉檔與銳化器 | `v11.4.0` | [GitHub 專案](https://github.com/lianghao02/Police-Image-Toolkit) |
| **Windows 原生 (.NET 8)** | 系統清理與記憶體優化 | `v6.2.3` | [GitHub 專案](https://github.com/lianghao02/System-Optimizer-Tool) |
| **Windows 原生 (.NET 8)** | PaperSwitch 紙張排版工坊 | `v4.3.0` | [GitHub 專案](https://github.com/lianghao02/PaperSwitch) |
| **Windows 原生 (.NET 8)** | Desktop Frames + 桌面分區面板 | `v2.8.1` | [GitHub 專案](https://github.com/lianghao02/DesktopFramesPlus) |
| **AI 自動化 (Python)** | AG-MONITOR 智慧影像快篩系統 | `v4.0.1` | [GitHub 專案](https://github.com/lianghao02/AG-MONITOR-Smart-Video-Screening) |
| **AI 自動化 (Python)** | 行政效能領航員自動化機器人 | `V2.0.1` | [GitHub 專案](https://github.com/lianghao02/auto-learning-bot) |
| **AI 自動化 (Python)** | 智慧相片自動分類助手 | `v3.2.0` | [GitHub 專案](https://github.com/lianghao02/Smart-Photo-Organizer) |
| **AI 自動化 (Python)** | 智慧影音去識別與聽打工作站 | `v1.1.0` | [GitHub 專案](https://github.com/lianghao02/ClipMask-AI) |

---

## 新增重點專案：《武俠打字傳｜新國風注音與英打闖關》

完整圖文說明頁請見本專案內建之 [wuxia_typing.html](wuxia_typing.html)，線上試玩網址為 <https://lianghao02.github.io/16_Wuxia-Typing-Legend/>。

### 1. 專案定位與核心特色
- **大千注音免選字直拼**：直接攔截實體鍵盤按鍵碼（Key Code），學童無須切換系統輸入法，也不受新注音選字清單干擾；一聲明確對應「空白鍵（Space）」。
- **兒童防挫折格擋機制**：按錯鍵不扣血、不整屏染紅，改以主角「橫劍招架／提劍格擋」姿態化解；連續按錯 2 次即自動放大高亮正確鍵位並提示負責手指；每累積 10 連擊自動回復 1 點生命。
- **教育部《國語小字典》4,311 字離線字庫**：內建完整釋義、組詞、例句與常見破音字校正，右上角常駐「📖 查字典」。
- **國小 1～6 年級混合題本與分題本獨立續玩**：提供一年級至六年級（70% 中文 ＋ 30% 英文，每關隨機 10 題）及「國小英文」共 7 大修煉題本，各題本獨立記憶境界、關卡、題號與逐音位置。

### 2. 遊戲方法（四步驟修煉流程）
1. **選擇主角**：於首頁選擇「雲清川（男俠）」或「蘇映雪（女俠）」，隨關卡推進與神兵採買將解鎖「布衣木劍 ➔ 青衫鐵劍 ➔ 宗師金劍」三階段立繪。
2. **挑選修煉題本與境界關卡**：從頂部「📚 修煉選單」選擇 1～6 年級或國小英文，或透過「🗺️ 闖關地圖」自由挑戰三大境界共 30 關（初入江湖 1–10 關、名動一方 11–20 關、劍指巔峰 21–30 關）。
3. **依四色鍵帽與虛擬鍵盤出招**：跟隨畫面中央的**左手黛藍、右手碧玉、聲調赤金、一聲白玉空白鍵**四色鍵帽與底部大千注音鍵盤按下對應按鍵；出現金色「✨ 破綻重擊」光球時限時完成輸入可獲 2 倍暴擊與雙倍銅錢。
4. **客棧神兵閣與墨寶閣特訓**：使用過關銅錢於「🏪 商店」購買 12 種神兵防具與丹藥；曾打錯的字詞自動收錄於「🖋️ 墨寶閣」，滿 5 題可啟動弱點特訓。

### 3. 五大階段開發歷程
- **第一階段（v1.0 原型奠基）**：建立 HTML5 Canvas 戰鬥舞台、大千注音 41 鍵與英文字母雙模鍵盤引擎、兒童防挫折招架機制與 Web Audio API 古風五聲音階合成器。
- **第二階段（v2.0 字典與 RPG 系統）**：整合教育部《國語小字典》4,311 字與三萬筆詞條、多音字校正、三大境界 30 關戰役、破綻重擊、12 件客棧神兵與墨寶閣／自訂祕笈。
- **第三階段（v3.0 新國風第一批 37 件素材）**：導入雙主角三階立繪、5 張武俠場景、5 種對手、12 件商店圖示與三階刀光特效，並以 `guofeng_manifest.json` 校準鞋底接地錨點與 10 連擊吐納回血。
- **第四階段（v4.0 新國風第二批 24 件增補，合計 61 件）**：新增首頁雙主角主視覺、書法 Logo、初階受擊／格擋姿態、四色國風鍵帽動態疊字（含一聲空白鍵）、通關境界卷軸與三枚朱砂印章。
- **第五階段（v1.0.0-beta.1 分年級題本與公開發布）**：重構國小 1～6 年級混合題本與國小英文專項、實作 `packProgress` 分題本獨立續玩存檔，通過 30 項自動化測試並部署至 GitHub Pages。

---

## 維護專案資料

展示卡片的主要資料來源是 [data/projects.json](data/projects.json)。版本號欄位（`version`）與說明頁欄位（`guideUrl`、`guideLabel`）為**可選項目**；若未填寫或留空，前端卡片會自動隱藏對應標籤，維持版面純淨整潔。

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

- [wuxia_typing.html](wuxia_typing.html)：《武俠打字傳》的完整專案概念、遊戲方法、30 關境界題本配置與五大階段開發歷程專頁。
- [photo_report.html](photo_report.html)：舊版 Excel/VBA 照片清冊工具的獨立介紹與下載頁，並非 Photo-Report-Generator Web 應用程式的副本，因此保留維護。`downloads/Photo_Report.rar` 仍由此頁使用。

## 結構

```text
.
├─ assets/js/main.js              # 載入 metadata 並渲染卡片（含 file:/// 離線 FALLBACK_PROJECTS）
├─ data/projects.json             # 展示資料單一來源（共 13 個公開專案）
├─ docs/BASELINE.md               # 重構前網站基準
├─ downloads/                     # photo_report.html 使用的必要下載檔
├─ images/                        # 專案卡片圖片（含 banner_Wuxia-Typing-Legend.png）
├─ scripts/sync_projects.py       # 一鍵自動同步版本號與備援
├─ scripts/validate_projects.py   # 專案資料合規驗證
├─ scripts/update_project_hub.py
├─ index.html                     # 作品集首頁
├─ wuxia_typing.html              # 武俠打字傳・玩法指南與開發歷程專頁
└─ photo_report.html              # 經典照片清冊工具專頁
```

推送至 `main` 時，`.github/workflows/pages.yml` 會部署 Repository 根目錄至 GitHub Pages。

## 已知 Bug、限制與疑難排解

以下區分已確認問題、功能限制及待驗證項目；歷史修正不代表舊發行包已自動更新，也不代表本次文件更新重新完成所有功能測試。

| 狀態 | 情境 | 處理方式 |
|---|---|---|
| 資料限制 | Git Tag、GitHub Release 與本機開發版本不一定一致。 | 同步後逐項確認名稱、版號及下載目標；不能只看最新 Tag 認定產品已發布。 |
| 維護風險 | JSON 與前端 fallback 快取可能不同步。 | 修改 `data/projects.json` 後執行 `python scripts/sync_projects.py --mode sync` 與 `validate_projects.py`，確保 `file:///` 與 HTTP 模式一致。 |
| 展示限制 | 靜態頁面不適合保存秘密憑證或執行私人開發環境操作。 | 只發布可公開的資料與連結；私有專案、未發布版本及失效下載入口需人工確認。 |

目前維護基準與交接見 [HANDOFF.md](HANDOFF.md)。

### 問題回報

請提供使用版本／啟動方式、作業系統與相關環境、重現步驟、預期及實際結果，以及去識別的錯誤訊息或最小樣本。先保留現場與來源資料；不要附真實案件、完整帳號、密碼、Token 或 API Key。版本修正以對應原始碼與發行包為準。
