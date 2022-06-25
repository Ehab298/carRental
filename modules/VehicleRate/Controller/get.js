const  VehicleRatecontrol =require('../../../DB/models/VehicleRate')
module.exports=async(req,res)=>{
    
    let VehicleID111 = req.params.VehicleID111;
     body=[]
     
    

         let data2 =    await   VehicleRatecontrol.aggregate([{ $group: {
            _id: '$VehicleID',
            VehicleRateavg: { $avg: '$VehicleRate'}
    }}])
    let x= VehicleID111.toString()
         for (let index = 0; index < data2.length; index++) {
          
        let y=data2[index]._id.toString()
      
            if (x==y) {
                body.push(data2[index]);
            }
         } 
//             { $group: {
//       _id:'$VehicleID' ,
//             VehicleRateavg: { $avg: '$VehicleRate'}
// }}

            res.status(200).json({message:"done",body});
    
};