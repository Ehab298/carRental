const vehicleModel = require("../../../DB/models/Vehicle")



module.exports=async(req,res)=>{
    
    debugger

    
    serch= req.query.serch?.trim();
       

       
       

        let data = await vehicleModel.find({$or:[
         {  Vehicletype: { $regex: '.*' + serch   + '.*' }},
         { color: { $regex: '.*' + serch   + '.*' } } ,
         { brand: { $regex: '.*' + serch   + '.*' } },
         { model: { $regex: '.*' + serch   + '.*' }},
        ]}).populate('companyID')
        res.json({message:'success',data})
        
};

