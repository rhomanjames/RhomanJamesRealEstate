"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const modules = [
  {
    num: "01", slug: "module-1", title: "Understanding Your PCS Housing Options",
    lessons: [
        "On post vs. off post — the honest financial comparison",
        "How long is the Fort Knox on-post housing waitlist",
        "Why buying near Fort Knox builds wealth renting never will",
        "How to choose between Elizabethtown, Radcliff, and Vine Grove"
    ],
  },
  {
    num: "02", slug: "module-2", title: "Your VA Loan Benefit — Everything Military Buyers Need to Know",
    lessons: [
        "What the VA loan actually gives you — the complete breakdown",
        "The VA funding fee — what you pay and when you are exempt",
        "How to get your Certificate of Eligibility in Kentucky",
        "VA loan vs. conventional near Fort Knox — running the real numbers",
        "Using your VA loan benefit more than once across duty stations"
    ],
  },
  {
    num: "03", slug: "module-3", title: "BAH Strategy — Making Your Housing Allowance Work for You",
    lessons: [
        "How BAH rates are set for Fort Knox service members",
        "How to structure a VA loan so your mortgage equals your BAH",
        "The wealth difference between renting and buying on BAH",
        "What happens to your mortgage when BAH rates change"
    ],
  },
  {
    num: "04", slug: "module-4", title: "Buying on a PCS Timeline",
    lessons: [
        "What to do the moment your orders arrive",
        "How to buy a Fort Knox home remotely before you arrive",
        "Video walkthroughs — how to evaluate a home you have not visited",
        "How to choose a gate and pick your neighborhood around it",
        "PCS closing timeline — what is realistic and how to hit it"
    ],
  },
  {
    num: "05", slug: "module-5", title: "The Home Search Near Fort Knox",
    lessons: [
        "How to map your actual commute from any Fort Knox neighborhood",
        "School zones near Fort Knox — Hardin County Schools explained",
        "VA Minimum Property Requirements — what they mean for your search",
        "Red flags in the Fort Knox rental market vs. buying market"
    ],
  },
  {
    num: "06", slug: "module-6", title: "When You PCS Out — Your Exit Strategy",
    lessons: [
        "Sell vs. rent when you PCS — the financial comparison",
        "How to manage a Fort Knox rental from your next duty station",
        "The VA loan assumption strategy for Fort Knox sellers",
        "Building a real estate portfolio across multiple duty stations"
    ],
  }
];

