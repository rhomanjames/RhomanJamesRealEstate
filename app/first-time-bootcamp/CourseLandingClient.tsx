"use client";
import { useState } from "react";

const modules = [
  { num: "01", title: "Is Buying Right for You Right Now?", lessons: 4, desc: "The honest rent vs. buy decision for Hardin County, how much money you actually need to buy in Elizabethtown, credit score basics and how to improve fast, and your first-time buyer readiness checklist." },
  { num: "02", title: "First-Time Buyer Programs in Kentucky", lessons: 4, desc: "The Kentucky Housing Corporation down payment assistance program, FHA loans for first-time buyers, USDA zero-down loans for qualifying Hardin County properties, and how to combine programs for maximum benefit." },
  { num: "03", title: "Finding Your First Home in Elizabethtown", lessons: 4, desc: "What first-time buyers get wrong about the home search, which Elizabethtown neighborhoods work for first-time budgets, the starter home strategy, and red flags every first-time buyer should know before they tour." },
  { num: "04", title: "Making Your First Offer", lessons: 4, desc: "How to make a competitive offer as a first-time buyer, the contingencies that protect you in Kentucky, earnest money strategy, and what happens after your offer is accepted." },
  { num: "05", title: "Inspections, Appraisals, and Closing", lessons: 4, desc: "Your home inspection — what to do and what to ask, the appraisal process, first-time buyer closing costs in Kentucky, and what closing day actually looks like." },
  { num: "06", title: "Life as a New Kentucky Homeowner", lessons: 4, desc: "Setting up utilities in Elizabethtown, how to budget for maintenance in your first year, how to build equity faster, and when to refinance vs. stay put." }
];
const audiences = [
  { title: "True First-Timers", desc: "Never owned a home? This bootcamp starts at zero and walks you through every step — no jargon, no assumptions about what you already know." },
  { title: "Renters Ready to Move", desc: "Tired of paying your landlord's mortgage? Learn exactly what it takes to own in Elizabethtown and whether now is the right time." },
  { title: "Recent Graduates", desc: "Just starting your career and ready to build wealth through homeownership? Start here before you sign your next lease." },
  { title: "Young Families", desc: "Growing your family and need more space? Learn how to buy your first home before the next lease renewal forces the issue." }
];
const faqs = [
  { q: "How much money do I actually need to buy a home in Elizabethtown?", a: "Less than most people think. A first-time buyer using FHA financing with KHC down payment assistance can sometimes close on a home in Elizabethtown with as little as $5,000 to $8,000 out of pocket. VA-eligible buyers can sometimes close with even less. Module 1 covers the full breakdown." },
  { q: "What is the KHC down payment assistance program and do I qualify?", a: "The Kentucky Housing Corporation provides up to $10,000 in down payment assistance as a low-interest second mortgage for qualifying first-time buyers in Hardin County. Household income must be at or below approximately $90,000. You must not have owned a primary residence in the past three years. Module 2 covers eligibility in full." },
  { q: "What credit score do I need to buy a home in Kentucky?", a: "FHA loans require a 580 credit score for 3.5 percent down. Conventional loans require 620. KHC programs require 620. VA loans have no official minimum but most lenders want 580 to 620. Module 1 covers credit score basics and how to improve your score in 90 days if needed." },
  { q: "Is now a good time to buy in Elizabethtown?", a: "Module 1 covers the rent vs. buy calculation specifically for the Hardin County market. The honest answer is that it depends on your timeline, your financial situation, and how long you plan to stay — not on interest rates alone. The course gives you the tools to answer that question for your specific situation." },
  { q: "What is a Kentucky attorney closing and how is it different?", a: "Kentucky requires a licensed attorney to examine title and conduct every residential closing. The attorney prepares the deed, manages the disbursement of funds, and records the transfer with the county clerk. Module 5 explains exactly what this means and what you sign." },
  { q: "Can I use USDA financing in Hardin County?", a: "Some addresses in Hardin County qualify for USDA zero-down financing, which is determined by the specific property address rather than the city or zip code. Module 2 covers how to check eligibility for any address you are considering." },
  { q: "What are first-time buyer closing costs in Kentucky?", a: "Buyers in Kentucky typically pay 2 to 4 percent of the purchase price in closing costs. On a $240,000 home that is $4,800 to $9,600. Seller concessions can cover some or all of this. Module 5 covers every line item with 2026 Hardin County estimates." },
  { q: "After I finish the course, will I have to work with Rhoman James?", a: "No. The course is genuinely free educational content. If you find it helpful and want to work together, that conversation is welcome. If you work with a different agent, the knowledge you gained still serves you fully." }
];

