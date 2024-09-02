import{a as f,S as v,i as o}from"./assets/vendor-KI8m5ffe.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();f.defaults.baseURL="https://pixabay.com";const g=async(r,e)=>{const a={params:{q:r,key:"45695885-da8e33dec9e780ad4c69fe11f",orientation:"horizontal",safesearch:"true",per_page:15,page:e}};return f.get("/api/",a)},b=r=>`
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
  `,u=document.querySelector("form"),S=document.querySelector("input"),h=document.querySelector(".first"),y=document.querySelector(".second"),p=document.querySelector(".gallery"),l=document.querySelector(".load-button");let n=1;const m=15;let c="";const q=async r=>{try{if(r.preventDefault(),c=S.value.trim(),n=1,!c){o.error({message:"Please enter a search query!",position:"topRight"});return}h.classList.remove("is-hidden");const e=await g(c,n);if(p.innerHTML="",e.data.hits.length===0){o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u.reset();return}const a=e.data.hits.map(b).join("");p.innerHTML=a,e.data.hits.length<m?(l.classList.add("is-hidden"),o.error({message:"We are sorry, but you have reached the end of search results!",position:"center"})):l.classList.remove("is-hidden"),L.refresh()}catch(e){o.error({message:`${e}`,position:"center"})}finally{h.classList.add("is-hidden"),u.reset()}},w=async r=>{try{r.preventDefault(),n++,y.classList.remove("is-hidden");const e=await g(c,n),a=e.data.hits.map(b).join("");p.insertAdjacentHTML("beforeend",a);let t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:2*t.height,behavior:"smooth"}),L.refresh();const s=e.data.total,i=Math.ceil(s/m);if(n>=i||e.data.hits.length<m)return l.classList.add("is-hidden"),o.error({message:"We are sorry, but you have reached the end of search results!",position:"center"})}catch(e){o.error({message:`${e}`,position:"center"})}finally{y.classList.add("is-hidden")}};let L=new v(".gallery li a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.8,captionsPosition:"bottom"});u.addEventListener("submit",q);l.addEventListener("click",w);
//# sourceMappingURL=index.js.map
