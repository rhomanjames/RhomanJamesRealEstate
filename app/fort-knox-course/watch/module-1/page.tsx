import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 01: Understanding Your PCS Housing Options | Rhoman James",
  description: "Module 01: Understanding Your PCS Housing Options — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/fort-knox-course/watch/module-1" },
  robots: { index: false, follow: true },
};

export default function Module1() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="01"
        moduleTitle="Understanding Your PCS Housing Options"
        totalModules={6}
        prevModule={null}
        nextModule={{ slug: "module-2", title: "Your VA Loan Benefit — Everything Military Buyers Need to Know" }}
        lessons={[
          {
            id: "lesson-0",
            title: "On post vs. off post — the honest financial comparison",
            content: `This is the foundational question every Fort Knox family faces. The financial comparison is clearer than most people realize.

**On-post housing**

On-post housing is managed by a private contractor. Your BAH goes directly to the housing office. You build zero equity. You have no control over rent increases (your BAH determines your payment). Waitlists for many rank and family size combinations run 6 to 12 months or more.

**Off-post buying with a VA loan**

Zero down payment. No PMI. Your total monthly payment — principal, interest, taxes, and insurance — can often be structured to match or come in at or below your BAH. Every payment builds equity. After 3 years, you have built $15,000 to $25,000 in equity through principal paydown and appreciation. After a PCS, you can sell for a profit or keep the property as a rental.

**The 3-year comparison**

Three years on-post: $0 equity accumulated. Three years buying off-post: $15,000-$25,000+ in equity built. The difference is not trivial — it is the foundation of a real estate portfolio built across military service.

**Why many families still choose on-post**

Convenience, community, and the simplicity of having maintenance handled. These are legitimate values. But they come with a real financial cost that families should understand before choosing.`,
            callout: `Three years of on-post housing builds zero equity. Three years of off-post ownership with a VA loan builds $15,000-$25,000+ in equity. Understand the true cost of convenience before you choose.`,
            checklist: [
              "I understand the financial comparison between on-post and off-post housing",
              "I know that VA loans allow zero down payment and no PMI",
              "I have estimated what my total monthly payment would look like relative to my BAH",
            ],
          }
          {
            id: "lesson-1",
            title: "How long is the Fort Knox on-post housing waitlist",
            content: `The on-post housing waitlist is a practical reality that affects many incoming families' options.

**Current waitlist reality**

Waitlist times at Fort Knox vary significantly by rank, family size, and the specific housing area requested. E-5 through E-7 families with 2-3 bedroom requirements often face the longest waits. Some rank/family combinations have waitlists exceeding 12 months.

**What this means practically**

If you receive orders and apply for on-post housing immediately, there is a real possibility you will need off-post housing for 6 to 12 months before on-post becomes available. Many families who intended to go on-post end up renting off-post — and paying rental prices that often exceed what a mortgage payment would be.

**The strategic choice**

If you are willing to commit to the Elizabethtown area and plan to be at Fort Knox for 2 or more years, buying off-post from day one is often a better financial outcome than waiting for on-post housing to become available while paying rent in the interim.

**How to check current waitlist times**

Contact the Fort Knox Family Housing office directly or speak with your gaining unit's rear detachment. Waitlist times change frequently and should be verified at the time of your PCS, not based on what another soldier told you a year ago.`,
            callout: `Verify current waitlist times directly with Fort Knox housing — they change frequently. If the wait is 6+ months, the financial case for buying off-post immediately becomes very strong.`,
            checklist: [
              "I have verified current waitlist times with Fort Knox housing office",
              "I understand that waiting for on-post housing often means paying rent in the interim",
              "I know that buying off-post from day one often produces a better financial outcome",
            ],
          }
          {
            id: "lesson-2",
            title: "Why buying near Fort Knox builds wealth renting never will",
            content: `The wealth gap between buyers and renters compounds over time in ways that are not immediately obvious but become dramatic over a military career.

**The renter's reality**

A Fort Knox family renting a 3-bedroom home for $1,300 per month pays $15,600 per year, $46,800 over three years. At the end of three years, they own nothing. If rent increases — which it consistently does — their costs rise with no corresponding benefit.

**The buyer's reality**

The same family purchasing a $260,000 home with a VA loan at a typical interest rate has a total payment (including taxes and insurance) near their BAH rate. Of every payment, a portion reduces their principal balance. After three years, they have paid down $12,000-$15,000 in principal, and if the home has appreciated at the Elizabethtown market's historical rate, total equity is significantly higher.

**The portfolio effect**

Military families who buy at each duty station and keep properties as rentals when they PCS — rather than selling — build portfolios that generate income across multiple markets. This strategy, executed consistently across a 20-year military career, produces financial outcomes that civilian career paths often cannot match.

**The Fort Knox market advantage**

Elizabethtown's market, stabilized by Fort Knox, offers consistent appreciation without the volatility of speculative markets. Properties bought here hold their value and produce reliable rental income when the owner PCSes.`,
            callout: `Every month of renting is a month of building your landlord's equity instead of your own. The VA loan makes building your own equity possible with zero down payment.`,
            checklist: [
              "I understand how rental costs compare to ownership costs in the Fort Knox market",
              "I know that equity accumulates through both principal paydown and appreciation",
              "I understand how military families can build portfolios across duty stations",
            ],
          }
          {
            id: "lesson-3",
            title: "How to choose between Elizabethtown, Radcliff, and Vine Grove",
            content: `The three primary communities near Fort Knox each offer a different balance of commute, price, and lifestyle.

**Radcliff: Closest to the Chaffee Gate**

5-10 minutes from most post locations via the primary Chaffee Gate entrance. Most diverse community in Hardin County with strong military culture. Most affordable home prices in Hardin County. Best for buyers who prioritize commute time and value. The military community density means you will have neighbors who understand the PCS lifestyle.

**Elizabethtown: Most amenities, longer commute**

15-20 minutes from the Chaffee Gate. The county seat with the most restaurants, retail, healthcare, and school options. Higher price point but more variety. Best for families who want civilian amenity access and are willing to trade commute time for it.

**Vine Grove: Middle ground**

Approximately 15 minutes from Fort Knox. Small-town character with newer affordable subdivisions. Good for buyers who want quiet residential streets and maximum space per dollar. Less military density than Radcliff but still a practical commute.

**How to decide**

Start with your gate. Map your specific workplace on post to a realistic commute time from each community. Then overlay your other priorities — school preferences, amenity needs, budget. The right community is the one that fits your actual daily life, not the one that sounds best in a description.`,
            callout: `Before choosing a community, confirm which gate you will use and where exactly on post you work. Five minutes per leg is 40+ hours per year of your life.`,
            checklist: [
              "I have confirmed which gate I will use and where on post I work",
              "I have mapped realistic commute times from Elizabethtown, Radcliff, and Vine Grove",
              "I understand the price point differences between the three communities",
            ],
          }
        ]}
      />
      <Footer />
    </>
  );
}
