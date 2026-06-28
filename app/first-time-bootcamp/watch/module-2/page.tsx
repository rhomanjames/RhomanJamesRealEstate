import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 02: First-Time Buyer Programs in Kentucky | Rhoman James",
  description: "Module 02: First-Time Buyer Programs in Kentucky — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/first-time-bootcamp/watch/module-2" },
  robots: { index: false, follow: true },
};

export default function Module2() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="02"
        moduleTitle="First-Time Buyer Programs in Kentucky"
        totalModules={6}
        prevModule={{ slug: "module-1", title: "Is Buying Right for You Right Now?" }}
        nextModule={{ slug: "module-3", title: "Finding Your First Home in Elizabethtown" }}
        lessons={[
          {
            id: "lesson-0",
            title: "The Kentucky Housing Corporation — who qualifies and how much you get",
            content: `This lesson covers: The Kentucky Housing Corporation — who qualifies and how much you get

**What you will learn**

the concept of the kentucky housing corporation — who qualifies and how much you get is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter the kentucky housing corporation — who qualifies and how much you get as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding the kentucky housing corporation — who qualifies and how much you get is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-1",
            title: "FHA loans explained for Kentucky first-time buyers",
            content: `This lesson covers: FHA loans explained for Kentucky first-time buyers

**What you will learn**

the concept of fha loans explained for kentucky first-time buyers is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter fha loans explained for kentucky first-time buyers as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding fha loans explained for kentucky first-time buyers is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-2",
            title: "USDA loans — zero down for qualifying Hardin County properties",
            content: `This lesson covers: USDA loans — zero down for qualifying Hardin County properties

**What you will learn**

the concept of usda loans — zero down for qualifying hardin county properties is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter usda loans — zero down for qualifying hardin county properties as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding usda loans — zero down for qualifying hardin county properties is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-3",
            title: "How to combine KHC assistance with other loan programs",
            content: `This lesson covers: How to combine KHC assistance with other loan programs

**What you will learn**

the concept of how to combine khc assistance with other loan programs is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

First-time buyers in Elizabethtown encounter how to combine khc assistance with other loan programs as a critical decision point. This lesson gives you the knowledge to navigate it with confidence.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding how to combine khc assistance with other loan programs is a critical step in your journey. Take notes and check off each item when you feel confident.`,
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
