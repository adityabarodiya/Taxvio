"use client";

import Link from "next/link";
import { serviceCategories } from "@/data/serviceCategories";
import Footar from "@/components/Footar";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  Search,
  Receipt,
  FileText,
  Building2,
  Shield,
  ChevronRight,
  Sparkles,
  LayoutGrid,
  List,
} from "lucide-react";


// ─── Shared meta type ─────────────────────────────────────────────────────────
type CategoryMeta = {
  icon: React.ElementType;
  color: string;
  gradient: string;
  bg: string;
  lightBg: string;
  number: string;
};

// ─── Icon map per category slug ───────────────────────────────────────────────
const CATEGORY_META: Record<string, CategoryMeta> = {
  gst: {
    icon: Receipt,
    color: "text-emerald-600",
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-500",
    lightBg: "bg-emerald-50",
    number: "01",
  },
  "income-tax": {
    icon: FileText,
    color: "text-blue-600",
    gradient: "from-blue-500 to-indigo-600",
    bg: "bg-blue-500",
    lightBg: "bg-blue-50",
    number: "02",
  },
  roc: {
    icon: Building2,
    color: "text-violet-600",
    gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-500",
    lightBg: "bg-violet-50",
    number: "03",
  },
  fssai: {
    icon: Shield,
    color: "text-orange-600",
    gradient: "from-orange-500 to-amber-600",
    bg: "bg-orange-500",
    lightBg: "bg-orange-50",
    number: "04",
  },
};

