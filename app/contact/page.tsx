"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Footar from "@/components/Footar";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Star,
  ChevronDown,
  Send,
  User,
  ChevronRight,
  Search,
  Award,
  Users,
  TrendingUp,
  FileText,
  Building,
  Briefcase,
  Globe,
  BadgeCheck,
  Timer,
  HeadphonesIcon,
  Sparkles,
  Target,
  Percent,
  Gift,
  Tag,
  X,
} from "lucide-react";

const PHONE_NUMBER = "918937980366";
const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER}`;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55 } },
};

const GRADIENT_BG = {
  background:
    "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
};

const HERO_GRADIENT = {
  background:
    "linear-gradient(135deg, #00416a 0%, #003257 40%, #002642 100%)",
};

const FAQS = [
  {
    q: "How long does GST registration take?",
    a: "GST registration is typically completed within 3–7 working days after submission of all documents. With Aadhaar authentication, GSTIN can be allotted in as little as 3 working days. We handle the entire process including document preparation, application filing, and follow-ups.",
  },
  {
    q: "Do you provide ITR filing for salaried employees?",
    a: "Yes. We file income tax returns for salaried individuals, proprietors, firms, LLPs, and companies. Our CA team ensures maximum deduction optimization, 100% accuracy, and complete compliance with the latest tax laws. We also provide tax planning advice to minimize your liability legally.",
  },
  {
    q: "Can you handle GST notices and income tax scrutiny?",
    a: "Absolutely. Our experienced CA team drafts comprehensive responses for all types of GST notices, show cause notices (SCN), and income tax scrutiny assessments including Section 143(1), 143(2), 143(3), and 148 notices. We provide full representation before tax authorities.",
  },
  {
    q: "Do you provide ROC annual filing?",
    a: "Yes. We handle complete ROC compliance including AOC-4, MGT-7, ADT-1, LLP Form 11 & 8, director appointments/resignations, capital increase, registered office changes, and annual compliance for Pvt Ltd companies, LLPs, OPCs, and Section 8 companies.",
  },
  {
    q: "What are your service charges?",
    a: "Our pricing is transparent and competitive. ITR filing starts from ₹499, GST registration from ₹999, and company registration from ₹6,999. We offer special discounts for first-time clients and bundled services. Contact us for a detailed quote based on your specific requirements.",
  },
  {
    q: "Is my data safe with Taxvio?",
    a: "Absolutely. We maintain strict confidentiality across all client documents and information. No data is shared with third parties. All communications are encrypted and secure. We follow industry-standard data protection practices and comply with all privacy regulations.",
  },
  {
    q: "Do you provide post-service support?",
    a: "Yes. We provide comprehensive post-service support for all our offerings. You get free consultation for 30 days after service completion, lifetime document storage in your secure dashboard, and priority support for any queries or amendments.",
  },
  {
    q: "Can I track my service status online?",
    a: "Yes. All clients get access to our client portal where you can track service status in real-time, upload/download documents securely, communicate with your assigned CA, and view service history. You also receive WhatsApp updates at every stage.",
  },
];

const TESTIMONIALS = [
  {
    stars: 5,
    text: "Got my GST registration done in just 4 days. The process was completely hassle-free and the team kept me updated at every step. Their WhatsApp support is outstanding!",
    name: "Rohit Gupta",
    title: "Retailer, Muzaffarnagar",
    service: "GST Registration",
  },
  {
    stars: 5,
    text: "Filed my income tax return with maximum deductions I didn't even know I qualified for. Saved ₹18,000 compared to doing it myself. Highly professional team!",
    name: "Priya Sharma",
    title: "Salaried Employee, Meerut",
    service: "ITR Filing",
  },
  {
    stars: 5,
    text: "Company registration and first ROC annual return handled perfectly. No stress, no errors, no delays. Their CA team knows exactly what they're doing.",
    name: "Aditya Singh",
    title: "Startup Founder, Delhi NCR",
    service: "Company Registration",
  },
  {
    stars: 5,
    text: "Had a GST notice that was worrying me for weeks. Taxvio's team responded within 2 days and got it resolved completely. True experts!",
    name: "Meera Verma",
    title: "Business Owner, Ghaziabad",
    service: "GST Notice Reply",
  },
  {
    stars: 5,
    text: "FSSAI license received in 10 days. The entire process was smooth and transparent. Their pricing is also very reasonable compared to others.",
    name: "Vikram Malhotra",
    title: "Restaurant Owner, Noida",
    service: "FSSAI License",
  },
  {
    stars: 5,
    text: "Best decision to go with Taxvio for our LLP registration. They handled everything including drafting partnership deed and getting DIN numbers.",
    name: "Sanjay & Rakesh",
    title: "Business Partners, Saharanpur",
    service: "LLP Registration",
  },
];

const STATS = [
  { value: "4,800+", label: "Happy Clients", icon: Users },
  { value: "12,500+", label: "Services Delivered", icon: CheckCircle },
  { value: "4.9/5", label: "Client Rating", icon: Star },
  { value: "15 Min", label: "Response Time", icon: Timer },
];

const ACHIEVEMENTS = [
  {
    icon: Award,
    title: "Certified Excellence",
    desc: "Team of qualified Chartered Accountants with 10+ years experience",
  },
  {
    icon: Shield,
    title: "100% Secure",
    desc: "Bank-level encryption for all your financial documents",
  },
  {
    icon: TrendingUp,
    title: "98% Success Rate",
    desc: "Highest approval rate in GST & company registrations",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 WhatsApp Support",
    desc: "Instant assistance via WhatsApp - no waiting in queues",
  },
];

const SERVICE_CATEGORIES = [
  {
    id: "gst",
    label: "GST Services",
    icon: FileText,
    color: "from-blue-500 to-blue-600",
    services: [
      { name: "GST Registration", price: "₹999", discount: "50% OFF" },
      { name: "GST Return Filing (GSTR-1/3B)", price: "₹499/month", discount: "First month ₹299" },
      { name: "GST Annual Return (GSTR-9)", price: "₹2,999", discount: "20% OFF" },
      { name: "GST Refund Application", price: "₹1,999", discount: "" },
      { name: "GST Notice Reply", price: "₹3,999", discount: "" },
      { name: "GST LUT Filing", price: "₹999", discount: "" },
      { name: "GST Cancellation", price: "₹999", discount: "" },
      { name: "GST E-Invoicing Setup", price: "₹2,499", discount: "New launch offer" },
      { name: "GST Amendment/Update", price: "₹799", discount: "" },
      { name: "GSTIN Verification", price: "Free", discount: "" },
      { name: "GST Audit Assistance", price: "₹9,999", discount: "" },
      { name: "GST for E-Commerce", price: "₹1,499", discount: "" },
    ],
  },
  {
    id: "income-tax",
    label: "Income Tax",
    icon: Briefcase,
    color: "from-green-500 to-green-600",
    services: [
      { name: "ITR Filing - Salaried", price: "₹499", discount: "Limited time offer" },
      { name: "ITR Filing - Business", price: "₹1,999", discount: "30% OFF" },
      { name: "ITR Filing - Firm/LLP", price: "₹3,999", discount: "" },
      { name: "ITR Filing - Company", price: "₹7,999", discount: "" },
      { name: "TDS Return (24Q/26Q/27Q)", price: "₹999", discount: "" },
      { name: "TCS Return", price: "₹999", discount: "" },
      { name: "Income Tax Audit", price: "₹14,999", discount: "" },
      { name: "Tax Notice Reply", price: "₹4,999", discount: "" },
      { name: "12A Registration", price: "₹9,999", discount: "" },
      { name: "80G Registration", price: "₹12,999", discount: "" },
      { name: "Form 15G/15H Filing", price: "₹299", discount: "" },
      { name: "PAN Card Application", price: "₹199", discount: "Free correction" },
      { name: "TAN Application", price: "₹499", discount: "" },
    ],
  },
  {
    id: "roc",
    label: "ROC / Company",
    icon: Building,
    color: "from-purple-500 to-purple-600",
    services: [
      { name: "Private Limited Registration", price: "₹6,999", discount: "Includes govt fees" },
      { name: "LLP Registration", price: "₹5,999", discount: "₹1000 cashback" },
      { name: "OPC Registration", price: "₹5,499", discount: "" },
      { name: "Section 8 Company", price: "₹14,999", discount: "" },
      { name: "Annual ROC Filing", price: "₹4,999", discount: "" },
      { name: "Director Appointment", price: "₹2,999", discount: "" },
      { name: "Director Resignation", price: "₹2,999", discount: "" },
      { name: "Company Name Change", price: "₹9,999", discount: "" },
      { name: "Increase in Capital", price: "₹7,999", discount: "" },
      { name: "Company Closure", price: "₹19,999", discount: "" },
      { name: "Registered Office Change", price: "₹4,999", discount: "" },
      { name: "Share Transfer", price: "₹3,999", discount: "" },
    ],
  },
  {
    id: "fssai",
    label: "FSSAI",
    icon: Award,
    color: "from-orange-500 to-orange-600",
    services: [
      { name: "FSSAI Basic Registration", price: "₹1,999", discount: "Fast-track in 7 days" },
      { name: "FSSAI State License", price: "₹4,999", discount: "" },
      { name: "FSSAI Central License", price: "₹14,999", discount: "" },
      { name: "FSSAI License Renewal", price: "₹2,999", discount: "" },
      { name: "FSSAI Modification", price: "₹1,999", discount: "" },
      { name: "FSSAI Annual Return", price: "₹999", discount: "" },
      { name: "FSSAI Notice Reply", price: "₹3,999", discount: "" },
    ],
  },
  {
    id: "other",
    label: "Other Services",
    icon: Globe,
    color: "from-pink-500 to-pink-600",
    services: [
      { name: "Trademark Registration", price: "₹4,999", discount: "Including govt fees" },
      { name: "MSME/Udyam Registration", price: "₹499", discount: "Same day service" },
      { name: "Import Export Code (IEC)", price: "₹2,999", discount: "" },
      { name: "Professional Tax Registration", price: "₹999", discount: "" },
      { name: "Shop & Establishment", price: "₹1,499", discount: "" },
      { name: "ISO Certification", price: "₹14,999", discount: "" },
      { name: "Accounting & Bookkeeping", price: "₹2,999/month", discount: "First month free" },
      { name: "Payroll Management", price: "₹99/employee", discount: "" },
    ],
  },
];

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman & Nicobar Islands",
  "Chandigarh",
  "Dadra & Nagar Haveli",
  "Daman & Diu",
  "Delhi",
  "Jammu & Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Share Requirements",
    desc: "Fill the form or WhatsApp us your service requirement",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "Document Collection",
    desc: "Upload documents securely via WhatsApp or client portal",
    icon: FileText,
  },
  {
    step: "03",
    title: "CA Review & Filing",
    desc: "Our expert CA team reviews and files your application",
    icon: BadgeCheck,
  },
  {
    step: "04",
    title: "Get Confirmation",
    desc: "Receive registration/filing confirmation with documents",
    icon: CheckCircle,
  },
];

const SPECIAL_OFFERS = [
  {
    title: "First-Time Client Offer",
    discount: "Flat 30% OFF",
    desc: "On any service above ₹2,000",
    code: "NEW30",
    validity: "Valid till 31st Dec 2024",
    color: "from-blue-600 to-blue-700",
  },
  {
    title: "Bundle & Save",
    discount: "Up to 40% OFF",
    desc: "GST + ITR + Company Filing together",
    code: "BUNDLE40",
    validity: "Limited period offer",
    color: "from-green-600 to-green-700",
  },
  {
    title: "Refer & Earn",
    discount: "₹500 Cash",
    desc: "For every successful referral",
    code: "REFER500",
    validity: "No expiry",
    color: "from-purple-600 to-purple-700",
  },
];

type FormData = {
  name: string;
  phone: string;
  state: string;
  service: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    state: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [serviceSearch, setServiceSearch] = useState("");
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showOfferModal, setShowOfferModal] = useState(false);

  // Auto-show offer modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowOfferModal(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Flatten all services
  const allServices = SERVICE_CATEGORIES.flatMap((cat) =>
    cat.services.map((svc) => ({
      category: cat.label,
      service: svc.name,
      price: svc.price,
      discount: svc.discount,
    }))
  );

  const filteredServices = serviceSearch
    ? allServices.filter(
        (item) =>
          item.service.toLowerCase().includes(serviceSearch.toLowerCase()) ||
          item.category.toLowerCase().includes(serviceSearch.toLowerCase())
      )
    : selectedCategory
    ? allServices.filter((item) => item.category === selectedCategory)
    : allServices;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const text = `*🎯 New Client Inquiry - Taxvio*\n\n👤 *Name:* ${form.name}\n📞 *Phone:* ${form.phone}\n📍 *State:* ${form.state}\n✅ *Service:* ${form.service}\n\n💬 *Message:*\n${form.message || "No additional message"}\n\n_Sent via Taxvio Contact Form_`;
    window.open(
      `${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setLoading(false);
    setSent(true);
    setForm({ name: "", phone: "", state: "", service: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const quickWhatsApp = (service?: string) => {
    const text = service
      ? `Hi, I'm interested in *${service}*. Please provide more details.`
      : `Hi, I need assistance with tax services. Please help.`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <>
      <Script
        id="contact-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Taxvio - Professional Tax & Compliance Services",
            url: "https://taxvio.com",
            logo: "https://taxvio.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8937980366",
              contactType: "Customer Service",
              areaServed: "IN",
              availableLanguage: ["Hindi", "English"],
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "4800",
            },
          }),
        }}
      />

      <main className="bg-gradient-to-b from-gray-50 to-white text-gray-900">
        {/* ══ FLOATING WHATSAPP BUTTON ═══════════════════════════════════════ */}
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center gap-3 group"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle size={24} className="animate-pulse" />
          <span className="hidden md:block font-semibold text-sm pr-2 group-hover:pr-3 transition-all">
            Chat with CA
          </span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
        </motion.a>

        {/* ══ SPECIAL OFFER MODAL ════════════════════════════════════════════ */}
        <AnimatePresence>
          {showOfferModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowOfferModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative bg-gradient-to-r from-orange-500 to-pink-600 p-8 text-white">
                  <button
                    onClick={() => setShowOfferModal(false)}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
                  >
                    <X size={20} />
                  </button>
                  <div className="flex items-center gap-3 mb-4">
                    <Gift size={32} />
                    <h2 className="text-3xl font-extrabold">
                      🎉 Limited Time Offers!
                    </h2>
                  </div>
                  <p className="text-white/90">
                    Exclusive discounts for new clients. Save big on professional tax services!
                  </p>
                </div>

                <div className="p-6 space-y-4">
                  {SPECIAL_OFFERS.map((offer, i) => (
                    <div
                      key={i}
                      className={`bg-gradient-to-r ${offer.color} text-white p-5 rounded-2xl`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-lg">{offer.title}</h3>
                          <p className="text-2xl font-extrabold mt-1">
                            {offer.discount}
                          </p>
                        </div>
                        <Tag size={24} />
                      </div>
                      <p className="text-sm mb-2 text-white/90">{offer.desc}</p>
                      <div className="flex items-center justify-between">
                        <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-mono">
                          Code: {offer.code}
                        </div>
                        <span className="text-xs text-white/70">
                          {offer.validity}
                        </span>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={() => {
                      setShowOfferModal(false);
                      quickWhatsApp("I want to claim the special offer");
                    }}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition"
                  >
                    <MessageCircle size={20} />
                    Claim Offer on WhatsApp
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ══ TOP ANNOUNCEMENT BAR ═══════════════════════════════════════════ */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white py-2.5 px-4 text-center">
          <div className="flex items-center justify-center gap-2 flex-wrap text-sm">
            <Sparkles size={16} className="animate-pulse" />
            <span className="font-semibold">
              🎁 Mansoon Special: Flat 30% OFF on all services | Use code: NEW30
            </span>
            <button
              onClick={() => setShowOfferModal(true)}
              className="underline font-bold hover:text-yellow-200 transition"
            >
              View Offers
            </button>
          </div>
        </div>

        {/* ══ HERO SECTION ═══════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden text-white"
          style={HERO_GRADIENT}
        >
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-10"
            style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-10"
            style={{ background: "radial-gradient(circle, #2dd4bf 0%, transparent 70%)" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-5"
            style={{ background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* LEFT - Hero Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="text-center lg:text-left"
              >
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-white/90">
                    Join 4,800+ satisfied clients
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6"
                >
                  India's Most Trusted
                  <span className="block mt-2 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    Tax & Compliance
                  </span>
                  <span className="block mt-2">Partner</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="text-lg sm:text-xl leading-relaxed text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0"
                >
                  Expert CA-assisted GST registration, ITR filing, company
                  formation & tax compliance services — 100% online, 100% secure.
                  <span className="font-semibold text-cyan-300">
                    {" "}
                    Starting just ₹499
                  </span>
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                >
                  <button
                    onClick={() => quickWhatsApp()}
                    className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl hover:shadow-green-500/50 transition-all"
                  >
                    <MessageCircle size={22} />
                    Chat on WhatsApp
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>

                  <button
                    onClick={() =>
                      document
                        .getElementById("contact-form")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 border border-white/30 transition-all"
                  >
                    <Phone size={20} />
                    Request Call Back
                  </button>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="flex flex-wrap justify-center lg:justify-start gap-4"
                >
                  {[
                    "✅ CA-Certified Team",
                    "✅ 15-Min Response",
                    "✅ 4.9★ Rated",
                    "✅ 100% Secure",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full px-4 py-2 text-sm font-medium"
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "rgba(255,255,255,0.9)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </motion.div>
              </motion.div>

              {/* RIGHT - Enhanced Contact Form */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={scaleIn}
                className="w-full"
                id="contact-form"
              >
                <div className="bg-white rounded-3xl shadow-2xl border-2 border-white/20 overflow-hidden backdrop-blur-sm">
                  {/* Form Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm text-white/80">
                        ⚡ CA Team Available Now
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Get FREE Expert Consultation
                    </h3>
                    <p className="text-sm mt-2 text-white/75">
                      Fill this form — our CA will call you within 15 minutes
                    </p>
                  </div>

                  {/* Form Body */}
                  <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                          className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 XXXXX XXXXX"
                          pattern="[0-9]{10}"
                          className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    {/* State */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Your State/UT *
                      </label>
                      <div className="relative">
                        <MapPin
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10"
                        />
                        <select
                          name="state"
                          value={form.state}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-10 py-3.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white appearance-none"
                        >
                          <option value="">Select your state...</option>
                          {INDIAN_STATES.map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={18}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                      </div>
                    </div>

                    {/* Service Selection - Enhanced */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Select Service Required *
                      </label>

                      {/* Category Pills */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {SERVICE_CATEGORIES.map((cat) => (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => {
                              setSelectedCategory(
                                selectedCategory === cat.label ? null : cat.label
                              );
                              setServiceSearch("");
                              setShowServiceDropdown(true);
                            }}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                              selectedCategory === cat.label
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                          >
                            {cat.label}
                          </button>
                        ))}
                      </div>

                      {/* Search Input */}
                      <div className="relative mb-2">
                        <Search
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          type="text"
                          placeholder="Search for a service..."
                          value={serviceSearch}
                          onChange={(e) => {
                            setServiceSearch(e.target.value);
                            setShowServiceDropdown(true);
                            setSelectedCategory(null);
                          }}
                          onFocus={() => setShowServiceDropdown(true)}
                          className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      {/* Service Dropdown */}
                      {showServiceDropdown && (
                        <div className="relative">
                          <div className="absolute z-30 w-full max-h-64 overflow-y-auto bg-white border-2 border-gray-200 rounded-xl shadow-2xl">
                            {filteredServices.length > 0 ? (
                              filteredServices.map((item, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => {
                                    setForm({ ...form, service: item.service });
                                    setServiceSearch(item.service);
                                    setShowServiceDropdown(false);
                                  }}
                                  className="w-full text-left px-4 py-3 hover:bg-blue-50 border-b border-gray-100 last:border-0 transition group"
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                      <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition">
                                        {item.service}
                                      </p>
                                      <p className="text-xs text-gray-400 mt-0.5">
                                        {item.category}
                                      </p>
                                    </div>
                                    <div className="text-right">
                                      <p className="text-sm font-bold text-blue-600">
                                        {item.price}
                                      </p>
                                      {item.discount && (
                                        <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-semibold">
                                          {item.discount}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </button>
                              ))
                            ) : (
                              <p className="px-4 py-6 text-sm text-gray-400 text-center">
                                No services found. Try different keywords.
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Selected Service Display */}
                      {form.service && !showServiceDropdown && (
                        <div className="mt-3 p-3 rounded-xl bg-green-50 border-2 border-green-200 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle size={18} className="text-green-600" />
                            <span className="text-sm text-green-700 font-semibold">
                              {form.service}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setForm({ ...form, service: "" });
                              setServiceSearch("");
                            }}
                            className="text-green-600 hover:text-green-700"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Additional Requirements{" "}
                        <span className="font-normal text-gray-400">
                          (Optional)
                        </span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your specific needs..."
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={
                        loading ||
                        !form.name ||
                        !form.phone ||
                        !form.state ||
                        !form.service
                      }
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-200"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-3 border-white/40 border-t-white rounded-full animate-spin" />
                          Connecting to WhatsApp...
                        </>
                      ) : sent ? (
                        <>
                          <CheckCircle size={20} />
                          Request Sent Successfully!
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Get FREE Consultation
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-4 pt-2">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Shield size={14} className="text-green-600" />
                        100% Confidential
                      </div>
                      <div className="w-1 h-1 bg-gray-300 rounded-full" />
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Zap size={14} className="text-blue-600" />
                        15-Min Response
                      </div>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Stats Bar - Desktop */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="hidden lg:grid grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/20"
            >
              {STATS.map(({ value, label, icon: Icon }) => (
                <motion.div key={label} variants={fadeUp} className="text-center">
                  <Icon size={32} className="mx-auto mb-3 text-cyan-300" />
                  <p className="text-3xl font-extrabold text-white mb-1">
                    {value}
                  </p>
                  <p className="text-sm text-white/60 uppercase tracking-wider">
                    {label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Stats */}
          <div className="lg:hidden bg-black/20 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 gap-4">
              {STATS.map(({ value, label, icon: Icon }) => (
                <div key={label} className="text-center">
                  <Icon size={24} className="mx-auto mb-2 text-cyan-300" />
                  <p className="text-xl font-extrabold text-white">{value}</p>
                  <p className="text-xs text-white/60 uppercase tracking-wider mt-0.5">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ ACHIEVEMENTS / TRUST INDICATORS ═══════════════════════════════ */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-12"
            >
              <motion.span
                variants={fadeUp}
                className="inline-block text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-4"
              >
                Why 4,800+ Clients Trust Us
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-extrabold text-gray-900"
              >
                India's Leading Tax & Compliance Experts
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {ACHIEVEMENTS.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={scaleIn}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 opacity-50" />
                  <div className="relative p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══ HOW IT WORKS - PROCESS ════════════════════════════════════════ */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-12"
            >
              <motion.span
                variants={fadeUp}
                className="inline-block text-sm font-bold uppercase tracking-widest text-blue-600 bg-white px-4 py-2 rounded-full mb-4 shadow-sm"
              >
                Simple & Fast
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-extrabold text-gray-900"
              >
                How Taxvio Works
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-600 mt-3 text-lg"
              >
                Get your tax services completed in 4 easy steps
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {PROCESS_STEPS.map(({ step, title, desc, icon: Icon }, idx) => (
                <motion.div key={idx} variants={fadeUp} className="relative">
                  {/* Connector Line */}
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-300 to-transparent" />
                  )}

                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-lg">
                      {step}
                    </div>

                    <div className="mt-4 mb-4">
                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                        <Icon size={28} className="text-blue-600" />
                      </div>
                    </div>

                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mt-12"
            >
              <button
                onClick={() => quickWhatsApp("I want to get started")}
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <MessageCircle size={22} />
                Start Your Service Now
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </div>
        </section>

        {/* ══ SERVICES SHOWCASE WITH PRICING ════════════════════════════════ */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-12"
            >
              <motion.span
                variants={fadeUp}
                className="inline-block text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-4"
              >
                Our Services
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-extrabold text-gray-900"
              >
                Complete Tax & Compliance Solutions
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-600 mt-3 text-lg"
              >
                Transparent pricing. No hidden charges. Expert execution.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-8"
            >
              {SERVICE_CATEGORIES.map((category) => (
                <motion.div
                  key={category.id}
                  variants={scaleIn}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <category.icon size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-gray-900">
                        {category.label}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {category.services.length} services available
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                        onClick={() => quickWhatsApp(service.name)}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition flex-1">
                            {service.name}
                          </h4>
                          <ChevronRight
                            size={16}
                            className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-blue-600">
                            {service.price}
                          </span>
                          {service.discount && (
                            <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-semibold">
                              {service.discount}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      Need a custom package? We've got you covered!
                    </p>
                    <button
                      onClick={() =>
                        quickWhatsApp(`I need a custom package for ${category.label}`)
                      }
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 transition"
                    >
                      Get Custom Quote
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══ TESTIMONIALS - ENHANCED ═══════════════════════════════════════ */}
        <section className="py-16 bg-gradient-to-b from-blue-50 via-purple-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-12"
            >
              <motion.span
                variants={fadeUp}
                className="inline-block text-sm font-bold uppercase tracking-widest text-purple-600 bg-white px-4 py-2 rounded-full mb-4 shadow-sm"
              >
                Client Success Stories
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-extrabold text-gray-900"
              >
                4,800+ Businesses Trust Taxvio
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-600 mt-3 text-lg"
              >
                Real experiences from clients across India
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex items-center justify-center gap-2 mt-6"
              >
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={24}
                      fill="#facc15"
                      className="text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">4.9</span>
                <span className="text-gray-500">out of 5</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {TESTIMONIALS.map(({ stars, text, name, title, service }) => (
                <motion.div
                  key={name}
                  variants={scaleIn}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: stars }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="#facc15"
                        className="text-yellow-400"
                      />
                    ))}
                  </div>

                  <p
                    className="text-gray-700 text-sm leading-relaxed italic mb-4"
                    itemProp="reviewBody"
                  >
                    &quot;{text}&quot;
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                      {name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p
                        className="font-bold text-gray-900 text-sm"
                        itemProp="author"
                      >
                        {name}
                      </p>
                      <p className="text-xs text-gray-500">{title}</p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="inline-block text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-semibold">
                      {service}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mt-12"
            >
              <p className="text-gray-600 mb-4">
                Want to be our next success story?
              </p>
              <button
                onClick={() => quickWhatsApp()}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <MessageCircle size={22} />
                Start Your Journey Today
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </div>
        </section>

        {/* ══ FAQ SECTION - ENHANCED ════════════════════════════════════════ */}
        <section
          className="py-16 bg-white"
          aria-label="Frequently Asked Questions"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="inline-block text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-4">
                  Have Questions?
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 mt-3">
                  Can't find your answer?{" "}
                  <button
                    onClick={() => quickWhatsApp("I have a question")}
                    className="text-blue-600 hover:text-blue-700 font-semibold underline"
                  >
                    Ask us on WhatsApp
                  </button>
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                className="space-y-4"
                itemScope
                itemType="https://schema.org/FAQPage"
              >
                {FAQS.map((f, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="border-2 border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <button
                      className="w-full text-left px-6 py-5 flex justify-between items-center font-semibold text-base text-gray-900 hover:bg-gray-50 transition"
                      onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                      aria-expanded={faqOpen === i}
                    >
                      <span itemProp="name" className="pr-4">
                        {f.q}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-blue-600 shrink-0 transition-transform duration-300 ${
                          faqOpen === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {faqOpen === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                          itemScope
                          itemType="https://schema.org/Answer"
                        >
                          <p
                            className="px-6 pb-5 text-gray-600 text-sm leading-relaxed"
                            itemProp="text"
                          >
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ CONTACT INFO CARDS ═════════════════════════════════════════════ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid sm:grid-cols-2 gap-6"
            >
              <motion.div
                variants={scaleIn}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Our Location
                    </p>
                    <p className="font-bold text-lg text-gray-900">
                      Khatauli, Muzaffarnagar
                    </p>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                      Uttar Pradesh, India
                    </p>
                    <p className="text-xs text-blue-600 font-semibold mt-2">
                      🌐 100% Online Services Across India
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Working Hours
                    </p>
                    <p className="font-bold text-lg text-gray-900">
                      Mon – Sat: 9 AM – 7 PM
                    </p>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                      Sunday: Emergency support via WhatsApp
                    </p>
                    <p className="text-xs text-green-600 font-semibold mt-2 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Available now
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══ FINAL CTA - ENHANCED ══════════════════════════════════════════ */}
        <section
          className="py-20 relative overflow-hidden"
          style={GRADIENT_BG}
        >
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-10"
            style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none opacity-10"
            style={{ background: "radial-gradient(circle, #2dd4bf 0%, transparent 70%)" }} />

          <motion.div
            className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm mb-6 text-white"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <Timer size={16} className="text-yellow-300" />
              Limited Time: First 100 clients get 30% OFF
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-6"
            >
              Don't Let Tax Stress Hold You Back
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl leading-relaxed text-white/80 mb-8 max-w-2xl mx-auto"
            >
              Join 4,800+ satisfied clients who trust Taxvio for hassle-free tax
              compliance. Our expert CA team is ready to help you — starting at
              just{" "}
              <span className="font-bold text-yellow-300 text-2xl">₹499</span>
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <button
                onClick={() => quickWhatsApp()}
                className="group bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl hover:shadow-green-500/50 transition-all"
              >
                <MessageCircle size={24} />
                Chat with CA on WhatsApp
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 border-2 border-white/30 transition-all"
              >
                <Phone size={20} />
                Request Call Back
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-6 text-sm text-white/70"
            >
              <span className="flex items-center gap-2">
                <Shield size={16} /> 100% Secure & Confidential
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck size={16} /> CA-Certified Team
              </span>
              <span className="flex items-center gap-2">
                <Zap size={16} /> Fast Turnaround
              </span>
              <span className="flex items-center gap-2">
                <Star size={16} /> 4.9★ Rated
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 pt-8 border-t border-white/20"
            >
              <p className="text-white/60 text-sm mb-4">
                Trusted by leading businesses across India
              </p>
              <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
                {["Startups", "SMEs", "E-Commerce", "Retailers", "Manufacturers"].map(
                  (type) => (
                    <span
                      key={type}
                      className="text-white font-semibold text-sm"
                    >
                      {type}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        </section>

        <Footar />
      </main>
    </>
  );
}