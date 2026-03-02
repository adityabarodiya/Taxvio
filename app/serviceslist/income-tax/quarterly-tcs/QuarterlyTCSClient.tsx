"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useState } from "react";

// ─── SEO structured data (JSON-LD) ───────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Quarterly TCS Return Filing Services",
  provider: {
    "@type": "AccountingService",
    name: "Taxvio",
    areaServed: "India",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Khatauli",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  },
  description:
    "Professional quarterly TCS return filing services in India. Form 27EQ filing, TCS challan reconciliation, Form 27D generation, TCS on sale of goods (206C), foreign remittance (206C(1G)), and LRS compliance. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "TCS Return Filing",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "999",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "999",
      maxPrice: "3999",
    },
  },
};

// ─── FAQPage structured data ──────────────────────────────────────────────────
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is TCS and who is required to collect it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TCS (Tax Collected at Source) is a tax collected by the seller from the buyer at the time of sale of specified goods or services under Section 206C of the Income Tax Act. Sellers of goods like scrap, minerals, alcohol, tendu leaves, timber, forest produce, and parking lots, as well as tour operators, authorised dealers collecting foreign remittance under LRS, and sellers of goods exceeding ₹50 lakh aggregate turnover (Section 206C(1H)) are required to collect TCS.",
      },
    },
    {
      "@type": "Question",
      name: "What is the due date for quarterly TCS return filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TCS returns in Form 27EQ must be filed quarterly: Q1 (April–June) by 15th July, Q2 (July–September) by 15th October, Q3 (October–December) by 15th January, and Q4 (January–March) by 15th May. These are earlier than TDS return due dates for non-government deductors.",
      },
    },
    {
      "@type": "Question",
      name: "What is TCS on sale of goods under Section 206C(1H)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 206C(1H) requires a seller whose total sales turnover exceeds ₹10 crore in the previous financial year to collect TCS at 0.1% from every buyer whose purchases from the seller exceed ₹50 lakh in the current financial year. This applies from October 1, 2020 onwards. If the buyer has not furnished PAN/Aadhaar, TCS rate doubles to 1%.",
      },
    },
    {
      "@type": "Question",
      name: "What is TCS on foreign remittance under LRS (Section 206C(1G))?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Section 206C(1G) requires authorised dealers (banks, money changers) to collect TCS on foreign remittances under the Liberalised Remittance Scheme (LRS) above ₹7 lakh per year. TCS rate is 20% for most remittances (education loans get 0.5%, education from own funds gets 5%). This TCS can be claimed as credit by the remitter against their income tax or refunded via ITR.",
      },
    },
    {
      "@type": "Question",
      name: "What is Form 27D and when should it be issued?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Form 27D is the TCS certificate issued by the collector (seller) to the collectee (buyer) after filing the quarterly TCS return. It shows the amount of TCS collected and deposited. Form 27D must be issued within 15 days of the due date of the TCS return for each quarter. Buyers use Form 27D to claim TCS credit in their income tax return.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for late TCS return filing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Late filing of TCS returns (Form 27EQ) attracts a mandatory fee of ₹200 per day under Section 234E from the due date until filing, subject to a maximum of the TCS amount. Additionally, the Assessing Officer can levy a penalty of ₹10,000 to ₹1,00,000 under Section 271H. Interest at 1% per month is also charged on late TCS deposit under Section 206C(7).",
      },
    },
  ],
};

