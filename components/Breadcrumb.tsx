interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const all = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://rhomanjames.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <style>{`.bc-link:hover { color: var(--gold) !important; }`}</style>
      <nav
        aria-label="Breadcrumb"
        style={{
          padding: "0 3rem",
          paddingTop: "7rem",
          background: "var(--dark)",
        }}
      >
        <ol
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            listStyle: "none",
            flexWrap: "wrap",
            maxWidth: 1100,
            margin: "0 auto",
            padding: "1rem 0",
            borderBottom: "1px solid rgba(184,151,106,0.1)",
          }}
        >
          {all.map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {i > 0 && (
                <span aria-hidden="true" style={{ fontSize: "0.55rem", color: "rgba(184,151,106,0.4)" }}>▶</span>
              )}
              {item.href && i < all.length - 1 ? (
                <a
                  href={item.href}
                  className="bc-link"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--muted2)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  aria-current={i === all.length - 1 ? "page" : undefined}
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: i === all.length - 1 ? "var(--gold)" : "var(--muted2)",
                  }}
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
