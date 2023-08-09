import nodemailer from "nodemailer";
import SMPTransport from "nodemailer-smtp-transport";

const dotenv = require("dotenv");
dotenv.config();

export const smtpEmail = process.env.GOOGLE_EMAIL;
export const pass = process.env.GOOGLE_PASSWORD;

//export const stpmClientId = process.env.CLIENT_ID;
//export const stpmSecrect = process.env.CLIENT_SECRET;

export const transporter = nodemailer.createTransport(
  SMPTransport({
  //service: 'gmail',
   host: "smtp.gmail.com",
   port: 465,
   secure: true,
   // logger: true,
   //requireTLS: true,
    auth: {
      user:smtpEmail,
      pass
    
    },
 
  })
);

export const mailOptions = {
    from: smtpEmail,
    to: smtpEmail
};






// send();

// async function send() {
//     const result = await transporter.sendMail({
//         from: 'flip@gmail.com',
//         to: '      user: "filipuskovicposlovno@gmail.com",        ',
//         subject: 'Hello World',
//         text: 'Hello World'
//     });

//     console.log(JSON.stringify(result, null, 4));
// }

