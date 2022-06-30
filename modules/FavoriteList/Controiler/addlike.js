const  addFavoriteControl =require('../../../DB/models/FavoriteList')



 module.exports = async(req,res)=>{
   const UserID = req.params.UserID;
    const {  like,VehicleID} = req.body;
   
  
    let data1 = await addFavoriteControl.find({VehicleID})
   
if (data1.length>0) {

 

const data2 = await addFavoriteControl.findOneAndUpdate({VehicleID:VehicleID},{like,VehicleID,UserID},{new:true})
res.status(200).json({message:'success',data2})
  
} else {
  const data3 = await addFavoriteControl.insertMany({ like,VehicleID, UserID})
  res.status(200).json({message:'success',data3})
}



}


    