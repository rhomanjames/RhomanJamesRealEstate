import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 02: Analyzing a Deal in Hardin County | Rhoman James",
  description: "Module 02: Analyzing a Deal in Hardin County — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/investor-course/watch/module-2" },
  robots: { index: false, follow: true },
};

export default function Module2() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="02"
        moduleTitle="Analyzing a Deal in Hardin County"
        totalModules={6}
        prevModule={{ slug: "module-1", title: "Is Elizabethtown Right for Real Estate Investing?" }}
        nextModule={{ slug: "module-3", title: "Financing Your Investment Property" }}
        lessons={[
          {
            id: "lesson-0",
            title: "How to calculate cash flow on an Elizabethtown rental property",
            content: `This lesson covers: How to calculate cash flow on an Elizabethtown rental property

**What you will learn**

the investment concept of how to calculate cash flow on an elizabethtown rental property is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand how to calculate cash flow on an elizabethtown rental property to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding how to calculate cash flow on an elizabethtown rental property is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-1",
            title: "Cap rate explained — what is good in the Hardin County market",
            content: `This lesson covers: Cap rate explained — what is good in the Hardin County market

**What you will learn**

the investment concept of cap rate explained — what is good in the hardin county market is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand cap rate explained — what is good in the hardin county market to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding cap rate explained — what is good in the hardin county market is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-2",
            title: "Cash-on-cash return — the investor's real performance metric",
            content: `This lesson covers: Cash-on-cash return — the investor's real performance metric

**What you will learn**

the investment concept of cash-on-cash return — the investor's real performance metric is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand cash-on-cash return — the investor's real performance metric to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding cash-on-cash return — the investor's real performance metric is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-3",
            title: "The 1% rule — does it work in Elizabethtown right now",
            content: `This lesson covers: The 1% rule — does it work in Elizabethtown right now

**What you will learn**

the investment concept of the 1% rule — does it work in elizabethtown right now is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand the 1% rule — does it work in elizabethtown right now to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding the 1% rule — does it work in elizabethtown right now is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-4",
            title: "How to estimate rental income for any Hardin County property",
            content: `This lesson covers: How to estimate rental income for any Hardin County property

**What you will learn**

the investment concept of how to estimate rental income for any hardin county property is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand how to estimate rental income for any hardin county property to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding how to estimate rental income for any hardin county property is a critical step in your journey. Take notes and check off each item when you feel confident.`,
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
