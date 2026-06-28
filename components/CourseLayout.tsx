"use client";
import { useState } from "react";
import Link from "next/link";

interface Lesson {
  id: string;
  title: string;
  content: string;
  callout?: string;
  checklist?: string[];
}

interface CourseLayoutProps {
  moduleNum: string;
  moduleTitle: string;
  totalModules: number;
  prevModule: { slug: string; title: string } | null;
  nextModule: { slug: string; title: string } | null;
  lessons: Lesson[];
}

function renderContent(text: string) {
  const lines = text.trim().split('\n');
  return lines.map((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) return <br key={i} />;
    if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.slice(2,-2).includes('**')) {
      return <h3 key={i} style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.15rem", fontWeight: 400, color: "white", margin: "1.5rem 0 0.5rem" }}>{trimmed.slice(2,-2)}</h3>;
    }
    // Inline bold
    const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} style={{ fontSize: "0.95rem", color: "#C8C4BC", lineHeight: 1.9, marginBottom: "0.75rem" }}>
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**')
            ? <strong key={j} style={{ color: "var(--off-white)", fontWeight: 500 }}>{part.slice(2,-2)}</strong>
            : part
        )}
      </p>
    );
  });
}

export default function CourseLayout({ moduleNum, moduleTitle, totalModules, prevModule, nextModule, lessons }: CourseLayoutProps) {
  const [activeLesson, setActiveLesson] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleComplete = (i: number) => {
    setCompleted(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  const lesson = lessons[activeLesson];
  const allDone = completed.length === lessons.length;

  return (
    <main style={{ background: "var(--dark)", minHeight: "100vh", paddingTop: "5.5rem" }}>
      <style>{`
        .course-wrap { display: grid; grid-template-columns: 260px 1fr; min-height: calc(100vh - 5.5rem); }
        .course-sidebar { background: var(--dark2); border-right: 1px solid rgba(184,151,106,0.12); padding: 2rem 0; position: sticky; top: 5.5rem; height: calc(100vh - 5.5rem); overflow-y: auto; }
        .course-main { padding: 3rem 4rem 6rem; max-width: 780px; }
        .lesson-btn { display: flex; align-items: flex-start; gap: 0.75rem; width: 100%; background: none; border: none; padding: 0.85rem 1.5rem; cursor: pointer; text-align: left; border-left: 2px solid transparent; transition: all 0.15s; }
        .lesson-btn:hover { background: rgba(184,151,106,0.04); }
        .lesson-btn.active { border-left-color: var(--gold); background: rgba(184,151,106,0.07); }
        .lesson-num { font-size: 0.7rem; color: var(--muted2); min-width: 20px; padding-top: 2px; }
        .lesson-name { font-size: 0.8rem; color: var(--muted); line-height: 1.45; }
        .lesson-btn.active .lesson-name { color: var(--gold); }
        .lesson-btn.done-lesson .lesson-name { color: var(--muted2); }
        .check-circle { width: 16px; height: 16px; border: 1px solid rgba(184,151,106,0.35); border-radius: 50%; flex-shrink: 0; margin-top: 2px; display: flex; align-items: center; justify-content: center; }
        .check-circle.filled { background: var(--gold); border-color: var(--gold); }
        .callout-box { background: var(--dark3); border-left: 3px solid var(--gold); padding: 1.25rem 1.5rem; margin: 2rem 0; border-radius: 0 2px 2px 0; }
        .checklist-item { display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.6rem 0; border-bottom: 1px solid rgba(184,151,106,0.08); }
        .check-sq { width: 16px; height: 16px; border: 1px solid rgba(184,151,106,0.4); flex-shrink: 0; margin-top: 2px; }
        @media (max-width: 768px) {
          .course-wrap { grid-template-columns: 1fr; }
          .course-sidebar { position: static; height: auto; }
          .course-main { padding: 2rem 1.5rem 4rem; }
        }
      `}</style>

      <div className="course-wrap">
        {/* Sidebar */}
        <aside className="course-sidebar" aria-label="Course navigation">
          {/* Back link */}
          <Link href="/course/watch" style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1.5rem 1rem", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted2)", textDecoration: "none" }}>
            ← All Modules
          </Link>
          <div style={{ padding: "0 1.5rem 1rem", borderBottom: "1px solid rgba(184,151,106,0.1)", marginBottom: "0.75rem" }}>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.3rem" }}>Module {moduleNum}</p>
            <p style={{ fontSize: "0.88rem", color: "white", lineHeight: 1.4, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{moduleTitle}</p>
          </div>
          {lessons.map((l, i) => {
            const done = completed.includes(i);
            const active = activeLesson === i;
            return (
              <button key={i} className={`lesson-btn${active ? " active" : ""}${done ? " done-lesson" : ""}`} onClick={() => setActiveLesson(i)}>
                <div className={`check-circle${done ? " filled" : ""}`} aria-hidden="true">
                  {done && <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                <div>
                  <div className="lesson-num">Lesson {i + 1}</div>
                  <div className="lesson-name">{l.title}</div>
                </div>
              </button>
            );
          })}

          {/* Progress */}
          <div style={{ padding: "1.25rem 1.5rem", marginTop: "1rem", borderTop: "1px solid rgba(184,151,106,0.1)" }}>
            <div style={{ background: "var(--dark3)", height: 3, borderRadius: 2, overflow: "hidden", marginBottom: "0.4rem" }}>
              <div style={{ background: "var(--gold)", height: "100%", width: `${(completed.length / lessons.length) * 100}%`, transition: "width 0.3s" }} />
            </div>
            <p style={{ fontSize: "0.65rem", color: "var(--muted2)" }}>{completed.length}/{lessons.length} complete</p>
          </div>
        </aside>

        {/* Main content */}
        <article className="course-main">
          {/* Lesson header */}
          <div style={{ marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" }}>
              Module {moduleNum} · Lesson {activeLesson + 1} of {lessons.length}
            </p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 300, color: "white", lineHeight: 1.2, marginBottom: "1rem" }}>
              {lesson.title}
            </h1>
            <div aria-hidden="true" style={{ width: "3rem", height: "1px", background: "var(--gold)" }} />
          </div>

          {/* Lesson content */}
          <div id={lesson.id}>{renderContent(lesson.content)}</div>

          {/* Callout */}
          {lesson.callout && (
            <div className="callout-box">
              <p style={{ fontSize: "0.95rem", color: "var(--off-white)", lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>{lesson.callout}</p>
            </div>
          )}

          {/* Checklist */}
          {lesson.checklist && lesson.checklist.length > 0 && (
            <div style={{ marginTop: "2rem" }}>
              <p style={{ fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Lesson Checklist</p>
              {lesson.checklist.map((item, i) => (
                <div key={i} className="checklist-item">
                  <div className="check-sq" aria-hidden="true" />
                  <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          )}

          {/* Mark complete + navigation */}
          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(184,151,106,0.15)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <button
              onClick={() => toggleComplete(activeLesson)}
              style={{
                display: "flex", alignItems: "center", gap: "0.6rem",
                background: completed.includes(activeLesson) ? "rgba(184,151,106,0.12)" : "transparent",
                border: `1px solid ${completed.includes(activeLesson) ? "var(--gold)" : "rgba(184,151,106,0.3)"}`,
                color: completed.includes(activeLesson) ? "var(--gold)" : "var(--muted)",
                padding: "0.65rem 1.25rem", cursor: "pointer",
                fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase",
                fontFamily: "'Jost', system-ui, sans-serif", transition: "all 0.2s",
              }}
            >
              {completed.includes(activeLesson) ? "✓ Marked Complete" : "Mark as Complete"}
            </button>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              {activeLesson > 0 && (
                <button onClick={() => setActiveLesson(activeLesson - 1)} className="btn-outline" style={{ fontSize: "0.72rem", padding: "0.65rem 1.25rem", cursor: "pointer", border: "1px solid rgba(184,151,106,0.3)", background: "none", color: "var(--muted)", fontFamily: "'Jost', system-ui, sans-serif" }}>
                  ← Previous
                </button>
              )}
              {activeLesson < lessons.length - 1 ? (
                <button onClick={() => { toggleComplete(activeLesson); setActiveLesson(activeLesson + 1); }} className="btn-primary" style={{ fontSize: "0.72rem", padding: "0.65rem 1.25rem", cursor: "pointer", border: "none", fontFamily: "'Jost', system-ui, sans-serif" }}>
                  Next Lesson →
                </button>
              ) : nextModule ? (
                <Link href={`/course/watch/${nextModule.slug}`} className="btn-primary" style={{ fontSize: "0.72rem", padding: "0.65rem 1.25rem" }} onClick={() => toggleComplete(activeLesson)}>
                  Next Module →
                </Link>
              ) : (
                <Link href="/course/watch" className="btn-primary" style={{ fontSize: "0.72rem", padding: "0.65rem 1.25rem" }}>
                  Complete Course ✓
                </Link>
              )}
            </div>
          </div>

          {/* Module complete banner */}
          {allDone && (
            <div style={{ marginTop: "2rem", padding: "1.5rem 2rem", background: "rgba(184,151,106,0.08)", border: "1px solid rgba(184,151,106,0.3)", textAlign: "center" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.3rem", color: "white", marginBottom: "0.5rem" }}>Module {moduleNum} Complete! 🎉</p>
              {nextModule ? (
                <Link href={`/course/watch/${nextModule.slug}`} className="btn-primary" style={{ fontSize: "0.72rem", display: "inline-block", marginTop: "0.75rem" }}>
                  Start Module: {nextModule.title} →
                </Link>
              ) : (
                <div>
                  <p style={{ fontSize: "0.88rem", color: "var(--muted)", marginBottom: "1rem" }}>You have completed the entire Kentucky Home Buyers Course.</p>
                  <a href="tel:+15022649376" className="btn-primary" style={{ fontSize: "0.75rem", display: "inline-block" }}>Call Rhoman — (502) 264-9376</a>
                </div>
              )}
            </div>
          )}

          {/* CTA box */}
          <div style={{ marginTop: "3rem", padding: "1.75rem", background: "var(--dark3)", border: "1px solid rgba(184,151,106,0.15)" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" }}>Questions on this lesson?</p>
            <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
              I'm always available for a free, no-pressure conversation about anything covered in this course.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="tel:+15022649376" className="btn-primary" style={{ fontSize: "0.72rem" }}>Call (502) 264-9376</a>
              <a href="mailto:RhomanMJames@gmail.com" className="btn-outline" style={{ fontSize: "0.72rem" }}>Email Rhoman</a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
