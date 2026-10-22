/**
 * LiangHao Project Hub - Q 版 2D 遊戲風格作品展示引擎
 * 支援即時搜尋過濾、分類切換、精選標記與流暢互動
 */

// 封面模式：false＝CSS 圖塊（預設），true＝使用 data 內的 image 插畫
const USE_ARTWORK = false;

const categories = {
  web: {
    icon: "fa-globe",
    color: "#047857",
    title: "網頁關卡・點開就能用",
    description: "免安裝，打開網頁就能使用，資料留在你的裝置。"
  },
  native: {
    icon: "fa-computer",
    color: "#6D28D9",
    title: "桌面基地・Windows 本機工具",
    description: "Windows 原生桌面工具，執行快速，檔案不離開電腦。"
  },
  ai: {
    icon: "fa-robot",
    color: "#1D4ED8",
    title: "智慧實驗室・AI 輔助工具",
    description: "影像、影音與學習流程的 AI 輔助自動化，以離線優先設計。"
  }
};

/**
 * 本機 file:/// 協定直接雙擊開啟時的內建相容資料（避免瀏覽器本機 CORS 限制導致計數為 0）
 * 在 GitHub Pages 或本機 Web Server 環境下會自動優先 fetch("data/projects.json")
 */
const FALLBACK_PROJECTS = [
    {
      "name": "基地台定位雷達",
      "category": "web",
      "description": "在地圖上快速定位基地台，依時間順序畫出移動軌跡，並支援現地導航。免安裝即開，資料在本機處理。",
      "tags": [
        "HTML5",
        "Leaflet.js",
        "即時定位導航",
        "時序軌跡"
      ],
      "url": "https://lianghao02.github.io/Cell-Tower-Map-Locator/",
      "image": "images/banner_Cell-Tower-Map-Locator.webp",
      "alt": "基地台定位雷達封面",
      "icon": "fa-compass",
      "iconColor": "#0ea5e9",
      "badge": "免安裝網頁",
      "badgeClass": "badge-web",
      "version": "v3.2.4",
      "action": "開啟雷達",
      "featured": true,
      "versionLabel": "線上"
    },
    {
      "name": "照片清冊工坊",
      "category": "web",
      "description": "把現場照片整理成標準 docx 照片清冊。純前端運作、不含巨集，另有 Tauri 桌面版。",
      "tags": [
        "純前端 SPA",
        "docx.js",
        "Tauri 桌面版",
        "零巨集"
      ],
      "url": "https://lianghao02.github.io/Photo-Report-Generator/",
      "image": "images/banner_Photo-Report-Generator.webp",
      "alt": "照片清冊工坊封面",
      "icon": "fa-scroll",
      "iconColor": "#14b8a6",
      "badge": "免安裝網頁",
      "badgeClass": "badge-web",
      "version": "v2.4.1",
      "action": "開啟工坊",
      "featured": true
    },
    {
      "name": "金融資料轉檔機",
      "category": "web",
      "description": "轉換金融資料並保留前導零不被吞掉。資料只在本機處理，沒有外流風險。",
      "tags": [
        "JavaScript",
        "SheetJS",
        "前導零保護",
        "本機處理"
      ],
      "url": "https://lianghao02.github.io/Financial-Data-Parser/",
      "image": "images/banner_Financial-Data-Parser.webp",
      "alt": "金融資料轉檔機封面",
      "icon": "fa-calculator",
      "iconColor": "#d97706",
      "badge": "免安裝網頁",
      "badgeClass": "badge-web",
      "version": "v1.8.1",
      "action": "開始轉檔",
      "featured": false
    },
    {
      "name": "卡片行事曆手帳",
      "category": "web",
      "description": "卡片式行事曆，配色淡雅，支援離線使用與 Google Apps Script 雲端同步。",
      "tags": [
        "ES2020 JS",
        "離線可用",
        "卡片式介面",
        "GAS 雲端同步"
      ],
      "url": "https://calendar-family-lianghao02.web.app/",
      "image": "images/banner_Calendar-Card-App.webp",
      "alt": "卡片行事曆手帳封面",
      "icon": "fa-calendar-check",
      "iconColor": "#10b981",
      "badge": "免安裝網頁",
      "badgeClass": "badge-web",
      "version": "v1.3.1",
      "action": "打開手帳",
      "featured": false
    },
    {
      "name": "武俠打字傳",
      "category": "web",
      "description": "專為臺灣學童設計的國風打字闖關遊戲：六章 30 關、刀槍劍三流派、五行屬性，收錄教育部小字典 4,311 字。",
      "tags": [
        "HTML5 Canvas",
        "六章 30 關",
        "刀槍劍三流派",
        "注音免選字"
      ],
      "url": "https://lianghao02.github.io/16_Wuxia-Typing-Legend/",
      "image": "images/banner_Wuxia-Typing-Legend.webp",
      "alt": "武俠打字傳封面",
      "icon": "fa-feather-pointed",
      "iconColor": "#b45309",
      "badge": "免安裝網頁",
      "badgeClass": "badge-web",
      "version": "v2.2.3",
      "action": "開始闖關",
      "guideUrl": "wuxia_typing.html",
      "guideLabel": "玩法與開發歷程",
      "featured": true,
      "versionLabel": "線上"
    },
    {
      "name": "鏈上金流追蹤站",
      "category": "web",
      "description": "查看公開鏈上資料的資金流向，涵蓋 Polymarket 與多鏈金流，以圖譜呈現關聯，協助取證與查核。",
      "tags": [
        "區塊鏈圖譜",
        "金流取證",
        "公開鏈上資料",
        "鏈流診斷"
      ],
      "url": "https://github.com/lianghao02/chainflow-inspector",
      "image": "images/banner_chainflow-inspector.webp",
      "alt": "鏈上金流追蹤站封面",
      "icon": "fa-link",
      "iconColor": "#e11d48",
      "badge": "免安裝網頁",
      "badgeClass": "badge-web",
      "version": "v1.6.1",
      "action": "開始追蹤",
      "featured": true
    },
    {
      "name": "固定支出管家",
      "category": "web",
      "description": "管理每月固定支出，明細一目了然。原生網頁搭配 Firebase 雙向同步。",
      "tags": [
        "原生 Web",
        "Firebase 同步",
        "月支出明細",
        "訂閱管理"
      ],
      "url": "https://subscription-ledger-f77fd.web.app",
      "image": "images/banner_Subscription-Manager.webp",
      "alt": "固定支出管家封面",
      "icon": "fa-coins",
      "iconColor": "#f59e0b",
      "badge": "免安裝網頁",
      "badgeClass": "badge-web",
      "version": "v1.2.1",
      "action": "查看帳本",
      "featured": false
    },
    {
      "name": "精油調配工坊",
      "category": "web",
      "description": "精油配方調製與成本利潤雙模式試算，手機採雙欄工作區，可透過 Google Sheets 家庭共用。",
      "tags": [
        "GAS Web App",
        "Google Sheets",
        "配方試算",
        "手機雙欄"
      ],
      "url": "https://lianghao02.github.io/AromaCraft-Studio/",
      "image": "images/banner_AromaCraft-Studio.webp",
      "alt": "精油調配工坊封面",
      "icon": "fa-spa",
      "iconColor": "#84cc16",
      "badge": "免安裝網頁",
      "badgeClass": "badge-web",
      "version": "v1.6.5",
      "action": "開始調配",
      "featured": false,
      "versionLabel": "線上"
    },
    {
      "name": "影像鑑識放大鏡",
      "category": "native",
      "description": "Windows 原生 C# .NET 8 影像鑑識工具，支援 iPhone 4K 60fps 與 HEIC 高速並行轉檔，細節銳化清楚。",
      "tags": [
        "C# 12 (.NET 8)",
        "WPF",
        "4K 銳化",
        "多核並行"
      ],
      "url": "https://github.com/lianghao02/Police-Image-Toolkit",
      "image": "images/banner_Police-Image-Toolkit.webp",
      "alt": "影像鑑識放大鏡封面",
      "icon": "fa-eye",
      "iconColor": "#6366f1",
      "badge": "Windows 桌面",
      "badgeClass": "badge-native",
      "version": "v11.4.0",
      "action": "開啟放大鏡",
      "featured": true
    },
    {
      "name": "系統清理小幫手",
      "category": "native",
      "description": "300 KB 單檔小工具，秒開即用，一鍵釋放 Win32 待命快取。",
      "tags": [
        "C# 12 (.NET 8)",
        "300KB 單檔",
        "Win32 快取釋放",
        "秒開"
      ],
      "url": "https://github.com/lianghao02/System-Optimizer-Tool",
      "image": "images/banner_System-Optimizer-Tool.webp",
      "alt": "系統清理小幫手封面",
      "icon": "fa-wind",
      "iconColor": "#eab308",
      "badge": "Windows 桌面",
      "badgeClass": "badge-native",
      "version": "v6.2.3",
      "action": "一鍵清理",
      "featured": false
    },
    {
      "name": "PDF 印刷所",
      "category": "native",
      "description": "掌握各式文件尺寸與排版，以 WinRT 縮圖與 STA 隔離完成轉檔，快速把文件合成 PDF。",
      "tags": [
        "C# 12 (.NET 8)",
        "WinRT 縮圖",
        "STA 隔離",
        "文件轉 PDF"
      ],
      "url": "https://github.com/lianghao02/PaperSwitch",
      "image": "images/banner_PaperSwitch.webp",
      "alt": "PDF 印刷所封面",
      "icon": "fa-book-bookmark",
      "iconColor": "#ef4444",
      "badge": "Windows 桌面",
      "badgeClass": "badge-native",
      "version": "v4.5.0",
      "action": "開始轉檔",
      "featured": true,
      "versionLabel": "下載"
    },
    {
      "name": "桌面分區收納格",
      "category": "native",
      "description": "在桌面規劃分區面板，圖示自動歸位、智慧吸附，多組版面一鍵切換，免安裝可隨身攜帶。",
      "tags": [
        "C# (.NET 8)",
        "WPF",
        "智慧吸附",
        "免安裝"
      ],
      "url": "https://github.com/lianghao02/DesktopFramesPlus",
      "image": "images/banner_DesktopFramesPlus.webp",
      "alt": "桌面分區收納格封面",
      "icon": "fa-cubes-stacked",
      "iconColor": "#3b82f6",
      "badge": "Windows 桌面",
      "badgeClass": "badge-native",
      "version": "v2.11.1",
      "action": "整理桌面",
      "featured": true
    },
    {
      "name": "相簿整理收納盒",
      "category": "native",
      "description": "把 Google 相簿匯出的檔案按拍攝年月整理。純本機無損複製，並提供清冊審查對帳與時間回溯。",
      "tags": [
        "Python 3.13",
        "PySide6",
        "本機無損複製",
        "年月歸檔"
      ],
      "url": "https://github.com/lianghao02/14_Google-Photos-Takeout-Organizer",
      "image": "images/banner_Google-Photos-Takeout-Organizer.webp",
      "alt": "相簿整理收納盒封面",
      "icon": "fa-cloud-arrow-down",
      "iconColor": "#38bdf8",
      "badge": "Windows 桌面",
      "badgeClass": "badge-native",
      "version": "v1.3.1",
      "action": "整理相簿",
      "featured": true
    },
    {
      "name": "影片快篩偵測站",
      "category": "ai",
      "description": "Python 影片快速篩選工具，整合 YOLO 目標偵測與 PyAV 影音解碼，快速找出關鍵畫面。",
      "tags": [
        "Python 3.13",
        "PyAV",
        "YOLO",
        "快速篩選"
      ],
      "url": "https://github.com/lianghao02/AG-MONITOR-Smart-Video-Screening",
      "image": "images/banner_AG-Monitor-Forensics.webp",
      "alt": "影片快篩偵測站封面",
      "icon": "fa-crosshairs",
      "iconColor": "#0f766e",
      "badge": "AI 智慧",
      "badgeClass": "badge-ai",
      "version": "v4.0.1",
      "action": "開始快篩",
      "featured": true
    },
    {
      "name": "研習自動化機器人",
      "category": "ai",
      "description": "研習課程自動化：人機協作作答、ddddocr 驗證碼辨識與剪貼簿智慧解析，減少重複操作。",
      "tags": [
        "Python 3.13",
        "Selenium",
        "PySide6",
        "ddddocr"
      ],
      "url": "https://github.com/lianghao02/auto-learning-bot",
      "image": "images/banner_auto-learning-bot.webp",
      "alt": "研習自動化機器人封面",
      "icon": "fa-gears",
      "iconColor": "#8b5cf6",
      "badge": "AI 智慧",
      "badgeClass": "badge-ai",
      "version": "V2.0.1",
      "action": "啟動機器人",
      "featured": false
    },
    {
      "name": "影音隱身斗篷",
      "category": "ai",
      "description": "對影音自動遮蔽人臉並標記語音區段：YuNet AI 追蹤、關鍵影格平滑補間、純聲學 VAD，100% 離線運轉。",
      "tags": [
        "PySide6",
        "YuNet 追蹤",
        "VAD 語音標記",
        "100% 離線"
      ],
      "url": "https://github.com/lianghao02/ClipMask-AI",
      "image": "images/banner_ClipMask-AI.webp",
      "alt": "影音隱身斗篷封面",
      "icon": "fa-mask-face",
      "iconColor": "#5f8768",
      "badge": "AI 智慧",
      "badgeClass": "badge-ai",
      "version": "v1.1.1",
      "action": "開始隱身",
      "featured": false
    }
  ];

