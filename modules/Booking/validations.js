const Joi = require('joi');
module.exports={
    addBrach:{
        body:Joi.object().required().keys({
            DateFrom:Joi.string().required(),
            DateTo:Joi.string().required(),
            VehicleID:Joi.string().required(),
        })
    },
  
}

// cpassword:Joi.ref('password'), 
