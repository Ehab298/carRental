const conntactController = require('./Controller/addconntact')
const router =require('express').Router()
const {authentications,authorization} = require('../../middleware/authintication');






router.post("/conntactUs",authentications(),conntactController)

module.exports=router