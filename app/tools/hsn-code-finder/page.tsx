// app/tools/hsn-code-finder/page.tsx
import type { Metadata } from "next";
import HSNClient from "./client";

export const metadata: Metadata = {
  title: "HSN Code List & GST Rate Finder 2024-25 — Search 500+ HSN / SAC Codes | Taxvio",
  description:
    "Search and find HSN codes, SAC codes and GST rates for your goods and services. Complete HSN code list with GST rates 0%, 5%, 12%, 18%, 28% — updated for FY 2024-25. Free & instant.",
  keywords: [
    "HSN code list",
    "SAC code GST rate",
    "HSN code finder India",
    "GST rate finder",
    "HSN code search",
    "SAC code list",
    "GST HSN lookup",
    "find GST rate by product",
    "GST rate on goods and services",
    "HSN code India 2024",
    "taxvio HSN code finder",
  ],
  openGraph: {
    title: "HSN Code & GST Rate Finder — Search 500+ Codes | Taxvio",
    description:
      "Find HSN codes and GST rates for any goods or services. Complete chapter-wise list with 0%, 5%, 12%, 18%, 28% GST rates — updated FY 2024-25.",
    url: "https://taxvio.in/tools/hsn-code-finder",
    siteName: "Taxvio",
    type: "website",
  },
  alternates: {
    canonical: "https://taxvio.in/tools/hsn-code-finder",
  },
};

export default function HSNCodeFinderPage() {
  return <HSNClient />;
}