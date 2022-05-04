const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    password:{type:String},
    phone:{type:Number}, 
    confirm:{type:Boolean,default:false},
    role:{type:String,default:"User"},
    conpanyId:{type:mongoose.Schema.Types.ObjectId,ref:"VehicleCompany",default:undefined}
},{
timestamps:true
})

module.exports=mongoose.model("User",userSchema )