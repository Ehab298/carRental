
const jwt = require('jsonwebtoken')
const userModel =require('../DB/models/User')

const authentications= () => {
    return async (req, res, next) => {

        const token = req.headers["authorization"]?.split(' ')[1]

       
        if (!token || token == null || token == undefined) {
            res.json({ error: "in-valid token" })
        } else {

            jwt.verify(token, 'shhhhh',async function (err, decoded) {
                if (err) {
                    res.status(400).json({ error: "in-valid signature" })
                } else {
                    req.user = decoded
                    const user= await userModel.findOne({_id:decoded.id})
                    if (!user) {
                        res.status(400)({error:"rong user"})
                    }
                    else{ 
                        req.User=user
                        next()
                    }
                }


            });

        }
    }
}

const authorization= (data) => {
    return async (req, res, next) => {

        if (data.includes(req.user.role)) {
            next()
        } else {
            res.json({ error: "not auth user" })

        }
    }
}
module.exports={
    authentications
    ,authorization
}
