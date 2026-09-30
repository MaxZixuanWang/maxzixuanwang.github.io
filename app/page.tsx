import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const contentDirectory = path.join(process.cwd(), "content");

function readContent(filename: string) {
  return fs.readFileSync(path.join(contentDirectory, filename), "utf8").trim();
}

const content = {
  about: readContent("about.md"),
  contact: readContent("contact.md"),
  activities: readContent("activities.md"),
  projects: readContent("projects.md"),
  experience: readContent("experience.md"),
  publications: readContent("publications.md"),
  honors: readContent("honors.md"),
};

function EditableContent({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  return (
    <div className={className}>
      <ReactMarkdown
        components={{
          a: ({ children: linkText, href }) => (
            <a href={href} target="_blank" rel="noreferrer">
              {linkText}
            </a>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="site-name" href="#top">
            Zixuan Wang (Max)
          </a>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#publications">Publications</a>
            <a href="#activities">Activities</a>
            <a href="#honors">Honors &amp; Awards</a>
            <a href="#experience">Experience</a>
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
                alt="Zixuan Wang (Max)"
                width={800}
                height={800}
                priority
                unoptimized
              />
            </div>
            <div className="profile-identity">
              <h2>Zixuan Wang (Max)</h2>
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
                    ORCID ↗
                  </a>
                </dd>
              </div>
              <div>
                <dt>OpenReview</dt>
                <dd>
                  <a
                    href="https://openreview.net/profile?id=%7EZixuan_Wang61"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Profile ↗
                  </a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <EditableContent className="profile-contact">
                    {content.contact}
                  </EditableContent>
                </dd>
              </div>
            </dl>
          </aside>

          <article className="profile-main">
            <p className="section-label">About</p>
            <h1>Zixuan Wang (Max)</h1>
            <EditableContent
              className="editable-content about-content"
            >
              {content.about}
            </EditableContent>
          </article>
        </section>

        <section className="content-section" id="projects">
          <header className="section-heading">
            <h2>Projects</h2>
          </header>
          <EditableContent
            className="editable-content entry-list publication-list numbered-list dated-list"
          >
            {content.projects}
          </EditableContent>
        </section>

        <section className="content-section" id="publications">
          <header className="section-heading">
            <h2>Publications</h2>
          </header>
          <EditableContent
            className="editable-content entry-list publication-list numbered-list dated-list"
          >
            {content.publications}
          </EditableContent>
        </section>

        <section className="content-section" id="activities">
          <header className="section-heading">
            <h2>Activities</h2>
          </header>
          <EditableContent
            className="editable-content activity-list numbered-list dated-list"
          >
            {content.activities}
          </EditableContent>
        </section>

        <section className="compact-sections" aria-label="Additional academic information">
          <div id="honors">
            <header className="section-heading">
              <h2>Honors &amp; Awards</h2>
            </header>
            <EditableContent
              className="editable-content compact-content numbered-list dated-list"
            >
              {content.honors}
            </EditableContent>
          </div>
          <div id="experience">
            <header className="section-heading">
              <h2>Experience</h2>
            </header>
            <EditableContent
              className="editable-content compact-content numbered-list dated-list"
            >
              {content.experience}
            </EditableContent>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>© 2026 Zixuan Wang (Max)</p>
          <p>Last updated August 2026</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
