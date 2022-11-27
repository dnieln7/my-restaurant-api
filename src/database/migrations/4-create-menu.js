'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('tb_menus', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            entrances: {
                type: Sequelize.ARRAY(Sequelize.JSON),
                allowNull: false
            },
            middles: {
                type: Sequelize.ARRAY(Sequelize.JSON),
                allowNull: false
            },
            stews: {
                type: Sequelize.ARRAY(Sequelize.JSON),
                allowNull: false
            },
            desserts: {
                type: Sequelize.ARRAY(Sequelize.JSON),
                allowNull: false
            },
            drinks: {
                type: Sequelize.ARRAY(Sequelize.JSON),
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
        return queryInterface.dropTable('tb_menus');
    }
};
