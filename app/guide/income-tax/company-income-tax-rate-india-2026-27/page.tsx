// app/guide/income-tax/company-income-tax-rate-india-2026-27/page.tsx

import type { Metadata } from "next";
import Client from "./CompanyTaxRateClient";

const URL = "https://www.taxvio.in/guide/income-tax/company-income-tax-rate-india-2026-27";
const PUBLISHED = "2026-11-11";
const MODIFIED = "2026-11-11";

const faqs: { q: string; a: string }[] = [
  {
    "q": "What is the income tax rate for companies in India?",
    "a": "As reported by public references, a domestic company pays 22% under the concessional regime (Section 115BAA, reported as section 200 of the Income-tax Act 2025), 25% under the normal regime if base-year turnover was up to ₹400 crore, and 30% otherwise. Surcharge and 4% cess apply on top. Foreign companies are taxed at 35% on non-treaty business income. Confirm the rate for your year with your CA."
  },
  {
    "q": "What is the effective rate under the 22% regime?",
    "a": "About 25.17%. The 22% base rate carries a flat 10% surcharge and 4% cess, so 22% × 1.10 × 1.04 equals 25.168%. The surcharge does not climb with income in this regime."
  },
  {
    "q": "What is the effective rate under the normal regime?",
    "a": "For a company with base-year turnover up to ₹400 crore: 26% at income up to ₹1 crore, about 27.82% between ₹1 crore and ₹10 crore, and about 29.12% above ₹10 crore, before marginal relief. For other domestic companies at 30%: 31.2%, about 33.38% and about 34.94%."
  },
  {
    "q": "Is the ₹400 crore turnover limit tested every year?",
    "a": "As generally understood, the test uses total turnover or gross receipts in a fixed base year, FY 2022-23, rather than the current year. Ask your CA to confirm how it applies to your company."
  },
  {
    "q": "What is the MAT rate for FY 2025-26 and tax year 2026-27?",
    "a": "MAT is 15% of book profit for FY 2025-26. Public references on the Union Budget 2026 report a reduction to 14% from tax year 2026-27, with MAT treated as a final tax. Secondary sources differ on wording, so confirm the enacted text before you plan around it."
  },
  {
    "q": "Does MAT apply to a company under the 22% regime?",
    "a": "No. As generally understood, a company that opts for Section 115BAA (section 200 in the 2025 Act) is outside MAT, which is one of the main reasons companies choose it."
  },
  {
    "q": "Can a company switch back from the 22% regime?",
    "a": "As generally understood, the option is exercised on Form 10-IC and cannot be withdrawn once made. Test it against several years of projected profit before you elect."
  },
  {
    "q": "What is Form 10-IC and when is it due?",
    "a": "It is the form through which a domestic company opts for the 22% regime. It must be furnished on or before the due date for the return. A late election is generally not accepted for that year, so confirm the date with your CA."
  },
  {
    "q": "Is the 15% regime for new manufacturing companies still open?",
    "a": "The commencement window for new manufacturing companies under Section 115BAB, reported as section 201 of the 2025 Act, has closed. It matters only to companies that already qualified, and its conditions on business activity are strict."
  },
  {
    "q": "What are the surcharge slabs for companies?",
    "a": "Under the normal regime, 7% above ₹1 crore and up to ₹10 crore of income, and 12% above ₹10 crore, with marginal relief near the thresholds. The 22% and 15% regimes carry a flat 10%. Cess is 4% on tax plus surcharge."
  },
  {
    "q": "What is the tax rate for a foreign company?",
    "a": "The base rate reported for non-treaty business income is 35%, with surcharge at 2% above ₹1 crore and 5% above ₹10 crore, plus 4% cess. Treaty rates and special regimes can differ, so check the applicable agreement."
  },
  {
    "q": "When is advance tax due for companies?",
    "a": "In four cumulative instalments: 15% by 15 June, 45% by 15 September, 75% by 15 December and 100% by 15 March, where estimated tax exceeds ₹10,000. Interest is reported at 1% a month for shortfall or delay."
  },
  {
    "q": "Do return due-date extensions change advance tax dates?",
    "a": "No. Extensions reported for returns that need an audit or transfer pricing report concern the return and report. Advance tax dates and interest follow their own rules. Check the notification that applies to your company."
  },
  {
    "q": "What changes with the Income-tax Act, 2025?",
    "a": "The Act applies from 1 April 2026, replaces assessment year and previous year with a single tax year, and renumbers sections. Public summaries describe company rates as carried forward, but conditions should be verified for each case."
  },
  {
    "q": "How is a company taxed compared with an LLP?",
    "a": "An LLP pays a headline 30% with 12% surcharge above ₹1 crore and 4% cess. A company pays 22% to 30% depending on its regime, but profits distributed as dividend are taxed again in the shareholder's hands. Compare the combined burden, not just the entity rate."
  }
];

export const metadata: Metadata = {
  title: "Income Tax Rate for Companies in India 2026-27: 22% vs Normal Regime, MAT & Surcharge | Taxvio",
  description: "Company income tax rates in India with surcharge and cess: 22% regime (25.17% effective), 25%/30% normal regime, MAT 15% to 14%, Income-tax Act 2025 section changes, calculator and advance tax planner.",
  keywords: ["income tax rate for companies", "corporate tax rate India 2026-27", "22% corporate tax Section 115BAA", "Section 200 Income-tax Act 2025", "MAT rate 14%", "company tax surcharge and cess", "Form 10-IC", "normal regime 25% 30% company", "advance tax companies"],
  alternates: { canonical: URL },
  openGraph: {
    title: "Income Tax Rate for Companies in India 2026-27 | Taxvio",
    description: "22% vs normal regime, MAT and surcharge, with a live calculator.",
    url: URL, siteName: "Taxvio", locale: "en_IN", type: "article", publishedTime: PUBLISHED, modifiedTime: MODIFIED,
  },
  twitter: { card: "summary_large_image", title: "Income Tax Rate for Companies in India 2026-27 | Taxvio", description: "22% vs normal regime, MAT and surcharge, with a live calculator." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org", "@type": "Article",
      headline: "Income Tax Rate for Companies in India 2026-27: 22% vs Normal Regime, MAT and Surcharge",
      description: "Company income tax rates in India with surcharge and cess: 22% regime (25.17% effective), 25%/30% normal regime, MAT 15% to 14%, Income-tax Act 2025 section changes, calculator and advance tax planner.",
      datePublished: PUBLISHED, dateModified: MODIFIED, mainEntityOfPage: URL, inLanguage: "en-IN",
      author: { "@type": "Organization", name: "Taxvio", url: "https://www.taxvio.in" },
      publisher: { "@type": "Organization", name: "Taxvio", url: "https://www.taxvio.in" },
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
        { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.taxvio.in/guide" },
        { "@type": "ListItem", position: 3, name: "Income Tax", item: "https://www.taxvio.in/guide/income-tax" },
        { "@type": "ListItem", position: 4, name: "Income tax rate for companies", item: URL },
      ],
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  return (
    <>
      {jsonLd.map((j, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
      ))}
      <Client faqs={faqs} />
    </>
  );
}