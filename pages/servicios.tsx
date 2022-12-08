import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import PricingTable from '../components/PricingTable';
import { GetStaticProps } from 'next';
import { parseData } from '../utils/parseData';

export type allPricingData = {
	id: number;
	title: string;
	content: string[];
	pricePoint: number;
};

type Props = {
	allPricingData: allPricingData[];
};

export const getStaticProps: GetStaticProps = async () => {
	const allPricingData = await parseData('./data/pricing.json');

	return { props: { allPricingData } };
};

export default function precios({ allPricingData }: Props) {
	return (
		<Layout>
			<Head>
				<title>diazpugh - Servicios</title>
			</Head>
			<main className="relative w-screen">
				<h2 className="capitalized mx-auto max-w-md pt-28 text-center font-poppins text-4xl font-[500] text-gray-700 md:max-w-2xl md:text-6xl">
					Servicios
				</h2>
				<div className="w-10 py-5"></div>
				<section>
					<p className="m-auto max-w-2xl text-center font-sourceCode">
						Todos tenemos diferentes necesidades en cuanto a nuestra
						presencia en línea. No dudes en acercarte con tus
						necesidades específicas para poder construir juntos el
						mejor sitio posible.
					</p>
				</section>
				<PricingTable tableContent={allPricingData} />
			</main>
		</Layout>
	);
}
