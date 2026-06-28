"use client";
import { useState } from "react";

const modules = [
  { num: "01", title: "Is Now the Right Time to Sell?", lessons: 4, desc: "Market timing, equity calculation, the true cost of selling in Kentucky, and how to handle the buy-sell transition without ending up in temporary housing." },
  { num: "02", title: "Preparing Your Home for Market", lessons: 5, desc: "The highest ROI repairs before listing in Elizabethtown, staging without a professional, decluttering strategy, professional photography, and Kentucky disclosure requirements." },
  { num: "03", title: "Pricing Your Home to Sell", lessons: 5, desc: "How a comparative market analysis actually works, why overpricing costs you money in the Elizabethtown market, pricing psychology, and how to read market feedback." },
  { num: "04", title: "Listing, Marketing, and Showings", lessons: 5, desc: "MLS exposure, how buyers find homes in Elizabethtown right now, showing management, open houses, and what to do if your home is not getting showings." },
  { num: "05", title: "Reviewing Offers and Negotiating", lessons: 5, desc: "How to read every line of a Kentucky purchase offer, handling multiple offers, VA loan offers, negotiating inspection repairs, and seller concessions strategy." },
  { num: "06", title: "Closing Day and Moving Out", lessons: 4, desc: "Seller closing costs in Hardin County, calculating your exact net proceeds, what happens at a Kentucky attorney closing, and what to leave and hand over at closing." }
];
const audiences = [
  { title: "First-Time Sellers", desc: "Never sold a home before? This course covers every step from listing to closing in plain English — no assumptions about prior knowledge." },
  { title: "Upgrading Buyers", desc: "Selling your current home to buy larger? Module 1 covers the buy-sell transition and how to avoid the gap housing problem." },
  { title: "Relocating Sellers", desc: "PCS-ing out of Fort Knox or moving for work? Module 4 covers selling on a compressed timeline without leaving money behind." },
  { title: "Investor Sellers", desc: "Selling a rental property in Elizabethtown? Module 6 covers net proceeds calculations and how to structure the sale." }
];
const faqs = [
  { q: "Is this Kentucky home sellers course really free?", a: "Yes — completely free, no credit card required. It exists because a seller who understands the process gets better outcomes and makes a better client." },
  { q: "How is this course different from just asking an agent?", a: "An agent gives you advice when you ask for it. This course gives you the full picture before you have an agent — so you know what questions to ask, what to watch for, and what a fair deal looks like." },
  { q: "How current is the pricing and market information?", a: "The course was updated in 2026 and reflects current Hardin County market conditions, current KHC limits, and current Kentucky real estate law. Specific price data in the course reflects 2026 Elizabethtown market ranges." },
  { q: "Does the course cover VA loan offers?", a: "Yes. Module 5 has a dedicated lesson on VA loan offers — what they mean for sellers, what VA Minimum Property Requirements actually require, and why declining VA offers reflexively is a mistake in the Fort Knox market." },
  { q: "What are typical seller closing costs in Kentucky?", a: "Total selling costs in Kentucky typically run 7 to 9 percent of the sale price including commissions, attorney fees, transfer tax, title insurance, and prorated property taxes. Module 6 covers every line item with 2026 Hardin County estimates." },
  { q: "How do I know what my home is worth?", a: "Module 3 explains exactly how a comparative market analysis works — what comps are selected, how adjustments are made, and how to evaluate whether your agent's suggested price is supported by evidence." },
  { q: "Should I make repairs before listing?", a: "Not always. Module 2 covers which repairs have positive ROI before a sale and which ones do not. Fresh paint and carpet almost always pay for themselves. A new kitchen almost never does." },
  { q: "What is the best time of year to sell in Elizabethtown?", a: "The Elizabethtown market is more stable year-round than most markets due to Fort Knox PCS rotation creating consistent demand. Module 1 explains how to read current market conditions regardless of season." }
];

function ShareButton() {
  const [copied, setCopied] = useState(false);
  const url = "https://rhomanjames.com/sellers-course";
  const text = "Kentucky Home Sellers Course — free, self-paced, and built specifically for Kentucky.";
  const share = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: "Kentucky Home Sellers Course", text, url }); } catch {}
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };
  return (
    <button onClick={share} style={{ display: "flex", alignItems: "center", gap: "0.6rem", background: "rgba(184,151,106,0.12)", border: "1px solid rgba(184,151,106,0.5)", color: "var(--gold)", cursor: "pointer", padding: "0.75rem 1.5rem", fontFamily: "'Jost', system-ui, sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", transition: "all 0.2s" }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
      {copied ? "Link Copied!" : "Share This Course"}
    </button>
  );
}

