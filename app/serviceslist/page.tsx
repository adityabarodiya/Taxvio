// app/serviceslist/page.tsx  — SERVER COMPONENT
// metadata lives here; interactive logic is in ServicesClient.tsx

import ServicesClient from "./Servicesclient";

export const metadata = {
  title: "All Services | Taxvio — GST, Income Tax & Company Registration",
  description:
    "Explore 40+ GST, Income Tax and ROC compliance services offered by Taxvio. Professional tax and business compliance solutions for individuals and businesses across India.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}