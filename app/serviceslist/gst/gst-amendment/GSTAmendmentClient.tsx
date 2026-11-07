"use client";

// app/serviceslist/gst/gst-amendment/GSTAmendmentClient.tsx

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust path
import InquiryFormButton, { openInquiryForm } from "@/components/InquiryFormButton"; // ← adjust path

const SERVICE = "GST Amendment / Update";

/* ══════════════════════ CONTENT ══════════════════════ */

const NAV = [
  { id: "overview", label: "Overview" },
  { id: "planner", label: "Change Planner" },
  { id: "included", label: "What's Included" },
  { id: "deadline", label: "Reporting Deadline" },
  { id: "documents", label: "Documents" },
  { id: "process", label: "Process" },
  { id: "mistakes", label: "Pitfalls" },
  { id: "faqs", label: "FAQs" },
];

const INTRO = [
  "A GST registration describes your business at one point in time. Businesses change: they move premises, open a second shop, rename themselves, add partners or directors, switch phone numbers and email addresses, or take up a new line of activity. Each of these changes must be reflected in your GST registration, or your records, invoices and filings will stop matching what the department has on file.",
  "GST amendment is the process of updating those details on the GST portal. The law divides the fields into two groups. Core fields, such as the legal name, principal place of business and additional places of business, generally need the tax officer's approval. Non-core fields, such as contact details, are generally updated without approval. Knowing which group your change falls in decides the documents you need and how long it takes.",
  "Taxvio's CA-assisted team handles the entire amendment. We identify whether each change is core or non-core, prepare the right supporting documents, file the application, track the approval, and reply to any officer query. You also get guidance on what to update after approval: invoices, displayed details and return filings. You receive a fixed quote before we start.",
];

const FEATURES = [
  { title: "Core field amendment", note: "Changes to legal name, principal and additional places of business, partners or directors and similar fields. We prepare the supporting documents and handle officer approval." },
  { title: "Non-core field update", note: "Updates to contact details, bank details and other non-core information, filed correctly so they take effect without delay." },
  { title: "Document upload", note: "We check that documents are recent, consistent and in the correct format, and upload them against the right field to avoid avoidable rejections." },
  { title: "Approval tracking", note: "We follow the application reference number, respond to queries on your behalf and confirm when the amended certificate is issued." },
];

const BENEFITS = [
  { icon: "🧾", t: "Records that match", d: "Your registration, invoices and returns all show the same, correct business details." },
  { icon: "⚖️", t: "Stay compliant", d: "Report changes within the prescribed period and avoid penalties for outdated registration details." },
  { icon: "📬", t: "Notices reach you", d: "Updated address and contact details ensure department notices and OTPs reach the right person." },
  { icon: "🤝", t: "Smooth dealings", d: "Suppliers and buyers see the right name and address, which keeps input credit and invoices clean." },
  { icon: "🧮", t: "Correct classification", d: "We tell you which fields are core and which are not, so you do not wait for approvals you do not need." },
  { icon: "🚫", t: "Fewer rejections", d: "Careful documents and consistent details reduce queries and re-submissions." },
];

const IDEAL = [
  { icon: "🏠", t: "Businesses that moved", d: "A new office, shop, warehouse or home-based address needs an updated registration." },
  { icon: "🏷️", t: "Renamed or restructured", d: "Name changes, partner or director changes and added places of business." },
  { icon: "📱", t: "Changed contact details", d: "New mobile numbers or email addresses so portal OTPs and notices keep arriving." },
];

type Change = { id: string; label: string; icon: string; kind: "core" | "non-core"; docs: string[]; note: string };

