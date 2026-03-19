import { useState } from 'react'

const STORAGE_KEY = 'sm-pwa-chrome-banner-dismissed'

function isAndroid() {
  if (typeof navigator === 'undefined') return false
  return /android/i.test(navigator.userAgent)
}

function isChromeOrTWA() {
  if (typeof navigator === 'undefined') return true
  const ua = navigator.userAgent
  return /Chrome\/\d+/i.test(ua) && !/Edg|OPR|SamsungBrowser/i.test(ua)
}

function isStandalone() {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone === true
  )
}

function initialBannerVisible() {
  if (typeof sessionStorage === 'undefined') return false
  if (sessionStorage.getItem(STORAGE_KEY) === '1') return false
  return isAndroid() && !isChromeOrTWA() && !isStandalone()
}

export function ChromePreferredBanner() {
  const [visible, setVisible] = useState(initialBannerVisible)

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="chrome-banner" role="region" aria-label="Browser recommendation">
      <p className="chrome-banner__text">
        Mobile Wallet Adapter is supported on Android in Google Chrome. For reliable authorization
        and signing, open this origin in <strong>Chrome</strong> or use the application package
        distributed through the Solana dApp Store. Other browsers may exhibit reduced or
        incompatible behavior.
      </p>
      <button
        type="button"
        className="chrome-banner__dismiss"
        onClick={dismiss}
        aria-label="Dismiss"
      >
        Dismiss
      </button>
    </div>
  )
}
