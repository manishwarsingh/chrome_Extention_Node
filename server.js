const express = require('express');
const puppeteer = require('puppeteer');
const app = express();
const bodyParser = require('body-parser');
var fs = require('fs');
const cors = require('cors');
const port = 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.get('/', async function (req, res) {
  res.send("Welcome");
})
let date_ob = new Date();
app.post('/geturl', async function (req, res) {
  if (req.body.url != "") {
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--enable-automation'
      ]
    });
    const page = await browser.newPage();
    await page.goto(req.body.url);
    // await page.screenshot({ path: 'example.png' });

    var hrefs = await page.$$eval('a', as => as.map(a => a.href));
    console.log("Total no. of links", hrefs.length);
    console.log('hrefs', hrefs);
    let date = ("0" + date_ob.getDate()).slice(-2);
    var json = JSON.stringify(hrefs).split('\\n');
    fs.writeFile(`${date}_output.json`, JSON.stringify(json), function (err) {
      if (err) throw err;
      console.log('complete');
    }
    );
    await browser.close();
    res.send({ status: 200, msg: "data scraped", data: [hrefs] })
  } else {
    res.send({ status: 200, error: "input required" })
  }
  // res.send("Welcome",req);
})

// Listening
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
