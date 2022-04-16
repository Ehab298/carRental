const vehicleModel = require("../../../DB/models/Vehicle")



module.exports=async(req,res)=>{
    
    debugger


 
        brands= req.query.brand
        color=req.query.color
        Vehicletype=req.query.Vehicletype
       
  
    
        let data = await vehicleModel.find(
            { Vehicletype: { $regex: '.*' + Vehicletype   + '.*' } }
          
          )
        res.json({message:'success',data})
        
};

