const { DataTypes } = require("sequelize");
const sequelize = require("../config/connectDB").sequelize;
const Category = require("./category");
const Color = require("./color");
const Product = sequelize.define(
    "Product",
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        NameProduct: DataTypes.STRING,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.INTEGER,
        discount: DataTypes.INTEGER,
        amount: DataTypes.INTEGER,
        colorId:{
            type: DataTypes.BIGINT,
            references:{
                model: Color,
                key: "id"
            }
        },
        categoryId: {
            type: DataTypes.BIGINT,
            references:{
                model: Category,
                key : "id"
            }
        },
        images: DataTypes.STRING,
    },
    {
        freezeTableName: true,
        tableName: "products",
        createdAt: "createTimestamp",
        updatedAt: "updateTimestamp",
    }
);

module.exports = Product;
