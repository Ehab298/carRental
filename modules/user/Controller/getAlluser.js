const userModel = require("../../../DB/models/User")

 const getuser=async(req,res)=>{
     
    let data = await userModel.find().select("-password")
    res.status(200).json({message:'success',data})
    
}


module.exports=getuser


