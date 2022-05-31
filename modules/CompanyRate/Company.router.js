const router = require('express').Router();

const addCompanyeRate =require('./Controller/addCompany');

const {authentications,authorization} = require('../../middleware/authintication');

const { addcompanyRate } = require('./validation')
const handelValidations = require('../../middleware/handelValidations');

router.post("/CompanyRate",authentications(),handelValidations(addcompanyRate),addCompanyeRate)



   
module.exports=router
