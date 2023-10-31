const  vehicleModel =require('../../../DB/models/Vehicle')
    
module.exports = async(req,res)=>{
    try {
        console.log('here0');
        const _comapny = req.User.conpanyId
        const id = req.User.id
     

        const {brand,model,color, year,Vehicletype,Automatic,manual, doorsNumber,chairsNumber, VehicleRate,pricePerDay,transmissionType, Car_Seat, airbag, seatbelts, ABS,sunroof,Parking_Sensors,  Radio, Navigation_System, Bluetooth,  Remote_Start, AC,  Music_Player, CC, Extra_Tyre,  Charger,  Fire_Extinguisher, First_Aid_Kit, Smoking_Preferences,companyID} = req.body;
       console.log('here');
        var image = [];
        if(req.files == null || req.files.length == 0)
            res.status(400).json({message:"You must add files"});
        else{
            console.log('here1');
            req.files.forEach(function(file){
                if(file?.location !=null)
                image.push(file.location);
            });
            

            const vehicleData= await vehicleModel.insertMany({brand,
                model,color,year,Vehicletype,imageURL:image,doorsNumber,chairsNumber,Automatic,manual, VehicleRate,pricePerDay,transmissionType, Car_Seat, airbag, seatbelts, ABS,  sunroof, Parking_Sensors,Radio, Navigation_System,Bluetooth,Remote_Start,AC, Music_Player,  CC,  Extra_Tyre,Charger, Fire_Extinguisher, First_Aid_Kit,Smoking_Preferences,companyID})
            res.status(200).json({message:"success",image,vehicleData})
        }
    } 
    catch (error) {
        console.log(error);
        res.status(400).json({message:"error",error})
    }        
}    
