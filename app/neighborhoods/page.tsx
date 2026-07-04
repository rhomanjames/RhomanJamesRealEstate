import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { neighborhoods } from "./neighborhoodData";
import Breadcrumb from "@/components/Breadcrumb";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Elizabethtown KY Neighborhood Guides | Rhoman James Real Estate",
  description:
    "Explore every community in Hardin County and beyond — Elizabethtown, Radcliff, Vine Grove, Rineyville, Hodgenville, and Fort Knox. Local guides by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/neighborhoods" },
  openGraph: {
    title: "Neighborhood Guides | Elizabethtown KY Real Estate | Rhoman James",
    description:
      "Complete local guides for every community near Elizabethtown, KY — home prices, schools, lifestyle, and who each neighborhood is best for.",
    url: "https://rhomanjames.com/neighborhoods",
    siteName: "Rhoman James Real Estate",
    type: "website",
  },
};


const neighborhoodsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Elizabethtown KY Neighborhood Guides — Rhoman James",
  description: "Complete neighborhood guides for communities near Elizabethtown, KY",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Elizabethtown, KY", url: "https://rhomanjames.com/neighborhoods/elizabethtown" },
    { "@type": "ListItem", position: 2, name: "Radcliff, KY", url: "https://rhomanjames.com/neighborhoods/radcliff" },
    { "@type": "ListItem", position: 3, name: "Vine Grove, KY", url: "https://rhomanjames.com/neighborhoods/vine-grove" },
    { "@type": "ListItem", position: 4, name: "Rineyville, KY", url: "https://rhomanjames.com/neighborhoods/rineyville" },
    { "@type": "ListItem", position: 5, name: "Hodgenville, KY", url: "https://rhomanjames.com/neighborhoods/hodgenville" },
    { "@type": "ListItem", position: 6, name: "Fort Knox Area, KY", url: "https://rhomanjames.com/neighborhoods/fort-knox" },
  ],
};

export default function NeighborhoodsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(neighborhoodsSchema) }} />
      <Navbar />
      <Breadcrumb items={[{ label: "Neighborhoods" }]} />
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
              position: "absolute",
              inset: 0,
              background: "var(--bg-soft)",
              pointerEvents: "none",
            }}
          />
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
            Hardin County & Beyond
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
            Find your{" "}
            <em style={{ fontStyle: "italic", color: "var(--blue)" }}>
              perfect community
            </em>
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
            Honest, detailed guides to every community in the Elizabethtown
            area — so you choose the right neighborhood before you fall in love
            with the wrong house.
          </p>
        </section>

        {/* Grid */}
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
            {neighborhoods.map((n) => (
              <a
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                style={{ textDecoration: "none" }}
              >
                <article
                  className="service-card"
                  style={{ padding: "2.5rem", height: "100%", cursor: "pointer" }}
                >
                  <div
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: "var(--blue)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {n.county} · {n.state}
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: "1.8rem",
                      fontWeight: 400,
                      color: "var(--text)",
                      marginBottom: "0.35rem",
                      lineHeight: 1.1,
                    }}
                  >
                    {n.name}
                  </h2>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      letterSpacing: "0.1em",
                      color: "var(--blue)",
                      fontStyle: "italic",
                      marginBottom: "1.25rem",
                      fontFamily: "'Inter', system-ui, sans-serif",
                    }}
                  >
                    {n.tagline}
                  </p>
                  <div
                    aria-hidden="true"
                    style={{
                      width: "2rem",
                      height: "1px",
                      background: "var(--border)",
                      marginBottom: "1.25rem",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--muted)",
                      lineHeight: 1.8,
                      marginBottom: "1.75rem",
                    }}
                  >
                    {n.heroSubtitle}
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
                    Read the guide
                    <span aria-hidden="true" style={{ fontSize: "0.9rem" }}>→</span>
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
              Not sure which area fits?
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
              Let&apos;s find the right community for your life
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.95rem",
                lineHeight: 1.9,
                marginBottom: "2.5rem",
              }}
            >
              Tell me your priorities — commute, budget, schools, lifestyle —
              and I will tell you exactly where to focus your search.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a href="tel:+15022649376" className="btn-primary">
                Call (502) 264-9376
              </a>
              <a href="mailto:RhomanMJames@gmail.com" className="btn-outline">
                Send an Email
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </>
  );
}
