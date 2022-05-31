const mongoose = require('mongoose');
const CompanySchema = new mongoose.Schema({
    CompanyName:{type:String},
    City:{type:String},
    companyRate:{type:Number},
    Street:{type:String},
    Hotline:{type:Number},
    
},{
timestamps:true
})

module.exports=mongoose.model("VehicleCompany",CompanySchema )