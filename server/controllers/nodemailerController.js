const nodemailer = require('nodemailer');

const { MY_EMAIL, EMAIL_PASSWORD } = process.env

module.exports = {

 autoEmail(req, res, next) {
  const { email } = req.body

  const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
    user: MY_EMAIL,
    pass: EMAIL_PASSWORD // naturally, replace both with your real credentials or an application-specific password
   }
  });
  const mailOptions = {
   from: MY_EMAIL,
   to: email,
   subject: 'You signed in!',
   text: 'Sorry that you forgot your password. Unfortunately we are not set up to help you change it yet. Please create a new account at this time.'
  };
  transporter.sendMail(mailOptions, function (error, info) {
   if (error) {
    console.log(error);
   } else {
    console.log('Email sent: ' + info.response);
   }
  });
  res.status(200)
 }


}
