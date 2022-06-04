const userModel = require('../../../DB/models/User');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
    
   

                

                
                let {email,password,cpassword} =  req.body
                bcrypt.hash(password, 8, async function(err, hash) {
                    if (err) {
                        res.json({message:"hash err"})
                    } else {
                      
                    const updataUser = await userModel.findOneAndUpdate({email},{password:hash},{new:true})
                    res.status(200).json({message:"done",updataUser});
                
                    }})
  
// let {password,cpassword} =  req.body
// console.log({password,cpassword});
// res.status(200).json({message:"done"}); 
    }
    