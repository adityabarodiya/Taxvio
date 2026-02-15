import Script from "next/script";
import Link from "next/link";
import Footar from "@/components/Footar";

export const metadata = {
  title: "GST Services in India | GST Registration, Return, Audit & Compliance | Taxvio",
  description:
    "Complete GST services including registration, return filing, GSTR-9, refund, audit, LUT, notice reply, amendment and e-invoicing support across India.",
};

export default function GSTMainPage() {
  return (
    <>
      {/* FAQ Schema */}
      <Script
        id="gst-main-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What GST services does Taxvio provide?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Taxvio provides GST registration, return filing, GSTR-9, refund, audit assistance, notice reply, LUT filing, amendment and e-invoicing setup services.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide GST services across India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Taxvio provides pan India GST compliance and advisory services.",
                },
              },
            ],
          }),
        }}
      />

      <main className="bg-gray-50 text-[#002b45]">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-b from-[#00416a] to-[#002b45] text-white py-28 text-center">
          <div className="max-w-6xl mx-auto px-6 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Complete GST Services & Compliance Solutions
            </h1>
            <p className="text-lg text-gray-200">
              Professional GST registration, return filing, audit assistance,
              refund processing, e-invoicing setup and full compliance support
              across India.
            </p>

            {/* Trust Badges */}
            <div className="flex justify-center flex-wrap gap-4 mt-6">
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ End-to-End GST Compliance
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Expert GST Professionals
              </span>
              <span className="bg-white text-[#00416a] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ✔ Pan India Support
              </span>
            </div>

            <Link
              href="/contact"
              className="inline-block mt-6 bg-white text-[#00416a] px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-200"
            >
              Get GST Consultation
            </Link>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our GST Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Registration */}
            <ServiceCard 
              title="GST Registration"
              link="/serviceslist/gst/gst-registration"
              desc="New GST registration for businesses, startups and professionals."
            />

            <ServiceCard 
              title="GST Return Filing"
              link="/serviceslist/gst/gst-return"
              desc="Monthly & quarterly GST return filing including GSTR-1 & GSTR-3B."
            />

            <ServiceCard 
              title="GSTR-9 Annual Return"
              link="/serviceslist/gst/gstr-9"
              desc="Comprehensive annual reconciliation and GSTR-9 filing."
            />

            <ServiceCard 
              title="GST Refund"
              link="/serviceslist/gst/gst-refund"
              desc="Export refund, ITC refund and excess GST payment claims."
            />

            <ServiceCard 
              title="GST Audit Assistance"
              link="/serviceslist/gst/gst-audit"
              desc="Departmental audit handling and reconciliation support."
            />

            <ServiceCard 
              title="GST Notice Reply"
              link="/serviceslist/gst/gst-notice-reply"
              desc="Professional drafting and response to GST notices."
            />

            <ServiceCard 
              title="GST Amendment"
              link="/serviceslist/gst/gst-amendment"
              desc="Update GST registration details including address and bank."
            />

            <ServiceCard 
              title="GST Cancellation"
              link="/serviceslist/gst/gst-cancellation"
              desc="Voluntary cancellation and revocation support."
            />

            <ServiceCard 
              title="GST LUT Filing"
              link="/serviceslist/gst/gst-lut"
              desc="Export without IGST payment via LUT filing."
            />

            <ServiceCard 
              title="GST E-Invoicing"
              link="/serviceslist/gst/gst-e-invoicing"
              desc="IRN generation, QR code compliance and ERP integration."
            />

          </div>
        </section>

        {/* SEO AUTHORITY CONTENT */}
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-8">

          <h2 className="text-3xl font-bold">
            Comprehensive GST Compliance & Advisory
          </h2>

          <p className="text-lg leading-relaxed">
            Goods and Services Tax (GST) compliance is essential for businesses
            operating in India. From registration to return filing, refund
            claims, audits and notice handling, businesses must ensure accurate
            reporting and timely submission of returns.
          </p>

          <p className="text-lg leading-relaxed">
            Taxvio provides end-to-end GST compliance services for startups,
            MSMEs, traders, exporters and enterprises. Our structured approach
            ensures reduced compliance risk and smooth business operations.
          </p>

          <h3 className="text-2xl font-semibold">
            Why Choose Taxvio for GST Services?
          </h3>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Expert GST advisory & compliance monitoring</li>
            <li>Accurate return filing & reconciliation</li>
            <li>Audit preparedness & representation</li>
            <li>Notice drafting & legal support</li>
            <li>Affordable and transparent pricing</li>
          </ul>

        </section>

        <Footar />

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#00416a] text-white py-4 text-center shadow-lg">
          <Link
            href="/contact"
            className="bg-white text-[#00416a] px-6 py-2 rounded-lg font-semibold"
          >
            Start Your GST Compliance Today
          </Link>
        </div>

      </main>
    </>
  );
}

/* Service Card Component */
function ServiceCard({ title, desc, link }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>
      <Link
        href={link}
        className="text-[#00416a] font-semibold underline"
      >
        Learn More →
      </Link>
    </div>
  );
}
