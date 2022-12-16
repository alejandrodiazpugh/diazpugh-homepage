import React from 'react';
import Offering from './Offering';
import { StaticImageData } from 'next/image';
import type { Service as typeService } from '../pages/index';

type Props = {
	servicesData: typeService[];
};

export default function ServicesTableContainer({ servicesData }: Props) {
	return (
		<section className="mb-20 mx-5 grid place-content-center gap-10">
			{servicesData?.map((service: any) => (
				<Offering
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
