"use client";
import { useState } from "react";

const modules = [
  { num: "01", title: "Is Elizabethtown Right for Real Estate Investing?", lessons: 4, desc: "Why Fort Knox creates unusually stable rental demand, the investor case for Hardin County price points, single family vs. multi-family near Fort Knox, and what cap rates actually look like in the Elizabethtown rental market in 2026." },
  { num: "02", title: "Analyzing a Deal in Hardin County", lessons: 5, desc: "How to calculate cash flow on an Elizabethtown rental, cap rate explained for this market, cash-on-cash return as the investor's real performance metric, the 1 percent rule, and how to estimate rental income for any Hardin County property." },
  { num: "03", title: "Financing Your Investment Property", lessons: 4, desc: "Conventional investment property loans and qualification requirements, how to use a VA loan to buy a multi-unit property near Fort Knox, DSCR loans based on rental income rather than your income, and the cash vs. leveraged buying return comparison." },
  { num: "04", title: "The Fort Knox Rental Market", lessons: 4, desc: "Why military tenants are among the most reliable renters available, the PCS clause and why you should always include it, how Fort Knox rotation affects your vacancy rate, and how to set rent in the Elizabethtown and Radcliff markets." },
  { num: "05", title: "Property Management and Operations", lessons: 4, desc: "Self-managing vs. hiring a property manager near Fort Knox, tenant screening for Elizabethtown rentals, first-year maintenance budgeting, and Kentucky landlord-tenant law every investor must know." },
  { num: "06", title: "Building a Portfolio Across Duty Stations", lessons: 4, desc: "How military investors use VA loans at each duty station to build portfolios, the 1031 exchange for deferring taxes when you sell in Kentucky, when to sell vs. hold your Elizabethtown property, and your 10-year portfolio roadmap." }
];
const audiences = [
  { title: "First-Time Investors", desc: "Ready to buy your first rental property? This course walks you through deal analysis, financing, and management from the very beginning." },
  { title: "Military Investors", desc: "Using your VA loan at Fort Knox and want to turn it into a long-term rental when you PCS? Module 3 and Module 6 cover this strategy in depth." },
  { title: "Out-of-State Investors", desc: "Considering Elizabethtown from another market? Learn why Fort Knox creates unusually stable rental returns that other markets cannot match." },
  { title: "Accidental Landlords", desc: "Keeping your home as a rental when you PCS or move? Module 5 covers everything you need to manage it successfully from your next location." }
];
const faqs = [
  { q: "Why is Elizabethtown a good real estate investment market?", a: "Fort Knox creates consistent year-round rental demand from military families whose income is verified by the Department of Defense and who have institutional accountability for their lease obligations. Home prices in Hardin County are below the national median, which produces better cash-on-cash returns than higher-priced markets. Module 1 covers the full investment case." },
  { q: "What does a typical rental property cash flow in Elizabethtown?", a: "It depends heavily on purchase price, financing structure, and property condition. A $220,000 single family home in Radcliff renting for $1,350 per month with 20 percent down conventional financing typically produces modest positive cash flow after PITI, vacancy allowance, and maintenance reserve. Module 2 walks through the exact calculation with current market numbers." },
  { q: "Can I use a VA loan to buy an investment property?", a: "Not directly — VA loans require the borrower to occupy the property as a primary residence. However, a 2 to 4 unit property qualifies for VA financing if you live in one unit. You can also keep a prior VA-financed home as a rental when you PCS and use remaining entitlement for a new purchase. Module 3 covers both strategies." },
  { q: "What is a DSCR loan and who is it for?", a: "A Debt Service Coverage Ratio loan qualifies based on the rental income the property generates rather than your personal income. This is useful for investors who are self-employed, retired, or who have used up their conventional loan capacity with prior purchases. Module 3 explains DSCR loans and when they make sense." },
  { q: "What is the PCS clause and why should I include it?", a: "The PCS clause is a lease provision that allows military tenants to break their lease without penalty if they receive deployment or PCS orders. Including it makes your property more attractive to military tenants — who are your most reliable tenant pool in the Fort Knox market — because it removes a significant risk they face when signing a long-term lease." },
  { q: "Should I self-manage or hire a property manager?", a: "Self-management saves the typical 8 to 10 percent management fee but requires local availability for maintenance calls and tenant issues. If you are managing from another duty station, a local property manager is almost always worth the cost. Module 5 covers what to look for in a Fort Knox area property manager." },
  { q: "What does Kentucky landlord-tenant law say about security deposits?", a: "Kentucky requires security deposits to be held in a separate account and returned within 30 days of lease termination with an itemized statement of any deductions. Failure to comply can result in forfeiture of the right to retain any portion. Module 5 covers Kentucky landlord-tenant law essentials every investor must know." },
  { q: "What is a 1031 exchange and can I use it in Kentucky?", a: "A 1031 exchange allows you to sell an investment property and defer capital gains taxes by rolling the proceeds into a like-kind replacement property within a specific timeline. Kentucky follows federal 1031 rules. Module 6 explains when a 1031 exchange makes sense and what the requirements are." }
];

