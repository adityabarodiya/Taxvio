import Footar from "@/components/Footar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FSSAI Notice Reply & Improvement Notice Response | Expert Legal Support | Taxvio",
  description:
    "Received an FSSAI Improvement Notice, Show Cause Notice, or Suspension Notice? Taxvio provides expert FSSAI notice reply services to protect your food license. Serving Khatauli, Muzaffarnagar, Noida, Delhi & Mumbai.",
  keywords:
    "FSSAI Notice Reply, FSSAI Improvement Notice Response, Show Cause Notice FSSAI, FSSAI Suspension Notice, Food License Notice Reply India, FSSAI Consultant Khatauli, FSSAI Notice Reply Muzaffarnagar, FSSAI Compliance Assistance, FSSAI Notice Noida Delhi",
  openGraph: {
    title: "FSSAI Notice Reply & Improvement Notice Response | Taxvio",
    description:
      "Expert FSSAI notice reply services. Protect your food license from suspension or cancellation with Taxvio's CA-supervised compliance team.",
    type: "website",
  },
};

export default function FSSAINoticeReplyPage() {
  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-[#00416a] via-[#00527f] to-[#002b45] text-white overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10" />
        <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white/5 -translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
          {/* breadcrumb */}
          <nav className="mb-6 text-sm text-white/60 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/serviceslist" className="hover:text-white transition">Services</Link>
            <span>/</span>
            <Link href="/serviceslist/fssai" className="hover:text-white transition">FSSAI</Link>
            <span>/</span>
            <span className="text-white">Notice Reply</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                ⚖️ FSSAI Notice Reply & Legal Compliance
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                FSSAI Notice Reply —<br />
                <span className="text-[#7ecbf0]">Protect Your Food</span><br />
                License Today
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                Received an FSSAI Improvement Notice, Show Cause Notice, or Suspension Notice?
                Every notice comes with a strict response deadline — missing it can lead to
                <strong className="text-white"> license suspension or permanent cancellation</strong>.
                Taxvio's compliance experts draft legally sound, evidence-backed replies that
                protect your food business and license status.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center text-base"
                >
                  Get Expert Help Now →
                </Link>
                <Link
                  href="tel:+918937980366"
                  className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center text-base"
                >
                  📞 Speak to a Consultant
                </Link>
              </div>
            </div>

            {/* urgency card */}
            <div className="w-full lg:w-80 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 flex-shrink-0">
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-5">⚠️ Act Immediately</p>
              <ul className="space-y-4 text-sm text-gray-200">
                {[
                  ["📋", "4 types of FSSAI notices covered"],
                  ["⏰", "Strict reply deadline — don't miss it"],
                  ["⚖️", "CA + Legal team supervised drafting"],
                  ["📁", "Complete documentation support"],
                  ["🛡️", "Hearing & inspection assistance"],
                  ["🗺️", "PAN India service coverage"],
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
            { number: "500+", label: "Food Businesses Protected", icon: "🛡️" },
            { number: "4 Types", label: "Notice Categories Handled", icon: "📋" },
            { number: "100%", label: "Compliance-Focused Drafting", icon: "✅" },
            { number: "PAN India", label: "Service Coverage", icon: "🗺️" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-2">{s.icon}</div>
              <p className="text-2xl font-extrabold text-[#00416a] mb-1">{s.number}</p>
              <p className="text-gray-500 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold text-gray-700">
          {[
            "✔ CA & Legal Team Supervised",
            "✔ Fast Turnaround Drafting",
            "✔ Complete Documentation Support",
            "✔ Hearing & Inspection Assistance",
          ].map((t) => (
            <div key={t} className="bg-gray-50 rounded-xl py-3 px-4 border hover:border-[#00416a] transition">{t}</div>
          ))}
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <article className="max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* WHAT IS AN FSSAI NOTICE */}
        <section id="what-is-fssai-notice">
          <SectionLabel text="Understanding the Notice" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-6">
            What Is an FSSAI Notice and Why Must You Respond?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
            <div className="space-y-4">
              <p>
                An <strong>FSSAI Notice</strong> is a formal official communication issued by the Food Safety and
                Standards Authority of India or a designated food safety officer when a food business operator is
                found to be in violation of — or suspected of violating — the provisions of the
                <strong> Food Safety and Standards Act, 2006</strong> or its associated regulations.
              </p>
              <p>
                FSSAI notices are not informal warnings. They are legally binding communications that carry
                specific timelines for response, typically ranging from <strong>7 to 30 days</strong> from the
                date of issuance. Failure to respond within the prescribed deadline is itself treated as
                non-compliance and can escalate consequences significantly — including automatic suspension
                or cancellation of your food license.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                A notice may arise from a routine inspection, a consumer complaint, a discrepancy in your
                annual return filing, non-renewal of license, or findings during a market surveillance exercise.
                Regardless of the trigger, the response must be <strong>structured, evidence-backed, and
                legally compliant</strong> — a poorly written or inadequate reply can worsen your situation.
              </p>
              <p>
                At <strong>Taxvio</strong>, our compliance and legal team has extensive experience handling all
                categories of FSSAI notices. We analyse the specific allegations, identify the strongest defence,
                compile supporting documentation, and draft a professionally worded reply that maximises the
                chances of a favourable outcome for your food business.
              </p>
            </div>
          </div>
        </section>

        {/* TYPES OF NOTICES */}
        <section id="types-of-fssai-notices">
          <SectionLabel text="Notice Categories" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Types of FSSAI Notices Taxvio Handles
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            FSSAI issues different types of notices depending on the severity of the violation. Each requires
            a distinct response strategy and documentation approach.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                type: "Improvement Notice",
                icon: "🔧",
                severity: "Low–Medium",
                severityColor: "bg-yellow-100 text-yellow-700",
                border: "border-yellow-400",
                desc: "Issued under Section 32 of the FSS Act when a food safety officer observes minor non-compliance during an inspection — such as hygiene deficiencies, labeling issues, or inadequate food handling practices. The FBO is given a specific period (usually 14–30 days) to rectify the deficiencies and submit proof of correction.",
                consequence: "Non-response can escalate to a Show Cause or Suspension Notice.",
                action: "Taxvio prepares a detailed compliance action plan, supporting photographs, rectification evidence, and a formal written reply to the food safety officer.",
              },
              {
                type: "Show Cause Notice",
                icon: "📄",
                severity: "Medium–High",
                severityColor: "bg-orange-100 text-orange-700",
                border: "border-orange-400",
                desc: "Issued when the authority has reason to believe that a food business has committed a significant violation and wants the FBO to explain why action — including penalty, suspension, or cancellation — should not be taken. A written response with supporting documents is mandatory within a stated timeline.",
                consequence: "Inadequate response leads to ex-parte adverse orders against your license.",
                action: "Taxvio drafts a legally structured show cause reply addressing each allegation point-by-point, backed by compliance records and legal provisions.",
              },
              {
                type: "Suspension Notice",
                icon: "⛔",
                severity: "High",
                severityColor: "bg-red-100 text-red-700",
                border: "border-red-400",
                desc: "Issued when the food safety authority temporarily suspends a food license due to serious non-compliance findings, significant hygiene violations, or failure to comply with an earlier Improvement Notice. Business operations must cease immediately upon receiving this notice until compliance is demonstrated.",
                consequence: "Continued operation after suspension notice constitutes a criminal offence.",
                action: "Taxvio initiates urgent compliance rectification, prepares a reinstatement application, and coordinates directly with the food safety authority for expedited restoration.",
              },
              {
                type: "Cancellation Notice",
                icon: "❌",
                severity: "Critical",
                severityColor: "bg-red-200 text-red-800",
                border: "border-red-600",
                desc: "The most serious FSSAI notice — issued for repeated violations, criminal offences under the FSS Act, or failure to comply with a suspension order. Cancellation of the FSSAI license means permanent closure of food business operations under that license. Legal representation and expert response are absolutely critical.",
                consequence: "Permanent loss of food license and prohibition from food business operations.",
                action: "Taxvio provides immediate legal and compliance consultation, prepares a comprehensive defence, and represents the FBO's interests through the formal adjudication process.",
              },
            ].map((notice) => (
              <div key={notice.type} className={`border-l-4 ${notice.border} bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{notice.icon}</span>
                    <h3 className="text-xl font-bold text-[#00416a]">{notice.type}</h3>
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full flex-shrink-0 ${notice.severityColor}`}>
                    {notice.severity}
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{notice.desc}</p>
                <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-4">
                  <p className="text-xs font-semibold text-red-700">⚠️ If ignored: {notice.consequence}</p>
                </div>
                <div className="bg-[#00416a]/5 border border-[#00416a]/10 rounded-xl px-4 py-3">
                  <p className="text-xs font-semibold text-[#00416a]">✅ Taxvio's approach: {notice.action}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMMON REASONS */}
        <section id="common-reasons">
          <SectionLabel text="Why Notices Are Issued" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Common Reasons for Receiving an FSSAI Notice
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Understanding why the notice was issued is the first step toward an effective response.
            These are the most common triggers food safety officers cite in FSSAI notices.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🏷️", title: "Improper Food Labeling", desc: "Missing FSSAI number, incorrect nutritional info, absent allergen declarations, or non-compliant packaging." },
              { icon: "🧹", title: "Hygiene & Sanitation Issues", desc: "Poor cleanliness of premises, contaminated water supply, pest infestations, or unhygienic food handling." },
              { icon: "📅", title: "Expired or Lapsed License", desc: "Operating a food business with an expired or non-renewed FSSAI license detected during inspection." },
              { icon: "📊", title: "Non-Filing of Annual Returns", desc: "Failure to file mandatory Form D1/D2 annual returns by the May 31 deadline for State/Central license holders." },
              { icon: "🍽️", title: "Unauthorized Product Category", desc: "Manufacturing or selling food products not listed or approved under your current FSSAI license category." },
              { icon: "👤", title: "Consumer Complaints", desc: "Complaints about food quality, adulteration, foreign matter, or food poisoning incidents reported to FSSAI." },
              { icon: "🔍", title: "Market Surveillance Findings", desc: "Substandard or unsafe food products detected during random market sampling and laboratory testing." },
              { icon: "🏭", title: "Inspection Deficiencies", desc: "Non-compliance observed during scheduled or surprise inspections by food safety officers." },
              { icon: "📋", title: "Record-Keeping Failures", desc: "Absence of food safety management records, temperature logs, or batch production documentation." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-2xl border bg-gray-50 hover:bg-white hover:shadow-md hover:border-[#00416a]/30 transition group">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="font-semibold text-[#00416a] mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RESPONSE TIMELINE */}
        <section id="response-deadlines" className="bg-amber-50 border border-amber-100 rounded-3xl p-8 md:p-12">
          <SectionLabel text="Critical Deadlines" />
          <h2 className="text-3xl font-bold text-amber-800 mb-4">
            FSSAI Notice Response Deadlines — Do Not Miss These
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Each type of FSSAI notice carries a legally mandated response window. Missing these deadlines
            removes your right to defend your position and triggers automatic adverse action.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { type: "Improvement Notice", deadline: "14–30 Days", urgency: "bg-yellow-100 text-yellow-800 border-yellow-300" },
              { type: "Show Cause Notice", deadline: "7–21 Days", urgency: "bg-orange-100 text-orange-800 border-orange-300" },
              { type: "Suspension Notice", deadline: "Immediate Action", urgency: "bg-red-100 text-red-800 border-red-300" },
              { type: "Cancellation Notice", deadline: "As Specified", urgency: "bg-red-200 text-red-900 border-red-400" },
            ].map((d) => (
              <div key={d.type} className={`border rounded-2xl p-5 text-center ${d.urgency}`}>
                <p className="font-semibold text-sm mb-2">{d.type}</p>
                <p className="text-2xl font-extrabold">{d.deadline}</p>
                <p className="text-xs mt-2 opacity-70">Typical response window</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-amber-800 bg-amber-100 border border-amber-200 rounded-xl px-5 py-4">
            <strong>⚠️ Note:</strong> The exact deadline is specified on the notice itself and must be adhered to strictly.
            Contact Taxvio immediately upon receiving any FSSAI notice — early engagement maximises the quality of your defence.
          </p>
        </section>

        {/* PROCESS */}
        <section id="our-process">
          <SectionLabel text="How We Work" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Taxvio's 6-Step FSSAI Notice Reply Process
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Our structured legal-compliance process minimises risk, addresses every allegation, and
            presents the strongest possible defence for your food business license.
          </p>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00416a] to-[#7ecbf0] hidden md:block" />
            <div className="space-y-10">
              {[
                {
                  step: "01",
                  title: "Detailed Notice Review & Allegation Mapping",
                  desc: "Our team carefully reads the notice in full, identifies each specific allegation or observation raised by the food safety authority, maps them to the relevant provisions of the FSS Act and Regulations, and assesses the severity and urgency of the situation.",
                },
                {
                  step: "02",
                  title: "Compliance Gap Analysis",
                  desc: "We conduct an internal assessment of your business operations to identify which compliance areas are affected, what evidence exists in your favour, and what corrective actions — if any — need to be taken before the reply is submitted.",
                },
                {
                  step: "03",
                  title: "Evidence & Documentation Compilation",
                  desc: "Our team prepares a comprehensive supporting document package: inspection records, hygiene logs, license certificates, test reports, purchase records, corrective action evidence, staff training certificates, and any other material that strengthens your position.",
                },
                {
                  step: "04",
                  title: "Drafting the Legal Notice Reply",
                  desc: "We draft a professionally structured, legally grounded reply that addresses each allegation point-by-point, cites relevant provisions of the FSS Act in your favour, demonstrates compliance or corrective action taken, and presents a clear, compelling case for maintaining your license.",
                },
                {
                  step: "05",
                  title: "Online or Physical Submission",
                  desc: "The completed reply along with all supporting documents is submitted through the appropriate official channel — either the FSSAI online portal or physically to the designated food safety authority office — within the prescribed deadline, with acknowledgement obtained.",
                },
                {
                  step: "06",
                  title: "Follow-Up, Hearing Attendance & Resolution",
                  desc: "If the authority schedules a personal hearing or requests further clarification, our team prepares you thoroughly and accompanies or represents you at the hearing. We follow up proactively until formal closure or reinstatement of your license is confirmed.",
                },
              ].map((step, i) => (
                <div key={step.step} className="relative md:pl-16 flex gap-6 items-start">
                  <div className="hidden md:flex absolute left-0 w-10 h-10 bg-[#00416a] text-white rounded-full items-center justify-center font-bold text-sm flex-shrink-0 z-10 border-4 border-white shadow-md">
                    {i + 1}
                  </div>
                  <div className="bg-white border rounded-2xl p-6 hover:shadow-md transition flex-1">
                    <span className="text-xs font-bold text-[#00416a]/40 tracking-widest uppercase">Step {step.step}</span>
                    <h3 className="text-lg font-bold text-[#00416a] mt-1 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONSEQUENCE ESCALATION */}
        <section id="consequences">
          <SectionLabel text="Risk Escalation" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            How FSSAI Notices Escalate if Left Unaddressed
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            FSSAI notices follow an escalation path. What starts as a minor improvement notice can
            become a license cancellation if not handled professionally and promptly.
          </p>
          <div className="flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border shadow-sm">
            {[
              { stage: "Stage 1", label: "Improvement Notice", icon: "🔧", color: "bg-yellow-50 border-yellow-200", text: "Minor non-compliance observed. Rectify within 14–30 days.", arrow: true },
              { stage: "Stage 2", label: "Show Cause Notice", icon: "📄", color: "bg-orange-50 border-orange-200", text: "Non-response or inadequate reply escalates to show cause.", arrow: true },
              { stage: "Stage 3", label: "Suspension", icon: "⛔", color: "bg-red-50 border-red-200", text: "Operations halted. License temporarily suspended.", arrow: true },
              { stage: "Stage 4", label: "Cancellation", icon: "❌", color: "bg-red-100 border-red-300", text: "Permanent cancellation. Business cannot operate.", arrow: false },
            ].map((s) => (
              <div key={s.stage} className={`flex-1 border-b md:border-b-0 md:border-r last:border-0 ${s.color} p-6 relative`}>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{s.stage}</p>
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className="font-bold text-gray-800 mb-2">{s.label}</p>
                <p className="text-sm text-gray-600">{s.text}</p>
                {s.arrow && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border rounded-full items-center justify-center text-gray-400 font-bold shadow-sm">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-gray-600 bg-gray-50 border rounded-xl px-5 py-4">
            <strong className="text-[#00416a]">Taxvio intervenes at any stage</strong> — whether you've just received
            your first improvement notice or are facing a suspension order. The earlier you act, the stronger your position.
          </p>
        </section>

        {/* WHY TAXVIO */}
        <section id="why-taxvio">
          <SectionLabel text="Our Advantage" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            Why Food Businesses Trust Taxvio for FSSAI Notice Reply
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            An FSSAI notice is not just a paperwork problem — it is a legal threat to your food business.
            Here is why Taxvio is the right partner to defend your license.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: "⚖️", title: "Legal & Compliance Expertise", desc: "Our team has in-depth knowledge of the FSS Act, 2006, FSSAI regulations, and the procedural requirements for each notice type — giving your reply the legal grounding it needs." },
              { icon: "📋", title: "Allegation-by-Allegation Response", desc: "We never send generic replies. Every allegation in the notice is addressed individually with specific evidence, legal provisions, and remedial action documentation." },
              { icon: "⚡", title: "Fast Turnaround", desc: "We understand that FSSAI notice deadlines are tight. Our team mobilises quickly — often completing initial draft replies within 48–72 hours of engagement." },
              { icon: "🔍", title: "Compliance Gap Remediation", desc: "Beyond the reply, we identify and help you fix the underlying compliance gaps so you are not vulnerable to repeat notices or adverse inspection findings." },
              { icon: "🎤", title: "Hearing Attendance & Representation", desc: "If a personal hearing is scheduled, our compliance officers prepare you for the questioning and accompany you to present your case before the food safety authority." },
              { icon: "🗺️", title: "Local Authority Knowledge", desc: "Deep familiarity with the Khatauli, Muzaffarnagar, and UP food safety authority processes means we know how local officers operate and what they expect in a compliant response." },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 p-6 rounded-2xl border bg-white hover:shadow-md transition">
                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-[#00416a] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LOCAL SEO */}
        <section id="cities-served">
          <SectionLabel text="Our Reach" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-4">
            FSSAI Notice Reply Services Across India
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            Taxvio has helped food businesses in <strong>Khatauli</strong> and <strong>Muzaffarnagar</strong>
            defend FSSAI notices and protect their licenses since our founding. We also assist clients in
            <strong> Noida</strong>, <strong>Delhi NCR</strong>, <strong>Meerut</strong>,
            <strong> Ghaziabad</strong>, and <strong>Mumbai</strong> navigate the full notice reply process —
            including hearings with local food safety authorities. Our team is well-versed in the
            procedural expectations of UP State Food Authority officers and Central FSSAI adjudication processes.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Khatauli", "Muzaffarnagar", "Noida", "Delhi NCR", "Meerut", "Mumbai"].map((city) => (
              <div key={city} className="bg-gray-50 border rounded-xl p-4 text-center text-sm font-semibold text-[#00416a] hover:bg-[#00416a] hover:text-white transition cursor-default">
                📍 {city}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <SectionLabel text="FAQs" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#00416a] mb-10">
            Frequently Asked Questions — FSSAI Notice Reply
          </h2>
          <div className="space-y-5">
            {[
              {
                q: "What should I do immediately after receiving an FSSAI notice?",
                a: "Read the notice carefully to understand the specific allegations and the response deadline stated on it. Do not ignore it or delay. Contact a compliance professional like Taxvio immediately — early engagement gives us more time to prepare a stronger reply and gather the right documentation.",
              },
              {
                q: "What is the difference between an Improvement Notice and a Show Cause Notice?",
                a: "An Improvement Notice (Section 32) is issued for minor non-compliance and asks you to rectify specific deficiencies within a set period. A Show Cause Notice is more serious — it requires you to explain why penal action, including suspension or cancellation of license, should not be taken against you. Show Cause Notices demand a detailed, legally structured written response.",
              },
              {
                q: "Can my FSSAI license be cancelled without warning?",
                a: "No. FSSAI follows a process of natural justice — you will receive a notice and an opportunity to respond before cancellation. However, in cases of severe violations or criminal offences under the FSS Act, emergency suspension can happen quickly. This is why responding promptly to every earlier-stage notice is critical.",
              },
              {
                q: "Can Taxvio attend the FSSAI hearing on my behalf?",
                a: "Yes. Taxvio prepares you thoroughly for any scheduled personal hearing before the food safety authority and can accompany you or represent your interests during the hearing. We prepare key arguments, supporting documents, and responses to anticipated questions.",
              },
              {
                q: "How long does it take to resolve an FSSAI notice?",
                a: "Resolution timelines vary by notice type and the authority's processing schedule. Improvement notices can often be closed within 30–45 days with proper documentation. Show cause and suspension matters may take 60–120 days. Taxvio follows up proactively at every stage to avoid unnecessary delays.",
              },
              {
                q: "Will fixing the issues mentioned in the notice guarantee it is closed?",
                a: "Not automatically. You must submit formal written proof of rectification along with your notice reply. Simply fixing the problem without informing the authority does not result in notice closure. Taxvio ensures that all corrective actions are properly documented, photographed where needed, and formally submitted as part of your reply.",
              },
              {
                q: "Can a cancelled FSSAI license be restored?",
                a: "Restoration of a cancelled FSSAI license is a complex legal process and is not guaranteed. In some cases, cancellation orders can be appealed before the Food Safety Appellate Tribunal or the High Court. However, the best strategy is always to respond to earlier-stage notices effectively and avoid reaching the cancellation stage.",
              },
            ].map((faq) => (
              <details key={faq.q} className="group border rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition list-none">
                  <span>{faq.q}</span>
                  <span className="text-[#00416a] text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-4">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section id="related-services">
          <SectionLabel text="Explore More" />
          <h2 className="text-3xl font-bold text-[#00416a] mb-8">Related FSSAI Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "FSSAI Registration", icon: "📝", link: "/serviceslist/fssai/fssai-registration", desc: "New food license for your business." },
              { title: "FSSAI Renewal", icon: "🔄", link: "/serviceslist/fssai/fssai-renewal", desc: "Renew before expiry to avoid penalties." },
              { title: "Annual Return Filing", icon: "📊", link: "/serviceslist/fssai/fssai-annual-return", desc: "File Form D1/D2 by May 31 annually." },
              { title: "License Modification", icon: "✏️", link: "/serviceslist/fssai/fssai-modification", desc: "Update address, products, or ownership." },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.link}
                className="block border rounded-2xl p-6 hover:shadow-lg hover:border-[#00416a]/40 transition group bg-white"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-[#00416a] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
                <span className="text-sm text-[#00416a] font-semibold group-hover:underline">Learn More →</span>
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
                <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">⚠️ Act Before the Deadline</p>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                  Received an FSSAI Notice?<br />Don't Face It Alone.
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Every hour matters once a notice is issued. Taxvio's compliance and legal team will
                  review your notice, build your defence, and submit a professionally drafted reply —
                  protecting your food business license from suspension or cancellation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
                <Link
                  href="/contact"
                  className="bg-white text-[#00416a] px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-center"
                >
                  Get Professional Help Now
                </Link>
                <Link
                  href="tel:+919999999999"
                  className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#00416a] transition-all duration-200 text-center"
                >
                  📞 Call Now
                </Link>
              </div>
            </div>
          </div>
        </section>

      </article>

      <Footar />

      {/* ── SCHEMA MARKUP ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What should I do immediately after receiving an FSSAI notice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Read the notice carefully to understand the specific allegations and response deadline. Contact a compliance professional immediately — early engagement allows more time to prepare a stronger reply.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between an Improvement Notice and a Show Cause Notice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An Improvement Notice (Section 32) is for minor non-compliance and asks you to rectify deficiencies. A Show Cause Notice requires you to explain why penal action should not be taken and demands a detailed written response.",
                },
              },
              {
                "@type": "Question",
                name: "Can my FSSAI license be cancelled without warning?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. FSSAI follows natural justice — you receive a notice and an opportunity to respond before cancellation. However, emergency suspension is possible in severe cases.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to resolve an FSSAI notice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Improvement notices can be closed in 30–45 days. Show cause and suspension matters may take 60–120 days depending on the authority's processing schedule.",
                },
              },
              {
                "@type": "Question",
                name: "Can a cancelled FSSAI license be restored?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Restoration is complex and not guaranteed. Cancellation orders may be appealed before the Food Safety Appellate Tribunal or High Court. The best strategy is responding effectively to earlier-stage notices.",
                },
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Taxvio – FSSAI Notice Reply Services",
            description:
              "Expert FSSAI notice reply and compliance assistance for Improvement Notice, Show Cause Notice, Suspension and Cancellation notices across India.",
            url: "https://taxvio.in/serviceslist/fssai/fssai-notice-reply",
            areaServed: ["Khatauli", "Muzaffarnagar", "Noida", "Delhi", "Meerut", "Mumbai", "India"],
            serviceType: "FSSAI Notice Reply & Legal Compliance",
          }),
        }}
      />
    </main>
  );
}

/* ─────────────────────────── COMPONENTS ─────────────────────────── */

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00416a]/60 mb-3 border border-[#00416a]/20 px-3 py-1 rounded-full bg-[#00416a]/5">
      {text}
    </span>
  );
}