import type { Metadata } from "next";
import GSTAuditClient from "./GSTAuditClient";

export const metadata: Metadata = {
  title: "GST Audit Assistance India 2025 — Section 65 & 66 Support | Taxvio",
  description:
    "Expert CA assistance for GST departmental audit (Section 65), special audit (Section 66), ASMT-10 scrutiny reply, ITC reconciliation, demand dispute and personal hearing representation. Starting ₹3,999. Serving Muzaffarnagar, Uttar Pradesh & pan-India.",
  keywords: [
    "GST audit assistance India",
    "GST departmental audit Section 65",
    "GST special audit Section 66",
    "GST audit notice reply",
    "ASMT-10 notice reply GST",
    "GST ITC reconciliation audit",
    "GST audit CA representation",
    "GST demand notice reply",
    "GST show cause notice SCN reply",
    "GST audit documents required",
    "GST audit personal hearing",
    "GST audit risk assessment",
    "GST ADT-01 notice response",
    "GST Section 73 Section 74 demand",
    "GST audit GSTR-9 reconciliation",
    "GST audit Muzaffarnagar",
    "GST audit Uttar Pradesh",
    "GST audit Khatauli",
    "CA assisted GST audit India",
    "GST compliance audit support",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-audit",
  },
  openGraph: {
    title: "GST Audit Assistance India — Section 65 & 66 Support | Taxvio",
    description:
      "Professional GST audit help — Section 65 departmental audit, Section 66 special audit, ITC reconciliation, demand defence, personal hearing. Starting ₹3,999. CA-assisted, pan India.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-audit",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-audit.jpg",
        width: 1200,
        height: 630,
        alt: "GST Audit Assistance India — Section 65 66 Support — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Audit Assistance India — Section 65 & 66 | Taxvio",
    description:
      "CA-assisted GST audit support — Section 65, 66, ITC reconciliation, demand reply. Starting ₹3,999.",
    images: ["https://www.taxvio.in/og/gst-audit.jpg"],
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

export default function GSTAuditPage() {
  return <GSTAuditClient />;
}