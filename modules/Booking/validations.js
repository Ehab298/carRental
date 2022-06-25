const Joi = require('joi');
module.exports={
    addrent:{
        body:Joi.object().required().keys({
            DateFrom:Joi.string().required(),
            DateTo:Joi.string().required(),
            VehicleID:Joi.string().required(),
            Pick_upLocation:Joi.string().required(),
            return_Location:Joi.string().required(),
            message:Joi.string()
         
            
    
        })
    },
    updaterent:{
        body:Joi.object().required().keys({
            DateFrom:Joi.string(),
            DateTo:Joi.string(),
            VehicleID:Joi.string(),
            Pick_upLocation:Joi.string(),
            return_Location:Joi.string(),
            message:Joi.string(),
            status:Joi.string()
    
        })
    }
  
}

// cpassword:Joi.ref('password'), 
