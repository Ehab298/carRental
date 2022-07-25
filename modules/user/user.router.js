 const router = require('express').Router();
 const multer  = require('multer')
const handelValidations = require('../../middleware/handelValidations');
 const singupController =require('./Controller/signup');
 const singinController =require('./Controller/sigIn');
 const singinAdminController =require('./Controller/adminSigin');
 const updateController =require('./Controller/updateuser');
 const deleteController =require('./Controller/deleteUser');
  const getownerbooking =require('./Controller/owner');
  const virfiyEmailController = require('./Controller/virfiyEmail');
  const getAllUserBooking = require('./Controller/getuserbooking');
  const forgerpassword = require('./Controller/forgetpassword')
  const ownerVehicleController = require('./Controller/Vehicleowner')
//   const Restpassword= require('./Controller/restpassword')
  const{ getone,Restpassword }= require('./Controller/getOneuse');

 const getuserController =require('./Controller/getAlluser');
 const getUserbyGmailController =require('./Controller/getUserbyGmail');
const { singup,singin,singinAdmin ,restpassword,updateuser} = require('./validation');
const {authentications,authorization} = require('../../middleware/authintication');
const upload = require('../../middleware/multer');
const { required } = require('joi');

router.get('/home',authentications(),authorization(['user']),(req, res) =>{
    res.json({ message: `welcome home ${req.User.UserName}` })
})


router.get('/userbooking/:UserID',getAllUserBooking)
router.post('/forgerpassword',forgerpassword)
// router.post('/restpassword',Restpassword)
router.get('/virfiyEmail/:token',virfiyEmailController)
 router.post("/singup",handelValidations(singup),singupController)
 router.post("/singin",handelValidations(singin),singinController)
 router.post("/Adminsingin1",handelValidations(singinAdmin),singinAdminController)
 router.get("/getOneuser/:token",getone)
 router.post("/restpasswor",handelValidations(restpassword),Restpassword)
 router.patch("/updateuser/:id",handelValidations(updateuser),updateController)
 
 router.delete("/deleteOneVehicle/:id",deleteController)
 router.delete("/delete/:id",deleteController)
 router.get('/ownerbooking/:companyID',getownerbooking)
 router.get("/ownerVehicle/:id",ownerVehicleController)
 router.get("/getAllUser",getuserController)
 router.get("/getUserbyGmail/:email",getUserbyGmailController)

 router.post('/pic',upload.single('image'),(req, res) =>{
     console.log(req.file.filename);
     let imageURL =`http://localhost:3000/pic/${req.file.filename}`
    res.json({ message: `welcome home `,imageURL })
})
    
 module.exports=router