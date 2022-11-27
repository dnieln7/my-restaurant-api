'use strict';

module.exports = (sequelize, DataTypes) => {
    const tb_orders = sequelize.define('tb_orders', {
        type: DataTypes.STRING,
        fulfilled: DataTypes.BOOLEAN,
        extras: DataTypes.STRING,
        comments: DataTypes.STRING,
        client_name: DataTypes.STRING,
        client_phone: DataTypes.STRING,
        client_address_street: DataTypes.STRING,
        client_address_city: DataTypes.STRING,
        client_address_pc: DataTypes.STRING,
        client_address_references: DataTypes.STRING,
        entrance: DataTypes.JSON,
        middle: DataTypes.JSON,
        stew: DataTypes.JSON,
        dessert: DataTypes.JSON,
        drink: DataTypes.JSON,
        date: DataTypes.DATE,
        total: DataTypes.DOUBLE,
    }, {});
    tb_orders.associate = function (models) {

    };
    return tb_orders;
};
