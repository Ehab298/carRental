const userModel = require('../../../DB/models/User');
const VehicleCompany = require('../../../DB/models/VehicleCompany');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');



module.exports = async (req, res) => {
debugger
    const { email,password } = req.body;

    const adminDate = await userModel.findOne({ email }).populate("UserID")

    
    
    if (!adminDate) {
        res.status(400).json({message:'in-valid  user'})
    } 
    
    else {
        if (adminDate.role!="Admin") {
             res.status(400).json({ message: "Admin only can singin" })
        }else

        {
            const match = await bcrypt.compare(password, adminDate.password);

            if(match) {
                var adminToken = jwt.sign({ id:adminDate._id,role: adminDate.role,conpanyId:adminDate.conpanyId}, 'shhhhh');
                
        
                
                res.status(200).json({message:"done",adminToken,adminDate })
            }
            else{
                res.status(400).json({message:"in-valid user"});
            }}

      

    }

}




