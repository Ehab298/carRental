const  RentModel =require('../../../DB/models/Booking')
const userModel = require("../../../DB/models/User")
const car = require("../../../DB/models/Vehicle")
 module.exports = async(req,res)=>{
    const {Pick_upLocation,return_Location,DateFrom,DateTo,message,VehicleID,status} = req.body;
    
        let overlappedRent = await RentModel.find({VehicleID:VehicleID, DateFrom: { $lte: DateTo }, DateTo: { $gte: DateFrom } }).select();
        //start date > today date && start date <= from date   
        if(new Date(DateFrom) < new Date() || new Date(DateFrom) > new Date(DateTo))
            res.json({message:"Date from not smaller than Date To or Date From not larger than Current Date"});
        //get overlaped rents, (StartA <= EndB) and (EndA >= StartB)
        else if(overlappedRent.length > 0)
        res.json({message:`Vehicle already rentet in this period,From ${overlappedRent[0].DateFrom.toISOString()} TO ${overlappedRent[0].DateTo.toISOString()}`});  
        else{

            let data = await car.find({_id:VehicleID})

            const Rend= await RentModel.insertMany({Pick_upLocation,return_Location,DateFrom,DateTo,message,status,VehicleID,UserID: req.User.id,comapnyID:data[0].companyID}).populate('UserID')
            res.status(200).json({message:"done",Rend});
       
       
                       
         }
}


    // dateFrom <= datato or datato >= datafrom
    // 
    // A-dateFrom= 1  
    // B-dateFrom= 10
    // A-datato = 15 
    // B-datato =  20 
    // lte 1<= 15 T
    // gte 10>= 20 F err 
    //
