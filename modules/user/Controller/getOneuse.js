const userModel = require("../../../DB/models/User");

var jwt = require('jsonwebtoken');
const getone=async(req,res)=>{
    // const _id = req.User.id;
    // const _comapny = req.User.conpanyId;

    // let data = await userModel.findOne({_id}).select("-password")

    // res.status(200).json({message:'success',data})
    

    res.status(200).render('restpassword.ejs');
}


const Restpassword= async (req, res) => {
    
   
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
                    res.status(200).json({message:"done",updataUser});
                
                    }})
                
            }}
 })} 
                

                
             
  
// let {password,cpassword} =  req.body
// console.log({password,cpassword});
// res.status(200).json({message:"done"}); 
    }
    

    module.exports ={getone,Restpassword}