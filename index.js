import{i,S as L}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const S="46816597-00495df87fc70f19aecba95fd",d=document.querySelector(".loader");document.querySelector(".load-more-btn");async function b(r,o=1,l=15){const e=`https://pixabay.com/api/?${new URLSearchParams({key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:l})}`;d.style.display="block";try{const t=await fetch(e);if(!t.ok)throw new Error(t.status);const s=await t.json();return d.style.display="none",s.hits.length===0&&i.error({title:"No pictures found",message:"Sorry, there are no images matching your search query. Please try again.",messageColor:"black",messageSize:"14px",position:"topCenter",timeout:2500,closeOnClick:!0}),s}catch(t){console.log(t),d.style.display="none",i.error({title:"Error",message:"Failed to fetch images"})}}const q=new L(".gallery a",{captionData:"alt"});function w(r){const o=r.map(({webformatURL:l,largeImageURL:n,tags:e,likes:t,views:s,comments:g,downloads:v})=>`
                <li class='gallery-item'>
                <a href='${n}'>
                <img src='${l}' alt='${e}'>
                </a>
         <div class='info'>
         
<div class='info-item'>
  <p class='main'>Likes</p>
  <p>${t}</p>
</div>

<div class='info-item'>
  <p class='main'>Views</p>
  <p>${s}</p>
</div>

<div class='info-item'>
  <p class='main'>Comments</p>
  <p>${g}</p>
</div>

<div class='info-item'>
  <p class='main'>Downloads</p>
  <p>${v}</p>
</div>
        </div>

                </li> 
                `).join("");y.innerHTML=o,q.refresh()}const P=document.querySelector(".js-search"),y=document.querySelector(".gallery"),a=document.querySelector(".js-load-more"),m=document.querySelector(".loader");let f="",c=1,u=15;P.addEventListener("submit",r=>{if(r.preventDefault(),y.innerHTML="",f=r.target.elements.search.value.trim(),f===""){i.error({title:"Error",message:"Please enter a search query"});return}c=1,a.classList.add("load-more-hidden"),h()});const p=()=>{const r=document.querySelector(".gallery-item");if(r){const o=r.getBoundingClientRect().height;console.log("Scrolling by:",o*4),setTimeout(()=>{window.scrollBy({top:o*2,behavior:"smooth"}),console.log("Scrolled successfully")},2e3)}else console.log("No gallery items found for scrolling")},h=async()=>{try{m.style.display="block";const r=await b(f,c,u);if(m.style.display="none",r.hits.length===0){i.info({message:"Sorry, no results found. Try again."}),a.classList.add("load-more-hidden");return}w(r.hits),p(),c+=1,c>1&&p(),r.hits.length<u||c>Math.ceil(r.totalHits/u)?(a.classList.add("load-more-hidden"),i.info({message:"We are sorry, but you have reached the end of search results."})):a.classList.remove("load-more-hidden")}catch{m.style.display="none",a.classList.add("load-more-hidden"),i.error({title:"Error",message:"Failed to load images"})}};a.addEventListener("click",h);
//# sourceMappingURL=index.js.map
