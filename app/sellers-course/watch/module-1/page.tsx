import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 01: Is Now the Right Time to Sell? | Rhoman James",
  description: "Module 01: Is Now the Right Time to Sell? — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/sellers-course/watch/module-1" },
  robots: { index: false, follow: true },
};

export default function Module1() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="01"
        moduleTitle="Is Now the Right Time to Sell?"
        totalModules={6}
        prevModule={null}
        nextModule={{ slug: "module-2", title: "Preparing Your Home for Market" }}
        lessons={[
          {
            id: "lesson-0",
            title: "How to know when the market favors sellers in Elizabethtown",
            content: `Timing a home sale is not about waiting for a perfect market — it is about understanding the market you are in and positioning your home correctly within it.

**What a seller's market looks like**

In a seller's market, demand exceeds supply. Homes sell quickly — often within days. Multiple offers are common. Sale prices regularly meet or exceed list price. The Elizabethtown market operates in seller's market conditions for well-priced homes in the $200,000 to $350,000 range for much of the year, driven by consistent Fort Knox demand that does not fluctuate the way civilian markets do.

**Key indicators to watch**

Days on Market (DOM) is the single most useful indicator of market temperature. When average DOM in Hardin County is below 30 days, sellers have significant leverage. A ratio above 98% indicates a strong seller's market. Low inventory means fewer choices for buyers and faster sales for sellers.

**The Fort Knox factor**

The Fort Knox PCS rotation creates consistent year-round demand. Unlike markets that go cold in winter or during rate spikes, the military buyer pool remains active throughout the year.

**When to sell regardless of market conditions**

Sometimes life circumstances determine your timeline. The good news is that well-prepared homes in Elizabethtown sell in most market conditions. What changes is your pricing strategy and expectations, not whether a sale is achievable.`,
            callout: `In Elizabethtown, the question is rarely whether you can sell — it is whether you are priced correctly and prepared properly. Those two factors matter more than market timing.`,
            checklist: [
              "I have researched current average days on market in Hardin County",
              "I understand how Fort Knox rotation affects local demand year-round",
              "I have a general sense of my timeline and whether it is flexible",
            ],
          }
          {
            id: "lesson-1",
            title: "Running your equity calculation — what you actually own",
            content: `Before you decide to sell, you need to know your financial position precisely.

**The basic equity calculation**

Current Market Value minus Mortgage Balance(s) equals Gross Equity. Request a payoff quote from your lender — not just a current balance. The payoff amount includes interest accruing through the expected closing date.

**Accounting for selling costs**

From your gross equity, subtract the cost of selling: agent commissions (5-6% of sale price), Kentucky closing costs (1-2%), seller concessions, and repair/preparation costs.

**The net proceeds worksheet**

Estimated sale price minus payoff minus commissions minus closing costs minus concessions minus repairs equals your approximate net proceeds. Use the free Net Proceeds Calculator at rhomanjames.com/tools/net-proceeds to run your specific numbers.`,
            callout: `Many sellers make decisions based on home value without accounting for selling costs. Always calculate net proceeds — not gross equity — before committing to a sale.`,
            checklist: [
              "I have requested a payoff quote from my lender",
              "I know all liens and mortgages against the property",
              "I have estimated my net proceeds using rhomanjames.com/tools/net-proceeds",
            ],
          }
          {
            id: "lesson-2",
            title: "The true cost of selling a home in Kentucky",
            content: `Selling a home costs more than most people expect.

**Agent commissions**

Total commission in the Elizabethtown market typically runs 5% to 6% of the sale price. On a $280,000 home, that is $14,000 to $16,800. Commission is paid from sale proceeds at closing.

**Kentucky seller closing costs**

Attorney fee: $400-$700. State transfer tax: $0.50 per $500 of value ($280 on a $280,000 sale). Prorated property taxes through closing date. Title insurance: $600-$1,200. Recording fees: $50-$100.

**Pre-listing preparation costs**

A well-maintained home may need only a deep clean and minor touch-ups. A home with deferred maintenance may need $5,000 to $15,000 in work to compete effectively.

**Total selling costs**

All-in, selling costs in Kentucky typically run 7% to 9% of the sale price. Build this into your financial planning before you list.`,
            callout: `Total selling costs in Kentucky typically run 7-9% of sale price. Know this number before you accept an offer.`,
            checklist: [
              "I have estimated total selling costs at 7-9% of my expected sale price",
              "I understand that commissions are paid from proceeds at closing",
              "I have accounted for prorated property taxes in my calculation",
            ],
          }
          {
            id: "lesson-3",
            title: "Buy first or sell first — how to handle the transition",
            content: `For most sellers, the home they are selling is also their current residence — which means the sale and next purchase need to be coordinated.

**Option 1: Sell first, then buy**

Selling first gives you certainty about your proceeds. The downside is you may need temporary housing. A leaseback — remaining in your home after closing as a tenant — can bridge this gap.

**Option 2: Buy first, then sell**

Buying first eliminates the temporary housing problem but creates financial exposure if you are carrying two mortgages simultaneously. Bridge loans exist for this purpose.

**Option 3: Simultaneous closing**

Coordinating both transactions to close the same day. Logistically challenging but achievable. In Elizabethtown, where well-priced homes sell in 1-2 weeks, the sell-first approach is more manageable than in slower markets.`,
            callout: `There is no universally correct answer to the buy-sell sequencing question. Discuss this with your agent before listing.`,
            checklist: [
              "I understand the three approaches to managing the buy-sell transition",
              "I know a leaseback is an option worth negotiating",
              "I have spoken with a lender about carrying two mortgages if needed",
            ],
          }
        ]}
      />
      <Footer />
    </>
  );
}
