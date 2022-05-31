const CompanyModel = require("../../../DB/models/VehicleCompany")
const vehicleModel = require("../../../DB/models/Vehicle")
const userModel = require("../../../DB/models/User")
module.exports=async(req,res)=>{
    
    const _id = req.User.id;
    await userModel.findOne({_id})
            res.status(200).json({message:'success',obj})
//         if(data) {
            


// // let companyID =data.conpanyId
// // console.log(company);
// // console.log(companyID);




//         //   let data =  await vehicleModel.find({companyID:_id}).populate('companyID')
//             res.status(200).json({message:'success',obj})
//         } else {
//             res.status(400).json({message:'err'})
//         }
        


        
};


