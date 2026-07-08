import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 04: The Fort Knox Rental Market | Rhoman James",
  description: "Module 04: The Fort Knox Rental Market — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/investor-course/watch/module-4" },
  robots: { index: false, follow: true },
};

export default function Module4() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="04"
        moduleTitle="The Fort Knox Rental Market"
        totalModules={6}
        prevModule={{ slug: "module-3", title: "Financing Your Investment Property" }}
        nextModule={{ slug: "module-5", title: "Property Management and Operations" }}
        lessons={[
          {
            id: "lesson-0",
            title: "Why military tenants are among the most reliable renters available",
            content: `This lesson covers: Why military tenants are among the most reliable renters available

**What you will learn**

the investment concept of why military tenants are among the most reliable renters available is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand why military tenants are among the most reliable renters available to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (859) 536-6009 — free consultation, no obligation.`,
            callout: `Understanding why military tenants are among the most reliable renters available is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-1",
            title: "The PCS clause — what it is and why you should include it",
            content: `This lesson covers: The PCS clause — what it is and why you should include it

**What you will learn**

the investment concept of the pcs clause — what it is and why you should include it is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand the pcs clause — what it is and why you should include it to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (859) 536-6009 — free consultation, no obligation.`,
            callout: `Understanding the pcs clause — what it is and why you should include it is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-2",
            title: "How Fort Knox rotation affects your vacancy rate",
            content: `This lesson covers: How Fort Knox rotation affects your vacancy rate

**What you will learn**

the investment concept of how fort knox rotation affects your vacancy rate is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand how fort knox rotation affects your vacancy rate to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (859) 536-6009 — free consultation, no obligation.`,
            callout: `Understanding how fort knox rotation affects your vacancy rate is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-3",
            title: "Setting rent in the Elizabethtown and Radcliff markets",
            content: `This lesson covers: Setting rent in the Elizabethtown and Radcliff markets

**What you will learn**

the investment concept of setting rent in the elizabethtown and radcliff markets is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand setting rent in the elizabethtown and radcliff markets to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (859) 536-6009 — free consultation, no obligation.`,
            callout: `Understanding setting rent in the elizabethtown and radcliff markets is a critical step in your journey. Take notes and check off each item when you feel confident.`,
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
