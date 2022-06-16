const  VehicleRatecontrol =require('../../../DB/models/VehicleRate')


 module.exports = async(req,res)=>{
    const {  VehicleRate,VehicleID} = req.body;
   
        const Data= await VehicleRatecontrol.insertMany({  VehicleRate,VehicleID, UserID: req.User.id})
       
        let data =    await   VehicleRatecontrol.aggregate([{ $group: {
            _id: '$UserID',
            VehicleRateavg: { $avg: '$VehicleRate'}
    }}])
    res.status(200).json({message:'success',data})
}

