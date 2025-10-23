import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import sequelize from './utils/database.js';

import defineMessage from './models/message.js';
defineMessage(sequelize);

import messageRoutes from './routes/messages.js';

config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (_req, res) =>
	res.status(200).json({ message: 'Interview task' })
);

app.use('/api/messages', messageRoutes);

app.use((error, _req, res, _next) => {
	const status = error.statusCode || 500;
	res
		.status(status)
		.json({ success: false, message: error.message, data: error.data });
});

const PORT = process.env.PORT || 8080;
(async () => {
	try {
		await sequelize.authenticate();
		console.log('DB connection established');
		// при отсутствии миграций можно разово: await sequelize.sync();
		app.listen(PORT, () => console.log(`Server on ${PORT}`));
	} catch (err) {
		console.error('DB connect error:', err);
		process.exit(1);
	}
})();
