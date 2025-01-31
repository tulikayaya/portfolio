'use client';

import { motion } from 'framer-motion';

export default function BackendPortfolio() {
	return (
		<main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
			{/* Hero Section with Terminal-like Interface */}
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
				</div>

				<div className="relative z-10 max-w-4xl w-full mx-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
					>
						<div className="flex items-center gap-2 mb-4">
							<div className="w-3 h-3 rounded-full bg-red-500" />
							<div className="w-3 h-3 rounded-full bg-yellow-500" />
							<div className="w-3 h-3 rounded-full bg-green-500" />
						</div>
						<div className="font-mono">
							<p className="text-green-500">$ whoami</p>
							<h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Alex Chen</h1>
							<p className="text-gray-400 mb-2">Senior Backend Engineer</p>
							<p className="text-green-500">$ skills</p>
							<div className="flex flex-wrap gap-2 mt-2">
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Node.js</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Python</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Go</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">AWS</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Docker</span>
								<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Kubernetes</span>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* System Architecture Section */}
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
						System Architecture & Projects
					</motion.h2>

					<div className="grid grid-cols-1 gap-8">
						{[
							{
								title: 'Scalable Microservices Architecture',
								description: 'Designed and implemented a microservices architecture handling 1M+ daily requests with 99.99% uptime',
								details: [
									'Containerized microservices with Docker and Kubernetes',
									'Implemented service mesh with Istio',
									'Designed event-driven architecture using Apache Kafka',
									'Achieved 40% reduction in response times',
								],
								tech: ['Kubernetes', 'Docker', 'Istio', 'Kafka', 'MongoDB', 'Redis'],
							},
							{
								title: 'Real-time Data Processing Pipeline',
								description: 'Built a robust data processing pipeline handling 5TB+ daily data with sub-second latency',
								details: [
									'Implemented stream processing with Apache Flink',
									'Designed fault-tolerant architecture with automatic failover',
									'Optimized data throughput by 60%',
									'Implemented comprehensive monitoring with Prometheus & Grafana',
								],
								tech: ['Apache Flink', 'AWS Kinesis', 'Prometheus', 'Grafana', 'Python', 'PostgreSQL'],
							},
						].map((project, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
							>
								<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
								<p className="text-gray-400 mb-6">{project.description}</p>
								<div className="mb-6">
									<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
									<ul className="list-disc list-inside space-y-2 text-gray-300">
										{project.details.map((detail, i) => (
											<li key={i}>{detail}</li>
										))}
									</ul>
								</div>
								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech, i) => (
										<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
											{tech}
										</span>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Technical Metrics Section */}
			<section className="py-20 px-4 bg-gray-900/50">
				<div className="max-w-6xl mx-auto">
					<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
						Impact & Achievements
					</motion.h2>

					<div className="grid grid-cols-1 gap-12">
						{/* System Performance */}
						<div>
							<h3 className="text-xl font-semibold mb-6 text-green-400">System Performance</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<motion.div
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
								>
									<h4 className="text-lg font-semibold text-gray-300">API Gateway</h4>
									<ul className="mt-2 space-y-2 text-gray-400">
										<li>• P95 latency reduced from 250ms to 80ms</li>
										<li>• 99.99% availability achieved</li>
										<li>• Handles 2M requests/day</li>
									</ul>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
								>
									<h4 className="text-lg font-semibold text-gray-300">Database Optimization</h4>
									<ul className="mt-2 space-y-2 text-gray-400">
										<li>• Query response time improved by 70%</li>
										<li>• Implemented efficient indexing strategy</li>
										<li>• Reduced DB load by 45%</li>
									</ul>
								</motion.div>
							</div>
						</div>

						{/* Infrastructure & DevOps */}
						<div>
							<h3 className="text-xl font-semibold mb-6 text-green-400">Infrastructure & DevOps</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<motion.div
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
								>
									<h4 className="text-lg font-semibold text-gray-300">Cloud Infrastructure</h4>
									<ul className="mt-2 space-y-2 text-gray-400">
										<li>• Reduced AWS costs by 35%</li>
										<li>• Implemented auto-scaling for 20+ services</li>
										<li>• Zero-downtime deployments</li>
									</ul>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
								>
									<h4 className="text-lg font-semibold text-gray-300">CI/CD Pipeline</h4>
									<ul className="mt-2 space-y-2 text-gray-400">
										<li>• Reduced deployment time by 65%</li>
										<li>• Automated testing coverage at 90%</li>
										<li>• Integration tests success rate 99.5%</li>
									</ul>
								</motion.div>
							</div>
						</div>

						{/* Development & Leadership */}
						<div>
							<h3 className="text-xl font-semibold mb-6 text-green-400">Development & Leadership</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<motion.div
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
								>
									<h4 className="text-lg font-semibold text-gray-300">Code Quality</h4>
									<ul className="mt-2 space-y-2 text-gray-400">
										<li>• Led adoption of TypeScript across backend</li>
										<li>• Established coding standards</li>
										<li>• Reduced technical debt by 40%</li>
									</ul>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
								>
									<h4 className="text-lg font-semibold text-gray-300">Team Impact</h4>
									<ul className="mt-2 space-y-2 text-gray-400">
										<li>• Mentored 4 junior developers</li>
										<li>• Created 30+ technical documentation guides</li>
										<li>• Led 3 major system migrations</li>
									</ul>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20 px-4">
				<div className="max-w-4xl mx-auto">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-gray-800 bg-black/50"
					>
						<div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5" />
						<div className="relative z-10">
							<div className="flex items-center gap-2 mb-6">
								<div className="w-3 h-3 rounded-full bg-red-500" />
								<div className="w-3 h-3 rounded-full bg-yellow-500" />
								<div className="w-3 h-3 rounded-full bg-green-500" />
							</div>
							<div className="font-mono">
								<p className="text-green-500 mb-2">$ contact --info</p>
								<h2 className="text-3xl font-bold mb-8 text-gray-200">Let&apos;s Connect</h2>
								<p className="text-green-500 mb-4">$ ls ./social-links</p>
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
									<motion.a
										href="#"
										whileHover={{ scale: 1.05 }}
										className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
									>
										<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
											<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
												<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
											</svg>
										</div>
										<div>
											<p className="font-semibold text-gray-200">GitHub</p>
											<p className="text-sm text-gray-400">@alexchen</p>
										</div>
									</motion.a>
									<motion.a
										href="#"
										whileHover={{ scale: 1.05 }}
										className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
									>
										<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
											<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
												<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
											</svg>
										</div>
										<div>
											<p className="font-semibold text-gray-200">LinkedIn</p>
											<p className="text-sm text-gray-400">Alex Chen</p>
										</div>
									</motion.a>
									<motion.a
										href="#"
										whileHover={{ scale: 1.05 }}
										className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
									>
										<div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
											<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
												<path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" />
											</svg>
										</div>
										<div>
											<p className="font-semibold text-gray-200">YouTube</p>
											<p className="text-sm text-gray-400">Tech Insights</p>
										</div>
									</motion.a>
								</div>
								<p className="text-green-500 mt-8 mb-2">$ contact --email</p>
								<motion.a
									href="mailto:alex.chen@example.com"
									whileHover={{ scale: 1.02 }}
									className="inline-block px-6 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
								>
									alex.chen@example.com
								</motion.a>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</main>
	);
}
