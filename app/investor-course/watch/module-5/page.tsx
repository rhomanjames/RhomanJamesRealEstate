import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 05: Property Management and Operations | Rhoman James",
  description: "Module 05: Property Management and Operations — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/investor-course/watch/module-5" },
  robots: { index: false, follow: true },
};

export default function Module5() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="05"
        moduleTitle="Property Management and Operations"
        totalModules={6}
        prevModule={{ slug: "module-4", title: "The Fort Knox Rental Market" }}
        nextModule={{ slug: "module-6", title: "Building a Portfolio Across Duty Stations" }}
        lessons={[
          {
            id: "lesson-0",
            title: "Self-managing vs. hiring a property manager near Fort Knox",
            content: `This lesson covers: Self-managing vs. hiring a property manager near Fort Knox

**What you will learn**

the investment concept of self-managing vs. hiring a property manager near fort knox is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand self-managing vs. hiring a property manager near fort knox to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding self-managing vs. hiring a property manager near fort knox is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-1",
            title: "Tenant screening for Elizabethtown rental properties",
            content: `This lesson covers: Tenant screening for Elizabethtown rental properties

**What you will learn**

the investment concept of tenant screening for elizabethtown rental properties is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand tenant screening for elizabethtown rental properties to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding tenant screening for elizabethtown rental properties is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-2",
            title: "Maintenance budgeting — what to expect in year one",
            content: `This lesson covers: Maintenance budgeting — what to expect in year one

**What you will learn**

the investment concept of maintenance budgeting — what to expect in year one is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand maintenance budgeting — what to expect in year one to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding maintenance budgeting — what to expect in year one is a critical step in your journey. Take notes and check off each item when you feel confident.`,
            checklist: [
              "I understand the key concepts covered in this lesson",
              "I have noted any questions I want to discuss with my agent or lender",
              "I am ready to move to the next lesson",
            ],
          },
          {
            id: "lesson-3",
            title: "Kentucky landlord-tenant law — what every investor must know",
            content: `This lesson covers: Kentucky landlord-tenant law — what every investor must know

**What you will learn**

the investment concept of kentucky landlord-tenant law — what every investor must know is one of the most important topics for this course. This lesson walks you through everything you need to know in plain English — no jargon, no assumptions about prior knowledge.

**The context**

Real estate investors analyzing the Elizabethtown and Hardin County market need to understand kentucky landlord-tenant law — what every investor must know to make informed decisions. Use the free Investment ROI Calculator at rhomanjames.com/tools/investment-roi alongside this lesson.

**Your next step**

After completing this lesson, check off the items in the checklist below and move to the next lesson. Questions? Call or text Rhoman James at (502) 264-9376 — free consultation, no obligation.`,
            callout: `Understanding kentucky landlord-tenant law — what every investor must know is a critical step in your journey. Take notes and check off each item when you feel confident.`,
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
