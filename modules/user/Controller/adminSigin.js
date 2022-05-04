const userModel = require('../../../DB/models/User');
const VehicleCompany = require('../../../DB/models/VehicleCompany');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');



module.exports = async (req, res) => {
debugger
    const { email,password } = req.body;

    const user = await userModel.findOne({ email }).populate("conpanyId")

    
    
    if (!user) {
        res.status(400).json({message:'in-valid  user'})
    } 
    
    else {
        if (user.role!="Admin") {
             res.status(400).json({ message: "Admin only can singin" })
        }else

        {
            const match = await bcrypt.compare(password, user.password);

            if(match) {
                var token2 = jwt.sign({ id:user._id,role: user.role,conpanyId:user.conpanyId}, 'shhhhh');
                
        
                
                res.status(200).json({message:"done",token2, firstName:user.firstName,lastName:user.lastName,phone:user.phone,email:user.email,conpanyId:user.conpanyId})
            }
            else{
                res.status(400).json({message:"in-valid user"});
            }}

      

    }

}




