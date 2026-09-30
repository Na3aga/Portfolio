# na3aga.com

Personal portfolio. Built with Astro, deployed on Cloudflare Pages.

## Stack

| | |
|---|---|
| Framework | Astro 7 (static output) |
| Islands | React 19, mounted only where needed |
| Styles | Tailwind CSS v4 (CSS-first config in `src/styles/global.css`) |
| Content | MDX collections in `content/projects/` |
| 3D | Spline hero scene, lazily mounted (optional) |
| Logos | Simple Icons via `astro-icon`, inlined at build time |
| Fonts | Inter Tight (self-hosted via Fontsource) |
| Host | Cloudflare Pages |

## Develop

```bash
nvm use          # Node 22.12+
npm install
npm run dev      # http://localhost:4321
```

```bash
npm run build    # type-check + build to dist/
npm run preview  # serve dist/ locally
```

## Deploy (Cloudflare Pages)

Connect the repo and use:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** `22.14.0` (from `.nvmrc`)

The hero scene URL lives in `src/data/site.ts` (`heroScene`); `PUBLIC_SPLINE_SCENE` overrides it.

## The Spline scene

The scene is deliberately gated so it never owns LCP:

```astro
<SplineScene client:visible client:media="(min-width: 768px)" ... />
```

- `client:visible` — the runtime isn't fetched until the scene scrolls into view
- `client:media` — it is never fetched on phones at all
- `poster` — a static frame covers the gap, and stays if the scene fails

To add a scene: export it from Spline (Export → Code → React), copy the
`.splinecode` URL into `.env` as `PUBLIC_SPLINE_SCENE`, and drop a poster
image at `public/spline-poster.webp`.

## Content

Each project is one `.mdx` file in `content/projects/`. Frontmatter is
type-checked against the schema in `src/content.config.ts`:

```yaml
---
title: "Project name"
summary: "One or two sentences."
cover: "/projects/name.jpg"   # optional, lives in public/
year: "2024"
role: "Solidity Engineer"
stack: ["Solidity", "Hardhat"]
repo: "https://github.com/..."  # optional
demo: "https://..."             # optional
featured: true
order: 1
draft: false
---
```

Adding a file adds a card on the homepage and a page at `/work/<filename>/`.
Set `draft: true` to hide one.

## Editing profile content

Name, role, socials, stats, stack groups, work history and education all live
in [`src/data/site.ts`](src/data/site.ts). Source of truth is the CV.

## Tech logos

Logos come from Simple Icons, inlined at build time by `astro-icon` — no
network requests, no client JS. Every tech is registered in
[`src/data/tech.ts`](src/data/tech.ts) with an optional verified slug.

**Verify any new slug by eye before adding it.** Several are traps:

| Slug | What it actually is |
|---|---|
| `anchor` | Anchor.fm, a podcast app — *not* Solana's Anchor |
| `ethers` | an unrelated cloud company — *not* ethers.js |
| `graphql` | the GraphQL spec — *not* The Graph protocol |

Hardhat, Foundry, viem, The Graph, Arbitrum, Base, Avalanche, Tron, Concordium,
Filecoin and Circom have no Simple Icons entry. They render as mono text chips,
which is deliberate — a wrong brand mark is worse than no mark.
