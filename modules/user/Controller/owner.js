const bookingModel = require("../../../DB/models/Booking")
module.exports=async(req,res)=>{
    
    const comapnyID = req.params.comapnyID;
    console.log(comapnyID);
     console.log('here');
        let data = await bookingModel.find({comapnyID})
        if(data.length>0)
        res.json({message:'success',data})
        else
        res.json({message:'NotFound'})

        
};


