"use client";
import { useState } from "react";

const modules = [
  { num: "01", title: "Understanding Your PCS Housing Options", lessons: 4, desc: "On-post vs. off-post — the honest financial comparison, how long the Fort Knox on-post housing waitlist actually runs, and why buying builds wealth that renting on BAH never will." },
  { num: "02", title: "Your VA Loan Benefit — Everything Military Buyers Need to Know", lessons: 5, desc: "Zero down, no PMI, funding fee exemptions for disabled veterans, Certificate of Eligibility, and why the VA loan beats conventional financing in the Elizabethtown market." },
  { num: "03", title: "BAH Strategy — Making Your Housing Allowance Work for You", lessons: 4, desc: "How BAH rates are set for Fort Knox, how to structure a VA loan so your mortgage payment matches your allowance, and the wealth difference between renting and buying on BAH over a 3-year assignment." },
  { num: "04", title: "Buying on a PCS Timeline", lessons: 5, desc: "What to do the moment your orders arrive, how to buy remotely before your report date, video walkthroughs, choosing your neighborhood by gate, and what a realistic PCS closing timeline looks like." },
  { num: "05", title: "The Home Search Near Fort Knox", lessons: 4, desc: "Mapping your commute from Elizabethtown, Radcliff, and Vine Grove, school zones by address, VA Minimum Property Requirements, and red flags specific to the Fort Knox market." },
  { num: "06", title: "When You PCS Out — Your Exit Strategy", lessons: 4, desc: "Sell vs. rent when orders come, managing a Fort Knox rental from your next duty station, the VA loan assumption strategy, and building a real estate portfolio across duty stations." }
];
const audiences = [
  { title: "Incoming Service Members", desc: "Just received Fort Knox orders? This bootcamp covers everything you need to know before your report date — start the moment your orders arrive." },
  { title: "Military Spouses", desc: "Managing the PCS housing search independently? This course gives you everything you need to make a confident decision without waiting for your service member to have time to research." },
  { title: "Veterans Settling Near Knox", desc: "Transitioning out and staying in the Elizabethtown area? Learn how to use your VA benefit and what the local market looks like from a buyer's perspective." },
  { title: "Fort Knox Families Already On Post", desc: "Already in on-post housing and thinking about buying off post? Module 1 runs the honest financial comparison so you can decide with real numbers." }
];
const faqs = [
  { q: "Can I really buy a home near Fort Knox with zero down?", a: "Yes — the VA loan requires zero down payment on the full purchase price. A Fort Knox family buying a $270,000 home with a VA loan puts nothing down, pays no PMI, and typically gets a rate 0.25 to 0.5 percent below conventional. Module 2 covers the complete VA loan breakdown." },
  { q: "How long does it take to buy a home on a PCS timeline?", a: "A standard financed closing in the Elizabethtown market takes 30 to 45 days from offer acceptance. If you start the pre-approval process the day your orders arrive and identify a home within the first two weeks, a closing before your report date is achievable in most cases." },
  { q: "Should I live in Elizabethtown or Radcliff if I work at Fort Knox?", a: "It depends entirely on which gate you use and where on post you work. Radcliff is 5 to 10 minutes from the Chaffee Gate. Elizabethtown is 15 to 20 minutes. Module 4 covers how to choose a community based on your specific workplace location." },
  { q: "What is my BAH at Fort Knox right now?", a: "BAH rates are set annually by the Department of Defense and vary by rank and dependency status. Visit militarypay.defense.gov to look up your current rate. Module 3 explains how to use your BAH to determine your target home price and mortgage structure." },
  { q: "Can I use my VA loan benefit more than once?", a: "Yes. When you sell a VA-financed home and pay off the loan, your full entitlement is restored and you can use the benefit again at your next duty station. You can also keep the property as a rental and use remaining entitlement for a new purchase in some cases. Module 6 covers multi-use VA loan strategy." },
  { q: "What is the on-post housing waitlist situation at Fort Knox?", a: "Waitlist times vary significantly by rank and family size. Some combinations wait 6 to 12 months or more. Contact the Fort Knox Family Housing office to get a current estimate for your specific situation. Module 1 explains the financial implications of waiting vs. buying immediately." },
  { q: "Am I exempt from the VA funding fee?", a: "Veterans with a service-connected disability rating of 10 percent or higher are completely exempt from the VA funding fee — which can be worth $4,000 to $9,000 on a typical Fort Knox purchase. Verify your status before closing. Module 2 covers the exemption in full." },
  { q: "How do I buy a home near Fort Knox without visiting first?", a: "Module 4 is built specifically for remote purchases. It covers what to ask your agent to show you on video walkthrough, what cannot be assessed remotely, how to structure an offer with appropriate contingencies when buying sight unseen, and how Kentucky handles remote closings." }
];

