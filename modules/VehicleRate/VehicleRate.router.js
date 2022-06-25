const router = require('express').Router();



const {authentications,authorization} = require('../../middleware/authintication');
const getafterDateto = require('./Controller/getafterDateto');
const  {VehicleRate}  = require('./Validation');
const handelValidations = require('../../middleware/handelValidations');

const updateVehicleRateController =require('./Controller/updateVehicleRate');

const getrate = require('./Controller/get');

router.get('/userbookingRate/:UserID',getafterDateto)

router.get('/getRate/:VehicleID111',getrate)
router.post("/updateVehicleRate/:UserID",handelValidations(VehicleRate),updateVehicleRateController)

   
module.exports=router
