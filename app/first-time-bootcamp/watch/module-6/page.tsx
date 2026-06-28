import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 06: Life as a New Kentucky Homeowner | Rhoman James",
  description: "Module 06: Life as a New Kentucky Homeowner — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/first-time-bootcamp/watch/module-6" },
  robots: { index: false, follow: true },
};

export default function Module6() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="06"
        moduleTitle="Life as a New Kentucky Homeowner"
        totalModules={6}
        prevModule={{ slug: "module-5", title: "Inspections, Appraisals, and Closing" }}
        nextModule={null}
        lessons={[
          {
            id: "lesson-0",
            title: "Setting up utilities in Elizabethtown — the complete list",
            content: `This lesson covers: Setting up utilities in Elizabethtown — the complete list

**What you will learn**

the concept of setting up utilities in elizabethtown — the complete list is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter setting up utilities in elizabethtown — the complete list as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding setting up utilities in elizabethtown — the complete list is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-1",
            title: "How to budget for home maintenance in your first year",
            content: `This lesson covers: How to budget for home maintenance in your first year

**What you will learn**

the concept of how to budget for home maintenance in your first year is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter how to budget for home maintenance in your first year as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding how to budget for home maintenance in your first year is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-2",
            title: "How to build equity faster in your first Kentucky home",
            content: `This lesson covers: How to build equity faster in your first Kentucky home

**What you will learn**

the concept of how to build equity faster in your first kentucky home is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter how to build equity faster in your first kentucky home as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding how to build equity faster in your first kentucky home is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-3",
            title: "When to refinance, when to sell, and when to stay put",
            content: `This lesson covers: When to refinance, when to sell, and when to stay put

**What you will learn**

the concept of when to refinance, when to sell, and when to stay put is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter when to refinance, when to sell, and when to stay put as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding when to refinance, when to sell, and when to stay put is a critical step in your journey. Take notes and check off each item when you feel confident.`,
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
