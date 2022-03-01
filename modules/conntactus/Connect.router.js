const router =require('express').Router()

const conntactController = require('./Controller/addconntact')
const getallConntactController = require('./Controller/getallConntact')
const getoneConntactController = require('./Controller/getoneConntact')
const updateoneController = require('./Controller/updateone')
const deleteConntactController = require('./Controller/deleteConntact')

const {authentications,authorization} = require('../../middleware/authintication');






router.post("/conntactUs",authentications(),conntactController)
router.get("/conntactUs",authentications(),getallConntactController)
router.get("/getallconntactUs",authentications(),getoneConntactController)
router.delete("/conntactUs",authentications(),updateoneController)
router.patch("/conntactUs",authentications(),deleteConntactController)


module.exports=router