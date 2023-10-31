const userModel = require('../../../DB/models/User')
const bcrypt = require('bcrypt');
const sendEmail = require("../../../middleware/sendEmail")

var jwt = require('jsonwebtoken');
module.exports =async(req,res,next)=>{

 try{   
    
    const{firstName,lastName,email,password,cpassword, phone,role,conpanyId}= req.body
 const user =await userModel.findOne({email})
 if (user) {
     res.json({message:"there is same email in DB"})
 } else {
     
    bcrypt.hash(password, 8, async function(err, hash) {
        if (err) {
            res.json({message:"hash err"})
        } else {
            const token = jwt.sign({ email}, 'shhhhh');
            const newUser= await userModel.insertMany({firstName,lastName,email,password:hash, phone,role,conpanyId})
          let massage = `<!doctype html>
          <html lang="en-US">
          
          <head>
              <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
              <title>Comfirm Email </title>
              <meta name="description" content="Comfirm Email.">
              <style type="text/css">
                  a:hover {text-decoration: underline !important;}
              </style>
          </head>
          
          <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
              <!--100% body table-->
              <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
                  style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
                  <tr>
                      <td>
                          <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                              align="center" cellpadding="0" cellspacing="0">
                              <tr>
                                  <td style="height:80px;">&nbsp;</td>
                              </tr>
                              <tr>
                                  <td style="text-align:center;">
                                    <a href="https://rakeshmandal.com" title="logo" target="_blank">
                                      <img width="160" src="https://cdn.discordapp.com/attachments/948245722917117992/987429635203694593/img_logo_test_2.png" title="logo" alt="logo">
                                    </a>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="height:20px;">&nbsp;</td>
                              </tr>
                              <tr>
                                  <td>
                                      <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                          style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                          <tr>
                                              <td style="height:40px;">&nbsp;</td>
                                          </tr>
                                          <tr>
                                              <td style="padding:0 35px;">
                                                  <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have
                                                      Tap the button below to confirm your email address.</h1>
                                                  <span
                                                      style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                                  <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                                     click the following link 
                                                  </p>
                                                  <a href="http://localhost:4400/virfiyEmail/${token}"
                                                    style="background:#3320e2;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Verify your email</a>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td style="height:40px;">&nbsp;</td>
                                          </tr>
                                      </table>
                                  </td>
                              <tr>
                                  <td style="height:20px;">&nbsp;</td>
                              </tr>
                              <tr>
                                  <td style="text-align:center;">
                                      <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy;</p>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="height:80px;">&nbsp;</td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
              <!--/100% body table-->
          </body>
          
          </html>`
          await sendEmail(email,massage)
         res.status(200).json({message:"success",newUser});
        }
    });
    }
 }
 catch(err){
    res.status(400).json({message:"unexpected error occured"});
 }
  
}  


//  https://car-rental-eg.herokuapp.com   http://localhost:4400