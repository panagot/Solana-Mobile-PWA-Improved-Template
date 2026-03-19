import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { clusterApiUrl } from '@solana/web3.js'

const cluster =
  (import.meta.env.VITE_SOLANA_CLUSTER as WalletAdapterNetwork | undefined) ??
  WalletAdapterNetwork.Devnet

export const SOLANA_NETWORK = cluster

export const RPC_ENDPOINT =
  import.meta.env.VITE_RPC_URL?.trim() || clusterApiUrl(cluster)

/** Public GitHub URL for source code (set in `.env` for reviewer-facing builds). */
export const GITHUB_REPO_URL = (import.meta.env.VITE_GITHUB_REPO_URL ?? '').trim()

/** Public HTTPS URL of the deployed demo (e.g. Vercel); shown on About when set. */
export const DEMO_URL = (import.meta.env.VITE_DEMO_URL ?? '').trim()
