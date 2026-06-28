import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 03: Finding Your First Home in Elizabethtown | Rhoman James",
  description: "Module 03: Finding Your First Home in Elizabethtown — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/first-time-bootcamp/watch/module-3" },
  robots: { index: false, follow: true },
};

export default function Module3() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="03"
        moduleTitle="Finding Your First Home in Elizabethtown"
        totalModules={6}
        prevModule={{ slug: "module-2", title: "First-Time Buyer Programs in Kentucky" }}
        nextModule={{ slug: "module-4", title: "Making Your First Offer" }}
        lessons={[
          {
            id: "lesson-0",
            title: "What first-time buyers get wrong about the home search",
            content: `This lesson covers: What first-time buyers get wrong about the home search

**What you will learn**

the concept of what first-time buyers get wrong about the home search is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter what first-time buyers get wrong about the home search as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding what first-time buyers get wrong about the home search is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          }
          {
            id: "lesson-1",
            title: "Elizabethtown neighborhoods that work for first-time buyer budgets",
            content: `This lesson covers: Elizabethtown neighborhoods that work for first-time buyer budgets

**What you will learn**

the concept of elizabethtown neighborhoods that work for first-time buyer budgets is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter elizabethtown neighborhoods that work for first-time buyer budgets as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding elizabethtown neighborhoods that work for first-time buyer budgets is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          }
          {
            id: "lesson-2",
            title: "Your first home does not have to be perfect — the starter home strategy",
            content: `This lesson covers: Your first home does not have to be perfect — the starter home strategy

**What you will learn**

the concept of your first home does not have to be perfect — the starter home strategy is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter your first home does not have to be perfect — the starter home strategy as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding your first home does not have to be perfect — the starter home strategy is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          }
          {
            id: "lesson-3",
            title: "Red flags every first-time buyer should know before they tour",
            content: `This lesson covers: Red flags every first-time buyer should know before they tour

**What you will learn**

the concept of red flags every first-time buyer should know before they tour is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter red flags every first-time buyer should know before they tour as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding red flags every first-time buyer should know before they tour is a critical step in your journey. Take notes and check off each item when you feel confident.`,
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
