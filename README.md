# Astro Base

[![Netlify Status](https://api.netlify.com/api/v1/badges/ab88bd2f-6bc0-4352-af4f-d7f490975684/deploy-status)](https://app.netlify.com/sites/astro-base/deploys)

![screenshot](https://github.com/hellotham/astro-base/blob/main/screenshot.png?raw=true)

Minimal [Astro](https://astro.build) starter for new projects. MIT licence.

Uses:

- [Typescript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [UnoCSS](https://unocss.dev/)
- `@astrojs/sitemap` and `@astrojs/rss` preintegrated
- Heroicons and SVG Logos preloaded via [Iconify](https://iconify.design/)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── astro.config.mjs          # Astro configuration file 
├── public/                   # Location of static assets
│   └── favicon.svg
├── src/
│   ├── assets/               # Location of dynamic assets (eg. images)
│   │   └── screenshot.png
│   ├── components/           # Astro components
│   │   └── header.astro
│   ├── content/              # Location of content (markdown, data and images)
│   │   └── config.ts
│   ├── layouts/              # Location of layouts for pages
│   │   └── Layout.astro
│   └── pages/                # Location of pages
│       └── index.astro
├── package.json
└── uno.config.ts             # UnoCSS configuration file
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:3000`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
