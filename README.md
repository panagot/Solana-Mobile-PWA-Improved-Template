# Solana Mobile — PWA Improved Template (reference application)

[![CI](https://github.com/panagot/Solana-Mobile-PWA-Improved-Template/actions/workflows/ci.yml/badge.svg)](https://github.com/panagot/Solana-Mobile-PWA-Improved-Template/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Public reference **progressive web application** for the Solana Mobile ecosystem: **Mobile Wallet Adapter** on Android, **PWA** delivery, **Trusted Web Activity / Bubblewrap** packaging notes, and **dApp Store** publication alignment.

## Reviewer quick links

| | |
|--|--|
| **Live demo (HTTPS)** | **[https://solana-mobile-pwa-improved-template.vercel.app](https://solana-mobile-pwa-improved-template.vercel.app)** |
| **Source code** | [github.com/panagot/Solana-Mobile-PWA-Improved-Template](https://github.com/panagot/Solana-Mobile-PWA-Improved-Template) |
| **Builder Grants** | [solanamobile.com/grants](https://solanamobile.com/grants) |

> **GitHub repository settings:** Set **Website** (About → ⚙️) to the live demo URL above so it appears next to the repository description on GitHub.

---

## Quick start

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Import this repository (framework: **Vite**, output **`dist`**).
2. Production environment variables (already defaulted in `.env.production` for reference; override in Vercel if needed):

   | Name | Value |
   |------|--------|
   | `VITE_GITHUB_REPO_URL` | `https://github.com/panagot/Solana-Mobile-PWA-Improved-Template` |
   | `VITE_DEMO_URL` | `https://solana-mobile-pwa-improved-template.vercel.app` |

3. Redeploy after changes. The **Home** and **About** tabs surface **Live demo** and **GitHub** when these are set at build time.

## Environment variables

| Variable | Purpose |
|----------|---------|
| `VITE_GITHUB_REPO_URL` | Public repo URL (in-app **Open repository on GitHub**) |
| `VITE_DEMO_URL` | HTTPS URL of the deployed demo (in-app **Open live demo**) |
| `VITE_SOLANA_CLUSTER` | `devnet` (default), `mainnet-beta`, or `testnet` |
| `VITE_RPC_URL` | Optional custom JSON-RPC endpoint |

Local overrides: copy `.env.example` to `.env`.

## Features

| Area | Description |
|------|-------------|
| **Wallet** | `@solana-mobile/wallet-adapter-mobile` with `appIdentity`; Phantom for desktop development |
| **SMS / Seed Vault** | MWA-compatible wallets on Solana Mobile hardware can use Seed Vault per [Solana docs](https://docs.solanamobile.com/solana-mobile-stack/seed-vault) |
| **PWA** | Manifest + Workbox service worker (`vite-plugin-pwa`) |
| **Splash** | Manifest colors + in-app splash aligned for TWA |
| **Chrome / TWA** | Bubblewrap `customtabs` fallback; Android non-Chrome notice when relevant |
| **Layout** | Bottom navigation, safe areas, 48px-class touch targets |

## RFP / submission evidence (concise)

**PWA Improved Template deliverables**

1. **Sample PWA + Bubblewrap path** — Vite/React PWA; `bubblewrap/twa-manifest.example.json`; [Publishing a web app](https://docs.solanamobile.com/recipes/general/publishing-a-web-app).
2. **Splash** — `theme_color` / `background_color` + in-app splash; icons under `public/icons/`.
3. **Chrome preference + fallback** — `fallbackType: "customtabs"` in example TWA manifest; **Publish** tab copy; [TWA overview](https://developer.chrome.com/docs/android/trusted-web-activity/overview).
4. **Mobile navigation** — Thumb-zone nav, `safe-area-inset-*`, transitions.

**Builder Grants criteria** ([program page](https://solanamobile.com/grants))

- **Mobile-first** — Android-oriented UX, PWA/TWA path, device testing recommended after packaging.
- **Solana Mobile Stack** — MWA in `src/providers/SolanaProvider.tsx`; signing UI in **Wallet**; Seed Vault via MWA wallets on hardware (not a separate SDK in this repo).
- **Milestones, team, budget** — Supply in the grant application form; this repository provides the technical artifact.
- **Open source** — MIT `LICENSE`; curated links in `src/referenceLinks.ts` (also **About** in the app).

## Digital Asset Links (TWA)

After Bubblewrap signing, serve **`/.well-known/assetlinks.json`** at your production HTTPS origin. Copy `public/.well-known/assetlinks.json.template` to `assetlinks.json`, replace the package name and SHA-256 fingerprint placeholders, and deploy with the site (keep the file under `public/.well-known/` so it is included in `dist`). See [TWA quick start](https://developer.chrome.com/docs/android/trusted-web-activity/quick-start).

## Bubblewrap

```bash
npx @bubblewrap/cli init --manifest=https://YOUR_DOMAIN/manifest.webmanifest
```

Align colors with this app (`#070b12`). Reference fields in `bubblewrap/twa-manifest.example.json`.

## Authoritative documentation

Also listed in-app under **About → Reference documentation**:

- [Solana Mobile Stack — overview](https://docs.solanamobile.com/solana-mobile-stack/overview)
- [Mobile Wallet Adapter (web)](https://docs.solanamobile.com/get-started/web/apps)
- [Solana dApp Store](https://docs.solanamobile.com/dapp-store/intro)
- [Publisher Portal](https://publish.solanamobile.com/)
- [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview `dist/` |
| `npm run lint` | ESLint |

## License

See `LICENSE`. Production dApp Store listings require your own privacy policy and compliance URLs where applicable.
