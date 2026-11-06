const assert=require('node:assert/strict');
module.exports=async(page,base)=>{
 await page.addInitScript(()=>localStorage.setItem('stayline.v1',JSON.stringify({v:1,pro:true,lang:'en',active:'x',trackers:[{id:'x',name:'Travel',rule:{kind:'rolling',limit:90,window:180},trips:[{id:'a',from:'2026-01-01',to:'2026-01-03',place:'서울'},{id:'b',from:'2026-02-01',to:'2026-02-03',place:'東京'}]}]})));
 await page.goto(base+'/app/'); await page.fill('#trip-search','서울');
 assert.equal(await page.locator('.trips li').count(),1); assert.ok((await page.locator('.trip-count').textContent()).includes('1 of 2'));
 await page.fill('#trip-search','missing'); assert.equal(await page.locator('.trips li').count(),0);
 await page.locator('.trip-empty button').click(); assert.equal(await page.locator('.trips li').count(),2);
 await page.selectOption('#trip-sort','oldest'); assert.ok((await page.locator('.trips li').first().textContent()).includes('서울'));
 await page.fill('#p-arrive','2026-12-01'); await page.fill('#p-days','3'); await page.click('#p-review');
 assert.equal(await page.inputValue('#f-from'),'2026-12-01'); assert.equal(await page.inputValue('#f-to'),'2026-12-03');
 await page.locator('dialog button[type="button"]').click();
 assert.equal(await page.evaluate(()=>JSON.parse(localStorage['stayline.v1']).trackers[0].trips.length),2);
};
