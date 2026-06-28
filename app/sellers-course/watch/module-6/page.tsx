import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 06: Closing Day and Moving Out | Rhoman James",
  description: "Module 06: Closing Day and Moving Out — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/sellers-course/watch/module-6" },
  robots: { index: false, follow: true },
};

export default function Module6() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="06"
        moduleTitle="Closing Day and Moving Out"
        totalModules={6}
        prevModule={{ slug: "module-5", title: "Reviewing Offers and Negotiating" }}
        nextModule={null}
        lessons={[
          {
            id: "lesson-0",
            title: "What seller closing costs look like in Hardin County KY",
            content: `Closing day brings finality — and a closing statement itemizing every cost and credit.

**The costs**

Agent commissions: 5-6% of sale price. State transfer tax: $0.50 per $500 ($280 on a $280,000 sale). Attorney fee: $400-$700. Title insurance: $600-$1,200. Prorated property taxes through closing date. Recording fees: $50-$100.

**The closing statement**

Before closing, you receive a settlement statement (ALTA) itemizing every debit and credit. Review it carefully with your agent before closing day. Any discrepancy should be flagged to the closing attorney immediately.

**Total costs**

Excluding commissions, seller closing costs typically run 1.5-2.5%. With commissions, total selling costs run 7-9%.`,
            callout: `Total seller closing costs in Kentucky run 7-9% of sale price. Know this number before you accept an offer.`,
            checklist: [
              "I have estimated my total closing costs at 7-9% of expected sale price",
              "I will review the settlement statement before closing day",
              "I know to flag any discrepancy to the closing attorney immediately",
            ],
          }
          {
            id: "lesson-1",
            title: "How to calculate your exact net proceeds",
            content: `Your net proceeds — not your sale price — are what matter to your financial situation.

**The formula**

Sale price, minus mortgage payoff, minus commissions, minus closing costs, minus concessions, minus prorated taxes. The result is your net proceeds.

**Working backward from a goal**

Desired net proceeds + payoff + commissions (6%) + closing costs (2%) = minimum acceptable sale price.

If your minimum acceptable price is above what the market supports, you may not be in a position to sell right now. Knowing that before listing saves significant time and expense.

Use the Net Proceeds Calculator at rhomanjames.com/tools/net-proceeds to model your specific numbers.`,
            callout: `Calculate your net proceeds before you list. Calculate them again for every offer. The number that matters is not what the buyer pays — it is what you keep.`,
            checklist: [
              "I have used the Net Proceeds Calculator at rhomanjames.com",
              "I know my minimum acceptable net proceeds and corresponding minimum sale price",
              "I will recalculate net proceeds for every offer before responding",
            ],
          }
          {
            id: "lesson-2",
            title: "What happens at a Kentucky attorney closing as the seller",
            content: `Sellers often have a simpler closing experience than buyers.

**Before closing day**

In most Kentucky transactions, sellers and buyers do not close in the same room at the same time. You will receive a settlement statement before closing. Review it carefully and know your exact net proceeds before you sit down.

**What you sign**

The deed: transferring ownership to the buyer. Review your name exactly as it appears. The settlement statement. Seller's affidavits confirming no new liens and authority to sell.

**How you receive proceeds**

Net proceeds are typically disbursed by wire transfer within 24 hours of closing. Bring your bank routing and account number or a voided check.`,
            callout: `Review the settlement statement before closing day, not at the table. Know your exact net proceeds. Bring bank account information for wire disbursement.`,
            checklist: [
              "I will review the settlement statement before closing day",
              "I have confirmed closing logistics — time, location, whether I sign separately",
              "I have my bank routing and account number ready",
            ],
          }
          {
            id: "lesson-3",
            title: "What to leave, what to take, and what to hand over at closing",
            content: `Knowing exactly what stays, what goes, and what to hand over prevents last-minute disputes.

**What stays with the home**

Built-in appliances, light fixtures, ceiling fans, window treatments attached to the window, garage door openers and remotes, and anything permanently attached. If you want to take a specific item, exclude it in the listing and contract before the offer stage.

**The condition at possession**

Broom-clean — swept, emptied of all personal property, in the same general condition as when the buyer made their offer.

**What to hand over**

All keys. Garage door remotes. Mailbox key. Appliance manuals and warranty documents. HOA documents including rules, management contact, and any key fobs or access cards.`,
            callout: `Leave the home broom-clean. Hand over every key, remote, and manual. Exclude items you want before the offer is written — not after.`,
            checklist: [
              "I have confirmed which appliances and fixtures are included in the sale",
              "I have listed any items I want to exclude in the listing and contract",
              "I have gathered all keys, remotes, manuals, and HOA documents to hand over",
            ],
          }
        ]}
      />
      <Footer />
    </>
  );
}
