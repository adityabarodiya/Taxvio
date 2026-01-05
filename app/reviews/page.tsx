"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import  {reviews}  from "@/data/reviews";
import { faqs } from "@/data/faq";
const mob  = process.env.NEXT_PUBLIC_MOBILE_NUMBER;
export default function ReviewsFaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
const [question, setQuestion] = useState("");
const [showReviewForm, setShowReviewForm] = useState(false);
const [reviewData, setReviewData] = useState({
  name: "",
  role: "",
  rating: 5,
  review: ""
});


  return (
    <main className="bg-gray-100 text-[#002b45]">

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#00416a] to-[#002b45] text-white py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Clients Across India
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Hear what our clients say about us and get clear answers to
            frequently asked questions about our services.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Client Reviews
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < item.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                “{item.review}”
              </p>

              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-8">
  <button
    onClick={() => setShowReviewForm(true)}
    className="m-8 rounded-xl bg-[#00416a] text-white px-6 py-3 font-semibold shadow hover:bg-[#003354] transition"
  >
    Add a Review
  </button>
</div>

      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-b from-[#00416a] to-[#002b45] text-white py-20">
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
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
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

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Need Professional Assistance?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Get expert guidance for your tax, GST, and compliance needs.
          Our team is here to help you every step of the way.
        </p>
        <a
          href="/contact"
          className="inline-block rounded-xl bg-[#00416a] hover:bg-[#003354] transition px-8 py-3 text-white font-semibold shadow"
        >
          Get Consultation
        </a>
      </section>
{showForm && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
    <div className="w-full max-w-lg rounded-2xl bg-white p-8 relative">

      {/* Close */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
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
        onClick={() => {
          if (!question.trim()) return;

          const ownerPhone = mob;
          const message = encodeURIComponent(
            `New FAQ Question from Website:\n\n${question}`
          );

          window.open(
            `https://wa.me/${ownerPhone}?text=${message}`,
            "_blank"
          );

          setQuestion("");
          setShowForm(false);
        }}
        className="mt-4 w-full rounded-xl bg-[#00416a] hover:bg-[#003354] transition px-6 py-3 text-white font-semibold"
      >
        Send Question
      </button>
    </div>
  </div>
)}
{showReviewForm && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
    <div className="w-full max-w-lg rounded-2xl bg-white p-8 relative">

      {/* Close */}
      <button
        onClick={() => setShowReviewForm(false)}
        className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
      >
        ×
      </button>

      <h3 className="text-2xl font-semibold mb-4 text-[#002b45]">
        Add a Review
      </h3>

      <p className="text-gray-600 mb-4 text-sm">
        Your review will be sent to us for approval.
      </p>

      <input
        type="text"
        placeholder="Your Name"
        value={reviewData.name}
        onChange={(e) =>
          setReviewData({ ...reviewData, name: e.target.value })
        }
        className="w-full mb-3 rounded-xl border border-gray-300 p-3"
      />

      <input
        type="text"
        placeholder="Profession / Business (optional)"
        value={reviewData.role}
        onChange={(e) =>
          setReviewData({ ...reviewData, role: e.target.value })
        }
        className="w-full mb-3 rounded-xl border border-gray-300 p-3"
      />

      {/* Rating */}
      <select
        value={reviewData.rating}
        onChange={(e) =>
          setReviewData({
            ...reviewData,
            rating: Number(e.target.value)
          })
        }
        className="w-full mb-3 rounded-xl border border-gray-300 p-3"
      >
        {[5, 4, 3, 2, 1].map((r) => (
          <option key={r} value={r}>
            {r} Star{r > 1 && "s"}
          </option>
        ))}
      </select>

      <textarea
        placeholder="Write your review..."
        rows={4}
        value={reviewData.review}
        onChange={(e) =>
          setReviewData({ ...reviewData, review: e.target.value })
        }
        className="w-full rounded-xl border border-gray-300 p-4"
      />

      <button
        onClick={() => {
          if (
            !reviewData.name ||
            !reviewData.review
          )
            return;

          const ownerPhone = mob;
          const message = encodeURIComponent(
            `New Review Submission:\n\n` +
              `Name: ${reviewData.name}\n` +
              `Role: ${reviewData.role}\n` +
              `Rating: ${reviewData.rating} ⭐\n\n` +
              `Review:\n${reviewData.review}`
          );

          window.open(
            `https://wa.me/${ownerPhone}?text=${message}`,
            "_blank"
          );

          setReviewData({
            name: "",
            role: "",
            rating: 5,
            review: ""
          });
          setShowReviewForm(false);
        }}
        className="mt-4 w-full rounded-xl bg-[#00416a] hover:bg-[#003354] transition px-6 py-3 text-white font-semibold"
      >
        Submit Review
      </button>
    </div>
  </div>
)}
    </main>
  );
}
