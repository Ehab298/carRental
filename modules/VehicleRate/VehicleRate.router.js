const router = require('express').Router();



const {authentications,authorization} = require('../../middleware/authintication');
const getafterDateto = require('./Controller/getafterDateto');
const { VehicleRate } = require('./validation')
const handelValidations = require('../../middleware/handelValidations');

const updateVehicleRateController =require('./Controller/updateVehicleRate');



router.get('/userbookingRate/:UserID',getafterDateto)
router.post("/updateVehicleRate",authentications(),handelValidations(VehicleRate),updateVehicleRateController)

   
module.exports=router
