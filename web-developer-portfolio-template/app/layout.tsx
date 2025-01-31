import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Web Developer Portfolio',
	description:
		'Professional portfolio showcasing web development expertise, featuring responsive designs, interactive user interfaces, and modern web applications. Built with Next.js, React, and cutting-edge frontend technologies.',
	keywords: [
		'Web Developer',
		'Frontend Developer',
		'React Developer',
		'Next.js',
		'JavaScript',
		'TypeScript',
		'HTML5',
		'CSS3',
		'Responsive Design',
		'UI/UX',
		'Web Accessibility',
		'Performance Optimization',
	],
	authors: [{ name: 'Your Name' }],
	creator: 'Your Name',
	openGraph: {
		title: 'Web Developer Portfolio',
		description: 'Professional portfolio showcasing modern web development expertise and responsive design solutions.',
		url: 'https://your-domain.com',
		siteName: 'Web Developer Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Web Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Web Developer Portfolio',
		description: 'Professional portfolio showcasing modern web development expertise and responsive design solutions.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
