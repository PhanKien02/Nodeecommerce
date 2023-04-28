const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce_node', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
const authen = async()=>{
    sequelize.authenticate().then(()=>{
        console.log("connect database success");
    }).catch((error)=>{
        console.log("connect database fail :"+error);
    })
}
const CreateTable = async () =>{
    await sequelize.sync({alter: true}).then(()=>{
        console.log("Create table success");
    })
}
module.exports= {
    sequelize,
    authen,CreateTable
};