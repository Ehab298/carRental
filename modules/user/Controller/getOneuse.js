const userModel = require("../../../DB/models/User");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const body1=[]
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
                body1.push(decoded.email)
         console.log(body1[0]);
                res.status(200).render('restpassword.ejs');
            }}
 })} 
                
    

    
}


const Restpassword= async (req, res) => {
    
   
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
                let {password,cpassword} =  req.body
                bcrypt.hash(password, 8, async function(err, hash) {
                    if (err) {
                        res.json({message:"hash err"})
                    } else {
                      
                    const updataUser = await userModel.findOneAndUpdate({email:body1[0]},{password:hash},{new:true})
                    res.status(200).json({message:"done",updataUser});
                
                    }})
                
            }}
 })} 
                

                
             
  
// let {password,cpassword} =  req.body
// console.log({password,cpassword});
// res.status(200).json({message:"done"}); 
    }
    

    module.exports ={getone,Restpassword}