const Joi = require('joi');
module.exports={
    addBrach:{
        body:Joi.object().required().keys({
            DateFrom:Joi.string().required(),
            DateTo:Joi.string().required(),
            VehicleID:Joi.string().required(),
            Pick_upLocation:Joi.string().required(),
            return_Location:Joi.string().required()
         
            
    
        })
    },
  
}

// cpassword:Joi.ref('password'), 
