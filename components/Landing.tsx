
"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path to where serviceCategories.ts lives
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

/* ══════════════════════ ROOT ══════════════════════ */

export default function Landing() {
  return (
    <main className="bg-white text-gray-800 overflow-x-clip">
      <GlobalStyles />
      <Hero />
      <InquiryFormButton />
      <Marquee />
      <StatsBar />
      <IntroSection />
      <ServicesOverview />
      <PopularServices />
      <FounderNote />
      <TrustBadges />
      <ProcessSection />
      <ComplianceGuide />
      <WhoWeServe />
      <ComparisonSection />
      <DeadlinesSection />
      <Testimonials />
      <CoverageSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}

/* ══════════════════════ GLOBAL STYLES + PRIMITIVES ══════════════════════ */

function GlobalStyles() {
  return (
    <style>{`
      @keyframes lp-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
      @keyframes lp-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes lp-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      @keyframes lp-shine { from { transform: translateX(-120%) skewX(-20deg); } to { transform: translateX(450%) skewX(-20deg); } }
      @keyframes lp-pulse-ring { 0% { transform: scale(.8); opacity: .8; } 100% { transform: scale(2.2); opacity: 0; } }
      .lp-float { animation: lp-float 7s ease-in-out infinite; }
      .lp-aurora { animation: lp-aurora 14s ease-in-out infinite; }
      .lp-marquee { animation: lp-marquee 38s linear infinite; }
      .lp-marquee:hover { animation-play-state: paused; }
      .lp-card:hover .lp-shine { animation: lp-shine .9s ease; }
      .lp-reveal { opacity: 0; transform: translateY(28px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
      .lp-reveal.lp-in { opacity: 1; transform: none; }
      .lp-hide-scroll::-webkit-scrollbar { display: none; }
      .lp-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .lp-float, .lp-aurora, .lp-marquee { animation: none !important; }
        .lp-reveal { opacity: 1; transform: none; transition: none; }
      }
    `}</style>
  );
}

/** Fades + slides children in when they scroll into view. */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`lp-reveal ${shown ? "lp-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** Counts up to `end` once visible. */
function CountUp({ end, prefix = "", suffix = "", duration = 1600 }: { end: number; prefix?: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / duration, 1);
          setVal(Math.round(end * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

function SectionHeader({
  label,
  title,
  intro,
  center = false,
  dark = false,
}: {
  label: string;
  title: string;
  intro?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <Reveal className={`mb-12 ${center ? "text-center" : ""}`}>
      <span
        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border mb-4 ${
          dark ? "text-sky-200 border-white/20 bg-white/10" : "text-[#00416a]/70 border-[#00416a]/15 bg-[#00416a]/5"
        }`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-sky-300" : "bg-[#00416a]"}`} />
        {label}
      </span>
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.12] ${
          dark ? "text-white" : "text-[#00416a]"
        } ${center ? "max-w-3xl mx-auto" : "max-w-3xl"}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 leading-relaxed text-base md:text-lg max-w-3xl ${center ? "mx-auto" : ""} ${dark ? "text-sky-100/85" : "text-gray-600"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}

/* ══════════════════════ HERO ══════════════════════ */

function Hero() {
  const calendar = [
    { d: "11", t: "GSTR-1", s: "Filed", c: "bg-emerald-100 text-emerald-700" },
    { d: "20", t: "GSTR-3B", s: "In review", c: "bg-amber-100 text-amber-700" },
    { d: "21 Oct", t: "Tax audit report", s: "Upcoming", c: "bg-sky-100 text-sky-700" },
    { d: "21 Nov", t: "ITR (audit cases)", s: "Upcoming", c: "bg-sky-100 text-sky-700" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="lp-aurora absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="lp-aurora absolute -bottom-48 right-0 w-[32rem] h-[32rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(ellipse at 30% 40%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 30% 40%, black 20%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-16 pb-28 md:pt-24 md:pb-36 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        {/* copy */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            </span>
            CA-Led GST, Tax &amp; Compliance Platform
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.06] tracking-tight mb-6">
            Compliance Shouldn&apos;t Need{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
              Three Different Consultants
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9">
            GST, Income Tax, ROC and FSSAI — one CA-supervised team, transparent pricing, and a
            single point of contact from registration to your next annual filing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => openInquiryForm()}
              className="group relative overflow-hidden bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200"
            >
              Get a Free Consultation <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <Link
              href="/serviceslist"
              className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
            >
              Browse All Services
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-2.5 text-sm text-white/80">
            {["CA-Supervised Filings", "Transparent Pricing", "Pan-India Service", "On-Time Deadline Tracking"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                <span className="text-emerald-300">✓</span>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* visual: compliance calendar mock */}
        <div className="relative hidden lg:block">
          <div className="lp-float relative bg-white rounded-3xl shadow-2xl shadow-black/30 p-6 text-gray-800 rotate-1">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Compliance calendar</p>
                <p className="font-extrabold text-[#00416a] text-lg">Your business, on track</p>
              </div>
              <span className="text-[10px] font-bold text-gray-400 border border-gray-200 rounded-full px-2 py-1">SAMPLE VIEW</span>
            </div>
            <ul className="space-y-3">
              {calendar.map((c) => (
                <li key={c.t} className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3">
                  <span className="w-14 text-center text-xs font-extrabold text-[#00416a] bg-[#00416a]/10 rounded-lg py-2">{c.d}</span>
                  <span className="flex-1 font-semibold text-sm">{c.t}</span>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${c.c}`}>{c.s}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#00416a] text-white px-4 py-3">
              <span className="text-xl">👨‍💼</span>
              <p className="text-sm leading-snug">
                <span className="font-bold">CA-reviewed</span> before every submission
              </p>
            </div>
          </div>
          <div className="lp-float absolute -top-6 -left-8 bg-white/10 backdrop-blur border border-white/25 rounded-2xl px-4 py-3 text-2xl [animation-delay:-3s]">🧾</div>
          <div className="lp-float absolute -bottom-8 -right-4 bg-white/10 backdrop-blur border border-white/25 rounded-2xl px-4 py-3 text-2xl [animation-delay:-5s]">🏢</div>
        </div>
      </div>

      <svg className="absolute bottom-0 left-0 w-full h-12 text-white" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0,60 L0,30 Q360,-10 720,25 T1440,20 L1440,60 Z" />
      </svg>
    </section>
  );
}

/* ══════════════════════ MARQUEE ══════════════════════ */

function Marquee() {
  const items = [
    "GST Registration", "ITR Filing", "Private Limited Company", "FSSAI License", "Income Tax Audit", "LLP Formation",
    "GST Returns", "ROC Annual Filing", "TDS Returns", "Trademark & MSME", "Director KYC", "Notice Replies",
  ];
  const loop = [...items, ...items];
  return (
    <div className="relative border-y bg-gray-50 py-4 overflow-hidden" aria-hidden>
      <div className="lp-marquee flex w-max gap-4">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-4 text-sm font-semibold text-[#00416a]/70 whitespace-nowrap">
            {t}
            <span className="w-1.5 h-1.5 rounded-full bg-[#00416a]/25" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent" />
    </div>
  );
}

/* ══════════════════════ STATS ══════════════════════ */

function StatsBar() {
  // NOTE: replace these with your real figures before launch.
  const stats = [
    { end: 5000, suffix: "+", label: "Businesses Served", icon: "🏢" },
    { end: 50, suffix: "+", label: "Cities Covered Pan-India", icon: "📍" },
    { end: 4, suffix: "", label: "Compliance Verticals", icon: "📋" },
    { end: 100, suffix: "%", label: "CA-Reviewed Filings", icon: "👨‍💼" },
  ];
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="lp-card relative overflow-hidden bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <span className="lp-shine pointer-events-none absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-sky-100/70 to-transparent -translate-x-[120%]" />
              <div className="text-3xl mb-2">{s.icon}</div>
              <p className="text-3xl font-extrabold text-[#00416a] mb-1 tabular-nums">
                <CountUp end={s.end} suffix={s.suffix} />
              </p>
              <p className="text-gray-500 text-sm font-medium">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ INTRO / ABOUT ══════════════════════ */

function IntroSection() {
  const points = ["One CA-supervised team", "Upfront quotes", "Compliance calendar", "Single point of contact"];
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-24">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 self-start">
          <SectionHeader label="About Taxvio" title="A Single CA-Led Team for Every Compliance Need" />
          <Reveal delay={120}>
            <ul className="grid grid-cols-2 gap-3 -mt-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm font-semibold text-[#00416a] bg-[#00416a]/5 border border-[#00416a]/10 rounded-xl px-3 py-3">
                  <span className="text-emerald-600">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="space-y-5 text-gray-700 leading-relaxed">
          {[
            "Running a business in India means juggling more regulatory touchpoints than most founders expect. A new venture typically needs company or LLP incorporation through the ROC, a GST registration before the first invoice goes out, an FSSAI license if food is involved in any way, and — once revenue starts flowing — income tax planning, advance tax payments, and annual return filing. Each of these usually means a different consultant, a different fee structure, and a different person to chase when a deadline is approaching.",
            "Taxvio was built to collapse that complexity into one relationship. Instead of juggling a GST consultant, a separate CA for income tax, a company secretary for ROC filings, and a food-license agent, you work with one CA-supervised team that already has your documents, your history, and your compliance calendar on file. That means fewer repeated conversations, fewer documents re-submitted from scratch, and nobody falling through the cracks between two consultants who don't talk to each other.",
            "We work with proprietors filing their first ITR, growing partnerships and LLPs navigating ROC annual compliance, private limited companies handling statutory audits and board resolutions, and food businesses — from cloud kitchens to manufacturers — that need FSSAI licensing sorted correctly the first time. Every filing that leaves our team is reviewed by a practicing Chartered Accountant before submission, not just assembled from a template and sent off.",
            "Pricing is quoted upfront, before any engagement begins, so there are no surprise add-ons once the work is underway. And because deadlines in Indian compliance — GST returns, ROC annual filings, income tax audit due dates — carry real financial penalties when missed, our process is built around a compliance calendar that tracks what's due for your business well before it becomes urgent.",
          ].map((p, i) => (
            <Reveal key={i} delay={i * 70}>
              <p className={`pl-5 border-l-4 ${i % 2 === 0 ? "border-[#00416a]" : "border-[#00416a]/25"}`}>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ SERVICES OVERVIEW ══════════════════════ */

function ServicesOverview() {
  const lines = [
    { title: "GST Services", icon: "🧾", link: "/serviceslist/gst", grad: "from-[#00416a] to-[#0a6aa8]", desc: "New registration, monthly and quarterly return filing, refund applications, LUT for exporters, GST audits, notice replies, and compliance built specifically for e-commerce sellers and freelancers billing foreign clients." },
    { title: "Income Tax", icon: "📊", link: "/serviceslist/income-tax", grad: "from-[#00527f] to-[#1a8fc9]", desc: "ITR filing for salaried individuals, proprietors, firms, LLPs, trusts and companies, Section 44AB tax audits, quarterly TDS/TCS returns, income tax notice handling, and specialized NRI taxation support." },
    { title: "ROC / Company Law", icon: "🏢", link: "/serviceslist/roc", grad: "from-[#002b45] to-[#00527f]", desc: "Private limited, LLP, OPC and Section 8 company incorporation, annual ROC compliance filings, director appointments and resignations, registered office changes, company closures and entity conversions." },
    { title: "FSSAI Licensing", icon: "🍽️", link: "/serviceslist/fssai", grad: "from-[#0b5a6b] to-[#16a3a3]", desc: "Basic, State and Central FSSAI food licenses for restaurants, cloud kitchens and manufacturers, license renewals before expiry, modifications for changed business details, and annual return filing." },
  ];
  return (
    <section className="bg-gray-50 border-y py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeader
          label="What We Handle"
          title="One Firm for Every Compliance Need"
          intro="Most compliance firms specialize in one area and refer everything else elsewhere. Taxvio's team covers all four major compliance verticals a growing Indian business typically needs — GST, Income Tax, Registrar of Companies filings, and FSSAI food licensing — so the same team that registered your company can also handle its first GST return, and the same people who filed last year's ITR already know your business when ROC's annual compliance deadline comes around."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {lines.map((l, i) => (
            <Reveal key={l.title} delay={i * 90}>
              <Link
                href={l.link}
                className="lp-card group relative block h-full overflow-hidden bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-2xl hover:shadow-[#00416a]/15 hover:-translate-y-1.5 hover:border-transparent transition-all duration-300"
              >
                <span className={`absolute inset-0 bg-gradient-to-br ${l.grad} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <span className="lp-shine pointer-events-none absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[120%]" />
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${l.grad} group-hover:bg-white/20 text-white flex items-center justify-center text-2xl shadow-lg mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}>
                    {l.icon}
                  </div>
                  <h3 className="font-extrabold text-xl text-[#00416a] group-hover:text-white mb-2 transition-colors">{l.title}</h3>
                  <p className="text-sm text-gray-600 group-hover:text-white/85 leading-relaxed mb-5 transition-colors">{l.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-[#00416a] group-hover:text-white font-bold transition-colors">
                    Explore Services <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ POPULAR SERVICES ══════════════════════ */

function PopularServices() {
  // Pulled live from serviceCategories by slug so titles/links never drift.
  const picks: { categorySlug: string; serviceSlug: string; icon: string }[] = [
    { categorySlug: "gst", serviceSlug: "gst-registration", icon: "🧾" },
    { categorySlug: "income-tax", serviceSlug: "itr-proprietor", icon: "📊" },
    { categorySlug: "roc", serviceSlug: "private-limited-formation", icon: "🏢" },
    { categorySlug: "fssai", serviceSlug: "fssai-registration", icon: "🍽️" },
    { categorySlug: "income-tax", serviceSlug: "income-tax-audit", icon: "🔍" },
    { categorySlug: "roc", serviceSlug: "llp-formation", icon: "🤝" },
  ];

  const resolved = picks
    .map(({ categorySlug, serviceSlug, icon }) => {
      const category = serviceCategories.find((c) => c.slug === categorySlug);
      const service = category?.services.find((s) => s.slug === serviceSlug);
      return service && category ? { ...service, categorySlug: category.slug, icon } : null;
    })
    .filter((s): s is NonNullable<typeof s> => s !== null);

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-24">
      <SectionHeader
        label="Popular Right Now"
        title="Start With a Service, Not a Guess"
        intro={`If you already know what you need, these are the services businesses ask us about most — from a first GST registration to incorporating a private limited company. Each one links to a full breakdown of the process, documents required, and fees, or you can tap "Enquire" to have a CA call you back about that specific service directly.`}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {resolved.map((s, i) => (
          <Reveal key={s.slug} delay={i * 70}>
            <div className="lp-card group relative h-full overflow-hidden bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:shadow-xl hover:shadow-[#00416a]/10 hover:-translate-y-1 hover:border-[#00416a]/40 transition-all duration-300">
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00416a] to-[#1a8fc9] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <span className="lp-shine pointer-events-none absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-sky-100/80 to-transparent -translate-x-[120%]" />
              <div className="flex items-center justify-between mb-4">
                <span className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center text-xl group-hover:scale-110 group-hover:-rotate-6 transition-transform">{s.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00416a]/60 bg-[#00416a]/5 px-2.5 py-1 rounded-full">Popular</span>
              </div>
              <h3 className="font-bold text-lg text-[#00416a] mb-2 leading-snug">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">{s.shortDescription}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <Link href={`/serviceslist/${s.categorySlug}/${s.slug}`} className="group/l inline-flex items-center gap-1 text-sm font-semibold text-[#00416a]">
                  Learn More <span className="group-hover/l:translate-x-1 transition-transform">→</span>
                </Link>
                <button
                  onClick={() => openInquiryForm(s.title)}
                  className="ml-auto text-xs font-bold bg-[#00416a] text-white px-4 py-2 rounded-lg hover:bg-[#002b45] active:scale-95 transition"
                >
                  Enquire
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="text-center mt-10">
        <Link href="/serviceslist" className="inline-flex items-center gap-2 text-[#00416a] font-bold border-2 border-[#00416a]/20 hover:border-[#00416a] hover:bg-[#00416a]/5 px-6 py-3 rounded-xl transition">
          View the full service catalogue →
        </Link>
      </Reveal>
    </section>
  );
}

/* ══════════════════════ FOUNDER NOTE ══════════════════════ */

function FounderNote() {
  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-6 pb-16 md:pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white p-8 md:p-14 shadow-2xl">
          <span className="absolute -top-6 left-6 text-[10rem] leading-none font-serif text-white/10 select-none" aria-hidden>“</span>
          <div className="lp-aurora absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="relative">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-200 border border-white/20 bg-white/10 px-3 py-1.5 rounded-full mb-6">
              Why Taxvio Exists
            </span>
            <p className="text-xl md:text-2xl leading-relaxed font-medium mb-8">
              I started Taxvio because I kept hearing the same frustration from business owners —
              compliance felt scattered, confusing, and expensive to coordinate across different
              consultants. I wanted to build a platform where someone could come for any FSSAI,
              GST, Income Tax, or ROC need and get a clear process, honest pricing, and real
              professional support behind it — not just a form to fill out.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white text-[#00416a] flex items-center justify-center text-xl font-extrabold ring-4 ring-white/20">A</div>
              <div>
                <p className="font-bold text-lg">Aditya</p>
                <p className="text-sm text-sky-100/80">Founder, Taxvio</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ══════════════════════ TRUST BADGES ══════════════════════ */

function TrustBadges() {
  const items = [
    { icon: "👨‍💼", title: "CA-Supervised Filings", desc: "Every return, registration and audit report is reviewed by a practicing Chartered Accountant before submission — not just assembled from a template and sent off without a second look.", big: true },
    { icon: "💰", title: "Transparent Pricing", desc: "Upfront quotes before any engagement begins, so you know exactly what you're paying for. No surprise add-ons once the paperwork is already underway." },
    { icon: "📋", title: "One Simple Enquiry Form", desc: "No app downloads, no account setup, no separate logins for each service — tell us what you need once in a single form and a CA calls you back." },
    { icon: "🇮🇳", title: "Pan-India Coverage", desc: "Headquartered in Khatauli, Muzaffarnagar, with clients across Delhi NCR, Meerut, Mumbai and every Indian state served fully online where an in-person visit isn't needed.", big: true },
    { icon: "⏱️", title: "On-Time Filing Focus", desc: "Deadline tracking built into our process, so your GST returns, ROC annual filings and income tax audit due dates never slip past the date that triggers a penalty." },
    { icon: "🔒", title: "Confidential by Default", desc: "Your financial documents, PAN, Aadhaar and business records are used only to deliver the service you've requested — never shared or sold to third parties." },
  ];
  return (
    <section className="bg-gray-50 border-y py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeader label="Why Taxvio" title="Built to Be Your Long-Term Compliance Partner" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70} className={item.big ? "lg:col-span-1" : ""}>
              <div
                className={`lp-card group relative h-full overflow-hidden rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  item.big
                    ? "bg-gradient-to-br from-[#00416a] to-[#00527f] text-white border-transparent hover:shadow-[#00416a]/30"
                    : "bg-white border-gray-200 hover:border-[#00416a]/30 hover:shadow-[#00416a]/10"
                }`}
              >
                <span className="lp-shine pointer-events-none absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-[120%]" />
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${item.big ? "bg-white/15" : "bg-sky-50"}`}>{item.icon}</div>
                <p className={`font-bold text-lg mb-1.5 ${item.big ? "text-white" : "text-[#00416a]"}`}>{item.title}</p>
                <p className={`text-sm leading-relaxed ${item.big ? "text-sky-100/90" : "text-gray-600"}`}>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ PROCESS ══════════════════════ */

function ProcessSection() {
  const steps = [
    { step: "01", icon: "📝", title: "Share Your Requirement", desc: "Fill the enquiry form with what you need — GST registration, an ITR filing, a ROC compliance matter, or an FSSAI license — and your preferred state and contact number." },
    { step: "02", icon: "📞", title: "Free Consultation Call", desc: "A CA from our team reviews your case, explains what's actually required for your situation, and calls you back with a clear quote, usually within a few business hours." },
    { step: "03", icon: "📤", title: "Documentation & Filing", desc: "Once you confirm, share the required documents over email or a shared upload link — our team prepares, cross-checks and files everything on your behalf with the correct authority." },
    { step: "04", icon: "✅", title: "Confirmation & Ongoing Support", desc: "You receive acknowledgement copies and filing receipts for your records, and we keep track of your business's future compliance deadlines so the next one doesn't catch you off guard." },
  ];
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-24">
      <SectionHeader label="How It Works" title="From Enquiry to Filed — In Four Steps" center />
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-[#00416a]/20" />
        {steps.map((s, i) => (
          <Reveal key={s.step} delay={i * 110}>
            <div className="relative h-full bg-white border border-gray-200 rounded-2xl p-6 pt-12 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -top-7 left-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00416a] to-[#0a6aa8] text-white flex items-center justify-center text-2xl shadow-lg shadow-[#00416a]/30">
                {s.icon}
              </div>
              <span className="absolute top-4 right-5 text-5xl font-extrabold text-[#00416a]/[0.07]">{s.step}</span>
              <h3 className="text-lg font-bold text-[#00416a] mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ COMPLIANCE GUIDE (tabs) ══════════════════════ */

function ComplianceGuide() {
  const [active, setActive] = useState(0);
  const topics = [
    {
      title: "GST Compliance in India",
      short: "GST",
      icon: "🧾",
      body: "Any business with turnover above the GST threshold — or one that wants to claim input tax credit and look credible to larger buyers — needs GST registration before raising its first tax invoice. Once registered, monthly or quarterly GSTR-1 and GSTR-3B returns become mandatory regardless of whether the business made any sales that period, and missing them accrues late fees and interest from day one. Businesses crossing higher turnover thresholds also face an annual GSTR-9 reconciliation and, in some cases, a GST audit. E-commerce sellers and freelancers billing clients abroad have their own additional layer of compliance — TCS credit matching for marketplace sellers, and LUT filing for exporters who want to invoice without charging IGST.",
    },
    {
      title: "Income Tax & ITR Filing",
      short: "Income Tax",
      icon: "📊",
      body: "Every individual and entity earning above the basic exemption limit is required to file an income tax return each year, and the form required — ITR-1 through ITR-7 — depends on the nature and source of income. Proprietors and professionals with turnover or receipts above the Section 44AB threshold additionally need a tax audit conducted by a practicing Chartered Accountant, with a hard deadline that, if missed, triggers a penalty of up to ₹1.5 lakh. Businesses deducting tax at source on salaries, contractor payments or rent must also file quarterly TDS returns and issue Form 16 or 16A certificates to the people they deducted from.",
    },
    {
      title: "ROC & Company Law Compliance",
      short: "ROC",
      icon: "🏢",
      body: "Incorporating a private limited company, LLP, OPC or Section 8 company is only the starting point — every registered entity then carries ongoing obligations to the Registrar of Companies regardless of whether it did any business that year. These include annual filings such as AOC-4 and MGT-7 for companies or Form 11 and Form 8 for LLPs, director KYC through DIR-3 KYC, auditor appointment filings, and event-based filings whenever a director changes, the registered office moves, or share capital is altered. Skipping these doesn't just risk penalties — prolonged non-compliance can lead to the company being struck off the register entirely, which then requires a far more expensive restoration process to reverse.",
    },
    {
      title: "FSSAI Food Licensing",
      short: "FSSAI",
      icon: "🍽️",
      body: "Any business that manufactures, stores, transports, distributes or sells food in India — from a home-based tiffin service to a full-scale manufacturing unit — needs an FSSAI license or registration, with the category (Basic, State, or Central) determined by annual turnover and the scale of operations. Getting the wrong category, or missing the renewal window before an existing license expires, can halt operations until it's corrected. License holders above the Basic tier also need to file an FSSAI annual return each year, and any change to the business — a new product line, a change of address — requires a formal modification filing rather than being updated informally.",
    },
  ];

  return (
    <section className="bg-gray-50 border-y py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeader
          label="Compliance Basics"
          title="Understanding Business Compliance in India"
          intro="If you're new to running a registered business, here's a plain-language overview of what each compliance area actually involves — and why leaving any one of them unmanaged tends to get expensive."
        />
        <div className="grid lg:grid-cols-[0.34fr_0.66fr] gap-6">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lp-hide-scroll pb-1" role="tablist" aria-label="Compliance areas">
            {topics.map((t, i) => (
              <button
                key={t.short}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 flex items-center gap-3 text-left px-5 py-4 rounded-2xl border font-bold transition-all duration-200 ${
                  active === i
                    ? "bg-[#00416a] text-white border-[#00416a] shadow-lg shadow-[#00416a]/25 lg:translate-x-2"
                    : "bg-white text-[#00416a] border-gray-200 hover:border-[#00416a]/40"
                }`}
              >
                <span className="text-2xl">{t.icon}</span>
                <span className="whitespace-nowrap lg:whitespace-normal">{t.title}</span>
              </button>
            ))}
          </div>

          <div className="relative">
            {topics.map((t, i) => (
              <div
                key={t.short}
                role="tabpanel"
                className={`${active === i ? "block" : "hidden"} bg-white border border-gray-200 rounded-3xl p-7 md:p-10 shadow-sm`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00416a] to-[#0a6aa8] text-white flex items-center justify-center text-2xl shadow-lg">{t.icon}</span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#00416a]">{t.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">{t.body}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => openInquiryForm(t.short)}
                    className="bg-[#00416a] text-white font-bold text-sm px-5 py-3 rounded-xl hover:bg-[#002b45] transition"
                  >
                    Talk to a CA about {t.short} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ WHO WE SERVE ══════════════════════ */

function WhoWeServe() {
  const audiences = [
    { icon: "🏪", title: "Retailers & Traders", desc: "From a single shop to a multi-branch trading business, with GST return filing, input tax credit reconciliation, and income tax support built around cash-and-credit sales cycles." },
    { icon: "🏭", title: "Manufacturers", desc: "GST compliance across multiple states, job work ITC-04 filings, e-way bill management, and tax audits that account for inventory valuation and depreciation on plant and machinery." },
    { icon: "💻", title: "Freelancers & Consultants", desc: "GST registration and LUT filing for billing foreign clients without IGST, SAC code mapping, and ITR filing that correctly claims deductions on laptops, software and home office expenses." },
    { icon: "🛒", title: "E-Commerce Sellers", desc: "Amazon, Flipkart, Meesho and D2C sellers get marketplace settlement reconciliation, GST TCS credit matching, and GSTR-8 compliance handled alongside their regular monthly returns." },
    { icon: "🍴", title: "Restaurants & Food Businesses", desc: "FSSAI licensing paired with GST composition scheme advisory and Section 9(5) compliance for businesses listed on Zomato or Swiggy, so food-specific and tax compliance aren't handled by two separate people." },
    { icon: "🚀", title: "Startups & New Companies", desc: "Private limited, LLP or OPC incorporation followed immediately by GST registration, PAN/TAN application, and a compliance calendar set up from day one instead of being figured out after the first missed deadline." },
  ];
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-24">
      <SectionHeader
        label="Who We Serve"
        title="Built for the Way Different Businesses Actually Operate"
        intro="Compliance needs look different for a trading shop than they do for a software freelancer or a cloud kitchen. Rather than offering one generic package, our team tailors the filings and advisory to how your specific business actually makes money."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {audiences.map((a, i) => (
          <Reveal key={a.title} delay={i * 70}>
            <div className="lp-card group relative h-full overflow-hidden bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 hover:border-[#00416a]/30 transition-all duration-300">
              <span className="absolute -right-6 -bottom-6 text-8xl opacity-[0.05] group-hover:opacity-[0.12] group-hover:scale-110 transition-all duration-500 select-none">{a.icon}</span>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">{a.icon}</div>
                <p className="font-bold text-lg text-[#00416a] mb-1.5">{a.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ COMPARISON ══════════════════════ */

function ComparisonSection() {
  const rows = [
    { label: "Response time", diy: "You figure it out alone", localCA: "Days, often by appointment only", taxvio: "Usually within a few business hours" },
    { label: "Pricing clarity", diy: "Free, but mistakes cost penalties", localCA: "Often quoted verbally, can shift later", taxvio: "Fixed quote upfront, in writing" },
    { label: "Services covered", diy: "Whatever you can learn yourself", localCA: "Usually one specialty (GST or ITR, rarely both)", taxvio: "GST, Income Tax, ROC and FSSAI under one team" },
    { label: "Deadline tracking", diy: "Entirely on you to remember", localCA: "Varies by individual practitioner", taxvio: "Built into our process for every client" },
    { label: "Review before filing", diy: "No second set of eyes", localCA: "Depends on the individual's workload", taxvio: "CA-reviewed before every submission" },
  ];
  return (
    <section className="bg-gray-50 border-y py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeader
          label="How We Compare"
          title="DIY Filing vs. a Local CA vs. Taxvio"
          intro="Filing your own GST returns or hiring a local Chartered Accountant both work for some businesses — here's an honest look at the trade-offs, and where a CA-led platform like Taxvio tends to fit in between the two."
        />
        <Reveal>
          <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-lg bg-white">
            <table className="min-w-[720px] w-full text-sm border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="px-5 py-5 text-left bg-gray-50 rounded-tl-3xl" />
                  <th className="px-5 py-5 text-left font-semibold text-gray-600 bg-gray-50">Doing It Yourself</th>
                  <th className="px-5 py-5 text-left font-semibold text-gray-600 bg-gray-50">A Local CA</th>
                  <th className="px-5 py-5 text-left font-extrabold text-white bg-gradient-to-br from-[#00416a] to-[#0a6aa8] rounded-tr-3xl">
                    <span className="inline-flex items-center gap-2">Taxvio <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full uppercase tracking-wider">Best fit</span></span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.label} className="group">
                    <td className="px-5 py-4 font-bold text-gray-800 border-t border-gray-100 group-hover:bg-gray-50 transition">{r.label}</td>
                    <td className="px-5 py-4 text-gray-500 border-t border-gray-100 group-hover:bg-gray-50 transition">
                      <span className="text-red-400 mr-1.5">✕</span>{r.diy}
                    </td>
                    <td className="px-5 py-4 text-gray-500 border-t border-gray-100 group-hover:bg-gray-50 transition">
                      <span className="text-amber-500 mr-1.5">～</span>{r.localCA}
                    </td>
                    <td className={`px-5 py-4 font-semibold text-[#00416a] border-t border-[#00416a]/10 bg-sky-50/70 group-hover:bg-sky-100/70 transition ${i === rows.length - 1 ? "rounded-br-3xl" : ""}`}>
                      <span className="text-emerald-600 mr-1.5">✓</span>{r.taxvio}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════ KEY DEADLINES ══════════════════════ */

function DeadlinesSection() {
  const deadlines = [
    { date: "11th / 13th / 20th of every month", item: "GSTR-1, IFF and GSTR-3B", desc: "Monthly or quarterly GST return filing, depending on your scheme and turnover slab.", icon: "🧾" },
    { date: "30th September*", item: "Income Tax Audit Report", desc: "Form 3CA/3CB and 3CD for taxpayers subject to Section 44AB audit, for the previous financial year.", icon: "🔍" },
    { date: "31st October*", item: "ITR for Audit Cases", desc: "Income tax return filing for taxpayers whose accounts required a tax audit.", icon: "📊" },
    { date: "30th May", item: "ROC Form DPT-3", desc: "Annual return of deposits and outstanding loans for companies, as of 31st March.", icon: "🏢" },
    { date: "On or before AGM + 30 days", item: "ROC Form AOC-4 & MGT-7", desc: "Annual financial statements and annual return filing with the Registrar of Companies.", icon: "📁" },
    { date: "Varies by license validity", item: "FSSAI License Renewal", desc: "Must be filed before expiry — typically 1 to 5 years from the date of issue, depending on the license type.", icon: "🍽️" },
  ];
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-24">
      <SectionHeader
        label="Plan Ahead"
        title="Key Compliance Deadlines to Keep On Your Radar"
        intro="These are the recurring deadlines that catch businesses off guard most often. Dates marked with an asterisk are sometimes extended by the CBDT — our team tracks the official notifications so your filing date is always current, not just the statutory default."
      />
      <div className="relative grid sm:grid-cols-2 gap-5">
        {deadlines.map((d, i) => (
          <Reveal key={d.item} delay={(i % 2) * 90}>
            <div className="group h-full bg-white border border-gray-200 rounded-2xl p-5 flex gap-4 hover:shadow-lg hover:border-[#00416a]/30 hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00416a]/5 group-hover:bg-[#00416a] flex items-center justify-center text-xl transition-colors">
                <span className="group-hover:scale-110 transition-transform">{d.icon}</span>
              </div>
              <div className="min-w-0">
                <p className="inline-block text-[11px] font-bold text-[#00416a] uppercase tracking-wide bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full mb-2">{d.date}</p>
                <p className="font-bold text-gray-800 mb-1">{d.item}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ TESTIMONIALS (auto-carousel on mobile, grid on desktop) ══════════════════════ */

function Testimonials() {
  const reviews = [
    { name: "Priya Enterprises", location: "Meerut", text: "We filled the form expecting a slow reply like every other consultant website, and got a callback the same afternoon instead. GST registration was done within days, with no back-and-forth confusion about which documents we'd already sent." },
    { name: "Verma Traders", location: "Muzaffarnagar", text: "We've used three different consultants before Taxvio, and every single one added some charge we weren't told about upfront. This is the first time pricing was clear from the first call, with nothing added once the work was underway." },
    { name: "Singh & Associates", location: "Ghaziabad", text: "Our ROC annual filing and income tax return used to go to two different people who never coordinated with each other. Having the same team handle both this year saved us a lot of repeated explaining and chasing." },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, [reviews.length]);

  const Card = ({ r }: { r: (typeof reviews)[number] }) => (
    <div className="h-full bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="flex mb-3">{[...Array(5)].map((_, j) => <span key={j} className="text-amber-400 text-lg">★</span>)}</div>
      <p className="mb-6 text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00416a] to-[#0a6aa8] text-white flex items-center justify-center font-bold">{r.name[0]}</span>
        <div>
          <p className="font-bold text-[#00416a] text-sm leading-tight">{r.name}</p>
          <p className="text-xs text-gray-500">{r.location}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-gray-50 border-y py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeader label="Client Stories" title="Trusted by Businesses Across India" />
        {/* desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 90}><Card r={r} /></Reveal>
          ))}
        </div>
        {/* mobile carousel */}
        <div className="md:hidden">
          <Card r={reviews[idx]} />
          <div className="flex justify-center gap-2 mt-5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Show review ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-7 bg-[#00416a]" : "w-2 bg-[#00416a]/25"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ COVERAGE ══════════════════════ */

function CoverageSection() {
  const cities = ["Khatauli", "Muzaffarnagar", "Noida", "Delhi NCR", "Meerut", "Mumbai"];
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm p-8 md:p-12">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: "radial-gradient(circle, #00416a 1.2px, transparent 1.2px)", backgroundSize: "22px 22px" }}
          />
          <div className="relative grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00416a]/70 border border-[#00416a]/15 bg-[#00416a]/5 px-3 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00416a]" /> Our Reach
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#00416a] mb-4">Serving Businesses Across India</h2>
              <p className="text-gray-600 leading-relaxed">
                Headquartered in <strong>Khatauli, Muzaffarnagar, UP</strong>, with dedicated client
                coverage across <strong>Noida</strong>, <strong>Delhi NCR</strong>, <strong>Meerut</strong>,{" "}
                <strong>Ghaziabad</strong>, and <strong>Mumbai</strong> — and full compliance support
                online for every state and union territory in India.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cities.map((city, i) => (
                <div
                  key={city}
                  className="group relative bg-white border border-gray-200 rounded-xl p-4 text-center text-sm font-bold text-[#00416a] hover:bg-[#00416a] hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default"
                >
                  {i === 0 && <span className="absolute top-2 right-2 flex h-2 w-2"><span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" /></span>}
                  📍 {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ══════════════════════ FAQ ══════════════════════ */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "What services does Taxvio offer?", a: "GST registration and returns, Income Tax filing and audits, ROC/company law compliance, and FSSAI food licensing — all under one CA-led team, so you don't need separate consultants for each." },
    { q: "How quickly will I get a response?", a: "Most enquiries are responded to within a few business hours, Monday to Saturday. Fill the enquiry form and our team will call you back." },
    { q: "Is the initial consultation really free?", a: "Yes. The first consultation call to understand your requirement and give you a clear quote is completely free, with no obligation to proceed." },
    { q: "Do you serve businesses outside Uttar Pradesh?", a: "Yes. While we're headquartered in Khatauli, Muzaffarnagar, our services are delivered fully online to clients across every Indian state." },
    { q: "Is my information kept confidential?", a: "Yes. Your personal and financial details are used only to respond to your enquiry and deliver the service you request — never shared or sold to third parties." },
    { q: "I already have a CA — can Taxvio just handle one specific filing?", a: "Yes. Plenty of our clients come to us for a single service, like an FSSAI license or a one-off ROC filing, without switching their entire compliance relationship. There's no requirement to move everything over at once." },
    { q: "What happens if I miss a GST or ROC deadline before reaching out?", a: "Tell us the situation honestly in the enquiry form. Most late filings can still be completed with applicable late fees — the sooner it's addressed, the less interest and penalty accumulates, so reaching out immediately helps even after a deadline has passed." },
    { q: "Do you only work with companies, or also with proprietors and individuals?", a: "Both. A large share of our clients are individual proprietors and professionals filing ITR or registering for GST for the first time — you don't need to be an incorporated company to work with us." },
  ];

  return (
    <section className="bg-gray-50 border-y py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <SectionHeader label="FAQs" title="Common Questions" center />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={Math.min(i, 5) * 50}>
                <div className={`rounded-2xl border bg-white transition-all duration-300 ${isOpen ? "border-[#00416a]/40 shadow-lg shadow-[#00416a]/10" : "border-gray-200 hover:border-[#00416a]/25"}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className={`font-bold transition-colors ${isOpen ? "text-[#00416a]" : "text-gray-800"}`}>{f.q}</span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                        isOpen ? "bg-[#00416a] text-white rotate-45" : "bg-[#00416a]/10 text-[#00416a]"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-gray-600 text-sm md:text-[15px] leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ FINAL CTA ══════════════════════ */

function FinalCTA() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] shadow-2xl px-6 py-14 md:px-14 md:py-20 text-white">
          <div className="lp-aurora absolute -top-24 -right-20 w-80 h-80 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
          <div
            className="absolute inset-0 opacity-[0.1]"
            style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "26px 26px" }}
          />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-200 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full mb-5">
                Free consultation
              </span>
              <h3 className="text-3xl md:text-5xl font-extrabold mb-5 leading-[1.1] tracking-tight">
                Ready to Get Your Compliance Sorted?
              </h3>
              <p className="text-lg text-sky-100/90 leading-relaxed">
                Tell us what you need — GST, Income Tax, ROC or FSSAI — and a CA from our team
                will call you back with a clear plan and honest pricing.
              </p>
              <ul className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-white/80">
                <li>✓ No obligation</li>
                <li>✓ Fixed quote upfront</li>
                <li>✓ 100% online</li>
              </ul>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => openInquiryForm()}
                className="bg-white text-[#00416a] px-9 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
              >
                Get a Free Consultation →
              </button>
              <Link
                href="/serviceslist"
                className="border-2 border-white/40 text-white px-9 py-4 rounded-xl font-semibold hover:bg-white/10 transition text-center"
              >
                Browse All Services
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}