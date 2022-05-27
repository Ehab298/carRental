const bookingModel = require("../../../DB/models/User")
const car = require("../../../DB/models/Vehicle")
const rent = require("../../../DB/models/Booking")
module.exports=async(req,res)=>{
    debugger
    const conpanyId = req.params.conpanyId;
     
        let data1 = await bookingModel.find({conpanyId})
        if(data1){

          console.log(conpanyId);

          let data2 = await car.find({companyID:conpanyId})
            console.log(res.data2);
    




          if(data2.length>0)
          res.json({message:'success',data2})
          
          else
          res.json({message:'NotFound'})
        }

        else{
        res.json({message:'NotFound'})
        }
        


      }