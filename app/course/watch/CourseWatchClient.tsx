"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const modules = [
  {
    num: "01", slug: "module-1", title: "Are You Ready to Buy?",
    lessons: [
      "The rent vs. buy decision — running your real numbers",
      "How much money do you actually need to buy in Kentucky",
      "Understanding your credit score before you apply",
      "The debt-to-income ratio — what lenders actually look at",
      "Your home buying readiness checklist",
    ],
  },
  {
    num: "02", slug: "module-2", title: "Getting Your Financing Right",
    lessons: [
      "Every Kentucky loan type explained — FHA, VA, USDA, Conventional",
      "The Kentucky Housing Corporation (KHC) — who qualifies",
      "How to get pre-approved and what it means",
      "VA loans explained — the complete Fort Knox buyer guide",
      "Rate locks, points, and how to get the best rate",
      "What to never do between pre-approval and closing",
    ],
  },
  {
    num: "03", slug: "module-3", title: "Finding the Right Home",
    lessons: [
      "How to work with a buyer's agent in Kentucky",
      "Evaluating Elizabethtown and Hardin County neighborhoods",
      "What to look for beyond the listing photos",
      "School zones, commutes, and the details that matter",
      "Red flags — what should make you walk away",
    ],
  },
  {
    num: "04", slug: "module-4", title: "Making an Offer",
    lessons: [
      "How Kentucky real estate contracts work",
      "Contingencies — which ones to include and why",
      "Earnest money — how much and what happens to it",
      "How to compete without overpaying",
      "What happens after your offer is accepted",
    ],
  },
  {
    num: "05", slug: "module-5", title: "Inspections & Due Diligence",
    lessons: [
      "What a Kentucky home inspector actually checks",
      "How to attend your inspection and what to ask",
      "Negotiating repairs — what to ask for and what to let go",
      "The appraisal — what it is and what happens if it comes in low",
      "What can kill a deal and how to prevent it",
    ],
  },
  {
    num: "06", slug: "module-6", title: "Closing Day & Moving In",
    lessons: [
      "Kentucky attorney closings — what makes them different",
      "Reading your Closing Disclosure before you sign",
      "What to bring and what to expect on closing day",
      "First steps as a Kentucky homeowner",
    ],
  },
];

