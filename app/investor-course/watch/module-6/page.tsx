import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 06: Building a Portfolio Across Duty Stations | Rhoman James",
  description: "Module 06: Building a Portfolio Across Duty Stations — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/investor-course/watch/module-6" },
  robots: { index: false, follow: true },
};

export default function Module6() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="06"
        moduleTitle="Building a Portfolio Across Duty Stations"
        totalModules={6}
        prevModule={{ slug: "module-5", title: "Property Management and Operations" }}
        nextModule={null}
        lessons={[
          {
            id: "lesson-0",
            title: "How military investors use VA loans at each duty station to build portfolios",
            content: `This lesson covers: How military investors use VA loans at each duty station to build portfolios

**What you will learn**

the investment concept of how military investors use va loans at each duty station to build portfolios is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand how military investors use va loans at each duty station to build portfolios to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding how military investors use va loans at each duty station to build portfolios is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-1",
            title: "The 1031 exchange — how to defer taxes when you sell in Kentucky",
            content: `This lesson covers: The 1031 exchange — how to defer taxes when you sell in Kentucky

**What you will learn**

the investment concept of the 1031 exchange — how to defer taxes when you sell in kentucky is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand the 1031 exchange — how to defer taxes when you sell in kentucky to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding the 1031 exchange — how to defer taxes when you sell in kentucky is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-2",
            title: "When to sell vs. hold your Elizabethtown investment property",
            content: `This lesson covers: When to sell vs. hold your Elizabethtown investment property

**What you will learn**

the investment concept of when to sell vs. hold your elizabethtown investment property is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand when to sell vs. hold your elizabethtown investment property to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding when to sell vs. hold your elizabethtown investment property is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-3",
            title: "Your 10-year real estate portfolio roadmap starting in Hardin County",
            content: `This lesson covers: Your 10-year real estate portfolio roadmap starting in Hardin County

**What you will learn**

the investment concept of your 10-year real estate portfolio roadmap starting in hardin county is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand your 10-year real estate portfolio roadmap starting in hardin county to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding your 10-year real estate portfolio roadmap starting in hardin county is a critical step in your journey. Take notes and check off each item when you feel confident.`,
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
