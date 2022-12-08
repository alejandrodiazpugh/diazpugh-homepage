import React from 'react';
import type { allPricingData } from '../pages/servicios';
import PricingColumn from './PricingColumn';

type Props = {
	tableContent: allPricingData[];
};

export default function PricingTable({ tableContent }: Props) {
	console.log(tableContent);
	return (
		<section>
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
