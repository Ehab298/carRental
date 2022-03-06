const router =require('express').Router()

const addcompanyController =require('./Controller/addCompany');

const getAllcompanyController  =require('./Controller/getAllCompany');
const getOnecompanyController  =require('./Controller/getOneCompany');
const {authentications,authorization} = require('../../middleware/authintication');

const deleteOnecompanyController =require('./Controller/deleteCompany');
const updatecompanyController =require('./Controller/updateCompany');


 router.get("/getAllcompany",getAllcompanyController)

 router.get("/getOnecompany/:id",getOnecompanyController)


 router.post("/addcompany",authentications(),addcompanyController)
 router.delete("/deleteOneCompany/:id",deleteOnecompanyController)
 router.patch("/updateOneCompany/:id",updatecompanyController)


module.exports=router