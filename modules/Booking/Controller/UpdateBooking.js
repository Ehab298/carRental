
const bookingModel = require('../../../DB/models/Booking');




module.exports= async(req, res) => {
    const {Pick_upLocation,return_Location,DateFrom,DateTo,status,VehicleID} = req.body;
    const _id = req.params.id
    const newBooking =  await bookingModel.findOneAndUpdate({ _id: _id }, {Pick_upLocation,return_Location,DateFrom,DateTo,status,VehicleID},{new:true})
        res.status(200).json({message:"done",newBooking});
    
   
};