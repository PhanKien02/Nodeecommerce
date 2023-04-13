const express = require('express');
const morgan = require('morgan');
import  connectDatabase  from "./config/connectDB";
require('dotenv').config();
const app = express();

app.use(morgan('combined'));
app.use(express.urlencoded());
app.use(express.json());
connectDatabase()
let port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})