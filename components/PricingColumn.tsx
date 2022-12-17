import React from 'react';

type Props = {
	header: string;
	cells: string[];
	price: number;
};

export default function PricingColumn({ header, cells, price }: Props) {
	return (
		<div className=" flex flex-col items-center gap-5 px-10 md:px-0">
			<h3 className=" text-center text-lg lg:h-20">{header}</h3>
			<div className="h-0.5 w-full bg-yellow"></div>
			<div className="h-10"></div>
			<h4 className="h-5 text-sm">
				Desde ${price.toLocaleString('en-us')} MXN
			</h4>
			{cells.map((cell) => (
				<div
					className="font-mediumshadow-sm grid h-24 w-full cursor-pointer place-content-center rounded-md border-2 bg-white px-2 text-center font-sourceCode text-xs transition-all hover:bg-orange hover:text-white"
					key={cells.indexOf(cell)}
				>
					{cell}
				</div>
			))}
		</div>
	);
}
