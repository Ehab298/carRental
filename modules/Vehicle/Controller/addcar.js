
const { bucket } = require('../../../DB/models/filebase'); 
const  vehicleModel =require('../../../DB/models/Vehicle')
module.exports =async(req,res)=>{
try {
    const file = req.file;
    
console.log(req.file);
    console.log('here0');
    const _comapny = req.User.conpanyId
    const id = req.User.id

    const {brand,model,color, year,Vehicletype,Automatic,manual, doorsNumber,chairsNumber, VehicleRate,pricePerDay,transmissionType, Car_Seat, airbag, seatbelts, ABS,sunroof,Parking_Sensors,  Radio, Navigation_System, Bluetooth,  Remote_Start, AC,  Music_Player, CC, Extra_Tyre,  Charger,  Fire_Extinguisher, First_Aid_Kit, Smoking_Preferences,companyID} = req.body;
    // Check if file is present
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Upload the file to Firebase Cloud Storage
    const fileName = `${Date.now()}-${file.originalname}`;
    const fileUpload = bucket.file(fileName);
    const stream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    stream.on('error', (error) => {
      console.error('Error uploading to Cloud Storage:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });

    stream.on('finish', async() => {
    
        
        const url = await fileUpload.getSignedUrl({
            action: 'read',
            expires: '03-01-2500', // Set an appropriate expiration date
          });
            
          const newCarModel= await vehicleModel.insertMany({brand,
            model,color,year,Vehicletype,doorsNumber,chairsNumber,Automatic,manual, VehicleRate,pricePerDay,transmissionType, Car_Seat, airbag, seatbelts, ABS,  sunroof, Parking_Sensors,Radio, Navigation_System,Bluetooth,Remote_Start,AC, Music_Player,  CC,  Extra_Tyre,Charger, Fire_Extinguisher, First_Aid_Kit,Smoking_Preferences,companyID:_comapny,imageURL: url[0]})
      res.json({ success: true,newCarModel});
    });

    stream.end(file.buffer);
  } catch (error) {
    console.error('Error handling upload request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }}