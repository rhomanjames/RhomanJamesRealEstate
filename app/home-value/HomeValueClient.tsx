"use client";
import { useState } from "react";

const faqs = [
  { q: "What is my Elizabethtown home worth?", a: "Your home's value depends on recent comparable sales in your specific neighborhood, your home's size, condition, age, lot, and current inventory levels in Hardin County. Online estimates from Zillow or Redfin are a starting point, but they do not account for your home's specific condition, recent updates, or the nuances of your street. A local comparative market analysis using actual recent sales is the most accurate way to know what your home would sell for today." },
  { q: "What is the difference between a home appraisal and a home valuation?", a: "A home appraisal is performed by a licensed appraiser — typically required by a lender during a purchase or refinance. It costs $400 to $600 and takes 1 to 2 weeks. A comparative market analysis (CMA) is prepared by a real estate professional using recent comparable sales to estimate current market value. A CMA is free, faster, and what most sellers use to determine their list price. Both look at the same data but serve different purposes." },
  { q: "How long does it take to sell a home in Elizabethtown KY?", a: "Well-priced, well-prepared homes in the Elizabethtown market typically go under contract within 1 to 3 weeks. Homes that are overpriced or need significant preparation can sit for 30 to 90 days or longer. The Elizabethtown market benefits from consistent Fort Knox PCS demand that keeps buyer activity steady year-round — unlike many comparable markets that slow significantly in winter." },
  { q: "What are home values doing in Hardin County right now?", a: "The Hardin County market has seen consistent demand driven by Fort Knox rotation, population growth in the Elizabethtown area, and relative affordability compared to Louisville and Lexington. For a current assessment specific to your property's address, neighborhood, and condition, request a free home value report." },
  { q: "How much does it cost to sell a home in Kentucky?", a: "Total selling costs in Kentucky typically run 7 to 9 percent of the sale price. That includes agent commissions (5 to 6 percent), Kentucky state transfer tax ($0.50 per $500 of value), closing attorney fees ($400 to $700), title insurance ($600 to $1,200), and prorated property taxes. Use the free Net Proceeds Calculator at rhomanjames.com/tools/net-proceeds to estimate your specific take-home number before you decide anything." },
  { q: "Should I sell my house now or wait?", a: "That depends on your equity position, your timeline, and what the market is doing in your specific neighborhood. The Elizabethtown market's Fort Knox-driven demand makes it more stable year-round than most markets — meaning the urgency to time the market is lower here than in many places. A free consultation will give you a clearer picture for your specific situation." },
  { q: "Do I need a listing professional to sell my house in Elizabethtown?", a: "You are not legally required to use one. Most sellers in Elizabethtown do, because MLS access, pricing strategy, professional photography, showing management, offer negotiation, and transaction coordination are significant work that most sellers are not equipped to handle independently. The commission is paid from your proceeds at closing — not out of pocket upfront." },
  { q: "What should I do to prepare my home before selling?", a: "The highest-return preparation investments in the Elizabethtown market are fresh interior paint, carpet cleaning or replacement, landscaping and curb appeal, and a thorough deep clean. Major renovations — new kitchens, bathroom overhauls — rarely recover their full cost in resale. The free Kentucky Home Sellers Course at rhomanjames.com/sellers-course covers preparation strategy in full." },
  { q: "What is a comparative market analysis and how is it different from an online estimate?", a: "A CMA is prepared by a local professional who physically reviews recent sales of comparable homes in your specific neighborhood and adjusts for differences in size, condition, age, and features. Online estimates like Zillow's Zestimate are calculated by algorithms that cannot see inside your home, do not know about recent updates, and often lag actual market conditions by 30 to 60 days. In the Elizabethtown market, Zestimates can be off by $20,000 to $40,000 or more in either direction." },
  { q: "Can I sell my home if I still have a mortgage?", a: "Yes. The mortgage is paid off from your sale proceeds at closing — you do not need to pay it off before listing. If your home is worth more than your remaining mortgage balance, you will receive the difference as net proceeds. Use the free Net Proceeds Calculator to estimate your take-home number based on your current mortgage balance and estimated sale price." },
];

