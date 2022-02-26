const router =require('express').Router()
const addBranchController =require('./Controller/addBranch');
const getBranchController =require('./Controller/getAllbranch');





router.get("/getAllBranch",getBranchController)

router.post("/addBranch",addBranchController)







module.exports=router