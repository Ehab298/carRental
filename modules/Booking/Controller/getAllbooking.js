const bookingModel = require("../../../DB/models/Booking")

module.exports=async(req,res)=>{
    
     
        let data = await bookingModel.find().populate('UserID')
        res.json({message:'success',data})
        
};

