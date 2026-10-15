// app/serviceslist/income-tax/efiling-login-assistance/EFilingLoginClient.tsx
"use client";

import Footar from "@/components/Footar";
import Link from "next/link";
import { useState } from "react";

import InquiryForm from "@/components/InquiryFormButton";
/* ── JSON-LD SCHEMA ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "E-Filing Login & Portal Assistance - Registration, Password Reset & Navigation Support",
  provider: {
    "@type": "AccountingService",
    name: "Taxvio",
    areaServed: "India",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Khatauli",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  },
  description:
    "Complete support for income tax e-filing portal registration, login issues, password reset, profile update, EVC generation, and portal navigation. Expert assistance for first-time filers, senior citizens, and individuals facing technical difficulties. Serving Khatauli, Muzaffarnagar and pan-India.",
  serviceType: "Income Tax E-Filing Portal Assistance",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "499",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: "499",
      maxPrice: "799",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Income Tax e-filing portal and why do I need to register?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Income Tax e-filing portal (https://eportal.incometax.gov.in) is the official government website for filing income tax returns, checking refund status, responding to notices, and managing your tax compliance. Registration is mandatory for all taxpayers to file ITR, verify returns, download Form 16, and access tax-related services.",
      },
    },
    {
      "@type": "Question",
      name: "How do I register on the e-filing portal for the first time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit the e-filing portal, click 'Register', select 'Individual', enter your PAN, Aadhaar, mobile number, and email. Validate using OTP sent to mobile and email. Create a strong password, complete profile details, and submit. Your user ID is your PAN.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if I forgot my e-filing portal password?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Click 'Forgot Password' on the login page, enter your PAN, validate using Aadhaar OTP or registered mobile/email OTP, create a new password following the portal's password policy (8-15 characters, uppercase, lowercase, number, special character), and submit. You can login immediately with the new password.",
      },
    },
  ],
};

/* ══════════════════════════════════════════════════════════ */
export default function EFilingLoginClient() {
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
      <InquiryForm />
      <main className="bg-white text-gray-800 overflow-x-hidden">
        {/* ── URGENCY BANNER ── */}
        <div
          className="bg-red-600 text-white text-center py-3 font-semibold text-sm px-4"
          role="alert"
        >
          🔐 New to E-Filing Portal? Get Registered & Start Filing ITR in 30 Minutes — Expert Assistance Available
        </div>

        {/* ── HERO ── */}
        <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10" />
          <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />

          <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
            <nav className="mb-6 text-sm text-white/60 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <span>/</span>
              <Link href="/serviceslist" className="hover:text-white transition">
                Services
              </Link>
              <span>/</span>
              <Link
                href="/serviceslist/income-tax"
                className="hover:text-white transition"
              >
                Income Tax
              </Link>
              <span>/</span>
              <span className="text-white">E-Filing Login Assistance</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  🔐 Portal Access Support
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  E-Filing Login
                  <br />
                  <span className="text-[#7ecbf0]">Portal Assistance</span>
                  <br />
                  Complete Guide
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                  Struggling to register or login to the{" "}
                  <strong className="text-white">Income Tax e-filing portal</strong>?
                  Forgot your password or facing OTP issues? Can't navigate the
                  portal or update your profile? <strong className="text-white">Taxvio</strong>{" "}
                  provides complete technical support for portal registration, login
                  credential recovery, password reset, EVC generation, profile
                  updates, and step-by-step navigation guidance — ensuring you can
                  access your account and file ITR without technical barriers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                  >
                    Get Portal Help — ₹499 →
                  </Link>
                 
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
                  {[
                    "✅ First-Time Registration",
                    "✅ Password Reset Support",
                    "✅ Senior Citizen Friendly",
                    "✅ Same-Day Resolution",
                  ].map((t) => (
                    <span
                      key={t}
                      className="bg-white/10 border border-white/20 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* hero card */}
              <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">
                  Quick Facts
                </p>
                <ul className="space-y-4 text-sm text-gray-200">
                  {[
                    ["🌐", "Official portal: eportal.incometax.gov.in"],
                    ["🆔", "User ID is your PAN number"],
                    ["📱", "OTP sent to mobile & email for security"],
                    ["🔑", "Password policy: 8-15 characters"],
                    ["💰", "Registration assistance: ₹499"],
                    ["🚀", "Same-day portal access setup"],
                  ].map(([icon, text]) => (
                    <li key={text as string} className="flex items-start gap-3">
                      <span className="text-base">{icon}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-gray-50 py-14 border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "10 Lakh+", label: "Users Registered", icon: "👥" },
              { number: "24/7", label: "Portal Availability", icon: "🌐" },
              { number: "6 Services", label: "We Support", icon: "🔧" },
              { number: "₹499", label: "Starting Fee", icon: "💰" },
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

        {/* ── TRUST BADGES ── */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold text-gray-700">
            {[
              "✔ Registration Experts",
              "✔ Password Recovery Pros",
              "✔ Senior Citizen Support",
              "✔ Same-Day Access Setup",
            ].map((t) => (
              <div
                key={t}
                className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition"
              >
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">
          {/* WHAT IS E-FILING PORTAL */}
          <section id="what-is-portal">
            <SectionLabel text="Understanding the Portal" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
              What Is the Income Tax E-Filing Portal?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  The <strong>Income Tax e-filing portal</strong> (
                  <a
                    href="https://eportal.incometax.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00416a] underline hover:no-underline"
                  >
                    https://eportal.incometax.gov.in
                  </a>
                  ) is the official online platform of the Income Tax Department,
                  Government of India, where taxpayers can:
                </p>
                <ul className="space-y-2 ml-6">
                  {[
                    "File Income Tax Returns (ITR) for all assessment years",
                    "Verify filed returns using Aadhaar OTP or EVC",
                    "Check refund status and track refund processing",
                    "Respond to income tax notices and demands",
                    "Download Form 16, Form 26AS, and AIS/TIS",
                    "Update PAN details, bank accounts, and contact information",
                    "Link Aadhaar to PAN",
                    "Generate EVC (Electronic Verification Code)",
                    "File rectification requests for errors in orders",
                    "Access past ITRs and acknowledgments",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-[#00416a] font-bold mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <p>
                  Registration on the e-filing portal is{" "}
                  <strong>mandatory for all taxpayers</strong> — whether salaried
                  individuals, self-employed professionals, business owners, or
                  senior citizens. Without an active account, you cannot file ITR or
                  access any tax-related services online.
                </p>
                <p>
                  The portal was redesigned in 2021 with enhanced features, but many
                  users — especially first-time filers and senior citizens — face
                  technical difficulties during registration, login, password reset,
                  and navigation. Common issues include:
                </p>
                <ul className="space-y-2 ml-6">
                  {[
                    "OTP not received on mobile or email",
                    "Aadhaar-PAN mismatch during registration",
                    "Forgot password and unable to reset",
                    "Account locked after multiple failed login attempts",
                    "Mobile number or email not registered/updated",
                    "Unable to navigate the portal to find ITR filing section",
                    "EVC generation errors",
                    "Profile update failures",
                  ].map((issue) => (
                    <li key={issue} className="flex items-start gap-2 text-sm">
                      <span className="text-red-500 font-bold mt-0.5">⚠</span>
                      {issue}
                    </li>
                  ))}
                </ul>
                <p>
                  <strong>Taxvio</strong>, based in Khatauli (Muzaffarnagar, UP),
                  specializes in resolving all e-filing portal issues — from
                  first-time registration to advanced troubleshooting — across Uttar
                  Pradesh, Noida, Delhi NCR, and pan-India online.
                </p>
              </div>
            </div>
          </section>

          {/* SERVICES WE OFFER */}
          <section id="services-offered">
            <SectionLabel text="Our Services" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              6 E-Filing Portal Services We Provide
            </h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Complete technical support for every aspect of the Income Tax e-filing
              portal — from registration to advanced features.
            </p>

            <div className="space-y-8">
              {/* Service 1: Registration */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">🆕</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-800 mb-2">
                      Service 1: E-Filing Portal Registration (First-Time Users)
                    </h3>
                    <p className="text-green-700 font-semibold text-sm">
                      ⚡ Get registered and ready to file ITR in 30 minutes
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="bg-white rounded-2xl p-6 border border-green-200">
                    <p className="font-bold text-green-800 mb-3">What We Do</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {[
                        "Guide you through the complete registration process on eportal.incometax.gov.in",
                        "Validate your PAN and Aadhaar details before starting",
                        "Help enter mobile number and email ID correctly",
                        "Assist with OTP verification (mobile + email)",
                        "Create a strong password meeting portal requirements",
                        "Complete your profile (name, DOB, address, bank details)",
                        "Verify registration success and enable login access",
                        "Provide login credentials securely",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-5 border border-green-200">
                      <p className="font-bold text-green-800 mb-2 text-sm">
                        📋 Documents Required
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• PAN card</li>
                        <li>• Aadhaar card (must be linked to PAN)</li>
                        <li>• Active mobile number</li>
                        <li>• Active email ID</li>
                        <li>• Bank account details (optional, can add later)</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-5 border border-green-200">
                      <p className="font-bold text-green-800 mb-2 text-sm">
                        💰 Pricing
                      </p>
                      <p className="text-2xl font-bold text-green-700 mb-2">₹499</p>
                      <p className="text-xs text-gray-600">
                        Includes complete registration, profile setup, and login
                        verification. Same-day access guaranteed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 2: Login Issue Resolution */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">🔓</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-800 mb-2">
                      Service 2: Login Issue Resolution
                    </h3>
                    <p className="text-blue-700 font-semibold text-sm">
                      Resolve account locked, incorrect credentials, OTP issues
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="bg-white rounded-2xl p-6 border border-blue-200">
                    <p className="font-bold text-blue-800 mb-3">
                      Common Login Problems We Fix
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        {
                          issue: "Account Locked",
                          solution:
                            "Unlock account using registered mobile/email OTP or Aadhaar OTP",
                        },
                        {
                          issue: "Invalid User ID or Password",
                          solution:
                            "Verify correct PAN (User ID) and reset password if needed",
                        },
                        {
                          issue: "OTP Not Received",
                          solution:
                            "Update mobile/email via helpdesk or use alternate verification method",
                        },
                        {
                          issue: "Captcha Validation Failed",
                          solution:
                            "Clear browser cache, use different browser, or try incognito mode",
                        },
                        {
                          issue: "Session Timeout",
                          solution:
                            "Re-login with correct credentials and complete action quickly",
                        },
                        {
                          issue: "Browser Compatibility",
                          solution:
                            "Recommend Chrome/Edge, disable extensions, clear cookies",
                        },
                      ].map((item) => (
                        <div
                          key={item.issue}
                          className="bg-blue-50 rounded-xl p-4 border border-blue-200"
                        >
                          <p className="font-bold text-blue-800 text-xs mb-1">
                            ⚠️ {item.issue}
                          </p>
                          <p className="text-xs text-gray-600">
                            ✓ {item.solution}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-blue-200">
                    <p className="font-bold text-blue-800 mb-2 text-sm">
                      💰 Pricing
                    </p>
                    <p className="text-2xl font-bold text-blue-700 mb-2">₹499</p>
                    <p className="text-xs text-gray-600">
                      Comprehensive login troubleshooting and resolution. Access
                      restored within 24 hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 3: Password Reset */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-3xl p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">🔑</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-purple-800 mb-2">
                      Service 3: Password Reset Assistance
                    </h3>
                    <p className="text-purple-700 font-semibold text-sm">
                      Forgot password? We'll help you reset it securely
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="bg-white rounded-2xl p-6 border border-purple-200">
                    <p className="font-bold text-purple-800 mb-3">
                      Step-by-Step Password Reset Process
                    </p>
                    <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                      <li>
                        Visit e-filing portal login page → Click{" "}
                        <strong>"Forgot Password"</strong>
                      </li>
                      <li>Enter your PAN (User ID)</li>
                      <li>
                        Choose verification method:
                        <ul className="ml-6 mt-2 space-y-1 text-xs">
                          <li>• Aadhaar OTP (recommended — instant)</li>
                          <li>• Registered mobile OTP</li>
                          <li>• Registered email OTP</li>
                        </ul>
                      </li>
                      <li>
                        Validate using OTP sent to selected channel (valid for 15
                        minutes)
                      </li>
                      <li>
                        Create new password following portal policy:
                        <ul className="ml-6 mt-2 space-y-1 text-xs">
                          <li>• 8-15 characters long</li>
                          <li>• At least 1 uppercase letter (A-Z)</li>
                          <li>• At least 1 lowercase letter (a-z)</li>
                          <li>• At least 1 number (0-9)</li>
                          <li>• At least 1 special character (@, #, $, etc.)</li>
                          <li>• No spaces allowed</li>
                        </ul>
                      </li>
                      <li>Confirm new password by re-entering</li>
                      <li>Submit — password reset successful</li>
                      <li>Login immediately with new password</li>
                    </ol>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-5 border border-purple-200">
                      <p className="font-bold text-purple-800 mb-2 text-sm">
                        ⚠️ Common Issues
                      </p>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• OTP not received (mobile/email not registered)</li>
                        <li>• Aadhaar not linked to PAN</li>
                        <li>• Password policy violation (weak password)</li>
                        <li>• Multiple failed OTP attempts</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-5 border border-purple-200">
                      <p className="font-bold text-purple-800 mb-2 text-sm">
                        💰 Pricing
                      </p>
                      <p className="text-2xl font-bold text-purple-700 mb-2">
                        ₹499
                      </p>
                      <p className="text-xs text-gray-600">
                        Includes guided password reset, troubleshooting, and login
                        verification.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 4: Portal Navigation */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-3xl p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">🧭</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-orange-800 mb-2">
                      Service 4: Portal Navigation Guidance
                    </h3>
                    <p className="text-orange-700 font-semibold text-sm">
                      Learn how to use the portal effectively — step-by-step walkthrough
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="bg-white rounded-2xl p-6 border border-orange-200">
                    <p className="font-bold text-orange-800 mb-3">
                      Key Portal Sections We Teach You
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        {
                          section: "Dashboard",
                          desc: "Overview of pending actions, refund status, notices, and quick links",
                        },
                        {
                          section: "e-File",
                          desc: "File new ITR, upload JSON, view filed returns, download acknowledgment",
                        },
                        {
                          section: "e-Verify",
                          desc: "Verify filed returns using Aadhaar OTP, EVC, or ITR-V status",
                        },
                        {
                          section: "Services",
                          desc: "Link Aadhaar, update PAN, register DSC, request refund reissue",
                        },
                        {
                          section: "My Profile",
                          desc: "Update contact details, bank accounts, address, verify information",
                        },
                        {
                          section: "Downloads",
                          desc: "Form 16, Form 26AS, AIS/TIS, past ITRs, notices, orders",
                        },
                        {
                          section: "Pending Actions",
                          desc: "Outstanding verification, notice responses, rectifications",
                        },
                        {
                          section: "Grievances",
                          desc: "Raise complaints, track grievance status, escalate issues",
                        },
                      ].map((item) => (
                        <div
                          key={item.section}
                          className="bg-orange-50 rounded-xl p-4 border border-orange-200"
                        >
                          <p className="font-bold text-orange-800 text-sm mb-1">
                            📂 {item.section}
                          </p>
                          <p className="text-xs text-gray-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-orange-200">
                    <p className="font-bold text-orange-800 mb-2 text-sm">
                      💰 Pricing
                    </p>
                    <p className="text-2xl font-bold text-orange-700 mb-2">₹499</p>
                    <p className="text-xs text-gray-600">
                      1-hour personalized training session via screen sharing. Includes
                      PDF guide with screenshots.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 5: Profile Update */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-200 rounded-3xl p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">👤</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-pink-800 mb-2">
                      Service 5: Profile Update Support
                    </h3>
                    <p className="text-pink-700 font-semibold text-sm">
                      Update contact details, bank accounts, and personal information
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="bg-white rounded-2xl p-6 border border-pink-200">
                    <p className="font-bold text-pink-800 mb-3">
                      What You Can Update
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Mobile number (requires OTP verification)",
                        "Email ID (requires OTP verification)",
                        "Residential address (communication & permanent)",
                        "Bank account details (add/remove/pre-validate)",
                        "Date of birth (if incorrect in PAN)",
                        "Name (if changed — requires PAN update first)",
                        "Contact preferences (SMS, email, whatsapp)",
                        "Employer details (for salaried individuals)",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-sm text-gray-700 bg-pink-50 rounded-lg p-3 border border-pink-100"
                        >
                          <span className="text-pink-600 mt-0.5">✓</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-pink-200">
                    <p className="font-bold text-pink-800 mb-3">
                      Bank Account Pre-Validation Process
                    </p>
                    <p className="text-sm text-gray-700 mb-3">
                      Pre-validating your bank account is essential for receiving tax
                      refunds directly and generating EVC for ITR verification.
                    </p>
                    <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                      <li>
                        Login to e-filing portal → Go to{" "}
                        <strong>My Profile</strong>
                      </li>
                      <li>
                        Click <strong>Bank Accounts</strong> → Add New Bank Account
                      </li>
                      <li>
                        Enter bank details: Account number, IFSC code, account type
                        (savings/current)
                      </li>
                      <li>
                        Ensure account holder name exactly matches PAN name
                      </li>
                      <li>
                        Submit — portal initiates penny drop (₹1 validation deposit)
                      </li>
                      <li>
                        Validation takes 1–2 working days — check status in profile
                      </li>
                      <li>
                        Once validated, account is marked "Pre-Validated" — ready for
                        refund and EVC
                      </li>
                    </ol>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-pink-200">
                    <p className="font-bold text-pink-800 mb-2 text-sm">
                      💰 Pricing
                    </p>
                    <p className="text-2xl font-bold text-pink-700 mb-2">₹499</p>
                    <p className="text-xs text-gray-600">
                      Complete profile update assistance including bank account
                      pre-validation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 6: EVC Generation */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-200 rounded-3xl p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">🔐</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-teal-800 mb-2">
                      Service 6: EVC (Electronic Verification Code) Generation Help
                    </h3>
                    <p className="text-teal-700 font-semibold text-sm">
                      Generate EVC for ITR verification via bank account, net banking,
                      demat
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="bg-white rounded-2xl p-6 border border-teal-200">
                    <p className="font-bold text-teal-800 mb-3">
                      3 Ways to Generate EVC on E-Filing Portal
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          method: "Via Pre-Validated Bank Account",
                          steps: [
                            "Login → e-Verify Return → Select AY",
                            "Choose 'Generate EVC through Pre-validated Bank Account'",
                            "EVC sent to registered mobile and email (valid 72 hours)",
                            "Enter EVC on portal and submit — verification complete",
                          ],
                        },
                        {
                          method: "Via Net Banking",
                          steps: [
                            "Login to your bank's net banking portal",
                            "Navigate to Tax Services / e-Filing Services",
                            "Select 'Generate EVC for ITR' → Enter PAN",
                            "10-digit EVC generated instantly",
                            "Use EVC on e-filing portal to verify return",
                          ],
                        },
                        {
                          method: "Via Demat Account",
                          steps: [
                            "Login to your demat account (NSDL/CDSL broker)",
                            "Go to Back Office → Account Services",
                            "Select 'Generate EVC for ITR'",
                            "Enter PAN → EVC generated",
                            "Use EVC on e-filing portal",
                          ],
                        },
                      ].map((item) => (
                        <div
                          key={item.method}
                          className="bg-teal-50 rounded-xl p-4 border border-teal-200"
                        >
                          <p className="font-bold text-teal-800 text-sm mb-2">
                            {item.method}
                          </p>
                          <ol className="space-y-1 text-xs text-gray-700 list-decimal list-inside">
                            {item.steps.map((step, i) => (
                              <li key={i}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-teal-200">
                    <p className="font-bold text-teal-800 mb-2 text-sm">
                      💰 Pricing
                    </p>
                    <p className="text-2xl font-bold text-teal-700 mb-2">₹499</p>
                    <p className="text-xs text-gray-600">
                      EVC generation assistance via any method + troubleshooting for
                      invalid EVC errors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* COMMON ERRORS & SOLUTIONS */}
          <section id="troubleshooting">
            <SectionLabel text="Error Resolution" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Common E-Filing Portal Errors & Solutions
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Technical issues are common during registration, login, and portal usage.
              Here's how to resolve the most frequent errors.
            </p>
            <div className="space-y-5">
              {[
                {
                  error: "OTP Not Received During Registration/Login",
                  causes: [
                    "Mobile number or email ID not entered correctly",
                    "DND (Do Not Disturb) activated on mobile",
                    "Email ID in spam/junk folder",
                    "Network congestion during peak hours (July-August)",
                    "Mobile number already registered with another PAN",
                  ],
                  solutions: [
                    "Double-check mobile number and email ID for typos",
                    "Temporarily deactivate DND by sending SMS 'STOP 0' to 1909",
                    "Check spam/junk folder in email — mark as not spam",
                    "Try during non-peak hours (early morning or late evening)",
                    "Contact e-filing helpdesk to update/verify mobile number",
                  ],
                },
                {
                  error: "Aadhaar-PAN Not Linked or Mismatch Error",
                  causes: [
                    "Aadhaar not linked to PAN (mandatory since 2017)",
                    "Name on Aadhaar differs from name on PAN",
                    "Date of birth mismatch between Aadhaar and PAN",
                    "Aadhaar seeding status shows 'Failed' in NSDL database",
                  ],
                  solutions: [
                    "Link Aadhaar to PAN immediately via e-filing portal or NSDL (₹1,000 late fee if after deadline)",
                    "Update name on PAN or Aadhaar to match exactly",
                    "Correct DOB on PAN/Aadhaar via respective offices",
                    "Check Aadhaar-PAN link status on https://www.incometax.gov.in/iec/foportal/",
                  ],
                },
                {
                  error: "Account Locked After Multiple Failed Login Attempts",
                  causes: [
                    "Entered incorrect password 3+ times consecutively",
                    "Entered incorrect captcha multiple times",
                    "Session expired and re-login attempted with old credentials",
                  ],
                  solutions: [
                    "Wait 30 minutes and try again (auto-unlock)",
                    "Click 'Unlock Account' → Validate using Aadhaar OTP or registered mobile OTP",
                    "Reset password if forgotten",
                    "Clear browser cache and cookies before retrying",
                  ],
                },
                {
                  error: "Password Reset Link Not Working or OTP Invalid",
                  causes: [
                    "OTP expired (valid for 15 minutes only)",
                    "Password reset link already used",
                    "Browser cookies/cache interfering",
                    "Mobile number or email not registered on portal",
                  ],
                  solutions: [
                    "Request fresh OTP and use within 15 minutes",
                    "Click 'Resend OTP' if first attempt fails",
                    "Use incognito/private browsing mode",
                    "Contact helpdesk to update registered mobile/email",
                  ],
                },
                {
                  error: "Unable to Add/Pre-Validate Bank Account",
                  causes: [
                    "Account holder name does not match PAN name",
                    "Incorrect IFSC code or account number entered",
                    "Bank account inactive or closed",
                    "Penny drop (₹1 validation deposit) failed due to bank server issue",
                  ],
                  solutions: [
                    "Ensure account holder name EXACTLY matches PAN name (including initials)",
                    "Verify IFSC code from bank passbook or bank website",
                    "Use active savings or current account only",
                    "Wait 24 hours and retry — contact bank if penny drop repeatedly fails",
                  ],
                },
                {
                  error: "EVC Generation Failed or Invalid EVC Error",
                  causes: [
                    "Bank account not pre-validated on portal",
                    "Net banking not active or expired",
                    "EVC expired (valid for 72 hours only)",
                    "Wrong assessment year selected during EVC generation",
                  ],
                  solutions: [
                    "Complete bank account pre-validation first",
                    "Reactivate net banking or contact bank",
                    "Generate fresh EVC and use within 72 hours",
                    "Ensure you select correct assessment year when generating and entering EVC",
                  ],
                },
                {
                  error: "Portal Not Loading or Showing 'Service Unavailable'",
                  causes: [
                    "Portal under maintenance (usually late night)",
                    "High traffic during peak filing season (July-August)",
                    "Browser compatibility issues",
                    "Unstable internet connection",
                  ],
                  solutions: [
                    "Check portal status on https://eportal.incometax.gov.in/iec/foservices/foportal/",
                    "Try accessing during non-peak hours (6 AM – 10 AM)",
                    "Use Google Chrome or Microsoft Edge browser (recommended)",
                    "Clear browser cache, disable ad-blockers, and retry",
                  ],
                },
              ].map((item) => (
                <details
                  key={item.error}
                  className="group border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#00416a] transition"
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
                    <span className="flex items-center gap-3">
                      <span className="text-red-500">⚠️</span>
                      {item.error}
                    </span>
                    <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 border-t">
                    <div className="grid md:grid-cols-2 gap-6 pt-5">
                      <div>
                        <p className="font-bold text-red-700 mb-3 text-sm">
                          🔍 Common Causes
                        </p>
                        <ul className="space-y-2">
                          {item.causes.map((cause, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-600 flex items-start gap-2"
                            >
                              <span className="text-red-500 mt-0.5">•</span>
                              {cause}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-green-700 mb-3 text-sm">
                          ✅ Solutions
                        </p>
                        <ul className="space-y-2">
                          {item.solutions.map((solution, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-600 flex items-start gap-2"
                            >
                              <span className="text-green-600 mt-0.5">→</span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* STEP-BY-STEP REGISTRATION */}
          <section id="registration-guide">
            <SectionLabel text="Step-by-Step Guide" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              How to Register on Income Tax E-Filing Portal (Complete Guide)
            </h2>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-8 md:p-10">
              <p className="text-gray-700 mb-6">
                Follow these steps to create your e-filing account from scratch.
                <strong className="text-[#00416a]">
                  {" "}
                  Taxvio provides hands-on assistance for each step.
                </strong>
              </p>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Visit the E-Filing Portal",
                    description:
                      "Open your web browser (Chrome or Edge recommended) and go to https://eportal.incometax.gov.in",
                  },
                  {
                    step: 2,
                    title: "Click 'Register' Button",
                    description:
                      "On the homepage, locate and click the 'Register' button (usually in top-right corner)",
                  },
                  {
                    step: 3,
                    title: "Select 'Individual' as User Type",
                    description:
                      "Choose 'Individual' if you are a salaried person, self-employed professional, or business owner filing as an individual. (Select 'Hindu Undivided Family (HUF)' or 'Others' only if applicable)",
                  },
                  {
                    step: 4,
                    title: "Enter Your PAN",
                    description:
                      "Enter your 10-character PAN (Permanent Account Number) carefully. PAN becomes your User ID for login. Click 'Continue'.",
                  },
                  {
                    step: 5,
                    title: "Validate Aadhaar Linkage",
                    description:
                      "Portal checks if your Aadhaar is linked to PAN. If linked, proceed. If not, you must link Aadhaar first (mandatory).",
                  },
                  {
                    step: 6,
                    title: "Enter Personal Details",
                    description:
                      "Fill in: Full name (as per PAN), Date of birth, Gender, Residential status (Resident/Non-resident)",
                  },
                  {
                    step: 7,
                    title: "Enter Mobile Number and Email ID",
                    description:
                      "Provide active mobile number (10 digits) and email ID. These will be used for OTP verification and future communication.",
                  },
                  {
                    step: 8,
                    title: "Verify Mobile and Email Using OTP",
                    description:
                      "Click 'Send OTP' for mobile and email separately. Enter 6-digit OTP received on mobile and email. OTP is valid for 15 minutes.",
                  },
                  {
                    step: 9,
                    title: "Create Password",
                    description:
                      "Create a strong password (8-15 characters, mix of uppercase, lowercase, number, special character). Confirm password by re-entering.",
                  },
                  {
                    step: 10,
                    title: "Set Security Question",
                    description:
                      "Choose a security question from dropdown (e.g., 'What is your mother's maiden name?') and provide answer. This is used for account recovery.",
                  },
                  {
                    step: 11,
                    title: "Complete Profile Details",
                    description:
                      "Enter: Current residential address, Pin code, State, City, Contact preferences (SMS/Email/Whatsapp)",
                  },
                  {
                    step: 12,
                    title: "Accept Terms and Conditions",
                    description:
                      "Read and accept the terms and conditions. Tick the checkbox confirming you agree.",
                  },
                  {
                    step: 13,
                    title: "Submit Registration",
                    description:
                      "Click 'Submit' button. Portal processes your registration and displays success message.",
                  },
                  {
                    step: 14,
                    title: "Receive Confirmation Email & SMS",
                    description:
                      "You'll receive confirmation email and SMS with your User ID (PAN) and registration success notification.",
                  },
                  {
                    step: 15,
                    title: "Login and Complete Profile",
                    description:
                      "Login using PAN (User ID) and password. Complete remaining profile details: Add bank account, Upload photo (optional), Verify contact details",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-white rounded-2xl p-6 border border-blue-200 flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00416a] text-white flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#00416a] mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-green-100 border-2 border-green-300 rounded-2xl p-6">
                <p className="font-bold text-green-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Registration Complete!
                </p>
                <p className="text-sm text-gray-700">
                  Your e-filing account is now active. You can login anytime using your
                  PAN (User ID) and password. We recommend adding bank account details
                  immediately for refund processing and EVC generation.
                </p>
              </div>
            </div>
          </section>

          {/* DOCUMENTS REQUIRED */}
          <section id="documents">
            <SectionLabel text="What You Need" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              Documents Required for E-Filing Portal Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-[#00416a] bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-[#00416a]/10 text-[#00416a]">
                  For Registration & Login
                </p>
                <ul className="space-y-3">
                  {[
                    "PAN card (physical or e-PAN)",
                    "Aadhaar card (must be linked to PAN)",
                    "Active mobile number (for OTP verification)",
                    "Active email ID (for OTP verification)",
                    "Bank account details (for refund — optional during registration)",
                    "Current residential address proof (for profile)",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-[#00416a] font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-4 border-gray-500 bg-white rounded-2xl p-6 shadow-sm">
                <p className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-5 bg-gray-100 text-gray-700">
                  For Advanced Services
                </p>
                <ul className="space-y-3">
                  {[
                    "Bank passbook or statement (for account pre-validation)",
                    "IFSC code (available on cheque or bank website)",
                    "Net banking credentials (for EVC generation via banking)",
                    "Demat account credentials (for EVC generation via demat)",
                    "DSC (Digital Signature Certificate) — for businesses/CAs only",
                    "Previous year ITR acknowledgment (for reference)",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="text-gray-600 font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* WHY CHOOSE TAXVIO */}
          <section id="why-us">
            <SectionLabel text="Why Taxvio" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Why Choose Taxvio for E-Filing Portal Assistance?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎓",
                  title: "Expert Technical Support",
                  desc: "Our team has 10+ years of experience resolving e-filing portal issues for thousands of taxpayers across India.",
                },
                {
                  icon: "👴",
                  title: "Senior Citizen Friendly",
                  desc: "Patient, step-by-step guidance for senior citizens unfamiliar with computers — we handle everything on your behalf.",
                },
                {
                  icon: "📱",
                  title: "Remote Assistance Available",
                  desc: "Screen sharing, video calls, and remote desktop support — get help from anywhere in India.",
                },
                {
                  icon: "⚡",
                  title: "Same-Day Resolution",
                  desc: "Most issues resolved within hours. Registration and login access provided the same day.",
                },
                {
                  icon: "💰",
                  title: "Affordable Pricing",
                  desc: "Starting ₹499 for basic services. Transparent pricing with no hidden charges.",
                },
                {
                  icon: "🔒",
                  title: "100% Secure & Confidential",
                  desc: "Your credentials and personal information are handled with strict confidentiality and security protocols.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="border rounded-2xl p-6 bg-white hover:shadow-lg hover:border-[#00416a]/30 transition"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2 text-sm">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section id="testimonials">
            <SectionLabel text="Client Stories" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-8">
              Real Stories from Taxpayers We've Helped
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Suresh Kumar",
                  location: "Khatauli",
                  text: "I was trying to register for 2 days but kept getting OTP errors. Taxvio helped me fix my mobile number issue and got me registered in 20 minutes. Very professional service.",
                },
                {
                  name: "Mrs. Meena Agarwal",
                  location: "Muzaffarnagar",
                  text: "I am 72 years old and don't know how to use computers. Taxvio's team patiently helped me register on the portal via video call and even showed me how to check my refund status. Excellent support for seniors.",
                },
                {
                  name: "Rohit Sharma",
                  location: "Noida",
                  text: "My account was locked and password reset was not working. Taxvio troubleshooted the issue, updated my email ID via helpdesk, and restored access within 4 hours. Highly recommended.",
                },
              ].map((r, i) => (
                <div
                  key={i}
                  className="border rounded-2xl p-6 hover:shadow-lg transition bg-white"
                >
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mb-4 text-gray-700 text-sm leading-relaxed italic">
                    "{r.text}"
                  </p>
                  <p className="font-bold text-[#00416a]">{r.name}</p>
                  <p className="text-sm text-gray-500">{r.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* LOCAL SEO */}
          <section id="cities-served">
            <SectionLabel text="Our Reach" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
              E-Filing Portal Assistance Across India
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Taxvio is based in <strong>Khatauli, Muzaffarnagar, UP</strong> and
              provides e-filing portal registration, login, and technical support for
              individuals and businesses across <strong>Noida</strong>,{" "}
              <strong>Delhi NCR</strong>, <strong>Meerut</strong>,{" "}
              <strong>Ghaziabad</strong>, <strong>Mumbai</strong>, and pan-India via
              remote assistance.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "Khatauli",
                "Muzaffarnagar",
                "Noida",
                "Delhi NCR",
                "Meerut",
                "Mumbai",
              ].map((city) => (
                <div
                  key={city}
                  className="bg-gray-50 border rounded-xl p-4 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition cursor-default"
                >
                  📍 {city}
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <FAQSection />

          {/* RELATED SERVICES */}
          <section id="related-services">
            <SectionLabel text="Explore More" />
            <h2 className="text-3xl font-bold text-[#00416a] mb-8">
              Related Income Tax Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "ITR Filing — Salary",
                  icon: "💼",
                  link: "/serviceslist/income-tax/itr-salary",
                  desc: "File ITR-1 for salaried individuals.",
                },
                {
                  title: "ITR Verification",
                  icon: "✅",
                  link: "/serviceslist/income-tax/itr-verification",
                  desc: "Verify returns via Aadhaar OTP/EVC.",
                },
                {
                  title: "Form 16 Download",
                  icon: "📄",
                  link: "/serviceslist/income-tax/form-16",
                  desc: "Download Form 16 from TRACES.",
                },
                {
                  title: "Income Tax Notice",
                  icon: "📨",
                  link: "/serviceslist/income-tax/income-tax-notice",
                  desc: "Response to department notices.",
                },
              ].map((s) => (
                <Link
                  key={s.title}
                  href={s.link}
                  className="block border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white"
                >
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-[#00416a] mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
                  <span className="text-sm text-[#00416a] font-semibold group-hover:underline">
                    Learn More →
                  </span>
                </Link>
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
                    Get Portal Access Today
                  </p>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Register or Resolve Login Issues Now
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Don't let technical barriers stop you from filing ITR. Taxvio
                    provides complete e-filing portal support — registration, login,
                    password reset, navigation, profile update, EVC generation.
                    Starting ₹499. Same-day resolution guaranteed.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                  >
                    Get Portal Help — ₹499
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

/* ══════════════════════ INTERACTIVE COMPONENTS ══════════════════════ */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is registration on e-filing portal mandatory?",
      a: "Yes. Registration is mandatory for all taxpayers who need to file Income Tax Returns, verify returns, check refund status, respond to notices, or access any tax-related services online. Without registration, you cannot file ITR electronically.",
    },
    {
      q: "Can I register on e-filing portal without Aadhaar?",
      a: "No. Aadhaar-PAN linking is mandatory since 2017. You cannot register on the e-filing portal without linking Aadhaar to PAN. If Aadhaar is not linked, the portal will block registration and prompt you to link Aadhaar first.",
    },
    {
      q: "What if I forgot my e-filing portal password and registered mobile number is not working?",
      a: "If your registered mobile number is inactive or changed, you cannot reset password via mobile OTP. In this case: (1) Try password reset using registered email OTP, or (2) Try Aadhaar OTP method (if Aadhaar is linked), or (3) Contact e-filing helpdesk (1800 103 0025 or 1800 419 0025) with PAN, Aadhaar, and identity proof to update mobile number.",
    },
    {
      q: "How long does bank account pre-validation take?",
      a: "Bank account pre-validation typically takes 1–2 working days. The portal uses penny drop (₹1 deposit) to verify account details. Once validated, the account status changes to 'Pre-Validated' in your profile. You can then use it for refund and EVC generation.",
    },
    {
      q: "Can I use the e-filing portal from mobile phone?",
      a: "Yes, the e-filing portal is mobile-responsive and can be accessed via mobile browser (Chrome or Safari). However, for complex tasks like filing ITR, uploading documents, or troubleshooting, we recommend using a computer/laptop for better experience.",
    },
    {
      q: "What is EVC and why do I need it?",
      a: "EVC (Electronic Verification Code) is a 10-digit code used to verify your filed Income Tax Return electronically — as an alternative to Aadhaar OTP or physical ITR-V. You can generate EVC via pre-validated bank account, net banking, or demat account. It's valid for 72 hours and is required if Aadhaar OTP method is not available.",
    },
    {
      q: "Can Taxvio access my e-filing portal on my behalf?",
      a: "Taxvio provides remote assistance via screen sharing (with your permission) to guide you through registration, login, and portal navigation. We do NOT ask for or store your password. You remain in control of your credentials. For senior citizens or non-tech users, we can perform tasks via screen sharing with explicit consent and supervision.",
    },
  ];

  return (
    <section id="faq">
      <SectionLabel text="FAQs" />
      <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
        Frequently Asked Questions — E-Filing Portal
      </h2>
      <div className="space-y-5">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="group border rounded-2xl overflow-hidden"
            open={open === i}
            onToggle={(e) =>
              setOpen((e.target as HTMLDetailsElement).open ? i : null)
            }
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