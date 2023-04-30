const { DataTypes } = require("sequelize");
const sequelize = require("../config/connectDB").sequelize;

const Auth = sequelize.define("Auth",{
    id:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull:false,
        autoIncrement:true
    },
    role :{
        type : DataTypes.STRING,
        allowNull :false
    },
    description:{
        type: DataTypes.STRING
    }
},
    {
        tableName: "auth",
    }
)
module.exports = Auth