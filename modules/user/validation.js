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
        age:Joi.number().min(20).max(70).required(),
        role:Joi.string().required()

        })
    },
    singin:{
        body:Joi.object().required().keys({
        email:Joi.string().email().required(),
        password:Joi.string().required(),
        
        })
    }
}
lastName