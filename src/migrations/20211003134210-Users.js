'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('users', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false
			},
			activationCode: {
				type: Sequelize.STRING,
				allowNull: false
			},
			activated: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			}
		}, {
			timestamps: false
		});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.dropTable('users');
	}
}
;
