const router = require('express').Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const addVehicleController =require('./Controller/addVehicle');
const getAllVehicleController =require('./Controller/getAllVehicle');
const getOneVehicleController =require('./Controller/getOnevehicle');
const getone =require('./Controller/getOnecar');
const deleteOneVehicleController =require('./Controller/deleteVehicle');

const updatevehicleController =require('./Controller/upDateVehicle');
const  {addVehicle,updateVehicle}  = require('./validations');

const handelValidations = require('../../middleware/handelValidations');
const {authentications,authorization} = require('../../middleware/authintication');
const addCarController = require('./Controller/addcar');
router.post('/addcar', authentications(),authorization(['Admin']),upload.single('image'),addCarController)

router.get("/getAllVehicle",getAllVehicleController)
router.get("/getOneVehicle",getOneVehicleController)

router.delete("/deleteVehicle/:id",authentications(),authorization(['Admin']),deleteOneVehicleController)
router.get("/getOne/:id",getone)
router.patch("/updateOneVehicle/:id",updatevehicleController)

// router.post('/pic',upload.array('image',4),(req, res) =>{
//     console.log(req.file.filename);
//     let imageURL =`http://localhost:3000/pic/${req.file.filename}`
//    res.json({ message: `welcome home `,imageURL })







// })
   
module.exports=router

