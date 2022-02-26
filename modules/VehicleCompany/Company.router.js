const router =require('express').Router()

const addcompanyController =require('./Controller/addCompany');

const getAllcompanyController  =require('./Controller/getAllCompany');
const getOnecompanyController  =require('./Controller/getOneCompany');
const {authentications,authorization} = require('../../middleware/authintication');




 router.get("/getAllcompany",getAllcompanyController)

 router.get("/getOnecompany/:id",getOnecompanyController)


 router.post("/addcompany",authentications(),addcompanyController)



module.exports=router