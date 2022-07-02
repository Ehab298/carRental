
const userModel = require('../../../DB/models/User');


module.exports =async (req, res) => {
    const email = req.params.email
    data=await userModel.find({email})
     res.status(200).json({message:'success',data})

};