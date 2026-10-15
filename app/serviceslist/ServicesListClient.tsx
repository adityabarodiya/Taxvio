"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useMemo, useState } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust this import path to match where serviceCategories.ts actually lives in your repo
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path to match where you save InquiryFormButton.tsx

const CATEGORY_ICONS: Record<string, string> = {
  fssai: "🍽️",
  gst: "🧾",
  "income-tax": "📊",
  roc: "🏢",
};

export default function ServicesListClient() {
  const [search, setSearch] = useState("");

  const totalServices = useMemo(
    () => serviceCategories.reduce((sum, cat) => sum + cat.services.length, 0),
    []
  );

  const filteredCategories = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return serviceCategories;

    return serviceCategories
      .map((cat) => ({
        ...cat,
        services: cat.services.filter(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.shortDescription.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.services.length > 0);
  }, [search]);

  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">
      <Hero totalServices={totalServices} search={search} onSearchChange={setSearch} />
      <InquiryFormButton />

      <CategoryNav categories={filteredCategories} />

      {filteredCategories.length === 0 ? (
        <NoResults search={search} onClear={() => setSearch("")} />
      ) : (
        filteredCategories.map((cat) => (
          <CategorySection key={cat.slug} category={cat} />
        ))
      )}

      <FinalCTA />
      <Footar />
    </main>
  );
}

/* ══════════════════════ HERO + SEARCH ══════════════════════ */

function Hero({
  totalServices,
  search,
  onSearchChange,
}: {
  totalServices: number;
  search: string;
  onSearchChange: (v: string) => void;
}) {
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10" />
      <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24 text-center">
        <nav className="mb-6 text-sm text-white/60 flex items-center justify-center gap-2">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <span className="text-white">Services</span>
        </nav>

        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          📋 {totalServices}+ Services
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
          Every Compliance Service,<br className="hidden sm:block" /> In One Place
        </h1>
        <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto mb-10">
          GST, Income Tax, ROC and FSSAI — browse the full list below, or search for exactly
          what you need.
        </p>

        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search services — e.g. GST registration, DPT-3, ITR..."
            className="w-full rounded-xl border-0 px-5 py-4 pr-12 text-white-100 text-sm sm:text-base shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30"
          />
          {search ? (
            <button
              onClick={() => onSearchChange("")}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg"
            >
              ✕
            </button>
          ) : (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          )}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ CATEGORY NAV ══════════════════════ */

function CategoryNav({ categories }: { categories: typeof serviceCategories }) {
  if (categories.length === 0) return null;

  return (
    <div className="sticky top-0 z-40 bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-3 overflow-x-auto">
        {categories.map((cat) => (
          <a
            key={cat.slug}
            href={`#${cat.slug}`}
            className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold text-[#00416a] bg-[#00416a]/5 hover:bg-[#00416a]/10 border border-[#00416a]/20 px-4 py-2 rounded-full transition whitespace-nowrap"
          >
            <span>{CATEGORY_ICONS[cat.slug] ?? "📋"}</span>
            {cat.category}
            <span className="text-[#00416a]/50">({cat.services.length})</span>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════ CATEGORY SECTION ══════════════════════ */

function CategorySection({ category }: { category: (typeof serviceCategories)[number] }) {
  return (
    <section id={category.slug} className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{CATEGORY_ICONS[category.slug] ?? "📋"}</span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#00416a]">{category.category}</h2>
        <span className="text-sm font-semibold text-[#00416a]/50 bg-[#00416a]/5 px-3 py-1 rounded-full">
          {category.services.length} services
        </span>
      </div>
      <p className="text-gray-600 max-w-3xl mb-8 leading-relaxed">{category.description}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {category.services.map((service) => (
          <div
            key={service.slug}
            className="bg-gray-50 border rounded-2xl p-5 hover:bg-white hover:shadow-md hover:border-[#00416a]/30 transition flex flex-col"
          >
            <h3 className="font-semibold text-[#00416a] mb-2 leading-snug">{service.title}</h3>
            <p className="text-sm text-gray-600 mb-4 flex-1">{service.shortDescription}</p>
            <div className="flex items-center gap-3 pt-1 border-t">
              <Link
                href={`/serviceslist/${category.slug}/${service.slug}`}
                className="text-sm font-semibold text-[#00416a] hover:underline pt-3"
              >
                Learn More →
              </Link>
              <button
                onClick={() => openInquiryForm(service.title)}
                className="ml-auto mt-3 text-xs font-semibold bg-[#00416a] text-white px-3 py-2 rounded-lg hover:bg-[#002b45] transition"
              >
                Enquire
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ NO RESULTS ══════════════════════ */

function NoResults({ search, onClear }: { search: string; onClear: () => void }) {
  return (
    <section className="max-w-2xl mx-auto px-6 py-24 text-center">
      <div className="text-5xl mb-4">🔍</div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        No services match "{search}"
      </h2>
      <p className="text-gray-500 mb-6">
        Try a different term, or tell us what you need directly — our team can point you to
        the right service even if it's not listed by this exact name.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onClear}
          className="border-2 border-[#00416a] text-[#00416a] px-6 py-3 rounded-xl font-semibold hover:bg-[#00416a]/5 transition"
        >
          Clear Search
        </button>
        <button
          onClick={() => openInquiryForm()}
          className="bg-[#00416a] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#002b45] transition"
        >
          Ask Us Directly →
        </button>
      </div>
    </section>
  );
}

/* ══════════════════════ FINAL CTA ══════════════════════ */

function FinalCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10 pb-20">
      <div className="bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] rounded-3xl shadow-2xl px-8 py-14 md:px-14 md:py-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              Tell us about your business in a few lines and a CA from our team will tell you
              exactly what's required — no obligation, no pressure.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={() => openInquiryForm()}
              className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
            >
              Get a Free Consultation →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}