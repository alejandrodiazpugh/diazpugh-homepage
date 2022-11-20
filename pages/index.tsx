import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Button from '../components/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import worldImg from '../public/images/ADP-10.png';
import logo from '../public/images/ADP-04.png';
import * as copy from '../utils/copyText';
import CardContainer from '../components/CardContainer';
import ServicesContainer from '../components/ServicesContainer';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<article
				id="hero"
				className="relative z-50 grid h-screen w-screen snap-y snap-mandatory grid-cols-2 text-blue lg:flex-row"
			>
				<motion.div
					initial={{ x: '-100%' }}
					animate={{ x: 0 }}
					transition={{
						duration: 1,
						delay: 1,
					}}
					className="col-span-1 col-start-1 flex flex-col justify-center"
				>
					<h1 className="capitalized mx-auto max-w-md snap-y snap-mandatory pt-28 text-center font-poppins text-5xl font-[500] md:max-w-2xl md:text-7xl">
						{copy.title}
					</h1>
					<h2 className="mx-auto my-10 max-w-2xl text-center font-sourceCode text-lg font-semibold md:text-2xl">
						{copy.subtitle}
					</h2>
					<div className="mx-auto">
						<Button
							content={'comenzamos?'}
							colorClasses={
								'border-pink bg-pink text-white hover:border-pink hover:bg-pink hover:text-black'
							}
						/>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.2 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 1.5,
						delay: 1,
						type: 'spring',
					}}
					className="col-span-1 grid aspect-square w-[70%] place-self-center rounded-full border-[1px] border-orange bg-pink md:w-[50%]"
				>
					<Image src={logo} alt={'Logo de diazpugh'} />
				</motion.div>
			</article>
			<div>
				<h2 className="capitalized mx-auto max-w-md pt-28 text-center font-poppins text-4xl font-[500] md:max-w-2xl md:text-6xl">
					tu huella en la red
				</h2>
				<div className="my-10 mx-auto flex max-w-lg flex-col gap-5 text-center">
					<div className="flex flex-col gap-8 font-sourceCode text-xl text-black">
						<p>{copy.huellaFillerText1}</p>
						<p>{copy.huellaFillerText2}</p>
						<p>{copy.tagLine}</p>
					</div>
				</div>
			</div>

			<article className="w-screen lg:h-screen">
				<h2 className="capitalized mx-auto max-w-md pt-28 text-center font-poppins text-4xl font-[500] text-blue md:max-w-2xl md:text-6xl">
					mi enfoque
				</h2>
				<CardContainer />
			</article>
			<article>
				<h2 className="capitalized mx-auto max-w-md pt-28 text-center font-poppins text-4xl font-[500] text-blue md:max-w-2xl md:text-6xl">
					mis servicios
				</h2>
				<div className="h-20 w-screen"></div>
				<ServicesContainer />
			</article>
		</Layout>
	);
}
