import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

type Props = {
	title: string;
	description: string;
	img: StaticImageData;
	alt: string;
	color: string;
	id: number;
};

export default function Service({
	title,
	description,
	img,
	alt,
	color,
	id,
}: Props) {
	const isEven = (num: number) => {
		if (num % 2 !== 0) {
			return false;
		}
		return true;
	};
	return (
		<div className="grid max-w-6xl cursor-default grid-cols-3 place-items-center text-gray-700">
			<h3
				className={`col-span-3 row-auto text-center text-decoration-${color} font-poppins text-3xl underline`}
			>
				{title}
			</h3>
			<p
				className={`text-md px-10 text-center ${
					isEven(id) && 'col-start-2'
				} col-span-2 font-sourceCode`}
			>
				{description}
			</p>
			<Image
				width={300}
				height={300}
				src={img}
				alt={alt}
				className={`col-span-1 w-auto ${
					isEven(id) && 'col-start-1 row-start-2'
				}`}
			></Image>
		</div>
	);
}
