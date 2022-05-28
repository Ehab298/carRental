const userModel = require('../../../DB/models/User')
const bcrypt = require('bcrypt');
const sendEmail = require("../../../middleware/sendEmail")



var jwt = require('jsonwebtoken');
module.exports =async(req,res,next)=>{

    const{email}= req.body
 const user =await userModel.findOne({email})

     
  
            const token = jwt.sign({ email}, 'shhhhh');
           
          let massage = `<html><body>
         <h1>rest Your password</h1><a href='https://car-rental-eg.herokuapp.com/restpassword/${token}'>rest your password</a></body></html>`
          await sendEmail(email,massage)
         res.status(200).json({message:"done"});
        
    
    
}

