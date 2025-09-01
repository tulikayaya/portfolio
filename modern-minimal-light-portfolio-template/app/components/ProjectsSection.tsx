'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'RAG Clinical Chatbot',
    description: 'End-to-end RAG chatbot for medical SOPs using OpenAI, LangChain & Pinecone',
    overviewLink: 'https://sites.psu.edu/truongtran/ai-chatbot/',
    githubLink: 'https://github.com/tulikayaya/rag-chatbot',
    isPublication: false,
    image: '/rag.jpg',
  },
  {
    id: 2,
    title: 'BrainAI',
    description: 'A GPT-4 powered medical assistant that automates 3D MRI segmentation by orchestrating FastSurfer via Docker, to extract and return 3D brain regions of interest, streamlining neuroimaging analysis for non-technical users.',
    overviewLink: 'https://github.com/tulikayaya/BrainAI',
    githubLink: 'https://github.com/tulikayaya/BrainAI',
    isPublication: false,
    image: '/brain.jpeg',
  },
  {
    id: 3,
    title: 'Region-Growing based Hough Transform for Localization of Carotid Artery',
    description: 'International Journal of Intelligent Systems and Applications in Engineering (IJISAE) · Mar 24, 2024',
    overviewLink: 'https://ijisae.org/index.php/IJISAE/article/view/5101',
    githubLink: 'https://ijisae.org/index.php/IJISAE/article/view/5101',
    isPublication: true,
    image: '/region-growing.jpg',
  },
  {
    id: 4,
    title: 'MTMLD-AWSR: A Novel Multi-Teacher Multi-Level Distillation Approach for Class Incremental Learning in Edge-Cloud Systems',
    description: 'Institute of Electrical and Electronics Engineers (IEEE) · Aug 13, 2025',
    overviewLink: 'https://ieeexplore.ieee.org/document/11108221',
    githubLink: 'https://ieeexplore.ieee.org/document/11108221',
    isPublication: true,
    image: '/kt.jpg',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 1.5, ease: 'easeOut' }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight"
      >
        What I&apos;ve Built
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
            className="group relative aspect-video bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 group-hover:to-black/95 transition-colors duration-300" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-200 mb-4 line-clamp-2">{project.description}</p>
              <div className="flex gap-4">
                {project.isPublication ? (
                  <Link
                    href={project.overviewLink}
                    className="text-sm px-4 py-2 bg-white hover:bg-gray-100 text-gray-900 rounded-full transition-all duration-300 backdrop-blur-sm"
                    target="_blank"
                  >
                    View Publication
                  </Link>
                ) : (
                  <>
                    <Link
                      href={project.overviewLink}
                      className="text-sm px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
                      target="_blank"
                    >
                      Project Overview
                    </Link>
                    <Link
                      href={project.githubLink}
                      className="text-sm px-4 py-2 bg-white hover:bg-gray-100 text-gray-900 rounded-full transition-all duration-300 backdrop-blur-sm"
                      target="_blank"
                    >
                      GitHub
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
