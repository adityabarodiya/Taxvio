// app/serviceslist/gst/gst-for-e-commerce/page.tsx

import type { Metadata } from "next";
import GstForEcommerceClient from "./GstForEcommerceClient";

const URL = "https://www.taxvio.in/serviceslist/gst/gst-for-e-commerce";

export const metadata: Metadata = {
  title: "GST for E-Commerce Sellers & Operators — Amazon, Flipkart, Meesho | Taxvio",
  description:
    "GST registration, GSTR-1, GSTR-3B, GSTR-8, marketplace settlement reconciliation, TCS credit matching and GST notice support for Amazon, Flipkart, Meesho, Shopify and D2C sellers. CA-led, fixed quote upfront.",
  keywords: [
    "GST for e-commerce sellers","GST for Amazon sellers","GST for Flipkart sellers","GST for Meesho sellers","GST registration for e-commerce",
    "GST TCS credit e-commerce","Section 52 GST TCS","GSTR-8 filing","Section 9(5) GST Zomato Swiggy","marketplace settlement reconciliation",
    "GST for Shopify sellers","GST for D2C brands","GST e-commerce Khatauli","GST e-commerce Uttar Pradesh","CA assisted e-commerce GST",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: "GST for E-Commerce Sellers & Operators | Taxvio",
    description: "Registration, GSTR-1, GSTR-3B, GSTR-8, TCS credit matching and notice support for marketplace and D2C sellers.",
    url: URL, siteName: "Taxvio", locale: "en_IN", type: "website",
  },
  twitter: { card: "summary_large_image", title: "GST for E-Commerce Sellers | Taxvio", description: "Complete GST compliance for Amazon, Flipkart, Meesho, Shopify and D2C sellers." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

const FAQS = [
  { q: "Do I need GST registration to sell on Amazon, Flipkart or Meesho?", a: "Generally yes. Suppliers who sell through an e-commerce operator are required to register under GST, with limited exceptions for certain small intra-state suppliers of specified goods. Our CA confirms whether an exception applies to you." },
  { q: "What is TCS under GST?", a: "Tax collected at source (TCS) is an amount that the e-commerce operator collects from sellers on the net value of taxable supplies made through the platform and deposits with the government. The seller then claims it as credit in their electronic cash ledger." },
  { q: "How do I claim TCS credit?", a: "The credit appears in your electronic cash ledger once the operator files its GSTR-8 and the details are reflected against your GSTIN. We match your platform TCS statements with the portal each month so that you claim exactly what was deducted." },
  { q: "What is GSTR-8?", a: "GSTR-8 is the monthly statement filed by e-commerce operators that report the TCS collected from each seller. Sellers see the details as a credit and can reconcile them against settlement reports." },
  { q: "How should I report marketplace sales in GSTR-1?", a: "You report the taxable value of sales, with the correct place of supply, tax rate and HSN codes, and adjust for returns and cancellations. You do not report the payout credited to your bank, which is net of fees and TCS." },
  { q: "What is Section 9(5) and does it apply to me?", a: "Section 9(5) makes the e-commerce operator liable to pay GST on certain services supplied through it, such as restaurant services and passenger transport. If you are a restaurant on a food-delivery app, our team explains how it affects your invoicing and returns." },
  { q: "Do I need a GSTIN in every state where the marketplace stores my stock?", a: "Generally, stock held in a marketplace warehouse in another state needs to be reflected as an additional place of business in that state. We help you add and maintain these in your registration." },
  { q: "Are commission and shipping fees subject to GST?", a: "Yes. The marketplace charges GST on its commission, shipping and other fees, and you can generally claim input tax credit on them if they are properly invoiced to your GSTIN." },
  { q: "How do you handle returns and cancellations?", a: "We adjust returns and cancellations through credit notes or in the correct period so that your reported sales and tax reflect the final position." },
  { q: "Can you handle multiple platforms together?", a: "Yes. We combine Amazon, Flipkart, Meesho, Shopify, ONDC and other channels into one monthly reconciliation and one set of returns." },
  { q: "What if I get a GST notice on mismatches?", a: "We reconcile your sales, TCS and credit data, prepare a reasoned reply with working papers and coordinate with the department. See our GST audit assistance for notice support." },
];

export default function GstForEcommercePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "GST for E-Commerce Sellers & Operators",
      serviceType: "GST for e-commerce sellers and operators",
      description:
        "Complete GST compliance for Amazon, Flipkart, Meesho, Shopify and D2C sellers, including registration, marketplace reconciliation, TCS credit matching, GSTR-8 and notice support.",
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
        { "@type": "ListItem", position: 4, name: "GST for E-Commerce Sellers & Operators", item: URL },
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
      <GstForEcommerceClient faqs={FAQS} />
    </>
  );
}