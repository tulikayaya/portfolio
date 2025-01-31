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
	title: 'John Doe | Full Stack Developer',
	description:
		'Full Stack Developer specializing in React, Node.js, and modern web technologies. Building exceptional digital experiences with a focus on performance and accessibility.',
	keywords: ['Full Stack Developer', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Web Development'],
	authors: [{ name: 'John Doe' }],
	creator: 'John Doe',
	openGraph: {
		title: 'John Doe | Full Stack Developer',
		description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies.',
		url: 'https://johndoe.dev',
		siteName: 'John Doe Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'John Doe - Full Stack Developer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'John Doe | Full Stack Developer',
		description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies.',
		creator: '@johndoe',
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
