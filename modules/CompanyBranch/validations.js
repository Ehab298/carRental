const Joi = require('joi');
module.exports={
    addBrach:{
        body:Joi.object().required().keys({
            City:Joi.string().required(),
            Street:Joi.string().required(),
            BranchName:Joi.string().required(),
            BranchPhone:Joi.number().required(),
            CompanyID:Joi.string().required(),
        })
    },
  
}
