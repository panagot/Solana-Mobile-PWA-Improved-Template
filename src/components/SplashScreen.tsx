import { useEffect, useState } from 'react'

const STORAGE_KEY = 'sm-pwa-splash-seen'
const DURATION_MS = 2200
const FADE_OUT_MS = 500

export function SplashScreen() {
  const [visible, setVisible] = useState(() => {
    if (typeof sessionStorage === 'undefined') return true
    return sessionStorage.getItem(STORAGE_KEY) !== '1'
  })
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter')

  useEffect(() => {
    if (!visible) return
    const t1 = window.setTimeout(() => setPhase('hold'), 400)
    const t2 = window.setTimeout(() => setPhase('exit'), DURATION_MS - FADE_OUT_MS)
    const t3 = window.setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, '1')
      setVisible(false)
    }, DURATION_MS)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.clearTimeout(t3)
    }
  }, [visible])

  if (!visible) return null

  return (
    <div
      className={`splash splash--${phase}`}
      role="status"
      aria-live="polite"
      aria-label="Loading app"
    >
      <div className="splash__bg" aria-hidden />
      <div className="splash__glow splash__glow--purple" aria-hidden />
      <div className="splash__glow splash__glow--green" aria-hidden />
      <div className="splash__card">
        <div className="splash__logo" aria-hidden>
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="splash__logo-svg"
          >
            <defs>
              <linearGradient
                id="splashGrad"
                x1="6"
                y1="4"
                x2="26"
                y2="28"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9945FF" />
                <stop offset="1" stopColor="#14F195" />
              </linearGradient>
            </defs>
            <path
              fill="url(#splashGrad)"
              d="M8 22 14 10h4l6 12h-3.2l-1.2-2.6H12.4L11.2 22H8Zm7.3-5.2 1.7-3.8 1.7 3.8h-3.4Z"
            />
          </svg>
        </div>
        <p className="splash__title">Solana Mobile</p>
        <p className="splash__subtitle">Reference application</p>
        <div className="splash__bar" aria-hidden>
          <div className="splash__bar-fill" />
        </div>
        <p className="splash__powered">Solana Mobile Stack</p>
      </div>
    </div>
  )
}
