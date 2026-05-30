"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Star,
  X,
  MessageCircle,
  ArrowRight,
  Quote,
  Sparkles,
  Users,
  ThumbsUp,
  Send,
} from "lucide-react";
import { reviews } from "@/data/reviews";
import Faq from "@/components/Faq";
import Footer from "@/components/Footar";

const mob = process.env.NEXT_PUBLIC_MOBILE_NUMBER;

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
  visible: { transition: { staggerChildren: 0.09 } },
};
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
const modalPanel: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
  },
  exit: { opacity: 0, scale: 0.96, y: 10, transition: { duration: 0.2 } },
};

// ─── Star Picker ──────────────────────────────────────────────────────────────
function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          onClick={() => onChange(i)}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(0)}
          className="transition-transform hover:scale-110"
        >
          <Star
            size={28}
            className={`transition-colors ${
              i <= (hovered || value)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-200"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

// ─── Rating summary ───────────────────────────────────────────────────────────
const avgRating =
  reviews.reduce((a, r) => a + r.rating, 0) / reviews.length || 0;
const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
  star,
  count: reviews.filter((r) => r.rating === star).length,
}));

export default function ReviewsFaqPage() {
  const [showForm, setShowForm] = useState(false);
  const [question, setQuestion] = useState("");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewData, setReviewData] = useState({
    name: "",
    role: "",
    rating: 5,
    review: "",
  });

  const handleSendQuestion = () => {
    if (!question.trim()) return;
    const message = encodeURIComponent(`New FAQ Question from Website:\n\n${question}`);
    window.open(`https://wa.me/${mob}?text=${message}`, "_blank");
    setQuestion("");
    setShowForm(false);
  };

  const handleSubmitReview = () => {
    if (!reviewData.name || !reviewData.review) return;
    const message = encodeURIComponent(
      `New Review Submission:\n\nName: ${reviewData.name}\nRole: ${reviewData.role}\nRating: ${reviewData.rating} ⭐\n\nReview:\n${reviewData.review}`
    );
    window.open(`https://wa.me/${mob}?text=${message}`, "_blank");
    setReviewData({ name: "", role: "", rating: 5, review: "" });
    setShowReviewForm(false);
  };

  return (
    <main className="min-h-screen bg-[#f8fbfd] text-[#002b45] font-sans">

      {/* ════════════ HERO ════════════ */}
      <section className="relative bg-[#00416a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "50px 50px",
        }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sky-400/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-teal-400/10 blur-[80px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Users size={13} className="text-sky-300" />
              {reviews.length}+ Verified Client Reviews
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Trusted by Clients
              <span className="block mt-1 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                Across India
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Hear what our clients say about Taxvio's GST, Income Tax and Company Registration services — and get clear answers to your compliance questions.
            </motion.p>

            {/* Rating summary pills */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 flex items-center gap-3">
                <div>
                  <p className="text-3xl font-extrabold leading-none">{avgRating.toFixed(1)}</p>
                  <p className="text-white/60 text-xs mt-0.5">Average Rating</p>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div className="flex flex-col gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className={i < Math.round(avgRating) ? "fill-yellow-400 text-yellow-400" : "text-white/20"} />
                  ))}
                </div>
              </div>
              <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 text-center">
                <p className="text-3xl font-extrabold leading-none">{reviews.length}+</p>
                <p className="text-white/60 text-xs mt-0.5">Happy Clients</p>
              </div>
              <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 text-center">
                <p className="text-3xl font-extrabold leading-none">100%</p>
                <p className="text-white/60 text-xs mt-0.5">Online Service</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave */}
        <div className="relative">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z" fill="#f8fbfd" />
          </svg>
        </div>
      </section>

      {/* ════════════ REVIEWS ════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>

          {/* Section header */}
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Client Reviews
              </span>
              <h2 className="text-3xl font-extrabold text-[#00416a] mt-3">What Our Clients Say</h2>
              <p className="text-gray-500 text-sm mt-1 max-w-lg">Real feedback from businesses, professionals and individuals we've served across India.</p>
            </div>

            {/* Rating bar chart */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm min-w-[220px]">
              {ratingCounts.map(({ star, count }) => (
                <div key={star} className="flex items-center gap-2.5 mb-1.5 last:mb-0">
                  <span className="text-xs font-semibold text-gray-500 w-3 shrink-0">{star}</span>
                  <Star size={11} className="fill-yellow-400 text-yellow-400 shrink-0" />
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${reviews.length ? (count / reviews.length) * 100 : 0}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: star * 0.05, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                    />
                  </div>
                  <span className="text-xs text-gray-400 w-4 text-right shrink-0">{count}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Review cards */}
          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-5">
            {reviews.map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Decorative quote mark */}
                <div className="absolute top-4 right-4 opacity-[0.06] pointer-events-none">
                  <Quote size={56} className="text-[#00416a]" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} className={i < item.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} />
                  ))}
                  <span className="ml-1.5 text-xs font-semibold text-yellow-500">{item.rating}.0</span>
                </div>

                {/* Review text */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 relative z-10">
                  "{item.review}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-[#00416a] flex items-center justify-center shrink-0 text-white text-sm font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.role}</p>
                  </div>
                  <div className="ml-auto">
                    <ThumbsUp size={14} className="text-gray-200 group-hover:text-[#00416a] transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Add review CTA */}
          <motion.div variants={fadeUp} className="flex justify-center mt-10">
            <button
              onClick={() => setShowReviewForm(true)}
              className="inline-flex items-center gap-2 bg-[#00416a] text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-[#00416a]/20 hover:bg-[#002b45] hover:shadow-xl active:scale-[0.97] transition-all text-sm"
            >
              <Sparkles size={15} />
              Share Your Experience
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <div className="bg-white border-y border-gray-100">
        <Faq />
      </div>

      {/* ════════════ CTA ════════════ */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#00416a] rounded-3xl overflow-hidden p-10 md:p-14 text-white text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-teal-400/10 blur-[60px] pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
              backgroundSize: "24px 24px",
            }} />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-5 uppercase tracking-wide">
                <MessageCircle size={11} className="text-sky-300" />
                Free Consultation
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Need Professional Tax Assistance?
              </h2>
              <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                Get expert guidance for your GST registration, income tax filing, company registration, and compliance needs. Our CA team is ready to help.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#00416a] px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg hover:bg-gray-50 hover:shadow-xl active:scale-[0.97] transition-all"
                >
                  Get Consultation <ArrowRight size={14} />
                </a>
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center gap-2 border-2 border-white/50 bg-white/5 text-white px-7 py-3.5 rounded-xl text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all"
                >
                  <MessageCircle size={14} />
                  Ask a Question
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ ASK QUESTION MODAL ════════════ */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            variants={modalOverlay}
            initial="hidden" animate="visible" exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            onClick={(e) => e.target === e.currentTarget && setShowForm(false)}
          >
            <motion.div variants={modalPanel} initial="hidden" animate="visible" exit="exit" className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Modal header */}
              <div className="bg-[#00416a] px-7 py-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Ask a Question</h3>
                  <p className="text-white/60 text-xs mt-0.5">We'll respond on WhatsApp</p>
                </div>
                <button onClick={() => setShowForm(false)} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <X size={16} className="text-white" />
                </button>
              </div>

              <div className="p-7">
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Type your question here — about GST, ITR, company registration..."
                  rows={5}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00416a] focus:border-transparent resize-none transition"
                />
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => setShowForm(false)}
                    className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSendQuestion}
                    disabled={!question.trim()}
                    className="flex-1 py-3 rounded-xl bg-[#00416a] text-white text-sm font-bold hover:bg-[#002b45] disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.97] transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={14} /> Send on WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════ REVIEW FORM MODAL ════════════ */}
      <AnimatePresence>
        {showReviewForm && (
          <motion.div
            variants={modalOverlay}
            initial="hidden" animate="visible" exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            onClick={(e) => e.target === e.currentTarget && setShowReviewForm(false)}
          >
            <motion.div variants={modalPanel} initial="hidden" animate="visible" exit="exit" className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Modal header */}
              <div className="bg-[#00416a] px-7 py-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Share Your Review</h3>
                  <p className="text-white/60 text-xs mt-0.5">Your feedback will be submitted for approval</p>
                </div>
                <button onClick={() => setShowReviewForm(false)} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <X size={16} className="text-white" />
                </button>
              </div>

              <div className="p-7 space-y-4">
                {/* Star picker */}
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">Your Rating</label>
                  <StarPicker value={reviewData.rating} onChange={(v) => setReviewData({ ...reviewData, rating: v })} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Your Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={reviewData.name}
                      onChange={(e) => setReviewData({ ...reviewData, name: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00416a] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Profession (optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Business Owner"
                      value={reviewData.role}
                      onChange={(e) => setReviewData({ ...reviewData, role: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00416a] focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Your Review *</label>
                  <textarea
                    placeholder="Tell us about your experience with Taxvio..."
                    rows={4}
                    value={reviewData.review}
                    onChange={(e) => setReviewData({ ...reviewData, review: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00416a] focus:border-transparent resize-none transition"
                  />
                </div>

                <div className="flex gap-3 pt-1">
                  <button
                    onClick={() => setShowReviewForm(false)}
                    className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmitReview}
                    disabled={!reviewData.name || !reviewData.review}
                    className="flex-1 py-3 rounded-xl bg-[#00416a] text-white text-sm font-bold hover:bg-[#002b45] disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.97] transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={14} /> Submit via WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </main>
  );
}