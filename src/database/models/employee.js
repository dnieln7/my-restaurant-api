'use strict';

module.exports = (sequelize, DataTypes) => {
    const tb_employees = sequelize.define('tb_employees', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING
    }, {});
    tb_employees.associate = function (models) {

    };
    return tb_employees;
};
