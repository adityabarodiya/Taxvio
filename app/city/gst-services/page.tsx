// app/city/gst-services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { indiaStates } from "@/data/cities";
import { cityHref, districtCitySlug, subDistrictCitySlug } from "@/data/city-slugs";
import CitySearch from "./CitySearch";
import StateRail from "./StateRail";
import { Extras, StatsStrip } from "./PageExtras";

const SITE = "https://taxvio.in";
const totalDistricts = indiaStates.reduce((n, s) => n + s.districts.length, 0);
const totalSubDistricts = indiaStates.reduce(
  (n, s) => n + s.districts.reduce((m, d) => m + d.subDistricts.length, 0),
  0
);

export const metadata: Metadata = {
  title: "GST Services in India by District & Tehsil | GST Registration, Filing | Taxvio",
  description: `CA-assisted GST registration, return filing and compliance. Choose your state, district or tehsil from ${totalDistricts}+ districts and ${totalSubDistricts.toLocaleString("en-IN")}+ sub-districts across India.`,
  alternates: { canonical: `${SITE}/city/gst-services` },
  openGraph: {
    title: "GST Services in India by District & Tehsil | Taxvio",
    description: `Find CA-assisted GST services in your district or tehsil. ${totalDistricts}+ districts covered.`,
    url: `${SITE}/city/gst-services`,
    type: "website",
    siteName: "Taxvio",
  },
};

