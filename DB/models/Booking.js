const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
    Pick_upLocation:{type:String},
    return_Location:{type:String},
    DateFrom:{type:Date},
    DateTo:{type:Date},
    message:{type:String,default:undefined},
    VehicleID:{type:mongoose.Schema.Types.ObjectId,ref:"Vehicle"},
    UserID:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
},{
timestamps:true
})

module.exports=mongoose.model("Rent",bookingSchema )