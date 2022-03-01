const puppeteer = require('puppeteer');
const Obrf = require("../models/Obrf");
const { savePDF } = require("../services/savePDF");
const { sendLink } = require("../services/sendLink");
const { updateSent } = require("../services/updateSent");
const { updateSigned } = require("../services/updateSigned");

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
  updateSigned(id);
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
  updateSent(id);
  Obrf.findById(id, function (err) {
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

const saveSignature = (req, res) => {
  const id = req.params.id;
  const offerid = id.toString();
  Obrf.findByIdAndUpdate(id, req.body, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/offerletter/" + offerid);
    };
  });
};

const deleteSignature = (req, res) => {
  const id = req.params.id;
  const offerid = id.toString();
  Obrf.findByIdAndUpdate(id, req.body, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/offerletter/" + offerid);
    };
  });
};

module.exports = {
    offerView,
    offerSubmit,
    thankyouView,
    offerSend,
    offerSent,
    saveSignature,
    deleteSignature,
  };