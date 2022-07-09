var nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
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

  const userName = await Obrf.findOne({ _id: id })
    .then(function(result){
      const name = result.first_name;
      return name;
    });

  const primrayRecruiter = await Obrf.findOne({ _id: id })
    .then(function(result){
      const recrutier = result.placement_recruiter;
      return recrutier;
    });

    
  var mailOptions = {
      from: 'applicationmailbox1860@gmail.com',
      to: userEmail,
      subject: 'Congratulations on your offer ' + userName + '!',
      text: 'Go to: ' + url + ' to sign your offer letter! \n\n Your password will be your first two letters of first name and two letters of last name, and last four digits of your phone number (case sensitive with first letter of each name capitalzied). \n\n For example a John Smith with a phone numner of 510-333-1234 would have a password of "JoSm1234". \n\n If you have any questions please contact your recrutier: ' + primrayRecruiter +'.'
    };
    
  sgMail
    .send(mailOptions)
    .then(() => {
      console.log('Email Sent')
    })
    .catch((error) => {
      console.log(error)
    });
}

module.exports = {
    sendLink,
  };
