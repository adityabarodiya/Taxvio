// app/serviceslist/gst/gst-for-freelancer/page.tsx

import type { Metadata } from "next";
import GstForFreelancerClient from "./GstForFreelancerClient";

const URL = "https://www.taxvio.in/serviceslist/gst/gst-for-freelancer";

export const metadata: Metadata = {
  title: "GST for Freelancers India — Registration, LUT, Returns & Foreign Client Billing | Taxvio",
  description:
    "GST registration, LUT for zero-rated foreign billing, SAC code setup, GSTR-1, GSTR-3B, ITC on business tools and RCM compliance for freelancers and independent professionals. CA-led, quote upfront.",
  keywords: [
    "GST for freelancers","GST registration for freelancers","GST for freelancers India","LUT for freelancers","GST on foreign client payments",
    "freelancer export of services GST","SAC code for freelancers","GST for software developers","GST for graphic designers","GST for consultants",
    "RCM on foreign subscriptions","QRMP scheme freelancers","GST for freelancers Khatauli","GST for freelancers Uttar Pradesh","CA assisted freelancer GST",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "GST for Freelancers & Independent Professionals | Taxvio",
    description: "Registration, LUT for foreign clients, SAC setup, returns, ITC and RCM — handled by a CA-led team.",
    url: URL, siteName: "Taxvio", locale: "en_IN", type: "website",
  },
  twitter: { card: "summary_large_image", title: "GST for Freelancers | Taxvio", description: "GST registration, LUT, returns and foreign client billing for freelancers." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

const FAQS = [
  { q: "Do freelancers need GST registration in India?", a: "A freelancer providing services generally must register when aggregate turnover crosses the prescribed threshold, commonly ₹20 lakh (₹10 lakh in some special category states). Some situations require registration irrespective of turnover, so our CA confirms your position." },
  { q: "Should I register for GST voluntarily as a freelancer?", a: "Many freelancers do. A GSTIN lets you claim input tax credit on tools and win business clients who need GST invoices, and it is often needed to file an LUT and to claim refunds on exports." },
  { q: "Is GST charged on services to foreign clients?", a: "Services supplied to a client outside India, where the conditions for export of services are met, are generally zero-rated. You can invoice without paying IGST if you have furnished an LUT, or pay IGST and claim a refund." },
  { q: "What conditions apply to export of services?", a: "Broadly, the supplier is in India, the recipient is outside India, the place of supply is outside India and payment is received in convertible foreign exchange (or permitted Indian rupees), and the supplier and recipient are not merely establishments of a distinct person. Our CA checks each condition for your case." },
  { q: "What is an LUT and why do freelancers need it?", a: "A Letter of Undertaking lets you export services without paying IGST. It is generally furnished for each financial year and should be in place before you issue your first zero-rated invoice. See our GST LUT filing page for details." },
  { q: "Which SAC code applies to my work?", a: "The service accounting code depends on the nature of your work, for example software development, design, consulting, writing or marketing. We map your services to the right code and tax rate and set up your invoice format." },
  { q: "Can I claim ITC on my laptop and software?", a: "Input tax credit is generally available on goods and services used for your business, subject to the eligibility conditions, valid invoices in your GSTIN name and the credit appearing in your GSTR-2B. We review each purchase." },
  { q: "What is reverse charge on foreign subscriptions?", a: "When you buy certain services from a foreign provider, the law may make you liable to pay the GST under reverse charge. We review your subscriptions and show how to account for them and, where eligible, claim the related credit." },
  { q: "What is the QRMP scheme and is it right for me?", a: "Eligible taxpayers can file returns quarterly while paying tax monthly. It reduces filing work for smaller freelancers but does not remove monthly payments. We advise on whether it suits your billing pattern." },
  { q: "Do I need to file returns if I had no income in a month?", a: "Yes. A registered taxpayer must file even when there is no business in the period, using a nil return, to avoid late fees." },
  { q: "What if I get a GST notice about my export invoices?", a: "We reconcile your invoices, receipts and returns, prepare a reasoned reply and coordinate with the department. See our GST audit assistance page for notice support." },
];

export default function GstForFreelancerPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "GST for Freelancers & Independent Professionals",
      serviceType: "GST for freelancers and independent professionals",
      description:
        "End-to-end GST setup for freelancers and independent professionals, including registration, LUT for foreign client billing, SAC code mapping, returns, ITC and RCM compliance.",
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
        { "@type": "ListItem", position: 4, name: "GST for Freelancers & Independent Professionals", item: URL },
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
      <GstForFreelancerClient faqs={FAQS} />
    </>
  );
}