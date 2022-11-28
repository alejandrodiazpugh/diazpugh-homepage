import React, { SyntheticEvent, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

type Props = {
	title: string;
	content: string;
	buttonContent: string;
	buttonDescription?: string;
	buttonBullets?: string[];
};

export default function Card({
	title,
	content,
	buttonContent,
	buttonDescription,
	buttonBullets,
}: Props) {
	const [hover, setHover] = useState(false);
	const [expanded, setExpanded] = useState(false);

	const handleHover = (type: string) => {
		type === 'enter' ? setHover(true) : setHover(false);
	};

	const expandedClassName = `relative shadow-md p-5 grid grid-cols-3 h-96 w-full h-full grid col-start-1 col-span-3 max-w-[90%] rounded-lg border-2 border-blue transition-all`;

	const handleClick = () => {
		setExpanded(!expanded);
	};

	return (
		<section
			className={
				expanded
					? expandedClassName
					: `relative flex h-96 w-72 flex-col content-between rounded-lg border-2 shadow-md transition-all ${
							hover ? 'border-blue' : 'border-cyan'
					  } pt-7`
			}
		>
			<h3
				className={`mx-7 font-poppins text-5xl transition-all ${
					hover ? 'text-blue' : 'text-cyan'
				}`}
			>
				{title}
			</h3>
			{expanded ? (
				<div className="text-md col-span-3 mx-7 basis-96 py-6 font-sourceCode text-blue">
					<p className="text-xl">{buttonDescription}</p>
					<ul>
						{buttonBullets?.map((bulletPoint: string) => (
							<li
								className="mx-10 list-disc py-2"
								key={bulletPoint.length}
							>
								{bulletPoint}
							</li>
						))}
					</ul>
				</div>
			) : (
				<p
					className={`mx-7 basis-96 py-6 font-sourceCode text-xl ${
						!hover ? 'text-gray-700' : 'text-blue'
					}`}
				>
					{content}
				</p>
			)}
			{expanded ? (
				<IoMdClose
					className="col-start-3 row-start-1 cursor-pointer justify-self-end fill-cyan transition-all hover:fill-blue"
					onClick={() => handleClick()}
				/>
			) : (
				<div
					onMouseEnter={() => handleHover('enter')}
					onMouseLeave={() => handleHover('leave')}
					onClick={() => handleClick()}
					className="boder-2 z-10 grid h-24 w-full cursor-pointer place-content-center rounded-b-sm border-t-2 border-cyan bg-white text-blue transition-all hover:border-blue hover:bg-blue hover:text-white"
				>
					<p className="font-sourceCode">{buttonContent}</p>
				</div>
			)}
		</section>
	);
}
