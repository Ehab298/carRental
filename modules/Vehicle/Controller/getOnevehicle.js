const vehicleModel = require("../../../DB/models/Vehicle")



module.exports=async(req,res)=>{
    
    var brands=req.query.brand.trim();
    
        let data = await vehicleModel.find({brand: { $regex: '.*' + brands + '.*' } })
        res.json({message:'success',data})
        
};