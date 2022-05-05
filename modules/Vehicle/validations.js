const Joi = require('joi');
module.exports={
    addVehicle:{
        body:Joi.object().required().keys({
            brand:Joi.string().required(),
            model:Joi.string().required(),
            color:Joi.string().required(),
            year:Joi.number().required(),
            image:Joi.array().required(),
            pricePerDay:Joi.number(),
            doorsNumber:Joi.number(),
            chairsNumber:Joi.number(),
            Vehicletype:Joi.string()
            
            
        })
    }
}

