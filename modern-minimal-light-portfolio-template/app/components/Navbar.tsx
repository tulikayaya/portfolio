'use client';

import { Link } from 'react-scroll';

export default function Navbar() {
	return (
		<nav className="fixed top-0 w-full z-50 h-20 flex items-center justify-between px-8 md:px-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
			<div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center w-full">
				<div className="text-lg font-semibold text-white"></div> 
				<div className="space-x-6 text-lg font-medium">
					<Link to="about" containerId="pageScroll" smooth={true} duration={100} offset={-80} className="cursor-pointer hover:text-pink-300">
						About Me
					</Link>
					<Link to="projects" containerId="pageScroll" smooth={true} duration={100} offset={-80} className="cursor-pointer hover:text-pink-300">
						Projects
					</Link>
					<Link to="work" containerId="pageScroll" smooth={true} duration={100} offset={-80} className="cursor-pointer hover:text-pink-300">
						Work Experience
					</Link>
					<Link to="skills" containerId="pageScroll" smooth={true} duration={100} offset={-80} className="cursor-pointer hover:text-pink-300">
						Skills
					</Link>
					<Link to="contact" containerId="pageScroll" smooth={true} duration={100} offset={-80} className="cursor-pointer hover:text-pink-300">
						Contact
					</Link>
				</div>
			</div>
	</nav>
	);
}
