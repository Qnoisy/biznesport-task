import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import sequelize from './utils/database.js';

// Initialize environment variables
config();

const app = express();
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
	res.status(200).json({ message: 'Interview task' });
});

// Global Error Handling Middleware
app.use((error, req, res, next) => {
	const status = error.statusCode || 500;
	const message = error.message;
	const data = error.data;

	res.status(status).json({ success: false, message: message, data: data });
});

const PORT = process.env.PORT || 8080;
// DB Connection
(async () => {
	try {
		await sequelize.authenticate();
		console.log('DB connection established');
		app.listen(PORT, () => console.log(`Server on ${PORT}`));
	} catch (err) {
		console.error('DB connect error:', err);
		process.exit(1);
	}
})();
