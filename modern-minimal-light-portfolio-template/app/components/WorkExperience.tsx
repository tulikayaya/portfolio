// components/WorkExperience.tsx
'use client';

import { motion } from 'framer-motion';

export default function WorkExperience() {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className="min-h-screen py-24 px-6 max-w-7xl mx-auto bg-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight">
        Where I&apos;ve Been
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-lg leading-relaxed">
          <h3 className="text-2xl font-semibold text-purple-700 mb-1">Graduate Research Assistant</h3>
          <p className="text-gray-600 font-medium mb-3">Penn State University · Aug 2024 – Present</p>
          <ul className="text-gray-700 text-lg space-y-4 list-disc list-inside">
          <li>Developed end-to-end ML pipelines on large-scale 3D brain MRI data, integrating custom preprocessing and feature extraction with ensemble/boosting methods to drive high-accuracy neurological classification.</li>
          <li>Transformed raw brain MRI scans into region-wise volumetric features and applied SHAP analysis on ML models to identify biomarkers predictive of Parkinson&apos;s.</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-lg leading-relaxed">
          <h3 className="text-2xl font-semibold text-purple-700 mb-1">Clinical Research AI Intern</h3>
          <p className="text-gray-600 font-medium mb-3">Penn State Health · June 2025 – Sept 2025</p>
          <ul className="text-gray-700 text-lg space-y-4 list-disc list-inside">
          <li> Developed a Retrieval-Augmented Generation (RAG) application integrating LangChain, OpenAI embeddings, and Pinecone vector database, enabling domain-specific question answering across internal policy documents with semantic retrieval. </li>
          <li> Engineered a robust backend in FastAPI with custom document chunking, metadata handling, and retrieval filtering, achieving ~30% improvement in response relevance compared to naive keyword search. </li>
          <li> Built a responsive chat interface in Next.js, delivering a production-ready full-stack solution that supports multi-session interactions, context-aware responses, and seamless frontend–backend integration. </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-lg leading-relaxed">
          <h3 className="text-2xl font-semibold text-purple-700 mb-1">Software Engineer</h3>
          <p className="text-gray-600 font-medium mb-3">Persistent Systems · July 2022 – June 2024</p>
          <ul className="text-gray-700 text-lg space-y-4 list-disc list-inside">
          <li> Shortened release cycles using custom CI/CD pipelines with GitHub Actions to containerize and deploy microservices on AKS and reduced manual testing effort by 80% through integrated regression testing.</li>
          <li> Optimized Dockerfiles and fine-tuned pod resource allocations, cutting container image sizes by 30%, improving system scalability, and reducing application startup time from 5 min to 3.5 min.</li>
          <li>Designed and managed a security-focused CI/CD pipeline that generated native executables outside containers, eliminating direct codebase exposure and strengthening deployment security across all microservices. </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
