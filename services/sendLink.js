var nodemailer = require('nodemailer');
const Obrf = require("../models/Obrf");

async function sendLink (x) {
  const id = x;
  const offerid = id.toString();
  const url = 'http://localhost:3000/offerletter/' + offerid;

  const userEmail = await Obrf.findOne({ _id: id })
    .then(function(result){
      const email = result.email_address;
      return email;
    });

  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'applicationmailbox1860@gmail.com',
        pass: 'P@ssword4212'
      }
    });
    
  var mailOptions = {
      from: 'applicationmailbox1860@gmail.com',
      to: userEmail,
      subject: 'Congratulations on your offer!',
      text: 'Go to: ' + url + ' to sign your offer letter!'
    };
    
  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}

module.exports = {
    sendLink,
  };
