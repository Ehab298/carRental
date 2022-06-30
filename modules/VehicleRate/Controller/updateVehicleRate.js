const  VehicleRatecontrol =require('../../../DB/models/VehicleRate')
const  Vehicle=require('../../../DB/models/Vehicle')

body = []
 module.exports = async(req,res)=>{
   const UserID = req.params.UserID;
    const {  VehicleRate,VehicleID} = req.body;

     
    let data1 = await VehicleRatecontrol.find({UserID:UserID,VehicleID:VehicleID}).select();

    if (data1.length>0) {

        res.json({message:'This vehicle has already been rated! '})
    } else {
        const Data= await VehicleRatecontrol.insertMany({  VehicleRate,VehicleID, UserID})

       
               
     let data2 =    await   VehicleRatecontrol.aggregate([{ $group: {
        _id: '$VehicleID',
        VehicleRateavg: { $avg: '$VehicleRate'}
}}])

let x= VehicleID.toString()
         for (let index = 0; index < data2.length; index++) {
          
        let y=data2[index]._id.toString()
      
            if (x==y) {
                body.push(data2[index]);
            }
         } 


 const updataVehiclerate = await Vehicle.findOneAndUpdate({_id:VehicleID},{VehicleRate:body[(body.length)-1].VehicleRateavg},{new:true}).populate('companyID')
res.status(200).json({message:'success',updataVehiclerate})
    }
        
}

