import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';

type Props = {};

export default function precios({}: Props) {
	return (
		<Layout>
			<Head>
				<title>diazpugh - Precios</title>
			</Head>
			<div className="relative">
				<h2>Paquetes y precios</h2>
			</div>
		</Layout>
	);
}
