import React from 'react';
import type { allPricingData } from '../pages/servicios';
import PricingColumn from './PricingColumn';

type Props = {
	tableContent: allPricingData[];
};

export default function PricingTable({ tableContent }: Props) {
	return (
		<section className="mx-auto px-10 lg:px-0 grid max-w-3xl grid-cols-1 gap-16 lg:grid-cols-4">
			{tableContent.map((tier) => (
				<PricingColumn
					key={tier.id}
					header={tier.title}
					cells={tier.content}
					price={tier.pricePoint}
				/>
			))}
		</section>
	);
}
