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
},{
    tableName: "cart",
    freezeTableName:true,
    createdAt: "createTimestamp",
    updatedAt: "updateTimestamp",
});
User.hasOne(Cart,{
    foreignKey: "userId",
    as: "users",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
    });
Cart.sync();
module.exports=  Cart