const puppeteer = require('puppeteer');
const Obrf = require("../models/Obrf");

const savePDF = (x) => {
    const id = x;
    const offerid = id.toString();
    const url = 'http://localhost:3000/offerletter/' + offerid
    const savePath = './files/offerletterfor-' + offerid + '.pdf'
    async function printPDF() {
        const userEmail = await Obrf.findOne({ _id: id })
        .then(function(result){
            const email = result.email_address;
            return email;
        });
        const userPassword = await Obrf.findOne({ _id: id })
        .then(function(result){
            const firstName = result.first_name;
            const lastName = result.last_name;
            const phoneNumber = result.cell_phone;
            let pNmber = phoneNumber.substring(6,10);
            let fName = firstName.substring(0,2);
            let lName = lastName.substring(0,2);
            let pWord = fName + lName + pNmber;
            return pWord;
        });
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(url, {waitUntil: 'networkidle0'});
        await page.type('#email', userEmail );
        await page.type('#password', userPassword );
        await page.click('#submit-button');
        await page.waitForNavigation();

        const pdf = await page.pdf({ 
            path: savePath,
            format: 'A4'
        });
        await browser.close();
        return pdf;
  };
  printPDF();
}

module.exports = {
    savePDF,
  };