import{a as h,S as v,i}from"./assets/vendor-KI8m5ffe.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();h.defaults.baseURL="https://pixabay.com";const g=async(r,e)=>{const o={params:{q:r,key:"45695885-da8e33dec9e780ad4c69fe11f",orientation:"horizontal",safesearch:"true",per_page:15,page:e}};return h.get("/api/",o)},b=r=>`
    <li class='gallery-item'>
      <a class='gallery-link' href='${r.largeImageURL}'>
        <img class='gallery-image' src='${r.webformatURL}' alt='${r.tags}' />
      </a>
      <div class='info'>
        <p class='info-item'>
          <b>Likes</b> ${r.likes}
        </p>
        <p class='info-item'>
          <b>Views</b> ${r.views}
        </p>
        <p class='info-item'>
          <b>Comments</b> ${r.comments}
        </p>
        <p class='info-item'>
          <b>Downloads</b> ${r.downloads}
        </p>
      </div>
    </li>
  `,u=document.querySelector("form"),S=document.querySelector("input"),y=document.querySelector(".first"),f=document.querySelector(".second"),l=document.querySelector(".gallery"),p=document.querySelector(".load-button");let n=1;const w=15;let c="";const q=async r=>{try{if(r.preventDefault(),c=S.value.trim(),n=1,!c){i.error({message:"Please enter a search query!",position:"topRight"});return}y.classList.remove("is-hidden");const e=await g(c,n);if(l.innerHTML="",e.data.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u.reset();return}const o=e.data.hits.map(b).join("");l.innerHTML=o,p.classList.remove("is-hidden"),L.refresh()}catch(e){i.error({message:`${e}`,position:"center"})}finally{y.classList.add("is-hidden"),u.reset()}},P=async r=>{try{r.preventDefault(),n++,f.classList.remove("is-hidden");const e=await g(c,n),o=e.data.hits.map(b).join("");l.insertAdjacentHTML("beforeend",o);let t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:2*t.height,behavior:"smooth"}),L.refresh();const s=e.data.total,a=Math.ceil(s/w);if(n>=a)return O.observe(m),p.classList.add("is-hidden"),i.error({message:"We are sorry, but you have reached the end of search results!",position:"center"})}catch(e){i.error({message:`${e}`,position:"center"})}finally{f.classList.add("is-hidden")}},O=new IntersectionObserver((r,e)=>{r.forEach(o=>{o.isIntersecting&&e.disconnect()})},{rootMargin:"0px",threshold:1}),m=document.createElement("div");m.id="scrollObserver";l.appendChild(m);let L=new v(".gallery li a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.8,captionsPosition:"bottom"});u.addEventListener("submit",q);p.addEventListener("click",P);
//# sourceMappingURL=index.js.map
