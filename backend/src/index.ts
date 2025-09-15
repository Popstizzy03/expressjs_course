import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/products', (req: Request, res: Response) => {
	res.json([
		{ id: 1, name: 'T-Shirt', price: 25},
		{ id: 2, name: 'Jeans', price: 60},
		{ id: 3, name: 'Sneakers', price: 85},
	]);
});

app.listen(port, () => {
	console.log(`Backend Server listening at http://localhost:${port}`);
})