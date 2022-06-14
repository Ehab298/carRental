const CompanyModel = require("../../../DB/models/VehicleCompany")
const vehicleModel = require("../../../DB/models/Vehicle")
const userModel = require("../../../DB/models/User")


//62216627945c286035a19aa3
   

module.exports =async (req, res) => {
 

const _id= req.params.id;
        let User = await userModel.findOne({_id})
    
if (User.conpanyId) {
    

    let company = await CompanyModel.find({ _id:User.conpanyId})

 
 
    if (company) {
       

        let data =  await vehicleModel.find({companyID:company[0]._id}).populate('companyID')
            res.status(200).json({message:'success',data})
        } else {
            res.status(400).json({message:'notadmin'})
        }
} else {
    
    res.status(400).json({message:'notadmin'})
    
}

 





}
    
