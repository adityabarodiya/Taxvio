import Script from "next/script";
import Link from "next/link";
import Footar from "@/components/Footar";

export const metadata = {
  title: "GST E-Invoicing Setup & Compliance Services | IRN Generation | Taxvio",
  description:
    "GST E-Invoicing setup and compliance services in India. IRN generation, QR code compliance, API integration and expert advisory for businesses.",
};

export default function GSTEInvoicingPage() {
  return (
    <>
      {/* FAQ Schema */}
      <Script
        id="gst-einvoice-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is GST E-Invoicing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GST E-Invoicing is a system where B2B invoices are authenticated electronically by the GST portal and assigned an Invoice Reference Number (IRN).",
                },
              },
              {
                "@type": "Question",
                name: "Who is required to generate E-Invoice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Businesses crossing the prescribed turnover limit notified by GST authorities must generate e-invoices for B2B transactions.",
                },
              },
            ],
          }),
        }}
      />

      <main className="bg-gray-50 text-[#002b45]">

        {/* HERO */}
        <section className="bg-gradient-to-b from-[#00416a] to-[#002b45] text-white py-28 text-center">
          <div className="max-w-5xl mx-auto px-6 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              GST E-Invoicing Setup & Compliance Services
            </h1>
            <p className="text-lg text-gray-200">
              Complete E-Invoicing registration, IRN generation setup,
              QR code compliance and API integration support across India.
            </p>

            {/* Trust Badges */}
            <div className="flex justify-center flex-wrap gap-4 mt-6">
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ IRN & QR Code Compliance
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ ERP/API Integration Support
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Expert GST Consultants
              </span>
            </div>

            <Link
              href="/contact"
              className="inline-block mt-6 bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-200"
            >
              Setup GST E-Invoicing
            </Link>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="max-w-6xl mx-auto px-6 py-12 text-center">
          <p className="text-lg">
            Need GST Registration?{" "}
            <Link
              href="/serviceslist/gst/gst-registration"
              className="text-[#00416a] font-semibold underline"
            >
              Register here
            </Link>{" "}
            | File GST Returns?{" "}
            <Link
              href="/serviceslist/gst/gst-return"
              className="text-[#00416a] font-semibold underline"
            >
              File GST Returns
            </Link>{" "}
            | Annual Return?{" "}
            <Link
              href="/serviceslist/gst/gstr-9"
              className="text-[#00416a] font-semibold underline"
            >
              File GSTR-9
            </Link>
          </p>
        </section>

        {/* CONTENT */}
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-10">

          <h2 className="text-3xl font-bold">
            What is GST E-Invoicing?
          </h2>

          <p className="text-lg leading-relaxed">
            GST E-Invoicing is a system introduced by the Government of India
            where specified taxpayers must generate electronic invoices for
            B2B transactions through the Invoice Registration Portal (IRP).
            Each invoice is authenticated and assigned a unique Invoice
            Reference Number (IRN) along with a QR code.
          </p>

          <p className="text-lg leading-relaxed">
            The objective of GST E-Invoicing is to reduce tax evasion,
            improve compliance transparency, and ensure real-time reporting
            of business transactions under GST.
          </p>

          <h2 className="text-3xl font-bold">
            Applicability of E-Invoicing
          </h2>

          <p className="text-lg leading-relaxed">
            E-Invoicing applies to businesses crossing the turnover threshold
            prescribed by GST authorities. The turnover limit has been revised
            gradually and businesses exceeding the notified aggregate turnover
            must comply with e-invoice generation for B2B supplies.
          </p>

          <h2 className="text-3xl font-bold">
            What is IRN (Invoice Reference Number)?
          </h2>

          <p className="text-lg leading-relaxed">
            IRN is a unique 64-character number generated by the GST portal
            after successful validation of invoice details. Without IRN and
            QR code, an invoice is considered invalid for GST purposes under
            applicable turnover categories.
          </p>

        </section>

        {/* Workflow Visual Chart */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">
              GST E-Invoice Workflow
            </h2>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <div className="font-bold text-[#00416a] text-xl">1</div>
                <p className="mt-2 text-sm">Invoice Generated in ERP</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <div className="font-bold text-[#00416a] text-xl">2</div>
                <p className="mt-2 text-sm">Upload to IRP Portal</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <div className="font-bold text-[#00416a] text-xl">3</div>
                <p className="mt-2 text-sm">IRN Generated</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <div className="font-bold text-[#00416a] text-xl">4</div>
                <p className="mt-2 text-sm">QR Code Added</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <div className="font-bold text-green-600 text-xl">5</div>
                <p className="mt-2 text-sm">Auto Reported in GSTR-1</p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Risks */}
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-8">
          <h2 className="text-3xl font-bold">
            Penalty for Non-Compliance
          </h2>

          <p className="text-lg leading-relaxed">
            Failure to generate e-invoice where applicable may lead to penalty
            of ₹10,000 per invoice or 100% of tax amount, whichever is higher.
            Non-compliant invoices may be treated as invalid.
          </p>

          <h2 className="text-3xl font-bold">
            Why Choose Taxvio for E-Invoicing Setup?
          </h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Complete E-Invoicing registration support</li>
            <li>ERP/API integration advisory</li>
            <li>IRN & QR code validation assistance</li>
            <li>Ongoing compliance monitoring</li>
            <li>Pan India professional support</li>
          </ul>

          <p className="text-lg leading-relaxed">
            Our experts ensure seamless transition to GST E-Invoicing with
            minimal disruption to your business operations.
          </p>
        </section>

        <Footar />

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#00416a] text-white py-4 text-center shadow-lg">
          <Link
            href="/contact"
            className="bg-white text-[#00416a] px-6 py-2 rounded-lg font-semibold"
          >
            Start GST E-Invoicing Setup
          </Link>
        </div>

      </main>
    </>
  );
}
