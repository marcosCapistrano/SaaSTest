import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const server = express();

server.use(express.json());

server.get('*', (_, res) => {
	res.sendStatus(403);
});

server.listen(process.env.PORT_API, () => {
	console.log(`> Ready on ${process.env.URL_API}`);
});
