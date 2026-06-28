"use client";
import { useState } from "react";

const modules = [
  { num: "01", title: "Are You Ready to Buy?", lessons: 5, desc: "Financial readiness checklist, credit score requirements, how much you actually need to buy in Elizabethtown, debt-to-income ratios, and the honest rent vs. buy calculation for Hardin County." },
  { num: "02", title: "Getting Your Financing Right", lessons: 6, desc: "Every Kentucky loan type explained — FHA, VA, USDA, Conventional, and KHC down payment assistance. How to get pre-approved, what lenders actually look for, and what to never do before closing." },
  { num: "03", title: "Finding the Right Home", lessons: 5, desc: "How to work with a buyer's agent in Kentucky, evaluating Elizabethtown and Hardin County neighborhoods, what to look for beyond the listing photos, and red flags every buyer should know." },
  { num: "04", title: "Making an Offer", lessons: 5, desc: "How Kentucky real estate contracts work, which contingencies protect you, earnest money strategy, how to compete without overpaying, and what happens after your offer is accepted." },
  { num: "05", title: "Inspections & Due Diligence", lessons: 5, desc: "What a Kentucky home inspector actually checks, how to attend your inspection, negotiating repairs, the appraisal process, and what can kill a deal and how to prevent it." },
  { num: "06", title: "Closing Day & Moving In", lessons: 4, desc: "Kentucky attorney closings explained, reading your Closing Disclosure, what to bring and expect on closing day, and your first steps as a Kentucky homeowner." },
];

const audiences = [
  { title: "First-Time Buyers", desc: "Never bought before? This course starts at zero and walks you through every step in plain English — no jargon, no assumptions." },
  { title: "Military Families", desc: "PCS-ing to Fort Knox? Module 2 covers VA loans, BAH strategy, and the Certificate of Eligibility process in depth." },
  { title: "Repeat Buyers", desc: "Been a while since your last purchase? Kentucky law, loan programs, and market conditions have changed. Catch up fast." },
  { title: "Just Exploring", desc: "Not sure if buying is right for you yet? Start with Module 1 and know exactly where you stand within an hour." },
];

const faqs = [
  { q: "Is this Kentucky home buyers course really free?", a: "Yes — completely free, with no hidden fees, no credit card required, and no sales pressure. The course exists because an educated buyer is a better client. You get the knowledge either way." },
  { q: "How long does the course take to complete?", a: "Most people complete it in 2 to 4 hours spread across a few sessions. It is self-paced, so you can do one module at a time and pick up exactly where you left off. Your progress saves automatically in your browser." },
  { q: "Is this course specific to Kentucky or is it generic?", a: "It is built specifically for Kentucky buyers. That means Kentucky Housing Corporation (KHC) down payment assistance, Kentucky attorney closings, Hardin County market data, Fort Knox VA loan specifics, and real Elizabethtown price ranges — not hypothetical examples from a city you do not live in." },
  { q: "Do I need to be pre-approved before taking this course?", a: "No — and in fact, taking this course before you get pre-approved is exactly the right order. Module 2 walks you through every loan type so you arrive at the lender conversation knowing which programs you likely qualify for and what questions to ask." },
  { q: "What loan programs does the course cover?", a: "FHA, VA, USDA, Conventional, and Kentucky Housing Corporation (KHC) programs including the Regular Down Payment Assistance Program providing up to $10,000 for qualifying Hardin County buyers, and the Mortgage Credit Certificate. We cover eligibility, down payment requirements, mortgage insurance, and how to choose the right one." },
  { q: "I am a Fort Knox military family. Is there content specific to me?", a: "Yes. Module 2 has a full lesson on VA loans specific to the Fort Knox market, including funding fee exemptions for disabled veterans, how to get your Certificate of Eligibility, and how VA loans compare to conventional financing in the Elizabethtown market. There is also a dedicated Fort Knox PCS Bootcamp course on this site if you want to go even deeper." },
  { q: "What is the KHC down payment assistance program?", a: "The Kentucky Housing Corporation provides up to $10,000 in down payment assistance as a low-interest second mortgage for qualifying first-time buyers in Hardin County. Income limits are approximately $90,000 for most household sizes. The course covers eligibility requirements, how to apply, and how to combine KHC assistance with FHA or conventional loans." },
  { q: "How do I access the course after I fill out the form?", a: "You are redirected to the course dashboard immediately after submitting your name and email. All six modules and thirty lessons are unlocked right away — no waiting for an email, no approval process." },
  { q: "Will I be pressured to work with Rhoman James after taking this course?", a: "No. The course is genuinely free educational content. If you find it helpful and want to work together when you are ready to buy, that conversation is welcome. If you work with a different agent, the knowledge you gained still serves you." },
  { q: "How current is the information in this course?", a: "The course was built in 2026 and reflects current Kentucky real estate law, current KHC program limits, and current market conditions in Hardin County. It is updated when significant changes occur — including KHC income and purchase price limits, which change annually." },
];

