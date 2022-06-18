const Joi = require('joi');



module.exports={
    
    VehicleRate:{
        body:Joi.object().required().keys({
         
            
            
            VehicleRate:Joi.number().min(0).max(6),
            VehicleID:Joi.string()
          
            
        })
    }
   
}
