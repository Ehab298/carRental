const userModel = require("../../../DB/models/User")

 const getuser=async(req,res)=>{
    const _id = req.User.id;
    const _comapny = req.User.conpanyId;

    let data = await userModel.findOne({_id}).select("-password")

    res.status(200).json({message:'success',data})
    
}


module.exports=getuser