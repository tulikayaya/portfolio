'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';
import WorkExperience from './components/WorkExperience';



export default function MinimalModernPortfolio() {
	return (
		<div id="pageScroll" className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<WorkExperience />
			<SkillsSection />
			<ContactSection />
		</div>
	);
}
