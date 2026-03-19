import { DEMO_URL, GITHUB_REPO_URL } from '../config'
import { REFERENCE_DOCUMENTATION } from '../referenceLinks'

export function AboutScreen() {
  return (
    <div className="screen">
      <header className="screen__header">
        <p className="eyebrow">Reviewers</p>
        <h1 className="screen__title">Submission information</h1>
        <p className="screen__lead">
          This application is a reference progressive web app demonstrating{' '}
          <strong>Mobile Wallet Adapter</strong> for Android (compatible with MWA wallets that use{' '}
          <strong>Seed Vault</strong> on Solana Mobile hardware per Solana documentation),{' '}
          <strong>Trusted Web Activity</strong> packaging via Bubblewrap, and mobile-first layout
          patterns. Documentation below supports both technical review and Builder Grants alignment.
        </p>
      </header>

      <section className="card card--highlight">
        <h2 className="card__title">Source code</h2>
        <p className="card__text">
          Complete source for this project is distributed under the terms of the{' '}
          <code>LICENSE</code> file in the repository. Reviewers may audit implementation details,
          dependencies, and build configuration at the URL below.
        </p>
        {GITHUB_REPO_URL ? (
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary btn--block about-github-btn"
          >
            Open repository on GitHub
          </a>
        ) : (
          <p className="muted small">
            Set <code>VITE_GITHUB_REPO_URL</code> at build time (see repository <code>README.md</code>).
          </p>
        )}
        {DEMO_URL ? (
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary btn--block about-github-btn"
          >
            Open live demo
          </a>
        ) : (
          <p className="muted small">
            Optional: set <code>VITE_DEMO_URL</code> to your deployed HTTPS URL (e.g. Vercel) to
            surface a live demo link here.
          </p>
        )}
      </section>

      <section className="card card--highlight">
        <h2 className="card__title">Seed Vault and Mobile Wallet Adapter</h2>
        <p className="card__text">
          For PWAs, <strong>Mobile Wallet Adapter</strong> is the official integration method. On
          Solana Mobile devices, users connect an <strong>MWA-compatible wallet</strong>, and
          compatible wallets may use <strong>Seed Vault</strong> for hardware-backed signing. No
          separate Seed Vault SDK is required in this web app.
        </p>
        <a
          href="https://docs.solanamobile.com/solana-mobile-stack/seed-vault"
          target="_blank"
          rel="noopener noreferrer"
          className="card__link"
        >
          Seed Vault - official documentation
        </a>
      </section>

      <section className="card">
        <h2 className="card__title">Builder Grants alignment</h2>
        <p className="card__text">
          This repository is structured to support{' '}
          <a href="https://solanamobile.com/grants" target="_blank" rel="noopener noreferrer">
            Solana Mobile Builder Grants
          </a>{' '}
          review: mobile-first Android UX, Mobile Wallet Adapter (and Seed Vault via compatible MWA
          wallets on Solana Mobile hardware), open-source delivery, and dApp Store packaging
          documentation. Milestones, team biography, and budget remain in the grant application form;
          evidence for technical criteria is in the source tree and summarized in the root{' '}
          <code>README.md</code>.
        </p>
      </section>

      <section className="card">
        <h2 className="card__title">Reference documentation</h2>
        <p className="card__text">
          The following resources are authoritative for architecture, compliance, and distribution.
          External links open in a new browser context.
        </p>
        <ul className="ref-doc-list">
          {REFERENCE_DOCUMENTATION.map((item) => (
            <li key={item.href} className="ref-doc-list__item">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ref-doc-list__link"
              >
                {item.label}
              </a>
              <span className="ref-doc-list__publisher">{item.publisher}</span>
              <p className="ref-doc-list__desc">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2 className="card__title">Legal and compliance</h2>
        <p className="card__text">
          Production listings on the Solana dApp Store require accurate privacy policy, license, and
          related disclosures. This reference deployment includes a minimal{' '}
          <a href="/privacy-policy.html">privacy policy</a> for reviewer transparency; forked products
          should replace it with counsel-reviewed text where required.
        </p>
      </section>
    </div>
  )
}

