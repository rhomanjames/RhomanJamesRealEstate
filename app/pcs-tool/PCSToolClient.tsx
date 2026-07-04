"use client";
import { useState } from "react";

// ─── 2026 Fort Knox BAH rates (approximate, with dependents / without) ───
const BAH_RATES: Record<string, { with: number; without: number }> = {
  "E-1": { with: 1389, without: 1041 }, "E-2": { with: 1389, without: 1041 },
  "E-3": { with: 1389, without: 1041 }, "E-4": { with: 1389, without: 1041 },
  "E-5": { with: 1503, without: 1128 }, "E-6": { with: 1602, without: 1206 },
  "E-7": { with: 1668, without: 1275 }, "E-8": { with: 1734, without: 1341 },
  "E-9": { with: 1812, without: 1422 },
  "W-1": { with: 1587, without: 1233 }, "W-2": { with: 1668, without: 1311 },
  "W-3": { with: 1734, without: 1374 }, "W-4": { with: 1809, without: 1449 },
  "W-5": { with: 1875, without: 1518 },
  "O-1": { with: 1545, without: 1197 }, "O-2": { with: 1638, without: 1290 },
  "O-3": { with: 1740, without: 1401 }, "O-4": { with: 1899, without: 1557 },
  "O-5": { with: 2031, without: 1665 }, "O-6": { with: 2091, without: 1734 },
};

const RANKS = Object.keys(BAH_RATES);

// Rough mortgage math constants
const RATE = 0.0625; // assumed 30yr fixed rate for estimates
const TAX_RATE = 0.0095; // Hardin County approx
const INS_MONTHLY = 115; // homeowner's insurance estimate

function maxHomePrice(bah: number): number {
  // Work backward: BAH minus taxes and insurance = available P&I
  // Iterate since taxes depend on price
  let price = 200000;
  for (let i = 0; i < 20; i++) {
    const monthlyTax = (price * TAX_RATE) / 12;
    const availablePI = bah - monthlyTax - INS_MONTHLY;
    if (availablePI <= 0) return 0;
    const r = RATE / 12;
    const n = 360;
    const newPrice = availablePI * ((Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n)));
    price = newPrice;
  }
  return Math.round(price / 1000) * 1000;
}

function monthlyPayment(price: number): number {
  const r = RATE / 12;
  const n = 360;
  const pi = price * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  const tax = (price * TAX_RATE) / 12;
  return Math.round(pi + tax + INS_MONTHLY);
}

// ─── Community data ───
const COMMUNITIES = [
  {
    id: "radcliff",
    name: "Radcliff",
    commute: "5–10 min to Chaffee Gate",
    range: [155000, 290000],
    vibe: "Highest military density in Hardin County. Diverse, community-oriented, most affordable. Your neighbors understand PCS life.",
    bestFor: ["chaffee", "budget", "military-community"],
    href: "/neighborhoods/radcliff",
  },
  {
    id: "vine-grove",
    name: "Vine Grove",
    commute: "~15 min to post",
    range: [160000, 280000],
    vibe: "Small-town character with newer subdivisions. Quiet streets, more space per dollar, strong family feel.",
    bestFor: ["space", "quiet", "value"],
    href: "/neighborhoods/vine-grove",
  },
  {
    id: "elizabethtown",
    name: "Elizabethtown",
    commute: "15–20 min to Chaffee Gate",
    range: [190000, 380000],
    vibe: "County seat with the most restaurants, retail, healthcare, and school options. Bigger city feel, higher price point.",
    bestFor: ["amenities", "schools", "restaurants"],
    href: "/neighborhoods/elizabethtown",
  },
  {
    id: "rineyville",
    name: "Rineyville",
    commute: "~15–20 min to post",
    range: [170000, 320000],
    vibe: "Rural Hardin County with larger lots and acreage options. For families who want land and privacy.",
    bestFor: ["land", "privacy", "space"],
    href: "/neighborhoods/rineyville",
  },
];