const faqs = [
  {
    q: "Which GST services can I get through Taxvio?",
    a: "GST registration, monthly and quarterly return filing, annual returns, refunds, LUT, amendments, notice replies, audit support and more. Pick your district or tehsil to see the full list for your area.",
  },
  {
    q: "Do I need to visit an office?",
    a: "No. GST work is done online on the GST portal. You share your details through our contact form, and our CA-assisted team handles the filing for businesses anywhere in India.",
  },
  {
    q: "What if my tehsil or town is not listed?",
    a: "Choose the nearest district or tehsil. The service is online, so it applies to your business wherever you are. You can also use the Contact Us button and tell us your location.",
  },
  {
    q: "Is the GST registration fee charged by the government?",
    a: "No. The GST portal does not charge a fee for registration. Any fee you pay is for professional assistance.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "GST Services", item: `${SITE}/city/gst-services` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const districtBtn =
  "inline-block rounded-full bg-gradient-to-r from-[#00416a] to-[#0a6aa8] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500";
const subBtn =
  "inline-block rounded-full border border-sky-200 bg-white px-3.5 py-1.5 text-sm text-[#00416a] hover:border-[#00416a] hover:bg-[#00416a] hover:text-white hover:-translate-y-0.5 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500";

export default function GstServicesIndexPage() {
  const maxDistricts = Math.max(...indiaStates.map((s) => s.districts.length), 1);
  const railStates = indiaStates.map((s) => ({ slug: s.slug, name: s.name, districts: s.districts.length }));

  return (
    <main className="bg-slate-50 text-slate-900 overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <style>{`
        @keyframes gi-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
        @keyframes gi-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
        .gi-aurora { animation: gi-aurora 14s ease-in-out infinite; }
        .gi-rise { animation: gi-rise .7s cubic-bezier(.22,1,.36,1) both; }
        .gi-d1 { animation-delay: .08s; } .gi-d2 { animation-delay: .16s; } .gi-d3 { animation-delay: .24s; }
        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }
        details[open] > summary .gi-plus { transform: rotate(45deg); background: #00416a; color: #fff; }
        details[open] > summary .gi-caret { transform: rotate(180deg); }
        @media (prefers-reduced-motion: reduce) { .gi-aurora, .gi-rise { animation: none !important; } }
      `}</style>

      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] px-4 pt-14 pb-24 text-center text-white md:pt-20 md:pb-28">
        <div className="gi-aurora absolute -top-32 -left-24 h-[26rem] w-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
        <div className="gi-aurora absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="gi-rise mb-6 flex items-center justify-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition">Home</Link><span>/</span>
            <span className="text-white">GST services</span>
          </nav>
          <span className="gi-rise gi-d1 mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest backdrop-blur">
            📍 Pan-India · CA-assisted · 100% online
          </span>
          <h1 className="gi-rise gi-d1 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-6xl">
            GST services{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">near you</span>
          </h1>
          <p className="gi-rise gi-d2 mx-auto mt-5 max-w-2xl text-base leading-relaxed text-sky-100/90 sm:text-lg">
            GST registration, return filing and compliance handled by CAs. Search your town, or pick your state, then your
            district or tehsil (also called taluka, mandal or circle).
          </p>
          <div className="gi-rise gi-d3 mt-8">
            <CitySearch />
          </div>
          <div className="gi-rise gi-d3 mt-10">
            <StatsStrip states={indiaStates.length} districts={totalDistricts} subDistricts={totalSubDistricts} />
          </div>
        </div>
        <svg className="absolute bottom-0 left-0 h-10 w-full text-slate-50" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
          <path fill="currentColor" d="M0,60 L0,30 Q360,-10 720,25 T1440,20 L1440,60 Z" />
        </svg>
      </section>

      {/* ───── How it works ───── */}
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <ol className="grid gap-4 sm:grid-cols-3">
          {[
            ["🔎", "Find your area", "Search or browse to your district or tehsil."],
            ["📝", "Tell us what you need", "Registration, returns, refunds or notices. One short form."],
            ["✅", "A CA files it online", "We confirm documents, file on the GST portal and keep you updated."],
          ].map(([icon, t, d], i) => (
            <li key={t} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00416a]/30 hover:shadow-xl hover:shadow-[#00416a]/10">
              <span className="absolute -right-3 -bottom-5 select-none text-7xl opacity-[0.07]">{icon}</span>
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00416a] to-[#0a6aa8] text-sm font-extrabold text-white">{i + 1}</span>
                <span className="text-xl">{icon}</span>
              </div>
              <h2 className="font-bold text-[#00416a]">{t}</h2>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ───── Browse by state (cards) ───── */}
      <section aria-label="Browse by state" className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00416a]/15 bg-[#00416a]/5 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00416a]/70">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00416a]" /> Browse by state
        </span>
        <h2 className="text-2xl font-extrabold tracking-tight text-[#00416a] md:text-3xl">Pick your state or union territory</h2>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {indiaStates.map((s) => (
            <li key={s.slug}>
              <a
                href={`#${s.slug}`}
                data-open-state={s.slug}
                className="group block h-full rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#00416a]/30 hover:shadow-xl hover:shadow-[#00416a]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500"
              >
                <span className="flex items-start justify-between gap-2">
                  <span className="font-bold leading-snug text-[#00416a]">{s.name}</span>
                  <span className="mt-0.5 text-[#00416a]/40 transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </span>
                <span className="mt-1 block text-xs text-gray-500">
                  {s.districts.length} {s.districts.length === 1 ? "district" : "districts"}
                </span>
                <span className="mt-3 block h-1.5 overflow-hidden rounded-full bg-gray-100">
                  <span className="block h-full rounded-full bg-gradient-to-r from-[#00416a] to-sky-400" style={{ width: `${Math.max(6, (s.districts.length / maxDistricts) * 100)}%` }} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ───── Sticky state rail ───── */}
      <div className="mt-10">
        <StateRail states={railStates} />
      </div>

      {/* ───── Directory ───── */}
      <div id="city-directory" className="mx-auto max-w-6xl space-y-4 px-4 py-10 sm:px-6">
        {indiaStates.map((state) => {
          const subTotal = state.districts.reduce((n, d) => n + d.subDistricts.length, 0);
          return (
            <details
              key={state.slug}
              id={state.slug}
              data-group
              data-state
              className="group scroll-mt-40 rounded-3xl border border-gray-200 bg-white shadow-sm transition-shadow open:border-[#00416a]/30 open:shadow-xl open:shadow-[#00416a]/10"
            >
              <summary className="flex cursor-pointer select-none items-center gap-4 px-5 py-4 sm:px-6 sm:py-5">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00416a] to-[#0a6aa8] text-lg font-extrabold text-white shadow-md">
                  {state.name.replace(/^The /, "").charAt(0)}
                </span>
                <span className="min-w-0 flex-1">
                  <h2 className="text-lg font-extrabold leading-snug text-[#00416a] md:text-xl">GST services in {state.name}</h2>
                  <span className="mt-0.5 block text-sm text-gray-500">
                    {state.districts.length} {state.districts.length === 1 ? "district" : "districts"}
                    {subTotal > 0 && <> · {subTotal.toLocaleString("en-IN")} tehsils</>}
                  </span>
                </span>
                <span className="gi-plus flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#00416a]/10 text-lg font-bold text-[#00416a] transition-all duration-300" aria-hidden>+</span>
              </summary>

              <div className="space-y-3 px-4 pb-5 sm:px-6">
                {state.districts.map((district) => {
                  const dHref = cityHref(districtCitySlug(state, district));
                  const dKey = `${district.name} ${state.name}`.toLowerCase();
                  const ctx = `${district.name} district, ${state.name}`;

                  // districts without sub-district data: just the district button
                  if (district.subDistricts.length === 0) {
                    return (
                      <div key={district.slug} data-group className="rounded-2xl border border-gray-100 bg-slate-50/70 px-4 py-3">
                        <ul>
                          <li>
                            <Link href={dHref} prefetch={false} data-name={dKey} data-ctx={ctx} className={districtBtn}>
                              {district.name} district
                            </Link>
                          </li>
                        </ul>
                      </div>
                    );
                  }

                  return (
                    <details key={district.slug} data-group className="rounded-2xl border border-gray-100 bg-slate-50/70 open:border-[#00416a]/20 open:bg-white">
                      <summary className="flex cursor-pointer select-none items-center gap-3 px-4 py-3">
                        <span className="flex-1 font-semibold text-slate-800">
                          {district.name}
                          <span className="ml-2 text-sm font-normal text-slate-500">
                            {district.subDistricts.length} tehsils / talukas / mandals
                          </span>
                        </span>
                        <span className="gi-caret text-gray-400 transition-transform duration-300" aria-hidden>⌄</span>
                      </summary>
                      <ul className="flex flex-wrap gap-2 px-4 pb-4">
                        <li>
                          <Link href={dHref} prefetch={false} data-name={dKey} data-ctx={ctx} className={districtBtn}>
                            {district.name} district
                          </Link>
                        </li>
                        {district.subDistricts.map((sub) => (
                          <li key={sub.code}>
                            <Link
                              href={cityHref(subDistrictCitySlug(state, district, sub))}
                              prefetch={false}
                              data-name={`${sub.name} ${district.name} ${state.name}`.toLowerCase()}
                              data-ctx={`${district.name}, ${state.name}`}
                              className={subBtn}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  );
                })}
              </div>
            </details>
          );
        })}
      </div>

      {/* ───── FAQ ───── */}
      <section className="mx-auto max-w-4xl px-4 pb-10 sm:px-6">
        <h2 className="text-2xl font-extrabold tracking-tight text-[#00416a] md:text-3xl">Common questions</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-gray-200 bg-white transition open:border-[#00416a]/40 open:shadow-lg open:shadow-[#00416a]/10">
              <summary className="flex cursor-pointer select-none items-center justify-between gap-4 px-5 py-4 font-bold text-gray-800 group-open:text-[#00416a]">
                {f.q}
                <span className="gi-plus flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#00416a]/10 text-lg font-bold text-[#00416a] transition-all duration-300" aria-hidden>+</span>
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-xs leading-5 text-gray-500">
          This page is for general information and is not legal or tax advice. GST rates, limits, due dates and procedures
          change from time to time, so confirm the current position on the official GST portal or with a qualified professional.
        </p>
      </section>

      <Extras />
    </main>
  );
}