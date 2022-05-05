const userModel = require('../../../DB/models/User');
const VehicleCompany = require('../../../DB/models/VehicleCompany');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');



module.exports = async (req, res) => {
debugger
    const { email,password } = req.body;

    const userAdmin = await userModel.findOne({ email }).populate("conpanyId")

    
    
    if (!userAdmin) {
        res.status(400).json({message:'in-valid  user'})
    } 
    
    else {
        if (userAdmin.role!="Admin") {
             res.status(400).json({ message: "Admin only can singin" })
        }else

        {
            const match = await bcrypt.compare(password, userAdmin.password);

            if(match) {
                var adminToken = jwt.sign({ id:userAdmin._id,role: userAdmin.role,conpanyId:userAdmin.conpanyId}, 'shhhhh');
                
        
                const adminDate = await userModel.findOne({ email }).populate("conpanyId")

                res.status(200).json({message:"done",adminToken,adminDate })
            }
            else{
                res.status(400).json({message:"in-valid user"});
            }}

      

    }

}




