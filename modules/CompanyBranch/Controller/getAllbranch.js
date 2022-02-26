const CompanyBranchmodel = require("../../../DB/models/CompanyBranch")

  module.exports=async(req,res)=>{
     
    let data = await CompanyBranchmodel.find().populate("CompanyID")
    res.json({message:'success',data})
    
}





