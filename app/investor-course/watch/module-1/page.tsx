import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 01: Is Elizabethtown Right for Real Estate Investing? | Rhoman James",
  description: "Module 01: Is Elizabethtown Right for Real Estate Investing? — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/investor-course/watch/module-1" },
  robots: { index: false, follow: true },
};

export default function Module1() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="01"
        moduleTitle="Is Elizabethtown Right for Real Estate Investing?"
        totalModules={6}
        prevModule={null}
        nextModule={{ slug: "module-2", title: "Analyzing a Deal in Hardin County" }}
        lessons={[
          {
            id: "lesson-0",
            title: "Why Fort Knox creates unusually stable rental demand in Elizabethtown",
            content: `This lesson covers: Why Fort Knox creates unusually stable rental demand in Elizabethtown

**What you will learn**

the investment concept of why fort knox creates unusually stable rental demand in elizabethtown is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand why fort knox creates unusually stable rental demand in elizabethtown to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding why fort knox creates unusually stable rental demand in elizabethtown is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-1",
            title: "The investor case for Hardin County — price points and cash flow potential",
            content: `This lesson covers: The investor case for Hardin County — price points and cash flow potential

**What you will learn**

the investment concept of the investor case for hardin county — price points and cash flow potential is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand the investor case for hardin county — price points and cash flow potential to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding the investor case for hardin county — price points and cash flow potential is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-2",
            title: "Single family vs. multi-family investing near Fort Knox",
            content: `This lesson covers: Single family vs. multi-family investing near Fort Knox

**What you will learn**

the investment concept of single family vs. multi-family investing near fort knox is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand single family vs. multi-family investing near fort knox to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding single family vs. multi-family investing near fort knox is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-3",
            title: "What cap rates actually look like in the Elizabethtown rental market",
            content: `This lesson covers: What cap rates actually look like in the Elizabethtown rental market

**What you will learn**

the investment concept of what cap rates actually look like in the elizabethtown rental market is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand what cap rates actually look like in the elizabethtown rental market to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding what cap rates actually look like in the elizabethtown rental market is a critical step in your journey. Take notes and check off each item when you feel confident.`,
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
