const { DataTypes } = require("sequelize");
const Product = require("./product");
const sequelize = require("../config/connectDB").sequelize;

const Category = sequelize.define("Category", {
    id:{
        type: DataTypes.BIGINT,
        autoIncrement : true,
        primaryKey:true,
        allowNull: false
    },
    categoryName:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName: true,
    tableName : "categories",
})
Category.sync();
module.exports = Category