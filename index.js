const ejs = require('ejs');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/user_management_system");

const express = require("express");
const app = express();

//for user routes 
const userRoute = require('./routes/userRoute');
app.use('/',userRoute);

app.listen(3000, function(){
    console.log("Running on http://localhost:3000/register");
});

//npm install 

