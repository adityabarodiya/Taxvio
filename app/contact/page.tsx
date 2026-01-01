"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const phoneNumber = process.env.NEXT_PUBLIC_MOBILE_NUMBER;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1️⃣ Send email (API)
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    // 2️⃣ Open WhatsApp
    const whatsappNumber = phoneNumber
    const text = `Hello, I am ${form.name}.

Message: ${form.message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section className="relative bg-gradient-to-b from-[#002b45] via-gray-100 via-[#002b45]/10 to-[#002b45] text-white py-28">

      <div className="mx-auto max-w-3xl px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-white">
            Get in Touch
          </h1>
          <p className="mt-4 text-gray-100">
            Have questions about tax, compliance, or legal services?
            Reach out and we’ll get back to you promptly.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-200 space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 text-[#00416a] px-4 py-3 focus:border-[#00416a] focus:ring-[#00416a]"
              placeholder="Your name"
            />
          </div>


          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full text-[#00416a] rounded-xl border border-gray-300 px-4 py-3 focus:border-[#00416a] focus:ring-[#00416a]"
              placeholder="e.g. +91 9876543210"
            />
          </div>


          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full text-[#00416a] rounded-xl border border-gray-300 px-4 py-3 focus:border-[#00416a] focus:ring-[#00416a]"
              placeholder="Tell us how we can help you"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#00416a] py-3 text-white font-semibold shadow hover:bg-[#003354] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
