
const jwt = require('jsonwebtoken')
const userModel =require('../DB/models/User')

const authentications= () => {
    return async (req, res, next) => {

        const token = req.headers["authorization"]?.split(' ')[1]

       
        if (!token || token == null || token == undefined) {
            res.json({ message: "in-valid token" })
        } else {

            jwt.verify(token, 'shhhhh',async function (err, decoded) {
                if (err) {
                    res.status(400).json({ message: "in-valid signature" })
                } else {
                    req.user = decoded
                    const user= await userModel.findOne({_id:decoded.id})
                    if (!user) {
                        res.status(402).json({ message: "rong user" })
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
            res.status(402).res.json({ message: "not auth user" })

        }
    }
}
module.exports={
    authentications
    ,authorization
}
