const CompanyModel = require("../../../DB/models/VehicleCompany")

  module.exports=async(req,res)=>{
     
    let data = await CompanyModel.find()
    res.status(400).json({message:'success',data})

}




