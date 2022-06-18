const bookingModel = require("../../../DB/models/Booking")

module.exports=async(req,res)=>{
    
    const _id = req.params.id;
        let data = await bookingModel.findOne({ _id}).populate('UserID')
        res.json({message:'success',data})
        
};


