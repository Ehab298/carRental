const vehicleModel = require("../../../DB/models/Vehicle")

module.exports=async(req,res)=>{
    
     
        let data = await vehicleModel.find().populate('UserID')
        res.status(200).json({message:"done",data})
        
};




