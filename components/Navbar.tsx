"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const serviceLinks = [
  { href: "/services/buying-a-home",        label: "Buying a Home" },
  { href: "/services/selling-your-home",    label: "Selling Your Home" },
  { href: "/services/market-analysis",      label: "Market Analysis" },
  { href: "/services/first-time-buyers",    label: "First-Time Buyers" },
  { href: "/services/relocation",           label: "Relocation" },
  { href: "/services/investment-properties",label: "Investment Properties" },
];

const neighborhoodLinks = [
  { href: "/neighborhoods/elizabethtown", label: "Elizabethtown" },
  { href: "/neighborhoods/radcliff",      label: "Radcliff" },
  { href: "/neighborhoods/vine-grove",    label: "Vine Grove" },
  { href: "/neighborhoods/rineyville",    label: "Rineyville" },
  { href: "/neighborhoods/hodgenville",   label: "Hodgenville" },
  { href: "/neighborhoods/fort-knox",     label: "Fort Knox Area" },
];

const toolLinks = [
  { href: "/tools/mortgage-calculator",    label: "Mortgage Calculator" },
  { href: "/tools/affordability-calculator",label: "Affordability Calculator" },
  { href: "/tools/va-loan-calculator",     label: "VA Loan Calculator" },
  { href: "/tools/rent-vs-buy",            label: "Rent vs. Buy" },
  { href: "/tools/closing-cost-estimator", label: "Closing Cost Estimator" },
  { href: "/tools/net-proceeds",           label: "Home Sale Net Proceeds" },
  { href: "/tools/down-payment-planner",   label: "Down Payment Planner" },
  { href: "/tools/investment-roi",         label: "Investment ROI" },
  { href: "/tools/property-tax-estimator", label: "Property Tax Estimator" },
  { href: "/tools/khc-estimator",          label: "KHC DPA Estimator" },
];

