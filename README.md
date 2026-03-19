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

## Seed Vault (Solana Mobile Stack)

This template **does not ship a separate Seed Vault SDK** in the web app. That is intentional: for PWAs, **Mobile Wallet Adapter** is the supported integration path. On Solana Mobile devices (e.g. Seeker), users connect an **MWA-compatible wallet**; wallets that implement **Seed Vault** use hardware-backed key custody for signing—see the official **[Seed Vault documentation](https://docs.solanamobile.com/solana-mobile-stack/seed-vault)**. The in-app **Home** and **About** tabs state this explicitly for grant reviewers.

## Features

| Area | Description |
|------|-------------|
| **Wallet** | `@solana-mobile/wallet-adapter-mobile` with `appIdentity`; Phantom for desktop development |
| **SMS / Seed Vault** | MWA → compatible wallets → Seed Vault on supported hardware ([docs](https://docs.solanamobile.com/solana-mobile-stack/seed-vault)) |
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

## Trusted Web Activity — APK and GitHub Releases (recommended)

Reviewers often expect a **downloadable signed APK** (or AAB), not only a hosted PWA.

1. Deploy this site to HTTPS (e.g. Vercel) so `manifest.webmanifest` is live.
2. Run Bubblewrap against that URL, configure signing, then build:

   ```bash
   npx @bubblewrap/cli init --manifest=https://solana-mobile-pwa-improved-template.vercel.app/manifest.webmanifest
   npx @bubblewrap/cli build
   ```

3. Upload the generated **APK** (or bundle) to **[GitHub Releases](https://github.com/panagot/Solana-Mobile-PWA-Improved-Template/releases)** with release notes pointing to this README and the live demo.

Keep **`/.well-known/assetlinks.json`** valid on the **same origin** you use in `twa-manifest.json`.

## Screenshots and device proof

Add **3–5 real Android screenshots** (or a short video) to strengthen the submission: splash, bottom nav, wallet connect + sign, optional installed icon/TWA. See `screenshots/CAPTURE_CHECKLIST.txt`. Embed images in this README once added (e.g. `![Home](screenshots/02-home.png)`).

## Quality checks (Lighthouse)

Run Chrome **Lighthouse** (or PageSpeed Insights) against the live demo URL. Target strong **PWA** and **Performance** scores; save a screenshot of the report for optional inclusion in grant materials.

```text
# Chrome DevTools → Lighthouse → Mode: Navigation → Analyze
```

## Privacy policy (dApp Store checklist)

A minimal policy for this reference deployment is hosted at **`/privacy-policy.html`** (source: `public/privacy-policy.html`). List that URL in the Publisher Portal when required, or replace with your own legal review before production.

## Grant application — elevator pitch (template)

*The Solana Mobile ecosystem lacks a ready-to-ship, highly optimized PWA template that delivers native-like Android UX and clear integration with the Solana Mobile Stack, forcing developers to reinvent Bubblewrap packaging, splash handling, and mobile navigation—slowing dApp Store–quality submissions. This project is a complete Vite + React + TypeScript PWA with `vite-plugin-pwa`, thumb-zone navigation, safe-area insets, manifest-aligned splash, Chrome-oriented TWA with Custom Tabs fallback (`customtabs`), and full `@solana-mobile/wallet-adapter-mobile` integration with explicit `appIdentity` for devnet balance and message signing. It ships Bubblewrap and Digital Asset Links templates, MIT license, CI, live HTTPS demo, and README mapping to RFP and Builder Grants criteria. As open-source infrastructure, it lowers the barrier for mobile-first Solana web apps, improves listing quality on the Solana dApp Store, and reinforces use of Mobile Wallet Adapter and Seed Vault–backed wallets on supported hardware.*

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

See `LICENSE`. Production dApp Store listings may require additional legal URLs; use [`/privacy-policy.html`](https://solana-mobile-pwa-improved-template.vercel.app/privacy-policy.html) as a starting point for this reference app only.
