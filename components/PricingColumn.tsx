import React from 'react';

type Props = {
	header: string;
	cells: string[];
	price: number;
};

export default function PricingColumn({ header, cells, price }: Props) {
	return (
		<div>
			<h3>{header}</h3>
		</div>
	);
}
