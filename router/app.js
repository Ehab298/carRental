const userRouter = require('../modules/user/user.router')
const VehicleCompanyRouter =require('../modules/VehicleCompany/Company.router')
const BranchRouter =require('../modules/CompanyBranch/CompanyBranch.router')
const VihicleRouter =require('../modules/Vehicle/Vehicle.router')

const bookingRouter =require('../modules/Booking/booking.router')
 const conntactUsRouter=require('../modules/conntactus/Connect.router')

 const VehicleRateRouter=require('../modules/VehicleRate/VehicleRate.router')



module.exports={
    conntactUsRouter,
    userRouter,
    VehicleCompanyRouter,
    BranchRouter,
    VihicleRouter,
    bookingRouter,
     VehicleRateRouter
   
}