// app/guide/roc/llp-form-8/page.tsx

import type { Metadata } from "next";
import Client from "./LLPForm8Client";

const URL = "https://www.taxvio.in/guide/roc/llp-form-8";
const PUBLISHED = "2026-10-24";
const MODIFIED = "2026-10-26";

const faqs: { q: string; a: string }[] = [
  {
    "q": "What is LLP Form 8?",
    "a": "Form 8 is the Statement of Account and Solvency that every Limited Liability Partnership files with the Registrar of Companies each year. It reports assets, liabilities, income and expenditure as at 31 March, with a solvency declaration by the designated partners."
  },
  {
    "q": "What is the due date for LLP Form 8 for FY 2025-26?",
    "a": "30 October 2026, which is 30 days after the end of six months of the financial year. We are not aware of any blanket extension, but please check the latest MCA circulars before relying on that."
  },
  {
    "q": "Does MCA General Circular 05/2026 extend Form 8?",
    "a": "No. The circular, dated 24 October 2026, relates to companies under the Companies Act, 2013 and names AOC-4 and MGT-7 variants. It does not mention LLPs or Form 8."
  },
  {
    "q": "Is Form 8 mandatory for an LLP with no business?",
    "a": "Yes. Every registered LLP must file Form 8, with or without turnover. A dormant LLP files a statement with nil or minimal figures."
  },
  {
    "q": "What is the late fee for Form 8?",
    "a": "Since 1 April 2022 the additional fee is a multiple of the normal filing fee that rises with the delay, with lower multiples for small LLPs. The old flat ₹100 per day no longer applies in that form. Use the calculator on this page and confirm on the MCA portal."
  },
  {
    "q": "Who signs Form 8?",
    "a": "At least two designated partners sign with their Digital Signature Certificates, and the form carries professional certification as it requires. If the LLP is liable to audit, the audit forms part of the position, so confirm the exact certification with your CA."
  },
  {
    "q": "Is an audit required before filing Form 8?",
    "a": "Generally yes where turnover exceeds ₹40 lakh or contribution exceeds ₹25 lakh in any financial year. LLPs below both limits are generally exempt from the LLP-law audit, though other laws may still require one."
  },
  {
    "q": "Should I file Form 11 before Form 8?",
    "a": "Yes. Form 11 is due earlier, 60 days after year-end, and the contribution figures should agree between the two forms. Filing Form 11 first avoids mismatches."
  },
  {
    "q": "What happens if an LLP never files Form 8?",
    "a": "Additional fees keep accumulating, penalties may apply to the LLP and its designated partners, and the Registrar may eventually start action to strike the LLP off the register. It is best to regularise early."
  }
];

export const metadata: Metadata = {
  title: "LLP Form 8 Filing 2026: Due Date 30 Oct, Late Fee Calculator, Process & Documents | Taxvio",
  description: "LLP Form 8 for FY 2025-26 is due 30 October 2026. Live countdown, late-fee calculator, audit and small-LLP checker, step-by-step MCA filing and documents. Why the company circular 05/2026 does not cover LLPs.",
  keywords: ["LLP Form 8", "LLP Form 8 due date 2026", "LLP Form 8 late fee", "LLP Form 8 filing", "statement of account and solvency", "LLP Form 8 and Form 11", "LLP annual compliance", "LLP Form 8 audit limit", "small LLP late fee", "LLP Form 8 documents required", "LLP Form 8 extension", "LLP Form 8 filing Khatauli", "CA assisted LLP Form 8"],
  alternates: { canonical: URL },
  openGraph: {
    title: "LLP Form 8 (Statement of Account & Solvency): Due 30 Oct 2026 | Taxvio",
    description: "Countdown, late-fee calculator, audit checker and the step-by-step process for filing LLP Form 8.",
    url: URL,
    siteName: "Taxvio",
    locale: "en_IN",
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  twitter: { card: "summary_large_image", title: "LLP Form 8 (Statement of Account & Solvency): Due 30 Oct 2026 | Taxvio", description: "Countdown, late-fee calculator, audit checker and the step-by-step process for filing LLP Form 8." },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "LLP Form 8 Filing 2026: Due Date, Late Fee Calculator, Process & Documents",
      description: "LLP Form 8 for FY 2025-26 is due 30 October 2026. Live countdown, late-fee calculator, audit and small-LLP checker, step-by-step MCA filing and documents. Why the company circular 05/2026 does not cover LLPs.",
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      mainEntityOfPage: URL,
      inLanguage: "en-IN",
      author: { "@type": "Organization", name: "Taxvio", url: "https://www.taxvio.in" },
      publisher: { "@type": "Organization", name: "Taxvio", url: "https://www.taxvio.in" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
        { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.taxvio.in/guide" },
        { "@type": "ListItem", position: 3, name: "ROC", item: "https://www.taxvio.in/guide/roc" },
        { "@type": "ListItem", position: 4, name: "LLP Form 8", item: URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
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