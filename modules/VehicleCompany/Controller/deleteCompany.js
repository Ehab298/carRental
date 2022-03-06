
const  VehicleCompany =require('../../../DB/models/VehicleCompany')

module.exports =async (req, res) => {
    const _id = req.params.id;
    await VehicleCompany.deleteMany({_id}).then(()=> res.status(200).json({message:'success'}))

};