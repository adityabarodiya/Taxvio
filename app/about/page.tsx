import Image from "next/image";
import bg1 from "../../public/service/bg1.png"
import logo from "../../public/logo3.png"
export default function About() {
    return (
        <main className="bg-gray-200 text-white">

            {/* HERO SECTION */}
            <section className="relative bg-linear-to-b from-[#00416a] to-[#002b45] text-white py-32">
                <div className="mx-auto max-w-6xl px-6 flex flex-col-reverse md:flex-row items-center gap-12">

                    {/* LEFT: Text Content */}
                    <div className="md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Trusted Tax & Compliance <br /> Experts You Can Rely On
                        </h1>
                        <p className="text-gray-300 text-lg">
                            AB Tax Solution provides reliable, transparent, and end-to-end
                            taxation, compliance, and business registration services across India.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block rounded-xl bg-[#00416a] hover:bg-[#003354] transition px-8 py-3 text-white font-semibold shadow "
                        >
                            Get Consultation
                        </a>
                    </div>

                    {/* RIGHT: Image */}
                    <div className="relative ">
                        <div className="absolute -inset-8 rounded-full bg-white/10 blur-3xl" />
                        <Image
                            src={bg1}
                            alt="About AB Tax Solution"
                            className="w-full h-auto "
                            priority
                        />
                    </div>

                </div>
            </section>

            {/* WHO WE ARE */}
            <section className="mx-auto max-w-6xl  text-[#002b45] px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
                <div className="md:w-1/2 space-y-6">
                    <Image
                        src={logo}
                        alt="About AB Tax Solution"
                        className="w-full h-auto "
                        priority
                    />
                </div>
                <div className="relative">
                    <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
                    <p className="text-[#002b45] leading-relaxed max-w-3xl">
                        AB Tax Solution is a professional tax consultancy firm dedicated to
                        simplifying complex taxation and regulatory processes for individuals,
                        startups, and businesses. With deep expertise in Income Tax, GST,
                        ROC compliances, and statutory filings, we ensure accuracy,
                        compliance, and peace of mind for our clients.
                    </p>
                </div>

            </section>

            {/* WHY CHOOSE US */}
            <section className=" bg-linear-to-b from-[#002b45] to-[#002b45] text-white py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-semibold mb-12">Why Choose Us</h2>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                title: "Expert Guidance",
                                desc: "Experienced professionals handling every case with precision."
                            },
                            {
                                title: "Transparent Process",
                                desc: "Clear communication, honest pricing, no hidden charges."
                            },
                            {
                                title: "Timely Compliance",
                                desc: "We ensure deadlines are met without last-minute stress."
                            },
                            {
                                title: "Client-First Approach",
                                desc: "Personalized solutions tailored to your business needs."
                            }
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

            {/* MISSION */}
            <section className="mx-auto text-[#002b45] max-w-6xl px-6 py-20 text-center">
                <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
                <p className="mx-auto max-w-3xl text-[#002b45] text-lg">
                    To deliver accurate, reliable, and ethical tax & compliance solutions
                    while building long-term trust with our clients.
                </p>
            </section>

        </main>
    );
}
