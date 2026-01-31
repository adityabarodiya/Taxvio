"use client";

import Head from "next/head";
import Link from "next/link";
import { Button } from "./Button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import bg from "../public/service/bg.png";
import bg1 from "../public/service/bg1.png";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/service";
import Faq from "./Faq";
import Footar from "./Footar";
import { motion } from "framer-motion";

export default function Landing() {
  const phoneNumber = "918937980366"

  const handleCall = () => {
    if (!phoneNumber) return;
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    if (!phoneNumber) return;
    const message = encodeURIComponent(
      "Hello, I want to enquire about GST, Income Tax and Company Registration services.",
    );
    const cleanNumber = phoneNumber.startsWith("+")
      ? phoneNumber
      : `${phoneNumber}`;
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, "_blank");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const stagger = {
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <>
      <Head>
        <title>
          Taxvio | GST, Income Tax & Company Registration Services in India
        </title>

        <meta
          name="description"
          content="Taxvio offers professional GST services, Income Tax filing, company registration and business compliance solutions across India."
        />

        <link rel="canonical" href="https://www.taxvio.in" />
      </Head>

      <main className="min-h-screen bg-white text-gray-800">
        {/* HERO */}
        <section className="relative bg-linear-to-b from-[#00416a] to-[#002b45] text-white">
          <div className="mx-auto max-w-6xl px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <span className="inline-block mb-4 rounded-full bg-white/10 px-4 py-1 text-sm">
                Trusted Online Tax & Compliance Consultancy
              </span>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                GST, Income Tax & Company Registration Services
                <span className="block text-[#9fd3ff]">
                  for Businesses Across India
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-white/80">
                Taxvio provides online GST registration, income tax filing,
                company registration and business compliance services for
                individuals, startups and businesses across India.
              </p>

              <div className="mt-10 flex gap-4">
                <Link
                  href="/contact"
                  className="rounded-xl bg-white px-6 py-3 text-[#00416a] font-semibold"
                >
                  Free Consultation
                </Link>

                <Link href="/serviceslist" className="rounded-xl border px-6 py-3">
                  View Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={bg1}
                alt="Online GST and income tax consultancy services in India"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <motion.section
          className="py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
            <Image
              src={bg}
              alt="About Taxvio online tax and legal consultancy"
              priority
            />

            <div>
              <h2 className="text-4xl font-bold text-[#00416a]">
                About Taxvio
              </h2>

              <p className="mt-6 text-gray-600">
                Taxvio is an online tax and legal consultancy providing GST
                services, Income Tax filing, company registration and business
                compliance solutions to clients all over India.
              </p>

              <p className="mt-4 text-gray-700">
                Our mission is to simplify taxation and compliance for startups,
                professionals and businesses through digital processes.
              </p>
            </div>
          </div>
        </motion.section>

        {/* WHY CHOOSE */}
        <motion.section
          className="bg-[#f2f7fb] py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-[#00416a]">
              Why Choose Taxvio?
            </h2>

            <ul className="mt-8 grid md:grid-cols-2 gap-6">
              {[
                "Expert GST and Income Tax Assistance",
                "Affordable & Transparent Pricing",
                "100% Online Process",
                "Trusted by Businesses Across India",
                "Dedicated Compliance Support",
                "Timely Filing & Deadline Tracking",
                "Confidential & Secure Data Handling",
                "Personalized Tax Saving Guidance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* SERVICES */}
        <section className="py-20 bg-gray-100">
          <motion.div
            className="mx-auto max-w-7xl px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              className="text-3xl font-bold text-center text-[#00416a]"
              variants={fadeUp}
            >
              Our Services
            </motion.h2>

            <motion.p
              className="text-center mt-3 text-gray-600"
              variants={fadeUp}
            >
              Complete GST, Income Tax & compliance services under one roof
            </motion.p>

            <motion.div
              className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={stagger}
            >
              {services.map((service) => (
                <motion.div key={service.title} variants={fadeUp}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    image={service.image}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <Faq />

        {/* CONTACT */}
        <motion.section
          className="py-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold">Talk to Our Tax Experts</h2>

          <p className="mt-3">
            Get professional GST registration, Income Tax filing and business
            compliance support anywhere in India.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button onClick={handleCall}>Call Now</Button>
            <Button variant="outline" onClick={handleWhatsApp}>
              WhatsApp Us
            </Button>
          </div>
        </motion.section>
      </main>
    </>
  );
}
