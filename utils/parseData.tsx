import fs from 'fs';

export const parseData = async (path: string) => {
	const data = fs.promises.readFile(path, 'utf-8');
	return JSON.parse(await data);
};
