const router = require('express').Router();



const {authentications,authorization} = require('../../middleware/authintication');

const  {CompanyRate}  = require('./validation');
const handelValidations = require('../../middleware/handelValidations');

const updateVehicleRateController =require('./Controller/addCompanyRate');




router.post("/updateCompanyRate",authentications(),handelValidations(CompanyRate),updateVehicleRateController)

   
module.exports=router