function ShareButton() {
  const [copied, setCopied] = useState(false);
  const url = "https://rhomanjames.com/investor-course";
  const text = "Kentucky Real Estate Investor Course — free, self-paced, and built specifically for Kentucky.";
  const share = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: "Kentucky Real Estate Investor Course", text, url }); } catch {}
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };
  return (
    <button onClick={share} style={{ display: "flex", alignItems: "center", gap: "0.6rem", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "16px", color: "var(--blue)", cursor: "pointer", padding: "0.75rem 1.5rem", fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", transition: "all 0.2s" }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
      {copied ? "Link Copied!" : "Share This Course"}
    </button>
  );
}

export default function CourseLandingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main>
      <section style={{ paddingTop: "8rem", paddingBottom: "5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "var(--bg-soft)", position: "relative", textAlign: "center" }}>
                <div aria-hidden="true" style={{ width: 1, height: "3rem", background: "var(--blue)", margin: "0 auto 2rem" }} />
        <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem" }}>100% Free · Self-Paced · Built for Kentucky · Updated 2026</p>
        <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.1, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The Kentucky<br /><em style="font-style:italic;color:var(--blue)">Real Estate Investor Course</em>` }} />
        <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.85, maxWidth: "42rem", margin: "0 auto 1.25rem" }}>How to analyze, finance, and manage rental properties in Elizabethtown and Hardin County, KY — from your first investment property to a multi-property portfolio. Six modules covering deal analysis, Fort Knox rental market dynamics, financing options, property management, and long-term portfolio strategy. Completely free.</p>
        <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: "38rem", margin: "0 auto 2.5rem" }}>The Elizabethtown rental market has a structural advantage that most markets do not — Fort Knox PCS rotation creates consistent, year-round rental demand from military tenants whose income is verified by the Department of Defense. This course explains how to find, analyze, finance, and manage investment properties in this market, and how military investors can use their VA loan benefit at each duty station to build a portfolio that generates income for decades.</p>
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {[{ num: "6", label: "Modules" },
          { num: "25", label: "Lessons" },
          { num: "Free", label: "Always" },
          { num: "KY", label: "Specific" },
          { num: "2026", label: "Updated" }].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "2.2rem", fontWeight: 700, color: "var(--blue)", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", marginTop: "0.25rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2.5rem" }}>
          <ShareButton />
        </div>
        <div style={{ maxWidth: 480, margin: "0 auto", background: "white", border: "1px solid var(--border)", borderRadius: "16px", padding: "2.5rem" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.5rem" }}>Start Learning Free</p>
          <p style={{ fontSize: "0.82rem", color: "var(--muted)", marginBottom: "1.5rem", lineHeight: 1.6 }}>Enter your name and email to unlock all modules instantly. No waiting. No approval.</p>
          <form onSubmit={async (e) => { e.preventDefault(); const form = e.currentTarget; const data = new FormData(form); try { await fetch("https://formspree.io/f/mykqjbjw", { method: "POST", body: data, headers: { Accept: "application/json" } }); } catch(err) {} window.location.href = "/investor-course/watch"; }} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input type="hidden" name="_subject" value="New Investor Course Sign-Up" />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="name" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>Your Name</label>
              <input className="form-input" type="text" id="name" name="name" required placeholder="Jane Smith" autoComplete="name" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="email" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>Email Address</label>
              <input className="form-input" type="email" id="email" name="email" required placeholder="jane@example.com" autoComplete="email" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="phone" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>Phone Number <span style={{ fontWeight: 700, fontSize: "0.6rem" }}>(optional)</span></label>
              <input className="form-input" type="tel" id="phone" name="phone" placeholder="(502) 000-0000" autoComplete="tel" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="properties_owned" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>How many investment properties do you currently own?</label>
              <select className="form-input" id="properties_owned" name="properties_owned" style={{ appearance: "none" }}>
                <option value="">Select one</option>
                <option>None — this would be my first</option>
                <option>1 to 2</option>
                <option>3 to 5</option>
                <option>5 or more</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="strategy" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>Investment strategy</label>
              <select className="form-input" id="strategy" name="strategy" style={{ appearance: "none" }}>
                <option value="">Select one</option>
                <option>Buy and hold for rental income</option>
                <option>Fix and flip</option>
                <option>Both</option>
                <option>Still figuring it out</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="price_range" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>Target purchase price range</label>
              <select className="form-input" id="price_range" name="price_range" style={{ appearance: "none" }}>
                <option value="">Select one</option>
                <option>Under $150,000</option>
                <option>$150,000 to $225,000</option>
                <option>$225,000 to $350,000</option>
                <option>Over $350,000</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="financing" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>How are you planning to finance?</label>
              <select className="form-input" id="financing" name="financing" style={{ appearance: "none" }}>
                <option value="">Select one</option>
                <option>Conventional investment loan</option>
                <option>VA loan (multi-unit)</option>
                <option>DSCR loan</option>
                <option>Cash</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <button type="submit" className="btn-primary" style={{ cursor: "pointer", border: "none", marginTop: "0.5rem", fontSize: "0.78rem", letterSpacing: "0.2em" }}>Unlock All Lessons Free</button>
            <p style={{ fontSize: "0.72rem", color: "var(--muted2)", margin: 0, lineHeight: 1.6, textAlign: "center" }}>No spam. No sales pressure. Unsubscribe anytime.</p>
          </form>
        </div>
      </section>

      <section style={{ background: "var(--bg-soft)", padding: "5rem 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem", textAlign: "center" }}>Why This Course Exists</p>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--text)", marginBottom: "2rem", textAlign: "center" }}>Built for this market, not a generic template</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[{ title: "The Fort Knox Rental Advantage", body: "Most markets require investors to manage demand uncertainty. Fort Knox PCS rotation creates year-round rental demand that does not fluctuate with the local economy. Module 4 explains this structural advantage in depth and how to position your property to capture it." },
      { title: "Deal Analysis Built In", body: "Module 2 gives you the exact formulas for cash flow, cap rate, cash-on-cash return, and gross rent multiplier — with Elizabethtown-specific benchmarks so you know what a good deal looks like in this specific market, not a national average that does not apply here." },
      { title: "VA Loan for Multi-Unit Properties", body: "Most people do not know you can use a VA loan to purchase a 2 to 4 unit property if you live in one unit. Module 3 explains exactly how this works — a Fort Knox service member can buy a duplex with zero down, live in one unit, rent the other, and use the rental income to qualify for the loan." },
      { title: "Kentucky Landlord Law", body: "Kentucky has specific landlord-tenant law that affects security deposits, entry notice requirements, eviction procedures, and lease terms. Module 5 covers what every Elizabethtown investor must know before they rent to their first tenant." }].map((item) => (
              <div key={item.title} style={{ padding: "1.75rem", background: "white", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "0 1px 2px rgba(11,15,25,0.03)" }}>
                <div style={{ width: 24, height: 1, background: "var(--blue)", marginBottom: "1rem" }} />
                <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.15rem", color: "var(--text)", marginBottom: "0.75rem", fontWeight: 400 }}>{item.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem", textAlign: "center" }}>Course Curriculum</p>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "var(--text)", marginBottom: "0.75rem", textAlign: "center" }}>{modules.length} modules. Everything you need.</h2>
          <p style={{ fontSize: "0.9rem", color: "var(--muted)", textAlign: "center", maxWidth: "40rem", margin: "0 auto 3rem" }}>Each lesson is written text you can read at your own pace. Mark lessons complete as you go and track your progress through the full course.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {modules.map((m) => (
              <div key={m.num} className="service-card" style={{ padding: "2rem" }}>
                <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "3rem", fontWeight: 700, color: "var(--border)", lineHeight: 1, marginBottom: "0.75rem" }} aria-hidden="true">{m.num}</div>
                <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.15rem", color: "var(--text)", marginBottom: "0.6rem", fontWeight: 400 }}>{m.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "0.75rem" }}>{m.desc}</p>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--blue)" }}>{m.lessons} lessons</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-soft)", padding: "6rem 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem", textAlign: "center" }}>Who This Course Is For</p>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "var(--text)", marginBottom: "2.5rem", textAlign: "center" }}>Built for you</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {audiences.map((item) => (
              <div key={item.title} style={{ padding: "1.75rem", background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "0 1px 2px rgba(11,15,25,0.03)" }}>
                <div style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.6rem" }}>{item.title}</div>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-soft)", padding: "5rem 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem" }}>Free Tools Alongside This Course</p>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "var(--text)", marginBottom: "2rem" }}>Run your numbers while you learn</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
            {[{ href: "/tools/investment-roi", label: "Investment ROI Calculator" },
            { href: "/tools/mortgage-calculator", label: "Mortgage Calculator" },
            { href: "/tools/affordability-calculator", label: "Affordability Calculator" },
            { href: "/tools/rent-vs-buy", label: "Rent vs. Buy Calculator" },
            { href: "/tools/net-proceeds", label: "Net Proceeds Calculator" },
            { href: "/tools/va-loan-calculator", label: "VA Loan Calculator" }].map((tool) => (
              <a key={tool.href} href={tool.href} style={{ padding: "1rem", background: "white", border: "1px solid var(--border)", borderRadius: "16px", fontSize: "0.75rem", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", display: "block" }}>{tool.label}</a>
            ))}
          </div>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[{ href: "/fort-knox-course", label: "Fort Knox PCS Bootcamp" },
            { href: "/course", label: "Kentucky Home Buyers Course" },
            { href: "/neighborhoods/radcliff", label: "Radcliff Neighborhood Guide" },
            { href: "/neighborhoods/elizabethtown", label: "Elizabethtown Neighborhood Guide" }].map((r) => (
              <a key={r.href} href={r.href} style={{ fontSize: "0.75rem", color: "var(--blue)", textDecoration: "none", letterSpacing: "0.15em", textTransform: "uppercase" }}>{r.label} →</a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem", textAlign: "center" }}>Frequently Asked Questions</p>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "var(--text)", marginBottom: "3rem", textAlign: "center" }}>Everything you want to know before you start</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: "16px", overflow: "hidden" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 1.5rem", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}>
                  <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.05rem", color: "var(--text)", fontWeight: 400, lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{ color: "var(--blue)", fontSize: "1.25rem", flexShrink: 0, display: "inline-block", transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 1.5rem 1.25rem" }}>
                    <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.85, margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-soft)", padding: "6rem 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div aria-hidden="true" style={{ width: 1, height: "3rem", background: "var(--blue)", margin: "0 auto 2rem" }} />
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem" }}>About Your Instructor</p>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1.5rem" }}>Rhoman James</h2>
          <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.9, marginBottom: "1.25rem" }}>Rhoman James is a real estate professional based in Elizabethtown, Kentucky, serving buyers, sellers, and investors throughout Hardin County. The Kentucky Real Estate Investor Course was built for the investors who recognize that Fort Knox creates a rental market unlike most others — consistent demand, reliable tenants, and price points that produce real cash flow. Whether you are a military family using your VA loan strategically across duty stations or an outside investor looking for a stable market, this course gives you the Hardin County-specific knowledge to make informed decisions.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+18595366009" className="btn-primary" style={{ fontSize: "0.75rem" }}>Call (859) 536-6009</a>
            <a href="mailto:RhomanMJames@gmail.com" className="btn-outline" style={{ fontSize: "0.75rem" }}>Send an Email</a>
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: "6rem 1.5rem", textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1rem", lineHeight: 1.2 }} dangerouslySetInnerHTML={{ __html: `Ready to build a<br /><em style="font-style:italic;color:var(--blue)">Fort Knox rental portfolio?</em>` }} />
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: "2rem" }}>Free. Self-paced. Built specifically for Kentucky. Start in the next two minutes.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="btn-primary" style={{ fontSize: "0.78rem", letterSpacing: "0.2em" }}>Enroll Free — Start Now</a>
            <ShareButton />
          </div>
        </div>
      </section>
    </main>
  );
}