const communities = [
  { name: "Elizabethtown", range: "$190K – $380K", desc: "County seat with the most amenities. Helmwood Hills and Freeman Lake area command premium prices. Strong buyer demand year-round.", href: "/neighborhoods/elizabethtown" },
  { name: "Radcliff", range: "$155K – $290K", desc: "Adjacent to the Chaffee Gate — highest military buyer density in Hardin County. Strong rental demand from Fort Knox families.", href: "/neighborhoods/radcliff" },
  { name: "Vine Grove", range: "$160K – $280K", desc: "Small-town character with newer subdivisions. Strong community feel and consistent demand from families who want space.", href: "/neighborhoods/vine-grove" },
  { name: "Rineyville", range: "$170K – $320K", desc: "Rural Hardin County with larger lots. Buyers seeking privacy and acreage drive demand here.", href: "/neighborhoods/rineyville" },
  { name: "Fort Knox Area", range: "$150K – $270K", desc: "Closest to the installation. Highest concentration of military buyers and renters. Fast-moving market.", href: "/neighborhoods/fort-knox" },
  { name: "Hodgenville", range: "$140K – $250K", desc: "LaRue County seat, 20 minutes from Elizabethtown. Growing buyer interest from people priced out of Hardin County.", href: "/neighborhoods/hodgenville" },
];

const mistakes = [
  { title: "Overpricing at Listing", body: "The single most common seller mistake in Elizabethtown. The first two weeks of a listing generate the most attention. An overpriced home loses motivated buyers immediately and develops a stigma that price reductions cannot fully repair." },
  { title: "Skipping Professional Photography", body: "Buyers in 2026 begin their search online. Listing photos are your home's first impression. Homes with professional photography sell faster and for more money — the $200 to $300 investment consistently pays for itself." },
  { title: "Declining VA Loan Offers", body: "Fort Knox drives a significant share of Elizabethtown buyer demand. Reflexively declining VA offers eliminates your largest buyer pool. Most concerns about VA loans are outdated — experienced professionals know how to manage them." },
  { title: "Over-Improving Before Listing", body: "A full kitchen renovation before selling rarely recovers its cost. Fresh paint, carpet, and curb appeal — investments under $5,000 — produce better returns than $30,000 renovation projects that buyers will price at their own preference anyway." },
];

const checklist = [
  { phase: "Before You List", items: ["Pull your mortgage payoff quote from your lender", "Use the Net Proceeds Calculator to estimate your take-home", "Request a free home value report to establish your price range", "Walk every room and note deferred maintenance items", "Get a pre-listing inspection if the home is older or has known issues", "Interview at least two professionals before signing a listing agreement"] },
  { phase: "Preparing the Home", items: ["Deep clean every room including inside appliances and closets", "Apply fresh neutral paint to highest-traffic areas", "Clean or replace carpet in primary living areas", "Address any obvious repairs — broken fixtures, leaking faucets, stuck doors", "Improve curb appeal — fresh mulch, trimmed shrubs, clean walkways", "Declutter aggressively — remove at least 30% of furniture and all personal photos"] },
  { phase: "During the Listing", items: ["Maintain hotel-standard cleanliness for every showing", "Accept every showing request you possibly can", "Leave the home — and take your pets — for every showing", "Review agent feedback after every showing and take it seriously", "Monitor days on market and showing-to-offer conversion weekly", "Be prepared to adjust price if market feedback indicates it"] },
  { phase: "After Accepting an Offer", items: ["Respond to inspection repair requests within the timeline in your contract", "Keep the home in the same condition as when the buyer made the offer", "Do not remove anything that is not specifically excluded in the contract", "Complete all agreed repairs with licensed contractors and save documentation", "Review the settlement statement before closing day — not at the table", "Gather all keys, remotes, manuals, and HOA documents to hand over"] },
];

