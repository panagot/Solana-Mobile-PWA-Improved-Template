export type NavKey = 'home' | 'wallet' | 'publish' | 'about'

const items: { key: NavKey; label: string; d: string }[] = [
  {
    key: 'home',
    label: 'Home',
    d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z',
  },
  {
    key: 'wallet',
    label: 'Wallet',
    d: 'M4 8h16v10H4V8zm2 2v6h12v-6H6zm2 2h8v2H8v-2z',
  },
  {
    key: 'publish',
    label: 'Publish',
    d: 'M12 4l-6 6h4v6h4v-6h4l-6-6zm-8 14v2h16v-2H4z',
  },
  {
    key: 'about',
    label: 'About',
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
  },
]

export function BottomNav({
  active,
  onChange,
}: {
  active: NavKey
  onChange: (k: NavKey) => void
}) {
  return (
    <nav className="bottom-nav" aria-label="Primary navigation">
      {items.map(({ key, label, d }) => {
        const isActive = active === key
        return (
          <button
            key={key}
            type="button"
            className={`bottom-nav__btn${isActive ? ' bottom-nav__btn--active' : ''}`}
            onClick={() => onChange(key)}
            aria-current={isActive ? 'page' : undefined}
            aria-label={label}
          >
            <span className="bottom-nav__icon-wrap">
              <svg className="bottom-nav__icon" viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d={d} />
              </svg>
              <span className="bottom-nav__dot" aria-hidden />
            </span>
            <span>{label}</span>
          </button>
        )
      })}
    </nav>
  )
}
