import React from 'react';
import Card from './Card';
import type { Card as CardType } from '../pages/index';

type Props = {
	cardData: CardType[];
};

export default function CardContainer({ cardData }: Props) {
	return (
		<section className="my-10 mx-auto grid max-w-6xl grid-cols-1 place-items-center justify-center gap-5 lg:grid-cols-3">
			{cardData.map((card) => (
				<Card
					key={card.title}
					title={card.title}
					content={card.content}
					buttonContent="ver más"
					buttonDescription={card.buttonDescription}
					buttonBullets={card.buttonBullets}
				/>
			))}
		</section>
	);
}
