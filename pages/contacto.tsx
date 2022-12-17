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
			<main className="top-24 w-screen">
				<div className="h-10"></div>
				<h2 className="capitalized mx-auto max-w-md pt-28 text-center font-poppins text-4xl font-[500] text-gray-700 underline decoration-red md:max-w-2xl md:text-6xl">
					Contacto
				</h2>
				<div className="w-10 py-5"></div>
				<section className="m-auto mx-10 max-w-2xl text-center font-sourceCode md:mx-auto">
					<p className="">
						Si tienes dudas de mis servicios, o te interesaría
						reunirnos para hacer una cotización, puedes escribirme
						a:
					</p>

					<p className="bg-gray-100 py-2">
						<a href="mailto:contacto@diazpugh.com">
							contacto@diazpugh.com
						</a>
					</p>
					<p>
						O puedes llenar el siguiente formulario, y me aseguraré
						de responderte lo antes posible.
					</p>
				</section>
				<div className="h-10"></div>
				<section className=" mx-auto flex h-full w-full max-w-2xl items-center justify-center font-sourceCode">
					<ContactForm />
				</section>
				<div className="h-20"></div>
			</main>
		</Layout>
	);
}
