import Image from 'next/image';

export default function WebDeveloperPortfolio() {
	return (
		<main className="min-h-screen bg-[#0D1117] text-white">
			{/* Dynamic 3D Grid Hero */}
			<div className="relative min-h-screen flex items-center justify-center overflow-hidden">
				{/* Animated Background Grid */}
				<div className="absolute inset-0 grid-background opacity-20">
					<div className="grid-overlay animate-pulse-slow"></div>
				</div>

				{/* Floating Tech Icons */}
				<div className="absolute inset-0 overflow-hidden">
					{[
						{ icon: '⚛️', delay: '0s', position: 'top-20 left-1/4' },
						{ icon: '🚀', delay: '2s', position: 'top-40 right-1/3' },
						{ icon: '💻', delay: '1s', position: 'bottom-32 left-1/3' },
						{ icon: '🔥', delay: '3s', position: 'bottom-20 right-1/4' },
					].map((item, index) => (
						<div key={index} className={`absolute ${item.position} animate-float opacity-50`} style={{ animationDelay: item.delay }}>
							<span className="text-4xl">{item.icon}</span>
						</div>
					))}
				</div>

				{/* Hero Content */}
				<div className="relative z-10 max-w-5xl mx-auto px-4">
					<div className="text-center space-y-6">
						{/* Name Section */}
						<div className="relative inline-block px-4 sm:px-0">
							<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75"></div>
							<h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 pb-2">
								John Doe
							</h1>
						</div>

						{/* Role & Description */}
						<div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
							<div className="flex flex-col items-center gap-4">
								<div className="flex items-center gap-3">
									<span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
									<h2 className="text-xl sm:text-2xl font-light tracking-wide text-blue-400">Web Developer</h2>
									<span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
								</div>
								<p className="text-base sm:text-lg text-gray-400 max-w-2xl px-4 sm:px-0">
									Crafting exceptional digital experiences with modern web technologies
								</p>
							</div>

							{/* Tech Stack Pills */}
							<div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4 sm:px-0">
								{['React', 'TypeScript', 'Node.js', 'Next.js', 'GraphQL'].map((tech) => (
									<span
										key={tech}
										className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#1A1F2B] rounded-full text-sm font-medium text-gray-300 border border-[#2D333B] hover:border-blue-500/50 transition-colors"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0">
							<a href="#work" className="group relative inline-flex items-center justify-center">
								<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
								<span className="relative px-6 sm:px-8 py-3 bg-[#161B22] rounded-full inline-flex items-center justify-center w-full sm:w-auto">
									View My Work
									<svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</span>
							</a>
							<a
								href="#contact"
								className="px-6 sm:px-8 py-3 bg-[#21262D] rounded-full hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600 text-center"
							>
								Get in Touch
							</a>
						</div>

						{/* Social Links */}
						<div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
							{[
								{ name: 'GitHub', icon: '🐙', href: '#' },
								{ name: 'LinkedIn', icon: '💼', href: '#' },
								{ name: 'Twitter', icon: '🐦', href: '#' },
								{ name: 'Blog', icon: '✍️', href: '#' },
							].map((social) => (
								<a key={social.name} href={social.href} className="group relative p-2 sm:p-3 hover:text-blue-400 transition-colors" aria-label={social.name}>
									<span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform inline-block">{social.icon}</span>
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div className="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce">
					<span className="text-gray-400 text-sm mb-2 text-center">Scroll to explore</span>
					<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</div>

			{/* Interactive Skills Showcase */}
			<section className="py-12 sm:py-20 px-4 bg-[#161B22]">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">Technical Expertise</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
						{[
							{
								category: 'Frontend Development',
								skills: [
									{ name: 'React & Next.js', level: 95 },
									{ name: 'TypeScript', level: 90 },
									{ name: 'Modern CSS', level: 95 },
									{ name: 'Web Animation', level: 85 },
								],
								icon: '🎨',
								color: 'from-blue-500 to-blue-700',
							},
							{
								category: 'Backend & APIs',
								skills: [
									{ name: 'Node.js', level: 90 },
									{ name: 'RESTful APIs', level: 95 },
									{ name: 'GraphQL', level: 85 },
									{ name: 'Database Design', level: 88 },
								],
								icon: '⚡',
								color: 'from-green-500 to-green-700',
							},
							{
								category: 'Performance & DevOps',
								skills: [
									{ name: 'Web Performance', level: 92 },
									{ name: 'CI/CD', level: 88 },
									{ name: 'Docker', level: 85 },
									{ name: 'AWS', level: 82 },
								],
								icon: '🚀',
								color: 'from-purple-500 to-purple-700',
							},
						].map((category) => (
							<div key={category.category} className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all">
								<div className="flex items-center gap-3 mb-6">
									<span className="text-3xl">{category.icon}</span>
									<h3 className="text-xl font-bold">{category.category}</h3>
								</div>
								<div className="space-y-4">
									{category.skills.map((skill) => (
										<div key={skill.name}>
											<div className="flex justify-between text-sm mb-1">
												<span>{skill.name}</span>
												<span className="text-gray-400">{skill.level}%</span>
											</div>
											<div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
												<div className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`} style={{ width: `${skill.level}%` }}></div>
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Project Showcase with Technical Details */}
			<section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Projects</h2>
					<div className="space-y-8 sm:space-y-12">
						{[
							{
								title: 'E-commerce PWA',
								description: 'High-performance Progressive Web App with offline capabilities',
								metrics: {
									performance: 98,
									accessibility: 100,
									seo: 100,
								},
								techDetails: ['Service Worker implementation', 'IndexedDB for offline data', 'Streaming SSR', 'Dynamic code splitting'],
								image: '/code.jpg',
							},
							{
								title: 'Real-time Collaboration Platform',
								description: 'WebSocket-based platform with conflict resolution',
								metrics: {
									performance: 95,
									accessibility: 98,
									seo: 100,
								},
								techDetails: ['WebSocket optimization', 'CRDT implementation', 'Custom state management', 'WebRTC integration'],
								image: '/code.jpg',
							},
						].map((project) => (
							<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
								<div className="grid grid-cols-1 lg:grid-cols-2">
									<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
										<h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
										<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

										{/* Performance Metrics */}
										<div className="space-y-3">
											<h4 className="text-base sm:text-lg font-semibold">Performance Metrics</h4>
											<div className="grid grid-cols-3 gap-2 sm:gap-4">
												{Object.entries(project.metrics).map(([key, value]) => (
													<div key={key} className="text-center">
														<div className="text-2xl font-bold text-blue-400">{value}</div>
														<div className="text-sm text-gray-400 capitalize">{key}</div>
													</div>
												))}
											</div>
										</div>

										{/* Technical Implementation */}
										<div>
											<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technical Implementation</h4>
											<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
												{project.techDetails.map((detail) => (
													<li key={detail} className="flex items-center gap-2">
														<span className="text-green-400">▹</span>
														<span className="text-gray-300">{detail}</span>
													</li>
												))}
											</ul>
										</div>
									</div>

									<div className="relative h-full min-h-[300px] lg:min-h-full">
										<Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
										<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Web APIs & Browser Features */}
			<section className="py-12 sm:py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Modern Web Capabilities</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
						{[
							{
								title: 'WebGL & 3D',
								icon: '🎮',
								features: ['Three.js', 'WebGL Shaders', 'Performance optimization'],
							},
							{
								title: 'Progressive Web Apps',
								icon: '📱',
								features: ['Offline support', 'Push notifications', 'App-like experience'],
							},
							{
								title: 'Real-time Features',
								icon: '⚡',
								features: ['WebSockets', 'WebRTC', 'Server-Sent Events'],
							},
							{
								title: 'Browser APIs',
								icon: '🔧',
								features: ['File System Access', 'Web Workers', 'Service Workers'],
							},
							{
								title: 'Performance',
								icon: '🚀',
								features: ['Code splitting', 'Tree shaking', 'Resource optimization'],
							},
							{
								title: 'Security',
								icon: '🔒',
								features: ['CSP', 'CORS configuration', 'Security headers'],
							},
						].map((category) => (
							<div key={category.title} className="group bg-[#161B22] p-6 rounded-lg hover:bg-[#21262D] transition-all">
								<div className="text-3xl mb-4">{category.icon}</div>
								<h3 className="text-xl font-bold mb-3">{category.title}</h3>
								<ul className="space-y-2">
									{category.features.map((feature) => (
										<li key={feature} className="text-gray-400 group-hover:text-gray-300 transition-colors">
											{feature}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
					<h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Let&apos;s Build Something Amazing</h2>
					<p className="text-sm sm:text-base text-gray-400 mb-6">Looking for a developer who can create high-performance, interactive web experiences?</p>

					{/* Location */}
					<div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<span>San Francisco, CA</span>
					</div>

					{/* Contact Buttons */}
					<div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
						<a
							href="mailto:contact@example.com"
							className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
							</svg>
							Get in Touch
						</a>
						<a
							href="/resume.pdf"
							target="_blank"
							className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#21262D] border border-gray-800 rounded-lg font-medium hover:bg-gray-900 transition-colors"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
									clipRule="evenodd"
								/>
								<path fillRule="evenodd" d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
							</svg>
							View Resume
						</a>
					</div>

					{/* Social Links */}
					<div className="flex justify-center gap-6">
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
							</svg>
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
							</svg>
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
