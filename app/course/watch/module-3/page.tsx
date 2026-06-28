import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Module 03: Finding the Right Home | KY Home Buyers Course",
  description: "Kentucky home buyers course module 03 — Finding the Right Home.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/course/watch/module-3" },
  robots: { index: false, follow: true },
};

export default function Module3() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="03"
        moduleTitle="Finding the Right Home"
        totalModules={6}
        prevModule={{ slug: "module-2", title: "Getting Your Financing Right" }}
        nextModule={{ slug: "module-4", title: "Making an Offer" }}
        lessons={[
          {
            id: "lesson-0",
            title: "How to Work With a Buyer's Agent in Kentucky",
            content: `
In Kentucky, buyer representation is available at no cost to you in most transactions. The seller pays the commission that covers both agents. Getting professional representation is not optional in a competitive market — going unrepresented against a listing agent who works for the seller puts you at a significant disadvantage.

**What a buyer's agent actually does**

A buyer's agent is your advocate throughout the entire transaction. They provide access to the Multiple Listing Service (MLS) — the complete database of available properties that sites like Zillow only partially reflect. They alert you to new listings immediately. They negotiate on your behalf. They coordinate inspections, communicate with lenders and closing attorneys, and guide you through every document you sign.

**The Buyer Representation Agreement**

Under Kentucky law and current industry practices, you will be asked to sign a Buyer Representation Agreement before your agent shows you homes. This document formalizes the relationship — what the agent agrees to do for you, what compensation they will receive, and for how long the agreement is in effect.

Read it carefully. Understand the term length. Make sure you are comfortable with the agent before signing an exclusive agreement. Most reputable agents are willing to start with a shorter-term agreement until you establish mutual trust.

**What to look for in an agent**

Local market knowledge is the primary qualification. An agent who knows Elizabethtown street by street, who can tell you which neighborhoods appreciate fastest, which school zones matter most, and which listing prices are fair versus inflated — that knowledge is worth more than any credential.

Responsiveness matters enormously. In a market where good homes go under contract within days, an agent who does not respond to calls and texts within hours costs you homes.

Ask how many transactions they have closed in Hardin County in the past 12 months. Ask for references from recent buyers. Ask how they handle multiple offer situations and what their strategy is for helping buyers compete.

**Agency relationships in Kentucky**

Kentucky allows dual agency — a situation where one agent or brokerage represents both buyer and seller. This creates an inherent conflict of interest. You have the right to ask whether your agent has any relationship with the seller or the listing agent before you proceed.
            `,
            callout: `The right buyer's agent pays for themselves many times over — in homes found faster, negotiations won, inspection issues identified, and mistakes avoided. The cost to you is almost always zero.`,
checklist: [
          "I understand what a Buyer Representation Agreement is and what it commits me to",
          "I have identified criteria for choosing an agent — local knowledge, responsiveness, experience",
          "I understand how buyer agent compensation works in Kentucky",
          "I know to ask about dual agency situations before proceeding",
        ],
          },
          {
            id: "lesson-1",
            title: "Evaluating Elizabethtown and Hardin County Neighborhoods",
            content: `
Choosing the right neighborhood is as important as choosing the right house. A great house in the wrong location — wrong school zone, wrong commute, wrong community character — produces lasting regret. A modest house in the right neighborhood produces lasting satisfaction.

**The communities to understand**

Elizabethtown proper is the county seat and most amenity-rich option. Helmwood Hills and the Freeman Lake area are among the most sought-after neighborhoods. Newer subdivisions on the south and east sides offer modern floor plans at accessible price points. The Ring Road corridor offers maximum retail access.

Radcliff sits adjacent to Fort Knox's primary gate — 5 to 10 minutes from most post locations. The most diverse community in Hardin County, with more affordable home prices than Elizabethtown and a strong military community feel.

Vine Grove is a tight-knit small city with its own school system, newer affordable subdivisions, and genuine community character. Approximately 15 minutes from both Elizabethtown and Fort Knox.

Rineyville is rural Hardin County — larger parcels, genuine privacy, and the most affordable price-per-square-foot in the county.

**School zone research**

Your child's school assignment is determined by their specific home address — not by the community name or the city on the mailing address. Two adjacent homes can be in different school districts. Always verify school zone for any property you are seriously considering before making an offer.

Both Hardin County Schools and Elizabethtown Independent Schools perform above Kentucky state averages. Understanding which high school serves a specific address — North Hardin, Central Hardin, John Hardin, or Elizabethtown High — is important for families with children in or approaching high school.

**Commute reality**

Map your commute from any property you are considering to your actual workplace at the time of day you actually commute. A 12-minute drive on a Saturday afternoon becomes a 22-minute drive during the Fort Knox gate rush. This difference matters across years of daily commuting.

**Appreciation patterns**

Not all neighborhoods appreciate at the same rate. Properties near quality schools, in established neighborhoods with mature landscaping, and in areas with active reinvestment tend to appreciate faster than isolated properties with no comparable sales activity. Your agent should be able to speak to appreciation trends by specific neighborhood.
            `,
            callout: `Visit any neighborhood you are seriously considering at different times of day — a weekday morning, an evening, a weekend afternoon. The character of a neighborhood reveals itself differently at different hours.`,
checklist: [
          "I have researched the communities in Hardin County and identified my preferred areas",
          "I have verified school zone requirements for any neighborhood I am considering",
          "I have mapped my actual commute from target neighborhoods to my workplace",
          "I understand the price point differences between Elizabethtown, Radcliff, and Vine Grove",
        ],
          },
          {
            id: "lesson-2",
            title: "What to Look For Beyond the Listing Photos",
            content: `
Listing photos are marketing materials. Their job is to make a property look as appealing as possible — wide-angle lenses, strategic lighting, and selective framing are all standard practice. The gap between a property as shown and a property as experienced can be significant.

**What photos cannot tell you**

Noise environment. A home adjacent to a busy road, a commercial property, or a flight path may photograph beautifully while being genuinely unpleasant to live in. Walk the property at different times. Listen.

Neighbor proximity. Wide-angle photos can make a 15-foot side yard look like a spacious buffer. Stand in the yard and look at what you actually see from every window.

Traffic and parking. A street that handles traffic comfortably at noon may be congested and difficult to navigate at school pickup time. Visit when the neighborhood is actually active.

HVAC and mechanical condition. A well-staged home with fresh paint and clean carpet can conceal systems that are at the end of their useful life. Always ask for the age of the HVAC, water heater, and roof. These are the three largest potential capital expenses in any home.

**What to look for on a showing**

Water — look for stains on ceilings, walls, and around windows. Water intrusion is among the most expensive repairs a homeowner faces and is often hidden under fresh paint.

Foundation — look at the basement or crawlspace walls for cracks. Horizontal cracks are more serious than vertical ones. Sticking doors and windows can indicate foundation movement.

Electrical — does the home have an updated panel or an older fuse box? Are there GFCI outlets in kitchens and bathrooms as required by current code?

Grading — does water drain away from the foundation or toward it? Poor grading causes water intrusion over time.

**The listing disclosure**

Kentucky sellers are required to provide a disclosure of known material defects. Read it carefully. It does not guarantee the absence of problems — sellers disclose what they know, and some defects are genuinely unknown to the seller. But undisclosed known defects can create legal liability for the seller.

**Your inspection is the safety net**

You cannot identify every issue during a showing — that is what the home inspection is for. The showing is about determining whether the property is worth pursuing. The inspection is about fully understanding what you are buying.
            `,
            callout: `Turn on every faucet, flush every toilet, open every window, and run every appliance during your showing. You are not being difficult — you are being a buyer.`,
checklist: [
          "I will visit any serious candidate property at multiple times of day",
          "I will ask about the age of HVAC, water heater, and roof on any property I consider",
          "I will look for signs of water intrusion during every showing",
          "I will read the seller's disclosure carefully before proceeding to offer",
        ],
          },
          {
            id: "lesson-3",
            title: "School Zones, Commutes, and the Details That Matter",
            content: `
The three factors that most often cause buyers to regret their purchase are school zone, commute, and neighborhood trajectory. These are harder to evaluate than square footage or kitchen finishes — but they matter more to daily quality of life.

**School zone verification**

Do not rely on any map, any website, or any verbal statement from a seller or agent to determine school zone. The only reliable method is to contact the school district directly with the specific address and ask which schools serve that address.

Both school districts in the Elizabethtown area — Hardin County Schools and Elizabethtown Independent Schools — have administration offices that can answer this question definitively.

If a specific school assignment is important to your family's decision, verify it by address before you make an offer, not after.

**HOA rules and restrictions**

Many newer Elizabethtown and Hardin County neighborhoods have homeowner associations. HOAs regulate property appearance, parking, rental restrictions, and sometimes breed restrictions for pets.

If you are considering a property in an HOA:
Read the CC&Rs (Covenants, Conditions, and Restrictions) before making an offer.
Ask specifically whether short-term or long-term rentals are permitted — relevant if you might PCS out and want to rent the property.
Ask about the HOA fee amount and what it covers.
Ask whether there are any pending special assessments — one-time charges for capital improvements that all owners must pay.

**Utility and internet availability**

In most of Elizabethtown and Radcliff, internet service is adequate for remote work — AT&T Fiber covers much of the area, with Spectrum as an alternative. In rural Hardin County and Rineyville, coverage is more variable. If remote work depends on reliable internet, verify available providers and speeds at any rural address before committing.

**Future development**

The area around a home can change. A vacant lot adjacent to a property could become a commercial development. A quiet street can change character over time. Ask your agent what they know about planned development near any property you are seriously considering. Review the county's zoning map for properties in areas of active growth.
            `,
            callout: `School zone, HOA rules, and internet availability are the three most commonly overlooked due diligence items. Each one can significantly affect your satisfaction with a purchase. Verify all three before making an offer.`,
checklist: [
          "I will verify school zone directly with the district for any home I plan to offer on",
          "I will read all HOA documents before making an offer on an HOA property",
          "I will verify internet availability at any rural property I am considering",
          "I will ask my agent about planned development near any property I am serious about",
        ],
          },
          {
            id: "lesson-4",
            title: "Red Flags — What Should Make You Walk Away",
            content: `
Not every home that looks good is worth buying. Some properties have problems that make them poor investments regardless of price. Recognizing the red flags before you are emotionally attached to a home saves you from expensive mistakes.

**Foundation issues**

Significant foundation problems are among the most expensive repairs a homeowner can face — repairs can run $10,000 to $50,000 or more depending on severity. Signs to watch for:

Horizontal cracks in basement walls (more serious than vertical cracks). Doors and windows that stick or will not close properly. Floors that slope noticeably. Separation between walls and ceilings or floors. These signs do not automatically mean you should walk away — they mean you need a structural engineer to evaluate the situation before proceeding.

**Water and drainage problems**

Water intrusion is pervasive, expensive, and often recurrent. Stains on ceilings indicate a roof or plumbing leak. Stains on basement walls indicate water intrusion from outside. Musty smell indicates moisture and potential mold. Efflorescence — white mineral deposits on concrete walls — indicates water moving through the foundation.

Poor grading around the foundation allows water to pool against the house. This is sometimes correctable with grading work, sometimes indicative of a more serious drainage problem.

**Electrical concerns**

Knob-and-tube wiring (found in older homes) is not inherently dangerous but is not covered by most homeowner's insurance policies and is expensive to replace. Federal Pacific and Zinsco electrical panels have known safety issues and most insurance companies will not cover homes with them without replacement.

**Title issues**

A title search conducted by the closing attorney should reveal any title problems — unpaid liens, encroachments, or ownership disputes. These issues can prevent closing or create legal complications after purchase. Your title insurance protects you from title defects that were unknown at closing.

**Seller behavior**

A seller who refuses reasonable inspection requests, who provides incomplete or evasive disclosures, or who is unwilling to negotiate on legitimate inspection findings is a red flag about what you may discover after closing. Seller transparency during the transaction is often predictive of disclosure quality.

**The overriding principle**

Red flags are not automatic dealbreakers — they are triggers for deeper investigation. The appropriate response to a potential foundation issue is to hire a structural engineer, get a repair estimate, and then decide whether the price reflects the problem. The wrong response is to either ignore it or panic. Your agent and inspector should help you calibrate the appropriate response to anything discovered during due diligence.
            `,
            callout: `The purpose of due diligence is not to find a perfect home — it is to make sure you understand what you are buying at the price you are paying. A home with known issues at the right price is often a better purchase than a perfect-looking home at an inflated price.`,
checklist: [
          "I understand the difference between cosmetic issues and structural concerns",
          "I know to look for signs of water intrusion, foundation movement, and electrical concerns",
          "I will hire a structural engineer if I see signs of foundation issues in any property I am serious about",
          "I understand that red flags require investigation, not necessarily abandonment",
        ],
          }
        ]}
      />
      <Footer />
    </>
  );
}
