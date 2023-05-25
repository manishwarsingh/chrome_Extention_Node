# chrome_Extention_Node
Chrome extension in node , scrape all url from the linked url.


How we can use fro loop in node.js



const listing = await page.$$('.row.test-site');



  for (const list of listing)
  
  
  
  {
   
  
  	title = await list.$eval('h2.site-heading', el => el.innerText.trim())
    
  	console.log(title)
    
  	desc = await list.$eval('p.lead', el => el.innerText.trim())
    
  	console.log(desc)
    
    
  }
# Guide links :
https://medium.com/hackernoon/scraping-the-web-with-node-js-f7da67d2f734

https://github.com/puppeteer/puppeteer/blob/v2.1.0/docs/api.md
