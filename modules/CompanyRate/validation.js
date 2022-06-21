const Joi = require('joi');



module.exports={
    
    CompanyRate:{
        body:Joi.object().required().keys({
         
            
            
            companyRate:Joi.number().min(0).max(5).required(),
            CompanyID:Joi.string().required()
          
            
        })
    }
   
}
