const mongoose = require('mongoose');
const url = process.env.DB_ONLINE_URL

const connecttionDB = async() =>{
    console.log(url);
    return await  mongoose.connect(url).then((result)=>{
        console.log("connecttionDB");
    }).catch((err)=>{
        console.log("fail to connect");
    });
}
module.exports =connecttionDB;