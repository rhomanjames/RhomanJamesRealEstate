import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Module 2: Getting Your Financing Right | KY Home Buyers Course",
  description: "Every Kentucky loan type explained — FHA, VA, USDA, Conventional, and KHC programs. How to get pre-approved and what lenders look for.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/course/watch/module-2" },
  robots: { index: false, follow: true },
};

export default function Module2() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="02"
        moduleTitle="Getting Your Financing Right"
        totalModules={6}
        prevModule={{ slug: "module-1", title: "Are You Ready to Buy?" }}
        nextModule={{ slug: "module-3", title: "Finding the Right Home" }}
        lessons={[
          {
            id: "lesson-0",
            title: "Every Kentucky Loan Type Explained",
            content: `
Choosing the right loan type is one of the most important decisions in the home buying process. The wrong loan costs you money every single month for 30 years. The right loan can mean the difference between zero down payment and $20,000 out of pocket.

Here are the primary loan types available to Kentucky buyers.

**Conventional Loan**

A conventional loan is not backed by any government agency — it is funded by private lenders and sold to investors on the secondary market. It is the most common loan type for buyers with good credit and stable income.

Minimum credit score: 620. Down payment: as low as 3% for first-time buyers through HomeReady or Home Possible programs; 5% for repeat buyers. Private mortgage insurance (PMI) is required when you put less than 20% down — it can be removed when you reach 20% equity. Conventional loans have no upfront mortgage insurance premium, which makes them cheaper than FHA for buyers with good credit.

**FHA Loan**

Backed by the Federal Housing Administration, FHA loans are designed for buyers with lower credit scores or smaller down payments. They are the most popular choice for first-time buyers who do not qualify for VA or USDA.

Minimum credit score: 580 for 3.5% down; 500 for 10% down. Down payment: 3.5%. FHA requires an upfront mortgage insurance premium of 1.75% of the loan amount (often financed into the loan) plus an annual MIP of 0.55% for most loans. Unlike conventional PMI, FHA MIP stays for the life of the loan unless you put 10% or more down.

**VA Loan**

The VA loan is the most powerful buyer tool available and is extremely common in the Elizabethtown market due to Fort Knox. It is available to eligible veterans, active-duty service members, and surviving spouses.

Down payment: zero. PMI: none, ever. Interest rates: typically 0.25-0.5% below conventional rates. The only cost unique to VA loans is the funding fee — a one-time charge of 1.4% to 3.6% of the loan amount depending on down payment and usage. Veterans with a service-connected disability rating of 10%+ are exempt from the funding fee entirely.

**USDA Loan**

Backed by the U.S. Department of Agriculture, USDA loans are for properties in designated rural and suburban areas. Some addresses in Hardin County qualify — eligibility is property-specific and determined by USDA maps.

Down payment: zero. PMI: replaced by an upfront guarantee fee (1% of loan) and annual fee (0.35% of loan). Credit score: 640+ preferred. Income limits apply.

**Kentucky Housing Corporation (KHC)**

KHC is not a loan type itself — it is a state program that provides down payment assistance and below-market interest rates layered on top of FHA, conventional, VA, or USDA loans.

The Regular Down Payment Assistance Program provides up to $10,000 as a low-interest second mortgage. Income limits for Hardin County are approximately $90,000 for most household sizes. Purchase price limit is approximately $481,000. Minimum credit score: 620. Must be a first-time buyer (defined as not having owned a primary residence in the past 3 years).
            `,
            callout: "VA loan, zero down payment, no PMI, and a rate lower than conventional. If you are eligible, this is almost always the right choice. Use the free VA Loan Calculator at rhomanjames.com/tools/va-loan-calculator to model your specific payment.",
            checklist: [
              "I have identified which loan type is most likely right for my situation",
              "I have checked my VA eligibility at va.gov if I am a veteran or active military",
              "I have checked KHC income and price limits at kyhousing.org",
              "I understand the difference between PMI, MIP, and the VA funding fee",
            ],
          },
          {
            id: "lesson-1",
            title: "The Kentucky Housing Corporation — Who Qualifies",
            content: `
The Kentucky Housing Corporation (KHC) is one of the most underused resources available to Kentucky home buyers. Many first-time buyers qualify for significant assistance and never know it exists.

**What KHC provides**

KHC offers two primary products: a mortgage at a below-market interest rate, and down payment assistance layered on top.

The Regular Down Payment Assistance Program provides up to $10,000 as a second mortgage at 3.75% interest rate, repaid over the same term as your first mortgage. It can be used for down payment, closing costs, or both.

The Homebuyer Tax Credit (MCC) allows qualifying buyers to claim a federal tax credit of up to 25% of their annual mortgage interest, reducing their tax bill every year they own the home. This credit can be worth thousands of dollars annually and is available in addition to the standard mortgage interest deduction.

**Who qualifies in Hardin County**

To qualify for KHC programs in Hardin County:

You must be a first-time buyer — defined as not having owned a primary residence in the past three years. Military veterans may be exempt from the first-time buyer requirement for some programs.

Your household income must be at or below the limit for your household size. For Hardin County, the limit is approximately $90,000 for most household sizes. This is a relatively generous limit that allows middle-income buyers to participate.

The purchase price must be at or below approximately $481,000 — this covers virtually all homes in the Hardin County market.

Your credit score must be at least 620.

You must complete an approved homebuyer education course before closing. The Kentucky Homebuyer Education course is available online at no cost.

**How to access KHC**

KHC assistance is not applied for directly — it flows through approved KHC lenders. When you contact a lender, ask specifically if they are a KHC-approved lender and whether you qualify for assistance. I can connect you with KHC-approved lenders in the Elizabethtown area who are experienced with these programs.

**The honest limitation**

KHC assistance adds complexity to the transaction. The second mortgage is an additional loan with its own paperwork and closing requirements. Some sellers are less enthusiastic about offers involving multiple financing instruments. In a competitive offer situation, a clean conventional or VA offer sometimes wins over a KHC offer even at the same price. Your agent needs to know how to present KHC offers effectively.
            `,
            callout: "A first-time buyer in Hardin County earning $85,000 per year and purchasing a $240,000 home could qualify for $10,000 in KHC down payment assistance — potentially covering their entire down payment and leaving closing costs as the only out-of-pocket expense.",
            checklist: [
              "I have verified my household income against KHC limits at kyhousing.org",
              "I have confirmed I qualify as a first-time buyer under KHC's definition",
              "I understand that KHC assistance requires an approved KHC lender",
              "I am prepared to complete the required homebuyer education course",
            ],
          },
          {
            id: "lesson-2",
            title: "How to Get Pre-Approved and What It Means",
            content: `
Pre-approval is not just a formality — it is the document that makes sellers take you seriously and the process that tells you exactly what you can afford. Getting pre-approved before you start looking at homes is not optional in a competitive market like Elizabethtown.

**Pre-qualification vs. pre-approval**

These terms are often used interchangeably but they are not the same thing.

Pre-qualification is a rough estimate based on information you self-report — your income, your debts, your credit score as you understand it. It takes 10 minutes and produces a number that is not verified. Sellers and listing agents know this and discount it accordingly.

Pre-approval involves a formal application with a lender who pulls your credit, reviews your income documentation, verifies your assets, and runs your application through their underwriting guidelines. The result is a formal pre-approval letter stating a specific loan amount and type that you qualify for. This is what you need before making offers.

**What you need to apply**

Gather these documents before you contact a lender. Having them ready speeds up the process dramatically.

Two years of W-2s or tax returns (self-employed borrowers need two years of complete returns). Thirty days of recent pay stubs. Two months of bank statements (all pages, all accounts). Government-issued photo ID. For VA loans: your Certificate of Eligibility (COE) or permission for the lender to pull it.

**How to choose a lender**

Not all lenders are equal. The differences that matter: how experienced they are with your loan type, how responsive they are during the process, and how reliably they meet their timeline commitments.

In the Elizabethtown market, I recommend working with lenders who regularly process VA loans if you are VA-eligible — local experience with VA transactions matters. I can connect you with lenders I have worked with who are responsive and reliable.

Get quotes from at least two lenders on the same day. Interest rates and closing costs vary between lenders, and the difference on a 30-year loan can be tens of thousands of dollars.

**What a pre-approval letter includes**

A proper pre-approval letter states the loan amount, the loan type, the interest rate environment it was based on, and the lender's contact information. It does not guarantee final loan approval — the specific property still needs to be appraised and meet the lender's requirements. But it is the strongest signal you can send a seller that you are a real, capable buyer.

**Rate locks**

Once you are under contract on a home, you will need to lock your interest rate. A rate lock is a commitment from the lender to hold a specific rate for a set period — typically 30 to 60 days. Rates can change daily. Once locked, your rate is protected from market increases during that window. Your lender will advise on the right time to lock based on current rate conditions.
            `,
            callout: "A pre-approval letter is your ticket to be taken seriously in the Elizabethtown market. Without it, the best homes go to buyers who have done their homework before you have.",
            checklist: [
              "I have gathered my income documentation, bank statements, and ID",
              "I have identified at least two lenders to contact for pre-approval",
              "I understand the difference between pre-qualification and pre-approval",
              "I know which loan type I am targeting based on my eligibility",
            ],
          },
          {
            id: "lesson-3",
            title: "VA Loans — The Complete Fort Knox Buyer Guide",
            content: `
If you are a veteran, active-duty service member, or surviving spouse, the VA home loan is almost certainly the best mortgage product available to you. In the Fort Knox market, where VA loans are common and lenders are experienced with them, the process is smoother than in most markets.

**What the VA loan actually gives you**

Zero down payment on the full purchase price — not a contribution, not a portion. Zero.

No private mortgage insurance, ever. A conventional borrower with less than 20% down pays PMI until they reach 20% equity — on a $280,000 loan at 0.8% annually, that is $2,240 per year, $187 per month, for years. VA borrowers pay none of this.

Competitive interest rates. VA loans typically price 0.25% to 0.5% below conventional rates because the government guarantee reduces lender risk. On a 30-year $280,000 loan, a 0.25% rate difference saves approximately $13,000 in total interest.

Limited closing costs. The VA restricts what lenders can charge VA borrowers — some fees that conventional buyers pay are prohibited on VA loans.

**The VA funding fee**

The funding fee is a one-time charge that finances the VA loan program. It ranges from 1.4% to 3.6% of the loan amount depending on down payment and whether it is your first VA loan use. It can be financed into the loan — no out-of-pocket payment required.

Veterans with a service-connected disability rating of 10% or higher are completely exempt from the funding fee. If you have a disability rating, verify this before closing — exemption saves you thousands of dollars.

**How to get your Certificate of Eligibility**

Your COE proves to lenders that you are entitled to VA benefits. You can request it through the VA at va.gov or, more commonly, let your lender request it directly through the VA's online system. Lenders who process VA loans regularly can usually obtain it in minutes.

**VA Minimum Property Requirements**

VA-financed properties must meet VA Minimum Property Requirements (MPRs) — basic standards ensuring the property is safe, structurally sound, and sanitary. An appraiser who is VA-approved will verify compliance during the appraisal process.

Common MPR issues: roof in poor condition, peeling paint on pre-1978 homes (lead paint concern), broken windows, non-functional mechanical systems, evidence of pest infestation. Most standard, well-maintained homes pass without issue.

**Using your VA loan benefit multiple times**

You can use your VA loan benefit more than once. If you sell your VA-financed home and pay off the loan, your full entitlement is restored. You can also buy a new home with a VA loan while keeping your previous VA loan property as a rental, if you have remaining entitlement.
            `,
            callout: "Every Fort Knox military family should at minimum model the VA loan option before choosing any other. Zero down, no PMI, and below-market rates — the combination is more powerful than most buyers realize until they run the numbers.",
            checklist: [
              "I have verified my VA eligibility or confirmed I am not eligible",
              "I have requested or plan to request my Certificate of Eligibility",
              "I know whether I have a disability rating that would exempt me from the funding fee",
              "I understand VA Minimum Property Requirements and what they mean for my home search",
            ],
          },
          {
            id: "lesson-4",
            title: "Rate Locks, Points, and Getting the Best Rate",
            content: `
Interest rates are one of the most misunderstood elements of the mortgage process. Most buyers either ignore them entirely or obsess over daily fluctuations in ways that do not affect their actual outcome. Here is what actually matters.

**How mortgage rates work**

Mortgage rates are set by lenders based on: the Federal Reserve's policy rate (indirectly), bond market conditions (specifically the 10-year Treasury yield), lender competition, and your specific risk profile (credit score, loan type, down payment, property type).

Rates change every business day. On volatile days they can change multiple times. Your rate at pre-approval is not your rate at closing unless you lock it.

**What affects your individual rate**

Credit score: the single biggest personal factor. A 760 score gets a meaningfully lower rate than a 680 score with the same income, property, and down payment. Improving your score before applying can save more than rate shopping.

Down payment: putting more down reduces your rate in some loan programs.

Loan type: VA rates are typically lowest, followed by conventional, then FHA.

Loan term: 15-year mortgages carry lower rates than 30-year mortgages but have higher monthly payments.

Property type: condos, multi-family, and investment properties carry higher rates than single-family primary residences.

**Discount points**

A discount point is 1% of your loan amount paid upfront in exchange for a lower interest rate — typically 0.125% to 0.25% lower per point. Whether paying points makes sense depends on how long you plan to stay in the home.

The break-even calculation: divide the upfront cost of points by the monthly savings from the lower rate. If the break-even is 60 months (5 years) and you plan to stay 10 years, buying points makes financial sense.

**Rate locks**

Once under contract, lock your rate as soon as you are confident the deal will close — typically within the first week. Standard lock periods are 30 or 45 days. If your closing takes longer than expected, you may need to extend the lock at additional cost.

**Shopping rates**

Get quotes from at least two or three lenders on the same day. The same borrower applying for the same loan can receive meaningfully different rates and closing cost estimates from different lenders. Comparing on the same day controls for daily market movement. Use the Loan Estimate each lender provides — it is a standardized document designed specifically for comparison.
            `,
            callout: "A single phone call to a second lender for a rate comparison can save a buyer thousands of dollars over the life of their loan. Most buyers do not make that call. Make the call.",
            checklist: [
              "I understand that my pre-approval rate is not final until I lock",
              "I plan to get quotes from at least two lenders before choosing one",
              "I understand what discount points are and when they make sense",
              "I know to use the Loan Estimate form for comparing lenders",
            ],
          },
          {
            id: "lesson-5",
            title: "What to Never Do Between Pre-Approval and Closing",
            content: `
Getting pre-approved is not the finish line — it is the starting gun. Between pre-approval and closing, your lender is going to pull your credit one more time, verify your employment, and confirm your financial situation has not materially changed. Anything that affects those three things can delay or kill your closing.

This lesson is a list of things that have actually caused closings to fall apart. Learn from other buyers' mistakes.

**Do not apply for new credit**

Every new credit application generates a hard inquiry that temporarily drops your score. More importantly, a new account changes your debt profile. A new car loan or credit card can push your debt-to-income ratio above the lender's threshold, triggering a denial even if you were comfortably approved before.

Do not open new credit cards. Do not finance furniture for your new home (this is one of the most common mistakes). Do not co-sign on anyone else's loan. Do not apply for anything credit-related until after you have keys in hand.

**Do not make large deposits or withdrawals**

Lenders review bank statements and ask about large transactions they cannot explain. A $5,000 deposit right before closing raises questions about where the money came from — lenders need to verify that deposits are from approved sources, not undisclosed loans.

If you are receiving gift funds from family, your lender will require a gift letter. Coordinate this early, not at the last minute.

**Do not change jobs**

Lenders verify employment immediately before closing. A job change — even to a higher-paying position — can disrupt the approval process, particularly if the new role is in a different field, involves a probationary period, or changes from salary to commission income.

If a job change is unavoidable, contact your lender immediately. Sometimes it can be managed — but they need to know before you sign any employment paperwork.

**Do not make large purchases on credit**

Financing appliances, furniture, or a car between pre-approval and closing increases your monthly debt payments and can push your DTI over the threshold. Pay cash for any purchases you need to make during this period, or wait until after closing.

**Do not miss any current payments**

A single missed payment during the closing period can drop your credit score significantly and cause your loan to be re-underwritten — potentially at a worse rate or not at all.

**Do communicate with your lender**

If anything changes — employment, income, assets, or personal situation — tell your lender immediately. Problems that are disclosed early can almost always be managed. Problems discovered at closing cannot.
            `,
            callout: "The time between pre-approval and closing is the most financially fragile period of a home purchase. Keep your financial life completely stable and predictable. Do nothing that changes your credit, income, employment, or asset picture until after you have keys.",
            checklist: [
              "I will not apply for any new credit until after closing",
              "I will avoid large deposits or withdrawals that cannot be explained",
              "I will not change jobs without consulting my lender first",
              "I will not finance any purchases between pre-approval and closing",
              "I will contact my lender immediately if anything in my financial situation changes",
            ],
          },
        ]}
      />
      <Footer />
    </>
  );
}
