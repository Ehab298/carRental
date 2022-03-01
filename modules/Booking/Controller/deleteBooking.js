
const bookingModel = require('../../../DB/models/Booking');


module.exports =async (req, res) => {
    const _id = req.params.id;
    await bookingModel.deleteMany({_id}).then(()=> res.status(200).json({message:'success'}))

};