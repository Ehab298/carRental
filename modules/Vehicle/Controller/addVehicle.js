const  vehicleModel =require('../../../DB/models/Vehicle')

try {
    module.exports = async(req,res)=>{
        const {brand,model,color, year,Vehicletype,Automatic,manual, doorsNumber,chairsNumber, VehicleRate,pricePerDay,transmissionType, Car_Seat, airbag, seatbelts, ABS,sunroof,Parking_Sensors,  Radio, Navigation_System, Bluetooth,  Remote_Start, AC,  Music_Player, CC, Extra_Tyre,  Charger,  Fire_Extinguisher, First_Aid_Kit, Smoking_Preferences,companyID} = req.body;
        
        console.log(req.files);doorsNumber,chairsNumber
        var images = [];
        req.files.forEach(function(file){
            ;
            images.push(file.location);
        });

        const vehicleData= await vehicleModel.insertMany({brand,
            model,color,year,Vehicletype,imageURL:images,doorsNumber,chairsNumber,Automatic,manual, VehicleRate,pricePerDay,transmissionType, Car_Seat, airbag, seatbelts, ABS,  sunroof, Parking_Sensors,Radio, Navigation_System,Bluetooth,Remote_Start,AC, Music_Player,  CC,  Extra_Tyre,Charger, Fire_Extinguisher, First_Aid_Kit,Smoking_Preferences,companyID})
            res.status(200).json({message:"done",images,vehicleData})
    }
    
    
    
    
} catch (error) {
    console.log(error);
    res.status(200).json({message:"error",error})
}