let allProjects = [];
let currentCategory = "all";
let searchQuery = "";

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined && text !== null) node.textContent = text;
  return node;
}

function createCard(project) {
  const card = element("a", `card${project.featured ? " is-featured" : ""}`);
  card.href = project.url;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.setAttribute("aria-label", `${project.name}：${project.action}`);

  // Banner 容器
  const banner = element("div", "card-banner");

  // 精選作品星標徽章
  if (project.featured) {
    const featuredBadge = element("span", "featured-badge");
    featuredBadge.innerHTML = '<i class="fa-solid fa-star" aria-hidden="true"></i> 精選';
    banner.append(featuredBadge);
  }

  // 專案封面：Q 版遊戲道具圖塊（粗描邊色塊＋大圖示）；之後若有新插畫，把 USE_ARTWORK 設為 true 即改用 project.image
  const category = categories[project.category];
  if (USE_ARTWORK && project.image) {
    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.alt || project.name;
    image.loading = "lazy";
    banner.append(image);
  } else {
    const ink = project.iconColor || category?.color || "#334155";
    banner.style.setProperty("--tile-bg", `color-mix(in srgb, ${ink} 20%, #FFFFFF)`);
    banner.style.setProperty("--tile-ink", ink);
    banner.classList.add("is-tile");
    const emblem = element("span", "tile-emblem");
    emblem.setAttribute("aria-hidden", "true");
    emblem.append(element("i", `fa-solid ${project.icon}`));
    banner.append(emblem);
  }

  // 卡片主體
  const body = element("div", "card-body");

  // Meta 資訊（分類膠囊 + 可選版本/狀態標記）
  const meta = element("div", "card-meta");
  const badgeSubtle = element("span", `badge-subtle badge-${project.category}`, project.badge);
  meta.append(badgeSubtle);

  if (project.version && typeof project.version === "string" && project.version.trim()) {
    const label = project.versionLabel ? `${project.versionLabel} ` : "";
    const versionTag = element("span", "version-tag", `${label}${project.version.trim()}`);
    meta.append(versionTag);
  }

  // 專案標題
  const title = element("h3", "card-title");
  const icon = element("i", `fa-solid ${project.icon} card-title-icon`);
  icon.style.color = project.iconColor || categories[project.category]?.color || "#526f94";
  icon.setAttribute("aria-hidden", "true");
  title.append(icon, ` ${project.name}`);

  // 專案描述
  const desc = element("p", "card-desc", project.description);

  // 技術標籤庫（支援點擊即時過濾）
  const tags = element("div", "tags");
  if (Array.isArray(project.tags)) {
    const activeQuery = searchQuery.trim().toLowerCase();
    project.tags.forEach((tag) => {
      const isTagActive = activeQuery && activeQuery === tag.toLowerCase();
      const tagEl = element("span", `tag${isTagActive ? " is-active" : ""}`, tag);
      tagEl.setAttribute("role", "button");
      tagEl.setAttribute("tabindex", "0");
      tagEl.title = isTagActive ? `取消「${tag}」篩選` : `點擊篩選「${tag}」相關工具`;
      const handleTagClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const searchInput = document.getElementById("project-search");
        if (searchQuery.trim().toLowerCase() === tag.toLowerCase()) {
          searchQuery = "";
        } else {
          searchQuery = tag;
        }
        if (searchInput) searchInput.value = searchQuery;
        applyFilter();
      };
      tagEl.addEventListener("click", handleTagClick);
      tagEl.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          handleTagClick(event);
        }
      });
      tags.append(tagEl);
    });
  }

  // 卡片底部（行動指引 + 可選說明頁按鈕 + 箭頭按鈕）
  const footer = element("div", "card-footer");
  const footerLeft = element("div", "card-footer-left");
  const actionHint = element("span", "action-hint", project.url.includes("github.io") ? "免安裝" : "開源專案");
  footerLeft.append(actionHint);
  if (project.guideUrl && typeof project.guideUrl === "string" && project.guideUrl.trim()) {
    const guideBtn = element("button", "guide-btn");
    guideBtn.type = "button";
    guideBtn.innerHTML = `<i class="fa-solid fa-book-open" aria-hidden="true"></i> ${project.guideLabel || "專案說明"}`;
    guideBtn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      window.location.href = project.guideUrl;
    });
    footerLeft.append(guideBtn);
  }
  const actionBtn = element("span", "action-btn", `${project.action} `);
  const arrow = element("i", "fa-solid fa-arrow-right");
  arrow.setAttribute("aria-hidden", "true");
  actionBtn.append(arrow);
  footer.append(footerLeft, actionBtn);

  body.append(meta, title, desc, tags, footer);
  card.append(banner, body);
  return card;
}

