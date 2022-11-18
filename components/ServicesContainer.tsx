import React from 'react';
import { servicesContent } from '../utils/copyText';
import Service from './Service';

type Props = {};

export default function ServicesTableContainer({}: Props) {
	return (
		<section className="grid place-content-center gap-10">
			{servicesContent?.map((service) => (
				<Service
					key={service.id}
					title={service.title}
					description={service.description}
					img={service.img}
					alt={service.alt}
					color={service.color}
					id={service.id}
				/>
			))}
		</section>
	);
}
