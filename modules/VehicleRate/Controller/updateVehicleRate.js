const  VehicleRatecontrol =require('../../../DB/models/VehicleRate')
const  Vehicle=require('../../../DB/models/Vehicle')


 module.exports = async(req,res)=>{
   const UserID = req.params.UserID;
    const {  VehicleRate,VehicleID} = req.body;
   
        const Data= await VehicleRatecontrol.insertMany({  VehicleRate,VehicleID, UserID})

       
               
     let data =    await   VehicleRatecontrol.aggregate([{ $group: {
        _id: '$UserID',
        VehicleRateavg: { $avg: '$VehicleRate'}
}}])
console.log(data[0].VehicleRateavg);
console.log(Date());
const updataVehiclerate = await Vehicle.findOneAndUpdate({_id:VehicleID},{VehicleRate:data[0].VehicleRateavg},{new:true}).populate('companyID')
res.status(200).json({message:'success',updataVehiclerate})
}

