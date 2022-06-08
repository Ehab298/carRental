 const router = require('express').Router();
 const multer  = require('multer')
const handelValidations = require('../../middleware/handelValidations');
 const singupController =require('./Controller/signup');
 const singinController =require('./Controller/sigIn');
 const singinAdminController =require('./Controller/adminSigin');
 const updateController =require('./Controller/updateuser');
  const deleteController =require('./Controller/deleteUser');
  const virfiyEmailController = require('./Controller/virfiyEmail');
  const getAllUserBooking = require('./Controller/getuserbooking');
  const getAllOwnerBooking = require('./Controller/owneruserbooking');
  const forgerpassword = require('./Controller/forgetpassword')
//   const Restpassword= require('./Controller/restpassword')
  const{ getone,Restpassword }= require('./Controller/getOneuse');

 const getuserController =require('./Controller/getAlluser');
const { singup,singin,singinAdmin ,restpassword} = require('./validation');
const {authentications,authorization} = require('../../middleware/authintication');
const upload = require('../../middleware/multer');

router.get('/home',authentications(),authorization(['user']),(req, res) =>{
    res.json({ message: `welcome home ${req.User.UserName}` })
})

router.get('/ownerbooking/:id',getAllOwnerBooking)
router.get('/userbooking/:UserID',getAllUserBooking)
router.post('/forgerpassword',forgerpassword)
// router.post('/restpassword',Restpassword)
router.get('/virfiyEmail/:token',virfiyEmailController)
 router.post("/singup",handelValidations(singup),singupController)
 router.post("/singin",handelValidations(singin),singinController)
 router.post("/Adminsingin",handelValidations(singinAdmin),singinAdminController)
 router.get("/getOneuser/:token",getone)
 router.post("/forgetpasswor/:token",Restpassword)
 router.patch("/updateuser/:id",updateController)
 
 router.delete("/deleteOneVehicle/:id",deleteController)
 router.delete("/delete/:id",deleteController)
 
 router.get("/getAllUser",getuserController)

 router.post('/pic',upload.single('image'),(req, res) =>{
     console.log(req.file.filename);
     let imageURL =`http://localhost:3000/pic/${req.file.filename}`
    res.json({ message: `welcome home `,imageURL })
})
    
 module.exports=router