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
