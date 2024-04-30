const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());


//database

mongoose.connect("mongodb+srv://tufasus83:PocoX3pro@cluster0.lbowbw5.mongodb.net/e-commerce");

// API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on Port"+port)
    }
    else
    {
        console.log("Error: "+error)
    }

})