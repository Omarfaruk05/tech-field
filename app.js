const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

//import Routes
const productRoute = require("./routes/product.route");




app.use(express.json());
app.use(cors());

//use Routes
app.use('/', productRoute);

app.get('/', (req, res)=> {
    res.send("Wellcome to tech-field server.")
});

module.exports = app;