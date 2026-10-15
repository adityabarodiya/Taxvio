"use client";

/**
 * <InquiryFormButton />
 * ---------------------------------------------------------------
 * A fixed, attention-grabbing button (bottom-right) that opens the
 * lead-capture form in a modal popup. Self-contained — drop it into
 * any page (ideally your root layout.tsx) so it appears on every
 * page of the site as the single persistent contact CTA, replacing
 * WhatsApp/call buttons.
 *
 * Other buttons anywhere on the site (hero CTAs, final CTAs, etc.)
 * can open this same modal without any prop drilling — just import
 * and call the exported `openInquiryForm()` helper on click:
 *
 *   import { openInquiryForm } from "@/components/InquiryFormButton";
 *   <button onClick={openInquiryForm}>Enquire Now</button>
 * ---------------------------------------------------------------
 */

const OPEN_EVENT = "taxvio:open-inquiry-form";

/**
 * Call this from any component to open the inquiry modal.
 * Optionally pass a service title (must match a `title` in
 * serviceCategories) to pre-select it in the Service dropdown —
 * handy for "Enquire about GST Registration" style buttons.
 */
export function openInquiryForm(serviceTitle?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: { service: serviceTitle } }));
  }
}

import { useEffect, useState } from "react";
import { serviceCategories } from "@/data/serviceCategories"; // ← adjust this import path to match where serviceCategories.ts actually lives in your repo

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
  firstName: "", lastName: "", phone: "", email: "", state: "", service: "", message: "",
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function InquiryFormButton() {
  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  // Lock background scroll while the modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Let other buttons elsewhere on the page open this same modal,
  // optionally pre-filling the Service dropdown
  useEffect(() => {
    const handler = (e: Event) => {
      const service = (e as CustomEvent<{ service?: string }>).detail?.service;
      if (service) setForm((prev) => ({ ...prev, service }));
      setIsOpen(true);
    };
    window.addEventListener(OPEN_EVENT, handler);
    return () => window.removeEventListener(OPEN_EVENT, handler);
  }, []);

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
      source: "Inquiry Popup Button — taxvio.in",
    };

    try {
      if (!GOOGLE_SCRIPT_URL) throw new Error("Form backend not configured");
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("Inquiry form submission error:", err);
      setStatus("error");
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    // Reset status after the close animation would finish, so the form
    // doesn't flash back to "success" state if reopened immediately.
    setTimeout(() => setStatus("idle"), 200);
  };

  return (
    <>
      <style>{`
        @keyframes inq-wiggle {
          0%, 80%, 100% { transform: rotate(0deg) scale(1); }
          82% { transform: rotate(-12deg) scale(1.05); }
          84% { transform: rotate(10deg) scale(1.05); }
          86% { transform: rotate(-8deg) scale(1.05); }
          88% { transform: rotate(6deg) scale(1.05); }
          90% { transform: rotate(-4deg) scale(1.02); }
          92% { transform: rotate(2deg) scale(1.02); }
        }
        @keyframes inq-ping-slow {
          0% { transform: scale(1); opacity: 0.5; }
          75%, 100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes inq-bubble-in {
          from { opacity: 0; transform: translateY(8px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes inq-modal-in {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .inq-fab-btn { animation: inq-wiggle 4s ease-in-out infinite; }
        .inq-fab-ring { animation: inq-ping-slow 2.2s cubic-bezier(0,0,0.2,1) infinite; }
        .inq-fab-bubble { animation: inq-bubble-in 0.3s ease-out; }
        .inq-modal-card { animation: inq-modal-in 0.25s ease-out; }
      `}</style>

      {/* FIXED BUTTON — bottom-right */}
      {!isOpen && (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:block bg-white text-gray-800 text-sm font-semibold px-4 py-3 rounded-2xl rounded-br-sm shadow-xl border max-w-[210px] text-left hover:shadow-2xl transition-shadow"
          >
            📝 Get a free quote — takes 30 seconds!
          </button>

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open enquiry form"
            className="inq-fab-btn relative flex items-center justify-center w-16 h-16 rounded-full bg-[#00416a] shadow-2xl ring-4 ring-white hover:scale-110 transition-transform duration-200"
          >
            <span className="inq-fab-ring absolute inset-0 rounded-full bg-[#00416a]" />
            <svg viewBox="0 0 24 24" className="relative w-8 h-8 fill-none stroke-white" strokeWidth={2.75}>
              <path d="M9 11.5l2.5 2.5L22 3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}

      {/* MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50"
          onClick={closeModal}
        >
          <div
            className="inq-modal-card bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto p-4 sm:p-6 md:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition"
            >
              ✕
            </button>

            <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5 mb-3">
              Free Consultation
            </span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#00416a] mb-1 pr-8">
              Get a Callback Within Hours
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-6">
              <span className="text-red-500 font-semibold">*</span> Required fields only — takes under a minute.
            </p>

            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 sm:p-8 text-center">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="text-lg font-bold text-green-800 mb-2">Thank you — request received!</h3>
                <p className="text-green-700 text-sm mb-6">
                  Our team will reach out on the number you provided, usually within a few hours
                  during business days.
                </p>
                <button
                  onClick={closeModal}
                  className="bg-[#00416a] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#002b45] transition"
                >
                  Done
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
                    ⚠️ Something went wrong. Please check your details and try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#00416a] text-white px-10 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:bg-[#002b45] hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Submitting…" : "Get My Free Consultation →"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
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