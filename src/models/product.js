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
        price:{
            type:DataTypes.INTEGER,
            validate:{
                min: 1
            }
        },
        discount: {
            type:DataTypes.INTEGER,
            validate:{
                min: 0,
                max:100
            }
        },
        amount:{
            type:DataTypes.INTEGER,
            validate:{
                min: 0
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
Product.belongsToMany(Color, {through: "colorProduct"});
Product.belongsTo(Category,{
    foreignKey: "categoryId",
    as: "Category",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
})
Product.sync()
module.exports = Product;

