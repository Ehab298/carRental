
const  vehicleModel =require('../../../DB/models/Vehicle')




module.exports= async(req, res) => {
    const {brand,
        model,color,year,imageURL:images, VehicleRate,pricePerDay,transmissionType, Car_Seat, airbag, seatbelts, ABS,  sunroof, Parking_Sensors,Radio, Navigation_System,Bluetooth,Remote_Start,AC, Music_Player,  CC,  Extra_Tyre,Charger, Fire_Extinguisher, First_Aid_Kit,Smoking_Preferences,companyID} = req.body;
    const _id = req.params.id
    let newUser =  await vehicleModel.updateOne({ _id: _id }, {brand,
        model,color,year,imageURL:images, VehicleRate,pricePerDay,transmissionType, Car_Seat, airbag, seatbelts, ABS,  sunroof, Parking_Sensors,Radio, Navigation_System,Bluetooth,Remote_Start,AC, Music_Player,  CC,  Extra_Tyre,Charger, Fire_Extinguisher, First_Aid_Kit,Smoking_Preferences,companyID},{new:true}).then(() => {
        res.status(200).json({message:"done"});
    })
   
};