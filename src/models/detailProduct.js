const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connectDB");
const Product = require("./product");
const Cart = require("./cart")
const DetailProduct = sequelize.define("DetailProduct",{
    id:{
        type: DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
    },
    id_product:{
        type: DataTypes.BIGINT,
        allowNull:false,
        references:{
            model: Product,
            key : "id"
        }
    },
    amount:{
        type: DataTypes.INTEGER,
        validate:{
            min: 0
        }       
    },
    id_cart :{
        type: DataTypes.BIGINT,
        allowNull:false,
        references:{
            model: Cart,
            key : "id"
        }
    }
},{
    tableName: "detailProducts",
    freezeTableName:true,
    createdAt: "createTimestamp",
    updatedAt: "updateTimestamp"
})
DetailProduct.sync()
module.exports = DetailProduct