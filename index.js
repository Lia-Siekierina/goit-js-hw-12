import{i,S as v}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const L="46816597-00495df87fc70f19aecba95fd",d=document.querySelector(".loader");document.querySelector(".load-more-btn");async function b(r,o=1,n=15){const e=`https://pixabay.com/api/?${new URLSearchParams({key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:n})}`;d.style.display="block";try{const t=await fetch(e);if(!t.ok)throw new Error(t.status);const s=await t.json();return d.style.display="none",s.hits.length===0&&i.error({title:"No pictures found",message:"Sorry, there are no images matching your search query. Please try again.",messageColor:"black",messageSize:"14px",position:"topCenter",timeout:2500,closeOnClick:!0}),s}catch(t){console.log(t),d.style.display="none",i.error({title:"Error",message:"Failed to fetch images"})}}const S=new v(".gallery a",{captionData:"alt"});function q(r){const o=r.map(({webformatURL:n,largeImageURL:l,tags:e,likes:t,views:s,comments:h,downloads:g})=>`
                <li class='gallery-item'>
                <a href='${l}'>
                <img src='${n}' alt='${e}'>
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
  <p>${h}</p>
</div>

<div class='info-item'>
  <p class='main'>Downloads</p>
  <p>${g}</p>
</div>
        </div>

                </li> 
                `).join("");p.insertAdjacentHTML("beforeend",o),S.refresh()}const w=document.querySelector(".js-search"),p=document.querySelector(".gallery"),a=document.querySelector(".js-load-more"),m=document.querySelector(".loader");let f="",c=1,u=15;w.addEventListener("submit",r=>{if(r.preventDefault(),p.innerHTML="",f=r.target.elements.search.value.trim(),f===""){i.error({title:"Error",message:"Please enter a search query"});return}c=1,a.classList.add("load-more-hidden"),y()});const y=async()=>{try{m.style.display="block";const r=await b(f,c,u);if(r.hits.length===0){i.info({message:"Sorry, no results found. Try again."}),a.classList.add("load-more-hidden");return}q(r.hits),c+=1,P(),r.hits.length<u||c>Math.ceil(r.totalHits/u)?(a.classList.add("load-more-hidden"),i.info({message:"We are sorry, but you have reached the end of search results."})):a.classList.remove("load-more-hidden")}catch{m.style.display="none",a.classList.add("load-more-hidden"),i.error({title:"Error",message:"Failed to load images"})}finally{m.style.display="none"}};a.addEventListener("click",y);const P=()=>{const r=document.querySelector(".gallery-item");if(r){const o=r.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}};
//# sourceMappingURL=index.js.map
