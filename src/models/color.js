const { DataTypes } = require("sequelize");

const  sequelize  = require("../config/connectDB").sequelize;

const Color = sequelize.define("Color",{
    id:{
        type:DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement: true,
        allowNull:false
    },
    color:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    tableName:"color",
    freezeTableName: true
})

module.exports = Color