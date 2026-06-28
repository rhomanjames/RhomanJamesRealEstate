import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseLayout from "@/components/CourseLayout";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Module 06: Closing Day & Moving In | KY Home Buyers Course",
  description: "Kentucky home buyers course module 06 — Closing Day & Moving In.",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/course/watch/module-6" },
  robots: { index: false, follow: true },
};

export default function Module6() {
  return (
    <>
      <Navbar />
      <CourseLayout
        moduleNum="06"
        moduleTitle="Closing Day & Moving In"
        totalModules={6}
        prevModule={{ slug: "module-5", title: "Inspections & Due Diligence" }}
        nextModule={null}
        lessons={[
          {
            id: "lesson-0",
            title: "Kentucky Attorney Closings — What Makes Them Different",
            content: `
Kentucky is an attorney-closing state. Every real estate closing in Kentucky must be overseen by a licensed Kentucky attorney who has conducted a title examination and is responsible for the proper transfer of title and disbursement of funds. This is a consumer protection that most buyers come to appreciate.

**What the closing attorney does**

The closing attorney examines the title — reviewing public records to confirm that the seller has the legal right to sell the property and that there are no outstanding liens, judgments, or encumbrances that would transfer to the new owner with the property.

The attorney prepares the closing documents, coordinates the receipt of funds from the buyer and lender, manages the disbursement of proceeds to the seller and all other parties, and records the deed with the county clerk to officially transfer ownership.

**Who is the closing attorney's client**

In Kentucky, the closing attorney typically represents the transaction — not exclusively the buyer or the seller. They are responsible for ensuring the closing is handled correctly and legally for all parties. This is different from having an attorney who is exclusively advocating for your interests.

If you have concerns about specific contract terms or feel you need personal legal representation for a complex transaction, you have the right to hire your own separate attorney.

**Attorney fees**

The closing attorney's fee — typically $400 to $700 — is included in your closing costs. This is not an additional expense you negotiate separately; it is a standard component of every Kentucky real estate closing.

**What makes Kentucky closings smooth**

The attorney's title examination provides a meaningful layer of consumer protection. Title issues that might cause problems after closing are far more likely to be identified and addressed before the closing takes place. Compared to states where title is handled by title companies without attorney review, Kentucky buyers have stronger protection against title defects.
            `,
            callout: `The requirement for attorney oversight at every Kentucky closing is a feature, not a friction point. It provides a level of title examination and legal accountability that protects buyers in ways that non-attorney states do not.`,
checklist: [
          "I understand that every Kentucky closing is handled by a licensed attorney",
          "I know that the closing attorney examines title before closing",
          "I have budgeted for attorney fees as part of my closing costs",
          "I understand I have the right to hire my own separate attorney if I choose",
        ],
          },
          {
            id: "lesson-1",
            title: "Reading Your Closing Disclosure Before You Sign",
            content: `
The Closing Disclosure (CD) is the final document that itemizes every cost and credit in your transaction. You are entitled to receive it at least 3 business days before closing — this waiting period is federally mandated and exists specifically to give you time to review it before you are sitting at the closing table under time pressure.

**What the Closing Disclosure contains**

Page 1 — Loan terms: loan amount, interest rate, whether your rate can rise, monthly principal and interest payment, whether there is a prepayment penalty.

Page 2 — Closing cost details: every fee, who pays it, and its exact amount. This is where you verify that what you agreed to in the Loan Estimate matches what you are actually being charged.

Page 3 — Cash to close: the exact amount of money you need to bring to closing. Also shows the comparison between your original Loan Estimate and the final Closing Disclosure.

Page 4 and 5 — Loan disclosures, contact information, and signature page.

**Comparing the CD to your Loan Estimate**

When you applied for your mortgage, your lender issued a Loan Estimate (LE) — a standardized document estimating your loan terms and costs. The Closing Disclosure should closely match the Loan Estimate. Some costs can change; others are required by federal law to match exactly.

Costs that cannot increase from Loan Estimate to Closing Disclosure: origination charges, transfer taxes, and any fees for services where the lender selected the provider.

Costs that can increase by up to 10%: title services you selected from a lender-provided list, recording fees.

Costs that can change without limit: prepaid interest, homeowner's insurance, and property tax escrows — because they depend on the actual closing date and current rates.

**What to do if something looks wrong**

Call your lender immediately. Do not wait until closing day to raise a concern. Most discrepancies are administrative errors that can be corrected before closing — but only if you flag them early.

**How much to bring to closing**

The Closing Disclosure will state your exact cash to close. This amount must be wired or brought as a cashier's check — personal checks are not accepted at closing. Wire transfer funds at least 24 hours before closing. Wire fraud is a real risk in real estate — always verify wire instructions by calling a known phone number before sending any funds.
            `,
            callout: `Review your Closing Disclosure the same day you receive it — not the morning of closing. You need 3 days to identify and resolve any discrepancies before you are sitting at the table.`,
checklist: [
          "I will review my Closing Disclosure the same day I receive it",
          "I will compare it line by line to my Loan Estimate",
          "I will call my lender immediately if anything looks different from what I expected",
          "I will wire closing funds at least 24 hours before closing and verify wire instructions by phone",
        ],
          },
          {
            id: "lesson-2",
            title: "What to Bring and What to Expect on Closing Day",
            content: `
Closing day is the finish line. After weeks of paperwork, inspections, and negotiations, you will sign the documents that transfer ownership and walk out with your keys. Here is exactly what to expect.

**What to bring**

Government-issued photo ID — required by the closing attorney to verify your identity. Bring the same ID you used throughout the transaction.

Certified funds or wire confirmation — your cash to close must be in the form of a cashier's check made payable to the closing attorney, or you must have wired the funds in advance. Bring your wire confirmation.

Your checkbook — occasionally small last-minute adjustments require a personal check for a minor amount.

A pen — though closing offices always have them, some buyers find comfort in using their own.

**The final walkthrough**

Conduct your final walkthrough of the property within 24 hours of closing. This is your opportunity to verify that the property is in the same condition as when you went under contract — that nothing has been damaged, removed, or changed that was not agreed to. If you notice a problem during the final walkthrough, contact your agent before proceeding to closing.

**What happens at closing**

The closing typically takes 60 to 90 minutes. You and the closing attorney (and sometimes the seller, though sellers and buyers do not always close simultaneously) will work through a stack of documents.

The attorney will explain each document before you sign it. Do not be rushed — take the time to understand what you are signing. If you have questions, ask them.

Key documents you will sign: the promissory note (your personal promise to repay the loan), the deed of trust (pledging the property as collateral for the loan), the closing disclosure (acknowledging the costs), and various lender and title disclosures.

**After you sign**

Once all documents are signed and funds are confirmed, the deed will be recorded with the county clerk — typically the same day or next business day. When recording is confirmed, you receive your keys. You are a homeowner.
            `,
            callout: `Bring your ID, your funds confirmation, and a little patience. Closing day is exciting but it is also procedural. The celebration comes right after.`,
checklist: [
          "I have confirmed the exact amount to bring and how to bring it (wire or cashier's check)",
          "I have scheduled my final walkthrough within 24 hours of closing",
          "I will bring my government-issued photo ID to closing",
          "I know I can ask questions at the closing table — I will not feel rushed to sign",
        ],
          },
          {
            id: "lesson-3",
            title: "First Steps as a Kentucky Homeowner",
            content: `
Closing day is the beginning, not the end. The first 30 days of homeownership involve a series of practical steps that set the foundation for years of satisfied ownership. Here is what to do and when.

**Immediately after closing**

Change the locks. You do not know who has keys to your new home — previous owners, neighbors who were given spare keys, contractors who worked on the property. New locks cost $50 to $150 per door and provide immediate peace of mind.

Locate and test the smoke detectors and carbon monoxide detectors. Know where they are, verify they work, and replace batteries if you are not certain when they were last changed.

Locate the main water shut-off valve, the electrical panel, and the gas shut-off. Your inspector should have shown you these during the inspection — now find them in your own home and confirm you can operate them.

**In the first week**

Set up utilities in your name. Electric service through Kentucky Utilities (ku.com), natural gas through Atmos Energy if applicable, water through Elizabethtown Municipal Utilities or Hardin County Water District depending on your address.

Set up internet service. AT&T Fiber and Spectrum serve most of Elizabethtown — verify which providers are available at your specific address and schedule installation.

Forward your mail through USPS.com.

**In the first 30 days**

Transfer your Kentucky driver's license within 30 days of establishing residence. The Hardin County Circuit Clerk's office handles this.

Register your vehicle with the Hardin County Clerk. Kentucky imposes a usage tax at registration that surprises many new residents — budget for it.

Update your voter registration at elect.ky.gov.

Enroll children in school — contact either Hardin County Schools (hcboe.net) or Elizabethtown Independent Schools (etownschools.com) depending on your address.

**Ongoing homeownership**

Budget 1% of your home's value per year for maintenance. On a $250,000 home, that is $2,500 per year — about $210 per month. This fund covers the inevitable HVAC service, gutter cleaning, small repairs, and the periodic larger replacements that every home requires.

Your home is now your most significant financial asset. Treat it accordingly — maintain it regularly, make improvements that add value, and protect it with adequate homeowner's insurance.
            `,
            callout: `The first 30 days set the tone for your entire homeownership experience. The buyers who take care of the practical details immediately are the ones who feel settled and in control. Do not let the to-do list pile up.`,
checklist: [
          "I will change the locks within the first day of ownership",
          "I will locate and test all smoke and CO detectors immediately",
          "I will set up all utilities within the first week",
          "I will transfer my driver's license and vehicle registration within 30 days",
          "I have budgeted approximately 1% of my home value annually for maintenance",
        ],
          }
        ]}
      />
      <Footer />
    </>
  );
}
