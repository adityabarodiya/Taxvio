// app/serviceslist/gst/gstr-10-final-return/page.tsx

import type { Metadata } from "next";
import GSTRTenFinalReturnClient from "./GSTRTenFinalReturnClient";

const URL = "https://www.taxvio.in/serviceslist/gst/gstr-10-final-return";

export const metadata: Metadata = {
  title: "GSTR-10 Final Return Filing Services — After GST Cancellation | Taxvio",
  description:
    "File your mandatory GSTR-10 final return after GST cancellation with accurate closing stock valuation, ITC reversal computation and liability reconciliation. CA-led, quote upfront, pan-India online service.",
  keywords: [
    "GSTR-10","GSTR-10 final return","GSTR-10 filing","GSTR-10 due date","GSTR-10 late fee","final return after GST cancellation",
    "ITC reversal on cancellation of GST registration","GST cancellation closing stock","GST cancellation capital goods reversal",
    "GSTR-10 filing Khatauli","GSTR-10 filing Muzaffarnagar","GSTR-10 Uttar Pradesh","CA assisted GSTR-10",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "GSTR-10 Final Return Filing | Taxvio",
    description: "Closing stock valuation, ITC reversal and accurate GSTR-10 filing after GST cancellation by a CA-led team.",
    url: URL, siteName: "Taxvio", locale: "en_IN", type: "website",
  },
  twitter: { card: "summary_large_image", title: "GSTR-10 Final Return Filing | Taxvio", description: "File your GST final return correctly after cancellation." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

const FAQS = [
  { q: "What is GSTR-10?", a: "GSTR-10 is the final return that a taxpayer must file after their GST registration is cancelled or surrendered. It reports stock and capital goods held on the date of cancellation, the input tax credit to be reversed on them and any tax payable." },
  { q: "Who has to file GSTR-10?", a: "Generally regular taxpayers whose registration is cancelled, whether at their own request or by the department. Persons such as tax deductors, collectors, input service distributors and non-resident taxable persons are generally exempt. Our CA confirms your case." },
  { q: "What is the due date for GSTR-10?", a: "Generally within three months of the date of cancellation or the date of the cancellation order, whichever is later. Extensions may be notified from time to time, so we confirm the current position." },
  { q: "What is the late fee for GSTR-10?", a: "A late fee accrues for every day of delay after the due date, subject to a cap. Filing the final return late also keeps your account open, so it is best to file at the earliest." },
  { q: "Is GSTR-10 required if I had no stock?", a: "Yes, the final return is still generally required, even if there is no stock or capital goods to report. In that case it is simpler, but it must still be filed." },
  { q: "How is the ITC reversal on stock calculated?", a: "In general, credit on inputs, semi-finished and finished goods held in stock must be reversed, and the amount payable is the higher of the credit taken and the tax on the market value. Our team computes this item by item." },
  { q: "How are capital goods treated?", a: "For capital goods, the credit is reduced by a prescribed percentage for each quarter of use, and the higher of the reduced credit and the tax on the market value is generally payable." },
  { q: "Do I need to file pending returns before GSTR-10?", a: "Yes. All regular returns up to the date of cancellation generally need to be filed before the final return. We review your history and clear what is pending." },
  { q: "What documents do you need?", a: "Your GSTIN, the cancellation order, closing stock and capital goods details, books of accounts and filed returns. Our checklist on this page lists what to share." },
  { q: "Can I file GSTR-10 myself?", a: "You can, but the stock valuation and ITC reversal are where errors happen. A mistake can lead to a demand with interest, so many taxpayers use a CA." },
  { q: "Can a cancelled registration be revived?", a: "In some cases, where cancellation was by the department, revocation can be applied for within the time allowed. Talk to our team before filing the final return if you are considering this." },
];

export default function GSTRTenFinalReturnPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "GSTR-10 Final Return Filing",
      serviceType: "GSTR-10 final return filing",
      description:
        "Filing of the mandatory final return after GST cancellation, including stock and liability reconciliation to close compliance obligations.",
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
        { "@type": "ListItem", position: 4, name: "GSTR-10 Final Return Filing", item: URL },
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
      <GSTRTenFinalReturnClient faqs={FAQS} />
    </>
  );
}