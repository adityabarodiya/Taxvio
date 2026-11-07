// app/serviceslist/roc/annual-roc-compliance/page.tsx

import type { Metadata } from "next";
import AnnualROCClient from "./AnnualROCClient";

const URL = "https://www.taxvio.in/serviceslist/roc/annual-roc-compliance";

export const metadata: Metadata = {
  title: "Annual ROC Compliance 2026: AOC-4 till 31 Dec, MGT-7 till 31 Jan, LLP Form 8 | Taxvio",
  description:
    "Annual ROC filing for companies and LLPs, updated for MCA Circular 05/2026: AOC-4 up to 31 Dec 2026, MGT-7 up to 31 Jan 2027 without additional fees, LLP Form 8 due 30 Oct 2026. CA-reviewed, due-date tracking, fixed quote. Pan-India online.",
  keywords: [
    "annual ROC compliance",
    "MCA circular 05/2026",
    "AOC-4 due date 31 December 2026",
    "MGT-7 due date 31 January 2027",
    "LLP Form 8 due date 2026",
    "annual ROC filing",
    "AOC-4 filing",
    "MGT-7 filing",
    "LLP Form 11 and Form 8 filing",
    "ROC annual return filing online",
    "annual compliance private limited company",
    "annual compliance LLP",
    "ROC late filing fees",
    "ROC annual filing due dates",
    "DIR-3 KYC filing",
    "ADT-1 filing",
    "company strike off for non filing",
    "annual ROC compliance Khatauli",
    "annual ROC compliance Muzaffarnagar",
    "CA assisted ROC compliance",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "Annual ROC Compliance 2026: New AOC-4 and MGT-7 Dates | Taxvio",
    description:
      "AOC-4 till 31 Dec 2026, MGT-7 till 31 Jan 2027, LLP Form 8 on 30 Oct 2026. CA-reviewed annual filings with due-date tracking and a fixed upfront quote.",
    url: URL,
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Annual ROC Compliance Services | Taxvio",
    description: "AOC-4, MGT-7, LLP Form 11 & 8 and DIR-3 KYC — filed on time by a CA-led team.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

const FAQS = [
  { q: "What is annual ROC compliance?", a: "Annual ROC compliance is the set of yearly filings that every registered company and LLP must make with the Registrar of Companies, mainly the financial statements and the annual return. For companies these are AOC-4 and MGT-7; for LLPs they are Form 8 and Form 11." },
  { q: "Is annual ROC filing mandatory even if there was no business?", a: "Yes. These filings are due every year whether or not the company or LLP had any turnover, and late fees accrue for every day of delay. A dormant entity must still file." },
  { q: "What are the due dates for AOC-4 and MGT-7?", a: "For most companies, AOC-4 is due within 30 days of the AGM and MGT-7 within 60 days of the AGM, with the AGM due within six months of the financial year-end. For FY 2025-26, MCA General Circular 05/2026 (24 October 2026) allows AOC-4 and its variants up to 31 December 2026 and MGT-7 and MGT-7A up to 31 January 2027 without additional fees. Our team confirms the exact dates for your company." },
  { q: "What is MCA General Circular 05/2026?", a: "It is a circular dated 24 October 2026 that relaxes additional fees for FY 2025-26 filings of AOC-4, AOC-4 (CFS), AOC-4 (XBRL), AOC-4 NBFC (Ind AS), AOC-4 CFS NBFC (Ind AS), MGT-7 and MGT-7A. It does not extend the AGM deadline, and filings after the window attract fees from the date they were actually due." },
  { q: "What happens if I file AOC-4 or MGT-7 after the circular window?", a: "The circular says later filings attract all fees, including additional fees, from the date the filing was actually due under the Act. So filing one day after the window can mean fees counted from the original due date. File well before 31 December 2026 for AOC-4 and 31 January 2027 for MGT-7." },
  { q: "What are the due dates for LLP Form 11 and Form 8?", a: "For an LLP with a 31 March year-end, Form 11 (annual return) is generally due within 60 days of year-end, around 30 May, and Form 8 (statement of account and solvency) within 30 days of the end of six months, which is 30 October 2026 for FY 2025-26. The company circular does not name LLPs, and we are not aware of any extension for Form 8." },
  { q: "What is the penalty for filing late?", a: "Late filing attracts additional fees and officers in default can face penalties. For companies, public references report an additional fee of ₹100 per day per form with no cap. For LLPs the additional fee is a slab multiple of the normal fee that rises with the delay, with lower multiples for small LLPs. Confirm the current rates on the MCA portal." },
  { q: "What happens if I never file?", a: "Continued non-filing can lead to the Registrar striking the company or LLP off the register and, for companies, disqualification of directors for a period. Restoring a struck-off entity is far more expensive than filing on time." },
  { q: "Which documents do I need for annual filing?", a: "At minimum, the balance sheet and profit & loss account, along with the auditor's report, director details and AGM information for companies, or partner and solvency details for LLPs. We give you a precise checklist after a short review." },
  { q: "Does Taxvio also handle the audit and the income tax return?", a: "We can coordinate the statutory audit and file the income tax return so that your ROC financials and tax filings stay consistent. Ask us for a combined quote." },
  { q: "My company missed previous years. Can you catch up the backlog?", a: "Yes. We review your filing history, prepare all pending years and tell you the additional fees before we start. Where eligible, a scheme or a strike-off or revival route may also be considered." },
  { q: "What is DIR-3 KYC and is it part of annual compliance?", a: "DIR-3 KYC is the annual identity verification every director holding a DIN must complete. Missing it can lead to the DIN being deactivated and a fee to reactivate it, so we include it in our annual compliance calendar." },
];

export default function AnnualROCCompliancePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Annual ROC Compliance",
      serviceType: "Company & LLP annual compliance",
      description:
        "Filing of annual ROC returns and compliance documents for companies and LLPs, including AOC-4, MGT-7, LLP Form 11 and Form 8.",
      url: URL,
      areaServed: { "@type": "Country", name: "India" },
      provider: {
        "@type": "ProfessionalService",
        name: "Taxvio",
        url: "https://www.taxvio.in",
        address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.taxvio.in/serviceslist" },
        { "@type": "ListItem", position: 3, name: "ROC / Company Law", item: "https://www.taxvio.in/serviceslist#roc" },
        { "@type": "ListItem", position: 4, name: "Annual ROC Compliance", item: URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      {jsonLd.map((j, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
      ))}
      <AnnualROCClient faqs={FAQS} />
    </>
  );
}