const CHANGES: Change[] = [
  { id: "addr", label: "Change principal place of business", icon: "📍", kind: "core", docs: ["Proof of new address (electricity bill / rent agreement)", "Owner's consent letter or NOC, if rented or shared", "Photograph or proof of premises, as required"], note: "Officer approval generally required. Moving to another state is not an amendment; it needs a fresh registration." },
  { id: "addl", label: "Add / change additional place of business", icon: "🏬", kind: "core", docs: ["Proof of the additional place", "Rent agreement and owner's consent, if applicable"], note: "Core field, so approval is generally required." },
  { id: "legal", label: "Change legal name of business", icon: "🏛️", kind: "core", docs: ["PAN card showing the new name", "Revised certificate / deed / name-change proof", "Authorisation of the signatory"], note: "Core field. Usually follows a PAN or constitution change." },
  { id: "partner", label: "Add / remove partner, director or proprietor details", icon: "👥", kind: "core", docs: ["PAN and Aadhaar of the person", "Photograph", "Revised partnership deed or board resolution", "Consent or resignation proof"], note: "Treated as a core change in most cases." },
  { id: "trade", label: "Change trade name", icon: "🏷️", kind: "non-core", docs: ["Updated trade name details", "Signage or other supporting proof, if asked"], note: "Generally non-core. Confirm with our CA for your case." },
  { id: "contact", label: "Change mobile number or email", icon: "📱", kind: "non-core", docs: ["Details of the new mobile number and email", "Authorised signatory identity"], note: "Non-core. Usually updated without officer approval." },
  { id: "bank", label: "Update bank account details", icon: "🏦", kind: "non-core", docs: ["Cancelled cheque or bank statement"], note: "Non-core. Keep records aligned with refunds and payments." },
  { id: "activity", label: "Add / change business activity or HSN codes", icon: "🛠️", kind: "non-core", docs: ["Description of the new activity", "HSN / SAC code details"], note: "Generally non-core, but it affects your tax rates, so we review it." },
];

const STEPS = [
  { t: "Understand what changed", d: "You tell us what has changed and when. We classify each item as core or non-core and confirm whether amendment is the right route." },
  { t: "Collect supporting documents", d: "We give you a precise list for your change and check each document for recency and consistency." },
  { t: "Prepare the application", d: "We prepare the amendment on the GST portal with the correct fields and uploads, and share it with you for approval." },
  { t: "File & authenticate", d: "We file the application and, where needed, you complete verification through the registered mobile." },
  { t: "Track & respond to queries", d: "For core changes, we follow the reference number and reply to officer queries on your behalf." },
  { t: "Amended certificate & follow-up", d: "You receive the updated registration details and a short note on invoices, displayed details and returns to update." },
];

const MISTAKES = [
  { t: "Waiting too long to report", d: "Changes are generally reportable within a short period; delay can mean penalties and mismatches." },
  { t: "Treating a state change as an amendment", d: "GST is state-wise, so moving to another state generally needs a new registration, not an update." },
  { t: "Inconsistent documents", d: "An address or name that differs across PAN, bills and agreements is a common cause of queries." },
  { t: "Ignoring officer queries", d: "Core amendments have a short reply window; an unanswered query can lead to rejection." },
  { t: "Not updating invoices after approval", d: "New details must appear on invoices and be displayed at the place of business from the effective date." },
];

/* ══════════════════════ ROOT ══════════════════════ */

export default function GSTAmendmentClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="bg-slate-50 text-gray-800 overflow-x-clip">
      <GlobalStyles />
      <Hero />
      <InquiryFormButton />
      <SectionNav active={active} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14 grid lg:grid-cols-[1fr_340px] gap-10">
        <div className="min-w-0 space-y-16 md:space-y-20">
          <Overview />
          <Benefits />
          <Planner />
          <Included />
          <Who />
          <Deadline />
          <Documents />
          <Process />
          <Pitfalls />
          <FAQs faqs={faqs} />
          <Related />
        </div>
        <aside className="hidden lg:block">
          <SideCard />
        </aside>
      </div>

      <FinalCTA />
      <Footar />
    </main>
  );
}

/* ══════════════════════ PRIMITIVES ══════════════════════ */

