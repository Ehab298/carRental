const router =require('express').Router()
const addBranchController =require('./Controller/addBranch');
const getBranchController =require('./Controller/getAllbranch');
const getOneBranchController =require('./Controller/getoneBranch');
const updateBranchController =require('./Controller/updateBranch');
const deleteBranchController =require('./Controller/deleteBranch');
const {authentications,authorization} = require('../../middleware/authintication');

const handelValidations = require('../../middleware/handelValidations');
const { addBrach } = require('./validations');

router.get("/getAllBranch",authentications(),getBranchController)

router.post("/addBranch",handelValidations(addBrach),addBranchController)



router.get("/getOneBranch/:id",authentications(),handelValidations(),getOneBranchController)
router.patch("/updateBranch/:id",authentications(),handelValidations(),updateBranchController)
router.delete("/deleteBranch/:id",authentications(),handelValidations(),deleteBranchController)



module.exports=router