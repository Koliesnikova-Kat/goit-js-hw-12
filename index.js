import{i as l,S as d}from"./assets/vendor-B07T6_gy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="https://pixabay.com",m=t=>{const s=new URLSearchParams({q:t,key:"45695885-da8e33dec9e780ad4c69fe11f",orientation:"horizontal",safesearch:"true",per_page:30});return fetch(`${p}/api/?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},f=t=>`
    <li class='gallery-item'>
      <a class='gallery-link' href='${t.largeImageURL}'>
        <img class='gallery-image' src='${t.webformatURL}' alt='${t.tags}' />
      </a>
      <div class='info'>
        <p class='info-item'>
          <b>Likes</b> ${t.likes}
        </p>
        <p class='info-item'>
          <b>Views</b> ${t.views}
        </p>
        <p class='info-item'>
          <b>Comments</b> ${t.comments}
        </p>
        <p class='info-item'>
          <b>Downloads</b> ${t.downloads}
        </p>
      </div>
    </li>
  `,n=document.querySelector("form"),y=document.querySelector("input"),c=document.querySelector(".loader"),u=document.querySelector(".gallery"),h=t=>{t.preventDefault();const s=y.value.trim();if(!s){l.error({message:"Please enter a search query!",position:"topRight"});return}c.classList.remove("is-hidden"),m(s).then(o=>{if(u.innerHTML="",o.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.reset();return}const a=o.hits.map(f).join("");u.innerHTML=a,new d(".gallery li a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.8,captionsPosition:"bottom"}).refresh()}).catch(o=>{console.log(o)}).finally(()=>{c.classList.add("is-hidden"),n.reset()})};n.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
