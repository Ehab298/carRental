const router =require('express').Router()
const addBranchController =require('./Controller/addBranch');
const getBranchController =require('./Controller/getAllbranch');
const getOneBranchController =require('./Controller/getoneBranch');
const updateBranchController =require('./Controller/updateBranch');
const deleteBranchController =require('./Controller/deleteBranch');
const {authentications,authorization} = require('../../middleware/authintication');

const handelValidations = require('../../middleware/handelValidations');
const { addBrach } = require('./validations');

router.get("/getAllBranch",getBranchController)

router.post("/addBranch",handelValidations(addBrach),addBranchController)



router.get("/getOneBranch/:id",getOneBranchController)
router.patch("/updateBranch/:id",updateBranchController)
router.delete("/deleteBranch/:id",deleteBranchController)



module.exports=router