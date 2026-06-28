import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Module 05: Inspections & Due Diligence | KY Home Buyers Course",
  description: "Kentucky home buyers course module 05 — Inspections & Due Diligence.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/course/watch/module-5" },
  robots: { index: false, follow: true },
};

export default function Module5() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="05"
        moduleTitle="Inspections & Due Diligence"
        totalModules={6}
        prevModule={{ slug: "module-4", title: "Making an Offer" }}
        nextModule={{ slug: "module-6", title: "Closing Day & Moving In" }}
        lessons={[
          {
            id: "lesson-0",
            title: "What a Kentucky Home Inspector Actually Checks",
            content: `
A home inspection is a visual examination of a property's accessible components by a licensed inspector. It is not a guarantee that no problems exist — it is a professional assessment of the property's condition based on what can be seen and tested on the day of the inspection.

**What is covered**

Roof — condition, age, flashings, gutters, downspouts, visible damage. The inspector typically does not walk the roof on steep pitches but will assess it from the ground or with binoculars.

Exterior — siding condition, grading and drainage around the foundation, visible foundation components, windows and doors, decks and porches.

Structural — visible foundation components, floor structure, attic framing, load-bearing wall conditions.

HVAC — heating and cooling systems, age, operation, visible condition of ductwork. The inspector will run both systems regardless of season.

Plumbing — visible pipes, fixtures, water heater (age, condition, operation), water pressure, drain function.

Electrical — service panel, visible wiring, outlets (tested), switches, GFCI and AFCI protection where required.

Interior — walls, ceilings, floors for evidence of water damage or structural movement. Windows and doors for operation. Insulation in accessible areas.

**What is not covered**

Standard home inspections do not include: concealed components (inside walls, under flooring), pest inspection (a separate service), radon testing (a separate service), underground utilities, swimming pools and spas, or outbuildings unless specifically added to the inspection agreement.

**Inspector selection**

In Kentucky, home inspectors must be licensed. Ask your agent for referrals — inspectors who do thorough work are known to agents who attend inspections regularly. An inspection typically costs $350 to $550 depending on home size and age. This is not an area to economize.

Attend the inspection in person. You will learn more in 3 hours with an inspector than from any report they could write.
            `,
            callout: `The $400 home inspection is the best money you spend in the entire home buying process. It is the one professional assessment designed entirely to protect your interests — not the lender's, not the seller's, not anyone else's.`,
checklist: [
          "I will schedule my inspection within the first 3 days of being under contract",
          "I will attend the inspection in person for the full duration",
          "I have budgeted $350-$550 for the inspection fee",
          "I will ask my agent for inspector referrals rather than finding one randomly",
        ],
          },
          {
            id: "lesson-1",
            title: "How to Attend Your Inspection and What to Ask",
            content: `
Most buyers who skip the inspection entirely or leave after the first 30 minutes regret it. The inspection report is valuable — being present for the actual inspection is more valuable. Here is how to make the most of it.

**Before the inspection**

Arrive on time or a few minutes early. Bring a notepad, your phone for photos, and comfortable shoes. Wear clothes you can move around in — you may be in the attic or crawlspace.

Ask the inspector what they will cover and in what order. Most inspectors have a systematic process — understanding their flow helps you follow along and ask questions at the right moments.

**During the inspection**

Follow the inspector from area to area. Do not wander off and do not rush them. Your presence is not a disturbance — professional inspectors expect attentive buyers.

When the inspector identifies something worth noting, ask these questions:

"Is this a safety concern?" — distinguishes defects that require immediate attention from maintenance items.

"How significant is this?" — inspectors see thousands of homes and have calibrated perspective on what is normal wear versus what is genuinely concerning.

"How much might this cost to repair?" — inspectors cannot give precise estimates but experienced inspectors can indicate whether something is a $200 fix or a $5,000 fix.

"Is this something I should get a specialist to look at?" — for structural, HVAC, and electrical concerns, a specialist's evaluation may be warranted before proceeding.

**Ask the inspector to show you**

The location of the main water shut-off valve. The electrical panel and how to reset a tripped breaker. The location and operation of HVAC filters. How to identify signs of water intrusion to watch for after move-in. Any items that require ongoing maintenance attention.

**After the inspection**

The inspector's written report typically arrives within 24 hours. Read it completely. Categorize findings into: safety concerns requiring immediate attention, significant defects worth negotiating, and routine maintenance items you will handle yourself.

Not every finding requires negotiation. A report with 40 items — most of which are routine maintenance — is normal. A report with 3 major items may warrant significant negotiation.
            `,
            callout: `Ask the inspector: 'If this were your home, what would you address first?' The answer tells you what matters most.`,
checklist: [
          "I plan to attend the full inspection, not just part of it",
          "I have prepared questions to ask the inspector during the walkthrough",
          "I know to ask about safety concerns, significance, and repair costs",
          "I will read the full inspection report before deciding how to proceed",
        ],
          },
          {
            id: "lesson-2",
            title: "Negotiating Repairs — What to Ask For and What to Let Go",
            content: `
The inspection report has arrived. It has 47 items on it, ranging from a missing GFCI outlet to a roof that has 3 to 5 years of remaining life. What do you ask the seller to fix?

**The strategic reality**

Everything is negotiable, but not everything is worth negotiating. Sellers who receive a repair request list of 30 items feel attacked and become defensive. Sellers who receive a focused request for 3 to 5 significant items are far more likely to agree to most of them.

The goal is not to get a perfect house — the goal is to ensure the price you are paying reflects the actual condition of the property.

**What to prioritize**

Safety hazards — electrical deficiencies, structural concerns, carbon monoxide risks, fire hazards. Sellers have both ethical and legal exposure for known safety issues. These requests are almost always granted.

Significant undisclosed defects — problems that a reasonable seller should have known about and disclosed but did not. A roof that is visibly at end of life, an HVAC system that does not function, active water intrusion. These represent meaningful financial risk.

**What to let go**

Normal maintenance items — caulking, minor weatherstripping, burnt-out bulbs, small cracks in concrete. These are not defects; they are wear.

Items you knew about before the offer — if the listing photos showed a dated kitchen and you offered accordingly, the dated kitchen is not now a repair item.

**The three responses to inspection findings**

Request repairs — ask the seller to fix specific items before closing, with proof of completion.

Request a credit — ask the seller to reduce the purchase price or provide a closing cost credit, and you handle the repairs yourself after closing. This is often preferable — you control the quality of the repair and choose the contractor.

Accept and move on — not every finding requires negotiation. Some items are yours to handle after closing as part of normal homeownership.

**When to walk away**

If inspection findings reveal problems that fundamentally change the value equation — structural issues that would cost $30,000 to repair on a home priced accordingly, or active water intrusion the seller refuses to address — exercising the inspection contingency and recovering your earnest money is the right choice.
            `,
            callout: `A focused, reasonable repair request is more likely to be granted than a comprehensive list of everything the inspector noted. Prioritize what matters most and let go of what does not.`,
checklist: [
          "I will prioritize safety concerns and significant defects in any repair request",
          "I understand the difference between requesting repairs, requesting credits, and accepting findings",
          "I will not submit a repair request for normal maintenance items",
          "I know that walking away using the inspection contingency is sometimes the right choice",
        ],
          },
          {
            id: "lesson-3",
            title: "The Appraisal — What It Is and What Happens If It Comes In Low",
            content: `
The appraisal is an independent valuation of the property ordered by your lender to confirm the home is worth what you agreed to pay. The lender will not loan more than the appraised value — this protects them from lending more money than the collateral is worth.

**How the appraisal works**

Your lender selects a licensed appraiser from an approved roster — you do not choose the appraiser. The appraiser visits the property, measures it, photographs it, and reviews its condition. They then analyze recent sales of comparable properties — homes of similar size, age, condition, and location — to determine a supportable market value.

The appraisal report is typically completed within 7 to 14 days of the appraiser's visit. Your lender reviews it and communicates the result.

**When the appraisal matches the purchase price**

This is the normal outcome. The transaction proceeds to the next steps without complication.

**When the appraisal exceeds the purchase price**

A favorable appraisal — one that comes in above your contract price — means you are buying a home worth more than you are paying. This is a good outcome. It does not change your purchase price.

**When the appraisal comes in below the purchase price**

An appraisal gap — when the appraised value is less than the purchase price — is the situation that requires action. You have several options:

Renegotiate the price with the seller. Many sellers, when faced with a documented appraisal gap, will reduce the price to the appraised value rather than risk losing the buyer and having to relist the property.

Pay the difference in cash. You can choose to pay the gap between the appraised value and purchase price out of pocket. Your lender finances up to the appraised value; you cover the rest. This only makes sense if you are confident the property is worth the contract price and the market will validate that.

Exercise the appraisal contingency. If your contract includes an appraisal contingency, you can exit the transaction and recover your earnest money if the appraisal comes in below the contract price.

**VA appraisals**

VA appraisals serve an additional purpose: verifying that the property meets VA Minimum Property Requirements. If the property does not meet MPRs, the appraiser will note required repairs. These must be completed and verified before the VA loan can close.
            `,
            callout: `An appraisal gap is not necessarily the end of a transaction — it is a negotiation trigger. Most sellers faced with a documented appraisal gap will negotiate rather than relist the property.`,
checklist: [
          "I understand that my lender orders the appraisal, not me",
          "I know what my options are if the appraisal comes in below purchase price",
          "I have an appraisal contingency in my contract to protect me from a gap",
          "I understand that VA appraisals also check Minimum Property Requirements",
        ],
          },
          {
            id: "lesson-4",
            title: "What Can Kill a Deal and How to Prevent It",
            content: `
Most real estate transactions that fall through do so for predictable, preventable reasons. Understanding them gives you the ability to avoid them.

**Financing failure**

The most common deal-killer. Causes include: a change in the buyer's employment, income, or credit profile after pre-approval; a property that does not appraise; a lender who cannot meet the timeline; or a buyer who took on new debt between pre-approval and closing.

Prevention: Do not change anything about your financial life between pre-approval and closing. Respond to your lender's requests within 24 hours. Choose a lender with a reputation for closing on time.

**Inspection breakdown**

A deal dies when buyer repair requests exceed what the seller is willing to address, or when the inspection reveals a problem so significant the buyer cannot proceed.

Prevention: Do not submit unreasonable repair requests. Focus on safety and significant defects. Be willing to take credits instead of demanding repairs.

**Appraisal gap with no resolution**

When the property does not appraise at the purchase price and neither party is willing to move — the buyer cannot cover the gap, and the seller will not reduce the price.

Prevention: Offer a reasonable price supported by comparable sales. Avoid significantly overbidding on properties in appraisal-sensitive loan programs.

**Title issues**

Undisclosed liens, ownership disputes, or encroachments discovered during the title search can delay or prevent closing.

Prevention: Title insurance protects you from undisclosed title defects. Make sure you purchase owner's title insurance, not just lender's title insurance.

**Communication breakdown**

Deals die when parties stop communicating — when messages go unreturned, when deadlines are missed, when assumptions substitute for confirmation.

Prevention: Work with an agent and lender who are genuinely responsive. Maintain communication with all parties throughout the process. When in doubt, ask — do not assume.
            `,
            callout: `The vast majority of real estate transactions close without catastrophe. Most that fall through do so for reasons that were preventable. Stay financially stable, communicate promptly, and work with professionals who have a track record of closing.`,
checklist: [
          "I understand the most common reasons real estate deals fall through",
          "I am committed to keeping my financial profile stable until after closing",
          "I will respond to my lender's documentation requests within 24 hours",
          "I will maintain clear communication with my agent throughout the process",
        ],
          }
        ]}
      />
      <Footer />
    </>
  );
}
