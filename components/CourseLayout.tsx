"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";

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
  courseSlug?: string;   // optional — if provided along with userId, progress saves to Supabase
  userId?: string;       // optional — legacy free course pages don't have auth, so this is skipped
}

function renderContent(text: string) {
  const lines = text.trim().split('\n');
  return lines.map((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) return <br key={i} />;
    if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.slice(2,-2).includes('**')) {
      return <h3 key={i} style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "var(--text)", margin: "1.5rem 0 0.5rem" }}>{trimmed.slice(2,-2)}</h3>;
    }
    const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} style={{ fontSize: "0.98rem", color: "var(--muted)", lineHeight: 1.85, marginBottom: "0.9rem" }}>
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**')
            ? <strong key={j} style={{ color: "var(--text)", fontWeight: 700 }}>{part.slice(2,-2)}</strong>
            : part
        )}
      </p>
    );
  });
}

export default function CourseLayout({ moduleNum, moduleTitle, totalModules, prevModule, nextModule, lessons, courseSlug, userId }: CourseLayoutProps) {
  const pathname = usePathname();
  const [activeLesson, setActiveLesson] = useState(0);
  const [completed, setCompleted] = useState<string[]>([]); // now stores lesson IDs, not indices
  const [loadingProgress, setLoadingProgress] = useState(true);

  // Works in two contexts:
  //  - Academy pages (courseSlug provided): use /academy/{slug} URLs
  //  - Legacy free-course module pages (no courseSlug): derive paths from the
  //    current URL so nothing needs to change in the 30 existing page files.
  const watchBase = pathname.replace(/\/[^/]+$/, ""); // strips the last path segment, e.g. "/course/watch/module-2" -> "/course/watch"
  const overviewHref = courseSlug ? `/academy/${courseSlug}` : watchBase.replace(/\/watch$/, "");
  const nextModuleHref = courseSlug
    ? `/academy/${courseSlug}/watch`
    : nextModule
      ? `${watchBase}/${nextModule.slug}`
      : "#";
  const finalCompleteHref = courseSlug ? "/academy/dashboard" : overviewHref;

  // Load existing progress from Supabase on mount
  useEffect(() => {
    if (!userId || !courseSlug) { setLoadingProgress(false); return; }
    supabase
      .from("lesson_progress")
      .select("lesson_id")
      .eq("user_id", userId)
      .eq("course_slug", courseSlug)
      .then(({ data, error }) => {
        if (!error && data) {
          setCompleted(data.map((row) => row.lesson_id));
        }
        setLoadingProgress(false);
      });
  }, [userId, courseSlug]);

  const toggleComplete = async (lessonIndex: number) => {
    const lessonId = lessons[lessonIndex].id;
    const isCurrentlyComplete = completed.includes(lessonId);

    if (isCurrentlyComplete) {
      // Remove from Supabase
      setCompleted((prev) => prev.filter((id) => id !== lessonId));
      if (userId && courseSlug) {
        await supabase
          .from("lesson_progress")
          .delete()
          .eq("user_id", userId)
          .eq("course_slug", courseSlug)
          .eq("lesson_id", lessonId);
      }
    } else {
      // Save to Supabase
      setCompleted((prev) => [...prev, lessonId]);
      if (userId && courseSlug) {
        await supabase
          .from("lesson_progress")
          .upsert(
            { user_id: userId, course_slug: courseSlug, lesson_id: lessonId },
            { onConflict: "user_id,course_slug,lesson_id" }
          );
      }
    }
  };

  const lesson = lessons[activeLesson];
  const isLessonComplete = (index: number) => completed.includes(lessons[index].id);
  const allDone = completed.length === lessons.length;

  return (
    <main style={{ background: "var(--bg-soft)", minHeight: "100vh", paddingTop: "5.5rem" }}>
      <style>{`
        .course-wrap { display: grid; grid-template-columns: 260px 1fr; min-height: calc(100vh - 5.5rem); }
        .course-sidebar { background: white; border-right: 1px solid var(--border); padding: 2rem 0; position: sticky; top: 5.5rem; height: calc(100vh - 5.5rem); overflow-y: auto; }
        .course-main { padding: 3rem 4rem 6rem; max-width: 780px; }
        .lesson-btn { display: flex; align-items: flex-start; gap: 0.75rem; width: 100%; background: none; border: none; padding: 0.85rem 1.5rem; cursor: pointer; text-align: left; border-left: 2px solid transparent; transition: all 0.15s; }
        .lesson-btn:hover { background: var(--blue-pale); }
        .lesson-btn.active { border-left-color: var(--blue); background: var(--blue-pale); }
        .lesson-num { font-size: 0.7rem; color: var(--muted2); min-width: 20px; padding-top: 2px; }
        .lesson-name { font-size: 0.8rem; color: var(--muted); line-height: 1.45; font-weight: 500; }
        .lesson-btn.active .lesson-name { color: var(--blue); }
        .lesson-btn.done-lesson .lesson-name { color: var(--muted2); }
        .check-circle { width: 16px; height: 16px; border: 1px solid var(--border-strong); border-radius: 50%; flex-shrink: 0; margin-top: 2px; display: flex; align-items: center; justify-content: center; }
        .check-circle.filled { background: var(--blue); border-color: var(--blue); }
        .callout-box { background: var(--blue-pale); border-left: 3px solid var(--blue); padding: 1.25rem 1.5rem; margin: 2rem 0; border-radius: 0 10px 10px 0; }
        .checklist-item { display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.6rem 0; border-bottom: 1px solid var(--border); }
        .check-sq { width: 16px; height: 16px; border: 1px solid var(--border-strong); border-radius: 4px; flex-shrink: 0; margin-top: 2px; }
        @media (max-width: 768px) {
          .course-wrap { grid-template-columns: 1fr; }
          .course-sidebar { position: static; height: auto; }
          .course-main { padding: 2rem 1.5rem 4rem; }
        }
      `}</style>

      <div className="course-wrap">
        {/* Sidebar */}
        <aside className="course-sidebar" aria-label="Course navigation">
          <Link href={overviewHref} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1.5rem 1rem", fontSize: "0.8rem", fontWeight: 500, color: "var(--muted2)", textDecoration: "none" }}>
            ← Course Overview
          </Link>
          <div style={{ padding: "0 1.5rem 1rem", borderBottom: "1px solid var(--border)", marginBottom: "0.75rem" }}>
            <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)", marginBottom: "0.3rem" }}>Module {moduleNum}</p>
            <p style={{ fontSize: "0.9rem", color: "var(--text)", lineHeight: 1.4, fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 700 }}>{moduleTitle}</p>
          </div>
          {lessons.map((l, i) => {
            const done = isLessonComplete(i);
            const active = activeLesson === i;
            return (
              <button key={l.id} className={`lesson-btn${active ? " active" : ""}${done ? " done-lesson" : ""}`} onClick={() => setActiveLesson(i)}>
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
          <div style={{ padding: "1.25rem 1.5rem", marginTop: "1rem", borderTop: "1px solid var(--border)" }}>
            <div style={{ background: "var(--border)", height: 4, borderRadius: 2, overflow: "hidden", marginBottom: "0.4rem" }}>
              <div style={{ background: "var(--blue)", height: "100%", width: `${(completed.length / lessons.length) * 100}%`, transition: "width 0.3s" }} />
            </div>
            <p style={{ fontSize: "0.72rem", color: "var(--muted2)" }}>
              {loadingProgress ? "Loading progress..." : `${completed.length}/${lessons.length} complete`}
            </p>
          </div>
        </aside>

        {/* Main content */}
        <article className="course-main">
          {/* Lesson header */}
          <div style={{ marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--blue)", marginBottom: "0.5rem" }}>
              Module {moduleNum} · Lesson {activeLesson + 1} of {lessons.length}
            </p>
            <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text)", lineHeight: 1.2, marginBottom: "1rem" }}>
              {lesson.title}
            </h1>
          </div>

          {/* Lesson content */}
          <div id={lesson.id}>{renderContent(lesson.content)}</div>

          {/* Callout */}
          {lesson.callout && (
            <div className="callout-box">
              <p style={{ fontSize: "0.95rem", color: "var(--text)", lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>{lesson.callout}</p>
            </div>
          )}

          {/* Checklist */}
          {lesson.checklist && lesson.checklist.length > 0 && (
            <div style={{ marginTop: "2rem" }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--blue)", marginBottom: "1rem" }}>Lesson Checklist</p>
              {lesson.checklist.map((item, i) => (
                <div key={i} className="checklist-item">
                  <div className="check-sq" aria-hidden="true" />
                  <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          )}

          {/* Mark complete + navigation */}
          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <button
              onClick={() => toggleComplete(activeLesson)}
              style={{
                display: "flex", alignItems: "center", gap: "0.6rem",
                background: isLessonComplete(activeLesson) ? "var(--blue-pale)" : "white",
                border: `1px solid ${isLessonComplete(activeLesson) ? "var(--blue)" : "var(--border)"}`,
                borderRadius: "10px",
                color: isLessonComplete(activeLesson) ? "var(--blue)" : "var(--muted)",
                padding: "0.65rem 1.25rem", cursor: "pointer",
                fontSize: "0.85rem", fontWeight: 600,
                fontFamily: "'Inter', system-ui, sans-serif", transition: "all 0.2s",
              }}
            >
              {isLessonComplete(activeLesson) ? "✓ Marked Complete" : "Mark as Complete"}
            </button>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              {activeLesson > 0 && (
                <button onClick={() => setActiveLesson(activeLesson - 1)} className="btn-outline" style={{ fontSize: "0.85rem", padding: "0.65rem 1.25rem", cursor: "pointer" }}>
                  ← Previous
                </button>
              )}
              {activeLesson < lessons.length - 1 ? (
                <button onClick={async () => { if (!isLessonComplete(activeLesson)) await toggleComplete(activeLesson); setActiveLesson(activeLesson + 1); }} className="btn-primary" style={{ fontSize: "0.85rem", padding: "0.65rem 1.25rem", cursor: "pointer", border: "none" }}>
                  Next Lesson →
                </button>
              ) : nextModule ? (
                <Link href={nextModuleHref} className="btn-primary" style={{ fontSize: "0.85rem", padding: "0.65rem 1.25rem" }} onClick={() => toggleComplete(activeLesson)}>
                  Next Module →
                </Link>
              ) : (
                <Link href={finalCompleteHref} className="btn-primary" style={{ fontSize: "0.85rem", padding: "0.65rem 1.25rem" }}>
                  {courseSlug ? "Back to Dashboard ✓" : "Course Complete ✓"}
                </Link>
              )}
            </div>
          </div>

          {/* Module complete banner */}
          {allDone && (
            <div style={{ marginTop: "2rem", padding: "1.5rem 2rem", background: "var(--blue-pale)", border: "1px solid var(--border)", borderRadius: "16px", textAlign: "center" }}>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>Module {moduleNum} Complete! 🎉</p>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginBottom: "1rem" }}>Your progress is saved — come back anytime.</p>
              <a href="tel:+15022649376" className="btn-primary" style={{ fontSize: "0.85rem", display: "inline-block" }}>Call Rhoman — (502) 264-9376</a>
            </div>
          )}

          {/* CTA box */}
          <div style={{ marginTop: "3rem", padding: "1.75rem", background: "white", border: "1px solid var(--border)", borderRadius: "16px" }}>
            <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--blue)", marginBottom: "0.5rem" }}>Questions on this lesson?</p>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
              I'm always available for a free, no-pressure conversation about anything covered in this course.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="tel:+15022649376" className="btn-primary" style={{ fontSize: "0.85rem" }}>Call (502) 264-9376</a>
              <a href="mailto:RhomanMJames@gmail.com" className="btn-outline" style={{ fontSize: "0.85rem" }}>Email Rhoman</a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
