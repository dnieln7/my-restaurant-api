'use strict';
module.exports = (sequelize, DataTypes) => {
    const seller = sequelize.define('seller', {
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        international: DataTypes.BOOLEAN
    }, {});
    seller.associate = function (models) {
        // associations can be defined here
    };
    return seller;
};
