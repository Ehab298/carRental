const router =require('express').Router()

const {authentications,authorization} = require('../../middleware/authintication');
const bookingController = require('./Controller/Booking');
const getAllbookingController = require('./Controller/getAllbooking');
const getOnebookingController = require('./Controller/getOnebooking');
const updateBookingController = require('./Controller/UpdateBooking');
const deletebookingController = require('./Controller/deleteBooking');

const handelValidations = require('../../middleware/handelValidations');

const  {addrent}  = require('./validations');

router.get("/getOnebooking/:id",getOnebookingController)
router.get("/getALLbooking",authentications(),getAllbookingController)
router.patch("/updateBooking/:id",authentications(),updateBookingController)
router.delete("/deleteBooking/:id",authentications(),deletebookingController)

router.post("/booking",bookingController)
module.exports=router