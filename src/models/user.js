const { DataTypes } = require("sequelize");
const sequelize = require("../config/connectDB").sequelize;
import Auth from "./auth";
const Users = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: { type: DataTypes.STRING },
        lastName: { type: DataTypes.STRING },
        email: { 
            type: DataTypes.STRING,
            validate:{
                isEmail: true
            } ,
            allowNull : false
        },
        phone: { type: DataTypes.STRING(10),
            validate:{
            len: 10,
            is: ["^[0-9]+$",'i'],
        } ,
    },
        userName: { type: DataTypes.STRING, allowNull: false},
        password: { type: DataTypes.STRING, allowNull: false },
        active: { type: DataTypes.BOOLEAN, allowNull: true },
        active_key: { type: DataTypes.STRING, allowNull: true },
        reset_key: { type: DataTypes.STRING, allowNull: true },
        auth_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: Auth,
                key: "id",
            },
        },
    },
    {
        freezeTableName: true,
        tableName: "users",
        createdAt: "createTimestamp",
        updatedAt: "updateTimestamp",
    }
);

module.exports = Users;
