const Favorite = require("../../../DB/models/FavoriteList")
const Vehicle = require("../../../DB/models/Vehicle")
module.exports=async(req,res)=>{
    
    const UserID = req.params.UserID;
     
        let data1 = await Favorite.find({UserID})

        let array = []
  
        for (let index = 0;index<data1.length; index++) {
           
         if (data1[index].like==true) {
          array.push(data1[index].VehicleID)
         }
           
       
  
           
         
            
        }


        let data = await Vehicle.find(
          {'_id': { $in: array}}
        );
      
            res.status(200).json({message:"done",data});
      
};