type Answers = {
  rank: string;
  dependents: string;
  timeline: string;
  priority: string;
  vaEligible: string;
  currentPlan: string;
};

const initialAnswers: Answers = {
  rank: "", dependents: "", timeline: "", priority: "", vaEligible: "", currentPlan: "",
};

const STEPS = [
  { id: "rank", title: "What's your rank?", subtitle: "This determines your BAH rate at Fort Knox." },
  { id: "dependents", title: "Do you have dependents?", subtitle: "BAH rates differ with and without dependents." },
  { id: "timeline", title: "When is your report date?", subtitle: "Your timeline shapes what's realistic." },
  { id: "priority", title: "What matters most to your family?", subtitle: "This helps match you to the right community." },
  { id: "vaEligible", title: "Are you VA loan eligible?", subtitle: "The VA loan changes your entire financial picture." },
  { id: "currentPlan", title: "What's your current housing plan?", subtitle: "Last question — then your personalized results." },
];

export default function PCSToolClient() {
  const [step, setStep] = useState(-1); // -1 = intro
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [showGate, setShowGate] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const setAnswer = (key: keyof Answers, value: string) => {
    setAnswers({ ...answers, [key]: value });
    if (step < STEPS.length - 1) {
      setTimeout(() => setStep(step + 1), 250);
    } else {
      setTimeout(() => setShowGate(true), 250);
    }
  };

  const handleGateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Attach all tool answers to the lead
    Object.entries(answers).forEach(([k, v]) => data.append(`tool_${k}`, v));
    try {
      await fetch("https://formspree.io/f/xdarzpzo", {
        method: "POST", body: data, headers: { Accept: "application/json" },
      });
    } catch {}
    setUnlocked(true);
  };

  // ─── Results calculation ───
  const bah = answers.rank
    ? BAH_RATES[answers.rank][answers.dependents === "yes" ? "with" : "without"]
    : 0;
  const maxPrice = maxHomePrice(bah);
  const comfortPrice = Math.round((maxPrice * 0.9) / 1000) * 1000;
  const payment = monthlyPayment(comfortPrice);

  const rankedCommunities = [...COMMUNITIES].sort((a, b) => {
    const score = (c: typeof COMMUNITIES[0]) => {
      let s = 0;
      if (answers.priority === "commute" && c.id === "radcliff") s += 3;
      if (answers.priority === "amenities" && c.id === "elizabethtown") s += 3;
      if (answers.priority === "space" && (c.id === "vine-grove" || c.id === "rineyville")) s += 3;
      if (answers.priority === "budget" && c.id === "radcliff") s += 2;
      if (answers.priority === "budget" && c.id === "vine-grove") s += 1;
      // Affordability fit
      if (comfortPrice >= c.range[0] && comfortPrice <= c.range[1] * 1.1) s += 2;
      if (comfortPrice >= c.range[1]) s += 1;
      return s;
    };
    return score(b) - score(a);
  });

  const timelineAdvice: Record<string, { label: string; advice: string }> = {
    "30days": {
      label: "Within 30 days",
      advice: "Your timeline is compressed. A standard financed purchase takes 30-45 days from accepted offer to closing — which means you should plan for temporary housing (hotel, short-term rental, or on-post lodging) while your purchase closes. Get pre-approved TODAY and consider starting your search remotely before you arrive.",
    },
    "1-3months": {
      label: "1–3 months",
      advice: "This is a workable timeline for a full purchase — but only if you start immediately. Get pre-approved this week, begin your remote search now, and plan to have a home under contract within 3-4 weeks of starting. A closing before or shortly after your report date is achievable.",
    },
    "3-6months": {
      label: "3–6 months",
      advice: "You have a comfortable timeline. Use it well: get pre-approved now (rates can be locked closer to purchase), research communities thoroughly, and consider a house-hunting trip if possible. You can afford to be selective.",
    },
    "6plus": {
      label: "6+ months",
      advice: "You're ahead of the game. Use this time to strengthen your financial position — improve your credit score if needed, save for closing costs, and study the market. Set up listing alerts now so you understand what your budget buys before you need to act.",
    },
    "here": {
      label: "Already at Fort Knox",
      advice: "You're in the best position of all — you can see homes in person, take your time, and act when the right property appears. If you're currently on post or renting, run the equity math: every month of waiting is a month of not building equity.",
    },
  };

  const vaAdvice: Record<string, string> = {
    yes: "You have access to the most powerful mortgage product in America: zero down payment, no PMI, and rates typically 0.25-0.5% below conventional. On your target price range, the VA loan saves you tens of thousands compared to conventional financing.",
    notsure: "Check your eligibility now — it takes minutes. Active duty with 90+ days of service, veterans, National Guard/Reserve with qualifying service, and surviving spouses are generally eligible. Your lender can pull your Certificate of Eligibility directly from the VA. If you're eligible, it changes everything.",
    no: "Without VA eligibility, your strongest options are FHA (3.5% down, 580+ credit) or conventional (3-5% down for first-time buyers). Kentucky Housing Corporation down payment assistance may also be available if you qualify — up to $10,000 for eligible buyers.",
  };

  // ─── RENDER ───

  const progressPct = step >= 0 ? Math.round(((step) / STEPS.length) * 100) : 0;

  return (
    <main style={{ background: "var(--bg-soft)", minHeight: "100vh" }}>

      {/* ══════════ INTRO ══════════ */}
      {step === -1 && !showGate && (
        <section style={{ paddingTop: "8rem", paddingBottom: "6rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", position: "relative", textAlign: "center" }}>
                    <div aria-hidden="true" style={{ width: 1, height: "3rem", background: "var(--blue)", margin: "0 auto 2rem" }} />
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem" }}>
            Free · 2 Minutes · Built for Fort Knox Families
          </p>
          <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.2rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.12, marginBottom: "1.5rem", maxWidth: "44rem", marginLeft: "auto", marginRight: "auto" }}>
            The Fort Knox<br /><em style={{ fontStyle: "italic", color: "var(--blue)" }}>PCS Decision Tool</em>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.85, maxWidth: "40rem", margin: "0 auto 1.5rem" }}>
            Six questions. Two minutes. A personalized housing recommendation built on your rank, your BAH, your timeline, and your family's priorities.
          </p>
          <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: "36rem", margin: "0 auto 3rem" }}>
            You'll get: what you can afford at Fort Knox, which Hardin County community fits your situation, the on-post vs. off-post math for your specific rank, and a clear next step based on your report date.
          </p>
          <button onClick={() => setStep(0)} className="btn-primary" style={{ cursor: "pointer", border: "none", fontSize: "0.82rem", letterSpacing: "0.2em", padding: "1rem 2.5rem" }}>
            Start the Tool →
          </button>
          <p style={{ fontSize: "0.72rem", color: "var(--muted2)", marginTop: "1.25rem" }}>
            No account needed. Results are personalized, not generic.
          </p>

          {/* What you get preview */}
          <div style={{ maxWidth: 900, margin: "5rem auto 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", textAlign: "left" }}>
            {[
              { num: "01", title: "Your Buying Power", desc: "Maximum home price where your total payment stays at or under your Fort Knox BAH." },
              { num: "02", title: "Your Community Match", desc: "Which Hardin County community fits your commute, budget, and family priorities." },
              { num: "03", title: "On-Post vs Off-Post Math", desc: "The 3-year equity comparison for your specific rank and BAH rate." },
              { num: "04", title: "Your Timeline Plan", desc: "Exactly what to do and when, based on your report date." },
            ].map((item) => (
              <div key={item.num} style={{ padding: "1.5rem", background: "var(--text)", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "0 1px 2px rgba(11,15,25,0.03)" }}>
                <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "2rem", fontWeight: 700, color: "var(--border)", lineHeight: 1, marginBottom: "0.5rem" }}>{item.num}</div>
                <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.05rem", color: "var(--text)", marginBottom: "0.4rem", fontWeight: 400 }}>{item.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ══════════ QUESTION STEPS ══════════ */}
      {step >= 0 && step < STEPS.length && !showGate && (
        <section style={{ paddingTop: "8rem", paddingBottom: "6rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", maxWidth: 640, margin: "0 auto" }}>
          {/* Progress */}
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--blue)" }}>Question {step + 1} of {STEPS.length}</span>
              <span style={{ fontSize: "0.65rem", color: "var(--muted2)" }}>{progressPct}%</span>
            </div>
            <div style={{ background: "var(--bg-soft)", height: 3, borderRadius: 2, overflow: "hidden" }}>
              <div style={{ background: "var(--blue)", height: "100%", width: `${progressPct}%`, transition: "width 0.4s ease" }} />
            </div>
          </div>

          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 700, color: "var(--text)", marginBottom: "0.75rem", lineHeight: 1.2 }}>
            {STEPS[step].title}
          </h2>
          <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginBottom: "2.5rem" }}>{STEPS[step].subtitle}</p>

          {/* Rank */}
          {STEPS[step].id === "rank" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))", gap: "0.6rem" }}>
              {RANKS.map((r) => (
                <button key={r} onClick={() => setAnswer("rank", r)} style={{
                  padding: "0.9rem 0.5rem", background: answers.rank === r ? "var(--border)" : "var(--text)",
                  border: `1px solid ${answers.rank === r ? "var(--blue)" : "var(--border)"}`,
                  color: answers.rank === r ? "var(--blue)" : "var(--muted)", cursor: "pointer",
                  fontFamily: "'Jost', system-ui, sans-serif", fontSize: "0.85rem", letterSpacing: "0.08em",
                  transition: "all 0.15s",
                }}>
                  {r}
                </button>
              ))}
            </div>
          )}

          {/* Dependents */}
          {STEPS[step].id === "dependents" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { v: "yes", label: "Yes — spouse and/or children", sub: "Higher BAH rate applies" },
                { v: "no", label: "No dependents", sub: "Single BAH rate applies" },
              ].map((opt) => (
                <button key={opt.v} onClick={() => setAnswer("dependents", opt.v)} style={{
                  padding: "1.25rem 1.5rem", textAlign: "left", background: "var(--text)",
                  border: "1px solid var(--border)", borderRadius: "16px", cursor: "pointer", transition: "all 0.15s",
                }}>
                  <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: "0.2rem" }}>{opt.label}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--muted2)" }}>{opt.sub}</div>
                </button>
              ))}
            </div>
          )}

          {/* Timeline */}
          {STEPS[step].id === "timeline" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { v: "30days", label: "Within 30 days", sub: "Compressed — but there's a plan for this" },
                { v: "1-3months", label: "1 to 3 months", sub: "Workable for a full purchase if you start now" },
                { v: "3-6months", label: "3 to 6 months", sub: "Comfortable timeline with room to be selective" },
                { v: "6plus", label: "6+ months out", sub: "Ahead of the game — time to prepare properly" },
                { v: "here", label: "Already at Fort Knox", sub: "Best position of all" },
              ].map((opt) => (
                <button key={opt.v} onClick={() => setAnswer("timeline", opt.v)} style={{
                  padding: "1.25rem 1.5rem", textAlign: "left", background: "var(--text)",
                  border: "1px solid var(--border)", borderRadius: "16px", cursor: "pointer", transition: "all 0.15s",
                }}>
                  <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: "0.2rem" }}>{opt.label}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--muted2)" }}>{opt.sub}</div>
                </button>
              ))}
            </div>
          )}

          {/* Priority */}
          {STEPS[step].id === "priority" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { v: "commute", label: "Shortest commute to post", sub: "Minutes matter — I want to be close to my gate" },
                { v: "amenities", label: "Restaurants, retail, and school options", sub: "City amenities are worth a longer commute" },
                { v: "space", label: "Space, land, and quiet", sub: "Larger lots and room to breathe" },
                { v: "budget", label: "Maximum value for the money", sub: "Best house possible within our BAH" },
              ].map((opt) => (
                <button key={opt.v} onClick={() => setAnswer("priority", opt.v)} style={{
                  padding: "1.25rem 1.5rem", textAlign: "left", background: "var(--text)",
                  border: "1px solid var(--border)", borderRadius: "16px", cursor: "pointer", transition: "all 0.15s",
                }}>
                  <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: "0.2rem" }}>{opt.label}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--muted2)" }}>{opt.sub}</div>
                </button>
              ))}
            </div>
          )}

          {/* VA Eligible */}
          {STEPS[step].id === "vaEligible" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { v: "yes", label: "Yes — I'm VA loan eligible", sub: "Active duty, veteran, or eligible spouse" },
                { v: "notsure", label: "Not sure", sub: "The tool will explain how to check" },
                { v: "no", label: "No", sub: "There are still strong options" },
              ].map((opt) => (
                <button key={opt.v} onClick={() => setAnswer("vaEligible", opt.v)} style={{
                  padding: "1.25rem 1.5rem", textAlign: "left", background: "var(--text)",
                  border: "1px solid var(--border)", borderRadius: "16px", cursor: "pointer", transition: "all 0.15s",
                }}>
                  <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: "0.2rem" }}>{opt.label}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--muted2)" }}>{opt.sub}</div>
                </button>
              ))}
            </div>
          )}

          {/* Current Plan */}
          {STEPS[step].id === "currentPlan" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { v: "buy", label: "Planning to buy", sub: "Ready to build equity from day one" },
                { v: "onpost", label: "Waiting for on-post housing", sub: "On the waitlist or planning to apply" },
                { v: "rent", label: "Planning to rent off-post", sub: "Keeping options open" },
                { v: "undecided", label: "Completely undecided", sub: "That's exactly why this tool exists" },
              ].map((opt) => (
                <button key={opt.v} onClick={() => setAnswer("currentPlan", opt.v)} style={{
                  padding: "1.25rem 1.5rem", textAlign: "left", background: "var(--text)",
                  border: "1px solid var(--border)", borderRadius: "16px", cursor: "pointer", transition: "all 0.15s",
                }}>
                  <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.1rem", color: "var(--text)", marginBottom: "0.2rem" }}>{opt.label}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--muted2)" }}>{opt.sub}</div>
                </button>
              ))}
            </div>
          )}

          {step > 0 && (
            <button onClick={() => setStep(step - 1)} style={{ background: "none", border: "none", color: "var(--muted2)", cursor: "pointer", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "2rem", padding: 0 }}>
              ← Back
            </button>
          )}
        </section>
      )}

      {/* ══════════ LEAD GATE ══════════ */}
      {showGate && !unlocked && (
        <section style={{ paddingTop: "8rem", paddingBottom: "6rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
          <div aria-hidden="true" style={{ width: 1, height: "3rem", background: "var(--blue)", margin: "0 auto 2rem" }} />
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem" }}>Your Results Are Ready</p>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1rem", lineHeight: 1.2 }}>
            Your personalized Fort Knox<br />housing plan is built
          </h2>
          <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Enter your name and email to see your buying power, community match, on-post vs. off-post math, and timeline plan — all based on your answers.
          </p>
          <form onSubmit={handleGateSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", textAlign: "left", background: "var(--text)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2rem" }}>
            <input type="hidden" name="_subject" value="PCS Tool Completion — Fort Knox Lead" />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="name" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)" }}>Your Name</label>
              <input className="form-input" type="text" id="name" name="name" required placeholder="Jane Smith" autoComplete="name" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="email" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)" }}>Email Address</label>
              <input className="form-input" type="email" id="email" name="email" required placeholder="jane@example.com" autoComplete="email" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <label htmlFor="phone" style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)" }}>Phone <span style={{ fontWeight: 700 }}>(optional)</span></label>
              <input className="form-input" type="tel" id="phone" name="phone" placeholder="(502) 000-0000" autoComplete="tel" />
            </div>
            <button type="submit" className="btn-primary" style={{ cursor: "pointer", border: "none", marginTop: "0.5rem", fontSize: "0.78rem", letterSpacing: "0.2em" }}>
              Show My Results →
            </button>
            <p style={{ fontSize: "0.7rem", color: "var(--muted2)", margin: 0, lineHeight: 1.6, textAlign: "center" }}>
              No spam. No pressure. Your results appear instantly.
            </p>
          </form>
        </section>
      )}

      {/* ══════════ RESULTS ══════════ */}
      {unlocked && (
        <section style={{ paddingTop: "7rem", paddingBottom: "6rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem" }}>Your Personalized Results</p>
            <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: "var(--text)", lineHeight: 1.15 }}>
              Your Fort Knox<br /><em style={{ fontStyle: "italic", color: "var(--blue)" }}>Housing Plan</em>
            </h1>
          </div>

          {/* 1 — Buying Power */}
          <div style={{ background: "var(--text)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2.5rem", marginBottom: "1.5rem" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1.5rem" }}>01 · Your Buying Power</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem", marginBottom: "1.5rem" }}>
              <div>
                <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "2.4rem", fontWeight: 700, color: "var(--blue)", lineHeight: 1 }}>${bah.toLocaleString()}</div>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted2)", marginTop: "0.4rem" }}>Your Monthly BAH ({answers.rank})</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "2.4rem", fontWeight: 700, color: "var(--text)", lineHeight: 1 }}>${comfortPrice.toLocaleString()}</div>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted2)", marginTop: "0.4rem" }}>Comfortable Target Price</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "2.4rem", fontWeight: 700, color: "var(--text)", lineHeight: 1 }}>${payment.toLocaleString()}</div>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted2)", marginTop: "0.4rem" }}>Est. Total Monthly Payment</div>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.8, margin: 0 }}>
              At a target price of ${comfortPrice.toLocaleString()} with a VA loan (zero down), your estimated total payment — principal, interest, Hardin County taxes, and insurance — is ${payment.toLocaleString()}/month against your ${bah.toLocaleString()} BAH. {payment <= bah ? `That leaves roughly $${(bah - payment).toLocaleString()}/month of BAH cushion.` : `That's slightly above your BAH — a smaller target price or larger down payment closes the gap.`} Your absolute maximum at full BAH utilization is approximately ${maxPrice.toLocaleString()}.
            </p>
            <p style={{ fontSize: "0.72rem", color: "var(--muted2)", marginTop: "1rem", fontStyle: "italic" }}>
              Estimates assume a 30-year VA loan at current market rates, Hardin County property taxes, and typical insurance. Your actual rate and payment will vary — get exact numbers from a VA-experienced lender.
            </p>
          </div>

          {/* 2 — Community Match */}
          <div style={{ background: "var(--text)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2.5rem", marginBottom: "1.5rem" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1.5rem" }}>02 · Your Community Match</p>
            {rankedCommunities.slice(0, 2).map((c, i) => (
              <div key={c.id} style={{ marginBottom: i === 0 ? "1.5rem" : 0, padding: "1.5rem", background: i === 0 ? "var(--border)" : "var(--bg-soft)", border: `1px solid ${i === 0 ? "var(--border)" : "var(--border)"}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.6rem" }}>
                  <div>
                    <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--blue)" }}>{i === 0 ? "Best Match" : "Also Consider"}</span>
                    <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.5rem", color: "var(--text)", fontWeight: 400, margin: "0.2rem 0 0" }}>{c.name}</h3>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "0.72rem", color: "var(--blue)" }}>{c.commute}</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--muted2)" }}>${(c.range[0]/1000)}K – ${(c.range[1]/1000)}K</div>
                  </div>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: "0.75rem" }}>{c.vibe}</p>
                <a href={c.href} style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--blue)", textDecoration: "none" }}>Full {c.name} Guide →</a>
              </div>
            ))}
          </div>

          {/* 3 — On-post vs Off-post */}
          <div style={{ background: "var(--text)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2.5rem", marginBottom: "1.5rem" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1.5rem" }}>03 · On-Post vs. Off-Post — Your 3-Year Math</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.5rem" }}>
              <div style={{ padding: "1.5rem", background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "0 1px 2px rgba(11,15,25,0.03)" }}>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "1rem" }}>On-Post (3 Years)</p>
                <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "2rem", fontWeight: 700, color: "var(--muted2)", lineHeight: 1, marginBottom: "0.4rem" }}>$0</div>
                <p style={{ fontSize: "0.75rem", color: "var(--muted2)", margin: 0 }}>Equity accumulated</p>
                <p style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.75rem", lineHeight: 1.6 }}>${(bah * 36).toLocaleString()} of BAH goes to the housing office over 3 years. None of it comes back.</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "16px", boxShadow: "0 1px 2px rgba(11,15,25,0.03)" }}>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem" }}>Buying Off-Post (3 Years)</p>
                <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "2rem", fontWeight: 700, color: "var(--blue)", lineHeight: 1, marginBottom: "0.4rem" }}>${Math.round((comfortPrice * 0.045 + comfortPrice * 0.03 * 3) / 1000)}K+</div>
                <p style={{ fontSize: "0.75rem", color: "var(--muted)", margin: 0 }}>Estimated equity built</p>
                <p style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: "0.75rem", lineHeight: 1.6 }}>Principal paydown plus modest appreciation on a ${comfortPrice.toLocaleString()} home. When you PCS: sell for a gain or keep it as a rental.</p>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.8, margin: 0 }}>
              {answers.currentPlan === "onpost"
                ? "You mentioned you're considering on-post housing. Worth knowing: waitlists for many rank and family size combinations run 6-12 months. Families often pay off-post rent while waiting — all the cost of off-post living with none of the equity. If the wait is long, the buying math gets even stronger."
                : "The equity difference compounds at every duty station. Military families who buy at each assignment and rent the properties out when they PCS build portfolios that generate income for decades — all started with zero-down VA loans."}
            </p>
          </div>

          {/* 4 — Timeline Plan */}
          <div style={{ background: "var(--text)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2.5rem", marginBottom: "1.5rem" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem" }}>04 · Your Timeline Plan</p>
            <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.3rem", color: "var(--text)", fontWeight: 400, marginBottom: "1rem" }}>
              {timelineAdvice[answers.timeline]?.label}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.85, margin: 0 }}>
              {timelineAdvice[answers.timeline]?.advice}
            </p>
          </div>

          {/* 5 — VA Loan */}
          <div style={{ background: "var(--text)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2.5rem", marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--blue)", marginBottom: "1rem" }}>05 · Your Financing Picture</p>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.85, margin: 0 }}>
              {vaAdvice[answers.vaEligible]}
            </p>
          </div>

          {/* Next steps CTA */}
          <div style={{ background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: "16px", padding: "3rem 2.5rem", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1rem" }}>
              Want to talk through your specific situation?
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "34rem", margin: "0 auto 2rem" }}>
              This tool gives you the framework. A conversation gives you the specifics — current listings in your range, gate-specific commute advice, and lender recommendations. Free, no pressure, built around your timeline.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
              <a href="tel:+15022649376" className="btn-primary" style={{ fontSize: "0.78rem", letterSpacing: "0.15em" }}>Call or Text (502) 264-9376</a>
              <a href="mailto:RhomanMJames@gmail.com" className="btn-outline" style={{ fontSize: "0.78rem" }}>Email Rhoman</a>
            </div>
            <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
              <a href="/fort-knox-course" style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--blue)", textDecoration: "none" }}>Free PCS Bootcamp →</a>
              <a href="/tools/va-loan-calculator" style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--blue)", textDecoration: "none" }}>VA Loan Calculator →</a>
              <a href="/neighborhoods" style={{ fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--blue)", textDecoration: "none" }}>Neighborhood Guides →</a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