function Checklist() {
  const [openPhase, setOpenPhase] = useState<number | null>(0);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {checklist.map((phase, i) => (
        <div key={phase.phase} style={{ background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "0 1px 2px rgba(11,15,25,0.03)" }}>
          <button onClick={() => setOpenPhase(openPhase === i ? null : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.1rem 1.5rem", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}>
            <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1rem", color: "var(--text)", fontWeight: 400 }}>{phase.phase}</span>
            <span style={{ color: "var(--blue)", fontSize: "1.1rem", flexShrink: 0, display: "inline-block", transform: openPhase === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
          </button>
          {openPhase === i && (
            <div style={{ padding: "0 1.5rem 1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {phase.items.map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <div style={{ width: 14, height: 14, border: "1px solid var(--border)", borderRadius: "16px", flexShrink: 0, marginTop: 3 }} />
                  <p style={{ fontSize: "0.85rem", color: "var(--muted)", margin: 0, lineHeight: 1.65 }}>{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function HomeValueClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", { method: "POST", body: data, headers: { Accept: "application/json" } });
    } catch {}
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section style={{ paddingTop: "8rem", paddingBottom: "5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "var(--bg-soft)", position: "relative" }}>
                <div style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "5rem", alignItems: "start" }}>

          {/* Left */}
          <div>
            <div aria-hidden="true" style={{ width: 1, height: "2.5rem", background: "var(--blue)", marginBottom: "1.5rem" }} />
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.75rem" }}>Elizabethtown & Hardin County, KY · 2026</p>
            <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.15, marginBottom: "1.5rem" }}>
              What Is Your<br /><em style={{ fontStyle: "italic", color: "var(--blue)" }}>Elizabethtown Home Worth?</em>
            </h1>
            <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
              Online estimates are a starting point — not a selling strategy. Get a free, local comparative market analysis based on actual recent sales in your specific Hardin County neighborhood. Know your number before you make any decisions.
            </p>
            <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.9, marginBottom: "2rem" }}>
              Whether you are ready to sell now, planning for the next 12 months, or simply curious what your home is worth in today's market — a free home value report gives you the information you need without committing to anything.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "2.5rem" }}>
              {[
                "Local Hardin County market knowledge — not a national algorithm",
                "Comparable sales analysis from your specific neighborhood",
                "Honest pricing strategy — not an inflated number to win your listing",
                "Response within 24 hours. Free. No obligation.",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <div style={{ width: 16, height: 16, border: "1px solid var(--blue)", flexShrink: 0, marginTop: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 6, height: 6, background: "var(--blue)" }} />
                  </div>
                  <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            {/* Social proof strip */}
            <div style={{ padding: "1.25rem 1.5rem", background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: "16px", borderLeft: "3px solid var(--blue)" }}>
              <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>
                "The single most common seller mistake in Elizabethtown is pricing based on what they need, not what the market supports. A CMA gives you both — what the market says, and what that means for your specific situation."
              </p>
              <p style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--blue)", margin: "0.75rem 0 0" }}>— Rhoman James, Elizabethtown Real Estate Professional</p>
            </div>
          </div>

          {/* Right — form */}
          <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: "16px", padding: "2.5rem", position: "sticky", top: "6rem" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div style={{ width: 48, height: 48, border: "1px solid var(--blue)", margin: "0 auto 1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none"><path d="M1 8l6 6L19 1" stroke="#B8976A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.4rem", color: "var(--text)", marginBottom: "0.75rem", fontWeight: 700 }}>Request Received</p>
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>I will reach out within 24 hours with your home value report. If you need to connect sooner, call or text directly.</p>
                <a href="tel:+18595366009" className="btn-primary" style={{ fontSize: "0.75rem", display: "inline-block" }}>Call (859) 536-6009</a>
              </div>
            ) : (
              <>
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.5rem" }}>Free Home Value Report</p>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)", marginBottom: "1.75rem", lineHeight: 1.65 }}>Tell me about your property and I will prepare a comparative market analysis based on recent Hardin County sales.</p>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <input type="hidden" name="_subject" value="Free Home Valuation Request — Elizabethtown KY" />
                  {[
                    { id: "name", label: "Your Name", type: "text", placeholder: "Jane Smith", auto: "name", required: true },
                    { id: "email", label: "Email Address", type: "email", placeholder: "jane@example.com", auto: "email", required: true },
                    { id: "phone", label: "Phone Number", type: "tel", placeholder: "(502) 000-0000", auto: "tel", required: false },
                    { id: "address", label: "Property Address", type: "text", placeholder: "123 Main St, Elizabethtown KY", auto: "street-address", required: true },
                  ].map((field) => (
                    <div key={field.id} style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                      <label htmlFor={field.id} style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)" }}>{field.label}</label>
                      <input className="form-input" type={field.type} id={field.id} name={field.id} required={field.required} placeholder={field.placeholder} autoComplete={field.auto} />
                    </div>
                  ))}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    <label htmlFor="timeline" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)" }}>When are you thinking of selling?</label>
                    <select className="form-input" id="timeline" name="timeline" style={{ appearance: "none" }}>
                      <option value="">Select one</option>
                      <option>As soon as possible</option>
                      <option>Within 3 months</option>
                      <option>3 to 6 months</option>
                      <option>6 to 12 months</option>
                      <option>Just curious about my home value</option>
                    </select>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    <label htmlFor="bedrooms" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)" }}>Bedrooms / Bathrooms</label>
                    <input className="form-input" type="text" id="bedrooms" name="bedrooms" placeholder="e.g. 3 bed / 2 bath" />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    <label htmlFor="notes" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)" }}>Anything else I should know? <span style={{ fontWeight: 700, textTransform: "none", letterSpacing: 0 }}>(optional)</span></label>
                    <textarea className="form-input" id="notes" name="notes" placeholder="Recent updates, unique features, your situation..." rows={3} style={{ resize: "vertical" }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ cursor: "pointer", border: "none", marginTop: "0.5rem", fontSize: "0.78rem", letterSpacing: "0.2em" }}>
                    Request My Free Home Value Report
                  </button>
                  <p style={{ fontSize: "0.7rem", color: "var(--muted2)", margin: 0, lineHeight: 1.6, textAlign: "center" }}>No obligation. Response within 24 hours.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Community value ranges */}
      <section style={{ background: "var(--bg-soft)", padding: "5rem 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem", textAlign: "center" }}>Home Values by Community</p>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--text)", marginBottom: "0.75rem", textAlign: "center" }}>
            What homes are selling for across Hardin County
          </h2>
          <p style={{ fontSize: "0.88rem", color: "var(--muted)", textAlign: "center", maxWidth: "42rem", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
            These are general market ranges for 2026 based on publicly available sales data. Your specific home's value depends on size, condition, lot, and recent neighborhood sales. Request a free CMA for your exact address.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {communities.map((c) => (
              <a key={c.name} href={c.href} style={{ padding: "1.75rem", background: "white", border: "1px solid var(--border)", borderRadius: "16px", textDecoration: "none", display: "block", transition: "border-color 0.2s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.2rem", color: "var(--text)", fontWeight: 400, margin: 0 }}>{c.name}</h3>
                  <span style={{ fontSize: "0.68rem", letterSpacing: "0.1em", color: "var(--blue)", whiteSpace: "nowrap", marginLeft: "1rem" }}>{c.range}</span>
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.7, margin: "0 0 0.75rem" }}>{c.desc}</p>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--blue)", margin: 0 }}>Neighborhood Guide →</p>
              </a>
            ))}
          </div>
          <p style={{ fontSize: "0.78rem", color: "var(--muted2)", textAlign: "center", marginTop: "1.5rem", fontStyle: "italic" }}>
            Ranges reflect general 2026 market conditions and vary significantly by property size, condition, and specific location. Request a free CMA for your specific address.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: "white", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem", textAlign: "center" }}>The Process</p>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--text)", marginBottom: "3rem", textAlign: "center" }}>How a home valuation works in Elizabethtown</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {[
              { step: "01", title: "Submit Your Property", body: "Fill out the form with your address and details about your home. The more information you provide, the more accurate the analysis." },
              { step: "02", title: "Comparable Sales Analysis", body: "I pull recent sales of similar homes in your specific Hardin County neighborhood — adjusting for size, condition, age, and features — to determine a supportable market value range." },
              { step: "03", title: "You Receive Your Report", body: "Within 24 hours you receive a written home value report with comparable sales, a price range, and honest guidance on what would maximize your sale price." },
              { step: "04", title: "We Talk — No Pressure", body: "If you have questions or want to discuss next steps, a free call is available. No obligation to list. No sales pressure. The information is yours regardless." },
            ].map((item) => (
              <div key={item.step} style={{ padding: "2rem", background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "0 1px 2px rgba(11,15,25,0.03)" }}>
                <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "2.5rem", fontWeight: 700, color: "var(--border)", lineHeight: 1, marginBottom: "0.75rem" }}>{item.step}</div>
                <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: "0.65rem", fontWeight: 400 }}>{item.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What affects value */}
      <section style={{ background: "var(--bg-soft)", padding: "6rem 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem", textAlign: "center" }}>What Drives Value in This Market</p>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1rem", textAlign: "center" }}>What affects your Hardin County home value</h2>
          <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.85, maxWidth: "46rem", margin: "0 auto 3rem", textAlign: "center" }}>Home values in Elizabethtown and Hardin County are shaped by factors that national algorithms often miss. Understanding them gives you a realistic picture before you decide anything.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {[
              { title: "Location and School Zone", body: "Which school district your property sits in has a meaningful impact on buyer demand and price. Hardin County Schools and Elizabethtown Independent Schools serve different addresses, and buyers with school-aged children specifically filter by district." },
              { title: "Fort Knox Proximity", body: "Homes within a reasonable commute of Fort Knox carry a demand premium due to consistent military buyer and renter traffic. Gate proximity affects how quickly homes sell and at what price. Radcliff and south Elizabethtown benefit most from this dynamic." },
              { title: "Comparable Sales", body: "Your home's value is ultimately determined by what similar homes in your specific neighborhood have sold for in the past 90 days. Square footage, bedroom count, age, condition, and lot size are all adjusted for in a proper comparative market analysis." },
              { title: "Condition and Preparation", body: "A home in excellent move-in condition commands a premium over a comparable home that needs work. Fresh paint, clean carpet, and strong curb appeal are the highest-return preparation investments in the Elizabethtown market before listing." },
              { title: "Days on Market", body: "The longer a home has been listed, the more buyers expect a discount. Homes that sell in their first week rarely sell below list price. This is why correct initial pricing is more valuable than starting high and reducing later." },
              { title: "Current Inventory", body: "When fewer homes are available in your price range and neighborhood, buyers have less choice and move faster. When inventory is high, buyers negotiate harder. Knowing current inventory levels is essential context for any pricing decision." },
            ].map((item) => (
              <div key={item.title} style={{ padding: "1.75rem", background: "white", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "0 1px 2px rgba(11,15,25,0.03)" }}>
                <div style={{ width: 20, height: 1, background: "var(--blue)", marginBottom: "1rem" }} />
                <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: "0.65rem", fontWeight: 400 }}>{item.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common seller mistakes */}
      <section style={{ background: "var(--bg-soft)", padding: "6rem 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem", textAlign: "center" }}>What Costs Sellers Money</p>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1rem", textAlign: "center" }}>The most common seller mistakes in Elizabethtown</h2>
          <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.85, maxWidth: "44rem", margin: "0 auto 3rem", textAlign: "center" }}>These are the avoidable mistakes that show up repeatedly in the Elizabethtown market. Knowing them before you list is worth real money.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {mistakes.map((item) => (
              <div key={item.title} style={{ padding: "2rem", background: "white", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "0 1px 2px rgba(11,15,25,0.03)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <div style={{ width: 20, height: 20, border: "1px solid var(--border)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: "0.7rem", color: "var(--blue)" }}>✕</span>
                  </div>
                  <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.05rem", color: "var(--text)", fontWeight: 400, margin: 0 }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appraisal vs CMA */}
      <section style={{ background: "white", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem", textAlign: "center" }}>Common Question</p>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--text)", marginBottom: "2rem", textAlign: "center" }}>Home appraisal vs. home valuation — what is the difference?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
            {[
              { label: "Home Appraisal", note: "An appraisal tells a lender how much they can safely loan — not necessarily what a motivated buyer will pay in today's market.", items: ["Performed by a licensed appraiser", "Required by lenders for purchases and refinances", "Costs $400 to $600", "Takes 1 to 2 weeks", "Produces a formal written report", "Not used as your list price strategy"] },
              { label: "Comparative Market Analysis", note: "A CMA reflects what the market is actually paying right now — which is what you need to price your home to sell.", items: ["Prepared by a local real estate professional", "Used to determine list price strategy", "Completely free", "Ready within 24 hours", "Based on recent comparable sales", "Reflects current buyer demand and competition"] },
            ].map((col) => (
              <div key={col.label} style={{ padding: "2rem", background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "0 1px 2px rgba(11,15,25,0.03)" }}>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1.25rem" }}>{col.label}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  {col.items.map((item) => (
                    <div key={item} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                      <div style={{ width: 4, height: 4, background: "var(--blue)", borderRadius: "50%", marginTop: 7, flexShrink: 0 }} />
                      <p style={{ fontSize: "0.82rem", color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>{item}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "0.8rem", color: "var(--muted2)", lineHeight: 1.7, fontStyle: "italic", margin: 0, borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>{col.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller checklist */}
      <section style={{ background: "var(--bg-soft)", padding: "6rem 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem", textAlign: "center" }}>Seller Checklist</p>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--text)", marginBottom: "0.75rem", textAlign: "center" }}>Everything to do before, during, and after listing</h2>
          <p style={{ fontSize: "0.88rem", color: "var(--muted)", textAlign: "center", marginBottom: "2.5rem", lineHeight: 1.8 }}>A complete seller checklist for Elizabethtown and Hardin County homeowners. Click each phase to expand.</p>
          <Checklist />
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "white", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem", textAlign: "center" }}>Frequently Asked Questions</p>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "var(--text)", marginBottom: "3rem", textAlign: "center" }}>Selling a home in Elizabethtown KY</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "0 1px 2px rgba(11,15,25,0.03)" }}>
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

      {/* Related resources */}
      <section style={{ background: "var(--bg-soft)", padding: "5rem 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem" }}>Free Resources for Sellers</p>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "var(--text)", marginBottom: "2rem" }}>Everything you need before you decide</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { href: "/sellers-course", label: "Kentucky Home Sellers Course", desc: "Six modules covering preparation, pricing, showings, offers, and closing." },
              { href: "/tools/net-proceeds", label: "Net Proceeds Calculator", desc: "Estimate exactly what you will walk away with after all costs." },
              { href: "/tools/closing-cost-estimator", label: "Closing Cost Estimator", desc: "See every closing cost line item before you commit to anything." },
              { href: "/faq", label: "Home Selling FAQ", desc: "Answers to the most common questions from Elizabethtown sellers." },
            ].map((item) => (
              <a key={item.href} href={item.href} style={{ padding: "1.5rem", background: "white", border: "1px solid var(--border)", borderRadius: "16px", textDecoration: "none", display: "block", textAlign: "left" }}>
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "0.5rem" }}>{item.label}</p>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "white", padding: "6rem 1.5rem", textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1rem", lineHeight: 1.2 }}>
            Ready to find out what your<br /><em style={{ color: "var(--blue)", fontStyle: "italic" }}>Elizabethtown home is worth?</em>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: "2.5rem" }}>Free. Local. Honest. No obligation, no pressure, and a response within 24 hours.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="btn-primary" style={{ fontSize: "0.78rem", letterSpacing: "0.2em" }}>Get My Free Home Value Report</a>
            <a href="tel:+18595366009" className="btn-outline" style={{ fontSize: "0.78rem" }}>Call (859) 536-6009</a>
          </div>
        </div>
      </section>
    </main>
  );
}
