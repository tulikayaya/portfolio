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
	title: 'Backend Developer Portfolio',
	description:
		'Professional portfolio showcasing backend development expertise, server-side architecture, and API design. Built with modern technologies focusing on scalability and performance.',
	keywords: ['Backend Developer', 'Software Engineer', 'Node.js', 'Python', 'API Development', 'Database Design', 'Cloud Architecture', 'Portfolio'],
	authors: [{ name: 'Your Name' }],
	creator: 'Your Name',
	openGraph: {
		title: 'Backend Developer Portfolio',
		description: 'Professional portfolio showcasing backend development expertise and server-side solutions.',
		url: 'https://your-domain.com',
		siteName: 'Backend Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Backend Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Backend Developer Portfolio',
		description: 'Professional portfolio showcasing backend development expertise and server-side solutions.',
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
