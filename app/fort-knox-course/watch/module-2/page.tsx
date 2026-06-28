import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 02: Your VA Loan Benefit — Everything Military Buyers Need to Know | Rhoman James",
  description: "Module 02: Your VA Loan Benefit — Everything Military Buyers Need to Know — Kentucky real estate course by Rhoman James.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/fort-knox-course/watch/module-2" },
  robots: { index: false, follow: true },
};

export default function Module2() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="02"
        moduleTitle="Your VA Loan Benefit — Everything Military Buyers Need to Know"
        totalModules={6}
        prevModule={{ slug: "module-1", title: "Understanding Your PCS Housing Options" }}
        nextModule={{ slug: "module-3", title: "BAH Strategy — Making Your Housing Allowance Work for You" }}
        lessons={[
          {
            id: "lesson-0",
            title: "What the VA loan actually gives you — the complete breakdown",
            content: `The VA home loan benefit is one of the most powerful financial tools available to military families, and it is consistently underused because people do not fully understand it.

**Zero down payment**

No down payment required on the full purchase price. Not a contribution toward a portion — the full amount. On a $270,000 home, that is $270,000 financed with nothing out of pocket.

**No private mortgage insurance, ever**

A conventional borrower putting less than 20% down pays PMI until they reach 20% equity. On a $270,000 loan at 0.8% annually, that is $2,160 per year, $180 per month, for years. VA borrowers pay zero PMI.

**Competitive interest rates**

VA loans typically price 0.25-0.5% below conventional rates. On a 30-year $270,000 loan, a 0.25% rate difference saves approximately $12,000 in total interest over the life of the loan.

**Limited closing costs**

The VA restricts what lenders can charge VA borrowers. Some fees that conventional buyers pay are prohibited on VA loans.

**Assumable loan**

If rates rise, a buyer can assume your VA loan at your lower rate — a significant future selling advantage.

**No prepayment penalty**

Pay off your loan early without penalty.`,
            callout: `Zero down, no PMI, below-market rate, limited closing costs. The VA loan is not just a benefit — it is one of the best mortgage products that exists anywhere in American real estate.`,
            checklist: [
              "I understand all the financial advantages the VA loan provides",
              "I have calculated what no PMI saves me per month on my target price range",
              "I understand that the VA loan is assumable by future buyers",
            ],
          },
          {
            id: "lesson-1",
            title: "The VA funding fee — what you pay and when you are exempt",
            content: `The VA funding fee is a one-time charge that finances the VA loan program. It is frequently misunderstood and sometimes overlooked — to the significant detriment of buyers who miss their exemption.

**The funding fee rates**

First VA loan use, zero down: 2.3% of loan amount. First use, 5-9.99% down: 1.65%. First use, 10%+ down: 1.4%. Subsequent use, zero down: 3.6%.

On a $270,000 loan at first use with zero down: the funding fee is $6,210. This can be financed into the loan — no out-of-pocket payment required.

**The exemption**

Veterans with a service-connected disability rating of 10% or higher are completely exempt from the VA funding fee. This exemption must be verified and applied before closing — it does not happen automatically.

If you have a disability rating and are not sure whether you are exempt, check your VA award letter or contact the VA benefits line before your closing. Failing to claim the exemption is a common and costly mistake.

**Surviving spouses**

Surviving spouses of veterans who died in service or from a service-connected disability are also exempt from the funding fee.`,
            callout: `If you have a disability rating of 10% or higher, you are exempt from the VA funding fee. Verify this before closing — it can save you thousands of dollars.`,
            checklist: [
              "I know whether I have a disability rating that would exempt me from the funding fee",
              "I understand the funding fee can be financed into the loan",
              "I know to verify my exemption status before closing, not after",
            ],
          },
          {
            id: "lesson-2",
            title: "How to get your Certificate of Eligibility in Kentucky",
            content: `Your Certificate of Eligibility (COE) proves to lenders that you are entitled to VA loan benefits. Most buyers do not need to do anything special to obtain it.

**The easiest method**

Your lender can obtain your COE directly through the VA's online system — often in minutes during the application process. Simply give your lender permission to request it.

**Self-service options**

You can also request your COE through VA.gov using your credentials. Active duty service members need a Statement of Service signed by their commanding officer. Veterans need their DD-214.

**What the COE tells lenders**

Your COE shows your entitlement amount — how much of the VA guarantee you have available. If you have used a VA loan before and paid it off, your full entitlement is typically restored. If you still have an existing VA loan, you may have remaining entitlement to purchase an additional property.

**If your COE shows reduced entitlement**

A VA-experienced lender can explain what your remaining entitlement means for your purchase price and whether bonus entitlement applies. This is more complex than standard first-use situations but is manageable with the right lender.`,
            callout: `Let your VA-experienced lender obtain your COE — it takes minutes through the VA system. You rarely need to request it yourself.`,
            checklist: [
              "I know that my lender can obtain my COE directly from the VA",
              "I have my DD-214 (if separated) or access to my Statement of Service (if active duty)",
              "I understand what reduced entitlement means and that a good lender can help navigate it",
            ],
          },
          {
            id: "lesson-3",
            title: "VA loan vs. conventional near Fort Knox — running the real numbers",
            content: `The VA loan is almost always the better financial choice for eligible buyers near Fort Knox. Here is the specific comparison.

**Scenario: $270,000 home purchase**

VA loan, zero down, typical rate: total monthly payment including taxes and insurance approximately $1,650-$1,800 depending on rate environment. No PMI. Funding fee of $6,210 financed in (first use, zero down).

Conventional loan, 5% down ($13,500): total monthly payment approximately $1,700-$1,850 including PMI of approximately $150/month. Requires $13,500 plus closing costs out of pocket.

**The first-year difference**

VA: $0 out of pocket for down payment. Conventional 5% down: $13,500 plus closing costs. That $13,500 stays in your savings account with VA.

**The monthly savings**

VA: no PMI. Conventional: approximately $150/month in PMI until 20% equity is reached. Over the typical 7-year period to reach 20% equity at minimum payments: $12,600 in PMI paid.

**The rate difference**

VA typically 0.25-0.5% lower than conventional. On a $270,000 loan at 0.375% difference: approximately $9,000 less in total interest over 30 years.

**Total VA advantage (rough estimate)**

$13,500 in down payment preserved + $12,600 in PMI avoided + $9,000 in rate savings = approximately $35,000 in financial advantage over the first several years of ownership.`,
            callout: `The VA loan's advantages are not marginal — they are substantial. For most Fort Knox buyers, the VA loan is the clear financial choice.`,
            checklist: [
              "I have run the comparison between VA and conventional for my target purchase price",
              "I understand the combined advantage of no down payment, no PMI, and lower rate",
              "I know the VA funding fee is typically far less than the conventional down payment requirement",
            ],
          },
          {
            id: "lesson-4",
            title: "Using your VA loan benefit more than once across duty stations",
            content: `One of the least-understood features of the VA loan is that it can be used multiple times — and for multiple simultaneous properties under certain conditions.

**Full entitlement restoration**

When you sell a VA-financed property and pay off the VA loan, your full entitlement is restored. You can use the full benefit again at your next duty station.

**Using VA loan while keeping prior VA property**

If you have remaining entitlement, you can use a VA loan to purchase a new primary residence while keeping your prior VA-financed property as a rental. This requires sufficient remaining entitlement to cover the new purchase.

**The bonus entitlement**

For loans above the standard entitlement amount, the VA provides bonus entitlement that covers the gap — allowing purchase of homes at higher prices. A VA-experienced lender can calculate your available entitlement for any scenario.

**The multi-station portfolio strategy**

Military investors who use a VA loan at each duty station — purchasing with zero down, living in the home for the required period, then renting it when they PCS — can build significant real estate portfolios across multiple markets, all financed with no-down-payment VA loans. This is one of the most effective wealth-building strategies available to career military members.`,
            callout: `The VA loan is not a one-time benefit. Every eligible service member should understand how to use it strategically across a career — not just for the first home.`,
            checklist: [
              "I understand that my VA loan entitlement can be restored after payoff",
              "I know I can potentially use a VA loan while keeping a prior VA-financed property as rental",
              "I understand the general concept of a multi-station portfolio strategy",
            ],
          }
        ]}
      />
      <Footer />
    </>
  );
}
