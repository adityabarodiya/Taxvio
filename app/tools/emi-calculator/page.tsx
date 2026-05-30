// app/tools/emi-calculator/page.tsx
import type { Metadata } from "next";
import EMICalculatorClient from "./Client";

export const metadata: Metadata = {
  title: "EMI Calculator 2024-25 – Home, Car & Personal Loan EMI | Taxvio",
  description:
    "Use Taxvio's free EMI Calculator to instantly calculate your monthly EMI for Home Loan, Car Loan, and Personal Loan. Get full amortization schedule, total interest breakdown & principal split. 100% free & accurate.",
  keywords: [
    "EMI calculator",
    "home loan EMI calculator",
    "car loan EMI calculator",
    "personal loan EMI calculator",
    "loan EMI calculator India",
    "monthly installment calculator",
    "loan repayment calculator",
    "amortization schedule India",
    "taxvio EMI calculator",
  ],
  openGraph: {
    title: "Free EMI Calculator – Home, Car & Personal Loan | Taxvio",
    description:
      "Calculate your loan EMI instantly with Taxvio's advanced EMI Calculator. Full amortization schedule, interest breakdown & principal split.",
    url: "https://taxvio.in/tools/emi-calculator",
    siteName: "Taxvio",
    type: "website",
  },
  alternates: {
    canonical: "https://taxvio.in/tools/emi-calculator",
  },
};

export default function EMICalculatorPage() {
  return <EMICalculatorClient />;
}