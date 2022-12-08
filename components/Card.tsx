import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import CardExpanded from './CardExpanded';
import { AnimatePresence } from 'framer-motion';

type Props = {
	title: string;
	content: string;
	buttonContent: string;
	buttonDescription: string;
	buttonBullets: string[];
};

export default function Card({
	title,
	content,
	buttonContent,
	buttonDescription,
	buttonBullets,
}: Props) {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<section className="relative flex h-96 w-72 flex-col content-between rounded-lg border-2 pt-7 shadow-md transition-all">
				<h3
					className={`mx-7 font-poppins text-5xl text-blue transition-all`}
				>
					{title}
				</h3>
				<p className={`mx-7 basis-96 py-6 font-sourceCode text-xl`}>
					{content}
				</p>
				<div
					onClick={() => handleClick()}
					className="boder-2 z-10 grid h-24 w-full cursor-pointer place-content-center rounded-b-sm border-t-2 border-cyan bg-white text-blue transition-all hover:border-blue hover:bg-blue hover:text-white"
				>
					<p className="font-sourceCode">
						{!showModal ? buttonContent : 'ver menos'}
					</p>
				</div>
			</section>
			<AnimatePresence>
				{showModal && (
					<CardExpanded
						title={title}
						content={content}
						buttonDescription={buttonDescription}
						buttonBullets={buttonBullets}
						handleClick={handleClick}
					/>
				)}
			</AnimatePresence>
		</>
	);
}
