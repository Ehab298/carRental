
const bookingModel = require('../../../DB/models/Booking');




module.exports= async(req, res) => {
    const {Pick_upLocation,return_Location,DateFrom,DateTo,VehicleID} = req.body;
    const _id = req.params.id
    const newBooking =  await bookingModel.updateOne({ _id: _id }, {Pick_upLocation,return_Location,DateFrom,DateTo,VehicleID},{new:true}).then(() => {
        res.status(200).json({message:"done"});
    })
   
};