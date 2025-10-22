'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = sequelize => {
	class Message extends Model {
		static associate(_models) {}
	}

	Message.init(
		{
			text: {
				type: DataTypes.STRING(500),
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'Message',
			tableName: 'Messages', // явное соответствие миграции
			timestamps: true, // есть createdAt/updatedAt
		}
	);

	return Message;
};
