import Head from 'next/head';
import { useState } from 'react';
import EmailDropContact from '../components/EmailDropContact';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/ADP-04.png';
import CardContainer from '../components/CardContainer';
import OfferingContainer from '../components/OfferingContainer';
import { parseData } from '../utils/parseData';
import { GetStaticProps } from 'next';
import { StaticImageData } from 'next/image';

export type Service = {
	title: string;
	description: string;
	img: StaticImageData;
	alt: string;
	color: string;
	id: number;
};

export type Card = {
	title: string;
	content: string;
	buttonContent: string;
	buttonDescription: string;
	buttonBullets: string[];
};

type Props = {
	servicesData: Service[];
	cardData: Card[];
};

export const getStaticProps: GetStaticProps = async () => {
	const servicesData = await parseData('./data/services.json');
	const cardData = await parseData('./data/cards.json');

	return { props: { servicesData, cardData } };
};

export default function Home({ servicesData, cardData }: Props) {
	const [isSubmitted, setIsSubmitted] = useState(false);
	return (
		<Layout>
			<Head>
				<title>diazpugh - Desarrollo Web</title>
			</Head>
			<article
				id="hero"
				className="relative z-50 grid min-h-screen w-screen snap-y snap-mandatory grid-cols-2"
			>
				<div className="col-span-2 col-start-1 mx-10 flex flex-col justify-center lg:col-span-1">
					<h1 className="capitalized mx-auto max-w-md snap-y snap-mandatory pt-28 text-center font-poppins text-4xl font-[500] text-gray-800 md:max-w-2xl md:text-7xl">
						Construyamos tu próxima{' '}
						<span className="underline decoration-blue">
							experiencia web
						</span>
					</h1>
					<h2 className="mx-auto my-10 max-w-2xl text-center font-sourceCode text-lg font-semibold text-gray-800 md:text-2xl">
						Diseño y Desarrollo para tus necesidades en línea
					</h2>
				</div>
				<div className="-z-50 col-span-2 grid aspect-square w-[70%] cursor-pointer place-self-center rounded-full border-[1px] border-orange bg-pink opacity-25 shadow-md transition-all md:w-[50%] lg:col-span-1">
					<Image src={logo} alt={'Logo de diazpugh'} priority />
				</div>
			</article>
			<div className="h-10 w-screen"></div>
			<article className="mx-auto flex h-56 w-screen items-center justify-center gap-10 bg-pink shadow-sm">
				<h3 className="ml-5 basis-96 text-center font-poppins font-semibold text-gray-700 md:text-2xl">
					Revisa los paquetes que te ofrezco, y empecemos a trabajar
					juntos.
				</h3>
				<div className="mr-5 flex basis-72 justify-center">
					<Link href={'/servicios'}>
						<button className="rounded-lg bg-white p-2 px-8 py-5 font-sourceCode text-xl text-gray-700 shadow-md transition-all hover:scale-105 hover:border-2 hover:border-orange hover:bg-orange hover:text-white active:scale-95">
							Servicios
						</button>
					</Link>
				</div>
			</article>
			<article className="max-w-2x relative m-auto">
				<h2 className="capitalized mx-auto max-w-md pt-28 text-center font-poppins text-4xl font-[500] text-gray-700 md:max-w-2xl md:text-6xl">
					Tu huella en la red
				</h2>
				<div className="absolute top-56 -z-20 aspect-square w-32 rounded-full bg-orange opacity-80 lg:w-48"></div>
				<div className="my-10 mx-auto flex max-w-lg flex-col gap-5 text-center">
					<div className="mx-10 flex flex-col gap-8 font-sourceCode text-xl text-gray-700 lg:mx-0">
						<p>
							Necesitas un espacio virtual. Algo que sea tuyo. Un
							dominio para tu negocio, una tienda en linea, una
							invitación virtual para tu evento.
						</p>
						<p>
							Tal vez ya tienes tu paleta de colores mapeada, o
							inspiración de qué quieres y necesitas hacer. Tal
							vez llevas meses con la idea inicial en tu cabeza,
							refinándola.
						</p>
						<p>Ahí es donde entro yo.</p>
					</div>
				</div>
			</article>

			<article className="w-screen lg:h-screen">
				<h2 className="mx-auto max-w-md pt-28 text-center font-poppins text-4xl font-[500] capitalize text-gray-700 md:max-w-2xl md:text-6xl">
					Mi enfoque.
				</h2>
				<CardContainer cardData={cardData} />
			</article>
			<article>
				<h2 className="mx-auto max-w-md pt-28 text-center font-poppins text-4xl font-[500] capitalize text-gray-700 md:max-w-2xl md:text-6xl">
					Lo que ofrezco
				</h2>
				<div className="h-20 w-screen"></div>
				<OfferingContainer servicesData={servicesData} />
			</article>
			<article className="mx-10 lg:mx-10">
				<h2 className="mx-auto max-w-md pb-5 pt-28 text-center font-poppins text-2xl font-[500] text-gray-700 md:max-w-2xl md:text-4xl">
					Si tienes alguna duda, déjame tus datos, y me pondré en
					contacto contigo.
				</h2>
				{!isSubmitted ? (
					<EmailDropContact setter={setIsSubmitted} />
				) : (
					<p className="bg-gray-100 p-5 text-center text-lg">
						Gracias por dejar tu correo, me pondré en contacto
						contigo lo antes posible.
					</p>
				)}
			</article>
			<div className="h-32"></div>
		</Layout>
	);
}
