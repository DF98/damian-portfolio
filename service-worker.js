"use strict";var precacheConfig=[["/damian-portfolio/index.html","dd134bfe4ebb36aa92e186345a4b3dec"],["/damian-portfolio/static/css/main.7d1aa760.css","36547503ea60153b3cbdc9a84aca33b5"],["/damian-portfolio/static/js/0.430ace57.chunk.js","a2c122f5f907d9b385a947b85135b9ed"],["/damian-portfolio/static/js/main.d0e7d68f.js","9f45f76179faa436dbf18a0f30cb7149"],["/damian-portfolio/static/media/C++.f278be79.png","f278be7973516129af9e64d45a0c6f4d"],["/damian-portfolio/static/media/adecco_amazon_logo.dc1764dc.png","dc1764dcdd5d39cbe855ef617f908ee7"],["/damian-portfolio/static/media/cake-logo.490241b3.svg","490241b36d0641f951b4fa3e94d3c53a"],["/damian-portfolio/static/media/code.4ee9ace3.jpg","4ee9ace351404675b6dddb725ec8bceb"],["/damian-portfolio/static/media/experience-image.8784cb96.jpg","8784cb962b0593b5efb51100b12ec2ed"],["/damian-portfolio/static/media/linkedin-profile-img.0e7cd2ba.jfif","0e7cd2bac9819bb32734faef0aec19a1"],["/damian-portfolio/static/media/logo.06e73328.svg","06e733283fa43d1dd57738cfc409adbd"],["/damian-portfolio/static/media/project_planning.5cae4e0c.jpg","5cae4e0cda5f102eae9dbcd310124fa3"],["/damian-portfolio/static/media/serco_ATO_logo.a7d964c3.png","a7d964c3b7ff119dc89d1c06044fc13f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/damian-portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});