import Image from "next/image";

const researchInterests = [
  {
    title: "Retrieval-Augmented Generation Security",
    description:
      "Security and reliability questions in retrieval-augmented systems.",
  },
  {
    title: "AI and Data Security",
    description:
      "Threats, safeguards, and trustworthy use of data in modern AI systems.",
  },
  {
    title: "Reproducible Evaluation",
    description:
      "Careful experimental protocols and results that can be independently checked.",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="site-name" href="#top">
            Max Wang
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#news">News</a>
            <a href="#publications">Publications</a>
          </nav>
          <a
            className="github-link"
            href="https://github.com/MaxZixuanWang"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main className="page-shell" id="top">
        <section className="profile-section" id="about">
          <aside className="profile-sidebar">
            <div className="profile-image-frame">
              <Image
                className="profile-image"
                src="/profile.jpg"
                alt="Max Wang"
                width={800}
                height={800}
                priority
                unoptimized
              />
            </div>
            <div className="profile-identity">
              <h2>Max Wang</h2>
              <p>@MaxZixuanWang</p>
            </div>
            <dl className="profile-meta">
              <div>
                <dt>Focus</dt>
                <dd>AI &amp; Data Security</dd>
              </div>
              <div>
                <dt>ORCID</dt>
                <dd>
                  <a
                    href="https://orcid.org/0009-0003-5070-775X"
                    target="_blank"
                    rel="noreferrer"
                  >
                    0009-0003-5070-775X
                  </a>
                </dd>
              </div>
            </dl>
          </aside>

          <article className="profile-main">
            <p className="section-label">About</p>
            <h1>Max Wang</h1>
            <p className="lead">
              I am interested in artificial intelligence and data security,
              with a current focus on the security of retrieval-augmented
              systems.
            </p>
            <p className="about-note">
              Education and affiliation information will be added here later.
            </p>
            <div className="text-links" aria-label="Profile links">
              <a
                href="https://github.com/MaxZixuanWang"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://orcid.org/0009-0003-5070-775X"
                target="_blank"
                rel="noreferrer"
              >
                ORCID ↗
              </a>
            </div>
          </article>
        </section>

        <section className="content-section" id="research">
          <header className="section-heading">
            <p className="section-label">Research</p>
            <h2>Research Interests</h2>
          </header>
          <div className="research-list">
            {researchInterests.map((interest, index) => (
              <article className="research-item" key={interest.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="news">
          <header className="section-heading">
            <p className="section-label">News</p>
            <h2>Updates</h2>
          </header>
          <div className="empty-line">
            <time>2026</time>
            <p>No updates yet.</p>
          </div>
        </section>

        <section className="content-section" id="publications">
          <header className="section-heading">
            <p className="section-label">Publications</p>
            <h2>Selected Publications</h2>
          </header>
          <div className="empty-line">
            <span>—</span>
            <p>No publications listed yet.</p>
          </div>
        </section>

        <section className="compact-sections" aria-label="Additional academic information">
          <div>
            <p className="section-label">Honors &amp; Awards</p>
            <p className="compact-empty">—</p>
          </div>
          <div>
            <p className="section-label">Academic Service</p>
            <p className="compact-empty">—</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>© 2026 Max Wang</p>
          <p>Last updated August 2026</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
