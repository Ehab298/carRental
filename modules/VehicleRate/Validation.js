const Joi = require('joi');



module.exports={
    
    VehicleRate:{
        body:Joi.object().required().keys({
         
            
            
            VehicleRate:Joi.number().min(1).max(5).required(),
            VehicleID:Joi.string().required()
          
            
        })
    }
   
}
