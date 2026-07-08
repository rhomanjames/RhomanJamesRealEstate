import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "./serviceData";
import Breadcrumb from "@/components/Breadcrumb";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Real Estate Services | Elizabethtown KY | Rhoman James",
  description:
    "Real estate services in Elizabethtown, KY — buying, selling, first-time buyers, relocation, and investment properties. Expert local guidance from Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Real Estate Services | Elizabethtown KY | Rhoman James",
    description:
      "Expert real estate services for buyers, sellers, first-time buyers, investors, and relocating families across Hardin County, Kentucky.",
    url: "https://rhomanjames.com/services",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};


const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Real Estate Services — Rhoman James Elizabethtown KY",
  description: "Real estate services offered by Rhoman James in Elizabethtown, KY",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Buying a Home", url: "https://rhomanjames.com/services/buying-a-home" },
    { "@type": "ListItem", position: 2, name: "Selling Your Home", url: "https://rhomanjames.com/services/selling-your-home" },
    { "@type": "ListItem", position: 3, name: "Market Analysis", url: "https://rhomanjames.com/services/market-analysis" },
    { "@type": "ListItem", position: 4, name: "First-Time Buyers", url: "https://rhomanjames.com/services/first-time-buyers" },
    { "@type": "ListItem", position: 5, name: "Relocation", url: "https://rhomanjames.com/services/relocation" },
    { "@type": "ListItem", position: 6, name: "Investment Properties", url: "https://rhomanjames.com/services/investment-properties" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <Navbar />
      <Breadcrumb items={[{ label: "Services" }]} />
      <main style={{ paddingTop: 0 }}>
        {/* Hero */}
        <section
          style={{
            paddingTop: "3rem",
            paddingBottom: "6rem",
            paddingLeft: "3rem",
            paddingRight: "3rem",
            background: "var(--bg-soft)",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width: 1,
              height: "3rem",
              background: "var(--blue)",
              margin: "0 auto 2rem",
            }}
          />
          <p
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--blue)",
              marginBottom: "1rem",
            }}
          >
            What I Do
          </p>
          <h1
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              color: "var(--text)",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Services built around{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>your goals</em>
          </h1>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1rem",
              lineHeight: 1.8,
              maxWidth: "38rem",
              margin: "0 auto",
            }}
          >
            Whether you are buying your first home, selling a property, relocating
            to Hardin County, or building an investment portfolio — I have the
            expertise and local knowledge to guide you through it.
          </p>
        </section>

        {/* Service cards */}
        <section style={{ background: "white", padding: "6rem 3rem" }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {services.map((s) => (
              <a
                key={s.slug}
                href={`/services/${s.slug}`}
                style={{ textDecoration: "none" }}
              >
                <article
                  className="service-card"
                  style={{ padding: "2.5rem", height: "100%", cursor: "pointer" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: "3.5rem",
                      fontWeight: 700,
                      color: "var(--border)",
                      lineHeight: 1,
                      marginBottom: "1rem",
                    }}
                  >
                    {s.num}
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: "1.5rem",
                      color: "var(--text)",
                      marginBottom: "0.75rem",
                      fontWeight: 400,
                    }}
                  >
                    {s.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--muted)",
                      lineHeight: 1.8,
                      marginBottom: "1.75rem",
                    }}
                  >
                    {s.shortDesc}
                  </p>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--blue)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "var(--bg-soft)",
            padding: "7rem 3rem",
            textAlign: "center",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <p
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--blue)",
                marginBottom: "1.5rem",
              }}
            >
              Not sure where to start?
            </p>
            <h2
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              Let&apos;s figure out what you need
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.95rem",
                lineHeight: 1.9,
                marginBottom: "2.5rem",
              }}
            >
              A free, no-pressure conversation is the best first step — whatever
              your situation.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+18595366009" className="btn-primary">Call (859) 536-6009</a>
              <a href="mailto:RhomanMJames@gmail.com" className="btn-outline">Send an Email</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </>
  );
}
