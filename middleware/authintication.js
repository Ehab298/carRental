
const jwt = require('jsonwebtoken')
const userModel =require('../DB/models/User')
const authentications= () => {
    return async (req, res, next) => {
        const token = req.headers["authorization"]
        if (!token || token == null || token == undefined) {
            res.json({ message: "in-valid token" })
        } else {
                jwt.verify(token, 'shhhhh',async function (err, decoded) {
                if (err) {
                    res.json({ message: "in-valid signature" })
                } else {
                    req.user = decoded
                    const user= await userModel.findOne({_id:decoded.id})
                    if (!user) {
                        res.json({ message: "rong user" })
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
            res.status(402).json({ message: "not auth user" })

        }
    }
}
module.exports={
    authentications
    ,authorization
}
