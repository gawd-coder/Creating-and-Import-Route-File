const express = require("express");
//importing type validation library
const {check,validationResult} = require("express-validator/check");
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

//function to run if user sends a put request
router.put("/actions/fade",[check("level").isNumeric().isLength({min: 0, max: 100}),check("duration").isNumeric().isLength({min: 0})],(req,res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(422).json({errors: errors.array()});
  }
  res.join({"message":"success"})
})

module.exports = router;