type DropKey = "services" | "neighborhoods" | "tools" | null;

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [openDrop, setOpenDrop]   = useState<DropKey>(null);
  const pathname                   = usePathname();
  const isHome                     = pathname === "/";
  const navRef                     = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDrop(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const sectionHref = (anchor: string) => (isHome ? anchor : `/${anchor}`);
  const toggle = (key: DropKey) => setOpenDrop(openDrop === key ? null : key);

  return (
    <>
      <style>{`
        .nav-wrap {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 1.1rem 2rem;
          display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid rgba(184,151,106,0.15);
          backdrop-filter: blur(12px); transition: background 0.3s;
        }
        .nav-logo-link {
          text-decoration: none;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.25rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--gold); transition: opacity 0.2s; flex-shrink: 0;
        }
        .nav-logo-link:hover { opacity: 0.8; }
        .nav-logo-link span { font-weight: 300; color: var(--off-white); }
        .nav-desktop { display: flex; gap: 1.5rem; list-style: none; align-items: center; }
        .nav-mobile-btn { display: none; background: none; border: none; cursor: pointer; color: var(--gold); font-size: 1.5rem; line-height: 1; }
        .drop-wrapper { position: relative; }
        .drop-btn {
          background: none; border: none; cursor: pointer;
          display: flex; align-items: center; gap: 0.25rem;
          font-family: 'Jost', system-ui, sans-serif;
          font-size: 0.72rem; font-weight: 300;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--muted); transition: color 0.25s; padding: 0;
        }
        .drop-btn:hover, .drop-btn.open { color: var(--gold); }
        .drop-chevron { font-size: 0.45rem; transition: transform 0.2s; display: inline-block; }
        .drop-chevron.open { transform: rotate(180deg); }
        .drop-menu {
          position: absolute; top: calc(100% + 1.25rem); left: 50%;
          transform: translateX(-50%);
          background: var(--dark2);
          border: 1px solid rgba(184,151,106,0.2);
          min-width: 200px; padding: 0.6rem 0;
          display: flex; flex-direction: column;
          box-shadow: 0 20px 40px rgba(0,0,0,0.6); z-index: 200;
        }
        .drop-menu-header {
          padding: 0.4rem 1.25rem 0.55rem;
          font-size: 0.58rem; letter-spacing: 0.28em;
          text-transform: uppercase; color: var(--gold);
          border-bottom: 1px solid rgba(184,151,106,0.12); margin-bottom: 0.2rem;
        }
        .drop-menu a {
          padding: 0.5rem 1.25rem;
          font-size: 0.72rem; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--muted);
          text-decoration: none; transition: color 0.2s, background 0.2s; white-space: nowrap;
        }
        .drop-menu a:hover { color: var(--gold); background: rgba(184,151,106,0.05); }
        .drop-divider { border-top: 1px solid rgba(184,151,106,0.12); margin: 0.2rem 0; }
        .drop-menu .view-all { color: var(--gold); font-size: 0.65rem; }
        .nav-mobile-dropdown {
          position: absolute; top: 100%; left: 0; right: 0;
          background: var(--dark2);
          border-bottom: 1px solid rgba(184,151,106,0.2);
          padding: 1.25rem 1.75rem 1.75rem;
          display: flex; flex-direction: column; gap: 0.8rem;
          max-height: 80vh; overflow-y: auto;
        }
        .mobile-section-label {
          font-size: 0.56rem; letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--gold); margin-top: 0.5rem; padding-top: 0.75rem;
          border-top: 1px solid rgba(184,151,106,0.12);
        }
        .mobile-sub-link {
          font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--muted); text-decoration: none; padding-left: 0.75rem;
        }
        @media (max-width: 1100px) {
          .nav-wrap { padding: 1rem 1.5rem; }
          .nav-desktop { display: none; }
          .nav-mobile-btn { display: block; }
          .nav-cta-desktop { display: none; }
        }
      `}</style>

      <nav ref={navRef} className="nav-wrap" style={{ background: scrolled ? "rgba(13,13,13,0.97)" : "rgba(13,13,13,0.92)" }}>
        <a href="/" className="nav-logo-link">Rhoman <span>James</span></a>

        <ul className="nav-desktop">
          <li><a href={sectionHref("#about")} className="nav-link" style={{ fontSize: "0.72rem" }}>About</a></li>

          {/* Services */}
          <li className="drop-wrapper">
            <button className={`drop-btn${openDrop === "services" ? " open" : ""}`} onClick={() => toggle("services")} aria-expanded={openDrop === "services"} aria-haspopup="true">
              Services <span className={`drop-chevron${openDrop === "services" ? " open" : ""}`}>▼</span>
            </button>
            {openDrop === "services" && (
              <div className="drop-menu" role="menu">
                <div className="drop-menu-header">What I Offer</div>
                {serviceLinks.map(l => <a key={l.href} href={l.href} role="menuitem" onClick={() => setOpenDrop(null)}>{l.label}</a>)}
                <div className="drop-divider" /><a href="/services" role="menuitem" className="view-all" onClick={() => setOpenDrop(null)}>All Services →</a>
              </div>
            )}
          </li>

          {/* Neighborhoods */}
          <li className="drop-wrapper">
            <button className={`drop-btn${openDrop === "neighborhoods" ? " open" : ""}`} onClick={() => toggle("neighborhoods")} aria-expanded={openDrop === "neighborhoods"} aria-haspopup="true">
              Neighborhoods <span className={`drop-chevron${openDrop === "neighborhoods" ? " open" : ""}`}>▼</span>
            </button>
            {openDrop === "neighborhoods" && (
              <div className="drop-menu" role="menu">
                <div className="drop-menu-header">Communities</div>
                {neighborhoodLinks.map(l => <a key={l.href} href={l.href} role="menuitem" onClick={() => setOpenDrop(null)}>{l.label}</a>)}
                <div className="drop-divider" /><a href="/neighborhoods" role="menuitem" className="view-all" onClick={() => setOpenDrop(null)}>All Guides →</a>
              </div>
            )}
          </li>

          {/* Tools */}
          <li className="drop-wrapper">
            <button className={`drop-btn${openDrop === "tools" ? " open" : ""}`} onClick={() => toggle("tools")} aria-expanded={openDrop === "tools"} aria-haspopup="true">
              Tools <span className={`drop-chevron${openDrop === "tools" ? " open" : ""}`}>▼</span>
            </button>
            {openDrop === "tools" && (
              <div className="drop-menu" role="menu" style={{ minWidth: 230 }}>
                <div className="drop-menu-header">Free Calculators</div>
                {toolLinks.map(l => <a key={l.href} href={l.href} role="menuitem" onClick={() => setOpenDrop(null)}>{l.label}</a>)}
                <div className="drop-divider" /><a href="/tools" role="menuitem" className="view-all" onClick={() => setOpenDrop(null)}>All Tools →</a>
              </div>
            )}
          </li>

          <li><a href="/moving-to-elizabethtown-ky" className="nav-link" style={{ fontSize: "0.72rem" }}>Moving Guide</a></li>
          <li><a href="/course" className="nav-link" style={{ fontSize: "0.72rem" }}>Free Course</a></li>
          <li><a href="/faq" className="nav-link" style={{ fontSize: "0.72rem" }}>FAQ</a></li>
          <li><a href={sectionHref("#contact")} className="nav-link" style={{ fontSize: "0.72rem" }}>Contact</a></li>
        </ul>

        <a href={sectionHref("#contact")} className="btn-primary nav-cta-desktop" style={{ padding: "0.55rem 1.25rem", fontSize: "0.68rem" }}>
          Free Consultation
        </a>

        <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? "✕" : "☰"}
        </button>

        {menuOpen && (
          <div className="nav-mobile-dropdown">
            <a href={sectionHref("#about")} className="nav-link" onClick={() => setMenuOpen(false)}>About</a>

            <div className="mobile-section-label">Services</div>
            {serviceLinks.map(l => <a key={l.href} href={l.href} className="mobile-sub-link" onClick={() => setMenuOpen(false)}>{l.label}</a>)}
            <a href="/services" className="mobile-sub-link" onClick={() => setMenuOpen(false)} style={{ color: "var(--gold)" }}>All Services →</a>

            <div className="mobile-section-label">Neighborhoods</div>
            {neighborhoodLinks.map(l => <a key={l.href} href={l.href} className="mobile-sub-link" onClick={() => setMenuOpen(false)}>{l.label}</a>)}
            <a href="/neighborhoods" className="mobile-sub-link" onClick={() => setMenuOpen(false)} style={{ color: "var(--gold)" }}>All Guides →</a>

            <div className="mobile-section-label">Free Tools</div>
            {toolLinks.map(l => <a key={l.href} href={l.href} className="mobile-sub-link" onClick={() => setMenuOpen(false)}>{l.label}</a>)}
            <a href="/tools" className="mobile-sub-link" onClick={() => setMenuOpen(false)} style={{ color: "var(--gold)" }}>All Tools →</a>

            <a href="/moving-to-elizabethtown-ky" className="nav-link" onClick={() => setMenuOpen(false)} style={{ marginTop: "0.5rem" }}>Moving Guide</a>
            <a href="/faq" className="nav-link" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a href={sectionHref("#contact")} className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href={sectionHref("#contact")} className="btn-primary" style={{ padding: "0.75rem 1.5rem", fontSize: "0.75rem", textAlign: "center", marginTop: "0.25rem" }} onClick={() => setMenuOpen(false)}>
              Free Consultation
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
