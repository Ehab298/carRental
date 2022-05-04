const vehicleModel = require("../../../DB/models/Vehicle")



module.exports=async(req,res)=>{
        serch= req.query.serch?.trim()
        Vehicletype= req.query.Vehicletype?.trim()
        
         let data = await vehicleModel.find({$or:[
         {Vehicletype:{ $regex: '.*' +Vehicletype+ '.*'}},
         {color:{ $regex: '.*' +serch+ '.*'}} ,
         {brand:{ $regex: '.*' +serch+ '.*'}},
         {model:{ $regex: '.*' +serch+ '.*'}},
        ]}).populate('companyID')
        res.json({message:'success',data})
        
};

