"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const modules = [
  {
    num: "01", slug: "module-1", title: "Is Now the Right Time to Sell?",
    lessons: [
        "How to know when the market favors sellers in Elizabethtown",
        "Running your equity calculation — what you actually own",
        "The true cost of selling a home in Kentucky",
        "Buy first or sell first — how to handle the transition"
    ],
  },
  {
    num: "02", slug: "module-2", title: "Preparing Your Home for Market",
    lessons: [
        "The highest ROI repairs before listing in Elizabethtown",
        "How to stage your home without hiring a professional",
        "Decluttering and depersonalizing — what buyers need to see",
        "Professional photography — why it matters and what to expect",
        "What sellers must disclose in Kentucky"
    ],
  },
  {
    num: "03", slug: "module-3", title: "Pricing Your Home to Sell",
    lessons: [
        "How a comparative market analysis actually works",
        "Why overpricing costs you money in Elizabethtown",
        "Pricing psychology — what buyers think when they see your number",
        "How to respond when the market tells you something",
        "Understanding list price vs. sale price in Hardin County"
    ],
  },
  {
    num: "04", slug: "module-4", title: "Listing, Marketing, and Showings",
    lessons: [
        "What your listing exposure should look like in 2025",
        "How to prepare for and manage showings",
        "Open houses — when they help and when they do not",
        "How buyers are finding homes in Elizabethtown right now",
        "What to do when your home is not getting showings"
    ],
  },
  {
    num: "05", slug: "module-5", title: "Reviewing Offers and Negotiating",
    lessons: [
        "How to read a Kentucky purchase offer — every line matters",
        "Should you accept a VA loan offer on your home",
        "How to handle multiple offers as a seller in Kentucky",
        "Negotiating inspection repairs — what to fix and what to decline",
        "Seller concessions — when to offer them and how much"
    ],
  },
  {
    num: "06", slug: "module-6", title: "Closing Day and Moving Out",
    lessons: [
        "What seller closing costs look like in Hardin County KY",
        "How to calculate your exact net proceeds",
        "What happens at a Kentucky attorney closing as the seller",
        "What to leave, what to take, and what to hand over at closing"
    ],
  }
];

export default function CourseWatchClient() {
  const [completed, setCompleted] = useState<string[]>([]);
  useEffect(() => {
    try { const s = sessionStorage.getItem("sellers-course_done"); if (s) setCompleted(JSON.parse(s)); } catch {}
  }, []);
  const toggle = (k: string) => {
    const n = completed.includes(k) ? completed.filter(x => x !== k) : [...completed, k];
    setCompleted(n);
    try { sessionStorage.setItem("sellers-course_done", JSON.stringify(n)); } catch {}
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
          <h1 style={{ fontFamily:"'Inter', system-ui, sans-serif",fontSize:"2rem",fontWeight:700,color:"var(--text)",marginBottom:"0.5rem" }}>Kentucky Home Sellers Course</h1>
          <p style={{ fontSize:"0.88rem",color:"var(--muted)",marginBottom:"2.5rem" }}>Work through each lesson at your own pace. Click any lesson to mark it complete.</p>
          {modules.map((mod) => {
            const done = mod.lessons.filter((_,i) => completed.includes(`${mod.slug}-${i}`)).length;
            return (
              <div key={mod.slug} className="mc">
                <Link href={`/sellers-course/watch/${mod.slug}`} style={{ textDecoration:"none" }}>
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
                      <Link href={`/sellers-course/watch/${mod.slug}#lesson-${i}`} style={{ fontSize:"0.88rem",color:d?"var(--muted2)":"var(--muted)",textDecoration:d?"line-through":"none",flex:1 }} onClick={(e)=>e.stopPropagation()}>{lesson}</Link>
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
