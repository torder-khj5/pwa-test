if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let d={};const o=e=>i(e,l),c={module:{uri:l},exports:d,require:o};s[l]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-bf4e5af5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-1501609d.js",revision:null},{url:"assets/index-1775dbbf.js",revision:null},{url:"assets/index-6666e23b.js",revision:null},{url:"assets/index-aa0aad04.js",revision:null},{url:"assets/index-ae9a6327.js",revision:null},{url:"assets/index-b87f1ff5.js",revision:null},{url:"assets/index-cab2d093.css",revision:null},{url:"assets/index-d4beff7b.css",revision:null},{url:"assets/index-e7dd45cd.js",revision:null},{url:"assets/index-f2908477.js",revision:null},{url:"assets/index-f99bae73.js",revision:null},{url:"css/offline.css",revision:"167d58cb310f8d1afbee6224f0bb1bab"},{url:"index.html",revision:"a5797169a3d0608eb422b0cc4df3c184"},{url:"mockServiceWorker.js",revision:"4d9b9a6766b036c28723f7c4cd4596d9"},{url:"offline.html",revision:"d09e215b65e8776e0ae384121717835a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/logo-512x512.png",revision:"a99d5c422e40f4b6eb64546791a031a5"},{url:"icons/favicon-128.png",revision:"e3e8067d0439d36dcecb2b3cd7ff2aba"},{url:"icons/apple-touch-icon-152x152.png",revision:"fec816ed209497cac699a55220e5d8e0"},{url:"manifest.webmanifest",revision:"fcffd41ddf2023a11ede7c7b901ed3bb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));