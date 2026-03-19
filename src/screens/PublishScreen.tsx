import { REFERENCE_DOCUMENTATION } from '../referenceLinks'

const BUBBLEWRAP_URL =
  REFERENCE_DOCUMENTATION.find((l) => l.href.includes('GoogleChromeLabs/bubblewrap'))?.href ??
  'https://github.com/GoogleChromeLabs/bubblewrap'

const TWA_OVERVIEW_URL =
  REFERENCE_DOCUMENTATION.find((l) => l.href.includes('trusted-web-activity/overview'))?.href ??
  'https://developer.chrome.com/docs/android/trusted-web-activity/overview'

const PUBLISHER_PORTAL_URL =
  REFERENCE_DOCUMENTATION.find((l) => l.href.includes('publish.solanamobile.com'))?.href ??
  'https://publish.solanamobile.com/'

export function PublishScreen() {
  return (
    <div className="screen">
      <header className="screen__header">
        <p className="eyebrow">Distribution</p>
        <h1 className="screen__title">Packaging and publication</h1>
        <p className="screen__lead">
          This site is designed to be wrapped with Bubblewrap into an Android application and
          submitted through the Solana Mobile Publisher Portal. Follow the sequence below and consult
          the linked official documentation for authoritative requirements.
        </p>
      </header>

      <section className="card">
        <h2 className="card__title">Recommended procedure</h2>
        <ol className="steps">
          <li>
            Deploy the production build over <strong>HTTPS</strong> at the origin that will be
            associated with Digital Asset Links.
          </li>
          <li>
            Publish <code>/.well-known/assetlinks.json</code> per root <code>README.md</code> (copy from{' '}
            <code>public/.well-known/assetlinks.json.template</code>).
          </li>
          <li>
            Initialize Bubblewrap against the deployed web application manifest (see{' '}
            <a href={BUBBLEWRAP_URL} target="_blank" rel="noopener noreferrer">
              Bubblewrap
            </a>
            ).
          </li>
          <li>
            Merge project conventions from <code>bubblewrap/twa-manifest.example.json</code> into the
            generated <code>twa-manifest.json</code>, including splash colors and fallback behavior.
          </li>
          <li>
            Produce a signed APK or App Bundle and complete submission at the{' '}
            <a href={PUBLISHER_PORTAL_URL} target="_blank" rel="noopener noreferrer">
              Publisher Portal
            </a>
            .
          </li>
        </ol>
      </section>

      <section className="card card--highlight">
        <h2 className="card__title">Browser host and fallback (TWA)</h2>
        <p className="card__text">
          When packaged, the application runs as a Trusted Web Activity. The reference manifest
          specifies <code>fallbackType: &quot;customtabs&quot;</code> so that, when a full TWA
          session is not available, the user agent may present the origin inside Chrome Custom Tabs.
          If Google Chrome is not installed, the operating system may delegate to another browser
          that implements the Custom Tabs protocol. This behavior should be validated on physical
          hardware.
        </p>
        <a href={TWA_OVERVIEW_URL} target="_blank" rel="noopener noreferrer" className="card__link">
          Trusted Web Activity - technical overview
        </a>
      </section>
    </div>
  )
}
