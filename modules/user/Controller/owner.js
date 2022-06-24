const bookingModel = require("../../../DB/models/Booking")
module.exports=async(req,res)=>{
    
    const companyID = req.params.companyID;
    console.log(companyID);
     console.log('here');
        let data = await bookingModel.find({companyID}).populate('VehicleID').populate('UserID')
        if(data.length>0)
        res.json({message:'success',data})
        else
        res.json({message:'NotFound'})

        
};


