var nodemailer = require('nodemailer');
const Obrf = require("../models/Obrf");

const sendLink = (x) => {
    var id = x;
    const offerid = id.toString();
    const url = 'http://localhost:3000/offerletter/' + offerid
    
    let returnEmail = function(data) {
        return Obrf.findById(data, 'email_address').then(email_address => {return email_address});
    }

    let sendToEmail = returnEmail(id);
    console.log(sendToEmail);

    sendToEmail.then(function(result) {
        const email = result.email_address;
        console.log(email);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'applicationmailbox1860@gmail.com',
              pass: 'P@ssword4212'
            }
          });
          
          var mailOptions = {
            from: 'applicationmailbox1860@gmail.com',
            to: email,
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
    });
};

module.exports = {
    sendLink,
  };
