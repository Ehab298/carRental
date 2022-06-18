const bookingModel = require("../../../DB/models/Booking")
module.exports=async(req,res)=>{
    
    const UserID = req.params.UserID;
     
        let data = await bookingModel.find({UserID}).populate('VehicleID')
        console.log(data[0].DateTo);
        console.log(Date());
        if(data[0].DateTo> Date()){
            res.json({message:"Rent most be end"});
        }
        else{
        if(data.length>0)
        res.json({message:'success',data})
        else
        res.json({message:'NotFound'})

        }
};