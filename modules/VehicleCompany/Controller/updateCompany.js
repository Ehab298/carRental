
const  VehicleCompany =require('../../../DB/models/VehicleCompany')




module.exports= async(req, res) => {
    const {CompanyName,City,Street,Hotline,companyRate} = req.body;
    const _id = req.params.id
    let newUser =  await VehicleCompany.updateOne({ _id: _id }, {CompanyName,City,Street,Hotline,companyRate},{new:true}).then(() => {
        res.status(200).json({message:"done"});
    })
   
};