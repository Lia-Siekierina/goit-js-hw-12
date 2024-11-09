import{i as l,S as g}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const v="46816597-00495df87fc70f19aecba95fd",u=document.querySelector(".loader");document.querySelector(".load-more-btn");function p(r,s){const o=`https://pixabay.com/api/?${new URLSearchParams({key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;u.style.display="block",fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{const t=e.hits;t.length===0&&l.error({title:"No pictures found",message:"Sorry, there are no images matching your search query. Please try again",messageColor:"black",messageSize:"14px",position:"topCenter",timeout:2500,closeOnClick:!0}),u.style.display="none",s(t)}).catch(e=>console.log(e))}const b=new g(".gallery a",{captionData:"alt"});function m(r){const s=r.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:i,comments:y,downloads:h})=>`
                <li class='gallery-item'>
                <a href='${o}'>
                <img src='${a}' alt='${e}'>
                </a>
         <div class='info'>
         
<div class='info-item'>
  <p class='main'>Likes</p>
  <p>${t}</p>
</div>

<div class='info-item'>
  <p class='main'>Views</p>
  <p>${i}</p>
</div>

<div class='info-item'>
  <p class='main'>Comments</p>
  <p>${y}</p>
</div>

<div class='info-item'>
  <p class='main'>Downloads</p>
  <p>${h}</p>
</div>
        </div>

                </li> 
                `).join("");f.innerHTML=s,b.refresh()}const L=document.querySelector(".js-search"),f=document.querySelector(".gallery"),n=document.querySelector(".js-load-more");let S="",c=1,d=15;L.addEventListener("submit",r=>{r.preventDefault(),f.innerHTML="";const s=r.target.elements.search.value;s.trim()!==""&&(p(s,m),q())});const q=async()=>{try{loader.style.display="block";const r=await p(S,c,d);if(loader.style.display="none",r.hits.length===0){l.info({message:"sorry,try again"}),n.style.display="none";return}m(r.hits),c+=1,r.hits.length<d||c>Math.ceil(r.totalHits/d)?(n.style.display="none",l.info({message:"We are sorry, but you have reached the end of search results."})):n.style.display="block"}catch{n.style.display="none",l.error({title:"Error"})}};
//# sourceMappingURL=index.js.map
