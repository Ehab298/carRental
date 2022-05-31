const  VehicleRatecontrol =require('../../../DB/models/VehicleRate')

module.exports=async(req,res)=>{
    
     
        // let data1 = await VehicleRatecontrol.find({})
        // console.log(data.VehicleRate);
        // let data2 = await VehicleRatecontrol.find({data})
        
        
         await   VehicleRatecontrol.aggregate([{ $group: {
                _id: '$UserID',
                VehicleRateavg: { $avg: '$VehicleRate'}
        }}],    function(err, obj) {
                console.log(JSON.stringify(obj.VehicleRateavg, null, 4));
                res.status(200).json({message:'success',obj})
                    })
        
         
               
        

            
        // console.log(data1.VehicleRateavg);
        // res.json({message:'success',data1})
        // res.json({message:'success',result})
}


