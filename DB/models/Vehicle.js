
const mongoose = require('mongoose');
const VehicleSchema = new mongoose.Schema({
    brand:{type:String},
    model:{type:String},
    color:{type:String},
    year:{type:Number},
    VehicleRate:{type:Number},
    imageURL:{type:Array},
    pricePerDay:{type:Number},
    doorsNumber:{type:Number},
    chairsNumber:{type:Number},
    transmissionType: {type:Boolean,default:false},
    Car_Seat:{type:Number},
    airbag:{type:Boolean,default:false},
    seatbelts:{type:Boolean,default:false},
    ABS:{type:Boolean,default:false},
    sunroof:{type:Boolean,default:false},
   Parking_Sensors:{type:Boolean,default:false},
   Radio:{type:Boolean,default:false},
   Navigation_System:{type:Boolean,default:false},
   Bluetooth:{type:Boolean,default:false},
   Remote_Start:{type:Boolean,default:false},
   AC:{type:Boolean,default:false},
   Music_Player:{type:Boolean,default:false},
  CC:{type:Number},
  Extra_Tyre:{type:Boolean,default:false},
  Charger:{type:Boolean,default:false},
  Fire_Extinguisher:{type:Boolean,default:false},
  First_Aid_Kit:{type:Boolean,default:false},
  Smoking_Preferences:{type:Boolean,default:false},
  companyID:{type:mongoose.Types.ObjectId,ref:"VehicleCompany"}
    
},{
timestamps:true
})

module.exports=mongoose.model("Vehicle",VehicleSchema )


