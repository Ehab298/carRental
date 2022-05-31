const CompanyModel = require("../../../DB/models/VehicleCompany")
const vehicleModel = require("../../../DB/models/Vehicle")
const userModel = require("../../../DB/models/User")
module.exports=async(req,res)=>{


    const _id = req.params.id;
    let company = await CompanyModel.findOne({ _id})
    console.log(company);
    console.log(company.id);
    if (company) {

     

        let data =  await vehicleModel.find({companyID:company.id}).populate('companyID')
            res.status(200).json({message:'success',data})
        } else {
            res.status(400).json({message:'err'})
        }
}
    
