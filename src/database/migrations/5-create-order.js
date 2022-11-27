'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('tb_orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            type: {
                type: Sequelize.STRING(11),
                allowNull: false
            },
            fulfilled: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            extras: {
                type: Sequelize.STRING,
                allowNull: true
            },
            comments: {
                type: Sequelize.STRING,
                allowNull: true
            },
            client_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            client_phone: {
                type: Sequelize.STRING,
                allowNull: false
            },
            client_address_street: {
                type: Sequelize.STRING,
                allowNull: false
            },
            client_address_city: {
                type: Sequelize.STRING,
                allowNull: false
            },
            client_address_pc: {
                type: Sequelize.STRING,
                allowNull: false
            },
            client_address_references: {
                type: Sequelize.STRING,
                allowNull: true
            },
            entrance: {
                type: Sequelize.JSON,
                allowNull: false
            },
            middle: {
                type: Sequelize.JSON,
                allowNull: true
            },
            stew: {
                type: Sequelize.JSON,
                allowNull: false
            },
            dessert: {
                type: Sequelize.JSON,
                allowNull: true
            },
            drink: {
                type: Sequelize.JSON,
                allowNull: false
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            total: {
                type: Sequelize.DOUBLE,
                allowNull: false,
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
        return queryInterface.dropTable('tb_orders');
    }
};
