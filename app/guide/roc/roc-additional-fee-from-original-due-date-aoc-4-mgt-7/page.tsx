// app/guide/roc/roc-additional-fee-from-original-due-date-aoc-4-mgt-7/page.tsx

import type { Metadata } from "next";
import Client from "./AdditionalFeeCliffClient";

const URL = "https://www.taxvio.in/guide/roc/roc-additional-fee-from-original-due-date-aoc-4-mgt-7";
const PUBLISHED = "2026-10-25";
const MODIFIED = "2026-10-25";

const faqs: { q: string; a: string }[] = [
  {
    "q": "Why would one day late cost so much after the extension?",
    "a": "Paragraph 4 of the circular says filings after the relief period attract all fees, including additional fees, from the date they were actually due under the Act. The extension is a pause on the fee meter. Once it ends, the fee is counted from the original due date."
  },
  {
    "q": "What is the additional fee rate for AOC-4 and MGT-7?",
    "a": "Public references report ₹100 per day per form with no cap, applicable since 1 July 2018. Confirm the current rate on the MCA portal for your form before relying on the figure."
  },
  {
    "q": "Is the fee charged per form or per company?",
    "a": "Per form, as the references describe it. A company late on both AOC-4 and MGT-7 would have two separate counts. A group of companies multiplies the exposure."
  },
  {
    "q": "What is the original due date for AOC-4 and MGT-7?",
    "a": "Generally 30 days from the AGM for the financial statements (AOC-4) and 60 days from the AGM for the annual return (MGT-7 or MGT-7A). For a 30 September 2026 AGM, that is 30 October and 29 November 2026."
  },
  {
    "q": "If my AGM is in December, does the circular still help?",
    "a": "If your own AGM-based due date is later than the relief date, our reading is that the later date applies and the circular adds nothing extra. Check your exact dates with your CA."
  },
  {
    "q": "Does the extension waive the normal filing fee?",
    "a": "No. The relief covers additional fees only. The normal filing fee remains payable."
  },
  {
    "q": "Can I get the additional fee waived later if I miss the window?",
    "a": "The circular provides no further relief. If you have special circumstances, speak to a CS or CA about the options, but do not plan on a later waiver."
  },
  {
    "q": "How early should I file?",
    "a": "We suggest planning to file about two weeks before the last fee-free day. This leaves time for a rejection, a signature problem or a portal slowdown."
  }
];

export const metadata: Metadata = {
  title: "ROC Late Fee After the Extension: Why Filing 1 Day Late Can Cost 63 Days of Fees | Taxvio",
  description: "Circular 05/2026 charges additional fees from the original due date if you miss 31 Dec 2026 (AOC-4) or 31 Jan 2027 (MGT-7). Fee calculator with a cliff chart, worked examples, myths and a backwards planner.",
  keywords: ["ROC late fee calculator", "AOC-4 late fee 2026", "MGT-7 additional fee", "additional fee from original due date", "circular 05/2026 paragraph 4", "AOC-4 31 December 2026 late fee", "ROC additional fee Rs 100 per day", "MCA late filing fee calculator", "annual filing CA Muzaffarnagar", "ROC compliance Khatauli"],
  alternates: { canonical: URL },
  openGraph: {
    title: "ROC Late Fee Cliff: 1 Day Late, 63 Days of Fees | Taxvio",
    description: "After the extension, the late-fee meter runs from the original due date. Try the calculator.",
    url: URL,
    siteName: "Taxvio",
    locale: "en_IN",
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  twitter: { card: "summary_large_image", title: "ROC Late Fee Cliff: 1 Day Late, 63 Days of Fees | Taxvio", description: "After the extension, the late-fee meter runs from the original due date. Try the calculator." },
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
      headline: "ROC Late Fee After the Extension: Why Filing One Day Late Can Cost 63 Days of Fees",
      description: "Circular 05/2026 charges additional fees from the original due date if you miss 31 Dec 2026 (AOC-4) or 31 Jan 2027 (MGT-7). Fee calculator with a cliff chart, worked examples, myths and a backwards planner.",
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
        { "@type": "ListItem", position: 4, name: "ROC additional fee from original due date", item: URL },
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