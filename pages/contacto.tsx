import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

type Props = {};

export default function Contacto({}: Props) {
	return (
		<Layout>
			<Head>
				<title>Contacto - diazpugh</title>
			</Head>
			<main className="relative top-24 w-screen">
				<div className="h-10"></div>
				<h2 className="capitalized mx-auto max-w-md pt-28 text-center font-poppins text-4xl font-[500] text-gray-700 underline decoration-red md:max-w-2xl md:text-6xl">
					Contacto
				</h2>
				<div className="w-10 py-5"></div>
				<section>
					<p className="m-auto max-w-2xl text-center font-sourceCode">
						Si tienes dudas de mis servicios, o te interesaría
						reunirnos para hacer una cotización, puedes escribirme a{' '}
						<p className="py-2">contacto@diazpugh.com</p>O puedes
						llenar el siguiente formulario, y me aseguraré de
						responderte lo antes posible.
					</p>
				</section>
				<div className="h-10"></div>
				<section className="flex h-full w-full items-center justify-center font-sourceCode">
					<ContactForm />
				</section>
			</main>
		</Layout>
	);
}
