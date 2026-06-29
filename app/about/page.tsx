import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Rhoman James | Elizabethtown KY Real Estate Professional",
  description: "Rhoman James is an Elizabethtown, Kentucky real estate professional serving buyers and sellers throughout Hardin County. Grew up in Kentucky, Centre College and EKU educated, family oriented, and committed to helping people find their place in Elizabethtown.",
  keywords: "Rhoman James Elizabethtown KY, Elizabethtown Kentucky real estate professional, Hardin County real estate, buy home Elizabethtown KY, sell home Elizabethtown KY, Fort Knox real estate, first time home buyer Elizabethtown, move to Elizabethtown Kentucky",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Rhoman James | Elizabethtown KY Real Estate",
    description: "Elizabethtown real estate professional helping buyers, sellers, and families throughout Hardin County, Kentucky.",
    url: "https://rhomanjames.com/about",
    siteName: "Rhoman James Real Estate",
    type: "profile",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://rhomanjames.com/#rhomanjames",
      name: "Rhoman James",
      url: "https://rhomanjames.com",
      telephone: "(502) 264-9376",
      email: "RhomanMJames@gmail.com",
      jobTitle: "Real Estate Professional",
      description: "Elizabethtown, Kentucky real estate professional serving buyers and sellers throughout Hardin County.",
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Centre College", address: { "@type": "PostalAddress", addressLocality: "Danville", addressRegion: "KY" } },
        { "@type": "CollegeOrUniversity", name: "Eastern Kentucky University", address: { "@type": "PostalAddress", addressLocality: "Richmond", addressRegion: "KY" } },
      ],
      knowsAbout: [
        "Elizabethtown Kentucky real estate",
        "Hardin County home buying",
        "Fort Knox military relocation",
        "VA home loans",
        "Kentucky Housing Corporation programs",
        "First-time home buyers Kentucky",
      ],
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Hardin County, Kentucky",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Elizabethtown",
        addressRegion: "KY",
        addressCountry: "US",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://rhomanjames.com/about",
      url: "https://rhomanjames.com/about",
      name: "About Rhoman James",
      description: "Elizabethtown, Kentucky real estate professional helping buyers and sellers throughout Hardin County.",
      about: { "@id": "https://rhomanjames.com/#rhomanjames" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://rhomanjames.com" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://rhomanjames.com/about" },
        ],
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main>

        {/* Hero */}
        <section style={{ paddingTop: "8rem", paddingBottom: "5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "var(--dark)", position: "relative" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(184,151,106,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "center" }}>

            {/* Photo */}
            <div style={{ position: "relative" }}>
              <div style={{ border: "1px solid rgba(184,151,106,0.25)", padding: "0.75rem", background: "var(--dark2)" }}>
                <img
                  src="/rhoman-headshot.jpg"
                  alt="Rhoman James — Elizabethtown KY Real Estate Professional"
                  style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "4/5" }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    (e.currentTarget.parentElement as HTMLElement).style.minHeight = "420px";
                    (e.currentTarget.parentElement as HTMLElement).style.display = "flex";
                    (e.currentTarget.parentElement as HTMLElement).style.alignItems = "center";
                    (e.currentTarget.parentElement as HTMLElement).style.justifyContent = "center";
                    const p = document.createElement("p");
                    p.style.cssText = "font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:rgba(184,151,106,0.4);text-align:center";
                    p.textContent = "Photo Coming Soon";
                    (e.currentTarget.parentElement as HTMLElement).appendChild(p);
                  }}
                />
              </div>
              {/* Corner accent */}
              <div aria-hidden="true" style={{ position: "absolute", bottom: "-12px", right: "-12px", width: 80, height: 80, border: "1px solid rgba(184,151,106,0.2)", pointerEvents: "none" }} />
            </div>

            {/* Text */}
            <div>
              <div aria-hidden="true" style={{ width: 1, height: "2.5rem", background: "linear-gradient(to bottom, transparent, var(--gold))", marginBottom: "1.5rem" }} />
              <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>
                Elizabethtown, Kentucky
              </p>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "white", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                Rhoman<br />James
              </h1>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "1.75rem" }}>
                Real Estate Professional · Hardin County, KY
              </p>
              <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
                I grew up in Lexington, Kentucky, studied psychology at Centre College, and went on to earn a master's degree in psychology from Eastern Kentucky University. That background shapes how I work — understanding what people need, what they're worried about, and how to communicate clearly in high-stakes situations.
              </p>
              <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.9, marginBottom: "2rem" }}>
                I chose Elizabethtown because it's the kind of place where people put down roots. It's a community — not just a market. My goal is straightforward: help families find their place here, whether they're relocating to the area, buying their first home, or have been here for years and are ready for something new.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="tel:+15022649376" className="btn-primary" style={{ fontSize: "0.75rem" }}>Call (502) 264-9376</a>
                <a href="mailto:RhomanMJames@gmail.com" className="btn-outline" style={{ fontSize: "0.75rem" }}>Send an Email</a>
              </div>
            </div>
          </div>
        </section>

        {/* Values strip */}
        <section style={{ background: "var(--dark3)", borderTop: "1px solid rgba(184,151,106,0.12)", borderBottom: "1px solid rgba(184,151,106,0.12)", padding: "2.5rem 1.5rem" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { label: "Based In", value: "Elizabethtown, KY" },
              { label: "Serving", value: "Hardin County" },
              { label: "Background", value: "Psychology" },
              { label: "Education", value: "Centre + EKU" },
              { label: "Focus", value: "People First" },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: "center", padding: "0 1.5rem" }}>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.4rem" }}>{item.label}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem", color: "white", fontWeight: 300 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section style={{ background: "var(--dark2)", padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Background</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 300, color: "white", marginBottom: "2.5rem", lineHeight: 1.3 }}>
              Kentucky educated. Community focused.
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.95 }}>
                I grew up in Lexington — so Kentucky is home in a real sense, not just a business decision. I came to Elizabethtown because of what this community is: a city with genuine character, a strong military presence through Fort Knox, good schools, and the kind of neighborhood feel that's getting harder to find.
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.95 }}>
                My undergraduate degree from Centre College and my master's from Eastern Kentucky University are both in psychology. That might seem like an unusual background for real estate, but it's actually the most relevant thing about how I work. Buying or selling a home is one of the most significant decisions a family makes. The paperwork is straightforward — the human side of it is not. Understanding what people need, how to listen well, and how to communicate clearly when the stakes are high is something I've spent years developing.
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.95 }}>
                I'm family oriented. That's not a tagline — it describes the people I work with and what I care about. Most of my clients are families making a move that matters: a first home, a growing family needing more space, a military family PCS-ing to Fort Knox, or someone relocating to the area and trying to figure out where to put down roots. Those are real decisions with real consequences, and I take that seriously.
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.95 }}>
                Elizabethtown is a genuinely good place to live — and I think the people who are considering moving here deserve honest, specific, local information rather than generic advice. That's why the free courses, neighborhood guides, and calculators on this site exist. Whether or not we ever work together, I want you to have what you need to make a good decision.
              </p>
            </div>
          </div>
        </section>

        {/* Who I serve */}
        <section style={{ background: "var(--dark)", padding: "6rem 1.5rem", borderTop: "1px solid rgba(184,151,106,0.1)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem", textAlign: "center" }}>Who I Work With</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 300, color: "white", marginBottom: "3rem", textAlign: "center" }}>
              Families finding their place in Hardin County
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
              {[
                {
                  title: "First-Time Buyers",
                  body: "Buying your first home in Elizabethtown or anywhere in Hardin County is a significant milestone. I work through the process step by step — from understanding your credit and financing options to closing day.",
                  href: "/first-time-bootcamp",
                  link: "Free First-Time Buyer Bootcamp",
                },
                {
                  title: "Families Relocating to Elizabethtown",
                  body: "Whether you're moving from across the state or across the country, Hardin County is worth knowing well before you commit to a neighborhood. I know this area specifically — the school zones, the commutes, the communities.",
                  href: "/moving-to-elizabethtown-ky",
                  link: "Moving to Elizabethtown Guide",
                },
                {
                  title: "Fort Knox Military Families",
                  body: "PCS-ing to Fort Knox comes with a compressed timeline and specific needs — VA loans, BAH strategy, gate proximity, and the question of what to do with the property when orders come again.",
                  href: "/fort-knox-course",
                  link: "Free Fort Knox PCS Bootcamp",
                },
                {
                  title: "Sellers Ready to Move On",
                  body: "Whether you're upgrading, downsizing, or relocating out of the area, selling a home in the Elizabethtown market requires the right preparation and pricing strategy from day one.",
                  href: "/sellers-course",
                  link: "Free Home Sellers Course",
                },
              ].map((item) => (
                <div key={item.title} style={{ padding: "2rem", background: "var(--dark2)", border: "1px solid rgba(184,151,106,0.12)" }}>
                  <div style={{ width: 20, height: 1, background: "var(--gold)", marginBottom: "1rem" }} />
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem", color: "white", marginBottom: "0.75rem", fontWeight: 400, lineHeight: 1.4 }}>{item.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: "1.25rem" }}>{item.body}</p>
                  <a href={item.href} style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>{item.link} →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Area coverage */}
        <section style={{ background: "var(--dark2)", padding: "6rem 1.5rem", borderTop: "1px solid rgba(184,151,106,0.1)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem", textAlign: "center" }}>Service Area</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 300, color: "white", marginBottom: "1rem", textAlign: "center" }}>
              Elizabethtown and Hardin County
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.85, maxWidth: "52rem", margin: "0 auto 3rem", textAlign: "center" }}>
              I work throughout Hardin County — including Elizabethtown, Radcliff, Vine Grove, Rineyville, Cecilia, and the communities surrounding Fort Knox. Each has its own character, price point, and school zone considerations worth knowing before you commit to a neighborhood.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "0.75rem" }}>
              {[
                { name: "Elizabethtown", href: "/neighborhoods/elizabethtown" },
                { name: "Radcliff", href: "/neighborhoods/radcliff" },
                { name: "Vine Grove", href: "/neighborhoods/vine-grove" },
                { name: "Rineyville", href: "/neighborhoods/rineyville" },
                { name: "Fort Knox Area", href: "/neighborhoods/fort-knox" },
                { name: "Hodgenville", href: "/neighborhoods/hodgenville" },
              ].map((area) => (
                <a key={area.name} href={area.href} style={{ padding: "1.1rem", background: "var(--dark3)", border: "1px solid rgba(184,151,106,0.12)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none", textAlign: "center", display: "block", transition: "color 0.2s, border-color 0.2s" }}>
                  {area.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section style={{ background: "var(--dark)", padding: "6rem 1.5rem", borderTop: "1px solid rgba(184,151,106,0.1)" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem", textAlign: "center" }}>Education</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 300, color: "white", marginBottom: "3rem", textAlign: "center" }}>
              Rooted in Kentucky
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {[
                {
                  degree: "Master of Science, Psychology",
                  school: "Eastern Kentucky University",
                  location: "Richmond, KY",
                  detail: "Graduate-level study in human behavior, communication, and decision-making — applied daily to understanding what clients need and how to get there.",
                },
                {
                  degree: "Bachelor of Science, Psychology",
                  school: "Centre College",
                  location: "Danville, KY",
                  detail: "A rigorous Kentucky liberal arts education that built the foundation for understanding people — how they think, what they value, and how they make decisions under pressure.",
                },
              ].map((ed) => (
                <div key={ed.school} style={{ padding: "2rem", background: "var(--dark2)", border: "1px solid rgba(184,151,106,0.15)" }}>
                  <p style={{ fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>{ed.degree}</p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.3rem", color: "white", marginBottom: "0.25rem", fontWeight: 400 }}>{ed.school}</h3>
                  <p style={{ fontSize: "0.72rem", color: "var(--muted2)", marginBottom: "1rem", letterSpacing: "0.1em" }}>{ed.location}</p>
                  <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.8, margin: 0 }}>{ed.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Resources */}
        <section style={{ background: "var(--dark3)", padding: "5rem 1.5rem", borderTop: "1px solid rgba(184,151,106,0.1)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Free Resources</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 300, color: "white", marginBottom: "1rem" }}>
              Everything you need, whether we work together or not
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "38rem", margin: "0 auto 2.5rem" }}>
              The courses, guides, calculators, and neighborhood information on this site are free and always will be. Good decisions come from good information.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              {[
                { href: "/course", label: "Home Buyers Course" },
                { href: "/sellers-course", label: "Home Sellers Course" },
                { href: "/fort-knox-course", label: "Fort Knox PCS Bootcamp" },
                { href: "/first-time-bootcamp", label: "First-Time Buyer Bootcamp" },
                { href: "/tools", label: "Free Calculators" },
                { href: "/moving-to-elizabethtown-ky", label: "Moving Guide" },
                { href: "/neighborhoods", label: "Neighborhood Guides" },
                { href: "/faq", label: "Home Buying FAQ" },
              ].map((r) => (
                <a key={r.href} href={r.href} style={{ padding: "1rem", background: "var(--dark2)", border: "1px solid rgba(184,151,106,0.12)", fontSize: "0.75rem", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", display: "block" }}>
                  {r.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section style={{ background: "var(--dark2)", padding: "6rem 1.5rem", textAlign: "center", borderTop: "1px solid rgba(184,151,106,0.15)" }}>
          <div style={{ maxWidth: 580, margin: "0 auto" }}>
            <div aria-hidden="true" style={{ width: 1, height: "2.5rem", background: "linear-gradient(to bottom, transparent, var(--gold))", margin: "0 auto 2rem" }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 300, color: "white", marginBottom: "1rem", lineHeight: 1.2 }}>
              Thinking about buying or selling<br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>in Elizabethtown?</em>
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: "2.5rem" }}>
              A free consultation costs nothing and commits you to nothing. If you have questions about the Elizabethtown market, a specific property, or just where to start — reach out.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+15022649376" className="btn-primary" style={{ fontSize: "0.78rem" }}>Call (502) 264-9376</a>
              <a href="mailto:RhomanMJames@gmail.com" className="btn-outline" style={{ fontSize: "0.78rem" }}>RhomanMJames@gmail.com</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
