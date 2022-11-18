import React from 'react';
import Card from './Card';
import { cardContent } from '../utils/copyText';

interface Props {}

export default function CardContainer({}: Props) {
	return (
		<section className="my-10 mx-auto grid max-w-6xl grid-cols-1 place-items-center justify-center gap-5 lg:grid-cols-3">
			{cardContent.map((card) => (
				<Card
					key={card.title}
					title={card.title}
					content={card.content}
					buttonContent={card.buttonContent}
					buttonDescription={card.buttonDescription}
					buttonBullets={card.buttonBullets}
				/>
			))}
		</section>
	);
}
