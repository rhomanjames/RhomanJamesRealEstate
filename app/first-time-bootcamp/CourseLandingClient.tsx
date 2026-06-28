"use client";

const modules = [
  { num: "01", title: "Is Buying Right for You Right Now?", lessons: 4, desc: "The honest rent vs. buy decision, financial readiness, and how much you need." },
  { num: "02", title: "First-Time Buyer Programs in Kentucky", lessons: 4, desc: "KHC down payment assistance, FHA loans, USDA eligibility, and what you qualify for." },
  { num: "03", title: "Finding Your First Home in Elizabethtown", lessons: 4, desc: "What to look for, which neighborhoods fit first-time budgets, and the starter home strategy." },
  { num: "04", title: "Making Your First Offer", lessons: 4, desc: "How to make a competitive offer, what contingencies protect you, and what happens next." },
  { num: "05", title: "Inspections, Appraisals, and Closing", lessons: 4, desc: "Your inspection, the appraisal, closing costs, and what to bring to closing." },
  { num: "06", title: "Life as a New Kentucky Homeowner", lessons: 4, desc: "Utilities setup, maintenance budgeting, building equity, and your first year." }
];
const audiences = [
  { title: "True First-Timers", desc: "Never owned a home? This bootcamp starts at zero and walks you through every step in plain English." },
  { title: "Renters Ready to Buy", desc: "Tired of paying your landlord's mortgage? Learn exactly what it takes to own in Elizabethtown." },
  { title: "Recent Graduates", desc: "Just starting your career and ready to build wealth through homeownership? Start here." },
  { title: "Young Families", desc: "Growing your family and need more space? Learn how to buy before your next lease renewal." }
];

