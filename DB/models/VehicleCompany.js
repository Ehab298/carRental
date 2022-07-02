const mongoose = require('mongoose');
const CompanySchema = new mongoose.Schema({
    CompanyName:{type:String},
    City:{type:String},
    companyRate:{type:Number,default:0},
    Street:{type:String},
    Hotline:{type:Number},
    requirement: [{type: String}],
    Latitude:{type:String,default:'0'},
    Longitude:{type:String,default:'0'}
    
},{
timestamps:true
})

module.exports=mongoose.model("VehicleCompany",CompanySchema )