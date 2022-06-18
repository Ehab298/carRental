const bookingModel = require("../../../DB/models/Booking")
module.exports=async(req,res)=>{
    
    const UserID = req.params.UserID;
     
        let data = await bookingModel.find({UserID}).populate('VehicleID')


        let x = new Date().toISOString() 
        let body = []
  
        for (let index = 0;index<data.length; index++) {
           
            let y =data[index].DateTo.toISOString()
            if(x>=y){
               
                body.push(data[index]);
        
            }
         
            
        }
        if (body.length>0) 
            res.status(200).json({message:"done",body});
        else
        res.json({message:"No_data"});
};