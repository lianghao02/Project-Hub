# Website baseline

- Baseline commit: `d5f7822fde572dcc9d5957984b7004b29560559a`
- Homepage: loaded from a local static server; CSS, JavaScript, images, cards and links rendered.
- Project count: 11 cards in three sections.
- Known issue: project metadata and card markup are duplicated directly in `index.html`; the hero also links to Dev-Control-Center.
- Broken links / console errors: no static missing local card-image paths found; no baseline console errors observed.
- Deployment: `.github/workflows/pages.yml` deploys the repository root from `main` with GitHub Pages actions.
