import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 03: Pricing Your Home to Sell | Rhoman James",
  description: "Module 03: Pricing Your Home to Sell — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/sellers-course/watch/module-3" },
  robots: { index: false, follow: true },
};

export default function Module3() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="03"
        moduleTitle="Pricing Your Home to Sell"
        totalModules={6}
        prevModule={{ slug: "module-2", title: "Preparing Your Home for Market" }}
        nextModule={{ slug: "module-4", title: "Listing, Marketing, and Showings" }}
        lessons={[
          {
            id: "lesson-0",
            title: "How a comparative market analysis actually works",
            content: `A CMA is an analysis of recent sales of similar homes used to estimate your home's current market value.

**How comps are selected**

Good comps are: recently sold (within 90 days), similar in square footage (within 10-15%), similar in age and condition, in the same neighborhood, and similar in bedroom and bathroom count.

**How adjustments work**

No two homes are identical. The CMA process involves adjusting comp prices for differences — a comp with a garage adjusted against your home without one, or an updated kitchen vs. original.

**What the CMA tells you**

A price range — not a single number — within which your home should realistically sell. A well-prepared, well-priced home near the top of that range will sell quickly. Above the range, it will sit.`,
            callout: `Ask your agent to walk you through the comps they used and how they made adjustments. Understanding the analysis helps you price confidently.`,
            checklist: [
              "I understand what comparable sales are and how they are selected",
              "I know that a CMA produces a price range, not one exact number",
              "I will ask my agent to walk me through their CMA methodology",
            ],
          },
          {
            id: "lesson-1",
            title: "Why overpricing costs you money in Elizabethtown",
            content: `Overpricing is the single most common seller mistake — and it is costly in non-obvious ways.

**What actually happens when you overprice**

The first two weeks are when a listing gets the most attention. Active buyers monitoring the market for homes in your price range will see your listing immediately. If your price is above market, these motivated buyers pass without requesting a showing.

As weeks go by without offers, the listing develops stigma. Buyers notice a home has been on market for 30, 45, 60 days. They assume something is wrong.

**The cost of a price reduction**

Homes that go through price reductions consistently sell for less than comparable homes priced correctly from the start. The final sale price of an overpriced-then-reduced home often ends up below what correct initial pricing would have achieved.

**The correct approach**

Price based on comps. Price slightly below the top of your range. A correctly priced home generates competition. Competition generates higher offers.`,
            callout: `Overpriced homes sit. Sitting homes develop stigma. Stigma requires reductions. Reductions attract lowball offers. Correct initial pricing generates competition.`,
            checklist: [
              "I understand why the first two weeks are the most important",
              "I know price reductions after sitting often result in less than correct initial pricing",
              "I will price based on what comps support, not what I would like",
            ],
          },
          {
            id: "lesson-2",
            title: "Pricing psychology — what buyers think when they see your number",
            content: `Pricing is partly science and partly psychology.

**Search threshold pricing**

Online searches are structured around price thresholds. Buyers searching up to $300,000 see your $299,900 listing. Common thresholds: $200K, $225K, $250K, $275K, $300K, $325K, $350K, $400K. Pricing just below a threshold captures buyers searching up to that limit.

**The price-per-square-foot reality**

Buyers and agents calculate price per square foot to compare homes. If your home is $50/sqft more expensive than comps, the agent will flag it.

**Appraisal reality**

For financed buyers, the appraisal is the objective check on price. If your price is not supported by comps, the transaction stalls even after an offer is accepted.`,
            callout: `Price just below search thresholds. Never price above what comps will support at appraisal — you will face the same problem later with less leverage.`,
            checklist: [
              "I understand how online search thresholds affect which buyers see my listing",
              "I have calculated price per square foot and compared it to comps",
              "I understand price must be supportable at appraisal",
            ],
          },
          {
            id: "lesson-3",
            title: "How to respond when the market tells you something",
            content: `Once your home is listed, the market will give you information. Learn to read it.

**The metrics that matter**

Showings per week: a correctly priced home should get 3-5 showings in the first two weeks. Showing-to-offer conversion: getting showings but no offers means buyers like the home but not the price. Zero showings means buyers are being filtered out at the price level.

**When to reduce and by how much**

If you have had 10+ showings with no offers within 21 days, a price reduction is warranted. Make it meaningful — a $2,000 reduction on a $280,000 home changes nothing. A $10,000-$15,000 reduction moves you into a new search tier.`,
            callout: `The market gives you real-time information. Zero showings means price. Showings without offers means price. Listen to the data.`,
            checklist: [
              "I will track showings per week from day one",
              "I understand the difference between a price problem and a property-specific challenge",
              "I have committed to a price review if I receive no offers within 21 days",
            ],
          },
          {
            id: "lesson-4",
            title: "Understanding list price vs. sale price in Hardin County",
            content: `The relationship between list price and final sale price tells you what to expect.

**The list-to-sale price ratio**

A ratio of 100% means homes sell at list price. Above 100% means homes sell above list — a competitive seller's market. In the Elizabethtown market, well-prepared homes in the $200K-$350K range have regularly achieved ratios at or above 100%.

**Days on market and price relationship**

The longer a home has been listed, the more buyers expect a discount. Homes that sell in the first week rarely sell below list. Homes on market 60+ days are expected to sell below list.

This is why correct initial pricing and a fast sale produces better net proceeds than a prolonged listing with price reductions.`,
            callout: `In a market where homes sell at or above list price, correct initial pricing produces better results than pricing high and negotiating down.`,
            checklist: [
              "I have asked my agent for the current list-to-sale price ratio in Hardin County",
              "I understand extended time on market creates buyer negotiating leverage",
              "I have set realistic expectations based on current market data",
            ],
          }
        ]}
      />
      <Footer />
    </>
  );
}
