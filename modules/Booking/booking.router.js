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
router.get("/getALLbooking",getAllbookingController)
router.patch("/updateBooking/:id",updateBookingController)
router.delete("/deleteBooking/:id",deletebookingController)

router.post("/booking",authentications(),handelValidations(addrent),bookingController)
module.exports=router