const  VehicleCompany =require('../../../DB/models/VehicleCompany')


 module.exports = async(req,res)=>{
    const { CompanyName,City,Street,Hotline} = req.body;
    const Company =await VehicleCompany.findOne({CompanyName})
    if(Company){
        res.status(400).json({error:"there is same name in DB"})
    }else {
        const newCompany= await VehicleCompany.insertMany({ CompanyName,City,Street,Hotline,UserID: req.User.id})
        res.status(200).json({message:"done",newCompany})
        }
}




// module.exports =async(req,res,next)=>{
//     const{UserName,email,password,cpassword, phone,age,role,}= req.body
//  const user =await userModel.findOne({email})
//  if (user) {
//      res.json({error:"there is same email in DB"})
//  } else {
     
//     bcrypt.hash(password, 8, async function(err, hash) {
//         console.log("Plain Password:"+password);
//         console.log("hashed Password:"+hash);
//         // Store hash in your password DB.
//         if (err) {
//             res.json({error:"hash err"})
//         } else {
//             const newUser= await userModel.insertMany({UserName,email,password:hash, phone,age,role,})
//             res.json({message:"done",newUser})
//         }
//     });
  
//  }
  
// }  