"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust this import path to match where serviceCategories.ts actually lives in your repo
import InquiryFormButton from "@/components/InquiryFormButton"; // ← adjust path to match where you save InquiryFormButton.tsx

/* ══════════════════════════════════════════════════════════
   CONFIG
   ══════════════════════════════════════════════════════════ */

// Set this in .env.local as NEXT_PUBLIC_GOOGLE_SCRIPT_URL after you
// deploy the Google Apps Script web app (see setup steps provided separately).
const GOOGLE_SCRIPT_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ??
  "https://script.google.com/macros/s/AKfycbzQa2vYEo6rdMi75hHf3YZDdIKpmAzLyKpaVRdwU54UrLPpBOmQBiQSikyzZWR_WAGnyQ/exec";

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi (NCT)",
  "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
];

/* ══════════════════════════════════════════════════════════ */

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  state: string;
  service: string;
  message: string;
}

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  state: "",
  service: "",
  message: "",
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function ContactClient() {
  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">
      <HeroWithForm />
      <InquiryFormButton />

      <StatsBar />
      <TrustBadges />
      <ServicesOverview />
      <ProcessSection />
      <Testimonials />
      <OfficesSection />
      <FAQSection />
      <FinalCTA />

      <Footar />
    </main>
  );
}

/* ══════════════════════ HERO + FORM (first view) ══════════════════════ */

function HeroWithForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    const phoneDigits = form.phone.replace(/[^0-9]/g, "").slice(-10);

    if (!form.firstName.trim()) next.firstName = "First name is required";
    if (!form.phone.trim()) next.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(phoneDigits)) next.phone = "Enter a valid 10-digit mobile number";
    if (!form.state) next.state = "Please select your state";
    if (!form.service) next.service = "Please select a service";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Enter a valid email address";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    const payload = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      state: form.state,
      service: form.service,
      message: form.message.trim(),
      submittedAt: new Date().toISOString(),
      source: "Contact Page — taxvio.in",
    };

    try {
      if (!GOOGLE_SCRIPT_URL) throw new Error("Form backend not configured");

      // text/plain avoids a CORS preflight (OPTIONS) request, which Google
      // Apps Script web apps do not handle. The script parses JSON from
      // e.postData.contents on the receiving end.
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("Contact form submission error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10" />
      <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-5 sm:py-14 md:py-20">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">

          {/* FORM — order-1 so it's the first thing visible on mobile, compacted to fit one mobile screen */}
          <div id="enquiry-form" className="order-1 lg:order-2 lg:col-span-3">
            <div className="bg-white text-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8">
              <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5 mb-3">
                Free Consultation
              </span>
              <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#00416a] mb-1">
                Get a Callback Within Hours
              </h1>
              <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-6">
                <span className="text-red-500 font-semibold">*</span> Required fields only — takes under a minute.
              </p>

              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 sm:p-8 text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2">Thank you — we've got your request!</h3>
                  <p className="text-green-700 text-sm mb-6">
                    Our team will reach out on the number you provided, usually within a few hours
                    during business days.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-sm font-semibold text-green-800 underline hover:no-underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-3 sm:space-y-5">
                  <div className="grid grid-cols-2 gap-3 sm:gap-5">
                    <FormField label="First Name" required error={errors.firstName}>
                      <input
                        type="text"
                        value={form.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        placeholder="Rahul"
                        className={inputClass(!!errors.firstName)}
                      />
                    </FormField>

                    <FormField label="Last Name" error={errors.lastName}>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        placeholder="Gupta"
                        className={inputClass(false)}
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-5">
                    <FormField label="Phone Number" required error={errors.phone}>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="10-digit number"
                        maxLength={15}
                        className={inputClass(!!errors.phone)}
                      />
                    </FormField>

                    <FormField label="Email" error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="Optional"
                        className={inputClass(!!errors.email)}
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-5">
                    <FormField label="State" required error={errors.state}>
                      <select
                        value={form.state}
                        onChange={(e) => handleChange("state", e.target.value)}
                        className={inputClass(!!errors.state)}
                      >
                        <option value="">Select</option>
                        {INDIAN_STATES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </FormField>

                    <FormField label="Service" required error={errors.service}>
                      <select
                        value={form.service}
                        onChange={(e) => handleChange("service", e.target.value)}
                        className={inputClass(!!errors.service)}
                      >
                        <option value="">Select</option>
                        {serviceCategories.map((cat) => (
                          <optgroup key={cat.slug} label={cat.category}>
                            {cat.services.map((s) => (
                              <option key={s.slug} value={s.title}>{s.title}</option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  {/* Optional field tucked behind a toggle so it doesn't add height by default */}
                  <details className="group">
                    <summary className="text-xs font-semibold text-[#00416a] cursor-pointer list-none flex items-center gap-1 select-none">
                      <span className="group-open:rotate-45 transition-transform duration-150 inline-block">+</span>
                      Add more details (optional)
                    </summary>
                    <div className="mt-2">
                      <textarea
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us briefly about your requirement"
                        rows={2}
                        className={inputClass(false)}
                      />
                    </div>
                  </details>

                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-red-700">
                      ⚠️ Something went wrong submitting your enquiry. Please check your details and try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-[#00416a] text-white px-10 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:bg-[#002b45] hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Submitting…" : "Get My Free Consultation →"}
                  </button>

                  <p className="hidden sm:block text-xs text-gray-400 text-center">
                    🔒 Your information is kept confidential and used only to respond to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* HEADLINE + TRUST — order-2 so it follows the form on mobile */}
          <div className="order-2 lg:order-1 lg:col-span-2 lg:pt-4">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              🏢 India's Growing CA-Led Compliance Firm
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-5">
              Talk to a Tax Expert,<br />Not a Ticket Number
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              GST, Income Tax, ROC compliance, or an FSSAI license — one CA-led team handles it
              all, with transparent pricing and no chasing emails for updates.
            </p>

            <div className="space-y-4 mb-8">
              {[
                ["⚡", "Usually respond within a few business hours"],
                ["👨‍💼", "Every filing reviewed by a practicing CA"],
                ["🇮🇳", "Serving clients across every Indian state"],
                ["🔒", "Your data is never shared or sold"],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-start gap-3 text-sm text-gray-200">
                  <span className="text-lg">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-2 text-sm text-white/70">
              <span className="text-lg">👈</span>
              <span>Fill the form — we'll call you back, no need to dial in.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ STATS ══════════════════════ */

function StatsBar() {
  const stats = [
    { number: "5,000+", label: "Businesses Served", icon: "🏢" },
    { number: "50+", label: "Cities Covered Pan-India", icon: "📍" },
    { number: "4", label: "Compliance Verticals — GST, IT, ROC, FSSAI", icon: "📋" },
    { number: "100%", label: "CA-Reviewed Filings", icon: "👨‍💼" },
  ];
  return (
    <section className="bg-gray-50 py-14 border-b">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-2">{s.icon}</div>
            <p className="text-2xl font-extrabold text-[#00416a] mb-1">{s.number}</p>
            <p className="text-gray-500 text-sm font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ TRUST BADGES ══════════════════════ */

function TrustBadges() {
  const items = [
    { icon: "👨‍💼", title: "CA-Supervised Filings", desc: "Every return and registration is reviewed by a practicing Chartered Accountant before submission — not just form-filled." },
    { icon: "💰", title: "Transparent Pricing", desc: "Upfront quotes with no hidden charges. You know exactly what you're paying for before we begin." },
    { icon: "📋", title: "One Simple Enquiry Form", desc: "No app downloads, no account setup — tell us what you need once and a CA calls you back." },
    { icon: "🇮🇳", title: "Pan-India Coverage", desc: "From Khatauli to Mumbai — we serve clients across every state, entirely online where needed." },
    { icon: "⏱️", title: "On-Time Filing Focus", desc: "Deadline tracking built into our process so your GST, ROC and IT compliance never lapses." },
    { icon: "🔒", title: "Confidential by Default", desc: "Your financial documents and personal data are never shared with third parties." },
  ];
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel text="Why Taxvio" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Built to Be Your Long-Term Compliance Partner
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <div key={item.title} className="p-6 rounded-2xl border bg-gray-50 hover:bg-white hover:shadow-md hover:border-[#00416a]/30 transition">
            <div className="text-3xl mb-3">{item.icon}</div>
            <p className="font-semibold text-[#00416a] mb-1">{item.title}</p>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ SERVICES OVERVIEW ══════════════════════ */

function ServicesOverview() {
  const lines = [
    { title: "GST Services", icon: "🧾", link: "/serviceslist/gst", desc: "Registration, monthly returns, refunds, LUT, audits, notice replies and e-commerce/freelancer compliance." },
    { title: "Income Tax", icon: "📊", link: "/serviceslist/income-tax", desc: "ITR filing for every entity type, tax audits, TDS/TCS returns, notice handling, and NRI taxation." },
    { title: "ROC / Company Law", icon: "🏢", link: "/serviceslist/roc", desc: "Company & LLP incorporation, annual ROC compliance, director changes, closures and conversions." },
    { title: "FSSAI Licensing", icon: "🍽️", link: "/serviceslist/fssai", desc: "Basic, State and Central food licenses, renewals, modifications and annual returns." },
  ];
  return (
    <section className="bg-gray-50 py-20 border-y">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel text="What We Handle" />
        <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
          One Firm for Every Compliance Need
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lines.map((l) => (
            <Link key={l.title} href={l.link} className="block bg-white border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group">
              <div className="text-3xl mb-3">{l.icon}</div>
              <h3 className="font-bold text-[#00416a] mb-2">{l.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{l.desc}</p>
              <span className="text-sm text-[#00416a] font-semibold group-hover:underline">Explore Services →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ PROCESS ══════════════════════ */

function ProcessSection() {
  const steps = [
    { step: "01", title: "Share Your Requirement", desc: "Fill the form above or message us on WhatsApp with what you need — GST, ITR, ROC or FSSAI." },
    { step: "02", title: "Free Consultation Call", desc: "A CA from our team reviews your case and calls you back, usually within a few business hours." },
    { step: "03", title: "Documentation & Filing", desc: "Send documents over WhatsApp or email — our team prepares and files everything on your behalf." },
    { step: "04", title: "Confirmation & Ongoing Support", desc: "You receive acknowledgement copies, and we track your future compliance deadlines for you." },
  ];
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel text="How It Works" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-12">
        From Enquiry to Filed — In Four Steps
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.step} className="bg-white border rounded-2xl p-6 hover:shadow-md transition relative">
            <span className="text-4xl font-extrabold text-[#00416a]/10 absolute top-4 right-5">{s.step}</span>
            <h3 className="text-lg font-bold text-[#00416a] mb-2 relative">{s.title}</h3>
            <p className="text-sm text-gray-600 relative">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ TESTIMONIALS ══════════════════════ */

function Testimonials() {
  const reviews = [
    { name: "Priya Enterprises", location: "Meerut", text: "Reached out on WhatsApp expecting a slow reply and got a callback the same afternoon. GST registration was done within days, no back-and-forth confusion." },
    { name: "Verma Traders", location: "Muzaffarnagar", text: "We've used three different consultants before Taxvio. This is the first time pricing was clear upfront with nothing added later." },
    { name: "Singh & Associates", location: "Ghaziabad", text: "Our ROC annual filing and income tax were handled together by the same team — saved us from coordinating between two different consultants." },
  ];
  return (
    <section className="bg-gray-50 py-20 border-y">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel text="Client Stories" />
        <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
          Trusted by Businesses Across India
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="border rounded-2xl p-6 hover:shadow-lg transition bg-white">
              <div className="flex mb-3">
                {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400 text-lg">★</span>)}
              </div>
              <p className="mb-4 text-gray-700 text-sm leading-relaxed italic">"{r.text}"</p>
              <p className="font-bold text-[#00416a]">{r.name}</p>
              <p className="text-sm text-gray-500">{r.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ OFFICES / COVERAGE ══════════════════════ */

function OfficesSection() {
  const cities = ["Khatauli", "Muzaffarnagar", "Noida", "Delhi NCR", "Meerut", "Mumbai"];
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionLabel text="Our Reach" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
        Serving Businesses Across India
      </h2>
      <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
        Headquartered in <strong>Khatauli, Muzaffarnagar, UP</strong>, with dedicated client
        coverage across <strong>Noida</strong>, <strong>Delhi NCR</strong>, <strong>Meerut</strong>,
        {" "}<strong>Ghaziabad</strong>, and <strong>Mumbai</strong> — and full compliance support
        online for every state and union territory in India.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {cities.map((city) => (
          <div key={city} className="bg-gray-50 border rounded-xl p-4 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition cursor-default">
            📍 {city}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════ FAQ ══════════════════════ */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "How quickly will I get a response?", a: "Most enquiries are responded to within a few business hours on WhatsApp or phone, Monday to Saturday. For urgent matters, WhatsApp is the fastest channel." },
    { q: "Is the initial consultation really free?", a: "Yes. The first consultation call to understand your requirement and give you a clear quote is completely free, with no obligation to proceed." },
    { q: "Do you serve businesses outside Uttar Pradesh?", a: "Yes. While we're headquartered in Khatauli, Muzaffarnagar, our GST, Income Tax, ROC and FSSAI services are delivered fully online to clients across every Indian state." },
    { q: "I'm not sure which service I need — can I still reach out?", a: "Absolutely. Select the closest matching service in the form, add details in the 'Additional Information' box, and our team will guide you to the right solution on the call." },
    { q: "Is my information kept confidential?", a: "Yes. Your personal and financial details are used only to respond to your enquiry and deliver the service you request — never shared or sold to third parties." },
  ];

  return (
    <section className="bg-gray-50 py-20 border-y">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel text="FAQs" />
        <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
          Common Questions Before You Reach Out
        </h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group border rounded-2xl overflow-hidden bg-white"
              open={open === i}
              onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open ? i : null)}>
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
                <span>{f.q}</span>
                <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-4">+</span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ FINAL CTA ══════════════════════ */

function FinalCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] rounded-3xl shadow-2xl px-8 py-14 md:px-14 md:py-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Still Deciding? Just Say Hello.
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              You don't need everything figured out before reaching out. Tell us what's on your
              mind and our team will help you find the right next step — no pressure, no pitch.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
            <button
              onClick={() => document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
            >
              📝 Fill the Enquiry Form
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ HELPERS ══════════════════════ */

function inputClass(hasError: boolean) {
  return `border p-2.5 sm:p-3 rounded-xl w-full text-sm focus:outline-none focus:ring-2 transition min-w-0 ${
    hasError ? "border-red-400 focus:ring-red-300" : "border-gray-200 focus:ring-[#00416a]/40"
  }`;
}

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block font-semibold text-gray-700 mb-1 sm:mb-2 text-xs sm:text-sm truncate">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}