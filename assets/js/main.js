const categories = {
  web: { icon: "fa-globe", color: "#4a7c59", title: "現代前端・免安裝即開即用", description: "點擊即可在瀏覽器中運作，讓資料在本機安全處理。" },
  native: { icon: "fa-bolt", color: "#6b5b82", title: "Windows 原生・極速桌面工具", description: "以 Windows 原生技術打造的高效桌面工具。" },
  ai: { icon: "fa-brain", color: "#3b628f", title: "AI 深度學習・鑑識與自動化", description: "整合 AI 偵測、影像鑑識與流程自動化的專案。" }
};

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function createCard(project) {
  const card = element("a", "card");
  card.href = project.url; card.target = "_blank"; card.rel = "noopener noreferrer";
  card.setAttribute("aria-label", `${project.name}：${project.action}`);
  const banner = element("div", "card-banner");
  const image = document.createElement("img");
  image.src = project.image; image.alt = project.alt; image.loading = "lazy"; banner.append(image);
  const body = element("div", "card-body");
  const header = element("div", "card-header");
  const title = element("h3", "card-title");
  const icon = element("i", `fa-solid ${project.icon}`); icon.style.color = project.iconColor; icon.setAttribute("aria-hidden", "true");
  title.append(icon, ` ${project.name}`);
  const badges = element("div", "badge-group");
  badges.append(element("span", `badge ${project.badgeClass}`, project.badge), element("span", "badge", project.version));
  header.append(title, badges);
  const footer = element("div", "card-footer");
  const tags = element("div", "tags"); project.tags.forEach((tag) => tags.append(element("span", "tag", tag)));
  const action = element("span", "btn-link", `${project.action} `);
  const arrow = element("i", "fa-solid fa-arrow-right"); arrow.setAttribute("aria-hidden", "true"); action.append(arrow);
  footer.append(tags, action);
  body.append(header, element("p", "card-desc", project.description), footer);
  card.append(banner, body);
  return card;
}

function renderProjects(projects) {
  const container = document.getElementById("projects");
  const fragment = document.createDocumentFragment();
  Object.entries(categories).forEach(([key, category]) => {
    const items = projects.filter((project) => project.category === key);
    if (!items.length) return;
    const section = document.createElement("section"); section.id = `section-${key}`;
    const header = element("div", "section-header"); const row = element("div", "section-title-row"); const title = element("h2", "section-title");
    const icon = element("i", `fa-solid ${category.icon}`); icon.style.color = category.color; icon.setAttribute("aria-hidden", "true"); title.append(icon, ` ${category.title}`);
    row.append(title, element("span", "section-count-badge", `${items.length} 個作品`));
    header.append(row, element("p", "section-desc", category.description));
    const grid = element("div", "grid"); items.forEach((project) => grid.append(createCard(project)));
    section.append(header, grid); fragment.append(section);
  });
  container.replaceChildren(fragment);
  document.getElementById("project-count").textContent = String(projects.length);
}

function startParticles() {
  const canvas = document.getElementById("particle-canvas"); const ctx = canvas?.getContext("2d"); if (!ctx) return;
  let width; let height; let particles = [];
  const colors = ["rgba(82,111,148,", "rgba(154,144,168,", "rgba(82,116,95,"];
  const resize = () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; };
  const particle = () => ({ x: Math.random() * width, y: Math.random() * height, r: Math.random() * 1.8 + 0.5, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, alpha: Math.random() * 0.35 + 0.1, color: colors[Math.floor(Math.random() * colors.length)] });
  const loop = () => { ctx.clearRect(0, 0, width, height); particles.forEach((item) => { item.x = (item.x + item.vx + width) % width; item.y = (item.y + item.vy + height) % height; ctx.beginPath(); ctx.arc(item.x, item.y, item.r, 0, Math.PI * 2); ctx.fillStyle = `${item.color}${item.alpha})`; ctx.fill(); }); requestAnimationFrame(loop); };
  resize(); particles = Array.from({ length: 60 }, particle); window.addEventListener("resize", resize); loop();
}

async function initialize() {
  document.getElementById("year").textContent = new Date().getFullYear(); startParticles();
  try { renderProjects(await fetch("data/projects.json").then((response) => { if (!response.ok) throw new Error(`HTTP ${response.status}`); return response.json(); })); }
  catch (error) { console.error("Unable to load project metadata", error); document.getElementById("projects").textContent = "專案資料暫時無法載入，請稍後再試。"; }
}

initialize();
