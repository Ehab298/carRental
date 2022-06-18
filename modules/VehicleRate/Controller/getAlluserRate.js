const  VehicleRatecontrol =require('../../../DB/models/VehicleRate')
// const  VehicleRatecontrol =require('../../../DB/models/VehicleRate')

module.exports=async(req,res)=>{
// module.exports=async(req,res)=>{
    

        
        
     let data =    await   VehicleRatecontrol.aggregate([{ $group: {
                _id: '$UserID',
                VehicleRateavg: { $avg: '$VehicleRate'}
        }}])
console.log(data[0].VehicleRateavg);

        res.status(200).json({message:'success',data})
//          await   VehicleRatecontrol.aggregate([{ $group: {
//                 _id: '$UserID',
//                 VehicleRateavg: { $avg: '$VehicleRate'}
//         }}],    function(err, obj) {
//                 console.log(JSON.stringify(obj.VehicleRateavg, null, 4));
//                 res.status(200).json({message:'success',obj})
//                     })
        
         
               
        

            
        // console.log(data1.VehicleRateavg);
        // res.json({message:'success',data1})
        // res.json({message:'success',result})
}
//         // console.log(data1.VehicleRateavg);
//         // res.json({message:'success',data1})
//         // res.json({message:'success',result})
// }

