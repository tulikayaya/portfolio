import Image from 'next/image';

export default function SimplePortfolio() {
	return (
		<main className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<div className="text-center">
					<div className="mb-8">
						<Image src="/portrait.jpg" alt="Profile Picture" width={120} height={120} className="rounded-full mx-auto border-4 border-gray-50 shadow-lg" />
					</div>
					<h1 className="text-4xl font-bold text-gray-900 mb-4">John Doe</h1>
					<p className="text-xl text-gray-600 mb-8">Full Stack Developer</p>
					<p className="text-gray-600 max-w-2xl mx-auto">
						I build exceptional and accessible digital experiences for the web. Focused on creating elegant solutions to complex problems.
					</p>
				</div>
			</section>

			{/* Skills Section */}
			<section className="bg-gray-50 py-20">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Skills & Technologies</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{['JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js', 'TailwindCSS', 'PostgreSQL', 'GraphQL', 'Git'].map((skill) => (
							<div key={skill} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
								{skill}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section className="py-20">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{[1, 2, 3, 4].map((project) => (
							<div key={project} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
								<div className="aspect-video bg-gray-100 relative">
									<Image src={`/code.jpg`} alt={`Project ${project}`} fill className="object-cover" />
								</div>
								<div className="p-6">
									<h3 className="text-lg font-semibold text-gray-900 mb-2">Project Title {project}</h3>
									<p className="text-gray-600 mb-4">A brief description of the project and the technologies used in its development.</p>
									<div className="flex gap-2">
										<a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
											View Project →
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="bg-gray-50 py-20">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h2>
					<p className="text-gray-600 mb-8 max-w-2xl mx-auto">
						I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
					</p>
					<div className="flex justify-center gap-4">
						<a href="mailto:hello@example.com" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
							Say Hello
						</a>
						<a href="#" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium border border-gray-200 hover:border-gray-400 transition-colors">
							Download CV
						</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-gray-100 py-8">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
					<p className="text-gray-600">© 2024 John Doe. All rights reserved.</p>
					<div className="flex gap-6">
						<a href="#" className="text-gray-600 hover:text-gray-900">
							GitHub
						</a>
						<a href="#" className="text-gray-600 hover:text-gray-900">
							LinkedIn
						</a>
						<a href="#" className="text-gray-600 hover:text-gray-900">
							Twitter
						</a>
					</div>
				</div>
			</footer>
		</main>
	);
}
