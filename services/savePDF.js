const puppeteer = require('puppeteer');

const savePDF = (x) => {
    const id = x;
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
}

module.exports = {
    savePDF,
  };