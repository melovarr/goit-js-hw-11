import{a}from"./assets/vendor-DUaI4Qp0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const n="49624425-89d18311d8423019c2709bd63",d=document.querySelector(".js-name-input");document.querySelector(".js-form");const u=document.querySelector(".gallery");m();function m(){a(`https://pixabay.com/api/?key=${n}&q=${d.value}&image-type=photo&orientation=horizontal&safesearch=true`).then(s=>{console.log(s.data.hits),u.insertAdjacentHTML("beforeend",p(s.data.hits))}).catch(s=>console.log(s.message))}function p(s){return s.map(({webformatURL:r,largeImageURL:c,tags:l,likes:e,views:t,comments:i,downloads:o})=>`<li class="gallery-item">
  <a class="gallery-link" href="${c}">
      <img class="gallery-image" src="${r}" alt="${l}"/>
<ul class="description">
<li class="descr-item"><p class="descr-item-title">Likes</p><p class="descr-item-value">${e}</p></li>
<li class="descr-item"><p class="descr-item-title">Views</p><p class="descr-item-value">${t}</p></li>
<li class="descr-item"><p class="descr-item-title">Comments</p><p class="descr-item-value">${i}</p></li>
<li class="descr-item"><p class="descr-item-title">Downloads</p><p class="descr-item-value">${o}</p></li>
</ul>
    </a>
    </li>`).join("")}
//# sourceMappingURL=index.js.map
