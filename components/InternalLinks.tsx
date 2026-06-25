interface LinkGroup {
  heading: string;
  links: { label: string; href: string; desc?: string }[];
}

interface InternalLinksProps {
  groups: LinkGroup[];
  title?: string;
}

export default function InternalLinks({ groups, title = "Explore More" }: InternalLinksProps) {
  return (
    <aside
      aria-label="Related pages"
      style={{
        background: "var(--dark)",
        borderTop: "1px solid rgba(184,151,106,0.12)",
        padding: "5rem 3rem",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.68rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          {title}
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${Math.min(groups.length, 3)}, 1fr)`,
            gap: "3rem",
          }}
          className="internal-links-grid"
        >
          {groups.map((group) => (
            <div key={group.heading}>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "white",
                  marginBottom: "1.25rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid rgba(184,151,106,0.2)",
                  letterSpacing: "0.05em",
                }}
              >
                {group.heading}
              </h3>
              <ul style={{ listStyle: "none" }}>
                {group.links.map((link) => (
                  <li key={link.href} style={{ marginBottom: "0.75rem" }}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--muted)",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        lineHeight: 1.5,
                        transition: "color 0.2s",
                      }}
                      className="internal-link"
                    >
                      <span style={{ color: "var(--gold)", fontSize: "0.6rem", marginTop: "0.35rem", flexShrink: 0 }}>▶</span>
                      <span>
                        {link.label}
                        {link.desc && (
                          <span style={{ display: "block", fontSize: "0.72rem", color: "var(--muted2)", marginTop: "0.15rem" }}>
                            {link.desc}
                          </span>
                        )}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .internal-link:hover { color: var(--gold) !important; }
        @media (max-width: 768px) {
          .internal-links-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </aside>
  );
}
