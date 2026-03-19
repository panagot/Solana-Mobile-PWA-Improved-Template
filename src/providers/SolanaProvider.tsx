import { useMemo, type ReactNode } from 'react'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom'
import {
  SolanaMobileWalletAdapter,
  createDefaultAddressSelector,
  createDefaultAuthorizationResultCache,
  createDefaultWalletNotFoundHandler,
} from '@solana-mobile/wallet-adapter-mobile'
import { RPC_ENDPOINT, SOLANA_NETWORK } from '../config'

import '@solana/wallet-adapter-react-ui/styles.css'

function clusterToMwaChain(network: typeof SOLANA_NETWORK) {
  switch (network) {
    case 'mainnet-beta':
      return 'mainnet-beta' as const
    case 'testnet':
      return 'testnet' as const
    default:
      return 'devnet' as const
  }
}

export function SolanaProvider({ children }: { children: ReactNode }) {
  const wallets = useMemo(() => {
    const origin =
      typeof window !== 'undefined' ? window.location.origin : 'https://localhost'

    const mobile = new SolanaMobileWalletAdapter({
      addressSelector: createDefaultAddressSelector(),
      appIdentity: {
        name: 'Solana Mobile PWA Template',
        uri: origin,
        icon: `${origin}/icons/pwa-192.svg`,
      },
      authorizationResultCache: createDefaultAuthorizationResultCache(),
      chain: clusterToMwaChain(SOLANA_NETWORK),
      onWalletNotFound: createDefaultWalletNotFoundHandler(),
    })

    const phantom = new PhantomWalletAdapter()

    return [mobile, phantom]
  }, [])

  return (
    <ConnectionProvider endpoint={RPC_ENDPOINT}>
      <WalletProvider wallets={wallets} autoConnect={false}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
