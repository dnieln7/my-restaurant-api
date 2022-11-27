'use strict';

module.exports = (sequelize, DataTypes) => {
    const tb_menus = sequelize.define('tb_menus', {
        entrances: DataTypes.ARRAY(DataTypes.JSON),
        middles: DataTypes.ARRAY(DataTypes.JSON),
        stews: DataTypes.ARRAY(DataTypes.JSON),
        desserts: DataTypes.ARRAY(DataTypes.JSON),
        drinks: DataTypes.ARRAY(DataTypes.JSON),
    }, {});
    tb_menus.associate = function (models) {

    };
    return tb_menus;
};
