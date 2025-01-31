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
	title: 'Full-Stack Developer Portfolio',
	description:
		'Professional portfolio showcasing full-stack development expertise, from modern frontend interfaces to robust backend architectures. Built with cutting-edge technologies focusing on user experience and scalability.',
	keywords: [
		'Full-Stack Developer',
		'Software Engineer',
		'React',
		'Next.js',
		'Node.js',
		'TypeScript',
		'Frontend Development',
		'Backend Development',
		'API Design',
		'Database Architecture',
		'Cloud Solutions',
		'Portfolio',
	],
	authors: [{ name: 'Your Name' }],
	creator: 'Your Name',
	openGraph: {
		title: 'Full-Stack Developer Portfolio',
		description: 'Professional portfolio showcasing comprehensive full-stack development expertise and modern web solutions.',
		url: 'https://your-domain.com',
		siteName: 'Full-Stack Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Full-Stack Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Full-Stack Developer Portfolio',
		description: 'Professional portfolio showcasing comprehensive full-stack development expertise and modern web solutions.',
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
