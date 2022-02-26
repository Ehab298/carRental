const mongoose = require('mongoose');
const CompanyBranchSchema = new mongoose.Schema({
    City:{type:String},
    Street:{type:String},
    BranchName:{type:String},
    BranchPhone:{type:Number},
    CompanyID:{type:mongoose.Types.ObjectId,ref:"VehicleCompany"}
},{
timestamps:true
})

module.exports=mongoose.model("CompanyBranch",CompanyBranchSchema )