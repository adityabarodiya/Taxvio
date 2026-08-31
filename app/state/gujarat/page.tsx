// app/state/gujrat/page.tsx

export default function GujaratPage() {
	return (
		<main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-900">
			<div className="mx-auto max-w-5xl">
				<section className="rounded-2xl bg-white p-8 shadow-sm">
					<p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
						Taxvio · State guide
					</p>
					<h1 className="text-4xl font-bold tracking-tight">Tax information for Gujarat</h1>
					<p className="mt-4 max-w-2xl text-lg text-gray-600">
						Find useful tax resources, filing guidance, and updates for individuals and
						businesses in Gujarat.
					</p>
					<div className="mt-8 flex flex-wrap gap-3">
						<a
							href="#resources"
							className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
						>
							Explore resources
						</a>
						<a
							href="#contact"
							className="rounded-lg border border-gray-300 px-5 py-3 font-medium transition hover:bg-gray-50"
						>
							Get assistance
						</a>
					</div>
				</section>

				<section id="resources" className="mt-8 grid gap-5 md:grid-cols-3">
					{[
						{
							title: 'Income tax',
							description: 'Understand returns, deductions, and important due dates.',
							href: '/income-tax-services',
						},
						{
							title: 'GST in Gujarat',
							description: 'Access registration, compliance, and filing information.',
							href: '/gst-services',
						},
						{
							title: 'Business support',
							description: 'Explore practical guidance for starting and running a business.',
							href: '/roc',
						},
					].map((resource) => (
						<article key={resource.title} className="rounded-xl bg-white p-6 shadow-sm">
							<h2 className="text-xl font-semibold">{resource.title}</h2>
							<p className="mt-2 text-gray-600">{resource.description}</p>
							<a href={resource.href} className="mt-5 inline-block font-medium text-blue-600 hover:underline">
								Learn more →
							</a>
						</article>
					))}
				</section>

				<section id="contact" className="mt-8 rounded-xl bg-blue-50 p-6">
					<h2 className="text-2xl font-semibold">Need help with your taxes?</h2>
					<p className="mt-2 text-gray-700">
						Connect with a tax professional for guidance tailored to your situation.
					</p>
				</section>
			</div>
		</main>
	)
}