export default function QuarterlyTCSClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="bg-white text-gray-800">
        <DeadlineBanner />

        {/* ── HERO ── */}
        <section
          className="bg-gradient-to-r from-[#00416a] to-[#002b45] text-white py-24"
          aria-label="Quarterly TCS Return Filing Hero"
        >
          <div className="max-w-6xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-300">
              <ol className="flex gap-2 flex-wrap">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/income-tax" className="hover:text-white">Income Tax</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white font-medium">
                  Quarterly TCS Filing
                </li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quarterly TCS Return Filing Services in India — FY 2025-26
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Accurate and timely quarterly TCS return filing in Form 27EQ for
              businesses, traders, authorised dealers, and tour operators. TCS
              on sale of goods (206C(1H)), foreign remittance under LRS
              (206C(1G)), scrap, minerals, and other specified goods. Form 27D
              generation, challan reconciliation, and TRACES compliance. Serving
              Khatauli, Muzaffarnagar and pan-India online.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
                aria-label="File my TCS return now"
              >
                File TCS Return Now
              </Link>
              <Link
                href="#due-dates"
                className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition"
              >
                View Due Dates
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
              <span>✅ Form 27EQ Filing</span>
              <span>✅ Form 27D Generation</span>
              <span>✅ TCS on Goods (206C(1H))</span>
              <span>✅ LRS TCS (206C(1G))</span>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">

          {/* INTRO */}
          <article>
            <h2 className="text-3xl font-semibold text-[#00416a] mb-6">
              Complete Guide to Quarterly TCS Return Filing (FY 2025-26)
            </h2>

            <p className="mb-5 leading-relaxed text-gray-700">
              Tax Collected at Source (TCS) is a compliance obligation under
              Section 206C of the Income Tax Act, 1961, where a{" "}
              <strong>seller collects tax from the buyer</strong> at the time of
              sale of specified goods or at the time of receipt of sale
              consideration — whichever is earlier. Unlike TDS where the payer
              deducts tax before making a payment, in TCS the{" "}
              <strong>seller adds the TCS amount over and above the
              invoice value</strong> and deposits it with the government on
              behalf of the buyer. The buyer can subsequently claim credit for
              this TCS against their own income tax liability while filing their
              ITR.
            </p>

            <p className="mb-5 leading-relaxed text-gray-700">
              TCS compliance has significantly expanded in recent years. The
              introduction of <strong>Section 206C(1H)</strong> in October 2020
              brought a large new category of sellers within the TCS net — any
              seller whose aggregate turnover exceeds ₹10 crore in the preceding
              financial year must collect TCS at 0.1% from buyers whose
              purchases exceed ₹50 lakh. Additionally,{" "}
              <strong>Section 206C(1G)</strong> made authorised dealers and tour
              operators responsible for collecting TCS on foreign remittances
              under the Liberalised Remittance Scheme (LRS) — with rates
              dramatically increased to <strong>20%</strong> from October 2023
              for most remittances.
            </p>

            <p className="mb-10 leading-relaxed text-gray-700">
              Every TCS collector must file <strong>Form 27EQ quarterly</strong>{" "}
              on the TRACES portal, deposit TCS challans on time, and issue{" "}
              <strong>Form 27D</strong> (TCS certificates) to buyers. Failure to
              comply triggers automatic penalties under Section 234E (₹200/day),
              prosecution risk under Section 276BB, and disallowance of buyer
              TCS credit. <strong>Taxvio</strong>, based in Khatauli
              (Muzaffarnagar, UP), provides end-to-end quarterly TCS compliance
              services for businesses pan-India.
            </p>

            {/* WHO MUST COLLECT */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Who Is Required to Collect TCS and File TCS Returns?
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              The obligation to collect TCS applies to specified categories of
              sellers and collectors. TAN (Tax Deduction and Collection Account
              Number) is mandatory for all TCS collectors. The following are
              required to collect TCS and file quarterly Form 27EQ:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>Sellers of Specified Goods (Section 206C(1))</strong> — Sellers
                of scrap, minerals (coal, lignite, iron ore), tendu leaves,
                timber obtained under forest lease, any forest produce, alcohol
                for human consumption, and parking lots / toll plazas.
              </li>
              <li>
                <strong>Sellers of Goods — High Turnover (Section 206C(1H))</strong> — Any
                seller whose aggregate turnover in the preceding financial year
                exceeded ₹10 crore, on sale of goods to a buyer whose
                aggregate purchases from the seller exceed ₹50 lakh in the
                current year.
              </li>
              <li>
                <strong>Authorised Dealers — Foreign Remittance (Section
                206C(1G))</strong> — Banks, money changers, and authorised
                dealers receiving remittances under the Liberalised Remittance
                Scheme (LRS) from buyers exceeding ₹7 lakh per year.
              </li>
              <li>
                <strong>Tour Operators (Section 206C(1G))</strong> — Travel
                agents and tour operators selling overseas tour packages to
                buyers — TCS applies on the entire package value from the first
                rupee (no threshold).
              </li>
              <li>
                <strong>Sellers of Motor Vehicles (Section 206C(1F))</strong> — Dealers
                selling motor vehicles exceeding ₹10 lakh in value must collect
                TCS at 1% from buyers.
              </li>
              <li>
                <strong>Liquor Contractors & Distilleries</strong> — On sale of
                alcohol for human consumption at the applicable rate.
              </li>
            </ul>

            {/* TCS vs TDS */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              TCS vs TDS — Key Differences Every Business Must Know
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              TCS and TDS are both advance tax collection mechanisms but operate
              differently. Confusing the two leads to wrong compliance:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>
                <strong>Who collects / deducts</strong> — TDS is deducted by the
                payer (buyer) from the payee's amount. TCS is collected by the
                seller (recipient) from the buyer over and above the invoice.
              </li>
              <li>
                <strong>Nature of transaction</strong> — TDS applies on payments
                like salary, rent, professional fees, contractor charges. TCS
                applies on sale of specified goods and services.
              </li>
              <li>
                <strong>Return form</strong> — TDS is reported in Forms 24Q
                (salary), 26Q (non-salary), 27Q (non-resident). TCS is reported
                exclusively in <strong>Form 27EQ</strong>.
              </li>
              <li>
                <strong>Certificate issued</strong> — TDS certificate is Form
                16 / 16A. TCS certificate is <strong>Form 27D</strong>.
              </li>
              <li>
                <strong>Overlap — Section 206C(1H) vs 194Q</strong> — A critical
                point: Section 194Q (TDS on purchase of goods by buyer) and
                Section 206C(1H) (TCS on sale of goods by seller) can overlap
                on the same transaction. In such cases, <strong>194Q TDS takes
                priority</strong> and 206C(1H) TCS does not apply.
              </li>
            </ul>
          </article>

          {/* DUE DATES TABLE */}
          <DueDatesTable />

          {/* TCS RATES TABLE */}
          <TCSRatesSection />

          {/* SECTION 206C(1H) DEEP DIVE */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4 mt-4">
              Section 206C(1H) — TCS on Sale of Goods: Detailed Guide
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Section 206C(1H) is one of the most widely applicable TCS
              provisions affecting traders and manufacturers. Here are all the
              critical aspects every seller must know:
            </p>
            <ul className="list-disc pl-6 mb-5 text-gray-700 space-y-2">
              <li>
                <strong>Applicability</strong> — Sellers with aggregate turnover
                exceeding <strong>₹10 crore</strong> in the preceding FY must
                collect TCS at <strong>0.1%</strong> from every buyer whose
                aggregate purchases from that seller exceed{" "}
                <strong>₹50 lakh</strong> in the current FY.
              </li>
              <li>
                <strong>Triggering event</strong> — TCS is collected at the time
                of receipt of sale consideration (not invoice date). If an
                advance is received before goods are delivered, TCS applies on
                the advance as well.
              </li>
              <li>
                <strong>Rate if PAN/Aadhaar not furnished</strong> — TCS rate
                doubles to <strong>1%</strong> under Section 206CC if the buyer
                does not furnish their PAN or Aadhaar to the seller.
              </li>
              <li>
                <strong>Exclusions</strong> — Does not apply to goods on which
                TCS is already collected under other sub-sections of 206C
                (scrap, minerals etc.), goods on which TDS has been deducted by
                the buyer under Section 194Q, goods exported out of India, and
                goods imported into India.
              </li>
              <li>
                <strong>Buyer's credit</strong> — The TCS collected appears in
                the buyer's Form 26AS and AIS, and can be claimed as advance tax
                credit while computing the buyer's final tax liability.
              </li>
            </ul>
            <p className="mb-10 leading-relaxed text-gray-700">
              Managing 206C(1H) TCS compliance requires tracking buyer-wise
              aggregate purchase values throughout the year, collecting TCS at
              the right threshold crossing point, and correctly reporting all
              collections in Form 27EQ. Taxvio's systematic approach ensures no
              buyer is missed and no TCS is over-collected or under-collected.
            </p>

            {/* LRS TCS */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Section 206C(1G) — TCS on Foreign Remittance Under LRS
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Section 206C(1G) was significantly overhauled from October 1,
              2023, making it one of the most impactful TCS provisions for
              individuals remitting money abroad and for authorised dealers
              handling such remittances:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>
                <strong>General LRS remittances</strong> — TCS at{" "}
                <strong>20%</strong> on amounts exceeding ₹7 lakh per year
                remitted for purposes like foreign investment, gift, maintenance
                of relatives abroad, buying foreign securities, travel (not
                through tour operator), etc.
              </li>
              <li>
                <strong>Education financed by loan</strong> — TCS at only{" "}
                <strong>0.5%</strong> on remittances for education abroad paid
                from an education loan obtained from a financial institution
                under Section 80E.
              </li>
              <li>
                <strong>Education from own funds</strong> — TCS at{" "}
                <strong>5%</strong> on remittances exceeding ₹7 lakh for
                education abroad (not through a loan).
              </li>
              <li>
                <strong>Medical treatment abroad</strong> — TCS at{" "}
                <strong>5%</strong> on remittances exceeding ₹7 lakh for
                medical treatment outside India.
              </li>
              <li>
                <strong>Overseas tour packages</strong> — TCS at{" "}
                <strong>5%</strong> (up to ₹7 lakh) and <strong>20%</strong>{" "}
                above ₹7 lakh for tour packages sold by tour operators. No
                threshold — applies from the first rupee.
              </li>
              <li>
                <strong>Reclaim of TCS</strong> — The remitter (buyer) can
                claim credit for LRS TCS collected against their total income
                tax liability for the year. If TCS exceeds tax payable, the
                excess is refunded.
              </li>
            </ul>

            {/* PENALTIES */}
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              TCS Non-Compliance — Penalties & Consequences
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              TCS non-compliance attracts strict financial penalties and legal
              consequences under the Income Tax Act:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>
                <strong>Section 206C(7) — Interest on Late TCS Deposit</strong> — Interest
                at <strong>1% per month</strong> (or part of month) from the
                date TCS was collectible to the date of actual deposit with the
                government.
              </li>
              <li>
                <strong>Section 234E — Late Filing Fee</strong> — Mandatory fee
                of <strong>₹200 per day</strong> from the due date of Form 27EQ
                until actual filing, subject to a maximum equal to the TCS
                amount. This is automatically calculated and must be paid before
                the return can be filed.
              </li>
              <li>
                <strong>Section 271H — Penalty for Non-Filing</strong> — If Form
                27EQ is not filed within one year of the due date, the
                Assessing Officer can levy a penalty between{" "}
                <strong>₹10,000 and ₹1,00,000</strong> — in addition to Section
                234E fees.
              </li>
              <li>
                <strong>Section 206C(6A) — Disallowance</strong> — If TCS is
                not collected or deposited, the entire TCS amount (not just the
                tax component) is treated as income of the seller and added back
                to taxable income.
              </li>
              <li>
                <strong>Section 276BB — Prosecution</strong> — Wilful failure
                to deposit TCS with the government after collection can lead to
                criminal prosecution with imprisonment of <strong>3 months to
                7 years</strong> plus fine. Directors and persons in charge of
                the company are personally liable.
              </li>
              <li>
                <strong>Buyer impact — Loss of TCS credit</strong> — If the
                seller does not file Form 27EQ or files incorrectly, the TCS
                collected from the buyer does not appear in the buyer's Form
                26AS — preventing the buyer from claiming the credit. This
                causes buyer complaints and business relationship damage.
              </li>
            </ul>
          </article>

          {/* WORKFLOW */}
          <WorkflowSection />

          {/* DOCUMENTS */}
          <article>
            <h2 className="text-2xl font-semibold text-[#00416a] mb-4">
              Documents Required for TCS Return Filing
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Keeping these documents organised before each quarterly filing
              ensures a smooth and accurate Form 27EQ submission:
            </p>
            <ul className="list-disc pl-6 mb-10 text-gray-700 space-y-2">
              <li>TAN (Tax Deduction and Collection Account Number) of the collector</li>
              <li>
                Buyer-wise / collectee-wise details — name, PAN / Aadhaar,
                address, amount collected, TCS amount, and section under which
                collected
              </li>
              <li>
                Sales invoices / receipts for all transactions where TCS was
                collected during the quarter
              </li>
              <li>
                TCS challan deposit details — BSR code of bank, challan serial
                number, date of deposit, amount deposited (Challan 281)
              </li>
              <li>
                Bank statements showing TCS challan deposits for the quarter
              </li>
              <li>
                Form 26AS of the collector's PAN — to verify TCS challan
                reflection
              </li>
              <li>
                Previous quarter's Form 27EQ acknowledgement token number (for
                continuity reference)
              </li>
              <li>
                For LRS TCS (206C(1G)) — remittance details, purpose of
                remittance, buyer's declaration form (for education loan
                exemption)
              </li>
              <li>
                For 206C(1H) — buyer-wise aggregate purchase register
                maintained throughout the year to track ₹50 lakh threshold
                crossing
              </li>
            </ul>
          </article>

          {/* CALCULATOR */}
          <TCSFeeCalculator />

          {/* TESTIMONIALS */}
          <Testimonials />

          {/* FAQ */}
          <FAQSection />
        </section>

        <PremiumCTA />
      </main>
    </>
  );
}

