// app/guide/roc/agm-not-held-by-30-september-2026-roc-consequences/page.tsx

import type { Metadata } from "next";
import Client from "./AGMDefaultClient";

const URL = "https://www.taxvio.in/guide/roc/agm-not-held-by-30-september-2026-roc-consequences";
const PUBLISHED = "2026-10-25";
const MODIFIED = "2026-10-25";

const faqs: { q: string; a: string }[] = [
  {
    "q": "Did the MCA circular extend the AGM date for FY 2025-26?",
    "a": "No. Paragraph 3 of General Circular 05/2026 states that it does not extend the statutory time for holding AGMs and that companies which have not adhered to the timelines remain liable under the Act. The AGM deadline for a 31 March 2026 year end was 30 September 2026."
  },
  {
    "q": "What is the penalty for not holding an AGM on time?",
    "a": "As reported by public references, the company and every officer in default may be fined up to ₹1,00,000, with a further fine of up to ₹5,000 for each day of continuing default. These amounts should be verified against the Act, and the actual outcome depends on the facts and the process followed."
  },
  {
    "q": "Can the Registrar extend the AGM deadline?",
    "a": "The Registrar may extend the time for holding an AGM, other than the first AGM, by up to three months for a special reason. The company has to apply before the deadline and obtain an order. An application alone is not an extension."
  },
  {
    "q": "Is a One Person Company required to hold an AGM?",
    "a": "As generally understood, the AGM requirement does not apply to a One Person Company. An OPC still has its own annual filings, so check them with your CS."
  },
  {
    "q": "What is the 15-month rule?",
    "a": "The gap between two consecutive AGMs must not be more than 15 months. Alongside the six-month limit from the end of the financial year, the earlier of the two limits is the one that applies to you."
  },
  {
    "q": "If my AGM is late, when are AOC-4 and MGT-7 due?",
    "a": "The statutory dates are counted from the AGM: AOC-4 within 30 days and MGT-7 within 60 days. The circular relaxes additional fees up to 31 December 2026 for AOC-4 and 31 January 2027 for MGT-7. Where your AGM-based date is later, our reading is that the later date applies. Confirm with your CA."
  },
  {
    "q": "Does the circular protect me from the AGM penalty?",
    "a": "No. The relief is for additional fees on filings. A missed AGM remains a separate default under the Act."
  },
  {
    "q": "What should I do first if the AGM has not been held?",
    "a": "Fix a date, issue a valid notice, get the accounts audited and signed, hold the meeting and adopt the accounts. Prepare the filings in parallel and ask your CS about the right approach to the delay."
  }
];

export const metadata: Metadata = {
  title: "AGM Not Held by 30 September 2026? Penalty, Registrar Rules & Recovery Plan | Taxvio",
  description: "General Circular 05/2026 did not extend AGM timelines. What Section 96 and Section 99 say, the 15-month gap rule, how a late AGM moves AOC-4 and MGT-7 dates, and a six-step plan to close the default.",
  keywords: ["AGM not held by 30 September 2026", "AGM default penalty Section 99", "Section 96 AGM time limit", "late AGM consequences", "AGM 15 month gap rule", "AGM extension Registrar three months", "circular 05/2026 AGM not extended", "AOC-4 after late AGM", "company AGM Muzaffarnagar", "ROC compliance CA Khatauli"],
  alternates: { canonical: URL },
  openGraph: {
    title: "AGM Missed 30 September 2026? Penalty & Recovery Plan | Taxvio",
    description: "The MCA circular extended filings, not the AGM. What a missed AGM can cost and how to fix it.",
    url: URL,
    siteName: "Taxvio",
    locale: "en_IN",
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  twitter: { card: "summary_large_image", title: "AGM Missed 30 September 2026? Penalty & Recovery Plan | Taxvio", description: "The MCA circular extended filings, not the AGM. What a missed AGM can cost and how to fix it." },
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
      headline: "AGM Not Held by 30 September 2026? Penalty, Registrar Rules and Recovery Plan",
      description: "General Circular 05/2026 did not extend AGM timelines. What Section 96 and Section 99 say, the 15-month gap rule, how a late AGM moves AOC-4 and MGT-7 dates, and a six-step plan to close the default.",
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
        { "@type": "ListItem", position: 4, name: "AGM not held by 30 September 2026", item: URL },
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