function updateCategoryCounts() {
  const counts = { all: allProjects.length, web: 0, native: 0, ai: 0 };
  allProjects.forEach((p) => {
    if (counts[p.category] !== undefined) counts[p.category]++;
  });

  document.getElementById("count-all").textContent = String(counts.all);
  document.getElementById("count-web").textContent = String(counts.web);
  document.getElementById("count-native").textContent = String(counts.native);
  document.getElementById("count-ai").textContent = String(counts.ai);
  document.getElementById("total-projects-stat").textContent = `${counts.all}+`;
  document.getElementById("project-count").textContent = String(counts.all);
}

function renderEmptyState(query) {
  const container = document.getElementById("projects");
  const empty = element("div", "empty-state");
  const icon = element("div", "empty-icon");
  icon.innerHTML = '<i class="fa-solid fa-folder-open" aria-hidden="true"></i>';

  const title = element("h3", "empty-title", "未找到符合的專案作品");
  const desc = element(
    "p",
    "empty-desc",
    query ? `沒有找到包含「${query}」的作品，請嘗試其他關鍵字或切換分類。` : "目前此分類下暫無公開作品。"
  );

  const resetBtn = element("button", "reset-btn", "清除搜尋條件");
  resetBtn.addEventListener("click", () => {
    const input = document.getElementById("project-search");
    if (input) input.value = "";
    searchQuery = "";
    currentCategory = "all";
    updateActiveTab();
    applyFilter();
  });

  empty.append(icon, title, desc, resetBtn);
  container.replaceChildren(empty);
}

