const mongoose = require('mongoose');
const FavoriteListSchema = new mongoose.Schema({

    like:{type:Boolean,default:false},
    UserID:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    VehicleID:{type:mongoose.Schema.Types.ObjectId,ref:"Vehicle"},
})

module.exports=mongoose.model("FavoriteList",FavoriteListSchema )