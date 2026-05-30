// app/tools/gst-calculator/page.tsx
import type { Metadata } from "next";
import GSTClient from "./client";

export const metadata: Metadata = {
  title: "GST Calculator 2024-25 – Add & Remove GST Online | Taxvio",
  description:
    "Use Taxvio's free GST Calculator to instantly add GST to a price or remove (extract) GST from an inclusive amount. Get CGST, SGST & IGST breakdowns for all GST slabs — 5%, 12%, 18%, 28%. Multi-item invoice calculator included. 100% free & accurate.",
  keywords: [
    "GST calculator",
    "GST calculator India",
    "add GST calculator",
    "remove GST calculator",
    "reverse GST calculator",
    "CGST SGST calculator",
    "IGST calculator",
    "GST inclusive exclusive calculator",
    "GST rate calculator 2024",
    "taxvio GST calculator",
  ],
  openGraph: {
    title: "Free GST Calculator — Add, Remove & Multi-Item GST | Taxvio",
    description:
      "Calculate GST instantly — add GST to price, extract GST from inclusive amount, CGST/SGST/IGST split, multi-item invoice builder. FY 2024-25 updated.",
    url: "https://taxvio.in/tools/gst-calculator",
    siteName: "Taxvio",
    type: "website",
  },
  alternates: { canonical: "https://taxvio.in/tools/gst-calculator" },
};

export default function GSTCalculatorPage() {
  return <GSTClient />;
}