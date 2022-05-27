const userModel = require('../../../DB/models/User');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports = async (req, res) => {

    const { email,password } = req.body;
    const user = await userModel.findOne({ email });
    console.log(user);
    if (!user) {
        res.status(400).json({message:'in-valid  user'})
    } 
    
    else {
        if (!user.confirm) {
             res.status(400).json({ message: "please confirmed email" })
        }else

        {
            const match = await bcrypt.compare(password, user.password);

            if(match) {
                var token = jwt.sign({ id:user._id,role: user.role}, 'shhhhh');
                
                res.status(200).json({message:"done",token,id:user._id, firstName: user.firstName,lastName:user.lastName,phone:user.phone ,email: user.email, role: user.role})
            }
            else{
                res.status(400).json({message:"in-valid  user"});
            }}

      

    }

}
