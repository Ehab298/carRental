const vehicleModel = require("../../../DB/models/Vehicle")

module.exports=async(req,res)=>{
    
     
        let data = await vehicleModel.find().populate('companyID')
        res.status(200).json({message:"success",data})
        
};




