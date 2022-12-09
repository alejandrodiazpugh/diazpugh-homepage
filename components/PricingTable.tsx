import React from 'react';
import type { allPricingData } from '../pages/servicios';
import PricingColumn from './PricingColumn';

type Props = {
	tableContent: allPricingData[];
};

export default function PricingTable({ tableContent }: Props) {
	return (
		<section className='mx-auto max-w-2xl grid gap-5 grid-cols-1 lg:grid-cols-4'>
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
