const puppeteer = require('puppeteer');
const Obrf = require("../models/Obrf");
const { savePDF } = require("../services/savePDF");
const { sendLink } = require("../services/sendLink");

const offerView = (req, res) => {
    const id = req.params.id;
    Obrf.findById(id, function (err, allDetails) {
      if (err) {
        console.log(err);
      } else {
        res.render("offerletter", {
          details: allDetails,
        });
      }
    });
  }

  const thankyouView = (req, res) => {
    const id = req.params.id;
    Obrf.findById(id, function (err, allDetails) {
      if (err) {
        console.log(err);
      } else {
        res.render("thankyou", {
          details: allDetails,
        });
      }
    });
  }

const offerSubmit = (req, res) => {
  const id = req.params.id;
  const offerid = id.toString();
  savePDF(id);
  Obrf.findByIdAndUpdate(id, req.body, function (err, allDetails) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/thankyou/" + offerid);
    };
  });
};

const offerSend = (req, res) => {
  const id = req.params.id;
  const offerid = id.toString();
  sendLink(id);
  Obrf.findById(id, function (err, allDetails) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/sendlink/" + offerid);
    };
  });
};

const offerSent = (req, res) => {
  const id = req.params.id;
  Obrf.findById(id, function (err, allDetails) {
    if (err) {
      console.log(err);
    } else {
      res.render("offersent", {
        details: allDetails,
      });
    }
  });
}

module.exports = {
    offerView,
    offerSubmit,
    thankyouView,
    offerSend,
    offerSent,
  };