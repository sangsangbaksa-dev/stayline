var V='stayline-v10',F=['./','index.html','theme.js','style.css','core.js','i18n.js','app.js','manifest.json','../config.js','cloud-i18n.js','cloud-sync.js','cloud-panel.js','../icon.svg'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(F)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==V}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
/* Cache only same-origin successful GET responses. Leave /api (licence checks) and other origins (cloud backup) to the network, and never store a failed response. icon.svg is in the install list so the icon can load offline. */
self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET')return;
  var url=new URL(e.request.url);
  if(url.origin!==self.location.origin)return;
  if(url.pathname.indexOf('/api/')!==-1)return;
  e.respondWith(fetch(e.request).then(function(r){
    if(r.ok&&r.type==='basic'){var c=r.clone();caches.open(V).then(function(x){x.put(e.request,c)});}
    return r;
  }).catch(function(){return caches.match(e.request)}));
});
