/**
 * Curated official documentation for reviewers and implementers.
 * Prefer these URLs in submissions; avoid unofficial aggregators.
 */
export type ReferenceLink = {
  label: string
  href: string
  publisher: string
  description: string
}

export const REFERENCE_DOCUMENTATION: ReferenceLink[] = [
  {
    label: 'Solana Mobile Stack - overview',
    href: 'https://docs.solanamobile.com/solana-mobile-stack/overview',
    publisher: 'Solana Mobile',
    description: 'Hardware, software, and on-chain elements of the Solana Mobile platform.',
  },
  {
    label: 'Seed Vault',
    href: 'https://docs.solanamobile.com/solana-mobile-stack/seed-vault',
    publisher: 'Solana Mobile',
    description:
      'Hardware-level secure key custody on Seeker; Mobile Wallet Adapter sessions may authorize signing through Seed Vault backed wallets.',
  },
  {
    label: 'Mobile Wallet Adapter - web applications',
    href: 'https://docs.solanamobile.com/get-started/web/apps',
    publisher: 'Solana Mobile',
    description: 'Integration guidance for web applications and progressive web apps on Android.',
  },
  {
    label: 'Mobile Wallet Adapter - web (alternate entry)',
    href: 'https://docs.solanamobile.com/developers/mobile-wallet-adapter-web',
    publisher: 'Solana Mobile',
    description: 'Additional documentation entry point for MWA in browser contexts.',
  },
  {
    label: 'Mobile Wallet Adapter - UX guidelines (web)',
    href: 'https://docs.solanamobile.com/get-started/web/ux-guidelines',
    publisher: 'Solana Mobile',
    description: 'Recommended practices for Mobile Wallet Adapter user experience in web apps.',
  },
  {
    label: 'Mobile Wallet Adapter - overview',
    href: 'https://docs.solanamobile.com/solana-mobile-stack/mobile-wallet-adapter',
    publisher: 'Solana Mobile',
    description: 'Protocol and stack context for wallet connectivity on Solana Mobile.',
  },
  {
    label: 'Solana dApp Store - introduction',
    href: 'https://docs.solanamobile.com/dapp-store/intro',
    publisher: 'Solana Mobile',
    description: 'Distribution channel for applications on Solana Mobile devices.',
  },
  {
    label: 'Publishing to the Solana dApp Store',
    href: 'https://docs.solanamobile.com/dapp-publishing/overview',
    publisher: 'Solana Mobile',
    description: 'End-to-end publishing workflow and requirements.',
  },
  {
    label: 'Publishing a web app on the dApp Store',
    href: 'https://docs.solanamobile.com/recipes/general/publishing-a-web-app',
    publisher: 'Solana Mobile',
    description: 'Recipe for wrapping a PWA as an Android package for dApp Store distribution.',
  },
  {
    label: 'Solana Mobile Publisher Portal',
    href: 'https://publish.solanamobile.com/',
    publisher: 'Solana Mobile',
    description: 'Self-service submission and listing management.',
  },
  {
    label: 'Solana Mobile Builder Grants',
    href: 'https://solanamobile.com/grants',
    publisher: 'Solana Mobile',
    description: 'Program overview and application information.',
  },
  {
    label: 'Trusted Web Activity - overview',
    href: 'https://developer.chrome.com/docs/android/trusted-web-activity/overview',
    publisher: 'Google Chrome for Developers',
    description: 'How TWAs relate to the Android shell and Digital Asset Links.',
  },
  {
    label: 'Trusted Web Activity - quick start',
    href: 'https://developer.chrome.com/docs/android/trusted-web-activity/quick-start',
    publisher: 'Google Chrome for Developers',
    description: 'Setup steps including asset links verification.',
  },
  {
    label: 'Bubblewrap (command-line tool)',
    href: 'https://github.com/GoogleChromeLabs/bubblewrap',
    publisher: 'Google Chrome Labs',
    description: 'Repository and documentation for packaging PWAs as Android applications.',
  },
  {
    label: 'Mobile Wallet Adapter - reference implementation (JavaScript)',
    href: 'https://github.com/solana-mobile/mobile-wallet-adapter',
    publisher: 'Solana Mobile',
    description: 'Source for protocol clients and wallet adapter packages used in this project.',
  },
]
