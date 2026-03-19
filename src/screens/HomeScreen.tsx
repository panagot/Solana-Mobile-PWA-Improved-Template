import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { ReviewerLinks } from '../components/ReviewerLinks'
import { SOLANA_NETWORK } from '../config'

export function HomeScreen() {
  return (
    <div className="screen">
      <header className="screen__header screen__header--hero">
        <p className="eyebrow">Solana Mobile</p>
        <h1 className="screen__title">Reference progressive web application</h1>
        <p className="screen__lead">
          Demonstrates Mobile Wallet Adapter on supported Android browsers, desktop wallet
          connectivity for development workflows, and documentation for Trusted Web Activity
          packaging compatible with the Solana dApp Store.
        </p>
      </header>

      <ReviewerLinks />

      <section className="card">
        <h2 className="card__title">Seed Vault (Solana Mobile Stack)</h2>
        <p className="card__text">
          Signing on Android uses <strong>Mobile Wallet Adapter</strong>. On Solana Mobile hardware,
          compatible wallets may route authorization and signing through <strong>Seed Vault</strong>{' '}
          (hardware-backed custody)—see the official{' '}
          <a
            href="https://docs.solanamobile.com/solana-mobile-stack/seed-vault"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seed Vault documentation
          </a>
          . This PWA does not add a separate Seed Vault integration layer; MWA is the correct
          integration surface for web apps.
        </p>
      </section>

      <section className="card card--cta">
        <h2 className="card__title">Wallet connection</h2>
        <p className="card__text">
          Authorize a wallet to exercise signing and balance queries on the configured Solana
          cluster. On Android, use a Mobile Wallet Adapter–compatible wallet in Google Chrome or in
          an installed PWA context where supported. On desktop, connect via Phantom for local
          development.
        </p>
        <div className="wallet-row wallet-row--stretch">
          <WalletMultiButton />
        </div>
        <p className="muted small">
          Active cluster: <code>{SOLANA_NETWORK}</code>
        </p>
      </section>

      <section className="card">
        <h2 className="card__title">Scope demonstrated in this submission</h2>
        <ul className="checklist checklist--checks">
          <li>
            <span className="checklist__icon" aria-hidden>
              ✓
            </span>
            Mobile-optimized PWA with documented Bubblewrap packaging path
          </li>
          <li>
            <span className="checklist__icon" aria-hidden>
              ✓
            </span>
            Splash experience aligned across web manifest, TWA configuration, and in-application
            presentation
          </li>
          <li>
            <span className="checklist__icon" aria-hidden>
              ✓
            </span>
            Trusted Web Activity strategy: Chrome-oriented host with Custom Tabs fallback
          </li>
          <li>
            <span className="checklist__icon" aria-hidden>
              ✓
            </span>
            Navigation and layout patterns suited to handheld use (safe areas, touch targets)
          </li>
          <li>
            <span className="checklist__icon" aria-hidden>
              ✓
            </span>
            Submission scope and Builder Grants alignment summarized in repository{' '}
            <code>README.md</code>
          </li>
        </ul>
      </section>
    </div>
  )
}
