const express = require('express')
const cors = require('cors'); 
const app = express();
app.use(cors());
require('dotenv').config()
const multer  = require('multer')

app.use(express.json())
app.set('view engine', 'ejs');
port=process.env.PORT
app.use('/Uploads',express.static('Uploads'))
const connecttionDB =require('./DB/dbConnection')

app.use(express.urlencoded({ extended: true }));
const {userRouter,
    VehicleCompanyRouter,
    BranchRouter,
    VihicleRouter,
    CompanyRateRouter,
    bookingRouter,
    conntactUsRouter,
    VehicleRateRouter
  
    } = require('./router/app')

app.use(userRouter, VehicleCompanyRouter,
    BranchRouter,
    VihicleRouter,
    CompanyRateRouter,
    bookingRouter,
    conntactUsRouter,
    VehicleRateRouter
  
    )
    app.get('/',(req, res) =>{
       res.send('hi iii')
   })

app.use('./Uploads',express.static('Uploads'))
connecttionDB()
app.listen(port,()=>{
    console.log(`isrun............${port}`);
})