const express = require('express');
const morgan = require('morgan');
import  sequelize  from "./config/connectDB";
import User from "./models/User";
require('dotenv').config();
import Category  from "./models/category";
import Product from "./models/product";
const app = express();
app.use(morgan('combined'));
app.use(express.urlencoded());
app.use(express.json());

sequelize.authen()
sequelize.CreateTable()

let port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});