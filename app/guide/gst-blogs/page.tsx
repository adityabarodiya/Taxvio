import Link from "next/link";

const posts = [
	{
		title: "GST registration: A simple step-by-step guide",
		excerpt:
			"Learn who needs GST registration, what documents are required, and how to complete the process online.",
		category: "GST basics",
		date: "June 12, 2024",
		readTime: "6 min read",
	},
	{
		title: "How to file your GST return without the confusion",
		excerpt:
			"Understand GSTR-1, GSTR-3B, important due dates, and common filing mistakes businesses should avoid.",
		category: "Returns",
		date: "June 05, 2024",
		readTime: "8 min read",
	},
	{
		title: "Input tax credit explained for small businesses",
		excerpt:
			"Discover how input tax credit works and how accurate invoices can help you claim the credit you are entitled to.",
		category: "Compliance",
		date: "May 28, 2024",
		readTime: "5 min read",
	},
	{
		title: "GST invoice essentials: What every invoice must include",
		excerpt:
			"A practical checklist for creating compliant GST invoices and keeping your business records audit-ready.",
		category: "Invoicing",
		date: "May 20, 2024",
		readTime: "4 min read",
	},
];

export default function GstBlogsPage() {
	return (
		<main className="min-h-screen bg-white text-slate-900">
			<section className="bg-slate-950 px-6 py-20 text-white">
				<div className="mx-auto max-w-6xl">
					<p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
						Taxvio guide
					</p>
					<h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
						GST made simple for growing businesses.
					</h1>
					<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
						Clear, practical guidance on GST registration, invoicing, returns,
						and compliance—so you can spend less time on paperwork.
					</p>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-6 py-16">
				<div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
					<div>
						<p className="text-sm font-semibold text-emerald-600">Latest articles</p>
						<h2 className="mt-2 text-3xl font-bold tracking-tight">GST insights and guides</h2>
					</div>
					<Link href="/" className="text-sm font-semibold text-emerald-700 hover:text-emerald-900">
						Explore Taxvio →
					</Link>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					{posts.map((post) => (
						<article
							key={post.title}
							className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
						>
							<span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
								{post.category}
							</span>
							<h3 className="mt-5 text-2xl font-bold leading-tight">{post.title}</h3>
							<p className="mt-4 leading-7 text-slate-600">{post.excerpt}</p>
							<div className="mt-6 flex gap-3 text-sm text-slate-500">
								<span>{post.date}</span>
								<span aria-hidden="true">·</span>
								<span>{post.readTime}</span>
							</div>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}
