const Joi = require('joi');
module.exports={
    company:{
        body:Joi.object().required().keys({
            CompanyName:Joi.string().required(),
            City:Joi.string().required(),
            Street:Joi.string().required(),
            companyRate:Joi.string().required(),
             Hotline:Joi.number().required(),
      

        })
    }
    }
