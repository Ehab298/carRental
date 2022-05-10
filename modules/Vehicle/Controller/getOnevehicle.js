const vehicleModel = require("../../../DB/models/Vehicle");


module.exports=async(req,res)=>{
        
        serch= (req.query.serch?.trim().toString());
         let data = await vehicleModel.find({$or:[
         {Vehicletype:{"$regex": serch, "$options": "i"}},
         {color:{"$regex": serch, "$options": "i"}} ,
         {brand:{"$regex": serch, "$options": "i"}},
         {model:{"$regex": serch, "$options": "i"}},
        ]}).populate('companyID')
        res.json({message:'success',data})
        
};

