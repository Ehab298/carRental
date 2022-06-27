
const  vehicleModel =require('../../../DB/models/Vehicle')



// const bucket = fbAdmin.storage().bucket('car-rental');
// const result = await bucket.upload(files.image.path, {metadata: {contentType: files.image.type}});

module.exports= async(req, res) => {
    const{brand,model,color, year,Vehicletype,Automatic,manual, doorsNumber,chairsNumber, VehicleRate,pricePerDay,transmissionType, Car_Seat, airbag, seatbelts, ABS,sunroof,Parking_Sensors,  Radio, Navigation_System, Bluetooth,  Remote_Start, AC,  Music_Player, CC, Extra_Tyre,  Charger,  Fire_Extinguisher, First_Aid_Kit, Smoking_Preferences,companyID} = req.body;
    const _id = req.params.id
    let newUser =  await vehicleModel.updateOne({ _id: _id }, {brand,model,color, year,Vehicletype,Automatic,manual, doorsNumber,chairsNumber, VehicleRate,pricePerDay,transmissionType, Car_Seat, airbag, seatbelts, ABS,sunroof,Parking_Sensors,  Radio, Navigation_System, Bluetooth,  Remote_Start, AC,  Music_Player, CC, Extra_Tyre,  Charger,  Fire_Extinguisher, First_Aid_Kit, Smoking_Preferences,companyID},{new:true}).then(() => {
        res.status(200).json({message:"success"});
    })
   
};

