const Joi = require('joi');


Joi.objectId = require('joi-objectid')(Joi)
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
            transmissionType:Joi.boolean(),
            Car_Seat:Joi.boolean(),
            airbag:Joi.boolean(),
            seatbelts:Joi.boolean(),
            ABS:Joi.boolean(),
            sunroof:Joi.boolean(),
            Parking_Sensors:Joi.boolean(),
            Radio:Joi.boolean(),
            Navigation_System:Joi.boolean(),
            Bluetooth:Joi.boolean(),
            Remote_Start:Joi.boolean(),
            AC:Joi.boolean(),
            Music_Player:Joi.boolean(),
            CC:Joi.boolean(),
            Automatic:Joi.boolean(),
            manual:Joi.boolean(),
            Extra_Tyre:Joi.boolean(),
            Charger:Joi.boolean(),
            Fire_Extinguisher:Joi.boolean(),
            First_Aid_Kit:Joi.boolean(),
            Smoking_Preferences:Joi.boolean(),
            companyID:Joi.objectId().required()
          
            
            
            
          
            
        })
    },
    updateVehicle:{
        body:Joi.object().required().keys({
            brand:Joi.string(),
            model:Joi.string(),
            color:Joi.string(),
            year:Joi.number(),
            pricePerDay:Joi.number(),
            doorsNumber:Joi.number(),
            chairsNumber:Joi.number(),
            Vehicletype:Joi.string(),
            transmissionType:Joi.boolean(),
            Car_Seat:Joi.boolean(),
            airbag:Joi.boolean(),
            seatbelts:Joi.boolean(),
            ABS:Joi.boolean(),
            sunroof:Joi.boolean(),
            Parking_Sensors:Joi.boolean(),
            Radio:Joi.boolean(),
            Navigation_System:Joi.boolean(),
            Bluetooth:Joi.boolean(),
            Remote_Start:Joi.boolean(),
            AC:Joi.boolean(),
            Music_Player:Joi.boolean(),
            CC:Joi.boolean(),
            Automatic:Joi.boolean(),
            manual:Joi.boolean(),
            Extra_Tyre:Joi.boolean(),
            Charger:Joi.boolean(),
            Fire_Extinguisher:Joi.boolean(),
            First_Aid_Kit:Joi.boolean(),
            Smoking_Preferences:Joi.boolean(),
            companyID:Joi.objectId()
            
            
            
            
          
            
        })
    }
}

