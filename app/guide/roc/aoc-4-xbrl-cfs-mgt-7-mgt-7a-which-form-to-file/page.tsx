// app/guide/roc/aoc-4-xbrl-cfs-mgt-7-mgt-7a-which-form-to-file/page.tsx

import type { Metadata } from "next";
import Client from "./WhichFormClient";

const URL = "https://www.taxvio.in/guide/roc/aoc-4-xbrl-cfs-mgt-7-mgt-7a-which-form-to-file";
const PUBLISHED = "2026-10-25";
const MODIFIED = "2026-10-25";

const faqs: { q: string; a: string }[] = [
  {
    "q": "Which forms does MCA General Circular 05/2026 cover?",
    "a": "AOC-4, AOC-4 (CFS), AOC-4 (XBRL), AOC-4 NBFC (Ind AS) and AOC-4 CFS NBFC (Ind AS) have a fee-free window up to 31 December 2026. MGT-7 and MGT-7A have one up to 31 January 2027. Both apply to FY 2025-26."
  },
  {
    "q": "Who has to file AOC-4 in XBRL?",
    "a": "As public references summarise it: listed companies and their Indian subsidiaries, companies with paid-up capital of ₹5 crore or more or turnover of ₹100 crore or more, and companies following Ind AS. Confirm with your CS or CA, as the rules can change."
  },
  {
    "q": "What is AOC-4 CFS?",
    "a": "It is the filing of consolidated financial statements for a company with subsidiaries, associates or joint ventures. It is separate from the standalone AOC-4."
  },
  {
    "q": "What is the difference between MGT-7 and MGT-7A?",
    "a": "MGT-7A is the shorter annual return for One Person Companies and small companies. Other companies file MGT-7. The classification follows the Companies Act definition and the limits currently in force."
  },
  {
    "q": "Can a small company choose MGT-7 instead of MGT-7A?",
    "a": "The form follows classification. A company that qualifies as small is expected to use MGT-7A. Check the current limits with your CS before filing."
  },
  {
    "q": "Does an NBFC file the ordinary AOC-4?",
    "a": "An NBFC that follows Ind AS files the NBFC (Ind AS) variants. For one that does not, public references suggest the standard AOC-4. Confirm with your CA."
  },
  {
    "q": "Do the two windows apply to every company?",
    "a": "They apply to FY 2025-26 filings of the named forms. If your own AGM-based due date is later than the window, check which date is later and file by that one."
  },
  {
    "q": "What happens if I file the wrong variant?",
    "a": "The filing can be rejected or have to be redone. If that happens after the window has closed, fees are counted from the original due date, so confirm the form first."
  }
];

export const metadata: Metadata = {
  title: "AOC-4, AOC-4 XBRL, CFS, MGT-7 or MGT-7A: Which Form Must You File for FY 2025-26? | Taxvio",
  description: "Seven forms are covered by MCA General Circular 05/2026. Use our form finder to see whether you file AOC-4, AOC-4 XBRL, AOC-4 CFS, an NBFC variant, MGT-7 or MGT-7A, with documents and a pre-filing checklist.",
  keywords: ["AOC-4 XBRL applicability", "AOC-4 CFS", "MGT-7 vs MGT-7A", "which ROC form to file", "AOC-4 NBFC Ind AS", "annual filing forms FY 2025-26", "MCA circular 05/2026 forms", "ROC filing for small company", "annual ROC compliance Khatauli", "CA for ROC filing Muzaffarnagar"],
  alternates: { canonical: URL },
  openGraph: {
    title: "Which ROC Annual Form Do You File? AOC-4, XBRL, CFS, MGT-7 or MGT-7A | Taxvio",
    description: "A short form finder, XBRL rules, documents and a checklist for FY 2025-26 annual ROC filings.",
    url: URL,
    siteName: "Taxvio",
    locale: "en_IN",
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  twitter: { card: "summary_large_image", title: "Which ROC Annual Form Do You File? AOC-4, XBRL, CFS, MGT-7 or MGT-7A | Taxvio", description: "A short form finder, XBRL rules, documents and a checklist for FY 2025-26 annual ROC filings." },
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
      headline: "AOC-4, AOC-4 XBRL, CFS, MGT-7 or MGT-7A: Which Form Must You File for FY 2025-26?",
      description: "Seven forms are covered by MCA General Circular 05/2026. Use our form finder to see whether you file AOC-4, AOC-4 XBRL, AOC-4 CFS, an NBFC variant, MGT-7 or MGT-7A, with documents and a pre-filing checklist.",
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
        { "@type": "ListItem", position: 4, name: "Which ROC form to file", item: URL },
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