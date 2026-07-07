"use client";
import { useAcademyAuth } from "@/lib/useAcademyAuth";
import type { AcademyCourse } from "@/lib/academyCourses";

export default function AcademyCourseClient({ course }: { course: AcademyCourse }) {
  const { user, loading } = useAcademyAuth();

  return (
    <main>
      {/* Hero */}
      <section style={{ paddingTop: "8rem", paddingBottom: "4rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "var(--bg-soft)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)", background: "var(--blue-pale)", padding: "0.35rem 0.9rem", borderRadius: "999px" }}>{course.tag}</span>
          <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text)", lineHeight: 1.15, margin: "1.25rem 0 1rem" }}>
            {course.title}
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: "38rem", margin: "0 auto 1.5rem" }}>
            {course.tagline}
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", fontSize: "0.85rem", color: "var(--muted2)" }}>
            <span>{course.modules} modules</span>
            <span>·</span>
            <span>{course.lessons} lessons</span>
            <span>·</span>
            <span>~{course.estimatedHours} hours</span>
            <span>·</span>
            <span>{course.level}</span>
            <span>·</span>
            <span style={{ color: "var(--blue)", fontWeight: 700 }}>Free</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: "4rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.85, marginBottom: "2.5rem" }}>{course.description}</p>

          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: "1rem" }}>What you&apos;ll learn</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "3rem" }}>
            {course.outcomes.map((o) => (
              <div key={o} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--blue-pale)", color: "var(--blue)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", marginTop: 2 }}>✓</div>
                <p style={{ fontSize: "0.95rem", color: "var(--text)", lineHeight: 1.6, margin: 0 }}>{o}</p>
              </div>
            ))}
          </div>

          {/* ── ACCESS ── */}
          {loading ? null : !user ? (
            <div style={{ background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2rem", textAlign: "center" }}>
              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.75rem" }}>Create a free account to start this course</p>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginBottom: "1.5rem" }}>
                Every course in the Elizabethtown Home Academy is completely free. Create an account to track your progress and pick up right where you left off.
              </p>
              <a href="/academy/signup" className="btn-primary">Create Free Account</a>
              <p style={{ fontSize: "0.8rem", color: "var(--muted2)", marginTop: "1rem" }}>
                Already have an account? <a href="/academy/login" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "none" }}>Log in</a>
              </p>
            </div>
          ) : (
            <div style={{ background: "var(--blue-pale)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2rem", textAlign: "center" }}>
              <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text)", marginBottom: "1rem" }}>
                This course is free — jump right in.
              </p>
              <a href={course.legacyFreeHref || `/academy/${course.slug}/watch`} className="btn-primary">
                Start Learning →
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