function ShareButton() {
  const [copied, setCopied] = useState(false);
  const url = "https://rhomanjames.com/course";
  const text = "Free Kentucky Home Buyers Course — everything you need to know about buying a home in Kentucky, self-paced and completely free.";
  const share = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: "Free Kentucky Home Buyers Course", text, url }); } catch {}
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
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300, color: "white", lineHeight: 1.1, marginBottom: "1.25rem" }}>
          The Kentucky<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Home Buyers Course</em>
        </h1>
        <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.85, maxWidth: "42rem", margin: "0 auto 1.25rem" }}>
          Everything you need to know about buying a home in Kentucky — from checking your credit score to walking out of closing with your keys. Six modules, thirty lessons, written specifically for buyers in Elizabethtown and Hardin County. No fluff. No upsells. Completely free.
        </p>
        <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: "38rem", margin: "0 auto 2.5rem" }}>
          This is the course no one gave you — covering KHC down payment assistance, VA loan specifics for Fort Knox families, Kentucky attorney closings, and real Hardin County market data. Not generic advice. Actual knowledge from the market you are buying in.
        </p>
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {[{ num: "6", label: "Modules" }, { num: "30", label: "Lessons" }, { num: "Free", label: "Always" }, { num: "KY", label: "Specific" }, { num: "2026", label: "Updated" }].map((s) => (
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
          <p style={{ fontSize: "0.82rem", color: "var(--muted)", marginBottom: "1.5rem", lineHeight: 1.6 }}>Enter your name and email to unlock all six modules instantly. No waiting. No approval.</p>
          <form onSubmit={async (e) => { e.preventDefault(); const form = e.currentTarget; const data = new FormData(form); try { await fetch("https://formspree.io/f/maqgjlon", { method: "POST", body: data, headers: { Accept: "application/json" } }); } catch(err) {} window.location.href = "/course/watch"; }} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input type="hidden" name="_subject" value="New Kentucky Home Buyers Course Sign-Up" />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="name" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>Your Name</label>
              <input className="form-input" type="text" id="name" name="name" required placeholder="Jane Smith" autoComplete="name" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="email" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>Email Address</label>
              <input className="form-input" type="email" id="email" name="email" required placeholder="jane@example.com" autoComplete="email" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="situation" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>Where are you in your journey?</label>
              <select className="form-input" id="situation" name="situation" style={{ appearance: "none" }}>
                <option value="">Select one</option>
                <option>Just starting to think about buying</option>
                <option>Planning to buy in the next 6 months</option>
                <option>Actively searching for a home</option>
                <option>Military family / Fort Knox PCS</option>
                <option>Already pre-approved and looking</option>
              </select>
            </div>
            <button type="submit" className="btn-primary" style={{ cursor: "pointer", border: "none", marginTop: "0.5rem", fontSize: "0.78rem", letterSpacing: "0.2em" }}>
              Unlock All 30 Lessons Free
            </button>
            <p style={{ fontSize: "0.72rem", color: "var(--muted2)", margin: 0, lineHeight: 1.6 }}>No spam. No sales pressure. Unsubscribe anytime.</p>
          </form>
        </div>
      </section>

      <section style={{ background: "var(--dark3)", padding: "5rem 1.5rem", borderTop: "1px solid rgba(184,151,106,0.1)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem", textAlign: "center" }}>Why This Course Exists</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 300, color: "white", marginBottom: "2rem", textAlign: "center" }}>Built for Kentucky buyers, not everyone else</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              { title: "Kentucky-Specific Programs", body: "Most online courses skip the Kentucky Housing Corporation entirely. This course covers KHC down payment assistance, income limits for Hardin County, and how to combine KHC with FHA or conventional loans to close with minimal cash out of pocket." },
              { title: "Fort Knox VA Loan Deep Dive", body: "The Elizabethtown market is driven by Fort Knox. Module 2 covers VA loan specifics in depth — funding fee exemptions for disabled veterans, Certificate of Eligibility, BAH strategy, and why VA loans often beat conventional in this market." },
              { title: "Kentucky Attorney Closings", body: "Kentucky requires a licensed attorney at every real estate closing. Most national courses never mention this. Module 6 explains what this means, what you sign, and how to read your Closing Disclosure before you sit down at the table." },
              { title: "Real Hardin County Data", body: "Not hypothetical examples. Real Elizabethtown price ranges, real Hardin County closing cost estimates, real KHC income limits for 2026, and real commute times from specific neighborhoods to Fort Knox gates." },
            ].map((item) => (
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
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 300, color: "white", marginBottom: "0.75rem", textAlign: "center" }}>Six modules. Thirty lessons. Everything you need.</h2>
          <p style={{ fontSize: "0.9rem", color: "var(--muted)", textAlign: "center", marginBottom: "3rem", maxWidth: "40rem", margin: "0 auto 3rem" }}>Each lesson is written text you can read at your own pace — no videos to buffer, no schedules to keep. Mark lessons complete as you go and track your progress through the full course.</p>
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
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 300, color: "white", marginBottom: "2.5rem", textAlign: "center" }}>Built for Kentucky buyers at every stage</h2>
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
            {[
              { href: "/tools/mortgage-calculator", label: "Mortgage Calculator" },
              { href: "/tools/affordability-calculator", label: "Affordability Calculator" },
              { href: "/tools/va-loan-calculator", label: "VA Loan Calculator" },
              { href: "/tools/khc-estimator", label: "KHC DPA Estimator" },
              { href: "/tools/closing-cost-estimator", label: "Closing Cost Estimator" },
              { href: "/tools/rent-vs-buy", label: "Rent vs. Buy Calculator" },
            ].map((tool) => (
              <a key={tool.href} href={tool.href} style={{ padding: "1rem", background: "var(--dark2)", border: "1px solid rgba(184,151,106,0.12)", fontSize: "0.75rem", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", display: "block" }}>
                {tool.label}
              </a>
            ))}
          </div>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/fort-knox-course" style={{ fontSize: "0.75rem", color: "var(--gold)", textDecoration: "none", letterSpacing: "0.15em", textTransform: "uppercase" }}>Fort Knox PCS Bootcamp →</a>
            <a href="/first-time-bootcamp" style={{ fontSize: "0.75rem", color: "var(--gold)", textDecoration: "none", letterSpacing: "0.15em", textTransform: "uppercase" }}>First-Time Buyer Bootcamp →</a>
            <a href="/moving-to-elizabethtown-ky" style={{ fontSize: "0.75rem", color: "var(--gold)", textDecoration: "none", letterSpacing: "0.15em", textTransform: "uppercase" }}>Moving to Elizabethtown Guide →</a>
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
                  <span style={{ color: "var(--gold)", fontSize: "1.25rem", flexShrink: 0, transition: "transform 0.2s", display: "inline-block", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
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
          <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
            Rhoman James is a real estate professional based in Elizabethtown, Kentucky, serving buyers and sellers throughout Hardin County. This course was built because the information buyers need to make confident decisions should not be locked behind paywalls or buried in generic national content that does not reflect how real estate actually works in Kentucky.
          </p>
          <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.9, marginBottom: "2rem" }}>
            Every lesson reflects the Elizabethtown and Hardin County market specifically — the KHC programs available here, the Fort Knox VA loan volume that shapes this market, the Kentucky attorney closing process, and the neighborhoods that work for different budgets and lifestyles. When you are ready to buy, that local knowledge is available to you in a free consultation.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+15022649376" className="btn-primary" style={{ fontSize: "0.75rem" }}>Call (502) 264-9376</a>
            <a href="mailto:RhomanMJames@gmail.com" className="btn-outline" style={{ fontSize: "0.75rem" }}>Send an Email</a>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--dark2)", padding: "6rem 1.5rem", textAlign: "center", borderTop: "1px solid rgba(184,151,106,0.15)" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "white", marginBottom: "1rem", lineHeight: 1.2 }}>
            Ready to become a<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>confident Kentucky buyer?</em>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: "2rem" }}>Free. Self-paced. Built specifically for Kentucky. Start Module 1 in the next two minutes and know exactly where you stand.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="btn-primary" style={{ fontSize: "0.78rem", letterSpacing: "0.2em" }}>Enroll Free — Start Now</a>
            <ShareButton />
          </div>
        </div>
      </section>
    </main>
  );
}
