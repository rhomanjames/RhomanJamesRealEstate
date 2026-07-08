"use client";

import { useState, useEffect, useRef } from "react";

const chapters = [
  { id: "overview", label: "Overview" },
  { id: "why-elizabethtown", label: "Why Move Here?" },
  { id: "neighborhoods", label: "Neighborhoods" },
  { id: "cost-of-living", label: "Cost of Living" },
  { id: "real-estate", label: "Real Estate Market" },
  { id: "schools", label: "Schools & Education" },
  { id: "economy-jobs", label: "Economy & Jobs" },
  { id: "healthcare", label: "Healthcare" },
  { id: "things-to-do", label: "Things to Do" },
  { id: "getting-around", label: "Getting Around" },
  { id: "weather", label: "Weather & Climate" },
  { id: "food-dining", label: "Food & Dining" },
  { id: "shopping", label: "Shopping & Retail" },
  { id: "community", label: "Community & Culture" },
  { id: "military", label: "Military Life" },
  { id: "remote-workers", label: "Remote Workers" },
  { id: "utilities", label: "Utilities & Setup" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "next-steps", label: "Next Steps" },
  { id: "history", label: "History of Elizabethtown" },
  { id: "taxes", label: "Taxes" },
];

export default function MovingGuideClient() {
  const [activeId, setActiveId] = useState("overview");
  const [tocOpen, setTocOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    chapters.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTocOpen(false);
    }
  };

  return (
    <main style={{ background: "var(--bg-soft)", minHeight: "100vh" }}>
      <style>{`
        .guide-wrap {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 0;
          max-width: 1200px;
          margin: 0 auto;
          align-items: start;
          padding: 0 1.5rem;
        }
        .toc-sidebar {
          position: sticky;
          top: 5.5rem;
          height: calc(100vh - 7rem);
          overflow-y: auto;
          padding: 2rem 0 2rem 0;
          border-right: 1px solid var(--border);
          scrollbar-width: thin;
          scrollbar-color: var(--border) transparent;
        }
        .toc-sidebar::-webkit-scrollbar { width: 4px; }
        .toc-sidebar::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
        .toc-title {
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--blue);
          padding: 0 1.5rem 1rem;
          border-bottom: 1px solid var(--border);
          margin-bottom: 0.75rem;
        }
        .toc-item {
          display: block;
          padding: 0.45rem 1.5rem;
          font-size: 0.78rem;
          color: var(--muted);
          cursor: pointer;
          border: none;
          background: none;
          text-align: left;
          width: 100%;
          transition: color 0.2s, background 0.2s;
          border-left: 2px solid transparent;
          line-height: 1.4;
        }
        .toc-item:hover { color: var(--text); background: var(--border); }
        .toc-item.active {
          color: var(--blue);
          border-left-color: var(--blue);
          background: var(--border);
          font-weight: 500;
        }
        .guide-content {
          padding: 3rem 0 6rem 3.5rem;
          max-width: 780px;
        }
        .chapter {
          margin-bottom: 5rem;
          scroll-margin-top: 6rem;
        }
        .chapter-tag {
          font-size: 0.62rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--blue);
          display: block;
          margin-bottom: 0.6rem;
        }
        .chapter-title {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 300;
          color: var(--text);
          line-height: 1.15;
          margin-bottom: 1rem;
        }
        .chapter-divider {
          width: 3rem;
          height: 1px;
          background: var(--blue);
          margin-bottom: 1.75rem;
        }
        .guide-p {
          font-size: 0.97rem;
          color: var(--muted);
          line-height: 1.95;
          margin-bottom: 1.25rem;
        }
        .guide-h2 {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--text);
          margin: 2.5rem 0 0.75rem;
          line-height: 1.2;
        }
        .guide-h3 {
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--blue);
          margin: 1.75rem 0 0.5rem;
        }
        .callout {
          background: var(--bg-soft);
          border-left: 3px solid var(--blue);
          padding: 1.25rem 1.5rem;
          margin: 1.75rem 0;
          border-radius: 0 2px 2px 0;
        }
        .callout p { margin-bottom: 0; color: var(--text); font-size: 0.92rem; line-height: 1.8; }
        .stat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1rem;
          margin: 1.75rem 0;
        }
        .stat-box {
          background: var(--bg-soft);
          border: 1px solid var(--border);
          padding: 1.25rem;
          text-align: center;
        }
        .stat-num {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 2rem;
          font-weight: 300;
          color: var(--blue);
          line-height: 1;
          margin-bottom: 0.3rem;
        }
        .stat-label {
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .compare-table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.75rem 0;
          font-size: 0.88rem;
        }
        .compare-table th {
          background: var(--bg-soft);
          color: var(--blue);
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 0.85rem 1rem;
          text-align: left;
          border-bottom: 1px solid var(--border);
        }
        .compare-table td {
          padding: 0.85rem 1rem;
          color: var(--muted);
          border-bottom: 1px solid var(--border);
          vertical-align: top;
          line-height: 1.6;
        }
        .compare-table tr:nth-child(even) td { background: rgba(255,255,255,0.02); }
        .compare-table td:first-child { color: var(--text); font-weight: 500; }
        .pro-con-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin: 1.75rem 0;
        }
        .pro-box {
          background: var(--border);
          border: 1px solid var(--border);
          padding: 1.5rem;
        }
        .con-box {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border);
          padding: 1.5rem;
        }
        .pro-con-title {
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .pro-con-title.pro { color: var(--blue); }
        .pro-con-title.con { color: var(--muted); }
        .guide-li {
          font-size: 0.93rem;
          color: var(--muted);
          line-height: 1.85;
          margin-bottom: 0.5rem;
          padding-left: 1.25rem;
          position: relative;
        }
        .guide-li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: var(--blue);
          font-size: 0.5rem;
          top: 0.45rem;
        }
        .neighborhood-card {
          background: var(--bg-soft);
          border: 1px solid var(--border);
          padding: 1.5rem;
          margin-bottom: 1.25rem;
          transition: border-color 0.2s;
        }
        .neighborhood-card:hover { border-color: var(--border); }
        .neighborhood-name {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 1.3rem;
          color: var(--text);
          margin-bottom: 0.25rem;
        }
        .neighborhood-meta {
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 0.85rem;
        }
        .cta-box {
          background: white;
          border: 1px solid var(--border);
          padding: 2.5rem;
          text-align: center;
          margin: 3rem 0;
        }
        .mobile-toc-toggle {
          display: none;
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 90;
          background: var(--blue);
          color: var(--text);
          border: none;
          padding: 0.85rem 1.25rem;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: 'Inter', system-ui, sans-serif;
          box-shadow: 0 1px 2px rgba(11,15,25,0.03);
        }
        .mobile-toc-drawer {
          display: none;
          position: fixed;
          bottom: 0; left: 0; right: 0;
          z-index: 89;
          background: white;
          border-top: 2px solid var(--blue);
          padding: 1.5rem;
          max-height: 60vh;
          overflow-y: auto;
        }
        @media (max-width: 900px) {
          .guide-wrap { grid-template-columns: 1fr; padding: 0 1rem; }
          .toc-sidebar { display: none; }
          .guide-content { padding: 2rem 0 4rem; max-width: 100%; }
          .mobile-toc-toggle { display: block; }
          .mobile-toc-drawer.open { display: block; }
          .pro-con-grid { grid-template-columns: 1fr; }
          .stat-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .stat-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero */}
      <section style={{
        background: "var(--bg-soft)",
        padding: "3rem 1.5rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem" }}>
            The Complete Relocation Guide · Updated July 2026
          </p>
          <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.1, marginBottom: "1.25rem", maxWidth: 700 }}>
            Moving to Elizabethtown, Kentucky
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.85, maxWidth: 600, marginBottom: "2rem" }}>
            The most detailed relocation guide for Elizabethtown, KY — covering every neighborhood, the real estate market, schools, jobs, cost of living, things to do, and everything in between. Written by a local agent who lives and works here.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted2)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <span style={{ color: "var(--blue)" }}>✍</span> Rhoman James, Elizabethtown Real Estate Agent
            </div>
            <div style={{ fontSize: "0.7rem", color: "var(--muted2)" }}>·</div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted2)" }}>
              {chapters.length} chapters · ~5,000 words
            </div>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <div className="guide-wrap">

        {/* Sticky TOC */}
        <aside className="toc-sidebar" aria-label="Table of contents">
          <div className="toc-title">Contents</div>
          {chapters.map(({ id, label }) => (
            <button
              key={id}
              className={`toc-item${activeId === id ? " active" : ""}`}
              onClick={() => scrollTo(id)}
              aria-current={activeId === id ? "true" : undefined}
            >
              {label}
            </button>
          ))}
          <div style={{ borderTop: "1px solid var(--border)", margin: "1.25rem 1.5rem 0", paddingTop: "1.25rem" }}>
            <a href="/faq" style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--blue)", textDecoration: "none", display: "block", marginBottom: "0.6rem" }}>→ Real Estate FAQ</a>
            <a href="/neighborhoods" style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--blue)", textDecoration: "none", display: "block", marginBottom: "0.6rem" }}>→ Neighborhood Guides</a>
            <a href="/tools/mortgage-calculator" style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--blue)", textDecoration: "none", display: "block" }}>→ Mortgage Calculator</a>
          </div>
        </aside>

        {/* Content */}
        <article className="guide-content">

          {/* OVERVIEW */}
          <section id="overview" className="chapter">
            <span className="chapter-tag">Introduction</span>
            <h2 className="chapter-title">Welcome to Elizabethtown, Kentucky</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              Elizabethtown — locals call it E-Town — is the seat of Hardin County, Kentucky, and one of the most genuinely livable mid-sized cities in the South. Positioned along Interstate 65 between Louisville (45 minutes north) and Nashville (90 minutes south), it occupies an enviable spot on the map: close enough to two major metros to access their airports, sports teams, and cultural life, yet far enough away to preserve the small-town character, affordable housing, and peaceful pace that people increasingly move to find.
            </p>
            <p className="guide-p">
              For decades, Elizabethtown was known primarily as a Fort Knox community — the city that grew up alongside one of the country's largest Army installations. That identity remains central and important. But over the past ten years, something broader has happened. Remote workers discovered they could stretch their salaries dramatically here. Families priced out of Louisville and Nashville found that the same money that buys a modest house in those markets buys a genuinely nice home in E-Town. Healthcare professionals, educators, and entrepreneurs recognized a growing community that still had room to grow.
            </p>
            <p className="guide-p">
              The result is a city in the middle of a quiet transformation — not the flashy, speculative growth of a Sun Belt boomtown, but the steady, organic expansion of a place people are genuinely choosing. That distinction matters, because it means Elizabethtown's growth has not priced out the community that made it appealing in the first place.
            </p>
            <p className="guide-p">
              This guide is the most comprehensive resource available on what it is actually like to move to and live in Elizabethtown, Kentucky. It covers every neighborhood, the real estate market in plain terms, the school system, the job market, healthcare, cost of living, things to do, and the practical details of getting set up once you arrive. It is written by a local real estate professional who lives and works here — not a content farm summarizing Wikipedia entries.
            </p>

            <div className="stat-grid">
              {[
                { num: "~32K", label: "City population" },
                { num: "~112K", label: "Hardin County" },
                { num: "1793", label: "Year founded" },
                { num: "748 ft", label: "Elevation" },
                { num: "42 mi", label: "To Louisville" },
                { num: "90 mi", label: "To Nashville" },
              ].map((s) => (
                <div key={s.label} className="stat-box">
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* WHY ELIZABETHTOWN */}
          <section id="why-elizabethtown" className="chapter">
            <span className="chapter-tag">Chapter 01</span>
            <h2 className="chapter-title">Why People Are Moving to Elizabethtown</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              Every city has a pitch. Elizabethtown's is unusual in that its most compelling arguments are not speculative — they are structural. The reasons people move here have been true for decades and are unlikely to change, which is exactly what makes the market stable and the community durable.
            </p>

            <h3 className="guide-h3">The I-65 Corridor Advantage</h3>
            <p className="guide-p">
              Location is Elizabethtown's most underrated asset. The city sits at the intersection of I-65 (the primary north-south artery through the mid-South) and the Bluegrass Parkway heading east toward Lexington. That positioning means Louisville is a 40-minute drive — close enough for day trips to major league games, concerts, the Muhammad Ali International Airport, or a University of Louisville sporting event. Nashville is 90 minutes south — weekend trips are entirely realistic. Lexington, home of the University of Kentucky, is about 80 minutes east.
            </p>
            <p className="guide-p">
              For most residents, this means the entertainment, medical specialization, and airport access of major cities are within reach without paying for proximity every month in their mortgage. It is one of the most compelling value propositions in American real estate geography.
            </p>

            <h3 className="guide-h3">Cost of Living Below the National Average</h3>
            <p className="guide-p">
              Elizabethtown's overall cost of living runs approximately 10 to 15 percent below the national average. Housing — the largest component of most household budgets — is significantly more affordable than comparable communities in Tennessee, Ohio, Indiana, or the Kentucky metro areas. A home that would cost $450,000 in Nashville's suburbs routinely sells for $260,000 to $290,000 in Elizabethtown with comparable square footage, lot size, and school quality. Groceries, utilities, healthcare, and services all cost less as well.
            </p>
            <p className="guide-p">
              For remote workers, this is transformational. A salary calibrated to a coastal or major metro market stretches dramatically further in Elizabethtown — and the quality of life does not diminish commensurately.
            </p>

            <h3 className="guide-h3">Fort Knox Stability</h3>
            <p className="guide-p">
              Fort Knox is the economic bedrock of Hardin County. One of the largest Army installations in the country, it employs tens of thousands of military personnel and civilians, generates consistent housing demand, and provides the kind of government-employment stability that insulates the local economy from private sector downturns. When other markets experienced significant housing price corrections, Elizabethtown's market held its value — because military PCS demand does not fluctuate with the stock market.
            </p>

            <h3 className="guide-h3">Genuine Small-Town Character</h3>
            <p className="guide-p">
              This is harder to quantify than a housing price, but it is the reason many people choose Elizabethtown over numerically similar alternatives. E-Town has the character of a community where people know each other — where local businesses are supported, where community events draw real participation, and where neighbors introduce themselves. This character has survived growth in a way that many similarly-sized cities have not managed.
            </p>

            <h3 className="guide-h3">Growing Amenities</h3>
            <p className="guide-p">
              The Elizabethtown that long-term residents remember had fewer dining and entertainment options than it does today. The past decade has seen meaningful growth in restaurants, retail, and community infrastructure. The Ring Road corridor has expanded significantly. Downtown Elizabethtown has seen investment. The Sports Park draws regional events. The community has modernized without losing what made it worth moving to in the first place.
            </p>

            <div className="callout">
              <p>
                <strong>The honest bottom line:</strong> People move to Elizabethtown because they want a good life at a reasonable price, near enough to major cities to maintain connections but far enough away to actually breathe. That is a legitimate and increasingly rare combination.
              </p>
            </div>
          </section>

          {/* NEIGHBORHOODS */}
          <section id="neighborhoods" className="chapter">
            <span className="chapter-tag">Chapter 02</span>
            <h2 className="chapter-title">Neighborhoods & Communities</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              The Elizabethtown area is not a single community — it is a collection of distinct cities and unincorporated areas, each with its own identity, price point, school system, and lifestyle character. Understanding the differences before you choose where to live will save you from a mismatch that is expensive to fix.
            </p>

            <div className="neighborhood-card">
              <div className="neighborhood-name">Elizabethtown (City Center)</div>
              <div className="neighborhood-meta">Hardin County · Most Amenities · $200s–$500s+</div>
              <p className="guide-p" style={{ marginBottom: 0 }}>
                Elizabethtown proper is the county seat and the commercial, medical, and cultural hub of Hardin County. It has the broadest selection of housing, the most school options, and the greatest density of restaurants, retail, and services. If you are coming from a suburb of a major city and want the most comparable experience to what you are leaving, Elizabethtown proper is where to look.
              </p>
              <p className="guide-p" style={{ marginBottom: 0, marginTop: "0.75rem" }}>
                <strong style={{ color: "var(--text)" }}>Helmwood Hills</strong> is one of the most established and sought-after neighborhoods — mature trees, larger lots, well-maintained homes, and proximity to shopping. The areas around <strong style={{ color: "var(--text)" }}>Freeman Lake</strong> offer scenic settings with trail and park access. Newer subdivisions on the south and east sides of town deliver modern, open floor plans with energy-efficient construction at more accessible price points. The I-65 corridor areas near the Ring Road provide maximum retail access.
              </p>
              <p className="guide-p" style={{ marginBottom: 0, marginTop: "0.75rem" }}>
                <strong style={{ color: "var(--text)" }}>Best for:</strong> Families who prioritize school choice, retirees who want services nearby, professionals who value walkability and amenity access, buyers with larger budgets.
              </p>
            </div>

            <div className="neighborhood-card">
              <div className="neighborhood-name">Radcliff</div>
              <div className="neighborhood-meta">Hardin County · Fort Knox Adjacent · $150s–$300s</div>
              <p className="guide-p" style={{ marginBottom: 0 }}>
                Radcliff is Hardin County's second-largest city, sitting directly adjacent to Fort Knox's primary Chaffee Gate — typically 5 to 10 minutes from most post locations. It has been shaped by decades of military presence into one of the most culturally diverse communities in Kentucky, with a wide range of ethnic restaurants, veteran-owned businesses, and military family services that reflect its population.
              </p>
              <p className="guide-p" style={{ marginBottom: 0, marginTop: "0.75rem" }}>
                Radcliff offers some of the best value in Hardin County — comparable homes consistently come in at a lower price point than Elizabethtown proper, without sacrificing access to Hardin County Schools, Fort Knox, or the amenities of the broader region. Investors find it particularly appealing for rental properties, as military family demand keeps vacancy low and tenant pools deep.
              </p>
              <p className="guide-p" style={{ marginBottom: 0, marginTop: "0.75rem" }}>
                <strong style={{ color: "var(--text)" }}>Best for:</strong> Active duty military and veterans, VA loan buyers maximizing their dollar, investors seeking cash-flow-positive rentals, buyers who prioritize commute to Fort Knox over Elizabethtown amenities.
              </p>
            </div>

            <div className="neighborhood-card">
              <div className="neighborhood-name">Vine Grove</div>
              <div className="neighborhood-meta">Hardin County · Small Town · $150s–$280s</div>
              <p className="guide-p" style={{ marginBottom: 0 }}>
                Vine Grove is a small, tight-knit city in western Hardin County with a loyal population and a community identity distinct from both Elizabethtown and Radcliff. It has its own elementary school feeding into Central Hardin High School, its own parks and events, and newer subdivisions that have expanded the housing stock in recent years. The price point is generally the most affordable in Hardin County for move-in-ready homes.
              </p>
              <p className="guide-p" style={{ marginBottom: 0, marginTop: "0.75rem" }}>
                Vine Grove sits roughly 15 minutes from both Elizabethtown's commercial district and Fort Knox's main gate, making it practical for buyers who commute to either location. The tradeoff is fewer local dining and retail options — most shopping trips require the drive to Elizabethtown.
              </p>
              <p className="guide-p" style={{ marginBottom: 0, marginTop: "0.75rem" }}>
                <strong style={{ color: "var(--text)" }}>Best for:</strong> First-time buyers stretching their budget, families who prioritize quiet residential streets, buyers who want small-town character without paying Elizabethtown prices.
              </p>
            </div>

            <div className="neighborhood-card">
              <div className="neighborhood-name">Rineyville</div>
              <div className="neighborhood-meta">Hardin County · Rural · $180s–$350s+ (varies by acreage)</div>
              <p className="guide-p" style={{ marginBottom: 0 }}>
                Rineyville is the most rural of Hardin County's primary communities — an unincorporated area with an agricultural character, larger parcels, and genuine privacy. If your vision of home involves land, livestock, a horse pasture, or simply the ability to stand in your backyard without seeing your neighbor's windows, Rineyville belongs in your search. Properties with 1 to 5 acres are common at price points that would buy a quarter-acre lot elsewhere in the county.
              </p>
              <p className="guide-p" style={{ marginBottom: 0, marginTop: "0.75rem" }}>
                Some Rineyville properties fall within USDA Rural Development loan eligibility zones — meaning qualified buyers may access zero-down-payment financing. Verify by address before assuming eligibility, as USDA maps are updated periodically.
              </p>
              <p className="guide-p" style={{ marginBottom: 0, marginTop: "0.75rem" }}>
                <strong style={{ color: "var(--text)" }}>Best for:</strong> Buyers who consciously value space and privacy over urban convenience, hobby farmers, horse owners, remote workers who want the full rural Kentucky experience.
              </p>
            </div>

            <div className="neighborhood-card">
              <div className="neighborhood-name">Hodgenville</div>
              <div className="neighborhood-meta">LaRue County · Historic · $130s–$250s</div>
              <p className="guide-p" style={{ marginBottom: 0 }}>
                Technically in neighboring LaRue County rather than Hardin, Hodgenville sits about 25 miles southeast of Elizabethtown and is covered by many local agents including this one. It is the county seat of LaRue County and the birthplace of Abraham Lincoln — the Abraham Lincoln Birthplace National Historical Park just south of town draws visitors from across the country.
              </p>
              <p className="guide-p" style={{ marginBottom: 0, marginTop: "0.75rem" }}>
                For buyers, Hodgenville offers maximum affordability — some of the lowest home prices in the region — combined with authentic small-town Kentucky character and a historic downtown square that feels genuinely unspoiled. The tradeoff is distance from Elizabethtown's amenities and a more limited local job market, which is why it disproportionately attracts remote workers and retirees.
              </p>
              <p className="guide-p" style={{ marginBottom: 0, marginTop: "0.75rem" }}>
                <strong style={{ color: "var(--text)" }}>Best for:</strong> Remote workers who want maximum home value per dollar, retirees seeking affordable historic small-town life, buyers who find Elizabethtown prices above their budget.
              </p>
            </div>

            <div className="callout">
              <p>
                <strong>How to choose:</strong> The right community depends on your commute, budget, school priorities, and lifestyle values — not on which one sounds best in a list. When I work with relocating buyers, we spend real time on this decision before we look at a single property. A 10-minute conversation about your priorities can save you from a very expensive mistake.
              </p>
            </div>
          </section>

          {/* COST OF LIVING */}
          <section id="cost-of-living" className="chapter">
            <span className="chapter-tag">Chapter 03</span>
            <h2 className="chapter-title">Cost of Living in Elizabethtown, KY</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              Elizabethtown's cost of living is one of its most compelling arguments — and it is often significantly better than people expect when they first look at the numbers. Here is a comprehensive breakdown of what life actually costs here.
            </p>

            <h3 className="guide-h3">Housing</h3>
            <p className="guide-p">
              Housing is where the difference is most dramatic. The median home price in Elizabethtown proper typically runs in the mid-to-upper $200,000s — with entry-level homes starting in the low $200,000s and quality family homes in established neighborhoods running $280,000 to $380,000. Custom and luxury properties exist above $400,000 but represent a small portion of the market.
            </p>
            <p className="guide-p">
              For context: the same money that buys a 1,400 square foot townhome in a Nashville or Louisville suburb often buys a 2,200 square foot single-family home with a yard in Elizabethtown. That is not a slight exaggeration — it is a consistent pattern that buyers experience when they make the comparison.
            </p>
            <p className="guide-p">
              Rental rates for a 3-bedroom single-family home typically run $1,100 to $1,600 per month depending on size, condition, and location. Apartments range from $750 for a one-bedroom to $1,300+ for a newer two-bedroom unit.
            </p>

            <table className="compare-table">
              <thead><tr><th>Category</th><th>Elizabethtown</th><th>Louisville</th><th>Nashville</th></tr></thead>
              <tbody>
                <tr><td>Median Home Price</td><td>~$265,000</td><td>~$290,000</td><td>~$425,000</td></tr>
                <tr><td>Average Rent (3BR)</td><td>$1,200–$1,500</td><td>$1,600–$2,000</td><td>$2,200–$2,800</td></tr>
                <tr><td>Property Tax Rate</td><td>~0.9–1.1%</td><td>~1.1–1.3%</td><td>~0.7–0.9%</td></tr>
                <tr><td>Homeowner's Insurance</td><td>$900–$1,400/yr</td><td>$1,000–$1,600/yr</td><td>$1,200–$1,800/yr</td></tr>
              </tbody>
            </table>

            <h3 className="guide-h3">Groceries</h3>
            <p className="guide-p">
              Grocery costs in Elizabethtown run approximately 8 to 12 percent below the national average. The area is served by Kroger (multiple locations), Walmart Supercenter, Aldi, Save-A-Lot, and various specialty stores. Competition between these chains keeps prices competitive. A typical household grocery bill that runs $800 per month nationally often runs $700 to $720 in the Elizabethtown market.
            </p>

            <h3 className="guide-h3">Utilities</h3>
            <p className="guide-p">
              Kentucky utility costs are among the most competitive in the Southeast. The primary electric provider is Kentucky Utilities (KU), with rates that typically translate to a monthly electric bill of $90 to $160 for a standard 3-bedroom home depending on season, insulation quality, and usage habits. Natural gas is provided by Atmos Energy where available, and gas-heated homes generally have lower winter utility costs than electric alternatives. Total monthly utility costs (electric, gas, water, trash) for a 3-bedroom home typically run $200 to $300.
            </p>

            <h3 className="guide-h3">Transportation</h3>
            <p className="guide-p">
              Elizabethtown is a driving city — a car is necessary for daily life. The flip side is that gas prices in Kentucky consistently run below the national average, and commutes within the city are short enough that mileage accumulates slowly. Most residents drive 8,000 to 12,000 miles per year rather than the 15,000+ common in sprawling metro areas. Car insurance rates are also below national averages.
            </p>

            <h3 className="guide-h3">Healthcare</h3>
            <p className="guide-p">
              Healthcare costs in Elizabethtown run below national averages. Physician visit costs, prescription prices, and dental care are all more affordable than comparable services in major metros. Health insurance costs depend on your employer coverage — the Fort Knox presence means many residents have access to military or federal employee health plans, which tend to be competitive.
            </p>

            <h3 className="guide-h3">Taxes</h3>
            <p className="guide-p">
              Kentucky's state income tax is a flat 4.5% — straightforward and competitive. There is no county income tax in Hardin County. The city of Elizabethtown levies a small occupational tax of 1% on wages earned within city limits. Property taxes consist of state, county, school district, and city components — combined effective rates typically run 0.9 to 1.1% of assessed value for properties in Elizabethtown proper, and slightly lower in unincorporated areas.
            </p>

            <div className="callout">
              <p>
                A household earning $85,000 per year will live meaningfully better in Elizabethtown than in Louisville, Nashville, or most comparably-sized cities in the Southeast. The math is not subtle — it is substantial, and it compounds over years of homeownership.
              </p>
            </div>
          </section>

          {/* REAL ESTATE */}
          <section id="real-estate" className="chapter">
            <span className="chapter-tag">Chapter 04</span>
            <h2 className="chapter-title">The Real Estate Market</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              Understanding the Elizabethtown real estate market before you start your home search will save you time, money, and frustration. Here is an honest assessment of what to expect as a buyer or seller in this market.
            </p>

            <h3 className="guide-h3">Market Character</h3>
            <p className="guide-p">
              Elizabethtown is a stable, demand-driven market with limited inventory in most price ranges. Homes priced correctly and presented well — particularly in the $200,000 to $350,000 range — consistently go under contract within the first two weeks, and often within the first week. Multiple offers on well-priced properties are not uncommon.
            </p>
            <p className="guide-p">
              The market is not speculative. Values have appreciated steadily — not explosively. This is a feature, not a limitation. It means buyers are purchasing real equity rather than inflated paper gains, and sellers can price with confidence that their homes will appraise and close at market value.
            </p>

            <h3 className="guide-h3">What Drives Demand</h3>
            <p className="guide-p">
              Three forces sustain housing demand in Elizabethtown regardless of broader market conditions: Fort Knox (constant military PCS rotation), in-migration from higher-cost markets, and organic local demand from a growing population. The Fort Knox factor is particularly important — military families need housing whether interest rates are 4% or 7%, which provides a demand floor that most markets lack.
            </p>

            <h3 className="guide-h3">Loan Types in This Market</h3>
            <p className="guide-p">
              VA loans are exceptionally common in the Elizabethtown/Radcliff market due to Fort Knox — local lenders, agents, and closing attorneys process them constantly and are more experienced with VA transactions than agents in most markets. FHA loans are popular with first-time buyers. Conventional loans serve the broader buyer pool. USDA loans are available for qualifying rural properties in parts of Hardin and LaRue counties.
            </p>

            <h3 className="guide-h3">New Construction</h3>
            <p className="guide-p">
              Elizabethtown has seen active new construction from both national and regional builders, particularly on the city's south and east sides. New subdivisions offer modern open floor plans, smart home features, and energy-efficient construction. Prices for new construction typically start in the mid-$200,000s and increase with upgrades and lot premiums. If you are considering new construction, buyer representation is important — the builder's sales agent works for the builder, not for you.
            </p>

            <h3 className="guide-h3">Investment Properties</h3>
            <p className="guide-p">
              The Fort Knox rental market is strong and consistent. Military families who are not yet ready to buy, or who are between PCS assignments, create reliable rental demand. Investors in Elizabethtown and Radcliff have found cash-flow-positive single-family rentals achievable at current price points — something increasingly rare in markets where home prices have outpaced rental rates.
            </p>

            <div className="cta-box">
              <p style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.75rem" }}>Free Tool</p>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.4rem", color: "var(--text)", marginBottom: "0.75rem" }}>See what you can afford in Elizabethtown</p>
              <p style={{ fontSize: "0.88rem", color: "var(--muted)", marginBottom: "1.25rem" }}>Use the free mortgage calculator to estimate your monthly payment based on current rates.</p>
              <a href="/tools/mortgage-calculator" style={{ display: "inline-block", padding: "0.75rem 2rem", background: "var(--blue)", color: "var(--bg-soft)", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Inter', system-ui, sans-serif" }}>
                Open Calculator →
              </a>
            </div>
          </section>

          {/* SCHOOLS */}
          <section id="schools" className="chapter">
            <span className="chapter-tag">Chapter 05</span>
            <h2 className="chapter-title">Schools & Education</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              School quality is one of the most important factors in any relocation decision — and Elizabethtown's school landscape is more nuanced than a single rating conveys. Understanding which district serves which address, and what each school actually offers, is essential before you commit to a neighborhood.
            </p>

            <h3 className="guide-h3">Hardin County Schools</h3>
            <p className="guide-p">
              Hardin County Schools is the primary public school district serving most of Hardin County — including Radcliff, Vine Grove, Rineyville, and unincorporated areas. The district consistently performs above the Kentucky state average on assessment measures and serves a large, diverse student population that reflects the county's military community.
            </p>
            <p className="guide-p">
              High schools in the Hardin County district include <strong style={{ color: "var(--text)" }}>North Hardin High School</strong> (serves northern Hardin County, including much of Radcliff), <strong style={{ color: "var(--text)" }}>Central Hardin High School</strong> (serves central and western areas including Vine Grove), and <strong style={{ color: "var(--text)" }}>John Hardin High School</strong> (serves eastern Hardin County). Each school has distinct programs, athletics, and culture — and proximity to a particular high school can be a meaningful factor in neighborhood selection for families with older children.
            </p>

            <h3 className="guide-h3">Elizabethtown Independent Schools</h3>
            <p className="guide-p">
              Elizabethtown Independent Schools is a separate, smaller district serving the city of Elizabethtown proper. Smaller districts often develop a tighter community feel — students are more likely to know each other and teachers across grade levels. <strong style={{ color: "var(--text)" }}>Elizabethtown High School</strong> is the primary secondary institution and has a strong community following for athletics and academics.
            </p>
            <p className="guide-p">
              The key distinction: your child will attend either Hardin County Schools or Elizabethtown Independent Schools depending on your specific home address — not based on which city name your address uses. Addresses within the city limits of Elizabethtown typically fall under Elizabethtown Independent, while surrounding areas fall under Hardin County Schools. I verify school zone for every home my buyers consider — there is no point falling in love with a house and then discovering the school assignment does not match your plans.
            </p>

            <h3 className="guide-h3">Private Schools</h3>
            <p className="guide-p">
              <strong style={{ color: "var(--text)" }}>St. James Catholic School</strong> is the primary private K-8 option in Elizabethtown, with a long history in the community and a faith-based educational environment. Several smaller faith-based and alternative options exist in the broader region for families with specific educational philosophies.
            </p>

            <h3 className="guide-h3">Higher Education</h3>
            <p className="guide-p">
              <strong style={{ color: "var(--text)" }}>Elizabethtown Community and Technical College (ECTC)</strong> is the region's primary higher education institution — a Kentucky Community and Technical College System (KCTCS) school offering associate degrees, workforce certifications, and transfer pathways to four-year universities. ECTC serves a large enrollment and is a significant local employer. Western Kentucky University and the University of Louisville both have distance learning presences in the area, and Campbellsville University is about 40 minutes south.
            </p>

            <div className="callout">
              <p>
                <strong>For families with school-aged children:</strong> Tell me your children's current grades and what matters most to you in a school — athletics, academics, arts, size, religious affiliation — before we start the home search. I will map every candidate property to its school zone and district so you are never surprised after closing.
              </p>
            </div>
          </section>

          {/* ECONOMY */}
          <section id="economy-jobs" className="chapter">
            <span className="chapter-tag">Chapter 06</span>
            <h2 className="chapter-title">Economy & Jobs</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              Elizabethtown's economy is more diversified than the Fort Knox-dominant narrative suggests — though Fort Knox is absolutely central to understanding the local labor market and its unusual stability.
            </p>

            <h3 className="guide-h3">Fort Knox</h3>
            <p className="guide-p">
              Fort Knox is the largest single employer in Hardin County by a significant margin. The installation is home to the U.S. Army Human Resources Command — the Army's primary personnel management organization — as well as the Army's Cadet Command, the U.S. Bullion Depository, and multiple training and support units. Combined military and civilian employment numbers in the tens of thousands.
            </p>
            <p className="guide-p">
              The fort's size and mission diversity mean that civilian employment opportunities span a wide range — administrative, technical, logistical, healthcare, educational, and more. Federal civilian positions are competitive and tend to offer strong benefits and stability that private sector equivalents rarely match.
            </p>

            <h3 className="guide-h3">Healthcare</h3>
            <p className="guide-p">
              Healthcare is the second-largest employment sector in Hardin County. <strong style={{ color: "var(--text)" }}>Hardin Memorial Hospital</strong> and <strong style={{ color: "var(--text)" }}>Baptist Health Hardin</strong> together employ several thousand healthcare professionals and support staff. The growing senior population in the region and the medical needs of a large military community create consistent demand for healthcare workers at every level, from entry-level CNA positions to specialty physician roles.
            </p>

            <h3 className="guide-h3">Manufacturing</h3>
            <p className="guide-p">
              Hardin County has a significant manufacturing base concentrated in industrial parks along the I-65 corridor. Multiple production facilities operate in the area, providing skilled trades, production, and supervisory employment. Manufacturing wages in Kentucky are competitive, and the sector has remained relatively stable compared to service industries.
            </p>

            <h3 className="guide-h3">Amazon & Logistics</h3>
            <p className="guide-p">
              An Amazon fulfillment operation in the Elizabethtown area is among the significant private employers in the region, along with other logistics and distribution operations that have located along the I-65 corridor for its connectivity to Louisville and Nashville.
            </p>

            <h3 className="guide-h3">Education</h3>
            <p className="guide-p">
              Hardin County Schools, Elizabethtown Independent Schools, and ECTC collectively represent a substantial education-sector employer base. Teaching positions in both districts are regularly available, as is administrative and support staff employment.
            </p>

            <h3 className="guide-h3">Retail & Services</h3>
            <p className="guide-p">
              The I-65 corridor and Ring Road retail concentration drives significant service-sector employment. Regional traffic from the corridor — travelers between Louisville and Nashville, Fort Knox visitors, and a growing local population — sustains a robust retail environment that continually creates new employment as it expands.
            </p>

            <h3 className="guide-h3">Remote Work</h3>
            <p className="guide-p">
              An increasing percentage of Elizabethtown's new residents are remote workers employed by companies in other markets. For this growing segment, the local economy is secondary to the lifestyle and cost advantages of the city. Internet infrastructure has improved substantially — fiber service has expanded across much of the city, and most neighborhoods have access to multiple broadband providers. If remote work reliability is critical to your decision, verify coverage by address before committing.
            </p>
          </section>

          {/* HEALTHCARE */}
          <section id="healthcare" className="chapter">
            <span className="chapter-tag">Chapter 07</span>
            <h2 className="chapter-title">Healthcare</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              Access to quality healthcare is a legitimate concern for anyone making a relocation decision. Elizabethtown is well-served for a city its size — with two full-service hospitals, multiple specialty clinics, and the proximity to Louisville and Nashville for highly specialized care.
            </p>

            <h3 className="guide-h3">Hardin Memorial Hospital</h3>
            <p className="guide-p">
              The flagship regional hospital, Hardin Memorial Hospital is a UK HealthCare affiliate — meaning it operates under the clinical protocols and quality standards of the University of Kentucky healthcare system. It offers a full range of acute care services including emergency, surgical, obstetrics, cardiology, oncology, orthopedics, and behavioral health. The hospital has undergone significant capital investment in recent years and is the primary destination for most Hardin County residents.
            </p>

            <h3 className="guide-h3">Baptist Health Hardin</h3>
            <p className="guide-p">
              Baptist Health Hardin is the county's second full-service hospital, part of the Baptist Health regional system. It offers comprehensive inpatient and outpatient services including a Level III Trauma Center — an important distinction that means it is equipped to handle serious trauma cases without immediate transfer to Louisville. Baptist Health has a strong regional reputation and serves a significant portion of the county population.
            </p>

            <h3 className="guide-h3">Ireland Army Community Hospital (Fort Knox)</h3>
            <p className="guide-p">
              For active duty military personnel, retirees, and eligible beneficiaries, Ireland Army Community Hospital on Fort Knox provides full-service military medical care. TRICARE beneficiaries have access to both on-post care and off-post networks in the civilian hospital system.
            </p>

            <h3 className="guide-h3">Specialty Care</h3>
            <p className="guide-p">
              Multiple specialty clinics operate in Elizabethtown covering cardiology, orthopedics, oncology, neurology, dermatology, ophthalmology, and other disciplines. For highly specialized tertiary care — complex cancer treatment, major organ transplant, neurosurgery — the University of Louisville Hospital and UK Medical Center in Lexington are both within 90 minutes.
            </p>

            <h3 className="guide-h3">Mental Health</h3>
            <p className="guide-p">
              Communicare is the primary community mental health provider for the region, offering outpatient therapy, crisis services, and substance abuse treatment. The military community's mental health awareness has driven greater service availability in Elizabethtown compared to similarly-sized non-military communities.
            </p>

            <h3 className="guide-h3">Dental & Vision</h3>
            <p className="guide-p">
              Multiple dental practices operate throughout Elizabethtown and Radcliff, with capacity that has grown alongside the population. Vision care is similarly well-represented with both independent optometrists and national chain providers.
            </p>
          </section>

          {/* THINGS TO DO */}
          <section id="things-to-do" className="chapter">
            <span className="chapter-tag">Chapter 08</span>
            <h2 className="chapter-title">Things to Do in Elizabethtown</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              The honest answer to "what is there to do in Elizabethtown?" has changed considerably over the past decade — and continues to evolve. The city is not Nashville or Louisville, and it does not try to be. What it offers is a genuinely functional, enjoyable quality of life with enough variety that most residents find their needs met locally, with major-city options a drive away when the occasion calls for it.
            </p>

            <h3 className="guide-h3">Outdoor Recreation</h3>
            <p className="guide-p">
              <strong style={{ color: "var(--text)" }}>Freeman Lake Park</strong> is the centerpiece of Elizabethtown's outdoor life — a beautiful lake with walking and running trails, fishing access, a splash pad and playground for families, open green space for events, and a pavilion system that hosts community gatherings year-round. It is the kind of public amenity that significantly punches above its weight for a city this size.
            </p>
            <p className="guide-p">
              The <strong style={{ color: "var(--text)" }}>Elizabethtown Sports Park</strong> is a multi-field complex hosting youth and adult leagues across baseball, softball, soccer, and other sports. It also draws regional tournaments that bring families from across Kentucky and neighboring states. The parks department maintains multiple additional neighborhood parks with courts, playgrounds, and open space throughout the city.
            </p>
            <p className="guide-p">
              For more extensive outdoor adventure, <strong style={{ color: "var(--text)" }}>Mammoth Cave National Park</strong> — one of the longest cave systems in the world — is approximately one hour south, making it an accessible day trip. The Land Between the Lakes National Recreation Area is about 90 minutes west. The Red River Gorge, one of the Southeast's premier rock climbing and hiking destinations, is about 90 minutes northeast.
            </p>

            <h3 className="guide-h3">Dining</h3>
            <p className="guide-p">
              Elizabethtown's restaurant scene has grown meaningfully. The diversity reflects the military community's international character — you will find Vietnamese, Mexican, Chinese, Thai, Indian, Middle Eastern, and other cuisines alongside the traditional Kentucky staples. Locally owned spots have multiplied, and the dining landscape continues to evolve as new residents bring new demands. The Ring Road corridor has the highest restaurant density; downtown Elizabethtown has a more relaxed, local feel.
            </p>

            <h3 className="guide-h3">History & Culture</h3>
            <p className="guide-p">
              The <strong style={{ color: "var(--text)" }}>Historic State Theatre</strong> is a downtown Elizabethtown landmark — a restored movie house that shows films and hosts community performances and events. <strong style={{ color: "var(--text)" }}>Swope's Cars of Yesteryear Museum</strong> is a beloved local institution showcasing an impressive collection of vintage automobiles.
            </p>
            <p className="guide-p">
              In nearby Hodgenville (25 miles), the <strong style={{ color: "var(--text)" }}>Abraham Lincoln Birthplace National Historical Park</strong> is a genuinely significant historical site — the birthplace and boyhood home of the 16th President, maintained by the National Park Service. It is a meaningful cultural amenity that most E-Town residents underutilize.
            </p>

            <h3 className="guide-h3">Community Events</h3>
            <p className="guide-p">
              Elizabethtown maintains an active community events calendar — seasonal festivals, the Farmer's Market, holiday celebrations, charity events, and community fundraisers that reflect the city's genuine sense of communal identity. The military population brings its own calendar of events, ceremonies, and community activities that layer on top of civilian programming.
            </p>

            <h3 className="guide-h3">Day Trips</h3>
            <p className="guide-p">
              Louisville (45 minutes): Louisville Slugger Museum, Muhammad Ali Center, Churchill Downs and the Kentucky Derby, the Louisville Zoo, the Louisville Science Center, PNC Arena (Louisville Cardinals basketball), major concerts and touring shows, world-class dining at a density Elizabethtown cannot match.
            </p>
            <p className="guide-p">
              Nashville (90 minutes): Live music on Broadway, the Country Music Hall of Fame, Bridgestone Arena events, NFL and NHL games, an international airport with direct flights worldwide.
            </p>
            <p className="guide-p">
              Lexington (80 minutes): University of Kentucky athletics, the Kentucky Horse Park, Rupp Arena, Keeneland Racecourse, and a thriving downtown food and arts scene.
            </p>
          </section>

          {/* GETTING AROUND */}
          <section id="getting-around" className="chapter">
            <span className="chapter-tag">Chapter 09</span>
            <h2 className="chapter-title">Getting Around</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              Transportation in Elizabethtown is simple: you need a car. There is no meaningful public transit system, and the city's layout — spread along a few major arterials with residential neighborhoods feeding off them — is not designed for walking or cycling as primary transportation modes. That said, the tradeoffs are significant: commutes are short, traffic is minimal by any metro standard, and parking is free everywhere.
            </p>

            <h3 className="guide-h3">Driving Within Elizabethtown</h3>
            <p className="guide-p">
              Most destinations within Elizabethtown are 5 to 15 minutes from most residential addresses. The Ring Road (KY-61 / Dixie Highway corridor) is the primary commercial artery and the most congested — peak-hour traffic there can extend commutes by 5 to 10 minutes during the morning and afternoon rush. US-31W is the north-south spine connecting Elizabethtown, Radcliff, and Vine Grove. Helmwood Drive and the streets feeding Helmwood Hills are the typical school-day bottleneck.
            </p>

            <h3 className="guide-h3">To Louisville</h3>
            <p className="guide-p">
              I-65 north is a 40 to 55-minute drive under normal conditions. Rush hour traffic entering Louisville from the south can extend this to 60 to 75 minutes during peak commute periods — which is why most Elizabethtown residents who commute to Louisville either work from home part of the week or have positions that offer flexible start times. The reverse commute (Louisville to Elizabethtown) is generally smoother.
            </p>

            <h3 className="guide-h3">To Fort Knox</h3>
            <p className="guide-p">
              Fort Knox has multiple access points, and commute time depends entirely on which gate you use and where on post you work. The primary Chaffee Gate (accessed from US-31W in Radcliff) is 5 to 10 minutes from most Radcliff addresses and 15 to 20 minutes from central Elizabethtown. The Wilson Gate (Muldraugh side) is accessed from KY-1638 and serves the western part of the installation. Ask which gate and which location on post before choosing a neighborhood.
            </p>

            <h3 className="guide-h3">Air Travel</h3>
            <p className="guide-p">
              Louisville's Muhammad Ali International Airport (SDF) is the primary airport for most Elizabethtown travelers — 45 to 55 minutes away. It offers direct service to major hubs and a growing number of direct leisure destinations. Nashville International Airport (BNA) is 90 minutes south and offers more direct international flights and often better fares for popular destinations, making it worth comparing for longer trips.
            </p>

            <h3 className="guide-h3">Cycling & Walking</h3>
            <p className="guide-p">
              Freeman Lake Park and the trails around it offer genuine recreational cycling and walking. Downtown Elizabethtown is modestly walkable for errands within a small radius. Beyond these areas, infrastructure for car-free transportation is limited. If cycling or walking are important daily transportation modes for you, Elizabethtown will require adjustment.
            </p>
          </section>

          {/* WEATHER */}
          <section id="weather" className="chapter">
            <span className="chapter-tag">Chapter 10</span>
            <h2 className="chapter-title">Weather & Climate</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              Kentucky weather is the definition of all four seasons, and Elizabethtown gets them all in full. If you are coming from Florida, Arizona, or coastal California, prepare for genuine seasonal variation. If you are coming from the upper Midwest or Northeast, you will find Kentucky winters considerably more manageable.
            </p>

            <h3 className="guide-h3">Spring (March–May)</h3>
            <p className="guide-p">
              Spring in Elizabethtown is genuinely beautiful — dogwoods and redbuds bloom, temperatures are mild, and the landscape comes alive. March can still produce winter-like cold snaps and occasional late frost. April and May are typically the most pleasant months of the year — daytime highs in the 60s and 70s, low humidity, clear skies. Spring is also storm season — Hardin County is not in the most active tornado corridor, but severe thunderstorms and tornado watches are a real part of spring weather.
            </p>

            <h3 className="guide-h3">Summer (June–August)</h3>
            <p className="guide-p">
              Summers are hot and humid. Daytime highs regularly reach the upper 80s and occasionally exceed 90°F. Humidity makes it feel hotter than the thermometer suggests. July is typically the most uncomfortable month. Central air conditioning is not optional — it is essential. Most outdoor activities get pushed to mornings and evenings during the peak of summer.
            </p>

            <h3 className="guide-h3">Fall (September–November)</h3>
            <p className="guide-p">
              Fall is Elizabethtown's other stunning season. September is a transition month — still warm but increasingly comfortable. October brings the color: the deciduous forests of Hardin County turn gold, orange, and red in a display that genuinely rivals more famous foliage destinations. November cools quickly and can produce the first freezes. Fall is widely considered the best season by most long-term residents.
            </p>

            <h3 className="guide-h3">Winter (December–February)</h3>
            <p className="guide-p">
              Elizabethtown winters are mild by Midwestern standards but cold enough to matter. Average January temperatures range from overnight lows in the low 20s to daytime highs in the mid-40s. Snow falls most winters — typically a few meaningful events per season — but significant accumulation (over 6 inches) is uncommon and the city is generally back to normal within a day or two. Ice storms are the more significant weather concern — freezing rain on already-cold pavement creates hazardous driving conditions that close schools and businesses. Having a 48-hour supply of essentials at home during winter is a reasonable precaution.
            </p>

            <div className="stat-grid">
              {[
                { num: "48°F", label: "Average annual temp" },
                { num: "47\"", label: "Annual rainfall" },
                { num: "12\"", label: "Average snowfall" },
                { num: "204", label: "Sunny days/year" },
              ].map((s) => (
                <div key={s.label} className="stat-box">
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FOOD & DINING */}
          <section id="food-dining" className="chapter">
            <span className="chapter-tag">Chapter 11</span>
            <h2 className="chapter-title">Food & Dining</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              Elizabethtown's food scene is better than its size would suggest — and the military community deserves significant credit for that. Decades of families from across the country and world rotating through Fort Knox have created demand for diverse cuisine that a purely regional Kentucky city of 32,000 might not sustain.
            </p>

            <h3 className="guide-h3">Local Favorites</h3>
            <p className="guide-p">
              The Elizabethtown dining landscape includes a mix of locally owned restaurants and regional chains across American, Mexican, Asian, and other cuisines. The Ring Road corridor has the highest density of options — you can find Thai, Vietnamese pho, Mexican taquerias, Chinese buffets, and sushi within a relatively small geographic area. Downtown Elizabethtown has developed a more curated selection of locally owned spots with a calmer atmosphere.
            </p>

            <h3 className="guide-h3">Grocery & Specialty</h3>
            <p className="guide-p">
              Kroger has multiple locations and serves as the primary full-service grocery option. Walmart Supercenter provides the broadest selection for staples at the lowest prices. Aldi serves budget-conscious shoppers well. Save-A-Lot is present for basic staples. For specialty items — high-end produce, specialty meats, organic groceries — the options improve significantly with a short drive toward Louisville or Lexington, though the Elizabethtown area market has been improving.
            </p>

            <h3 className="guide-h3">The Honest Assessment</h3>
            <p className="guide-p">
              Food is an area where Elizabethtown's size limitation shows most clearly for people coming from major metro areas. If you are accustomed to choosing from dozens of Michelin-quality restaurants, innovative farm-to-table concepts, and global cuisine at every price point, Elizabethtown will require an adjustment. Most residents find this adjustment entirely worth the tradeoffs — but it is worth being honest about rather than overstating the local dining scene.
            </p>
          </section>

          {/* SHOPPING */}
          <section id="shopping" className="chapter">
            <span className="chapter-tag">Chapter 12</span>
            <h2 className="chapter-title">Shopping & Retail</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              Elizabethtown's retail landscape is functionally complete for daily needs and most discretionary shopping. The Ring Road and US-31W corridor hosts a full range of national chains — Target, Walmart, Kohl's, TJ Maxx, Best Buy, Home Depot, Lowe's, and most major pharmacy chains are all represented. Big-box retail is well-covered.
            </p>
            <p className="guide-p">
              For specialty retail — high-end fashion, boutique furniture, luxury goods, specialty hobby shops — Elizabethtown's options are more limited, and Louisville or Lexington become the destinations of choice. Online shopping (with quick shipping via nearby Louisville) fills most of the gaps without requiring the drive.
            </p>
            <p className="guide-p">
              The city has a functioning downtown retail district with locally owned shops, antique dealers, and specialty stores that reward exploration. It is not the scale of a larger city's downtown, but it has genuine character and is worth supporting.
            </p>
          </section>

          {/* COMMUNITY */}
          <section id="community" className="chapter">
            <span className="chapter-tag">Chapter 13</span>
            <h2 className="chapter-title">Community & Culture</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              Community character is one of the hardest things to convey in a relocation guide and one of the most important things to get right. Elizabethtown has a distinct social fabric that most residents find genuinely welcoming — though it takes some understanding of its particular character to navigate well.
            </p>

            <h3 className="guide-h3">The Military-Civilian Mix</h3>
            <p className="guide-p">
              Elizabethtown and Radcliff have spent decades integrating military families from across the country and world with the multigenerational Kentucky civilian population. The result is a community that is simultaneously more culturally diverse and more outwardly welcoming to newcomers than a typical small Kentucky city might be. Military families are accustomed to moving and making new connections quickly — this norm permeates the broader community culture.
            </p>

            <h3 className="guide-h3">Faith Communities</h3>
            <p className="guide-p">
              Like most Kentucky communities, Elizabethtown has a robust faith community. Churches of various Protestant denominations, Catholic, and other faith traditions are well-represented and often serve as primary social anchors for their members. For newcomers, a church or faith community can be one of the fastest paths to meaningful local connection.
            </p>

            <h3 className="guide-h3">Civic Life</h3>
            <p className="guide-p">
              Elizabethtown has active civic organizations — Rotary, Lions, various charitable groups — that provide community service opportunities and social connections for adults who want to engage beyond their immediate neighborhood. The city government is accessible and responsive by small-city standards.
            </p>

            <h3 className="guide-h3">Sports Culture</h3>
            <p className="guide-p">
              Kentucky is a basketball state, and Elizabethtown residents divide between University of Kentucky Wildcats and University of Louisville Cardinals — a friendly but genuinely felt rivalry. Youth sports are significant: the Elizabethtown Sports Park draws families every weekend, and travel sports teams are active across multiple disciplines. High school athletics — football, basketball, baseball, volleyball — are well-attended community events that provide consistent social programming throughout the school year.
            </p>
          </section>

          {/* MILITARY */}
          <section id="military" className="chapter">
            <span className="chapter-tag">Chapter 14</span>
            <h2 className="chapter-title">Military Life Near Fort Knox</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              If you are a service member, veteran, or military family member, Elizabethtown has been shaped to serve you in ways that go beyond any individual amenity or service. The community has built genuine expertise in supporting military families over generations — from real estate agents who understand PCS timelines to lenders who process VA loans efficiently to schools that have experience integrating new students mid-year.
            </p>

            <h3 className="guide-h3">VA Loan Market</h3>
            <p className="guide-p">
              The Fort Knox market is one of the highest-volume VA loan markets in Kentucky. Local lenders, real estate professionals, and closing attorneys process VA loans regularly — meaning the expertise is institutional, not incidental. VA buyers in this market face less friction than in markets where VA transactions are uncommon.
            </p>

            <h3 className="guide-h3">BAH and Housing Economics</h3>
            <p className="guide-p">
              Basic Allowance for Housing rates for Fort Knox are calibrated to local market conditions. For many service members, a well-structured VA loan purchase produces a total monthly payment at or below BAH — meaning zero out-of-pocket housing cost while building equity simultaneously. This is one of the most powerful wealth-building strategies available to military families, and the Elizabethtown market is one of the places where it is most achievable.
            </p>

            <h3 className="guide-h3">Community Support</h3>
            <p className="guide-p">
              Military spouse employment networks, family readiness programs, veteran-owned businesses, and faith communities with military-specific programming all serve the Elizabethtown-Radcliff area. The community has decades of experience absorbing new families quickly and connecting them to resources.
            </p>

            <div className="cta-box">
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.4rem", color: "var(--text)", marginBottom: "0.75rem" }}>
                PCS-ing to Fort Knox?
              </p>
              <p style={{ fontSize: "0.88rem", color: "var(--muted)", marginBottom: "1.25rem" }}>
                I specialize in military relocations — VA loans, compressed timelines, remote purchases. Call the moment your orders arrive.
              </p>
              <a href="/services/relocation" style={{ display: "inline-block", padding: "0.75rem 2rem", background: "var(--blue)", color: "var(--bg-soft)", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Inter', system-ui, sans-serif" }}>
                Relocation Services →
              </a>
            </div>
          </section>

          {/* REMOTE WORKERS */}
          <section id="remote-workers" className="chapter">
            <span className="chapter-tag">Chapter 15</span>
            <h2 className="chapter-title">Elizabethtown for Remote Workers</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              Remote workers have been discovering Elizabethtown for the same reasons they have been discovering other mid-sized Southern and Midwestern cities — the math is simply compelling. A remote salary calibrated to Austin, Nashville, Chicago, or any coastal market buys a dramatically better life in Elizabethtown than it does in the market where it was earned.
            </p>

            <h3 className="guide-h3">The Financial Case</h3>
            <p className="guide-p">
              Consider a household earning $120,000 per year remotely. In Nashville, that income — after taxes, housing costs, transportation, and basic expenses — leaves limited discretionary money and often requires a two-income household to sustain homeownership. In Elizabethtown, the same income affords a 2,400 square foot home, no commute stress, low property taxes, and genuine financial breathing room. The compounding effect on net worth over 10 years is substantial.
            </p>

            <h3 className="guide-h3">Internet Infrastructure</h3>
            <p className="guide-p">
              Fiber internet availability has expanded significantly in Elizabethtown over the past several years. AT&T Fiber serves much of the city, and Spectrum cable internet is widely available as an alternative. Most urban and suburban addresses can access speeds sufficient for video conferencing, cloud work, and most professional demands. Rural addresses — particularly in Rineyville and outer Hardin County — vary more significantly, and verifying coverage by specific address before committing to a property is essential for remote workers.
            </p>

            <h3 className="guide-h3">Coworking & Coffee</h3>
            <p className="guide-p">
              Dedicated coworking space options in Elizabethtown are limited compared to major metros. Several coffee shops provide workable environments for focused work sessions or meetings. For remote workers who benefit from occasional social work environments, this is an area where Elizabethtown's size shows — though it continues to improve as the remote worker population grows.
            </p>

            <h3 className="guide-h3">Quality of Life</h3>
            <p className="guide-p">
              What Elizabethtown consistently offers remote workers that larger cities cannot is the ability to step away from work and be genuinely somewhere. Freeman Lake Park is 10 minutes from most addresses. The horse country of central Kentucky is accessible within an hour. Nashville or Louisville entertainment is a drive away when needed. The balance between work and actual life is easier to maintain when the cost of life does not demand that work expand to fill it.
            </p>
          </section>

          {/* UTILITIES */}
          <section id="utilities" className="chapter">
            <span className="chapter-tag">Chapter 16</span>
            <h2 className="chapter-title">Utilities & Getting Set Up</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              Once you close on your home or sign your lease, here is exactly what you need to set up and who to call. I provide every buyer I work with a property-specific version of this list based on their actual address.
            </p>

            <table className="compare-table">
              <thead><tr><th>Service</th><th>Provider</th><th>Contact</th></tr></thead>
              <tbody>
                <tr><td>Electric</td><td>Kentucky Utilities (KU)</td><td>ku.com · 1-800-981-0600</td></tr>
                <tr><td>Natural Gas</td><td>Atmos Energy</td><td>atmosenergy.com · 1-888-286-6700</td></tr>
                <tr><td>Water (City)</td><td>Elizabethtown Municipal Utilities</td><td>elizabethtownutilities.com</td></tr>
                <tr><td>Water (County)</td><td>Hardin County Water District</td><td>hardincountywaterdistrict.com</td></tr>
                <tr><td>Internet</td><td>AT&T Fiber / Spectrum</td><td>Verify by address — att.com or spectrum.com</td></tr>
                <tr><td>Trash</td><td>Varies by location</td><td>Verify with seller or landlord at closing</td></tr>
                <tr><td>Driver's License</td><td>Hardin County Circuit Clerk</td><td>Within 30 days of establishing residence</td></tr>
                <tr><td>Vehicle Registration</td><td>Hardin County Clerk</td><td>hardincountyclerk.com</td></tr>
                <tr><td>Voter Registration</td><td>Kentucky Secretary of State</td><td>elect.ky.gov · within 15 days of moving</td></tr>
                <tr><td>Schools Enrollment</td><td>District varies by address</td><td>hcboe.net or etownschools.com</td></tr>
              </tbody>
            </table>

            <div className="callout">
              <p>
                <strong>Rural properties note:</strong> If your home uses a private well and septic system rather than municipal water and sewer — common in Rineyville and outer Hardin County — ensure the well is tested and the septic is inspected as part of your purchase. I always recommend these inspections for rural properties regardless of the seller's representations.
              </p>
            </div>
          </section>

          {/* PROS & CONS */}
          <section id="pros-cons" className="chapter">
            <span className="chapter-tag">Chapter 17</span>
            <h2 className="chapter-title">The Honest Pros & Cons</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              No relocation guide is useful if it only tells you what you want to hear. Here is my honest assessment of Elizabethtown's strengths and genuine limitations.
            </p>

            <div className="pro-con-grid">
              <div className="pro-box">
                <div className="pro-con-title pro">What Elizabethtown Does Well</div>
                {[
                  "Cost of living significantly below national average",
                  "I-65 corridor between Louisville and Nashville",
                  "Fort Knox economic stability and VA loan expertise",
                  "Strong, consistent real estate appreciation",
                  "Genuine small-town community character",
                  "Good public schools above KY state average",
                  "Two full-service hospitals",
                  "Low crime relative to comparable cities",
                  "Affordable housing with meaningful equity potential",
                  "Welcoming to military families and newcomers",
                  "Freeman Lake Park and outdoor recreation",
                  "All four seasons without extreme winters",
                  "Growing dining and retail scene",
                  "Short commutes — most trips under 15 minutes",
                  "Free parking everywhere",
                  "Solid internet infrastructure improving annually",
                  "Proximity to Mammoth Cave, Red River Gorge",
                  "Strong youth sports programs and facilities",
                ].map((item) => (
                  <p key={item} className="guide-li">{item}</p>
                ))}
              </div>
              <div className="con-box">
                <div className="pro-con-title con">Where Elizabethtown Falls Short</div>
                {[
                  "Car is required for virtually everything — no meaningful transit",
                  "Dining scene limited compared to major metros",
                  "Specialty retail requires Louisville or Lexington",
                  "Limited nightlife and arts compared to larger cities",
                  "Coworking infrastructure not yet well-developed",
                  "Rural addresses have variable internet quality",
                  "Hot, humid summers require A/C discipline",
                  "Ring Road traffic concentrates congestion",
                  "Fewer specialty healthcare options locally — tertiary care requires travel",
                  "Limited international food specialty grocery options",
                  "Public transit essentially nonexistent",
                  "Tornado and severe storm risk in spring",
                  "Luxury real estate market is thin — fewer $500K+ options",
                  "Fort Knox gate traffic during peak commute hours",
                ].map((item) => (
                  <p key={item} className="guide-li">{item}</p>
                ))}
              </div>
            </div>

            <div className="callout">
              <p>
                <strong>The bottom line:</strong> Elizabethtown is an excellent place to live for people who value affordability, community, stability, and geographic access over the density and variety of a major metro. It is not the right fit for people who need urban walkability, a robust nightlife scene, or the cultural density of a large city as part of their daily life. Most people who move here knowing what they are getting stay — and are glad they came.
              </p>
            </div>
          </section>

          {/* NEXT STEPS */}
          <section id="next-steps" className="chapter">
            <span className="chapter-tag">Chapter 18</span>
            <h2 className="chapter-title">Your Next Steps</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              If you have made it through this guide, you know more about Elizabethtown, Kentucky than most people who move here after a single visit. That knowledge is valuable — it means the decisions you make next will be based on reality rather than assumption.
            </p>

            <h3 className="guide-h3">If You Are Ready to Buy</h3>
            <p className="guide-p">
              The first step is a free buyer consultation — a 30-minute conversation where we align on your priorities, timeline, and budget, and I answer every question you still have about the market. From there, we connect you with a lender for pre-approval and begin the actual search. Call or text (859) 536-6009, or email RhomanMJames@gmail.com.
            </p>

            <h3 className="guide-h3">If You Are Still Deciding</h3>
            <p className="guide-p">
              That is a completely legitimate place to be, and I am genuinely happy to be a resource without any pressure to commit. Use the free tools on this site to run numbers on your specific situation. Read the neighborhood guides for deeper dives on each community. Review the FAQ for the questions you have not thought to ask yet.
            </p>

            <h3 className="guide-h3">If You Are Military and Incoming</h3>
            <p className="guide-p">
              Call the moment orders arrive — not when you are two weeks out. The earlier we start, the better your options. I handle remote purchases regularly and can get you into a home on a PCS timeline without cutting corners.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", margin: "2rem 0" }}>
              {[
                { label: "Neighborhood Guides", href: "/neighborhoods", desc: "Deep dive on every community" },
                { label: "Mortgage Calculator", href: "/tools/mortgage-calculator", desc: "Estimate your monthly payment" },
                { label: "VA Loan Calculator", href: "/tools/va-loan-calculator", desc: "Military buyer tool" },
                { label: "Affordability Calculator", href: "/tools/affordability-calculator", desc: "How much can you afford?" },
                { label: "Real Estate FAQ", href: "/faq", desc: "70+ questions answered" },
                { label: "All Free Tools", href: "/tools", desc: "10 calculators for buyers & sellers" },
              ].map((l) => (
                <a key={l.href} href={l.href} style={{ display: "block", padding: "1.25rem", background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: "16px", textDecoration: "none", transition: "border-color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}>
                  <div style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.35rem" }}>{l.label}</div>
                  <div style={{ fontSize: "0.82rem", color: "var(--muted)" }}>{l.desc}</div>
                </a>
              ))}
            </div>

            <div className="cta-box">
              <p style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.75rem" }}>
                Ready to talk?
              </p>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.75rem" }}>
                Let&apos;s find your home in Elizabethtown
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginBottom: "1.75rem", maxWidth: 440, margin: "0 auto 1.75rem" }}>
                Free consultation — no pressure, no obligation. Call, text, or email and I will give you a straight answer about your specific situation.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="tel:+18595366009" style={{ display: "inline-block", padding: "0.85rem 2.25rem", background: "var(--blue)", color: "var(--bg-soft)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 500 }}>
                  Call (859) 536-6009
                </a>
                <a href="mailto:RhomanMJames@gmail.com" style={{ display: "inline-block", padding: "0.85rem 2.25rem", border: "1px solid var(--border)", borderRadius: "16px", color: "var(--blue)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'Inter', system-ui, sans-serif" }}>
                  Send an Email
                </a>
              </div>
            </div>
          </section>

          {/* HISTORY */}
          <section id="history" className="chapter">
            <span className="chapter-tag">Chapter 19</span>
            <h2 className="chapter-title">The History of Elizabethtown</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              Long before Elizabethtown had a name, this stretch of land along Severns Valley Creek was contested frontier — the edge of Kentucky's earliest white settlement, still very much Native American hunting ground, and dangerous enough that nobody built here alone. In 1779, three men — Captain Thomas Helm, Colonel Andrew Hynes, and Samuel Haycraft Sr. — each built a small log fort roughly a mile apart, forming a triangle close enough that settlers in any one fort could reasonably expect help from the other two. For a stretch of time, this triangle of forts was genuinely the edge of the known world for European settlers moving into Kentucky, in the area then known simply as Severns Valley.
            </p>

            <h3 className="guide-h3">The Founding: 1793 and 1797</h3>
            <p className="guide-p">
              Hardin County was established in 1792, carved out of Nelson County and named for Colonel John Hardin, a Revolutionary War veteran killed that same year while serving as a peace envoy to Ohio tribes — he never lived to see the county carrying his name. In 1793, Colonel Andrew Hynes surveyed and laid off 30 acres of his own land into lots and streets to create a permanent county seat. It wasn't until July 4, 1797 that the town was legally established and formally named — Hynes named it in honor of his wife, Elizabeth. The original thirty acres were divided into fifty-one lots, and it took nearly a decade for all of them to sell. The first courthouse, a modest log structure, went up in 1795; a proper brick courthouse followed in 1806, and the first brick residence in town was built in 1803 on the same public square that still anchors downtown today.
            </p>

            <h3 className="guide-h3">The Lincoln Connection</h3>
            <p className="guide-p">
              Thomas Lincoln, Abraham Lincoln's father, worked in Elizabethtown as a young man helping build a millrace, and after marrying Nancy Hanks in 1806, the couple actually lived in a log cabin in Elizabethtown itself — their daughter Sarah, Abraham's older sister, was born there in 1807. The family soon moved roughly 13 miles southeast to Sinking Spring Farm near what is now Hodgenville, where Abraham Lincoln was born in 1809. After Nancy Hanks Lincoln died in 1818, Thomas returned to Elizabethtown and remarried — to Sarah Bush Johnston, who became Abraham Lincoln's stepmother and, by most historical accounts, a genuinely formative presence in his childhood.
            </p>

            <h3 className="guide-h3">The Railroad Era and the Civil War</h3>
            <p className="guide-p">
              The Louisville & Nashville Railroad arrived in 1854, transforming Elizabethtown from a regional trading post into a genuine transportation hub. Local resident John L. Helm served as the railroad's first president and, according to local history, insisted the charter require every train to stop in Elizabethtown — a requirement that held for well over a century, until passenger service was discontinued in the 1960s.
            </p>
            <p className="guide-p">
              Because that same railroad served as a critical Union supply line, Elizabethtown became a strategic Civil War target. On December 27, 1862, Confederate General John Hunt Morgan led roughly 3,000 cavalry troops in an attack on the town, occupying high ground in what is now the Elizabethtown City Cemetery and firing more than 100 cannonballs into downtown. One Confederate cannonball became lodged in a building on the public square; when that building later burned in 1887 and was rebuilt, the cannonball was recovered and reinstalled in the wall — where it remains embedded today. Look for it downtown, and you're looking at a genuine piece of that afternoon.
            </p>

            <h3 className="guide-h3">An Unusual Federal Presence</h3>
            <p className="guide-p">
              In one of the stranger footnotes in local history, the 7th Cavalry Regiment — the same unit that would later become infamous under Custer's command at the Battle of the Little Bighorn — was stationed in and around Elizabethtown from 1871 to 1873, commanded by George Armstrong Custer himself, tasked with suppressing local Ku Klux Klan activity and illegal distilling operations during Reconstruction.
            </p>

            <h3 className="guide-h3">Fort Knox Arrives: 1918</h3>
            <p className="guide-p">
              No single event changed Elizabethtown's trajectory more than the arrival of what became Fort Knox. In 1918, with the U.S. newly entered into World War I, the Army leased roughly 20,000 acres near the small farming community of Stithton and began construction on a training center, officially naming it Camp Knox that August after Major General Henry Knox, the Continental Army's Chief of Artillery and the nation's first Secretary of War. By November, the camp's population had already reached over 12,000 — an explosive rate of growth for what had been quiet farmland months earlier.
            </p>
            <p className="guide-p">
              The post's early history was uneven — it was deactivated as a permanent installation in 1922 amid Army-wide budget cuts, and it wasn't until 1931, when the Army selected the site for its new Mechanized Cavalry headquarters, that its future was secured. On January 1, 1932, the post was made permanent and renamed Fort Knox. In 1937, the 1st Cavalry Regiment traded horses for armored vehicles here, and by 1940, Fort Knox was headquarters for the Army's new Armored Force — the beginning of a six-decade identity as the home of U.S. Army armor and cavalry training, through World War II, Korea, and Vietnam, until the Armor School relocated to Fort Benning in 2005. The post's mission shifted rather than diminished, bringing in the Army Human Resources Command, Army Accessions Command, and Army Cadet Command that remain central to Fort Knox today.
            </p>

            <h3 className="guide-h3">The Gold</h3>
            <p className="guide-p">
              The United States Bullion Depository — the fortified vault most people picture when they hear "Fort Knox" — was built in 1936 to securely house a significant portion of the nation's gold reserves amid Depression-era and prewar uncertainty. It's technically adjacent to, but administratively separate from, the military installation itself, operated by the U.S. Mint rather than the Army. During World War II, the vault held more than gold — the original Declaration of Independence, the U.S. Constitution, a copy of the Magna Carta, and the original draft of the Gettysburg Address were all moved there for safekeeping after Pearl Harbor, remaining until after the D-Day landings in 1944.
            </p>

            <h3 className="guide-h3">The Modern Era</h3>
            <p className="guide-p">
              The Kentucky Turnpike — later absorbed into I-65 — connected Elizabethtown directly to Louisville, and the Western Kentucky and Bluegrass Parkways followed, earning Elizabethtown the nickname the Hub City. The 1970s and 1980s brought a deliberate push toward industrial development, including the purchase of roughly 1,600 acres for a regional industrial park that remains part of the local economic base today. Downtown has its own story of decline and revival: the historic State Theatre, which opened in 1942, closed roughly forty years later, and a grassroots restoration effort in the 1990s brought it back to its original Art Deco character. It reopened in 2009 and remains an active downtown venue today.
            </p>

            <div className="callout">
              <p>
                <strong>The honest bottom line:</strong> From three forts built a mile apart for mutual protection, to a downtown theater rebuilt by hand rather than left to disappear, Elizabethtown's history isn't about any single moment — it's about the accumulated weight of two hundred and thirty years of people looking at this specific stretch of Kentucky ground and deciding it was worth staying for.
              </p>
            </div>
          </section>

          {/* TAXES */}
          <section id="taxes" className="chapter">
            <span className="chapter-tag">Chapter 20</span>
            <h2 className="chapter-title">Taxes in Elizabethtown and Hardin County</h2>
            <div className="chapter-divider" />
            <p className="guide-p">
              Taxes are the one category in this guide most likely to shift over time — rates get adjusted, exemption amounts get recalculated, local ordinances get updated. What follows reflects the most current information available as of this writing, sourced directly rather than estimated, but for any major financial decision, verify current rates directly with the Hardin County PVA office, the Hardin County Sheriff's Office, or the City of Elizabethtown Finance Department. The structure below is stable. The specific numbers are the part worth double-checking.
            </p>

            <h3 className="guide-h3">How Property Taxes Actually Work</h3>
            <p className="guide-p">
              Kentucky property is assessed at 100% of fair market value as of January 1 each year by the county Property Valuation Administrator, or PVA. Rather than one single rate, your bill stacks several separate rates set by different taxing authorities — the State of Kentucky, Hardin County, the City of Elizabethtown (if your property is inside city limits), your school district (Hardin County Schools or Elizabethtown Independent), and occasionally smaller special districts like fire protection or library districts. Two homes a few streets apart can carry genuinely different total rates depending on which combination of districts their address falls into.
            </p>
            <p className="guide-p">
              Published effective rates for Hardin County generally fall somewhere between 0.7% and 0.9% of assessed value — below both the Kentucky and national averages either way you look at it. On a home assessed around $220,000 to $250,000, total annual property tax typically lands in the $1,500 to $2,200 range across every layer of the stack. For your exact number on a specific address, the Hardin County PVA office is the most reliable source.
            </p>

            <h3 className="guide-h3">The Payment Calendar</h3>
            <p className="guide-p">
              Rates are typically set over the summer, with bills mailed in the fall, commonly around October 1. Kentucky offers a real incentive to pay early: a 2% discount if paid by November 1. Payments made after that window through year-end are generally due at face value. Unpaid bills face a 5% penalty starting in January, and an additional 10% penalty plus a sheriff's collection fee after January 31 — meaning roughly 20% added on top of the original bill for a bill left unpaid into February. In Hardin County, the City of Elizabethtown has contracted with the Sheriff's Office to handle billing, so city residents receive one consolidated bill covering both city and county portions.
            </p>

            <h3 className="guide-h3">The Homestead Exemption</h3>
            <p className="guide-p">
              If you or a family member is 65 or older, or classified as totally disabled under a qualifying program, Kentucky's homestead exemption reduces your home's assessed value — the number your tax rate is applied to — before your bill is calculated. The specific exemption amount is recalculated by the state every two years for inflation, generally landing somewhere in the $46,000 to $49,000 range. This is not automatic — you have to file an application directly with the Hardin County PVA office, providing documentation of age or disability status.
            </p>

            <h3 className="guide-h3">Kentucky State Income Tax</h3>
            <p className="guide-p">
              Kentucky uses a flat income tax — everyone pays the same percentage regardless of income level, no brackets to climb through. The state has been on a deliberate, legislated path of reducing this rate over recent years through an automatic trigger tied to state revenue thresholds, with further reductions explicitly signaled as a long-term policy goal. Regardless of the specific current rate, several exemptions apply: Social Security benefits are completely exempt at every income level, Kentucky state and local government pensions are fully exempt, and — directly relevant given Fort Knox's presence — active-duty military pay is fully exempt from Kentucky state income tax.
            </p>

            <h3 className="guide-h3">The Local Occupational Tax</h3>
            <p className="guide-p">
              This is the detail that catches the most new residents by surprise. The City of Elizabethtown levies its own occupational license tax on wages earned within city limits — a flat percentage applied to both residents and non-residents working inside the city, meaning it can apply to you even if you live outside Elizabethtown but work at a job located within it. This rate was increased by city council action effective January 1, 2024, as part of a broader budget decision tied to funding growth and services — a good example of why local rates are worth verifying rather than assuming. Hardin County's fiscal court separately imposes its own occupational tax specifically in the unincorporated areas of the county, outside Elizabethtown, Radcliff, and Vine Grove's city limits. If you're comparing take-home pay to wherever you're relocating from, factor in this local layer specifically — it's easy to miss if you're only looking at the state's headline rate.
            </p>

            <h3 className="guide-h3">Sales Tax and Transfer Tax</h3>
            <p className="guide-p">
              Kentucky charges a single, uniform 6% sales tax statewide, and state law does not allow counties or cities to add their own local sales tax on top of it — unlike many states where combined local and state sales tax can push into double digits. Groceries intended for home consumption, and prescription drugs, are exempt entirely. When you buy or sell property, Kentucky's real estate transfer tax is set at $0.50 per $500 of the property's value — about one-tenth of one percent, or roughly $250 on a $250,000 home — typically paid by the seller, though this can be negotiated as part of the purchase agreement.
            </p>

            <h3 className="guide-h3">Estate and Inheritance Tax</h3>
            <p className="guide-p">
              Kentucky has no state estate tax. It does maintain an inheritance tax, but its reach is genuinely narrow — immediate family members, including children, spouses, and siblings, are fully exempt. For the overwhelming majority of typical family situations, this tax simply doesn't come into play.
            </p>

            <div className="callout">
              <p>
                <strong>The honest bottom line:</strong> property taxes here are genuinely favorable compared to most of the country, sales tax is simple and predictable, and the local occupational tax is the detail most newcomers don't expect and should specifically account for when comparing take-home pay to wherever they're coming from.
              </p>
            </div>
          </section>

        </article>
      </div>

      {/* Mobile TOC toggle */}
      <button
        className="mobile-toc-toggle"
        onClick={() => setTocOpen(!tocOpen)}
        aria-expanded={tocOpen}
        aria-label="Toggle table of contents"
      >
        {tocOpen ? "✕ Close" : "☰ Contents"}
      </button>

      <div className={`mobile-toc-drawer${tocOpen ? " open" : ""}`} aria-hidden={!tocOpen}>
        <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem" }}>Contents</div>
        {chapters.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              display: "block", width: "100%", textAlign: "left",
              background: "none", border: "none", cursor: "pointer",
              padding: "0.6rem 0", fontSize: "0.85rem",
              color: activeId === id ? "var(--blue)" : "var(--muted)",
              borderBottom: "1px solid var(--border)",
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </main>
  );
}
