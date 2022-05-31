const Joi = require('joi');


Joi.objectId = require('joi-objectid')(Joi)
module.exports={
    
    addcompanyRate:{
        body:Joi.object().required().keys({
         
            
            
            companyRate:Joi.number().min(1).max(5).required(),
            CompanyID:Joi.objectId().required()
          
            
        })
    }
   
}
