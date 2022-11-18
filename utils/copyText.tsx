//Index

//Hero section
export const title = 'Construyamos tu próxima experiencia web';
export const subtitle = 'Diseño y Desarrollo para tus necesidades en linea';
//Huella section
export const huellaFillerText1 =
	'Necesitas un espacio virtual. Algo que sea tuyo. Un dominio para tu negocio, una tienda en linea, una invitación virtual para tu evento.';

export const huellaFillerText2 =
	'Tal vez ya tienes tu paleta de colores mapeada, o inspiración de qué quieres y necesitas hacer. Tal vez llevas meses con la idea inicial en tu cabeza, refinándola.';

export const tagLine = 'Ahí es donde entro yo';

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
	img: string;
}

export const servicesContent: services[] = [
	{
		title: 'Dominio y hosting para alta velocidad de carga',
		description: '',
		img: '',
	},
	{
		title: 'Optimización para motores de búsqueda',
		description: '',
		img: '',
	},
	{
		title: 'Conexión con sistemas de manejo de contenido',
		description: '',
		img: '',
	},
	{
		title: 'Procesamiento de pagos y manejo de tienda en linea',
		description: '',
		img: '',
	},
	{
		title: 'Formulario de correos y conexión a boletín',
		description: '',
		img: '',
	},
];
