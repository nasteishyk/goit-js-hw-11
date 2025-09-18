import{S as f,a as m,i as p}from"./assets/vendor-xwsNXkQR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const n=document.querySelector(".gallery"),c=document.querySelector(".loader");function y(o){const r=o.map(({webformatURL:a,largeImageURL:s,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
          <li class="gallery-item">
            <a href="${s}">
              <img src="${a}" alt="${e}" loading="lazy" />
            </a>
            <div class="info">
              <p><b>Likes:</b> ${t}</p>
              <p><b>Views:</b> ${i}</p>
              <p><b>Comments:</b> ${u}</p>
              <p><b>Downloads:</b> ${d}</p>
            </div>
          </li>
        `).join("");n.innerHTML=r,new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function h(){n.innerHTML=""}function g(){c.classList.remove("hidden")}function b(){c.classList.add("hidden")}const L="https://pixabay.com/api/",S="52318112-aedb8ccc797c66be623deef69";function v(o){const r=new URLSearchParams({key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});m.get(L,{params:r}).then(a=>{h(),y(a.data.hits)}).catch(a=>{p.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"})}).finally(()=>{b(),form.reset()})}const l=document.querySelector(".form");l.addEventListener("submit",$);function $(o){o.preventDefault(),g();const r=l.elements["search-text"].value.trim();v(r)}
//# sourceMappingURL=index.js.map
