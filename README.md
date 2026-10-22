# LiangHao Project Hub

LiangHao 的公開作品展示入口，使用純 HTML、CSS 與 Vanilla JavaScript 建置，並由 GitHub Pages 部署。

網站只展示公開作品；開發環境管理、Agent 控制與私人工作資料屬於 Dev-Control-Center，未納入本 Repository。

## 專案概念與開發原因

Project Hub 是對外展示專案定位、版本與下載入口的靜態網站。開發動機是開發中樞含本機環境與治理操作，不適合直接當公開作品集，需要一個集中維護、可部署的展示頁面。

專案以 [data/projects.json](data/projects.json) 為展示資料來源，搭配前端 `FALLBACK_PROJECTS` 快取（支援 `file:///` 本機直接開啟 `index.html`）與 Python 維護腳本。Python 用於資料同步和檢查，網站本身不是 Python 伺服器；公開頁面不應放入本機路徑或私人操作資訊。

**典型流程**：維護專案資料 → 執行驗證 → 預覽網站 → 經授權提交及部署。

---

## 展示專案總覽（共 16 個工具）

| 分類 | 工具名稱 / 說明 | 版本 | 入口 |
|---|---|---|---|
| 網頁（免安裝） | **基地台定位雷達**｜在地圖上快速定位基地台，依時間順序畫出移動軌跡，並支援現地導航 | `線上 v3.2.4` | [開啟雷達](https://lianghao02.github.io/Cell-Tower-Map-Locator/) |
| 網頁（免安裝） | **照片清冊工坊**｜把現場照片整理成標準 docx 照片清冊 | `v2.4.1` | [開啟工坊](https://lianghao02.github.io/Photo-Report-Generator/) |
| 網頁（免安裝） | **金融資料轉檔機**｜轉換金融資料並保留前導零不被吞掉 | `v1.8.1` | [開始轉檔](https://lianghao02.github.io/Financial-Data-Parser/) |
| 網頁（免安裝） | **卡片行事曆手帳**｜卡片式行事曆，配色淡雅，支援離線使用與 Google Apps Script 雲端同步 | `v1.3.1` | [打開手帳](https://calendar-family-lianghao02.web.app/) |
| 網頁（免安裝） | **武俠打字傳**｜專為臺灣學童設計的國風打字闖關遊戲：六章 30 關、刀槍劍三流派、五行屬性，收錄教育部小字典 4,311 字 | `線上 v2.2.3` | [開始闖關](https://lianghao02.github.io/16_Wuxia-Typing-Legend/) |
| 網頁（免安裝） | **鏈上金流追蹤站**｜查看公開鏈上資料的資金流向，涵蓋 Polymarket 與多鏈金流，以圖譜呈現關聯，協助取證與查核 | `v1.6.0` | [開始追蹤](https://github.com/lianghao02/chainflow-inspector) |
| 網頁（免安裝） | **固定支出管家**｜管理每月固定支出，明細一目了然 | `v1.2.1` | [查看帳本](https://subscription-ledger-f77fd.web.app) |
| 網頁（免安裝） | **精油調配工坊**｜精油配方調製與成本利潤雙模式試算，手機採雙欄工作區，可透過 Google Sheets 家庭共用 | `線上 v1.6.5` | [開始調配](https://lianghao02.github.io/AromaCraft-Studio/) |
| Windows 桌面 | **影像鑑識放大鏡**｜Windows 原生 C# .NET 8 影像鑑識工具，支援 iPhone 4K 60fps 與 HEIC 高速並行轉檔，細節銳化清楚 | `v11.4.0` | [開啟放大鏡](https://github.com/lianghao02/Police-Image-Toolkit) |
| Windows 桌面 | **系統清理小幫手**｜300 KB 單檔小工具，秒開即用，一鍵釋放 Win32 待命快取 | `v6.2.3` | [一鍵清理](https://github.com/lianghao02/System-Optimizer-Tool) |
| Windows 桌面 | **PDF 印刷所**｜掌握各式文件尺寸與排版，以 WinRT 縮圖與 STA 隔離完成轉檔，快速把文件合成 PDF | `下載 v4.5.0` | [開始轉檔](https://github.com/lianghao02/PaperSwitch) |
| Windows 桌面 | **桌面分區收納格**｜在桌面規劃分區面板，圖示自動歸位、智慧吸附，多組版面一鍵切換，免安裝可隨身攜帶 | `v2.11.0` | [整理桌面](https://github.com/lianghao02/DesktopFramesPlus) |
| Windows 桌面 | **相簿整理收納盒**｜把 Google 相簿匯出的檔案按拍攝年月整理 | `v1.3.1` | [整理相簿](https://github.com/lianghao02/14_Google-Photos-Takeout-Organizer) |
| AI 智慧 | **影片快篩偵測站**｜Python 影片快速篩選工具，整合 YOLO 目標偵測與 PyAV 影音解碼，快速找出關鍵畫面 | `v4.0.1` | [開始快篩](https://github.com/lianghao02/AG-MONITOR-Smart-Video-Screening) |
| AI 智慧 | **研習自動化機器人**｜研習課程自動化：人機協作作答、ddddocr 驗證碼辨識與剪貼簿智慧解析，減少重複操作 | `V2.0.1` | [啟動機器人](https://github.com/lianghao02/auto-learning-bot) |
| AI 智慧 | **影音隱身斗篷**｜對影音自動遮蔽人臉並標記語音區段：YuNet AI 追蹤、關鍵影格平滑補間、純聲學 VAD，100% 離線運轉 | `v1.1.1` | [開始隱身](https://github.com/lianghao02/ClipMask-AI) |

---|---|---|---|
| **輕靈法寶 (Web SPA)** | **萬里烽火・天罡羅盤**｜電信基地台即時定位 | `線上 v3.2.2` | [撥動羅盤](https://lianghao02.github.io/Cell-Tower-Map-Locator/) |
| **輕靈法寶 (Web SPA)** | **天機百景・乾坤照影卷**｜現況照片清冊生成器 | `v2.4.0` | [展開圖卷](https://lianghao02.github.io/Photo-Report-Generator/) |
| **輕靈法寶 (Web SPA)** | **九章靈算・金匱天籌錄**｜金融資料 CSV 轉 Excel | `v1.8.0` | [啟算靈石](https://lianghao02.github.io/Financial-Data-Parser/) |
| **輕靈法寶 (Web SPA)** | **問道四時・太陰太陽時辰曆**｜卡片式行事曆 App | `v1.3.0` | [觀覽時序](https://calendar-family-lianghao02.web.app/) |
| **輕靈法寶 (Web SPA)** | **文印江湖・大千天機打字傳**｜新國風闖關 | `線上 v2.2.3` | [拔劍修煉](https://lianghao02.github.io/16_Wuxia-Typing-Legend/) ｜ [文印劍訣歷程](wuxia_typing.html) |
| **輕靈法寶 (Web SPA)** | **尋龍探脈・玄天鏈流照妖鑑**｜鏈上金流查核 | `v1.6.0` | [探察鏈流](https://github.com/lianghao02/chainflow-inspector) |
| **輕靈法寶 (Web SPA)** | **乾坤節度・靈石月俸度支司**｜固定支出管家 | `v1.2.0` | [執掌度支](https://subscription-ledger-f77fd.web.app) |
| **輕靈法寶 (Web SPA)** | **百草天香・神農玉液煉丹坊**｜手作精油配方管理 | `線上 v1.6.2` | [開爐調香](https://lianghao02.github.io/AromaCraft-Studio/) |
| **玄鐵神兵 (.NET 8)** | **破妄神目・照妖鑑真神兵錄**｜警務影像轉檔銳化 | `v11.4.0` | [祭出神目](https://github.com/lianghao02/Police-Image-Toolkit) |
| **玄鐵神兵 (.NET 8)** | **太清滌塵・靈脈疏通歸元訣**｜系統快取清理 | `v6.2.3` | [運轉歸元](https://github.com/lianghao02/System-Optimizer-Tool) |
| **玄鐵神兵 (.NET 8)** | **裁雲剪雪・玉版符牒工坊**｜PaperSwitch 文件轉檔 | `下載 v4.5.0` | [裁雲印製](https://github.com/lianghao02/PaperSwitch) |
| **玄鐵神兵 (.NET 8)** | **星宿分疆・乾坤芥子八卦閣**｜桌面分區面板 | `v2.11.0` | [布設結界](https://github.com/lianghao02/DesktopFramesPlus) |
| **通天靈識 (Python)** | **滄海擷珠・雲笈玉牒歸真法**｜Google 相簿整理 | `v1.3.0` | [擷珠歸真](https://github.com/lianghao02/14_Google-Photos-Takeout-Organizer) |
| **通天靈識 (Python)** | **大衍追風・天眼快篩搜神陣**｜科技鑑識快篩 | `v4.0.1` | [啟動搜神](https://github.com/lianghao02/AG-MONITOR-Smart-Video-Screening) |
| **通天靈識 (Python)** | **天機偃師・藏經破陣機巧人**｜研習自動化機器人 | `V2.0.1` | [驅策機關](https://github.com/lianghao02/auto-learning-bot) |
| **通天靈識 (Python)** | **無相神隱・玄武閉息去識術**｜影音去識別與聽打 | `v1.1.0` | [施展無相](https://github.com/lianghao02/ClipMask-AI) |

---

## 新增重點專案：《武俠打字傳｜新國風注音與英打闖關》（v2.0.0 文印江湖正式版）

完整圖文說明頁請見本專案內建之 [wuxia_typing.html](wuxia_typing.html)，線上即玩網址為 <https://lianghao02.github.io/16_Wuxia-Typing-Legend/>。

### 1. 專案定位與核心特色
- **文印江湖六章 30 關主線與四大裝備部位**：整合山門初行、竹海尋信、古驛燈火、襄陽會武、月下墨閣、雲海歸字六章故事與六枚文印；客棧擴充兵器（劍／刀／槍三流派立繪、刀罡／槍芒特效與專屬絕招）、護腕、防具與丹藥四大部位。
- **敵人毒／火／冰屬性氣場與連打 2 字運功化解**：敵人常駐屬性法陣且蓄力 `>75%` 泛起強光與氣旋；主角受擊染上毒綠／赤焰／寒霜時，連續打對 2 字即可運功逼毒、滅火或破冰。
- **大千注音免選字直拼與零體積語音朗讀**：直接攔截實體鍵碼（Key Code），一聲明確對應「空白鍵（Space）」；內建 Web Speech API 中英發音朗讀、結算朱紅印章、`🎁 江湖奇遇掉寶` 與 `📖 本關練功小錦囊`。
- **教育部《國語小字典》4,311 字與獨立續玩**：內建完整釋義、例詞消歧與 1～6 年級及國小英文 7 大題本獨立進度保存。

### 2. 遊戲方法（四步驟修煉流程）
1. **選擇主角與年級**：首次進入選擇「雲清川（男俠）」或「蘇映雪（女俠）」與年級／英文，之後直接續行「文印江湖」六章主線（原版 v1.0 修煉入口亦保留於 `classic.html`）。
2. **依四色鍵帽與虛擬鍵盤出招**：跟隨畫面中央的**左手黛藍、右手碧玉、聲調赤金、一聲白玉空白鍵**四色鍵帽輸入；連續 5／10／15 字觸發清風、驚雷、龍鳳水墨大陣獎勵，完成整題時以 450ms 跨鍵盤前景突進演出。
3. **四大裝備流派與運功化煞**：於客棧切換劍、刀、槍三流派兵器與護腕／防具／丹藥；遭遇毒／火／冰屬性攻擊時，連打 2 字運功化解或按 `Alt+1` 施放流派絕招。
4. **結算朱紅印章與練功錦囊**：過關展開朱紅印章評價、奇遇掉寶與本關練功小錦囊（點擊錯字即可重聽標準國語／美式英語發音）。

### 3. 六大階段開發歷程
- **第一階段（Phase 1 原型奠基）**：建立 HTML5 Canvas 戰鬥舞台、大千注音 41 鍵與英文字母雙模鍵盤引擎、兒童防挫折招架機制與 Web Audio API 古風五聲音階合成器。
- **第二階段（Phase 2 字典與 RPG 系統）**：整合教育部《國語小字典》4,311 字與三萬筆詞條、多音字校正、三大境界 30 關戰役、破綻重擊、12 件客棧神兵與墨寶閣／自訂祕笈。
- **第三階段（Phase 3 新國風第一批 37 件素材）**：導入雙主角三階立繪、5 張武俠場景、5 種對手、12 件商店圖示與三階刀光特效，校準鞋底接地錨點與 10 連擊吐納回血。
- **第四階段（Phase 4 新國風第二批 24 件增補，合計 61 件）**：新增首頁雙主角主視覺、書法 Logo、初階受擊／格擋姿態、四色國風鍵帽動態疊字（含一聲空白鍵）、通關境界卷軸與三枚朱砂印章。
- **第五階段（Phase 5 分年級題本與公開試玩版）**：重構國小 1～6 年級混合題本與國小英文專項、實作分題本獨立續玩存檔，部署至 GitHub Pages。
- **第六階段（Phase 6 `v2.0.0` 文印江湖正式版）**：完成六章 30 關文印故事主線、四大裝備部位與劍／刀／槍三流派立繪特效、敵人毒／火／冰屬性狀態與連打 2 字運功化解、Web Speech 語音朗讀與結算練功錦囊，設為預設首頁並通過 50 項單元測試與 11 組跨螢幕縮放實測。

---

## 維護專案資料

展示卡片的主要資料來源是 [data/projects.json](data/projects.json)。版本號欄位（`version`）與說明頁欄位（`guideUrl`、`guideLabel`）為**可選項目**；若未填寫或留空，前端卡片會自動隱藏對應標籤，維持版面純淨整潔。

已由正式網站或發布紀錄核對的版本，更新 JSON 後使用 `python scripts/sync_projects.py --mode fallback` 同步前端備援，不重新推測其他專案版號。`--mode sync` 讀取的是候選版本，仍須人工核對發布狀態，不能將開發版或較舊 Tag 當成正式網站版本。

### 自動同步各專案最新版本與備援資料

為避免各專案升版後需手動修改，專案提供自動同步腳本：

```bash
# 將已核對的 JSON 同步至 main.js 備援，不重新推測版號
python scripts/sync_projects.py --mode fallback

# 掃描鄰近 Repository 的候選版本，執行後須核對發布狀態
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
├─ data/projects.json             # 展示資料單一來源（共 16 個工具）
├─ docs/BASELINE.md               # 重構前網站基準
├─ downloads/                     # photo_report.html 使用的必要下載檔
├─ images/                        # 專案卡片圖片（含 banner_Wuxia-Typing-Legend.webp）
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
| 維護風險 | JSON 與前端 fallback 快取可能不同步。 | 修改已核對的 `data/projects.json` 後執行 `python scripts/sync_projects.py --mode fallback` 與 `validate_projects.py`，確保 `file:///` 與 HTTP 模式一致。 |
| 展示限制 | 靜態頁面不適合保存秘密憑證或執行私人開發環境操作。 | 只發布可公開的資料與連結；私有專案、未發布版本及失效下載入口需人工確認。 |

目前維護基準與交接見 [HANDOFF.md](HANDOFF.md)。

### 問題回報

請提供使用版本／啟動方式、作業系統與相關環境、重現步驟、預期及實際結果，以及去識別的錯誤訊息或最小樣本。先保留現場與來源資料；不要附真實案件、完整帳號、密碼、Token 或 API Key。版本修正以對應原始碼與發行包為準。

## 版本標示範圍

2026-10-16 校正：基地臺定位、武俠打字傳與精油工作室標示線上版本；PaperSwitch 標示已核對 Release 的下載版本。線上或原始碼更新不代表下載包已更新；武俠打字傳正式 Release 仍為 v2.2.0。其他既有版號維持其原有來源，不推定為最新下載版。`sync_projects.py --mode sync` 只產生候選版號，發布前須核對分支與部署；`--mode fallback` 才會保留已核對資料並更新離線備援。