export default function CourseWatchClient() {
  const [completed, setCompleted] = useState<string[]>([]);
  useEffect(() => {
    try { const s = sessionStorage.getItem("fort-knox-course_done"); if (s) setCompleted(JSON.parse(s)); } catch {}
  }, []);
  const toggle = (k: string) => {
    const n = completed.includes(k) ? completed.filter(x => x !== k) : [...completed, k];
    setCompleted(n);
    try { sessionStorage.setItem("fort-knox-course_done", JSON.stringify(n)); } catch {}
  };
  const total = modules.reduce((a,m) => a + m.lessons.length, 0);
  const pct = Math.round((completed.length / total) * 100);
  return (
    <>
      <Navbar />
      <main style={{ background:"var(--bg-soft)",minHeight:"100vh",paddingTop:"5.5rem" }}>
        <style>{`
          .mc { background:white;border:1px solid var(--border);margin-bottom:1.25rem; }
          .mh { display:flex;align-items:center;gap:1.25rem;padding:1.5rem 2rem;cursor:pointer; }
          .lr { display:flex;align-items:center;gap:1rem;padding:0.85rem 2rem 0.85rem 4rem;border-top:1px solid var(--border);cursor:pointer;transition:background 0.15s; }
          .lr:hover { background:var(--border); }
          .cb { width:18px;height:18px;border:1px solid var(--border);flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:all 0.2s; }
          .cb.done { background:var(--blue);border-color:var(--blue); }
        `}</style>
        <div style={{ background:"var(--bg-soft)",borderBottom:"1px solid var(--border)",padding:"1.25rem 2rem" }}>
          <div style={{ maxWidth:900,margin:"0 auto",display:"flex",alignItems:"center",gap:"2rem",flexWrap:"wrap" }}>
            <div>
              <p style={{ fontSize:"0.65rem",letterSpacing:"0.25em",textTransform:"uppercase",color:"var(--blue)",marginBottom:"0.25rem" }}>Progress</p>
              <p style={{ fontFamily:"'Inter', system-ui, sans-serif",fontSize:"1.5rem",fontWeight:700,color:"var(--text)" }}>{completed.length} of {total} lessons complete</p>
            </div>
            <div style={{ flex:1,minWidth:200 }}>
              <div style={{ background:"var(--bg-soft)",height:4,borderRadius:2,overflow:"hidden" }}>
                <div style={{ background:"var(--blue)",height:"100%",width:`${pct}%`,transition:"width 0.4s" }} />
              </div>
              <p style={{ fontSize:"0.68rem",color:"var(--muted)",marginTop:"0.35rem" }}>{pct}% complete</p>
            </div>
          </div>
        </div>
        <div style={{ maxWidth:900,margin:"0 auto",padding:"3rem 2rem 6rem" }}>
          <h1 style={{ fontFamily:"'Inter', system-ui, sans-serif",fontSize:"2rem",fontWeight:700,color:"var(--text)",marginBottom:"0.5rem" }}>Fort Knox PCS Homebuying Bootcamp</h1>
          <p style={{ fontSize:"0.88rem",color:"var(--muted)",marginBottom:"2.5rem" }}>Work through each lesson at your own pace. Click any lesson to mark it complete.</p>
          {modules.map((mod) => {
            const done = mod.lessons.filter((_,i) => completed.includes(`${mod.slug}-${i}`)).length;
            return (
              <div key={mod.slug} className="mc">
                <Link href={`/fort-knox-course/watch/${mod.slug}`} style={{ textDecoration:"none" }}>
                  <div className="mh">
                    <div style={{ fontFamily:"'Inter', system-ui, sans-serif",fontSize:"2.5rem",fontWeight:700,color:done===mod.lessons.length?"var(--blue)":"var(--border)",lineHeight:1,minWidth:52 }}>{mod.num}</div>
                    <div style={{ flex:1 }}>
                      <h2 style={{ fontFamily:"'Inter', system-ui, sans-serif",fontSize:"1.2rem",fontWeight:400,color:"var(--text)",marginBottom:"0.2rem" }}>{mod.title}</h2>
                      <p style={{ fontSize:"0.72rem",color:"var(--muted)" }}>{done}/{mod.lessons.length} lessons</p>
                    </div>
                    <div style={{ fontSize:"0.72rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--blue)" }}>Start →</div>
                  </div>
                </Link>
                {mod.lessons.map((lesson,i) => {
                  const k=`${mod.slug}-${i}`, d=completed.includes(k);
                  return (
                    <div key={k} className="lr" onClick={()=>toggle(k)} role="button" tabIndex={0} onKeyDown={(e)=>e.key==="Enter"&&toggle(k)}>
                      <div className={`cb${d?" done":""}`}>
                        {d&&<svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      </div>
                      <Link href={`/fort-knox-course/watch/${mod.slug}#lesson-${i}`} style={{ fontSize:"0.88rem",color:d?"var(--muted2)":"#C8C4BC",textDecoration:d?"line-through":"none",flex:1 }} onClick={(e)=>e.stopPropagation()}>{lesson}</Link>
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div style={{ marginTop:"3rem",padding:"2rem",background:"var(--bg-soft)",border:"1px solid var(--border)",textAlign:"center" }}>
            <p style={{ fontFamily:"'Inter', system-ui, sans-serif",fontSize:"1.4rem",fontWeight:700,color:"var(--text)",marginBottom:"0.5rem" }}>Questions as you go?</p>
            <p style={{ fontSize:"0.85rem",color:"var(--muted)",marginBottom:"1.25rem" }}>Free consultation, no pressure.</p>
            <div style={{ display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap" }}>
              <a href="tel:+18595366009" className="btn-primary" style={{ fontSize:"0.75rem" }}>Call (859) 536-6009</a>
              <a href="mailto:RhomanMJames@gmail.com" className="btn-outline" style={{ fontSize:"0.75rem" }}>Email Rhoman</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
