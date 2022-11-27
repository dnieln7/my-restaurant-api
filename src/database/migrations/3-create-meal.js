'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('tb_meals', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            description: {
              type:Sequelize.TEXT,
              allowNull: false,
            },
            price: {
                type:Sequelize.DOUBLE,
                allowNull: false,
            },
            picture: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            type: {
                type: Sequelize.STRING(10),
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('tb_meals');
    }
};