function ShareButton() {
  const [copied, setCopied] = useState(false);
  const url = "https://rhomanjames.com/first-time-bootcamp";
  const text = "First-Time Homebuyer Bootcamp — free, self-paced, and built specifically for Kentucky.";
  const share = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: "First-Time Homebuyer Bootcamp", text, url }); } catch {}
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
        <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.1, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The First-Time<br /><em style="font-style:italic;color:var(--blue)">Homebuyer Bootcamp</em>` }} />
        <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.85, maxWidth: "42rem", margin: "0 auto 1.25rem" }}>From renter to homeowner in Kentucky — a straight-talking, step-by-step bootcamp for first-time buyers in Elizabethtown and Hardin County. Six modules covering everything from credit scores to closing day. No jargon. No assumptions. Completely free.</p>
        <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: "38rem", margin: "0 auto 2.5rem" }}>The biggest obstacle most first-time buyers face is not money or credit — it is not knowing what they do not know. This bootcamp closes that gap. You will finish it knowing exactly how much you need, which programs you qualify for, what the home search actually looks like, and what happens at a Kentucky closing. You will walk into the process with the confidence of someone who has done it before.</p>
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {[{ num: "6", label: "Modules" },
          { num: "24", label: "Lessons" },
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
          <form onSubmit={async (e) => { e.preventDefault(); const form = e.currentTarget; const data = new FormData(form); try { await fetch("https://formspree.io/f/mjgqrprb", { method: "POST", body: data, headers: { Accept: "application/json" } }); } catch(err) {} window.location.href = "/first-time-bootcamp/watch"; }} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input type="hidden" name="_subject" value="New First-Time Bootcamp Sign-Up" />
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
              <label htmlFor="timeline" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>When are you hoping to buy?</label>
              <select className="form-input" id="timeline" name="timeline" style={{ appearance: "none" }}>
                <option value="">Select one</option>
                <option>Within 3 months</option>
                <option>3 to 6 months</option>
                <option>6 to 12 months</option>
                <option>More than a year from now</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="renting" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>Are you currently renting?</label>
              <select className="form-input" id="renting" name="renting" style={{ appearance: "none" }}>
                <option value="">Select one</option>
                <option>Yes, renting on my own</option>
                <option>Yes, with roommates</option>
                <option>Living with family</option>
                <option>Other</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="income_range" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>Approximate household income</label>
              <select className="form-input" id="income_range" name="income_range" style={{ appearance: "none" }}>
                <option value="">Select one</option>
                <option>Under $45,000</option>
                <option>$45,000 to $60,000</option>
                <option>$60,000 to $80,000</option>
                <option>$80,000 to $100,000</option>
                <option>Over $100,000</option>
                <option>Prefer not to say</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="credit_range" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>Approximate credit score range</label>
              <select className="form-input" id="credit_range" name="credit_range" style={{ appearance: "none" }}>
                <option value="">Select one</option>
                <option>Below 580</option>
                <option>580 to 619</option>
                <option>620 to 659</option>
                <option>660 to 719</option>
                <option>720 and above</option>
                <option>Not sure</option>
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
            {[{ title: "Kentucky Down Payment Programs", body: "The Kentucky Housing Corporation provides up to $10,000 in down payment assistance for qualifying first-time buyers in Hardin County — and most buyers who qualify never know it exists. Module 2 covers KHC eligibility, income limits, and how to access the program." },
      { title: "Real Elizabethtown Price Ranges", body: "Not hypothetical examples. This course uses real 2026 Elizabethtown price ranges, real Hardin County closing cost estimates, and real KHC income and purchase price limits. You will know exactly what your budget buys here." },
      { title: "The Starter Home Strategy", body: "Your first home does not need to be your forever home. Module 3 explains the starter home strategy — how to buy a first home that builds equity, positions you to upgrade, and does not price you out of the market while you wait for the perfect property." },
      { title: "Kentucky Attorney Closings Explained", body: "Kentucky requires a licensed attorney at every closing — something most national resources never mention. Module 5 explains exactly what this means, what you sign, and how to read your Closing Disclosure before you sit down at the table." }].map((item) => (
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
            {[{ href: "/tools/mortgage-calculator", label: "Mortgage Calculator" },
            { href: "/tools/affordability-calculator", label: "Affordability Calculator" },
            { href: "/tools/khc-estimator", label: "KHC DPA Estimator" },
            { href: "/tools/closing-cost-estimator", label: "Closing Cost Estimator" },
            { href: "/tools/rent-vs-buy", label: "Rent vs. Buy Calculator" },
            { href: "/tools/down-payment-planner", label: "Down Payment Planner" }].map((tool) => (
              <a key={tool.href} href={tool.href} style={{ padding: "1rem", background: "white", border: "1px solid var(--border)", borderRadius: "16px", fontSize: "0.75rem", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", display: "block" }}>{tool.label}</a>
            ))}
          </div>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[{ href: "/course", label: "Kentucky Home Buyers Course" },
            { href: "/fort-knox-course", label: "Fort Knox PCS Bootcamp" },
            { href: "/faq", label: "Home Buying FAQ" },
            { href: "/moving-to-elizabethtown-ky", label: "Moving to Elizabethtown Guide" }].map((r) => (
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
          <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.9, marginBottom: "1.25rem" }}>Rhoman James is a real estate professional based in Elizabethtown, Kentucky, serving buyers and sellers throughout Hardin County. The First-Time Homebuyer Bootcamp was built for the buyers who are ready to own but do not know where to start — and who deserve a clear, honest, Kentucky-specific roadmap rather than generic national content that does not reflect how real estate actually works here. When you finish this bootcamp and are ready to start your home search, a free consultation is available with no obligation.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+18595366009" className="btn-primary" style={{ fontSize: "0.75rem" }}>Call (859) 536-6009</a>
            <a href="mailto:RhomanMJames@gmail.com" className="btn-outline" style={{ fontSize: "0.75rem" }}>Send an Email</a>
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: "6rem 1.5rem", textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1rem", lineHeight: 1.2 }} dangerouslySetInnerHTML={{ __html: `Ready to stop renting and<br /><em style="font-style:italic;color:var(--blue)">own your first Kentucky home?</em>` }} />
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