function GlobalStyles() {
  return (
    <style>{`
      @keyframes am-aurora { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } 100% { transform: translate(0,0) scale(1); } }
      @keyframes am-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      .am-aurora { animation: am-aurora 14s ease-in-out infinite; }
      .am-float { animation: am-float 7s ease-in-out infinite; }
      .am-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
      .am-reveal.am-in { opacity: 1; transform: none; }
      .am-hide-scroll::-webkit-scrollbar { display: none; }
      .am-hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      @media (prefers-reduced-motion: reduce) {
        .am-aurora, .am-float { animation: none !important; }
        .am-reveal { opacity: 1; transform: none; transition: none; }
      }
    `}</style>
  );
}

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
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
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`am-reveal ${shown ? "am-in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Heading({ label, title }: { label: string; title: string }) {
  return (
    <Reveal className="mb-7">
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00416a]/70 border border-[#00416a]/15 bg-[#00416a]/5 px-3 py-1.5 rounded-full mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00416a]" />
        {label}
      </span>
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#00416a] leading-tight">{title}</h2>
    </Reveal>
  );
}

/* ══════════════════════ HERO + NAV ══════════════════════ */

function Hero() {
  const facts = [
    { k: "Fields", v: "Core & non-core" },
    { k: "GSTIN", v: "Stays the same" },
    { k: "Mode", v: "100% online" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="am-aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-sky-400/20 blur-3xl" />
      <div className="am-aurora absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-300/10 blur-3xl [animation-delay:-7s]" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at 25% 40%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 25% 40%, black 20%, transparent 70%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-12 pb-24 md:pt-16 md:pb-28 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div>
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-white transition">Home</Link><span>/</span>
            <Link href="/serviceslist" className="hover:text-white transition">Services</Link><span>/</span>
            <Link href="/serviceslist#gst" className="hover:text-white transition">GST Services</Link><span>/</span>
            <span className="text-white">GST Amendment / Update</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            ✏️ GST Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5">
            GST Amendment / Update{" "}
            <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-200 bg-clip-text text-transparent">
              — Accurate, On Time, CA-Reviewed
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mb-8">
            Update your GST registration details such as address, business name and contact details, with proper filing and approval tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={() => openInquiryForm(SERVICE)}
              className="group bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200"
            >
              Get a Free Quote <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a href="#planner" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center">
              Plan My Change
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {facts.map((q) => (
              <div key={q.k} className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl px-4 py-2.5">
                <p className="text-[10px] uppercase tracking-widest text-sky-200/70">{q.k}</p>
                <p className="font-bold text-sm">{q.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="am-float bg-white text-gray-800 rounded-3xl shadow-2xl shadow-black/30 p-6 rotate-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Your amendment, tracked</p>
            <p className="font-extrabold text-[#00416a] text-lg mb-4">Sample status view</p>
            <ul className="space-y-2.5 mb-5">
              {[
                { t: "Change classified", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "Documents verified", s: "Done", c: "bg-emerald-100 text-emerald-700" },
                { t: "Application filed (ARN)", s: "In progress", c: "bg-amber-100 text-amber-700" },
                { t: "Officer approval", s: "Next", c: "bg-sky-100 text-sky-700" },
                { t: "Amended certificate", s: "Next", c: "bg-sky-100 text-sky-700" },
              ].map((r) => (
                <li key={r.t} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5 text-sm">
                  <span className="flex-1 font-semibold">{r.t}</span>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${r.c}`}>{r.s}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-[#00416a] text-white px-4 py-3 text-sm flex items-center gap-3">
              <span className="text-xl">👨‍💼</span>
              <span><b>CA-reviewed</b> before every filing</span>
            </div>
          </div>
        </div>
      </div>
      <svg className="absolute bottom-0 left-0 w-full h-10 text-slate-50" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0,60 L0,30 Q360,-10 720,25 T1440,20 L1440,60 Z" />
      </svg>
    </section>
  );
}

function SectionNav({ active }: { active: string }) {
  return (
    <div className="sticky top-[72px] z-40 bg-white/85 backdrop-blur-xl border-b border-gray-200/80 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-3">
        <div className="flex-1 flex items-center gap-1.5 overflow-x-auto am-hide-scroll">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`flex-shrink-0 text-sm font-semibold px-3.5 py-2 rounded-full transition-all whitespace-nowrap ${
                active === n.id ? "bg-[#00416a] text-white shadow-md shadow-[#00416a]/25" : "text-[#00416a]/80 hover:bg-[#00416a]/5"
              }`}
            >
              {n.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => openInquiryForm(SERVICE)}
          className="hidden md:inline-flex flex-shrink-0 text-xs font-bold bg-[#00416a] text-white px-4 py-2.5 rounded-lg hover:bg-[#002b45] active:scale-95 transition"
        >
          Enquire now
        </button>
      </div>
    </div>
  );
}

