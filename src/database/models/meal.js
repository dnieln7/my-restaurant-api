'use strict';

module.exports = (sequelize, DataTypes) => {
    const tb_meals = sequelize.define('tb_meals', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.DOUBLE,
        picture: DataTypes.TEXT,
        type: DataTypes.STRING
    }, {});
    tb_meals.associate = function (models) {

    };
    return tb_meals;
};
