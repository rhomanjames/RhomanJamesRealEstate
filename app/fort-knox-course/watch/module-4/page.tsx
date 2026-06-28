import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 04: Buying on a PCS Timeline | Rhoman James",
  description: "Module 04: Buying on a PCS Timeline — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/fort-knox-course/watch/module-4" },
  robots: { index: false, follow: true },
};

export default function Module4() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="04"
        moduleTitle="Buying on a PCS Timeline"
        totalModules={6}
        prevModule={{ slug: "module-3", title: "BAH Strategy — Making Your Housing Allowance Work for You" }}
        nextModule={{ slug: "module-5", title: "The Home Search Near Fort Knox" }}
        lessons={[
          {
            id: "lesson-0",
            title: "What to do the moment your orders arrive",
            content: `Compressed PCS timelines are the enemy of good real estate decisions. Starting immediately when orders arrive is the single most important thing you can do.

**Day 1: Contact a real estate agent**

Not when you have finished your farewell events at your current station. Not when you have packed the household goods. The day the orders are in hand. An agent who knows the Fort Knox market can begin searching, prepare market analysis, and identify target properties while you complete your out-processing.

**Day 1: Contact a VA-experienced lender**

Your pre-approval will take 1-2 weeks to complete. Starting immediately means your pre-approval is ready when you identify target properties, not after. You need your last 30 days of pay stubs, 24 months of W-2s, and 60 days of bank statements.

**Day 1: Request your Certificate of Eligibility**

Or authorize your lender to request it. Takes minutes through the VA system.

**Week 1: Community research**

Confirm your gate and workplace on post. Research Elizabethtown, Radcliff, and Vine Grove based on your commute, family needs, and budget. Identify your top 1-2 community priorities.

**Week 2-3: Active search**

With pre-approval in hand and community preferences identified, begin active property search. In the current market, you need to be able to act within 24-48 hours of identifying a suitable property.`,
            callout: `The most common PCS homebuying mistake is starting too late. Every week of delay narrows your options. Start the moment orders arrive.`,
            checklist: [
              "I have contacted a real estate agent and lender from the moment orders arrived",
              "I have begun gathering my pre-approval documentation",
              "I have confirmed my gate and workplace on post to guide neighborhood selection",
            ],
          },
          {
            id: "lesson-1",
            title: "How to buy a Fort Knox home remotely before you arrive",
            content: `Many military families cannot visit Elizabethtown before their report date. Remote purchases work — here is how.

**Initial consultation by video**

A thorough video call establishes your priorities, timeline, budget, and deal-breakers. A good agent who knows the Fort Knox market can give you an honest assessment of what your budget buys in each community and what to realistically expect.

**Custom search setup**

Your agent sets up a search that alerts you to qualifying properties as they hit the market — often before they appear on public sites. In the Fort Knox market where good homes move quickly, being first to see new listings is critical.

**Live video walkthroughs**

When you identify a serious candidate, your agent conducts a live video walkthrough via FaceTime or video call. A thorough agent shows you street context, neighbor proximity, condition details, and anything that gives them pause — not just the features the listing photos highlight.

**Neighborhood context videos**

Beyond the property itself, you want to understand the street, the immediate surroundings, and the commute. Your agent should be able to drive the neighborhood and share footage or conduct a live drive-through.

**Digital contract and closing**

Offers and contracts are signed electronically. Kentucky allows remote closings — a mobile notary or remote online notarization handles the closing documents at your location.`,
            callout: `Remote purchases work when you have an agent who takes the responsibility seriously. The key is an agent who shows you what you need to see, not just what looks good.`,
            checklist: [
              "I have discussed remote purchase logistics with my agent",
              "I understand that live video walkthroughs should include street context, not just interior",
              "I know that Kentucky allows remote closings via mobile notary or RON",
            ],
          },
          {
            id: "lesson-2",
            title: "Video walkthroughs — how to evaluate a home you have not visited",
            content: `A video walkthrough is only as good as the person conducting it. Here is how to make the most of remote home evaluation.

**What to ask your agent to show you**

The approach to the home from the street — not just the front door. Every adjacent property, fence line, and neighboring structure. The view from every window. Any visible deferred maintenance from exterior. Every room from multiple angles. The basement or crawlspace with commentary on what they see. The HVAC unit, water heater, and electrical panel. The garage floor for oil stains or moisture. The attic if accessible.

**Questions to ask during the walkthrough**

What does the street feel like at different times of day? What do the neighbors' properties look like? Is there anything about this home that would give you pause? What is the noise environment? How does this compare to other homes you have shown in this price range?

**What video walkthroughs cannot replace**

Your physical sense of space scale — rooms often look larger on video than in person. Smell, which matters enormously for evaluating moisture issues, pet odors, and general cleanliness. The feeling of a neighborhood at a specific time of day.

**Still do the inspection**

A video walkthrough, however thorough, does not substitute for a licensed home inspector. Always include an inspection contingency and attend the inspection — even if it means flying in for the day.`,
            callout: `A great video walkthrough shows you the things you would look for in person — not a highlight reel. Tell your agent to show you everything, including what concerns them.`,
            checklist: [
              "I have given my agent a list of specific things to show me during video walkthroughs",
              "I know to ask what concerns the agent about any home I am seriously considering",
              "I understand that I should still schedule a home inspection even for remote purchases",
            ],
          },
          {
            id: "lesson-3",
            title: "How to choose a gate and pick your neighborhood around it",
            content: `Fort Knox has multiple gates and access points. The right community depends entirely on which gate you use and where on post you work.

**Primary gates**

The Chaffee Gate on US-31W in Radcliff is the most commonly used access point and serves much of the installation. Radcliff addresses are 5-10 minutes from this gate. Elizabethtown addresses are 15-20 minutes.

The Wilson Gate provides access to the western portion of the installation from KY-1638. It serves Muldraugh and portions of Meade County best.

There are additional access points serving specific facilities on the northern and eastern portions of the installation.

**Why this matters**

Five minutes per leg is 10 minutes per day, 50 minutes per week, over 40 hours per year — a full work week's worth of commute time. At 15 minutes per leg vs. 5 minutes per leg, the difference over a 3-year assignment is more than 120 hours.

**How to determine the right community**

Ask your gaining unit or the rear detachment exactly where your duty location on post is and which gate you will most commonly use. Then have your agent map realistic commute times from Elizabethtown, Radcliff, and Vine Grove to that gate at commute hours.

Then overlay your other priorities — budget, school zone, lifestyle — on top of that commute reality.`,
            callout: `Confirm your gate before you choose a community. Commute time differences of 5-10 minutes per leg add up to dozens of hours annually over a 3-year assignment.`,
            checklist: [
              "I have confirmed with my gaining unit which gate I will most commonly use",
              "I have asked my agent to map commute times from each community to my specific gate",
              "I understand the annual time cost of commute time differences between communities",
            ],
          },
          {
            id: "lesson-4",
            title: "PCS closing timeline — what is realistic and how to hit it",
            content: `Military families with compressed PCS timelines can buy homes. Here is what a realistic timeline looks like and how to execute it.

**30-45 days: Standard financed closing**

Most VA loan closings in the Elizabethtown market take 30-45 days from offer acceptance to closing. With a report date that is 60+ days away, a full purchase is achievable if you start immediately when orders arrive.

**The critical path**

Day 1-7: Pre-approval application submitted. Day 7-14: Pre-approval letter received. Day 14-21: Home identified, offer made and accepted. Day 21-28: Inspection completed and any negotiations concluded. Day 21-35: VA appraisal ordered and completed. Day 28-42: Underwriting conditions cleared. Day 42-45: Closing.

**Where it goes wrong**

Pre-approval delayed because documentation was gathered late. Appraisal ordered late because offer was delayed. Underwriting conditions not responded to promptly — every lender request should be answered within 24 hours.

**The 30-day report date problem**

If your report date is 30 days away, a standard financed purchase may not close before you need housing. Options: negotiate a longer report date if possible, plan for temporary housing (hotel, short-term rental, or on-post lodging) while the purchase closes, or consider a cash purchase if you have the resources.

**Work with your timeline, not against it**

Contact a real estate agent and lender simultaneously the moment orders arrive. Every day of delay costs you options.`,
            callout: `A 30-45 day closing timeline is achievable when you start the process immediately upon receiving orders. Delay costs options.`,
            checklist: [
              "I understand the critical path from order receipt to closing",
              "I know every lender documentation request should be answered within 24 hours",
              "I have a plan for temporary housing if my report date is earlier than a standard closing allows",
            ],
          }
        ]}
      />
      <Footer />
    </>
  );
}
