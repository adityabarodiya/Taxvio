"use client";

import { useState, useCallback } from "react";
import { faqs } from "@/data/faq";

const ownerPhone = process.env.NEXT_PUBLIC_MOBILE_NUMBER || "";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [question, setQuestion] = useState("");

  const toggleFaq = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  const handleSend = useCallback(() => {
    if (!question.trim() || !ownerPhone) return;

    const message = encodeURIComponent(
      `New FAQ Question from Website:\n\n${question}`
    );

    window.open(`https://wa.me/${ownerPhone}?text=${message}`, "_blank");

    setQuestion("");
    setShowForm(false);
  }, [question]);

  return (
    <main className="bg-gray-100 text-[#002b45]">
      {/* FAQ Section */}
      <section className="bg-linear-to-b from-[#00416a] to-[#002b45] text-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-[#003354] border border-white/10"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                  className="w-full px-6 py-5 flex justify-between items-center text-left"
                >
                  <span className="font-medium text-lg">
                    {faq.question}
                  </span>
                  <span className="text-2xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowForm(true)}
            className="m-8 rounded-xl bg-white text-[#00416a] px-6 py-3 font-semibold shadow hover:bg-gray-100 transition"
          >
            Ask a Question
          </button>
        </div>
      </section>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-8 relative">

            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
              aria-label="Close"
            >
              ×
            </button>

            <h3 className="text-2xl font-semibold mb-4 text-[#002b45]">
              Ask a Question
            </h3>

            <p className="text-gray-600 mb-4 text-sm">
              Your question will be sent directly to our team.
            </p>

            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question here..."
              rows={4}
              className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-[#00416a]"
            />

            <button
              onClick={handleSend}
              disabled={!question.trim()}
              className="mt-4 w-full rounded-xl bg-[#00416a] disabled:opacity-50 hover:bg-[#003354] transition px-6 py-3 text-white font-semibold"
            >
              Send Question
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
