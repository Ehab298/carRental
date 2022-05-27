const bookingModel = require("../../../DB/models/User")
const car = require("../../../DB/models/Vehicle")
const rent = require("../../../DB/models/Booking")
module.exports=async(req,res)=>{
    
    const conpanyId = req.params.conpanyId;
     
        let data1 = await bookingModel.find({conpanyId})
        if(data1){

          console.log(conpanyId);

          let data2 = await car.find({companyID:conpanyId})
         let alex = data2._id
         console.log(alex);
          let data = await rent.find({VehicleID:alex})




          if(data.length>0)
          res.json({message:'success',data})
          
          else
          res.json({message:'NotFound'})
        }

        else{
        res.json({message:'NotFound'})
        }
        


      }