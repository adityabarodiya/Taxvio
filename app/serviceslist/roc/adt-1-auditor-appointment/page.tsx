// app/serviceslist/roc/adt-1-auditor-appointment/page.tsx
import type { Metadata } from "next";
import Adt1AuditorAppointmentClient from "./Adt1AuditorAppointmentClient";

export const metadata: Metadata = {
  title: "ADT-1 Auditor Appointment Filing FY 2025-26 | Taxvio",
  description:
    "File ADT-1 for statutory auditor appointment or reappointment for FY 2025-26. Complete MCA filing with auditor consent, eligibility certificate, Board/AGM resolution support. Starting ₹2,999. Serving Khatauli, Muzaffarnagar, Meerut, Noida & pan-India.",
  keywords: [
    "ADT-1 filing",
    "statutory auditor appointment",
    "auditor reappointment FY 2025-26",
    "Form ADT-1 MCA",
    "auditor consent letter",
    "auditor eligibility certificate",
    "companies act section 139",
    "first auditor appointment",
    "auditor rotation rules",
    "ADT-1 filing Muzaffarnagar",
    "ADT-1 filing Meerut",
    "ADT-1 filing Noida",
    "ADT-1 filing Delhi NCR",
    "CA for auditor appointment",
    "CS for ADT-1 filing",
    "annual auditor appointment compliance",
  ],
  alternates: {
    canonical:
      "https://www.taxvio.in/serviceslist/roc/adt-1-auditor-appointment",
  },
  openGraph: {
    title: "ADT-1 Auditor Appointment Filing FY 2025-26 | Taxvio",
    description:
      "File ADT-1 for statutory auditor appointment/reappointment. Auditor consent, eligibility certificate, Board resolution support. ₹2,999 onwards.",
    url: "https://www.taxvio.in/serviceslist/roc/adt-1-auditor-appointment",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/adt-1-auditor-appointment.jpg",
        width: 1200,
        height: 630,
        alt: "ADT-1 Statutory Auditor Appointment Filing Service — Taxvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADT-1 Auditor Appointment Filing FY 2025-26 | Taxvio",
    description:
      "File ADT-1 for auditor appointment/reappointment. Complete MCA filing support. 2-3 days. ₹2,999+.",
    images: ["https://www.taxvio.in/og/adt-1-auditor-appointment.jpg"],
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

export default function Adt1AuditorAppointmentPage() {
  return <Adt1AuditorAppointmentClient />;
}