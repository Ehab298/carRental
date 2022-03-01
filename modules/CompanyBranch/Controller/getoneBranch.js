const CompanyBranchmodel = require("../../../DB/models/CompanyBranch")
module.exports=async(req,res)=>{
    
    const _id = req.params.id;
        let data = await bookingModel.findOne({ _id})
        res.json({message:'success',data})
        
};


