
const  vehicleModel =require('../../../DB/models/Vehicle')


module.exports =async (req, res) => {

  
    const _id = req.params.id;
    await vehicleModel.deleteMany({_id}).then(()=> res.status(200).json({message:'success'}))

};