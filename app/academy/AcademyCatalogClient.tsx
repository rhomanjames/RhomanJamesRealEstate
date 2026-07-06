"use client";
import { useState } from "react";
import { academyCourses, getAllCities } from "@/lib/academyCourses";
import { useAcademyAuth } from "@/lib/useAcademyAuth";

export default function AcademyCatalogClient() {
  const { user, loading } = useAcademyAuth();
  const [cityFilter, setCityFilter] = useState<string | null>(null);
  const cities = getAllCities();
  const filteredCourses = cityFilter ? academyCourses.filter((c) => c.city === cityFilter) : academyCourses;

  return (
    <main>
      {/* Hero */}
      <section style={{ paddingTop: "8rem", paddingBottom: "4rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "var(--bg-soft)", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", fontWeight: 600, color: "var(--blue)", background: "var(--blue-pale)", padding: "0.5rem 1.1rem", borderRadius: "999px", marginBottom: "1.5rem" }}>
          Rhoman James Academy
        </div>
        <h1 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text)", lineHeight: 1.1, marginBottom: "1.25rem" }}>
          Real estate courses,<br /><span style={{ color: "var(--blue)" }}>built for Kentucky</span>
        </h1>
        <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: "38rem", margin: "0 auto 2rem" }}>
          One subscription unlocks every course in the library — $24/month, cancel anytime. Have an access code from working with Rhoman? Redeem it for free, permanent access.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          {loading ? null : user ? (
            <a href="/academy/dashboard" className="btn-primary">Go to My Dashboard</a>
          ) : (
            <>
              <a href="/academy/signup" className="btn-primary">Create Free Account</a>
              <a href="/academy/login" className="btn-outline">Log In</a>
            </>
          )}
        </div>
      </section>

      {/* Course grid */}
      <section style={{ padding: "5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* City filter pills */}
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "3rem" }}>
            <button
              onClick={() => setCityFilter(null)}
              style={{
                fontSize: "0.82rem", fontWeight: 600, padding: "0.5rem 1.1rem", borderRadius: "999px", cursor: "pointer",
                border: cityFilter === null ? "1px solid var(--blue)" : "1px solid var(--border)",
                background: cityFilter === null ? "var(--blue-pale)" : "white",
                color: cityFilter === null ? "var(--blue)" : "var(--muted)",
              }}
            >
              All Cities
            </button>
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setCityFilter(city)}
                style={{
                  fontSize: "0.82rem", fontWeight: 600, padding: "0.5rem 1.1rem", borderRadius: "999px", cursor: "pointer",
                  border: cityFilter === city ? "1px solid var(--blue)" : "1px solid var(--border)",
                  background: cityFilter === city ? "var(--blue-pale)" : "white",
                  color: cityFilter === city ? "var(--blue)" : "var(--muted)",
                }}
              >
                {city}
              </button>
            ))}
          </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {filteredCourses.map((course) => (
            <a key={course.slug} href={`/academy/${course.slug}`} style={{ textDecoration: "none" }}>
              <article className="service-card" style={{ padding: "2rem", height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)", background: "var(--blue-pale)", padding: "0.3rem 0.75rem", borderRadius: "999px" }}>{course.tag}</span>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--muted)" }}>
                    Included
                  </span>
                </div>
                <p style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--muted2)", marginBottom: "0.5rem" }}>{course.city}</p>
                <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.6rem", lineHeight: 1.35 }}>
                  {course.title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "1.25rem", flexGrow: 1 }}>
                  {course.tagline}
                </p>
                <div style={{ display: "flex", gap: "1rem", fontSize: "0.78rem", color: "var(--muted2)", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
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

      {/* Have a code CTA */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--bg-soft)", textAlign: "center" }}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.75rem" }}>
            One subscription. The entire library.
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            $24/month unlocks every course — including everything added going forward. Working with Rhoman? Ask about your free access code.
          </p>
          <a href="/academy/signup" className="btn-primary">Create Free Account</a>
        </div>
      </section>
    </main>
  );
}
