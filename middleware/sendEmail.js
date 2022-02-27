const nodemailer = require("nodemailer");
async function sendEmail (dest,message){
  try{
    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
          user: process.env.GMAIL, // generated ethereal user
          pass: process.env.PASSWORD, // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: `"Ehab 👻" <${process.env.GMAIL}>`, // sender address
        to: dest, // list of receivers
        subject: "Car_Rentai ✔", // Subject line
        text: "Hello world?", // plain text body
        html:message , // html body
      });
    }
    catch(err){
      throw err;
    }
}

module.exports=sendEmail