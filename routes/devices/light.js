const express = require("express");
const router = express.Router();
//creating an http get function that returns an object called info with a single attribute of message
router.get("/",function(req,res,next){
    let info =    {
    "actions": {
      "fade": {
        "title": "Fade Light",
        "description": "Dim light brightness to a specified level",
        "input": {
          "type": "object",
          "properties": {
            "level": {
              "type": "integer",
              "minimum": 0,
              "maximum": 100
            },
            "duration": {
              "type": "integer",
              "minimum": 0,
              "unit": "milliseconds"
            }
          }
        },
        "links": [
          {
            "href": "/devices/light/actions/fade"
          }
        ]
      }
    }
  }
    res.json(info);
})

module.exports = router;