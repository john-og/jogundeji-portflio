import { useEffect, useState } from 'react';
import { portfolio } from './data/portfolio';

function Header({ theme, onToggleTheme }: { theme: 'light' | 'dark'; onToggleTheme: () => void }) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <a aria-label={`${portfolio.person.name}, home`} className="wordmark" href="#top">
        {portfolio.person.name}
      </a>
      <nav aria-label="Main navigation" className="main-nav">
        <a href="#work">Experience</a>
        <a href="#selected-work">Selected work</a>
        <a href="#about">About</a>
      </nav>
      <div className="header-actions">
        <button aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} aria-pressed={theme === 'dark'} className="theme-toggle" onClick={onToggleTheme} type="button">
          <span aria-hidden="true">{theme === 'light' ? '☼' : '☾'}</span>
          <span className="theme-toggle-label">{theme === 'light' ? 'Light' : 'Dark'}</span>
        </button>
        <a className="header-contact" href={`mailto:${portfolio.person.email}`}>
          Contact
        </a>
      </div>
    </header>
  );
}

function Work() {
  return (
    <section aria-labelledby="work-title" className="section work-section" id="work">
      <div className="section-heading">
        <h2 id="work-title">Experience</h2>
      </div>

      <div className="experience-list">
        {portfolio.work.map((item) => (
          <article className="experience-entry" key={item.id}>
            <div className="experience-meta">
              <h3>{item.company}</h3>
              <p className="experience-role">{item.role}</p>
              <p className="experience-date">{item.dates}</p>
            </div>
            <div className="experience-main">
              <p className="experience-summary">{item.summary}</p>
              <ul aria-label={`${item.company} technologies`} className="tag-list">
                {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section aria-labelledby="selected-work-title" className="section selected-work-section" id="selected-work">
      <div className="section-heading">
        <h2 id="selected-work-title">Selected work</h2>
      </div>
      <div className="selected-work-list">
        {portfolio.selectedWork.map((project) => (
          <article className="selected-work-entry" key={project.id}>
            <div className="selected-work-copy">
              <p className="selected-work-kind">{project.kind}</p>
              <h3>{project.name}</h3>
              <p className="selected-work-description">{project.description}</p>
              <ul aria-label={`${project.name} technologies`} className="tag-list">
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
            <a className="text-link selected-work-link" href={project.href} rel="noreferrer" target="_blank">
              {project.linkLabel}<span aria-hidden="true" className="arrow">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section aria-labelledby="about-title" className="section about-section" id="about">
      <div className="section-heading">
        <h2 id="about-title">About</h2>
      </div>
      <div className="about-grid">
        <div className="education-list">
          {portfolio.education.map((item) => (
            <article className="education-entry" key={item.institution}>
              <h3>{item.institution}</h3>
              <p>{item.degree}</p>
              <span>{item.dates}</span>
            </article>
          ))}
        </div>
        <div className="skills-list" aria-label="Technical skills">
          {portfolio.skills.map((group) => (
            <div className="skill-row" key={group.label}>
              <h3>{group.label}</h3>
              <p>{group.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      return localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Theme still applies in memory when storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => setTheme((current) => current === 'light' ? 'dark' : 'light');

  return (
    <div className="page-shell" id="top">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <section aria-labelledby="hero-title" className="hero">
          <div className="hero-content">
            <div className="hero-copy">
              <h1 id="hero-title">{portfolio.introduction.headline}</h1>
              <p className="hero-summary">{portfolio.introduction.body}</p>
              <div className="hero-links">
                <a className="button-link" href="#work">See my experience</a>
                <a className="subtle-link" href={portfolio.person.resume}>Read my résumé</a>
              </div>
            </div>
          </div>
        </section>

        <Work />
        <SelectedWork />
        <About />
      </main>
      <footer className="site-footer">
        <div>
          <a className="footer-email" href={`mailto:${portfolio.person.email}`}>{portfolio.person.email}</a>
        </div>
        <div className="footer-links">
          {portfolio.person.links.map((link) => (
            <a href={link.href} key={link.label} rel="noreferrer" target="_blank">{link.label}</a>
          ))}
          <a href={portfolio.person.resume}>Résumé</a>
        </div>
        <p className="footer-credit">{portfolio.person.name} <span>Full-stack engineer</span></p>
      </footer>
    </div>
  );
}

export default App;
