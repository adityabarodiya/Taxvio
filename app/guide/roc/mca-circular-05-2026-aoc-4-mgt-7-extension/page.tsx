// app/guide/roc/mca-circular-05-2026-aoc-4-mgt-7-extension/page.tsx

import type { Metadata } from "next";
import Client from "./CircularExtensionClient";

const URL = "https://www.taxvio.in/guide/roc/mca-circular-05-2026-aoc-4-mgt-7-extension";
const PUBLISHED = "2026-10-25";
const MODIFIED = "2026-10-25";

const faqs: { q: string; a: string }[] = [
  {
    "q": "What is MCA General Circular 05/2026?",
    "a": "It is a circular dated 24 October 2026 issued by the Ministry of Corporate Affairs. It allows companies to file financial statements in the AOC-4 family of forms for FY 2025-26 up to 31 December 2026, and annual returns in MGT-7 and MGT-7A up to 31 January 2027, without paying additional fees."
  },
  {
    "q": "Is the AOC-4 due date now 31 December 2026 for every company?",
    "a": "31 December 2026 is the date up to which no additional fee is charged for AOC-4, AOC-4 CFS, AOC-4 XBRL, AOC-4 NBFC (Ind AS) and AOC-4 CFS NBFC (Ind AS) for FY 2025-26. Your normal AGM-based due date could be earlier, but the relief means no additional fee up to 31 December. Where your own AGM-based date is later, we read the later date as continuing to apply. Confirm with your CA."
  },
  {
    "q": "Does the circular extend the AGM deadline?",
    "a": "No. Paragraph 3 of the circular says it does not extend the statutory time for holding AGMs, and that companies which have not adhered to the relevant timelines remain liable under the Act. A missed AGM is a separate default."
  },
  {
    "q": "Is the normal filing fee also waived?",
    "a": "No. The circular relaxes additional fees only. The normal fee payable on the filing is still due, as are your professional charges."
  },
  {
    "q": "What happens if I file after 31 December 2026 (AOC-4) or 31 January 2027 (MGT-7)?",
    "a": "Paragraph 4 says such filings attract all fees, including additional fees, from the date when the filing was actually due under the Act. In other words, the fee is counted from the original due date, not from the extended date. Public references report the additional fee at ₹100 per day per form, but you should confirm the amount on the portal."
  },
  {
    "q": "Does the circular cover ADT-1, DIR-3 KYC, MSME-1 or DPT-3?",
    "a": "These forms are not named in the circular. Treat each as governed by its own rules and dates, and ask your CA before assuming any extension."
  },
  {
    "q": "Are LLPs covered by this circular?",
    "a": "The circular is issued under the Companies Act, 2013 and addresses companies. LLP forms such as Form 8 and Form 11 are governed by the LLP Act and are not covered."
  },
  {
    "q": "I already filed and paid additional fees. Can I get a refund?",
    "a": "The circular does not say anything about refunds, and the sources we reviewed do not either. Do not assume a refund. Ask your CA whether any route is available for your case."
  }
];

export const metadata: Metadata = {
  title: "MCA Circular 05/2026: AOC-4 Extended to 31 Dec 2026, MGT-7 to 31 Jan 2027 | Taxvio",
  description: "MCA General Circular 05/2026 explained: AOC-4 till 31 December 2026 and MGT-7/MGT-7A till 31 January 2027 without additional fees for FY 2025-26. What is covered, what is not, the AGM catch and what late filers pay.",
  keywords: ["MCA circular 05/2026", "AOC-4 due date extended", "MGT-7 due date extended 31 January 2027", "AOC-4 31 December 2026", "ROC annual filing extension FY 2025-26", "additional fee waiver ROC", "General Circular 05/2026", "AOC-4 XBRL due date", "MGT-7A due date", "ROC filing Muzaffarnagar", "annual ROC compliance Khatauli"],
  alternates: { canonical: URL },
  openGraph: {
    title: "MCA Extends AOC-4 to 31 Dec 2026 and MGT-7 to 31 Jan 2027 | Taxvio",
    description: "General Circular 05/2026 in plain English: new dates, what it covers, what it does not, and the fee trap after the window.",
    url: URL,
    siteName: "Taxvio",
    locale: "en_IN",
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  twitter: { card: "summary_large_image", title: "MCA Extends AOC-4 to 31 Dec 2026 and MGT-7 to 31 Jan 2027 | Taxvio", description: "General Circular 05/2026 in plain English: new dates, what it covers, what it does not, and the fee trap after the window." },
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
      headline: "MCA Circular 05/2026: AOC-4 Extended to 31 December 2026, MGT-7 to 31 January 2027",
      description: "MCA General Circular 05/2026 explained: AOC-4 till 31 December 2026 and MGT-7/MGT-7A till 31 January 2027 without additional fees for FY 2025-26. What is covered, what is not, the AGM catch and what late filers pay.",
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
        { "@type": "ListItem", position: 4, name: "MCA Circular 05/2026", item: URL },
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