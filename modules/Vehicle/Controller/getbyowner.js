const CompanyModel = require("../../../DB/models/VehicleCompany")
const vehicleModel = require("../../../DB/models/Vehicle")
module.exports=async(req,res)=>{
    
    const _id = req.params.id;
        let company = await CompanyModel.findOne({ _id})
        
        if (company) {


console.log(company.companyID)
console.log(company.UserID);
companyID =company._id




          let data =  await vehicleModel.find({companyID}).populate('companyID')
            res.status(200).json({message:'success',data})
        } else {
            res.status(400).json({message:'err'})
        }
        
        
};


