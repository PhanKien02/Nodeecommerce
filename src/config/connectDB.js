const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce_node', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
module.exports= sequelize;