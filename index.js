const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const db=require("./connect.js");
const app = express();

//middlewareFunctions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routerApi = require('./controllers/index');
routerApi(app);


app.listen(3000) 
