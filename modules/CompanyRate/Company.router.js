const router = require('express').Router();



const {authentications,authorization} = require('../../middleware/authintication');

const  {CompanyRate}  = require('./validation');
const handelValidations = require('../../middleware/handelValidations');

const updateVehicleRateController =require('./Controller/addCompanyRate');
const getownerbooking =require('./Controller/getCompanyRate');

router.get('/ownerbookingRate/:companyID',getownerbooking)

router.post("/updateCompanyRate/:UserID",handelValidations(CompanyRate),updateVehicleRateController)

   
module.exports=router
