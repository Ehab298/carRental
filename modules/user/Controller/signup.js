const userModel = require('../../../DB/models/User')
const bcrypt = require('bcrypt');
const sendEmail = require("../../../middleware/sendEmail")



var jwt = require('jsonwebtoken');
module.exports =async(req,res,next)=>{
 try{   
    const{firstName,lastName,email,password,cpassword, phone,role,conpanyId}= req.body
 const user =await userModel.findOne({email})
 if (user) {
     res.json({message:"there is same email in DB"})
 } else {
     
    bcrypt.hash(password, 8, async function(err, hash) {
        if (err) {
            res.json({message:"hash err"})
        } else {
            const token = jwt.sign({ email}, 'shhhhh');
            const newUser= await userModel.insertMany({firstName,lastName,email,password:hash, phone,role,conpanyId})
          let massage = `<html><body>
         <h1>Activate Your Account</h1><iframe name="page"hidden></iframe><a href='https://car-rental-eg.herokuapp.com/virfiyEmail/${token}'target="page">vifiy your email</a></body></html>`
          await sendEmail(email,massage)
         res.status(200).json({message:"done"});
        }
    });
    }
 }
 catch(err){
    res.status(400).json({message:"unexpected error occured"});
 }
  
}  


//  https://car-rental-eg.herokuapp.com   http://localhost:4400