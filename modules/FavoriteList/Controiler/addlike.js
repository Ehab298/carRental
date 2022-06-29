const  addFavoriteControl =require('../../../DB/models/FavoriteList')



 module.exports = async(req,res)=>{
   const UserID = req.params.UserID;
    const {  like,VehicleID} = req.body;
   
  

       



const data = await addFavoriteControl.insertMany({ like,VehicleID, UserID})
res.status(200).json({message:'success',data})
}


    