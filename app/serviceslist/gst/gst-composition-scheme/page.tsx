// app/serviceslist/gst/gst-composition-scheme/page.tsx
import type { Metadata } from "next";
import GSTCompositionSchemeClient from "./GSTCompositionSchemeClient";

export const metadata: Metadata = {
  title: "GST Composition Scheme Registration | CMP-02, CMP-08, GSTR-4 Filing | Taxvio",
  description:
    "Expert GST Composition Scheme registration and compliance services. Pay 1%, 5%, or 6% GST on turnover, file quarterly CMP-08, annual GSTR-4. Eligibility check, CMP-02 filing, migration support. Ideal for small traders, manufacturers, restaurants with turnover under ₹1.5 crore. Starting ₹2,999. Serving Khatauli, Muzaffarnagar & pan-India.",
  keywords: [
    "GST composition scheme India",
    "composition scheme registration",
    "CMP-02 filing",
    "CMP-08 quarterly return",
    "GSTR-4 annual return",
    "1% GST for traders",
    "5% GST for restaurants",
    "composition scheme eligibility",
    "turnover limit 1.5 crore",
    "quarterly GST filing",
    "composition vs regular GST",
    "ITC reversal composition",
    "composition scheme Delhi",
    "composition scheme Mumbai",
    "small business GST",
    "simplified GST compliance",
    "composition taxable person",
    "bill of supply GST",
    "composition scheme withdrawal",
    "GST composition advisory",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/gst/gst-composition-scheme",
  },
  openGraph: {
    title: "GST Composition Scheme Registration | Quarterly CMP-08 Filing | Taxvio",
    description:
      "Register under GST Composition Scheme — pay 1% GST, file quarterly. Complete CMP-02, CMP-08, GSTR-4 support. Starting ₹2,999.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-composition-scheme",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-composition-scheme.jpg",
        width: 1200,
        height: 630,
        alt: "GST Composition Scheme Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Composition Scheme Registration | 1% Tax | Taxvio",
    description:
      "Expert composition scheme registration — CMP-02, quarterly CMP-08, annual GSTR-4. Starting ₹2,999.",
    images: ["https://www.taxvio.in/og/gst-composition-scheme.jpg"],
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

export default function GSTCompositionSchemePage() {
  return <GSTCompositionSchemeClient />;
}