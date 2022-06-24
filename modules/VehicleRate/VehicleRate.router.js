const router = require('express').Router();



const {authentications,authorization} = require('../../middleware/authintication');
const getafterDateto = require('./Controller/getafterDateto');
const  {VehicleRate}  = require('./Validation');
const handelValidations = require('../../middleware/handelValidations');

const updateVehicleRateController =require('./Controller/updateVehicleRate');



router.get('/userbookingRate/:UserID',getafterDateto)
router.post("/updateVehicleRate/:UserID",handelValidations(VehicleRate),updateVehicleRateController)

   
module.exports=router
