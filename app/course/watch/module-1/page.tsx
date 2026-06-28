import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Module 1: Are You Ready to Buy? | KY Home Buyers Course",
  description: "Determine if you are financially ready to buy a home in Kentucky. Credit scores, savings, debt ratios, and the rent vs. buy decision explained.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/course/watch/module-1" },
  robots: { index: false, follow: true },
};

export default function Module1() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="01"
        moduleTitle="Are You Ready to Buy?"
        totalModules={6}
        prevModule={null}
        nextModule={{ slug: "module-2", title: "Getting Your Financing Right" }}
        lessons={[
          {
            id: "lesson-0",
            title: "The Rent vs. Buy Decision — Running Your Real Numbers",
            content: `
Most people frame the rent vs. buy question wrong. They ask "is buying better than renting?" as if there is a universal answer. The real question is: **given your specific income, your specific timeline, and the specific market you are buying in — does buying make sense for you right now?**

In Elizabethtown, Kentucky, the math is more favorable to buying than in most American cities. Here is why.

**The core math**

When you rent, 100% of your monthly payment goes to your landlord. You build zero equity. When rents rise — and they do, consistently — your payment goes up and you have no control over it.

When you buy, your principal and interest payment is fixed for the life of your loan. Part of every payment reduces your loan balance. And in a market like Elizabethtown, where appreciation has been consistent, your home is likely worth more every year you own it.

**The break-even timeline**

Buying has upfront costs — closing costs, moving expenses, initial maintenance. These costs get offset over time by equity building and appreciation. The question is how long it takes to break even.

In the Elizabethtown market, most buyers who purchase at a reasonable price reach break-even in 2 to 3 years. After that, every year of ownership puts more money in your pocket than renting would have.

**When renting makes more sense**

Renting is the smarter choice when your timeline is short (less than 2 years), your financial situation is unstable, or you have not yet identified where you want to put roots. Buying a home when you are likely to sell within a year almost always results in a loss after closing costs are factored in.

**The Elizabethtown specific picture**

A 3-bedroom home in Elizabethtown rents for approximately $1,100 to $1,500 per month. That same home purchased with a VA loan or conventional financing typically produces a total monthly payment in a similar range — sometimes lower. The renter pays their landlord's mortgage. The buyer pays their own.

Use the free Rent vs. Buy Calculator at rhomanjames.com/tools/rent-vs-buy to model your specific situation with real Elizabethtown numbers.
            `,
            callout: "In Elizabethtown, a 3-bedroom home that rents for $1,300 per month often has a mortgage payment in the same range — meaning you can own for what you currently pay to rent.",
            checklist: [
              "I have a stable income and employment history of at least 2 years",
              "I plan to stay in the area for at least 2-3 years",
              "I am not carrying excessive debt that would prevent loan approval",
              "I understand that buying has upfront costs I need to be prepared for",
            ],
          },
          {
            id: "lesson-1",
            title: "How Much Money Do You Actually Need to Buy in Kentucky",
            content: `
One of the most common reasons people delay buying is a misconception about how much cash they need. The answer is almost always less than they think — especially in Kentucky, where first-time buyer programs and loan options can dramatically reduce the upfront cash requirement.

**Down payment options**

The required down payment depends entirely on your loan type:

**VA Loan (for eligible veterans and active military):** Zero down payment required. This is the most powerful buyer tool available and is widely used in the Elizabethtown market due to Fort Knox.

**USDA Loan (for rural and some suburban properties):** Zero down payment required. Some properties in Hardin County qualify. Eligibility is determined by address.

**FHA Loan:** 3.5% down payment with a credit score of 580 or higher. On a $250,000 home, that is $8,750.

**Conventional Loan:** As low as 3% down for first-time buyers through programs like Fannie Mae HomeReady. On a $250,000 home, that is $7,500.

**Kentucky Housing Corporation (KHC):** Provides up to $10,000 in down payment assistance for qualifying first-time buyers in Hardin County. This can cover your entire down payment on many properties.

**Closing costs**

Beyond the down payment, buyers in Kentucky typically pay 2% to 4% of the purchase price in closing costs. On a $250,000 home, that is $5,000 to $10,000.

However — closing costs can often be negotiated. Sellers can agree to cover some or all of your closing costs as part of the purchase offer. This is a common strategy in the Elizabethtown market and is worth discussing with your agent.

**The realistic minimum**

A first-time buyer using an FHA loan with KHC down payment assistance in the Elizabethtown market can sometimes close with as little as $5,000 to $8,000 out of pocket. A VA-eligible buyer can sometimes close with close to zero out of pocket when seller concessions cover closing costs.

**What you also need in reserve**

Lenders want to see that you have some savings beyond the down payment and closing costs — typically 2 to 3 months of mortgage payments in reserve. This does not need to be in a separate account; it just needs to exist somewhere in your financial picture.
            `,
            callout: "A first-time buyer in Elizabethtown using KHC down payment assistance can sometimes close on a home with as little as $5,000–$8,000 out of pocket. VA-eligible buyers can sometimes close with even less.",
            checklist: [
              "I have identified which loan type is most likely right for my situation",
              "I understand the difference between down payment and closing costs",
              "I have looked up the KHC eligibility requirements at kyhousing.org",
              "I know approximately how much cash I have available for a purchase",
            ],
          },
          {
            id: "lesson-2",
            title: "Understanding Your Credit Score Before You Apply",
            content: `
Your credit score is the single number that most determines which loan programs you qualify for and what interest rate you will pay. Understanding it before you apply for a mortgage gives you time to fix problems and get into the best possible position.

**What scores you need**

Different loan types have different minimum credit score requirements:

- **VA Loan:** No official VA minimum, but most lenders require 580–620
- **FHA Loan:** 580 minimum for 3.5% down; 500–579 for 10% down
- **Conventional Loan:** 620 minimum; 740+ for the best rates
- **USDA Loan:** Typically 640+ preferred
- **KHC Programs:** 620 minimum

**How to check your score for free**

You are entitled to a free credit report from each of the three major bureaus (Equifax, Experian, TransUnion) once per year through annualcreditreport.com. This is the only federally authorized free source — other "free" sites are often marketing tools.

Your credit score may differ slightly between bureaus. Mortgage lenders typically use the middle score of all three.

**What hurts your score most**

In order of impact:
1. Late payments — even one 30-day late payment can drop your score significantly
2. High credit utilization — using more than 30% of your available credit limit
3. Collections and charge-offs — unpaid debts sent to collectors
4. Too many recent applications for credit — each hard inquiry drops your score slightly
5. Short credit history — newer accounts have less positive impact

**What to do if your score needs work**

Pay every bill on time going forward — payment history is the largest factor (35% of your score). Pay down credit card balances to below 30% of their limits. Do not close old accounts — length of history matters. Do not apply for new credit cards or loans while preparing to buy. Dispute any errors on your report — inaccurate negative information is more common than most people realize.

Most people can improve a score by 20 to 50 points in 3 to 6 months of focused effort. If you need to work on your credit, a good lender can give you a specific roadmap — and most will do this for free before you formally apply.

**One important rule**

Once you are pre-approved for a mortgage, do not do anything that changes your credit profile before closing. No new credit cards, no new car loans, no large purchases on credit. Lenders run a final credit check right before closing — a score drop between pre-approval and closing can derail a transaction.
            `,
            callout: "Pull your free credit report at annualcreditreport.com before meeting with any lender. Know your score before they do — it puts you in a stronger position and eliminates surprises.",
            checklist: [
              "I have pulled my free credit report from annualcreditreport.com",
              "I know my credit score from all three bureaus",
              "I have reviewed my reports for errors and disputed anything inaccurate",
              "I am not applying for any new credit until after I close on a home",
            ],
          },
          {
            id: "lesson-3",
            title: "The Debt-to-Income Ratio — What Lenders Actually Look At",
            content: `
Your credit score tells lenders how reliably you pay your debts. Your debt-to-income ratio (DTI) tells them whether you can actually afford to take on a mortgage on top of what you already owe.

**What DTI is**

DTI is your total monthly debt payments divided by your gross (pre-tax) monthly income, expressed as a percentage.

If you earn $5,000 per month gross and your total monthly debt payments are $1,500, your DTI is 30%.

**The two DTI ratios lenders look at**

**Front-end ratio:** Your housing payment (mortgage principal, interest, taxes, and insurance) divided by gross monthly income. Most lenders want this below 28-31%.

**Back-end ratio:** All monthly debt payments including the proposed housing payment divided by gross income. This is the number most lenders focus on.

Maximum back-end DTI limits by loan type:
- Conventional: 43-45% (sometimes up to 50% with strong credit)
- FHA: Up to 50% in some cases
- VA: No official limit, but most lenders prefer below 41-45%
- USDA: 41% preferred

**How to calculate yours**

Add up all your monthly minimum debt payments: car payment, student loans, credit card minimum payments, personal loans, any child support or alimony. Do not include utilities, subscriptions, or groceries — these are not factored into DTI.

Divide that total by your gross monthly income. Then add your estimated mortgage payment to the debt total and divide again. That second number is your back-end DTI.

**What to do if your DTI is too high**

Pay off smaller debts entirely if possible — eliminating a $150/month car payment removes $150 from your monthly debt load and can shift your DTI meaningfully. Do not take on new debt. Consider whether your income can be supplemented by a co-borrower.

Some buyers find that their DTI is fine once they calculate it. Others discover they need 6 to 12 months of debt paydown before a lender will approve them. Knowing your number before you apply prevents wasted time and unnecessary credit pulls.

**The Kentucky specific consideration**

Elizabethtown's lower home prices mean lower mortgage payments relative to many markets — which naturally improves DTI calculations for buyers comparing Kentucky to higher-cost alternatives.
            `,
            callout: "Calculate your DTI before meeting with a lender. Add up all your monthly debt minimums, divide by your gross monthly income, and add your estimated mortgage payment. If the result is below 43%, you are likely in good shape for most loan types.",
            checklist: [
              "I have calculated my current monthly debt payments",
              "I know my gross monthly income",
              "I have estimated my front-end and back-end DTI ratios",
              "I understand which debts I could pay off to improve my DTI if needed",
            ],
          },
          {
            id: "lesson-4",
            title: "Your Home Buying Readiness Checklist",
            content: `
Before you take the next step — talking to a lender and starting your home search — use this checklist to confirm you are genuinely ready. Not all boxes need to be checked before you start conversations, but the more you can check, the smoother your path to homeownership will be.

**Financial readiness**

Review each item and be honest with yourself. A lender will verify all of this — there is no benefit to overstating your readiness.

Your income is stable. You have been employed by the same employer for at least 2 years, or self-employed with 2 years of tax returns showing consistent income. If you recently changed jobs, that can still be fine — particularly if you moved to a higher-paying role in the same field.

Your credit is in acceptable shape. You have pulled your reports, there are no major negative items that would prevent approval, and your score meets the minimum for your target loan type.

You have savings for the purchase. This includes your down payment funds (or VA/USDA entitlement), an estimate of your closing costs, and some reserve savings beyond the transaction.

Your debt load is manageable. Your back-end DTI including the estimated mortgage payment is below 43-50% depending on your loan type.

You are not planning major financial changes. No new car purchases, no job changes, no new credit applications until after closing.

**Life readiness**

You plan to stay in the area for at least 2-3 years. Buying and selling within a year almost always results in a financial loss after transaction costs.

You are emotionally prepared for the process. Home buying involves paperwork, waiting, inspections, negotiations, and occasionally disappointment. Going in with realistic expectations about the timeline and complexity prevents unnecessary stress.

You have thought about what you actually want. Size, neighborhood, school zone, commute requirements — having clarity on your priorities before you start looking prevents you from falling in love with the wrong home.

**If you are not ready yet**

That is fine. Knowing what you need to work on is more valuable than rushing into a purchase you are not prepared for. Most of the obstacles — credit score, savings, debt — are solvable with 6 to 12 months of focused effort.

The tools at rhomanjames.com — the mortgage calculator, affordability calculator, and down payment planner — can help you model your specific situation and understand what you need to get to the finish line.
            `,
            callout: "Readiness is not about perfection — it is about clarity. You do not need every item on this list checked before starting a conversation with a lender. You just need to know where you stand.",
            checklist: [
              "My income is stable with at least 2 years of employment history",
              "My credit score meets the minimum for my target loan type",
              "I have estimated savings for down payment and closing costs",
              "My DTI is within acceptable limits for my target loan type",
              "I plan to stay in the area for at least 2-3 years",
              "I have a general sense of what I want in a home",
            ],
          },
        ]}
      />
      <Footer />
    </>
  );
}
