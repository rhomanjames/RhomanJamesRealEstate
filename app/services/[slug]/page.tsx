import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services, getService } from "../serviceData";
import Breadcrumb from "@/components/Breadcrumb";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: `${s.title} in Elizabethtown, KY | Rhoman James`,
    description: s.metaDescription,
    metadataBase: new URL("https://rhomanjames.com"),
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: `${s.title} | Elizabethtown KY | Rhoman James`,
      description: s.metaDescription,
      url: `https://rhomanjames.com/services/${s.slug}`,
      siteName: "Rhoman James Real Estate",
      type: "article",
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.shortDesc,
    provider: {
      "@type": "RealEstateAgent",
      name: "Rhoman James",
      url: "https://rhomanjames.com",
      telephone: "(502) 264-9376",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Elizabethtown",
        addressRegion: "KY",
        addressCountry: "US",
      },
    },
    areaServed: { "@type": "City", name: "Elizabethtown", addressRegion: "KY" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: s.title }]} />
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
              href="/services"
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
              ← All Services
            </a>
            <div
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "5rem",
                fontWeight: 700,
                color: "var(--border)",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
              aria-hidden="true"
            >
              {s.num}
            </div>
            <h1
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.05,
                marginBottom: "0.75rem",
              }}
            >
              {s.title}
            </h1>
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "1.3rem",
                fontStyle: "italic",
                color: "var(--blue)",
                marginBottom: "2rem",
              }}
            >
              {s.tagline}
            </p>
            <div aria-hidden="true" style={{ width: "3rem", height: "1px", background: "var(--blue)", marginBottom: "2rem" }} />
            <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.9, maxWidth: "54rem" }}>
              {s.heroSubtitle}
            </p>
          </div>
        </section>

        {/* Intro */}
        <section style={{ background: "white", padding: "6rem 3rem" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <span style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", display: "block", marginBottom: "1rem" }}>
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
              What {s.title.toLowerCase()} looks like with Rhoman James
            </h2>
            <div aria-hidden="true" style={{ width: "3rem", height: "1px", background: "var(--blue)", marginBottom: "2.5rem" }} />
            {s.intro.map((para, i) => (
              <p key={i} style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.95, marginBottom: "1.5rem" }}>
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section style={{ background: "var(--bg-soft)", padding: "6rem 3rem" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <span style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", display: "block", marginBottom: "1rem" }}>
              The Process
            </span>
            <h2
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--text)",
                marginBottom: "3rem",
                lineHeight: 1.2,
              }}
            >
              Step by step — what to expect
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {s.steps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "3rem 1fr",
                    gap: "1.5rem",
                    paddingBottom: "2.5rem",
                    marginBottom: "0",
                    position: "relative",
                  }}
                >
                  {/* Timeline dot + line */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "var(--blue)",
                      flexShrink: 0,
                      marginTop: "0.4rem",
                    }} />
                    {i < s.steps.length - 1 && (
                      <div style={{ width: 1, flex: 1, background: "var(--border)", marginTop: "0.5rem" }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: "1rem" }}>
                    <h3
                      style={{
                        fontFamily: "'Inter', system-ui, sans-serif",
                        fontSize: "1.2rem",
                        color: "var(--text)",
                        fontWeight: 400,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.85 }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section style={{ background: "white", padding: "6rem 3rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <span style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", display: "block", marginBottom: "1rem", textAlign: "center" }}>
              Why it matters
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
              What you get working with Rhoman
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {s.benefits.map((b) => (
                <article key={b.title} className="service-card" style={{ padding: "2rem" }}>
                  <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.2rem", color: "var(--text)", marginBottom: "0.75rem", fontWeight: 400 }}>
                    {b.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.8 }}>
                    {b.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section style={{ background: "var(--bg-soft)", padding: "6rem 3rem" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <span style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", display: "block", marginBottom: "1rem" }}>
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
              {s.title} FAQ
            </h2>
            {s.faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderTop: "1px solid var(--border)",
                  padding: "2rem 0",
                  ...(i === s.faqs.length - 1 ? { borderBottom: "1px solid var(--border)" } : {}),
                }}
              >
                <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.2rem", fontWeight: 400, color: "var(--text)", marginBottom: "0.75rem", lineHeight: 1.3 }}>
                  {faq.question}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.9 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Browse other services */}
        <section style={{ background: "var(--bg-soft)", padding: "5rem 3rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1.5rem", textAlign: "center" }}>
              Explore other services
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              {services.filter((sv) => sv.slug !== s.slug).map((sv) => (
                <a
                  key={sv.slug}
                  href={`/services/${sv.slug}`}
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--blue)",
                    border: "1px solid var(--border)", borderRadius: "16px",
                    padding: "0.65rem 1.5rem",
                    textDecoration: "none",
                  }}
                >
                  {sv.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "white", padding: "7rem 3rem", textAlign: "center", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1.5rem" }}>
              {s.cta}
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
              Let&apos;s talk — no pressure, no obligation
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.9, marginBottom: "2.5rem" }}>
              Call, text, or email. I will give you a straight answer about what I can do for your specific situation.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+15022649376" className="btn-primary">Call (502) 264-9376</a>
              <a href="mailto:RhomanMJames@gmail.com" className="btn-outline">Send an Email</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
