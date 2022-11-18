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
	const pillClasses = `absolute -z-40 h-48 w-96 rotate-45 rounded-full bg-${color}`;
	console.log(color);
	return (
		<div className="grid max-w-6xl grid-cols-3 place-items-center">
			<div className={pillClasses}></div>
			<h3 className="col-span-3 text-left font-poppins text-3xl">
				{title}
			</h3>
			<p
				className={`text-md ${
					isEven(id) && 'col-start-2'
				} col-span-2 font-sourceCode`}
			>
				{description}
			</p>
			<Image
				src={img}
				alt={alt}
				className={`col-span-1 w-96 ${isEven(id) && 'col-start-1'}`}
			></Image>
		</div>
	);
}
