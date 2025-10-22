import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
const { config } = dotenv;

config();

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		dialect: 'mysql',
		port: 3306,
		host: process.env.DB_HOST,
	}
);

export default sequelize;
