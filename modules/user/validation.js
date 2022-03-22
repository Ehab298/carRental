const Joi = require('joi');
module.exports={
    singup:{
        body:Joi.object().required().keys({
            firstName:Joi.string().required(),
            lastName:Joi.string().required(),
        email:Joi.string().email().required(),
        password:Joi.string().required(),
        cpassword:Joi.ref('password'), 
        phone:Joi.number().required(),
        

        })
    },
    singin:{
        body:Joi.object().required().keys({
        email:Joi.string().email().required(),
        password:Joi.string().required(),
        
        })
    }
}