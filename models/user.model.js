const { Sequelize, Model, DataTypes } = require('sequelize');

const {sequelize} = require('../database/connection');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
}, {
    tableName: 'users',
    timestamps: false
});

module.exports = User;