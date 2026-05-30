// app/tools/gst-search/page.tsx
import type { Metadata } from "next";
import GSTSearchClient from "./client";

export const metadata: Metadata = {
  title: "GST Number Search — Verify GSTIN Instantly Free | Taxvio",
  description:
    "Search and verify any GST Identification Number (GSTIN) instantly. Get live business name, registration status, taxpayer type, address and filing history from GSTN. Free GSTIN verification tool — FY 2024-25.",
  keywords: [
    "GST number search",
    "GSTIN verification",
    "verify GSTIN",
    "GST number check",
    "GST registration search",
    "GSTIN search India",
    "check GST number",
    "GST taxpayer search",
    "GSTIN validator",
    "taxvio GST search",
  ],
  openGraph: {
    title: "Free GST Number Search — Verify Any GSTIN Instantly | Taxvio",
    description:
      "Verify any GSTIN instantly. Get business name, GST status, taxpayer type, address and compliance details live from GSTN. 100% free — no login required.",
    url: "https://taxvio.in/tools/gst-search",
    siteName: "Taxvio",
    type: "website",
  },
  alternates: { canonical: "https://taxvio.in/tools/gst-search" },
};

export default function GSTSearchPage() {
  return <GSTSearchClient />;
}