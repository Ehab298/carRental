const vehicleModel = require("../../../DB/models/Vehicle")

module.exports=async(req,res)=>{
    
    const _id = req.params.id;
        let data = await vehicleModel.findById({_id}).populate('UserID')
        res.status(200).json({message:"done",data})
        
};