function ShareButton() {
  const [copied, setCopied] = useState(false);
  const url = "https://rhomanjames.com/fort-knox-course";
  const text = "Fort Knox PCS Homebuying Bootcamp — free, self-paced, and built specifically for Kentucky.";
  const share = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: "Fort Knox PCS Homebuying Bootcamp", text, url }); } catch {}
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };
  return (
    <button onClick={share} style={{ display: "flex", alignItems: "center", gap: "0.6rem", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "16px", color: "var(--blue)", cursor: "pointer", padding: "0.75rem 1.5rem", fontFamily: "'Jost', system-ui, sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", transition: "all 0.2s" }}>
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
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 40%, var(--border) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ width: 1, height: "3rem", background: "linear-gradient(to bottom, transparent, var(--blue))", margin: "0 auto 2rem" }} />
        <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem" }}>100% Free · Self-Paced · Built for Kentucky · Updated 2026</p>
        <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.1, marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: `The Fort Knox<br /><em style="font-style:italic;color:#B8976A">PCS Homebuying Bootcamp</em>` }} />
        <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.85, maxWidth: "42rem", margin: "0 auto 1.25rem" }}>Everything military families need to know about buying a home near Fort Knox, KY — VA loans, BAH strategy, PCS timelines, remote buying, gate proximity, and your exit strategy when you get orders. Six modules built specifically for the Fort Knox market. Completely free.</p>
        <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: "38rem", margin: "0 auto 2.5rem" }}>No other agent in Elizabethtown has built a course specifically for military families navigating the Fort Knox housing market. This bootcamp covers the VA loan in depth, explains how to structure your mortgage so your payment matches your BAH, shows you how to buy remotely before your report date, and gives you a clear plan for what to do with the property when you PCS out.</p>
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {[{ num: "6", label: "Modules" },
          { num: "26", label: "Lessons" },
          { num: "Free", label: "Always" },
          { num: "Military", label: "Focused" },
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
          <form onSubmit={async (e) => { e.preventDefault(); const form = e.currentTarget; const data = new FormData(form); try { await fetch("https://formspree.io/f/xdarzpzo", { method: "POST", body: data, headers: { Accept: "application/json" } }); } catch(err) {} window.location.href = "/fort-knox-course/watch"; }} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input type="hidden" name="_subject" value="New Fort Knox Course Sign-Up" />
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
              <label htmlFor="report_date" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>When is your report date?</label>
              <select className="form-input" id="report_date" name="report_date" style={{ appearance: "none" }}>
                <option value="">Select one</option>
                <option>Within 30 days</option>
                <option>1 to 3 months</option>
                <option>3 to 6 months</option>
                <option>6+ months</option>
                <option>Already here</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="coming_from" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>Where are you PCS-ing from?</label>
              <input className="form-input" type="text" id="coming_from" name="coming_from" placeholder="e.g. Fort Hood TX, Germany, Fort Bragg NC..." />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="va_eligible" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>Are you VA loan eligible?</label>
              <select className="form-input" id="va_eligible" name="va_eligible" style={{ appearance: "none" }}>
                <option value="">Select one</option>
                <option>Yes — active duty</option>
                <option>Yes — veteran</option>
                <option>Yes — surviving spouse</option>
                <option>Not sure</option>
                <option>No</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="housing_interest" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>On-post or off-post interest?</label>
              <select className="form-input" id="housing_interest" name="housing_interest" style={{ appearance: "none" }}>
                <option value="">Select one</option>
                <option>Definitely buying off-post</option>
                <option>Considering both options</option>
                <option>On the on-post waitlist and exploring</option>
                <option>Just researching right now</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="branch" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", textAlign: "left" }}>Branch of service (optional)</label>
              <select className="form-input" id="branch" name="branch" style={{ appearance: "none" }}>
                <option value="">Select one</option>
                <option>Army</option>
                <option>Army Reserve</option>
                <option>National Guard</option>
                <option>Prefer not to say</option>
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
            {[{ title: "BAH Strategy Built In", body: "Most home buying courses ignore military housing allowances entirely. This bootcamp is built around BAH — how it is set, how to match your mortgage payment to it, and how to make the math work for your specific rank and family size." },
      { title: "Zero Down VA Loan Deep Dive", body: "Module 2 covers the VA loan in more depth than most lenders explain it — including the funding fee exemption for disabled veterans, how to use VA entitlement more than once, and why assumable VA loans become a selling advantage when you PCS." },
      { title: "Remote Buying Strategy", body: "Many Fort Knox families cannot visit Elizabethtown before their report date. Module 4 covers exactly how to buy remotely — what to ask your agent to show you on video, what cannot be seen on a walkthrough, and how Kentucky handles remote closings." },
      { title: "The Exit Strategy", body: "Most buyers do not think about selling when they buy. Military families need to. Module 6 gives you the sell-vs-rent analysis, property management options from your next duty station, and the VA loan assumption strategy for maximum selling leverage." }].map((item) => (
              <div key={item.title} style={{ padding: "1.75rem", background: "white", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "0 1px 3px rgba(11,15,25,0.04)" }}>
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
              <div key={item.title} style={{ padding: "1.75rem", background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "0 1px 3px rgba(11,15,25,0.04)" }}>
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
            {[{ href: "/tools/va-loan-calculator", label: "VA Loan Calculator" },
            { href: "/tools/mortgage-calculator", label: "Mortgage Calculator" },
            { href: "/tools/affordability-calculator", label: "Affordability Calculator" },
            { href: "/tools/rent-vs-buy", label: "Rent vs. Buy Calculator" },
            { href: "/tools/closing-cost-estimator", label: "Closing Cost Estimator" },
            { href: "/tools/investment-roi", label: "Investment ROI Calculator" }].map((tool) => (
              <a key={tool.href} href={tool.href} style={{ padding: "1rem", background: "white", border: "1px solid var(--border)", borderRadius: "16px", fontSize: "0.75rem", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", display: "block" }}>{tool.label}</a>
            ))}
          </div>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[{ href: "/course", label: "Kentucky Home Buyers Course" },
            { href: "/first-time-bootcamp", label: "First-Time Buyer Bootcamp" },
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
          <div aria-hidden="true" style={{ width: 1, height: "3rem", background: "linear-gradient(to bottom, transparent, var(--blue))", margin: "0 auto 2rem" }} />
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem" }}>About Your Instructor</p>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1.5rem" }}>Rhoman James</h2>
          <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.9, marginBottom: "1.25rem" }}>Rhoman James is a real estate professional based in Elizabethtown, Kentucky, serving buyers and sellers throughout Hardin County including the Fort Knox military community. The Fort Knox PCS Bootcamp was built because military families navigating a PCS housing decision face a specific set of challenges — compressed timelines, remote buying, VA loan complexity, and the need to think about the exit strategy before they close — that generic home buying content never addresses. When your orders arrive and you need to move fast, this course gives you the framework to make a confident decision.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+15022649376" className="btn-primary" style={{ fontSize: "0.75rem" }}>Call (502) 264-9376</a>
            <a href="mailto:RhomanMJames@gmail.com" className="btn-outline" style={{ fontSize: "0.75rem" }}>Send an Email</a>
          </div>
        </div>
      </section>

      <section style={{ background: "white", padding: "6rem 1.5rem", textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1rem", lineHeight: 1.2 }} dangerouslySetInnerHTML={{ __html: `Ready to stop renting and<br /><em style="font-style:italic;color:#B8976A">start building equity at Fort Knox?</em>` }} />
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
