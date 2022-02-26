const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    UserName:{type:String},
    email:{type:String},
    password:{type:String},
    phone:{type:String}, 
    age:{type:String},
    confirm:{type:Boolean,default:false},
    role:{type:String,default:"User"}
},{
timestamps:true
})

module.exports=mongoose.model("User",userSchema )