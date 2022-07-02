
const  VehicleCompany =require('../../../DB/models/VehicleCompany')




module.exports= async(req, res) => {
    const {CompanyName,City,Street,Hotline,companyRate , requirement,Latitude,Longitude} = req.body;
    const _id = req.params.id
    let newCompany =  await VehicleCompany.findOneAndUpdate({ _id: _id }, {CompanyName,City,Street,Hotline,companyRate, requirement,Latitude,Longitude},{new:true})
        res.status(200).json({message:"success",newCompany});
    
   
};