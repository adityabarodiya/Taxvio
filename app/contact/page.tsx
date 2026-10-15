// Place this file at: app/contact/page.tsx

import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Taxvio | Talk to Our GST, Income Tax & ROC Experts",
  description:
    "Get in touch with Taxvio for GST registration, income tax filing, ROC compliance and FSSAI licensing. Fill our quick enquiry form or reach us on WhatsApp — a CA-led team responds within hours. Serving Khatauli, Muzaffarnagar and pan-India.",
  keywords: [
    "contact Taxvio",
    "GST consultant contact",
    "tax consultant near me",
    "CA contact Khatauli",
    "CA contact Muzaffarnagar",
    "GST registration enquiry",
    "income tax filing enquiry",
    "ROC compliance contact",
    "FSSAI license enquiry",
    "free tax consultation India",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/contact",
  },
  openGraph: {
    title: "Contact Taxvio | GST, Income Tax & ROC Experts",
    description:
      "Reach Taxvio's CA-led team for GST, Income Tax, ROC and FSSAI compliance. Fill the enquiry form or chat on WhatsApp for a quick response.",
    url: "https://www.taxvio.in/contact",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Taxvio — GST, Income Tax, ROC & FSSAI Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Taxvio | GST, Income Tax & ROC Experts",
    description:
      "Reach Taxvio's CA-led team for GST, Income Tax, ROC and FSSAI compliance. Quick response on WhatsApp or via our enquiry form.",
    images: ["https://www.taxvio.in/og/contact.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function ContactPage() {
  return <ContactClient />;
}