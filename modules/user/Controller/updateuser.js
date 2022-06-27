
const userModel = require('../../../DB/models/User');




module.exports= async(req, res) => {
    const {UserName,email,password,cpassword, phone,age,role} = req.body;
    const _id = req.params.id
    let newUser =  await userModel.findOneAndUpdate({ _id: _id }, {UserName,email,password,cpassword, phone,age,role},{new:true})
        res.status(200).json({message:"success",newUser});
    
   
};