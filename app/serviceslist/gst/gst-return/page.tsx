// app/serviceslist/gst/gst-return/page.tsx

import type { Metadata } from "next";
import GSTReturnClient from "./GSTReturnClient";

const URL = "https://www.taxvio.in/serviceslist/gst/gst-return";

export const metadata: Metadata = {
  title: "GST Return Filing Services — GSTR-1, GSTR-3B & Reconciliation | Taxvio",
  description:
    "Accurate monthly and quarterly GST return filing: GSTR-1, GSTR-3B, invoice reconciliation, late fee and interest guidance and compliance monitoring. CA-reviewed, fixed quote upfront, pan-India online service.",
  keywords: [
    "GST return filing",
    "GST return filing online",
    "GSTR-1 filing",
    "GSTR-3B filing",
    "GST return due dates",
    "GST late fee and interest",
    "GST reconciliation GSTR-2B",
    "monthly GST return filing services",
    "quarterly GST return QRMP",
    "nil GST return filing",
    "GST return filing for small business",
    "GST compliance services",
    "GST return filing Khatauli",
    "GST return filing Muzaffarnagar",
    "GST return filing Uttar Pradesh",
    "CA assisted GST return filing",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "GST Return Filing — GSTR-1, GSTR-3B & Reconciliation | Taxvio",
    description:
      "Never miss a GST deadline. CA-reviewed monthly and quarterly returns with invoice reconciliation and compliance monitoring.",
    url: URL,
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Return Filing Services | Taxvio",
    description: "GSTR-1, GSTR-3B, reconciliation and late fee guidance — handled by a CA-led team.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

const FAQS = [
  { q: "What is GST return filing?", a: "GST return filing is the periodic reporting of your sales, purchases, tax collected and input tax credit on the GST portal. Every registered taxpayer must file returns on time, and the main ones for regular taxpayers are GSTR-1 (outward supplies) and GSTR-3B (summary return and tax payment)." },
  { q: "What is the difference between GSTR-1 and GSTR-3B?", a: "GSTR-1 reports the details of your outward supplies, invoice by invoice, and feeds your customers' purchase records. GSTR-3B is a summary return in which you declare your total tax liability and input tax credit and pay the tax. Both are needed for a regular taxpayer in each period." },
  { q: "What are the due dates for GSTR-1 and GSTR-3B?", a: "For monthly filers, GSTR-1 is generally due on the 11th of the following month and GSTR-3B on the 20th. Taxpayers under the quarterly (QRMP) scheme have different due dates. Dates can change by notification, so our team confirms the current dates for your registration." },
  { q: "Do I have to file a return if I had no sales?", a: "Yes. A registered taxpayer must file even when there is no business in the period, using a nil return. Skipping a nil return can still attract a late fee and may block future filings, so it should never be ignored." },
  { q: "What is the late fee for GST returns?", a: "A late fee accrues for every day of delay after the due date, at a lower rate for nil returns, subject to caps that depend on the return and your turnover. Interest is also charged on any tax paid late. Use the estimator on this page for an indication; our CA confirms the exact figure." },
  { q: "What happens if I stop filing GST returns?", a: "Persistent non-filing can lead to notices, blocking of e-way bill generation, restrictions on filing GSTR-1 and, eventually, cancellation of registration by the department. Pending dues and returns still have to be cleared, so it is better to regularise early." },
  { q: "What is invoice reconciliation and why does it matter?", a: "Reconciliation compares your purchase records with the auto-drafted statement of input tax credit (GSTR-2B) so that you claim only the credit that is actually available. It protects you from claiming ineligible credit and from later notices and interest." },
  { q: "Can I change from monthly to quarterly filing?", a: "Eligible taxpayers can opt for the quarterly return scheme with monthly payment of tax (QRMP), which reduces the number of return filings. Eligibility depends on turnover and on opting through the portal, and our team can advise whether it suits you." },
  { q: "I have missed several months. Can you file the backlog?", a: "Yes. We review your portal status, prepare all pending returns in the right order, calculate the late fee and interest and tell you the total before we begin. Clearing the backlog early also limits further late fee and avoids cancellation proceedings." },
  { q: "Which documents do you need every period?", a: "Your sales invoices, purchase invoices, credit and debit notes, expense bills with GST, and bank statements. If you use accounting software we can work from its exports. Our checklist on this page lists what to share." },
  { q: "Can I correct a mistake in a return I already filed?", a: "Corrections are possible through amendment tables in later returns and subsequent periods, subject to the time limits in the law. A GSTR-3B generally cannot be revised once filed, so the figures must be right the first time, which is why we review before filing." },
];

export default function GSTReturnPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "GST Return Filing",
      serviceType: "GST return filing and compliance",
      description:
        "Monthly and quarterly GST return filing with reconciliation and compliance checks, including GSTR-1 and GSTR-3B.",
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
        { "@type": "ListItem", position: 3, name: "GST Services", item: "https://www.taxvio.in/serviceslist#gst" },
        { "@type": "ListItem", position: 4, name: "GST Return Filing", item: URL },
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
      <GSTReturnClient faqs={FAQS} />
    </>
  );
}