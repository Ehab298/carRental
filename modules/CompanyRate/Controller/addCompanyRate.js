const  CompanyRateControl =require('../../../DB/models/CompanyRate')
const   Company=require('../../../DB/models/VehicleCompany')


 module.exports = async(req,res)=>{
   const UserID = req.params.UserID;
    const {  companyRate,CompanyID} = req.body;
   
        const Data= await CompanyRateControl.insertMany({  companyRate,CompanyID, UserID})

       
               
     let data =    await   CompanyRateControl.aggregate([{ $group: {
      _id: '$CompanyID',
        CompanyRateavg: { $avg: '$companyRate'}
}}])
let x= CompanyID.toString()
         for (let index = 0; index < data.length; index++) {
          
        let y=data[index]._id.toString()
      
            if (x==y) {
                body.push(data[index]);
            }
         } 

const updataCompanyrate = await Company.findOneAndUpdate({_id:CompanyID},{companyRate:body[(body.length)-1].CompanyRateavg},{new:true})
res.status(200).json({message:'success',updataCompanyrate})
}


    