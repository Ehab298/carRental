const mongoose = require('mongoose');
const VehicleRateSchema = new mongoose.Schema({

    VehicleRate:{type:Number},
    UserID:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    VehicleID:{type:mongoose.Schema.Types.ObjectId,ref:"Vehicle"},
},{
timestamps:true
})

module.exports=mongoose.model("VehicleRate",VehicleRateSchema )