import Image from "next/image";
import bg1 from "../../public/service/bg1.png";
import logo from "@/public/tv2.png";
import Footar from "@/components/Footar";

export default function About() {
  return (
    <main className="bg-gray-100 text-[#002b45]">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#00416a] to-[#002b45] text-white py-32">
        <div className="mx-auto max-w-6xl px-6 flex flex-col-reverse md:flex-row items-center gap-12">
          
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              About Taxvio – India’s Trusted GST & Tax Compliance Experts
            </h1>
            <p className="text-gray-300 text-lg">
              Taxvio is a professional taxation and compliance consultancy firm
              offering GST registration, Income Tax filing, ROC compliance,
              company incorporation, and business advisory services across India.
              We simplify complex legal processes and ensure 100% compliance with
              Indian regulatory frameworks.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-xl bg-white text-[#00416a] hover:bg-gray-200 transition px-8 py-3 font-semibold shadow"
            >
              Speak to an Expert
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-white/10 blur-3xl" />
            <Image
              src={bg1}
              alt="Taxvio GST and Tax Experts"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mx-auto max-w-6xl px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        
        <div className="md:w-1/2">
          <Image
            src={logo}
            alt="Taxvio Logo"
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold">
            Who We Are – Professional Tax & Compliance Advisors
          </h2>

          <p className="leading-relaxed">
            Taxvio was founded with a clear objective – to provide transparent,
            reliable, and technology-driven tax and compliance services to
            individuals, startups, MSMEs, and growing enterprises across India.
            In today’s dynamic regulatory environment, businesses must remain
            compliant with GST laws, Income Tax regulations, and corporate
            governance requirements under the Companies Act.
          </p>

          <p className="leading-relaxed">
            Our team of experienced tax professionals and compliance specialists
            ensures accurate documentation, timely filing, and proactive advisory
            support. From GST registration and return filing to ROC annual
            compliance and company incorporation, we offer end-to-end solutions
            tailored to your business needs.
          </p>

          <p className="leading-relaxed">
            We believe compliance should not be complicated. Our structured
            processes, digital documentation systems, and transparent pricing
            model make taxation simple, efficient, and stress-free.
          </p>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 space-y-10">
          <h2 className="text-3xl font-bold text-center">
            Our Core Services
          </h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              At Taxvio, we provide comprehensive taxation and regulatory
              services across India, including:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                GST Registration, GST Return Filing (GSTR-1, GSTR-3B, Annual Return)
              </li>
              <li>
                Income Tax Return Filing for Individuals, Professionals & Businesses
              </li>
              <li>
                Private Limited Company Registration & LLP Incorporation
              </li>
              <li>
                ROC Annual Filing – AOC-4, MGT-7 & Compliance Management
              </li>
              <li>
                MSME Registration & Startup Advisory
              </li>
              <li>
                Tax Planning & Regulatory Consultation
              </li>
            </ul>

            <p>
              Our solutions are designed to ensure complete compliance while
              helping businesses optimize tax liabilities legally and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gradient-to-b from-[#002b45] to-[#002b45] text-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Businesses Trust Taxvio
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Experienced Professionals",
                desc: "Qualified experts with deep understanding of GST, Income Tax and corporate compliance laws.",
              },
              {
                title: "Transparent Pricing",
                desc: "Clear cost structure with no hidden charges or last-minute surprises.",
              },
              {
                title: "Timely Compliance",
                desc: "Strict deadline management to avoid penalties and notices.",
              },
              {
                title: "Client-Centric Approach",
                desc: "Personalized advisory tailored to each business and industry.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 bg-[#00416a] hover:bg-[#003354] transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY FOCUS */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center space-y-6">
        <h2 className="text-3xl font-bold">
          Serving Startups, MSMEs & Enterprises Across India
        </h2>

        <p className="text-lg leading-relaxed max-w-4xl mx-auto">
          India’s business ecosystem is evolving rapidly. From early-stage
          startups to established enterprises, compliance plays a crucial role
          in sustainable growth. Taxvio supports entrepreneurs, traders,
          manufacturers, service providers, freelancers, and corporate
          organizations in maintaining regulatory discipline.
        </p>

        <p className="text-lg leading-relaxed max-w-4xl mx-auto">
          Whether you operate in metropolitan cities like Delhi, Mumbai,
          Bangalore and Hyderabad or expanding business hubs across India,
          Taxvio ensures professional, standardized service delivery.
        </p>
      </section>

      {/* MISSION */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="text-3xl font-bold">Our Mission & Vision</h2>

          <p className="text-lg leading-relaxed">
            Our mission is to deliver ethical, reliable, and high-quality tax
            and compliance solutions that empower businesses to grow with
            confidence. We aim to build long-term relationships based on trust,
            professionalism, and accountability.
          </p>

          <p className="text-lg leading-relaxed">
            We envision becoming a leading technology-driven compliance partner
            for businesses across India by combining expertise, automation,
            and client-focused advisory.
          </p>
        </div>
      </section>

      <Footar />
    </main>
  );
}