export default function CourseWatchClient() {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("course_completed");
      if (saved) setCompleted(JSON.parse(saved));
    } catch {}
  }, []);

  const toggleComplete = (key: string) => {
    const next = completed.includes(key)
      ? completed.filter((k) => k !== key)
      : [...completed, key];
    setCompleted(next);
    try { sessionStorage.setItem("course_completed", JSON.stringify(next)); } catch {}
  };

  const totalLessons = modules.reduce((a, m) => a + m.lessons.length, 0);
  const pct = Math.round((completed.length / totalLessons) * 100);

  return (
    <>
      <Navbar />
      <main style={{ background: "var(--dark)", minHeight: "100vh", paddingTop: "5.5rem" }}>
        <style>{`
          .module-card { background: var(--dark2); border: 1px solid rgba(184,151,106,0.15); margin-bottom: 1.25rem; transition: border-color 0.2s; }
          .module-card:hover { border-color: rgba(184,151,106,0.3); }
          .module-header { display: flex; align-items: center; gap: 1.25rem; padding: 1.5rem 2rem; cursor: pointer; }
          .lesson-row { display: flex; align-items: center; gap: 1rem; padding: 0.85rem 2rem 0.85rem 4rem; border-top: 1px solid rgba(184,151,106,0.08); cursor: pointer; transition: background 0.15s; }
          .lesson-row:hover { background: rgba(184,151,106,0.04); }
          .check-box { width: 18px; height: 18px; border: 1px solid rgba(184,151,106,0.4); flex-shrink: 0; display: flex; align-items: center; justify-content: center; transition: background 0.2s, border-color 0.2s; }
          .check-box.done { background: var(--gold); border-color: var(--gold); }
          .lesson-link { font-size: 0.88rem; color: var(--muted); text-decoration: none; flex: 1; line-height: 1.5; }
          .lesson-link:hover { color: var(--off-white); }
          .lesson-link.done-text { color: var(--muted2); text-decoration: line-through; }
        `}</style>

        {/* Progress header */}
        <div style={{ background: "var(--dark3)", borderBottom: "1px solid rgba(184,151,106,0.12)", padding: "1.25rem 3rem" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.25rem" }}>Your Progress</p>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 300, color: "white" }}>
                {completed.length} of {totalLessons} lessons complete
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ background: "var(--dark4)", height: 4, borderRadius: 2, overflow: "hidden" }}>
                <div style={{ background: "var(--gold)", height: "100%", width: `${pct}%`, transition: "width 0.4s ease", borderRadius: 2 }} />
              </div>
              <p style={{ fontSize: "0.68rem", color: "var(--muted)", marginTop: "0.35rem" }}>{pct}% complete</p>
            </div>
            {pct === 100 && (
              <div style={{ padding: "0.6rem 1.25rem", background: "rgba(184,151,106,0.12)", border: "1px solid rgba(184,151,106,0.3)", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)" }}>
                🎉 Course Complete!
              </div>
            )}
          </div>
        </div>

        {/* Course content */}
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "3rem 3rem 6rem" }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 300, color: "white", marginBottom: "0.5rem" }}>
            Kentucky Home Buyers Course
          </h1>
          <p style={{ fontSize: "0.88rem", color: "var(--muted)", marginBottom: "2.5rem", lineHeight: 1.7 }}>
            Work through each lesson at your own pace. Click a lesson to mark it complete. Your progress saves automatically.
          </p>

          {modules.map((mod) => {
            const modCompleted = mod.lessons.filter((_, i) => completed.includes(`${mod.slug}-${i}`)).length;
            const modDone = modCompleted === mod.lessons.length;
            return (
              <div key={mod.slug} className="module-card">
                <Link href={`/course/watch/${mod.slug}`} style={{ textDecoration: "none" }}>
                  <div className="module-header">
                    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.5rem", fontWeight: 300, color: modDone ? "var(--gold)" : "rgba(184,151,106,0.2)", lineHeight: 1, minWidth: 52 }}>{mod.num}</div>
                    <div style={{ flex: 1 }}>
                      <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.2rem", fontWeight: 400, color: "white", marginBottom: "0.2rem" }}>{mod.title}</h2>
                      <p style={{ fontSize: "0.72rem", color: "var(--muted)", letterSpacing: "0.1em" }}>{modCompleted}/{mod.lessons.length} lessons · {modDone ? "Complete ✓" : "In progress"}</p>
                    </div>
                    <div style={{ fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)" }}>Start →</div>
                  </div>
                </Link>
                {mod.lessons.map((lesson, i) => {
                  const key = `${mod.slug}-${i}`;
                  const done = completed.includes(key);
                  return (
                    <div key={key} className="lesson-row" onClick={() => toggleComplete(key)} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && toggleComplete(key)}>
                      <div className={`check-box${done ? " done" : ""}`} aria-hidden="true">
                        {done && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      </div>
                      <Link href={`/course/watch/${mod.slug}#lesson-${i}`} className={`lesson-link${done ? " done-text" : ""}`} onClick={(e) => e.stopPropagation()}>
                        {lesson}
                      </Link>
                    </div>
                  );
                })}
              </div>
            );
          })}

          {/* CTA at bottom */}
          <div style={{ marginTop: "3rem", padding: "2rem", background: "var(--dark3)", border: "1px solid rgba(184,151,106,0.2)", textAlign: "center" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", fontWeight: 300, color: "white", marginBottom: "0.5rem" }}>Questions as you go?</p>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: "1.25rem" }}>I'm always available for a free, no-pressure conversation.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+15022649376" className="btn-primary" style={{ fontSize: "0.75rem" }}>Call (502) 264-9376</a>
              <a href="mailto:RhomanMJames@gmail.com" className="btn-outline" style={{ fontSize: "0.75rem" }}>Send an Email</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
