const router =require('express').Router()

const {authentications,authorization} = require('../../middleware/authintication');
const bookingController = require('./Controller/Booking');


const getAllbookingController = require('./Controller/getAllbooking');

const getOnebookingController = require('./Controller/getOnebooking');
router.get("/getOnebooking/:id",getOnebookingController)

router.get("/getALLbooking",getAllbookingController)



router.post("/booking",authentications(),bookingController)
module.exports=router