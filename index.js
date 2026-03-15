import{a as f,S as m,i as a}from"./assets/vendor-dNBuWDsd.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const p="55031673-78c5d9f5db54785dbd85479b8",y="https://pixabay.com/api/";function g(e){return f.get(y,{params:{q:e,key:p,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(n=>n.data)}let h=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:120,fadeSpeed:80,preloading:!0});const d=document.querySelector(".gallery"),u=document.querySelector(".loader");function b(e){return`<li>
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
      </li>`}function v(e){return e.map(b).join(`
`)}function L(e){const n=v(e);d.insertAdjacentHTML("beforeend",n),h.refresh()}function S(){d.innerHTML=""}function w(){u.style.display="block"}function l(){u.style.display="none"}const c=document.querySelector(".form");document.querySelector(".gallery");document.querySelector(".loader");c.addEventListener("submit",e=>{e.preventDefault(),w();const s=new FormData(c).get("search-text").trim();if(s===""){a.error({title:"Error",message:"Please enter a search query"}),l();return}S(),console.log(s),g(s).then(o=>{if(console.log(o.hits),l(),o.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(o.hits)}).catch(o=>{l(),console.log(o),a.error({title:"Error",message:`An error occurred while fetching images: ${o.message}`})})});
//# sourceMappingURL=index.js.map
