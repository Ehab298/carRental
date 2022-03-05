const  vehicleModel =require('../../../DB/models/Vehicle')

try {
    module.exports = async(req,res)=>{
        const {brand,model,color, year,  VehicleRate,pricePerDay,transmissionType, Car_Seat, airbag, seatbelts, ABS,sunroof,Parking_Sensors,  Radio, Navigation_System, Bluetooth,  Remote_Start, AC,  Music_Player, CC, Extra_Tyre,  Charger,  Fire_Extinguisher, First_Aid_Kit, Smoking_Preferences,companyID} = req.body;
        
        console.log(req.files);
        var images = [];
        req.files.forEach(function(file){
            debugger;
            images.push(file.location);
        });

        const vehicleData= await vehicleModel.insertMany({brand,
            model,color,year,imageURL:images, VehicleRate,pricePerDay,transmissionType, Car_Seat, airbag, seatbelts, ABS,  sunroof, Parking_Sensors,Radio, Navigation_System,Bluetooth,Remote_Start,AC, Music_Player,  CC,  Extra_Tyre,Charger, Fire_Extinguisher, First_Aid_Kit,Smoking_Preferences,companyID})
            res.status(200).json({message:"done",images,vehicleData})
    }
    
    
    
    
} catch (error) {
    console.log(error);
    res.status(200).json({message:"error",error})
}
