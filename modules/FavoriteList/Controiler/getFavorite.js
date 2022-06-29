const Favorite = require("../../../DB/models/FavoriteList")
const Vehicle = require("../../../DB/models/Vehicle")
module.exports=async(req,res)=>{
    
    const UserID = req.params.UserID;
     
        let data1 = await Favorite.find({UserID})


        let body = []
  
        for (let index = 0;index<data1.length; index++) {
           
          if (data1[index].VehicleID==true) {
            body.push(data1[index].VehicleID);
          }
           
         
            
        }
      
            res.status(200).json({message:"done",body});
      
};