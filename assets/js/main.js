/**
 * LiangHao Project Hub - 莫蘭迪風格商業作品展示引擎
 * 支援即時搜尋過濾、分類切換、精選標記與流暢互動
 */

const categories = {
  web: {
    icon: "fa-fan",
    color: "#4a7c59",
    title: "天機輕靈・免安裝即開法寶",
    description: "點擊即可於乾坤鏡中運轉，丹田本機安全、不染俗塵。",
    targetLabel: "輕靈法寶 🌐"
  },
  native: {
    icon: "fa-khanda",
    color: "#6b5b82",
    title: "混元真氣・Windows 極速神兵",
    description: "以 Windows 混元真氣打造的高效原生神兵，疾速凌厲。",
    targetLabel: "玄鐵神兵 ⚡"
  },
  ai: {
    icon: "fa-yin-yang",
    color: "#41678f",
    title: "通天靈識・AI 鑑識破妄陣",
    description: "凝練 AI 神識洞察秋毫，影像鑑識與機關傀儡自動化。",
    targetLabel: "通天靈識 🧠"
  }
};

/**
 * 本機 file:/// 協定直接雙擊開啟時的內建相容資料（避免瀏覽器本機 CORS 限制導致計數為 0）
 * 在 GitHub Pages 或本機 Web Server 環境下會自動優先 fetch("data/projects.json")
 */
