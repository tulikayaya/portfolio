'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'E-Commerce Platform',
		description: 'A modern e-commerce platform built with Next.js and Stripe',
		image: '/code.jpg',
	},
	{
		id: 2,
		title: 'AI Chat Application',
		description: 'Real-time chat application powered by OpenAI',
		image: '/laptop.jpg',
	},
	{
		id: 3,
		title: 'Task Management',
		description: 'Collaborative task management tool with real-time updates',
		image: '/code.jpg',
	},
	{
		id: 4,
		title: 'Portfolio Generator',
		description: 'Dynamic portfolio generator for developers',
		image: '/laptop.jpg',
	},
];

export default function ModernMinimalPortfolio() {
	return (
		<div className="min-h-screen bg-black text-white">
			{/* Hero Section with Animated Text */}
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="h-screen flex items-center justify-center relative overflow-hidden"
			>
				<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
				</div>

				<div className="relative z-10 text-center">
					<motion.h1
						initial={{ y: 50 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
					>
						John Doe
					</motion.h1>
					<motion.p
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-lg md:text-xl text-gray-300 mb-8 px-4"
					>
						Full Stack Developer & UI/UX Enthusiast
					</motion.p>
				</div>

				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
				>
					<div className="animate-bounce">
						<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
						</svg>
					</div>
				</motion.div>
			</motion.section>

			{/* Projects Grid */}
			<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
				>
					Featured Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: project.id * 0.1 }}
							whileHover={{ scale: 1.02 }}
							className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
						>
							<Image src={project.image} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105" />
							<div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
							<div className="absolute inset-0 p-6 flex flex-col justify-end">
								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-gray-300 mb-4">{project.description}</p>
								<div className="flex gap-4">
									<Link href="#" className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
										View Project
									</Link>
									<Link href="#" className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
										GitHub
									</Link>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* Skills Section */}
			<section className="py-12 md:py-20 bg-gradient-to-b from-black to-purple-900/20">
				<div className="max-w-7xl mx-auto px-4">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
					>
						Skills & Technologies
					</motion.h2>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{['React', 'Next.js', 'TypeScript', 'Node.js', 'TailwindCSS', 'GraphQL', 'Python', 'AWS'].map((skill, index) => (
							<motion.div
								key={skill}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								whileHover={{ scale: 1.05 }}
								className="bg-white/5 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
							>
								<h3 className="text-lg font-semibold">{skill}</h3>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-12 md:py-20 px-4">
				<div className="max-w-3xl mx-auto text-center">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-3xl md:text-4xl font-bold mb-8"
					>
						Let&apos;s Connect
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-gray-300 mb-12"
					>
						Have a project in mind? Let&apos;s create something amazing together.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="flex flex-wrap justify-center gap-4 md:gap-6"
					>
						{['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((platform) => (
							<Link key={platform} href="#" className="px-4 md:px-6 py-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
								{platform}
							</Link>
						))}
					</motion.div>
				</div>
			</section>
		</div>
	);
}
