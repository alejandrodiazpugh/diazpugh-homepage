import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
	return (
		<Layout>
			<Head>
				<title>diazpugh - Desarrollo Web</title>
				<meta
					name="description"
					content="Descubre los paquetes que ofrezo para poder adaptarme a tus necesidades."
				/>
			</Head>
			<article
				id="hero"
				className="relative z-50 grid h-screen w-screen snap-y snap-mandatory grid-cols-2 flex-col-reverse text-blue"
			>
				<motion.div
					initial={{ x: '-100%' }}
					animate={{ x: 0 }}
					transition={{
						duration: 1,
						delay: 1,
					}}
					className="col-span-2 col-start-1 flex flex-col justify-center lg:col-span-1"
				>
					<h1 className="capitalized mx-auto max-w-md snap-y snap-mandatory pl-5 pt-28 text-center font-poppins text-5xl font-[500] md:max-w-2xl md:text-7xl">
						Construyamos tu próxima experiencia web
					</h1>
					<h2 className="mx-auto my-10 max-w-2xl text-center font-sourceCode text-lg font-semibold md:text-2xl">
						Diseño y Desarrollo para tus necesidades en línea
					</h2>
				</motion.div>
				{/*       */}
				<motion.div
					initial={{ opacity: 0, scale: 0.2 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 1.5,
						delay: 1,
						type: 'spring',
					}}
					className="-z-50 col-span-2 grid aspect-square w-[70%] cursor-pointer place-self-center rounded-full border-[1px] border-orange bg-pink opacity-25 shadow-md transition-all md:w-[50%] lg:col-span-1"
				>
					<Image src={logo} alt={'Logo de diazpugh'} priority />
				</motion.div>
			</article>
			<article className="relative m-auto max-w-2xl">
				<h2 className="capitalized mx-auto max-w-md pt-28 text-center font-poppins text-4xl font-[500] text-gray-700 md:max-w-2xl md:text-6xl">
					Tu huella en la red
				</h2>
				<div className="absolute top-56 -z-20 aspect-square w-32 rounded-full bg-orange opacity-80 lg:w-48"></div>
				<div className="my-10 mx-auto flex max-w-lg flex-col gap-5 text-center">
					<div className="flex flex-col gap-8 font-sourceCode text-xl text-gray-700">
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
					qué te ofrezco
				</h2>
				<div className="h-20 w-screen"></div>
				<OfferingContainer servicesData={servicesData} />
			</article>
		</Layout>
	);
}
