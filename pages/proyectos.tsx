import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

type Props = {};

export default function proyectos({}: Props) {
	return (
		<Layout>
			<Head>
				<title>Proyectos - diazpugh</title>
			</Head>
			<article>
				<h1>Proyectos</h1>
			</article>
		</Layout>
	);
}
