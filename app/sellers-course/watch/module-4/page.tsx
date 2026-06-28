import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 04: Listing, Marketing, and Showings | Rhoman James",
  description: "Module 04: Listing, Marketing, and Showings — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/sellers-course/watch/module-4" },
  robots: { index: false, follow: true },
};

export default function Module4() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="04"
        moduleTitle="Listing, Marketing, and Showings"
        totalModules={6}
        prevModule={{ slug: "module-3", title: "Pricing Your Home to Sell" }}
        nextModule={{ slug: "module-5", title: "Reviewing Offers and Negotiating" }}
        lessons={[
          {
            id: "lesson-0",
            title: "What your listing exposure should look like in 2025",
            content: `A listing is only as good as its exposure.

**The MLS is the foundation**

The MLS syndicates to Zillow, Realtor.com, Homes.com, and hundreds of other sites. Your listing should appear within 24 hours of going active. Verify this by searching for your own listing on Zillow.

**What good online presentation looks like**

Professional photographs. An accurate, compelling property description. All searchable fields completed — garage, basement, acreage. Missing fields mean buyers searching those features never see your listing.

**Coming soon strategy**

Some sellers benefit from marketing the home to agents before it hits the MLS. This builds anticipation and can generate showing requests for day one of active listing.`,
            callout: `Your listing should be on the MLS within 24 hours of going active, with professional photos and all searchable fields correctly completed.`,
            checklist: [
              "I will verify my listing appears on Zillow within 24-48 hours of going active",
              "I know to verify all searchable fields are correctly completed",
            ],
          },
          {
            id: "lesson-1",
            title: "How to prepare for and manage showings",
            content: `Showings are your opportunity to let buyers experience your home.

**Showing readiness**

A showing request can come with one hour of notice. Your home should be in constant showing readiness — beds made, counters clear, bathrooms clean, lights on, pets secured, pleasant smell.

**Accept every showing**

Every declined showing is a buyer who will not be making an offer. The inconvenience of leaving for 90 minutes is far less costly than a lost offer.

**During showings: leave**

Buyers cannot have an honest conversation when the seller is present. They leave faster. Your presence is a liability.

**After showings**

Your agent should request feedback. Take it seriously — it is real-time market research.`,
            callout: `Accept every showing. Leave every time. Maintain showing readiness every day. These three habits are directly correlated with faster sales and stronger offers.`,
            checklist: [
              "I have committed to maintaining showing readiness throughout the listing",
              "I understand I should leave the home for every showing",
              "I have a plan for my pets during showings",
            ],
          },
          {
            id: "lesson-2",
            title: "Open houses — when they help and when they do not",
            content: `Open houses are a topic on which real estate professionals genuinely disagree.

**What open houses are good for**

Generating traffic from early-research buyers. Creating urgency in a first-weekend multiple-offer situation when the home is priced correctly.

**What open houses are not good for**

Reaching serious pre-approved buyers who request private showings. They attract unqualified visitors and curious neighbors more reliably than motivated buyers.

**The security concern**

Open houses invite strangers without screening. Secure or remove valuables, medications, financial documents, and personal items of significance.

**The honest assessment**

Open houses are primarily a marketing tool for agents. Calibrate your expectations accordingly.`,
            callout: `Open houses can generate useful exposure but should not be your primary strategy. Private showings from motivated, pre-approved buyers are more likely to produce offers.`,
            checklist: [
              "I understand the difference between open house visitors and private showing buyers",
              "I know to secure valuables before any open house",
              "I have realistic expectations about what open houses produce",
            ],
          },
          {
            id: "lesson-3",
            title: "How buyers are finding homes in Elizabethtown right now",
            content: `Most searches begin online — on Zillow, Realtor.com, or agent-provided MLS platforms. Buyers set up alerts that notify them when new listings match their criteria. For a correctly priced, well-photographed home, these alerts generate showing requests within hours.

**Fort Knox channels**

Military families PCS-ing to Fort Knox conduct extensive research before arriving — often from overseas. Listings that appear in Fort Knox spouse Facebook groups and ACS Relocation resources reach a buyer pool civilian marketing does not reliably reach.

**Social media**

Facebook listing shares and Instagram videos generate meaningful reach for unique or distinctive properties. Discuss with your agent whether social amplification makes sense for your listing.`,
            callout: `Your home's most important exposure happens in the first 48 hours through MLS alerts reaching pre-qualified buyers who have been waiting.`,
            checklist: [
              "I understand buyers set up automated alerts and respond quickly to new listings",
              "I know the first 48 hours of listing are most important",
              "I have asked my agent about Fort Knox and military community marketing",
            ],
          },
          {
            id: "lesson-4",
            title: "What to do when your home is not getting showings",
            content: `A listing not generating showings is telling you something specific.

**The two reasons**

Price: if buyers searching your price range are choosing other homes, or if your price filters you out of searches, showings will be scarce. Presentation: if listing photos do not attract clicks, buyers never request a showing.

**How to diagnose**

Ask your agent for online view counts. High views with low showings suggests a presentation problem. Low views suggests a price problem — your listing is not appearing in searches.

**Response**

For a price problem: reduce meaningfully, ideally below a search threshold. For a presentation problem: new photos or refreshed staging can generate new interest.

**Time cost**

Every week without offers costs carrying costs — mortgage, taxes, insurance, utilities. Early correction is almost always less costly than extended carrying costs.`,
            callout: `If you have fewer than 3 showings in the first two weeks, something needs to change. The earlier you diagnose and respond, the less it costs.`,
            checklist: [
              "I know to ask my agent for online view counts if showings are slow",
              "I understand the difference between a price problem and a presentation problem",
              "I have committed to a response timeline if showings do not materialize",
            ],
          }
        ]}
      />
      <Footer />
    </>
  );
}