/* ================= DEADLINE BANNER ================= */
function DeadlineBanner() {
  const [nextDeadline, setNextDeadline] = useState<{
    label: string;
    daysLeft: number;
  } | null>(null);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    // TCS due dates are 15 days earlier than TDS (15th of the month)
    const deadlines = [
      { label: "Q1 TCS Return (Apr–Jun)", date: new Date(`July 15, ${year}`) },
      { label: "Q2 TCS Return (Jul–Sep)", date: new Date(`October 15, ${year}`) },
      { label: "Q3 TCS Return (Oct–Dec)", date: new Date(`January 15, ${year + 1}`) },
      { label: "Q4 TCS Return (Jan–Mar)", date: new Date(`May 15, ${year + 1}`) },
    ];
    const upcoming = deadlines.find((d) => d.date.getTime() > today.getTime());
    if (upcoming) {
      const daysLeft = Math.ceil(
        (upcoming.date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
      );
      setNextDeadline({ label: upcoming.label, daysLeft });
    }
  }, []);

  return (
    <div
      className="bg-red-600 text-white text-center py-3 font-semibold text-sm"
      role="alert"
      aria-live="polite"
    >
      ⏳ Next TCS Return Deadline:{" "}
      {nextDeadline
        ? `${nextDeadline.label} — ${nextDeadline.daysLeft} Days Left`
        : "File On Time to Avoid ₹200/Day Penalty"}
      &nbsp;|&nbsp; Late filing: ₹200/day under Section 234E
    </div>
  );
}

