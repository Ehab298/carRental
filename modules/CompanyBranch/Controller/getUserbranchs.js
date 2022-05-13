const CompanyBranchmodel = require("../../../DB/models/CompanyBranch")

  module.exports=async(req,res)=>{
     //get company id of logged in user
    //then get branches of the company
  
    let data = await CompanyBranchmodel.find({CompanyID:req.User.conpanyId}).populate("CompanyID")
    res.json({message:'success',data})
    
}