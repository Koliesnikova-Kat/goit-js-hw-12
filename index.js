import{a as f,S as L,i}from"./assets/vendor-KI8m5ffe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();f.defaults.baseURL="https://pixabay.com";const h=async(r,t)=>{const o={params:{q:r,key:"45695885-da8e33dec9e780ad4c69fe11f",orientation:"horizontal",safesearch:"true",per_page:15,page:t}};return f.get("/api/",o)},g=r=>`
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
  `,d=document.querySelector("form"),v=document.querySelector("input"),m=document.querySelector(".first"),y=document.querySelector(".second"),u=document.querySelector(".gallery"),p=document.querySelector(".load-button");let n=1;const S=15;let c="";const q=async r=>{try{if(r.preventDefault(),c=v.value.trim(),n=1,!c){i.error({message:"Please enter a search query!",position:"topRight"});return}m.classList.remove("is-hidden");const t=await h(c,n);if(u.innerHTML="",t.data.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d.reset();return}const o=t.data.hits.map(g).join("");u.innerHTML=o,p.classList.remove("is-hidden"),b.refresh()}catch(t){i.error({message:`${t}`,position:"center"})}finally{m.classList.add("is-hidden"),d.reset()}},w=async r=>{try{r.preventDefault(),n++,y.classList.remove("is-hidden");const t=await h(c,n),o=t.data.hits.map(g).join("");u.insertAdjacentHTML("beforeend",o);let e=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:2*e.height,behavior:"smooth"}),b.refresh();const s=t.data.total,a=Math.ceil(s/S);if(n>a)return p.classList.add("is-hidden"),i.error({message:"We are sorry, but you have reached the end of search results!",position:"center"})}catch(t){i.error({message:`${t}`,position:"center"})}finally{y.classList.add("is-hidden")}};let b=new L(".gallery li a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.8,captionsPosition:"bottom"});d.addEventListener("submit",q);p.addEventListener("click",w);
//# sourceMappingURL=index.js.map
