const  CompanyRateControl =require('../../../DB/models/CompanyRate')
const   Company=require('../../../DB/models/VehicleCompany')


 module.exports = async(req,res)=>{
   const UserID = req.params.UserID;
    const {  companyRate,CompanyID} = req.body;
   
        const Data= await CompanyRateControl.insertMany({  companyRate,CompanyID, UserID})

       
               
     let data =    await   CompanyRateControl.aggregate([{ $group: {
        _id: '$UserID',
        CompanyRateavg: { $avg: '$companyRate'}
}}])

const updataCompanyrate = await Company.findOneAndUpdate({_id:CompanyID},{companyRate:data[0].CompanyRateavg},{new:true})
res.status(200).json({message:'success',updataCompanyrate})
}

