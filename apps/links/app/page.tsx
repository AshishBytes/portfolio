import { profiles, site } from "@repo/config";

const profileOrder = ["instagram", "youtube", "github", "x", "linkedin", "email"];
const orderedProfiles = profileOrder
  .map((id) => profiles.find((profile) => profile.id === id))
  .filter((profile) => profile !== undefined);

function ProfileIcon({ icon }: { icon: (typeof profiles)[number]["icon"] }) {
  const common = {
    "aria-hidden": true as const,
    fill: "none",
    height: 24,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
    viewBox: "0 0 24 24",
    width: 24,
  };

  switch (icon) {
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.7" cy="6.5" r=".8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <rect x="2.5" y="5" width="19" height="14" rx="4" />
          <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "github":
      return (
        <svg {...common}>
          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 4.9 4.9 0 0 0-.1-3.7S17.6 1 15 3.6a13.4 13.4 0 0 0-7 0C5.4 1 4.2 1.2 4.2 1.2a4.9 4.9 0 0 0-.1 3.7 5.3 5.3 0 0 0-1.4 3.7c0 5.3 3.2 6.5 6.2 6.8A3.4 3.4 0 0 0 8 18v4" transform="translate(1 0) scale(.92)" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="M4 4h4.5L20 20h-4.5L4 4Zm0 16 6.2-7.1M13.8 11.1 20 4" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7.5 10v7M7.5 7v.1M11.5 17v-7h3v1.2a2.5 2.5 0 0 1 5 0V17" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    default:
      return null;
  }
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18" fill="none">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function LinksPage() {
  return (
    <main className="page-shell">
      <div className="page-glow" aria-hidden="true" />
      <div className="links-card">
        <header className="masthead" aria-label="Ashish Singh links">
          <span className="masthead-mark" aria-hidden="true">ash.</span>
          <span className="masthead-rule" aria-hidden="true" />
          <span className="masthead-label">Find me around</span>
        </header>

        <section className="profile-section" aria-labelledby="profile-title">
          <div className="profile-intro">
            <div className="portrait-wrap">
              <span className="portrait-orbit" aria-hidden="true" />
              {/* The profile photo is shipped in this app's public directory. */}
              <img className="portrait" src={site.photo} alt={`Portrait of ${site.name}`} width="112" height="112" />
              <span className="portrait-status" aria-hidden="true" />
            </div>
            <div className="profile-copy">
              <p className="profile-kicker">SOCIAL <span>·</span> CONTACT</p>
              <h1 id="profile-title">{site.name}</h1>
              <p className="profile-tagline">{site.tagline}</p>
            </div>
          </div>

          <nav className="featured-links" aria-label="Featured links">
            <a className="featured-tile featured-tile--portfolio" href={site.origin} target="_blank" rel="noopener noreferrer">
              <span className="featured-icon" aria-hidden="true">↗</span>
              <span className="featured-copy">
                <span className="featured-eyebrow">Selected work</span>
                <span className="featured-title">Portfolio</span>
              </span>
              <span className="featured-arrow"><ArrowIcon /></span>
            </a>
            {site.blogLive && (
              <a className="featured-tile featured-tile--blog" href={`${site.origin}/blog`} target="_blank" rel="noopener noreferrer">
                <span className="featured-icon featured-icon--blog" aria-hidden="true">Aa</span>
                <span className="featured-copy">
                  <span className="featured-eyebrow">Notes &amp; ideas</span>
                  <span className="featured-title">Blog</span>
                </span>
                <span className="featured-arrow"><ArrowIcon /></span>
              </a>
            )}
          </nav>

          <nav className="social-links" aria-label="Social and contact links">
            {orderedProfiles.map((profile, index) => (
              <a
                className="social-tile"
                href={profile.url}
                key={profile.id}
                target="_blank"
                rel="noopener noreferrer"
                style={{ "--item-index": index } as React.CSSProperties}
              >
                <span className={`social-icon social-icon--${profile.id}`}>
                  <ProfileIcon icon={profile.icon} />
                </span>
                <span className="social-copy">
                  <span className="social-name">{profile.label}</span>
                  <span className="social-handle">{profile.handle}</span>
                </span>
                <span className="social-arrow"><ArrowIcon /></span>
              </a>
            ))}
          </nav>
        </section>

        <footer className="page-footer">
          <span>{site.name}</span>
          <span className="footer-dot" aria-hidden="true" />
          <span>Links</span>
        </footer>
      </div>
    </main>
  );
}