function applyFilter() {
  const container = document.getElementById("projects");
  const query = searchQuery.trim().toLowerCase();

  // 雙重過濾：類別 + 關鍵字（比對名稱、描述、tags）
  const filtered = allProjects.filter((project) => {
    const matchesCategory = currentCategory === "all" || project.category === currentCategory;
    if (!matchesCategory) return false;

    if (!query) return true;
    const inName = project.name.toLowerCase().includes(query);
    const inDesc = project.description.toLowerCase().includes(query);
    const inTags = Array.isArray(project.tags) && project.tags.some((t) => t.toLowerCase().includes(query));
    return inName || inDesc || inTags;
  });

  if (!filtered.length) {
    renderEmptyState(query);
    return;
  }

  const fragment = document.createDocumentFragment();

  if (currentCategory === "all" && !query) {
    // 預設全覽模式：依類別分組展示
    Object.entries(categories).forEach(([key, category]) => {
      const items = filtered.filter((p) => p.category === key);
      if (!items.length) return;

      const section = document.createElement("section");
      section.className = "category-section";
      section.id = `section-${key}`;

      const header = element("div", "section-header");
      const info = element("div", "section-info");
      const title = element("h2", "section-title");
      const icon = element("i", `fa-solid ${category.icon}`);
      icon.style.color = category.color;
      icon.setAttribute("aria-hidden", "true");
      title.append(icon, ` ${category.title}`);
      info.append(title, element("p", "section-desc", category.description));

      const countBadge = element("span", "section-count-badge", `${items.length} 個作品`);
      header.append(info, countBadge);

      const grid = element("div", "grid");
      items.forEach((p) => grid.append(createCard(p)));

      section.append(header, grid);
      fragment.append(section);
    });
  } else {
    // 搜尋或特定類別篩選模式：平鋪流暢展示
    const section = document.createElement("section");
    section.className = "category-section";

    const header = element("div", "section-header");
    const info = element("div", "section-info");
    const title = element("h2", "section-title");

    let headerTitle = "篩選結果";
    if (currentCategory !== "all" && categories[currentCategory]) {
      headerTitle = categories[currentCategory].title;
    }
    title.textContent = headerTitle;

    const descText = query ? `搜尋「${query}」共找到 ${filtered.length} 個符合的作品` : categories[currentCategory]?.description || "";
    info.append(title, element("p", "section-desc", descText));

    const countBadge = element("span", "section-count-badge", `${filtered.length} 個作品`);
    header.append(info, countBadge);

    const grid = element("div", "grid");
    filtered.forEach((p) => grid.append(createCard(p)));

    section.append(header, grid);
    fragment.append(section);
  }

  container.replaceChildren(fragment);
}

