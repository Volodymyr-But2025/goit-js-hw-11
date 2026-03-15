import{a as m,S as p,i as l}from"./assets/vendor-dNBuWDsd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const y="55031673-78c5d9f5db54785dbd85479b8",g="https://pixabay.com/api/";function h(e){return m.get(g,{params:{q:e,key:y,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}let b=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:120,fadeSpeed:80,preloading:!0});const d=document.querySelector(".gallery"),u=document.querySelector(".loader");function v(e){return`<li>
        <a href="${e.largeImageURL}">
          <div>
            <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
          </div>
          <div class="info">
            <div class="info-item">
              <b>Likes</b>
              <span>${e.likes}</span>
            </div>
            <div class="info-item">
              <b>Views</b>
              <span>${e.views}</span>
            </div>
            <div class="info-item">
              <b>Comments</b>
              <span>${e.comments}</span>
            </div>
            <div class="info-item">
              <b>Downloads</b>
              <span>${e.downloads}</span>
            </div>
          </div>
        </a>
      </li>`}function L(e){return e.map(v).join(`
`)}function S(e){const o=L(e);d.insertAdjacentHTML("beforeend",o),b.refresh()}function q(){d.innerHTML=""}function f(){u.style.display="block"}function a(){u.style.display="none"}const c=document.querySelector(".form");document.querySelector(".gallery");document.querySelector(".loader");c.addEventListener("submit",e=>{e.preventDefault(),f();const s=new FormData(c).get("search-text").trim();if(s===""){l.error({title:"Error",message:"Please enter a search query"}),a();return}q(),console.log(s),h(s).then(n=>{if(console.log(n.hits),a(),n.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}S(n.hits)})});f();a();
//# sourceMappingURL=index.js.map
