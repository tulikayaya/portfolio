'use client';


import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
	const [startTyping, setStartTyping] = useState(false);
	const [typedDone, setTypedDone] = useState(false);
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});

	if (inView && !startTyping) setStartTyping(true);

	const paragraph = `Hey there! I am Tulika—a software engineer at the intersection of intelligent systems, GenAI, and purposeful engineering. My work spans full-stack development, large language models, and production-grade ML pipelines, with a focus on building cloud-native, scalable solutions that matter. From deploying RAG-powered clinical assistants to engineering tools that transform unstructured data into actionable insights, I craft systems where performance meets precision. I don't just build software—I design cognitive interfaces that think, learn, and help humans make better decisions. Because in the end, real impact isn't just about automation—it's about augmentation.`;

	return (
		<section id="about" className="min-h-screen py-24 px-6 max-w-7xl mx-auto bg-white" ref={ref}>
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1.5, ease: 'easeOut' }}
				className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight">
				Who I Am
			</motion.h2>

			<div className="flex flex-col md:flex-row items-center gap-10">
                <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative w-full max-w-lg aspect-[3/2] overflow-hidden shadow-lg"
                >
                <Image
                    src="/tulika.jpeg"
                    alt="Tulika Mandal"
                    fill
                    className="object-cover"
                />
                </motion.div>

				<div className="text-center md:text-left text-gray-700 text-lg max-w-xl mt-4 md:mt-0">
					<p className="mb-4 font-medium leading-relaxed">
						{typedDone ? (
							paragraph
						) : startTyping ? (
							<Typewriter
								words={[paragraph]}
								typeSpeed={30}
								cursor
								cursorStyle="|"
								loop={1}
								onLoopDone={() => setTypedDone(true)}
							/>
						) : (
							''
						)}
					</p>
				</div>
			</div>
		</section>
	);
}
