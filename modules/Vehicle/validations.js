const Joi = require('joi');
module.exports={
    addVehicle:{
        body:Joi.object().required().keys({
            brand:Joi.string().required(),
            model:Joi.string().required(),
            color:Joi.string().required(),
            year:Joi.number().required(),
            image:Joi.array().required(),
            pricePerDay:Joi.number().required(),
            engineType:Joi.string().required(),
            Car_Seat:Joi.number().required(),
            companyID:Joi.string().required()
        })
    }
}