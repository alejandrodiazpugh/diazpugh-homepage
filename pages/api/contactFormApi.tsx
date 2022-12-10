import { NextApiRequest, NextApiResponse } from 'next';
import React from 'react';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const body = req.body;

	if (!body.firstName || !body.lastName || !body.email || !body.message) {
		return res.status(400).json({ data: 'Information missing in request' });
	}
	console.log(body);
	res.status(200).json({ data: body });
}
