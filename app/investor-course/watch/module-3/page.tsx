import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 03: Financing Your Investment Property | Rhoman James",
  description: "Module 03: Financing Your Investment Property — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/investor-course/watch/module-3" },
  robots: { index: false, follow: true },
};

export default function Module3() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="03"
        moduleTitle="Financing Your Investment Property"
        totalModules={6}
        prevModule={{ slug: "module-2", title: "Analyzing a Deal in Hardin County" }}
        nextModule={{ slug: "module-4", title: "The Fort Knox Rental Market" }}
        lessons={[
          {
            id: "lesson-0",
            title: "Conventional investment property loans — what you need to qualify",
            content: `This lesson covers: Conventional investment property loans — what you need to qualify

**What you will learn**

the investment concept of conventional investment property loans — what you need to qualify is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand conventional investment property loans — what you need to qualify to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding conventional investment property loans — what you need to qualify is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-1",
            title: "How to use a VA loan to buy a multi-unit property near Fort Knox",
            content: `This lesson covers: How to use a VA loan to buy a multi-unit property near Fort Knox

**What you will learn**

the investment concept of how to use a va loan to buy a multi-unit property near fort knox is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand how to use a va loan to buy a multi-unit property near fort knox to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding how to use a va loan to buy a multi-unit property near fort knox is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-2",
            title: "DSCR loans — financing based on rental income, not your income",
            content: `This lesson covers: DSCR loans — financing based on rental income, not your income

**What you will learn**

the investment concept of dscr loans — financing based on rental income, not your income is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand dscr loans — financing based on rental income, not your income to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding dscr loans — financing based on rental income, not your income is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-3",
            title: "Cash buying vs. leveraged buying — the return comparison",
            content: `This lesson covers: Cash buying vs. leveraged buying — the return comparison

**What you will learn**

the investment concept of cash buying vs. leveraged buying — the return comparison is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand cash buying vs. leveraged buying — the return comparison to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding cash buying vs. leveraged buying — the return comparison is a critical step in your journey. Take notes and check off each item when you feel confident.`,
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
