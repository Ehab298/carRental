
const userModel = require('../../../DB/models/User');


module.exports =async (req, res) => {
    const _id = req.params.id;
    await userModel.deleteMany({_id}).then(()=> res.status(200).json({message:'success'}))

};