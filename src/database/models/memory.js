'use strict';

module.exports = (sequelize, DataTypes) => {
    const tb_memories = sequelize.define('tb_memories', {
        title: DataTypes.STRING,
        picture: DataTypes.TEXT,
        date: DataTypes.DATE
    }, {});
    tb_memories.associate = function (models) {

    };
    return tb_memories;
};
