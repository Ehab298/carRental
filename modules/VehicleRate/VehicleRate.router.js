const router = require('express').Router();



const {authentications,authorization} = require('../../middleware/authintication');
const getafterDateto = require('./Controller/getafterDateto');
const { VehicleRate } = require('./validation')
const handelValidations = require('../../middleware/handelValidations');
const VehicleRateController =require('./Controller/VehicleRate');
const updateVehicleRateController =require('./Controller/updateVehicleRate');
const getallrate =require('./Controller/getAlluserRate');
router.post("/VehicleRate",authentications(),handelValidations(VehicleRate),VehicleRateController)
router.get("/getAlluserRate",getallrate)

router.get('/userbookingRate/:UserID',getafterDateto)
router.post("/updateVehicleRate",authentications(),handelValidations(VehicleRate),updateVehicleRateController)

   
module.exports=router
