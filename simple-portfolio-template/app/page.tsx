import Image from 'next/image';

export default function SimplePortfolio() {
	return (
		<main className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
				<div className="text-center">
					<div className="mb-6 sm:mb-8">
						<Image src="/portrait.jpg" alt="Profile Picture" width={120} height={120} className="rounded-full mx-auto border-4 border-gray-50 shadow-lg" />
					</div>
					<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">John Doe</h1>
					<p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">Full Stack Developer</p>
					<p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
						I build exceptional and accessible digital experiences for the web. Focused on creating elegant solutions to complex problems.
					</p>
				</div>
			</section>

			{/* Skills Section */}
			<section className="bg-gray-50 py-12 sm:py-20">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Skills & Technologies</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
						{['JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js', 'TailwindCSS', 'PostgreSQL', 'GraphQL', 'Git'].map((skill) => (
							<div key={skill} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow text-sm sm:text-base">
								{skill}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section className="py-12 sm:py-20">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Featured Projects</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
						{[1, 2, 3, 4].map((project) => (
							<div key={project} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
								<div className="aspect-video bg-gray-100 relative">
									<Image src={`/code.jpg`} alt={`Project ${project}`} fill className="object-cover" />
								</div>
								<div className="p-4 sm:p-6">
									<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Project Title {project}</h3>
									<p className="text-sm sm:text-base text-gray-600 mb-4">A brief description of the project and the technologies used in its development.</p>
									<div className="flex gap-2">
										<a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base">
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
			<section className="bg-gray-50 py-12 sm:py-20">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Get In Touch</h2>
					<p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
						I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
						<a
							href="mailto:hello@example.com"
							className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
						>
							Say Hello
						</a>
						<a
							href="#"
							className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium border border-gray-200 hover:border-gray-400 transition-colors text-sm sm:text-base"
						>
							Download CV
						</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-gray-100 py-8 sm:py-10">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
					<p className="text-gray-600 text-sm sm:text-base py-2">© 2025 John Doe. All rights reserved.</p>
					<div className="flex gap-8 py-2">
						<a href="#" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base px-2">
							GitHub
						</a>
						<a href="#" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base px-2">
							LinkedIn
						</a>
						<a href="#" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base px-2">
							Twitter
						</a>
					</div>
				</div>
			</footer>
		</main>
	);
}
