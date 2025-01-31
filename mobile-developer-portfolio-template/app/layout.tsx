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
	title: 'Mobile Developer Portfolio',
	description:
		'Professional portfolio showcasing mobile development expertise across iOS, Android, and cross-platform technologies. Featuring app development projects, native implementations, and mobile-first solutions.',
	keywords: [
		'Mobile Developer',
		'iOS Developer',
		'Android Developer',
		'React Native',
		'Flutter',
		'Mobile Apps',
		'Cross-Platform Development',
		'Native Development',
		'Mobile UI/UX',
		'App Store',
		'Play Store',
		'Mobile Architecture',
	],
	authors: [{ name: 'Your Name' }],
	creator: 'Your Name',
	openGraph: {
		title: 'Mobile Developer Portfolio',
		description: 'Professional portfolio showcasing comprehensive mobile development expertise across iOS, Android, and cross-platform solutions.',
		url: 'https://your-domain.com',
		siteName: 'Mobile Developer Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Mobile Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Mobile Developer Portfolio',
		description: 'Professional portfolio showcasing comprehensive mobile development expertise across iOS, Android, and cross-platform solutions.',
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
