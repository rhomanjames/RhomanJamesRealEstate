import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 02: Preparing Your Home for Market | Rhoman James",
  description: "Module 02: Preparing Your Home for Market — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/sellers-course/watch/module-2" },
  robots: { index: false, follow: true },
};

export default function Module2() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="02"
        moduleTitle="Preparing Your Home for Market"
        totalModules={6}
        prevModule={{ slug: "module-1", title: "Is Now the Right Time to Sell?" }}
        nextModule={{ slug: "module-3", title: "Pricing Your Home to Sell" }}
        lessons={[
          {
            id: "lesson-0",
            title: "The highest ROI repairs before listing in Elizabethtown",
            content: `Not every repair pays for itself before a home sale. The key is identifying which improvements generate returns greater than their cost.

**High ROI improvements**

Fresh interior paint is the single highest-return pre-listing investment. A professional interior paint job costs $2,000-$4,000 and can generate $5,000-$8,000 in additional perceived value. Use neutral warm whites and greiges.

Carpet cleaning or replacement. Dirty carpet kills buyer interest instantly. Professional cleaning costs $200-$400. Replacement runs $1,500-$3,000 and almost always recovers its cost.

Landscaping and curb appeal. Fresh mulch, trimmed shrubs, clean walkways, and a mowed lawn cost $200-$500 and significantly improve buyer emotional response before they enter.

Kitchen hardware and fixtures. Replacing dated cabinet pulls and light fixtures costs $300-$800 and modernizes the kitchen without a full renovation.

**Low ROI improvements to avoid**

Full kitchen remodel, swimming pools, and major bathroom renovations rarely recover their full cost in resale. Fix what is broken. Update what is dated at low cost.`,
            callout: `The most profitable pre-listing investment is almost always paint, carpet, and curb appeal — not renovation.`,
            checklist: [
              "I have identified which repairs are necessary vs. cosmetic",
              "I have estimated the cost of paint, carpet, and curb appeal",
              "I understand major renovations rarely recover full cost in resale",
            ],
          }
          {
            id: "lesson-1",
            title: "How to stage your home without hiring a professional",
            content: `Staging is the process of presenting your home to appeal to the widest possible range of buyers.

**The core principle**

Buyers buy feelings, not square footage. Remove at least 30% of your furniture from every room. Clear kitchen counters completely. Make the bed every morning. Closets will be opened — organize them. Bathrooms should be hotel-standard clean for every showing.

**What buyers notice most**

Smell is the sense that most powerfully affects buyer response. If you have pets, smoke, or strong cooking odors, you need an honest outside evaluation. Professional cleaning or ozone treatment may be necessary.

**The goal**

Help buyers imagine themselves in the space. Remove family photos, personal collections, and highly personal decor. Treat the listing period as temporary — a few weeks of inconvenience in exchange for potentially thousands of dollars more.`,
            callout: `Stage to sell, not to live comfortably. A few weeks of inconvenience in exchange for thousands of dollars in additional offers.`,
            checklist: [
              "I have removed at least 30% of furniture from primary rooms",
              "I have cleared kitchen counters completely",
              "I have addressed pet or smoke odors honestly",
            ],
          }
          {
            id: "lesson-2",
            title: "Decluttering and depersonalizing — what buyers need to see",
            content: `The most common feedback about homes that sit on the market is that they felt too personal or too cluttered.

**What to remove**

All family photographs. Personal collections and trophies. Religious and political items. Children's artwork. Excess furniture.

**Where to put it**

Rent a storage unit. The cost for 60 days is $100-$200 — far less than the cost of a price reduction caused by a home that does not show well. Pack as if you are already moving. The decluttering process forces the beginning of your move.

**What to keep**

A few well-chosen neutral decorative items that create warmth. Fresh flowers in the kitchen. Neutral throw pillows. A single piece of art above the fireplace.`,
            callout: `Rent a storage unit before you list. Move out everything you do not need for the next 60-90 days. The impact on how your home shows is significant.`,
            checklist: [
              "I have removed all family photographs from walls and surfaces",
              "I have arranged or will arrange a storage unit",
              "I have decluttered closets and cabinets buyers will open",
            ],
          }
          {
            id: "lesson-3",
            title: "Professional photography — why it matters and what to expect",
            content: `In 2025, buyers begin their home search online. Photographs in your listing are your home's first impression.

**The business case**

Homes listed with professional photography sell faster and for more money than comparable homes with smartphone photos. Professional photographers use wide-angle lenses, proper lighting, and post-processing that makes rooms appear brighter and larger. Investment is typically $150-$300.

**Before the photographer arrives**

The home should be in full showing condition — staged, decluttered, every light on, toilet lids down, cars out of the driveway. Do not plan to finish staging on photography day.

**Video and virtual tours**

For relocating buyers — including Fort Knox military families who cannot visit in person — a video walkthrough or 3D tour can be the deciding factor that generates a remote offer.`,
            callout: `Have your home fully staged and cleaned before the photographer arrives — not in progress. One good session produces images seen by every buyer who considers your home.`,
            checklist: [
              "I understand professional photography is a standard investment",
              "I will have my home in full condition before the photographer arrives",
              "I have discussed video tour options with my agent",
            ],
          }
          {
            id: "lesson-4",
            title: "What sellers must disclose in Kentucky",
            content: `Kentucky law requires sellers to disclose known material defects to buyers.

**The Kentucky Seller's Disclosure**

A standardized form asking about known defects in specific systems: roof, foundation, electrical, plumbing, HVAC, water intrusion, pest damage, and environmental hazards.

**The key legal standard**

You must disclose defects you know about. You are not required to discover and disclose unknown defects. But you cannot actively conceal known defects.

**Common items that trip up sellers**

Water intrusion history — even once, even years ago. Roof leaks — disclose even if repaired. Foundation repairs — include documentation. Prior insurance claims.

**The benefit of disclosure**

Proactive disclosure protects sellers. When buyers know about an issue upfront, they price it into their offer. Undisclosed known defects discovered after closing mean attorneys. Disclosure is legal protection.`,
            callout: `Disclose everything you know. The legal exposure from an undisclosed known defect far exceeds any benefit from concealing it.`,
            checklist: [
              "I have completed the Kentucky Seller's Disclosure honestly",
              "I have disclosed any history of water intrusion, roof leaks, or foundation issues",
              "I have documentation of prior repairs to major systems",
            ],
          }
        ]}
      />
      <Footer />
    </>
  );
}
