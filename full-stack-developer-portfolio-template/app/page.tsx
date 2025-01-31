'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FullStackPortfolio() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);

	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
			{/* Hero Section */}
			<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
				</div>

				<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
						<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
							<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
								David Miller
							</h1>
							<h2 className="text-2xl md:text-4xl font-bold text-white">Full Stack Developer</h2>
							<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
								I craft end-to-end solutions with 8+ years of experience building scalable applications and leading development teams.
							</p>
							<p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
								Previously Senior Full Stack Developer at <span className="text-blue-400">Stripe</span> and Tech Lead at{' '}
								<span className="text-purple-400">Vercel</span>
							</p>
						</div>
						<div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">TypeScript</span>
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">React & Next.js</span>
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">Node.js</span>
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">Python</span>
							<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">AWS</span>
						</div>
					</motion.div>

					{/* Interactive System Architecture */}
					<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3 }}
							className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
						>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
								{/* Frontend Layer */}
								<div
									className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
										selectedStack === 'frontend' ? 'bg-blue-500/20 border-blue-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
									onMouseEnter={() => setSelectedStack('frontend')}
									onMouseLeave={() => setSelectedStack(null)}
								>
									<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">Frontend Development</h3>
									<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
										<li className="flex items-center gap-2">
											<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
											Modern React Architectures
										</li>
										<li className="flex items-center gap-2">
											<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
											Performance Optimization
										</li>
										<li className="flex items-center gap-2">
											<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
											Responsive & Interactive UIs
										</li>
									</ul>
								</div>

								{/* Backend Layer */}
								<div
									className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
										selectedStack === 'backend' ? 'bg-purple-500/20 border-purple-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
									onMouseEnter={() => setSelectedStack('backend')}
									onMouseLeave={() => setSelectedStack(null)}
								>
									<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">Backend Development</h3>
									<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
										<li className="flex items-center gap-2">
											<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
											API Design & Development
										</li>
										<li className="flex items-center gap-2">
											<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
											Database Architecture
										</li>
										<li className="flex items-center gap-2">
											<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
											Real-time Systems
										</li>
									</ul>
								</div>

								{/* DevOps Layer */}
								<div
									className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
										selectedStack === 'devops' ? 'bg-teal-500/20 border-teal-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
									onMouseEnter={() => setSelectedStack('devops')}
									onMouseLeave={() => setSelectedStack(null)}
								>
									<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400">DevOps & Cloud</h3>
									<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
										<li className="flex items-center gap-2">
											<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
											AWS Infrastructure
										</li>
										<li className="flex items-center gap-2">
											<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
											CI/CD Pipelines
										</li>
										<li className="flex items-center gap-2">
											<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
											Scalable Architecture
										</li>
									</ul>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Featured Projects */}
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
						Full Stack Projects
					</motion.h2>

					<div className="space-y-16">
						{/* E-commerce Platform */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
						>
							<div className="p-8">
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
									<div className="space-y-6">
										<div>
											<h3 className="text-2xl font-bold mb-4">Enterprise E-commerce Platform</h3>
											<p className="text-gray-400">
												A high-performance e-commerce solution handling 100K+ daily transactions with real-time inventory and ML-powered recommendations.
											</p>
										</div>

										<div className="grid grid-cols-2 gap-6">
											<div>
												<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Architecture</h4>
												<ul className="space-y-2 text-sm text-gray-400">
													<li>• Next.js Server Components</li>
													<li>• Real-time Cart & Inventory</li>
													<li>• Stripe Payment Integration</li>
													<li>• PWA with Offline Support</li>
												</ul>
											</div>
											<div>
												<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Systems</h4>
												<ul className="space-y-2 text-sm text-gray-400">
													<li>• Node.js Microservices</li>
													<li>• Redis Caching Layer</li>
													<li>• Kafka Event Streaming</li>
													<li>• Elasticsearch Product Search</li>
												</ul>
											</div>
										</div>

										<div className="space-y-3">
											<h4 className="text-sm font-semibold text-teal-400">Key Achievements</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• 99.99% Uptime with Blue-Green Deployment</li>
												<li>• 300ms Average API Response Time</li>
												<li>• 45% Reduction in Infrastructure Costs</li>
											</ul>
										</div>
									</div>

									<div className="bg-black/30 rounded-xl p-6">
										<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
										<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
											{/* Add detailed system architecture diagram here */}
											<svg className="w-full h-full" viewBox="0 0 400 300">
												{/* Client Layer */}
												<g>
													<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
													<text x="200" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
														Next.js Frontend (SSR + Client Components)
													</text>
												</g>

												{/* API Layer */}
												<g>
													<rect x="20" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
													<rect x="210" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
													<text x="105" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
														Product Service
													</text>
													<text x="295" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
														Order Service
													</text>
												</g>

												{/* Cache Layer */}
												<g>
													<rect x="20" y="140" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
													<text x="200" y="160" textAnchor="middle" className="fill-gray-400 text-[12px]">
														Redis Cache Layer
													</text>
												</g>

												{/* Database Layer */}
												<g>
													<rect x="20" y="190" width="170" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
													<rect x="210" y="190" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
													<text x="105" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
														Product DB (PostgreSQL)
													</text>
													<text x="295" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
														Order DB (MongoDB)
													</text>
												</g>

												{/* Search Layer */}
												<g>
													<rect x="20" y="250" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
													<text x="200" y="270" textAnchor="middle" className="fill-gray-400 text-[12px]">
														Elasticsearch Product Search
													</text>
												</g>

												{/* Connection Lines */}
												<g className="stroke-gray-600" strokeWidth="1">
													<line x1="200" y1="60" x2="200" y2="80" />
													<line x1="105" y1="120" x2="105" y2="140" />
													<line x1="295" y1="120" x2="295" y2="140" />
													<line x1="105" y1="170" x2="105" y2="190" />
													<line x1="295" y1="170" x2="295" y2="190" />
													<line x1="200" y1="230" x2="200" y2="250" />
												</g>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Real-time Analytics Platform */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
						>
							<div className="p-8">
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
									<div className="space-y-6">
										<div>
											<h3 className="text-2xl font-bold mb-4">Real-time Analytics Platform</h3>
											<p className="text-gray-400">
												A scalable analytics platform processing 1M+ events per minute with real-time dashboards and ML-powered insights.
											</p>
										</div>

										<div className="grid grid-cols-2 gap-6">
											<div>
												<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Features</h4>
												<ul className="space-y-2 text-sm text-gray-400">
													<li>• Real-time Data Visualization</li>
													<li>• Interactive Dashboards</li>
													<li>• Custom Chart Components</li>
													<li>• Data Export Tools</li>
												</ul>
											</div>
											<div>
												<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Pipeline</h4>
												<ul className="space-y-2 text-sm text-gray-400">
													<li>• Apache Kafka Streams</li>
													<li>• ClickHouse Analytics DB</li>
													<li>• Python Data Processing</li>
													<li>• Redis Time Series</li>
												</ul>
											</div>
										</div>

										<div className="space-y-3">
											<h4 className="text-sm font-semibold text-teal-400">Performance Metrics</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• 1M+ Events/Minute Processing</li>
												<li>• Sub-second Query Response</li>
												<li>• 99.99% Data Accuracy</li>
											</ul>
										</div>
									</div>

									<div className="bg-black/30 rounded-xl p-6">
										<h4 className="text-sm font-semibold text-gray-400 mb-4">Data Flow Architecture</h4>
										<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
											<svg className="w-full h-full" viewBox="0 0 400 300">
												{/* Data Sources */}
												<g>
													<rect x="20" y="20" width="110" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
													<rect x="145" y="20" width="110" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
													<rect x="270" y="20" width="110" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
													<text x="75" y="40" textAnchor="middle" className="fill-gray-400 text-[12px]">
														Web Events
													</text>
													<text x="200" y="40" textAnchor="middle" className="fill-gray-400 text-[12px]">
														Mobile Events
													</text>
													<text x="325" y="40" textAnchor="middle" className="fill-gray-400 text-[12px]">
														API Events
													</text>
												</g>

												{/* Event Processing */}
												<g>
													<rect x="20" y="80" width="360" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
													<text x="200" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">
														Kafka Event Streaming
													</text>
												</g>

												{/* Processing Layer */}
												<g>
													<rect x="20" y="150" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
													<rect x="210" y="150" width="170" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
													<text x="105" y="175" textAnchor="middle" className="fill-gray-400 text-[12px]">
														Stream Processing
													</text>
													<text x="295" y="175" textAnchor="middle" className="fill-gray-400 text-[12px]">
														Batch Processing
													</text>
												</g>

												{/* Storage Layer */}
												<g>
													<rect x="20" y="220" width="170" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
													<rect x="210" y="220" width="170" height="30" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
													<text x="105" y="240" textAnchor="middle" className="fill-gray-400 text-[12px]">
														ClickHouse
													</text>
													<text x="295" y="240" textAnchor="middle" className="fill-gray-400 text-[12px]">
														Redis Time Series
													</text>
												</g>

												{/* API Layer */}
												<g>
													<rect x="20" y="270" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
													<text x="200" y="290" textAnchor="middle" className="fill-gray-400 text-[12px]">
														GraphQL API Layer
													</text>
												</g>

												{/* Connection Lines */}
												<g className="stroke-gray-600" strokeWidth="1">
													<line x1="75" y1="50" x2="75" y2="80" />
													<line x1="200" y1="50" x2="200" y2="80" />
													<line x1="325" y1="50" x2="325" y2="80" />
													<line x1="200" y1="120" x2="200" y2="150" />
													<line x1="105" y1="190" x2="105" y2="220" />
													<line x1="295" y1="190" x2="295" y2="220" />
													<line x1="200" y1="250" x2="200" y2="270" />
												</g>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
						<h2 className="text-3xl font-bold">Let&apos;s Build Something Amazing</h2>
						<p className="text-gray-400 max-w-2xl mx-auto">
							Looking for a full-stack developer who can architect and implement complete solutions? Let&apos;s discuss your project.
						</p>

						{/* Location */}
						<div className="flex items-center justify-center gap-2 text-gray-400">
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
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<a
								href="mailto:david@example.com"
								className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
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
								className="px-8 py-3 bg-black border border-gray-800 rounded-lg font-medium hover:bg-gray-900 transition-colors inline-flex items-center justify-center gap-2"
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
					</motion.div>
				</div>
			</section>
		</main>
	);
}
