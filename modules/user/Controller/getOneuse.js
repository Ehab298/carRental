const userModel = require("../../../DB/models/User");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const body1={}
var email1;

const getone=async(req,res)=>{
    const{token} =req.params
    console.log(token);
    if (token) {
        jwt.verify(token, 'shhhhh',async function (err, decoded) {
            if (err) {
                res.status(400).json({ error: "in-valid signature" })
            } else {
                const user =await userModel.findOne({email:decoded.email})
            if (!user) {
                res.status(400).json({ error: "in-vali user" })
            }    else{
                
                email1=decoded.email
      
                res.status(200).render('restpassword.ejs');
            }}
 })} 
                
    

    
}


const Restpassword= async (req, res)=>{
    
   
    let {password,cpassword} =  req.body
    bcrypt.hash(password, 8, async function(err, hash) {
      
       
          
        const updataUser = await userModel.findOneAndUpdate({email:email1},{password:hash},{new:true})
        res.status(200).json("success");
    
    })
}

    module.exports ={getone,Restpassword}