/* ══════════════════════ SECTIONS ══════════════════════ */

function Overview() {
  return (
    <section id="overview" className="scroll-mt-40">
      <Heading label="Overview" title="What Is GST Amendment / Update?" />
      <div className="space-y-5">
        {INTRO.map((p, i) => (
          <Reveal key={i} delay={i * 70}>
            <p className={`pl-5 border-l-4 text-gray-700 leading-relaxed ${i === 0 ? "border-[#00416a]" : "border-[#00416a]/25"}`}>{p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="scroll-mt-40">
      <Heading label="Benefits" title="Why Professional GST Amendment / Update Pays Off" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {BENEFITS.map((b, i) => (
          <Reveal key={b.t} delay={i * 60}>
            <div className="group h-full bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-xl hover:shadow-[#00416a]/10 hover:-translate-y-1 hover:border-[#00416a]/30 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center text-xl mb-3 group-hover:scale-110 group-hover:-rotate-6 transition-transform">{b.icon}</div>
              <h3 className="font-bold text-[#00416a] mb-1">{b.t}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{b.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Included() {
  return (
    <section id="included" className="scroll-mt-40">
      <Heading label="What's Included" title="What You Get With GST Amendment / Update" />
      <div className="grid sm:grid-cols-2 gap-4">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 70}>
            <div className="group h-full bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-xl hover:shadow-[#00416a]/10 hover:-translate-y-1 hover:border-[#00416a]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00416a] to-[#0a6aa8] text-white flex items-center justify-center font-bold group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-bold text-[#00416a]">{f.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{f.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Who() {
  return (
    <section className="scroll-mt-40">
      <Heading label="Who It's For" title="Who Needs a GST Amendment" />
      <div className="grid sm:grid-cols-3 gap-4">
        {IDEAL.map((w, i) => (
          <Reveal key={w.t} delay={i * 70}>
            <div className="relative h-full overflow-hidden bg-gradient-to-br from-[#00416a] to-[#00527f] text-white rounded-2xl p-6 shadow-lg">
              <span className="absolute -right-4 -bottom-6 text-8xl opacity-10 select-none">{w.icon}</span>
              <div className="relative">
                <p className="text-2xl mb-2">{w.icon}</p>
                <h3 className="font-bold text-lg mb-1.5">{w.t}</h3>
                <p className="text-sm text-sky-100/90 leading-relaxed">{w.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/** Change planner */
function Planner() {
  const [sel, setSel] = useState<string[]>([]);
  const chosen = CHANGES.filter((c) => sel.includes(c.id));
  const core = chosen.filter((c) => c.kind === "core");
  const non = chosen.filter((c) => c.kind === "non-core");
  const toggle = (id: string) => setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  return (
    <section id="planner" className="scroll-mt-40">
      <Heading label="Change Planner" title="What Are You Changing? Core or Non-Core?" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Select everything that has changed in your business. We show whether each item is a core field, which generally
          needs the officer&apos;s approval, or a non-core field, which is generally updated without approval.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-2.5">
            {CHANGES.map((c) => {
              const on = sel.includes(c.id);
              return (
                <button
                  key={c.id}
                  onClick={() => toggle(c.id)}
                  aria-pressed={on}
                  className={`text-left flex items-center gap-3 rounded-xl border px-4 py-3 transition-all ${on ? "bg-[#00416a] text-white border-[#00416a] shadow-lg shadow-[#00416a]/20" : "bg-gray-50 border-gray-200 hover:border-[#00416a]/40"}`}
                >
                  <span className="text-xl">{c.icon}</span>
                  <span className="flex-1 text-sm font-semibold">{c.label}</span>
                  <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${on ? "bg-white/20" : c.kind === "core" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-700"}`}>{c.kind}</span>
                </button>
              );
            })}
          </div>

          {chosen.length > 0 && (
            <div className="mt-6 space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <p className="text-xs uppercase tracking-widest font-bold text-amber-700">Core changes</p>
                  <p className="text-2xl font-extrabold text-amber-900">{core.length}</p>
                  <p className="text-sm text-gray-600">{core.length ? "Officer approval generally required." : "None selected."}</p>
                </div>
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="text-xs uppercase tracking-widest font-bold text-emerald-700">Non-core changes</p>
                  <p className="text-2xl font-extrabold text-emerald-900">{non.length}</p>
                  <p className="text-sm text-gray-600">{non.length ? "Generally updated without approval." : "None selected."}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {chosen.map((c) => (
                  <li key={c.id} className="rounded-xl bg-sky-50 border border-sky-100 px-4 py-3 text-sm text-[#00416a]">
                    <b>{c.label}:</b> <span className="text-gray-700">{c.note}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => openInquiryForm(SERVICE)} className="text-sm font-bold bg-[#00416a] text-white px-5 py-3 rounded-lg hover:bg-[#002b45] transition">
                Get these changes filed →
              </button>
            </div>
          )}
          <p className="mt-4 text-xs text-gray-400">Indicative classification. Treatment of fields can change by notification; our CA confirms your case.</p>
        </div>
      </Reveal>
    </section>
  );
}

/** Reporting deadline tracker */
function Deadline() {
  const [changeDate, setChangeDate] = useState("");
  const [today, setToday] = useState<Date | null>(null);
  useEffect(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    setToday(d);
  }, []);

  const info = useMemo(() => {
    if (!changeDate || !today) return null;
    const start = new Date(changeDate + "T00:00:00");
    if (isNaN(start.getTime())) return null;
    const due = new Date(start);
    due.setDate(due.getDate() + 15);
    const diff = Math.round((due.getTime() - today.getTime()) / 86400000);
    return { due, diff };
  }, [changeDate, today]);

  const fmt = (d: Date) => d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

  return (
    <section id="deadline" className="scroll-mt-40">
      <Heading label="Reporting Deadline" title="How Soon Must You Report a Change?" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          GST law generally requires changes in registration details to be reported within a short prescribed period, commonly
          fifteen days from the date of the change. Enter the date your details changed to see an indicative reporting date.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <label className="block max-w-xs">
            <span className="text-sm font-semibold text-gray-700">Date the change happened</span>
            <input type="date" value={changeDate} onChange={(e) => setChangeDate(e.target.value)} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-[#00416a]" />
          </label>
          {info && (
            <div className={`mt-5 rounded-2xl border p-5 ${info.diff < 0 ? "bg-red-50 border-red-200" : info.diff <= 5 ? "bg-amber-50 border-amber-200" : "bg-emerald-50 border-emerald-200"}`}>
              <p className="text-xs uppercase tracking-widest font-bold text-[#00416a]/60 mb-1">Indicative reporting date</p>
              <p className="text-xl font-extrabold text-[#00416a]">{fmt(info.due)}</p>
              <p className="text-sm text-gray-700 mt-1">
                {info.diff < 0 ? `This date has passed by ${Math.abs(info.diff)} day${Math.abs(info.diff) === 1 ? "" : "s"}. File as soon as possible.` : info.diff === 0 ? "Due today." : `${info.diff} day${info.diff === 1 ? "" : "s"} left.`}
              </p>
              <button onClick={() => openInquiryForm(SERVICE)} className="mt-3 text-sm font-bold bg-[#00416a] text-white px-4 py-2 rounded-lg hover:bg-[#002b45] transition">File my amendment →</button>
            </div>
          )}
          <p className="mt-4 text-xs text-gray-400">Indicative only. The reporting period and its start depend on the field and current rules; our CA confirms the exact date.</p>
        </div>
      </Reveal>
    </section>
  );
}

function Documents() {
  const [tab, setTab] = useState(CHANGES[0].id);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const cur = CHANGES.find((c) => c.id === tab) ?? CHANGES[0];
  const done = cur.docs.filter((d) => checked[tab + d]).length;
  const pct = Math.round((done / cur.docs.length) * 100);

  return (
    <section id="documents" className="scroll-mt-40">
      <Heading label="Documents" title="Documents Required for GST Amendment" />
      <Reveal>
        <p className="text-gray-600 leading-relaxed mb-6">
          Every amendment needs your GSTIN and the identity of the authorised signatory, plus proof for the specific change.
          Choose your change to see the checklist. Names and addresses must be consistent across documents.
        </p>
        <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 shadow-sm">
          <div className="flex flex-wrap gap-2 mb-5" role="tablist">
            {CHANGES.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={tab === c.id}
                onClick={() => setTab(c.id)}
                className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold border transition ${tab === c.id ? "bg-[#00416a] text-white border-[#00416a]" : "bg-white text-[#00416a] border-[#00416a]/20 hover:border-[#00416a]/50"}`}
              >
                {c.icon} {c.label}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between mb-3">
            <p className="font-bold text-[#00416a]">Your document checklist</p>
            <p className="text-sm font-semibold text-gray-500 tabular-nums">{done}/{cur.docs.length} ready</p>
          </div>
          <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden mb-5">
            <div className="h-full rounded-full bg-gradient-to-r from-[#00416a] to-emerald-500 transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
          <ul className="space-y-2.5">
            {cur.docs.map((d) => {
              const on = !!checked[tab + d];
              return (
                <li key={d}>
                  <label className={`flex items-center gap-3 cursor-pointer rounded-xl border px-4 py-3 transition-all ${on ? "bg-emerald-50 border-emerald-200" : "bg-gray-50 border-gray-200 hover:border-[#00416a]/30"}`}>
                    <input type="checkbox" checked={on} onChange={() => setChecked((c) => ({ ...c, [tab + d]: !on }))} className="w-5 h-5 accent-[#00416a]" />
                    <span className={`text-sm font-medium ${on ? "text-emerald-800 line-through decoration-emerald-400" : "text-gray-800"}`}>{d}</span>
                  </label>
                </li>
              );
            })}
          </ul>
          <div className={`mt-5 rounded-2xl px-5 py-4 text-sm flex flex-col sm:flex-row sm:items-center gap-3 ${pct === 100 ? "bg-emerald-50 text-emerald-900" : "bg-sky-50 text-[#00416a]"}`}>
            <span className="flex-1 font-medium">{pct === 100 ? "🎉 Everything for this change is ready." : "Also keep your GSTIN and PAN / Aadhaar handy. Missing something? We'll help."}</span>
            <button onClick={() => openInquiryForm(SERVICE)} className="bg-[#00416a] text-white font-bold px-4 py-2.5 rounded-lg hover:bg-[#002b45] transition">Ask us →</button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Pitfalls() {
  return (
    <section id="mistakes" className="scroll-mt-40">
      <Heading label="Pitfalls" title="Common GST Amendment Mistakes" />
      <div className="space-y-3">
        {MISTAKES.map((m, i) => (
          <Reveal key={m.t} delay={i * 50}>
            <div className="flex gap-4 bg-amber-50/70 border border-amber-200/70 rounded-2xl p-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-200 text-amber-900 font-bold flex items-center justify-center">!</span>
              <div>
                <p className="font-bold text-gray-800">{m.t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{m.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-6 text-sm text-gray-500">
          Starting fresh? See <Link href="/serviceslist/gst/gst-registration" className="font-semibold text-[#00416a] hover:underline">GST registration</Link> or all <Link href="/serviceslist#gst" className="font-semibold text-[#00416a] hover:underline">GST services</Link>.
        </p>
      </Reveal>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="scroll-mt-40">
      <Heading label="Process" title="How Our GST Amendment / Update Works" />
      <ol className="relative space-y-5 before:absolute before:left-[27px] before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#00416a]/40 before:to-[#00416a]/5">
        {STEPS.map((s, i) => (
          <Reveal key={s.t} delay={i * 70}>
            <li className="relative flex gap-5">
              <span className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00416a] to-[#0a6aa8] text-white flex items-center justify-center text-lg font-extrabold shadow-lg shadow-[#00416a]/25">{i + 1}</span>
              <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg hover:border-[#00416a]/30 transition-all">
                <h3 className="font-bold text-[#00416a] mb-1.5">{s.t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.d}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
      <Reveal>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-2xl mb-2">💰</p>
            <h3 className="font-bold text-[#00416a] mb-2">What does it cost?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              There is generally no government fee for a registration amendment on the portal. Our professional fee depends on how many fields change and whether officer approval is needed, and you receive a written quote before we start.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-2xl mb-2">⏱️</p>
            <h3 className="font-bold text-[#00416a] mb-2">How long does it take?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Non-core updates are generally quick. Core changes depend on the officer&apos;s review and any queries, so timelines vary by case and tax office. We track the application and respond on your behalf.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function FAQs({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="scroll-mt-40">
      <Heading label="FAQs" title="GST Amendment — Frequently Asked Questions" />
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={Math.min(i, 5) * 40}>
              <div className={`rounded-2xl border bg-white transition-all duration-300 ${isOpen ? "border-[#00416a]/40 shadow-lg shadow-[#00416a]/10" : "border-gray-200 hover:border-[#00416a]/25"}`}>
                <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className={`font-bold ${isOpen ? "text-[#00416a]" : "text-gray-800"}`}>{f.q}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${isOpen ? "bg-[#00416a] text-white rotate-45" : "bg-[#00416a]/10 text-[#00416a]"}`}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden"><p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{f.a}</p></div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Related() {
  const gst = serviceCategories.find((c) => c.slug === "gst");
  const items = (gst?.services ?? []).filter((s) => s.slug !== "gst-amendment").slice(0, 6);
  if (!items.length) return null;
  return (
    <section className="scroll-mt-40">
      <Heading label="Related Services" title="More GST Services" />
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((r, i) => (
          <Reveal key={r.slug} delay={i * 60}>
            <Link
              href={`/serviceslist/gst/${r.slug}`}
              className="group block h-full bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-xl hover:shadow-[#00416a]/10 hover:-translate-y-1 hover:border-[#00416a]/30 transition-all duration-300"
            >
              <h3 className="font-bold text-[#00416a] mb-1.5 leading-snug">{r.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">{r.shortDescription}</p>
              <span className="text-sm font-semibold text-[#00416a] inline-flex items-center gap-1">
                Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ SIDEBAR + CTA ══════════════════════ */

function SideCard() {
  return (
    <div className="sticky top-40 space-y-4">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white p-6 shadow-xl">
        <div className="am-aurora absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-400/25 blur-2xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-sky-200 font-semibold mb-2">Free consultation</p>
          <h3 className="font-extrabold text-xl leading-snug mb-2">Update your GST details correctly</h3>
          <p className="text-sm text-sky-100/85 leading-relaxed mb-5">Tell us about your business — a CA from our team will call you back with a clear plan and a fixed quote.</p>
          <button onClick={() => openInquiryForm(SERVICE)} className="w-full bg-white text-[#00416a] font-bold py-3.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition">
            Get a Free Quote →
          </button>
          <ul className="mt-4 space-y-1.5 text-sm text-white/80">
            <li>✓ No obligation</li>
            <li>✓ Fixed quote upfront</li>
            <li>✓ 100% online</li>
          </ul>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-5">
        <p className="font-bold text-[#00416a] mb-3 text-sm">On this page</p>
        <ul className="space-y-1.5">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="text-sm text-gray-600 hover:text-[#00416a] hover:translate-x-1 inline-block transition">{n.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] shadow-2xl px-6 py-12 sm:px-12 sm:py-16 text-white">
          <div className="am-aurora absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Need to update your GST registration?</h3>
              <p className="text-lg text-sky-100/90 leading-relaxed">Share your requirement in 30 seconds. A CA from our team will call you back with a clear plan and honest pricing.</p>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3">
              <button onClick={() => openInquiryForm(SERVICE)} className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-all">
                Get a Free Quote →
              </button>
              <Link href="/serviceslist" className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition text-center">
                All Services
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}