
const userModel = require('../../../DB/models/User');




module.exports= async(req, res) => {
    const {UserName,email,password,cpassword, phone,age,role,} = req.body;
    const _id = req.params.id
    let newUser =  await userModel.updateOne({ _id: _id }, {UserName,email,password,cpassword, phone,age,role,},{new:true}).then(() => {
        res.status(200).json({message:"done"});
    })
   
};