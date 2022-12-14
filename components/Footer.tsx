import React from 'react';
import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';

type Props = {};

export default function Footer({}: Props) {
	return (
		<footer className="mt-auto w-screen bg-white py-8 font-sourceCode text-gray-700 shadow-top">
			<ul className="flex h-full items-start justify-around">
				<li className="flex flex-col gap-3">
					Mapa de Sitio
					<ul>
						<li>Inicio</li>
						<li>Servicios</li>
						<li>Contacto</li>
					</ul>
				</li>
				<li>Aviso de privacidad</li>
				<li>
					Mis Redes
					<ul
						className="flex
					justify-between "
					>
						<li>
							<BsTwitter />
						</li>
						<li>
							<BsFacebook />
						</li>
						<li>
							<BsInstagram />
						</li>
					</ul>
				</li>
			</ul>
		</footer>
	);
}
