const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload')
import bodyParser from "body-parser";
import  sequelize  from "./config/connectDB";
import webRouter from "./routes/web.route"
require('dotenv').config();
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.text())
app.use(fileUpload({
    createParentPath: true,
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
sequelize.authen()
sequelize.CreateTable()
app.use('/images', express.static('./src/image/'));
webRouter(app)
let port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});