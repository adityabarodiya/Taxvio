// app/serviceslist/roc/llp-closure/page.tsx
import type { Metadata } from "next";
import LlpClosureClient from "./LlpClosureClient";

export const metadata: Metadata = {
  title: "LLP Closure & Strike Off Services | Taxvio",
  description:
    "Close your inactive LLP legally with expert Form 24 filing and MCA strike-off support. Partner consent documentation, pending return clearance, NIL statement certification, and closure confirmation follow-up. Starting ₹5,999. Serving Khatauli, Muzaffarnagar, Meerut, Noida & pan-India.",
  keywords: [
    "LLP closure India",
    "LLP strike off Form 24",
    "close inactive LLP",
    "LLP winding up and dissolution rules",
    "Form 24 LLP filing",
    "defunct LLP strike off",
    "LLP deregistration MCA",
    "NIL statement of accounts LLP",
    "LLP closure Muzaffarnagar",
    "LLP closure Meerut",
    "LLP closure Noida",
    "LLP closure Delhi NCR",
    "pending Form 8 Form 11 LLP",
    "LLP closure penalty avoidance",
    "CA for LLP closure",
    "CS for LLP strike off",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/roc/llp-closure",
  },
  openGraph: {
    title: "LLP Closure & Strike Off Services | Taxvio",
    description:
      "Close your inactive LLP legally with Form 24 filing. Partner consent, pending return clearance, NIL statement certification. ₹5,999 onwards.",
    url: "https://www.taxvio.in/serviceslist/roc/llp-closure",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/llp-closure.jpg",
        width: 1200,
        height: 630,
        alt: "LLP Closure & Strike Off Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LLP Closure & Strike Off Services | Taxvio",
    description:
      "Close your inactive LLP with Form 24 filing. NIL statement, partner consent, MCA strike-off. 3-4 months. ₹5,999+.",
    images: ["https://www.taxvio.in/og/llp-closure.jpg"],
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

export default function LlpClosurePage() {
  return <LlpClosureClient />;
}