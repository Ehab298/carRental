const userModel = require('../../../DB/models/User');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
    
   
    const{token} =req.params
    if (token) {
        jwt.verify(token, 'shhhhh',async function (err, decoded) {
            if (err) {
                res.status(400).json({ error: "in-valid signature" })
            } else {
                const user =await userModel.findOne({email:decoded.email})
            if (!user) {
                res.status(400).json({ error: "in-vali user" })
            }    else{
                let {password,cpassword} =  req.body
                bcrypt.hash(password, 8, async function(err, hash) {
                    if (err) {
                        res.json({message:"hash err"})
                    } else {
                      
                    const updataUser = await userModel.findOneAndUpdate({email:user.email},{password:hash},{new:true})
                    res.status(200).json({message:"success",updataUser});
                
                    }})
                
            }}
 })} 
                

                
             
  
// let {password,cpassword} =  req.body
// console.log({password,cpassword});
// res.status(200).json({message:"done"}); 
    }
    