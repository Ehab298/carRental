const Joi = require('joi');



module.exports={
    
    FavoriteList:{
        body:Joi.object().required().keys({
         
            
            
            like:Joi.boolean().required(),
            VehicleID:Joi.string().required()
          
            
        })
    }
   
}
