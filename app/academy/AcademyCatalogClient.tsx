"use client";
import { useState } from "react";
import { academyCourses } from "@/lib/academyCourses";
import { useAcademyAuth } from "@/lib/useAcademyAuth";

const faqs = [
  {
    q: "What does it actually cost?",
    a: "Nothing. Every course in the Elizabethtown Home Academy is completely free — all of them, right now, plus every new course added going forward.",
  },
  {
    q: "Why is a free account required?",
    a: "Creating an account lets us save your progress across courses, so you can start, stop, and pick up exactly where you left off. No payment info required, ever.",
  },
  {
    q: "How many courses are there right now?",
    a: `${academyCourses.length}+ courses and growing. New courses are added regularly across buying, selling, military relocation, investing, and homeownership.`,
  },
  {
    q: "Are these courses self-paced?",
    a: "Yes. Every course is self-paced — start, stop, and return anytime. Your progress is saved automatically.",
  },
  {
    q: "Is this really free, no catch?",
    a: "Really free. Rhoman James built this as a genuine resource for the community — if it helps you, a Google review or a referral is always appreciated, but never required.",
  },
];

export default function AcademyCatalogClient() {
  const { user, loading } = useAcademyAuth();
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const categories = Array.from(new Set(academyCourses.map((c) => c.tag)));
  const filteredCourses = categoryFilter ? academyCourses.filter((c) => c.tag === categoryFilter) : academyCourses;

  return (
    <main>
      {/* ══════════ HERO ══════════ */}
      <section style={{ paddingTop: "8rem", paddingBottom: "4rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "var(--bg-soft)", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", fontWeight: 600, color: "var(--blue)", background: "var(--blue-pale)", padding: "0.5rem 1.1rem", borderRadius: "999px", marginBottom: "1.5rem" }}>
          Elizabethtown Home Academy, by Rhoman James
        </div>
        <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text)", lineHeight: 1.1, marginBottom: "1.25rem", maxWidth: "44rem", marginLeft: "auto", marginRight: "auto" }}>
          Every real estate course you&apos;ll ever need.<br /><span style={{ color: "var(--blue)" }}>Completely free.</span>
        </h1>
        <p style={{ fontSize: "1.1rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: "38rem", margin: "0 auto 2.5rem" }}>
          {academyCourses.length}+ courses covering buying, selling, Fort Knox military relocation, investing, and homeownership across Kentucky. No cost, no catch — just a free account to save your progress.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1rem" }}>
          {loading ? null : user ? (
            <a href="/academy/dashboard" className="btn-primary">Go to My Dashboard</a>
          ) : (
            <>
              <a href="/academy/signup" className="btn-primary">Create Free Account</a>
              <a href="/academy/login" className="btn-outline">Log In</a>
            </>
          )}
        </div>
        <p style={{ fontSize: "0.8rem", color: "var(--muted2)" }}>No payment info. No trial. Just free.</p>
      </section>

      {/* ══════════ TRUST / STATS STRIP ══════════ */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap", textAlign: "center" }}>
          {[
            { num: `${academyCourses.length}+`, label: "Courses" },
            { num: "Free", label: "Every Course" },
            { num: "100%", label: "Self-Paced" },
            { num: "0", label: "Cost, Ever" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "var(--blue)", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: "0.4rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ VALUE PROPS ══════════ */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--bg-card)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {[
              { title: "Built for Kentucky", body: "Not generic national content — every course is grounded in real Kentucky loan programs, Kentucky attorney closings, and local market realities." },
              { title: "Growing Every Month", body: "New courses are added regularly, all free, all included the moment they're published." },
              { title: "Self-Paced, Always", body: "Start, stop, and pick up exactly where you left off. Nothing to schedule, nothing to miss." },
              { title: "From a Real Local Expert", body: "Written by a licensed Kentucky real estate professional who actually lives and works in this market." },
            ].map((v) => (
              <div key={v.title} className="service-card" style={{ padding: "2rem" }}>
                <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.6rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ COURSE GRID ══════════ */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--bg-soft)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 800, color: "var(--text)", marginBottom: "0.75rem" }}>
              Browse every free course
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--muted)" }}>All {academyCourses.length}+ courses, all free.</p>
          </div>

          {/* Category filter pills */}
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "3rem" }}>
            <button
              onClick={() => setCategoryFilter(null)}
              style={{
                fontSize: "0.82rem", fontWeight: 600, padding: "0.5rem 1.1rem", borderRadius: "999px", cursor: "pointer",
                border: categoryFilter === null ? "1px solid var(--blue)" : "1px solid var(--border)",
                background: categoryFilter === null ? "var(--blue-pale)" : "var(--bg-card)",
                color: categoryFilter === null ? "var(--blue)" : "var(--muted)",
              }}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category)}
                style={{
                  fontSize: "0.82rem", fontWeight: 600, padding: "0.5rem 1.1rem", borderRadius: "999px", cursor: "pointer",
                  border: categoryFilter === category ? "1px solid var(--blue)" : "1px solid var(--border)",
                  background: categoryFilter === category ? "var(--blue-pale)" : "var(--bg-card)",
                  color: categoryFilter === category ? "var(--blue)" : "var(--muted)",
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {filteredCourses.map((course) => (
              <a key={course.slug} href={`/academy/${course.slug}`} style={{ textDecoration: "none" }}>
                <article className="service-card" style={{ padding: "2rem", height: "100%", display: "flex", flexDirection: "column", background: "var(--bg-card)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)", background: "var(--blue-pale)", padding: "0.3rem 0.75rem", borderRadius: "999px" }}>{course.tag}</span>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--muted)" }}>Free</span>
                  </div>
                  <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.6rem", lineHeight: 1.35 }}>
                    {course.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "1.25rem", flexGrow: 1 }}>
                    {course.tagline}
                  </p>
                  <div style={{ display: "flex", gap: "1rem", fontSize: "0.76rem", color: "var(--muted2)", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                    <span>{course.modules} modules</span>
                    <span>·</span>
                    <span>{course.lessons} lessons</span>
                    <span>·</span>
                    <span>{course.estimatedHours}h</span>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--bg-card)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.2rem)", fontWeight: 800, color: "var(--text)", marginBottom: "2rem", textAlign: "center" }}>
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: "16px" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}
                >
                  <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text)" }}>{faq.q}</span>
                  <span style={{ color: "var(--blue)", fontSize: "1.1rem", flexShrink: 0, transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 1.5rem 1.25rem" }}>
                    <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--bg-soft)", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>
            Start learning today
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
            {academyCourses.length}+ courses, completely free, forever.
          </p>
          <a href="/academy/signup" className="btn-primary">Create Free Account</a>
        </div>
      </section>
    </main>
  );
}
