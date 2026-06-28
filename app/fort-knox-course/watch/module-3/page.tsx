import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 03: BAH Strategy — Making Your Housing Allowance Work for You | Rhoman James",
  description: "Module 03: BAH Strategy — Making Your Housing Allowance Work for You — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/fort-knox-course/watch/module-3" },
  robots: { index: false, follow: true },
};

export default function Module3() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="03"
        moduleTitle="BAH Strategy — Making Your Housing Allowance Work for You"
        totalModules={6}
        prevModule={{ slug: "module-2", title: "Your VA Loan Benefit — Everything Military Buyers Need to Know" }}
        nextModule={{ slug: "module-4", title: "Buying on a PCS Timeline" }}
        lessons={[
          {
            id: "lesson-0",
            title: "How BAH rates are set for Fort Knox service members",
            content: `Basic Allowance for Housing (BAH) is one of the most important financial inputs in the Fort Knox homebuying equation.

**How BAH rates are determined**

The Department of Defense sets BAH rates annually based on local rental market surveys. Rates are set to cover median rental costs for the zip code of the duty station, by grade and dependency status. Fort Knox BAH rates are pegged to the Elizabethtown/Radcliff rental market.

**Why BAH matters for buying**

BAH is a tax-free housing allowance — you do not pay federal income tax on it. When you buy a home and your monthly mortgage payment equals your BAH, you are effectively paying zero out of pocket for housing while building equity simultaneously. This is the fundamental financial advantage of military homeownership.

**How to look up your current BAH**

Visit militarypay.defense.gov/BAH and enter your duty station zip code, grade, and dependency status. Rates are updated annually and should be verified at the time of your PCS, not based on prior information.

**BAH and rate changes**

BAH rates change annually. Your mortgage payment is fixed. If BAH increases (which it generally does over time), you will have additional housing allowance beyond your fixed mortgage payment. If BAH decreases (which is less common due to rate protection policies), you would pay the difference from your base pay.`,
            callout: `BAH is the military homebuyer's most important financial tool. When your mortgage payment equals your BAH, you build equity with zero net housing cost.`,
            checklist: [
              "I have looked up my current BAH at militarypay.defense.gov",
              "I understand that BAH is tax-free, increasing its effective value",
              "I know that my mortgage payment is fixed while BAH can change annually",
            ],
          },
          {
            id: "lesson-1",
            title: "How to structure a VA loan so your mortgage equals your BAH",
            content: `The goal: total monthly housing payment (principal + interest + taxes + insurance) at or below your BAH rate. This is achievable for most rank/family size combinations in the Elizabethtown market.

**The calculation**

Start with your BAH. Subtract estimated monthly property taxes (approximately 0.95% of home value divided by 12 in Hardin County). Subtract estimated homeowner's insurance ($100-$130/month typical). The remaining amount is your maximum principal and interest payment.

Work backward through a mortgage calculator to find the maximum home price that produces this payment at current rates.

**The Elizabethtown market reality**

Fort Knox BAH rates and Elizabethtown home prices have historically aligned well — meaning many service members can achieve full BAH coverage of housing costs with a VA loan purchase in the $220,000-$290,000 range depending on grade. This alignment is not coincidental — BAH is specifically designed to cover local market costs.

**When the math does not quite work**

In a higher rate environment, the monthly P&I on target home prices may slightly exceed BAH. The gap is often small — $50-$150/month — and many families accept this to begin building equity. The question is not perfection but whether the total picture makes financial sense compared to renting.`,
            callout: `Use the free VA Loan Calculator at rhomanjames.com/tools/va-loan-calculator to model your specific payment and compare it to your BAH rate.`,
            checklist: [
              "I have calculated my maximum P&I payment after deducting taxes and insurance from my BAH",
              "I have used the VA Loan Calculator at rhomanjames.com to model my specific payment",
              "I understand that a small gap between payment and BAH may still make sense financially",
            ],
          },
          {
            id: "lesson-2",
            title: "The wealth difference between renting and buying on BAH",
            content: `The numbers tell a compelling story. Here is a simplified 3-year comparison for a Fort Knox E-5 family.

**Renting scenario**

Monthly rent: $1,300. Annual rent: $15,600. 3-year total rent paid: $46,800. Equity accumulated: $0. The full BAH amount goes to the landlord.

**Buying scenario (VA loan, $260,000 home)**

Total monthly payment with taxes and insurance: approximately $1,550 at a typical rate. Monthly out-of-pocket if BAH is $1,450: approximately $100 gap. 3-year principal paid down: approximately $10,000-$12,000. 3-year appreciation at 3% annually: approximately $24,000 in additional value. Total equity after 3 years: $34,000-$36,000+.

**The net comparison**

Renter after 3 years: $46,800 paid, $0 accumulated.
Buyer after 3 years: $3,600 paid out of pocket (the monthly gap), $34,000+ accumulated.

**The portfolio effect**

At the next duty station, the Fort Knox property is kept as a rental generating $1,200-$1,400/month in income. The process repeats. After 20 years of service with 4-5 duty stations, this family owns a portfolio of cash-flowing properties they built with military compensation.`,
            callout: `The difference between renting and buying on BAH is not just monthly dollars — it is the difference between zero and a real estate portfolio built on military service.`,
            checklist: [
              "I have compared the 3-year financial outcome of renting vs. buying in my situation",
              "I understand the portfolio effect of buying at each duty station",
              "I have used my BAH and target home price to model whether the math works for me",
            ],
          },
          {
            id: "lesson-3",
            title: "What happens to your mortgage when BAH rates change",
            content: `BAH rates are adjusted annually. Your fixed-rate mortgage payment never changes. Understanding this relationship helps you plan.

**Annual BAH adjustments**

DoD sets new BAH rates each January. Rates typically track local rental market changes. Due to Congressional rate protection, your BAH rate cannot decrease below your current rate if you stay at the same duty station — though this protection does not follow you to a new duty station.

**When BAH increases**

Your mortgage payment stays the same. The additional BAH beyond your payment is yours to use as you choose — additional savings, debt paydown, or discretionary spending. Over a 3-year assignment where BAH increases each year, you may end the assignment with meaningfully more housing allowance than your fixed mortgage payment requires.

**When you PCS**

BAH is pegged to your new duty station. If your new station has lower BAH than Fort Knox, and you have kept the Fort Knox property as a rental, your rental income helps cover any gap.

**Rate environment changes**

Your fixed-rate mortgage is immune to interest rate changes after closing. If rates rise significantly, your locked rate becomes increasingly valuable — and your assumable VA loan becomes a significant selling advantage if you choose to sell.`,
            callout: `Your mortgage payment is fixed. BAH adjusts annually. The combination generally favors buyers over time as BAH typically increases while your payment stays constant.`,
            checklist: [
              "I understand that my fixed mortgage payment does not change with BAH adjustments",
              "I know BAH rate protection applies at current duty station but not across PCS moves",
              "I understand that a fixed-rate mortgage becomes more valuable as rates rise",
            ],
          }
        ]}
      />
      <Footer />
    </>
  );
}
