const bookingModel = require("../../../DB/models/Booking")
module.exports=async(req,res)=>{
    
    const UserID = req.params.UserID;
     
        let data1 = await bookingModel.find({UserID}).populate({ path: 'VehicleID', populate: { path: 'companyID' }});


        let x = new Date().toISOString() 
        let data = []
  
        for (let index = 0;index<data1.length; index++) {
           
            let y =data1[index].DateTo.toISOString()
            if(x>=y){
               
                data.push(data1[index]);
        
            }
         
            
        }
        if (data.length>0) 
            res.status(200).json({message:"success",data});
        else
        res.json({message:"No_data"});
};