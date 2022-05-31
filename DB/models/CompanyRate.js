const mongoose = require('mongoose');
const CompanyRateSchema = new mongoose.Schema({

    companyRate:{type:Number},
    UserID:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    CompanyID:{type:mongoose.Types.ObjectId,ref:"VehicleCompany"}
},{
timestamps:true
})

module.exports=mongoose.model("CompanyRate",CompanyRateSchema )