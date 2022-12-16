import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';
import Footer from './Footer';
type Props = {
	children: React.ReactNode;
};

export default function Layout({ children }: Props) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />

				<meta
					name="description"
					content="Diseño y Desarrollo web para todas tus necesidades en línea."
				/>
				<meta
					name="keywords"
					content="desarrollo,diazpugh, diaz, pugh, web, diseño, ecommerce, comercio, blog, cms, marketing digital, branding, base de datos, dominio, react, nextjs"
				/>
				<meta name="og:title" content="diazpugh - Desarrollo Web" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Navbar />
			<main className="min-h-screen">{children}</main>
			<Footer />
		</>
	);
}
