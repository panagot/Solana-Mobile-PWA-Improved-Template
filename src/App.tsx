import { useState } from 'react'
import { BottomNav, type NavKey } from './components/BottomNav'
import { ChromePreferredBanner } from './components/ChromePreferredBanner'
import { SplashScreen } from './components/SplashScreen'
import { SolanaProvider } from './providers/SolanaProvider'
import { AboutScreen } from './screens/AboutScreen'
import { HomeScreen } from './screens/HomeScreen'
import { PublishScreen } from './screens/PublishScreen'
import { WalletScreen } from './screens/WalletScreen'

function Shell() {
  const [tab, setTab] = useState<NavKey>('home')

  return (
    <div className="app-shell">
      <SplashScreen />
      <main className="app-main">
        <ChromePreferredBanner />
        <div key={tab} className="app-main__page">
          {tab === 'home' && <HomeScreen />}
          {tab === 'wallet' && <WalletScreen />}
          {tab === 'publish' && <PublishScreen />}
          {tab === 'about' && <AboutScreen />}
        </div>
      </main>
      <BottomNav active={tab} onChange={setTab} />
    </div>
  )
}

export default function App() {
  return (
    <SolanaProvider>
      <Shell />
    </SolanaProvider>
  )
}
