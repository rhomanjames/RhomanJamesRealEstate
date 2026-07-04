import type { ReactNode } from "react";

interface ToolLayoutProps {
  num: string;
  title: string;
  description: string;
  backHref?: string;
  children: ReactNode;
}

export default function ToolLayout({ num, title, description, backHref = "/tools", children }: ToolLayoutProps) {
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: title,
    description: description,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    provider: { "@type": "RealEstateAgent", name: "Rhoman James", url: "https://rhomanjames.com" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <main>
        {/* Hero */}
        <section style={{ paddingTop: "8rem", paddingBottom: "3rem", paddingLeft: "3rem", paddingRight: "3rem", background: "var(--bg-soft)", position: "relative" }}>
          <div style={{ maxWidth: 900, position: "relative", margin: "0 auto" }}>
            <a href={backHref} style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--muted)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem", marginBottom: "1.75rem" }}>
              ← All Tools
            </a>
            <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "2.5rem", fontWeight: 800, color: "var(--blue-pale)", lineHeight: 1, marginBottom: "0.5rem" }} aria-hidden="true">{num}</div>
            <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.9rem, 5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text)", lineHeight: 1.15, marginBottom: "1rem" }}>{title}</h1>
            <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: "42rem" }}>{description}</p>
          </div>
        </section>

        {/* Calculator body */}
        <section style={{ background: "white", padding: "3rem 3rem 6rem" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            {children}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--bg-soft)", padding: "5rem 3rem", textAlign: "center", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 540, margin: "0 auto" }}>
            <span className="section-tag">Ready to take the next step?</span>
            <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text)", lineHeight: 1.2, marginBottom: "1.25rem", marginTop: "1rem" }}>
              Let&apos;s talk through your numbers
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              These tools give you estimates — I give you the real picture. Free consultation, no pressure.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+15022649376" className="btn-primary">Call (502) 264-9376</a>
              <a href="mailto:RhomanMJames@gmail.com" className="btn-outline">Send an Email</a>
            </div>
          </div>
        </section>

        <style>{`
          .tool-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            align-items: start;
          }
          .tool-inputs {
            background: var(--bg-soft);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 2rem;
          }
          .tool-results {
            background: var(--bg-soft);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 2rem;
          }
          @media (max-width: 768px) {
            .tool-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          }
        `}</style>
      </main>
    </>
  );
}
