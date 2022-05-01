const vehicleModel = require("../../../DB/models/Vehicle")



module.exports=async(req,res)=>{
    
    debugger
        brand= req.query.brand?.trim();
        color=req.query.color?.trim();
        Vehicletype=req.query.Vehicletype?.trim();
        year=req.query.year?.trim();
        model=req.query.model?.trim();
        _id=req.query._id
        let whereConditions = [];
        if(Vehicletype) 
          whereConditions.push({ Vehicletype: { $regex: '.*' + Vehicletype   + '.*' } });
        if(color) 
          whereConditions.push({ color: { $regex: '.*' + color   + '.*' } });
        if(brand) 
          whereConditions.push({ brand: { $regex: '.*' + brand   + '.*' } });
        if(model) 
        whereConditions.push({ brand: { $regex: '.*' + model   + '.*' } });
          if(_id) 
          whereConditions.push({ _id });
       

        let data = await vehicleModel.find({$or: whereConditions})
        res.json({message:'success',data})
        
};

