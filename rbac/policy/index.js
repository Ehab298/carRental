const roles=require("../../enum/role")
const adminPolice = require("./adminPolicy")
const userPolice = require("./userPolicy")


const opts={
    [roles.AdMIN]:{
        adminPolice
    },
    [roles.USER]:{
        userPolice
    }
}