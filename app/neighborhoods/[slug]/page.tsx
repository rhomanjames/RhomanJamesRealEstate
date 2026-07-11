import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { neighborhoods, getNeighborhood } from "../neighborhoodData";
import Breadcrumb from "@/components/Breadcrumb";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const n = getNeighborhood(params.slug);
  if (!n) return {};
  return {
    title: `${n.name}, KY Neighborhood Guide | Rhoman James Real Estate`,
    description: n.metaDescription,
    metadataBase: new URL("https://rhomanjames.com"),
    alternates: { canonical: `/neighborhoods/${n.slug}` },
    openGraph: {
      title: `Living in ${n.name}, KY | Rhoman James Real Estate`,
      description: n.metaDescription,
      url: `https://rhomanjames.com/neighborhoods/${n.slug}`,
      siteName: "Rhoman James Real Estate",
      type: "article",
    },
  };
}

export default function NeighborhoodPage({
  params,
}: {
  params: { slug: string };
}) {
  const n = getNeighborhood(params.slug);
  if (!n) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Living in ${n.name}, ${n.state} — A Real Estate Guide`,
    description: n.metaDescription,
    author: {
      "@type": "Person",
      name: "Rhoman James",
      jobTitle: "Real Estate Agent",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Elizabethtown",
        addressRegion: "KY",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Rhoman James Real Estate",
      url: "https://rhomanjames.com",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: n.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <Breadcrumb items={[{ label: "Neighborhoods", href: "/neighborhoods" }, { label: n.name }]} />
      <main style={{ paddingTop: 0 }}>
        {/* Hero */}
        <section
          style={{
            paddingTop: "3rem",
            paddingBottom: "6rem",
            paddingLeft: "3rem",
            paddingRight: "3rem",
            background: "var(--bg-soft)",
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
          <div style={{ maxWidth: 900, position: "relative" }}>
            <a
              href="/neighborhoods"
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--muted)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                marginBottom: "2rem",
              }}
            >
              ← All Neighborhoods
            </a>
            <p
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--blue)",
                marginBottom: "1rem",
              }}
            >
              {n.county} · {n.state}
            </p>
            <h1
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.05,
                marginBottom: "0.5rem",
              }}
            >
              {n.name}
            </h1>
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "1.4rem",
                fontStyle: "italic",
                color: "var(--blue)",
                marginBottom: "2rem",
              }}
            >
              {n.tagline}
            </p>
            <div
              aria-hidden="true"
              style={{
                width: "3rem",
                height: "1px",
                background: "var(--blue)",
                marginBottom: "2rem",
              }}
            />
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--muted)",
                lineHeight: 1.9,
                maxWidth: "54rem",
              }}
            >
              {n.heroSubtitle}
            </p>
          </div>
        </section>

        {/* Stats strip */}
        <div
          style={{
            background: "var(--bg-soft)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            padding: "2.5rem 3rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {n.stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  color: "var(--text)",
                  lineHeight: 1.3,
                  marginBottom: "0.25rem",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <section style={{ background: "var(--bg-card)", padding: "6rem 3rem" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <span
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--blue)",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Overview
            </span>
            <h2
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: "2rem",
                lineHeight: 1.2,
              }}
            >
              What it&apos;s really like to live in {n.name}
            </h2>
            <div
              aria-hidden="true"
              style={{
                width: "3rem",
                height: "1px",
                background: "var(--blue)",
                marginBottom: "2.5rem",
              }}
            />
            {n.overview.map((para, i) => (
              <p
                key={i}
                style={{
                  color: "var(--muted)",
                  fontSize: "0.95rem",
                  lineHeight: 1.95,
                  marginBottom: "1.5rem",
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Pros grid */}
        <section style={{ background: "var(--bg-soft)", padding: "6rem 3rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <span
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--blue)",
                display: "block",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              Why buyers choose {n.name}
            </span>
            <h2
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: "3.5rem",
                lineHeight: 1.2,
                textAlign: "center",
              }}
            >
              What {n.name} does well
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {n.pros.map((p) => (
                <article
                  key={p.title}
                  className="service-card"
                  style={{ padding: "2rem" }}
                >
                  <h3
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: "1.2rem",
                      color: "var(--text)",
                      marginBottom: "0.75rem",
                      fontWeight: 400,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--muted)",
                      lineHeight: 1.8,
                    }}
                  >
                    {p.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for + Real Talk */}
        <section style={{ background: "var(--bg-card)", padding: "6rem 3rem" }}>
          <div
            style={{
              maxWidth: 1000,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "start",
            }}
            className="two-col-grid"
          >
            <div>
              <span
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "var(--blue)",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                The right fit
              </span>
              <h2
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.2,
                }}
              >
                Who {n.name} is best for
              </h2>
              <div
                aria-hidden="true"
                style={{
                  width: "3rem",
                  height: "1px",
                  background: "var(--blue)",
                  marginBottom: "1.5rem",
                }}
              />
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.92rem",
                  lineHeight: 1.95,
                }}
              >
                {n.whoItsFor}
              </p>
            </div>
            <div>
              <span
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "var(--blue)",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                Honest perspective
              </span>
              <h2
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.2,
                }}
              >
                The real talk on {n.name}
              </h2>
              <div
                aria-hidden="true"
                style={{
                  width: "3rem",
                  height: "1px",
                  background: "var(--blue)",
                  marginBottom: "1.5rem",
                }}
              />
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.92rem",
                  lineHeight: 1.95,
                }}
              >
                {n.realTalk}
              </p>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .two-col-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
            }
          `}</style>
        </section>

        {/* FAQs */}
        <section style={{ background: "var(--bg-soft)", padding: "6rem 3rem" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <span
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--blue)",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Common questions
            </span>
            <h2
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: "2.5rem",
                lineHeight: 1.2,
              }}
            >
              {n.name} real estate FAQ
            </h2>
            <div>
              {n.faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: "1px solid var(--border)",
                    padding: "2rem 0",
                    ...(i === n.faqs.length - 1
                      ? { borderBottom: "1px solid var(--border)" }
                      : {}),
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: "1.2rem",
                      fontWeight: 400,
                      color: "var(--text)",
                      marginBottom: "0.75rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {faq.question}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--muted)",
                      lineHeight: 1.9,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Browse other neighborhoods */}
        <section style={{ background: "var(--bg-soft)", padding: "5rem 3rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--blue)",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              Explore more communities
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              {neighborhoods
                .filter((nb) => nb.slug !== n.slug)
                .map((nb) => (
                  <a
                    key={nb.slug}
                    href={`/neighborhoods/${nb.slug}`}
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--blue)",
                      border: "1px solid var(--border)", borderRadius: "16px",
                      padding: "0.65rem 1.5rem",
                      textDecoration: "none",
                      transition: "border-color 0.2s",
                    }}
                  >
                    {nb.name}
                  </a>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "var(--bg-card)",
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
              Ready to explore {n.name}?
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
              Let&apos;s find your home in {n.name}
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.95rem",
                lineHeight: 1.9,
                marginBottom: "2.5rem",
              }}
            >
              Call or email for a free, no-pressure conversation about what{" "}
              {n.name} has to offer your specific situation.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a href="tel:+18595366009" className="btn-primary">
                Call (859) 536-6009
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
