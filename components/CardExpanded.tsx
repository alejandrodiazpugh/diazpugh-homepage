import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
	title: string;
	content: string;
	buttonDescription: string;
	buttonBullets: string[];
	handleClick: Function;
};

export default function CardExpanded({
	title,
	content,
	buttonDescription,
	buttonBullets,
	handleClick,
}: Props) {
	const clickModal = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation();
	};

	return (
		<AnimatePresence>
			<div
				onClick={() => handleClick()}
				className="fixed top-0 z-30 grid h-screen w-screen place-content-center bg-gray-300/75 duration-100"
			>
				<motion.article
					key={`${title}`}
					initial={{ opacity: 0, y: -300 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					exit={{ opacity: 0, y: -300 }}
					onClick={(e) => clickModal(e)}
					className="z-50 col-span-3 mx-7 basis-96 overflow-y-auto rounded-md border-2 bg-white px-16 py-6 font-sourceCode text-blue shadow-sm backdrop-blur-lg"
				>
					<IoMdClose
						className="absolute right-5 cursor-pointer justify-self-end fill-cyan transition-all hover:fill-blue"
						onClick={() => handleClick()}
					/>
					<h3
						className={`mx-7 font-poppins text-3xl text-blue transition-all md:text-5xl`}
					>
						{title}
					</h3>
					<p
						className={`mx-7 basis-96 py-6 font-sourceCode text-lg md:text-xl`}
					>
						{content}
					</p>
					<p className="text-md md:text-xl">{buttonDescription}</p>
					<ul className="text-sm md:text-lg">
						{buttonBullets?.map((bulletPoint: string) => (
							<li
								className="mx-5 list-disc py-2 md:mx-10"
								key={bulletPoint.length}
							>
								{bulletPoint}
							</li>
						))}
					</ul>
				</motion.article>
			</div>
		</AnimatePresence>
	);
}
