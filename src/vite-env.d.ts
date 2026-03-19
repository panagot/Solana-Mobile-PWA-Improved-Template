/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

interface ImportMetaEnv {
  readonly VITE_SOLANA_CLUSTER?: string
  readonly VITE_RPC_URL?: string
  /** Public HTTPS URL of the GitHub repository hosting this source code (for reviewers). */
  readonly VITE_GITHUB_REPO_URL?: string
  /** Public HTTPS URL of the deployed demo (e.g. Vercel production URL). */
  readonly VITE_DEMO_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
