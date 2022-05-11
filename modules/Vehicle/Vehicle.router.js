const router = require('express').Router();
const handelValidations = require('../../middleware/handelValidations');
const addVehicleController =require('./Controller/addVehicle');
const getAllVehicleController =require('./Controller/getAllVehicle');
const getOneVehicleController =require('./Controller/getOnevehicle');
const getone =require('./Controller/getOnecar');
const deleteOneVehicleController =require('./Controller/deleteVehicle');
const ownerController =require('./Controller/getbyowner');
const updatevehicleController =require('./Controller/upDateVehicle');
const  addVehicle  = require('./validations');
const upload= require("../../middleware/filebase")
const {authentications,authorization} = require('../../middleware/authintication');

router.post("/addVehicle",upload.array('image', 4),addVehicleController)
router.get("/getAllVehicle",getAllVehicleController)
router.get("/getOneVehicle",getOneVehicleController)
router.get("/ownerVehicle/:id",ownerController)
router.delete("/deleteVehicle/:id",authentications(),authorization(['Admin']),deleteOneVehicleController)
router.get("/getOne/:id",getone)
router.patch("/updateOneVehicle/:id",authentications(),authorization(['Admin']),updatevehicleController)

// router.post('/pic',upload.array('image',4),(req, res) =>{
//     console.log(req.file.filename);
//     let imageURL =`http://localhost:3000/pic/${req.file.filename}`
//    res.json({ message: `welcome home `,imageURL })







// })
   
module.exports=router

