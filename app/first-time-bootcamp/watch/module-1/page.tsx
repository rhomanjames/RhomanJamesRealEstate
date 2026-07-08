import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 01: Is Buying Right for You Right Now? | Rhoman James",
  description: "Module 01: Is Buying Right for You Right Now? — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/first-time-bootcamp/watch/module-1" },
  robots: { index: false, follow: true },
};

export default function Module1() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="01"
        moduleTitle="Is Buying Right for You Right Now?"
        totalModules={6}
        prevModule={null}
        nextModule={{ slug: "module-2", title: "First-Time Buyer Programs in Kentucky" }}
        lessons={[
          {
            id: "lesson-0",
            title: "The rent vs. buy decision — running your real numbers in Kentucky",
            content: `This lesson covers: The rent vs. buy decision — running your real numbers in Kentucky

**What you will learn**

the concept of the rent vs. buy decision — running your real numbers in kentucky is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter the rent vs. buy decision — running your real numbers in kentucky as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (859) 536-6009 — free consultation, no obligation.`,
            callout: `Understanding the rent vs. buy decision — running your real numbers in kentucky is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-1",
            title: "How much money do you actually need to buy in Elizabethtown",
            content: `This lesson covers: How much money do you actually need to buy in Elizabethtown

**What you will learn**

the concept of how much money do you actually need to buy in elizabethtown is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter how much money do you actually need to buy in elizabethtown as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (859) 536-6009 — free consultation, no obligation.`,
            callout: `Understanding how much money do you actually need to buy in elizabethtown is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-2",
            title: "Credit score basics — what you need and how to improve it fast",
            content: `This lesson covers: Credit score basics — what you need and how to improve it fast

**What you will learn**

the concept of credit score basics — what you need and how to improve it fast is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter credit score basics — what you need and how to improve it fast as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (859) 536-6009 — free consultation, no obligation.`,
            callout: `Understanding credit score basics — what you need and how to improve it fast is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-3",
            title: "Your first-time buyer readiness checklist",
            content: `This lesson covers: Your first-time buyer readiness checklist

**What you will learn**

the concept of your first-time buyer readiness checklist is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter your first-time buyer readiness checklist as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (859) 536-6009 — free consultation, no obligation.`,
            callout: `Understanding your first-time buyer readiness checklist is a critical step in your journey. Take notes and check off each item when you feel confident.`,
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
