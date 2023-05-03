const express = require('express');
const morgan = require('morgan');
import bodyParser from "body-parser";
import  sequelize  from "./config/connectDB";
import webRouter from "./routes/web.route"
require('dotenv').config();
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.text())
sequelize.authen()
sequelize.CreateTable()

webRouter(app)
let port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});