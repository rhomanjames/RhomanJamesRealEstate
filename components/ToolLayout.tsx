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
        <section style={{ paddingTop: "3rem", paddingBottom: "3rem", paddingLeft: "3rem", paddingRight: "3rem", background: "var(--dark)", position: "relative" }}>
                    <div style={{ maxWidth: 900, position: "relative" }}>
            <a href={backHref} style={{ fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem", marginBottom: "1.75rem" }}>
              ← All Tools
            </a>
            <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "4rem", fontWeight: 300, color: "rgba(184,151,106,0.1)", lineHeight: 1, marginBottom: "0.25rem" }} aria-hidden="true">{num}</div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, color: "white", lineHeight: 1.1, marginBottom: "1rem" }}>{title}</h1>
            <div aria-hidden="true" style={{ width: "3rem", height: "1px", background: "var(--gold)", marginBottom: "1rem" }} />
            <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: "42rem" }}>{description}</p>
          </div>
        </section>

        {/* Calculator body */}
        <section style={{ background: "var(--dark2)", padding: "4rem 3rem 6rem" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            {children}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--dark)", padding: "5rem 3rem", textAlign: "center", borderTop: "1px solid rgba(184,151,106,0.12)" }}>
          <div style={{ maxWidth: 540, margin: "0 auto" }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Ready to take the next step?</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 300, color: "white", lineHeight: 1.2, marginBottom: "1.25rem" }}>
              Let&apos;s talk through your numbers
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "2rem" }}>
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
            gap: 3rem;
            align-items: start;
          }
          .tool-inputs {
            background: var(--dark3);
            border: 1px solid rgba(184,151,106,0.15);
            padding: 2rem;
          }
          .tool-results {
            background: var(--dark3);
            border: 1px solid rgba(184,151,106,0.15);
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
