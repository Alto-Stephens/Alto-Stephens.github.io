const navigationLinks = [
  { label: "HOME", href: "./index.html", page: "home" },
  { label: "GAMES", href: "./games.html", page: "games" },
  { label: "ARCADE GALLERY", href: "./gallery.html", page: "gallery" },
  { label: "HISTORY", href: "./history.html", page: "history" },
  {
    label: "SOUNDTRACKS",
    href: "./soundtracks.html",
    page: "soundtracks",
  },
  { label: "CONTACT", href: "./index.html#contact", page: "contact" },
];

export function SiteLayout({ activePage, children }) {
  return (
    <div className="page-shell">
      <header className="main-header">
        <a
          className="brand-wrap"
          href="./index.html"
          aria-label="Midnight Arcade home"
        >
          <span className="brand-logo">MIDNIGHT ARCADE</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          {navigationLinks.map(({ label, href, page }) => (
            <a
              className={activePage === page ? "is-active" : undefined}
              href={href}
              key={page}
              aria-current={activePage === page ? "page" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="main-footer">
        <div className="footer-brand">MIDNIGHT ARCADE</div>
        <div className="footer-meta">ALTO STEPHENS 2026</div>
        <div className="footer-meta">A TRIBUTE TO THE GOLDEN AGE</div>
      </footer>
    </div>
  );
}

export function PageHeading({ eyebrow = "MIDNIGHT ARCADE", title, subtitle }) {
  return (
    <header className="page-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}