/* ================= DUE DATES TABLE ================= */
function DueDatesTable() {
  return (
    <section id="due-dates" aria-label="TCS Return Filing Due Dates">
      <h2 className="text-3xl font-semibold text-[#00416a] mt-16 mb-4">
        Quarterly TCS Return Due Dates — FY 2025-26
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        TCS returns in Form 27EQ must be filed quarterly. Note that TCS due
        dates are <strong>15 days earlier</strong> than TDS due dates — a
        common oversight that results in late filing penalties. TCS challans
        must also be deposited by the 7th of the following month.
      </p>

      <div className="overflow-x-auto mb-6">
        <table
          className="min-w-full border rounded-xl overflow-hidden"
          aria-label="Quarterly TCS Return Due Dates FY 2025-26"
        >
          <thead className="bg-[#00416a] text-white">
            <tr>
              <th className="p-4 text-left" scope="col">Quarter</th>
              <th className="p-4 text-left" scope="col">Period</th>
              <th className="p-4 text-left" scope="col">TCS Challan Due</th>
              <th className="p-4 text-left" scope="col">Form 27EQ Due Date</th>
              <th className="p-4 text-left" scope="col">Form 27D Issuance</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Q1", "April – June 2025", "7th of each month", "15th July 2025", "By 30th July 2025"],
              ["Q2", "July – September 2025", "7th of each month", "15th October 2025", "By 30th October 2025"],
              ["Q3", "October – December 2025", "7th of each month", "15th January 2026", "By 30th January 2026"],
              ["Q4", "January – March 2026", "30th April 2026 (Mar)", "15th May 2026", "By 30th May 2026"],
            ].map(([q, period, challan, form27eq, form27d], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4 font-semibold text-[#00416a]">{q}</td>
                <td className="p-4 text-gray-600">{period}</td>
                <td className="p-4 text-gray-600">{challan}</td>
                <td className="p-4 font-medium text-gray-700">{form27eq}</td>
                <td className="p-4 text-gray-600">{form27d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mb-16 text-gray-600 italic text-sm">
        * TCS due dates are <strong>earlier than TDS due dates</strong> —
        Form 27EQ is due on the 15th, not the 31st. Late filing triggers
        ₹200/day mandatory fee under Section 234E with no waiver provision.
      </p>
    </section>
  );
}

/* ================= TCS RATES SECTION ================= */
function TCSRatesSection() {
  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-4 mb-4">
        TCS Rates Under All Sections — FY 2025-26
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700">
        Here is a comprehensive reference of all TCS rates applicable for FY
        2025-26 under Section 206C of the Income Tax Act:
      </p>

      <div className="overflow-x-auto mb-16">
        <table
          className="min-w-full border rounded-xl overflow-hidden"
          aria-label="TCS Rates Under All Sections FY 2025-26"
        >
          <thead className="bg-[#00416a] text-white">
            <tr>
              <th className="p-4 text-left" scope="col">Section</th>
              <th className="p-4 text-left" scope="col">Nature of Transaction</th>
              <th className="p-4 text-left" scope="col">Threshold</th>
              <th className="p-4 text-left" scope="col">TCS Rate</th>
              <th className="p-4 text-left" scope="col">Rate (No PAN)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["206C(1)(a)", "Alcoholic liquor for human consumption", "No threshold", "1%", "5%"],
              ["206C(1)(b)", "Tendu leaves", "No threshold", "5%", "10%"],
              ["206C(1)(c)", "Timber obtained under forest lease", "No threshold", "2.5%", "5%"],
              ["206C(1)(d)", "Timber obtained by any other mode", "No threshold", "2.5%", "5%"],
              ["206C(1)(e)", "Other forest produce (not timber/tendu)", "No threshold", "2.5%", "5%"],
              ["206C(1)(f)", "Scrap", "No threshold", "1%", "2%"],
              ["206C(1)(g)", "Minerals (coal, lignite, iron ore)", "No threshold", "1%", "2%"],
              ["206C(1C)", "Parking lots, toll plazas, mining & quarrying", "No threshold", "2%", "4%"],
              ["206C(1F)", "Motor vehicle sale (value > ₹10 lakh)", "₹10,00,000 per vehicle", "1%", "2%"],
              ["206C(1G) — LRS (general)", "Foreign remittance under LRS (general)", "₹7,00,000 per year", "20%", "20%"],
              ["206C(1G) — LRS (education loan)", "LRS for education via bank loan (80E)", "₹7,00,000 per year", "0.5%", "1%"],
              ["206C(1G) — LRS (education/medical)", "LRS for education/medical from own funds", "₹7,00,000 per year", "5%", "10%"],
              ["206C(1G) — Tour package", "Overseas tour package (tour operator)", "No threshold (first rupee)", "5% up to ₹7L; 20% above", "20%"],
              ["206C(1H)", "Sale of goods (seller turnover > ₹10 Cr)", "Buyer purchases > ₹50,00,000", "0.1%", "1%"],
            ].map(([section, nature, threshold, rate, noPan], i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="p-4 font-semibold text-[#00416a] whitespace-nowrap text-sm">{section}</td>
                <td className="p-4 text-gray-700 text-sm">{nature}</td>
                <td className="p-4 text-gray-600 text-sm">{threshold}</td>
                <td className="p-4 font-medium text-gray-700">{rate}</td>
                <td className="p-4 text-red-600 font-medium">{noPan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* ================= WORKFLOW ================= */
function WorkflowSection() {
  const steps = [
    {
      title: "1. TAN Verification & TCS Applicability Assessment",
      desc: "We verify your active TAN and assess which TCS sections apply to your business — 206C(1H) for goods sellers, 206C(1G) for tour operators/AD banks, 206C(1F) for vehicle dealers, or Section 206C(1) for specified goods like scrap and minerals.",
    },
    {
      title: "2. Buyer-Wise TCS Collection Data Collection",
      desc: "For 206C(1H) cases, we maintain and verify buyer-wise purchase registers to track the ₹50 lakh threshold crossing. For LRS (206C(1G)), we collect remittance-wise details including purpose and buyer declarations for lower rate eligibility.",
    },
    {
      title: "3. TCS Computation & Section Mapping",
      desc: "Each collection is mapped to the correct section, rate verified (including higher rate for missing PAN under Section 206CC), and TCS amount reconciled with challan deposits. Overlap check with Section 194Q (TDS) is performed.",
    },
    {
      title: "4. Challan Verification & TRACES Reconciliation",
      desc: "All TCS challans deposited during the quarter are verified — BSR code, challan serial number, date, and amount matched against bank records and TRACES data. Any challan mismatches are resolved before return filing.",
    },
    {
      title: "5. Form 27EQ Preparation & Filing",
      desc: "The TCS return is prepared in FVU (File Validation Utility) format with all collectee entries, challan details, and section-wise breakup. The validated file is uploaded on TRACES before the 15th of the month following quarter-end.",
    },
    {
      title: "6. Form 27D Generation & Issuance",
      desc: "After successful filing, Form 27D (TCS certificates) are downloaded from TRACES and issued to buyers within 15 days of the return due date — ensuring buyers can claim TCS credit in their own ITR or advance tax computation.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Our Quarterly TCS Filing Process — End to End
      </h2>
      <p className="mb-10 leading-relaxed text-gray-700">
        Taxvio handles your complete quarterly TCS compliance — from buyer
        register maintenance and challan reconciliation to Form 27EQ filing and
        Form 27D issuance — so you stay compliant every quarter without stress:
      </p>

      <div className="relative border-l-4 border-[#00416a] pl-8 space-y-10 mb-16">
        {steps.map((s, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-11 top-1 w-6 h-6 bg-[#00416a] rounded-full border-4 border-white" />
            <h3 className="text-xl font-semibold text-[#00416a]">{s.title}</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

/* ================= FEE CALCULATOR ================= */
function TCSFeeCalculator() {
  const [buyers, setBuyers] = useState(0);
  const [sections, setSections] = useState<string[]>([]);
  const [fee, setFee] = useState(999);
  const [label, setLabel] = useState("");

  const sectionOptions = [
    "206C(1H) — Sale of Goods",
    "206C(1G) — LRS / Tour Packages",
    "206C(1F) — Motor Vehicles",
    "206C(1) — Scrap / Minerals / Forest",
  ];

  useEffect(() => {
    const base = buyers <= 10 ? 999 : buyers <= 50 ? 1999 : buyers <= 200 ? 2999 : 3999;
    const extra = sections.length > 1 ? (sections.length - 1) * 500 : 0;
    setFee(base + extra);
    setLabel(
      buyers <= 10
        ? "Basic — Up to 10 buyer entries per quarter"
        : buyers <= 50
        ? "Standard — Up to 50 buyer entries per quarter"
        : buyers <= 200
        ? "Business — Up to 200 buyer entries per quarter"
        : "Enterprise — 200+ buyer entries per quarter"
    );
  }, [buyers, sections]);

  const toggleSection = (s: string) => {
    setSections((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-4">
        Estimate Your Quarterly TCS Filing Fee
      </h2>
      <p className="mb-6 text-gray-700 leading-relaxed">
        Our TCS filing fees depend on the number of buyer / collectee entries
        and the TCS sections applicable to your business:
      </p>

      <div
        className="bg-gray-50 p-8 rounded-2xl shadow mb-16"
        role="region"
        aria-label="TCS Return Filing Fee Calculator"
      >
        <label
          htmlFor="buyers-input"
          className="block font-semibold text-gray-700 mb-2"
        >
          Number of Buyers / Collectees Per Quarter
        </label>
        <input
          id="buyers-input"
          type="number"
          placeholder="e.g. 30"
          className="border p-3 rounded-xl w-full mb-6 focus:outline-none focus:ring-2 focus:ring-[#00416a]"
          onChange={(e) => setBuyers(Number(e.target.value))}
        />

        <p className="font-semibold text-gray-700 mb-3">
          TCS Sections Applicable to Your Business (select all that apply):
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          {sectionOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => toggleSection(opt)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition border ${
                sections.includes(opt)
                  ? "bg-[#00416a] text-white border-[#00416a]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#00416a]"
              }`}
              aria-pressed={sections.includes(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        <p className="text-lg font-semibold text-[#00416a]" aria-live="polite">
          Estimated Fee Per Quarter:{" "}
          <span className="text-2xl">₹{fee.toLocaleString("en-IN")}</span>
        </p>
        <p className="text-sm text-gray-500 mt-1">{label}</p>
        <p className="text-sm text-gray-400 mt-2">
          * Per quarter. Annual TCS compliance (all 4 quarters) available at a
          discounted rate. Form 27D generation and TRACES correction statements
          charged separately. GST extra.
        </p>
      </div>
    </>
  );
}

/* ================= TESTIMONIALS ================= */
function Testimonials() {
  const reviews = [
    {
      name: "Sharma Scrap Traders",
      location: "Khatauli",
      rating: 5,
      text: "We deal in scrap and TCS on 206C(1)(f) is mandatory for us. Taxvio handles all four quarterly Form 27EQ filings seamlessly — zero notices in three years.",
    },
    {
      name: "Gupta Auto Dealers",
      location: "Muzaffarnagar",
      rating: 5,
      text: "With vehicle sales over ₹10 lakh, TCS under 206C(1F) applies to us. Taxvio manages our Form 27D issuance to buyers on time, keeping them happy.",
    },
    {
      name: "Verma Exports Pvt. Ltd.",
      location: "Meerut",
      rating: 5,
      text: "Our annual turnover crossed ₹10 crore last year, making Section 206C(1H) applicable. Taxvio set up our buyer tracking system and files Form 27EQ every quarter accurately.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Trusted for TCS Compliance by Businesses Across India
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="border p-6 rounded-xl shadow hover:shadow-lg transition"
            itemScope
            itemType="https://schema.org/Review"
          >
            <div className="flex mb-3" aria-label={`${r.rating} out of 5 stars`}>
              {Array.from({ length: r.rating }).map((_, j) => (
                <span key={j} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <p className="mb-4 text-gray-700 italic" itemProp="reviewBody">
              "{r.text}"
            </p>
            <h4
              className="font-semibold text-[#00416a]"
              itemProp="author"
              itemScope
              itemType="https://schema.org/Person"
            >
              <span itemProp="name">{r.name}</span>
            </h4>
            <p className="text-sm text-gray-500">{r.location}</p>
          </div>
        ))}
      </div>
    </>
  );
}

/* ================= FAQ ================= */
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is TCS and who is required to collect it?",
      a: "TCS (Tax Collected at Source) under Section 206C is collected by the seller from the buyer at the time of receiving sale consideration. Sellers of scrap, minerals, forest produce, tendu leaves, alcohol, vehicle dealers (vehicles > ₹10L), tour operators, authorised dealers for LRS remittances, and any seller with turnover > ₹10 crore on goods sales > ₹50 lakh (Section 206C(1H)) must collect TCS.",
    },
    {
      q: "What are the due dates for quarterly TCS return filing?",
      a: "Form 27EQ must be filed quarterly: Q1 by 15th July, Q2 by 15th October, Q3 by 15th January, Q4 by 15th May. These are 15 days earlier than TDS return due dates — a very common oversight. TCS challans must be deposited by the 7th of each following month (30th April for March).",
    },
    {
      q: "What is Section 206C(1H) TCS on sale of goods?",
      a: "Section 206C(1H) requires sellers with turnover > ₹10 crore in the previous FY to collect TCS at 0.1% from buyers whose aggregate purchases from that seller exceed ₹50 lakh in the current FY. TCS is collected at the time of receipt of consideration. If the buyer doesn't provide PAN/Aadhaar, rate doubles to 1%. Note: if the buyer deducts TDS under Section 194Q, the seller need not collect TCS on that transaction.",
    },
    {
      q: "What is the TCS rate on foreign remittance under LRS?",
      a: "From October 2023: 20% on most LRS remittances above ₹7 lakh per year; 0.5% for education via bank loan (Section 80E); 5% for education/medical from own funds above ₹7 lakh; 5% (up to ₹7L) and 20% (above ₹7L) for overseas tour packages — with no threshold for tour packages.",
    },
    {
      q: "What is Form 27D and when must it be issued?",
      a: "Form 27D is the TCS certificate issued by the collector (seller) to the collectee (buyer) after filing Form 27EQ. It shows TCS amount collected and deposited. Form 27D must be issued within 15 days of the Form 27EQ due date for each quarter. Buyers use it to claim TCS credit against their income tax liability.",
    },
    {
      q: "Can TDS and TCS both apply on the same transaction?",
      a: "No — there is a specific non-overlap rule. Section 206C(1H) TCS on sale of goods does not apply to a transaction where the buyer has deducted TDS under Section 194Q. In practice, when a buyer's aggregate purchases from a seller exceed ₹50 lakh and the buyer is liable to deduct 194Q TDS, the seller need not collect 206C(1H) TCS on that portion. The obligation rests on the buyer for TDS, not the seller for TCS.",
    },
  ];

  return (
    <section id="faq" aria-label="Frequently Asked Questions about TCS Return Filing">
      <h2 className="text-3xl font-semibold text-[#00416a] mt-20 mb-8">
        Frequently Asked Questions — Quarterly TCS Return Filing
      </h2>

      <div className="space-y-4 mb-16">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="border rounded-xl overflow-hidden"
            itemScope
            itemType="https://schema.org/Question"
          >
            <button
              className="w-full text-left p-5 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={`faq-answer-${i}`}
            >
              <span itemProp="name">{f.q}</span>
              <span className="text-[#00416a] text-xl ml-4 shrink-0">
                {open === i ? "−" : "+"}
              </span>
            </button>
            <div
              id={`faq-answer-${i}`}
              className={`px-5 text-gray-600 leading-relaxed transition-all duration-300 ${
                open === i ? "max-h-96 pb-5" : "max-h-0 overflow-hidden"
              }`}
              itemScope
              itemType="https://schema.org/Answer"
            >
              <p itemProp="text">{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= CTA ================= */
function PremiumCTA() {
  return (
    <section className="mt-16 mb-0" aria-label="Call to Action">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#00416a] to-[#002b45] rounded-3xl shadow-2xl px-8 py-16 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Never Miss a TCS Deadline — Outsource to Taxvio
          </h2>
          <p className="text-gray-200 mb-3 max-w-2xl mx-auto">
            Avoid ₹200/day late filing fee, protect your buyers' TCS credit,
            and stay 100% compliant every quarter. Taxvio's managed TCS
            compliance service starts at just ₹999 per quarter. Serving
            Khatauli, Muzaffarnagar, Meerut and all of India online.
          </p>
          <p className="text-gray-300 text-sm mb-8">
            📞 Call / WhatsApp us today | 📧 Email for a free TCS compliance review
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
              aria-label="Start quarterly TCS filing with Taxvio"
            >
              Start TCS Filing — ₹999/Quarter
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition"
            >
              Get Free TCS Review
            </Link>
          </div>
        </div>
      </div>
      <Footar/>
    </section>
  );
}