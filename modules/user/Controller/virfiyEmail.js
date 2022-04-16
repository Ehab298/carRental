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
                if (userModel.comfirme==true) {
                    res.status(400).json({ error: "you already confirmed email" })
                }else{
                    const updataUser = await userModel.findOneAndUpdate({email:user.email},{confirm:true},{new:true})
                    res.status(200).json({message:"done",updataUser});
                }
                
            }}
            
        
    


 })} else{
            res.json({ message: "token" })
        }
    
    
    }
    
    
    
      

    

