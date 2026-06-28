import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 05: Inspections, Appraisals, and Closing | Rhoman James",
  description: "Module 05: Inspections, Appraisals, and Closing — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/first-time-bootcamp/watch/module-5" },
  robots: { index: false, follow: true },
};

export default function Module5() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="05"
        moduleTitle="Inspections, Appraisals, and Closing"
        totalModules={6}
        prevModule={{ slug: "module-4", title: "Making Your First Offer" }}
        nextModule={{ slug: "module-6", title: "Life as a New Kentucky Homeowner" }}
        lessons={[
          {
            id: "lesson-0",
            title: "Your home inspection — what to do and what to ask",
            content: `This lesson covers: Your home inspection — what to do and what to ask

**What you will learn**

the concept of your home inspection — what to do and what to ask is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter your home inspection — what to do and what to ask as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding your home inspection — what to do and what to ask is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-1",
            title: "The appraisal — what it is and what happens if it comes in low",
            content: `This lesson covers: The appraisal — what it is and what happens if it comes in low

**What you will learn**

the concept of the appraisal — what it is and what happens if it comes in low is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter the appraisal — what it is and what happens if it comes in low as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding the appraisal — what it is and what happens if it comes in low is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-2",
            title: "First-time buyer closing costs in Kentucky — what to budget",
            content: `This lesson covers: First-time buyer closing costs in Kentucky — what to budget

**What you will learn**

the concept of first-time buyer closing costs in kentucky — what to budget is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter first-time buyer closing costs in kentucky — what to budget as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding first-time buyer closing costs in kentucky — what to budget is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-3",
            title: "Closing day — what to bring and what to expect",
            content: `This lesson covers: Closing day — what to bring and what to expect

**What you will learn**

the concept of closing day — what to bring and what to expect is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter closing day — what to bring and what to expect as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding closing day — what to bring and what to expect is a critical step in your journey. Take notes and check off each item when you feel confident.`,
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
