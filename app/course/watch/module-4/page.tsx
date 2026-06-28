import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Module 04: Making an Offer | KY Home Buyers Course",
  description: "Kentucky home buyers course module 04 — Making an Offer.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/course/watch/module-4" },
  robots: { index: false, follow: true },
};

export default function Module4() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="04"
        moduleTitle="Making an Offer"
        totalModules={6}
        prevModule={{ slug: "module-3", title: "Finding the Right Home" }}
        nextModule={{ slug: "module-5", title: "Inspections & Due Diligence" }}
        lessons={[
          {
            id: "lesson-0",
            title: "How Kentucky Real Estate Contracts Work",
            content: `
A real estate purchase contract is a legally binding document. Once both parties sign it, you are committed — backing out without cause costs you your earnest money and potentially more. Understanding what you are signing before you sign it is not optional.

**The standard Kentucky contract**

Kentucky real estate transactions use standardized purchase contracts developed by the Kentucky Association of Realtors. Your agent will use this form or a version of it. The contract covers:

Purchase price and terms of payment. The closing date. What personal property is included or excluded. Contingencies — conditions that must be met for the sale to proceed. Earnest money amount and where it is held. Who pays which closing costs.

**Key contract components**

The purchase price is the number you offer — not necessarily the list price. Whether to offer above, at, or below list price depends on market conditions, comparable sales, and the specific property's time on market.

The closing date is when ownership transfers and you receive keys. In Kentucky, closings are typically scheduled for 30 to 45 days after contract execution when financing is involved. Cash purchases can close in as little as 10 to 14 days.

The possession date is typically the same as the closing date, but sellers sometimes negotiate for a leaseback — remaining in the home for a period after closing while they complete their own move.

Personal property items to include in the sale — appliances, window treatments, outdoor equipment — should be specified in the contract. Verbal agreements about what stays are not enforceable.

**Counteroffers**

Sellers rarely accept the first offer exactly as written. A counteroffer modifies one or more terms — usually price, closing date, or contingencies — and rejects the original offer. You can then accept, reject, or counter again. This negotiation process continues until both parties agree on all terms or one party walks away.

**Time is of the essence**

Real estate contracts have deadlines — for earnest money deposit, for inspection completion, for financing approval, and for closing. Missing a deadline can constitute a breach of contract. Pay attention to every deadline in your contract and make sure your agent is tracking them.
            `,
            callout: `Read your purchase contract before your agent presents it. Ask about every line you do not understand. You are signing a legal document — understand every commitment you are making.`,
checklist: [
          "I understand that a signed purchase contract is legally binding",
          "I know what closing date I want and that 30-45 days is typical with financing",
          "I understand that personal property items must be specified in writing to be enforceable",
          "I will track every contract deadline with my agent",
        ],
          },
          {
            id: "lesson-1",
            title: "Contingencies — Which Ones to Include and Why",
            content: `
Contingencies are conditions in your purchase contract that must be satisfied for the sale to proceed. If a contingency is not met, you can typically exit the contract without losing your earnest money. Contingencies protect you — removing them to make an offer more competitive increases your risk.

**Inspection contingency**

The inspection contingency gives you the right to have the home professionally inspected within a specified period (typically 10 days) and to negotiate repairs, request a price reduction, or exit the contract if the inspection reveals problems you cannot accept.

This is the most important contingency for most buyers. Waiving it means accepting the property in whatever condition it is in, discovered or undiscovered. Never waive the inspection contingency unless you are a sophisticated investor who has personally walked the property and understands exactly what you are accepting.

**Financing contingency**

The financing contingency allows you to exit the contract without penalty if your mortgage loan is denied despite good-faith efforts to obtain financing. It typically specifies a loan amount, loan type, and maximum interest rate. If you cannot obtain financing meeting those terms, you can exit and recover your earnest money.

Waiving the financing contingency means you are personally liable for the purchase price if your loan falls through. This is a significant risk. Most buyers should not waive this contingency unless they have documented the ability to pay cash.

**Appraisal contingency**

The appraisal contingency protects you if the property appraises below the purchase price. Your lender will not loan more than the appraised value — so if you offer $280,000 and it appraises at $265,000, you either renegotiate the price, pay the $15,000 gap in cash, or exit the contract using the appraisal contingency.

**Sale contingency**

A sale contingency makes your purchase conditional on selling your current home first. Sellers typically dislike these because they add uncertainty to the transaction. In a competitive market, offering a sale contingency often means losing to buyers who do not have one. If you need to sell your current home to fund the purchase, discuss strategies with your agent — there are ways to manage this risk without a sale contingency in some situations.
            `,
            callout: `Contingencies are your safety net. Removing them makes your offer more competitive but increases your financial exposure. Understand exactly what you are giving up before waiving any contingency.`,
checklist: [
          "I understand what the inspection contingency protects me from",
          "I understand what the financing contingency protects me from",
          "I understand what the appraisal contingency protects me from",
          "I will not waive any contingency without fully understanding the risk I am accepting",
        ],
          },
          {
            id: "lesson-2",
            title: "Earnest Money — How Much and What Happens to It",
            content: `
Earnest money is a good-faith deposit submitted after your offer is accepted, demonstrating to the seller that you are a serious buyer and have skin in the game. Understanding how earnest money works — when you get it back, when you lose it, and how much to offer — is important before you make any offer.

**How much earnest money is typical**

In the Elizabethtown and Hardin County market, earnest money typically ranges from 1% to 3% of the purchase price. On a $250,000 home, that is $2,500 to $7,500. Higher earnest money signals stronger commitment and can make your offer more attractive in competitive situations.

**Where earnest money is held**

Earnest money is deposited into an escrow account — typically held by the buyer's agent's brokerage or the closing attorney. It is not given to the seller. It is held by a neutral third party until closing or until the transaction terminates.

**When you get it back**

If you exit the contract for reasons covered by your contingencies — failed inspection you could not negotiate, financing denial, appraisal gap you exercised the contingency on — you recover your earnest money in full. The seller cannot keep it.

**When you lose it**

If you exit the contract for reasons not covered by a contingency — you simply change your mind, you find a home you like better, your personal situation changes — the seller is typically entitled to keep the earnest money as liquidated damages.

The timing matters. Once your contingency periods have expired, you have significantly less protection. Walking away after contingency periods end and without cause almost always results in losing your deposit.

**Earnest money at closing**

If the transaction closes, your earnest money is applied to your closing costs or down payment. You are not paying it in addition to your closing costs — it is part of them.

**The practical implication**

Never offer more earnest money than you are comfortable losing if the deal falls through for a non-contingency reason. In most transactions, earnest money is fully recovered — but you should treat it as money at risk until you have keys in hand.
            `,
            callout: `Earnest money is at risk only if you exit the contract without a contingency reason. Maintain your contingencies, meet your deadlines, and your earnest money is protected.`,
checklist: [
          "I know that 1-3% of purchase price is typical earnest money in Hardin County",
          "I understand earnest money is held in escrow, not given to the seller",
          "I know when I am and am not entitled to recover my earnest money",
          "I will not offer earnest money I cannot afford to lose",
        ],
          },
          {
            id: "lesson-3",
            title: "How to Compete Without Overpaying",
            content: `
Elizabethtown is a competitive market for well-priced homes. Multiple offers are not unusual on desirable properties. Knowing how to structure a competitive offer without leaving money on the table or making decisions you will regret is one of the most valuable things your agent provides.

**Know the market before you offer**

Your agent should provide you with a comparative market analysis (CMA) before you make any offer — recent sales of similar homes in the same neighborhood, adjusted for size, condition, and features. The CMA tells you what the home is actually worth, which tells you what a fair offer looks like.

Offering above market value can win a bidding war but creates two problems: you may have overpaid, and the appraisal may come in below the contract price, creating a gap you have to fill with cash or renegotiate.

**Price strategy**

In a multiple offer situation, ask your agent what they know about competing offers — how many there are, whether any are cash. Price your offer based on value plus what it takes to win, not on emotion.

**Escalation clauses**

An escalation clause automatically increases your offer above competing offers by a specified increment, up to a ceiling you set. For example: "I offer $270,000, and will beat any competing offer by $2,000 up to a maximum of $285,000."

Escalation clauses are transparent — the seller can see your ceiling — but they are effective in multiple offer situations because they eliminate the guessing game.

**Terms that matter beyond price**

Sellers care about more than price. A clean offer with fewer contingencies, flexible closing date, or larger earnest money can sometimes win over a higher-priced offer with more risk or complexity.

Pre-approval from a local, reputable lender carries more weight than an online lender the listing agent does not recognize. Sellers want to know the financing is solid.

**What you cannot control**

Sometimes the best offer loses. Cash buyers with no contingencies beat financed buyers in many situations regardless of price. An all-cash offer at list price often beats a financed offer at list price plus 3% because the seller's net certainty is higher.

If you lose a home you loved, do not revise your criteria to accept a worse property. The right home at the right price is worth waiting for.
            `,
            callout: `Win on value, not emotion. Know what the home is worth before you offer. Compete strategically, not desperately. Overpaying to win a bidding war is a short-term win and a long-term problem.`,
checklist: [
          "I will ask my agent for a CMA before making any offer",
          "I understand how escalation clauses work and when they are appropriate",
          "I know which non-price terms can strengthen an offer",
          "I am prepared to lose a home I want rather than overpay for it",
        ],
          },
          {
            id: "lesson-4",
            title: "What Happens After Your Offer Is Accepted",
            content: `
Offer accepted. Now what? The period between contract execution and closing is the most active — and most stressful — part of the home buying process. Understanding what happens and when gives you control over the timeline.

**The first 72 hours**

Deposit your earnest money as specified in the contract — usually within 3 business days. Schedule your home inspection as immediately as possible. Most inspection contingency periods are 10 to 14 days. Getting the inspection done in the first week gives you time to negotiate if issues are found.

Notify your lender that you are under contract. They will order the appraisal, which typically takes 1 to 2 weeks to complete and report.

**The inspection period**

The home inspection typically takes 2 to 4 hours. Attend it. Walk through every area with the inspector. Ask questions. Take notes and photos beyond what the inspector's report covers.

After the inspection, you will receive a written report. Review it carefully with your agent. Decide which items — if any — you want to negotiate, and which you will accept or handle yourself after closing.

**Appraisal**

Your lender orders the appraisal after you are under contract. The appraiser visits the property, reviews comparable sales, and produces a report valuing the home. This typically takes 7 to 14 days.

If the appraisal matches or exceeds your contract price, this step is complete. If it comes in below your contract price, you have options — renegotiate the price with the seller, pay the difference in cash, or exercise your appraisal contingency.

**Clear to close**

Once your lender completes underwriting — verifying your income, credit, assets, and the appraisal — they issue a "clear to close." This means the loan is approved and ready to fund at closing.

You will receive a Closing Disclosure at least 3 business days before closing. Review it carefully against your Loan Estimate — the two documents should closely match. Any significant discrepancies should be flagged to your lender immediately.

**Closing day**

The closing attorney will have you sign a significant stack of documents. The process typically takes 60 to 90 minutes. After all documents are signed and funds are confirmed, you receive your keys.
            `,
            callout: `The two weeks after offer acceptance are the most time-sensitive of the entire process. Get your inspection done immediately. Respond to your lender's requests within 24 hours. Missing deadlines costs you.`,
checklist: [
          "I will deposit earnest money within the timeframe specified in my contract",
          "I will schedule my inspection within the first 3 days after contract execution",
          "I will notify my lender immediately when I go under contract",
          "I will review the Closing Disclosure carefully 3 days before closing",
        ],
          }
        ]}
      />
      <Footer />
    </>
  );
}
