const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('ecommerce_node', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

let ConnectDB = async () =>{
    try {
        await sequelize.authenticate();
        console.log("connect database success");
    } catch (error) {
        console.log("connect database error: "+error);
    }
}
module.exports= ConnectDB;