const FALLBACK_PROJECTS = [
    {
      "name": "萬里烽火・天罡羅盤｜基地台即時定位",
      "category": "web",
      "description": "縱覽九州烽火靈脈，定四海修士傳音行蹤。調遣萬里電信信標，於彈指間洞燭陣法虛實、時序軌跡與現地戰術導航。",
      "tags": [
        "HTML5",
        "Leaflet.js",
        "烽火靈脈導航",
        "時序軌跡密法"
      ],
      "url": "https://lianghao02.github.io/Cell-Tower-Map-Locator/",
      "image": "images/banner_Cell-Tower-Map-Locator.png",
      "alt": "萬里烽火・天罡羅盤",
      "icon": "fa-compass",
      "iconColor": "#0ea5e9",
      "badge": "天機免安裝",
      "badgeClass": "badge-web",
      "version": "v3.2.3",
      "action": "撥動羅盤",
      "featured": true,
      "versionLabel": "線上"
    },
    {
      "name": "天機百景・乾坤照影卷｜照片清冊生成器",
      "category": "web",
      "description": "凝神納百景，吐納間化萬象為乾坤玉冊。純前端靈力運轉，一念鑄成標準 OpenXML docx 道牒，不著寸毫雜念，徹底零巨集警示。",
      "tags": [
        "純前端 SPA",
        "docx.js 符印",
        "Tauri 乾坤版",
        "道牒零巨集"
      ],
      "url": "https://lianghao02.github.io/Photo-Report-Generator/",
      "image": "images/banner_Photo-Report-Generator.png",
      "alt": "天機百景・乾坤照影卷",
      "icon": "fa-scroll",
      "iconColor": "#14b8a6",
      "badge": "天機免安裝",
      "badgeClass": "badge-web",
      "version": "v2.4.1",
      "action": "展開圖卷",
      "featured": true
    },
    {
      "name": "九章靈算・金匱天籌錄｜金融資料轉檔",
      "category": "web",
      "description": "撥弄天平算籌，厘清宗門萬千靈石進出。前導靈紋分毫不損，密帳穿行於本機丹田，滴水不漏、外魔不侵，零資料外流風險。",
      "tags": [
        "JavaScript",
        "SheetJS 算籌",
        "前導靈紋護持",
        "密帳金匱"
      ],
      "url": "https://lianghao02.github.io/Financial-Data-Parser/",
      "image": "images/banner_Financial-Data-Parser.png",
      "alt": "九章靈算・金匱天籌錄",
      "icon": "fa-calculator",
      "iconColor": "#d97706",
      "badge": "天機免安裝",
      "badgeClass": "badge-web",
      "version": "v1.8.0",
      "action": "啟算靈石",
      "featured": false
    },
    {
      "name": "問道四時・太陰太陽時辰曆｜卡片式行事曆",
      "category": "web",
      "description": "一葉知秋、四時有序。靜觀日月盈昃與修士課業，以莫蘭迪淡雅青墨繪製時辰簡牒，支援離線參悟與 GAS 雲端天道同步。",
      "tags": [
        "ES2020 JS",
        "莫蘭迪道韻",
        "時序青簡",
        "GAS 雲端符契"
      ],
      "url": "https://calendar-family-lianghao02.web.app/",
      "image": "images/banner_Calendar-Card-App.png",
      "alt": "問道四時・太陰太陽時辰曆",
      "icon": "fa-calendar-check",
      "iconColor": "#10b981",
      "badge": "天機免安裝",
      "badgeClass": "badge-web",
      "version": "v1.3.0",
      "action": "觀覽時序",
      "featured": false
    },
    {
      "name": "文印江湖・大千天機打字傳｜國風闖關",
      "category": "web",
      "description": "專為臺灣學童與修士打造的新國風水墨打字闖關遊戲。收錄文印江湖六章 30 關、刀槍劍三流派、五行屬性運功化解與教育部小字典 4,311 字。",
      "tags": [
        "HTML5 Canvas",
        "文印江湖 30 關",
        "刀槍劍三流派",
        "大千注音免選字"
      ],
      "url": "https://lianghao02.github.io/16_Wuxia-Typing-Legend/",
      "image": "images/banner_Wuxia-Typing-Legend.png",
      "alt": "文印江湖・大千天機打字傳",
      "icon": "fa-feather-pointed",
      "iconColor": "#b45309",
      "badge": "天機免安裝",
      "badgeClass": "badge-web",
      "version": "v2.2.3",
      "action": "拔劍修煉",
      "guideUrl": "wuxia_typing.html",
      "guideLabel": "文印劍訣歷程",
      "featured": true,
      "versionLabel": "線上"
    },
    {
      "name": "尋龍探脈・玄天鏈流照妖鑑｜鏈上金流查核",
      "category": "web",
      "description": "循天道公開靈脈探查金銀流水，撥開重重迷霧卦象。監察 Polymarket 與多鏈金流交織脈絡，圖譜拓撲取證，讓諸般詭計機鋒現出本相。",
      "tags": [
        "區塊鏈拓撲",
        "金流取證法寶",
        "公開天道靈脈",
        "鏈流診斷"
      ],
      "url": "https://github.com/lianghao02/chainflow-inspector",
      "image": "images/banner_chainflow-inspector.webp",
      "alt": "尋龍探脈・玄天鏈流照妖鑑",
      "icon": "fa-link",
      "iconColor": "#e11d48",
      "badge": "天機探脈",
      "badgeClass": "badge-web",
      "version": "v1.6.0",
      "action": "探察鏈流",
      "featured": true
    },
    {
      "name": "乾坤節度・靈石月俸度支司｜固定支出管家",
      "category": "web",
      "description": "凡人修真皆需精打細算，度支司理每月靈石俸祿與宗門供奉。明細一目了然，防微杜漸，聚沙成塔固本培元，原生網頁與 Firebase 雙向同步。",
      "tags": [
        "原生 Web",
        "Firebase 同步",
        "月俸度支靈鑑",
        "聚沙成塔"
      ],
      "url": "https://subscription-ledger-f77fd.web.app",
      "image": "images/banner_Subscription-Manager.webp",
      "alt": "乾坤節度・靈石月俸度支司",
      "icon": "fa-coins",
      "iconColor": "#f59e0b",
      "badge": "天機免安裝",
      "badgeClass": "badge-web",
      "version": "v1.2.0",
      "action": "執掌度支",
      "featured": false
    },
    {
      "name": "百草天香・神農玉液煉丹坊｜精油配方管理",
      "category": "web",
      "description": "探神農百草奧秘，凝天地精華為滴滴天香玉液。配方調製與成本利潤雙模式推演，手機玉案雙欄工作檯，Google Sheets 八方靈簿家庭共賞。",
      "tags": [
        "GAS Web App",
        "Google Sheets 靈簿",
        "百草丹方推演",
        "手機雙欄檯"
      ],
      "url": "https://lianghao02.github.io/AromaCraft-Studio/",
      "image": "images/banner_AromaCraft-Studio.webp",
      "alt": "百草天香・神農玉液煉丹坊",
      "icon": "fa-spa",
      "iconColor": "#84cc16",
      "badge": "天機免安裝",
      "badgeClass": "badge-web",
      "version": "v1.6.2",
      "action": "開爐調香",
      "featured": false,
      "versionLabel": "線上"
    },
    {
      "name": "破妄神目・照妖鑑真神兵錄｜影像銳化鑑識",
      "category": "native",
      "description": "Windows 原生 C# .NET 8 鑑真法眼系統，灌注混元真氣破除迷瘴。iPhone 4K 60fps 與 HEIC 高速並行轉檔，重現纖毫秋毫，誅邪顯形如白晝。",
      "tags": [
        "C# 12 (.NET 8)",
        "WPF 原生心法",
        "4K 鑑真破妄",
        "混元多核並行"
      ],
      "url": "https://github.com/lianghao02/Police-Image-Toolkit",
      "image": "images/banner_Police-Image-Toolkit.png",
      "alt": "破妄神目・照妖鑑真神兵錄",
      "icon": "fa-eye",
      "iconColor": "#6366f1",
      "badge": ".NET 8 混元真氣",
      "badgeClass": "badge-native",
      "version": "v11.4.0",
      "action": "祭出神目",
      "featured": true
    },
    {
      "name": "太清滌塵・靈脈疏通歸元訣｜系統快取清理",
      "category": "native",
      "description": "三十六天靈脈常壅，運轉清心訣一指化解雜氣。300 KB 單符毫芒秒發，Win32 待命快取瞬間釋放，排除雜念心魔，使靈台空明、疾速如風。",
      "tags": [
        "C# 12 (.NET 8)",
        "300KB 單符秒發",
        "Win32 靈脈疏通",
        "歸元無濁"
      ],
      "url": "https://github.com/lianghao02/System-Optimizer-Tool",
      "image": "images/banner_System-Optimizer-Tool.png",
      "alt": "太清滌塵・靈脈疏通歸元訣",
      "icon": "fa-wind",
      "iconColor": "#eab308",
      "badge": ".NET 8 混元真氣",
      "badgeClass": "badge-native",
      "version": "v6.2.3",
      "action": "運轉歸元",
      "featured": false
    },
    {
      "name": "裁雲剪雪・玉版符牒工坊｜文件轉 PDF",
      "category": "native",
      "description": "裁雲為紙、揉墨成經。通曉天下經卷尺寸與折疊造化，WinRT 縮圖與 STA 隔離轉檔無損裝訂，諸般典籍轉瞬成冊，手帳質感古風悠遠。",
      "tags": [
        "C# 12 (.NET 8)",
        "WinRT 靈鑑縮圖",
        "STA 隔絕法印",
        "玉版裝訂"
      ],
      "url": "https://github.com/lianghao02/PaperSwitch",
      "image": "images/banner_PaperSwitch.webp",
      "alt": "裁雲剪雪・玉版符牒工坊",
      "icon": "fa-book-bookmark",
      "iconColor": "#ef4444",
      "badge": ".NET 8 混元真氣",
      "badgeClass": "badge-native",
      "version": "v4.5.0",
      "action": "裁雲印製",
      "featured": true,
      "versionLabel": "下載"
    },
    {
      "name": "星宿分疆・乾坤芥子八卦閣｜桌面分區面板",
      "category": "native",
      "description": "須彌納於芥子，於方寸案頭佈下乾坤結界。八門遁甲自動歸位，法寶神兵各安其所，智慧吸附與多版面一鍵瞬移，免安裝隨身自成洞天。",
      "tags": [
        "C# (.NET 8)",
        "WPF 乾坤法陣",
        "八門遁甲吸附",
        "免安裝洞天"
      ],
      "url": "https://github.com/lianghao02/DesktopFramesPlus",
      "image": "images/banner_DesktopFramesPlus.png",
      "alt": "星宿分疆・乾坤芥子八卦閣",
      "icon": "fa-cubes-stacked",
      "iconColor": "#3b82f6",
      "badge": ".NET 8 混元真氣",
      "badgeClass": "badge-native",
      "version": "v2.11.0",
      "action": "布設結界",
      "featured": true
    },
    {
      "name": "滄海擷珠・雲笈玉牒歸真法｜Google 相簿整理",
      "category": "native",
      "description": "自九霄雲海取回百萬時光浮光，縱然殘卷錯落，亦能按時光輪迴理清年月。純本機無損複製、清冊審查對帳與時光回溯，元氣歸元、玉牒煥然一新。",
      "tags": [
        "Python 3.13",
        "PySide6",
        "本機純複製無損",
        "時光玉牒歸檔"
      ],
      "url": "https://github.com/lianghao02/14_Google-Photos-Takeout-Organizer",
      "image": "images/banner_Google-Photos-Takeout-Organizer.webp",
      "alt": "滄海擷珠・雲笈玉牒歸真法",
      "icon": "fa-cloud-arrow-down",
      "iconColor": "#38bdf8",
      "badge": "本機無損純陽",
      "badgeClass": "badge-native",
      "version": "v1.3.0",
      "action": "擷珠歸真",
      "featured": true
    },
    {
      "name": "大衍追風・天眼快篩搜神陣｜科技鑑識",
      "category": "ai",
      "description": "Python 飛劍引動神識，佈下萬里追風鎖形大陣。整合 YOLO 目標偵測與 PyAV 影音解碼，瞬息甄別千萬浮光掠影，鎖定妖邪蹤跡，明察秋毫。",
      "tags": [
        "Python 3.13",
        "PyAV 影音陣",
        "YOLO 天眼神識",
        "神速快篩"
      ],
      "url": "https://github.com/lianghao02/AG-MONITOR-Smart-Video-Screening",
      "image": "images/banner_AG-Monitor-Forensics.png",
      "alt": "大衍追風・天眼快篩搜神陣",
      "icon": "fa-crosshairs",
      "iconColor": "#0f766e",
      "badge": "Python 3.13 靈識",
      "badgeClass": "badge-ai",
      "version": "v4.0.1",
      "action": "啟動搜神",
      "featured": true
    },
    {
      "name": "天機偃師・藏經破陣機巧人｜研習自動化",
      "category": "ai",
      "description": "上古魯班機關甲士，通曉萬卷典籍試煉難題。搭載人機靈犀作答、ddddocr 破障符眼辨識與剪貼簿智慧解析，化繁為簡如庖丁解牛，日行萬里過關斬將。",
      "tags": [
        "Python 3.13",
        "Selenium 機巧",
        "PySide6",
        "ddddocr 符眼"
      ],
      "url": "https://github.com/lianghao02/auto-learning-bot",
      "image": "images/banner_auto-learning-bot.png",
      "alt": "天機偃師・藏經破陣機巧人",
      "icon": "fa-gears",
      "iconColor": "#8b5cf6",
      "badge": "Python 3.13 靈識",
      "badgeClass": "badge-ai",
      "version": "V2.0.1",
      "action": "驅策機關",
      "featured": false
    },
    {
      "name": "無相神隱・玄武閉息去識術｜影音去識別化",
      "category": "ai",
      "description": "遁入空門無相之境，玄武神甲隱去真容面貌。YuNet AI 追蹤、關鍵影格平滑補間、純聲學 VAD 語音活動標記，100% 離線運轉，落音成字、守口如瓶。",
      "tags": [
        "PySide6",
        "YuNet 追蹤神識",
        "VAD 聲學心法",
        "無相隱匿"
      ],
      "url": "https://github.com/lianghao02/ClipMask-AI",
      "image": "images/banner_ClipMask-AI.png",
      "alt": "無相神隱・玄武閉息去識術",
      "icon": "fa-mask-face",
      "iconColor": "#5f8768",
      "badge": "Python 3.13 靈識",
      "badgeClass": "badge-ai",
      "version": "v1.1.0",
      "action": "施展無相",
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
    featuredBadge.innerHTML = '<i class="fa-solid fa-star" aria-hidden="true"></i> 鎮派絕學';
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
      tagEl.title = isTagActive ? `取消「${tag}」篩選` : `點擊篩選「${tag}」相關法寶`;
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
  const actionHint = element("span", "action-hint", project.url.includes("github.io") ? "即開即用" : "開源專案");
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

