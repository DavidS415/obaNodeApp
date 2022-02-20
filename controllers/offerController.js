const puppeteer = require('puppeteer')
const Obrf = require("../models/Obrf");

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
  const url = 'http://localhost:3000/offerletter/' + offerid
  const savePath = './files/offerletterfor-' + offerid + '.pdf'
  async function printPDF() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle0'});
    const pdf = await page.pdf({ 
      path: savePath,
      format: 'A4'
    });
    await browser.close();
    return pdf;
  };
  printPDF();
  Obrf.findByIdAndUpdate(id, req.body, function (err, allDetails) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/thankyou/" + offerid);
    };
  });
};

module.exports = {
    offerView,
    offerSubmit,
    thankyouView,
  };