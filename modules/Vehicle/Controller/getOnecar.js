const vehicleModel = require("../../../DB/models/Vehicle")

module.exports=async(req,res)=>{
    
    const _id = req.params.id;
        let data = await vehicleModel.findById({_id}).populate('companyID')
        res.status(200).json({message:"success",data})
        
};