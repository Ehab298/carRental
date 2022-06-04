const userModel = require('../../../DB/models/User')
const bcrypt = require('bcrypt');
const sendEmail = require("../../../middleware/sendEmail")



var jwt = require('jsonwebtoken');
module.exports =async(req,res,next)=>{
 try{   
  const { email } = req.body;
 const user =await userModel.findOne({email})

 if (!user) {
  res.json({message:"User not found in DB"})
} else {
    
            const token = jwt.sign({ email}, 'shhhhh');
          
          let massage = `<html><body>
         <h1>reset Your password</h1><a href='https://car-rental-eg.herokuapp.com/getOneuser'>vifiy your email</a></body></html>`
          await sendEmail(email,massage)
         res.status(200).json({message:"done"});
   
}
 }
 catch(err){
    res.status(400).json({message:"unexpected error occured"});
 }
  
}  

