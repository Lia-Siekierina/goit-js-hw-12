import{i as p,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m="46816597-00495df87fc70f19aecba95fd",a=document.querySelector(".loader");function d(o,r){const s=`https://pixabay.com/api/?${new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;a.style.display="block",fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{const t=e.hits;t.length===0&&p.error({title:"No pictures found",message:"Sorry, there are no images matching your search query. Please try again",messageColor:"black",messageSize:"14px",position:"topCenter",timeout:2500,closeOnClick:!0}),a.style.display="none",r(t)}).catch(e=>console.log(e))}const h=new f(".gallery a",{captionData:"alt"});function y(o){const r=o.map(({webformatURL:n,largeImageURL:s,tags:e,likes:t,views:i,comments:l,downloads:u})=>`
                <li class='gallery-item'>
                <a href='${s}'>
                <img src='${n}' alt='${e}'>
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
  <p>${l}</p>
</div>

<div class='info-item'>
  <p class='main'>Downloads</p>
  <p>${u}</p>
</div>
        </div>

                </li> 
                `).join("");c.innerHTML=r,h.refresh()}const g=document.querySelector(".js-search"),c=document.querySelector(".gallery");g.addEventListener("submit",o=>{o.preventDefault(),c.innerHTML="";const r=o.target.elements.search.value;r.trim()!==""&&d(r,y)});
//# sourceMappingURL=index.js.map
