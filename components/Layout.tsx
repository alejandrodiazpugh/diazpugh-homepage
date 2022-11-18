import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';
import Footer from './Footer';
type Props = {
	children: React.ReactNode;
};
export const siteTitle = 'diazpugh: Desarrollo Web';

export default function Layout({ children }: Props) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />

				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Navbar />
			<div>{children}</div>
			<Footer />
		</>
	);
}