export default function CourseLandingClient() {
  return (
    <main>
      <section style={{ paddingTop:"8rem",paddingBottom:"5rem",paddingLeft:"1.5rem",paddingRight:"1.5rem",background:"var(--dark)",position:"relative",textAlign:"center" }}>
        <div aria-hidden="true" style={{ position:"absolute",inset:0,background:"radial-gradient(ellipse 70% 60% at 50% 40%, rgba(184,151,106,0.08) 0%, transparent 70%)",pointerEvents:"none" }} />
        <div aria-hidden="true" style={{ width:1,height:"3rem",background:"linear-gradient(to bottom, transparent, var(--gold))",margin:"0 auto 2rem" }} />
        <p style={{ fontSize:"0.68rem",letterSpacing:"0.35em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"1rem" }}>100% Free · Self-Paced · Kentucky Specific</p>
        <h1 style={{ fontFamily:"'Cormorant Garamond', Georgia, serif",fontSize:"clamp(2.5rem, 6vw, 4.5rem)",fontWeight:300,color:"white",lineHeight:1.1,marginBottom:"1.25rem" }} dangerouslySetInnerHTML={{ __html: `The First-Time<br /><em style="font-style:italic;color:#B8976A">Homebuyer Bootcamp</em>` }} />
        <p style={{ fontSize:"1rem",color:"var(--muted)",lineHeight:1.85,maxWidth:"38rem",margin:"0 auto 2.5rem" }}>From renter to homeowner in Kentucky — a straight-talking, step-by-step bootcamp for first-time buyers in Elizabethtown and Hardin County.</p>
        <div style={{ display:"flex",gap:"2.5rem",justifyContent:"center",flexWrap:"wrap",marginBottom:"3rem" }}>
          {[{num:"6",label:"Modules"},{num:"24",label:"Lessons"},{num:"Free",label:"Always"},{num:"KY",label:"Specific"}].map((s)=>(
            <div key={s.label} style={{ textAlign:"center" }}>
              <div style={{ fontFamily:"'Cormorant Garamond', Georgia, serif",fontSize:"2.2rem",fontWeight:300,color:"var(--gold)",lineHeight:1 }}>{s.num}</div>
              <div style={{ fontSize:"0.65rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--muted)",marginTop:"0.25rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ maxWidth:480,margin:"0 auto",background:"var(--dark2)",border:"1px solid rgba(184,151,106,0.25)",padding:"2.5rem" }}>
          <p style={{ fontSize:"0.72rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"1rem" }}>Start Learning Free</p>
          <form onSubmit={async (e) => { e.preventDefault(); const form = e.currentTarget; const data = new FormData(form); try { await fetch("https://formspree.io/f/mjgqrprb", { method: "POST", body: data, headers: { Accept: "application/json" } }); } catch(err) {} window.location.href = "/first-time-bootcamp/watch"; }} style={{ display:"flex",flexDirection:"column",gap:"1rem" }}>
            <input type="hidden" name="_subject" value="Course Sign-Up: First-Time Homebuyer Bootcamp" />
            <div style={{ display:"flex",flexDirection:"column",gap:"0.35rem" }}>
              <label htmlFor="name" style={{ fontSize:"0.65rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--muted2)",textAlign:"left" }}>Your Name</label>
              <input className="form-input" type="text" id="name" name="name" required placeholder="Jane Smith" autoComplete="name" />
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:"0.35rem" }}>
              <label htmlFor="email" style={{ fontSize:"0.65rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--muted2)",textAlign:"left" }}>Email Address</label>
              <input className="form-input" type="email" id="email" name="email" required placeholder="jane@example.com" autoComplete="email" />
            </div>
            <button type="submit" className="btn-primary" style={{ cursor:"pointer",border:"none",marginTop:"0.5rem",fontSize:"0.78rem",letterSpacing:"0.2em" }}>Start the Free Course →</button>
            <p style={{ fontSize:"0.72rem",color:"var(--muted2)",margin:0,lineHeight:1.6 }}>No spam. No sales pressure. Just the information you need.</p>
          </form>
        </div>
      </section>
      <section style={{ background:"var(--dark2)",padding:"6rem 1.5rem" }}>
        <div style={{ maxWidth:1000,margin:"0 auto" }}>
          <p style={{ fontSize:"0.68rem",letterSpacing:"0.35em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"1rem",textAlign:"center" }}>What You Will Learn</p>
          <h2 style={{ fontFamily:"'Cormorant Garamond', Georgia, serif",fontSize:"clamp(1.8rem,3.5vw,2.5rem)",fontWeight:300,color:"white",marginBottom:"3rem",textAlign:"center" }}>6 modules. Everything you need.</h2>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1.25rem" }}>
            {modules.map((m)=>(
              <div key={m.num} className="service-card" style={{ padding:"2rem" }}>
                <div style={{ fontFamily:"'Cormorant Garamond', Georgia, serif",fontSize:"3rem",fontWeight:300,color:"rgba(184,151,106,0.15)",lineHeight:1,marginBottom:"0.75rem" }} aria-hidden="true">{m.num}</div>
                <h3 style={{ fontFamily:"'Cormorant Garamond', Georgia, serif",fontSize:"1.2rem",color:"white",marginBottom:"0.5rem",fontWeight:400 }}>{m.title}</h3>
                <p style={{ fontSize:"0.82rem",color:"var(--muted)",lineHeight:1.7,marginBottom:"0.75rem" }}>{m.desc}</p>
                <p style={{ fontSize:"0.65rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--gold)" }}>{m.lessons} lessons</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background:"var(--dark)",padding:"6rem 1.5rem",borderTop:"1px solid rgba(184,151,106,0.1)" }}>
        <div style={{ maxWidth:800,margin:"0 auto",textAlign:"center" }}>
          <p style={{ fontSize:"0.68rem",letterSpacing:"0.35em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"1rem" }}>Who This Course Is For</p>
          <h2 style={{ fontFamily:"'Cormorant Garamond', Georgia, serif",fontSize:"clamp(1.8rem,3.5vw,2.5rem)",fontWeight:300,color:"white",marginBottom:"2rem" }}>Built for you</h2>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1rem",textAlign:"left" }}>
            {audiences.map((item)=>(
              <div key={item.title} style={{ padding:"1.5rem",background:"var(--dark3)",border:"1px solid rgba(184,151,106,0.12)" }}>
                <div style={{ fontSize:"0.72rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"0.5rem" }}>{item.title}</div>
                <p style={{ fontSize:"0.85rem",color:"var(--muted)",lineHeight:1.7,margin:0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background:"var(--dark2)",padding:"6rem 1.5rem",textAlign:"center" }}>
        <div style={{ maxWidth:500,margin:"0 auto" }}>
          <h2 style={{ fontFamily:"'Cormorant Garamond', Georgia, serif",fontSize:"2.2rem",fontWeight:300,color:"white",marginBottom:"1rem" }}>Ready to get started?</h2>
          <p style={{ color:"var(--muted)",fontSize:"0.92rem",lineHeight:1.8,marginBottom:"2rem" }}>Free. Self-paced. Specific to Kentucky.</p>
          <a href="/first-time-bootcamp" className="btn-primary" style={{ fontSize:"0.78rem",letterSpacing:"0.2em" }}>Enroll Free →</a>
        </div>
      </section>
    </main>
  );
}