const DEFAULT_META: CategoryMeta = {
  icon: FileText,
  color: "text-[#00416a]",
  gradient: "from-[#00416a] to-[#005a90]",
  bg: "bg-[#00416a]",
  lightBg: "bg-blue-50",
  number: "05",
};

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// ─── Service Card Component ───────────────────────────────────────────────────
function ServiceCard({
  service,
  categorySlug,
  meta,
  view,
}: {
  service: { slug: string; title: string; shortDescription: string };
  categorySlug: string;
  meta: CategoryMeta;
  view: "grid" | "list";
}) {
  if (view === "list") {
    return (
      <motion.div variants={fadeUp}>
        <Link
          href={`/serviceslist/${categorySlug}/${service.slug}`}
          className="group flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:border-[#00416a]/30 hover:shadow-md transition-all duration-250"
        >
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center shrink-0 shadow-sm`}>
            <meta.icon size={16} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className={`font-semibold text-gray-800 group-hover:${meta.color} text-sm transition-colors`}>
              {service.title}
            </p>
            <p className="text-xs text-gray-400 mt-0.5 truncate">{service.shortDescription}</p>
          </div>
          <div className={`w-8 h-8 rounded-lg ${meta.lightBg} flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:${meta.gradient} transition-all duration-200`}>
            <ArrowRight size={13} className={`${meta.color} group-hover:text-white transition-colors`} />
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div variants={scaleIn}>
      <Link
        href={`/serviceslist/${categorySlug}/${service.slug}`}
        className="group relative flex flex-col h-full bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#00416a]"
      >
        {/* Corner accent */}
        <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-[48px] bg-gradient-to-br ${meta.gradient} opacity-[0.06] pointer-events-none`} />

        {/* Icon */}
        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center mb-4 shadow-md shadow-${meta.bg}/20`}>
          <meta.icon size={18} className="text-white" />
        </div>

        {/* Content */}
        <h3 className={`text-base font-bold text-gray-800 group-hover:text-[#00416a] transition-colors leading-snug`}>
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
          {service.shortDescription}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-gray-100">
          <span className={`text-sm font-semibold ${meta.color} group-hover:gap-2 transition-all`}>
            View Details
          </span>
          <ArrowRight size={13} className={`${meta.color} group-hover:translate-x-1 transition-transform`} />
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Category Section ─────────────────────────────────────────────────────────
function CategorySection({
  category,
  view,
  searchQuery,
}: {
  category: (typeof serviceCategories)[number];
  view: "grid" | "list";
  searchQuery: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const meta = CATEGORY_META[category.slug] ?? DEFAULT_META;
  const Icon = meta.icon;

  const filtered = category.services.filter(
    (s) =>
      !searchQuery ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (filtered.length === 0) return null;

  return (
    <motion.section
      ref={ref}
      key={category.slug}
      aria-labelledby={category.slug}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className="scroll-mt-24"
      id={category.slug}
    >
      {/* Category Header */}
      <motion.header variants={fadeUp} className="mb-8 flex flex-col sm:flex-row sm:items-end gap-4">
        <div className="flex items-start gap-4 flex-1">
          {/* Number accent */}
          <div className="hidden md:flex flex-col items-center gap-1.5 pt-1">
            <span className="text-[11px] font-black text-gray-200 tracking-widest">{meta.number}</span>
            <div className={`w-px h-10 bg-gradient-to-b from-gray-200 to-transparent`} />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center shadow-lg shrink-0`}>
                <Icon size={18} className="text-white" />
              </div>
              <h2 id={category.slug} className="text-2xl md:text-3xl font-extrabold text-[#00416a] leading-tight">
                {category.category}
              </h2>
            </div>
            <p className="text-gray-500 max-w-3xl text-sm leading-relaxed pl-[52px]">
              {category.description}
            </p>
          </div>
        </div>

        {/* Service count badge */}
        <div className={`${meta.lightBg} border border-${meta.bg}/20 px-4 py-2 rounded-xl shrink-0 self-start sm:self-auto`}>
          <p className={`text-xs font-bold ${meta.color} uppercase tracking-wide`}>
            {filtered.length} Service{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </motion.header>

      {/* Divider */}
      <div className={`h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8`} />

      {/* Grid / List */}
      <motion.div
        variants={stagger}
        className={
          view === "grid"
            ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            : "flex flex-col gap-3"
        }
      >
        {filtered.map((service) => (
          <ServiceCard
            key={service.slug}
            service={service}
            categorySlug={category.slug}
            meta={meta}
            view={view}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ServicesClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const totalServices = serviceCategories.reduce(
    (acc, cat) => acc + cat.services.length,
    0,
  );

  const filteredCategories =
    activeFilter === "all"
      ? serviceCategories
      : serviceCategories.filter((c) => c.slug === activeFilter);

  const hasResults = filteredCategories.some((cat) =>
    cat.services.some(
      (s) =>
        !searchQuery ||
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );

  return (
    <main className="min-h-screen bg-[#f8fbfd] font-sans">

      {/* ════════════ HERO ════════════ */}
      <section className="relative bg-[#00416a] text-white overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-400/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-400/10 blur-[80px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Sparkles size={13} className="text-sky-300" />
              {totalServices}+ Professional Services
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
            >
              All Tax &amp; Compliance
              <span className="block mt-1 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                Services by Taxvio
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl mx-auto text-white/75 text-base md:text-lg leading-relaxed"
            >
              Complete GST, Income Tax, Company Registration and FSSAI compliance services for individuals, professionals, startups and businesses across India.
            </motion.p>

            {/* Search */}
            <motion.div variants={fadeUp} className="mt-8 max-w-xl mx-auto">
              <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search services — e.g. GST registration, ITR filing..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-5 py-4 rounded-2xl bg-white text-gray-800 text-sm font-medium placeholder:text-gray-400 shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-semibold"
                  >
                    Clear
                  </button>
                )}
              </div>
            </motion.div>

            {/* Category pills */}
            <motion.div variants={fadeUp} className="mt-5 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === "all"
                    ? "bg-white text-[#00416a] shadow-md"
                    : "bg-white/10 text-white/80 border border-white/20 hover:bg-white/15"
                }`}
              >
                All Services
              </button>
              {serviceCategories.map((cat) => {
                const m = CATEGORY_META[cat.slug] ?? DEFAULT_META;
                const Icon = m.icon;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveFilter(cat.slug)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeFilter === cat.slug
                        ? "bg-white text-[#00416a] shadow-md"
                        : "bg-white/10 text-white/80 border border-white/20 hover:bg-white/15"
                    }`}
                  >
                    <Icon size={12} />
                    {cat.category}
                  </button>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="relative">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z" fill="#f8fbfd" />
          </svg>
        </div>
      </section>

      {/* ════════════ TOOLBAR ════════════ */}
      <div className="sticky top-0 z-30 bg-[#f8fbfd]/90 backdrop-blur-md border-b border-gray-200/70 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          {/* Breadcrumb / count */}
          <div className="flex items-center gap-2 text-sm text-gray-500 min-w-0">
            <Link href="/" className="hover:text-[#00416a] transition font-medium shrink-0">Home</Link>
            <ChevronRight size={13} className="shrink-0 text-gray-300" />
            <span className="font-semibold text-[#00416a] truncate">All Services</span>
            {searchQuery && (
              <>
                <ChevronRight size={13} className="shrink-0 text-gray-300" />
                <span className="text-gray-400 truncate">"{searchQuery}"</span>
              </>
            )}
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-xl p-1 shrink-0">
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded-lg transition-all ${view === "grid" ? "bg-[#00416a] text-white shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
              title="Grid view"
            >
              <LayoutGrid size={15} />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 rounded-lg transition-all ${view === "list" ? "bg-[#00416a] text-white shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
              title="List view"
            >
              <List size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* ════════════ SERVICES ════════════ */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          <AnimatePresence mode="wait">
            {hasResults ? (
              filteredCategories.map((category) => (
                <CategorySection
                  key={category.slug}
                  category={category}
                  view={view}
                  searchQuery={searchQuery}
                />
              ))
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-24"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No services found</h3>
                <p className="text-gray-400 text-sm mb-5">
                  No services match "<span className="font-semibold">{searchQuery}</span>". Try a different keyword.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="inline-flex items-center gap-2 bg-[#00416a] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#002b45] transition"
                >
                  Clear Search <ArrowRight size={14} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ════════════ CTA BANNER ════════════ */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#00416a] rounded-3xl overflow-hidden p-10 md:p-14 text-white text-center"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-teal-400/10 blur-[60px] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }} />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide">
                <Sparkles size={11} className="text-sky-300" />
                Free Consultation
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Not Sure Which Service You Need?
              </h2>
              <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                Talk to our CA team for free. We'll assess your requirements and recommend the right services — GST, Income Tax, Company Registration, or FSSAI compliance.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#00416a] px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg hover:bg-gray-50 hover:shadow-xl active:scale-[0.97] transition-all"
                >
                  Get Free Consultation <ArrowRight size={14} />
                </Link>
                <a
                  href="https://wa.me/918937980366"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-white/50 bg-white/5 text-white px-7 py-3.5 rounded-xl text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footar />
    </main>
  );
}