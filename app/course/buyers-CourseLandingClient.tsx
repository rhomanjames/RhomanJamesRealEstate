"use client";

const modules = [
  { num: "01", title: "Are You Ready to Buy?", lessons: 5, desc: "Financial readiness, credit, down payment, and the rent vs. buy decision." },
  { num: "02", title: "Getting Your Financing Right", lessons: 6, desc: "Every loan type explained — FHA, VA, USDA, Conventional, and KHC programs." },
  { num: "03", title: "Finding the Right Home", lessons: 5, desc: "Working with an agent, evaluating neighborhoods, and spotting red flags." },
  { num: "04", title: "Making an Offer", lessons: 5, desc: "Kentucky contracts, contingencies, earnest money, and negotiation strategy." },
  { num: "05", title: "Inspections & Due Diligence", lessons: 5, desc: "What inspectors find, how to negotiate repairs, and appraisal basics." },
  { num: "06", title: "Closing Day & Moving In", lessons: 4, desc: "Kentucky attorney closings, the Closing Disclosure, and first steps as a homeowner." },
];

const audiences = [
  { title: "First-Time Buyers", desc: "Never bought before? This course starts at zero and walks you through every step." },
  { title: "Military Families", desc: "PCS-ing to Fort Knox? Module 2 covers VA loans and BAH strategy in depth." },
  { title: "Repeat Buyers", desc: "Been a while since your last purchase? Markets and rules have changed — catch up fast." },
  { title: "Just Exploring", desc: "Not sure if buying is right for you yet? Start with Module 1 and find out." },
];

export default function CourseLandingClient() {
  return (
    <main>
      {/* Hero */}
      <section style={{ paddingTop: "8rem", paddingBottom: "5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "var(--dark)", position: "relative", textAlign: "center" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(184,151,106,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ width: 1, height: "3rem", background: "linear-gradient(to bottom, transparent, var(--gold))", margin: "0 auto 2rem" }} />
        <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
          100% Free · Self-Paced · Kentucky Specific
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300, color: "white", lineHeight: 1.1, marginBottom: "1.25rem" }}>
          The Kentucky<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Home Buyers Course</em>
        </h1>
        <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.85, maxWidth: "38rem", margin: "0 auto 2.5rem" }}>
          Everything you need to know about buying a home in Kentucky — from checking your credit to walking out of closing with your keys. Six modules. No fluff. Completely free.
        </p>

        {/* Stats */}
        <div style={{ display: "flex", gap: "2.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
          {[{ num: "6", label: "Modules" }, { num: "30", label: "Lessons" }, { num: "Free", label: "Always" }, { num: "KY", label: "Specific" }].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.2rem", fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", marginTop: "0.25rem" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div style={{ maxWidth: 480, margin: "0 auto", background: "var(--dark2)", border: "1px solid rgba(184,151,106,0.25)", padding: "2.5rem" }}>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Start Learning Free</p>
          <form action="https://formspree.io/f/maqgjlon" method="POST" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input type="hidden" name="_subject" value="New Kentucky Home Buyers Course Sign-Up" />
            <input type="hidden" name="_next" value="https://rhomanjames.com/course/watch" />
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
              Start the Free Course →
            </button>
            <p style={{ fontSize: "0.72rem", color: "var(--muted2)", margin: 0, lineHeight: 1.6 }}>
              No spam. No sales pressure. Just the information you need.
            </p>
          </form>
        </div>
      </section>

      {/* Modules */}
      <section style={{ background: "var(--dark2)", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem", textAlign: "center" }}>What You Will Learn</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 300, color: "white", marginBottom: "3rem", textAlign: "center" }}>Six modules. Everything you need.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {modules.map((m) => (
              <div key={m.num} className="service-card" style={{ padding: "2rem" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "3rem", fontWeight: 300, color: "rgba(184,151,106,0.15)", lineHeight: 1, marginBottom: "0.75rem" }} aria-hidden="true">{m.num}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.2rem", color: "white", marginBottom: "0.5rem", fontWeight: 400 }}>{m.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "0.75rem" }}>{m.desc}</p>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>{m.lessons} lessons</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section style={{ background: "var(--dark)", padding: "6rem 1.5rem", borderTop: "1px solid rgba(184,151,106,0.1)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Who This Course Is For</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 300, color: "white", marginBottom: "2rem" }}>Built for Kentucky buyers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", textAlign: "left" }}>
            {audiences.map((item) => (
              <div key={item.title} style={{ padding: "1.5rem", background: "var(--dark3)", border: "1px solid rgba(184,151,106,0.12)" }}>
                <div style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" }}>{item.title}</div>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--dark2)", padding: "6rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.2rem", fontWeight: 300, color: "white", marginBottom: "1rem" }}>Ready to get started?</h2>
          <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: "2rem" }}>Free. Self-paced. Specific to Kentucky. Start and finish on your schedule.</p>
          <a href="/course#top" className="btn-primary" style={{ fontSize: "0.78rem", letterSpacing: "0.2em" }}>
            Enroll Free →
          </a>
        </div>
      </section>
    </main>
  );
}
