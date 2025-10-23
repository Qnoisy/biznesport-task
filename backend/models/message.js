import { DataTypes, Model } from 'sequelize';

export default sequelize => {
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
			tableName: 'Messages',
			timestamps: true,
		}
	);

	return Message;
};
