# Verse

An open source content management platform for world builders and storytellers.

**Build lore wikis, curate art galleries, publish prose, and bring your worlds to life.**

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Deploy to Cloudflare](https://github.com/jbatte47/verse/actions/workflows/deploy.yml/badge.svg)](https://github.com/jbatte47/verse/actions/workflows/deploy.yml)

## Features

- **Lore Wiki** — Interconnected knowledge bases for characters, locations, factions, and timelines
- **Art Gallery** — Showcase concept art, maps, and visual assets with metadata and tagging
- **Text Reader** — Beautiful Markdown-rendered prose with rich typography
- **Secure Auth** — Pluggable authentication via Cloudflare Access
- **Edge-First** — Deployed on Cloudflare Workers for global performance
- **WCAG Compliant** — Accessible by design, mobile-first responsive layouts

## Tech Stack

- [Next.js 15](https://nextjs.org/) — React framework with App Router
- [Cloudflare Workers](https://workers.cloudflare.com/) — Edge runtime via [OpenNext](https://opennext.js.org/cloudflare)
- [Cloudflare D1](https://developers.cloudflare.com/d1/) — Serverless SQL for structured content
- [Cloudflare R2](https://developers.cloudflare.com/r2/) — Object storage for media assets
- [Cloudflare KV](https://developers.cloudflare.com/kv/) — Key-value store for config and flags

## Getting Started

### Prerequisites

- Node.js 22+
- npm

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Preview with Cloudflare runtime
npm run preview
```

### Deployment

Deployments are fully automated via GitHub Actions. Push to `main` and the site deploys to Cloudflare Workers within minutes.

To deploy manually:

```bash
npm run deploy
```

## Architecture

```
  GitHub (push to main)
    │
    ▼
  GitHub Actions (build + deploy)
    │
    ▼
  Cloudflare Workers (edge runtime)
    │
    ├──▶  KV    config, feature flags
    ├──▶  D1    lore entries, metadata
    └──▶  R2    images, media, prose files

  Content persists across deployments ✓
```

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).
