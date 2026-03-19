import { DEMO_URL, GITHUB_REPO_URL } from '../config'

export function ReviewerLinks() {
  if (!DEMO_URL && !GITHUB_REPO_URL) return null

  return (
    <section className="card card--reviewer" aria-label="Reviewer quick links">
      <h2 className="card__title">Reviewer access</h2>
      <p className="card__text">
        Direct links for grant and program review. The same URLs are documented in the repository{' '}
        <code>README.md</code>.
      </p>
      <div className="reviewer-links">
        {DEMO_URL ? (
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="reviewer-links__btn reviewer-links__btn--primary"
          >
            Live demo
          </a>
        ) : null}
        {GITHUB_REPO_URL ? (
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="reviewer-links__btn reviewer-links__btn--secondary"
          >
            Source on GitHub
          </a>
        ) : null}
      </div>
    </section>
  )
}
