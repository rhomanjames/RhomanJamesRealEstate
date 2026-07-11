"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const modules = [
  {
    num: "01", slug: "module-1", title: "Is Elizabethtown Right for Real Estate Investing?",
    lessons: [
        "Why Fort Knox creates unusually stable rental demand in Elizabethtown",
        "The investor case for Hardin County — price points and cash flow potential",
        "Single family vs. multi-family investing near Fort Knox",
        "What cap rates actually look like in the Elizabethtown rental market"
    ],
  },
  {
    num: "02", slug: "module-2", title: "Analyzing a Deal in Hardin County",
    lessons: [
        "How to calculate cash flow on an Elizabethtown rental property",
        "Cap rate explained — what is good in the Hardin County market",
        "Cash-on-cash return — the investor's real performance metric",
        "The 1% rule — does it work in Elizabethtown right now",
        "How to estimate rental income for any Hardin County property"
    ],
  },
  {
    num: "03", slug: "module-3", title: "Financing Your Investment Property",
    lessons: [
        "Conventional investment property loans — what you need to qualify",
        "How to use a VA loan to buy a multi-unit property near Fort Knox",
        "DSCR loans — financing based on rental income, not your income",
        "Cash buying vs. leveraged buying — the return comparison"
    ],
  },
  {
    num: "04", slug: "module-4", title: "The Fort Knox Rental Market",
    lessons: [
        "Why military tenants are among the most reliable renters available",
        "The PCS clause — what it is and why you should include it",
        "How Fort Knox rotation affects your vacancy rate",
        "Setting rent in the Elizabethtown and Radcliff markets"
    ],
  },
  {
    num: "05", slug: "module-5", title: "Property Management and Operations",
    lessons: [
        "Self-managing vs. hiring a property manager near Fort Knox",
        "Tenant screening for Elizabethtown rental properties",
        "Maintenance budgeting — what to expect in year one",
        "Kentucky landlord-tenant law — what every investor must know"
    ],
  },
  {
    num: "06", slug: "module-6", title: "Building a Portfolio Across Duty Stations",
    lessons: [
        "How military investors use VA loans at each duty station to build portfolios",
        "The 1031 exchange — how to defer taxes when you sell in Kentucky",
        "When to sell vs. hold your Elizabethtown investment property",
        "Your 10-year real estate portfolio roadmap starting in Hardin County"
    ],
  }
];

export default function CourseWatchClient() {
  const [completed, setCompleted] = useState<string[]>([]);
  useEffect(() => {
    try { const s = sessionStorage.getItem("investor-course_done"); if (s) setCompleted(JSON.parse(s)); } catch {}
  }, []);
  const toggle = (k: string) => {
    const n = completed.includes(k) ? completed.filter(x => x !== k) : [...completed, k];
    setCompleted(n);
    try { sessionStorage.setItem("investor-course_done", JSON.stringify(n)); } catch {}
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
          <h1 style={{ fontFamily:"'Inter', system-ui, sans-serif",fontSize:"2rem",fontWeight:700,color:"var(--text)",marginBottom:"0.5rem" }}>Kentucky Real Estate Investor Course</h1>
          <p style={{ fontSize:"0.88rem",color:"var(--muted)",marginBottom:"2.5rem" }}>Work through each lesson at your own pace. Click any lesson to mark it complete.</p>
          {modules.map((mod) => {
            const done = mod.lessons.filter((_,i) => completed.includes(`${mod.slug}-${i}`)).length;
            return (
              <div key={mod.slug} className="mc">
                <Link href={`/investor-course/watch/${mod.slug}`} style={{ textDecoration:"none" }}>
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
                      <Link href={`/investor-course/watch/${mod.slug}#lesson-${i}`} style={{ fontSize:"0.88rem",color:d?"var(--muted2)":"var(--muted)",textDecoration:d?"line-through":"none",flex:1 }} onClick={(e)=>e.stopPropagation()}>{lesson}</Link>
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
