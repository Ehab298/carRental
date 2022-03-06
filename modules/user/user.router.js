 const router = require('express').Router();
 const multer  = require('multer')
const handelValidations = require('../../middleware/handelValidations');
 const singupController =require('./Controller/signup');
 const singinController =require('./Controller/sigIn');
 const updateController =require('./Controller/updateuser');
  const deleteController =require('./Controller/deleteUser');
  const virfiyEmailController = require('./Controller/virfiyEmail');
 const getuserController =require('./Controller/getAlluser');
const { singup,singin } = require('./validation');
const {authentications,authorization} = require('../../middleware/authintication');
const upload = require('../../middleware/multer');

router.get('/home',authentications(),authorization(['user']),(req, res) =>{
    res.json({ message: `welcome home ${req.User.UserName}` })
})

router.get('/virfiyEmail/:token',virfiyEmailController)
 router.post("/singup",handelValidations(singup),singupController)
 router.post("/singin",handelValidations(singin),singinController)
 router.patch("/updateBlog/:id",updateController)
 router.delete("/delete/:id",authentications(),authorization(['adime']),deleteController)
 
 router.get("/getAllUser",getuserController)

 router.post('/pic',upload.single('image'),(req, res) =>{
     console.log(req.file.filename);
     let imageURL =`http://localhost:3000/pic/${req.file.filename}`
    res.json({ message: `welcome home `,imageURL })
})
    
 module.exports=router