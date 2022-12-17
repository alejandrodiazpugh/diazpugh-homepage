import { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

sendgrid.setApiKey(SECRET_KEY as string);
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const body = req.body;
	try {
		if (!body.firstName || !body.lastName || !body.email || !body.message) {
			return res
				.status(400)
				.json({ data: 'Information missing in request' });
		}
		await sendgrid.send({
			to: 'alejandro@diazpugh.com',
			from: `contacto@diazpugh.com`,
			subject: `Nuevo Contacto desde diazpugh.com de ${body.firstName} ${body.lastName}`,
			html: `
				<ul>
					<li>De: ${body.firstName} ${body.lastName}</li>
					<li>Correo: ${body.email}</li>	
				</ul>
				<h2>Mensaje:</h2>
				<p>${body.message}</p>`,
		});
	} catch (error) {
			return res.status(500).json({ error: error });
		
		}
		return res.status(200).json({ body });
}
