const services = [
  {
    title: 'GST Registration',
    description: 'Fast GST registration support for businesses in Maharashtra.',
  },
  {
    title: 'Income Tax Filing',
    description: 'Simple and secure filing for individuals and businesses.',
  },
  {
    title: 'Business Compliance',
    description: 'Annual filings, return preparation, and statutory compliance help.',
  },
];

const highlights = [
  'Expert CA support',
  'Transparent pricing',
  'Fast turnaround',
  'Secure document handling',
];

export default function MaharashtraPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-500 p-8 text-white shadow-xl md:p-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-100">
            Maharashtra State Services
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Tax, Compliance, and Business Support
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-emerald-50">
            Helping individuals and businesses across Maharashtra with hassle-free tax
            filing, registration, and compliance solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-6 py-3 font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50">
              Get Started
            </button>
            <button className="rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Talk to Expert
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-lg text-emerald-700">
                ✓
              </div>
              <p className="text-base font-semibold text-slate-800">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Popular Services
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">For Maharashtra businesses and taxpayers</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-xl text-emerald-700">
                  •
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}
