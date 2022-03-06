const mongoose = require('mongoose');
const CompanySchema = new mongoose.Schema({
    CompanyName:{type:String},
    City:{type:String},
    companyRate:{type:String},
    Street:{type:String},
    Hotline:{type:Number},
    UserID:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
},{
timestamps:true
})

module.exports=mongoose.model("VehicleCompany",CompanySchema )