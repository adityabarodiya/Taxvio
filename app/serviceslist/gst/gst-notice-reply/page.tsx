import type { Metadata } from "next";
import GSTNoticeReplyClient from "./GSTNoticeReplyClient";

export const metadata: Metadata = {
  title: "GST Notice Reply India 2025 — ASMT-10, DRC-01, REG-17, SCN Reply | Taxvio",
  description:
    "CA-assisted GST notice reply services — ASMT-10 (ASMT-11), DRC-01 demand notice, REG-17 cancellation SCN (REG-18), DRC-01A pre-SCN, Show Cause Notice reply with legal drafting, ITC reconciliation and personal hearing representation. Starting ₹1,999. Pan India.",
  keywords: [
    "GST notice reply India",
    "ASMT-10 notice reply",
    "ASMT-11 reply GST",
    "DRC-01 demand notice reply GST",
    "REG-17 show cause notice reply",
    "REG-18 GST reply",
    "GST show cause notice reply",
    "DRC-01A pre SCN reply GST",
    "GST notice legal drafting India",
    "GST notice personal hearing",
    "GST ITC mismatch notice reply",
    "GSTR-1 GSTR-3B mismatch notice",
    "GST demand notice Section 73 74",
    "GST scrutiny notice reply",
    "CMP-05 composition scheme notice",
    "GST notice reply Muzaffarnagar",
    "GST notice reply Uttar Pradesh",
    "CA assisted GST notice India",
    "GST notice ex-parte order prevention",
    "GST notice deadline reply service",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/serviceslist/gst/gst-notice-reply",
  },
  openGraph: {
    title: "GST Notice Reply India — ASMT-10, DRC-01, REG-17, SCN | Taxvio",
    description:
      "Professional GST notice reply — ASMT-10, DRC-01, REG-17, DRC-01A, SCN. Legal drafting, ITC reconciliation, personal hearing. Starting ₹1,999. CA-assisted, pan India.",
    url: "https://www.taxvio.in/serviceslist/gst/gst-notice-reply",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/gst-notice-reply.jpg",
        width: 1200,
        height: 630,
        alt: "GST Notice Reply India — ASMT-10 DRC-01 REG-17 SCN — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Notice Reply India — ASMT-10, DRC-01, SCN | Taxvio",
    description:
      "CA-assisted GST notice reply — ASMT-10, DRC-01, REG-17, SCN. Legal drafting + personal hearing. Starting ₹1,999.",
    images: ["https://www.taxvio.in/og/gst-notice-reply.jpg"],
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

export default function GSTNoticeReplyPage() {
  return <GSTNoticeReplyClient />;
}