function updateActiveTab() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    const isTarget = btn.dataset.category === currentCategory;
    btn.classList.toggle("active", isTarget);
    btn.setAttribute("aria-selected", isTarget ? "true" : "false");
  });
}

function setupControls() {
  // 分類標籤切換
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentCategory = btn.dataset.category || "all";
      updateActiveTab();
      applyFilter();
    });
  });

  // 搜尋框輸入
  const searchInput = document.getElementById("project-search");
  const clearBtn = document.getElementById("search-clear");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      applyFilter();
    });

    // 支援快捷鍵 '/' 或 'Ctrl+K' 快速聚焦搜尋，'Escape' 一鍵重置
    window.addEventListener("keydown", (e) => {
      if ((e.key === "/" && document.activeElement !== searchInput) || (e.ctrlKey && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        searchInput.focus();
      } else if (e.key === "Escape" && (searchQuery || currentCategory !== "all")) {
        searchInput.value = "";
        searchQuery = "";
        currentCategory = "all";
        updateActiveTab();
        applyFilter();
        searchInput.blur();
      }
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      applyFilter();
      searchInput.focus();
    });
  }

  // 暴露給外部（如 Footer 連結）呼叫
  window.filterByCategory = (categoryKey) => {
    currentCategory = categoryKey;
    updateActiveTab();
    applyFilter();
    const projectsEl = document.getElementById("projects");
    if (projectsEl) projectsEl.scrollIntoView({ behavior: "smooth" });
  };
}

async function initialize() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  setupControls();

  let loadedProjects = null;

  // 若不是本機 file:// 協定，優先透過 fetch 取得最新動態 json
  if (window.location.protocol !== "file:") {
    try {
      const response = await fetch("data/projects.json");
      if (response.ok) {
        loadedProjects = await response.json();
      }
    } catch (error) {
      console.warn("Fetch failed, falling back to embedded data", error);
    }
  }

  // 若在 file:// 下（被瀏覽器安全限制）或 fetch 失敗，使用內建備援資料
  allProjects = loadedProjects && loadedProjects.length ? loadedProjects : FALLBACK_PROJECTS;
  updateCategoryCounts();
  applyFilter();
}

initialize();

