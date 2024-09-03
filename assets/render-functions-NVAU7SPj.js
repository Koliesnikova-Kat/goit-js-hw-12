import{a as c}from"./vendor-gJp-_g1P.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com";const n=async(r,s)=>{const a={params:{q:r,key:"45695885-da8e33dec9e780ad4c69fe11f",orientation:"horizontal",safesearch:"true",per_page:15,page:s}};return c.get("/api/",a)},f=r=>`
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
  `;export{f as c,n as f};
//# sourceMappingURL=render-functions-NVAU7SPj.js.map
