import { StaticImageData } from 'next/image';
import domainImg from '../public/images/ADP-08.png';
import responsiveImg from '../public/images/ADP-09.png';
import globalImg from '../public/images/ADP-10.png';
import userImg from '../public/images/ADP-11.png';

//Index

//Hero section
export const title = 'Construyamos tu próxima experiencia web';
export const subtitle = 'Diseño y Desarrollo para tus necesidades en linea';
//Huella section
export const huellaFillerText1 =
	'Necesitas un espacio virtual. Algo que sea tuyo. Un dominio para tu negocio, una tienda en linea, una invitación virtual para tu evento.';

export const huellaFillerText2 =
	'Tal vez ya tienes tu paleta de colores mapeada, o inspiración de qué quieres y necesitas hacer. Tal vez llevas meses con la idea inicial en tu cabeza, refinándola.';

export const tagLine = 'Ahí es donde entro yo.';

// Mi Enfoque Section

export interface Card {
	title: string;
	content: string;
	buttonContent: string;
	buttonDescription: string;
	buttonBullets: string[];
}

const buttonContent = 'ver más';

export const cardContent: Card[] = [
	{
		title: '01',
		content: 'Creamos tu sistema de diseño en conjunto',
		buttonContent: buttonContent,
		buttonDescription:
			'Me aseguro de encontrar el estilo perfecto para que tu sitio sea justo lo que tienes en mente.',
		buttonBullets: [
			'¿Qué tono queremos tranmitir con la tipografía?',
			'¿Qué paleta de colores usaremos? ',
			'¿Cuál es el contenido más importante? ¿Cómo lo mostraremos?',
		],
	},
	{
		title: '02',
		content: 'Desarrollo el sitio basado en tus necesidades',
		buttonContent: buttonContent,
		buttonDescription:
			'Escalamos el código de tu sitio para que implementemos justo la funcionalidad que buscas.',
		buttonBullets: [
			'¿Buscas un e-commerce con procesamiento de pagos?',
			'¿Necesitas conectar un blog y boletín al sitio?',
			'¿Quieres recibir tu feed de videos directamente en la página de inicio?',
		],
	},
	{
		title: '03',
		content: 'Entrego el sitio listo para utilizarse, sin complicaciones',
		buttonContent: buttonContent,
		buttonDescription:
			'Ya sea que posees el dominio o necesitas levantar todo desde cero, no tienes que preocuparte por configurar nada.',
		buttonBullets: [
			'El sitio está optimizado para motores de búsqueda.',
			'El tiempo de carga está minimizado para el tamaño de la página.',
			'El contenido se apega a las guías de accesibilidad.',
		],
	},
];

interface services {
	title: string;
	description: string;
	img: StaticImageData;
	id: number;
	alt: string;
	color: 'yellow' | 'pink' | 'orange' | 'cyan';
}

export const servicesContent: services[] = [
	{
		id: 1,
		title: 'Dominio y hosting para alta velocidad de carga',
		description:
			'Tu sitio necesita ser sencillo de encontrar, y sin que te preocupes por servidores ni tipos de conexiones. Me encargo de conectar tu dominio al hosting adecuado, y darle a tu sitio la tarjeta de presentación que se merece',
		img: domainImg,
		alt: 'Ícono de sitio representando el servicio de dominio y hosting',
		color: 'yellow',
	},
	{
		id: 2,
		title: 'Optimización para motores de búsqueda y estilo responsivo para cualquier dispositivo',
		description:
			'La mayoría del tráfico de la red se da por medio de smartphones. La manera de destacar en los motores de búsqueda es con sitios responsivos, accesibles, y fáciles de usar',
		img: responsiveImg,
		alt: 'Ícono de sitio representando el servicio de SEO y responsividad',
		color: 'pink',
	},
	{
		id: 3,
		title: 'Conexión con sistemas de manejo de contenido',
		description:
			'Ya sea que buscas construir un blog, o conectar uno ya existente, me encargo de que tu experiencia sea lo más sencilla posible.',
		img: globalImg,
		alt: 'Ícono de sitio representando el servicio de CMS',
		color: 'cyan',
	},
	{
		id: 4,
		title: 'Formularios de comunicación con clientes listos para usarse',
		description:
			'Facilita la comunicación con tus clientes por medio de formularios de contacto, boletines con ofertas y promociones, o seguimiento de pedidos.',
		img: userImg,
		alt: 'Ícono de sitio representando el servicio de formularios para comunicación con clientes',
		color: 'orange',
	},
];
