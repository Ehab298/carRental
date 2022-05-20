const CompanyModel = require("../../../DB/models/VehicleCompany")

module.exports=async(req,res)=>{
    
    const _id = req.params.id;
        let data = await CompanyModel.findOne({ _id})
        res.status(400).json({message:'success',data})






        
        
};


