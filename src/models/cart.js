const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connectDB");
import User from "../models/User"
const Cart = sequelize.define("Cart",{
    id:{
        type: DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey: true,
        allowNull: false
    },
    userId:{
        type: DataTypes.BIGINT,
        allowNull:false,
        references:{
            model : User,
            key: "id"
        }
    }
},{
    tableName: "cart",
    freezeTableName:true,
    createdAt: "createTimestamp",
    updatedAt: "updateTimestamp",
})

module.exports=  Cart