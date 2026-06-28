import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 05: Reviewing Offers and Negotiating | Rhoman James",
  description: "Module 05: Reviewing Offers and Negotiating — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/sellers-course/watch/module-5" },
  robots: { index: false, follow: true },
};

export default function Module5() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="05"
        moduleTitle="Reviewing Offers and Negotiating"
        totalModules={6}
        prevModule={{ slug: "module-4", title: "Listing, Marketing, and Showings" }}
        nextModule={{ slug: "module-6", title: "Closing Day and Moving Out" }}
        lessons={[
          {
            id: "lesson-0",
            title: "How to read a Kentucky purchase offer — every line matters",
            content: `When an offer arrives, the temptation is to look at the price. Price is important — but it is one element of a contract with multiple terms.

**Key elements beyond price**

Financing type: VA, FHA, conventional, or cash each has different implications. Down payment amount signals financial strength. Pre-approval letter quality matters. Earnest money amount signals commitment. Closing date compatibility with your timeline. Contingencies — inspection, financing, appraisal, sale. Seller concessions that reduce your net proceeds.

**The net proceeds comparison**

A $280,000 offer with $8,000 in concessions nets you $272,000. A $272,000 clean offer nets you the same after costs. Evaluate offers as complete packages.`,
            callout: `Evaluate offers as a complete package, not just price. A cash offer at $270,000 may net more than a financed offer at $278,000 with concessions.`,
            checklist: [
              "I will evaluate every offer element, not just purchase price",
              "I know to check the pre-approval letter and financing type",
              "I understand how concessions reduce my actual net proceeds",
            ],
          },
          {
            id: "lesson-1",
            title: "Should you accept a VA loan offer on your home",
            content: `VA loan offers are common in the Elizabethtown market due to Fort Knox.

**Common seller concerns addressed**

The appraisal is stricter: VA appraisers verify market value AND Minimum Property Requirements. Most standard, maintained homes pass without issue. The process takes longer: experienced VA lenders in the Elizabethtown market are very efficient. VA buyers cannot compete: false — VA buyers offer the same money with government-backed loans.

**Why VA offers can be preferable**

Military families with PCS timelines are serious, committed buyers. VA loans are assumable — a future benefit. The Fort Knox buyer pool is motivated and backed by federal guarantees.

**The honest assessment**

Declining VA offers reflexively means declining a significant portion of the most motivated buyer pool in this market.`,
            callout: `VA loan offers deserve the same consideration as any other financed offer. Most concerns are based on outdated information.`,
            checklist: [
              "I understand what VA Minimum Property Requirements actually require",
              "I will not decline VA offers reflexively without evaluating the full picture",
            ],
          },
          {
            id: "lesson-2",
            title: "How to handle multiple offers as a seller in Kentucky",
            content: `Handling multiple offers correctly is important.

**Your response options**

Accept one outright. Counter one offer. Issue multiple counteroffers simultaneously. Call for highest and best — notify all buyers that multiple offers exist and request each buyer's best offer by a specified deadline.

**Calling for highest and best**

The most common and most effective response. Transparent, generates competitive bids, treats all buyers fairly.

**Evaluating in a multiple offer situation**

Create a net proceeds calculation for each offer. The highest price is not always the best outcome — financing type, concessions, contingency risk, and closing timeline all affect which offer puts the most money in your pocket with the highest probability of closing.`,
            callout: `Calling for highest and best by a deadline is the most transparent and typically most effective response to multiple offers.`,
            checklist: [
              "I understand my options when multiple offers arrive",
              "I know highest and best by a deadline is the most common response",
              "I will create a net proceeds comparison for every offer",
            ],
          },
          {
            id: "lesson-3",
            title: "Negotiating inspection repairs — what to fix and what to decline",
            content: `The inspection negotiation is where sellers often feel blindsided.

**Your options for each repair request item**

Fix it: complete the repair before closing with a licensed contractor. Offer a credit: reduce the price or provide a closing cost credit. Decline: refuse and leave the buyer to decide.

**What to agree to**

Safety hazards — electrical deficiencies, structural dangers. Genuine material defects not apparent from the listing that affect value.

**What to decline**

Normal maintenance items visible on any home of your property's age. Items explicitly disclosed in your seller's disclosure. Cosmetic issues unrelated to function.

**Strategic reality**

Both parties benefit from completing the transaction. Approach the negotiation as a problem to solve, not a battle to win.`,
            callout: `Focus on safety issues and material defects. Decline normal maintenance and disclosed conditions. Offer credits when possible. Keep the transaction moving.`,
            checklist: [
              "I understand which repairs I should address vs. reasonably decline",
              "I know offering a credit is often better than making repairs myself",
              "I understand both parties benefit from completing the transaction",
            ],
          },
          {
            id: "lesson-4",
            title: "Seller concessions — when to offer them and how much",
            content: `Seller concessions are contributions toward the buyer's closing costs that reduce your net proceeds but expand the buyer pool.

**Why buyers ask for concessions**

Kentucky buyer closing costs run 2-4% of purchase price. For buyers with sufficient down payment but limited additional cash, concessions make the transaction possible.

**Concession limits by loan type**

VA: up to 4% of purchase price. FHA: up to 6%. Conventional: 2-9% depending on down payment.

**Strategic consideration**

A $270,000 offer with $5,000 concessions nets you $265,000. A $265,000 clean offer also nets $265,000. The higher price with concessions may appraise better since appraisers look at sale price, not net to seller. Discuss appraisal implications with your agent.`,
            callout: `Concessions are not inherently bad — they expand the buyer pool. Evaluate them in the context of total net proceeds.`,
            checklist: [
              "I understand what seller concessions are and why buyers request them",
              "I know the maximum concession limits for VA, FHA, and conventional loans",
              "I can calculate net proceeds from any offer including concessions",
            ],
          }
        ]}
      />
      <Footer />
    </>
  );
}
