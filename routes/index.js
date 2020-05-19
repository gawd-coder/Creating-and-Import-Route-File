const express = require("express");
const router = express.Router();

//creating an http get function that returns an object called info with a single attribute of message
router.get("/",function(req,res,next){
    let info = {};
    info.message = "Welcome! Our first endpoint";
    res.json(info);
})

module.exports = router;