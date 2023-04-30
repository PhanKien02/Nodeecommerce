const { DataTypes } = require("sequelize");
const sequelize = require("../config/connectDB").sequelize;
import Auth  from "../models/auth"
const User = sequelize.define(
    "User",
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName:{type: DataTypes.STRING, allowNull:false},
        lastName: {type: DataTypes.STRING, allowNull:false},
        email: {type: DataTypes.STRING, allowNull:false},
        phone: {type: DataTypes.STRING, allowNull:false},   
        userName: {type: DataTypes.STRING, allowNull:false},   
        password: {type: DataTypes.STRING, allowNull:false},   
        active: {type: DataTypes.BOOLEAN, allowNull:true},   
        active_key: {type: DataTypes.STRING(10), allowNull:true},   
        reset_key:{type: DataTypes.STRING(10), allowNull:true},   
        auth_id: {type:DataTypes.BIGINT, allowNull:false,
          references:{
            model : Auth,
            key: "id"
        }
      },   
    },
    {
        freezeTableName: true,
        tableName: "users",
        createdAt: "createTimestamp",
        updatedAt: "updateTimestamp",
    }
);

module.exports = User;
