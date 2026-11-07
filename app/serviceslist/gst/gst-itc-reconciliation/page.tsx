// app/serviceslist/gst/gst-itc-reconciliation/page.tsx

import type { Metadata } from "next";
import GSTITCReconciliationClient from "./GSTITCReconciliationClient";

const URL = "https://www.taxvio.in/serviceslist/gst/gst-itc-reconciliation";

export const metadata: Metadata = {
  title: "GST ITC Reconciliation Services — GSTR-2B vs Books Matching | Taxvio",
  description:
    "Accurate GSTR-2B vs purchase books reconciliation to maximise eligible input tax credit and avoid GST notices. Vendor-wise mismatch reports, eligibility review and monthly ITC matching by a CA-led team.",
  keywords: [
    "GST ITC reconciliation","GSTR-2B reconciliation","GSTR-2B vs purchase register","ITC mismatch GST","input tax credit reconciliation",
    "ITC reversal and reclaim","GST ITC mismatch notice","vendor wise ITC mismatch","monthly ITC reconciliation services",
    "ITC reconciliation Khatauli","ITC reconciliation Muzaffarnagar","ITC reconciliation Uttar Pradesh","CA assisted ITC reconciliation",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "GST ITC Reconciliation Services | Taxvio",
    description: "GSTR-2B vs books matching, vendor-wise mismatches and monthly reports to maximise eligible ITC and avoid notices.",
    url: URL, siteName: "Taxvio", locale: "en_IN", type: "website",
  },
  twitter: { card: "summary_large_image", title: "GST ITC Reconciliation Services | Taxvio", description: "Maximise eligible input tax credit and avoid GST notices with monthly ITC matching." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

const FAQS = [
  { q: "What is GST ITC reconciliation?", a: "ITC reconciliation is the process of matching the input tax credit in your purchase books with the credit shown in your auto-drafted statement, GSTR-2B, to see what is available, what you have claimed and where they differ." },
  { q: "What is GSTR-2B?", a: "GSTR-2B is a static, auto-drafted statement of input tax credit generated for each month from the returns filed by your suppliers. It is the main reference for the credit you can claim in your GSTR-3B." },
  { q: "Can I claim ITC that is not shown in GSTR-2B?", a: "Generally credit is available only where the invoice is reported by the supplier and appears in GSTR-2B, along with the other conditions of the law. Claiming credit not appearing there can lead to reversal, interest and notices, so check with our CA first." },
  { q: "Why does my ITC not match GSTR-2B?", a: "Common causes are suppliers who have not filed, invoices reported in a different period, wrong GSTIN or invoice details, credit notes, blocked credits and reverse charge items. Our reconciliation identifies the exact cause for each invoice." },
  { q: "What happens if I claim excess ITC?", a: "Excess or ineligible credit may have to be reversed with interest, and repeated or large differences can lead to notices and penalties. Reconciling before filing avoids this." },
  { q: "What if my supplier has not filed?", a: "You can follow up with the supplier. Where the invoice later appears, credit can generally be claimed in that period, subject to the time limits. We track vendor-wise status so you know whom to chase." },
  { q: "Which purchases are not eligible for ITC?", a: "The law blocks credit on certain categories, for example some items used for personal consumption and specified goods and services. Our team applies the eligibility rules to your purchases and flags them." },
  { q: "How often should I reconcile ITC?", a: "Monthly, before you file GSTR-3B, is the best practice. Reconciling only at year-end makes errors harder to fix and may run into time limits." },
  { q: "Can you reconcile earlier periods?", a: "Yes. We can reconcile backlog months or whole years, identify what was claimed wrongly or not claimed and advise on corrections, subject to the time limits." },
  { q: "What documents do you need?", a: "Your GSTIN, purchase register and invoices, GSTR-2B statements and books of accounts. We can download GSTR-2B and related statements from the portal with your authorisation." },
  { q: "Can you help with a notice about ITC mismatch?", a: "Yes. We prepare the reconciliation and a reasoned reply, and coordinate with the department. See our GST audit assistance for notice support." },
];

export default function GSTITCReconciliationPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "GST ITC Reconciliation",
      serviceType: "GST ITC reconciliation",
      description:
        "Systematic reconciliation of GSTR-2B and purchase books to identify ITC mismatches, ensure maximum eligible credit claim and prevent notices.",
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
        { "@type": "ListItem", position: 4, name: "GST ITC Reconciliation", item: URL },
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
      <GSTITCReconciliationClient faqs={FAQS} />
    </>
  );
}