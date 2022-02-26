const vehicleModel = require("../../../DB/models/Vehicle")

module.exports=async(req,res)=>{
    
    const _id = req.params.id;
        let data = await vehicleModel.findOne({ _id})
        res.json({message:'success',data})
        
};


