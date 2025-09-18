import{a as f,S as h,i as c}from"./assets/vendor-BSTwZ_tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",p="52318112-aedb8ccc797c66be623deef69";function y(i){const r=new URLSearchParams({key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return f.get(m,{params:r}).then(o=>{if(!o.data.hits||o.data.hits.length===0)throw new Error;return o})}const l=document.querySelector(".gallery"),d=document.querySelector(".loader"),g=new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function b(i){l.innerHTML=i.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:a,downloads:u})=>`
          <li class="gallery-item">
            <a href="${o}">
              <img src="${r}" alt="${s}" loading="lazy" />
            </a>
            <div class="info">
              <p><b>Likes:</b> ${e}</p>
              <p><b>Views:</b> ${t}</p>
              <p><b>Comments:</b> ${a}</p>
              <p><b>Downloads:</b> ${u}</p>
            </div>
          </li>
        `).join(""),g.refresh()}function L(){l.innerHTML=""}function w(){d.classList.remove("hidden")}function S(){d.classList.add("hidden")}const n=document.querySelector(".form");n.addEventListener("submit",v);function v(i){i.preventDefault();const r=n.elements["search-text"].value.trim();if(r===""){c.show({message:"Fill in the search bar!",color:"red",position:"topRight"});return}L(),w(),y(r).then(o=>{b(o.data.hits)}).catch(()=>{c.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"})}).finally(()=>{S(),n.reset()})}
//# sourceMappingURL=index.js.map
