// app/serviceslist/gst/gstr-9/page.tsx

import type { Metadata } from "next";
import GSTR9Client from "./GSTR9Client";

const URL = "https://www.taxvio.in/serviceslist/gst/gstr-9";

export const metadata: Metadata = {
  title: "GSTR-9 Filing Services — GST Annual Return & Reconciliation | Taxvio",
  description:
    "Accurate GSTR-9 GST annual return filing: annual data reconciliation, error identification and compliance verification by a CA-led team. Fixed quote upfront, pan-India online service.",
  keywords: [
    "GSTR-9 filing","GST annual return","GSTR-9 due date","GSTR-9 applicability","GSTR-9C reconciliation statement",
    "GSTR-9 late fee","GST annual return filing online","GSTR-9 for small taxpayers","GSTR-9 reconciliation with books",
    "GSTR-9 filing Khatauli","GSTR-9 filing Muzaffarnagar","GSTR-9 filing Uttar Pradesh","CA assisted GSTR-9 filing",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "GSTR-9 Filing — GST Annual Return | Taxvio",
    description: "Annual reconciliation, error identification and accurate GSTR-9 filing by a CA-led team.",
    url: URL, siteName: "Taxvio", locale: "en_IN", type: "website",
  },
  twitter: { card: "summary_large_image", title: "GSTR-9 Filing Services | Taxvio", description: "GST annual return filing with reconciliation and compliance review." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

const FAQS = [
  { q: "What is GSTR-9?", a: "GSTR-9 is the annual return for regular GST taxpayers. It consolidates the details of outward and inward supplies, tax paid and input tax credit that you reported through your monthly or quarterly returns during the financial year." },
  { q: "Who has to file GSTR-9?", a: "Regular taxpayers whose aggregate turnover is above the prescribed limit must file it. Smaller taxpayers have often been exempted or allowed to file optionally by notification, and composition taxpayers file a different annual return (GSTR-4). Our CA confirms your position for the year." },
  { q: "What is the due date for GSTR-9?", a: "Generally 31 December following the end of the financial year. The government has extended this in some years by notification, so we confirm the current date for you." },
  { q: "What is GSTR-9C and who needs it?", a: "GSTR-9C is a reconciliation statement between your audited financial statements and your annual return. Above a prescribed turnover it must be furnished along with GSTR-9, now generally as a self-certified statement. We check applicability each year." },
  { q: "What is the late fee for GSTR-9?", a: "A late fee accrues for every day of delay after the due date, subject to a cap linked to your turnover. The exact rate and cap are set by notification, and our team calculates the figure for your case." },
  { q: "Can I revise GSTR-9 after filing?", a: "No. Once filed, GSTR-9 generally cannot be revised, so the figures must be right the first time. This is why we reconcile and review before filing." },
  { q: "Why does GSTR-9 need reconciliation?", a: "Because it summarises the whole year, any mismatch between your books, your monthly returns and your credit statements becomes visible. Reconciling first lets you correct what can still be corrected and explain what cannot." },
  { q: "What if my books and returns do not match?", a: "Differences are common, for example from timing, missed invoices or credit notes. We identify each gap, explain it and tell you whether it needs a payment, a disclosure or just an explanation." },
  { q: "Do I have to file if I had no business during the year?", a: "If you are within the filing requirement, a nil annual return may still be needed, and it is often simple. Missing it can still attract a late fee, so check with us." },
  { q: "Which documents are needed?", a: "Your GST returns for the year, books of accounts, and sales and purchase data. Our checklist on this page lists what to share." },
  { q: "Can you also handle my notices or backlog years?", a: "Yes. We review earlier years, prepare any pending annual returns and guide you on regularising dues. Ask us for a combined quote." },
];

export default function GSTR9Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "GST Annual Return (GSTR-9)",
      serviceType: "GST annual return filing",
      description:
        "Preparation and filing of the GST annual return with reconciliation and compliance review.",
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
        { "@type": "ListItem", position: 4, name: "GST Annual Return (GSTR-9)", item: URL },
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
      <GSTR9Client faqs={FAQS} />
    </>
  );
}