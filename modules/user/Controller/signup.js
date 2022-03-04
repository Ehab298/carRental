const userModel = require('../../../DB/models/User')
const bcrypt = require('bcrypt');
const sendEmail = require("../../../middleware/sendEmail")



var jwt = require('jsonwebtoken');
module.exports =async(req,res,next)=>{
 try{   
    const{firstName,lastName,email,password,cpassword, phone,role,}= req.body
 const user =await userModel.findOne({email})
 if (user) {
     res.json({error:"there is same email in DB"})
 } else {
     
    bcrypt.hash(password, 8, async function(err, hash) {
        if (err) {
            res.json({error:"hash err"})
        } else {
            const token = jwt.sign({ email}, 'shhhhh');
            const newUser= await userModel.insertMany({firstName,lastName,email,password:hash, phone,role})
         let massage = `<html><body>
         <h1>Activate Your Account</h1><a href='https://car-rental-eg.herokuapp.com/virfiyEmail/${token}'>vifiy your email</a></body></html>`
         await sendEmail(email,massage)
         res.status(200).json({message:"done",newUser});
        }
    });
    }
 }
 catch(err){
    res.status(400).json({message:"unexpected error occured"});
 }
  
}  


// debugger https://car-rental-eg.herokuapp.com   http://localhost:4400