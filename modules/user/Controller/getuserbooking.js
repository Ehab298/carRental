const bookingModel = require("../../../DB/models/Booking")
module.exports=async(req,res)=>{
    
    const UserID = req.params.UserID;
     
        let data = await bookingModel.find({UserID})
        if(data.length>0)
        res.json({message:'success',data})
        else
        res.json({message:'NotFound'})

        
};