export default function CourseLandingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main>
      <section style={{ paddingTop: "8rem", paddingBottom: "5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "var(--dark)", position: "relative", textAlign: "center" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(184,151,106,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ width: 1, height: "3rem", background: "linear-gradient(to bottom, transparent, var(--gold))", margin: "0 auto 2rem" }} />
        <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>100% Free · Self-Paced · Built for Kentucky · Updated 2026</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300, color: "white", lineHeight: 1.1, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The Kentucky<br /><em style="font-style:italic;color:#B8976A">Home Sellers Course</em>` }} />
        <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.85, maxWidth: "42rem", margin: "0 auto 1.25rem" }}>Everything you need to know about selling your home in Kentucky — from pricing strategy to closing day. Six modules covering preparation, pricing, marketing, negotiating offers, and walking out of closing with your full net proceeds. No fluff. Completely free.</p>
        <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: "38rem", margin: "0 auto 2.5rem" }}>Most sellers in Elizabethtown leave money on the table because they do not understand the process before they start it. This course changes that. You will know exactly how to price your home, what repairs pay for themselves, how to read every offer you receive, and what your closing costs will be before you sign anything.</p>
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {[{ num: "6", label: "Modules" },
          { num: "28", label: "Lessons" },
          { num: "Free", label: "Always" },
          { num: "KY", label: "Specific" },
          { num: "2026", label: "Updated" }].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.2rem", fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", marginTop: "0.25rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2.5rem" }}>
          <ShareButton />
        </div>
        <div style={{ maxWidth: 480, margin: "0 auto", background: "var(--dark2)", border: "1px solid rgba(184,151,106,0.25)", padding: "2.5rem" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" }}>Start Learning Free</p>
          <p style={{ fontSize: "0.82rem", color: "var(--muted)", marginBottom: "1.5rem", lineHeight: 1.6 }}>Enter your name and email to unlock all modules instantly. No waiting. No approval.</p>
          <form onSubmit={async (e) => { e.preventDefault(); const form = e.currentTarget; const data = new FormData(form); try { await fetch("https://formspree.io/f/xpqgrodo", { method: "POST", body: data, headers: { Accept: "application/json" } }); } catch(err) {} window.location.href = "/sellers-course/watch"; }} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input type="hidden" name="_subject" value="New Course Sign-Up: Kentucky Home Sellers Course" />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="name" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>Your Name</label>
              <input className="form-input" type="text" id="name" name="name" required placeholder="Jane Smith" autoComplete="name" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="email" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>Email Address</label>
              <input className="form-input" type="email" id="email" name="email" required placeholder="jane@example.com" autoComplete="email" />
            </div>
            <button type="submit" className="btn-primary" style={{ cursor: "pointer", border: "none", marginTop: "0.5rem", fontSize: "0.78rem", letterSpacing: "0.2em" }}>Unlock All Lessons Free</button>
            <p style={{ fontSize: "0.72rem", color: "var(--muted2)", margin: 0, lineHeight: 1.6 }}>No spam. No sales pressure. Unsubscribe anytime.</p>
          </form>
        </div>
      </section>

      <section style={{ background: "var(--dark3)", padding: "5rem 1.5rem", borderTop: "1px solid rgba(184,151,106,0.1)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem", textAlign: "center" }}>Why This Course Exists</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 300, color: "white", marginBottom: "2rem", textAlign: "center" }}>Built for this market, not a generic template</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[{ title: "The True Cost of Selling", body: "Most sellers are shocked by how much it costs to sell. This course builds a complete net proceeds worksheet so you know your exact take-home number before you list — not after you sign." },
      { title: "Pricing That Actually Works", body: "Overpricing is the single most common seller mistake in Elizabethtown. Module 3 explains exactly why it backfires, how to price based on what comps actually support, and how to read the market when it tells you something." },
      { title: "VA Loan Offers Explained", body: "Fort Knox drives a significant portion of Elizabethtown buyer demand. Module 5 explains exactly what a VA loan offer means for you as a seller, why the concerns about VA loans are largely outdated, and how to evaluate VA offers against conventional ones." },
      { title: "Kentucky-Specific Disclosures", body: "Kentucky has specific seller disclosure requirements that differ from national standards. Module 2 walks through exactly what you are required to disclose, what happens if you do not, and how to protect yourself legally." }].map((item) => (
              <div key={item.title} style={{ padding: "1.75rem", background: "var(--dark2)", border: "1px solid rgba(184,151,106,0.12)" }}>
                <div style={{ width: 24, height: 1, background: "var(--gold)", marginBottom: "1rem" }} />
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.15rem", color: "white", marginBottom: "0.75rem", fontWeight: 400 }}>{item.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.8, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--dark2)", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem", textAlign: "center" }}>Course Curriculum</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 300, color: "white", marginBottom: "0.75rem", textAlign: "center" }}>{modules.length} modules. Everything you need.</h2>
          <p style={{ fontSize: "0.9rem", color: "var(--muted)", textAlign: "center", maxWidth: "40rem", margin: "0 auto 3rem" }}>Each lesson is written text you can read at your own pace. Mark lessons complete as you go and track your progress through the full course.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {modules.map((m) => (
              <div key={m.num} className="service-card" style={{ padding: "2rem" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "3rem", fontWeight: 300, color: "rgba(184,151,106,0.15)", lineHeight: 1, marginBottom: "0.75rem" }} aria-hidden="true">{m.num}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.15rem", color: "white", marginBottom: "0.6rem", fontWeight: 400 }}>{m.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "0.75rem" }}>{m.desc}</p>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>{m.lessons} lessons</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--dark)", padding: "6rem 1.5rem", borderTop: "1px solid rgba(184,151,106,0.1)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem", textAlign: "center" }}>Who This Course Is For</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 300, color: "white", marginBottom: "2.5rem", textAlign: "center" }}>Built for you</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {audiences.map((item) => (
              <div key={item.title} style={{ padding: "1.75rem", background: "var(--dark3)", border: "1px solid rgba(184,151,106,0.12)" }}>
                <div style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.6rem" }}>{item.title}</div>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--dark3)", padding: "5rem 1.5rem", borderTop: "1px solid rgba(184,151,106,0.1)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Free Tools Alongside This Course</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 300, color: "white", marginBottom: "2rem" }}>Run your numbers while you learn</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
            {[{ href: "/tools/net-proceeds", label: "Net Proceeds Calculator" },
            { href: "/tools/mortgage-calculator", label: "Mortgage Calculator" },
            { href: "/tools/closing-cost-estimator", label: "Closing Cost Estimator" },
            { href: "/tools/affordability-calculator", label: "Affordability Calculator" }].map((tool) => (
              <a key={tool.href} href={tool.href} style={{ padding: "1rem", background: "var(--dark2)", border: "1px solid rgba(184,151,106,0.12)", fontSize: "0.75rem", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", display: "block" }}>{tool.label}</a>
            ))}
          </div>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[{ href: "/course", label: "Kentucky Home Buyers Course" },
            { href: "/investor-course", label: "Kentucky Investor Course" },
            { href: "/moving-to-elizabethtown-ky", label: "Moving to Elizabethtown Guide" }].map((r) => (
              <a key={r.href} href={r.href} style={{ fontSize: "0.75rem", color: "var(--gold)", textDecoration: "none", letterSpacing: "0.15em", textTransform: "uppercase" }}>{r.label} →</a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--dark2)", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem", textAlign: "center" }}>Frequently Asked Questions</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 300, color: "white", marginBottom: "3rem", textAlign: "center" }}>Everything you want to know before you start</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: "var(--dark3)", border: "1px solid rgba(184,151,106,0.12)", overflow: "hidden" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 1.5rem", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.05rem", color: "white", fontWeight: 400, lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{ color: "var(--gold)", fontSize: "1.25rem", flexShrink: 0, display: "inline-block", transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
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

      <section style={{ background: "var(--dark)", padding: "6rem 1.5rem", borderTop: "1px solid rgba(184,151,106,0.1)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div aria-hidden="true" style={{ width: 1, height: "3rem", background: "linear-gradient(to bottom, transparent, var(--gold))", margin: "0 auto 2rem" }} />
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>About Your Instructor</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 300, color: "white", marginBottom: "1.5rem" }}>Rhoman James</h2>
          <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.9, marginBottom: "1.25rem" }}>Rhoman James is a real estate professional based in Elizabethtown, Kentucky, serving buyers and sellers throughout Hardin County. This course was built because sellers who understand the process get better outcomes — better prices, fewer surprises at closing, and fewer deals that fall apart over preventable issues. The knowledge in this course reflects the specific dynamics of the Elizabethtown and Hardin County market, including the Fort Knox military buyer pool that shapes demand here in ways that national real estate advice never accounts for.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+15022649376" className="btn-primary" style={{ fontSize: "0.75rem" }}>Call (502) 264-9376</a>
            <a href="mailto:RhomanMJames@gmail.com" className="btn-outline" style={{ fontSize: "0.75rem" }}>Send an Email</a>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--dark2)", padding: "6rem 1.5rem", textAlign: "center", borderTop: "1px solid rgba(184,151,106,0.15)" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "white", marginBottom: "1rem", lineHeight: 1.2 }} dangerouslySetInnerHTML={{ __html: `Ready to sell for<br /><em style="font-style:italic;color:#B8976A">top dollar in Kentucky?</em>` }} />
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
