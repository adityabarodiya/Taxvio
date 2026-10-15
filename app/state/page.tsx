// app/state/page.tsx
import type { Metadata } from "next";
import Footar from "@/components/Footar";
import Link from "next/link";
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton";

/* ── METADATA (server component — exported directly) ── */
export const metadata: Metadata = {
  title: "Tax & Compliance Services by State | Taxvio",
  description:
    "GST, Income Tax, ROC/MCA, and FSSAI compliance services in every Indian state and union territory — 100% online, CA-assisted, and available wherever your business is registered.",
  keywords: [
    "tax services by state India",
    "GST registration by state",
    "company registration by state India",
    "state wise compliance services",
    "Taxvio states covered",
    "CA services across India",
  ],
  alternates: {
    canonical: "https://www.taxvio.in/state",
  },
  openGraph: {
    title: "Tax & Compliance Services by State | Taxvio",
    description:
      "GST, Income Tax, ROC/MCA, and FSSAI compliance services in every Indian state and union territory — 100% online and CA-assisted.",
    url: "https://www.taxvio.in/state",
    siteName: "Taxvio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.taxvio.in/og/state.jpg",
        width: 1200,
        height: 630,
        alt: "Taxvio Services Across Indian States",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax & Compliance Services by State | Taxvio",
    description:
      "GST, Income Tax, ROC/MCA, and FSSAI compliance services in every Indian state and union territory.",
    images: ["https://www.taxvio.in/og/state.jpg"],
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

/* ── DATA ── */
type StateGroup = {
  region: string;
  states: string[];
};

const STATE_GROUPS: StateGroup[] = [
  {
    region: "North India",
    states: [
      "Punjab",
      "Haryana",
      "Himachal Pradesh",
      "Uttarakhand",
      "Uttar Pradesh",
      "Delhi",
      "Jammu & Kashmir",
      "Ladakh",
      "Chandigarh",
    ],
  },
  {
    region: "South India",
    states: [
      "Andhra Pradesh",
      "Karnataka",
      "Kerala",
      "Tamil Nadu",
      "Telangana",
      "Puducherry",
      "Lakshadweep",
    ],
  },
  {
    region: "West India",
    states: [
      "Gujarat",
      "Maharashtra",
      "Goa",
      "Rajasthan",
      "Dadra & Nagar Haveli",
      "Daman & Diu",
    ],
  },
  {
    region: "East India",
    states: ["Bihar", "Jharkhand", "Odisha", "West Bengal"],
  },
  {
    region: "Central India",
    states: ["Madhya Pradesh", "Chhattisgarh"],
  },
  {
    region: "North-East India",
    states: [
      "Assam",
      "Arunachal Pradesh",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Sikkim",
      "Tripura",
    ],
  },
  {
    region: "Islands",
    states: ["Andaman & Nicobar Islands"],
  },
];

const TOTAL_STATES = STATE_GROUPS.reduce(
  (sum, g) => sum + g.states.length,
  0
);

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* ── JSON-LD ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tax & Compliance Services by State",
  description:
    "GST, Income Tax, ROC/MCA, and FSSAI compliance services offered by Taxvio across every Indian state and union territory.",
  url: "https://www.taxvio.in/state",
  hasPart: STATE_GROUPS.flatMap((g) =>
    g.states.map((s) => ({
      "@type": "WebPage",
      name: `Taxvio Services in ${s}`,
      url: `https://www.taxvio.in/state/${slugify(s)}`,
    }))
  ),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you provide services in every state of India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Taxvio delivers every service remotely, so wherever your business is registered in India — from a metro city to a smaller town — we can handle your GST, Income Tax, ROC/MCA, or FSSAI compliance without needing a local office visit.",
      },
    },
    {
      "@type": "Question",
      name: "Is there any additional charge for pan-India service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our pricing does not vary by state or city — you get the same transparent, upfront quote and the same level of support regardless of where your business is located.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function StatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <InquiryFormButton />
      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* ── HERO ── */}
        <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10" />
          <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />

          <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
            <nav className="mb-6 text-sm text-white/60 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">States We Serve</span>
            </nav>

            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              🗺️ Pan-India Coverage
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">
              Tax & Compliance Services
              <br />
              <span className="text-[#7ecbf0]">In Every Indian State</span>
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
              Taxvio delivers{" "}
              <strong className="text-white">
                GST, Income Tax, ROC/MCA, and FSSAI
              </strong>{" "}
              compliance services{" "}
              <strong className="text-white">
                100% online, across all {TOTAL_STATES} states and union
                territories
              </strong>
              . Wherever your business is registered, our CA and CS team is
              ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/serviceslist"
                className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
              >
                Explore Our Services →
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-gray-50 py-14 border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: `${TOTAL_STATES}`, label: "States & UTs Covered", icon: "🗺️" },
              { number: "100%", label: "Remote Service", icon: "💻" },
              { number: "4", label: "Compliance Categories", icon: "🗂️" },
              { number: "Same-Day", label: "Response on WhatsApp", icon: "💬" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className="text-2xl font-extrabold text-[#00416a] mb-1">
                  {s.number}
                </p>
                <p className="text-gray-500 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-20">
          {/* STATE DIRECTORY */}
          <section id="states">
            <SectionLabel text="Browse by Location" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Select Your State or Union Territory
            </h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Every state page covers the compliance essentials relevant to
              businesses registered there — tap any state below to get
              started.
            </p>

            <div className="space-y-10">
              {STATE_GROUPS.map((group) => (
                <div key={group.region}>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#00416a]/70 mb-4 border-b border-gray-100 pb-2">
                    {group.region}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {group.states.map((state) => (
                      <Link
                        key={state}
                        href={`/state/${slugify(state)}`}
                        className="bg-gray-50 border rounded-xl px-4 py-3 text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white hover:border-[#00416a] transition text-center"
                      >
                        📍 {state}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* WHY TAXVIO */}
          <section id="why-taxvio">
            <SectionLabel text="Why Choose Taxvio" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Compliance Support Wherever You're Registered
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "💻",
                  title: "No Local Office Needed",
                  desc: "Every filing happens online — documents, review, and submission — regardless of your state.",
                },
                {
                  icon: "💰",
                  title: "Same Pricing, Everywhere",
                  desc: "Our packages don't change based on your location — one transparent price, pan-India.",
                },
                {
                  icon: "👩‍💼",
                  title: "CA & CS Backed",
                  desc: "Every filing is reviewed by qualified professionals familiar with state-specific nuances.",
                },
                {
                  icon: "💬",
                  title: "Fast WhatsApp Support",
                  desc: "Reach our team directly on WhatsApp, wherever you are, without waiting in a queue.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 border rounded-2xl p-6 text-center hover:border-[#00416a]/40 transition"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ (native details/summary — no client JS required) */}
          <section id="faq">
            <SectionLabel text="FAQs" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "Do you provide services in every state of India?",
                  a: "Yes. Taxvio delivers every service remotely, so wherever your business is registered in India — from a metro city to a smaller town — we can handle your GST, Income Tax, ROC/MCA, or FSSAI compliance without needing a local office visit.",
                },
                {
                  q: "Is there any additional charge for pan-India service?",
                  a: "No. Our pricing does not vary by state or city — you get the same transparent, upfront quote and the same level of support regardless of where your business is located.",
                },
                {
                  q: "Do state-specific compliance rules apply to my business?",
                  a: "Some compliances do have state-specific elements — for example, Professional Tax, Shops & Establishment registration, and certain FSSAI or GST procedural details can vary by state. Our team factors these in when preparing your filing.",
                },
                {
                  q: "How do I find services relevant to my state?",
                  a: "Select your state from the directory above, or simply browse our full services list and reach out — we'll confirm anything state-specific as part of your consultation.",
                },
              ].map((f, i) => (
                <details
                  key={i}
                  className="group border rounded-2xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
                    <span>{f.q}</span>
                    <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-4">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* FINAL CTA */}
          <section id="cta">
            <div className="bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] rounded-3xl shadow-2xl px-8 py-14 md:px-14 md:py-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="max-w-2xl text-center lg:text-left">
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
                    Wherever You Are, We're Here
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Get Started From Any State in India
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Share your requirement and our team will confirm the
                    right service, documentation, and timeline for your
                    state.
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-auto flex-shrink-0">
                  
                  <Link
                    href="/contact"
                    className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>

        <Footar />
      </main>
    </>
  );
}

/* ─── SHARED ─── */
function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}