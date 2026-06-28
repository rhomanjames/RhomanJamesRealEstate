import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 06: When You PCS Out — Your Exit Strategy | Rhoman James",
  description: "Module 06: When You PCS Out — Your Exit Strategy — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/fort-knox-course/watch/module-6" },
  robots: { index: false, follow: true },
};

export default function Module6() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="06"
        moduleTitle="When You PCS Out — Your Exit Strategy"
        totalModules={6}
        prevModule={{ slug: "module-5", title: "The Home Search Near Fort Knox" }}
        nextModule={null}
        lessons={[
          {
            id: "lesson-0",
            title: "Sell vs. rent when you PCS — the financial comparison",
            content: `This lesson covers: Sell vs. rent when you PCS — the financial comparison

**What you will learn**

Whether to sell or keep your Fort Knox home as a rental is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

This is one of the most important decisions military homeowners face at PCS time. The financial comparison often strongly favors renting — particularly in a market with Fort Knox's consistent demand.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding sell vs. rent when you pcs — the financial comparison is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          }
          {
            id: "lesson-1",
            title: "How to manage a Fort Knox rental from your next duty station",
            content: `This lesson covers: How to manage a Fort Knox rental from your next duty station

**What you will learn**

Long-distance property management for Fort Knox homes is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Managing a rental property from another duty station is entirely achievable with the right systems. This lesson covers property management options, tenant screening, and what to expect from remote landlording.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding how to manage a fort knox rental from your next duty station is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          }
          {
            id: "lesson-2",
            title: "The VA loan assumption strategy for Fort Knox sellers",
            content: `This lesson covers: The VA loan assumption strategy for Fort Knox sellers

**What you will learn**

How buyers can assume your VA loan at your existing rate is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

VA loans are assumable — a buyer can take over your loan at your existing interest rate. In a higher rate environment, this becomes a significant selling advantage that can attract motivated buyers and justify a premium price.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding the va loan assumption strategy for fort knox sellers is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          }
          {
            id: "lesson-3",
            title: "Building a real estate portfolio across multiple duty stations",
            content: `This lesson covers: Building a real estate portfolio across multiple duty stations

**What you will learn**

How military families build wealth through homeownership across assignments is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

The most financially successful military families use each duty station as an opportunity to add a property to their portfolio. This lesson maps out the strategy across a 20-year career.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding building a real estate portfolio across multiple duty stations is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          }
        ]}
      />
      <Footer />
    </>
  );
}
