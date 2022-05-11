const Joi = require('joi');
debugger
module.exports={
    
    addVehicle:{
        body:Joi.object().required().keys({
            brand:Joi.string().required(),
            model:Joi.string().required(),
            color:Joi.string().required(),
            year:Joi.number().required(),
            pricePerDay:Joi.number().required(),
            doorsNumber:Joi.number().required(),
            chairsNumber:Joi.number().required(),
            Vehicletype:Joi.string().required(),
            
            
            
        })
    }
}

