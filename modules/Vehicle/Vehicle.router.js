const router = require('express').Router();
const handelValidations = require('../../middleware/handelValidations');
const addVehicleController =require('./Controller/addVehicle');
const getAllVehicleController =require('./Controller/getAllVehicle');
const getOneVehicleController =require('./Controller/getOnevehicle');
const  addVehicle  = require('./validations');
const upload= require("../../middleware/multer")


router.post("/addVehicle",handelValidations(addVehicle),upload.array('image', 4),addVehicleController)
router.get("/getAllVehicle",getAllVehicleController)
router.get("/getOneVehicle/:id",getOneVehicleController)


// router.post('/pic',upload.array('image',4),(req, res) =>{
//     console.log(req.file.filename);
//     let imageURL =`http://localhost:3000/pic/${req.file.filename}`
//    res.json({ message: `welcome home `,imageURL })
// })
   
module.exports=router

