/**
 * LiangHao Project Hub - 莫蘭迪風格商業作品展示引擎
 * 支援即時搜尋過濾、分類切換、精選標記與流暢互動
 */

const categories = {
  web: {
    icon: "fa-globe",
    color: "#4a7c59",
    title: "現代前端・免安裝即開即用",
    description: "點擊即可在瀏覽器中運作，讓資料在本機安全處理。",
    targetLabel: "Web App 🌐"
  },
  native: {
    icon: "fa-bolt",
    color: "#6b5b82",
    title: "Windows 原生・極速桌面工具",
    description: "以 Windows 原生技術打造的高效桌面工具。",
    targetLabel: "Windows 原生 ⚡"
  },
  ai: {
    icon: "fa-brain",
    color: "#41678f",
    title: "AI 深度學習・鑑識與自動化",
    description: "整合 AI 偵測、影像鑑識與流程自動化的專案。",
    targetLabel: "AI 自動化 🧠"
  }
};

/**
 * 本機 file:/// 協定直接雙擊開啟時的內建相容資料（避免瀏覽器本機 CORS 限制導致計數為 0）
 * 在 GitHub Pages 或本機 Web Server 環境下會自動優先 fetch("data/projects.json")
 */
const FALLBACK_PROJECTS = [
  {
    "name": "基地台地圖即時定位",
    "category": "web",
    "description": "基地台地理資訊地圖定位與涵蓋範圍分析工具，支援多家電信業者、多筆匯入、時序軌跡與現地戰術導航。",
    "tags": [
      "HTML5",
      "Leaflet.js",
      "GIS 電信定位"
    ],
    "url": "https://lianghao02.github.io/Cell-Tower-Map-Locator/",
    "image": "images/banner_Cell-Tower-Map-Locator.png",
    "alt": "基地台地圖即時定位",
    "icon": "fa-tower-cell",
    "iconColor": "#0ea5e9",
    "badge": "免安裝",
    "badgeClass": "badge-web",
    "version": "v3.2.0",
    "action": "開啟地圖",
    "featured": true
  },
  {
    "name": "現況照片清冊生成器",
    "category": "web",
    "description": "現場調查照片清冊線上排版生成工具，純前端記憶體組裝標準 OpenXML docx，支援三大版型與 Tauri 桌面版，徹底零巨集警示。",
    "tags": [
      "純前端 SPA",
      "docx.js",
      "Tauri 桌面版"
    ],
    "url": "https://lianghao02.github.io/Photo-Report-Generator/",
    "image": "images/banner_Photo-Report-Generator.png",
    "alt": "現況照片清冊生成器",
    "icon": "fa-camera-retro",
    "iconColor": "#14b8a6",
    "badge": "免安裝",
    "badgeClass": "badge-web",
    "version": "v2.2.1",
    "action": "開啟工具",
    "featured": true
  },
  {
    "name": "金融資料 CSV 轉 Excel",
    "category": "web",
    "description": "金融交易與帳戶調閱 CSV 資料轉檔解析工具，支援前導零完整保護、批次 ZIP 解壓與自動報表格式化，零資料外流風險。",
    "tags": [
      "JavaScript",
      "SheetJS",
      "前導零保護"
    ],
    "url": "https://lianghao02.github.io/Financial-Data-Parser/",
    "image": "images/banner_Financial-Data-Parser.png",
    "alt": "金融資料 CSV 轉 Excel",
    "icon": "fa-file-invoice-dollar",
    "iconColor": "#d97706",
    "badge": "免安裝",
    "badgeClass": "badge-web",
    "version": "v1.7.0",
    "action": "開啟轉檔",
    "featured": false
  },
  {
    "name": "卡片式行事曆 App",
    "category": "web",
    "description": "莫蘭迪質感卡片式月曆與活動排程 Web 應用程式，支援純前端本機離線運作與 Google Apps Script 雲端同步。",
    "tags": [
      "ES2020 JS",
      "莫蘭迪 UI",
      "GAS 雲端同步"
    ],
    "url": "https://lianghao02.github.io/Calendar-Card-App/",
    "image": "images/banner_Calendar-Card-App.png",
    "alt": "卡片式行事曆 App",
    "icon": "fa-calendar-days",
    "iconColor": "#10b981",
    "badge": "免安裝",
    "badgeClass": "badge-web",
    "version": "v1.1.2",
    "action": "開啟應用",
    "featured": false
  },
  {
    "name": "警務影像轉檔與銳化器",
    "category": "native",
    "description": "Windows 原生 C# .NET 8 鑑識影像轉檔系統，支援 iPhone HEIC/WebP 高速多核心並行轉檔與 iPhone 4K 60fps MOV 原生硬體解碼播放。",
    "tags": [
      "C# 12 (.NET 8)",
      "WPF 原生",
      "4K MOV 硬體解碼"
    ],
    "url": "https://github.com/lianghao02/Police-Image-Toolkit",
    "image": "images/banner_Police-Image-Toolkit.png",
    "alt": "警務影像轉檔與銳化器",
    "icon": "fa-shield-cat",
    "iconColor": "#6366f1",
    "badge": ".NET 8 原生",
    "badgeClass": "badge-native",
    "version": "v11.2.0",
    "action": "查看專案",
    "featured": true
  },
  {
    "name": "系統清理與記憶體優化",
    "category": "native",
    "description": "Windows 原生 C# .NET 8 系統快取清理與記憶體動態釋放工具，300 KB 單檔極致秒開，以 Win32 P/Invoke 清理待命快取清單。",
    "tags": [
      "C# 12 (.NET 8)",
      "300KB 單檔",
      "Win32 快取清理"
    ],
    "url": "https://github.com/lianghao02/System-Optimizer-Tool",
    "image": "images/banner_System-Optimizer-Tool.png",
    "alt": "系統清理與記憶體優化",
    "icon": "fa-gauge-high",
    "iconColor": "#eab308",
    "badge": ".NET 8 原生",
    "badgeClass": "badge-native",
    "version": "v6.2.1",
    "action": "查看專案",
    "featured": false
  },
  {
    "name": "PaperSwitch 紙張排版工坊",
    "category": "native",
    "description": "手帳質感 Windows 原生文件轉 PDF 與紙張排版工坊，支援 WinRT 超高清 PDF 縮圖、STA 執行緒 Office COM 隔離轉檔與向量無損裝訂。",
    "tags": [
      "C# 12 (.NET 8)",
      "WinRT 縮圖",
      "STA COM 隔離"
    ],
    "url": "https://github.com/lianghao02/PaperSwitch",
    "image": "images/banner_PaperSwitch.png",
    "alt": "PaperSwitch 紙張排版工坊",
    "icon": "fa-file-pdf",
    "iconColor": "#ef4444",
    "badge": ".NET 8 原生",
    "badgeClass": "badge-native",
    "version": "v4.0.0",
    "action": "查看專案",
    "featured": true
  },
  {
    "name": "Desktop Frames + 桌面分區面板",
    "category": "native",
    "description": "Windows 原生 C# .NET 8 桌面圖示分區面板（Fence），支援智慧間距吸附、多版面一鍵切換、滑鼠框選無損收納與繁體中文可攜免安裝。",
    "tags": [
      "C# (.NET 8)",
      "WPF 原生",
      "智慧吸附與版面切換",
      "免安裝 Portable"
    ],
    "url": "https://github.com/lianghao02/DesktopFramesPlus",
    "image": "images/banner_DesktopFramesPlus.png",
    "alt": "Desktop Frames + 桌面分區面板",
    "icon": "fa-table-cells-large",
    "iconColor": "#3b82f6",
    "badge": ".NET 8 原生",
    "badgeClass": "badge-native",
    "version": "v2.8.0",
    "action": "查看專案",
    "featured": true
  },
  {
    "name": "AG-MONITOR 智慧影像快篩系統",
    "category": "ai",
    "description": "科技偵查與智慧雙軌鑑識工作站，整合數位鑑識、軌跡分析與即時監控過濾工具，支援 YOLOv8 目標偵測與 PyAV 影音解碼。",
    "tags": [
      "Python 3.13",
      "PyAV",
      "YOLO11、12",
      "智慧快篩"
    ],
    "url": "https://github.com/lianghao02/AG-MONITOR-Smart-Video-Screening",
    "image": "images/banner_AG-Monitor-Forensics.png",
    "alt": "AG-MONITOR 智慧影像快篩系統",
    "icon": "fa-video",
    "iconColor": "#0f766e",
    "badge": "Python 3.13",
    "badgeClass": "badge-ai",
    "version": "v4.0.0",
    "action": "查看專案",
    "featured": true
  },
  {
    "name": "行政效能領航員自動化機器人",
    "category": "ai",
    "description": "公務自動化研習與題庫解析 Bot，搭載人機協同免 API Key 彈窗作答、ddddocr 驗證碼辨識、剪貼簿智慧解析與進度管理。",
    "tags": [
      "Python 3.13",
      "Selenium",
      "PySide6",
      "ddddocr"
    ],
    "url": "https://github.com/lianghao02/auto-learning-bot",
    "image": "images/banner_auto-learning-bot.png",
    "alt": "行政效能領航員自動化機器人",
    "icon": "fa-robot",
    "iconColor": "#8b5cf6",
    "badge": "Python 3.13",
    "badgeClass": "badge-ai",
    "version": "v3.1.1",
    "action": "查看專案",
    "featured": false
  },
  {
    "name": "智慧相片自動分類助手",
    "category": "ai",
    "description": "智慧相片整理助手，採標準 src-layout，支援 Google Takeout ZIP 串流解壓、dHash 相似感知辨識、Windows 捷徑審核與安全隔離歸檔。",
    "tags": [
      "Python 3.13",
      "pywebview",
      "Takeout 串流",
      "dHash"
    ],
    "url": "https://github.com/lianghao02/Smart-Photo-Organizer",
    "image": "images/banner_Smart-Photo-Organizer.png",
    "alt": "智慧相片自動分類助手",
    "icon": "fa-images",
    "iconColor": "#3b82f6",
    "badge": "Python 3.13",
    "badgeClass": "badge-ai",
    "version": "v3.2.0",
    "action": "查看專案",
    "featured": false
  },
  {
    "name": "智慧影音去識別與聽打工作站",
    "category": "ai",
    "description": "新聞與隱私專用 100% 離線影音工作站。搭載 YuNet AI 人臉追蹤、手動關鍵影格平滑補間、純聲學 VAD 語音活動標記與即時人工聽打字幕。",
    "tags": [
      "PySide6",
      "YuNet AI",
      "VAD 聲學",
      "無損輸出"
    ],
    "url": "https://github.com/lianghao02/ClipMask-AI",
    "image": "images/banner_ClipMask-AI.png",
    "alt": "智慧影音去識別與聽打工作站",
    "icon": "fa-mask",
    "iconColor": "#5f8768",
    "badge": "Python 3.13",
    "badgeClass": "badge-ai",
    "version": "v1.0.0",
    "action": "查看專案",
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
    featuredBadge.innerHTML = '<i class="fa-solid fa-star" aria-hidden="true"></i> 精選作品';
    banner.append(featuredBadge);
  }

  // 專案類型標記（Web App vs 開源桌面）
  const targetLabel = categories[project.category]?.targetLabel || "專案";
  const targetPill = element("span", "target-pill", targetLabel);
  banner.append(targetPill);

  // 專案封面圖
  const image = document.createElement("img");
  image.src = project.image;
  image.alt = project.alt || project.name;
  image.loading = "lazy";
  banner.append(image);

  // 卡片主體
  const body = element("div", "card-body");

  // Meta 資訊（分類膠囊 + 版本標記）
  const meta = element("div", "card-meta");
  const badgeSubtle = element("span", `badge-subtle badge-${project.category}`, project.badge);
  const versionTag = element("span", "version-tag", project.version);
  meta.append(badgeSubtle, versionTag);

  // 專案標題
  const title = element("h3", "card-title");
  const icon = element("i", `fa-solid ${project.icon} card-title-icon`);
  icon.style.color = project.iconColor || categories[project.category]?.color || "#526f94";
  icon.setAttribute("aria-hidden", "true");
  title.append(icon, ` ${project.name}`);

  // 專案描述
  const desc = element("p", "card-desc", project.description);

  // 技術標籤庫
  const tags = element("div", "tags");
  if (Array.isArray(project.tags)) {
    project.tags.forEach((tag) => tags.append(element("span", "tag", tag)));
  }

  // 卡片底部（行動指引 + 箭頭按鈕）
  const footer = element("div", "card-footer");
  const actionHint = element("span", "action-hint", project.url.includes("github.io") ? "即開即用" : "開源專案");
  const actionBtn = element("span", "action-btn", `${project.action} `);
  const arrow = element("i", "fa-solid fa-arrow-right");
  arrow.setAttribute("aria-hidden", "true");
  actionBtn.append(arrow);
  footer.append(actionHint, actionBtn);

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

    // 支援快捷鍵 '/' 或 'Ctrl+K' 快速聚焦搜尋
    window.addEventListener("keydown", (e) => {
      if ((e.key === "/" && document.activeElement !== searchInput) || (e.ctrlKey && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        searchInput.focus();
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

