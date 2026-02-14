"use client";

import { useState } from "react";
import Script from "next/script";
import Footar from "@/components/Footar";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const phoneNumber = 918937980366;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const text = `Hello Taxvio Team,

Name: ${form.name}
Phone: ${form.phone}

Message:
${form.message}`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
    );

    setLoading(false);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <>
      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How quickly can I get GST registration?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GST registration usually takes 3-7 working days.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide Income Tax filing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide Income Tax return filing for individuals and businesses.",
                },
              },
            ],
          }),
        }}
      />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 animate-bounce hover:scale-110 transition flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="26"
          height="26"
          fill="white"
        >
          <path d="M16.001 3C8.832 3 3 8.832 3 16c0 2.828.924 5.438 2.488 7.561L3 29l5.617-2.457A12.93 12.93 0 0016 29c7.168 0 13-5.832 13-13S23.169 3 16.001 3zm0 23.4c-2.188 0-4.238-.663-5.949-1.8l-.426-.275-3.334 1.457.889-3.25-.278-.446A10.39 10.39 0 015.6 16c0-5.733 4.667-10.4 10.4-10.4S26.4 10.267 26.4 16 21.733 26.4 16 26.4zm5.7-7.8c-.312-.156-1.847-.91-2.134-1.014-.287-.104-.496-.156-.705.156-.208.312-.807 1.014-.989 1.222-.182.208-.364.234-.676.078-.312-.156-1.318-.486-2.51-1.55-.928-.827-1.555-1.848-1.737-2.16-.182-.312-.02-.48.137-.635.14-.139.312-.364.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.705-1.703-.965-2.335-.253-.61-.51-.527-.705-.537l-.6-.01c-.208 0-.546.078-.832.39-.287.312-1.092 1.066-1.092 2.598 0 1.533 1.118 3.014 1.273 3.222.156.208 2.199 3.355 5.333 4.705.745.322 1.327.514 1.78.658.748.238 1.429.204 1.967.124.6-.089 1.847-.754 2.108-1.48.26-.727.26-1.35.182-1.48-.078-.13-.286-.208-.598-.364z" />
        </svg>
      </a>

      {/* Floating Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="fixed bottom-6 left-6 bg-gradient-to-r from-[#00416a] to-[#0077b6] text-white px-6 py-3 rounded-full shadow-2xl z-50 animate-pulse hover:scale-110 transition flex items-center gap-2"
      >
        📞 Call Now
      </a>

      <section className="bg-gradient-to-b from-[#002b45] via-gray-100 to-[#002b45] py-28">
        <div className="mx-auto max-w-3xl px-6">
          {/* Heading */}
          <div className="text-center mb-14 text-white animate-fade-in">
            <h1 className="text-4xl font-bold">
              Contact Taxvio – GST & Compliance Experts
            </h1>
            <p className="mt-4 text-gray-200">
              Connect with us for GST Registration, Income Tax Filing, Company
              Incorporation & ROC Compliance.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center gap-6 mb-10 flex-wrap">
            <div className="bg-white text-[#00416a] px-6 py-3 rounded-xl shadow hover:scale-105 transition">
              ✔ Certified Professionals
            </div>
            <div className="bg-white text-[#00416a] px-6 py-3 rounded-xl shadow hover:scale-105 transition">
              ✔ 100% Secure Process
            </div>
            <div className="bg-white text-[#00416a] px-6 py-3 rounded-xl shadow hover:scale-105 transition">
              ✔ Fast & Reliable Service
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-8 shadow-2xl space-y-6 transform hover:scale-[1.01] transition"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#00416a]"
            />

            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#00416a]"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              placeholder="Your Message"
              className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#00416a]"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#00416a] text-white py-3 rounded-xl font-semibold hover:bg-[#003354] transition"
            >
              {loading ? "Connecting..." : "Connect on WhatsApp"}
            </button>
          </form>
        </div>

        {/* Testimonials */}
        <div className="bg-white py-20 mt-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-[#00416a] mb-10">
              Trusted by Businesses Across India
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 transition">
                ⭐⭐⭐⭐⭐
                <p className="mt-4">
                  “Very smooth GST registration process. Highly professional.”
                </p>
                <h4 className="mt-4 font-semibold">– Business Owner</h4>
              </div>

              <div className="p-6 shadow-xl rounded-xl hover:scale-105 transition">
                ⭐⭐⭐⭐⭐
                <p className="mt-4">
                  “Filed my Income Tax without any issues. Excellent support.”
                </p>
                <h4 className="mt-4 font-semibold">– Salaried Client</h4>
              </div>

              <div className="p-6 shadow-xl rounded-xl hover:scale-105 transition">
                ⭐⭐⭐⭐⭐
                <p className="mt-4">
                  “Company registration and ROC filing handled perfectly.”
                </p>
                <h4 className="mt-4 font-semibold">– Startup Founder</h4>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-[#00416a] mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-lg">
                  How long does GST registration take?
                </h3>
                <p className="text-gray-600 mt-2">
                  Usually between 3–7 working days depending on verification.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-lg">
                  Do you provide ROC annual filing?
                </h3>
                <p className="text-gray-600 mt-2">
                  Yes, we handle AOC-4, MGT-7 and complete ROC compliance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-lg">Is my data secure?</h3>
                <p className="text-gray-600 mt-2">
                  Absolutely. We maintain strict confidentiality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footar />
      </section>
    </>
  );
}
