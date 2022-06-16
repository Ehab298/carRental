const router = require('express').Router();



const {authentications,authorization} = require('../../middleware/authintication');

const { VehicleRate } = require('./validation')
const handelValidations = require('../../middleware/handelValidations');
const VehicleRateController =require('./Controller/VehicleRate');
const getallrate =require('./Controller/getAlluserRate');
router.post("/VehicleRate",authentications(),handelValidations(VehicleRate),VehicleRateController)
router.get("/getAlluserRate",getallrate)



   
module.exports=router
