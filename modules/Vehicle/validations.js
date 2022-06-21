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
            transmissionType:Joi.string(),
            Car_Seat:Joi.string(),
            airbag:Joi.string(),
            seatbelts:Joi.string(),
            ABS:Joi.string(),
            sunroof:Joi.string(),
            Parking_Sensors:Joi.string(),
            Radio:Joi.string(),
            Navigation_System:Joi.string(),
            Bluetooth:Joi.string(),
            Remote_Start:Joi.string(),
            AC:Joi.string(),
            Music_Player:Joi.string(),
            CC:Joi.string(),
            Automatic:Joi.string(),
            manual:Joi.string(),
            Extra_Tyre:Joi.string(),
            Charger:Joi.string(),
            Fire_Extinguisher:Joi.string(),
            First_Aid_Kit:Joi.string(),
            Smoking_Preferences:Joi.string(),
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
            transmissionType:Joi.string(),
            Car_Seat:Joi.string(),
            airbag:Joi.string(),
            seatbelts:Joi.string(),
            ABS:Joi.string(),
            sunroof:Joi.string(),
            Parking_Sensors:Joi.string(),
            Radio:Joi.string(),
            Navigation_System:Joi.string(),
            Bluetooth:Joi.string(),
            Remote_Start:Joi.string(),
            AC:Joi.string(),
            Music_Player:Joi.string(),
            CC:Joi.string(),
            Automatic:Joi.string(),
            manual:Joi.string(),
            Extra_Tyre:Joi.string(),
            Charger:Joi.string(),
            Fire_Extinguisher:Joi.string(),
            First_Aid_Kit:Joi.string(),
            Smoking_Preferences:Joi.string(),
            companyID:Joi.objectId()
            
            
            
            
          
            
        })
    }
}

