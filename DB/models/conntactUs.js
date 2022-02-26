const mongoose = require('mongoose');
const conntactUsSchema = new mongoose.Schema({
    Message:{type:Array},
    UserID:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
},{
timestamps:true
})

module.exports=mongoose.model("contactUs",conntactUsSchema )