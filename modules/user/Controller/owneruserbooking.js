const bookingModel = require("../../../DB/models/User")
const car = require("../../../DB/models/Vehicle")
const rent = require("../../../DB/models/Booking")
module.exports=async(req,res)=>{
 
  
  const _id = req.params.id;
  
  
  let Companyid = await car.findOne({_id}).cursor()

      let cursor = await car.findOne({companyID:Companyid.conpanyId}).cursor()

  

     
     
      
      // for(let doc= await cursor.next();doc!=null;doc =await cursor.next()){

        

        const date2 = await rent.find({comapnyID:cursor.companyID})
        
       
        
       
      
    

    res.json({message:'success',date2})
     
  

 
  
  
   
       
  



    
       




   


      }