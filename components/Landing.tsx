"use client";

import { Button } from "./Button";
import { CheckCircle } from "lucide-react";
import logo3 from "../public/logo5.png"
import Image from "next/image";
import bg from "../public/service/bg.png"
import bg1 from "../public/service/bg1.png"
import ServiceCard from "./ServiceCard";
import { services } from "@/data/service";
export default function Landing() {
    const phoneNumber = process.env.NEXT_PUBLIC_MOBILE_NUMBER;
    const handleCall = () => {
        if (!phoneNumber) return;
        window.location.href = `tel:${phoneNumber}`;
    };
    const handleWhatsApp = () => {
        if (!phoneNumber) return;
        window.open(`https://wa.me/${phoneNumber}`, "_blank");
    };

    return (
        <main className="min-h-screen bg-white text-gray-800">
            {/* <main className="min-h-screen bg-[#f5f8fb] text-gray-800"> */}
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-[#00416a] to-[#002b45] text-white overflow-hidden">
                <div className="mx-auto max-w-6xl px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

                    {/* Text */}
                    <div>
                        <span className="inline-block mb-4 rounded-full bg-white/10 px-4 py-1 text-sm font-medium tracking-wide">
                            Trusted Tax & Legal Consultancy
                        </span>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Simplifying Tax & Legal Compliance
                            <span className="block text-[#9fd3ff]">for Individuals & Businesses</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-white/80 leading-relaxed">
                            AB Tax Solution helps individuals, startups, and businesses stay compliant
                            with Indian tax and corporate laws through accurate, confidential, and
                            timely services.
                        </p>

                        {/* CTA */}
                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="/contact"
                                className="rounded-xl bg-white px-6 py-3 text-[#00416a] font-semibold shadow-lg hover:shadow-xl transition"
                            >
                                Get Consultation
                            </a>

                            <a
                                href="/services"
                                className="rounded-xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition"
                            >
                                View Services
                            </a>
                        </div>
                    </div>

                    {/* Illustration */}
                    <div className="relative">
                        <div className="absolute -inset-8 rounded-full bg-white/10 blur-3xl" />
                        <Image
                            src={bg1}
                            alt="Tax and legal consultancy illustration"
                            className="relative w-full h-auto"
                            priority
                        />
                    </div>

                </div>
            </section>

            {/* About Section */}
            <section className="relative bg-gradient-to-b from-[#00416a]/50 to-white py-24">
                <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">


{/* Vector Illustration */}
                    <div className="relative">
                        {/* Soft decorative blob */}
                        <div className="absolute -inset-6 rounded-full bg-[#00416a]/5 blur-3xl" />

                        <Image
                            src={bg}
                            alt="About AB Tax Solution Illustration"
                            className="relative w-full h-auto"
                            priority
                        />
                    </div>
                    {/* Text */}
                    <div>
                        <span className="inline-block mb-3 text-sm font-semibold tracking-wide text-[#00416a]/80 uppercase">
                            About Us
                        </span>

                        <h2 className="text-4xl font-bold text-[#00416a] leading-tight">
                            About AB Tax Solution
                        </h2>

                        <p className="mt-6 text-gray-600 leading-relaxed">
                            AB Tax Solution is a Khatauli-based legal and taxation consultancy helping
                            individuals, startups, and businesses comply with Indian tax and corporate
                            laws with accuracy, confidentiality, and timely service.
                        </p>

                        {/* Service Area */}
                        <div className="mt-8 flex items-center gap-3">
                            <div className="h-10 w-1 rounded bg-[#00416a]" />
                            <div>
                                <h3 className="text-lg font-semibold text-[#00416a]">
                                    Service Area
                                </h3>
                                <p className="text-gray-700">
                                    Khatauli, Uttar Pradesh & nearby regions
                                </p>
                            </div>
                        </div>
                    </div>

                    

                </div>
            </section>


            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#00416a] to-[#002b45] text-white">
                <div className="mx-auto max-w-5xl px-6 py-14 lg:py-16">

                    {/* White Container */}
                    <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
                        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">

                            {/* LEFT: Logo */}
                            <div className="flex-shrink-0">
                                <Image
                                    src={logo3}
                                    alt="AB Tax Solution Logo"
                                    width={360}
                                    height={200}
                                    priority
                                    className="object-contain"
                                />
                            </div>

                            {/* RIGHT: Why Choose Us */}
                            <div className="flex-1">
                                <h3 className="text-4xl font-semibold text-[#00416a] mb-4">
                                    Why Choose Us?
                                </h3>
                                <ul className="space-y-3 ">
                                    {[
                                        "Expert Guidance",
                                        "Affordable & Transparent Pricing",
                                        "Quick Online Process",
                                        "Trusted by Local Businesses",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <CheckCircle className="text-green-500" size={22} />
                                            <span className="text-xl">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="my-6 h-px bg-gray-200" />

                        {/* Tagline + CTA */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-sm md:text-base text-gray-600 max-w-2xl text-center md:text-left">
                                Reliable GST, Income Tax & Company Registration Services in Khatauli, UP
                            </p>

                            <div className="flex gap-4">
                                <Button
                                    onClick={handleWhatsApp}
                                    className="bg-[#00416a] text-white hover:bg-[#003355]"
                                >
                                    WhatsApp Us
                                </Button>

                                <Button
                                    variant="outline"
                                    onClick={handleCall}
                                    className="border-[#00416a] text-[#00416a] hover:bg-[#00416a] hover:text-white"
                                >
                                    Call Now
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>



            {/* Services Section */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6">

                    <h2 className="text-3xl font-bold text-center text-[#00416a]">
                        Our Services
                    </h2>
                    <p className="text-center mt-3 text-gray-600">
                        Complete legal & taxation solutions under one roof
                    </p>

                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (

                            <ServiceCard
                                key={service.title}
                                title={service.title}
                                description={service.description}
                                image={service.image}
                            />
                        ))}
                    </div>
                </div>
            </section>

            


            {/* Contact Section */}
            <section className="bg-[#002b45] text-white py-20">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <h2 className="text-3xl font-bold">Get in Touch</h2>
                    <p className="mt-3 text-blue-100">
                        Need help with GST, Income Tax or Company Registration?
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-white text-[#002b45] hover:bg-blue-100">
                            Call: +91 {phoneNumber}
                        </Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002b45]
                        "onClick={handleWhatsApp}>
                            WhatsApp Us
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-gray-400 py-6 text-center">
                <p>© {new Date().getFullYear()} AB Tax Solution, Khatauli UP. All rights reserved.</p>
            </footer>
        </main>
    );
}
