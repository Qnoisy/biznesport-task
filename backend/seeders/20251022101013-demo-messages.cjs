'use strict';

module.exports = {
	async up(queryInterface) {
		const now = new Date();
		await queryInterface.bulkInsert('Messages', [
			{ text: 'Hello world!', createdAt: now, updatedAt: now },
			{ text: 'Sequelize + Docker + MySQL', createdAt: now, updatedAt: now },
			{ text: 'RTK Query will read this', createdAt: now, updatedAt: now },
		]);
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete('Messages', null, {});
	},
};
