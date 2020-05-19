const express = require("express");
const path = require("path");
const fs = require("fs");
//library to handle http errors
const createError = require("http-errors");
const app = express();
//turning on url encoding and telling express to use JSON
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());

let index = require("./routes/index");
app.use("/",index);

//creating catch-all 404 errorby setting http status code to 404 and then using http-errors library4
app.use(function(req,res,next){
    res.status(404);
    res.json(createError(404))
})

app.listen(3000,() => {
    console.log(`API running on port 3000`)
})