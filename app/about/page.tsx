export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-radial" aria-hidden="true" />

      <div className="page-wrapper">
        {/* Navigation */}
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <div className="container nav-inner">
            <a href="/" className="nav-brand" aria-label="Verse home">
              <span className="nav-brand-icon" aria-hidden="true">
                ✦
              </span>
              Verse
            </a>
            <ul className="nav-links">
              <li>
                <a href="#features" className="nav-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#architecture" className="nav-link">
                  Architecture
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jbatte47/verse"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
            <a
              href="https://github.com/jbatte47/verse"
              className="nav-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              ★ Star on GitHub
            </a>
          </div>
        </nav>

        <main id="main">
          {/* Hero */}
          <section className="hero container" aria-labelledby="hero-heading">
            <div className="animate-in">
              <span className="hero-badge">
                <span className="hero-badge-dot" aria-hidden="true" />
                Open Source &middot; GPLv3
              </span>
            </div>

            <h1 id="hero-heading" className="animate-in animate-delay-1">
              Build worlds.
              <br />
              <span className="hero-gradient-text">Tell stories.</span>
            </h1>

            <p className="animate-in animate-delay-2">
              An open source content management platform for world builders and
              storytellers. Curate lore, showcase art, publish prose, and bring
              your universes to life.
            </p>

            <div className="hero-actions animate-in animate-delay-3">
              <a
                href="#features"
                className="btn-primary"
                id="hero-cta-explore"
              >
                Explore Features →
              </a>
              <a
                href="https://github.com/jbatte47/verse"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-github"
              >
                View Source ⌘
              </a>
            </div>
          </section>

          {/* Features */}
          <section
            id="features"
            className="features container"
            aria-labelledby="features-heading"
          >
            <div className="section-header animate-in">
              <span className="section-label">Core Capabilities</span>
              <h2 id="features-heading">
                Everything you need to bring a world to life
              </h2>
              <p>
                From structured lore to visual art, Verse gives world builders a
                complete creative toolkit.
              </p>
            </div>

            <div className="features-grid">
              <article
                className="feature-card animate-in animate-delay-1"
                id="feature-lore"
              >
                <div
                  className="feature-icon feature-icon-lore"
                  aria-hidden="true"
                >
                  📖
                </div>
                <h3>Lore Wiki</h3>
                <p>
                  Build interconnected knowledge bases for your worlds.
                  Characters, locations, factions, timelines — all linked
                  together in a structured, searchable wiki.
                </p>
              </article>

              <article
                className="feature-card animate-in animate-delay-2"
                id="feature-gallery"
              >
                <div
                  className="feature-icon feature-icon-gallery"
                  aria-hidden="true"
                >
                  🎨
                </div>
                <h3>Art Gallery</h3>
                <p>
                  Showcase concept art, maps, character portraits, and visual
                  assets. Organize collections with metadata and tags for easy
                  discovery.
                </p>
              </article>

              <article
                className="feature-card animate-in animate-delay-3"
                id="feature-reader"
              >
                <div
                  className="feature-icon feature-icon-reader"
                  aria-hidden="true"
                >
                  📜
                </div>
                <h3>Text Reader</h3>
                <p>
                  Publish prose with beautiful typography. Write in Markdown,
                  render with style. Perfect for short stories, in-world
                  documents, and narrative content.
                </p>
              </article>

              <article
                className="feature-card animate-in animate-delay-4"
                id="feature-auth"
              >
                <div
                  className="feature-icon feature-icon-auth"
                  aria-hidden="true"
                >
                  🔐
                </div>
                <h3>Secure &amp; Configurable</h3>
                <p>
                  Pluggable authentication with Cloudflare Access and extensible
                  security. Control who sees what, from public wikis to private
                  creative spaces.
                </p>
              </article>
            </div>
          </section>

          {/* Architecture Preview */}
          <section
            id="architecture"
            className="architecture container"
            aria-labelledby="architecture-heading"
          >
            <div className="section-header animate-in">
              <span className="section-label">Architecture</span>
              <h2 id="architecture-heading">
                Built for the edge, designed to grow
              </h2>
              <p>
                Powered by Cloudflare Workers. Content lives in durable storage —
                deployments never touch your data.
              </p>
            </div>

            <div className="arch-card animate-in animate-delay-1">
              <div className="arch-header">
                <span className="arch-dot arch-dot-red" aria-hidden="true" />
                <span className="arch-dot arch-dot-yellow" aria-hidden="true" />
                <span className="arch-dot arch-dot-green" aria-hidden="true" />
                <span className="arch-title">verse — architecture</span>
              </div>
              <div className="arch-body">
                <pre aria-label="Architecture diagram showing data flow from GitHub through Cloudflare Workers to storage backends">
{`  ┌─────────────────────────────────────────────────────┐
  │  `}
                  <span className="accent">GitHub</span>
                  {`  push to main                              │
  │    │                                                  │
  │    ▼                                                  │
  │  `}
                  <span className="cyan">Cloudflare Pages</span>
                  {`  auto build + deploy            │
  │    │                                                  │
  │    ▼                                                  │
  │  `}
                  <span className="accent">Cloudflare Workers</span>
                  {`  (edge runtime)             │
  │    │                                                  │
  │    ├──▶  `}
                  <span className="warm">KV</span>
                  {`        config, feature flags          │
  │    ├──▶  `}
                  <span className="warm">D1</span>
                  {`        lore entries, metadata          │
  │    └──▶  `}
                  <span className="warm">R2</span>
                  {`        images, media, prose files      │
  │                                                       │
  │  `}
                  <span className="green">Content persists across deployments ✓</span>
                  {`          │
  └─────────────────────────────────────────────────────┘`}
                </pre>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="cta container" aria-labelledby="cta-heading">
            <div className="cta-card animate-in">
              <h2 id="cta-heading">Ready to build your world?</h2>
              <p>
                Verse is open source and actively developed. Star the repo, open
                an issue, or fork it and make it your own.
              </p>
              <div className="hero-actions">
                <a
                  href="https://github.com/jbatte47/verse"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-github"
                >
                  Get Started →
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer" role="contentinfo">
          <div className="container footer-inner">
            <span className="footer-text">
              © {new Date().getFullYear()} Verse. Licensed under GPLv3.
            </span>
            <ul className="footer-links" aria-label="Footer links">
              <li>
                <a
                  href="https://github.com/jbatte47/verse"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jbatte47/verse/blob/main/LICENSE"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
