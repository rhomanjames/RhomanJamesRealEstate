import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 04: Making Your First Offer | Rhoman James",
  description: "Module 04: Making Your First Offer — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/first-time-bootcamp/watch/module-4" },
  robots: { index: false, follow: true },
};

export default function Module4() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="04"
        moduleTitle="Making Your First Offer"
        totalModules={6}
        prevModule={{ slug: "module-3", title: "Finding Your First Home in Elizabethtown" }}
        nextModule={{ slug: "module-5", title: "Inspections, Appraisals, and Closing" }}
        lessons={[
          {
            id: "lesson-0",
            title: "How to make an offer as a first-time buyer in a competitive market",
            content: `This lesson covers: How to make an offer as a first-time buyer in a competitive market

**What you will learn**

the concept of how to make an offer as a first-time buyer in a competitive market is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter how to make an offer as a first-time buyer in a competitive market as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding how to make an offer as a first-time buyer in a competitive market is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-1",
            title: "The contingencies that protect first-time buyers in Kentucky",
            content: `This lesson covers: The contingencies that protect first-time buyers in Kentucky

**What you will learn**

the concept of the contingencies that protect first-time buyers in kentucky is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter the contingencies that protect first-time buyers in kentucky as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding the contingencies that protect first-time buyers in kentucky is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-2",
            title: "Earnest money — how much and what happens to it",
            content: `This lesson covers: Earnest money — how much and what happens to it

**What you will learn**

the concept of earnest money — how much and what happens to it is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter earnest money — how much and what happens to it as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding earnest money — how much and what happens to it is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-3",
            title: "What happens after your offer is accepted",
            content: `This lesson covers: What happens after your offer is accepted

**What you will learn**

the concept of what happens after your offer is accepted is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter what happens after your offer is accepted as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding what happens after your offer is accepted is a critical step in your journey. Take notes and check off each item when you feel confident.`,
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
