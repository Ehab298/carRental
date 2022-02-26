const  vehicleModel =require('../../../DB/models/Vehicle')


 module.exports = async(req,res)=>{
    const {brand,model,color,year,pricePerDay,engineType,Car_Seat,airbag,seatbelts
        ,ABS,sunroof,Parking_Sensors,Radio,Navigation_System,Bluetooth,Remote_Start,AC,Music_Player
        ,Extra_Tyre,Charger,Fire_Extinguisher,First_Aid_Kit,CC,
        Smoking_Preferences,companyID} = req.body;
    
    console.log(req.files);
    
 
    const vehicleData= await vehicleModel.insertMany({brand,model,color,year,pricePerDay,imageURL:req.files,engineType,Car_Seat,airbag,seatbelts
        ,ABS,sunroof,Parking_Sensors,Radio,Navigation_System,Bluetooth,Remote_Start,AC,Music_Player
        ,Extra_Tyre,Charger,Fire_Extinguisher,First_Aid_Kit,CC,
        Smoking_Preferences,companyID})
        res.status(200).json({message:"done",vehicleData})
}



