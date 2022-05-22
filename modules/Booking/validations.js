const Joi = require('joi');
module.exports={
    addrent:{
        body:Joi.object().required().keys({
            DateFrom:Joi.data().required(),
            DateTo:Joi.date().required(),
            VehicleID:Joi.string().required(),
            Pick_upLocation:Joi.string().required(),
            return_Location:Joi.string().required(),
            message:Joi.string()
         
            
    
        })
    },
  
}

// cpassword:Joi.ref('password'), 
